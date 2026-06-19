# Archive

These are the **previous static-site files**, kept for personal reference. They were replaced by the Next.js app at the repo root and are **not used by the live website**.

Contents:
- `index.html`, `assets/` — the old master hub static site.
- `courses.json` — old master course registry (now derived at build time by `lib/content.ts`).
- `_site_template/` — the shared template used by the old generator.
- `_generate_sites.ps1` — the old per-course static-site generator.
- `<course>/index.html`, `<course>/assets/`, `<course>/manifest.json` — each course's old static site + nav manifest.

The actual course **content** (the `.md` files) was left in place in each `*-course/` folder, since the Next.js app renders it directly.
