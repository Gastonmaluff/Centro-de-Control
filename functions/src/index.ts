import { onCall, HttpsError } from "firebase-functions/v2/https";

/**
 * monitorUrl — verifica una URL pública desde el backend (no desde el navegador,
 * por CORS y seguridad). Devuelve estado real: código HTTP, latencia, HTTPS y
 * si hubo redirección. Nunca inventa datos.
 *
 * Se invoca como callable autenticado desde el frontend (src/lib/monitoring.ts).
 * Requiere plan Blaze para desplegar (`npm --prefix functions run deploy`).
 */
export const monitorUrl = onCall(
  { region: "us-central1", timeoutSeconds: 20, memory: "128MiB" },
  async (req) => {
    if (!req.auth) {
      throw new HttpsError("unauthenticated", "Necesitás iniciar sesión.");
    }
    const url = String(req.data?.url ?? "").trim();
    if (!/^https?:\/\//i.test(url)) {
      throw new HttpsError("invalid-argument", "URL inválida.");
    }

    const started = Date.now();
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 15000);
      const res = await fetch(url, { method: "GET", redirect: "follow", signal: controller.signal });
      clearTimeout(timer);

      const responseMs = Date.now() - started;
      const finalUrl = res.url || url;
      return {
        up: res.ok,
        httpStatus: res.status,
        responseMs,
        https: finalUrl.startsWith("https://"),
        redirected: res.redirected === true,
        consecutiveFails: res.ok ? 0 : 1,
        mode: "basic" as const,
      };
    } catch (e) {
      return {
        up: false,
        responseMs: Date.now() - started,
        https: url.startsWith("https://"),
        redirected: false,
        consecutiveFails: 1,
        mode: "basic" as const,
        error: e instanceof Error ? e.message : "No se pudo alcanzar la URL",
      };
    }
  }
);
