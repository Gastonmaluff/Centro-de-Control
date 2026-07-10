/* =========================================================================
   Modelo de datos de Centro de Control.

   Principio: separar lo que SOLO el usuario sabe (se carga a mano) de lo
   VERIFICABLE (se descubre automáticamente y siempre lleva `source` + fecha
   de comprobación). Nunca se inventan datos técnicos.
   ========================================================================= */

export type SystemType = "own" | "client";

export type ProjectStatus = "dev" | "prod" | "maintenance" | "paused" | "archived";

/** Estado técnico calculado automáticamente (no se carga a mano). */
export type ComputedStatus = "operational" | "warning" | "down" | "unknown" | "archived";
export type ComponentState = "ok" | "warn" | "down" | "unknown";
export type ComponentKey =
  | "application"
  | "database"
  | "authentication"
  | "functions"
  | "storage"
  | "domain"
  | "backup";

export interface ComponentCheck {
  state: ComponentState;
  configured?: boolean;
  critical?: boolean;
  checkedAt?: string;
  source?: string;
  message?: string;
  responseMs?: number;
  consecutiveFails?: number;
}

export interface BackupCheck extends ComponentCheck {
  lastSuccessAt?: string;
  lastResult?: "success" | "failed" | "missing" | "unknown";
  nextRunAt?: string;
  maxAgeHours?: number;
}

export interface HealthEndpointInfo {
  url?: string;
  status?: string;
  version?: string;
  checkedAt?: string;
  error?: string;
}

export interface DeployInfo {
  source?: string;
  checkedAt?: string;
  status?: "success" | "failed" | "running" | "unknown";
  message?: string;
  url?: string;
  version?: string;
}

export interface SystemLinks {
  publicUrl?: string;
  adminUrl?: string;
  github?: string; // "owner/repo" o URL completa
  firebaseProject?: string;
  domain?: string;
  cloudflare?: string;
  docs?: string; // carpeta local o documentación
}

export interface ClientInfo {
  name?: string;
  contact?: string;
  monthly?: number;
  dueDay?: number; // 1..31
  startDate?: string;
  serviceStatus?: "active" | "paused" | "ended";
  notes?: string;
}

/** Resultado de monitoreo verificado. Lo escribe el análisis inicial / backend. */
export interface Monitoring {
  source?: string; // "cloud-function" | "manual" | ...
  checkedAt?: string; // ISO
  httpStatus?: number;
  responseMs?: number;
  https?: boolean;
  redirected?: boolean;
  up?: boolean;
  consecutiveFails?: number;
  mode?: "basic" | "full"; // "full" si el sistema expone /api/health
  error?: string;
  components?: Partial<Record<ComponentKey, ComponentCheck>>;
  backup?: BackupCheck;
  health?: HealthEndpointInfo;
}

/** Último commit obtenido de GitHub (repos públicos, client-side por ahora). */
export interface GitInfo {
  connected?: boolean;
  source?: string; // "github"
  checkedAt?: string;
  sha?: string;
  message?: string;
  author?: string;
  date?: string; // fecha del commit (ISO)
  branch?: string;
  error?: string;
}

/** Contadores denormalizados para pintar la card sin leer toda la subcolección. */
export interface TodoStats {
  open: number;
  topPriorityTitle?: string;
  topPriority?: TodoPriority;
  lastDoneTitle?: string;
  lastDoneAt?: string;
}

export interface System {
  id: string;
  // --- lo carga el usuario ---
  name: string;
  description?: string;
  type: SystemType;
  projectStatus: ProjectStatus;
  glyph?: string;
  accent: string;
  accent2: string;
  createdApprox?: string;
  links: SystemLinks;
  client?: ClientInfo;
  // --- verificable (se descubre) ---
  monitoring?: Monitoring;
  git?: GitInfo;
  deploy?: DeployInfo;
  todoStats?: TodoStats;
  // --- metadatos internos ---
  createdAt?: string;
  updatedAt?: string;
  lastWorkedAt?: string;
}

/* ------------------------------------------------------------- Pendientes */

export type TodoKind = "task" | "bug" | "polish" | "idea";
export type TodoPriority = "low" | "medium" | "high" | "critical";
export type TodoStatus = "pending" | "in-progress" | "done" | "discarded";

export interface Todo {
  id: string;
  title: string;
  description?: string;
  kind: TodoKind;
  priority: TodoPriority;
  status: TodoStatus;
  createdAt?: string;
  doneAt?: string;
  notes?: string;
}

/* ----------------------------------------------------------- Facturación */

export type ChargeStatus = "paid" | "pending" | "due-soon";

export interface Charge {
  id: string;
  client: string;
  system: string;
  amount: number;
  date: string;
  status: ChargeStatus;
}

/* ------------------------------------------------------------- Actividad */

export type ActivityKind =
  | "created"
  | "commit"
  | "deploy"
  | "deploy-failed"
  | "down"
  | "recovered"
  | "task"
  | "polish"
  | "payment";

export interface ActivityItem {
  id: string;
  kind: ActivityKind;
  system: string;
  text: string;
  time: string;
}
