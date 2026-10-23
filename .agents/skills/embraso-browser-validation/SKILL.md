---
name: embraso-browser-validation
description: Use when independently validating a changed Embraso website in a real browser after implementation or fixes, including responsive behavior, accessibility, interactions, metadata, and runtime/network errors.
---

# Embraso browser validation

Validate rendered behavior independently; do not edit source or repair findings. Read repository `AGENTS.md` first, plus `embraso-frontend-patterns` for the product/design contract and the relevant route/component guidance. For implementation workflow use `embraso-feature-workflow`; follow `embraso-language` for Brazilian Portuguese content, and `impeccable` for design quality. `embraso-testing` governs check selection and statuses; `embraso-pull-requests` packages evidence into PR bodies.

## Baseline and scope

Record the exact worktree/revision, local URL, routes and intended behavior before opening the browser. Use the user's specified environment, or identify the intended worktree explicitly; never validate a different checkout by accident. Do not start a build or install dependencies as part of browser validation.

Use a fresh, low-cost validator with no implementation context beyond the request, expected behavior, exact worktree/URL, and test scope; its role is evidence collection only. If the task-model override is unsupported, launch an isolated CLI session using a verified model and supported routing, e.g. `omp --cwd <worktree> --model openai-codex/gpt-6-luna --no-session -p @<brief>`; replace the model only with one verified low-cost for the environment. Do not assume the current model is low-cost or route models through an unsupported API. Prefer OMP Browser Eval with a dedicated named tab per route/session and viewport. Read `xd://eval/browser` for available methods. An actual Chrome MCP may be used only if tool discovery confirms it is available; otherwise do not imply it was used. Record the browser backend actually reported by `browser.open` (OMP may route to a relay despite `app: { tern: false }`); never assume the requested app option selected the backend. Never borrow/navigate a user's tab. Browser viewport emulation checks layout and browser behavior, not physical-device touch, hardware, or real-device performance.

For autoplay/timing journeys that span tool calls, open the worker's own tab with `persist: true`, keep the observation inside a live `tab.run`/browser wait, and confirm actual document visibility, viewport intersection, and motion preference. An idle-frozen/background page is not evidence of a playback defect; do not fake visibility or infer resume from a label alone. Observe the visitor-visible progression under the conditions in which the feature is meant to run. Close the persistent tab in `finally`. For static composition screenshots, settle entrance motion or explicitly capture the reduced-motion state and label it; do not mistake an assembling particle field for the finished artwork.

## Run

Batch captures at desktop (1440px), mobile (390px), and a narrow viewport (320–360px), plus project/user-supported sizes. For each route, record its exact URL, viewport, browser backend, engine/version, and outcome. Capture top-of-document and relevant full-page states; inspect the saved image itself for correct route, loaded content, and completeness. Save evidence outside the repository under `~/embraso-work/manifest/<slug>/evidence/<runId>/` and never commit captures. Example using Browser Eval JS APIs; set the feature slug, route and server URL explicitly:

```js
const runId = new Date().toISOString().replace(/[:.]/g, "-");
const requestedViewport = { width: 1440, height: 1000 };
const route = "/";
const url = "http://127.0.0.1:4321/";
const slug = "<feature-slug>";
const name = `embraso-${runId}-home-desktop`;
const tab = await browser.open({
  name, url, app: { tern: false }, viewport: requestedViewport,
});
try {
  // Some backends ignore open(viewport); apply emulation and record actual CSS viewport.
  await tab.emulate({ viewport: requestedViewport });
  const info = await tab.run(async ({ page }) => ({
    url: page.url(),
    title: await page.title(),
    engine: await page.browser().version(),
    viewport: await page.evaluate(() => ({
      width: innerWidth, height: innerHeight, devicePixelRatio,
    })),
  }));
  if (info.viewport.width !== requestedViewport.width ||
      info.viewport.height !== requestedViewport.height) {
    throw new Error(`Viewport mismatch: ${JSON.stringify(info.viewport)}`);
  }
  const fs = await import("node:fs/promises");
  const path = await import("node:path");
  const { homedir } = await import("node:os");
  const dir = path.join(homedir(), "embraso-work", "manifest", slug, "evidence", runId);
  await fs.mkdir(dir, { recursive: true });
  // Direct helper returns the path it saved. Copy that exact capture into the evidence directory.
  const captured = await tab.screenshot({ fullPage: false, format: "png" });
  const screenshot = path.join(dir, "home-desktop.png");
  await fs.copyFile(captured, screenshot);
  console.log({ ...info, requestedViewport, screenshot });
  console.log(await tab.ariaSnapshot());
  console.log(await tab.errors(), await tab.requests());
  // Read/view screenshot using the file reader at the exact `screenshot` path.
} finally {
  await browser.close({ name });
}
```

Use corresponding fresh named tabs and unique screenshot paths for mobile and narrow widths. Assert and report actual CSS viewport (`innerWidth`, `innerHeight`, DPR) after emulation; do not infer it from the requested viewport or screenshot pixel dimensions. A CSS viewport can map to different physical screenshot pixels depending on DPR and capture backend. Read each exact saved image from `~/embraso-work/manifest/<slug>/evidence/<runId>/` with the image-capable file reader; do not substitute a later screenshot that may show different state. If full-page capture times out, capture the viewport or relevant sections with the direct screenshot helper, mark omitted full-page coverage NOT EXERCISED, and do not repeat the identical timed-out call indefinitely. Record the browser backend actually reported by `browser.open`. `tab.run` is real browser Eval, not a sandbox; use only against the intended local site. Keep each run's screenshots, structured observations, and notes together; never overwrite evidence from another route/run without recording that choice.



Choose a small set of scenarios from the changed visitor intent and plausible regressions; cover related checks in the same journey rather than enumerating every string, helper, callback or DOM implementation detail. The categories below are review lenses, not a demand to generate a permanent test per item. Prefer durable intent-focused E2E tests when automation is warranted; do not turn temporary screenshots, catalog-equality probes or wiring checks into an accumulating suite.

For every route, inspect:

- **Rendered layout:** screenshots at all target sizes; wrapping, clipping, overlap, horizontal overflow, image/font loading, content completeness, responsive navigation and visible focus. Distinguish viewport emulation from physical touch: if the browser tool cannot synthesize the relevant touch gesture, mark gesture evidence untested rather than claiming it works.
- **Keyboard and interaction:** traverse with Tab/Shift+Tab, activate links/buttons using Enter/Space as appropriate, exercise menus/toggles and primary interactions, verify focus remains visible and order sensible, and check resulting URL/state. Do not invent or submit real user data.
- **Semantics/accessibility evidence:** inspect accessible/ARIA snapshot, landmarks, headings, names/roles/states, labels, image alternatives, focus order, and obvious contrast/readability issues. Browser inspection is not a full screen-reader or WCAG compliance certification.
- **Metadata:** document title, description, canonical/robots where expected, language, viewport, and route-specific metadata; verify links resolve within intended scope.
- **Runtime/network:** inspect page errors, console diagnostics, failed requests/statuses, and unexpected external requests; separate pre-existing/environment failures from regressions. Do not claim performance/vitals or broad browser compatibility from a screenshot or one engine.
- **Public-surface exposure:** when content, routes, build scripts, or deployment configuration changed, inspect the generated/deployed artifact's file list and search it for internal-only material; directly request plausible internal-file paths on the local preview and confirm they are unavailable. Check that public page links, metadata, scripts, and network requests do not expose internal documents. Report exact scope and any untested production-host checks; do not infer production exposure or safety from source layout alone.

For localization changes, review the source catalogs and compare runtime output with the requested baseline. Confirm Brazilian Portuguese copy remains unchanged where required, verify visible strings against the source catalogs (browser output alone cannot prove catalog ownership), and disable JavaScript to confirm meaningful content and navigation remain available. Report route and examples.

## Verdict and handoff

Return a concise result per run and per route, with worktree/revision, URL, browser backend+engine/version, viewports, checked actions, screenshot paths, evidence, and findings. Record a PASS/FAIL/BLOCKED or NOT EXERCISED status **for every criterion** and give an overall route verdict. A route is PASS only when every required criterion passed; any failed criterion makes it FAIL, and any required blocked/not-exercised criterion prevents PASS (classify the route BLOCKED or FAIL when other findings independently fail).

- **PASS:** every agreed criterion was exercised and passed, with no material regressions.
- **FAIL:** at least one criterion exposed a reproducible user-visible, functional, accessibility, metadata, or runtime/network regression; give steps, expected/actual behavior, severity, and evidence.
- **BLOCKED:** a prerequisite/environment prevents a required check; name precisely what could not be exercised.
- **NOT EXERCISED:** the check was omitted; it cannot be counted as PASS.

Do not repair issues. Return findings to the parent/implementation owner to fix, then repeat the affected route and related responsive/interaction checks and append a fresh result; preserve the before/after evidence. Run the Impeccable finish reviewer and design detector only as specified by the parent workflow: this pass must not duplicate either or treat a clean detector as proof of quality. Screenshots and a clean browser run do not establish WCAG compliance, physical-touch behavior, Core Web Vitals, or all-browser support.