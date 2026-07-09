import { useAuth } from "../context/AuthContext";
import { useNav, type View } from "../context/NavContext";
import {
  IcBilling,
  IcBolt,
  IcClients,
  IcCosts,
  IcDocs,
  IcHome,
  IcLogout,
  IcMonitor,
  IcSessions,
  IcSettings,
  IcSystems,
  IcTasks,
} from "./icons";

interface NavEntry {
  key: View;
  label: string;
  icon: (p: { width?: number; height?: number }) => JSX.Element;
  badge?: string;
  alert?: boolean;
}

const NAV: NavEntry[] = [
  { key: "inicio", label: "Inicio", icon: IcHome },
  { key: "sistemas", label: "Sistemas", icon: IcSystems, badge: "14" },
  { key: "clientes", label: "Clientes", icon: IcClients },
  { key: "cobros", label: "Cobros", icon: IcBilling, badge: "2", alert: true },
  { key: "monitoreo", label: "Monitoreo", icon: IcMonitor },
  { key: "tareas", label: "Tareas", icon: IcTasks },
  { key: "sesiones", label: "Sesiones de trabajo", icon: IcSessions },
  { key: "costos", label: "Costos", icon: IcCosts },
  { key: "documentos", label: "Documentos", icon: IcDocs },
  { key: "config", label: "Configuración", icon: IcSettings },
];

export default function Sidebar() {
  const { view: active, setView } = useNav();
  const { user, logout } = useAuth();

  const name = user?.displayName || "Gastón M.";
  const email = user?.email || "gaston@centrodecontrol.app";
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-logo">
          <IcBolt width={20} height={20} />
        </div>
        <div>
          <div className="brand-name">Centro de Control</div>
          <div className="brand-sub">Panel del desarrollador</div>
        </div>
      </div>

      <nav className="nav-section">
        <div className="nav-label">General</div>
        {NAV.slice(0, 5).map((item) => (
          <NavButton key={item.key} item={item} active={active} onClick={setView} />
        ))}
        <div className="nav-label">Trabajo</div>
        {NAV.slice(5).map((item) => (
          <NavButton key={item.key} item={item} active={active} onClick={setView} />
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="user-chip">
          <div className="avatar">{initials}</div>
          <div style={{ minWidth: 0 }}>
            <div className="user-name">{name}</div>
            <div className="user-mail">{email}</div>
          </div>
          <button className="icon-btn" style={{ marginLeft: "auto" }} title="Cerrar sesión" onClick={() => logout()}>
            <IcLogout width={16} height={16} />
          </button>
        </div>
      </div>
    </aside>
  );
}

function NavButton({
  item,
  active,
  onClick,
}: {
  item: NavEntry;
  active: View;
  onClick: (k: View) => void;
}) {
  const Icon = item.icon;
  return (
    <button className={`nav-item ${active === item.key ? "active" : ""}`} onClick={() => onClick(item.key)}>
      <Icon width={18} height={18} />
      {item.label}
      {item.badge && (
        <span className={`nav-badge ${"alert" in item && item.alert ? "alert" : ""}`}>{item.badge}</span>
      )}
    </button>
  );
}
