import { useSystems } from "../hooks/useData";
import SystemCard from "./SystemCard";

export default function SystemsSection() {
  const { data: systems, usingSeed } = useSystems();

  return (
    <section>
      <div className="section-head">
        <h2>Tus sistemas</h2>
        <span className="muted">
          {systems.length} en el panel
          {usingSeed ? " · datos de ejemplo" : ""}
        </span>
      </div>
      <div className="systems-grid" style={{ marginTop: 12 }}>
        {systems.map((sys) => (
          <SystemCard key={sys.id} sys={sys} />
        ))}
      </div>
    </section>
  );
}
