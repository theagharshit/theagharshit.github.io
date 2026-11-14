# theagharshit.github.io

Harshit Agrawal's portfolio. Built with [Astro](https://astro.build), deployed to GitHub Pages by GitHub Actions on every push to `main`.

## Add a project

Add one Markdown file to `src/content/work/`. The file name becomes the URL (`/work/<file-name>/`).

```md
---
title: Project name
summary: One sentence, under 160 characters.
kind: Client project
status: Live
year: "2026"            # optional
stack: [Next.js, Postgres]
link: https://example.com/   # optional, only for public work
order: 5                # lower comes first
home: false             # true to show it on the home page
---

## What the client needed
...
```

Push to `main`. The site rebuilds in about a minute.

## Replace the resume

Overwrite `public/resume/Harshit_Agrawal_Resume.pdf` with a one-page PDF of the same name. Strip its metadata first. The source for the current one is `tools/resume/resume.html` (render with `node tools/resume/render.cjs`).

## Add the Eternal logo

Save the official logo as `src/assets/eternal-logo.svg` (or `.png`). The About page picks it up automatically.

## Add a custom domain later

1. Add a file `public/CNAME` containing the domain, for example `harshitagrawal.com`.
2. Change `site` in `astro.config.mjs` and the sitemap line in `public/robots.txt` to the new domain.
3. Set the DNS records GitHub shows under Settings, Pages.

## Run the checks locally

```sh
npm ci
npm run check:all
```

This type-checks, builds, validates the HTML and checks every internal link. The same checks run on GitHub for every push.

## Security

- No server, no database, no forms, no third-party scripts, fonts or trackers. Everything is served from this site.
- A content security policy is generated on every page (`security.csp` in `astro.config.mjs`).
- Never commit secrets or private files. The repo is public.
