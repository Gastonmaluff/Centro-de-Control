import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import type { ComponentState, System } from "../data/types";
import { useSystemsCtx } from "../context/SystemsContext";
import { computeStatus, projectStatusInfo, statusInfo } from "../lib/status";
import { componentStateInfo, getTechnicalComponents } from "../lib/technical";
import { dateTime, hrefs, money, timeAgo } from "../lib/format";
import { headerAdjustFrom, headerImageStyle } from "../lib/headerImage";
import { patchSystem } from "../firebase/systems";
import { fetchLastCommit } from "../lib/github";
import { backupErrorMessage, backupHealthMessage, checkBackupNow, runMonitorSystem } from "../lib/monitoring";
import { googleCloudBackupUrl } from "../lib/backups";
import BackupDetailsModal from "./BackupDetailsModal";
import LiveMonitorIndicator from "./LiveMonitorIndicator";
import {
  IcCloud,
  IcChevronDown,
  IcDatabase,
  IcDomain,
  IcEdit,
  IcExternal,
  IcFirebase,
  IcGithub,
  IcMore,
  IcRefresh,
  IcServer,
  IcTasks,
  IcTrash,
} from "./icons";

export default function SystemCard({ sys }: { sys: System }) {
  const primary = sys.primaryColor ?? sys.accent;
  const secondary = sys.secondaryColor ?? sys.accent2;
  const style = { "--acc": primary, "--acc2": secondary } as CSSProperties;
  const { openEdit, removeSystem, openTodos } = useSystemsCtx();
  const [menu, setMenu] = useState(false);
  const [reanalyzing, setReanalyzing] = useState(false);
  const [backupChecking, setBackupChecking] = useState(false);
  const [backupNotice, setBackupNotice] = useState<{ tone: "ok" | "warn" | "down" | "pending"; text: string } | null>(null);
  const [backupDetailsOpen, setBackupDetailsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menu) return;
    const onDoc = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenu(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [menu]);

  const status = computeStatus(sys);
  const si = statusInfo[status];
  const link = hrefs(sys.links);
  const mon = sys.monitoring;
  const git = sys.git;
  const open = sys.todoStats?.open ?? 0;
  const components = getTechnicalComponents(sys);
  const response = components.find((c) => c.key === "application")?.responseMs ?? mon?.responseMs;
  const techChecks = ["application", "domain", "backup"].flatMap((key) => components.find((c) => c.key === key) ?? []);
  const showHeaderImage = Boolean(sys.headerImageUrl && sys.headerImageEnabled !== false);
  const headerIncludesLogo = showHeaderImage && sys.headerImageIncludesLogo === true;
  const backupUrl = googleCloudBackupUrl(sys.backupConfig);

  const handleDelete = async () => {
    setMenu(false);
    if (confirm(`Eliminar "${sys.name}" del panel? Esto no se puede deshacer.`)) {
      await removeSystem(sys.id);
    }
  };

  const handleReanalyze = async () => {
    setMenu(false);
    setReanalyzing(true);
    try {
      const checked = await runMonitorSystem(sys.id);
      const gitInfo = sys.links.github ? await fetchLastCommit(sys.links.github) : undefined;
      const patch: Record<string, unknown> = {};
      if (gitInfo) patch.git = gitInfo;
      if (!checked && !gitInfo) patch.updatedAt = new Date().toISOString();
      if (Object.keys(patch).length) await patchSystem(sys.id, patch);
      if (sys.backupConfig?.provider === "firestore" && sys.backupConfig.enabled !== false) {
        await checkBackupNow(sys.id);
      }
    } finally {
      setReanalyzing(false);
    }
  };

  const handleBackupCheck = async () => {
    setMenu(false);
    setBackupChecking(true);
    setBackupNotice({ tone: "pending", text: "Verificando backup..." });
    try {
      const health = await checkBackupNow(sys.id);
      const tone = health.status === "healthy" ? "ok" : health.status === "error" ? "down" : health.status === "connection_required" ? "pending" : "warn";
      setBackupNotice({ tone, text: backupHealthMessage(health) });
      console.info("checkBackupNow result", { systemId: sys.id, health });
    } catch (err) {
      console.error("checkBackupNow failed", { systemId: sys.id, error: err });
      setBackupNotice({ tone: "down", text: backupErrorMessage(err) });
    } finally {
      setBackupChecking(false);
    }
  };

  return (
    <article className="syscard" style={style}>
      <header className={`sys-hero ${headerIncludesLogo ? "includes-logo" : ""}`}>
        {showHeaderImage && (
          <img
            className="sys-hero-image"
            src={sys.headerImageUrl}
            alt={sys.headerImageAlt || `${sys.name} - imagen de cabecera`}
            style={headerImageStyle(headerAdjustFrom(sys))}
          />
        )}
        <div className="sys-hero-wash" />
        <div className="sys-hero-content">
          {!headerIncludesLogo && <div className="sys-glyph" aria-hidden="true">{sys.glyph}</div>}
          <div className="sys-title">
            <div className="sys-name">{sys.name}</div>
            <div className="sys-tag">{sys.description || projectStatusInfo[sys.projectStatus]}</div>
            <LiveMonitorIndicator status={status} />
          </div>
          <span className={`status-chip ${si.tone}`}>
            <span className={`led ${si.tone === "muted" ? "" : si.tone}`} />
            {si.label}
          </span>
        </div>
        <button className="sys-detail-btn" type="button" onClick={() => openEdit(sys)}>
          Ver detalles <IcChevronDown width={15} height={15} />
        </button>
      </header>

      <div className="syscard-body">
        <section className="sys-tech" aria-label="Estado tecnico">
          <span className="sys-block-label">Estado tecnico</span>
          {backupNotice && (
            <div className={`backup-inline-alert ${backupNotice.tone}`} role={backupNotice.tone === "down" ? "alert" : "status"}>
              {backupNotice.text}
            </div>
          )}
          <div className="sys-tech-grid">
            {techChecks.map((check) => (
              <TechCheck key={check.key} check={check} onBackupClick={check.key === "backup" ? () => setBackupDetailsOpen(true) : undefined} systemName={sys.name} />
            ))}
            <ModeCheck mode={mon?.mode} label="Monitoreo" checkedAt={mon?.checkedAt} reanalyzing={reanalyzing} />
          </div>
        </section>

        <section className="sys-info" aria-label="Informacion del sistema">
          <span className="sys-block-label">Informacion</span>
          <div className="sys-info-grid">
          <InfoItem label="Ultima comprobacion" value={mon?.checkedAt ? dateTime(mon.checkedAt) : "Sin comprobar"} />
          <InfoItem label="Respuesta" value={response != null ? `${response} ms` : "No verificada"} />
          <InfoItem label="Ultimo commit" value={git?.connected ? git.sha ?? "Conectado" : sys.links.github ? "No conectado" : "Sin GitHub"} code={Boolean(git?.sha)} />
          <button className="info-item info-button" onClick={() => openTodos(sys)}>
            <span>Pendientes</span>
            <b>{open === 0 ? "Sin pendientes" : `${open} abierto${open > 1 ? "s" : ""}`}</b>
          </button>
          </div>
        </section>

        <footer className="sys-footer">
          {sys.type === "client" && sys.client ? (
            <div className="sys-client-line">
              <span>{sys.client.name || "Cliente"}</span>
              <b>{money(sys.client.monthly)}</b>
              <small>{sys.client.dueDay ? `Vence el dia ${sys.client.dueDay}` : "Sin vencimiento"}</small>
            </div>
          ) : <span className="sys-footer-caption">Accesos rapidos</span>}
          <section className="sys-actions" aria-label="Accesos rapidos">
            <QLink href={link.public} title="Abrir aplicacion"><IcExternal width={16} height={16} /></QLink>
            <QLink href={link.admin} title="Abrir panel administrativo"><IcServer width={16} height={16} /></QLink>
            <QLink href={link.github} title="GitHub"><IcGithub width={16} height={16} /></QLink>
            <QLink href={link.firebase} title="Firebase"><IcFirebase width={16} height={16} /></QLink>
            <QLink href={backupUrl} title="Abrir backups en Google Cloud" disabledTitle="Backup no configurado"><IcDatabase width={16} height={16} /></QLink>
            <QLink href={link.cloudflare} title="Cloudflare"><IcCloud width={16} height={16} /></QLink>
            <QLink href={link.domain} title="Dominio"><IcDomain width={16} height={16} /></QLink>
            <div className="card-menu" ref={menuRef}>
              <button className="qlink" onClick={() => setMenu((v) => !v)} title="Mas opciones" aria-label="Mas opciones">
                <IcMore width={17} height={17} />
              </button>
              {menu && (
                <div className="card-dropdown">
                  <button onClick={() => { setMenu(false); openEdit(sys); }}><IcEdit width={15} height={15} /> Editar</button>
                  <button onClick={() => { setMenu(false); openTodos(sys); }}><IcTasks width={15} height={15} /> Ver pendientes</button>
                  <button onClick={handleReanalyze} disabled={reanalyzing || backupChecking}><IcRefresh width={15} height={15} /> {reanalyzing ? "Reanalizando" : "Reanalizar"}</button>
                  <button onClick={handleBackupCheck} disabled={backupChecking || sys.backupConfig?.provider !== "firestore"}>
                    <IcCloud width={15} height={15} /> {backupChecking ? "Verificando backup..." : "Verificar backup"}
                  </button>
                  <button className="danger" onClick={handleDelete}><IcTrash width={15} height={15} /> Eliminar</button>
                </div>
              )}
            </div>
          </section>
        </footer>
      </div>
      {backupDetailsOpen && <BackupDetailsModal system={sys} onClose={() => setBackupDetailsOpen(false)} />}
    </article>
  );
}

function TechCheck({
  check,
  onBackupClick,
  systemName,
}: {
  check: ReturnType<typeof getTechnicalComponents>[number];
  onBackupClick?: () => void;
  systemName: string;
}) {
  const info = componentStateInfo[check.state];
  const backup = check as typeof check & {
    retentionSeconds?: number | null;
    scheduleType?: "daily" | "weekly" | "unknown" | null;
    lastSuccessAt?: string;
    latestExpireTime?: string | null;
  };
  const retention = backup.retentionSeconds ? `${Math.round(backup.retentionSeconds / 86400)} dias` : null;
  const schedule = backup.scheduleType ? backup.scheduleType === "daily" ? "diaria" : backup.scheduleType === "weekly" ? "semanal" : "desconocida" : null;
  const latest = backup.lastSuccessAt ? `Ultimo backup: ${dateTime(backup.lastSuccessAt)}` : null;
  const expires = backup.latestExpireTime ? `Vence: ${dateTime(backup.latestExpireTime)}` : null;
  const meta = [
    check.responseMs != null ? `${check.responseMs} ms` : null,
    check.source,
    check.checkedAt ? dateTime(check.checkedAt) : null,
    schedule ? `Frecuencia: ${schedule}` : null,
    retention ? `Retencion: ${retention}` : null,
    latest,
    expires,
  ].filter(Boolean);
  const title = `${check.label}: ${info.label}. ${check.message ?? "Sin mensaje"}. ${meta.join(" - ")}`;
  const content = (
    <>
      <span className={`check-dot ${info.tone}`} />
      <span className="check-main">
        <b>{check.label}</b>
        <small>{check.message ?? info.label}</small>
      </span>
    </>
  );

  if (onBackupClick) {
    return (
      <button
        className={`tech-check tech-check-button ${info.tone}`}
        type="button"
        onClick={onBackupClick}
        aria-label={`Abrir detalle de backup de ${systemName}: ${check.message ?? info.label}`}
      >
        {content}
      </button>
    );
  }

  return (
    <div className={`tech-check ${info.tone}`} title={title}>
      {content}
    </div>
  );
}

function ModeCheck({ mode, label, checkedAt, reanalyzing }: { mode?: "basic" | "full"; label: string; checkedAt?: string; reanalyzing: boolean }) {
  const state: ComponentState = mode === "full" ? "ok" : mode === "basic" ? "unknown" : "unknown";
  const info = componentStateInfo[state];
  return (
    <div className={`tech-check ${info.tone}`} title={`${label} - ${checkedAt ? dateTime(checkedAt) : "sin comprobacion"}`}>
      <span className={`check-dot ${info.tone}`} />
      <span className="check-main">
        <b>{label}</b>
        <small>{reanalyzing ? "Verificando..." : mode === "full" ? "Completo" : mode === "basic" ? "Basico" : checkedAt ? timeAgo(checkedAt) : "Sin comprobacion"}</small>
      </span>
    </div>
  );
}

function InfoItem({
  label,
  value,
  tone,
  code,
}: {
  label: string;
  value: string;
  tone?: "ok" | "warn" | "down";
  code?: boolean;
}) {
  return (
    <div className="info-item">
      <span>{label}</span>
      <b className={tone ? `text-${tone}` : undefined}>{code ? <code className="sha">{value}</code> : value}</b>
    </div>
  );
}

function QLink({ href, title, disabledTitle, children }: { href?: string; title: string; disabledTitle?: string; children: ReactNode }) {
  if (!href) {
    return (
      <span className="qlink disabled" title={disabledTitle ?? `${title} (no configurado)`}>
        {children}
      </span>
    );
  }
  return (
    <a className="qlink" href={href} target="_blank" rel="noreferrer" title={title}>
      {children}
    </a>
  );
}
