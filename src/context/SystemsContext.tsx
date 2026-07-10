import { createContext, useContext, useState, type ReactNode } from "react";
import type { System } from "../data/types";
import { useSystems } from "../hooks/useData";
import { createSystem, deleteSystem, updateSystem, type SystemInput } from "../firebase/systems";

interface SystemsCtx {
  systems: System[];
  loading: boolean;
  // modal Agregar/Editar
  modalOpen: boolean;
  editing: System | null;
  openAdd: () => void;
  openEdit: (sys: System) => void;
  closeModal: () => void;
  // panel de pendientes
  todosFor: System | null;
  openTodos: (sys: System) => void;
  closeTodos: () => void;
  // acciones
  saveSystem: (id: string | null, data: SystemInput) => Promise<string>;
  removeSystem: (id: string) => Promise<void>;
}

const Ctx = createContext<SystemsCtx | null>(null);

export function SystemsProvider({ children }: { children: ReactNode }) {
  const { data: systems, loading } = useSystems();
  const [editing, setEditing] = useState<System | null>(null);
  const [open, setOpen] = useState(false);
  const [todosFor, setTodosFor] = useState<System | null>(null);

  const saveSystem = async (id: string | null, data: SystemInput) => {
    if (id) {
      await updateSystem(id, data);
      return id;
    }
    return createSystem(data);
  };

  return (
    <Ctx.Provider
      value={{
        systems,
        loading,
        modalOpen: open,
        editing,
        openAdd: () => {
          setEditing(null);
          setOpen(true);
        },
        openEdit: (sys) => {
          setEditing(sys);
          setOpen(true);
        },
        closeModal: () => setOpen(false),
        todosFor,
        openTodos: setTodosFor,
        closeTodos: () => setTodosFor(null),
        saveSystem,
        removeSystem: (id) => deleteSystem(id),
      }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useSystemsCtx() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useSystemsCtx must be used within SystemsProvider");
  return ctx;
}
