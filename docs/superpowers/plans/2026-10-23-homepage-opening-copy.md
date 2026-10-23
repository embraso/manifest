# Homepage Opening Copy Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the Folheto homepage proposal body with the owner-approved, more specific Brazilian Portuguese copy while retaining its approved heading and consistent editorial context.

**Architecture:** This is a copy-only update to the existing typed `pt-BR` proposal catalog; `FolhetoHome.astro` already renders its fields and should need no structural change. Make concise adjustments to the presentation, phrase-bank, and editorial-decision records so the related proposal stays consistent, the text is labeled as an adaptation rather than a quote, and the owner-supplied experience fact has a publication record.

**Tech Stack:** Astro, TypeScript, typed `src/i18n/` catalog, Markdown editorial records. No test runner or test suite.

**Spec:** `docs/superpowers/specs/2026-10-23-homepage-opening-copy-design.md` (binding; use its exact approved copy and acceptance criteria).

## Global Constraints

- Keep the existing heading exactly: “Mais do que código. Gente com quem construir.”
- Use the spec’s exact Brazilian Portuguese wording for the opening, exchange/opportunity, and tools/autonomy copy; make no paraphrases or additions.
- Preserve community-building and gradual digital autonomy as the two inseparable fronts.
- The “more than 50 years” combined technology experience, including large-company experience, is a fact explicitly supplied and approved for publication by the owner; add no broader credential or claim.
- Treat the wording as an editorial adaptation inspired by Thiago, not a quotation or attribution to him.
- Leave `/devs/`, `/manifesto/`, the canonical manifesto, and all six principle titles/order unchanged. Do not change component structure or add tests.
- Keep implementation documentation in English and the editorial record in Brazilian Portuguese.

## Review Focus

- Copy drift: compare all revised catalog strings with the three exact passages in the approved spec; verify the heading is unchanged.
- Claim scope: ensure the experience statement says only what the owner supplied and approved; record that provenance in editorial memory.
- Attribution: ensure the related editorial record calls this an adaptation, not a quote or author-approved text.
- Narrative balance: ensure community and gradual autonomy remain explicit, distinct fronts, without implying an operating community or product.
- Scope regression: confirm no changes to `/devs/`, `/manifesto/`, or the six canonical principle titles/order.

---

## File Map and Ownership

**Copy/editorial implementer (one bounded change; no task splitting):**
- `src/i18n/messages/pt-BR/home/proposal.ts` — set `reading` to the spec’s opening passage, `opportunity` to its exchange/opportunity passage, and `autonomy` to its exact tools/autonomy passage. Keep `community` as the distinct, explicit community front, updating only as needed for consistency. Retain `heading`, `communityTitle`, and `autonomyTitle` exactly.
- `docs/03-apresentacao-e-convites.md` — update **Apresentação curta** to reflect the approved motivation and owner-approved experience fact, while retaining its explicit community/autonomy fronts; adjust **Apresentação ampliada** only if necessary for consistency. Do not recast the canonical manifesto or invent a new organizational claim.
- `docs/07-banco-de-frases.md` — record the homepage text as an **ADAPTADA** entry, clearly identifying it as an adaptation inspired by Thiago, not a quotation. Keep the exact combined-experience claim within the owner's approved scope.
- `docs/08-fontes-e-decisoes-editoriais.md` — add a concise dated editorial decision noting that the owner directly supplied and approved the more-than-50-years combined technology-experience fact, including experience at large companies, for publication in the homepage proposal. Do not imply independent verification or expand the claim.

**Integration owner:** the parent owns refreshing this worktree onto the two-commit-ahead `main`, integrated validation, and the authorized merge/worktree closeout. No other source files are expected to change.

## Task 1: Update the approved homepage copy and its editorial memory

**Files:** as listed in File Map and Ownership. `src/components/folheto/FolhetoHome.astro` is a render-path reference only; leave it unchanged unless inspection reveals the existing renderer cannot display the specified copy.

**Interfaces:** Keep the existing catalog fields and typed message structure; the component continues consuming the catalog through the existing `messages.home.proposal` API.

- [ ] Read this plan and the binding design spec. In `proposal.ts`, assign the exact opening, exchange/opportunity, and tools/autonomy passages to `reading`, `opportunity`, and `autonomy` respectively. Keep `community` as the distinct community front, changing it only if needed for consistency. Preserve the approved heading and field structure.
- [ ] Update `03-apresentacao-e-convites.md` only where the existing presentation proposal conflicts with the revised homepage framing. Update `07-banco-de-frases.md` with a clearly labeled adaptation and source distinction; update `08-fontes-e-decisoes-editoriais.md` with the owner's provenance/approval of the experience fact. Preserve the historical source texts and canonical manifesto.
- [ ] Review the diff against every global constraint and Review Focus item. Confirm the exact copy against the spec and confirm only the four planned files changed.

## Task 2: Integrated validation and authorized cutover (parent-owned)

- [ ] Refresh the feature branch onto the current `main` revision, preserving both branches and main’s two already-landed commits (Folheto idea form plus its `FolhetoHome.astro`, `home/closing.ts`, and `home/participation.ts` edits). Resolve any overlap without reverting those changes.
- [ ] Run the single supported production build after integration settles: `npm run build`. Expected: exit status 0 and generated production output.
- [ ] Serve production output and independently inspect the rendered `/` at desktop and mobile sizes. Confirm the retained heading, exact approved copy, legibility, no runtime/network errors, and no unintended layout change. Inspect the generated `dist/` against the project’s intended output allowlist; ensure editorial docs/specs are not published. Do not claim verification beyond observations.
- [ ] With integrated validation complete, merge the authorized feature work into `main` and close the current worktree as authorized, preserving the two existing main commits.

## Plan completeness

The catalog change implements the spec’s sole public-copy change; the three editorial updates preserve presentation consistency, adaptation attribution, and fact provenance. The spec explicitly excludes changes to other routes, canonical manifesto content, and principle names/order. This is a single copy/editorial slice, so no artificial subtasks or test suite are warranted. Final observable evidence is the exact catalog/spec comparison, production build, and independent desktop/mobile inspection of production `/` after refreshing onto current `main`.