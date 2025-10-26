# AGENT.md — Band Website (Static Astro Build)

This file defines the technical plan, conventions, and rules for any AI or human developer working on the **band website** project.
It aims to ensure the project remains lightweight, consistent, and maintainable while allowing coding agents to operate autonomously and safely.

---

## 1. Project Overview

A **static, content-driven band website** built with **Astro** and **Tailwind CSS**, hosted on **GitHub Pages**.
No backend is required; data will come from Markdown or JSON files.

**Core features:**

* Home page with hero, intro, and upcoming show highlights
* Shows page (upcoming & past performances)
* Gallery page with responsive grid + lightbox
* Contact page with links and form (Formspree)
* SEO-optimized metadata and fast load performance

**Hosting:** GitHub Pages via GitHub Actions.
**Target audience:** Fans, venues, and media.
**Primary goals:** Speed, accessibility, simplicity.

---

## 2. Tech Stack & Tooling

| Area            | Choice                                                                      | Notes                                                                       |
| --------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Framework       | **Astro**                                                                   | Static site generator with content collections and islands architecture.    |
| Language        | **TypeScript**                                                              | Use strict mode.                                                            |
| Styling         | **Tailwind CSS**                                                            | Use utility-first CSS; define palette and spacing in `tailwind.config.mjs`. |
| Components      | **Astro components**, optional **React** for interactivity (lightbox, etc). |                                                                             |
| Package Manager | **npm**                                                                     | Use Node v20+; lockfile managed by `npm ci`.                                |
| Content         | Markdown or JSON in `/src/content/` or `/src/data/`.                        |                                                                             |
| Forms           | Formspree (or similar).                                                     |                                                                             |
| Hosting         | GitHub Pages.                                                               |                                                                             |
| CI/CD           | GitHub Actions (`deploy.yml`).                                              |                                                                             |
| Analytics       | Optional: Plausible (privacy-friendly, no cookies).                         |                                                                             |

**Command Summary**

```bash
# setup
default: npm ci

# dev server
npm run dev

# build static site
npm run build

# preview built site
npm run preview
```

---

## 3. Design & UX Guidelines

* Mobile-first responsive design (320px and up)
* Load under 2 seconds on 3G networks
* Minimal JS — only when strictly needed
* Accessible (WCAG AA): alt text, semantic HTML, focus styles
* Optimized images (prefer WebP)
* Australian English spelling and tone
* Avoid marketing fluff — focus on clarity and authenticity

---

## 4. File & Directory Structure

```
project-root/
├── public/
│   ├── images/
│   │   ├── logo.png
│   │   ├── hero.jpg
│   │   └── gallery/
│   └── favicon.ico
│
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── ShowCard.astro
│   │   └── SocialLinks.astro
│   │
│   ├── layouts/
│   │   └── Layout.astro
│   │
│   ├── pages/
│   │   ├── index.astro
│   │   ├── shows.astro
│   │   ├── gallery.astro
│   │   └── contact.astro
│   │
│   ├── data/
│   │   └── shows.json
│   │
│   └── styles/
│       └── globals.css
│
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs
├── tsconfig.json
├── README.md
└── AGENT.md
```

---

## 5. Data & Content Models

### `src/data/shows.json`

```json
{
  "upcoming": [
    {
      "date": "2025-11-15",
      "venue": "The Corner Hotel",
      "city": "Melbourne",
      "ticketLink": "https://example.com/tickets"
    }
  ],
  "past": []
}
```

* Separate arrays for `upcoming` and `past`.
* Sort by date ascending (upcoming) and descending (past).

### Gallery Images

* Stored in `/public/images/gallery/`.
* Lazy load images.
* Optionally define metadata JSON for titles/credits.

### Contact Info

* Social links in Footer and Contact page.
* Email and booking contact clearly listed.
* Formspree endpoint can be embedded directly in HTML form.

---

## 6. Conventions & Best Practices

### Code Conventions

* TypeScript strict mode.
* Astro + Tailwind only — minimal external libraries.
* Keep dependencies < 10 in `package.json`.
* Use semantic HTML (`<main>`, `<nav>`, `<section>`, etc.).
* Consistent file naming: `PascalCase.astro` for components.

### Styling Conventions

* Tailwind utility classes only.
* 4px spacing scale (`1rem = 16px → 0.25rem increments`).
* Define color palette & typography in Tailwind config.
* Limit to 2–3 font weights.

### Accessibility

* All images must have descriptive alt text.
* Keyboard navigation tested on main pages.
* Use ARIA only when semantic tags aren’t enough.

### Commits

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add gallery lightbox
fix: correct footer link accessibility
chore: update Tailwind config
```

---

## 7. Build & Deployment

### GitHub Pages Workflow

* Build command: `npm run build`
* Output directory: `dist/`
* Auto-deploy on push to `main`
* Astro `site` and `base` fields set in `astro.config.mjs`

### Example `deploy.yml`

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ "main" ]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

---

## 8. Quality & Testing

### Testing Checklist

* [ ] All pages load and render correctly
* [ ] Mobile responsive (min-width 320px)
* [ ] All images have alt text
* [ ] Links open correctly (internal & external)
* [ ] Lighthouse: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 90
* [ ] No console errors

### Performance Guidelines

* Total page weight < 3MB
* Hero image ≤ 200KB optimized
* JS payload ≤ 100KB gzipped
* Fonts loaded with `display=swap`

---

## 9. AI Agent Guidelines

* Read this file before performing any action.
* Use **npm** for installing packages.
* Scaffold project with Astro’s official starter + Tailwind.
* Maintain the directory structure above.
* Validate `npm run build` passes before committing.
* Use clear commit messages aligned with Conventional Commits.
* Only add dependencies if essential and documented.

---

## 10. Notes

* Use Australian English spelling.
* Keep writing concise and authentic.
* Avoid unnecessary animations or JavaScript.
* Focus on accessibility, performance, and clarity.

*End of AGENT.md*
