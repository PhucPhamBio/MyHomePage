# Academic Research Blog

A free, static academic/research blog starter built with Astro.

## Requirements

- Node.js (current LTS recommended)
- npm
- Git

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Astro (normally http://localhost:4321).

## Build

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Write a post

Create a Markdown or MDX file in `src/content/blog/`.

Example frontmatter:

```yaml
---
title: "My Research Note"
description: "A short summary."
pubDate: 2026-11-08
tags:
  - Bioinformatics
  - Machine Learning
draft: false
---
```

Set `draft: true` to keep a post out of the public site.

## Edit your profile

Before publishing, update:
- `src/pages/about.astro` (bio and email)
- `src/pages/publications.astro` (real citation details and links)
- `src/layouts/BaseLayout.astro` (site title if desired)
- `src/pages/index.astro` (research interests and tagline)

## Deploy free with Cloudflare Pages

1. Push this project to a GitHub repository.
2. In Cloudflare Dashboard, open **Workers & Pages**.
3. Create a Pages project and connect the GitHub repository.
4. Set:
   - Framework preset: Astro
   - Build command: `npm run build`
   - Build output directory: `dist`
5. Deploy. Cloudflare will provide a `*.pages.dev` address.
6. Future pushes to the production branch trigger a new deployment.

## Git commands

```bash
git init
git add .
git commit -m "Initial academic blog"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

If the repository already exists and has a remote, do not run `git remote add origin` again.
Check it with `git remote -v`.

## Notes

- This is a static website: no server or database is required.
- Public website assets (HTML/CSS/JS) can be inspected by visitors. Do not put secrets or API keys in this project.
- Replace placeholder publication details and email before launch.
