import { useAuth } from "./context/AuthContext";
import { SystemsProvider } from "./context/SystemsContext";
import Header from "./components/Header";
import Login from "./components/Login";
import RightPanel from "./components/RightPanel";
import Sidebar from "./components/Sidebar";
import StatCards from "./components/StatCards";
import SystemsSection from "./components/SystemsSection";
import { IcBolt } from "./components/icons";

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
    <SystemsProvider>
      <div className="app">
        <Sidebar />
        <div className="main">
          <Header />
          <div className="content">
            <div className="center-col">
              <StatCards />
              <SystemsSection />
            </div>
            <RightPanel />
          </div>
        </div>
      </div>
    </SystemsProvider>
  );
}
