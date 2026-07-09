import { useState } from "react";
import { useSystemsCtx } from "../context/SystemsContext";
import SystemCard from "./SystemCard";
import SystemFormModal from "./SystemFormModal";
import { IcDownload, IcPlus } from "./icons";

export default function SystemsSection() {
  const { systems, usingSeed, openAdd, importExamples, modalOpen, editing, closeModal } = useSystemsCtx();
  const [importing, setImporting] = useState(false);

  const doImport = async () => {
    setImporting(true);
    try {
      await importExamples();
    } finally {
      setImporting(false);
    }
  };

  return (
    <section>
      <div className="section-head">
        <h2>Tus sistemas</h2>
        <span className="muted">{systems.length} en el panel</span>
      </div>

      {usingSeed && (
        <div className="seed-banner">
          <span>
            Estás viendo <b>datos de ejemplo</b>. Importalos a tu Firestore para empezar a editarlos, o agregá el tuyo.
          </span>
          <button className="btn btn-ghost" onClick={doImport} disabled={importing}>
            <IcDownload width={15} height={15} />
            {importing ? "Importando…" : "Importar ejemplos"}
          </button>
        </div>
      )}

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

      {modalOpen && <SystemFormModal initial={editing} onClose={closeModal} />}
    </section>
  );
}
