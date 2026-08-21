# HANDOFF.md — Layers of Rome

## 1. Purpose

A static React + TypeScript marketing/educational website for UTEP's (University of Texas at El Paso) "Layers of Rome" program — a study-abroad program and open-source educational resource about Roman history and culture. The site presents program info, lesson plans for K-12 teachers, a "Preserving Identities" digital exhibit section, and Ostia Antica/map-tour content. It is built as a client-side-routed single-page app designed to be deployed as static files behind Microsoft IIS (no Node.js needed in production).

## 2. Status

- **Active but content-incomplete.** Last commit: `038e5ac` "Updates" on **2026-08-04** (per `git log -1 --format=%cd`), branch **`main`**.
- Only 5 commits total, from authors Carlos Gonzalez, Chevula, Sreeja Chevula — this looks like an early-stage rebuild/scaffold, not a mature production site. Most page content is explicitly placeholder text awaiting real archival material (see `CONTENT_TODO.md` and section 9 below).

## 3. Stack

From `package.json` (exact versions as pinned there; `^`/`~` ranges preserved as written):
- **react** `^19.1.0`, **react-dom** `^19.1.0`
- **react-router-dom** `^7.6.2`
- **typescript** `~5.8.3`
- **vite** `^6.3.5`, **@vitejs/plugin-react** `^4.4.1`
- Dev tooling: **eslint** `^9.25.0`, **typescript-eslint** `^8.30.1`, `eslint-plugin-react-hooks` `^5.2.0`, `eslint-plugin-react-refresh` `^0.4.19`, `@eslint/js` `^9.25.0`, `globals` `^16.0.0`
- No CSS framework — plain `src/styles.css`, imports Google Fonts (DM Sans, EB Garamond) via `@import url('https://fonts.googleapis.com/...')`.
- No state-management, data-fetching, or testing library is present.

## 4. Setup & Commands

- Runtime: README states **Node.js 20 or newer**. No `.nvmrc` and no `engines` field in `package.json` — Node 20+ is a README claim only.
- Install: `npm install`
- Dev server: `npm run dev` (Vite)
- Build: `npm run build` (runs `tsc -b && vite build`; output goes to `dist/`)
- Preview built output: `npm run preview`
- Lint: `npm run lint` (ESLint over the whole repo per `eslint.config.js`, ignoring `dist` and `.vite`)
- **No test script defined.** `package.json` has no `test` entry and no test framework is installed.
- Deploying under a sub-path: set `VITE_BASE_PATH=/layers-of-rome/` before `npm run build`, and update the rewrite path in `public/web.config` to match.

## 5. Architecture Map

```
index.html              Vite entry HTML; mounts #root, loads src/main.tsx
src/
  main.tsx              App bootstrap: StrictMode + BrowserRouter (basename from VITE base URL) + <App/>
  App.tsx                (249 lines) ALL UI: Header/Footer, page-shell components
                          (PageHero, StandardPage, Breadcrumbs), Home page, the
                          Lesson Plans index/detail pages, one fully hard-coded
                          lesson page (RhetoricLesson), NotFound, and the
                          top-level <Routes> route table.
  content.ts             (164 lines) All site data as typed literals: `navigation`
                          (nav menu tree), `pages` (a Record<path, PageData> used
                          by the catch-all route), and `lessons` (array of lesson
                          plan metadata cards).
  styles.css             All styling (no CSS modules/framework); imports Google
                          Fonts at runtime.
  vite-env.d.ts          Vite client type reference (1 line).
public/
  web.config              IIS URL Rewrite config: serves real files as-is, routes
                          everything else to "/" so client-side routing works;
                          also fixes MIME types for .json/.webp.
graphify-out/             Generated code-graph artifacts (not git-tracked); not
                          part of the application.
.vite/deps/                Vite's dependency pre-bundle cache — UNUSUALLY this IS
                          committed to git (see Conventions & Gotchas below).
```

There is no `components/`, `pages/`, `hooks/`, or `api/` directory structure — the entire application logic lives in the two files `src/App.tsx` and `src/content.ts`. Routing is a hybrid: two explicit routes (`/`, `/lesson-plans`, `/lesson-plans/:slug`) plus a catch-all `*` route (`RoutedPage`) that looks up `pages[location.pathname]` from `content.ts` for every other URL (About Us, Study Abroad, Preserving Identities, Ostia Antica, Map Tours, Roman Timeline, etc.).

## 6. Entry Points — Read These First

1. `src/content.ts` — the entire site's navigation structure and page copy live here as typed data; read this first to understand what pages exist and what's still placeholder text.
2. `src/App.tsx` — the entire UI/routing implementation; read this second to see how `content.ts` data is rendered and how routing resolves.
3. `src/main.tsx` — bootstrap/mounting, and how `VITE_BASE_PATH` becomes the router's `basename`.
4. `README.md` — deployment model (static files behind IIS, no Node in prod) and build/deploy steps.
5. `CONTENT_TODO.md` — the authoritative list of what real content is still missing (do not treat placeholder copy in `content.ts`/`App.tsx` as final).
6. `public/web.config` — required for the SPA to work at all once deployed to IIS; must be copied alongside `dist/index.html`.

## 7. Conventions & Gotchas

- **`.vite/deps/` is committed to git** (`.gitignore` only excludes `node_modules`, `dist`, `.DS_Store`, `*.local`, `*.log` — it does not exclude `.vite`). This is Vite's dependency pre-bundle cache (bundled copies of React/React-DOM/React-Router internals), not source code. A generated code-graph (`graphify-out/`) built over this repo will be dominated by these vendored internals (`beginWork()`, `createRouter()`, etc. show up as "god nodes") — that noise is an artifact of this committed cache, not real application architecture. The real application is just `src/App.tsx` and `src/content.ts`.
- Several "lesson" entries in `content.ts` have a `status` field (`"Coming soon"`, `"Under revision"`) — `App.tsx`'s `LessonIndex` renders those as non-clickable cards instead of links. Check for `status` before assuming a lesson slug is reachable.
- `App.tsx` special-cases one lesson: `lesson.slug === '17-rhetoric'` renders a fully custom, hand-written page (`RhetoricLesson`) instead of the generic `LessonDetail` placeholder — every other lesson slug currently falls through to generic "content coming" placeholder copy.
- Placeholder copy is pervasive by design (per `CONTENT_TODO.md`): text like "will be restored in the next content phase" is intentional, current, real content — not a code TODO to fix.
- Google Fonts are loaded at runtime via `@import` in `styles.css`; `CONTENT_TODO.md` explicitly flags self-hosting/replacing these as an outstanding task.
- No environment-based config beyond `VITE_BASE_PATH` (build-time base path for sub-directory IIS deployments).

## 8. External Dependencies & Environment

- **No backend API, database, or auth provider.** The entire site is static content compiled from `src/content.ts`.
- **External runtime dependency:** Google Fonts CDN (`fonts.googleapis.com`), loaded client-side via CSS `@import`. Flagged in `CONTENT_TODO.md` for future self-hosting/removal.
- **External link (not an API integration):** the "Class Folder" nav item links out to `https://minersutep-my.sharepoint.com` (SharePoint), for reference only — no data is exchanged programmatically.
- **Env vars:** only `VITE_BASE_PATH` (optional, build-time, sets the deployment base path / router basename). No secrets, no `.env` file present in the repo.
- **Deployment target:** Microsoft IIS with the URL Rewrite module installed (see `public/web.config`); no Node.js runtime required in production.

## 9. Known Issues & TODOs

Per `CONTENT_TODO.md` (the maintained, current list — treat this as authoritative over anything inferred from code):
- Most placeholder/stock imagery needs replacing with approved documentary photography.
- Faculty/staff profiles, portraits, and titles are incomplete.
- Student Journal quotations need to be restored verbatim with attribution/photography.
- Study Abroad program details (dates, fees, application links, housing, scholarships, passport guidance) are unconfirmed/placeholder.
- Syllabus and calendar content are placeholders ("content in preparation").
- No map provider chosen yet for Study Abroad map, Ostia Antica, or the Roman Timeline (all currently placeholder text).
- Lesson plan archive is largely unmigrated — only one lesson (`17-rhetoric`) has full content; the rest render generic "coming in next content phase" placeholders, and several are explicitly marked `Coming soon` / `Under revision` in `content.ts`.
- Preserving Identities' four digital exhibits and Community Outreach timeline need real media/dates restored.
- Image alt text, copyright/credit, and usage-rights metadata are incomplete across the site.
- Institutional footer links (accessibility, privacy, site feedback) need verification against current UTEP requirements.
- Google Fonts runtime dependency should be self-hosted or replaced (see section 8).

Additionally, not in `CONTENT_TODO.md` but observed directly:
- `.vite/deps/` cache files are committed to git (see section 7) — likely unintentional and could be added to `.gitignore`, though this causes no functional problem, only repo/graph noise.

## 10. Fast Orientation for a New Agent

This repo is small (2 real source files, ~410 lines total of app code) — reading `src/content.ts` and `src/App.tsx` directly is fast and sufficient for most tasks; you generally don't need the graph for the application logic itself.

Where the graph *is* useful: confirming there is no hidden structure elsewhere (e.g., verifying nothing outside `src/` and `public/` matters) and quickly separating vendored/cached code from real app code.

```
export PATH="$HOME/.local/bin:$PATH"
graphify query "what does App.tsx import and render"
graphify god-nodes --top 20   # NOTE: dominated by committed .vite/deps/ (React/Router internals) — ignore those, they are not app code
```

**Best first question to ask the graph for this repo:** `graphify query "what components and routes does src/App.tsx define, and how do they use content.ts"` — since the entire app is these two files, this single query (cross-checked against directly reading both files) is enough to become productive immediately.
