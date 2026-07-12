import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = (p: P) => ({
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...p,
});

type EcgTone = "success" | "warning" | "danger" | "neutral" | "monochrome";
type EcgMarkProps = P & {
  size?: number;
  tone?: EcgTone;
  animated?: boolean;
};

const ecgToneClass: Record<EcgTone, string> = {
  success: "success",
  warning: "warning",
  danger: "danger",
  neutral: "neutral",
  monochrome: "monochrome",
};

export const EcgMark = ({ size = 24, tone = "monochrome", animated = false, className, ...p }: EcgMarkProps) => (
  <svg
    {...base({
      ...p,
      width: p.width ?? size,
      height: p.height ?? size,
      viewBox: "0 0 64 64",
      strokeWidth: p.strokeWidth ?? 4,
      className: `ecg-mark ${ecgToneClass[tone]} ${animated ? "is-animated" : ""} ${className ?? ""}`.trim(),
    })}
  >
    <path className="ecg-mark-line" d="M6 36h16l5-10 7 24 8-36 7 22h9" />
  </svg>
);

export const IcHome = (p: P) => (
  <svg {...base(p)}>
    <path d="M3 10.5 12 3l9 7.5" />
    <path d="M5 9.5V21h14V9.5" />
    <path d="M9.5 21v-6h5v6" />
  </svg>
);
export const IcSystems = (p: P) => (
  <svg {...base(p)}>
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
  </svg>
);
export const IcClients = (p: P) => (
  <svg {...base(p)}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
    <path d="M16 5.2a3 3 0 0 1 0 5.6" />
    <path d="M17.5 20a5.5 5.5 0 0 0-3-4.9" />
  </svg>
);
export const IcBilling = (p: P) => (
  <svg {...base(p)}>
    <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
    <path d="M2.5 9.5h19" />
    <path d="M6 14.5h4" />
  </svg>
);
export const IcMonitor = (p: P) => (
  <svg {...base(p)}>
    <path d="M3 12h4l2.5-6 4 13 2.5-7H21" />
  </svg>
);
export const IcTasks = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 6.5 6 8.5 9.5 4.5" />
    <path d="M4 15.5 6 17.5 9.5 13.5" />
    <path d="M13 7h8" />
    <path d="M13 16h8" />
  </svg>
);
export const IcSessions = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.5 2" />
  </svg>
);
export const IcCosts = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v10M9.5 9.2a2.5 2 0 0 1 5 .3c0 2.5-5 1.5-5 4a2.5 2 0 0 0 5 .3" />
  </svg>
);
export const IcDocs = (p: P) => (
  <svg {...base(p)}>
    <path d="M6 3h8l4 4v14H6z" />
    <path d="M14 3v4h4" />
    <path d="M9 12.5h6M9 16h6" />
  </svg>
);
export const IcSettings = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6" />
  </svg>
);

export const IcSearch = (p: P) => (
  <svg {...base(p)}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.2-3.2" />
  </svg>
);
export const IcMenu = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 7h16" />
    <path d="M4 12h16" />
    <path d="M4 17h16" />
  </svg>
);
export const IcChevronDown = (p: P) => (
  <svg {...base(p)}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);
export const IcBell = (p: P) => (
  <svg {...base(p)}>
    <path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6" />
    <path d="M10 20a2 2 0 0 0 4 0" />
  </svg>
);
export const IcPlus = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);
export const IcSun = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);
export const IcMoon = (p: P) => (
  <svg {...base(p)}>
    <path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5" />
  </svg>
);
export const IcRocket = (p: P) => (
  <svg {...base(p)}>
    <path d="M5 15c-1.5 1.5-1.8 5-1.8 5s3.5-.3 5-1.8" />
    <path d="M9 13c5-8 9-9 12-9 0 3-1 7-9 12l-3-3z" />
    <circle cx="14.5" cy="9.5" r="1.4" />
  </svg>
);
export const IcExternal = (p: P) => (
  <svg {...base(p)}>
    <path d="M14 4h6v6" />
    <path d="M20 4 11 13" />
    <path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
  </svg>
);
export const IcArrowUp = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 19V5M6 11l6-6 6 6" />
  </svg>
);
export const IcCheck = (p: P) => (
  <svg {...base(p)}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);
export const IcServer = (p: P) => (
  <svg {...base(p)}>
    <rect x="3" y="4" width="18" height="7" rx="2" />
    <rect x="3" y="13" width="18" height="7" rx="2" />
    <path d="M7 7.5h.01M7 16.5h.01" />
  </svg>
);
export const IcDatabase = (p: P) => (
  <svg {...base(p)}>
    <ellipse cx="12" cy="5.5" rx="7" ry="3" />
    <path d="M5 5.5v13c0 1.7 3.1 3 7 3s7-1.3 7-3v-13" />
    <path d="M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" />
  </svg>
);
export const IcAlert = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 3 2 20h20z" />
    <path d="M12 9v5M12 17h.01" />
  </svg>
);
export const IcCloud = (p: P) => (
  <svg {...base(p)}>
    <path d="M7 18a4 4 0 0 1-.5-8A6 6 0 0 1 18 9.5a3.5 3.5 0 0 1-.5 8.5z" />
  </svg>
);
export const IcSave = (p: P) => (
  <svg {...base(p)}>
    <path d="M5 3h11l3 3v15H5z" />
    <path d="M8 3v5h7V3M8 21v-6h8v6" />
  </svg>
);
export const IcCard = (p: P) => (
  <svg {...base(p)}>
    <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
    <path d="M2.5 9.5h19" />
  </svg>
);
export const IcLogout = (p: P) => (
  <svg {...base(p)}>
    <path d="M15 4h3a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3" />
    <path d="M10 12h9M16 8l4 4-4 4" />
  </svg>
);

export const IcMore = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="5" r="1.4" />
    <circle cx="12" cy="12" r="1.4" />
    <circle cx="12" cy="19" r="1.4" />
  </svg>
);
export const IcEdit = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 20h4L18.5 9.5a2.1 2.1 0 0 0-3-3L5 17v3z" />
    <path d="M13.5 6.5l3 3" />
  </svg>
);
export const IcTrash = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M6 7l1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-13" />
    <path d="M10 11v6M14 11v6" />
  </svg>
);
export const IcMinus = (p: P) => (
  <svg {...base(p)}>
    <path d="M5 12h14" />
  </svg>
);
export const IcCrop = (p: P) => (
  <svg {...base(p)}>
    <path d="M6 2v14a2 2 0 0 0 2 2h14" />
    <path d="M2 6h14a2 2 0 0 1 2 2v14" />
  </svg>
);
export const IcTarget = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="2.5" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
  </svg>
);
export const IcRefresh = (p: P) => (
  <svg {...base(p)}>
    <path d="M20 11a8 8 0 0 0-14-4.5L4 8" />
    <path d="M4 4v4h4" />
    <path d="M4 13a8 8 0 0 0 14 4.5L20 16" />
    <path d="M20 20v-4h-4" />
  </svg>
);
export const IcDownload = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 3v12M8 11l4 4 4-4" />
    <path d="M4 19h16" />
  </svg>
);
export const IcUpload = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 16V4M8 8l4-4 4 4" />
    <path d="M4 14v5a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-5" />
  </svg>
);
export const IcImage = (p: P) => (
  <svg {...base(p)}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <circle cx="8.5" cy="9" r="1.5" />
    <path d="m4 17 4.5-4.5 3 3 2.5-2.5 6 6" />
  </svg>
);

// Brand marks (simplified) for quick links
export const IcGithub = (p: P) => (
  <svg {...base({ ...p, strokeWidth: 0, fill: "currentColor" })}>
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
  </svg>
);
export const IcFirebase = (p: P) => (
  <svg {...base({ ...p, strokeWidth: 0, fill: "currentColor" })}>
    <path d="m5.2 17.6 2-13c.1-.6.9-.7 1.2-.2l2 3.7-5.2 9.5zm13.6 0L16.9 5.9c-.1-.6-.9-.7-1.2-.1L6 17.6l5.1 2.9c.6.3 1.3.3 1.8 0l5.9-2.9z" />
  </svg>
);
export const IcDomain = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.6 2.4 4 5.6 4 9s-1.4 6.6-4 9c-2.6-2.4-4-5.6-4-9s1.4-6.6 4-9z" />
  </svg>
);
