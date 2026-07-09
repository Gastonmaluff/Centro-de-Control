import type { JSX } from "react";
import type { ActivityItem, Charge, ChargeStatus } from "../data/types";
import { useActivity, useCharges } from "../hooks/useData";
import { IcCard, IcCheck, IcExternal, IcRocket, IcSave } from "./icons";

const money = (n: number) => "$" + n.toLocaleString("es-AR");

const chargeMeta: Record<ChargeStatus, { pill: string; label: string; grad: string }> = {
  paid: { pill: "ok", label: "Pagado", grad: "linear-gradient(135deg,#16a34a,#22c55e)" },
  pending: { pill: "warn", label: "Pendiente", grad: "linear-gradient(135deg,#d97706,#f59e0b)" },
  "due-soon": { pill: "down", label: "Vence pronto", grad: "linear-gradient(135deg,#dc2626,#f97316)" },
};

function initials(s: string) {
  return s
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
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
  const { data: charges } = useCharges();
  const paid = charges.filter((c) => c.status === "paid").reduce((a, c) => a + c.amount, 0);
  const pending = charges.filter((c) => c.status !== "paid").reduce((a, c) => a + c.amount, 0);

  return (
    <section className="panel">
      <div className="panel-head">
        <h3>Cobros del mes</h3>
        <span className="pill warn">Julio</span>
      </div>
      <div className="panel-body">
        {charges.map((c: Charge) => {
          const m = chargeMeta[c.status];
          return (
            <div className="charge" key={c.id}>
              <div className="charge-ico" style={{ background: m.grad }}>
                {initials(c.client)}
              </div>
              <div className="charge-main">
                <div className="charge-client">{c.client}</div>
                <div className="charge-date">Cobro · {c.date}</div>
              </div>
              <div className="charge-right">
                <div className="charge-amount">{money(c.amount)}</div>
                <span className={`pill ${m.pill}`} style={{ marginTop: 3 }}>
                  {m.label}
                </span>
              </div>
            </div>
          );
        })}

        <div className="charge-totals">
          <div className="total-box paid">
            <div className="t-label">Total cobrado</div>
            <div className="t-value">{money(paid)}</div>
          </div>
          <div className="total-box pending">
            <div className="t-label">Total pendiente</div>
            <div className="t-value">{money(pending)}</div>
          </div>
        </div>
      </div>
      <div className="panel-foot">
        <button className="btn btn-ghost btn-block">
          <IcExternal width={15} height={15} />
          Ver historial
        </button>
      </div>
    </section>
  );
}

const activityMeta: Record<
  ActivityItem["kind"],
  { icon: (p: { width?: number; height?: number }) => JSX.Element; bg: string; fg: string }
> = {
  deploy: { icon: IcRocket, bg: "var(--brand-weak)", fg: "var(--brand-text)" },
  backup: { icon: IcSave, bg: "var(--ok-weak)", fg: "var(--ok)" },
  payment: { icon: IcCard, bg: "var(--ok-weak)", fg: "var(--ok)" },
  update: { icon: IcCheck, bg: "var(--warn-weak)", fg: "var(--warn)" },
};

function ActivityPanel() {
  const { data: activity } = useActivity();
  return (
    <section className="panel">
      <div className="panel-head">
        <h3>Actividad reciente</h3>
        <button className="link-btn">Ver todo</button>
      </div>
      <div className="panel-body">
        {activity.map((a) => {
          const m = activityMeta[a.kind];
          const Icon = m.icon;
          return (
            <div className="activity" key={a.id}>
              <div className="activity-ico" style={{ background: m.bg, color: m.fg }}>
                <Icon width={15} height={15} />
              </div>
              <div>
                <div className="activity-text">
                  <b>{a.system}</b> — {a.text}
                </div>
                <div className="activity-meta">{a.time}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
