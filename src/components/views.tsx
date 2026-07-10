import type { JSX, ReactNode } from "react";
import { useSystemsCtx } from "../context/SystemsContext";
import { money } from "../lib/format";
import type { System } from "../data/types";

const serviceLabel: Record<NonNullable<System["client"]>["serviceStatus"] & string, { label: string; tone: string }> = {
  active: { label: "Activo", tone: "ok" },
  paused: { label: "Pausado", tone: "warn" },
  ended: { label: "Finalizado", tone: "" },
};

function initials(s: string) {
  return s.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
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

function EmptyClients({ what }: { what: string }) {
  return (
    <div className="empty-state">
      <div className="empty-ico" style={{ background: "var(--surface-hover)", color: "var(--text-muted)" }}>
        👤
      </div>
      <h3>Sin {what}</h3>
      <p>Agregá un sistema de tipo “cliente” con su mensualidad para verlo acá.</p>
    </div>
  );
}

/* ----------------------------------------------------------------- Cobros */

export function CobrosView() {
  const { systems } = useSystemsCtx();
  const clientSystems = systems.filter((s) => s.type === "client" && s.client);
  const monthlyTotal = clientSystems.reduce((a, s) => a + (s.client?.monthly ?? 0), 0);
  const active = clientSystems.filter((s) => s.client?.serviceStatus !== "ended");
  const activeTotal = active.reduce((a, s) => a + (s.client?.monthly ?? 0), 0);

  return (
    <>
      <PageHead title="Cobros" subtitle="Mensualidades de tus sistemas de cliente. El historial de pagos llega en la próxima etapa." />
      {clientSystems.length === 0 ? (
        <EmptyClients what="cobros todavía" />
      ) : (
        <>
          <div className="view-cards">
            <div className="big-total">
              <div className="bt-label">Mensual total</div>
              <div className="bt-value">{money(monthlyTotal)}</div>
            </div>
            <div className="big-total paid">
              <div className="bt-label">Activo mensual</div>
              <div className="bt-value">{money(activeTotal)}</div>
            </div>
            <div className="big-total">
              <div className="bt-label">Clientes</div>
              <div className="bt-value">{clientSystems.length}</div>
            </div>
          </div>

          <div className="table-card">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Cliente</th>
                  <th>Sistema</th>
                  <th>Vencimiento</th>
                  <th style={{ textAlign: "right" }}>Mensualidad</th>
                  <th style={{ textAlign: "right" }}>Servicio</th>
                </tr>
              </thead>
              <tbody>
                {clientSystems.map((s) => {
                  const sv = serviceLabel[s.client?.serviceStatus ?? "active"];
                  return (
                    <tr key={s.id}>
                      <td>
                        <div className="cell-client">
                          <span className="cell-glyph" style={{ background: `linear-gradient(135deg, ${s.accent}, ${s.accent2})` }}>
                            {initials(s.client?.name || s.name)}
                          </span>
                          <span className="cell-strong">{s.client?.name || "—"}</span>
                        </div>
                      </td>
                      <td className="muted">{s.name}</td>
                      <td className="muted">{s.client?.dueDay ? `Día ${s.client.dueDay}` : "—"}</td>
                      <td className="cell-money" style={{ textAlign: "right" }}>{money(s.client?.monthly)}</td>
                      <td style={{ textAlign: "right" }}>
                        <span className={`pill ${sv.tone}`}>{sv.label}</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
}

/* --------------------------------------------------------------- Clientes */

export function ClientesView() {
  const { systems } = useSystemsCtx();
  const clientSystems = systems.filter((s) => s.type === "client" && s.client);

  return (
    <>
      <PageHead title="Clientes" subtitle="Clientes con sistema asociado y su mensualidad." />
      {clientSystems.length === 0 ? (
        <EmptyClients what="clientes" />
      ) : (
        <div className="table-card">
          <table className="data-table">
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Contacto</th>
                <th>Sistema</th>
                <th style={{ textAlign: "right" }}>Mensualidad</th>
                <th style={{ textAlign: "right" }}>Servicio</th>
              </tr>
            </thead>
            <tbody>
              {clientSystems.map((s) => {
                const sv = serviceLabel[s.client?.serviceStatus ?? "active"];
                return (
                  <tr key={s.id}>
                    <td>
                      <div className="cell-client">
                        <span className="cell-glyph" style={{ background: `linear-gradient(135deg, ${s.accent}, ${s.accent2})` }}>
                          {initials(s.client?.name || s.name)}
                        </span>
                        <span className="cell-strong">{s.client?.name || "—"}</span>
                      </div>
                    </td>
                    <td className="muted">{s.client?.contact || "—"}</td>
                    <td className="muted">{s.name}</td>
                    <td className="cell-money" style={{ textAlign: "right" }}>{money(s.client?.monthly)}</td>
                    <td style={{ textAlign: "right" }}>
                      <span className={`pill ${sv.tone}`}>{sv.label}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
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
