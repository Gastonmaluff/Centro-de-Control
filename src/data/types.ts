export type ServiceStatus = "ok" | "warn" | "down";

export interface InfraState {
  app: ServiceStatus;
  firebase: ServiceStatus;
  domain: ServiceStatus;
  backup: ServiceStatus;
}

export interface Metric {
  label: string;
  value: string;
  hint?: string;
}

export interface QuickLinks {
  github?: string;
  firebase?: string;
  cloudflare?: string;
  domain?: string;
}

export interface SystemCardData {
  id: string;
  name: string;
  tagline: string;
  /** Short avatar text (2 letters/emoji) shown in the card badge. */
  glyph: string;
  /** Primary + secondary accent used to give the card its own identity. */
  accent: string;
  accent2: string;
  active: boolean;
  infra: InfraState;
  metrics: Metric[];
  lastDeploy: string;
  monthly?: number;
  nextCharge?: string;
  links: QuickLinks;
}

export type ChargeStatus = "paid" | "pending" | "due-soon";

export interface Charge {
  id: string;
  client: string;
  system: string;
  amount: number;
  date: string;
  status: ChargeStatus;
}

export type ActivityKind = "deploy" | "backup" | "payment" | "update";

export interface ActivityItem {
  id: string;
  kind: ActivityKind;
  system: string;
  text: string;
  time: string;
}
