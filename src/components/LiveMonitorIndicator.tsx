import type { CSSProperties } from "react";
import type { ComputedStatus } from "../data/types";

/** Estado visual del monitor. Se deriva del estado técnico calculado del sistema. */
type MonitorKey = "live" | "warning" | "down" | "partial" | "archived";

const PRESETS: Record<MonitorKey, { label: string; active: boolean }> = {
  live: { label: "Operativo", active: true },
  warning: { label: "Requiere atención", active: true },
  down: { label: "Caído", active: false },
  partial: { label: "Monitoreo incompleto", active: true },
  archived: { label: "Archivado", active: false },
};

/** Traduce el estado técnico del sistema al estado visual del monitor. */
export function monitorKeyFor(status: ComputedStatus): MonitorKey {
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
      return "archived";
  }
}

// Tira larga con varios complejos QRS predefinidos. Al desplazarla completa se
// percibe orgánica sin introducir aleatoriedad ni saltos durante el render.
const ECG_PATH =
  "M0 10 H28 l3 -5 l4 10 l4 -7 l3 2 H76 l5 -8 l4 15 l4 -11 l4 4 H118 l3 -3 l3 6 l3 -4 l3 1 H162 l4 -6 l4 12 l4 -8 l5 2 H216 l2 -4 l3 8 l3 -5 l3 1 H250 l5 -9 l5 16 l4 -10 l4 3 H302 l3 -5 l3 9 l4 -6 l4 2 H360";

function stableHash(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) % 9973;
  }
  return hash;
}

export default function LiveMonitorIndicator({
  status,
  seed,
  label,
  color,
  active,
  className,
}: {
  status: ComputedStatus;
  /** Identificador estable para desfasar la animación entre cards. */
  seed?: string;
  /** Texto accesible. Por defecto según el estado. */
  label?: string;
  /** Fuerza un color (cualquier valor CSS válido). Por defecto según el estado. */
  color?: string;
  /** Fuerza el estado animado. Por defecto según el estado. */
  active?: boolean;
  className?: string;
}) {
  const key = monitorKeyFor(status);
  const preset = PRESETS[key];
  const isActive = active ?? preset.active;
  const text = label ?? preset.label;
  const hash = stableHash(seed ?? text);
  const duration = 7.2 + (hash % 43) / 10;
  const delay = -((hash % 36) / 10);

  return (
    <div
      className={`live-monitor ${key} ${isActive ? "is-active" : "is-idle"} ${className ?? ""}`}
      style={
        {
          ...(color ? { color } : {}),
          "--ecg-duration": `${duration}s`,
          "--ecg-delay": `${delay}s`,
        } as CSSProperties
      }
      role="img"
      aria-label={`Estado general: ${text}`}
    >
      <span className="live-monitor-window" aria-hidden="true">
        <svg
          className="live-monitor-ecg"
          viewBox="0 0 360 20"
          preserveAspectRatio="none"
          focusable="false"
        >
          <path className="ecg-track" d={ECG_PATH} />
          <path className="ecg-pulse" d={ECG_PATH} />
        </svg>
      </span>
    </div>
  );
}
