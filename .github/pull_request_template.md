## Summary

<!-- What changes and why, in a few sentences. -->

## Scope

<!-- One purpose. List the exact routes and files touched. Keep PRs small (roughly under 1000 human-authored changed lines) and split unrelated work. -->

## Dependencies

<!-- Stacked on <branch or PR>, or "none". State the base the diff expects. -->

## Verification

<!-- Commands actually run and observed: `npm ci`, `npm run build`, `npm run preview -- --port <port>`. Follow `embraso-testing` and record PASS / FAIL / BLOCKED / NOT EXERCISED per criterion. -->

## Browser evidence (UI changes)

<!-- Guidance- or docs-only PR: write "Not applicable: no UI change" and skip this section. -->

| Route | Viewport | Before (`<base-sha>`) | After (`<head-sha>`) |
| --- | --- | --- | --- |
| `/` | 1440x1000 | | |
| `/` | 390x844 | | |
| `/` | 320px overflow check | | |
| <!-- changed routes, including `/devs/` when touched --> | | | |

<!-- Embed every capture inline with ![alt](https://gist.githubusercontent.com/<user>/<gist-id>/raw/<file>.png). A gist link alone is not enough: verify each image renders in this body. Host raw PNGs (never base64 in an HTML page) and never commit screenshots to the repo. -->

## Print

<!-- If print styles changed: attach the PDF outside the repo, state its page count, and name the file you inspected. Otherwise write "not exercised". -->

## Limitations

<!-- Label mockups as mockups. Name anything NOT EXERCISED and why. -->

## Copy and editorial check

<!-- Confirm pt-BR copy matches `src/i18n/messages/pt-BR/` and was reviewed with `embraso-language`; note any canonical change in `manifesto.ts`. -->

## Deployment impact

<!-- Merging to `main` runs `.github/workflows/deploy.yml` and publishes to https://embraso.com.br. There is no PR-triggered workflow. Do not merge or push to `main` without explicit owner authorization. -->

## Linked issue

<!-- Issue, or "none". -->

## Checklist

- [ ] No `docs/`, specs, plans, screenshots, evidence, or `*:Zone.Identifier` files committed.
- [ ] No suppressions (`as any`, ignore comments) or advisory gates.
- [ ] Every acceptance criterion exercised or marked NOT EXERCISED with a reason.
- [ ] No AI attribution or co-author lines.
