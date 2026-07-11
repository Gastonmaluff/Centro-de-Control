import { describe, expect, it } from "vitest";
import { BackupCheckError, buildBackupHealth, type BackupConfig, type FirestoreBackupApiResult } from "../backups";

const config: BackupConfig = {
  provider: "firestore",
  projectId: "lucca-park",
  databaseId: "(default)",
  expectedFrequency: "auto",
  enabled: true,
};

const database = "projects/lucca-park/databases/(default)";
const now = new Date("2026-07-10T12:00:00.000Z");

function daily(snapshotTime = "2026-07-10T04:00:00.000Z"): FirestoreBackupApiResult {
  return {
    schedules: [{ name: "daily", retention: "604800s", dailyRecurrence: {}, createTime: "2026-07-01T00:00:00.000Z" }],
    backups: [{ name: "backup", database, snapshotTime, expireTime: "2026-07-17T04:00:00.000Z", state: "READY" }],
  };
}

function weekly(snapshotTime = "2026-07-06T04:00:00.000Z"): FirestoreBackupApiResult {
  return {
    schedules: [{ name: "weekly", retention: "1209600s", weeklyRecurrence: { day: "MONDAY" }, createTime: "2026-06-01T00:00:00.000Z" }],
    backups: [{ name: "backup", database, snapshotTime, expireTime: "2026-07-20T04:00:00.000Z", state: "READY" }],
  };
}

it("marks daily READY backups inside 36 hours as healthy", () => {
  const health = buildBackupHealth({ config, apiResult: daily(), now });
  expect(health.status).toBe("healthy");
  expect(health.scheduleType).toBe("daily");
  expect(health.retentionSeconds).toBe(604800);
  expect(health.latestBackupState).toBe("READY");
});

it("marks weekly READY backups inside 8 days as healthy", () => {
  const health = buildBackupHealth({ config, apiResult: weekly(), now });
  expect(health.status).toBe("healthy");
  expect(health.scheduleType).toBe("weekly");
  expect(health.scheduleDay).toBe("MONDAY");
});

it("marks CREATING backups as warning", () => {
  const apiResult = daily();
  apiResult.backups[0].state = "CREATING";
  const health = buildBackupHealth({ config, apiResult, now });
  expect(health.status).toBe("warning");
  expect(health.message).toContain("proceso");
});

it("marks NOT_AVAILABLE backups as error", () => {
  const apiResult = daily();
  apiResult.backups[0].state = "NOT_AVAILABLE";
  const health = buildBackupHealth({ config, apiResult, now });
  expect(health.status).toBe("error");
  expect(health.errorCode).toBe("not_available");
});

it("uses not_configured only after a successful query with no schedules", () => {
  const health = buildBackupHealth({ config, apiResult: { schedules: [], backups: [] }, now });
  expect(health.status).toBe("not_configured");
  expect(health.connectionStatus).toBe("connected");
});

it("marks a new schedule without backups as warning", () => {
  const health = buildBackupHealth({
    config,
    apiResult: { schedules: [{ dailyRecurrence: {}, createTime: "2026-07-10T00:00:00.000Z" }], backups: [] },
    now,
  });
  expect(health.status).toBe("warning");
});

it("maps insufficient permissions to connection_required", () => {
  const health = buildBackupHealth({ config, error: new BackupCheckError("permission_denied", "forbidden"), now });
  expect(health.status).toBe("connection_required");
  expect(health.message).toBe("Permisos insuficientes");
});

it("maps missing projects or databases to connection_required", () => {
  const health = buildBackupHealth({ config, error: new BackupCheckError("not_found", "missing"), now });
  expect(health.status).toBe("connection_required");
  expect(health.message).toContain("Proyecto");
});

it("marks partial location responses as warning", () => {
  const apiResult = daily();
  apiResult.unreachable = ["southamerica-east1"];
  const health = buildBackupHealth({ config, apiResult, now });
  expect(health.status).toBe("warning");
  expect(health.errorCode).toBe("partial");
});

it("keeps temporary errors separate from not_configured", () => {
  const health = buildBackupHealth({ config, error: new BackupCheckError("temporary", "timeout"), now });
  expect(health.status).toBe("warning");
  expect(health.message).toBe("No se pudo verificar temporalmente");
});

it("resets consecutive failures when a later check recovers", () => {
  const previous = buildBackupHealth({ config, error: new BackupCheckError("temporary", "timeout"), now });
  previous.consecutiveFailures = 3;
  const health = buildBackupHealth({ config, apiResult: daily(), previous, now });
  expect(health.status).toBe("healthy");
  expect(health.consecutiveFailures).toBe(0);
});

describe("age thresholds", () => {
  it("marks slightly late daily backups as warning", () => {
    const health = buildBackupHealth({ config, apiResult: daily("2026-07-08T12:30:00.000Z"), now });
    expect(health.status).toBe("warning");
    expect(health.errorCode).toBe("stale");
  });

  it("marks very late daily backups as error", () => {
    const health = buildBackupHealth({ config, apiResult: daily("2026-07-06T00:00:00.000Z"), now });
    expect(health.status).toBe("error");
    expect(health.errorCode).toBe("very_stale");
  });
});
