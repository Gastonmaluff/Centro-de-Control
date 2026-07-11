import { getFunctions, httpsCallable } from "firebase/functions";
import { app } from "../firebase/config";
import type { BackupHealth, Monitoring } from "../data/types";

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
    const functions = getFunctions(app);
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
  const functions = getFunctions(app);
  const call = httpsCallable<Record<string, never>, { checked: number }>(functions, "monitorAll");
  const res = await call({});
  return res.data.checked;
}

/** Reanaliza un sistema puntual desde el backend seguro. */
export async function runMonitorSystem(id: string): Promise<boolean> {
  const functions = getFunctions(app);
  const call = httpsCallable<{ id: string }, { checked: boolean }>(functions, "monitorSystem");
  const res = await call({ id });
  return res.data.checked;
}

/** Verifica backups de Firestore desde Cloud Functions usando credenciales del backend. */
export async function checkBackupNow(systemId: string): Promise<BackupHealth> {
  const functions = getFunctions(app);
  const call = httpsCallable<{ systemId: string }, { health: BackupHealth }>(functions, "checkBackupNow");
  const res = await call({ systemId });
  return res.data.health;
}
