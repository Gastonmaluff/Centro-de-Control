import type { ComponentCheck, ComponentKey, ComponentState, ComputedStatus, System } from "../data/types";

export type TechnicalComponent = ComponentCheck & {
  key: ComponentKey;
  label: string;
};

export const componentLabels: Record<ComponentKey, string> = {
  application: "Aplicacion",
  database: "Base de datos",
  authentication: "Autenticacion",
  functions: "Functions/API",
  storage: "Storage",
  domain: "Dominio/SSL",
  backup: "Backup",
};

export const componentOrder: ComponentKey[] = [
  "application",
  "database",
  "authentication",
  "functions",
  "storage",
  "domain",
  "backup",
];

export const componentStateInfo: Record<ComponentState, { label: string; tone: "ok" | "warn" | "down" | "muted" }> = {
  ok: { label: "Operativo", tone: "ok" },
  warn: { label: "Advertencia", tone: "warn" },
  down: { label: "Error", tone: "down" },
  unknown: { label: "No verificable", tone: "muted" },
};

function legacyComponents(sys: System): Partial<Record<ComponentKey, ComponentCheck>> {
  const m = sys.monitoring;
  const checkedAt = m?.checkedAt;
  const source = m?.source ?? "cloud-function";
  const components: Partial<Record<ComponentKey, ComponentCheck>> = {};

  if (sys.links.publicUrl || m) {
    components.application = {
      state: m?.up === undefined ? "unknown" : m.up ? "ok" : "down",
      configured: Boolean(sys.links.publicUrl),
      critical: true,
      checkedAt,
      source,
      responseMs: m?.responseMs,
      consecutiveFails: m?.consecutiveFails,
      message:
        m?.up === undefined
          ? sys.links.publicUrl
            ? "Pendiente de comprobacion"
            : "Sin URL publica"
          : m.up
          ? `HTTP ${m.httpStatus ?? "OK"}`
          : m.error ?? "La aplicacion no responde",
    };
  }

  if (sys.links.publicUrl || sys.links.domain || m?.https !== undefined) {
    components.domain = {
      state: m?.https === undefined ? "unknown" : m.https ? "ok" : "warn",
      configured: Boolean(sys.links.publicUrl || sys.links.domain),
      critical: true,
      checkedAt,
      source,
      message:
        m?.https === undefined
          ? "SSL no comprobado"
          : m.https
          ? m.redirected
            ? "HTTPS activo con redireccion"
            : "HTTPS activo"
          : "No usa HTTPS",
    };
  }

  components.backup = {
    state: "unknown",
    configured: false,
    critical: false,
    checkedAt,
    source: "health-endpoint",
    message: "Backup no configurado",
  };

  return components;
}

export function getTechnicalComponents(sys: System): TechnicalComponent[] {
  const raw = {
    ...legacyComponents(sys),
    ...(sys.monitoring?.components ?? {}),
  };
  if (sys.monitoring?.backup) raw.backup = sys.monitoring.backup;
  if (!raw.backup) {
    raw.backup = {
      state: "unknown",
      configured: false,
      critical: false,
      checkedAt: sys.monitoring?.checkedAt,
      source: "health-endpoint",
      message: "Backup no configurado",
    };
  }

  return componentOrder
    .flatMap((key) => {
      const check = raw[key];
      if (!check) return [];
      if (check.configured === false && key !== "backup") return [];
      return [{ key, label: componentLabels[key], ...check }];
    });
}

export function computeTechnicalStatus(sys: System): ComputedStatus {
  if (sys.projectStatus === "archived") return "archived";

  const checks = getTechnicalComponents(sys);
  const critical = checks.filter((c) => c.critical !== false && c.configured !== false);
  if (!critical.length) return "unknown";

  const criticalDown = critical.some((c) => c.state === "down" && (c.consecutiveFails ?? 1) >= 3);
  if (criticalDown) return "down";

  if (sys.deploy?.status === "failed") return "warning";

  const hasProblem = checks.some((c) => c.state === "down" || c.state === "warn");
  if (hasProblem) return "warning";

  const incomplete = critical.some((c) => c.state === "unknown");
  if (incomplete) return "unknown";

  return "operational";
}

export function monitoringModeLabel(sys: System): string {
  return sys.monitoring?.mode === "full" ? "Monitoreo completo" : "Monitoreo basico";
}
