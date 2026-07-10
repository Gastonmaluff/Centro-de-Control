import { onCall, HttpsError } from "firebase-functions/v2/https";
import { onSchedule } from "firebase-functions/v2/scheduler";
import { logger } from "firebase-functions/v2";
import { initializeApp } from "firebase-admin/app";
import { getFirestore, FieldValue } from "firebase-admin/firestore";

initializeApp();
const db = getFirestore();

const REGION = "us-central1";

interface CheckResult {
  up: boolean;
  httpStatus?: number;
  responseMs: number;
  https: boolean;
  redirected: boolean;
  error?: string;
}

/**
 * Chequea una URL desde el backend (no desde el navegador, por CORS/seguridad).
 * Devuelve el estado real: código HTTP, latencia, HTTPS y si hubo redirección.
 */
async function checkOne(url: string): Promise<CheckResult> {
  const started = Date.now();
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 15000);
    const res = await fetch(url, { method: "GET", redirect: "follow", signal: controller.signal });
    clearTimeout(timer);
    const finalUrl = res.url || url;
    return {
      up: res.ok,
      httpStatus: res.status,
      responseMs: Date.now() - started,
      https: finalUrl.startsWith("https://"),
      redirected: res.redirected === true,
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

/* ---------------------------------------------------------------- callable */

/** monitorUrl — verificación manual (botón "Reanalizar" / alta de sistema). */
export const monitorUrl = onCall(
  { region: REGION, timeoutSeconds: 20, memory: "128MiB" },
  async (req) => {
    if (!req.auth) throw new HttpsError("unauthenticated", "Necesitás iniciar sesión.");
    const url = String(req.data?.url ?? "").trim();
    if (!/^https?:\/\//i.test(url)) throw new HttpsError("invalid-argument", "URL inválida.");

    const r = await checkOne(url);
    return { ...r, consecutiveFails: r.up ? 0 : 1, mode: "basic" as const };
  }
);

/* ------------------------------------------------------------------ sweep */

/**
 * Revisa la URL pública de todos los sistemas y actualiza su `monitoring`.
 * Acumula `consecutiveFails` para marcar "Caído" recién tras varios fallos
 * seguidos (no por uno aislado). Registra un evento de actividad al cambiar de
 * estado (caído <-> recuperado). Lo usan la corrida programada y el botón
 * manual "Revisar todos".
 */
async function runSweep(source: string): Promise<number> {
  const snap = await db.collection("systems").get();
  const checkedAt = new Date().toISOString();
  let checked = 0;

  await Promise.all(
    snap.docs.map(async (doc) => {
      const sys = doc.data() as {
        links?: { publicUrl?: string };
        monitoring?: { consecutiveFails?: number };
        name?: string;
      };
      const url = sys.links?.publicUrl?.trim();
      if (!url || !/^https?:\/\//i.test(url)) return;

      const r = await checkOne(url);
      const prevFails = sys.monitoring?.consecutiveFails ?? 0;
      const consecutiveFails = r.up ? 0 : prevFails + 1;

      const monitoring = {
        source,
        checkedAt,
        up: r.up,
        httpStatus: r.httpStatus ?? null,
        responseMs: r.responseMs,
        https: r.https,
        redirected: r.redirected,
        consecutiveFails,
        mode: "basic",
        error: r.error ?? null,
      };
      await doc.ref.set({ monitoring }, { merge: true });
      checked++;

      const wasDown = prevFails >= 2;
      const isDown = consecutiveFails >= 2;
      if (wasDown !== isDown) {
        await doc.ref.collection("activity").add({
          kind: isDown ? "down" : "recovered",
          system: sys.name ?? "",
          text: isDown ? "El sistema no responde" : "El sistema se recuperó",
          time: checkedAt,
          at: FieldValue.serverTimestamp(),
        });
      }
    })
  );

  logger.info(`sweep (${source}): ${checked} sistema(s) verificados`);
  return checked;
}

/** scheduledMonitor — corrida automática cada 30 minutos. */
export const scheduledMonitor = onSchedule(
  { schedule: "every 30 minutes", region: REGION, timeoutSeconds: 300, memory: "256MiB" },
  async () => {
    await runSweep("scheduler");
  }
);

/** monitorAll — barrido manual ("Revisar todos" en el panel). */
export const monitorAll = onCall(
  { region: REGION, timeoutSeconds: 300, memory: "256MiB" },
  async (req) => {
    if (!req.auth) throw new HttpsError("unauthenticated", "Necesitás iniciar sesión.");
    const checked = await runSweep("manual");
    return { checked };
  }
);
