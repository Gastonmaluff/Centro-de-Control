import { createContext, useContext, useState, type ReactNode } from "react";
import type { Module } from "../data/types";
import { createModule, deleteModule, updateModule, type ModuleInput } from "../firebase/modules";
import { useModules } from "../hooks/useData";

interface ModulesCtx {
  modules: Module[];
  loading: boolean;
  modalOpen: boolean;
  editing: Module | null;
  openAdd: () => void;
  openEdit: (module: Module) => void;
  closeModal: () => void;
  saveModule: (id: string | null, data: ModuleInput) => Promise<string>;
  removeModule: (id: string) => Promise<void>;
}

const Ctx = createContext<ModulesCtx | null>(null);

export function ModulesProvider({ children }: { children: ReactNode }) {
  const { data: modules, loading } = useModules();
  const [editing, setEditing] = useState<Module | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Ctx.Provider value={{
      modules, loading, modalOpen, editing,
      openAdd: () => { setEditing(null); setModalOpen(true); },
      openEdit: (module) => { setEditing(module); setModalOpen(true); },
      closeModal: () => setModalOpen(false),
      saveModule: async (id, data) => id ? (await updateModule(id, data), id) : createModule(data),
      removeModule: deleteModule,
    }}>
      {children}
    </Ctx.Provider>
  );
}

export function useModulesCtx() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useModulesCtx must be used within ModulesProvider");
  return ctx;
}
