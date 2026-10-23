---
name: embraso-testing
description: "Use when choosing how to check an Embraso change, running verification, or deciding whether a permanent test is warranted. Covers commands, check selection by change type, viewports, and result statuses."
---

# Embraso testing

## Commands

The available commands are `npm ci`, `npm run dev -- --port <port>`, `npm run build`, and `npm run preview -- --port <port>`; the only package scripts are `dev`, `build`, and `preview`. `npm run build` is the primary check; it must pass before any handoff. No lint, typecheck, or test script exists: do not add, invent, or claim one, and do not install a runner without owner approval. A passing build proves compilation and static output, not rendering — verify visitor-visible behavior in a browser with `embraso-browser-validation`.

## Choosing checks

| Change | Minimum check |
| --- | --- |
| Copy or catalog only | Build, then read the rendered pages at desktop and mobile widths; confirm the copy renders and nothing else shifted |
| Layout, styles, or interactions | Build, then browser validation at 1440x1000, 390x844, and a 320px overflow check; include `/devs/` when it changed |
| Routes, assets, or build/deploy config | Build, then inspect `dist/` for intended routes and assets with nothing internal exposed; preview and request the changed paths |
| Behavior-bug fixes | Reproduce the failure first (failing-before), then prove the fix on the integrated source |

## What earns a permanent test

Prefer a small, durable set of E2E journeys that prove what a visitor came to do — following the audience switch to the correct page, selecting a reading and getting its content, pausing playback until explicitly resumed. Never add tests for wording, source shape, forwarding (a function calling another function), catalog aliases, wiring, or mock echoes; no per-component matrices. Add a lower-level regression only for a real algorithm or boundary risk that a small journey cannot expose. Temporary probes may answer implementation uncertainty and must be removed after proof. A permanent test must survive a behavior-preserving refactor.

## Running and reporting

Subagents do not run builds or checks while siblings are writing; the integration owner runs checks after the wave. Report PASS, FAIL, BLOCKED, or NOT EXERCISED for every named criterion, with the command, URL, and evidence observed. Missing evidence is not PASS, and a clean screenshot alone proves nothing about accessibility or performance.
