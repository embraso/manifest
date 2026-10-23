# Embraso manifest

Static Astro site for the Embraso manifesto. Folheto (`/`) and Terminal (`/devs/`) are two reading registers of one initiative, plus `/manifesto/`; keep the registers distinct and let the visible audience switch link them. Production is `https://embraso.com.br` (`astro.config.mjs` `site`, `public/CNAME`); only `pt-BR` ships. A push to `main` runs `.github/workflows/deploy.yml` and publishes to Pages; there is no PR-triggered workflow.

## Commands

- `npm ci` — install from the lockfile.
- `npm run dev -- --port <port>` — dev server for local work.
- `npm run build` — the primary check; it must pass before handoff.
- `npm run preview -- --port <port>` — serve the built `dist/`.
- No lint, typecheck, or test script exists. Do not invent or claim one.

## Language

Agent and technical communication is English. Every visitor-visible string is Brazilian Portuguese from `src/i18n/messages/pt-BR/`. `manifesto.ts` is the single canonical source for principle names, order, and manifesto copy: never restate, paraphrase, or re-list them in guidance, tests, or code comments. The signature “Liberdade se constrói junto.” stays until the owner changes it.

## Product truth

The product/design contract lives in `embraso-frontend-patterns`; read it before visual or copy work. Do not invent contacts, team members, legal status, metrics, backend services, or intake endpoints. The idea forms on `/` and `/devs/` are disabled placeholders labeled “Em breve”: do not enable submission or add a success state without a confirmed destination and owner approval. Terminal is a presentation surface, not a shell: no input, no command execution, no server connection.

## Skills

Load the matching skill before the work it covers. The Embraso skills live under `.agents/skills/`:

| Skill | Covers |
| --- | --- |
| `embraso-feature-workflow` | Feature lifecycle: spec, plan, parallel development, validation |
| `embraso-frontend-patterns` | Section ownership, i18n catalogs, visual system, product/design contract |
| `embraso-language` | Brazilian Portuguese voice and editorial decisions |
| `embraso-browser-validation` | Independent real-browser validation of a changed site |
| `embraso-testing` | Choosing checks; what earns a permanent test; statuses |
| `embraso-pull-requests` | PR scope, body, and inline Before/After evidence |
| `embraso-commits` | Commit messages and staging discipline |

## Vendored skills

`.agents/skills/` also contains pinned upstream skills (Superpowers, per `skills-lock.json`, and `impeccable`); they stay unmodified. Their craft guidance stays active, but wherever they or their tooling reference `docs/superpowers/`, `PRODUCT.md`, `DESIGN.md`, or `.impeccable/`, this file and the Embraso skills override. Do not run context generators, doctors, or doc-writing templates that would recreate those files — this repo removed them deliberately, and they remain retrievable in git history; recover context from history instead of recreating them. Use the existing source and the contract in `embraso-frontend-patterns` as design context instead.

## Working artifacts

Specs, plans, briefs, evidence, screenshots, and PR bodies belong outside the repository under `~/embraso-work/manifest/<slug>/`. `.gitignore` blocks the known leftovers (`/docs/`, `/DESIGN.md`, `/PRODUCT.md`, `/.impeccable/`, `/screenshots/`, `/evidence/`, `*:Zone.Identifier`); never commit them regardless.

## Delivery

- One purpose per PR, kept small (roughly under 1000 human-authored changed lines); split implementation from guidance or cleanup and stack PRs explicitly.
- Never push to `main`, merge, or delete branches without explicit owner authorization; a `main` push deploys production.
- PR bodies embed Before/After image tables inline; a gist link alone is not evidence. Never commit screenshots. See `embraso-pull-requests`.
- No AI attribution or co-author lines in commits or PRs.
- No suppressions (`as any`, ignore comments) and no advisory gates: fix findings instead of silencing them.
