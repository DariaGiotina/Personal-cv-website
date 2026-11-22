# Daria Giotina · Portfolio

Personal portfolio website for Daria Giotina, AI & Data Science Engineer (Kautex Development Program) and Software Engineering student at the University of Craiova.

Projects are organised by hiring track: **AI & Data**, **Software** and **Games**. Work at Kautex is shown as role and tech stack only (projects are confidential).

## Status

Phase 1: design (done) · **Phase 2: build** (done) · Phase 3: deploy (GitHub Pages)

- Figma design: https://www.figma.com/design/ZswGUJyNdV14Up7HHJtCAE
- [Design spec and copy](docs/design-spec.md)
- [Job-market research](docs/job-market-research.md): what junior SWE / ML / AI ads ask for, and how the site covers it
- [Images to add](public/images/README.md)

## Run it locally

```
npm install
npm run dev
```

Edit all text in `src/content/site.ts` (English + Romanian). Drop photos into `public/images/` and your CV into `public/cv/Daria_Giotina_CV.pdf`; placeholders disappear automatically.

## Deploy

Every push to `main` builds and deploys to GitHub Pages (`.github/workflows/deploy.yml`). One-time setup: repo **Settings → Pages → Source: GitHub Actions**. The site will be at https://dariagiotina.github.io/Personal-cv-website/

## Stack

Vite + React + TypeScript, GSAP ScrollTrigger (pinned hero and experience, scroll-linked text), three.js (hero particles, wireframe car), EN / RO translations, GitHub Pages.
