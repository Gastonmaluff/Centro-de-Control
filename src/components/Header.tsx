import { useTheme } from "../context/ThemeContext";
import { useSystemsCtx } from "../context/SystemsContext";
import { IcBell, IcMoon, IcPlus, IcSearch, IcSun } from "./icons";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const { openAdd } = useSystemsCtx();

  return (
    <header className="header">
      <div className="header-titles">
        <h1>Centro de Control</h1>
        <div className="header-sub">
          <b>14 sistemas</b> activos, <b>2 cobros</b> pendientes y <b>3 proyectos</b> en desarrollo
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
