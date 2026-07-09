import { createContext, useContext, useRef, useState, type ReactNode } from "react";
import type { SystemCardData } from "../data/types";
import { useSystems } from "../hooks/useData";
import {
  createSystem,
  deleteSystem,
  importExampleSystems,
  updateSystem,
  type SystemInput,
} from "../firebase/systems";

interface SystemsCtx {
  systems: SystemCardData[];
  usingSeed: boolean;
  /** Modal state (the modal is rendered by SystemsSection to avoid an import cycle). */
  modalOpen: boolean;
  editing: SystemCardData | null;
  closeModal: () => void;
  openAdd: () => void;
  openEdit: (sys: SystemCardData) => void;
  /** Create (id null) or overwrite (id given) a system. */
  saveSystem: (id: string | null, data: SystemInput) => Promise<void>;
  removeSystem: (id: string) => Promise<void>;
  importExamples: () => Promise<void>;
}

const Ctx = createContext<SystemsCtx | null>(null);

export function SystemsProvider({ children }: { children: ReactNode }) {
  const { data: systems, usingSeed } = useSystems();
  const [editing, setEditing] = useState<SystemCardData | null>(null);
  const [open, setOpen] = useState(false);

  // Latest usingSeed value, readable inside async actions without stale closures.
  const seedRef = useRef(usingSeed);
  seedRef.current = usingSeed;

  /** Before the first real write, promote the example data into Firestore. */
  const ensureReal = async () => {
    if (seedRef.current) {
      await importExampleSystems();
      seedRef.current = false;
    }
  };

  const openAdd = () => {
    setEditing(null);
    setOpen(true);
  };
  const openEdit = (sys: SystemCardData) => {
    setEditing(sys);
    setOpen(true);
  };

  const saveSystem = async (id: string | null, data: SystemInput) => {
    await ensureReal();
    if (id) await updateSystem(id, data);
    else await createSystem(data);
  };

  const removeSystem = async (id: string) => {
    await ensureReal();
    await deleteSystem(id);
  };

  const importExamples = async () => {
    await importExampleSystems();
    seedRef.current = false;
  };

  return (
    <Ctx.Provider
      value={{
        systems,
        usingSeed,
        modalOpen: open,
        editing,
        closeModal: () => setOpen(false),
        openAdd,
        openEdit,
        saveSystem,
        removeSystem,
        importExamples,
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
