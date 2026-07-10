import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import type { ComponentState, System, TodoPriority } from "../data/types";
import { useSystemsCtx } from "../context/SystemsContext";
import { computeStatus, projectStatusInfo, statusInfo } from "../lib/status";
import { componentStateInfo, getTechnicalComponents, monitoringModeLabel } from "../lib/technical";
import { dateTime, hrefs, money, timeAgo } from "../lib/format";
import { patchSystem } from "../firebase/systems";
import { fetchLastCommit } from "../lib/github";
import { runMonitorSystem } from "../lib/monitoring";
import {
  IcCloud,
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

const priorityInfo: Record<TodoPriority, { label: string; tone: string }> = {
  critical: { label: "Critica", tone: "down" },
  high: { label: "Alta", tone: "warn" },
  medium: { label: "Media", tone: "muted" },
  low: { label: "Baja", tone: "muted" },
};

const stateIcon: Record<ComponentState, string> = {
  ok: "●",
  warn: "●",
  down: "●",
  unknown: "●",
};

export default function SystemCard({ sys }: { sys: System }) {
  const style = { "--acc": sys.accent, "--acc2": sys.accent2 } as CSSProperties;
  const { openEdit, removeSystem, openTodos } = useSystemsCtx();
  const [menu, setMenu] = useState(false);
  const [reanalyzing, setReanalyzing] = useState(false);
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
  const deploy = sys.deploy;
  const open = sys.todoStats?.open ?? 0;
  const components = getTechnicalComponents(sys);
  const response = components.find((c) => c.key === "application")?.responseMs ?? mon?.responseMs;

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
    } finally {
      setReanalyzing(false);
    }
  };

  return (
    <article className="syscard" style={style}>
      <div className="syscard-band" />
      <div className="syscard-body">
        <div className="syscard-head">
          <div className="sys-glyph">{sys.glyph}</div>
          <div className="sys-title">
            <div className="sys-name">{sys.name}</div>
            <div className="sys-tag">{sys.description || projectStatusInfo[sys.projectStatus]}</div>
          </div>
          <span className={`status-chip ${si.tone}`}>
            <span className={`led ${si.tone === "muted" ? "" : si.tone}`} />
            {si.label}
          </span>
        </div>

        <section className="card-block">
          <div className="card-block-head">
            <span>Estado tecnico</span>
            <span className="monitor-mode">{reanalyzing ? "Verificando..." : monitoringModeLabel(sys)}</span>
          </div>
          <div className="tech-checks">
            {components.map((check) => (
              <TechCheck key={check.key} check={check} />
            ))}
          </div>
        </section>

        <section className="info-grid" aria-label="Informacion secundaria">
          <InfoItem label="Respuesta" value={response != null ? `${response} ms` : "No verificada"} />
          <InfoItem
            label="Commit"
            value={git?.connected ? git.sha ?? "Conectado" : sys.links.github ? "No conectado" : "Sin GitHub"}
            detail={git?.date ? timeAgo(git.date) : undefined}
            code={Boolean(git?.sha)}
          />
          <InfoItem
            label="Deploy"
            value={deploy?.status ? deploy.status : "No disponible"}
            detail={deploy?.checkedAt ? timeAgo(deploy.checkedAt) : undefined}
            tone={deploy?.status === "failed" ? "down" : deploy?.status === "success" ? "ok" : undefined}
          />
          <button className="info-item info-button" onClick={() => openTodos(sys)}>
            <span>Pendientes</span>
            <b>{open === 0 ? "Sin pendientes" : `${open} abierto${open > 1 ? "s" : ""}`}</b>
          </button>
        </section>

        {sys.todoStats?.topPriorityTitle && sys.todoStats.topPriority && (
          <div className="sys-sub">
            <span className={`pill ${priorityInfo[sys.todoStats.topPriority].tone === "muted" ? "" : priorityInfo[sys.todoStats.topPriority].tone}`}>
              {priorityInfo[sys.todoStats.topPriority].label}: {sys.todoStats.topPriorityTitle}
            </span>
            <span className="sys-activity muted">Actividad {timeAgo(sys.lastWorkedAt ?? git?.date ?? deploy?.checkedAt)}</span>
          </div>
        )}

        {sys.type === "client" && sys.client && (
          <div className="sys-client">
            <span>{sys.client.name || "Cliente"}</span>
            {sys.client.monthly != null && <span className="sys-client-amt">{money(sys.client.monthly)}/mes</span>}
          </div>
        )}

        <div className="sys-footer">
          <div className="quick-links">
            <QLink href={link.public} title="Abrir aplicacion"><IcExternal width={16} height={16} /></QLink>
            <QLink href={link.admin} title="Abrir panel administrativo"><IcServer width={16} height={16} /></QLink>
            <QLink href={link.github} title="GitHub"><IcGithub width={16} height={16} /></QLink>
            <QLink href={link.firebase} title="Firebase"><IcFirebase width={16} height={16} /></QLink>
            <QLink href={link.cloudflare} title="Cloudflare"><IcCloud width={16} height={16} /></QLink>
            <QLink href={link.domain} title="Dominio"><IcDomain width={16} height={16} /></QLink>
          </div>

          <div className="card-menu" ref={menuRef}>
            <button className="qlink" onClick={() => setMenu((v) => !v)} title="Mas opciones" aria-label="Mas opciones">
              <IcMore width={17} height={17} />
            </button>
            {menu && (
              <div className="card-dropdown">
                <button onClick={() => { setMenu(false); openEdit(sys); }}>
                  <IcEdit width={15} height={15} /> Editar
                </button>
                <button onClick={() => { setMenu(false); openTodos(sys); }}>
                  <IcTasks width={15} height={15} /> Ver pendientes
                </button>
                <button onClick={handleReanalyze} disabled={reanalyzing}>
                  <IcRefresh width={15} height={15} /> {reanalyzing ? "Reanalizando" : "Reanalizar"}
                </button>
                <button className="danger" onClick={handleDelete}>
                  <IcTrash width={15} height={15} /> Eliminar
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function TechCheck({ check }: { check: ReturnType<typeof getTechnicalComponents>[number] }) {
  const info = componentStateInfo[check.state];
  const meta = [
    check.responseMs != null ? `${check.responseMs} ms` : null,
    check.source,
    check.checkedAt ? dateTime(check.checkedAt) : null,
  ].filter(Boolean);
  const title = `${check.label}: ${info.label}. ${check.message ?? "Sin mensaje"}. ${meta.join(" · ")}`;

  return (
    <div className={`tech-check ${info.tone}`} title={title}>
      <span className={`check-dot ${info.tone}`}>{stateIcon[check.state]}</span>
      <span className="check-main">
        <b>{check.label}</b>
        <small>{check.message ?? info.label} · {check.source ?? "sin fuente"}</small>
      </span>
      <span className="check-meta">{check.responseMs != null ? `${check.responseMs} ms` : timeAgo(check.checkedAt)}</span>
    </div>
  );
}

function InfoItem({
  label,
  value,
  detail,
  tone,
  code,
}: {
  label: string;
  value: string;
  detail?: string;
  tone?: "ok" | "warn" | "down";
  code?: boolean;
}) {
  return (
    <div className="info-item">
      <span>{label}</span>
      <b className={tone ? `text-${tone}` : undefined}>{code ? <code className="sha">{value}</code> : value}</b>
      {detail && <small>{detail}</small>}
    </div>
  );
}

function QLink({ href, title, children }: { href?: string; title: string; children: ReactNode }) {
  if (!href) {
    return (
      <span className="qlink disabled" title={`${title} (no configurado)`}>
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
