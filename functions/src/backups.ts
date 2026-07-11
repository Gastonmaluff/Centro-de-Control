import { GoogleAuth } from "google-auth-library";

export type BackupProvider = "firestore" | "none";
export type BackupExpectedFrequency = "auto" | "daily" | "weekly";
export type BackupStatus = "healthy" | "warning" | "error" | "not_configured" | "connection_required";
export type BackupConnectionStatus = "connected" | "pending" | "error";

export interface BackupConfig {
  provider?: BackupProvider;
  projectId?: string;
  databaseId?: string;
  expectedFrequency?: BackupExpectedFrequency;
  enabled?: boolean;
}

export interface BackupHealth {
  provider: "firestore";
  connectionStatus: BackupConnectionStatus;
  configured: boolean;
  status: BackupStatus;
  scheduleType: "daily" | "weekly" | "unknown" | null;
  scheduleDay: string | null;
  retentionSeconds: number | null;
  latestBackupState: "CREATING" | "READY" | "NOT_AVAILABLE" | string | null;
  latestSnapshotTime: string | null;
  latestExpireTime: string | null;
  checkedAt: string;
  durationMs?: number;
  source: "google-cloud-firestore-admin-api";
  consecutiveFailures: number;
  errorCode: string | null;
  errorMessage: string | null;
  message: string;
}

export interface FirestoreBackupSchedule {
  name?: string;
  createTime?: string;
  updateTime?: string;
  retention?: string;
  dailyRecurrence?: Record<string, unknown>;
  weeklyRecurrence?: { day?: string };
}

export interface FirestoreBackup {
  name?: string;
  database?: string;
  snapshotTime?: string;
  expireTime?: string;
  state?: "CREATING" | "READY" | "NOT_AVAILABLE" | string;
}

export interface FirestoreBackupApiResult {
  schedules: FirestoreBackupSchedule[];
  backups: FirestoreBackup[];
  unreachable?: string[];
}

export class BackupCheckError extends Error {
  constructor(public code: string, message: string) {
    super(message);
  }
}

const DAILY_STALE_MS = 36 * 60 * 60 * 1000;
const WEEKLY_STALE_MS = 8 * 24 * 60 * 60 * 1000;
const VERY_LATE_FACTOR = 2;

function apiUrl(path: string): string {
  return `https://firestore.googleapis.com/v1/${path}`;
}

function parseRetentionSeconds(retention?: string): number | null {
  if (!retention) return null;
  const match = retention.match(/^(\d+(?:\.\d+)?)s$/);
  if (!match) return null;
  return Math.round(Number(match[1]));
}

function scheduleInfo(schedules: FirestoreBackupSchedule[], expected: BackupExpectedFrequency) {
  const first = schedules[0];
  const detected: "daily" | "weekly" | "unknown" = schedules.find((s) => s.dailyRecurrence) ? "daily" : schedules.find((s) => s.weeklyRecurrence) ? "weekly" : "unknown";
  const scheduleType = expected === "auto" ? detected : expected;
  const weekly = schedules.find((s) => s.weeklyRecurrence)?.weeklyRecurrence;
  const retentionSeconds = schedules
    .map((s) => parseRetentionSeconds(s.retention))
    .find((seconds): seconds is number => typeof seconds === "number") ?? null;

  return {
    scheduleType,
    scheduleDay: scheduleType === "weekly" ? weekly?.day ?? null : null,
    retentionSeconds,
    scheduleCreatedAt: first?.createTime ? Date.parse(first.createTime) : null,
  };
}

function latestBackup(backups: FirestoreBackup[]): FirestoreBackup | null {
  return backups.reduce<FirestoreBackup | null>((latest, backup) => {
    if (!backup.snapshotTime) return latest;
    if (!latest?.snapshotTime) return backup;
    return Date.parse(backup.snapshotTime) > Date.parse(latest.snapshotTime) ? backup : latest;
  }, null);
}

function messageFor(code: string): string {
  const messages: Record<string, string> = {
    ok: "Backup actualizado",
    creating: "Ultimo backup todavia en proceso",
    not_available: "Ultimo backup no disponible",
    no_schedule: "Sin programacion de backup",
    no_backup_yet: "Backup requiere atencion",
    stale: "Backup atrasado",
    very_stale: "Backup con problema",
    partial: "Resultado parcial de Google Cloud",
    permission_denied: "Permisos insuficientes",
    not_found: "Proyecto o base de datos no encontrado",
    api_disabled: "API de Firestore no disponible",
    temporary: "No se pudo verificar temporalmente",
    invalid_config: "Configuracion de backup incompleta",
  };
  return messages[code] ?? messages.temporary;
}

export function buildBackupHealth(params: {
  config: BackupConfig;
  apiResult?: FirestoreBackupApiResult;
  previous?: BackupHealth;
  now?: Date;
  startedAt?: number;
  error?: BackupCheckError;
}): BackupHealth {
  const now = params.now ?? new Date();
  const startedAt = params.startedAt ?? Date.now();
  const checkedAt = now.toISOString();
  const previousFailures = params.previous?.consecutiveFailures ?? 0;
  const projectId = params.config.projectId?.trim();
  const databaseId = params.config.databaseId?.trim() || "(default)";
  const base = {
    provider: "firestore" as const,
    checkedAt,
    durationMs: Math.max(0, Date.now() - startedAt),
    source: "google-cloud-firestore-admin-api" as const,
  };

  if (params.error) {
    const connectionRequiredCodes = new Set(["permission_denied", "not_found", "api_disabled", "invalid_config"]);
    const status: BackupStatus = connectionRequiredCodes.has(params.error.code) ? "connection_required" : previousFailures >= 2 ? "error" : "warning";
    return {
      ...base,
      connectionStatus: "error",
      configured: false,
      status,
      scheduleType: null,
      scheduleDay: null,
      retentionSeconds: null,
      latestBackupState: null,
      latestSnapshotTime: null,
      latestExpireTime: null,
      consecutiveFailures: previousFailures + 1,
      errorCode: params.error.code,
      errorMessage: messageFor(params.error.code),
      message: messageFor(params.error.code),
    };
  }

  if (!projectId || !databaseId || params.config.provider !== "firestore" || params.config.enabled === false) {
    return {
      ...base,
      connectionStatus: "pending",
      configured: false,
      status: "connection_required",
      scheduleType: null,
      scheduleDay: null,
      retentionSeconds: null,
      latestBackupState: null,
      latestSnapshotTime: null,
      latestExpireTime: null,
      consecutiveFailures: 0,
      errorCode: "invalid_config",
      errorMessage: messageFor("invalid_config"),
      message: messageFor("invalid_config"),
    };
  }

  const schedules = params.apiResult?.schedules ?? [];
  const databaseName = `projects/${projectId}/databases/${databaseId}`;
  const backups = (params.apiResult?.backups ?? []).filter((backup) => backup.database === databaseName);
  const hasPartial = Boolean(params.apiResult?.unreachable?.length);
  const info = scheduleInfo(schedules, params.config.expectedFrequency ?? "auto");
  const latest = latestBackup(backups);

  if (!schedules.length) {
    return {
      ...base,
      connectionStatus: "connected",
      configured: false,
      status: "not_configured",
      scheduleType: null,
      scheduleDay: null,
      retentionSeconds: null,
      latestBackupState: latest?.state ?? null,
      latestSnapshotTime: latest?.snapshotTime ?? null,
      latestExpireTime: latest?.expireTime ?? null,
      consecutiveFailures: 0,
      errorCode: null,
      errorMessage: null,
      message: messageFor("no_schedule"),
    };
  }

  if (!latest) {
    const scheduleAgeMs = info.scheduleCreatedAt ? now.getTime() - info.scheduleCreatedAt : 0;
    const oldSchedule = scheduleAgeMs > (info.scheduleType === "weekly" ? WEEKLY_STALE_MS : DAILY_STALE_MS);
    return {
      ...base,
      connectionStatus: "connected",
      configured: true,
      status: oldSchedule ? "error" : "warning",
      scheduleType: info.scheduleType,
      scheduleDay: info.scheduleDay,
      retentionSeconds: info.retentionSeconds,
      latestBackupState: null,
      latestSnapshotTime: null,
      latestExpireTime: null,
      consecutiveFailures: 0,
      errorCode: oldSchedule ? "no_backup_yet" : null,
      errorMessage: oldSchedule ? "No existe un backup utilizable pese a existir una programacion antigua" : null,
      message: messageFor("no_backup_yet"),
    };
  }

  const latestTime = latest.snapshotTime ? Date.parse(latest.snapshotTime) : Number.NaN;
  const ageMs = Number.isFinite(latestTime) ? now.getTime() - latestTime : Number.POSITIVE_INFINITY;
  const threshold = info.scheduleType === "weekly" ? WEEKLY_STALE_MS : DAILY_STALE_MS;
  const veryLate = ageMs > threshold * VERY_LATE_FACTOR;
  const stale = ageMs > threshold;
  let status: BackupStatus = "healthy";
  let errorCode: string | null = null;
  let errorMessage: string | null = null;
  let message = messageFor("ok");

  if (latest.state === "NOT_AVAILABLE") {
    status = "error";
    errorCode = "not_available";
    errorMessage = messageFor(errorCode);
    message = errorMessage;
  } else if (latest.state === "CREATING") {
    status = "warning";
    errorCode = null;
    message = messageFor("creating");
  } else if (veryLate) {
    status = "error";
    errorCode = "very_stale";
    errorMessage = messageFor(errorCode);
    message = errorMessage;
  } else if (stale || hasPartial || latest.state !== "READY") {
    status = "warning";
    errorCode = hasPartial ? "partial" : stale ? "stale" : null;
    errorMessage = errorCode ? messageFor(errorCode) : null;
    message = hasPartial ? messageFor("partial") : stale ? messageFor("stale") : "Faltan datos para confirmar la salud completa";
  }

  return {
    ...base,
    connectionStatus: "connected",
    configured: true,
    status,
    scheduleType: info.scheduleType,
    scheduleDay: info.scheduleDay,
    retentionSeconds: info.retentionSeconds,
    latestBackupState: latest.state ?? null,
    latestSnapshotTime: latest.snapshotTime ?? null,
    latestExpireTime: latest.expireTime ?? null,
    consecutiveFailures: 0,
    errorCode,
    errorMessage,
    message,
  };
}

async function fetchJson<T>(auth: GoogleAuth, url: string): Promise<T> {
  const client = await auth.getClient();
  const headers = await client.getRequestHeaders(url);
  const res = await fetch(url, { headers: headers as HeadersInit });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw mapGoogleError(res.status, text);
  }
  return (await res.json()) as T;
}

function mapGoogleError(status: number, body: string): BackupCheckError {
  const lower = body.toLowerCase();
  if (status === 403) return new BackupCheckError("permission_denied", "Permisos insuficientes");
  if (status === 404) return new BackupCheckError("not_found", "Proyecto o base de datos no encontrado");
  if (lower.includes("disabled") || lower.includes("not been used")) {
    return new BackupCheckError("api_disabled", "API de Firestore no disponible");
  }
  return new BackupCheckError("temporary", `Google Cloud devolvio HTTP ${status}`);
}

export async function queryFirestoreBackupApi(config: BackupConfig): Promise<FirestoreBackupApiResult> {
  const projectId = config.projectId?.trim();
  const databaseId = config.databaseId?.trim() || "(default)";
  if (!projectId || !databaseId || config.provider !== "firestore" || config.enabled === false) {
    throw new BackupCheckError("invalid_config", "Configuracion de backup incompleta");
  }

  const auth = new GoogleAuth({ scopes: ["https://www.googleapis.com/auth/cloud-platform"] });
  const [scheduleResult, backupResult] = await Promise.all([
    fetchJson<{ backupSchedules?: FirestoreBackupSchedule[] }>(
      auth,
      apiUrl(`projects/${encodeURIComponent(projectId)}/databases/${encodeURIComponent(databaseId)}/backupSchedules`)
    ),
    fetchJson<{ backups?: FirestoreBackup[]; unreachable?: string[] }>(
      auth,
      apiUrl(`projects/${encodeURIComponent(projectId)}/locations/-/backups`)
    ),
  ]);

  return {
    schedules: scheduleResult.backupSchedules ?? [],
    backups: backupResult.backups ?? [],
    unreachable: backupResult.unreachable ?? [],
  };
}
