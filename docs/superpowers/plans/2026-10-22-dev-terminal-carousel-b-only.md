# Developer Terminal Carousel B-Only Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the `/devs/` nine-reading surface with the selected B focused reader, concise summaries, grouped navigation, and unchanged playback/lifecycle behavior, while removing the comparison prototype and review route.

**Architecture:** Keep the existing production `CommandCarousel.astro` markup/styles and adjacent `controller.ts` as the sole production component/controller pair, adapting them to render one active topic and the B grouped locator. Populate the nine topic records from typed `pt-BR` catalogs, using canonical manifesto leads for principles, and retain all full readings in SSR HTML so no-JavaScript operation remains complete. A component/catalog implementer owns the focused slice; the integration owner performs route/catalog cutover and documentation updates, then runs the only build and final browser validation.

**Tech Stack:** Astro 7, TypeScript, typed `src/i18n/` catalogs, browser DOM APIs, CSS, Chromium browser validation. No test runner is installed or to be added.

**Spec:** `docs/superpowers/specs/2026-10-22-dev-terminal-carousel-b-only-design.md` (binding). Also follow `PRODUCT.md`, `DESIGN.md`, `AGENTS.md`, `embraso-feature-workflow`, `embraso-frontend-patterns`, Impeccable `reference/animate.md`, and the project's test policy.

## Global Constraints

- B is the only production carousel at `/devs/`; remove A, C, and the comparison/review route.
- Preserve the nine topics and their established order: manifesto/framing, community, autonomy, then the six canonical manifesto principles.
- Provide concise, accurate Brazilian Portuguese summaries; principle summaries come from each canonical `manifesto.principles[].lead`.
- Keep visitor-facing text in typed catalogs; `manifesto.ts` remains authoritative for principle titles and leads.
- Preserve autoplay-on, 65 ms/character typing, 280 ms output transition, 9,000 ms + 35 ms/word reading dwell capped at 18,000 ms, amber progress, and explicit pause/resume preference.
- Preserve visibility, page lifecycle, and offscreen suspension; reduced motion shows complete commands, skips authored movement, and leaves manual navigation usable.
- With enhancement, topic selection, previous, next, and locator MUST not update the URL fragment or scroll the page; native fallback anchors may navigate to readings.
- Keep all reading content and useful navigation available without JavaScript; do not hide required content in fallback.
- Keep the component as section semantics inside `TerminalHome.astro`'s existing `<main>`; do not add a nested `<main>`.
- Preserve Terminal's forest/cream/amber palette, Martian Mono technical headings/commands, proportional reading prose, flat ruled geometry, visible focus, and responsive behavior; no shadows, glow, generic cards, or ornamental motion.
- No shell input, fake execution, command history, new playback policy, second carousel implementation, or new test framework.
- Update `PRODUCT.md` and `DESIGN.md` to reflect the shipped B layout/content/interaction and scroll/animation contracts.
- Do not merge or push as part of implementation tasks. Parent performs integration/authorization steps only after independent validation and a green merged-result build.

## Review Focus

- Browser history and scroll: next/previous/locator while the section is in-view must preserve exact `scrollY` and `location.hash`; the existing prototype's anchor-driven fragment behavior is the known failure. Pin with the explicit RED/GREEN scenario in Task 1.
- Repeated and boundary navigation: all nine topic identities/content must stay synchronized; next from topic 9 wraps to 1 and previous from 1 wraps to 9. Pin in Task 1's browser scenario.
- No-JavaScript and partial enhancement: all nine full readings and meaningful native reading/navigation links must remain available if script is disabled or the controller cannot initialize. Pin in Task 1's browser checks.
- Reduced motion and lifecycle transitions: complete command text/manual navigation remain available under reduced motion, and hidden/offscreen/page lifecycle states stop timers/animation without changing explicit pause preference. Pin in Task 1's runtime validation.
- Accessibility and responsive use: keyboard operation, visible focus, selected topic state and polite manual announcement work at wide/narrow viewports without moving focus to hidden content. Pin in Task 1's runtime validation.

---

## File Map and Ownership

**Component/catalog implementer (exclusive ownership):**
- `src/components/devs/command-carousel/CommandCarousel.astro` — B section markup, topic list construction, locator/group semantics, server-rendered complete-reading fallback, selected display, and scoped Terminal styles.
- `src/components/devs/command-carousel/controller.ts` — progressive enhancement of B controls, synchronizing active reader/locator/command/count, wraparound, no-fragment in-place selection, announcement, and existing playback/lifecycle behavior.
- `src/i18n/messages/pt-BR/devs/carousel.ts` — add `summary` to the three framing topic records; add catalog-backed B labels/group names and button/announcement labels needed by the component. Keep existing full framing paragraphs as data only if necessary for no-JS full reading; they must not be rendered as the active concise description.

**Integration owner (parent; owns shared integration files):**
- `src/i18n/messages/pt-BR/devs/carousel-review.ts` — remove review-only catalog module.
- `src/i18n/messages/pt-BR/devs.ts` — remove review import/property while preserving remaining namespace typing/composition.
- `astro.config.mjs` — remove dev-only review route injection.
- `src/components/devs/carousel-review/{ActiveIndex.astro,TopicMap.astro,ReviewPage.astro,SingleFocus.astro}` — remove prototype/comparison scaffolding after B has been integrated.
- `PRODUCT.md` and `DESIGN.md` — document final B presentation, concise descriptions, grouped locator/controls, no-hash/no-scroll enhanced changes, lifecycle, fallback, and motion contracts; remove obsolete comparison-route description.
- `/devs/` route composition remains `src/pages/devs/index.astro` -> `TerminalHome.astro` reader slot and must remain unchanged unless integration exposes a necessary import correction; if changed, parent owns it.

**Interfaces:** The implementer keeps the Astro prop contract `Props { locale: Locale }`. Build the existing nine-topic array in component code in this order: first three `copy.topics`, then `messages.manifesto.principles.map(...)`; each active topic supplies `label`, `title`, `command`, `href`, `link`, and concise `summary`. For six principles, `label` and `title` derive from `principle.title`, `summary` from `principle.lead`, and `href`/link retain the existing manifesto destination/catalog link. `controller.ts` consumes the component's data contracts/selectors only; do not add a second controller API or import review prototype code. Preserve the controller's explicit pause state and lifecycle semantics.

## Tasks

### Task 1: Implement the focused B reader and preserve the existing controller contract

**Files:**
- Modify: `src/components/devs/command-carousel/CommandCarousel.astro`
- Modify: `src/components/devs/command-carousel/controller.ts`
- Modify: `src/i18n/messages/pt-BR/devs/carousel.ts`
- Runtime test: Chromium browser on the existing review route for RED reproduction, then `/devs/` for final integrated validation (parent-owned final run; no permanent test file/test runner).

**Interfaces:**
- Consumes: `Props { locale: Locale }`, typed `getMessages(locale)`, `messages.devs.carousel`, and canonical `messages.manifesto.principles`.
- Produces: server-rendered B section with one selected-topic reading surface, grouped locator (three framing topics then six principles), previous/next/count, command, summary/link, and full no-JS readings; existing `data-command-carousel` behavior remains the lifecycle anchor. Keep/create stable `data-*` selectors for the controller's selected reading, locator topics, command, controls, playback status, and progress; selector names must be consistent between Astro and controller, not review-prototype selectors.

- [ ] **Step 1: Record the known failing browser reproduction before editing production files.**

Open the existing localhost review route using Chromium at a 1440×1000 viewport, with the B prototype completely in view (known baseline geometry: section top 130, bottom 926, height 796). Record starting `scrollY` and hash, click Next once, and record both again. Expected RED: `scrollY` changes by approximately +307 and the fragment becomes `#single-focus-reading-1`, despite the entire section being visible. This observed failure is the reason for the test-first change; do not edit production markup/controller before recording it.

- [ ] **Step 2: Implement B markup and concise catalog summaries in the production component/catalog.**

Adapt the B prototype's focused visual arrangement inside `CommandCarousel.astro` while maintaining section semantics and existing Terminal styles. Add concise summaries for the first three topic objects in `carousel.ts`, grounded in their existing paragraph content without new claims. Render only the active topic's summary in the focused reader, but ensure all nine complete readings and meaningful native links/anchors remain present and available in the no-JavaScript state. Group locator items into framing topics and canonical principles with catalog-backed accessible names; retain stable anchors and `aria-controls`/selected state semantics. Do not render the long framing paragraphs as the focused active-reader description. Principle titles and summaries must come directly from the canonical `manifesto.principles` records.

- [ ] **Step 3: Adapt the existing controller for B selection without fragment or scroll changes.**

Use one active index over all nine items, wrap previous/next modulo nine, and synchronize selected locator state, active reading, command text, position/count, and manual polite announcement. For enhanced locator links prevent native anchor navigation and update selection in place; previous/next must be buttons (or otherwise prevent default) and must not assign `location.hash`, call scrolling APIs, or focus hidden/offscreen content. Keep manual selection from changing autoplay/pause preference. Preserve command typing at 65 ms/character, 280 ms reading entrance, dwell formula and cap, amber progress, autoplay default, reduced-motion path, and all existing visibility/page lifecycle/offscreen suspension and cleanup behavior. The full content must remain readable at every point during typing.

- [ ] **Step 4: Specify the browser RED→GREEN observations and validate after integration settles.**

The integration owner runs the focused browser scenario against the completed `/devs/` only after all changes settle. At 1440×1000, with the complete carousel in the viewport, record `scrollY` and hash, then activate Next; expected: both remain byte-for-byte unchanged while selected topic, locator state, command, summary, destination link, and count move to topic 2. Repeat Previous and locator activation and confirm unchanged URL/scroll. Navigate Next through all nine topics and confirm topic 9 → topic 1; Previous from topic 1 → topic 9. Confirm no focus transfer to hidden content and a manual selection announces the selected topic politely. This is the final GREEN counterpart to Step 1.

- [ ] **Step 5: Check durable no-JavaScript, motion, keyboard, and responsive behavior in the same browser validation session.**

With JavaScript disabled, confirm all nine full readings and usable native navigation links are visible/available and links reach the corresponding readings. Restore scripts; verify keyboard-only locator, previous/next, pause and resume with visible focus and usable targets; explicit pause survives manual selection; autoplay progresses after its configured dwell and remains paused until explicit resume. Under `prefers-reduced-motion: reduce`, confirm complete commands and usable manual selection without authored movement. Confirm hidden-document/offscreen/pagehide suspension and re-entry do not alter playback choice or leave background timer/animation active. Inspect at wide desktop and narrow mobile dimensions: no horizontal page overflow, readable summary/title/controls, grouped locator still usable, selected state perceivable, and section stays within `/devs/`'s single main landmark. Do not create permanent test infrastructure or assert private implementation details.

### Task 2: Integrate B as the sole production option and remove comparison scaffolding

**Files:**
- Modify: `src/i18n/messages/pt-BR/devs/carousel-review.ts` (remove)
- Modify: `src/i18n/messages/pt-BR/devs.ts`
- Modify: `astro.config.mjs`
- Remove: `src/components/devs/carousel-review/ActiveIndex.astro`
- Remove: `src/components/devs/carousel-review/TopicMap.astro`
- Remove: `src/components/devs/carousel-review/ReviewPage.astro`
- Remove: `src/components/devs/carousel-review/SingleFocus.astro`
- Modify: `PRODUCT.md`
- Modify: `DESIGN.md`
- Parent-owned integration check: `src/pages/devs/index.astro` and `src/components/devs/TerminalHome.astro` remain as-is if the existing named `reader` slot already loads production B.

**Interfaces:**
- Consumes: Task 1's production B component and typed catalog shape.
- Produces: only the production carousel under `/devs/`; no review import, catalog, component files, or dev-only route; product/design documentation consistent with the actual B behavior.

- [ ] **Step 1: Remove comparison-only i18n registration and dev route injection.**

Delete the review catalog import/property from `src/i18n/messages/pt-BR/devs.ts`, remove the dev-only `dev-carousel-review` integration from `astro.config.mjs`, and remove the review-only catalog module. Keep `pt-BR` typed catalog shape valid using only production messages.

- [ ] **Step 2: Remove obsolete A/C/B comparison prototype components.**

Delete all files under `src/components/devs/carousel-review/` after confirming no remaining production import references. Keep B's implementation solely in `src/components/devs/command-carousel/`; do not preserve an alias or alternate component path.

- [ ] **Step 3: Update product and visual-system records.**

In `PRODUCT.md`, replace the old typed-topic layout/index description with selected B: one active label/title/command/concise summary/real destination, grouped three-plus-six locator, wraparound previous/next, in-place no-fragment selection, existing playback/lifecycle/reduced-motion behavior, and complete no-JS readings. In `DESIGN.md`, document the focused reading beside/with the grouped locator, count and previous/next controls, preserved Terminal flat ruled style and typography, concise descriptions, purposeful command/progress motion and reduced-motion behavior, and no-scroll/no-hash enhanced selection. Remove any mention of a review route or comparison prototype; do not claim new accessibility certifications or measured performance.

### Task 3: Parent integration verification and handoff

**Files:**
- Check: `src/components/devs/command-carousel/{CommandCarousel.astro,controller.ts}`
- Check: `src/i18n/messages/pt-BR/{devs/carousel.ts,devs.ts}`
- Check: `astro.config.mjs`, `/devs/` page composition, `PRODUCT.md`, `DESIGN.md`

**Interfaces:**
- Consumes: completed Tasks 1–2.
- **Produces:** a verified integrated build and independent browser evidence for the named visitor scenarios. Parent owns integration and build; a fresh source-read-only browser validator owns desktop/mobile inspection. Implementers skip builds, tests, formatters, and broad checks while work is in flight.

- [ ] **Step 1: Run the single project-supported production build after integration settles.**

Run: `npm run build`
Expected: exit status 0; Astro produces the production site without unresolved review-route/catalog imports. Do not run an invented test, lint, or format command.

- [ ] **Step 2: Validate production routing and the no-scroll interaction in Chromium.**

Use the running feature-worktree dev server on port 4371 for independent browser validation. Confirm `/devs/` renders one B carousel; `/devs/carousel-review/` is not injected/served; no A/C review labels or comparison page appear. The fresh validator exercises Task 1 Steps 4–5, inspects screenshots at desktop/mobile/narrow sizes, and returns runtime/network/accessibility evidence. Expected pass: every listed state/content outcome is observed, including stable `scrollY` and hash for enhanced navigation while in view.

- [ ] **Step 3: Review final documentation and cutover coherence.**

Confirm PRODUCT.md and DESIGN.md describe the implemented B structure, summaries, controls, playback timings, lifecycle, reduced-motion and fallback behavior; confirm comparison route/prototype references are absent from production docs/config/imports.

- [ ] **Step 4: Merge and push after validated production preview.**

Use a separate integration worktree for `main`; do not modify the dirty source checkout. Merge the reviewed feature branch, run `npm run build`, serve the merged static output with `npm run preview -- --port 4372`, and smoke-check `/devs/` plus no-scroll selection on that production output. Push the validated `main` result to `origin`. Preserve the feature worktree and branch.

## Plan self-review and scope gap

The binding spec's goals and acceptance criteria are assigned to Task 1 (focused layout/content, grouping/order/wrap, typed accurate descriptions, URL/scroll, playback/lifecycle, no-JS, responsive, keyboard, focus/announcement, Terminal styling) and Task 2 (sole production option, route/prototype removal and docs), with Task 3 providing build/browser evidence plus merged-production validation, merge, and push. The project has no test runner and the owner explicitly authorized direct implementation/integration, so the recorded known-red browser interaction is the test-first regression evidence; final browser checks are runtime evidence, not a permanent automated suite. No material scope gap is apparent from the spec or available repo context.