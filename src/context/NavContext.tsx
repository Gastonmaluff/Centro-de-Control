import { createContext, useContext, useState, type ReactNode } from "react";

export type View =
  | "inicio"
  | "sistemas"
  | "clientes"
  | "cobros"
  | "monitoreo"
  | "tareas"
  | "sesiones"
  | "costos"
  | "documentos"
  | "config";

interface NavCtx {
  view: View;
  setView: (v: View) => void;
}

const Ctx = createContext<NavCtx | null>(null);

export function NavProvider({ children }: { children: ReactNode }) {
  const [view, setView] = useState<View>("inicio");
  return <Ctx.Provider value={{ view, setView }}>{children}</Ctx.Provider>;
}

export function useNav() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useNav must be used within NavProvider");
  return ctx;
}
