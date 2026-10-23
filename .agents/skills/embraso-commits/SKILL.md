---
name: embraso-commits
description: "Use when writing or staging Embraso commits: subject and body format, staging discipline, and what must never be committed."
---

# Embraso commits

## Message

`type(scope): summary` in lowercase imperative mood, no trailing period — for example `fix(devs): restore shared about heading`. History uses `feat`, `fix`, `docs`, `chore`, `refactor`, and `seo`; merge commits follow git's default format. Add a why-body wrapped near 72 columns when the subject alone cannot explain the reason. One purpose per commit.

## Staging

Stage explicit paths; never `git add -A` or `git add .`. Review exactly what is staged with `git diff --cached` before committing. Never add or update `docs/`, `PRODUCT.md`, `DESIGN.md`, `.impeccable/`, `screenshots/`, `evidence/`, `dist/`, `node_modules/`, `*:Zone.Identifier`, or anything under `~/embraso-work/`; working artifacts and evidence stay out of the repository. Owner-approved cleanup may stage exact deletions of removed tracked artifacts — stage only the files being deleted.

## History

No AI attribution or co-author lines. Do not rewrite history, force-push, or delete branches without explicit owner authorization.
