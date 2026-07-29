# Layers of Rome

A static React and TypeScript website for the UTEP Layers of Rome project. It is designed to run from ordinary files served by Microsoft IIS; Node.js is needed to develop and build the site, but not on the production server.

## Local development

Use Node.js 20 or newer.

```bash
npm install
npm run dev
```

## Build

```bash
npm run lint
npm run build
```

The deployable website is generated in `dist/`.

## Deploy to IIS

1. Install the IIS URL Rewrite module on the server.
2. Build the site.
3. Copy **the contents of `dist/`** into the IIS website folder.
4. Confirm that `web.config` was copied beside `index.html`.
5. Open the home page and directly test a nested page such as `/study-abroad/info`.

The included `web.config` serves real assets normally and routes other requests to the React application.

## Deploy beneath a virtual directory

Set a base path before building:

```bash
VITE_BASE_PATH=/layers-of-rome/ npm run build
```

The IIS rewrite action in `public/web.config` may also need to change from `/` to `/layers-of-rome/` for that deployment.

## Content

Navigation, page content, and lesson metadata are structured in `src/content.ts`. Shared presentation components are in `src/App.tsx`. Unresolved archival items are tracked in `CONTENT_TODO.md`.
