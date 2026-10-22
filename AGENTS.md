# Embraso — project context and working conventions

## What we are building

Embraso's first static Astro website and its language/direction reference: an initiative to bring people together, build useful free software, strengthen communities, and expand digital autonomy across Brazil's different realities.

The identity combines a position on software freedom, privacy, the common good, and meaningful choice with a warm, concrete, approachable Brazilian voice. Two efforts move together: community-building and gradual digital autonomy. The owner selected the editorial signature “Liberdade se constrói junto.” on 22 October 2026. This choice does not establish a formal campaign or operational claims.

**Current stage: first homepage implementation, alongside ongoing editorial development.** The owner authorized two audience-specific versions: A · Folheto at `/` (default) and B · Terminal at `/devs/`, linked by a visible audience switch, plus a shared manifesto at `/manifesto/`. Use [PRODUCT.md](PRODUCT.md) for product decisions and local commands, and [DESIGN.md](DESIGN.md) for the implemented visual system. Contact intake, membership, project publishing, and deployment require their unresolved operational facts; do not simulate them.

## Language policy

Write implementation documentation in English, including `AGENTS.md`, agent/skill instructions, and future technical specifications, architecture notes, and development guides. Keep editorial documents, source archives, internal story/strategy material, and website copy in Brazilian Portuguese. Internal editorial material is not implementation documentation.

Preserve Portuguese quotations, copy examples, canonical principle names, brand signatures, and existing file paths when referencing them in English instructions. An English instruction to write copy must still produce Brazilian Portuguese copy unless explicitly requested otherwise.

## Where to read

The [editorial map](docs/README.md) is the entry point to the collection and records unresolved questions.

- [Public manifesto](docs/01-manifesto-publico.md): the six canonical principles, in their short form.
- [Extended manifesto](docs/02-manifesto-estendido.md): motivations, narrative, and development of the principles.
- [Presentation and invitations](docs/03-apresentacao-e-convites.md), [community](docs/04-comunidade-e-participacao.md), and [contact](docs/05-contato-e-microtextos.md): context-specific applications, with internal notes kept separate.
- [Voice and terminology](docs/06-voz-e-terminologia.md) and [phrase bank](docs/07-banco-de-frases.md): writing guidance and distinctions between quotations, adaptations, and new copy.
- [Sources and editorial decisions](docs/08-fontes-e-decisoes-editoriais.md): source texts, precedents, and synthesis decisions.
- Internal editorial material: [story](docs/interno/01-historia-e-motivacoes.md), [mission and vision](docs/interno/02-missao-e-visao.md), [goals](docs/interno/03-objetivos-e-sinais-de-progresso.md), [values and tensions](docs/interno/04-valores-e-tensoes.md), and [idea incubator](docs/interno/05-incubadora-de-ideias.md).

For writing or review, load the local [embraso-language](.agents/skills/embraso-language/SKILL.md) skill. Keep it short and reference-driven; do not duplicate the collection inside the skill. OMP recognizes `.agents/skills/<name>/SKILL.md` under its default configuration and discovers skills at session startup. This file is named `AGENTS.md`, in uppercase, for conventional discovery on Linux.

## Feature workflow and frontend skills

Load these explicitly when applicable, even when automatic skill discovery is available:

- [embraso-feature-workflow](.agents/skills/embraso-feature-workflow/SKILL.md): start feature work in a dedicated worktree; delegate specification, planning, development, and validation; parallelize only independent, exclusively owned slices. The parent owns shared contracts, integration, and completion evidence.
- [embraso-frontend-patterns](.agents/skills/embraso-frontend-patterns/SKILL.md): substantial page sections own their component, scoped CSS, and namespaced catalog content; routes compose them. Follow the typed i18n pattern, semantic HTML, SEO, accessibility, progressive enhancement, and frontend lifecycle guidance.
- [embraso-browser-validation](.agents/skills/embraso-browser-validation/SKILL.md): independently exercise the actual worktree's rendered UI in Chrome/Chromium, including desktop/mobile behavior, keyboard use, metadata, diagnostics, and inspected screenshots. Prefer a verified low-cost image-capable worker through the available OMP browser integration; do not assume a separate Chrome MCP is installed.
- [impeccable](.agents/skills/impeccable/SKILL.md): load its applicable playbook for frontend work and its craft floor immediately before UI edits. Preserve the selected Folheto / Terminal identity; browser evidence complements, rather than replaces, its design review.
- [embraso-language](.agents/skills/embraso-language/SKILL.md): apply to public copy and editorial review. Internationalization does not authorize rewriting approved Portuguese copy or publishing unreviewed translations.

The locally installed [Superpowers bootstrap](.agents/skills/using-superpowers/SKILL.md) supplies the methodology; load `using-git-worktrees`, `brainstorming`, `writing-plans`, `subagent-driven-development`, `dispatching-parallel-agents`, `verification-before-completion`, and `finishing-a-development-branch` at the corresponding workflow steps. Their upstream revision is pinned in `skills-lock.json`. The [OMP adapter](.agents/skills/embraso-feature-workflow/reference/omp.md) records supported model routing and deliberate project adaptations: disjoint parallel workers, one integrated build/check wave, no invented test command, and no merge/push/worktree removal without authorization. Higher-priority instructions and these project constraints take precedence over generic upstream defaults.

Only `pt-BR` is shipped. Public UI text, metadata, accessibility names, and dynamic announcements must reference typed `src/i18n/` catalogs; identifiers, routes, selectors, and protocol/code tokens are not translated. New locales require complete reviewed catalogs and explicit routing decisions, not silent Portuguese fallbacks or a decorative language switch. Keep canonical manifesto content in one shared catalog and preserve the editorial collection as its source.

**Testing policy:** prefer a small, maintainable set of E2E tests that validates visitor intent and observable outcomes. Do not test everything or create a contract per function, component, message key, callback, or forwarding layer. Add targeted lower-level regressions only for meaningful behavior/boundaries that E2E cannot adequately expose. Reject implementation-shape, incidental wording/class, and “function A calls function B” tests; remove temporary probes after verification. This policy overrides generic upstream test-per-task/full-suite prescriptions; no test runner is installed merely for a documentation or catalog refactor.

## Editorial commitments

1. Preserve the six owner-approved names and their order: **Tecnologia para o bem comum; Autonomia para escolher; Software livre e conhecimento compartilhado; Clareza e escolha no que acompanhamos; Privacidade e segurança desde o início; Simplicidade para construir e manter.** This approval supersedes the earlier naming/order rule; historical source headings and quotations remain unchanged. The two strategic efforts are not additional principles.
   Before listing principles or contribution skills, establish the motivating argument: why dedicate knowledge and effort to useful work; consumption versus actual exchange and unexpected discovery; why available tools and people with relevant knowledge in Brazil and abroad make action worthwhile now; then community-building and gradual digital autonomy as inseparable fronts. Community is a purpose and a place for learning and relationships, not a recruitment funnel. The principles answer **how** to build, not **why** to begin.
   Preserve this two-source architecture: Thiago's text supplies the motivating narrative; the original manifesto supplies construction and continuity criteria. This is an editorial synthesis, not recorded author consensus. Use the public manifesto's canonical introduction, the voice guide's argument sequence, and the phrase bank's labeled adaptations instead of inventing a principle-first generic opening. Condense for short surfaces and adapt vocabulary between audiences without dropping the human motivation; do not import hype, unsupported political or cost claims, legal status, or free-price promises from the sources.
2. Write editorial content in Brazilian Portuguese, with clarity, warmth, and concrete consequences. Lead with what we want to make possible; explain risks and limits without defining the initiative through enemies, purity tests, or combative contrasts. Avoid corporate pitches, forced slang, exclusionary nationalism, and guilt about not contributing. Include people who do not code; maintenance and paid work are part of the vision.
3. Distinguish principles, intentions, confirmed facts, personal accounts, hypotheses, and unresolved decisions. Legal status, licenses, funding, team/CTO, channels, products, and metrics are not confirmed merely because they appear in a source.
4. Free software permits commercial use and does not mean zero cost. Source visibility alone does not establish software freedom. Do not resolve licensing or private-development tensions through ambiguous wording.
5. Do not discard material that does not belong in the manifesto. Preserve story, political criticism, values, hypotheses, and ideas in the appropriate internal editorial document, with context and attribution. An unsupported thesis can remain open to discussion but does not become a public fact through repetition.
6. Do not turn ideas into a portfolio or roadmap. Do not fabricate contacts, groups, forms, donations, testimonials, or response promises. Interface messages must describe only actual, confirmed actions.
7. Internal material and editorial notes are not page copy. Do not automatically publish all of `docs/`. The “interno” classification does not provide confidentiality: do not store secrets, credentials, or personal accounts here without authorization.

## Sources and visual reference

The two manifestos were provided in `C:/dev/embraso/`, accessible in this environment as `/mnt/c/dev/embraso/`. Complete portable copies are available as the [original manifesto](docs/fontes/manifesto-original.md), [Thiago's text](docs/fontes/manifesto-thiago-original.md), and [notes](docs/fontes/notas-originais.txt). Preserve these records and the external originals; record new decisions in the synthesis documents rather than silently rewriting the sources.

The visual reference is the [Claude artifact](https://claude.ai/artifact/BWKYPiNDodsXjPPY1c81dp#page-dcb81aee8d83). Rendered inspection was not possible during initial documentation, but succeeded through Chrome during homepage implementation: A · Folheto and B · Terminal were inspected at full-window scale. Preserve their selected visual identity, not their placeholder projects, forms, metrics, or unconfirmed organizational claims. Supplied local SVGs are under `assets/`; the separate external logo HTML is not production code. Do not infer unobserved details.

GNU, Debian, Agile, Mozilla, and Cluetrain are references for structure and values, with primary sources linked in the editorial decisions document. Do not import their products, scale, policies, or history as Embraso's own.

## Evolution and verification

Read the relevant section before editing. Reuse existing documents, keep the short manifesto consistent with its extended interpretation, update affected references, and preserve identifiable disagreements. Record the origin and publication conditions of new information. Follow the language policy when creating or changing documentation; do not translate the Portuguese editorial collection as part of implementation work.

For documentation changes, verify paths, relative links, principle names, quotation fidelity, and separation between notes and public copy. For the skill, check frontmatter, location, and OMP loading when available. Do not create test infrastructure or an application merely to validate Markdown.

For subsequent website work, verify the selected public content, actual availability of offers, and interaction destinations before implementation. New implementation requests change scope, not these truthfulness requirements. Build with `npm run build` and inspect the actual rendered surface at desktop and mobile sizes; documentation validation alone is not website verification.
