// Plain-JS mirror of src/data/seed.ts, consumed by scripts/seed.mjs.
// Keep in sync with the TypeScript source if you change the example data.

export const SYSTEMS = [
  { id: "luca-park", name: "Luca Park", tagline: "Parque de juegos · tickets & accesos", glyph: "LP", accent: "#7c3aed", accent2: "#f59e0b", active: true, infra: { app: "ok", firebase: "ok", domain: "ok", backup: "ok" }, metrics: [{ label: "Visitas hoy", value: "1.284", hint: "+12%" }, { label: "Tickets", value: "342" }], lastDeploy: "hace 2 h", monthly: 45000, nextCharge: "12 jul", links: { github: "https://github.com/", firebase: "https://console.firebase.google.com/project/luccapark-app", cloudflare: "https://dash.cloudflare.com/", domain: "https://lucapark.app" } },
  { id: "next-control", name: "Next-Control", tagline: "Gestión industrial · producción", glyph: "NC", accent: "#2563eb", accent2: "#0ea5e9", active: true, infra: { app: "ok", firebase: "ok", domain: "ok", backup: "warn" }, metrics: [{ label: "Órdenes activas", value: "58" }, { label: "Uptime", value: "99,9%" }], lastDeploy: "hace 1 d", monthly: 80000, nextCharge: "15 jul", links: { github: "https://github.com/", firebase: "https://console.firebase.google.com/project/next-control-bb95f", cloudflare: "https://dash.cloudflare.com/", domain: "https://next-control.com" } },
  { id: "gami-gomitas", name: "Gami Gomitas CRM", tagline: "Ventas · clientes & rutas", glyph: "GG", accent: "#16a34a", accent2: "#84cc16", active: true, infra: { app: "ok", firebase: "ok", domain: "ok", backup: "ok" }, metrics: [{ label: "Ventas mes", value: "$1,9M", hint: "+8%" }, { label: "Clientes", value: "214" }], lastDeploy: "hace 5 h", monthly: 60000, nextCharge: "20 jul", links: { github: "https://github.com/", firebase: "https://console.firebase.google.com/project/crmgamigomitas-889b5", cloudflare: "https://dash.cloudflare.com/", domain: "https://gamigomitas.com" } },
  { id: "paraiso-escondido", name: "Paraíso Escondido", tagline: "Turismo · reservas & estadías", glyph: "PE", accent: "#0f766e", accent2: "#65a30d", active: true, infra: { app: "ok", firebase: "ok", domain: "warn", backup: "ok" }, metrics: [{ label: "Reservas", value: "37" }, { label: "Ocupación", value: "82%" }], lastDeploy: "hace 3 d", monthly: 35000, nextCharge: "28 jul", links: { github: "https://github.com/", firebase: "https://console.firebase.google.com/", cloudflare: "https://dash.cloudflare.com/", domain: "https://paraisoescondido.com" } },
  { id: "nirvana", name: "Nirvana", tagline: "Cafetería · pedidos & menú", glyph: "NV", accent: "#78350f", accent2: "#a8a29e", active: true, infra: { app: "ok", firebase: "ok", domain: "ok", backup: "ok" }, metrics: [{ label: "Pedidos hoy", value: "96" }, { label: "Ticket prom.", value: "$4.200" }], lastDeploy: "hace 8 h", monthly: 30000, nextCharge: "05 ago", links: { github: "https://github.com/", firebase: "https://console.firebase.google.com/project/menu-digital-57523", cloudflare: "https://dash.cloudflare.com/", domain: "https://nirvanacafe.com" } },
  { id: "sistema-personal", name: "Sistema personal", tagline: "Finanzas & productividad propia", glyph: "SP", accent: "#475569", accent2: "#94a3b8", active: true, infra: { app: "ok", firebase: "ok", domain: "ok", backup: "ok" }, metrics: [{ label: "Tareas", value: "12" }, { label: "Ahorro mes", value: "$320k" }], lastDeploy: "hace 6 h", links: { github: "https://github.com/", firebase: "https://console.firebase.google.com/project/gastosapp-47a19", cloudflare: "https://dash.cloudflare.com/", domain: "https://mi-panel.dev" } },
];

export const CHARGES = [
  { id: "c1", client: "Luca Park", system: "Luca Park", amount: 45000, date: "12 jul", status: "due-soon" },
  { id: "c2", client: "Distr. Next", system: "Next-Control", amount: 80000, date: "15 jul", status: "pending" },
  { id: "c3", client: "Gami Gomitas", system: "Gami Gomitas CRM", amount: 60000, date: "20 jul", status: "pending" },
  { id: "c4", client: "Paraíso Escondido", system: "Paraíso Escondido", amount: 35000, date: "28 jul", status: "paid" },
  { id: "c5", client: "Nirvana Café", system: "Nirvana", amount: 30000, date: "05 ago", status: "paid" },
];

export const ACTIVITY = [
  { id: "a1", kind: "deploy", system: "Luca Park", text: "Deploy completado en producción", time: "hace 2 h" },
  { id: "a2", kind: "backup", system: "Gami Gomitas CRM", text: "Backup automático realizado", time: "hace 4 h" },
  { id: "a3", kind: "payment", system: "Paraíso Escondido", text: "Pago registrado · $35.000", time: "hace 6 h" },
  { id: "a4", kind: "update", system: "Nirvana", text: "Sistema actualizado a v2.4", time: "hace 8 h" },
  { id: "a5", kind: "deploy", system: "Sistema personal", text: "Deploy completado", time: "hace 10 h" },
  { id: "a6", kind: "backup", system: "Next-Control", text: "Backup pendiente de revisión", time: "ayer" },
];
