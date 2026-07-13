import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import type { ComponentKey, System } from "../data/types";
import { useSystemsCtx } from "../context/SystemsContext";
import { computeStatus, projectStatusInfo, statusInfo } from "../lib/status";
import { componentStateInfo, getTechnicalComponents } from "../lib/technical";
import { dateTime, hrefs, money } from "../lib/format";
import { headerAdjustFrom, headerContentFrom } from "../lib/headerImage";
import { patchSystem } from "../firebase/systems";
import { fetchLastCommit } from "../lib/github";
import { backupErrorMessage, backupHealthMessage, checkBackupNow, runMonitorSystem } from "../lib/monitoring";
import { googleCloudBackupUrl } from "../lib/backups";
import BackupDetailsModal from "./BackupDetailsModal";
import SystemCardHeader from "./SystemCardHeader";
import {
  IcCloud,
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
  const appCheck = components.find((c) => c.key === "application");
  const domainCheck = components.find((c) => c.key === "domain");
  const backupCheck = components.find((c) => c.key === "backup");
  const serviceChecks = (["authentication", "database", "functions", "storage"] as ComponentKey[]).map((key) => components.find((c) => c.key === key) ?? serviceFallback(key));
  const showHeaderImage = Boolean(sys.headerImageUrl && sys.headerImageEnabled !== false);
  const headerIncludesLogo = showHeaderImage && sys.headerImageIncludesLogo === true;
  const headerContent = headerContentFrom(sys);
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
      <SystemCardHeader
        imageUrl={showHeaderImage ? sys.headerImageUrl : undefined}
        imageAlt={sys.headerImageAlt || `${sys.name} - imagen de cabecera`}
        imageAdjust={headerAdjustFrom(sys)}
        content={headerContent}
        primary={primary}
        secondary={secondary}
        glyph={sys.glyph}
        name={sys.name}
        description={sys.description || projectStatusInfo[sys.projectStatus]}
        includesLogo={headerIncludesLogo}
        status={status}
        statusLabel={si.label}
        statusTone={si.tone}
        onDetailClick={() => openEdit(sys)}
      />

      <div className="syscard-body">
        <section className="sys-tech" aria-label="Estado tecnico">
          <span className="sys-block-label">Estado tecnico</span>
          {backupNotice && (
            <div className={`backup-inline-alert ${backupNotice.tone}`} role={backupNotice.tone === "down" ? "alert" : "status"}>
              {backupNotice.text}
            </div>
          )}
          <div className="sys-tech-grid">
            <div className="tech-column tech-column-stack">
              {appCheck && <TechCheck check={appCheck} systemName={sys.name} compact />}
              {domainCheck && <TechCheck check={domainCheck} systemName={sys.name} compact />}
            </div>
            {backupCheck && (
              <TechCheck
                check={backupCheck}
                onBackupClick={() => setBackupDetailsOpen(true)}
                systemName={sys.name}
                className="tech-column"
              />
            )}
            <div className="tech-column tech-services" aria-label="Servicios">
              <b className="tech-services-title">Servicios</b>
              <div className="tech-services-grid">
                {serviceChecks.map((check) => (
                  <ServiceStatus key={check.key} check={check} />
                ))}
              </div>
            </div>
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
  compact = false,
  className,
}: {
  check: ReturnType<typeof getTechnicalComponents>[number];
  onBackupClick?: () => void;
  systemName: string;
  compact?: boolean;
  className?: string;
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
      <span className={`check-main ${compact ? "compact" : ""}`}>
        <b>{check.label}</b>
        <small>{check.message ?? info.label}</small>
      </span>
    </>
  );

  if (onBackupClick) {
    return (
      <button
        className={`tech-check tech-check-button ${info.tone} ${className ?? ""}`}
        type="button"
        onClick={onBackupClick}
        aria-label={`Abrir detalle de backup de ${systemName}: ${check.message ?? info.label}`}
      >
        {content}
      </button>
    );
  }

  return (
    <div className={`tech-check ${info.tone} ${className ?? ""}`} title={title}>
      {content}
    </div>
  );
}

function ServiceStatus({ check }: { check: ReturnType<typeof getTechnicalComponents>[number] }) {
  const info = componentStateInfo[check.state];
  return (
    <span className="service-status" title={`${check.label}: ${info.label}. ${check.message ?? "Sin mensaje"}`}>
      <span className={`check-dot ${info.tone}`} />
      <span>{serviceLabel(check.key)}</span>
    </span>
  );
}

function serviceLabel(key: ComponentKey): string {
  switch (key) {
    case "authentication":
      return "Authentication";
    case "database":
      return "Database";
    case "functions":
      return "Functions";
    case "storage":
      return "Storage";
    default:
      return key;
  }
}

function serviceFallback(key: ComponentKey): ReturnType<typeof getTechnicalComponents>[number] {
  return {
    key,
    label: serviceLabel(key),
    state: "unknown",
    configured: false,
    critical: false,
    source: "health-endpoint",
    message: "No configurado",
  };
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
