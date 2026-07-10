import { useEffect, useRef, useState, type CSSProperties, type PointerEvent } from "react";
import {
  clampOffset,
  clampZoom,
  headerImageStyle,
  ZOOM_MAX,
  ZOOM_MIN,
  type HeaderAdjust,
} from "../lib/headerImage";
import { IcCheck, IcMinus, IcPlus, IcRefresh, IcTarget } from "./icons";

interface Props {
  imageUrl: string;
  alt?: string;
  primary: string;
  secondary: string;
  value: HeaderAdjust;
  onSave: (a: HeaderAdjust) => void;
  onCancel: () => void;
}

export default function HeaderImageAdjust({ imageUrl, alt, primary, secondary, value, onSave, onCancel }: Props) {
  const [adjust, setAdjust] = useState<HeaderAdjust>(value);
  const [natural, setNatural] = useState<{ w: number; h: number } | null>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const drag = useRef<{ x: number; y: number; ox: number; oy: number } | null>(null);

  // Imágenes cacheadas pueden no disparar onLoad: leer el tamaño si ya está lista.
  useEffect(() => {
    const el = imgRef.current;
    if (el && el.complete && el.naturalWidth) {
      setNatural({ w: el.naturalWidth, h: el.naturalHeight });
    }
  }, [imageUrl]);

  const { zoom, offsetX, offsetY } = adjust;
  const imgStyle = headerImageStyle(adjust);
  const gradient = `linear-gradient(112deg, ${primary}, ${secondary})`;

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      /* noop: puntero sintético o no capturable */
    }
    drag.current = { x: e.clientX, y: e.clientY, ox: offsetX, oy: offsetY };
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!drag.current || !frameRef.current || !natural) return;
    const rect = frameRef.current.getBoundingClientRect();
    const cover = Math.max(rect.width / natural.w, rect.height / natural.h);
    const dispW = natural.w * cover * zoom;
    const dispH = natural.h * cover * zoom;
    const slackX = Math.max(dispW - rect.width, 1);
    const slackY = Math.max(dispH - rect.height, 1);
    const dx = e.clientX - drag.current.x;
    const dy = e.clientY - drag.current.y;
    setAdjust((a) => ({
      ...a,
      offsetX: clampOffset(drag.current!.ox - (dx / slackX) * 100),
      offsetY: clampOffset(drag.current!.oy - (dy / slackY) * 100),
    }));
  };

  const endDrag = (e: PointerEvent<HTMLDivElement>) => {
    drag.current = null;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      /* noop */
    }
  };

  const setZoom = (z: number) => setAdjust((a) => ({ ...a, zoom: clampZoom(Number(z.toFixed(2))) }));
  const center = () => setAdjust((a) => ({ ...a, offsetX: 50, offsetY: 50 }));
  const reset = () => setAdjust({ zoom: 1, offsetX: 50, offsetY: 50 });

  return (
    <div className="modal-overlay hia-overlay" onMouseDown={onCancel}>
      <div className="modal hia-modal" onMouseDown={(e) => e.stopPropagation()}>
        <div className="modal-head">
          <div>
            <h3>Ajustar imagen</h3>
            <p className="muted" style={{ fontSize: 12.5, margin: "2px 0 0" }}>
              Arrastrá la imagen y usá el zoom. Se guarda solo el ajuste; la imagen original no se recorta.
            </p>
          </div>
          <button className="icon-btn" onClick={onCancel} title="Cerrar" aria-label="Cerrar">
            <IcPlus width={18} height={18} style={{ transform: "rotate(45deg)" }} />
          </button>
        </div>

        <div className="modal-body">
          {/* Preview grande = marco del área visible final */}
          <div
            ref={frameRef}
            className="hia-frame"
            style={{ background: gradient, touchAction: "none" }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
          >
            <img
              ref={imgRef}
              className="hia-img"
              src={imageUrl}
              alt={alt || "Imagen de cabecera"}
              draggable={false}
              style={imgStyle}
              onLoad={(e) => setNatural({ w: e.currentTarget.naturalWidth, h: e.currentTarget.naturalHeight })}
            />
            <div className="hia-grid" aria-hidden="true" />
            <span className="hia-hint">Arrastrá para reposicionar</span>
          </div>

          {/* Controles */}
          <div className="hia-controls">
            <div className="hia-zoom">
              <button type="button" className="icon-btn" title="Alejar" onClick={() => setZoom(zoom - 0.1)}>
                <IcMinus width={16} height={16} />
              </button>
              <input
                type="range"
                min={ZOOM_MIN}
                max={ZOOM_MAX}
                step={0.01}
                value={zoom}
                onChange={(e) => setZoom(Number(e.target.value))}
                aria-label="Zoom"
              />
              <button type="button" className="icon-btn" title="Acercar" onClick={() => setZoom(zoom + 0.1)}>
                <IcPlus width={16} height={16} />
              </button>
              <span className="hia-zoom-val">{Math.round(zoom * 100)}%</span>
            </div>

            <div className="hia-sliders">
              <label>
                <span>Horizontal</span>
                <input type="range" min={0} max={100} step={1} value={offsetX} onChange={(e) => setAdjust((a) => ({ ...a, offsetX: clampOffset(Number(e.target.value)) }))} />
              </label>
              <label>
                <span>Vertical</span>
                <input type="range" min={0} max={100} step={1} value={offsetY} onChange={(e) => setAdjust((a) => ({ ...a, offsetY: clampOffset(Number(e.target.value)) }))} />
              </label>
            </div>

            <div className="hia-mini-wrap">
              <span className="muted" style={{ fontSize: 11 }}>Vista de la card</span>
              <div className="hia-mini" style={{ "--acc": primary, "--acc2": secondary } as CSSProperties}>
                <div className="hia-mini-hero" style={{ background: gradient }}>
                  <img src={imageUrl} alt="" draggable={false} style={imgStyle} />
                  <div className="hia-mini-wash" />
                  <span className="hia-mini-title">{alt?.split(" - ")[0] || "Sistema"}</span>
                </div>
                <div className="hia-mini-body" />
              </div>
            </div>
          </div>
        </div>

        <div className="modal-foot hia-foot">
          <div className="hia-foot-left">
            <button type="button" className="btn btn-ghost" onClick={center}>
              <IcTarget width={15} height={15} /> Centrar
            </button>
            <button type="button" className="btn btn-ghost" onClick={reset}>
              <IcRefresh width={15} height={15} /> Resetear
            </button>
          </div>
          <div className="hia-foot-right">
            <button type="button" className="btn btn-ghost" onClick={onCancel}>
              Cancelar
            </button>
            <button type="button" className="btn btn-primary" onClick={() => onSave(adjust)}>
              <IcCheck width={15} height={15} /> Guardar ajuste
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
