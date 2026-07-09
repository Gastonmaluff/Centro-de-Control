import type { JSX, ReactNode } from "react";
import type { ChargeStatus } from "../data/types";
import { useCharges } from "../hooks/useData";

const money = (n: number) => "$" + n.toLocaleString("es-AR");

const statusMeta: Record<ChargeStatus, { pill: string; label: string }> = {
  paid: { pill: "ok", label: "Pagado" },
  pending: { pill: "warn", label: "Pendiente" },
  "due-soon": { pill: "down", label: "Vence pronto" },
};

function initials(s: string) {
  return s
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function PageHead({ title, subtitle, action }: { title: string; subtitle: string; action?: ReactNode }) {
  return (
    <div className="page-head" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
      <div>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      {action}
    </div>
  );
}

/* ----------------------------------------------------------------- Cobros */

export function CobrosView() {
  const { data: charges } = useCharges();
  const paid = charges.filter((c) => c.status === "paid").reduce((a, c) => a + c.amount, 0);
  const pending = charges.filter((c) => c.status !== "paid").reduce((a, c) => a + c.amount, 0);

  return (
    <>
      <PageHead title="Cobros" subtitle="Cobros mensuales de todos tus sistemas y clientes." />
      <div className="view-cards">
        <div className="big-total paid">
          <div className="bt-label">Total cobrado</div>
          <div className="bt-value">{money(paid)}</div>
        </div>
        <div className="big-total pending">
          <div className="bt-label">Total pendiente</div>
          <div className="bt-value">{money(pending)}</div>
        </div>
        <div className="big-total">
          <div className="bt-label">Total del mes</div>
          <div className="bt-value">{money(paid + pending)}</div>
        </div>
      </div>

      <div className="table-card">
        <table className="data-table">
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Sistema</th>
              <th>Fecha</th>
              <th style={{ textAlign: "right" }}>Monto</th>
              <th style={{ textAlign: "right" }}>Estado</th>
            </tr>
          </thead>
          <tbody>
            {charges.map((c) => {
              const m = statusMeta[c.status];
              return (
                <tr key={c.id}>
                  <td>
                    <div className="cell-client">
                      <span className="cell-glyph" style={{ background: "linear-gradient(135deg,#4f46e5,#06b6d4)" }}>
                        {initials(c.client)}
                      </span>
                      <span className="cell-strong">{c.client}</span>
                    </div>
                  </td>
                  <td className="muted">{c.system}</td>
                  <td className="muted">{c.date}</td>
                  <td className="cell-money" style={{ textAlign: "right" }}>
                    {money(c.amount)}
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <span className={`pill ${m.pill}`}>{m.label}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

/* --------------------------------------------------------------- Clientes */

export function ClientesView() {
  const { data: charges } = useCharges();

  return (
    <>
      <PageHead title="Clientes" subtitle="Clientes activos y su sistema asociado." />
      <div className="table-card">
        <table className="data-table">
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Sistema</th>
              <th style={{ textAlign: "right" }}>Mensualidad</th>
              <th style={{ textAlign: "right" }}>Estado de cobro</th>
            </tr>
          </thead>
          <tbody>
            {charges.map((c) => {
              const m = statusMeta[c.status];
              return (
                <tr key={c.id}>
                  <td>
                    <div className="cell-client">
                      <span className="cell-glyph" style={{ background: "linear-gradient(135deg,#0ea5e9,#6366f1)" }}>
                        {initials(c.client)}
                      </span>
                      <span className="cell-strong">{c.client}</span>
                    </div>
                  </td>
                  <td className="muted">{c.system}</td>
                  <td className="cell-money" style={{ textAlign: "right" }}>
                    {money(c.amount)}
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <span className={`pill ${m.pill}`}>{m.label}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

/* ------------------------------------------------------------ Placeholder */

export function PlaceholderView({
  icon,
  title,
  text,
}: {
  icon: (p: { width?: number; height?: number }) => JSX.Element;
  title: string;
  text: string;
}) {
  const Icon = icon;
  return (
    <div className="placeholder">
      <div className="placeholder-inner">
        <div className="placeholder-ico">
          <Icon width={28} height={28} />
        </div>
        <h2>{title}</h2>
        <p>{text}</p>
        <span className="pill warn">Próximamente</span>
      </div>
    </div>
  );
}
