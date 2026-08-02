import { useMemo, useState } from "react";
import { useModulesCtx } from "../context/ModulesContext";
import { IcCheck, IcEdit, IcExternal, IcImage, IcPackage, IcPlus, IcSearch, IcTrash } from "./icons";
import { PageHead } from "./views";

export default function ModulesSection() {
  const { modules, loading, openAdd, openEdit, removeModule } = useModulesCtx();
  const [search, setSearch] = useState("");
  const [copiedModuleId, setCopiedModuleId] = useState<string | null>(null);
  const filtered = useMemo(() => modules.filter((m) => `${m.name} ${m.description ?? ""}`.toLowerCase().includes(search.toLowerCase())), [modules, search]);

  const copyPrompt = async (moduleId: string, prompt: string) => {
    await navigator.clipboard.writeText(prompt);
    setCopiedModuleId(moduleId);
    window.setTimeout(() => setCopiedModuleId((current) => current === moduleId ? null : current), 1800);
  };

  return <>
    <PageHead title="Módulos" subtitle="Tu biblioteca de piezas reutilizables para acelerar nuevos proyectos." action={<button className="btn btn-primary" onClick={openAdd}><IcPlus width={17} height={17} /> Nuevo módulo</button>} />
    <div className="modules-toolbar"><div className="module-search"><IcSearch width={16} height={16} /><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Buscar módulos..." /></div><span className="muted">{modules.length} módulo{modules.length === 1 ? "" : "s"}</span></div>
    {loading ? <div className="empty-state"><p>Cargando módulos...</p></div> : filtered.length === 0 ? <div className="empty-state"><div className="empty-ico"><IcPackage width={26} height={26} /></div><h3>{modules.length ? "No hay coincidencias" : "Tu biblioteca está vacía"}</h3><p>{modules.length ? "Probá con otro término de búsqueda." : "Guardá Authenticator, Web Starter, Facturación Electrónica y todas las piezas que quieras reutilizar."}</p>{!modules.length && <button className="btn btn-primary" onClick={openAdd}><IcPlus width={17} height={17} /> Cargar primer módulo</button>}</div> : <div className="modules-grid">{filtered.map((module) => <article className="module-card" key={module.id}><div className="module-cover">{module.imageUrl ? <img src={module.imageUrl} alt="" /> : <IcImage width={42} height={42} />}<span className={`module-status ${module.status === "draft" ? "draft" : ""}`}>{module.status === "draft" ? "En desarrollo" : "Listo para usar"}</span></div><div className="module-card-body"><div className="module-card-head"><h3>{module.name}</h3><div className="module-actions"><button className="icon-btn" title="Editar" onClick={() => openEdit(module)}><IcEdit width={15} height={15} /></button><button className="icon-btn danger" title="Eliminar" onClick={() => { if (window.confirm(`¿Eliminar ${module.name}?`)) void removeModule(module.id); }}><IcTrash width={15} height={15} /></button></div></div><p>{module.description || "Sin descripción todavía."}</p><div className="module-card-links">{module.repositoryUrl && <a className="module-repo" href={module.repositoryUrl} target="_blank" rel="noreferrer"><IcExternal width={14} height={14} /> Ver repositorio</a>}{module.prompt && <button className="module-copy-prompt" type="button" title="Copiar prompt de Codex" onClick={() => void copyPrompt(module.id, module.prompt!)}>{copiedModuleId === module.id ? <><IcCheck width={14} height={14} /> Copiado</> : "Copiar prompt"}</button>}</div></div></article>)}</div>}
  </>;
}
