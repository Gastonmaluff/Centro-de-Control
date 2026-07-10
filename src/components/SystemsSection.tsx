import { useSystemsCtx } from "../context/SystemsContext";
import SystemCard from "./SystemCard";
import { IcPlus, IcSystems } from "./icons";

export default function SystemsSection() {
  const { systems, loading, openAdd } = useSystemsCtx();

  return (
    <section>
      <div className="section-head">
        <h2>Tus sistemas</h2>
        <span className="muted">{systems.length} en el panel</span>
      </div>

      {!loading && systems.length === 0 ? (
        <div className="empty-state" style={{ marginTop: 12 }}>
          <div className="empty-ico">
            <IcSystems width={26} height={26} />
          </div>
          <h3>Todavía no cargaste ningún sistema</h3>
          <p>Agregá tu primer sistema para empezar a construir tu inventario técnico.</p>
          <button className="btn btn-primary" onClick={openAdd}>
            <IcPlus width={17} height={17} />
            Agregar sistema
          </button>
        </div>
      ) : (
        <div className="systems-grid" style={{ marginTop: 12 }}>
          {systems.map((sys) => (
            <SystemCard key={sys.id} sys={sys} />
          ))}
          <button className="syscard syscard-add" onClick={openAdd}>
            <span className="add-plus">
              <IcPlus width={22} height={22} />
            </span>
            <span className="add-title">Agregar sistema</span>
            <span className="add-sub">Creá una nueva tarjeta en tu panel</span>
          </button>
        </div>
      )}
    </section>
  );
}
