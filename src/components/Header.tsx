import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { useSystemsCtx } from "../context/SystemsContext";
import { runMonitorAll } from "../lib/monitoring";
import { IcBell, IcMenu, IcMoon, IcPlus, IcRefresh, IcSearch, IcSun } from "./icons";
import headerLogo from "../../ChatGPT Image 12 jul 2026, 01_16_40 a.m.png";

export default function Header({ onOpenMenu }: { onOpenMenu: () => void }) {
  const { theme, setTheme } = useTheme();
  const { openAdd } = useSystemsCtx();
  const [sweeping, setSweeping] = useState(false);

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
      <button className="icon-btn menu-trigger" title="Abrir menu" aria-label="Abrir menu" onClick={onOpenMenu}>
        <IcMenu width={18} height={18} />
      </button>

      <div className="header-brand-lockup" aria-label="Centro de Control">
        <img className="header-logo" src={headerLogo} alt="Centro de Control" width={2048} height={676} decoding="async" />
      </div>

      <div className="header-actions">
        <label className="search">
          <IcSearch width={16} height={16} />
          <input placeholder="Buscar sistemas, clientes, mensualidades..." />
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
