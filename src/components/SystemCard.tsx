import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import type { System, TodoPriority } from "../data/types";
import { useSystemsCtx } from "../context/SystemsContext";
import { computeStatus, projectStatusInfo, statusInfo } from "../lib/status";
import { hrefs, money, timeAgo } from "../lib/format";
import { patchSystem } from "../firebase/systems";
import { fetchLastCommit } from "../lib/github";
import { checkUrl } from "../lib/monitoring";
import {
  IcCloud,
  IcDomain,
  IcEdit,
  IcExternal,
  IcFirebase,
  IcGithub,
  IcMore,
  IcRefresh,
  IcRocket,
  IcTasks,
  IcTrash,
} from "./icons";

const priorityInfo: Record<TodoPriority, { label: string; tone: string }> = {
  critical: { label: "Crítica", tone: "down" },
  high: { label: "Alta", tone: "warn" },
  medium: { label: "Media", tone: "muted" },
  low: { label: "Baja", tone: "muted" },
};

function TechRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="tech-row">
      <span className="tr-label">{label}</span>
      <span className="tr-value">{children}</span>
    </div>
  );
}

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
  const open = sys.todoStats?.open ?? 0;

  const handleDelete = async () => {
    setMenu(false);
    if (confirm(`¿Eliminar "${sys.name}" del panel? Esto no se puede deshacer.`)) {
      await removeSystem(sys.id);
    }
  };

  const handleWork = async () => {
    await patchSystem(sys.id, { lastWorkedAt: new Date().toISOString() });
    if (link.public) window.open(link.public, "_blank", "noreferrer");
  };

  const handleReanalyze = async () => {
    setMenu(false);
    setReanalyzing(true);
    try {
      const monitoring = sys.links.publicUrl ? await checkUrl(sys.links.publicUrl) : undefined;
      const gitInfo = sys.links.github ? await fetchLastCommit(sys.links.github) : undefined;
      const patch: Record<string, unknown> = {};
      if (monitoring) patch.monitoring = monitoring;
      if (gitInfo) patch.git = gitInfo;
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
          <div style={{ minWidth: 0 }}>
            <div className="sys-name">{sys.name}</div>
            <div className="sys-tag">{sys.description || projectStatusInfo[sys.projectStatus]}</div>
          </div>
          <span className={`status-chip ${si.tone}`}>
            <span className={`led ${si.tone === "muted" ? "" : si.tone}`} />
            {si.label}
          </span>
          <div className="card-menu" ref={menuRef}>
            <button className="card-menu-btn" onClick={() => setMenu((v) => !v)} title="Más opciones" aria-label="Más opciones">
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
                <button onClick={handleReanalyze}>
                  <IcRefresh width={15} height={15} /> Reanalizar
                </button>
                <button className="danger" onClick={handleDelete}>
                  <IcTrash width={15} height={15} /> Eliminar
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="tech-rows">
          <TechRow label="Última comprobación">
            {reanalyzing ? (
              <span className="muted">verificando…</span>
            ) : mon?.checkedAt && !mon.error && mon.up !== undefined ? (
              <>
                {timeAgo(mon.checkedAt)}
                <span className="tr-src">{mon.mode === "full" ? "monitoreo completo" : "monitoreo básico"}</span>
              </>
            ) : (
              <span className="tag-off" title={mon?.error}>
                No verificado
              </span>
            )}
          </TechRow>
          <TechRow label="Tiempo de respuesta">
            {mon?.up && mon.responseMs != null ? `${mon.responseMs} ms` : <span className="tag-off">—</span>}
          </TechRow>
          <TechRow label="Último commit">
            {git?.connected ? (
              <>
                <code className="sha">{git.sha}</code>
                <span className="tr-src">{timeAgo(git.date)}</span>
              </>
            ) : (
              <span className="tag-off">{sys.links.github ? "No conectado" : "Sin GitHub"}</span>
            )}
          </TechRow>
          <TechRow label="Último deploy">
            <span className="tag-off">No disponible</span>
          </TechRow>
        </div>

        <div className="sys-sub">
          <button className="pend-chip" onClick={() => openTodos(sys)}>
            <IcTasks width={14} height={14} />
            {open === 0 ? "Sin pendientes" : `${open} pendiente${open > 1 ? "s" : ""}`}
          </button>
          {sys.todoStats?.topPriorityTitle && sys.todoStats.topPriority && (
            <span className={`pill ${priorityInfo[sys.todoStats.topPriority].tone === "muted" ? "" : priorityInfo[sys.todoStats.topPriority].tone}`}>
              {priorityInfo[sys.todoStats.topPriority].label}: {sys.todoStats.topPriorityTitle}
            </span>
          )}
          <span className="sys-activity muted">Actividad {timeAgo(sys.lastWorkedAt ?? git?.date)}</span>
        </div>

        {sys.type === "client" && sys.client && (
          <div className="sys-client">
            <span>👤 {sys.client.name || "Cliente"}</span>
            {sys.client.monthly != null && (
              <span className="sys-client-amt">{money(sys.client.monthly)}/mes</span>
            )}
          </div>
        )}

        <div className="sys-footer">
          <button className="btn-work" onClick={handleWork}>
            <IcRocket width={16} height={16} />
            Trabajar ahora
          </button>
          <div className="quick-links">
            <QLink href={link.public} title="Abrir sistema"><IcExternal width={16} height={16} /></QLink>
            <QLink href={link.github} title="GitHub"><IcGithub width={16} height={16} /></QLink>
            <QLink href={link.firebase} title="Firebase"><IcFirebase width={16} height={16} /></QLink>
            <QLink href={link.cloudflare} title="Cloudflare"><IcCloud width={16} height={16} /></QLink>
            <QLink href={link.domain} title="Dominio"><IcDomain width={16} height={16} /></QLink>
          </div>
        </div>
      </div>
    </article>
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
