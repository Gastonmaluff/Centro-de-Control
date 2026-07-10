import { onCall, HttpsError } from "firebase-functions/v2/https";
import { onSchedule } from "firebase-functions/v2/scheduler";
import { logger } from "firebase-functions/v2";
import { initializeApp } from "firebase-admin/app";
import { FieldValue, getFirestore } from "firebase-admin/firestore";

initializeApp();
const db = getFirestore();

const REGION = "us-central1";
const REQUEST_TIMEOUT_MS = 15000;
const HIGH_LATENCY_MS = 3000;

type ComponentState = "ok" | "warn" | "down" | "unknown";
type ComponentKey =
  | "application"
  | "database"
  | "authentication"
  | "functions"
  | "storage"
  | "domain"
  | "backup";

interface ComponentCheck {
  state: ComponentState;
  configured?: boolean;
  critical?: boolean;
  checkedAt?: string;
  source?: string;
  message?: string;
  responseMs?: number;
  consecutiveFails?: number;
}

interface BackupCheck extends ComponentCheck {
  lastSuccessAt?: string;
  lastResult?: "success" | "failed" | "missing" | "unknown";
  nextRunAt?: string;
  maxAgeHours?: number;
}

interface MonitoringDoc {
  source?: string;
  checkedAt?: string;
  httpStatus?: number;
  responseMs?: number;
  https?: boolean;
  redirected?: boolean;
  up?: boolean;
  consecutiveFails?: number;
  mode?: "basic" | "full";
  error?: string | null;
  components?: Partial<Record<ComponentKey, ComponentCheck>>;
  backup?: BackupCheck;
  health?: {
    url?: string;
    status?: string;
    version?: string;
    checkedAt?: string;
    error?: string | null;
  };
}

interface CheckResult {
  up: boolean;
  httpStatus?: number;
  responseMs: number;
  https: boolean;
  redirected: boolean;
  finalUrl?: string;
  error?: string;
}

interface SystemDoc {
  name?: string;
  projectStatus?: string;
  links?: { publicUrl?: string; domain?: string };
  monitoring?: MonitoringDoc;
}

interface HealthPayload {
  status?: unknown;
  database?: unknown;
  authentication?: unknown;
  auth?: unknown;
  storage?: unknown;
  functions?: unknown;
  api?: unknown;
  version?: unknown;
  checkedAt?: unknown;
  backup?: unknown;
}

function isHttpUrl(url: string): boolean {
  return /^https?:\/\//i.test(url);
}

async function fetchWithTimeout(url: string, options: RequestInit = {}): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

async function checkPublicUrl(url: string): Promise<CheckResult> {
  const started = Date.now();
  try {
    const res = await fetchWithTimeout(url, { method: "GET", redirect: "follow" });
    const finalUrl = res.url || url;
    return {
      up: res.ok,
      httpStatus: res.status,
      responseMs: Date.now() - started,
      https: finalUrl.startsWith("https://"),
      redirected: res.redirected === true,
      finalUrl,
    };
  } catch (e) {
    return {
      up: false,
      responseMs: Date.now() - started,
      https: url.startsWith("https://"),
      redirected: false,
      error: e instanceof Error ? e.message : "No se pudo alcanzar la URL",
    };
  }
}

function healthUrlFor(publicUrl: string): string {
  const u = new URL(publicUrl);
  u.pathname = "/api/health";
  u.search = "";
  u.hash = "";
  return u.toString();
}

async function fetchHealth(publicUrl: string): Promise<{ url: string; payload?: HealthPayload; error?: string }> {
  const url = healthUrlFor(publicUrl);
  try {
    const res = await fetchWithTimeout(url, {
      method: "GET",
      redirect: "follow",
      headers: { accept: "application/json" },
    });
    if (!res.ok) return { url, error: `Health endpoint HTTP ${res.status}` };
    const contentType = res.headers.get("content-type") ?? "";
    if (!contentType.includes("application/json")) return { url, error: "Health endpoint no devolvio JSON" };
    const payload = (await res.json()) as HealthPayload;
    return { url, payload };
  } catch (e) {
    return { url, error: e instanceof Error ? e.message : "Health endpoint no disponible" };
  }
}

function valueToState(value: unknown): ComponentState | null {
  if (value === undefined || value === null) return null;
  if (typeof value === "boolean") return value ? "ok" : "down";
  const raw = typeof value === "object" && "status" in value ? (value as { status?: unknown }).status : value;
  const text = String(raw).toLowerCase();
  if (["ok", "healthy", "up", "success", "ready", "connected"].includes(text)) return "ok";
  if (["warn", "warning", "degraded", "slow"].includes(text)) return "warn";
  if (["error", "failed", "fail", "down", "unhealthy", "missing"].includes(text)) return "down";
  return "unknown";
}

function messageFor(key: ComponentKey, state: ComponentState, value: unknown): string {
  if (state === "ok") return key === "domain" ? "HTTPS activo" : "Comprobacion correcta";
  if (state === "warn") return key === "domain" ? "SSL o dominio con advertencia" : "Servicio degradado";
  if (state === "down") return "Comprobacion fallida";
  if (value === undefined || value === null) return "No informado por health endpoint";
  return "Estado no interpretable";
}

function withConsecutive(
  check: ComponentCheck,
  previous?: ComponentCheck
): ComponentCheck {
  return {
    ...check,
    consecutiveFails: check.state === "down" ? (previous?.consecutiveFails ?? 0) + 1 : 0,
  };
}

function backupFromHealth(value: unknown, checkedAt: string, previous?: BackupCheck): BackupCheck {
  if (!value || typeof value !== "object") {
    return {
      state: "unknown",
      configured: false,
      critical: false,
      checkedAt,
      source: "health-endpoint",
      message: "Backup no configurado",
      consecutiveFails: 0,
      lastResult: "unknown",
    };
  }

  const raw = value as {
    status?: unknown;
    result?: unknown;
    lastResult?: unknown;
    lastSuccessAt?: unknown;
    nextRunAt?: unknown;
    maxAgeHours?: unknown;
  };
  const lastResultText = String(raw.lastResult ?? raw.result ?? raw.status ?? "unknown").toLowerCase();
  const lastSuccessAt = typeof raw.lastSuccessAt === "string" ? raw.lastSuccessAt : undefined;
  const nextRunAt = typeof raw.nextRunAt === "string" ? raw.nextRunAt : undefined;
  const maxAgeHours = typeof raw.maxAgeHours === "number" ? raw.maxAgeHours : 24;
  const ageMs = lastSuccessAt ? Date.now() - new Date(lastSuccessAt).getTime() : Number.POSITIVE_INFINITY;
  const stale = ageMs > maxAgeHours * 60 * 60 * 1000;

  let state: ComponentState = "ok";
  let lastResult: BackupCheck["lastResult"] = "success";
  let message = "Ultimo backup dentro del plazo";

  if (["failed", "fail", "error", "down"].includes(lastResultText)) {
    state = "down";
    lastResult = "failed";
    message = "Ultimo backup fallo";
  } else if (!lastSuccessAt) {
    state = "down";
    lastResult = "missing";
    message = "No existe backup exitoso";
  } else if (stale) {
    state = "warn";
    lastResult = "success";
    message = "Backup atrasado";
  }

  const base = withConsecutive(
    {
      state,
      configured: true,
      critical: false,
      checkedAt,
      source: "health-endpoint",
      message,
    },
    previous
  );
  return { ...base, lastSuccessAt, lastResult, nextRunAt, maxAgeHours };
}

function healthComponents(
  health: HealthPayload,
  app: CheckResult,
  checkedAt: string,
  previous: MonitoringDoc | undefined
): Partial<Record<ComponentKey, ComponentCheck>> {
  const healthState = valueToState(health.status);
  const appState: ComponentState = !app.up
    ? "down"
    : healthState === "down"
    ? "down"
    : healthState === "warn" || app.responseMs > HIGH_LATENCY_MS
    ? "warn"
    : "ok";
  const components: Partial<Record<ComponentKey, ComponentCheck>> = {
    application: withConsecutive(
      {
        state: appState,
        configured: true,
        critical: true,
        checkedAt,
        source: "cloud-function",
        responseMs: app.responseMs,
        message: app.up
          ? healthState && healthState !== "ok"
            ? `Health ${String(health.status)}`
            : `HTTP ${app.httpStatus ?? "OK"}`
          : app.error ?? "La aplicacion no responde",
      },
      previous?.components?.application
    ),
    domain: {
      state: app.https ? "ok" : "warn",
      configured: true,
      critical: true,
      checkedAt,
      source: "cloud-function",
      message: app.https ? "HTTPS activo" : "No usa HTTPS",
    },
  };

  const map: Array<[ComponentKey, unknown]> = [
    ["database", health.database],
    ["authentication", health.authentication ?? health.auth],
    ["storage", health.storage],
    ["functions", health.functions ?? health.api],
  ];

  for (const [key, value] of map) {
    const state = valueToState(value);
    if (!state) continue;
    components[key] = withConsecutive(
      {
        state,
        configured: true,
        critical: key !== "storage",
        checkedAt,
        source: "health-endpoint",
        message: messageFor(key, state, value),
      },
      previous?.components?.[key]
    );
  }

  components.backup = backupFromHealth(health.backup, checkedAt, previous?.backup);
  return components;
}

function basicComponents(
  app: CheckResult,
  checkedAt: string,
  previous: MonitoringDoc | undefined
): Partial<Record<ComponentKey, ComponentCheck>> {
  return {
    application: withConsecutive(
      {
        state: app.up && app.responseMs <= HIGH_LATENCY_MS ? "ok" : app.up ? "warn" : "down",
        configured: true,
        critical: true,
        checkedAt,
        source: "cloud-function",
        responseMs: app.responseMs,
        message: app.up ? `HTTP ${app.httpStatus ?? "OK"}` : app.error ?? "La aplicacion no responde",
      },
      previous?.components?.application
    ),
    domain: {
      state: app.https ? "ok" : "warn",
      configured: true,
      critical: true,
      checkedAt,
      source: "cloud-function",
      message: app.https ? "HTTPS activo" : "No usa HTTPS",
    },
    backup: {
      state: "unknown",
      configured: false,
      critical: false,
      checkedAt,
      source: "health-endpoint",
      message: "Backup no configurado",
      consecutiveFails: 0,
    },
  };
}

async function buildMonitoring(sys: SystemDoc): Promise<MonitoringDoc | null> {
  const url = sys.links?.publicUrl?.trim();
  if (!url || !isHttpUrl(url)) return null;

  const checkedAt = new Date().toISOString();
  const previous = sys.monitoring;
  const app = await checkPublicUrl(url);
  const health = await fetchHealth(url);
  const full = Boolean(health.payload);
  const components = full
    ? healthComponents(health.payload!, app, checkedAt, previous)
    : basicComponents(app, checkedAt, previous);

  const monitoring: MonitoringDoc = {
    source: "cloud-function",
    checkedAt,
    httpStatus: app.httpStatus,
    responseMs: app.responseMs,
    https: app.https,
    redirected: app.redirected,
    up: app.up,
    consecutiveFails: components.application?.consecutiveFails ?? (app.up ? 0 : (previous?.consecutiveFails ?? 0) + 1),
    mode: full ? "full" : "basic",
    error: app.error ?? null,
    components,
    backup: components.backup as BackupCheck,
    health: {
      url: health.url,
      status: typeof health.payload?.status === "string" ? health.payload.status : undefined,
      version: typeof health.payload?.version === "string" ? health.payload.version : undefined,
      checkedAt: typeof health.payload?.checkedAt === "string" ? health.payload.checkedAt : checkedAt,
      error: full ? null : health.error ?? "Health endpoint no disponible",
    },
  };

  return monitoring;
}

async function recordIncidents(
  docRef: FirebaseFirestore.DocumentReference,
  sys: SystemDoc,
  next: MonitoringDoc
) {
  const prev = sys.monitoring?.components ?? {};
  const current = next.components ?? {};
  const checkedAt = next.checkedAt ?? new Date().toISOString();
  const writes: Promise<unknown>[] = [];

  for (const key of Object.keys(current) as ComponentKey[]) {
    const before = prev[key]?.state;
    const after = current[key]?.state;
    if (!after || before === after || after === "unknown") continue;

    const severity = after === "down" ? "down" : after === "warn" ? "warning" : "recovered";
    writes.push(
      docRef.collection("incidents").add({
        component: key,
        severity,
        state: after,
        message: current[key]?.message ?? "",
        time: checkedAt,
        at: FieldValue.serverTimestamp(),
      })
    );

    if (severity === "down" || severity === "recovered") {
      writes.push(
        docRef.collection("activity").add({
          kind: severity === "down" ? "down" : "recovered",
          system: sys.name ?? "",
          text: severity === "down" ? `${key} no responde` : `${key} se recupero`,
          time: checkedAt,
          at: FieldValue.serverTimestamp(),
        })
      );
    }
  }

  await Promise.all(writes);
}

async function monitorSystemDoc(docRef: FirebaseFirestore.DocumentReference): Promise<boolean> {
  const snap = await docRef.get();
  if (!snap.exists) throw new HttpsError("not-found", "Sistema no encontrado.");
  const sys = snap.data() as SystemDoc;
  const monitoring = await buildMonitoring(sys);
  if (!monitoring) return false;
  await docRef.set({ monitoring, updatedAt: new Date().toISOString() }, { merge: true });
  await recordIncidents(docRef, sys, monitoring);
  return true;
}

export const monitorUrl = onCall(
  { region: REGION, timeoutSeconds: 30, memory: "128MiB" },
  async (req) => {
    if (!req.auth) throw new HttpsError("unauthenticated", "Necesitas iniciar sesion.");
    const url = String(req.data?.url ?? "").trim();
    if (!isHttpUrl(url)) throw new HttpsError("invalid-argument", "URL invalida.");

    const monitoring = await buildMonitoring({ links: { publicUrl: url } });
    if (!monitoring) throw new HttpsError("invalid-argument", "URL invalida.");
    return monitoring;
  }
);

export const monitorSystem = onCall(
  { region: REGION, timeoutSeconds: 120, memory: "256MiB" },
  async (req) => {
    if (!req.auth) throw new HttpsError("unauthenticated", "Necesitas iniciar sesion.");
    const id = String(req.data?.id ?? "").trim();
    if (!id) throw new HttpsError("invalid-argument", "ID de sistema requerido.");
    const checked = await monitorSystemDoc(db.collection("systems").doc(id));
    return { checked };
  }
);

async function runSweep(source: string): Promise<number> {
  const snap = await db.collection("systems").get();
  let checked = 0;

  await Promise.all(
    snap.docs.map(async (doc) => {
      const sys = doc.data() as SystemDoc;
      if (!sys.links?.publicUrl || !isHttpUrl(sys.links.publicUrl)) return;
      const monitoring = await buildMonitoring(sys);
      if (!monitoring) return;
      monitoring.source = source;
      await doc.ref.set({ monitoring, updatedAt: new Date().toISOString() }, { merge: true });
      await recordIncidents(doc.ref, sys, monitoring);
      checked++;
    })
  );

  logger.info(`sweep (${source}): ${checked} sistema(s) verificados`);
  return checked;
}

export const scheduledMonitor = onSchedule(
  { schedule: "every 30 minutes", region: REGION, timeoutSeconds: 300, memory: "256MiB" },
  async () => {
    await runSweep("scheduler");
  }
);

export const monitorAll = onCall(
  { region: REGION, timeoutSeconds: 300, memory: "256MiB" },
  async (req) => {
    if (!req.auth) throw new HttpsError("unauthenticated", "Necesitas iniciar sesion.");
    const checked = await runSweep("manual");
    return { checked };
  }
);
