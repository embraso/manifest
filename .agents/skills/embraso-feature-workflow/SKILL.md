---
name: embraso-feature-workflow
description: Use when starting, planning, implementing, or validating an Embraso feature or behavioral change, especially when work must be delegated or independent tasks can run concurrently.
---

# Embraso feature workflow

Coordinate; do not silently substitute inline implementation for requested delegation. Use a subagent in **each** phase: specification, planning, development, and validation. Dependencies are sequential; independent slices within a phase can run in parallel. The parent owns scope, handoffs, integration, and the final evidence gate.

## Start isolated

Read `AGENTS.md`, `PRODUCT.md`, and relevant source. Load **using-superpowers** and **using-git-worktrees**. Record the intended base revision, dirty files, existing worktrees, and a unique feature slug. Create a sibling worktree before feature edits; a new worktree contains committed base content, **not another checkout's uncommitted work**. Never copy ongoing unrelated changes, stash/reset another workspace, or reuse someone else's branch. If this feature requires uncommitted prerequisites, obtain an explicit handoff rather than assuming a snapshot is coherent.

Use `reference/omp.md` for commands, model routing, and dispatch contracts. Keep every worker's absolute cwd, server port, browser tab, and evidence paths tied to the feature worktree. Install from the lockfile there. A feature already in its own worktree reuses it; workers do not each create another feature root unnecessarily.

## Phase gates

| Phase | Required subagent and skill | Handoff / gate |
| --- | --- | --- |
| Spec | Specification author using **brainstorming**; capable model for uncertain requirements or design | English spec: goal, non-goals, product facts, behavior, edge cases, routes, acceptance criteria and visual/content constraints. Parent resolves material questions with the owner; a worker cannot invent approval. |
| Plan | Separate planner using **writing-plans**, **embraso-frontend-patterns**, and applicable **impeccable** guidance | Plan tied to the accepted spec: exact files, interfaces, dependencies, exclusive ownership, shared-file integrator, and observable verification per criterion. Preserve spec/plan approval gates required by Superpowers; reuse approvals already supplied, not a new execution-method interview. |
| Develop | Fresh implementer per meaningful task using **subagent-driven-development**; **dispatching-parallel-agents** for independent slices | Bounded, complete tasks. Small model for explicit mechanical work; capable model for i18n architecture, integration, uncertain bugs, or design judgment. Review spec compliance and quality independently of authors. |
| Validate | Independent verifier using **verification-before-completion** and, for UI, **embraso-browser-validation** plus Impeccable's applicable finish review | Parent integrates first, then runs `npm run build` and exercises the changed behavior. Cheap image-capable browser worker collects real desktop/mobile evidence; stronger review handles ambiguous design or complex failures. All named acceptance criteria have evidence. |

Before final validation, refresh the feature onto the latest intended `main` revision, preserving both upstream changes and the feature. Resolve conflicts in the feature worktree—not the active checkout—and regenerate baseline/evidence for that revision. An old screenshot or a pass against an earlier main is not final proof. Do not rewrite a shared branch or discard uncommitted work to refresh it.

Store specs/plans at Superpowers' documented `docs/superpowers/{specs,plans}/` locations when durable documents are warranted; keep progress, briefs and reports in the plan's own scratch workspace. After interruption, read that ledger before dispatching completed work again.

## Parallel development contract

Split by independently reviewable section/feature, not CSS versus markup. Set props/slots, selectors, catalog namespaces, and behavior contracts first. Workers have exclusive files; one integration owner handles shared routes, locale registration, canonical manifesto messages, layout, tokens, dependencies, and documentation. No parallel writes to those files. A discovery that changes a shared contract returns to the parent before editing it.

This is a deliberate OMP adaptation of Superpowers' sequential implementer loop: parallel implementation is allowed **only** for disjoint files and settled contracts. Otherwise retain sequential implementation. Workers skip builds, tests, formatters and broad checks while siblings write. The integration owner runs the agreed checks after the wave; no invented test command or test framework just to satisfy an upstream template.

## Test intent, not implementation

Prefer a **small, durable set of E2E scenarios** that proves what a visitor came to do. Select scenarios from changed user journeys and plausible failures, not one test per function, message key, component, or plan step. A plan names each selected intent, action and observable outcome, and why that scenario earns its maintenance cost; it does not prescribe exhaustive contract or coverage matrices.

Assert outcomes such as following the audience switch to the correct page, selecting a reading and getting its content, or pausing playback until explicitly resumed. Do not test that a function calls another function, a prop is forwarded, a catalog alias equals its source, or code has a particular shape. Avoid snapshots of whole pages, wording inventories, private state, CSS classes, and duplicated happy paths.

Add a focused unit/integration regression only when a real algorithm, boundary, error or transition is important and a small E2E scenario cannot adequately expose it. Reuse an existing runner; do not install a framework for documentation, string extraction, or every refactor. Temporary smoke/type probes can answer implementation uncertainty and must be removed after proof. Permanent tests must survive a behavior-preserving refactor; remove incidental tests instead of re-pinning them. This project policy overrides generic upstream instructions to create tests for every task or run an invented full suite.

## Completion

Before publishing or changing routes/content/assets, inspect the final static artifact (`dist/`) and deployment artifact path. Confirm only intended public routes/assets are included; internal editorial notes, source archives, specs/plans, repository metadata, and build/test files must not be copied or bundled for public access. A source file being outside `public/` is not sufficient evidence if routes or build scripts can import/copy it. Treat internal classification as editorial organization, not access control.

Resolve review findings, then repeat the affected runtime scenarios on the final integrated source. A worker's `DONE`, a screenshot alone, or a clean detector is not proof. Report PASS/FAIL/BLOCKED per criterion, actual models/backends, commands observed, screenshots, and limits; missing evidence is not PASS. Update affected implementation docs after proof, preserve Portuguese copy and canonical content, and remove temporary scaffolding. Use **finishing-a-development-branch**, but never merge, push, delete a branch/worktree, or discard changes without authorization. Default handoff: completed feature remains in its worktree.
