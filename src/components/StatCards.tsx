import { useSystemsCtx } from "../context/SystemsContext";
import { computeStatus } from "../lib/status";
import type { System } from "../data/types";
import { IcAlert, IcCheck, IcRefresh, IcServer, IcTasks } from "./icons";

type Tone = "brand" | "ok" | "warn" | "down" | "muted";
const toneStyle: Record<Tone, { bg: string; fg: string }> = {
  brand: { bg: "var(--brand-weak)", fg: "var(--brand-text)" },
  ok: { bg: "var(--ok-weak)", fg: "var(--ok)" },
  warn: { bg: "var(--warn-weak)", fg: "var(--warn)" },
  down: { bg: "var(--down-weak)", fg: "var(--down)" },
  muted: { bg: "var(--surface-hover)", fg: "var(--text-muted)" },
};

function countBy(systems: System[], fn: (s: System) => boolean) {
  return systems.filter(fn).length;
}

export default function StatCards() {
  const { systems } = useSystemsCtx();

  const operational = countBy(systems, (s) => computeStatus(s) === "operational");
  const warning = countBy(systems, (s) => computeStatus(s) === "warning");
  const down = countBy(systems, (s) => computeStatus(s) === "down");
  const unknown = countBy(systems, (s) => computeStatus(s) === "unknown");
  const openTodos = systems.reduce((a, s) => a + (s.todoStats?.open ?? 0), 0);

  const cards: { label: string; value: number; icon: typeof IcServer; tone: Tone }[] = [
    { label: "Operativos", value: operational, icon: IcCheck, tone: "ok" },
    { label: "Requieren atencion", value: warning, icon: IcAlert, tone: "warn" },
    { label: "Caidos", value: down, icon: IcAlert, tone: "down" },
    { label: "Monitoreo incompleto", value: unknown, icon: IcRefresh, tone: "muted" },
    { label: "Pendientes abiertos", value: openTodos, icon: IcTasks, tone: "brand" },
  ];

  return (
    <div className="stats">
      {cards.map((c) => {
        const Icon = c.icon;
        const t = toneStyle[c.tone];
        return (
          <div className="stat" key={c.label}>
            <div className="stat-top">
              <span className="stat-label">{c.label}</span>
              <span className="stat-ico" style={{ background: t.bg, color: t.fg }}>
                <Icon width={16} height={16} />
              </span>
            </div>
            <div className="stat-value" style={c.value > 0 && (c.tone === "down" || c.tone === "warn") ? { color: t.fg } : undefined}>
              {c.value}
            </div>
          </div>
        );
      })}
    </div>
  );
}
