import type { BackupConfig, BackupHealth, BackupStatus } from "../data/types";

export type BackupTone = "ok" | "warn" | "down" | "muted" | "pending";

export function backupTone(status?: BackupStatus): BackupTone {
  if (status === "healthy") return "ok";
  if (status === "warning") return "warn";
  if (status === "error") return "down";
  if (status === "connection_required") return "pending";
  return "muted";
}

export function backupStatusLabel(status?: BackupStatus): string {
  if (status === "healthy") return "Backup actualizado";
  if (status === "warning") return "Backup requiere atencion";
  if (status === "error") return "Backup con problema";
  if (status === "not_configured") return "Backup no configurado";
  if (status === "connection_required") return "Conexion pendiente";
  return "Todavia no se verifico";
}

export function backupScheduleLabel(scheduleType?: BackupHealth["scheduleType"]): string {
  if (scheduleType === "daily") return "Diaria";
  if (scheduleType === "weekly") return "Semanal";
  if (scheduleType === "unknown") return "No existe una programacion detectada";
  return "Dato no disponible";
}

export function retentionDays(retentionSeconds?: number | null): string {
  if (!retentionSeconds || retentionSeconds <= 0) return "Dato no disponible";
  const days = retentionSeconds / 86400;
  return Number.isInteger(days) ? `${days} dias` : `${days.toFixed(1)} dias`;
}

export function googleCloudBackupUrl(config?: BackupConfig): string | undefined {
  if (!config || config.provider !== "firestore" || !config.projectId?.trim()) return undefined;
  if (config.consoleUrl?.trim()) return config.consoleUrl.trim();
  const project = encodeURIComponent(config.projectId.trim());
  // Fallback estable: consola de Firestore del proyecto. La vista exacta de
  // backups puede cambiar en Google Cloud Console.
  return `https://console.cloud.google.com/firestore/databases?project=${project}`;
}
