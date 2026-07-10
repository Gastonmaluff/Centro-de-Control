import { useState, type FormEvent } from "react";
import type { System, Todo, TodoKind, TodoPriority, TodoStatus } from "../data/types";
import { useTodos } from "../hooks/useData";
import { addTodo, deleteTodo, syncTodoStats, updateTodo } from "../firebase/todos";
import { IcCheck, IcPlus, IcTrash } from "./icons";

const KINDS: { v: TodoKind; label: string }[] = [
  { v: "task", label: "Tarea" },
  { v: "bug", label: "Error" },
  { v: "polish", label: "Pulida" },
  { v: "idea", label: "Idea" },
];
const kindLabel: Record<TodoKind, string> = { task: "Tarea", bug: "Error", polish: "Pulida", idea: "Idea" };
const kindTone: Record<TodoKind, string> = { task: "brand", bug: "down", polish: "warn", idea: "ok" };

const PRIORITIES: { v: TodoPriority; label: string }[] = [
  { v: "low", label: "Baja" },
  { v: "medium", label: "Media" },
  { v: "high", label: "Alta" },
  { v: "critical", label: "Crítica" },
];
const priorityTone: Record<TodoPriority, string> = { low: "", medium: "", high: "warn", critical: "down" };

const statusLabel: Record<TodoStatus, string> = {
  pending: "Pendiente",
  "in-progress": "En progreso",
  done: "Completado",
  discarded: "Descartado",
};

export default function TodosModal({ system, onClose }: { system: System; onClose: () => void }) {
  const { data: todos } = useTodos(system.id);
  const [title, setTitle] = useState("");
  const [kind, setKind] = useState<TodoKind>("task");
  const [priority, setPriority] = useState<TodoPriority>("medium");
  const [busy, setBusy] = useState(false);

  const resync = (list: Todo[]) => syncTodoStats(system.id, list);

  const add = async (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    setBusy(true);
    const todo: Omit<Todo, "id"> = {
      title: title.trim(),
      kind,
      priority,
      status: "pending",
      createdAt: new Date().toISOString(),
    };
    try {
      await addTodo(system.id, todo);
      await resync([...todos, { ...todo, id: "_tmp" }]);
      setTitle("");
      setPriority("medium");
      setKind("task");
    } finally {
      setBusy(false);
    }
  };

  const setStatus = async (t: Todo, status: TodoStatus) => {
    const patch: Partial<Todo> = { status, doneAt: status === "done" ? new Date().toISOString() : undefined };
    await updateTodo(system.id, t.id, { status, ...(status === "done" ? { doneAt: patch.doneAt } : {}) });
    await resync(todos.map((x) => (x.id === t.id ? { ...x, ...patch } : x)));
  };

  const remove = async (t: Todo) => {
    await deleteTodo(system.id, t.id);
    await resync(todos.filter((x) => x.id !== t.id));
  };

  const openItems = todos.filter((t) => t.status === "pending" || t.status === "in-progress");
  const closedItems = todos.filter((t) => t.status === "done" || t.status === "discarded");

  return (
    <div className="modal-overlay" onMouseDown={onClose}>
      <div className="modal" onMouseDown={(e) => e.stopPropagation()}>
        <div className="modal-head">
          <div>
            <h3>Pendientes · {system.name}</h3>
            <p className="muted" style={{ fontSize: 12.5, margin: "2px 0 0" }}>
              Tareas, errores, pulidas e ideas de este sistema.
            </p>
          </div>
          <button className="icon-btn" onClick={onClose} title="Cerrar" aria-label="Cerrar">
            <IcPlus width={18} height={18} style={{ transform: "rotate(45deg)" }} />
          </button>
        </div>

        <div className="modal-body">
          <form className="todo-add" onSubmit={add}>
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Nuevo pendiente…" />
            <select value={kind} onChange={(e) => setKind(e.target.value as TodoKind)}>
              {KINDS.map((k) => (
                <option key={k.v} value={k.v}>{k.label}</option>
              ))}
            </select>
            <select value={priority} onChange={(e) => setPriority(e.target.value as TodoPriority)}>
              {PRIORITIES.map((p) => (
                <option key={p.v} value={p.v}>{p.label}</option>
              ))}
            </select>
            <button className="btn btn-primary" disabled={busy || !title.trim()}>
              <IcPlus width={16} height={16} /> Agregar
            </button>
          </form>

          {todos.length === 0 && <p className="muted" style={{ textAlign: "center", padding: "18px 0" }}>Todavía no hay pendientes.</p>}

          {openItems.map((t) => (
            <TodoRow key={t.id} t={t} onStatus={setStatus} onRemove={remove} />
          ))}

          {closedItems.length > 0 && (
            <>
              <div className="form-section" style={{ marginTop: 14 }}>Completados / descartados</div>
              {closedItems.map((t) => (
                <TodoRow key={t.id} t={t} onStatus={setStatus} onRemove={remove} muted />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function TodoRow({
  t,
  onStatus,
  onRemove,
  muted,
}: {
  t: Todo;
  onStatus: (t: Todo, s: TodoStatus) => void;
  onRemove: (t: Todo) => void;
  muted?: boolean;
}) {
  return (
    <div className={`todo-row ${muted ? "done" : ""}`}>
      <button
        className="todo-check"
        title={t.status === "done" ? "Reabrir" : "Marcar completado"}
        onClick={() => onStatus(t, t.status === "done" ? "pending" : "done")}
      >
        {t.status === "done" && <IcCheck width={13} height={13} />}
      </button>
      <span className={`pill ${kindTone[t.kind] === "brand" ? "" : kindTone[t.kind]}`} style={{ flexShrink: 0 }}>
        {kindLabel[t.kind]}
      </span>
      <span className="todo-title">{t.title}</span>
      {priorityTone[t.priority] && (
        <span className={`pill ${priorityTone[t.priority]}`} style={{ flexShrink: 0 }}>
          {PRIORITIES.find((p) => p.v === t.priority)?.label}
        </span>
      )}
      <select
        className="todo-status"
        value={t.status}
        onChange={(e) => onStatus(t, e.target.value as TodoStatus)}
      >
        {(["pending", "in-progress", "done", "discarded"] as TodoStatus[]).map((s) => (
          <option key={s} value={s}>{statusLabel[s]}</option>
        ))}
      </select>
      <button className="todo-del" onClick={() => onRemove(t)} title="Eliminar" aria-label="Eliminar">
        <IcTrash width={14} height={14} />
      </button>
    </div>
  );
}
