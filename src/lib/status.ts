import type { ComputedStatus, ProjectStatus, System } from "../data/types";
import { computeTechnicalStatus } from "./technical";

export function computeStatus(sys: System): ComputedStatus {
  return computeTechnicalStatus(sys);
}

export const statusInfo: Record<ComputedStatus, { label: string; tone: "ok" | "warn" | "down" | "muted" }> = {
  operational: { label: "Operativo", tone: "ok" },
  warning: { label: "Requiere atencion", tone: "warn" },
  down: { label: "Caido", tone: "down" },
  unknown: { label: "Monitoreo incompleto", tone: "muted" },
  archived: { label: "Archivado", tone: "muted" },
};

export const projectStatusInfo: Record<ProjectStatus, string> = {
  dev: "En desarrollo",
  prod: "En produccion",
  maintenance: "En mantenimiento",
  paused: "Pausado",
  archived: "Archivado",
};

/** Hace cuanto que no hay actividad. Usa commit, deploy, monitoreo o trabajo. */
export function lastActivityMs(sys: System): number | null {
  const dates = [sys.lastWorkedAt, sys.git?.date, sys.deploy?.checkedAt, sys.monitoring?.checkedAt]
    .filter(Boolean)
    .map((d) => new Date(d as string).getTime())
    .filter((n) => !Number.isNaN(n));
  if (!dates.length) return null;
  return Date.now() - Math.max(...dates);
}

const DAYS_30 = 30 * 24 * 60 * 60 * 1000;

export type SectionKey =
  | "attention"
  | "dev"
  | "polish"
  | "stable"
  | "inactive"
  | "archived";

export const sectionInfo: Record<SectionKey, { title: string; hint: string }> = {
  attention: { title: "Necesitan atencion", hint: "Caidos, advertencias tecnicas o tareas criticas" },
  dev: { title: "En desarrollo", hint: "Proyectos actualmente activos" },
  polish: { title: "Pendientes de pulida", hint: "Funcionan pero tienen mejoras registradas" },
  stable: { title: "Estables", hint: "Operativos y sin pendientes importantes" },
  inactive: { title: "Sin actividad reciente", hint: "Sin commits, deploys ni trabajo hace tiempo" },
  archived: { title: "Archivados", hint: "Fuera de uso o conservados como historial" },
};

export const SECTION_ORDER: SectionKey[] = ["attention", "dev", "polish", "stable", "inactive", "archived"];

/** Asigna cada sistema a la primera seccion que corresponda. */
export function sectionFor(sys: System): SectionKey {
  const status = computeStatus(sys);
  if (status === "archived") return "archived";

  const critical = sys.todoStats?.topPriority === "critical" && (sys.todoStats?.open ?? 0) > 0;
  if (status === "down" || status === "warning" || status === "unknown" || critical) return "attention";

  if (sys.projectStatus === "dev") return "dev";

  const inactivity = lastActivityMs(sys);
  if (inactivity != null && inactivity > DAYS_30) return "inactive";

  if ((sys.todoStats?.open ?? 0) > 0) return "polish";

  return "stable";
}

export function groupSystems(systems: System[]): { key: SectionKey; systems: System[] }[] {
  const map = new Map<SectionKey, System[]>();
  for (const sys of systems) {
    const key = sectionFor(sys);
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(sys);
  }
  return SECTION_ORDER.filter((k) => map.has(k)).map((key) => ({ key, systems: map.get(key)! }));
}
