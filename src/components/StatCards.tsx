import type { JSX } from "react";
import { IcAlert, IcArrowUp, IcBilling, IcSave, IcServer } from "./icons";

type Tone = "brand" | "ok" | "warn" | "down";

interface Stat {
  label: string;
  value: string;
  icon: (p: { width?: number; height?: number }) => JSX.Element;
  tone: Tone;
  foot: JSX.Element;
}

const toneStyle: Record<Tone, { bg: string; fg: string }> = {
  brand: { bg: "var(--brand-weak)", fg: "var(--brand-text)" },
  ok: { bg: "var(--ok-weak)", fg: "var(--ok)" },
  warn: { bg: "var(--warn-weak)", fg: "var(--warn)" },
  down: { bg: "var(--down-weak)", fg: "var(--down)" },
};

const bars = [40, 55, 48, 70, 62, 85, 78];

const STATS: Stat[] = [
  {
    label: "Sistemas activos",
    value: "14",
    icon: IcServer,
    tone: "ok",
    foot: (
      <>
        <span className="pill ok">
          <span className="led ok" /> Todos operativos
        </span>
      </>
    ),
  },
  {
    label: "Cobros pendientes",
    value: "2",
    icon: IcBilling,
    tone: "warn",
    foot: (
      <>
        <span className="pill warn">$140.000 por cobrar</span>
      </>
    ),
  },
  {
    label: "Ingresos mensuales",
    value: "$250k",
    icon: IcArrowUp,
    tone: "brand",
    foot: (
      <>
        <span className="trend up">
          <IcArrowUp width={13} height={13} /> 8,4%
        </span>
        <span className="muted" style={{ fontSize: 11 }}>
          vs. mes anterior
        </span>
      </>
    ),
  },
  {
    label: "Último backup",
    value: "4 h",
    icon: IcSave,
    tone: "ok",
    foot: (
      <>
        <span className="pill ok">
          <span className="led ok" /> Automático OK
        </span>
      </>
    ),
  },
  {
    label: "Incidencias",
    value: "1",
    icon: IcAlert,
    tone: "warn",
    foot: (
      <>
        <span className="pill warn">1 backup a revisar</span>
      </>
    ),
  },
];

export default function StatCards() {
  return (
    <div className="stats">
      {STATS.map((s) => {
        const Icon = s.icon;
        const t = toneStyle[s.tone];
        return (
          <div className="stat" key={s.label}>
            <div className="stat-top">
              <span className="stat-label">{s.label}</span>
              <span className="stat-ico" style={{ background: t.bg, color: t.fg }}>
                <Icon width={17} height={17} />
              </span>
            </div>
            <div className="stat-value">{s.value}</div>
            {s.label === "Ingresos mensuales" ? (
              <div className="stat-foot">
                <div className="spark" style={{ color: "var(--brand)", flex: 1 }}>
                  {bars.map((b, i) => (
                    <span key={i} style={{ height: `${b}%` }} />
                  ))}
                </div>
                {s.foot}
              </div>
            ) : (
              <div className="stat-foot">{s.foot}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
