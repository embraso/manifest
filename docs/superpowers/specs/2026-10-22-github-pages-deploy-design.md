# GitHub Pages deployment design

## Intent and goal

Publish the existing Astro static website from `embraso/manifest` on its `main` branch at **https://embraso.com.br/**, replacing the former “Em construção” page. Use one automatic GitHub Actions deployment path on pushes to `main`; retain the custom domain and deliver the site's built static output.

## Non-goals

- No page, copy, design, localization, or route changes.
- No server-side runtime, forms, lead capture, project publishing, or other backend/service.
- No preview/staging deployments, alternate deployment providers, or additional release paths.
- No changes to DNS beyond what is strictly required to point the approved domain at GitHub Pages.

## Current facts and constraints

- `embraso/manifest` `main` was force-updated to source commit `6e8458a`; the previous target `main` is preserved at `backup/main-before-astro-2026-10-22`.
- The Astro project already uses `output: 'static'`, `trailingSlash: 'always'`, has `npm run build`, and includes `package-lock.json`. Astro's build output is `dist/`.
- The source repository has no root `index.html`, `.github` workflow, or `public/CNAME`. The target's former `CNAME` named `embraso.com.br`.
- GitHub's dynamic Jekyll workflow failed on this Astro source because it expected a root `index.html`. The live root still serves the old page. An unauthenticated Pages API request returned 404; this does not establish whether Pages is configured or enabled for the repository.
- `PRODUCT.md` previously recorded Cloudflare hosting; the owner's explicit decision to deploy this site to GitHub Pages supersedes that delivery choice. Preserve the existing Astro stack and root-domain URLs.
- The routes below are the complete current public site surface. Keep their absolute root paths; do not set an Astro repository `base` path.

## Existing domain and routes

- Home / Folheto: `https://embraso.com.br/`
- Terminal: `https://embraso.com.br/devs/`
- Shared manifesto: `https://embraso.com.br/manifesto/`

The home page also has the existing participation anchor `https://embraso.com.br/#participacao`; it is not a separate page or route.

## Approaches considered

1. **GitHub Actions build and Pages artifact deployment (recommended).** On `main` pushes, install the lockfile dependencies, build Astro, upload `dist/` as the Pages artifact, and deploy it with GitHub's Pages deployment actions. Store `CNAME` in `public/CNAME` so the custom domain is included in every build artifact. Configure repository Pages publishing to use GitHub Actions. This is a short, explicit static pipeline, bypasses Jekyll, and uses the site's existing build command.
2. **GitHub Pages branch publishing with a committed build directory.** Commit generated files and publish them directly from a branch/folder. This avoids a build workflow but adds generated output to source control and makes publication easier to diverge from source; not recommended.
3. **Continue Cloudflare hosting.** This preserves the previous product record but conflicts with the owner's explicit GitHub Pages deployment request; not selected.

## Recommendation and behavior

Use the first approach: one workflow, triggered automatically by pushes to `main`, with no parallel/manual deployment mechanism. It should use a supported, explicitly selected Node.js version; run `npm ci` and `npm run build`; publish `dist/` using the GitHub Pages artifact/deployment actions; and have only the permissions required to read source and publish a Pages deployment. Preserve `embraso.com.br` via `public/CNAME`. GitHub Pages repository settings must use the Actions deployment source. The static files must be served from the domain root, preserving Astro's trailing-slash routes and root-relative asset/navigation URLs.

No changes to editorial content or the site's visual identity are part of deployment. Existing content and browser behavior must remain unchanged.

## Acceptance criteria

1. A push to `main` automatically runs the sole deployment workflow, builds from the lockfile with `npm ci` and `npm run build`, and deploys the generated `dist/` artifact to GitHub Pages; the former Jekyll/root-`index.html` failure is no longer the publishing path.
2. The artifact contains a `CNAME` naming `embraso.com.br`, and the Pages configuration serves the site on that custom domain over HTTPS.
3. The three existing routes return their corresponding built pages at exactly `/`, `/devs/`, and `/manifesto/` on `https://embraso.com.br`; `/` also preserves its existing `#participacao` destination. No `/manifest/` repository prefix is introduced.
4. Built assets and internal navigation load correctly from the custom-domain root, and deployment does not alter the existing page content, locale, or behavior.
5. Only the approved `main` push deployment path is configured; no Jekyll publishing, committed build output, or Cloudflare deployment is active for this release.