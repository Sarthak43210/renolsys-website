# Copilot Instructions for this repo

Purpose: Help an AI coding agent be productive quickly by documenting the project layout, conventions, and actionable examples.

Quick start
- Install & run locally: `npm install` → `npm start` (CRA dev server at http://localhost:3000)
- Tests: `npm test` (uses React Testing Library + Jest from Create React App)
- Build: `npm run build` → output in `build/` (static SPA)
- Useful local preview of build: `npx serve -s build`

Key files & structure
- `src/App.jsx` - central layout and routes (primary place to add new routes)
- `src/components/` - shared components (e.g., `Navbar.jsx`)
- `src/pages/` - top-level route pages (PascalCase filenames: `ISO27001.jsx`, `SOC2.jsx`, `PCIDSS.jsx`)
- `src/index.css`, `src/App.css` - global styles; Tailwind is configured in `tailwind.config.js` and `postcss.config.js`
- `public/index.html` - host HTML and meta (manifest, robots)
- `package.json` - scripts and runtime dependencies

Styling & UI conventions
- Utility-first Tailwind usage inline with `className` (no CSS modules). Use `tailwind.config.js` for theme/customization.
- Icons use `lucide-react` imports (e.g., `import { ShieldCheck } from 'lucide-react'`).
- Motion effects may use `framer-motion` for animated components.

Routing & pages
- Routing is implemented in `src/App.jsx` via React Router (package: `react-router-dom`) using `<Routes>` and `<Route path="/..." element={...} />`.
- URL path convention: kebab-case (e.g. `/iso-27001`, `/pci-dss`). Page component filenames use PascalCase and live under `src/pages`.
- To add a page: create `src/pages/YourPage.jsx`, import it in `src/App.jsx`, add `<Route path="/your-page" element={<YourPage/>} />` and optionally add a `NavLink` in `src/components/Navbar.jsx`.

Tests
- Use React Testing Library (already configured). Place tests near components under `src/` and run `npm test`.

Known quirks & gotchas
- Navbar links vs routes: `src/components/Navbar.jsx` contains `NavLink` entries for `'/process'` and `'/why-renolsys'`, but there are no corresponding top-level routes in `src/App.jsx`. `#process` is an id on the home page. When editing navigation, prefer matching route paths exactly or use anchor links (`/` + `#process`) if you intend to jump to sections.
- Scroll behavior: `Navbar.jsx` attaches a `window.scroll` listener and manages `scrolled` state. Keep the cleanup and dependency array pattern if you modify it.

Small actionable examples
- Add a page & nav link:
  1. `src/pages/Privacy.jsx` (create)
  2. In `src/App.jsx`: `import Privacy from './pages/Privacy';` then add `<Route path="/privacy" element={<Privacy />} />`
  3. In `src/components/Navbar.jsx` add ` <NavLink to="/privacy">Privacy</NavLink>` ensuring the path matches exactly.

- Fix `process` anchor vs route: replace `<NavLink to="/process">` with `<Link to="/#process">` (or add a `/process` route that renders the page section).

Environment & deployment notes
- Static SPA; no backend in this repo. Build artifacts are safe to deploy to any static host (Netlify, Vercel, S3, etc.).

When to ask for clarification
- If a change touches routing or nav behavior, confirm desired UX (anchor vs separate route).
- If you plan to add global state, note there is currently no state manager (no Redux/Context patterns yet); prefer local state unless requested.

If anything is unclear or you'd like this to include PR/checklist guidance (e.g., test expectations, accessibility checks, or CI commands), tell me which you'd like added and I will extend this file.