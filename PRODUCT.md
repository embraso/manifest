# Embraso — Product Context

<!-- impeccable:product-schema 1 -->

This is the English technical product record for the future Embraso website, not public-facing copy. It captures the owner's initialization decisions and the existing editorial constraints. The editorial collection remains the source for Portuguese wording, attribution, and the status of organizational claims.

## Platform

web

## Stack

- **Generator: Astro**, explicitly selected by the owner during initialization.
- **Delivery: a static website.** Generate publishable pages as static output; no server-rendered application is requested.
- **Hosting: Cloudflare**, published under Embraso's DNS. The exact domain or subdomain and the Cloudflare deployment service are not yet specified.
- A static frontend does not itself receive submissions. Lead capture will need a real destination or submission service; that choice remains open.
- This initialization does not install Astro, scaffold the website, configure DNS, or deploy anything. Adapter, package manager, content management, and deployment commands are not selected here.

## Users

Two audiences are supported by the editorial collection:

- People interested in helping build Embraso projects: programmers, designers, writers, educators, researchers, organizers, maintainers, and others with relevant experience. They need to understand the initiative and find a real way to contribute.
- People, collectives, and small businesses who know a concrete problem. They need to understand the proposal and, once an intake route exists, share context without being promised implementation or free consulting.

**Audience priority remains open**, as explicitly chosen by the owner during initialization. Neither group is established as the primary audience. The site must not assume programming knowledge or unlimited availability to participate.

## Product Purpose

The website will present Embraso, publish its projects, gather leads, and invite people to work on its projects. These are intended capabilities, not claims that projects or intake channels are already operating.

Embraso's editorial purpose is to bring people and knowledge together to build and sustain useful, free software, strengthening communities and gradual digital autonomy across Brazil's different realities. Community and digital autonomy are inseparable strategic fronts, not extra manifesto principles.

The internal [mission and vision](docs/interno/02-missao-e-visao.md) and [progress criteria](docs/interno/03-objetivos-e-sinais-de-progresso.md) are proposals for discussion. They emphasize practical usefulness, meaningful participation, freedom, and continuity rather than attention capture or audience growth alone. No numerical website targets have been approved.

## Positioning

Embraso connects software freedom with human proximity: useful tools developed with the people who understand the problem, and realistic paths to understand, adapt, migrate, and maintain what they use.

Autonomy does not mean isolation or rejecting every external tool. Proprietary tools, cloud services, and AI can be conscious choices when dependencies, costs, limits, and continuity are understood. This is a stated direction, not evidence of an implemented technical policy or a claim of uniqueness in the market.

## Operating Context

- **Technical implementation documentation is written in English.** Public-facing editorial copy remains Brazilian Portuguese unless the owner requests another language. Existing Portuguese editorial documents are not implementation specifications and are not translated by this initialization.
- The [editorial map](docs/README.md) is the entry point to the content collection. Use the [short manifesto](docs/01-manifesto-publico.md) for the canonical principles, the [extended manifesto](docs/02-manifesto-estendido.md) for their interpretation, and the [voice guide](docs/06-voz-e-terminologia.md) for wording.
- Public text, internal editorial notes, historical sources, and exploratory ideas coexist in the repository. Publication requires deliberate selection; do not publish all of `docs/` automatically.
- The owner's website requirements recorded here extend the earlier editorial-only planning scope. The current request is still initialization, not a request to implement the website.
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
- **Proposed editorial signature:** “Tecnologia livre. Gente por perto.”
- **Proposed descriptor:** “Software útil, feito em comunidade, para as diferentes realidades do Brasil.”
- The signature and descriptor are editorial proposals, not a formally approved campaign or evidence of an operating community.
- **Owner's visual constraint:** preserve the identity of the [supplied Claude artifact](https://claude.ai/artifact/BWKYPiNDodsXjPPY1c81dp#page-dcb81aee8d83), improve on it, and pursue a slick, polished result with animation wherever appropriate. This records the requested direction; it does not establish a palette, font selection, component system, or visual world during init.
- **Reference evidence limit:** the static fetch during initialization returned the artifact shell, not its rendered design. Earlier inspection limits and observations of a separate logo export are documented in the [editorial memory](docs/08-fontes-e-decisoes-editoriais.md). Do not treat that separate export as proof of the artifact's layout. Inspect the rendered reference or an owner-provided export before visual implementation.

## Evidence on Hand

- [Editorial map and open decisions](docs/README.md).
- [Canonical short manifesto](docs/01-manifesto-publico.md) and [extended interpretation](docs/02-manifesto-estendido.md).
- [Presentation and invitations](docs/03-apresentacao-e-convites.md), [community and participation](docs/04-comunidade-e-participacao.md), and [contact microcopy](docs/05-contato-e-microtextos.md): proposed public language mixed with internal notes and conditional actions.
- [Voice and terminology](docs/06-voz-e-terminologia.md) and [phrase bank](docs/07-banco-de-frases.md): language guidance and distinctions between quotations, adaptations, and new writing.
- [Sources and editorial decisions](docs/08-fontes-e-decisoes-editoriais.md), with preserved [original manifesto](docs/fontes/manifesto-original.md), [Thiago's manifesto](docs/fontes/manifesto-thiago-original.md), and [original notes](docs/fontes/notas-originais.txt).
- Owner decisions from initialization: static website, Astro, Cloudflare under Embraso DNS, project publishing, lead capture, contributor invitations, English implementation documentation, visual continuity with improvements and animation; audience priority and intake destination left open.

These materials establish proposed language and product intent, not testimonials, partnerships, customer counts, impact metrics, shipped products, or security and accessibility certifications. Do not fabricate those forms of proof.

## Product Principles

Keep the six canonical Portuguese names and their order when presenting the manifesto:

1. **Liberdade por padrão** — freedom to use, study, modify, and share; maintenance and resources matter.
2. **Soberania por escolha** — meaningful choices about data, code, dependencies, migration, and continuity.
3. **Segurança por princípio** — privacy and proportionate protection from the outset, without absolute guarantees.
4. **Pragmatismo com propósito** — useful choices now that preserve options for tomorrow.
5. **Tecnologia para o bem comum** — build with affected people across different contexts; recognize maintenance and fairly paid work.
6. **Transparência e liberdade algorítmica** — understandable criteria, choices, and the ability to question automated decisions; relationships rather than attention traps.

The English explanations are implementation context, not replacement public titles or approved translations. Change the short manifesto, extended interpretation, and affected derivatives together if the principles change.

## Accessibility & Inclusion

- Consider people with disabilities and barriers in perception, comprehension, navigation, and interaction; do not use “accessible” merely to mean inexpensive or simple.
- Account for different devices, connection quality, income, digital familiarity, and Brazilian contexts. Avoid assuming a single typical Brazilian user.
- Preserve reading and task completion when adding animation. Respect reduced-motion preferences and do not make essential information or actions depend on animation.
- Performance and accessibility constrain the requested polish and motion. Do not claim universal device support, complete accessibility, or regulatory compliance without evaluation.
- No specific conformance target has been approved in the product brief. Establish measurable implementation acceptance criteria before claiming compliance.
