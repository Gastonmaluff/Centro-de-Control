import { useEffect, useRef, useState } from "react";
import type { Module } from "../data/types";
import { useModulesCtx } from "../context/ModulesContext";
import { uploadModuleImage } from "../firebase/storage";
import { IcImage, IcPlus } from "./icons";

type FormState = {
  name: string;
  description: string;
  prompt: string;
  repositoryUrl: string;
  imageUrl: string;
  status: "ready" | "draft";
};

export default function ModuleFormModal({ initial, onClose }: { initial: Module | null; onClose: () => void }) {
  const { saveModule } = useModulesCtx();
  const [form, setForm] = useState<FormState>({
    name: initial?.name ?? "",
    description: initial?.description ?? "",
    prompt: initial?.prompt ?? "",
    repositoryUrl: initial?.repositoryUrl ?? "",
    imageUrl: initial?.imageUrl ?? "",
    status: initial?.status ?? "ready",
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState(initial?.imageUrl ?? "");
  const [saving, setSaving] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!imageFile) return;
    const url = URL.createObjectURL(imageFile);
    setPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [imageFile]);

  const change = (key: keyof FormState, value: string) => setForm((current) => ({ ...current, [key]: value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    setSaving(true);
    try {
      const data = {
        name: form.name.trim(),
        description: form.description.trim(),
        prompt: form.prompt.trim(),
        repositoryUrl: form.repositoryUrl.trim(),
        imageUrl: form.imageUrl,
        status: form.status,
      };
      const id = await saveModule(initial?.id ?? null, data);
      if (imageFile) {
        const imageUrl = await uploadModuleImage(id, imageFile);
        await saveModule(id, { ...data, imageUrl });
      }
      onClose();
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="modal-overlay" role="presentation">
      <div className="modal module-modal" role="dialog" aria-modal="true" aria-labelledby="module-title">
        <div className="modal-head">
          <div>
            <h2 id="module-title">{initial ? "Editar módulo" : "Nuevo módulo"}</h2>
            <p>Guardá solo la información esencial para identificarlo y reutilizarlo.</p>
          </div>
          <button className="icon-btn" onClick={onClose} aria-label="Cerrar"><IcPlus width={18} height={18} style={{ transform: "rotate(45deg)" }} /></button>
        </div>
        <form onSubmit={submit}>
          <div className="module-form-grid">
            <label className="field span2"><span>Nombre *</span><input autoFocus value={form.name} onChange={(e) => change("name", e.target.value)} placeholder="Authenticator" required /></label>
            <label className="field span2"><span>Descripción</span><textarea value={form.description} onChange={(e) => change("description", e.target.value)} placeholder="Qué resuelve y cuándo usarlo..." /></label>
            <label className="field span2"><span>Prompt para Codex</span><textarea className="module-prompt-input" value={form.prompt} onChange={(e) => change("prompt", e.target.value)} placeholder="Escribí el prompt que vas a usar con este módulo..." /></label>
            <div className="field span2">
              <span>Imagen del módulo</span>
              <div className="module-image-picker">
                {previewUrl ? <img src={previewUrl} alt="Vista previa del módulo" /> : <div className="module-image-empty"><IcImage width={24} height={24} /><span>Sin imagen seleccionada</span></div>}
                <button type="button" className="btn" onClick={() => fileInputRef.current?.click()}><IcImage width={16} height={16} /> {previewUrl ? "Cambiar imagen" : "Agregar imagen"}</button>
                <input ref={fileInputRef} className="visually-hidden" type="file" accept="image/png,image/jpeg,image/webp,image/svg+xml" onChange={(e) => setImageFile(e.target.files?.[0] ?? null)} />
              </div>
            </div>
            <label className="field span2"><span>Repositorio GitHub</span><input type="url" value={form.repositoryUrl} onChange={(e) => change("repositoryUrl", e.target.value)} placeholder="https://github.com/..." /></label>
            <label className="field span2"><span>Estado</span><select value={form.status} onChange={(e) => change("status", e.target.value)}><option value="ready">Listo para usar</option><option value="draft">En desarrollo</option></select></label>
          </div>
          <div className="modal-foot"><button type="button" className="btn" onClick={onClose}>Cancelar</button><button className="btn btn-primary" disabled={saving}>{saving ? "Guardando..." : "Guardar módulo"}</button></div>
        </form>
      </div>
    </div>
  );
}
