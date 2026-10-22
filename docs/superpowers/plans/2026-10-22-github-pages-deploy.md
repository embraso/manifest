# GitHub Pages Deployment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish the existing Astro static site from `embraso/manifest` `main` at `https://embraso.com.br/` using one GitHub Actions Pages artifact deployment.

**Architecture:** Keep Astro's static output and root-domain routes, build `dist/` from the lockfile on `main` pushes, and publish it with GitHub Pages artifact/deployment actions. Include the custom-domain `CNAME` in each artifact and configure Pages to use GitHub Actions; make no editorial or page behavior changes.

**Tech Stack:** Astro, npm (`npm ci`, `npm run build`), GitHub Actions, GitHub Pages.

**Spec:** `docs/superpowers/specs/2026-10-22-github-pages-deploy-design.md`

## Global Constraints

- Deploy automatically only on pushes to `main`; use no parallel/manual deployment path.
- Use static output from `dist/`; build with `npm ci` and `npm run build`.
- Preserve `https://embraso.com.br` as the custom domain; do not set an Astro repository `base` path.
- Keep routes exactly `/`, `/devs/`, and `/manifesto/`, and preserve `/#participacao`.
- Do not change editorial content, locale, visual identity, or browser behavior.
- Do not use Jekyll publishing, committed build output, or Cloudflare deployment.

## Review Focus

- Main-only trigger and no second publication path: inspect workflow triggers and confirm no other publishing workflow is active (Task 1).
- Pages artifact, least-required permissions, and GitHub Actions Pages source: inspect workflow permissions/actions and repository Pages source after configuration (Task 1).
- Custom-domain CNAME survives artifact creation and serves over HTTPS: inspect `dist/CNAME`, Pages configuration, and `https://embraso.com.br/CNAME` after deploy (Task 1).
- Root route URLs, trailing slashes, participation anchor, and root-relative assets/navigation: verify live route responses, fragment target, and loaded links/assets (Task 1).
- Existing page content, locale, and behavior remain unchanged: compare the three live pages and exercise existing navigation/anchor behavior against the pre-deploy site (Task 1).

---

### Task 1: Configure and verify GitHub Pages deployment

**Files:**
- Modify: `astro.config.mjs` — set production site origin `https://embraso.com.br` while retaining static output, `trailingSlash: 'always'`, and no `base`.
- Create: `.github/workflows/deploy.yml` — the sole `main`-push build/deploy workflow.
- Create: `public/CNAME` — exact content `embraso.com.br`.
- Modify: `docs/README.md` — correct the technical context's hosting and deployment status.
- Modify: `PRODUCT.md` — replace obsolete Cloudflare hosting/deployment statements with GitHub Pages and the confirmed custom domain.

**Interfaces:**
- Consumes: existing `npm run build`, `package-lock.json`, and Astro's `dist/` output.
- Produces: a Pages artifact from `dist/`, deployed using `withastro/action@v6` and `actions/deploy-pages@v5`, with GitHub Pages configured to use Actions.

- [ ] Add `site: 'https://embraso.com.br'` to `astro.config.mjs`; do not add a base path or alter static/trailing-slash settings.
- [ ] Add `public/CNAME` containing only `embraso.com.br`.
- [ ] Add `.github/workflows/deploy.yml`: trigger only on `push` to `main`; use Node 24 (the Astro action's default); grant only the permissions required for Pages artifact deployment; use `withastro/action@v6` to install/build and `actions/deploy-pages@v5` to deploy through the `github-pages` environment. Do not add Jekyll, a manual trigger, or another deploy path.
- [ ] Update the hosting and deployment facts in `PRODUCT.md` to GitHub Pages at `https://embraso.com.br`; retain existing stack and product facts.
- [ ] Update the hosting statement in the English technical-context paragraph of `docs/README.md` so it identifies GitHub Pages at `https://embraso.com.br` as the chosen deployment and leaves unrelated intake/project facts unchanged.
- [ ] Run `npm ci` then `npm run build`; expect a successful Astro build and `dist/CNAME` containing `embraso.com.br`, with built pages at `dist/index.html`, `dist/devs/index.html`, and `dist/manifesto/index.html`.
- [ ] Push the integrated change to `main`; inspect the Actions run and require successful workflow completion and Pages deployment.
- [ ] Verify the live site over HTTPS: `/`, `/devs/`, and `/manifesto/` return their corresponding pages at exactly those paths; `/#participacao` resolves to the existing destination; `CNAME` identifies `embraso.com.br`; internal navigation and root-relative assets load; existing content, locale, and behavior are unchanged. Confirm Pages reports the custom domain and HTTPS enabled.
