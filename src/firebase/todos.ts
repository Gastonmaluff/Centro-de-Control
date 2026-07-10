import { addDoc, collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "./config";
import { patchSystem } from "./systems";
import type { Todo, TodoPriority, TodoStats } from "../data/types";

const sub = (systemId: string) => collection(db, "systems", systemId, "todos");

export type TodoInput = Omit<Todo, "id">;

export async function addTodo(systemId: string, input: TodoInput): Promise<void> {
  await addDoc(sub(systemId), input);
}

export async function updateTodo(systemId: string, todoId: string, patch: Partial<Todo>): Promise<void> {
  await updateDoc(doc(db, "systems", systemId, "todos", todoId), patch);
}

export async function deleteTodo(systemId: string, todoId: string): Promise<void> {
  await deleteDoc(doc(db, "systems", systemId, "todos", todoId));
}

const PRIORITY_RANK: Record<TodoPriority, number> = { critical: 3, high: 2, medium: 1, low: 0 };

/** Recalcula los contadores denormalizados (todoStats) del sistema. */
export async function syncTodoStats(systemId: string, todos: Todo[]): Promise<void> {
  const open = todos.filter((t) => t.status === "pending" || t.status === "in-progress");
  const top = [...open].sort((a, b) => PRIORITY_RANK[b.priority] - PRIORITY_RANK[a.priority])[0];
  const done = todos
    .filter((t) => t.status === "done" && t.doneAt)
    .sort((a, b) => (b.doneAt! > a.doneAt! ? 1 : -1))[0];

  const stats: TodoStats = {
    open: open.length,
    topPriority: top?.priority,
    topPriorityTitle: top?.title,
    lastDoneTitle: done?.title,
    lastDoneAt: done?.doneAt,
  };
  await patchSystem(systemId, { todoStats: stats });
}
