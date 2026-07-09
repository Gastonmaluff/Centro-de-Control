# Centro de Control

Panel SaaS para gestionar, desde un solo lugar, todos los sistemas desarrollados
por una misma persona: estado de infraestructura, cobros, actividad, backups y
sesiones de trabajo.

Construido con **Vite + React + TypeScript** y **Firebase** (Authentication +
Cloud Firestore). Diseñado para funcionar en **modo claro y oscuro**.

## Requisitos

- Node.js 18+ (probado con Node 24)
- Una cuenta de Firebase con acceso al proyecto `centro-de-control-d2d44`

## Puesta en marcha

```bash
npm install
npm run dev
```

La app queda en http://localhost:5173. La primera vez, entrá a **Registrate**
para crear tu cuenta (Email/Password) y accedé al panel.

## Firebase

- **Proyecto:** `centro-de-control-d2d44` (número `880122089873`)
- **App web:** "Centro de Control Web" (ya registrada en el proyecto)
- **Authentication:** Email/Password habilitado
- **Firestore:** base `(default)`, con reglas en [`firestore.rules`](firestore.rules)
  (solo usuarios autenticados pueden leer/escribir)

La configuración del SDK vive en [`.env.local`](.env.example) y se consume en
[`src/firebase/config.ts`](src/firebase/config.ts). Son identificadores públicos
del cliente; la seguridad real la dan las reglas de Firestore.

### Datos

El dashboard lee las colecciones `systems`, `charges` y `activity` de Firestore.
Mientras estén vacías, muestra los **datos de ejemplo** de
[`src/data/seed.ts`](src/data/seed.ts) para renderizar una vista completa.

Para cargar los datos de ejemplo en Firestore (opcional), creá una cuenta desde
la app y luego ejecutá:

```bash
SEED_EMAIL=tu@correo.com SEED_PASSWORD=tuclave npm run seed
```

### Desplegar reglas / auth

```bash
npx firebase-tools@latest deploy --only firestore,auth
```

## Deploy a GitHub Pages

La app se publica en la rama `gh-pages` del repo. El `base` de Vite ya apunta a
`/Centro-de-Control/` en producción.

```bash
npm run deploy   # hace build y publica dist/ en la rama gh-pages
```

URL: **https://gastonmaluff.github.io/Centro-de-Control/**

> Opcional: para deploy automático con GitHub Actions (`.github/workflows`),
> el token de `gh` necesita el scope `workflow`
> (`gh auth refresh -h github.com -s workflow`).

## Estructura

```
src/
  firebase/config.ts      Inicialización del SDK (app, auth, db)
  context/                AuthContext (email/password) y ThemeContext (claro/oscuro)
  hooks/useData.ts        Suscripción a Firestore con fallback a datos de ejemplo
  data/                   Tipos del dominio y datos de ejemplo
  components/             Sidebar, Header, StatCards, SystemCard, RightPanel, Login, iconos
  index.css              Sistema de diseño (tokens de color, claro/oscuro, layout)
```

## Scripts

| Comando           | Descripción                                  |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Servidor de desarrollo                       |
| `npm run build`   | Typecheck + build de producción              |
| `npm run preview` | Previsualizar el build                       |
| `npm run seed`    | Cargar datos de ejemplo en Firestore         |
