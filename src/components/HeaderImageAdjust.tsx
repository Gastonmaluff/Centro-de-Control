import { useEffect, useRef, useState, type CSSProperties, type PointerEvent } from "react";
import type { ComputedStatus } from "../data/types";
import {
  clampContentWidth,
  clampOffset,
  clampZoom,
  headerContentColor,
  headerContentStyle,
  headerImageStyle,
  sampleHeaderTextColor,
  ZOOM_MAX,
  ZOOM_MIN,
  type HeaderAdjust,
  type HeaderContentAdjust,
} from "../lib/headerImage";
import { IcCheck, IcMinus, IcPlus, IcRefresh, IcTarget } from "./icons";
import LiveMonitorIndicator from "./LiveMonitorIndicator";

interface Props {
  imageUrl: string;
  alt?: string;
  primary: string;
  secondary: string;
  glyph?: string;
  name?: string;
  description?: string;
  includesLogo?: boolean;
  status: ComputedStatus;
  statusLabel: string;
  statusTone: string;
  value: HeaderAdjust;
  contentValue: HeaderContentAdjust;
  onSave: (a: HeaderAdjust, c: HeaderContentAdjust) => void;
  onCancel: () => void;
}

type Tab = "image" | "content";
type PreviewMode = "desktop" | "mobile";

function initials(s?: string) {
  return (s || "")
    .trim()
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function measureHeroAspect(): number {
  const hero = document.querySelector(".syscard .sys-hero");
  if (hero) {
    const r = hero.getBoundingClientRect();
    if (r.width > 0 && r.height > 0) return r.width / r.height;
  }
  return 6.4;
}

export default function HeaderImageAdjust({
  imageUrl,
  alt,
  primary,
  secondary,
  glyph,
  name,
  description,
  includesLogo,
  status,
  statusLabel,
  statusTone,
  value,
  contentValue,
  onSave,
  onCancel,
}: Props) {
  const [tab, setTab] = useState<Tab>("image");
  const [previewMode, setPreviewMode] = useState<PreviewMode>("desktop");
  const [adjust, setAdjust] = useState<HeaderAdjust>(value);
  const [content, setContent] = useState<HeaderContentAdjust>(contentValue);
  const [autoColor, setAutoColor] = useState("#111827");
  const [natural, setNatural] = useState<{ w: number; h: number } | null>(null);
  const [aspect, setAspect] = useState<number>(6.4);
  const [draggingContent, setDraggingContent] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const imageDrag = useRef<{ x: number; y: number; ox: number; oy: number } | null>(null);
  const contentDrag = useRef<{ dx: number; dy: number } | null>(null);

  useEffect(() => {
    setAspect(measureHeroAspect());
  }, []);

  useEffect(() => {
    const el = imgRef.current;
    if (el && el.complete && el.naturalWidth) setNatural({ w: el.naturalWidth, h: el.naturalHeight });
  }, [imageUrl]);

  useEffect(() => {
    if (content.colorMode !== "auto") return;
    let alive = true;
    void sampleHeaderTextColor(imageUrl, content.positionX, content.positionY).then((color) => {
      if (alive) setAutoColor(color);
    });
    return () => {
      alive = false;
    };
  }, [imageUrl, content.colorMode, content.positionX, content.positionY]);

  const displayGlyph = glyph?.trim() || initials(name) || "SC";
  const resolvedColor = headerContentColor(content, autoColor);

  const clampPoint = (x: number, y: number) => {
    const frame = frameRef.current?.getBoundingClientRect();
    const box = contentRef.current?.getBoundingClientRect();
    if (!frame || !box) return { x: clampOffset(x), y: clampOffset(y) };
    const halfW = (box.width / frame.width) * 50;
    const halfH = (box.height / frame.height) * 50;
    return {
      x: Math.min(100 - halfW, Math.max(halfW, x)),
      y: Math.min(100 - halfH, Math.max(halfH, y)),
    };
  };

  const setContentPosition = (x: number, y: number) => {
    const next = clampPoint(x, y);
    setContent((c) => ({ ...c, positionX: Number(next.x.toFixed(1)), positionY: Number(next.y.toFixed(1)) }));
  };

  const startImageDrag = (e: PointerEvent<HTMLDivElement>) => {
    if (tab !== "image") return;
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      /* noop */
    }
    imageDrag.current = { x: e.clientX, y: e.clientY, ox: adjust.offsetX, oy: adjust.offsetY };
  };

  const moveImageDrag = (e: PointerEvent<HTMLDivElement>) => {
    if (!imageDrag.current || !frameRef.current || !natural) return;
    const rect = frameRef.current.getBoundingClientRect();
    const cover = Math.max(rect.width / natural.w, rect.height / natural.h);
    const dispW = natural.w * cover * adjust.zoom;
    const dispH = natural.h * cover * adjust.zoom;
    const slackX = Math.max(dispW - rect.width, 1);
    const slackY = Math.max(dispH - rect.height, 1);
    const dx = e.clientX - imageDrag.current.x;
    const dy = e.clientY - imageDrag.current.y;
    setAdjust((a) => ({
      ...a,
      offsetX: clampOffset(imageDrag.current!.ox - (dx / slackX) * 100),
      offsetY: clampOffset(imageDrag.current!.oy - (dy / slackY) * 100),
    }));
  };

  const startContentDrag = (e: PointerEvent<HTMLDivElement>) => {
    if (tab !== "content" || !frameRef.current || !contentRef.current) return;
    e.stopPropagation();
    const box = contentRef.current.getBoundingClientRect();
    contentDrag.current = { dx: e.clientX - box.left - box.width / 2, dy: e.clientY - box.top - box.height / 2 };
    setDraggingContent(true);
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      /* noop */
    }
  };

  const moveContentDrag = (e: PointerEvent<HTMLDivElement>) => {
    if (!contentDrag.current || !frameRef.current) return;
    const rect = frameRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left - contentDrag.current.dx) / rect.width) * 100;
    const y = ((e.clientY - rect.top - contentDrag.current.dy) / rect.height) * 100;
    setContentPosition(x, y);
  };

  const endDrag = (e: PointerEvent<HTMLDivElement>) => {
    imageDrag.current = null;
    contentDrag.current = null;
    setDraggingContent(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      /* noop */
    }
  };

  const setZoom = (z: number) => setAdjust((a) => ({ ...a, zoom: clampZoom(Number(z.toFixed(2))) }));
  const centerImage = () => setAdjust((a) => ({ ...a, offsetX: 50, offsetY: 50 }));
  const resetImage = () => setAdjust({ zoom: 1, offsetX: 50, offsetY: 50 });
  const nudge = (dx: number, dy: number) => setContentPosition(content.positionX + dx, content.positionY + dy);
  const preset = (x?: number, y?: number) => setContentPosition(x ?? content.positionX, y ?? content.positionY);
  const resetContent = () => setContent((c) => ({ ...c, positionX: 50, positionY: 50 }));

  const frameStyle = {
    "--acc": primary,
    "--acc2": secondary,
    aspectRatio: previewMode === "desktop" ? aspect : 2.8,
    touchAction: "none",
  } as CSSProperties;

  return (
    <div className="modal-overlay hia-overlay" onMouseDown={onCancel}>
      <div className="modal hia-modal" onMouseDown={(e) => e.stopPropagation()}>
        <div className="modal-head">
          <div>
            <h3>Ajustar imagen</h3>
            <p className="muted" style={{ fontSize: 12.5, margin: "2px 0 0" }}>
              Configura el encuadre y el bloque de informacion por separado.
            </p>
          </div>
          <button className="icon-btn" onClick={onCancel} title="Cerrar" aria-label="Cerrar">
            <IcPlus width={18} height={18} style={{ transform: "rotate(45deg)" }} />
          </button>
        </div>

        <div className="modal-body">
          <div className="hia-toolbar">
            <div className="segmented" role="tablist" aria-label="Secciones del ajuste">
              <button type="button" className={tab === "image" ? "active" : ""} onClick={() => setTab("image")}>Imagen</button>
              <button type="button" className={tab === "content" ? "active" : ""} onClick={() => setTab("content")}>Contenido</button>
            </div>
            <div className="segmented" aria-label="Formato de vista previa">
              <button type="button" className={previewMode === "desktop" ? "active" : ""} onClick={() => setPreviewMode("desktop")}>Escritorio</button>
              <button type="button" className={previewMode === "mobile" ? "active" : ""} onClick={() => setPreviewMode("mobile")}>Movil</button>
            </div>
          </div>

          <div
            ref={frameRef}
            className={`sys-hero hia-frame ${includesLogo ? "includes-logo" : ""} hia-${tab} hia-${previewMode}`}
            style={frameStyle}
            onPointerDown={startImageDrag}
            onPointerMove={(e) => {
              moveImageDrag(e);
              moveContentDrag(e);
            }}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
          >
            <img
              ref={imgRef}
              className="sys-hero-image"
              src={imageUrl}
              alt={alt || "Imagen de cabecera"}
              draggable={false}
              style={headerImageStyle(adjust)}
              onLoad={(e) => setNatural({ w: e.currentTarget.naturalWidth, h: e.currentTarget.naturalHeight })}
            />
            <div className="sys-hero-wash" />
            <div
              ref={contentRef}
              className={`sys-hero-content align-${content.alignment} contrast-${content.contrastMode} ${draggingContent ? "is-dragging" : ""}`}
              style={headerContentStyle(content, autoColor)}
              onPointerDown={startContentDrag}
              onKeyDown={(e) => {
                if (e.key === "ArrowLeft") nudge(-1, 0);
                if (e.key === "ArrowRight") nudge(1, 0);
                if (e.key === "ArrowUp") nudge(0, -1);
                if (e.key === "ArrowDown") nudge(0, 1);
              }}
              tabIndex={tab === "content" ? 0 : -1}
              role={tab === "content" ? "slider" : undefined}
              aria-label="Posicion del contenido de cabecera"
              aria-valuetext={`X ${Math.round(content.positionX)}%, Y ${Math.round(content.positionY)}%`}
            >
              {!includesLogo && <div className="sys-glyph" aria-hidden="true">{displayGlyph}</div>}
              <div className="sys-title">
                <div className="sys-name">{name || "Sistema"}</div>
                <div className="sys-tag">{description || "Vista previa"}</div>
                <div className="sys-live-status">
                  <LiveMonitorIndicator status={status} seed={`${name}:preview`} label={statusLabel} color={resolvedColor} />
                  <span className={`status-chip ${statusTone}`}>
                    <span className={`led ${statusTone === "muted" ? "" : statusTone}`} /> {statusLabel}
                  </span>
                </div>
              </div>
            </div>
            <span className="hia-hint">{tab === "image" ? "Arrastra la imagen" : "Arrastra el contenido"}</span>
          </div>

          {tab === "image" ? (
            <div className="hia-controls">
              <div className="hia-zoom">
                <button type="button" className="icon-btn" aria-label="Alejar imagen" title="Alejar" onClick={() => setZoom(adjust.zoom - 0.1)}>
                  <IcMinus width={16} height={16} />
                </button>
                <input type="range" min={ZOOM_MIN} max={ZOOM_MAX} step={0.01} value={adjust.zoom} onChange={(e) => setZoom(Number(e.target.value))} aria-label="Zoom de imagen" />
                <button type="button" className="icon-btn" aria-label="Acercar imagen" title="Acercar" onClick={() => setZoom(adjust.zoom + 0.1)}>
                  <IcPlus width={16} height={16} />
                </button>
                <span className="hia-zoom-val">{Math.round(adjust.zoom * 100)}%</span>
              </div>
              <div className="hia-sliders">
                <label><span>Horizontal</span><input type="range" min={0} max={100} step={1} value={adjust.offsetX} onChange={(e) => setAdjust((a) => ({ ...a, offsetX: clampOffset(Number(e.target.value)) }))} /></label>
                <label><span>Vertical</span><input type="range" min={0} max={100} step={1} value={adjust.offsetY} onChange={(e) => setAdjust((a) => ({ ...a, offsetY: clampOffset(Number(e.target.value)) }))} /></label>
              </div>
            </div>
          ) : (
            <div className="hia-controls">
              <div className="hia-presets" aria-label="Presets de posicion">
                <button type="button" onClick={() => preset(18, undefined)}>Izquierda</button>
                <button type="button" onClick={() => preset(50, undefined)}>Centro</button>
                <button type="button" onClick={() => preset(82, undefined)}>Derecha</button>
                <button type="button" onClick={() => preset(undefined, 20)}>Arriba</button>
                <button type="button" onClick={() => preset(undefined, 50)}>Medio</button>
                <button type="button" onClick={() => preset(undefined, 80)}>Abajo</button>
              </div>
              <div className="hia-nudges" aria-label="Ajuste fino">
                <button type="button" aria-label="Mover contenido 1% a la izquierda" onClick={() => nudge(-1, 0)}>Izq 1%</button>
                <button type="button" aria-label="Mover contenido 1% a la derecha" onClick={() => nudge(1, 0)}>Der 1%</button>
                <button type="button" aria-label="Mover contenido 1% arriba" onClick={() => nudge(0, -1)}>Arr 1%</button>
                <button type="button" aria-label="Mover contenido 1% abajo" onClick={() => nudge(0, 1)}>Aba 1%</button>
              </div>
              <div className="hia-form-grid">
                <label><span>Color del contenido</span><select value={content.colorMode} onChange={(e) => setContent((c) => ({ ...c, colorMode: e.target.value as HeaderContentAdjust["colorMode"] }))}><option value="auto">Automatico</option><option value="black">Negro</option><option value="white">Blanco</option><option value="custom">Personalizado</option></select></label>
                {content.colorMode === "custom" && <label><span>Personalizado</span><input type="color" value={content.customColor || "#ffffff"} onChange={(e) => setContent((c) => ({ ...c, customColor: e.target.value }))} /></label>}
                <label><span>Mejorar legibilidad</span><select value={content.contrastMode} onChange={(e) => setContent((c) => ({ ...c, contrastMode: e.target.value as HeaderContentAdjust["contrastMode"] }))}><option value="none">Sin proteccion</option><option value="shadow">Sombra suave</option><option value="light-panel">Fondo translucido claro</option><option value="dark-panel">Fondo translucido oscuro</option></select></label>
                <label><span>Alineacion del contenido</span><select value={content.alignment} onChange={(e) => setContent((c) => ({ ...c, alignment: e.target.value as HeaderContentAdjust["alignment"] }))}><option value="left">Izquierda</option><option value="center">Centro</option><option value="right">Derecha</option></select></label>
                <label className="span2"><span>Ancho del contenido: {content.maxWidth}%</span><input type="range" min={24} max={72} step={1} value={content.maxWidth} onChange={(e) => setContent((c) => ({ ...c, maxWidth: clampContentWidth(Number(e.target.value)) }))} /></label>
              </div>
            </div>
          )}
        </div>

        <div className="modal-foot hia-foot">
          <div className="hia-foot-left">
            {tab === "image" ? (
              <>
                <button type="button" className="btn btn-ghost" onClick={centerImage}><IcTarget width={15} height={15} /> Centrar</button>
                <button type="button" className="btn btn-ghost" onClick={resetImage}><IcRefresh width={15} height={15} /> Resetear</button>
              </>
            ) : (
              <button type="button" className="btn btn-ghost" onClick={resetContent}><IcRefresh width={15} height={15} /> Restablecer posicion</button>
            )}
          </div>
          <div className="hia-foot-right">
            <button type="button" className="btn btn-ghost" onClick={onCancel}>Cancelar</button>
            <button type="button" className="btn btn-primary" onClick={() => onSave(adjust, content)}><IcCheck width={15} height={15} /> Guardar ajuste</button>
          </div>
        </div>
      </div>
    </div>
  );
}
