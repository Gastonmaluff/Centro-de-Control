import { useState, type ReactNode } from "react";
import { useNav } from "../context/NavContext";
import { useSystemsCtx } from "../context/SystemsContext";
import { money, timeAgo } from "../lib/format";
import { IcChevronDown, IcExternal, IcGithub, IcMonitor, IcTasks } from "./icons";

function initials(s: string) {
  return s.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
}

function useSessionToggle(key: string) {
  const [open, setOpen] = useState(() => sessionStorage.getItem(key) === "open");
  const toggle = () => {
    setOpen((prev) => {
      const next = !prev;
      sessionStorage.setItem(key, next ? "open" : "closed");
      return next;
    });
  };
  return [open, toggle] as const;
}

export default function DashboardPanels() {
  return (
    <div className="top-panels">
      <ChargesPanel />
      <ActivityPanel />
    </div>
  );
}

function CollapsiblePanel({
  storageKey,
  title,
  summary,
  alert,
  children,
}: {
  storageKey: string;
  title: string;
  summary: ReactNode;
  alert?: boolean;
  children: ReactNode;
}) {
  const [open, toggle] = useSessionToggle(storageKey);
  return (
    <section className={`top-panel ${open ? "open" : ""}`}>
      <button className="top-panel-head" onClick={toggle} aria-expanded={open}>
        <span className="top-panel-title">{title}</span>
        <span className="top-panel-summary">{summary}</span>
        {alert && <span className="pill warn">Vencida</span>}
        <IcChevronDown width={16} height={16} className="panel-chevron" />
      </button>
      <div className="top-panel-body">
        <div className="top-panel-inner">{children}</div>
      </div>
    </section>
  );
}

function dueText(day?: number) {
  return day ? `Dia ${day}` : "Sin vencimiento";
}

function isOverdue(day?: number) {
  if (!day) return false;
  return day < new Date().getDate();
}

function ChargesPanel() {
  const { systems } = useSystemsCtx();
  const { setView } = useNav();
  const clients = systems.filter((s) => s.type === "client" && s.client?.monthly != null);
  const total = clients.reduce((a, s) => a + (s.client?.monthly ?? 0), 0);
  const overdue = clients.some((s) => s.client?.serviceStatus !== "ended" && isOverdue(s.client?.dueDay));

  return (
    <CollapsiblePanel
      storageKey="dashboard-monthly-open"
      title="Mensualidades"
      alert={overdue}
      summary={
        <>
          <b>{clients.length}</b> pendientes · <b>{money(total)}</b> mensual
        </>
      }
    >
      {clients.length === 0 ? (
        <p className="muted panel-empty">Sin sistemas de cliente con mensualidad.</p>
      ) : (
        <>
          <div className="panel-table compact">
            {clients.slice(0, 6).map((s) => {
              const overdueRow = s.client?.serviceStatus !== "ended" && isOverdue(s.client?.dueDay);
              return (
                <div className="panel-row" key={s.id}>
                  <div className="charge-ico" style={{ background: `linear-gradient(135deg, ${s.accent}, ${s.accent2})` }}>
                    {initials(s.client?.name || s.name)}
                  </div>
                  <div className="panel-cell main">
                    <b>{s.client?.name || s.name}</b>
                    <span>{s.name}</span>
                  </div>
                  <div className="panel-cell">
                    <b>{money(s.client?.monthly)}</b>
                    <span>Importe</span>
                  </div>
                  <div className="panel-cell">
                    <b>{dueText(s.client?.dueDay)}</b>
                    <span>Vencimiento</span>
                  </div>
                  <span className={`pill ${overdueRow ? "warn" : s.client?.serviceStatus === "ended" ? "" : "ok"}`}>
                    {overdueRow ? "Vencida" : s.client?.serviceStatus === "ended" ? "Finalizada" : "Pendiente"}
                  </span>
                </div>
              );
            })}
          </div>
          <button className="link-btn panel-link" onClick={() => setView("cobros")}>
            <IcExternal width={15} height={15} />
            Ver todas las mensualidades
          </button>
        </>
      )}
    </CollapsiblePanel>
  );
}

function ActivityPanel() {
  const { systems } = useSystemsCtx();
  const events = systems
    .flatMap((s) => {
      const out: { id: string; system: string; text: string; at: string; icon: typeof IcGithub }[] = [];
      if (s.git?.connected && s.git.date) out.push({ id: `${s.id}-git`, system: s.name, text: `Commit ${s.git.sha}`, at: s.git.date, icon: IcGithub });
      if (s.monitoring?.checkedAt) out.push({ id: `${s.id}-mon`, system: s.name, text: "Comprobacion realizada", at: s.monitoring.checkedAt, icon: IcMonitor });
      if (s.deploy?.checkedAt) out.push({ id: `${s.id}-deploy`, system: s.name, text: `Deploy ${s.deploy.status ?? "detectado"}`, at: s.deploy.checkedAt, icon: IcExternal });
      if (s.todoStats?.lastDoneAt) out.push({ id: `${s.id}-todo`, system: s.name, text: s.todoStats.lastDoneTitle ?? "Pendiente completado", at: s.todoStats.lastDoneAt, icon: IcTasks });
      return out;
    })
    .sort((a, b) => (b.at > a.at ? 1 : -1))
    .slice(0, 8);
  const latest = events[0];

  return (
    <CollapsiblePanel
      storageKey="dashboard-activity-open"
      title="Actividad reciente"
      summary={latest ? `${latest.text} · ${timeAgo(latest.at)}` : "Sin eventos recientes"}
    >
      {events.length === 0 ? (
        <p className="muted panel-empty">Todavia sin actividad. Se completara con commits, deploys, comprobaciones y tareas.</p>
      ) : (
        <div className="activity-list">
          {events.map((e) => {
            const Icon = e.icon;
            return (
              <div className="activity" key={e.id}>
                <div className="activity-ico" style={{ background: "var(--surface-hover)", color: "var(--text-muted)" }}>
                  <Icon width={15} height={15} />
                </div>
                <div>
                  <div className="activity-text">
                    <b>{e.system}</b> - {e.text}
                  </div>
                  <div className="activity-meta">{timeAgo(e.at)}</div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </CollapsiblePanel>
  );
}
