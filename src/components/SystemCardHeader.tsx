import { useEffect, useState, type CSSProperties, type KeyboardEvent, type PointerEvent, type RefObject, type WheelEvent } from "react";
import type { ComputedStatus } from "../data/types";
import {
  headerContentColor,
  headerContentLayout,
  headerContentStyle,
  headerImageStyle,
  sampleHeaderTextColor,
  statusEcgColor,
  type HeaderAdjust,
  type HeaderContentAdjust,
  type HeaderViewport,
} from "../lib/headerImage";
import LiveMonitorIndicator from "./LiveMonitorIndicator";
import { IcChevronDown } from "./icons";

interface Props {
  imageUrl?: string;
  imageAlt: string;
  imageAdjust: HeaderAdjust;
  content: HeaderContentAdjust;
  viewport?: HeaderViewport;
  primary: string;
  secondary: string;
  glyph?: string;
  name: string;
  description: string;
  includesLogo?: boolean;
  status: ComputedStatus;
  statusLabel: string;
  statusTone: string;
  isEditing?: boolean;
  activeLayer?: "image" | "content";
  smartSnap?: boolean;
  contentDragging?: boolean;
  imageRef?: RefObject<HTMLImageElement>;
  contentRef?: RefObject<HTMLDivElement>;
  onImageLoad?: (size: { w: number; h: number }) => void;
  onHeaderPointerDown?: (e: PointerEvent<HTMLElement>) => void;
  onHeaderPointerMove?: (e: PointerEvent<HTMLElement>) => void;
  onHeaderPointerUp?: (e: PointerEvent<HTMLElement>) => void;
  onHeaderWheel?: (e: WheelEvent<HTMLElement>) => void;
  onContentPointerDown?: (e: PointerEvent<HTMLDivElement>) => void;
  onContentKeyDown?: (e: KeyboardEvent<HTMLDivElement>) => void;
  onDetailClick?: () => void;
}

function initials(value: string): string {
  return value
    .trim()
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function SystemCardHeader({
  imageUrl,
  imageAlt,
  imageAdjust,
  content,
  viewport = "desktop",
  primary,
  secondary,
  glyph,
  name,
  description,
  includesLogo,
  status,
  statusLabel,
  statusTone,
  isEditing = false,
  activeLayer = "image",
  smartSnap = true,
  contentDragging = false,
  imageRef,
  contentRef,
  onImageLoad,
  onHeaderPointerDown,
  onHeaderPointerMove,
  onHeaderPointerUp,
  onHeaderWheel,
  onContentPointerDown,
  onContentKeyDown,
  onDetailClick,
}: Props) {
  const [autoTextColor, setAutoTextColor] = useState("#111827");
  const showImage = Boolean(imageUrl);
  const customContent = content.mode === "custom";
  const layout = headerContentLayout(content, viewport);
  const displayGlyph = glyph?.trim() || initials(name || "Sistema") || "SC";
  const textColor = headerContentColor(content, autoTextColor);

  useEffect(() => {
    if (!showImage || !customContent || content.textColorMode !== "auto" || !imageUrl) {
      setAutoTextColor("#111827");
      return;
    }
    let alive = true;
    void sampleHeaderTextColor(imageUrl, layout.positionX, layout.positionY).then((color) => {
      if (alive) setAutoTextColor(color);
    });
    return () => {
      alive = false;
    };
  }, [showImage, customContent, content.textColorMode, imageUrl, layout.positionX, layout.positionY]);

  const contentClass = customContent
    ? `sys-hero-content custom align-${layout.alignment} contrast-${content.contrastMode}`
    : "sys-hero-content legacy";
  const contentStyle = customContent ? headerContentStyle(content, viewport, autoTextColor) : undefined;
  const heroStyle = { "--acc": primary, "--acc2": secondary } as CSSProperties;

  return (
    <header
      className={`sys-hero sys-card-header ${includesLogo ? "includes-logo" : ""} ${isEditing ? `is-editing layer-${activeLayer}` : ""} viewport-${viewport}`}
      style={heroStyle}
      onPointerDown={onHeaderPointerDown}
      onPointerMove={onHeaderPointerMove}
      onPointerUp={onHeaderPointerUp}
      onPointerCancel={onHeaderPointerUp}
      onWheel={onHeaderWheel}
    >
      {showImage && (
        <img
          ref={imageRef}
          className="sys-hero-image"
          src={imageUrl}
          alt={imageAlt}
          draggable={false}
          style={headerImageStyle(imageAdjust)}
          onLoad={(e) => onImageLoad?.({ w: e.currentTarget.naturalWidth, h: e.currentTarget.naturalHeight })}
        />
      )}
      <div className="sys-hero-wash" />
      {isEditing && (
        <div className="header-edit-guides" aria-hidden="true">
          <span className="guide center-x" />
          <span className="guide center-y" />
          <span className="guide thirds-x one" />
          <span className="guide thirds-x two" />
          <span className="guide safe" />
          {smartSnap && <span className="guide-label">Ajuste inteligente</span>}
        </div>
      )}
      <div
        ref={contentRef}
        className={`${contentClass} ${contentDragging ? "is-dragging" : ""}`}
        style={contentStyle}
        onPointerDown={onContentPointerDown}
        onKeyDown={onContentKeyDown}
        tabIndex={isEditing && activeLayer === "content" ? 0 : -1}
        role={isEditing && activeLayer === "content" ? "slider" : undefined}
        aria-label={isEditing && activeLayer === "content" ? "Posicion del contenido de cabecera" : undefined}
        aria-valuetext={isEditing && activeLayer === "content" ? `X ${Math.round(layout.positionX)}%, Y ${Math.round(layout.positionY)}%` : undefined}
      >
        {isEditing && activeLayer === "content" && <span className="header-layer-label">Contenido</span>}
        {!includesLogo && <div className="sys-glyph" aria-hidden="true">{displayGlyph}</div>}
        <div className="sys-title" style={customContent ? { color: textColor } : undefined}>
          <div className="sys-name">{name || "Sistema"}</div>
          <div className="sys-tag">{description}</div>
          <div className="sys-live-status">
            <LiveMonitorIndicator status={status} seed={`${name}:${statusLabel}`} label={statusLabel} color={statusEcgColor(status)} />
            <span className={`status-chip ${statusTone}`}>
              <span className={`led ${statusTone === "muted" ? "" : statusTone}`} />
              {statusLabel}
            </span>
          </div>
        </div>
      </div>
      {isEditing && activeLayer === "image" && <span className="header-layer-label image">Imagen</span>}
      {!isEditing && onDetailClick && (
        <button className="sys-detail-btn" type="button" onClick={onDetailClick}>
          Ver detalles <IcChevronDown width={15} height={15} />
        </button>
      )}
    </header>
  );
}
