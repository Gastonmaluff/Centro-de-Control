import type { CSSProperties } from "react";
import type { System } from "../data/types";

/**
 * Ajuste visual (no destructivo) de la imagen de cabecera de la card.
 * Se guarda solo como parámetros; la imagen fuente nunca se recorta.
 */
export interface HeaderAdjust {
  zoom: number; // >= 1
  offsetX: number; // 0..100 (object-position X, 50 = centro)
  offsetY: number; // 0..100 (object-position Y, 50 = centro)
}

export const ZOOM_MIN = 1;
export const ZOOM_MAX = 3;

export const clampZoom = (z: number) => Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, z));
export const clampOffset = (v: number) => Math.min(100, Math.max(0, v));

function positionToPercent(position?: "left" | "center" | "right", includesLogo?: boolean): number {
  if (includesLogo) return 0; // el logo suele estar a la izquierda
  if (position === "left") return 0;
  if (position === "center") return 50;
  return 100; // "right" (default histórico)
}

/** Deriva el ajuste actual de un sistema, con defaults sensatos hacia atrás. */
export function headerAdjustFrom(sys: Partial<System>): HeaderAdjust {
  return {
    zoom: clampZoom(sys.headerImageZoom ?? 1),
    offsetX: clampOffset(sys.headerImageOffsetX ?? positionToPercent(sys.headerImagePosition, sys.headerImageIncludesLogo)),
    offsetY: clampOffset(sys.headerImageOffsetY ?? 50),
  };
}

/**
 * Estilo de la imagen dentro de la cabecera. Se aplica al mismo <img> con
 * `object-fit: cover`, tanto en la card como en el editor → WYSIWYG.
 * - object-position (%) mueve el recorte sin dejar huecos y es independiente
 *   del tamaño (funciona igual en escritorio y móvil).
 * - transform scale() con origen en el punto focal acerca sin deformar.
 */
export function headerImageStyle(a: HeaderAdjust): CSSProperties {
  return {
    objectPosition: `${a.offsetX}% ${a.offsetY}%`,
    transform: `scale(${a.zoom})`,
    transformOrigin: `${a.offsetX}% ${a.offsetY}%`,
  };
}
