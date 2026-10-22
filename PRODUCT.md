# Embraso — Product Context

<!-- impeccable:product-schema 1 -->

This is the English technical product record for the Embraso website, not public-facing copy. It captures the owner's product decisions and the existing editorial constraints. The editorial collection remains the source for Portuguese wording, attribution, and the status of organizational claims.

## Platform

web

## Stack

- **Generator: Astro**, explicitly selected by the owner during initialization.
- **Delivery: a static website.** Generate publishable pages as static output; no server-rendered application is requested.
- **Hosting: GitHub Pages** at `https://embraso.com.br`, using Embraso's confirmed custom domain.
- A static frontend does not itself receive submissions. Lead capture will need a real destination or submission service; that choice remains open.
- The first homepage implementation uses npm and Astro static output. Run `npm ci`, `npm run dev` for local development, `npm run build` to generate `dist/`, and `npm run preview` to inspect that output. GitHub Pages deployment uses the repository's GitHub Actions workflow, which runs only for the canonical repository's `main` branch; fork copies are skipped. The `github-pages` environment is restricted to `main`, and branch protection requires pull requests and one approval; deployment configuration requires review from either the repository owner (`@Acid995`) or original maintainer (`@tprei`). Both are current repository administrators and can bypass those rules when needed. No server-side adapter or submission service is configured.

## Users

Two audiences are supported by the editorial collection:

- People interested in helping build Embraso projects: programmers, designers, writers, educators, researchers, organizers, maintainers, and others with relevant experience. They need to understand the initiative and find a real way to contribute.
- People, collectives, and small businesses who know a concrete problem. They need to understand the proposal and, once an intake route exists, share context without being promised implementation or free consulting.

**Two reading registers, one initiative.** The owner requested a general-public Folheto version at `/` and a technical Terminal version at `/devs/`, with audience-specific wording and shared principles/assets. The owner selected Folheto as the default entry, with a visible audience switch. This is an entry decision, not an organizational priority ranking; neither version assumes programming knowledge or unlimited availability to participate.

## Product Purpose

The website will present Embraso, publish its projects, gather leads, and invite people to work on its projects. These are intended capabilities, not claims that projects or intake channels are already operating.

Embraso's editorial purpose is to bring people and knowledge together to build and sustain useful, free software, strengthening communities and gradual digital autonomy across Brazil's different realities. Community and digital autonomy are inseparable strategic fronts, not extra manifesto principles.

### Narrative contract

Both audience versions and the shared manifesto must establish a motivating argument before presenting principles or contribution skills: dedicate knowledge and effort to useful work beyond employment and consumption; distinguish passive consumption from actual exchange and unexpected discovery; explain the opportunity to connect available development tools and people with relevant knowledge in Brazil and abroad with those who know the problems. Community-building and gradual digital autonomy follow as inseparable fronts; the six principles then answer how to build and sustain.

This architecture preserves two distinct source contributions: Thiago's narrative supplies why, with whom, and why now; the original manifesto supplies construction and continuity criteria. It is an editorial synthesis, not recorded author consensus. Community relationships, learning, and meeting around problems are purposes, not merely a recruitment or lead-capture funnel. Neither technical vocabulary nor a skill inventory can replace this argument on `/devs/`. Short surfaces can condense it while linking to its development.

Use the [public manifesto's introduction](docs/01-manifesto-publico.md) as canonical copy, the [voice guide](docs/06-voz-e-terminologia.md) for the sequence, and the [phrase bank](docs/07-banco-de-frases.md) for attributed adaptations. Keep literal quotations literal and label adaptations as such in editorial records. Do not import unsupported political, productivity, or cost claims, nonprofit/legal status, or free-price promises from the source texts.

The internal [mission and vision](docs/interno/02-missao-e-visao.md) and [progress criteria](docs/interno/03-objetivos-e-sinais-de-progresso.md) are proposals for discussion. They emphasize practical usefulness, meaningful participation, freedom, and continuity rather than attention capture or audience growth alone. No numerical website targets have been approved.

## Positioning

Embraso connects software freedom with human proximity: useful tools developed with the people who understand the problem, and realistic paths to understand, adapt, migrate, and maintain what they use.

Autonomy does not mean isolation or rejecting every external tool. Proprietary tools, cloud services, and AI can be conscious choices when dependencies, costs, limits, and continuity are understood. This is a stated direction, not evidence of an implemented technical policy or a claim of uniqueness in the market.

## Operating Context

- **Technical implementation documentation is written in English.** Public-facing editorial copy remains Brazilian Portuguese unless the owner requests another language. Existing Portuguese editorial documents are not implementation specifications and are not translated by this initialization.
- The [editorial map](docs/README.md) is the entry point to the content collection. Use the [short manifesto](docs/01-manifesto-publico.md) for the canonical principles, the [extended manifesto](docs/02-manifesto-estendido.md) for their interpretation, and the [voice guide](docs/06-voz-e-terminologia.md) for wording.
- Public text, internal editorial notes, historical sources, and exploratory ideas coexist in the repository. Publication requires deliberate selection; do not publish all of `docs/` automatically.
- The owner explicitly authorized the first homepage implementation after initialization. The shipped surface includes both audience versions and a shared public manifesto at `/manifesto/`; this does not authorize publishing unconfirmed projects, contact channels, membership, or organizational claims.
- Preserve historical source files. New product decisions belong in this record and affected synthesis documents, not in silent rewrites of originals.
- The label “internal” is an editorial classification, not access control. Do not store credentials, secrets, or unauthorized personal information in this repository.

## Capabilities and Constraints

### Project publishing

Publish Embraso's projects on the static website. No verified project inventory, release status, project assets, or contribution destinations have been supplied in the current product brief. The [idea incubator](docs/interno/05-incubadora-de-ideias.md) contains possibilities, not an approved portfolio or roadmap. Confirm the facts for each project before presenting it as active, released, or available to use.

### Lead capture

Gather leads through a real, working destination. The owner confirmed that the destination is **not yet decided**. The intended lead categories, collected fields, recipient, submission provider, storage, retention, consent requirements, and operational ownership remain open.

Do not publish an invented email address, form endpoint, newsletter, response-time promise, or success state. A successful submission message must reflect a confirmed receipt, not a local-only animation. The static delivery requirement does not authorize choosing a backend or claiming data-handling practices without a decision.

### Contributor calls to action

Invite people to work on Embraso projects, including non-programming contributions. The specific project opportunities, contribution instructions, repositories, and enquiry destinations remain unconfirmed. A contribution invitation is not a job opening, a promise of compensation, or an obligation to volunteer.

Reading the manifesto can be a genuine action once its public destination exists. Contact and contribution actions require confirmed operational destinations; proposed labels in the editorial collection do not establish those destinations.

### Organizational truth

Legal status, adopted software licenses, financing, service pricing, team identities, CTO appointment, governance, and existing community size remain unconfirmed. Do not turn intentions into operational claims. Free software permits commercial use and is not synonymous with zero price; visible source alone does not establish software freedom.

## Brand Commitments

- **Working name: Embraso.** Do not infer a legal entity, government affiliation, or exclusive national membership.
- **Voice:** clear, warm, concrete, confident, and Brazilian without manufactured slang, corporate pitch, exclusionary nationalism, or guilt about contributing.
- **Selected editorial signature:** “Liberdade se constrói junto.” The owner chose this direction on 22 October 2026; the wording uses standard Brazilian Portuguese spelling and agreement.
- **Proposed descriptor:** “Software útil, feito em comunidade, para as diferentes realidades do Brasil.”
- The signature is selected; the descriptor remains an editorial proposal. Neither establishes a formal campaign, an operating community, a license, or released products. Explain the intent to bring people together to create useful, free software rather than making the signature carry the entire proposition.
- **Owner's visual constraint:** preserve the identity of the [supplied Claude artifact](https://claude.ai/artifact/BWKYPiNDodsXjPPY1c81dp#page-dcb81aee8d83), improve its craft, and use appropriate animation. The owner selected A · Folheto for the public version and B · Terminal for the developer version. The implemented system is recorded in [DESIGN.md](DESIGN.md).
- **Reference evidence:** rendered inspection succeeded through Chrome during implementation. Both artboards were opened at full-window scale; their typography, palette, composition, and supplied illustrations informed the build. Placeholder projects, membership forms, foundation status, and fictional metrics in the reference were not adopted as product facts. The earlier inspection limitation remains a historical record in the [editorial memory](docs/08-fontes-e-decisoes-editoriais.md).

## Evidence on Hand

- [Editorial map and open decisions](docs/README.md).
- [Canonical short manifesto](docs/01-manifesto-publico.md) and [extended interpretation](docs/02-manifesto-estendido.md).
- [Presentation and invitations](docs/03-apresentacao-e-convites.md), [community and participation](docs/04-comunidade-e-participacao.md), and [contact microcopy](docs/05-contato-e-microtextos.md): proposed public language mixed with internal notes and conditional actions.
- [Voice and terminology](docs/06-voz-e-terminologia.md) and [phrase bank](docs/07-banco-de-frases.md): language guidance and distinctions between quotations, adaptations, and new writing.
- [Sources and editorial decisions](docs/08-fontes-e-decisoes-editoriais.md), with preserved [original manifesto](docs/fontes/manifesto-original.md), [Thiago's manifesto](docs/fontes/manifesto-thiago-original.md), and [original notes](docs/fontes/notas-originais.txt).
- Owner decisions from initialization: static website, Astro, GitHub Pages at `https://embraso.com.br`, project publishing, lead capture, contributor invitations, English implementation documentation, visual continuity with improvements and animation; audience priority and intake destination left open.
- Owner decisions during implementation: authorize the first homepage, develop both reference directions concurrently, adapt wording to each audience, use common assets and canonical principles, and open on Folheto with a visible switch. Intake destinations remain unresolved.

These materials establish proposed language and product intent, not testimonials, partnerships, customer counts, impact metrics, shipped products, or security and accessibility certifications. Do not fabricate those forms of proof.

## Product Principles

Keep the six canonical Portuguese names and their order when presenting the manifesto:

1. **Tecnologia para o bem comum** — build useful tools with affected people across different contexts; recognize maintenance and fairly paid work.
2. **Autonomia para escolher** — meaningful choices about data, code, dependencies, migration, and continuity.
3. **Software livre e conhecimento compartilhado** — freedom to use, study, modify, and share, including commercial use; real permissions, maintenance, and resources matter.
4. **Clareza e escolha no que acompanhamos** — choose sources and people to follow, understand recommendation criteria and interests, and adjust or turn recommendations off without losing access to chosen follows. Preserve discovery and the ability to question automated decisions; these are principles, not shipped controls or a rejection of all algorithms.
5. **Privacidade e segurança desde o início** — privacy and proportionate protection from the outset, with maintenance and clear limits rather than absolute guarantees.
6. **Simplicidade para construir e manter** — useful choices suited to current resources, with understandable costs and dependencies, fair working conditions, and gradual autonomy.

The English explanations are implementation context, not replacement public titles or approved translations. Change the short manifesto, extended interpretation, and affected derivatives together if the principles change.

The owner approved these names and this order on 22 October 2026, replacing the earlier slogan-like titles with concrete, approachable language. The short and extended manifestos, editorial guidance, and shared website data use the same revision. Historical source titles remain unchanged; see the [editorial decision record](docs/08-fontes-e-decisoes-editoriais.md).

## Accessibility & Inclusion

- Consider people with disabilities and barriers in perception, comprehension, navigation, and interaction; do not use “accessible” merely to mean inexpensive or simple.
- Account for different devices, connection quality, income, digital familiarity, and Brazilian contexts. Avoid assuming a single typical Brazilian user.
- Preserve reading and task completion when adding animation. Respect reduced-motion preferences and do not make essential information or actions depend on animation.
- Performance and accessibility constrain the requested polish and motion. Do not claim universal device support, complete accessibility, or regulatory compliance without evaluation.
- No specific conformance target has been approved in the product brief. Establish measurable implementation acceptance criteria before claiming compliance.

## Implementation and Verification

- `src/layouts/SiteLayout.astro` owns the shared header, audience navigation, footer, metadata (including canonical URLs derived only from the configured production `site` origin), self-hosted font imports, and base themes.
- Audience-specific code is colocated under `src/components/folheto/` and `src/components/devs/`. Their `FolhetoHome.astro` and `TerminalHome.astro` own page bodies and scoped responsive styles; routes compose them through the shared shell. No legacy root-component aliases remain.
- `src/i18n/messages/pt-BR/manifesto.ts` supplies every homepage and `/manifesto/` with the canonical short manifesto. When the editorial source changes, update this public selection and verify wording and principle order together. Editorial notes and internal documents are not automatically published.
- Supplied SVG assets, derived favicon/PNG brand exports, and self-hosted Archivo/Martian Mono fonts are delivered. See [Brand exports](DESIGN.md#brand-exports) for stable public paths and source provenance. Native links and disclosures work without a client-side application runtime. Reduced motion disables authored animation and nonessential CSS transitions; cross-page view transitions are not enabled.
- Project publishing and lead capture remain intended product capabilities, not features simulated by this release. No repository URL, intake endpoint, membership workflow, CTO identity, license choice, or product inventory was invented.

### Interactive presentation

- The official pair is Folheto at `/` and Terminal at `/devs/`, with the shared manifesto at `/manifesto/`. The owner selected this animated implementation as the only website presentation; no comparison routes or generation labels remain.
- The rendered [Tern](https://stencil.so/tern) and [OMP](https://omp.sh/) pages inform visual confidence and terminal interaction. Their product claims, gradients, metrics and capabilities are not Embraso's.
- Folheto's `Scene.astro` owns the supplied fauna, scoped composition styles, and its local `scene.ts` controller. The larger static emblem sits behind the foreground fauna at reduced opacity. Capybara gait uses short eased cycles over a slow lateral drift, with no long stationary holds. The independent `motivation-reader.ts` enhances the native-radio reader under “Por que a Embraso existe?”. Six themes pair problems to face with intended changes without renaming the manifesto principles; all six readings remain available without JavaScript and in print. Scene and reader observe their own visibility and share only the global motion preference.
- Terminal’s “Manifesto, objetivos e princípios” carousel shows one of nine readings: three framing topics followed by the six canonical principles. A grouped locator, concise active-topic description and full-reading link accompany the selected command.
  Enhanced manual selection stays on `/devs/` without changing the URL fragment; previous/next keep the page position when the whole carousel fits in view. All readings remain available without JavaScript and in print.
  Autoplay types commands at 65ms per character, then dwells for 9 seconds plus 35ms per word (up to 18 seconds). Topic selection, hover, focus and touch do not pause it; only local pause/resume changes playback.
  Reduced motion shows complete commands and retains manual navigation; hidden pages and fully offscreen content suspend work. Playback is separate from the shared artwork-motion preference. No input, shell execution, submission, server connection or simulated activity exists.
- Supplied SVG pixels form the optional particle artwork. The warm flame regions continuously rise, curl and flicker after assembly; the supplied toucan remains recognizable. Sampling is capped at 1,400 particles on desktop, 600 on mobile and DPR 1.5. A shared pause button, live reduced-motion preference, visibility and intersection observers control nonessential work. Pausing or reducing terminal motion displays the complete supplied SVG.
- Amber content surfaces use a dark/cream selection treatment so selected text remains visibly distinct. Ordinary reading links and native disclosures remain usable without scripts.
- `src/components/devs/FaunaField.astro` and its local `particles.ts` own the developer artwork. `src/components/devs/command-carousel/CommandCarousel.astro` owns the reader's markup, content selection and scoped styles; its adjacent `controller.ts` owns component-local playback and lifecycle. Neither imports Folheto implementation. Only `src/pages/devs/index.astro` imports the reader and supplies it through `TerminalHome.astro`'s named `reader` slot. The carousel does not import `src/scripts/motion.ts`, read its session-storage preference or modify global motion state. That shared module still controls artwork; carousel playback and selection are not persisted. These controls do not establish a broader privacy or data-retention policy. Scripts progressively enhance static reading content. Cross-page view transitions remain disabled.

### Purpose framing revision — 22 October 2026

The owner requested replacing the generic “Livre para quê?” software-freedom explanation with reasons Embraso exists, using an earlier problem/outcome table as inspiration rather than prescribed copy. Folheto now addresses unmet everyday needs, lock-in, concentrated knowledge, opaque recommendations, unnecessary data exposure, and unsustainable complexity or costs. Terminal retains its audience-specific register and typed-topic reader; six engineering questions connect those concerns to intended decisions. Both proposal openings preserve the motivating argument, exchange and discovery, the opportunity to connect tools and knowledge with real needs, and the inseparable community/autonomy fronts before the principles. The approved manifesto names and order remain unchanged; the historical table is not a new canonical manifesto.

### Internationalization

The owner requested a working localization foundation on 22 October 2026. **Only Brazilian Portuguese (`pt-BR`) is enabled.** This is message/catalog support, not a translated website: `/`, `/devs/`, and `/manifesto/` keep their existing URLs and no language switch is published.

`src/i18n/index.ts` exposes `Locale`, `Messages`, `supportedLocales`, `defaultLocale`, `resolveLocale`, and `getMessages`. Routes explicitly choose the locale and pass it to the shared layout and page components. Unsupported locale values are rejected, including inherited object-property names; there is no silent fallback or mixed-language rendering.

Public text, titles/descriptions, image alternatives, accessible names, and dynamic control/reading announcements reference typed catalogs. `shell.ts` owns shared chrome/metadata; `manifesto.ts` owns canonical shared content; home and developer section catalogs live under `src/i18n/messages/pt-BR/{home,devs}/`, with thin composition modules. A section worker owns its leaf catalog as well as its component/controller; shared schema, registration, canonical manifesto, routes and composition remain integration-owned. Preserve reviewed rich-text structure without injecting translated HTML. Client enhancements receive only their needed labels through server-rendered data attributes, not the full editorial catalog.

Rich prose and emphasized headings use ordered `RichMessageToken` arrays from `src/i18n/rich.ts`; translated messages may change token count/order without changing templates or injecting HTML. Canonical principle and reader-option identities/cardinality remain constrained separately. Public hero line wrappers are derived from catalog break tokens, not one line per text fragment.

The owner's requested second pass consolidated six genuinely shared labels/actions in `src/i18n/messages/pt-BR/actions.ts`; semantic shell/section keys reference those values without creating another public namespace. Similar wording stays separate when register, destination specificity or intent differs. The sole visible normalization is the developer participation CTA, “Começar pelo manifesto” → “Comece pelo manifesto”, matching the existing public closing CTA to the same reading destination. Canonical manifesto copy is unchanged.

To add a locale: prepare complete, faithfully reviewed namespace and section catalogs satisfying `Messages`; register them in `src/i18n/index.ts`; then make an explicit route-selection/public URL decision before exposing the locale. Review translated metadata, rich text, accessible names, dynamic labels, no-JavaScript content and responsive/print behavior together. The existing editorial documents remain the source for Portuguese canonical copy.

### Feature delivery

The project-local workflow, frontend-pattern and browser-validation skills are explicitly linked in `AGENTS.md`. Superpowers is installed locally and pinned in `skills-lock.json`; its OMP adapter documents supported model selection and the browser integration. Feature work stays in a dedicated worktree; specification, planning, implementation and independent validation each use subagents. Parallel workers receive exclusive section/component/catalog files. The integration owner runs the build and runtime checks after concurrent edits settle; a low-cost image-capable worker can collect Chrome evidence, with escalation for incomplete or ambiguous results. Do not merge, push or remove the worktree without authorization.

The owner prioritizes a small, maintainable set of intent-focused E2E scenarios—not exhaustive helper, callback, message-alias or implementation-contract tests. Select visitor-visible outcomes and real regressions; add lower-level tests only for important risks those journeys cannot expose. Reuse existing infrastructure, remove temporary probes after proof, and do not install a runner merely for a documentation/catalog refactor. This policy is explicit in `AGENTS.md` and all three project workflow/frontend/browser skills.
