import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { useSystemsCtx } from "../context/SystemsContext";
import { computeStatus } from "../lib/status";
import { runMonitorAll } from "../lib/monitoring";
import { IcBell, IcMoon, IcPlus, IcRefresh, IcSearch, IcSun } from "./icons";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const { openAdd, systems } = useSystemsCtx();
  const [sweeping, setSweeping] = useState(false);

  const operational = systems.filter((s) => computeStatus(s) === "operational").length;
  const attention = systems.filter((s) => ["warning", "down"].includes(computeStatus(s))).length;
  const openTodos = systems.reduce((a, s) => a + (s.todoStats?.open ?? 0), 0);

  const sweep = async () => {
    if (sweeping) return;
    setSweeping(true);
    try {
      await runMonitorAll();
    } catch {
      /* silencioso: el snapshot refleja lo que sí se pudo actualizar */
    } finally {
      setSweeping(false);
    }
  };

  return (
    <header className="header">
      <div className="header-titles">
        <h1>Centro de Control</h1>
        <div className="header-sub">
          <b>{systems.length} sistemas</b> · <b>{operational} operativos</b> ·{" "}
          <b>{attention} requieren atención</b> · <b>{openTodos} pendientes</b>
        </div>
      </div>

      <div className="header-actions">
        <label className="search">
          <IcSearch width={16} height={16} />
          <input placeholder="Buscar sistemas, clientes, cobros…" />
          <kbd>⌘K</kbd>
        </label>

        <div className="theme-toggle" role="group" aria-label="Modo de color">
          <button
            className={theme === "light" ? "active" : ""}
            onClick={() => setTheme("light")}
            title="Modo claro"
            aria-label="Modo claro"
          >
            <IcSun width={16} height={16} />
          </button>
          <button
            className={theme === "dark" ? "active" : ""}
            onClick={() => setTheme("dark")}
            title="Modo oscuro"
            aria-label="Modo oscuro"
          >
            <IcMoon width={16} height={16} />
          </button>
        </div>

        <button
          className="icon-btn"
          title="Revisar todos los sistemas"
          aria-label="Revisar todos los sistemas"
          onClick={sweep}
          disabled={sweeping}
        >
          <IcRefresh width={17} height={17} className={sweeping ? "spin" : undefined} />
        </button>

        <button className="icon-btn dot-badge" title="Notificaciones">
          <IcBell width={18} height={18} />
        </button>

        <button className="btn btn-primary" onClick={openAdd}>
          <IcPlus width={17} height={17} />
          Agregar sistema
        </button>
      </div>
    </header>
  );
}
