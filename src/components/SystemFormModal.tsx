import { useState, type FormEvent, type ReactNode } from "react";
import type { ProjectStatus, System, SystemType } from "../data/types";
import type { SystemInput } from "../firebase/systems";
import { patchSystem } from "../firebase/systems";
import { useSystemsCtx } from "../context/SystemsContext";
import { fetchLastCommit } from "../lib/github";
import { checkUrl } from "../lib/monitoring";
import { IcCheck, IcPlus } from "./icons";

interface Props {
  initial: System | null;
  onClose: () => void;
}

type FormState = {
  name: string;
  description: string;
  type: SystemType;
  projectStatus: ProjectStatus;
  glyph: string;
  accent: string;
  accent2: string;
  createdApprox: string;
  publicUrl: string;
  adminUrl: string;
  github: string;
  firebaseProject: string;
  domain: string;
  cloudflare: string;
  docs: string;
  clientName: string;
  clientContact: string;
  monthly: string;
  dueDay: string;
  startDate: string;
  serviceStatus: "active" | "paused" | "ended";
  notes: string;
};

function initState(s: System | null): FormState {
  return {
    name: s?.name ?? "",
    description: s?.description ?? "",
    type: s?.type ?? "own",
    projectStatus: s?.projectStatus ?? "dev",
    glyph: s?.glyph ?? "",
    accent: s?.accent ?? "#4f46e5",
    accent2: s?.accent2 ?? "#06b6d4",
    createdApprox: s?.createdApprox ?? "",
    publicUrl: s?.links.publicUrl ?? "",
    adminUrl: s?.links.adminUrl ?? "",
    github: s?.links.github ?? "",
    firebaseProject: s?.links.firebaseProject ?? "",
    domain: s?.links.domain ?? "",
    cloudflare: s?.links.cloudflare ?? "",
    docs: s?.links.docs ?? "",
    clientName: s?.client?.name ?? "",
    clientContact: s?.client?.contact ?? "",
    monthly: s?.client?.monthly != null ? String(s.client.monthly) : "",
    dueDay: s?.client?.dueDay != null ? String(s.client.dueDay) : "",
    startDate: s?.client?.startDate ?? "",
    serviceStatus: s?.client?.serviceStatus ?? "active",
    notes: s?.client?.notes ?? "",
  };
}

const PROJECT_STATUS: { value: ProjectStatus; label: string }[] = [
  { value: "dev", label: "En desarrollo" },
  { value: "prod", label: "En producción" },
  { value: "maintenance", label: "En mantenimiento" },
  { value: "paused", label: "Pausado" },
  { value: "archived", label: "Archivado" },
];

/** Quita claves con string vacío / undefined (Firestore no acepta undefined). */
function clean<T extends Record<string, unknown>>(obj: T): Partial<T> {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(obj)) {
    if (v !== undefined && v !== "" && v !== null) out[k] = v;
  }
  return out as Partial<T>;
}

type StepState = "pending" | "active" | "done" | "skip" | "fail";
interface Step {
  label: string;
  state: StepState;
  note?: string;
}

export default function SystemFormModal({ initial, onClose }: Props) {
  const { saveSystem } = useSystemsCtx();
  const [f, setF] = useState<FormState>(() => initState(initial));
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [steps, setSteps] = useState<Step[] | null>(null);

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) => setF((p) => ({ ...p, [k]: v }));

  const buildInput = (): SystemInput => {
    const glyph =
      f.glyph.trim() ||
      f.name
        .trim()
        .split(/\s+/)
        .map((w) => w[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

    const links = clean({
      publicUrl: f.publicUrl.trim(),
      adminUrl: f.adminUrl.trim(),
      github: f.github.trim(),
      firebaseProject: f.firebaseProject.trim(),
      domain: f.domain.trim(),
      cloudflare: f.cloudflare.trim(),
      docs: f.docs.trim(),
    });

    const base: SystemInput = {
      name: f.name.trim(),
      type: f.type,
      projectStatus: f.projectStatus,
      glyph,
      accent: f.accent,
      accent2: f.accent2,
      links,
      ...clean({ description: f.description.trim(), createdApprox: f.createdApprox.trim() }),
    };

    if (f.type === "client") {
      const client = clean({
        name: f.clientName.trim(),
        contact: f.clientContact.trim(),
        monthly: f.monthly.trim() ? Number(f.monthly) : undefined,
        dueDay: f.dueDay.trim() ? Number(f.dueDay) : undefined,
        startDate: f.startDate.trim(),
        serviceStatus: f.serviceStatus,
        notes: f.notes.trim(),
      });
      if (Object.keys(client).length) base.client = client;
    }

    return base;
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!f.name.trim()) {
      setError("El nombre es obligatorio.");
      return;
    }
    setError("");
    setBusy(true);

    const data = buildInput();

    // Modo edición: guardar sin re-analizar.
    if (initial) {
      try {
        await saveSystem(initial.id, data);
        onClose();
      } catch {
        setError("No se pudo guardar. Revisá tu conexión e intentá de nuevo.");
        setBusy(false);
      }
      return;
    }

    // Alta nueva: guardar + analizar con progreso visible.
    const s: Step[] = [
      { label: "Guardando información", state: "active" },
      { label: "Analizando URL pública", state: "pending" },
      { label: "Conectando GitHub", state: "pending" },
      { label: "Guardando resultados", state: "pending" },
    ];
    setSteps([...s]);
    const upd = (i: number, state: StepState, note?: string) => {
      s[i] = { ...s[i], state, note };
      setSteps([...s]);
    };

    try {
      const id = await saveSystem(null, data);
      upd(0, "done");

      // URL pública (vía backend; honesto si no está disponible)
      upd(1, "active");
      const monitoring = data.links.publicUrl
        ? await checkUrl(data.links.publicUrl)
        : null;
      upd(
        1,
        data.links.publicUrl ? (monitoring?.up ? "done" : "fail") : "skip",
        !data.links.publicUrl
          ? "Sin URL"
          : monitoring?.up
          ? `HTTP ${monitoring.httpStatus} · ${monitoring.responseMs} ms`
          : monitoring?.error ?? "No verificado"
      );

      // GitHub último commit (repos públicos)
      upd(2, "active");
      const git = data.links.github ? await fetchLastCommit(data.links.github) : null;
      upd(
        2,
        data.links.github ? (git?.connected ? "done" : "fail") : "skip",
        !data.links.github ? "Sin repo" : git?.connected ? `${git.sha} · ${git.message ?? ""}`.slice(0, 40) : git?.error ?? "No conectado"
      );

      // Persistir resultados verificados
      upd(3, "active");
      const patch: Record<string, unknown> = {};
      if (monitoring) patch.monitoring = monitoring;
      if (git) patch.git = git;
      if (Object.keys(patch).length) await patchSystem(id, patch);
      upd(3, "done");

      setTimeout(onClose, 650);
    } catch {
      setError("Se guardó el sistema pero el análisis falló. Podés reintentar desde la card.");
      setBusy(false);
    }
  };

  const isClient = f.type === "client";

  return (
    <div className="modal-overlay" onMouseDown={onClose}>
      <div className="modal" onMouseDown={(e) => e.stopPropagation()}>
        <div className="modal-head">
          <div>
            <h3>{initial ? "Editar sistema" : "Agregar sistema"}</h3>
            <p className="muted" style={{ fontSize: 12.5, margin: "2px 0 0" }}>
              Cargá solo lo que el sistema no puede descubrir solo. Lo técnico se verifica.
            </p>
          </div>
          <button className="icon-btn" onClick={onClose} title="Cerrar" aria-label="Cerrar">
            <IcPlus width={18} height={18} style={{ transform: "rotate(45deg)" }} />
          </button>
        </div>

        {steps ? (
          <div className="modal-body">
            <div className="analysis">
              {steps.map((st, i) => (
                <div key={i} className={`analysis-step ${st.state}`}>
                  <span className="as-dot">
                    {st.state === "done" ? (
                      <IcCheck width={13} height={13} />
                    ) : st.state === "active" ? (
                      <span className="spinner" />
                    ) : st.state === "fail" ? (
                      "!"
                    ) : st.state === "skip" ? (
                      "–"
                    ) : (
                      ""
                    )}
                  </span>
                  <span className="as-label">{st.label}</span>
                  {st.note && <span className="as-note">{st.note}</span>}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <form onSubmit={submit} className="modal-body">
            {error && <div className="auth-error">{error}</div>}

            {/* 1. Información general */}
            <div className="form-section">Información general</div>
            <div className="form-grid">
              <Field label="Nombre del sistema" span2>
                <input value={f.name} onChange={(e) => set("name", e.target.value)} placeholder="Mi Sistema" autoFocus />
              </Field>
              <Field label="Descripción breve" span2>
                <input value={f.description} onChange={(e) => set("description", e.target.value)} placeholder="Qué hace / para qué es" />
              </Field>
              <Field label="Tipo">
                <select value={f.type} onChange={(e) => set("type", e.target.value as SystemType)}>
                  <option value="own">Sistema propio</option>
                  <option value="client">Sistema de cliente</option>
                </select>
              </Field>
              <Field label="Estado del proyecto">
                <select value={f.projectStatus} onChange={(e) => set("projectStatus", e.target.value as ProjectStatus)}>
                  {PROJECT_STATUS.map((p) => (
                    <option key={p.value} value={p.value}>
                      {p.label}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Sigla (2 letras)">
                <input value={f.glyph} onChange={(e) => set("glyph", e.target.value)} maxLength={2} placeholder="Auto" />
              </Field>
              <Field label="Creación aprox. (opcional)">
                <input value={f.createdApprox} onChange={(e) => set("createdApprox", e.target.value)} placeholder="2025" />
              </Field>
              <Field label="Color principal">
                <input className="color" type="color" value={f.accent} onChange={(e) => set("accent", e.target.value)} />
              </Field>
              <Field label="Color secundario">
                <input className="color" type="color" value={f.accent2} onChange={(e) => set("accent2", e.target.value)} />
              </Field>
            </div>

            {/* 2. Accesos y conexiones */}
            <div className="form-section">Accesos y conexiones</div>
            <div className="form-grid">
              <Field label="URL pública" span2>
                <input value={f.publicUrl} onChange={(e) => set("publicUrl", e.target.value)} placeholder="https://misistema.com" />
              </Field>
              <Field label="Panel admin (opcional)" span2>
                <input value={f.adminUrl} onChange={(e) => set("adminUrl", e.target.value)} placeholder="https://misistema.com/admin" />
              </Field>
              <Field label="GitHub (owner/repo o URL)" span2>
                <input value={f.github} onChange={(e) => set("github", e.target.value)} placeholder="usuario/repositorio" />
              </Field>
              <Field label="Proyecto de Firebase (opcional)">
                <input value={f.firebaseProject} onChange={(e) => set("firebaseProject", e.target.value)} placeholder="mi-proyecto" />
              </Field>
              <Field label="Dominio">
                <input value={f.domain} onChange={(e) => set("domain", e.target.value)} placeholder="misistema.com" />
              </Field>
              <Field label="Cloudflare (opcional)">
                <input value={f.cloudflare} onChange={(e) => set("cloudflare", e.target.value)} placeholder="cuenta / zona" />
              </Field>
              <Field label="Docs / carpeta (opcional)">
                <input value={f.docs} onChange={(e) => set("docs", e.target.value)} placeholder="Enlace o ruta local" />
              </Field>
            </div>

            {/* 3. Cliente y facturación (solo si es de cliente) */}
            {isClient && (
              <>
                <div className="form-section">Cliente y facturación</div>
                <div className="form-grid">
                  <Field label="Nombre del cliente">
                    <input value={f.clientName} onChange={(e) => set("clientName", e.target.value)} placeholder="Empresa / persona" />
                  </Field>
                  <Field label="Persona de contacto">
                    <input value={f.clientContact} onChange={(e) => set("clientContact", e.target.value)} placeholder="Nombre / teléfono" />
                  </Field>
                  <Field label="Mensualidad ($)">
                    <input type="number" value={f.monthly} onChange={(e) => set("monthly", e.target.value)} placeholder="45000" />
                  </Field>
                  <Field label="Día de vencimiento">
                    <input type="number" min={1} max={31} value={f.dueDay} onChange={(e) => set("dueDay", e.target.value)} placeholder="10" />
                  </Field>
                  <Field label="Inicio del servicio">
                    <input value={f.startDate} onChange={(e) => set("startDate", e.target.value)} placeholder="2025-03" />
                  </Field>
                  <Field label="Estado del servicio">
                    <select value={f.serviceStatus} onChange={(e) => set("serviceStatus", e.target.value as FormState["serviceStatus"])}>
                      <option value="active">Activo</option>
                      <option value="paused">Pausado</option>
                      <option value="ended">Finalizado</option>
                    </select>
                  </Field>
                  <Field label="Notas comerciales" span2>
                    <input value={f.notes} onChange={(e) => set("notes", e.target.value)} placeholder="Condiciones, acuerdos…" />
                  </Field>
                </div>
              </>
            )}

            <div className="modal-foot">
              <button type="button" className="btn btn-ghost" onClick={onClose} disabled={busy}>
                Cancelar
              </button>
              <button type="submit" className="btn btn-primary" disabled={busy}>
                {busy ? "Guardando…" : initial ? "Guardar cambios" : "Agregar y analizar"}
              </button>
            </div>
          </form>
        )}
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
