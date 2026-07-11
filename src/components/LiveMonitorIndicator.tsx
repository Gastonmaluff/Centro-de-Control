import type { CSSProperties } from "react";
import type { ComputedStatus } from "../data/types";

/** Estado visual del monitor. Se deriva del estado técnico calculado del sistema. */
type MonitorKey = "live" | "warning" | "down" | "partial";

const PRESETS: Record<MonitorKey, { label: string; active: boolean }> = {
  live: { label: "Monitoreo en vivo", active: true },
  warning: { label: "Monitoreo con advertencias", active: true },
  down: { label: "Sin respuesta", active: false },
  partial: { label: "Monitoreo parcial", active: false },
};

/** Traduce el estado técnico del sistema al estado del monitor. `null` = no mostrar. */
export function monitorKeyFor(status: ComputedStatus): MonitorKey | null {
  switch (status) {
    case "operational":
      return "live";
    case "warning":
      return "warning";
    case "down":
      return "down";
    case "unknown":
      return "partial";
    case "archived":
    default:
      return null;
  }
}

// Latido minimalista (dos complejos QRS). pathLength=100 normaliza el recorrido
// del pulso para que la animación de dashoffset sea independiente del tamaño real.
const ECG_PATH =
  "M0 10 H26 l4 -6 l4 12 l4 -9 l4 3 H70 l4 -6 l4 12 l4 -9 l4 3 H150";

export default function LiveMonitorIndicator({
  status,
  label,
  color,
  active,
  className,
}: {
  status: ComputedStatus;
  /** Texto accesible/visible. Por defecto según el estado. */
  label?: string;
  /** Fuerza un color (cualquier valor CSS válido). Por defecto según el estado. */
  color?: string;
  /** Fuerza el estado animado. Por defecto según el estado. */
  active?: boolean;
  className?: string;
}) {
  const key = monitorKeyFor(status);
  if (!key) return null;

  const preset = PRESETS[key];
  const isActive = active ?? preset.active;
  const text = label ?? preset.label;

  return (
    <div
      className={`live-monitor ${key} ${isActive ? "is-active" : "is-idle"} ${className ?? ""}`}
      style={color ? ({ color } as CSSProperties) : undefined}
      role="status"
      aria-label={`Estado de monitoreo: ${text}`}
    >
      <svg
        className="live-monitor-ecg"
        viewBox="0 0 150 20"
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
      >
        <path className="ecg-track" d={ECG_PATH} />
        <path className="ecg-pulse" d={ECG_PATH} pathLength={100} />
      </svg>
      <span className="live-monitor-label">{text}</span>
    </div>
  );
}
