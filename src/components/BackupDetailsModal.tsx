import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import type { BackupHealth, System } from "../data/types";
import { backupErrorMessage, backupHealthMessage, checkBackupNow } from "../lib/monitoring";
import { backupScheduleLabel, backupStatusLabel, backupTone, googleCloudBackupUrl, retentionDays } from "../lib/backups";
import { dateTime } from "../lib/format";
import { IcCheck, IcCloud, IcExternal, IcPlus, IcRefresh } from "./icons";

interface Props {
  system: System;
  onClose: () => void;
}

const missing = "Dato no disponible";

function safeDate(value?: string | null, empty = missing) {
  if (!value) return empty;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return missing;
  return dateTime(value);
}

function stateDescription(health?: BackupHealth) {
  if (!health) return "Todavia no se verifico este backup desde Centro de Control.";
  if (health.status === "healthy") return "Ultima copia disponible y dentro del plazo esperado.";
  if (health.status === "not_configured") return "No existe una programacion de backup detectada.";
  if (health.status === "connection_required") return "Falta completar la conexion o permisos de Google Cloud.";
  return health.message || "Centro de Control no pudo confirmar la salud completa del backup.";
}

export default function BackupDetailsModal({ system, onClose }: Props) {
  const [checking, setChecking] = useState(false);
  const [resultMessage, setResultMessage] = useState("");
  const [localHealth, setLocalHealth] = useState<BackupHealth | undefined>(system.backupHealth);
  const health = localHealth ?? system.backupHealth;
  const tone = backupTone(health?.status);
  const cloudUrl = useMemo(() => googleCloudBackupUrl(system.backupConfig), [system.backupConfig]);

  useEffect(() => {
    setLocalHealth(system.backupHealth);
  }, [system.backupHealth]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const verifyNow = async () => {
    setChecking(true);
    setResultMessage("Verificando...");
    try {
      const next = await checkBackupNow(system.id);
      setLocalHealth(next);
      setResultMessage(next.status === "healthy" ? "Backup verificado correctamente" : backupHealthMessage(next));
      console.info("checkBackupNow result", { systemId: system.id, health: next });
    } catch (err) {
      console.error("checkBackupNow failed", { systemId: system.id, error: err });
      setResultMessage(`No se pudo verificar: ${backupErrorMessage(err)}`);
    } finally {
      setChecking(false);
    }
  };

  const rows = [
    ["Estado general", health ? backupStatusLabel(health.status) : "Todavia no se verifico"],
    ["Mensaje tecnico", health?.message || missing],
    ["Ultimo backup exitoso", safeDate(health?.latestSnapshotTime, "Todavia no se verifico")],
    ["Estado del ultimo backup", health?.latestBackupState || missing],
    ["Frecuencia", backupScheduleLabel(health?.scheduleType)],
    ["Retencion", retentionDays(health?.retentionSeconds)],
    ["Fecha de vencimiento", safeDate(health?.latestExpireTime)],
    ["Ultima verificacion", safeDate(health?.checkedAt, "Todavia no se verifico")],
    ["Proyecto Google Cloud", system.backupConfig?.projectId || missing],
    ["Base Firestore", system.backupConfig?.databaseId || "(default)"],
    ["Fuente", health?.source || missing],
    ...(health && health.consecutiveFailures > 0 ? [["Errores consecutivos", String(health.consecutiveFailures)]] : []),
  ];

  return createPortal(
    <div className="modal-overlay" onMouseDown={onClose}>
      <div className="backup-modal" role="dialog" aria-modal="true" aria-labelledby="backup-modal-title" onMouseDown={(e) => e.stopPropagation()}>
        <div className="backup-modal-head">
          <div className="backup-head-icon">
            <IcCloud width={22} height={22} />
          </div>
          <div>
            <h3 id="backup-modal-title">Estado del backup</h3>
            <p>{system.name}</p>
          </div>
          <span className={`backup-status-badge ${tone}`}>
            <span className={`check-dot ${tone}`} />
            {backupStatusLabel(health?.status)}
          </span>
          <button className="icon-btn" onClick={onClose} title="Cerrar" aria-label="Cerrar detalle de backup">
            <IcPlus width={18} height={18} style={{ transform: "rotate(45deg)" }} />
          </button>
        </div>

        <div className={`backup-state-card ${tone}`}>
          <span className={`check-dot ${tone}`} />
          <div>
            <b>{backupStatusLabel(health?.status)}</b>
            <p>{stateDescription(health)}</p>
          </div>
        </div>

        <div className="backup-detail-grid">
          {rows.map(([label, value]) => (
            <div className="backup-detail-item" key={label}>
              <span>{label}</span>
              <b>{value}</b>
            </div>
          ))}
        </div>

        {resultMessage && (
          <div className={`backup-modal-result ${checking ? "pending" : tone}`} role={tone === "down" ? "alert" : "status"}>
            {checking ? <span className="spinner" /> : <IcCheck width={14} height={14} />}
            {resultMessage}
          </div>
        )}

        <div className="backup-modal-actions">
          <button className="btn btn-primary" type="button" onClick={verifyNow} disabled={checking || system.backupConfig?.provider !== "firestore"}>
            <IcRefresh width={16} height={16} /> {checking ? "Verificando..." : "Verificar ahora"}
          </button>
          {cloudUrl ? (
            <a className="btn btn-ghost" href={cloudUrl} target="_blank" rel="noreferrer">
              <IcExternal width={16} height={16} /> Abrir en Google Cloud
            </a>
          ) : (
            <span className="btn btn-ghost disabled-like">
              <IcExternal width={16} height={16} /> Abrir en Google Cloud
            </span>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
