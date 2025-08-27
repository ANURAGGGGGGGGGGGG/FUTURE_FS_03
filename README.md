# BrewMate

A modern, production‑ready Next.js app for a coffee brand. It uses the App Router, Tailwind CSS v4, and accessible, responsive UI components.

## Features
- App Router pages: Home, Menu, Rewards, Locations, Contact, Privacy, Terms
- Auth UI: Sign In and Sign Up pages (forms only; provider integration optional)
- Responsive, accessible Navbar with animated hamburger on small screens
- Consistent Tailwind styling, cards, and forms
- Client‑side navigation with `next/link` (no full page reloads)

## Tech stack
- Next.js 15
- React 19
- Tailwind CSS v4
- PostCSS (via `@tailwindcss/postcss`)
- ESLint (Next config)

## Getting started
### Prerequisites
- Node.js (LTS recommended, e.g. 18+)
- npm (comes with Node)

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
The app runs locally with hot reload. Open the printed URL in your browser.

### Production build
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## Project structure (high level)
```
app/
  components/        # Reusable UI (Navbar, Footer, etc.)
  (routes)/          # Folders define routes via App Router
    menu/
    rewards/
    locations/
    contact/
    sign-in/
    sign-up/
  globals.css        # Global styles
  layout.js          # Root layout
public/
  logo/              # Image assets
```

## Conventions and best practices
- Routing: App Router with folder-based routes in `app/`
- Navigation: use `next/link` for all internal links (avoids full reloads)
- Images: place assets in `public/` and import with `/path` or use `next/image` where appropriate
- Styling: Tailwind utility classes; prefer semantic HTML and accessible patterns (e.g., `aria-*` attributes)
- Responsive design: mobile‑first; Navbar shows animated hamburger at widths ≤426px and centered desktop links ≥427px
- State & a11y: hamburger button uses `aria-expanded` and keyboard‑friendly button element
- Forms: label every input and use proper `autoComplete` attributes

## Development notes
- Tailwind v4: all utilities are available out‑of‑the‑box; add custom CSS only when utilities aren’t sufficient
- Components: keep small and focused in `app/components/`
- Content: central brand and menu data under `app/lib/`
- Linting: run `npm run lint` before commits; fix warnings proactively

## Deployment
- Build with `npm run build` and serve with `npm start`
- Ensure the platform supports Next.js App Router (Node runtime)

## Roadmap ideas (optional)
- Integrate an auth provider (NextAuth, Clerk, etc.)
- Add client-side validation and password strength meter
- Add SEO metadata and Open Graph images per route
- Add tests for components and pages

## License
This project is licensed under the MIT License – see the [LICENSE](./LICENSE) file for details.
