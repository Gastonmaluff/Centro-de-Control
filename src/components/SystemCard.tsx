import type { CSSProperties } from "react";
import type { ServiceStatus, SystemCardData } from "../data/types";
import { IcCloud, IcDomain, IcFirebase, IcGithub, IcRocket, IcSave, IcServer } from "./icons";

const money = (n?: number) => (n == null ? "—" : "$" + n.toLocaleString("es-AR"));

const statusLabel: Record<ServiceStatus, string> = {
  ok: "OK",
  warn: "Revisar",
  down: "Caído",
};

function InfraItem({ label, status, icon: Icon }: { label: string; status: ServiceStatus; icon: typeof IcServer }) {
  return (
    <div className="infra-item">
      <span className="k">{label}</span>
      <span className="v">
        <span className={`led ${status}`} />
        <span style={{ color: "var(--text-muted)", opacity: 0.65 }}>
          <Icon width={13} height={13} />
        </span>
        {statusLabel[status]}
      </span>
    </div>
  );
}

export default function SystemCard({ sys }: { sys: SystemCardData }) {
  const style = { "--acc": sys.accent, "--acc2": sys.accent2 } as CSSProperties;

  return (
    <article className="syscard" style={style}>
      <div className="syscard-band" />
      <div className="syscard-body">
        <div className="syscard-head">
          <div className="sys-glyph">{sys.glyph}</div>
          <div style={{ minWidth: 0 }}>
            <div className="sys-name">{sys.name}</div>
            <div className="sys-tag">{sys.tagline}</div>
          </div>
          <span className="sys-active">
            <span className="led ok" />
            Activo
          </span>
        </div>

        <div className="infra">
          <InfraItem label="App" status={sys.infra.app} icon={IcServer} />
          <InfraItem label="Firebase" status={sys.infra.firebase} icon={IcFirebase} />
          <InfraItem label="Dominio" status={sys.infra.domain} icon={IcDomain} />
          <InfraItem label="Backup" status={sys.infra.backup} icon={IcSave} />
        </div>

        <div className="sys-metrics">
          {sys.metrics.map((m) => (
            <div className="sys-metric" key={m.label}>
              <div className="m-label">{m.label}</div>
              <div className="m-value">
                {m.value}
                {m.hint && <span className="m-hint">{m.hint}</span>}
              </div>
            </div>
          ))}
        </div>

        <div className="sys-meta">
          <span>
            Último deploy <b>{sys.lastDeploy}</b>
          </span>
          {sys.monthly != null && (
            <>
              <span className="sep">·</span>
              <span>
                Mensualidad <b>{money(sys.monthly)}</b>
              </span>
              {sys.nextCharge && (
                <>
                  <span className="sep">·</span>
                  <span>
                    Próx. cobro <b>{sys.nextCharge}</b>
                  </span>
                </>
              )}
            </>
          )}
        </div>

        <div className="sys-footer">
          <button className="btn-work">
            <IcRocket width={16} height={16} />
            Trabajar hoy
          </button>
          <div className="quick-links">
            <a className="qlink" href={sys.links.github} target="_blank" rel="noreferrer" title="GitHub">
              <IcGithub width={17} height={17} />
            </a>
            <a className="qlink" href={sys.links.firebase} target="_blank" rel="noreferrer" title="Firebase">
              <IcFirebase width={17} height={17} />
            </a>
            <a className="qlink" href={sys.links.cloudflare} target="_blank" rel="noreferrer" title="Cloudflare">
              <IcCloud width={17} height={17} />
            </a>
            <a className="qlink" href={sys.links.domain} target="_blank" rel="noreferrer" title="Dominio">
              <IcDomain width={17} height={17} />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
