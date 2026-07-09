import { useState, type FormEvent, type ReactNode } from "react";
import type { ServiceStatus, SystemCardData } from "../data/types";
import type { SystemInput } from "../firebase/systems";
import { useSystemsCtx } from "../context/SystemsContext";
import { IcPlus } from "./icons";

interface Props {
  initial: SystemCardData | null;
  onClose: () => void;
}

type FormState = {
  name: string;
  tagline: string;
  glyph: string;
  accent: string;
  accent2: string;
  active: boolean;
  app: ServiceStatus;
  firebase: ServiceStatus;
  domain: ServiceStatus;
  backup: ServiceStatus;
  m1label: string;
  m1value: string;
  m1hint: string;
  m2label: string;
  m2value: string;
  lastDeploy: string;
  monthly: string;
  nextCharge: string;
  github: string;
  linkFirebase: string;
  cloudflare: string;
  linkDomain: string;
};

function initState(s: SystemCardData | null): FormState {
  return {
    name: s?.name ?? "",
    tagline: s?.tagline ?? "",
    glyph: s?.glyph ?? "",
    accent: s?.accent ?? "#4f46e5",
    accent2: s?.accent2 ?? "#06b6d4",
    active: s?.active ?? true,
    app: s?.infra.app ?? "ok",
    firebase: s?.infra.firebase ?? "ok",
    domain: s?.infra.domain ?? "ok",
    backup: s?.infra.backup ?? "ok",
    m1label: s?.metrics[0]?.label ?? "",
    m1value: s?.metrics[0]?.value ?? "",
    m1hint: s?.metrics[0]?.hint ?? "",
    m2label: s?.metrics[1]?.label ?? "",
    m2value: s?.metrics[1]?.value ?? "",
    lastDeploy: s?.lastDeploy ?? "hoy",
    monthly: s?.monthly != null ? String(s.monthly) : "",
    nextCharge: s?.nextCharge ?? "",
    github: s?.links.github ?? "",
    linkFirebase: s?.links.firebase ?? "",
    cloudflare: s?.links.cloudflare ?? "",
    linkDomain: s?.links.domain ?? "",
  };
}

const STATUS: { value: ServiceStatus; label: string }[] = [
  { value: "ok", label: "OK" },
  { value: "warn", label: "Revisar" },
  { value: "down", label: "Caído" },
];

export default function SystemFormModal({ initial, onClose }: Props) {
  const { saveSystem } = useSystemsCtx();
  const [f, setF] = useState<FormState>(() => initState(initial));
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) => setF((p) => ({ ...p, [k]: v }));

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!f.name.trim()) {
      setError("El nombre es obligatorio.");
      return;
    }
    setError("");
    setBusy(true);

    const metrics = [
      { label: f.m1label.trim(), value: f.m1value.trim(), hint: f.m1hint.trim() || undefined },
      { label: f.m2label.trim(), value: f.m2value.trim() },
    ].filter((m) => m.label && m.value);

    const glyph =
      f.glyph.trim() ||
      f.name
        .trim()
        .split(/\s+/)
        .map((w) => w[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

    const data: SystemInput = {
      name: f.name.trim(),
      tagline: f.tagline.trim(),
      glyph,
      accent: f.accent,
      accent2: f.accent2,
      active: f.active,
      infra: { app: f.app, firebase: f.firebase, domain: f.domain, backup: f.backup },
      metrics,
      lastDeploy: f.lastDeploy.trim() || "—",
      links: {
        github: f.github.trim(),
        firebase: f.linkFirebase.trim(),
        cloudflare: f.cloudflare.trim(),
        domain: f.linkDomain.trim(),
      },
      ...(f.monthly.trim() ? { monthly: Number(f.monthly) } : {}),
      ...(f.nextCharge.trim() ? { nextCharge: f.nextCharge.trim() } : {}),
    };

    try {
      await saveSystem(initial?.id ?? null, data);
      onClose();
    } catch {
      setError("No se pudo guardar. Revisá tu conexión e intentá de nuevo.");
      setBusy(false);
    }
  };

  return (
    <div className="modal-overlay" onMouseDown={onClose}>
      <div className="modal" onMouseDown={(e) => e.stopPropagation()}>
        <div className="modal-head">
          <div>
            <h3>{initial ? "Editar sistema" : "Agregar sistema"}</h3>
            <p className="muted" style={{ fontSize: 12.5, margin: "2px 0 0" }}>
              Los datos se guardan en tu Firestore.
            </p>
          </div>
          <button className="icon-btn" onClick={onClose} title="Cerrar" aria-label="Cerrar">
            <IcPlus width={18} height={18} style={{ transform: "rotate(45deg)" }} />
          </button>
        </div>

        <form onSubmit={submit} className="modal-body">
          {error && <div className="auth-error">{error}</div>}

          <div className="form-section">Identidad</div>
          <div className="form-grid">
            <Field label="Nombre" span2>
              <input value={f.name} onChange={(e) => set("name", e.target.value)} placeholder="Mi Sistema" autoFocus />
            </Field>
            <Field label="Descripción" span2>
              <input value={f.tagline} onChange={(e) => set("tagline", e.target.value)} placeholder="Rubro · qué hace" />
            </Field>
            <Field label="Sigla (2 letras)">
              <input value={f.glyph} onChange={(e) => set("glyph", e.target.value)} maxLength={2} placeholder="Auto" />
            </Field>
            <Field label="Color principal">
              <input className="color" type="color" value={f.accent} onChange={(e) => set("accent", e.target.value)} />
            </Field>
            <Field label="Color secundario">
              <input className="color" type="color" value={f.accent2} onChange={(e) => set("accent2", e.target.value)} />
            </Field>
          </div>

          <div className="form-section">Métricas (opcional)</div>
          <div className="form-grid">
            <Field label="Métrica 1 · nombre">
              <input value={f.m1label} onChange={(e) => set("m1label", e.target.value)} placeholder="Visitas hoy" />
            </Field>
            <Field label="Valor">
              <input value={f.m1value} onChange={(e) => set("m1value", e.target.value)} placeholder="1.284" />
            </Field>
            <Field label="Variación (opcional)">
              <input value={f.m1hint} onChange={(e) => set("m1hint", e.target.value)} placeholder="+12%" />
            </Field>
            <Field label="Métrica 2 · nombre">
              <input value={f.m2label} onChange={(e) => set("m2label", e.target.value)} placeholder="Tickets" />
            </Field>
            <Field label="Valor">
              <input value={f.m2value} onChange={(e) => set("m2value", e.target.value)} placeholder="342" />
            </Field>
          </div>

          <div className="form-section">Infraestructura</div>
          <div className="form-grid">
            <Field label="App">
              <StatusSelect value={f.app} onChange={(v) => set("app", v)} />
            </Field>
            <Field label="Firebase">
              <StatusSelect value={f.firebase} onChange={(v) => set("firebase", v)} />
            </Field>
            <Field label="Dominio">
              <StatusSelect value={f.domain} onChange={(v) => set("domain", v)} />
            </Field>
            <Field label="Backup">
              <StatusSelect value={f.backup} onChange={(v) => set("backup", v)} />
            </Field>
            <Field label="Último deploy">
              <input value={f.lastDeploy} onChange={(e) => set("lastDeploy", e.target.value)} placeholder="hace 2 h" />
            </Field>
          </div>

          <div className="form-section">Facturación (opcional)</div>
          <div className="form-grid">
            <Field label="Mensualidad ($)">
              <input
                type="number"
                value={f.monthly}
                onChange={(e) => set("monthly", e.target.value)}
                placeholder="45000"
              />
            </Field>
            <Field label="Próximo cobro">
              <input value={f.nextCharge} onChange={(e) => set("nextCharge", e.target.value)} placeholder="12 jul" />
            </Field>
          </div>

          <div className="form-section">Enlaces</div>
          <div className="form-grid">
            <Field label="GitHub" span2>
              <input value={f.github} onChange={(e) => set("github", e.target.value)} placeholder="https://github.com/…" />
            </Field>
            <Field label="Firebase" span2>
              <input
                value={f.linkFirebase}
                onChange={(e) => set("linkFirebase", e.target.value)}
                placeholder="https://console.firebase.google.com/…"
              />
            </Field>
            <Field label="Cloudflare" span2>
              <input
                value={f.cloudflare}
                onChange={(e) => set("cloudflare", e.target.value)}
                placeholder="https://dash.cloudflare.com/…"
              />
            </Field>
            <Field label="Dominio" span2>
              <input value={f.linkDomain} onChange={(e) => set("linkDomain", e.target.value)} placeholder="https://…" />
            </Field>
          </div>

          <div className="modal-foot">
            <button type="button" className="btn btn-ghost" onClick={onClose} disabled={busy}>
              Cancelar
            </button>
            <button type="submit" className="btn btn-primary" disabled={busy}>
              {busy ? "Guardando…" : initial ? "Guardar cambios" : "Crear sistema"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Field({ label, span2, children }: { label: string; span2?: boolean; children: ReactNode }) {
  return (
    <div className={`field ${span2 ? "span2" : ""}`}>
      <label>{label}</label>
      {children}
    </div>
  );
}

function StatusSelect({ value, onChange }: { value: ServiceStatus; onChange: (v: ServiceStatus) => void }) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value as ServiceStatus)}>
      {STATUS.map((s) => (
        <option key={s.value} value={s.value}>
          {s.label}
        </option>
      ))}
    </select>
  );
}
