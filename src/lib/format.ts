import { parseRepo } from "./github";
import type { SystemLinks } from "../data/types";

export const money = (n?: number) => (n == null ? "—" : "$" + n.toLocaleString("es-AR"));

/** Tiempo relativo en español a partir de una fecha ISO. */
export function timeAgo(iso?: string): string {
  if (!iso) return "—";
  const t = new Date(iso).getTime();
  if (Number.isNaN(t)) return "—";
  const diff = Date.now() - t;
  const sec = Math.round(diff / 1000);
  if (sec < 60) return "recién";
  const min = Math.round(sec / 60);
  if (min < 60) return `hace ${min} min`;
  const hr = Math.round(min / 60);
  if (hr < 24) return `hace ${hr} h`;
  const d = Math.round(hr / 24);
  if (d < 30) return `hace ${d} d`;
  const mo = Math.round(d / 30);
  if (mo < 12) return `hace ${mo} mes${mo > 1 ? "es" : ""}`;
  const y = Math.round(mo / 12);
  return `hace ${y} año${y > 1 ? "s" : ""}`;
}

export function dateTime(iso?: string): string {
  if (!iso) return "Sin comprobacion";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "Fecha invalida";
  return date.toLocaleString("es-PY", {
    dateStyle: "short",
    timeStyle: "short",
  });
}

/** Convierte los campos de links en URLs abribles. */
export function hrefs(links: SystemLinks) {
  const repo = parseRepo(links.github);
  return {
    public: links.publicUrl || undefined,
    admin: links.adminUrl || undefined,
    github: repo ? `https://github.com/${repo.owner}/${repo.repo}` : links.github || undefined,
    firebase: links.firebaseProject
      ? `https://console.firebase.google.com/project/${links.firebaseProject}`
      : undefined,
    cloudflare: links.cloudflare ? "https://dash.cloudflare.com/" : undefined,
    domain: links.domain ? (links.domain.startsWith("http") ? links.domain : `https://${links.domain}`) : undefined,
  };
}
