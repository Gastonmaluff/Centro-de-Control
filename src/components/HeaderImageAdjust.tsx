import { useEffect, useRef, useState, type CSSProperties, type PointerEvent } from "react";
import type { ComputedStatus, HeaderContentAlignment } from "../data/types";
import {
  clampContentWidth,
  clampOffset,
  clampZoom,
  headerContentLayout,
  withHeaderContentLayout,
  ZOOM_MAX,
  ZOOM_MIN,
  type HeaderAdjust,
  type HeaderContentAdjust,
  type HeaderViewport,
} from "../lib/headerImage";
import { IcCheck, IcMinus, IcPlus, IcRefresh, IcTarget } from "./icons";
import SystemCardHeader from "./SystemCardHeader";

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

type Layer = "image" | "content";

const SNAP_POINTS = [15, 33.33, 50, 66.67, 85];

function snap(value: number, enabled: boolean): number {
  if (!enabled) return value;
  const hit = SNAP_POINTS.find((point) => Math.abs(point - value) <= 2);
  return hit ?? value;
}

function measureHeroAspect(viewport: HeaderViewport): number {
  const hero = document.querySelector(".syscard .sys-hero");
  if (hero && viewport === "desktop") {
    const r = hero.getBoundingClientRect();
    if (r.width > 0 && r.height > 0) return r.width / r.height;
  }
  return viewport === "mobile" ? 3 : 6.4;
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
  const [layer, setLayer] = useState<Layer>("image");
  const [viewport, setViewport] = useState<HeaderViewport>("desktop");
  const [smartSnap, setSmartSnap] = useState(true);
  const [adjust, setAdjust] = useState<HeaderAdjust>(value);
  const [content, setContent] = useState<HeaderContentAdjust>(contentValue);
  const [natural, setNatural] = useState<{ w: number; h: number } | null>(null);
  const [aspect, setAspect] = useState<number>(6.4);
  const [draggingContent, setDraggingContent] = useState(false);
  const [draggingImage, setDraggingImage] = useState(false);
  const frameRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const imageDrag = useRef<{ x: number; y: number; ox: number; oy: number } | null>(null);
  const contentDrag = useRef<{ dx: number; dy: number } | null>(null);

  useEffect(() => {
    setAspect(measureHeroAspect(viewport));
  }, [viewport]);

  useEffect(() => {
    const el = imgRef.current;
    if (el && el.complete && el.naturalWidth) setNatural({ w: el.naturalWidth, h: el.naturalHeight });
  }, [imageUrl]);

  const layout = headerContentLayout(content, viewport);

  const updateLayout = (patch: Partial<typeof layout>) => {
    setContent((current) => withHeaderContentLayout(current, viewport, patch));
  };

  const clampPoint = (x: number, y: number) => {
    const frame = frameRef.current?.getBoundingClientRect();
    const box = contentRef.current?.getBoundingClientRect();
    if (!frame || !box) return { x: clampOffset(x), y: clampOffset(y) };
    const halfW = (box.width / frame.width) * 50;
    const halfH = (box.height / frame.height) * 50;
    return {
      x: Math.min(100 - halfW, Math.max(halfW, snap(x, smartSnap))),
      y: Math.min(100 - halfH, Math.max(halfH, snap(y, smartSnap))),
    };
  };

  const setContentPosition = (x: number, y: number) => {
    const next = clampPoint(x, y);
    updateLayout({ positionX: Number(next.x.toFixed(1)), positionY: Number(next.y.toFixed(1)) });
  };

  const startImageDrag = (e: PointerEvent<HTMLElement>) => {
    if (layer !== "image") return;
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      /* noop */
    }
    imageDrag.current = { x: e.clientX, y: e.clientY, ox: adjust.offsetX, oy: adjust.offsetY };
    setDraggingImage(true);
  };

  const moveImageDrag = (e: PointerEvent<HTMLElement>) => {
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
    if (layer !== "content" || !contentRef.current) return;
    e.stopPropagation();
    frameRef.current = frameRef.current ?? (contentRef.current.closest(".sys-hero") as HTMLElement | null);
    if (!frameRef.current) return;
    const frame = frameRef.current.getBoundingClientRect();
    const box = contentRef.current.getBoundingClientRect();
    if (content.mode === "legacy") {
      const centerX = ((box.left + box.width / 2 - frame.left) / frame.width) * 100;
      const centerY = ((box.top + box.height / 2 - frame.top) / frame.height) * 100;
      setContent((current) =>
        withHeaderContentLayout(
          { ...current, mode: "custom" },
          viewport,
          {
            positionX: centerX,
            positionY: centerY,
            maxWidth: clampContentWidth((box.width / frame.width) * 100),
          }
        )
      );
    }
    contentDrag.current = { dx: e.clientX - box.left - box.width / 2, dy: e.clientY - box.top - box.height / 2 };
    setDraggingContent(true);
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      /* noop */
    }
  };

  const moveContentDrag = (e: PointerEvent<HTMLElement>) => {
    if (!contentDrag.current || !frameRef.current) return;
    const rect = frameRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left - contentDrag.current.dx) / rect.width) * 100;
    const y = ((e.clientY - rect.top - contentDrag.current.dy) / rect.height) * 100;
    setContentPosition(x, y);
  };

  const endDrag = (e: PointerEvent<HTMLElement>) => {
    imageDrag.current = null;
    contentDrag.current = null;
    setDraggingImage(false);
    setDraggingContent(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      /* noop */
    }
  };

  const setZoom = (z: number) => setAdjust((a) => ({ ...a, zoom: clampZoom(Number(z.toFixed(2))) }));
  const nudgeImage = (dx: number, dy: number) => setAdjust((a) => ({ ...a, offsetX: clampOffset(a.offsetX + dx), offsetY: clampOffset(a.offsetY + dy) }));
  const nudgeContent = (dx: number, dy: number) => setContentPosition(layout.positionX + dx, layout.positionY + dy);
  const preset = (positionX: number, positionY: number) => updateLayout({ positionX, positionY });
  const resetImage = () => setAdjust({ zoom: 1, offsetX: 50, offsetY: 50 });
  const resetContent = () => setContentPosition(50, 50);
  const restoreLegacy = () => setContent((current) => ({ ...current, mode: "legacy" }));
  const restoreAll = () => {
    resetImage();
    restoreLegacy();
  };

  const previewStyle = {
    aspectRatio: aspect,
    "--acc": primary,
    "--acc2": secondary,
  } as CSSProperties;

  return (
    <div className="modal-overlay hia-overlay" onMouseDown={onCancel}>
      <div className="modal hia-modal hia-pro" onMouseDown={(e) => e.stopPropagation()}>
        <div className="modal-head hia-head">
          <div>
            <h3>Ajustar cabecera</h3>
            <p className="muted" style={{ fontSize: 12.5, margin: "2px 0 0" }}>
              Preview real de la card. Los cambios se aplican solo al guardar.
            </p>
          </div>
          <div className="hia-head-tools">
            <div className="segmented" aria-label="Formato de vista previa">
              <button type="button" className={viewport === "desktop" ? "active" : ""} onClick={() => setViewport("desktop")}>Escritorio</button>
              <button type="button" className={viewport === "mobile" ? "active" : ""} onClick={() => setViewport("mobile")}>Movil</button>
            </div>
            <button className="icon-btn" onClick={onCancel} title="Cerrar" aria-label="Cerrar">
              <IcPlus width={18} height={18} style={{ transform: "rotate(45deg)" }} />
            </button>
          </div>
        </div>

        <div className="modal-body hia-body">
          <div className="hia-workspace">
            <div className={`hia-preview-shell ${viewport}`} style={previewStyle}>
              <SystemCardHeader
                imageUrl={imageUrl}
                imageAlt={alt || "Imagen de cabecera"}
                imageAdjust={adjust}
                content={content}
                viewport={viewport}
                primary={primary}
                secondary={secondary}
                glyph={glyph}
                name={name || "Sistema"}
                description={description || "Vista previa"}
                includesLogo={includesLogo}
                status={status}
                statusLabel={statusLabel}
                statusTone={statusTone}
                isEditing
                activeLayer={layer}
                smartSnap={smartSnap}
                contentDragging={draggingContent}
                imageRef={imgRef}
                contentRef={contentRef}
                onImageLoad={setNatural}
                onHeaderPointerDown={(e) => {
                  frameRef.current = e.currentTarget;
                  startImageDrag(e);
                }}
                onHeaderPointerMove={(e) => {
                  moveImageDrag(e);
                  moveContentDrag(e);
                }}
                onHeaderPointerUp={endDrag}
                onHeaderWheel={(e) => {
                  if (layer !== "image") return;
                  e.preventDefault();
                  setZoom(adjust.zoom + (e.deltaY < 0 ? 0.05 : -0.05));
                }}
                onContentPointerDown={startContentDrag}
                onContentKeyDown={(e) => {
                  if (e.key === "ArrowLeft") nudgeContent(-1, 0);
                  if (e.key === "ArrowRight") nudgeContent(1, 0);
                  if (e.key === "ArrowUp") nudgeContent(0, -1);
                  if (e.key === "ArrowDown") nudgeContent(0, 1);
                }}
              />
            </div>
          </div>

          <aside className="hia-side">
            <div className="segmented hia-layer-tabs" role="tablist" aria-label="Capa activa">
              <button type="button" className={layer === "image" ? "active" : ""} onClick={() => setLayer("image")}>Imagen</button>
              <button type="button" className={layer === "content" ? "active" : ""} onClick={() => setLayer("content")}>Contenido</button>
            </div>

            {layer === "image" ? (
              <div className="hia-panel">
                <label className="hia-check"><input type="checkbox" checked={smartSnap} onChange={(e) => setSmartSnap(e.target.checked)} /> Ajuste inteligente</label>
                <div className="hia-zoom">
                  <button type="button" className="icon-btn" aria-label="Alejar imagen" onClick={() => setZoom(adjust.zoom - 0.1)}><IcMinus width={16} height={16} /></button>
                  <input type="range" min={ZOOM_MIN} max={ZOOM_MAX} step={0.01} value={adjust.zoom} onChange={(e) => setZoom(Number(e.target.value))} aria-label="Zoom de imagen" />
                  <button type="button" className="icon-btn" aria-label="Acercar imagen" onClick={() => setZoom(adjust.zoom + 0.1)}><IcPlus width={16} height={16} /></button>
                </div>
                <div className="hia-form-grid">
                  <label><span>Zoom %</span><input type="number" min={100} max={300} step={1} value={Math.round(adjust.zoom * 100)} onChange={(e) => setZoom(Number(e.target.value) / 100)} /></label>
                  <label><span>Posicion X %</span><input type="number" min={0} max={100} step={1} value={Math.round(adjust.offsetX)} onChange={(e) => setAdjust((a) => ({ ...a, offsetX: clampOffset(Number(e.target.value)) }))} /></label>
                  <label><span>Posicion Y %</span><input type="number" min={0} max={100} step={1} value={Math.round(adjust.offsetY)} onChange={(e) => setAdjust((a) => ({ ...a, offsetY: clampOffset(Number(e.target.value)) }))} /></label>
                </div>
                <div className="hia-nudges">
                  <button type="button" onClick={() => nudgeImage(-1, 0)}>-1% X</button>
                  <button type="button" onClick={() => nudgeImage(1, 0)}>+1% X</button>
                  <button type="button" onClick={() => nudgeImage(0, -1)}>-1% Y</button>
                  <button type="button" onClick={() => nudgeImage(0, 1)}>+1% Y</button>
                </div>
                <button type="button" className="btn btn-ghost" onClick={resetImage}><IcRefresh width={15} height={15} /> Restablecer imagen</button>
              </div>
            ) : (
              <div className="hia-panel">
                <label className="hia-check"><input type="checkbox" checked={smartSnap} onChange={(e) => setSmartSnap(e.target.checked)} /> Ajuste inteligente</label>
                <label className="hia-check"><input type="checkbox" checked={content.mobileInheritsDesktop} disabled={viewport === "desktop"} onChange={(e) => setContent((c) => ({ ...c, mobileInheritsDesktop: e.target.checked, mobile: e.target.checked ? c.desktop : c.mobile }))} /> Usar la misma posicion en movil</label>
                <div className="hia-presets grid-3" aria-label="Presets de posicion">
                  <button type="button" onClick={() => preset(18, 22)}>Superior izquierda</button>
                  <button type="button" onClick={() => preset(50, 22)}>Superior centro</button>
                  <button type="button" onClick={() => preset(82, 22)}>Superior derecha</button>
                  <button type="button" onClick={() => preset(18, 50)}>Medio izquierda</button>
                  <button type="button" onClick={() => preset(50, 50)}>Medio centro</button>
                  <button type="button" onClick={() => preset(82, 50)}>Medio derecha</button>
                  <button type="button" onClick={() => preset(18, 78)}>Izquierda</button>
                  <button type="button" onClick={() => preset(50, 78)}>Centro</button>
                  <button type="button" onClick={() => preset(82, 78)}>Derecha</button>
                </div>
                <div className="hia-form-grid">
                  <label><span>Posicion X %</span><input type="number" min={0} max={100} step={1} value={Math.round(layout.positionX)} onChange={(e) => updateLayout({ positionX: clampOffset(Number(e.target.value)) })} /></label>
                  <label><span>Posicion Y %</span><input type="number" min={0} max={100} step={1} value={Math.round(layout.positionY)} onChange={(e) => updateLayout({ positionY: clampOffset(Number(e.target.value)) })} /></label>
                  <label><span>Ancho max %</span><input type="number" min={24} max={72} step={1} value={Math.round(layout.maxWidth)} onChange={(e) => updateLayout({ maxWidth: clampContentWidth(Number(e.target.value)) })} /></label>
                  <label><span>Alineacion</span><select value={layout.alignment} onChange={(e) => updateLayout({ alignment: e.target.value as HeaderContentAlignment })}><option value="left">Izquierda</option><option value="center">Centro</option><option value="right">Derecha</option></select></label>
                  <label><span>Color del texto</span><select value={content.textColorMode} onChange={(e) => setContent((c) => ({ ...c, mode: "custom", textColorMode: e.target.value as HeaderContentAdjust["textColorMode"] }))}><option value="auto">Automatico</option><option value="black">Negro</option><option value="white">Blanco</option><option value="custom">Personalizado</option></select></label>
                  {content.textColorMode === "custom" && <label><span>Personalizado</span><input type="color" value={content.customTextColor || "#ffffff"} onChange={(e) => setContent((c) => ({ ...c, mode: "custom", customTextColor: e.target.value }))} /></label>}
                  <label className="span2"><span>Legibilidad</span><select value={content.contrastMode} onChange={(e) => setContent((c) => ({ ...c, mode: "custom", contrastMode: e.target.value as HeaderContentAdjust["contrastMode"] }))}><option value="none">Sin proteccion</option><option value="shadow">Sombra suave</option><option value="light-panel">Fondo translucido claro</option><option value="dark-panel">Fondo translucido oscuro</option></select></label>
                </div>
                <div className="hia-nudges">
                  <button type="button" onClick={() => nudgeContent(-1, 0)}>-1% X</button>
                  <button type="button" onClick={() => nudgeContent(1, 0)}>+1% X</button>
                  <button type="button" onClick={() => nudgeContent(0, -1)}>-1% Y</button>
                  <button type="button" onClick={() => nudgeContent(0, 1)}>+1% Y</button>
                </div>
                <button type="button" className="btn btn-ghost" onClick={resetContent}><IcTarget width={15} height={15} /> Restablecer contenido</button>
                <button type="button" className="btn btn-ghost" onClick={restoreLegacy}><IcRefresh width={15} height={15} /> Restaurar diseno original</button>
              </div>
            )}
          </aside>
        </div>

        <div className="modal-foot hia-foot">
          <div className="hia-foot-left">
            <button type="button" className="btn btn-ghost" onClick={restoreAll}><IcRefresh width={15} height={15} /> Restaurar todo</button>
            <span className="hia-mode-note">{content.mode === "legacy" ? "Modo legacy: usa el diseno original de la card." : "Modo custom: se guardara una posicion nueva."}</span>
          </div>
          <div className="hia-foot-right">
            <button type="button" className="btn btn-ghost" onClick={onCancel}>Cancelar</button>
            <button type="button" className="btn btn-primary" onClick={() => onSave(adjust, content)} disabled={draggingImage || draggingContent}>
              <IcCheck width={15} height={15} /> Guardar ajuste
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
