import { useCallback, useState } from "react";
import { useAuth } from "./context/AuthContext";
import { NavProvider, useNav } from "./context/NavContext";
import { SystemsProvider, useSystemsCtx } from "./context/SystemsContext";
import Header from "./components/Header";
import Login from "./components/Login";
import DashboardPanels from "./components/RightPanel";
import Sidebar from "./components/Sidebar";
import StatCards from "./components/StatCards";
import SystemsSection from "./components/SystemsSection";
import DashboardSections from "./components/DashboardSections";
import SystemFormModal from "./components/SystemFormModal";
import TodosModal from "./components/TodosModal";
import { CobrosView, ClientesView, PlaceholderView } from "./components/views";
import { IcBolt, IcCosts, IcDocs, IcMonitor, IcSessions, IcSettings, IcTasks } from "./components/icons";

export default function App() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="auth-wrap">
        <div className="brand-logo" style={{ width: 48, height: 48 }}>
          <IcBolt width={26} height={26} />
        </div>
      </div>
    );
  }

  if (!user) return <Login />;

  return (
    <NavProvider>
      <SystemsProvider>
        <Shell />
        <GlobalModals />
      </SystemsProvider>
    </NavProvider>
  );
}

function Shell() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const openDrawer = useCallback(() => setDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  return (
    <div className="app">
      <Sidebar open={drawerOpen} onClose={closeDrawer} />
      <div className="main">
        <Header onOpenMenu={openDrawer} />
        <div className="content">
          <MainView />
        </div>
      </div>
    </div>
  );
}

function MainView() {
  const { view } = useNav();

  switch (view) {
    case "inicio":
      return (
        <div className="dashboard-stack">
          <DashboardPanels />
          <StatCards />
          <DashboardSections />
        </div>
      );
    case "sistemas":
      return <SystemsSection />;
    case "cobros":
      return <CobrosView />;
    case "clientes":
      return <ClientesView />;
    case "monitoreo":
      return (
        <PlaceholderView
          icon={IcMonitor}
          title="Monitoreo"
          text="Estado en vivo de uptime, errores y rendimiento de cada sistema. Lo conectamos a tus metricas reales en el proximo paso."
        />
      );
    case "tareas":
      return (
        <PlaceholderView
          icon={IcTasks}
          title="Tareas"
          text="Tablero de tareas por sistema para organizar el trabajo del dia."
        />
      );
    case "sesiones":
      return (
        <PlaceholderView
          icon={IcSessions}
          title="Sesiones de trabajo"
          text="Registro de tiempo dedicado a cada sistema, con historial y totales."
        />
      );
    case "costos":
      return (
        <PlaceholderView
          icon={IcCosts}
          title="Costos"
          text="Costos de infraestructura (Firebase, dominios, Cloudflare) vs. ingresos por sistema."
        />
      );
    case "documentos":
      return (
        <PlaceholderView
          icon={IcDocs}
          title="Documentos"
          text="Credenciales, contratos y notas tecnicas de cada sistema en un solo lugar."
        />
      );
    case "config":
      return (
        <PlaceholderView
          icon={IcSettings}
          title="Configuracion"
          text="Preferencias del panel, tema, cuenta y opciones de tu Centro de Control."
        />
      );
    default:
      return null;
  }
}

function GlobalModals() {
  const { modalOpen, editing, closeModal, todosFor, closeTodos } = useSystemsCtx();
  return (
    <>
      {modalOpen && <SystemFormModal initial={editing} onClose={closeModal} />}
      {todosFor && <TodosModal system={todosFor} onClose={closeTodos} />}
    </>
  );
}
