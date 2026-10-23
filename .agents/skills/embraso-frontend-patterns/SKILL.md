---
name: embraso-frontend-patterns
description: Use when implementing or reviewing Embraso Astro pages, sections, layouts, interactions, localized content, or shared frontend behavior.
---

# Embraso frontend patterns

## Authority and related skills

Before editing, read the repository `AGENTS.md` and this skill's product/design contract below for project constraints, verified product truth, and the visual system. Follow those over generic defaults. For visual UI work, load `impeccable` and its applicable playbook; read `.agents/skills/impeccable/reference/craft-floor.md` immediately before UI edits. Preserve the Folheto / Terminal identity; an isolated section inherits its page's established visual world. For Portuguese copy, use `embraso-language`; it selects the canonical catalogs. For check selection and permanent-test policy use `embraso-testing`; browser review belongs to `embraso-browser-validation`.

## Product and design contract

Two registers share one identity. Folheto (`/`) is warm paper (`--paper`) with forest ink and amber emphasis; Terminal (`/devs/`) is deep forest (`--dark`) with cream text, mono headings, and amber actions. Routes are `/` (default), `/devs/`, and `/manifesto/`. Never invent contacts, team members, legal status, metrics, backend services, or intake endpoints.

`src/layouts/SiteLayout.astro` is the shared shell. It emits the canonical URL from the configured production origin (`astro.config.mjs` `site`, `https://embraso.com.br`), title/description metadata, `theme-color`, and the favicon set (`/favicon.ico`, `/favicon.svg`). Never hard-code another origin or emit a fabricated canonical. Only `pt-BR` ships; `resolveLocale` rejects unsupported codes.

Design tokens live in `src/styles/global.css`. Use the named custom properties (`--paper`, `--green`, `--yellow`, `--orange`, `--blue`, `--dark`, `--cream`, `--mint`) instead of hex values. Roles: forest green is public ink and primary actions; amber marks public emphasis plus Terminal actions and selected controls; mint is technical numbering and code; orange and blue are supplied identity and public keyboard focus; paper is the public ground; cream is reversed and primary Terminal text; deep forest is the Terminal ground. Terminal components define some values locally — panel and hover grounds and the scoped `--rule`/`--muted` reader tones — do not treat those as global tokens or reuse reader tones on public surfaces.

Typography: Archivo Variable for body and display (`--font-body`, `--font-display`), Martian Mono Variable for Terminal headings and commands (`--font-mono`). The Folheto opening `h1` uses `clamp(3rem, 9vw, 6rem)`; do not exceed a 6rem display ceiling.

Shape: square corners and 1px rules organize reading; there is no box-shadow vocabulary. Scoped radii exist — 6px Folheto controls, 4px Folheto textarea, 3px Terminal textarea, 3px utility radius — do not generalize them into pills or cards.

Focus is visible everywhere: a shared 3px outline with 5px offset (blue publicly, amber on Terminal); Folheto controls use a 6px offset. Native text selection is dark on amber by default. Honor `prefers-reduced-motion`: authored animation and smooth scroll turn off, and motion never gates content.

Terminal is a presentation surface, not a shell: no input, no command execution, no submission, no server connection. The hero's `EmbrasoFetch` profile renders content from the `devs/hero` catalog — do not invent system details beyond it. The idea forms on `/` and `/devs/` are disabled placeholders labeled “Em breve”: keep them disabled; enabling submission, adding a fetch, or adding a success state requires a confirmed destination and owner approval.

Brand: the wordmark is supplied SVG artwork — never typeset or approximate it. Keep vectors under `assets/` and rendered exports under `public/`. No tracked regeneration script exists; derive new exports from the SVG sources rather than resizing an existing PNG. The Brazilian flag is approved identity; keep supplied artwork intact.

| Export | Source |
| --- | --- |
| `public/favicon.svg` | `assets/b084774a04a4acde15a270ee03518180.svg` (square viewBox) |
| `public/favicon.ico` | PNG entries rendered from the square favicon SVG (16/32/48) |
| `public/brand/embraso-icon.png` (1024×1024) | Square favicon SVG |
| `public/brand/embraso-logo.png` | `assets/e6712f9ec67bfc5e5e1536d9b4377830.svg` |
| `public/brand/embraso-logo-light.png` | `assets/58fa12401e77dc41cc7e67952d136fdf.svg` |

Past visual intent is documented in an external, non-authoritative reference: `https://claude.ai/artifact/BWKYPiNDodsXjPPY1c81dp#page-dcb81aee8d83`. This contract and the shipped source outrank it.

## Own a section; compose thinly

A substantial page section owns its Astro component, markup, scoped styles, and local copy/data. Put a section-specific controller or content module beside that component only when it materially improves clarity; keep component behavior local and scoped. Keep routes and page shells focused on selecting the layout, composing sections, and supplying explicit slots/props—not accumulating page-body markup or interaction logic. Shared shell, tokens, and global behavior have one central owner.

```text
src/
  pages/{route}/index.astro          # route + composition
  components/{surface}/{Section}.astro # section markup + scoped CSS
  components/{surface}/{section}/    # optional local controller/content
  layouts/SiteLayout.astro           # shared shell + metadata
  styles/global.css                  # global tokens/base only
  i18n/
    index.ts, rich.ts                 # locale API/catalog typing; rich token union
    messages/pt-BR/
      actions.ts, shell.ts, manifesto.ts
      home/{hero,proposal,motivations,principles,participation,closing}.ts
      devs/{hero,proposal,principles,decisions,participation,carousel}.ts
      home.ts, devs.ts                 # typed composition barrels
```

Example route: import the shared layout and needed section components, then compose them in the route's slot; keep section content/styling in those components. Keep IDs, selectors, and editorial labels stable only where they are real contracts. Do not make a component for every paragraph, or refactor every existing page into sections as a prerequisite: apply this boundary to new and touched sections, cutting over only the scope requested.

## Parallel work and ownership

Before parallel implementation, write a baseline plan assigning each contributor a different, bounded page section and exclusive files. Name likely collision points before editing. A worker owns its section component, adjacent controller when needed, and corresponding locale leaf catalog; do not let section contributors edit each other's files. Shared shell, global tokens, canonical manifesto source, locale registry/schema, composition barrels, routes, and cross-section contracts belong to one named integration owner. Settle props, slots, IDs, and data contracts before concurrent edits; integrate through the route/composition owner. Use isolated worktrees or equivalent isolated state; keep branches/worktrees separate and integrate once ownership is clear. Prefer progressive, reviewable changes over broad rewrites.
The shared `actions.ts` catalog is integration-owned too: section workers may reference existing labels, but coordinate additions or wording changes through that owner.

## Localized content

Use `src/i18n/` and its typed API; do not add a parallel translation mechanism or hard-code public strings in templates. Routes explicitly select `defaultLocale` and pass `locale` to `SiteLayout` and section components; `getMessages(locale)` exposes typed namespaces. Each section's messages live in its corresponding leaf module under `messages/pt-BR/home/` or `devs/`, and its typed value is surfaced by the thin `home.ts` / `devs.ts` barrel (`getMessages(locale).home.{...}` / `.devs.{...}`). Put genuinely repeated section/shell actions and labels in the focused shared `actions.ts` catalog, consumed by those messages; it is locale data, not another public namespace. `shell.ts` owns shared navigation, footer, metadata, and signature. `manifesto.ts` is the single canonical source for introduction, six principles, invitation, and manifesto UI; do not duplicate those strings in section catalogs. Render every visitor-visible string—including accessibility names, metadata, dynamic labels, and announcements—from catalogs. Keep identifiers, selectors/classes, routes, brand name, and terminal commands as non-translatable code contracts. For rich sentences, use ordered `RichMessageToken[]` from `src/i18n/rich.ts` (`text`, `break`, `strong`, `emphasis`, `accent`, `mark`) and render tokens through component-local Astro markup; `break` tokens can set `footer: 'break' | 'space'` when a closing line break or separator must be preserved. Keep the entire sequence in the catalog so its word order can change by locale. Never split copy into fixed prefix/emphasis/suffix slots, inject HTML, or concatenate fragments. SSR markup remains complete without JavaScript; scripts consume only narrowly scoped translated labels emitted by SSR, not whole catalogs. Do not invent translations, locale routes, fallbacks, or a language switch: `pt-BR` is currently the only locale; `resolveLocale` rejects unsupported codes. To add a locale, provide the same section leaf modules and namespace shape for every locale and register it in `index.ts` with complete typed-shape checks; only expose a route after its full catalog is reviewed with `embraso-language`, never via mixed-language fallback. When canonical copy changes, update `manifesto.ts` once and affected usages.

Keep word boundaries when rendering rich `break` tokens: a line break hidden by responsive CSS still needs a whitespace fallback. Verify the resulting heading at both sides of that breakpoint rather than assuming its DOM tokens imply readable text.

## Implementation and review

- Preserve server-rendered HTML and working native links, disclosures, forms, and controls. Add JavaScript only as progressive enhancement; without it, essential content and destinations remain available.
- Use semantic landmarks, one clear page `h1`, ordered section headings, native controls, labels, and accurate accessible names/states. Keep all functionality keyboard-operable with visible focus, usable contrast, and practical target sizes.
- Honor `prefers-reduced-motion`; motion must not gate content or operation. Handle component lifecycle, listeners, timers, observers, navigation, visibility, and cleanup without leaks or stale state.
- Check responsive reading and interaction at narrow and wide viewports, zoom/enlarged text, and print when the page's purpose requires it. Keep content legible when scripts, motion, or remote services are unavailable.
- Treat page metadata as shared layout responsibility where appropriate. Include accurate title/description and social metadata; the canonical URL derives from the configured production origin in `astro.config.mjs` `site` through `SiteLayout`. Change the origin there, never per page.
- Internal notes, source archives, specs, plans, evidence, and design exports never ship: public pages consume only deliberately selected, approved public copy from the catalogs. Keep generated output and deployment inputs allowlisted to the intended pages and assets; do not copy repository working files into the published tree.
- Load only appropriate local assets, preserve meaningful alternatives and intrinsic dimensions, and avoid unnecessary client JavaScript, layout shifts, or expensive work. For features involving personal data, external services, user input, or dynamic URLs, minimize exposure and validate/render safely; don't imply privacy, security, or operational guarantees not established by the product brief.
- Keep permanent tests few and intent-focused: prefer E2E journeys with visitor-visible outcomes over per-component/unit contract matrices. Use targeted lower-level tests only for meaningful risks a small journey cannot expose. Never test forwarding, one function calling another, catalog aliases, code shape, or incidental wording/classes; follow `embraso-testing` for check selection and the permanent-test policy.
- Make no unrelated application refactor. Use `embraso-browser-validation` to inspect rendered behavior and report verified results; do not claim accessibility or performance conformance without evidence.
