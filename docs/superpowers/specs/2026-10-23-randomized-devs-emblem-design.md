# Randomized Developer Emblem Design

## Intent

Show either the existing EmbrasoFetch particle emblem or the approved pixelated Three.js emblem on `/devs/`. This keeps the selected 3D treatment in rotation alongside the version already on `main`, without changing the page outside the emblem.

## Goals

- Choose one emblem presentation at random on each `/devs/` page load, with equal probability.
- Keep the choice stable for that visit; choose again on a later load.
- Preserve the current SVG-particle effect as one choice and the pixel-voxel, vertical-axis 3D spin as the other.
- Keep the current static SVG visible without JavaScript, for reduced motion, or when an enhancement fails.

## Non-goals

- No automatic switching while the page remains open.
- No saved visitor preference, selector, or B · Camadas presentation.
- No changes to other Terminal content, layout, route behavior, or copy.

## Constraints

- Astro static output; client enhancement only.
- Use the current supplied SVG for both the pixel-voxel model and static fallback.
- Load and start only the selected animation. Keep the Three.js code on the selected path rather than loading it for particle-only visits.
- Respect `prefers-reduced-motion`; neither animation runs in that state.
- Preserve useful content and a visible emblem when scripts, WebGL, or canvas readback are unavailable.
- Update `PRODUCT.md`, `DESIGN.md`, and the homepage surface brief to reflect shipped behavior.

## Behavior

The server renders the legacy SVG emblem. Client-side startup makes one `Math.random() < 0.5` decision for eligible visits. The legacy result starts the existing particle controller; the voxel result lazily loads the Three.js controller and hides the SVG only after the voxel scene is ready. Under reduced motion, startup keeps the static SVG path. Failed enhancement initialization leaves the SVG visible. No result is persisted or changed during that document visit.

## Acceptance criteria

1. Fresh eligible `/devs/` loads make one equal-probability choice and maintain it for the current page visit.
2. Deterministic browser runs can exercise both outcomes: the original particle animation and the pixelated 3D logo rotating around its vertical axis.
3. JavaScript-disabled and reduced-motion runs show the static SVG and do not start either animation.
4. A failed selected enhancement cannot leave the emblem blank.
5. No selector, visit-level persistence, mid-visit swap, or change to the rest of the Terminal page is introduced.
6. Build succeeds; the rendered page works without horizontal overflow at desktop and narrow mobile sizes.
