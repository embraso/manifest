---
name: embraso-pull-requests
description: "Use when opening an Embraso pull request: scoping the diff, writing the body from the template, and embedding inline Before/After browser evidence with gists."
---

# Embraso pull requests

## Scope

One purpose per PR, kept small (roughly under 1000 human-authored changed lines). Split implementation from guidance or cleanup. Stack PRs explicitly: name the base branch or PR the diff expects. Never push to `main`, merge, or delete branches without explicit owner authorization; a `main` push deploys production via `.github/workflows/deploy.yml`. No PR-triggered workflow exists; do not claim CI or required checks.

## Body

Draft the body at `~/embraso-work/manifest/<slug>/pr-body.md` from `.github/pull_request_template.md` and open the PR with `gh pr create --body-file`. Fill every section; write "not exercised" where a check did not run, and "Not applicable: no UI change" in the evidence section for guidance- or docs-only PRs.

## Inline evidence (UI changes)

A UI change carries its screenshots inside the PR body, rendered inline; a guidance- or docs-only PR writes "Not applicable: no UI change" in the template's evidence section instead of a table. For UI changes, a link to a gist, an `evidence.md`, or a gallery page is not enough.

- Put a Before/After markdown table in the body — the template's Browser evidence section — with `![alt](url)` images for each viewport captured: `/` at 1440x1000 and 390x844, a 320px overflow check, and every changed route, including `/devs/` when it changed. Add a row per captured theme or state when a theme changed.
- Host PNGs as raw files, never as base64 data URLs in an HTML page. Create a placeholder file outside the repo and run `gh gist create --desc "<short description>" <file>` (default secret behavior; do not pass `--secret` — secret gists are unlisted, not private). Clone `https://gist.github.com/<gist-id>.git` outside the repo, add the PNGs, commit, and push.
- Embed `https://gist.githubusercontent.com/<user>/<gist-id>/raw/<file>.png` in the table cells and, before finishing, verify each image renders in the PR body with `image/png` content.
- Capture changed sections, not only full-page scrolls. Print changes need a PDF, its page count, and visual inspection. Label mockups as mockups.
- Never commit screenshots, galleries, or evidence files to the repo.

## Attribution

No AI attribution, co-author lines, or generated-by disclosures in PRs.
