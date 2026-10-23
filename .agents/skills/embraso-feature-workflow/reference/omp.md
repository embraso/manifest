# OMP execution adapter

Read current tool schemas and CLI help; they outrank copied examples. Repository rules and the user's approved workflow govern adaptations to upstream Superpowers. Keep the vendored skills intact; do not claim an adapter is upstream behavior.

## Worktree and runtime

After inspecting the actual base, branch names and worktree list, choose an unused sibling path and branch:

```sh
git worktree add -b feat/<slug> ../manifest-<slug> <verified-base>
```

`<slug>` and `<verified-base>` are deliberate replacements, not literal command arguments. Run subsequent commands with an explicit worktree cwd. OMP also exposes `omp worktree add`; check `omp worktree --help` before using version-specific flags. Never use `-B`, forced cleanup or `git clean` to make room.

Use `npm ci`, `npm run build`, `npm run dev -- --port <unique-port>` or `npm run preview -- --port <unique-port>` as appropriate. Observe the actual URL and readiness. Some Astro versions daemonize dev: an exited launcher is not proof that the server stopped; use that version's dev status/stop commands for the server you created. Serve production output for the final pass. No lint, typecheck, or test script exists. Establish a failing-before scenario for a bug; use targeted existing behavioral tests where appropriate, and runtime smoke proof for new behavior. Do not add brittle wording/source-wiring tests.

**embraso-testing** governs test selection: prefer a few meaningful E2E journeys, add a lower-level test only for a risk those journeys miss, and do not grow forwarding/callback/alias/wording-contract suites. Upstream TDD templates do not require a permanent test for every implementation task here.

## Actual model routing

Inspect `omp models ls --json` for current selectors, image inputs, and pricing; a catalog listing is not proof that credentials or tool use work. Exercise the selected model once. `sonic` uses OMP's `@smol` role and is suitable only for mechanical tasks; a generic `task` agent uses `@task`, and `reviewer` uses `@slow`. Those are roles, not guarantees of price or capability.

**Do not pass `tasks[].model` to an ordinary task.** In the verified runtime it is accepted only for historical `seance` agents. `solutionSpace` describes uncertainty, not model selection. For explicit pricing/capability routing, run a fresh OMP worker process:

```sh
omp --cwd /absolute/feature-worktree \
  --model openai-codex/gpt-6-luna --no-session \
  -p @/absolute/path/to/embraso-work/manifest/<slug>/validation-brief.md
```

`openai-codex/gpt-6-luna` was available with image input and exercised successfully during setup; re-discover before future use. Use the same command shape with a capable available selector for architecture/spec/planning. CLI `--smol`, `--plan`, and `--slow` select roles for that process; do not change persisted user configuration. The process must receive its full task brief, not assume access to the parent conversation. Preserve normal project rules and skill discovery. Use tool allowlists only when their names are verified in that runtime.

For a browser-only validation worker, `--tools read,eval` was exercised successfully: read `xd://eval/browser`, then use Eval's global `browser`. The CLI help's native `browser` entry was not actually registered; `--tools read,browser` failed. Record the backend returned by `browser.open`: the verified setup used the configured Chrome relay and reported `Chrome/156.0.0.0`, not a separate Chrome MCP. Recheck this capability in a new environment. Eval has filesystem/tool access and is not a security sandbox; source-read-only is the worker's explicit task contract.

Subprocess workers are subagents with explicit models, but are not entries in a parent `task` batch. Run independent subprocesses through separate background bash jobs and consume their delivered results; never poll. When exact model override is unnecessary, dispatch independent named tasks in a single `task.tasks[]` batch using discovered agent names. Never invent an agent alias as a model selector.

## Every handoff includes

- Phase, role, exact worktree cwd/base, original goal and accepted spec/plan/brief paths.
- Required skills; exact owned files and forbidden shared files; consumes/produces contracts.
- Full requirements for that slice, edge cases, and observable acceptance criteria.
- Model/capability choice, relevant prior evidence, server URL/port and unique output paths.
- No nested delegation, no autonomous commits/merges/pushes, and no mid-flight build/test/formatter while concurrent edits run.
- Report: completed requirements, changed files, findings/questions, actual checks, artifacts and blockers. A validator is source-read-only and never repairs its own findings.

The parent verifies each report, escalates missing capabilities or uncertain results, and does not retry a weak model indefinitely. Use one capable integration/review pass rather than paying repeated cheap-model turns on an ambiguous problem.

## Installed dependencies

Superpowers skills are installed locally under `.agents/skills/`, with their upstream revision and hashes in `skills-lock.json`. Source: [obra/superpowers](https://github.com/obra/superpowers), revision `2ce8aa15d05bd57213e6f746f953aafb7ded7a8b`. The Embraso skills (`embraso-*`) remain separate authorities. Where upstream templates reference `docs/superpowers/`, `PRODUCT.md`, `DESIGN.md`, or `.impeccable/`, `AGENTS.md` overrides them; write those artifacts outside the repository and do not run generators that would recreate them. Restore/update through the skills installer and review upstream changes; do not silently replace these project adapters or discard upstream supporting references/scripts. Include the upstream MIT notice when distributing the copied skills.
