import type { CSSProperties } from "react";
import type {
  HeaderContentAlignment,
  HeaderContentColorMode,
  HeaderContentConfig,
  HeaderContentContrastMode,
  System,
} from "../data/types";

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
export const CONTENT_WIDTH_MIN = 24;
export const CONTENT_WIDTH_MAX = 72;

export const clampZoom = (z: number) => Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, z));
export const clampOffset = (v: number) => Math.min(100, Math.max(0, v));
export const clampContentWidth = (v: number) => Math.min(CONTENT_WIDTH_MAX, Math.max(CONTENT_WIDTH_MIN, v));

export interface HeaderContentAdjust {
  positionX: number;
  positionY: number;
  alignment: HeaderContentAlignment;
  colorMode: HeaderContentColorMode;
  customColor: string | null;
  contrastMode: HeaderContentContrastMode;
  maxWidth: number;
}

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

function validAlignment(v?: string): HeaderContentAlignment {
  return v === "center" || v === "right" ? v : "left";
}

function validColorMode(v?: string): HeaderContentColorMode {
  return v === "black" || v === "white" || v === "custom" ? v : "auto";
}

function validContrastMode(v?: string): HeaderContentContrastMode {
  return v === "none" || v === "light-panel" || v === "dark-panel" ? v : "shadow";
}

/** Deriva la configuraciÃ³n del overlay con defaults compatibles con cards viejas. */
export function headerContentFrom(sys: Partial<System>): HeaderContentAdjust {
  const cfg = sys.headerContentConfig ?? {};
  return {
    positionX: clampOffset(cfg.positionX ?? 50),
    positionY: clampOffset(cfg.positionY ?? 50),
    alignment: validAlignment(cfg.alignment),
    colorMode: validColorMode(cfg.colorMode),
    customColor: cfg.customColor || null,
    contrastMode: validContrastMode(cfg.contrastMode),
    maxWidth: clampContentWidth(cfg.maxWidth ?? (sys.headerImageIncludesLogo ? 42 : 58)),
  };
}

export function headerContentToFirestore(a: HeaderContentAdjust): HeaderContentConfig {
  return {
    positionX: clampOffset(Math.round(a.positionX)),
    positionY: clampOffset(Math.round(a.positionY)),
    alignment: validAlignment(a.alignment),
    colorMode: validColorMode(a.colorMode),
    customColor: a.colorMode === "custom" ? a.customColor || "#ffffff" : null,
    contrastMode: validContrastMode(a.contrastMode),
    maxWidth: clampContentWidth(Math.round(a.maxWidth)),
  };
}

export function headerContentColor(a: HeaderContentAdjust, autoColor?: string): string {
  if (a.colorMode === "black") return "#111827";
  if (a.colorMode === "white") return "#f8fafc";
  if (a.colorMode === "custom") return a.customColor || "#ffffff";
  return autoColor || "#111827";
}

export function headerContentStyle(a: HeaderContentAdjust, autoColor?: string): CSSProperties {
  return {
    left: `${a.positionX}%`,
    top: `${a.positionY}%`,
    maxWidth: `${a.maxWidth}%`,
    color: headerContentColor(a, autoColor),
    textAlign: a.alignment,
    justifyItems: a.alignment === "center" ? "center" : a.alignment === "right" ? "end" : "start",
  };
}

export async function sampleHeaderTextColor(imageUrl: string, x: number, y: number): Promise<"#111827" | "#f8fafc"> {
  if (!imageUrl || typeof document === "undefined") return "#111827";
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = 1;
        canvas.height = 1;
        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        if (!ctx) {
          resolve("#111827");
          return;
        }
        const sx = Math.min(img.naturalWidth - 1, Math.max(0, Math.round((x / 100) * img.naturalWidth)));
        const sy = Math.min(img.naturalHeight - 1, Math.max(0, Math.round((y / 100) * img.naturalHeight)));
        ctx.drawImage(img, sx, sy, 1, 1, 0, 0, 1, 1);
        const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
        const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
        resolve(luminance < 0.52 ? "#f8fafc" : "#111827");
      } catch {
        resolve("#111827");
      }
    };
    img.onerror = () => resolve("#111827");
    img.src = imageUrl;
  });
}
