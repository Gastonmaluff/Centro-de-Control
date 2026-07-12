import { useSystemsCtx } from "../context/SystemsContext";
import { computeStatus } from "../lib/status";
import type { System } from "../data/types";
import { EcgMark, IcTasks } from "./icons";

type Tone = "neutral" | "ok" | "warn" | "down" | "muted";
const toneStyle: Record<Tone, { fg: string }> = {
  neutral: { fg: "var(--text-muted)" },
  ok: { fg: "var(--ok)" },
  warn: { fg: "var(--warn)" },
  down: { fg: "var(--down)" },
  muted: { fg: "var(--text-muted)" },
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

  const cards: { label: string; value: number; tone: Tone; icon: "ecg" | "tasks" }[] = [
    { label: "Operativos", value: operational, tone: "ok", icon: "ecg" },
    { label: "Requieren atencion", value: warning, tone: "warn", icon: "ecg" },
    { label: "Caidos", value: down, tone: "down", icon: "ecg" },
    { label: "Monitoreo incompleto", value: unknown, tone: "muted", icon: "ecg" },
    { label: "Pendientes abiertos", value: openTodos, tone: "neutral", icon: "tasks" },
  ];

  return (
    <div className="stats">
      {cards.map((c) => {
        const t = toneStyle[c.tone];
        return (
          <div className="stat" key={c.label}>
            <div className="stat-top">
              <span className="stat-label">{c.label}</span>
              <span className={`stat-ico ${c.tone}`} style={{ color: t.fg }}>
                {c.icon === "ecg" ? (
                  <EcgMark size={20} tone={c.tone === "ok" ? "success" : c.tone === "warn" ? "warning" : c.tone === "down" ? "danger" : "neutral"} animated={c.tone === "ok"} aria-hidden="true" />
                ) : (
                  <IcTasks width={16} height={16} />
                )}
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
