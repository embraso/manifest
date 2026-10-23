# Randomized Developer Emblem Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** On each `/devs/` load, show either the existing particle emblem or the approved pixel-voxel logo spinning around its vertical axis, without changing the rest of the page.

**Architecture:** Keep the supplied SVG in server-rendered markup and as the static fallback. A small `FaunaField.astro` controller makes one equal-probability selection, then lazily imports only the selected animation module. The existing `particles.ts` remains the legacy path; the Three.js controller only renders the voxel emblem.

**Tech Stack:** Astro static output, TypeScript, existing Three.js dependency, existing native Chrome/browser validation.

**Spec:** `docs/superpowers/specs/2026-10-23-randomized-devs-emblem-design.md`

## Global Constraints

- Make one 50/50 random choice on each eligible `/devs/` page load; do not persist it or switch during that page visit.
- Preserve the existing particle effect and approved pixelated Relevo 3D spin as the two choices.
- Reduced motion and no-JavaScript paths use the static supplied SVG; an enhancement failure must not hide it.
- Do not add variant controls or change any other page content/layout.
- Keep public copy and metadata in typed `src/i18n/` catalogs; remove selector-only strings rather than replacing them.
- Update `PRODUCT.md`, `DESIGN.md`, and `.impeccable/surfaces/src-pages-index-astro.md` after implementation.
- No `npm test` script or test framework exists. Use disposable, deterministic browser smoke runs, then `npm run build` and real-browser review; do not add a test framework for this interaction.

## Review Focus

- A fresh 50/50 choice is made once, and neither selection changes during a visit; use deterministic browser runs forcing each side of the random threshold.
- Only the selected animator starts; lazy loading avoids downloading Three.js for particle-only visits.
- The static SVG remains visible through initialization and all failures; test JavaScript disabled and a failed animation initialization.
- Reduced-motion visits skip both animated implementations; test the browser's actual reduced-motion emulation.
- Desktop and 390px/340px layouts do not clip the emblem, controls, or adjacent metadata; no selector controls remain.

---

### Task 1: Randomized EmbrasoFetch emblem

**Files:**
- Modify: `src/components/devs/FaunaField.astro`
- Modify: `src/components/devs/LogoPreview3D.astro`
- Modify: `src/components/devs/logo-preview-3d.ts`
- Preserve: `src/components/devs/particles.ts` as the original `main` animation
- Modify: `src/i18n/messages/pt-BR/devs/hero.ts`
- Modify: `PRODUCT.md`, `DESIGN.md`, `.impeccable/surfaces/src-pages-index-astro.md`
- Test: browser smoke scenarios only; no permanent test framework/test file

**Interfaces:**
- `FaunaField.astro` continues rendering the existing source SVG, legacy particle canvas, EmbrasoFetch metadata, and a `LogoPreview3D` canvas.
- `FaunaField.astro` chooses once with `Math.random() < 0.5`; reduced motion chooses the static legacy presentation. It dynamically imports either `./particles` or `./logo-preview-3d`, never both on a successful visit.
- `LogoPreview3D.astro` owns only the Three.js canvas host and source URL; it has no selectors, public controls, or eager client script.
- `logo-preview-3d.ts` samples the existing SVG into instanced colored voxels, rotates the model around its Y axis while motion is allowed, and reveals the canvas only after successful setup.
- `particles.ts` remains unchanged and receives the current source image/canvas markup it expects.

- [ ] **Step 1: Exercise the baseline behavior in the actual route.** Open `/devs/` in Chrome at desktop and narrow mobile sizes; confirm the page currently exposes the prototype selector rather than selecting between the legacy particle and voxel presentations. Record current build/browser output without creating permanent tests.
- [ ] **Step 2: Restore the legacy main-branch markup and add one selection point.** In `FaunaField.astro`, preserve the main-branch source image and particle canvas. Render the static SVG first; on eligible startup, make a single `< 0.5` decision and lazily import the matching animator. Force reduced motion to the static legacy fallback. Catch import/setup failures without hiding the SVG.
- [ ] **Step 3: Convert the 3D component to a canvas-only host.** Remove A/B selector controls and selector catalog keys. Remove the unused layered B scene from `logo-preview-3d.ts`; keep the approved voxelized emblem and full vertical-axis spin for the selected 3D path. Read the existing fallback SVG from `FaunaField`, preserve the image until voxel setup is complete, and honor the shared motion preference plus page visibility/cleanup.
- [ ] **Step 4: Update the English implementation records.** Describe the one-time random choice, legacy particle and voxel 3D variants, selected-only lazy loading, visit stability, and static fallbacks in `PRODUCT.md`, `DESIGN.md`, and the surface brief. Leave unrelated prose unchanged.
- [ ] **Step 5: Verify through deterministic browser scenarios.** In fresh tabs, override only the first `Math.random()` result to values below and above `0.5`; observe the corresponding particle and voxel presentations, verify no mid-visit swap, and reload to exercise a fresh decision. Also verify no-JavaScript static image, reduced-motion static image, and visible fallback after a selected enhancement fails. At 1440px, 390px, and 340px inspect the actual page, images, focus/accessibility state and diagnostics.
- [ ] **Step 6: Build and inspect the production output.** Run `npm run build`; serve production output and repeat both deterministic outcomes and reduced-motion/no-JavaScript checks. Save exact screenshots and error/request diagnostics in `.impeccable/review/`.
- [ ] **Step 7: Commit the verified feature on the existing feature branch.** Keep the `main` worktree untouched until the verified local merge step authorized by the owner.
