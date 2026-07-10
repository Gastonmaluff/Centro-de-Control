import { useSystemsCtx } from "../context/SystemsContext";
import { groupSystems, sectionInfo } from "../lib/status";
import SystemCard from "./SystemCard";
import { IcPlus, IcSystems } from "./icons";

export default function DashboardSections() {
  const { systems, loading, openAdd } = useSystemsCtx();

  if (!loading && systems.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-ico">
          <IcSystems width={26} height={26} />
        </div>
        <h3>Todavía no cargaste ningún sistema</h3>
        <p>Agregá tu primer sistema para empezar tu inventario técnico. Al crearlo, Centro de Control lo analiza automáticamente.</p>
        <button className="btn btn-primary" onClick={openAdd}>
          <IcPlus width={17} height={17} />
          Agregar sistema
        </button>
      </div>
    );
  }

  const groups = groupSystems(systems);

  return (
    <div className="dash-sections">
      {groups.map(({ key, systems: list }) => (
        <section key={key}>
          <div className="section-head">
            <h2>
              {sectionInfo[key].title}
              <span className="section-count">{list.length}</span>
            </h2>
            <span className="muted">{sectionInfo[key].hint}</span>
          </div>
          <div className="systems-grid" style={{ marginTop: 12 }}>
            {list.map((sys) => (
              <SystemCard key={sys.id} sys={sys} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
