import { useAuth } from "./context/AuthContext";
import { NavProvider, useNav } from "./context/NavContext";
import { SystemsProvider, useSystemsCtx } from "./context/SystemsContext";
import Header from "./components/Header";
import Login from "./components/Login";
import RightPanel from "./components/RightPanel";
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
        <div className="app">
          <Sidebar />
          <div className="main">
            <Header />
            <div className="content">
              <MainView />
            </div>
          </div>
        </div>
        <GlobalModals />
      </SystemsProvider>
    </NavProvider>
  );
}

function MainView() {
  const { view } = useNav();

  switch (view) {
    case "inicio":
      return (
        <div className="dashboard-grid">
          <div className="center-col">
            <StatCards />
            <DashboardSections />
          </div>
          <RightPanel />
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
          text="Estado en vivo de uptime, errores y rendimiento de cada sistema. Lo conectamos a tus métricas reales en el próximo paso."
        />
      );
    case "tareas":
      return (
        <PlaceholderView
          icon={IcTasks}
          title="Tareas"
          text="Tablero de tareas por sistema para organizar el trabajo del día."
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
          text="Credenciales, contratos y notas técnicas de cada sistema en un solo lugar."
        />
      );
    case "config":
      return (
        <PlaceholderView
          icon={IcSettings}
          title="Configuración"
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
