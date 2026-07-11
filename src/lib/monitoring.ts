import { getFunctions, httpsCallable } from "firebase/functions";
import { FirebaseError } from "firebase/app";
import { app } from "../firebase/config";
import type { BackupHealth, Monitoring } from "../data/types";

export function backupHealthMessage(health: BackupHealth): string {
  if (health.status === "healthy") return "Backup actualizado correctamente";
  return health.message || health.errorMessage || "Verificacion de backup finalizada";
}

export function backupErrorMessage(error: unknown): string {
  const code = error instanceof FirebaseError ? error.code : "";
  const message = error instanceof Error ? error.message : "";

  if (code === "functions/unauthenticated") return "Sesion vencida: inicia sesion nuevamente";
  if (code === "functions/not-found") return "Cloud Function no encontrada";
  if (code === "functions/permission-denied") return "Permisos insuficientes";
  if (code === "functions/unavailable" || code === "functions/deadline-exceeded") {
    return "No se pudo conectar con Google Cloud";
  }
  if (message.includes("Proyecto")) return "Proyecto no encontrado";
  if (message.includes("base de datos")) return "Base de datos no encontrada";
  if (message.includes("Permisos")) return "Permisos insuficientes";
  if (message.includes("Function") || message.includes("not found")) return "Cloud Function no encontrada";
  return message || "No se pudo verificar el backup";
}

/**
 * Pide al backend (Cloud Function `monitorUrl`) que verifique la URL pública.
 * El chequeo NO se hace desde el navegador (CORS / seguridad): si la Function
 * todavía no está desplegada, devolvemos un resultado honesto marcando que el
 * backend no está disponible. Nunca inventamos el estado.
 */
export async function checkUrl(url?: string): Promise<Monitoring> {
  const checkedAt = new Date().toISOString();
  if (!url || !url.trim()) {
    return { source: "cloud-function", checkedAt, error: "Sin URL pública" };
  }
  try {
    const functions = getFunctions(app, "us-central1");
    const call = httpsCallable<{ url: string }, Partial<Monitoring>>(functions, "monitorUrl");
    const res = await call({ url: url.trim() });
    return { source: "cloud-function", checkedAt, mode: "basic", ...res.data };
  } catch {
    return {
      source: "cloud-function",
      checkedAt,
      error: "Backend de monitoreo no disponible todavía",
    };
  }
}

/** Pide al backend un barrido de TODOS los sistemas ("Revisar todos"). */
export async function runMonitorAll(): Promise<number> {
  const functions = getFunctions(app, "us-central1");
  const call = httpsCallable<Record<string, never>, { checked: number }>(functions, "monitorAll");
  const res = await call({});
  return res.data.checked;
}

/** Reanaliza un sistema puntual desde el backend seguro. */
export async function runMonitorSystem(id: string): Promise<boolean> {
  const functions = getFunctions(app, "us-central1");
  const call = httpsCallable<{ id: string }, { checked: boolean }>(functions, "monitorSystem");
  const res = await call({ id });
  return res.data.checked;
}

/** Verifica backups de Firestore desde Cloud Functions usando credenciales del backend. */
export async function checkBackupNow(systemId: string): Promise<BackupHealth> {
  const functions = getFunctions(app, "us-central1");
  const call = httpsCallable<{ systemId: string }, { health: BackupHealth }>(functions, "checkBackupNow");
  const res = await call({ systemId });
  return res.data.health;
}
