import { useEffect, useMemo, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import type { BackupHealth, System } from "../data/types";
import { backupErrorMessage, backupHealthMessage, checkBackupNow } from "../lib/monitoring";
import { backupScheduleLabel, backupStatusLabel, backupTone, googleCloudBackupUrl, retentionDays } from "../lib/backups";
import { dateTime } from "../lib/format";
import { IcAlert, IcCheck, IcCloud, IcDatabase, IcExternal, IcFirebase, IcPlus, IcRefresh, IcSave, IcServer } from "./icons";
import googleCloudLogo from "../../Google_Cloud_logo.svg";
import firebaseLogo from "../../New_Firebase_logo.svg";

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

/** Icono del bloque resumen segun el estado (mismo cálculo de tono existente). */
function summaryIcon(tone: string) {
  if (tone === "ok") return <IcCheck width={18} height={18} />;
  if (tone === "warn" || tone === "down") return <IcAlert width={18} height={18} />;
  return <IcCloud width={18} height={18} />;
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

  // Los valores siguen siendo dinámicos y provienen de los datos reales del sistema.
  const items: { label: string; value: string; icon: ReactNode; full?: boolean }[] = [
    { label: "Ultimo backup exitoso", value: safeDate(health?.latestSnapshotTime, "Todavia no se verifico"), icon: <IcSave width={15} height={15} /> },
    { label: "Estado del ultimo backup", value: health?.latestBackupState || missing, icon: <IcServer width={15} height={15} /> },
    { label: "Frecuencia", value: backupScheduleLabel(health?.scheduleType), icon: <IcRefresh width={15} height={15} /> },
    { label: "Retencion", value: retentionDays(health?.retentionSeconds), icon: <IcDatabase width={15} height={15} /> },
    { label: "Fecha de vencimiento", value: safeDate(health?.latestExpireTime), icon: <IcAlert width={15} height={15} /> },
    { label: "Ultima verificacion", value: safeDate(health?.checkedAt, "Todavia no se verifico"), icon: <IcCheck width={15} height={15} /> },
    { label: "Proyecto Google Cloud", value: system.backupConfig?.projectId || missing, icon: <IcCloud width={15} height={15} /> },
    { label: "Base Firestore", value: system.backupConfig?.databaseId || "(default)", icon: <IcFirebase width={15} height={15} /> },
    ...(health && health.consecutiveFailures > 0
      ? [{ label: "Errores consecutivos", value: String(health.consecutiveFailures), icon: <IcAlert width={15} height={15} /> }]
      : []),
    { label: "Fuente", value: health?.source || missing, icon: <IcServer width={15} height={15} />, full: true },
  ];

  return createPortal(
    <div className="modal-overlay" onMouseDown={onClose}>
      <div className="backup-modal" role="dialog" aria-modal="true" aria-labelledby="backup-modal-title" onMouseDown={(e) => e.stopPropagation()}>
        <header className="backup-modal-head">
          <span className="backup-head-icon" aria-hidden="true">
            <IcCloud width={22} height={22} />
          </span>
          <div className="backup-head-titles">
            <h3 id="backup-modal-title">Estado del backup</h3>
            <p>{system.name}</p>
          </div>
          <span className={`backup-status-badge ${tone}`}>
            <span className={`check-dot ${tone}`} />
            {backupStatusLabel(health?.status)}
          </span>
          <button className="backup-close" onClick={onClose} title="Cerrar" aria-label="Cerrar detalle de backup">
            <IcPlus width={18} height={18} style={{ transform: "rotate(45deg)" }} />
          </button>
        </header>

        <div className="backup-modal-body">
          <div className={`backup-state-card ${tone}`}>
            <span className="backup-state-ic" aria-hidden="true">{summaryIcon(tone)}</span>
            <div>
              <b>{backupStatusLabel(health?.status)}</b>
              <p>{stateDescription(health)}</p>
            </div>
          </div>

          <div className="backup-detail-grid">
            {items.map((item) => (
              <div className={`backup-detail-item ${item.full ? "span2" : ""}`} key={item.label}>
                <span className="bd-ic" aria-hidden="true">{item.icon}</span>
                <span className="bd-text">
                  <span className="bd-label">{item.label}</span>
                  <b className="bd-value">{item.value}</b>
                </span>
              </div>
            ))}
          </div>

          {resultMessage && (
            <div className={`backup-modal-result ${checking ? "pending" : tone}`} role={tone === "down" ? "alert" : "status"}>
              {checking ? <span className="spinner" /> : <IcCheck width={14} height={14} />}
              {resultMessage}
            </div>
          )}
        </div>

        <footer className="backup-modal-foot">
          <div className="backup-modal-actions">
            <button className="btn btn-primary" type="button" onClick={verifyNow} disabled={checking || system.backupConfig?.provider !== "firestore"}>
              {checking ? <span className="spinner" /> : <IcRefresh width={16} height={16} />}
              {checking ? "Verificando..." : "Verificar ahora"}
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

          <div className="backup-brands">
            <span className="backup-brands-caption">Servicio de respaldo potenciado por</span>
            <div className="backup-brands-logos">
              <img className="backup-brand-logo backup-brand-logo-firebase" src={firebaseLogo} alt="Firebase" loading="lazy" decoding="async" />
              <span className="brand-divider" aria-hidden="true" />
              <img className="backup-brand-logo backup-brand-logo-gcloud" src={googleCloudLogo} alt="Google Cloud" loading="lazy" decoding="async" />
            </div>
          </div>
        </footer>
      </div>
    </div>,
    document.body
  );
}
