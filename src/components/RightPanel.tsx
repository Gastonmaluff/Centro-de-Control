import { useSystemsCtx } from "../context/SystemsContext";
import { money, timeAgo } from "../lib/format";
import { IcExternal, IcGithub } from "./icons";

function initials(s: string) {
  return s.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
}

export default function RightPanel() {
  return (
    <div className="right-panel">
      <ChargesPanel />
      <ActivityPanel />
    </div>
  );
}

function ChargesPanel() {
  const { systems } = useSystemsCtx();
  const clients = systems.filter((s) => s.type === "client" && s.client?.monthly != null);
  const total = clients.reduce((a, s) => a + (s.client?.monthly ?? 0), 0);

  return (
    <section className="panel">
      <div className="panel-head">
        <h3>Mensualidades</h3>
        <span className="pill">{clients.length}</span>
      </div>
      <div className="panel-body">
        {clients.length === 0 ? (
          <p className="muted" style={{ padding: "14px 8px", fontSize: 12.5 }}>
            Sin sistemas de cliente. Agregá uno con mensualidad para verlo acá.
          </p>
        ) : (
          <>
            {clients.map((s) => (
              <div className="charge" key={s.id}>
                <div className="charge-ico" style={{ background: `linear-gradient(135deg, ${s.accent}, ${s.accent2})` }}>
                  {initials(s.client?.name || s.name)}
                </div>
                <div className="charge-main">
                  <div className="charge-client">{s.client?.name || s.name}</div>
                  <div className="charge-date">{s.client?.dueDay ? `Vence día ${s.client.dueDay}` : s.name}</div>
                </div>
                <div className="charge-right">
                  <div className="charge-amount">{money(s.client?.monthly)}</div>
                </div>
              </div>
            ))}
            <div className="charge-totals">
              <div className="total-box paid">
                <div className="t-label">Mensual total</div>
                <div className="t-value">{money(total)}</div>
              </div>
              <div className="total-box">
                <div className="t-label">Clientes</div>
                <div className="t-value">{clients.length}</div>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="panel-foot">
        <button className="btn btn-ghost btn-block" disabled>
          <IcExternal width={15} height={15} />
          Historial de pagos (pronto)
        </button>
      </div>
    </section>
  );
}

function ActivityPanel() {
  const { systems } = useSystemsCtx();
  // Actividad derivada: último commit conocido de cada sistema conectado.
  const events = systems
    .filter((s) => s.git?.connected && s.git.date)
    .map((s) => ({ id: s.id, system: s.name, text: `Commit ${s.git!.sha}`, at: s.git!.date! }))
    .sort((a, b) => (b.at > a.at ? 1 : -1))
    .slice(0, 6);

  return (
    <section className="panel">
      <div className="panel-head">
        <h3>Actividad reciente</h3>
      </div>
      <div className="panel-body">
        {events.length === 0 ? (
          <p className="muted" style={{ padding: "14px 8px", fontSize: 12.5 }}>
            Todavía sin actividad. Se irá completando con commits, deploys y tareas a medida que analices tus sistemas.
          </p>
        ) : (
          events.map((e) => (
            <div className="activity" key={e.id}>
              <div className="activity-ico" style={{ background: "var(--surface-hover)", color: "var(--text-muted)" }}>
                <IcGithub width={15} height={15} />
              </div>
              <div>
                <div className="activity-text">
                  <b>{e.system}</b> — {e.text}
                </div>
                <div className="activity-meta">{timeAgo(e.at)}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
