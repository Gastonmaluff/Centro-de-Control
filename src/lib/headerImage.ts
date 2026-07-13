import type { CSSProperties } from "react";
import type {
  ComputedStatus,
  HeaderContentAlignment,
  HeaderContentColorMode,
  HeaderContentConfig,
  HeaderContentContrastMode,
  HeaderContentMode,
  HeaderContentViewportConfig,
  System,
} from "../data/types";

export interface HeaderAdjust {
  zoom: number;
  offsetX: number;
  offsetY: number;
}

export const ZOOM_MIN = 1;
export const ZOOM_MAX = 3;
export const CONTENT_WIDTH_MIN = 24;
export const CONTENT_WIDTH_MAX = 72;

export const clampZoom = (z: number) => Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, z));
export const clampOffset = (v: number) => Math.min(100, Math.max(0, v));
export const clampContentWidth = (v: number) => Math.min(CONTENT_WIDTH_MAX, Math.max(CONTENT_WIDTH_MIN, v));

export type HeaderViewport = "desktop" | "mobile";
export type HeaderContentLayout = Required<HeaderContentViewportConfig>;

export interface HeaderContentAdjust {
  mode: HeaderContentMode;
  desktop: HeaderContentLayout;
  mobile: HeaderContentLayout;
  mobileInheritsDesktop: boolean;
  textColorMode: HeaderContentColorMode;
  customTextColor: string | null;
  contrastMode: HeaderContentContrastMode;
}

function positionToPercent(position?: "left" | "center" | "right", includesLogo?: boolean): number {
  if (includesLogo) return 0;
  if (position === "left") return 0;
  if (position === "center") return 50;
  return 100;
}

export function headerAdjustFrom(sys: Partial<System>): HeaderAdjust {
  return {
    zoom: clampZoom(sys.headerImageZoom ?? 1),
    offsetX: clampOffset(sys.headerImageOffsetX ?? positionToPercent(sys.headerImagePosition, sys.headerImageIncludesLogo)),
    offsetY: clampOffset(sys.headerImageOffsetY ?? 50),
  };
}

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

function validMode(v?: string): HeaderContentMode {
  return v === "custom" ? "custom" : "legacy";
}

function defaultLayout(includesLogo?: boolean): HeaderContentLayout {
  return {
    positionX: includesLogo ? 60 : 50,
    positionY: 50,
    alignment: "left",
    maxWidth: includesLogo ? 42 : 58,
  };
}

function normalizeLayout(value: HeaderContentViewportConfig | undefined, fallback: HeaderContentLayout): HeaderContentLayout {
  return {
    positionX: clampOffset(value?.positionX ?? fallback.positionX),
    positionY: clampOffset(value?.positionY ?? fallback.positionY),
    alignment: validAlignment(value?.alignment ?? fallback.alignment),
    maxWidth: clampContentWidth(value?.maxWidth ?? fallback.maxWidth),
  };
}

function isGeneratedCenteredDefault(cfg: HeaderContentConfig, includesLogo?: boolean): boolean {
  const expectedWidth = includesLogo ? 42 : 58;
  return (
    cfg.mode == null &&
    cfg.desktop == null &&
    cfg.mobile == null &&
    cfg.positionX === 50 &&
    cfg.positionY === 50 &&
    (cfg.alignment == null || cfg.alignment === "left") &&
    (cfg.colorMode == null || cfg.colorMode === "auto") &&
    (cfg.textColorMode == null || cfg.textColorMode === "auto") &&
    (cfg.customColor == null || cfg.customColor === "") &&
    (cfg.customTextColor == null || cfg.customTextColor === "") &&
    (cfg.contrastMode == null || cfg.contrastMode === "shadow") &&
    (cfg.maxWidth == null || cfg.maxWidth === expectedWidth)
  );
}

export function normalizeHeaderContentConfig(sys: Partial<System>): HeaderContentAdjust {
  const cfg = sys.headerContentConfig;
  const fallback = defaultLayout(sys.headerImageIncludesLogo);

  if (!cfg || isGeneratedCenteredDefault(cfg, sys.headerImageIncludesLogo)) {
    return {
      mode: "legacy",
      desktop: fallback,
      mobile: fallback,
      mobileInheritsDesktop: true,
      textColorMode: "auto",
      customTextColor: null,
      contrastMode: "shadow",
    };
  }

  const flatLayout = {
    positionX: cfg.positionX,
    positionY: cfg.positionY,
    alignment: cfg.alignment,
    maxWidth: cfg.maxWidth,
  };
  const desktop = normalizeLayout(cfg.desktop ?? flatLayout, fallback);
  const mobileInheritsDesktop = cfg.mobile?.inheritDesktop !== false;
  const mobile = mobileInheritsDesktop ? desktop : normalizeLayout(cfg.mobile, desktop);

  return {
    mode: validMode(cfg.mode ?? "custom"),
    desktop,
    mobile,
    mobileInheritsDesktop,
    textColorMode: validColorMode(cfg.textColorMode ?? cfg.colorMode),
    customTextColor: cfg.customTextColor || cfg.customColor || null,
    contrastMode: validContrastMode(cfg.contrastMode),
  };
}

export const headerContentFrom = normalizeHeaderContentConfig;

export function headerContentToFirestore(a: HeaderContentAdjust): HeaderContentConfig {
  if (a.mode === "legacy") return { mode: "legacy" };

  return {
    mode: "custom",
    desktop: {
      positionX: clampOffset(Math.round(a.desktop.positionX)),
      positionY: clampOffset(Math.round(a.desktop.positionY)),
      alignment: validAlignment(a.desktop.alignment),
      maxWidth: clampContentWidth(Math.round(a.desktop.maxWidth)),
    },
    mobile: {
      inheritDesktop: a.mobileInheritsDesktop,
      positionX: clampOffset(Math.round(a.mobile.positionX)),
      positionY: clampOffset(Math.round(a.mobile.positionY)),
      alignment: validAlignment(a.mobile.alignment),
      maxWidth: clampContentWidth(Math.round(a.mobile.maxWidth)),
    },
    textColorMode: validColorMode(a.textColorMode),
    customTextColor: a.textColorMode === "custom" ? a.customTextColor || "#ffffff" : null,
    contrastMode: validContrastMode(a.contrastMode),
  };
}

export function headerContentColor(a: HeaderContentAdjust, autoColor?: string): string {
  if (a.textColorMode === "black") return "#111827";
  if (a.textColorMode === "white") return "#f8fafc";
  if (a.textColorMode === "custom") return a.customTextColor || "#ffffff";
  return autoColor || "#111827";
}

export function headerContentLayout(a: HeaderContentAdjust, viewport: HeaderViewport): HeaderContentLayout {
  return viewport === "mobile" ? a.mobile : a.desktop;
}

export function headerContentStyle(a: HeaderContentAdjust, viewport: HeaderViewport, autoColor?: string): CSSProperties {
  const layout = headerContentLayout(a, viewport);
  return {
    left: `${layout.positionX}%`,
    top: `${layout.positionY}%`,
    maxWidth: `${layout.maxWidth}%`,
    color: headerContentColor(a, autoColor),
    textAlign: layout.alignment,
    justifyItems: layout.alignment === "center" ? "center" : layout.alignment === "right" ? "end" : "start",
  };
}

export function withHeaderContentLayout(
  a: HeaderContentAdjust,
  viewport: HeaderViewport,
  patch: Partial<HeaderContentLayout>
): HeaderContentAdjust {
  const current = headerContentLayout(a, viewport);
  const next = normalizeLayout({ ...current, ...patch }, current);
  if (viewport === "desktop") {
    return {
      ...a,
      mode: "custom",
      desktop: next,
      mobile: a.mobileInheritsDesktop ? next : a.mobile,
    };
  }
  return { ...a, mode: "custom", mobile: next, mobileInheritsDesktop: false };
}

export function statusEcgColor(status: ComputedStatus): string {
  switch (status) {
    case "operational":
      return "#22c55e";
    case "warning":
      return "#f59e0b";
    case "down":
      return "#ef4444";
    case "unknown":
      return "#64748b";
    case "archived":
    default:
      return "#94a3b8";
  }
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
