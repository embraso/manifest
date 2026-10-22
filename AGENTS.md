# Embraso — project context and working conventions

## What we are building

A language and direction reference for Embraso's future public presentation: an initiative to bring people together, build useful free software, strengthen communities, and expand digital autonomy across Brazil's different realities.

The identity combines a position on software freedom, privacy, the common good, and meaningful choice with a warm, concrete, approachable Brazilian voice. Two efforts move together: community-building and gradual digital autonomy. The proposed editorial signature is “Tecnologia livre. Gente por perto.”; it is not a formally approved campaign.

**Current stage: documentation, synthesis, and editorial development. Do not build the website.** Do not create components, install frameworks, choose a stack, publish pages, or implement forms without a new explicit request.

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

## Editorial commitments

1. Preserve the six names and their order: **Liberdade por padrão; Soberania por escolha; Segurança por princípio; Pragmatismo com propósito; Tecnologia para o bem comum; Transparência e liberdade algorítmica.** The two strategic efforts are not additional principles.
2. Write editorial content in Brazilian Portuguese, with clarity, warmth, and concrete consequences. Avoid corporate pitches, forced slang, exclusionary nationalism, and guilt about not contributing. Include people who do not code; maintenance and paid work are part of the vision.
3. Distinguish principles, intentions, confirmed facts, personal accounts, hypotheses, and unresolved decisions. Legal status, licenses, funding, team/CTO, channels, products, and metrics are not confirmed merely because they appear in a source.
4. Free software permits commercial use and does not mean zero cost. Source visibility alone does not establish software freedom. Do not resolve licensing or private-development tensions through ambiguous wording.
5. Do not discard material that does not belong in the manifesto. Preserve story, political criticism, values, hypotheses, and ideas in the appropriate internal editorial document, with context and attribution. An unsupported thesis can remain open to discussion but does not become a public fact through repetition.
6. Do not turn ideas into a portfolio or roadmap. Do not fabricate contacts, groups, forms, donations, testimonials, or response promises. Interface messages must describe only actual, confirmed actions.
7. Internal material and editorial notes are not page copy. Do not automatically publish all of `docs/`. The “interno” classification does not provide confidentiality: do not store secrets, credentials, or personal accounts here without authorization.

## Sources and visual reference

The two manifestos were provided in `C:/dev/embraso/`, accessible in this environment as `/mnt/c/dev/embraso/`. Complete portable copies are available as the [original manifesto](docs/fontes/manifesto-original.md), [Thiago's text](docs/fontes/manifesto-thiago-original.md), and [notes](docs/fontes/notas-originais.txt). Preserve these records and the external originals; record new decisions in the synthesis documents rather than silently rewriting the sources.

The reference for a future website is the [Claude artifact](https://claude.ai/artifact/BWKYPiNDodsXjPPY1c81dp#page-dcb81aee8d83). Rendered inspection was not possible during the initial documentation work; the limitation is recorded in the editorial decisions document. The externally available logo HTML is a separate export, not production code or evidence of that page's layout. Do not infer unobserved interface details or content.

GNU, Debian, Agile, Mozilla, and Cluetrain are references for structure and values, with primary sources linked in the editorial decisions document. Do not import their products, scale, policies, or history as Embraso's own.

## Evolution and verification

Read the relevant section before editing. Reuse existing documents, keep the short manifesto consistent with its extended interpretation, update affected references, and preserve identifiable disagreements. Record the origin and publication conditions of new information. Follow the language policy when creating or changing documentation; do not translate the Portuguese editorial collection as part of implementation work.

For documentation changes, verify paths, relative links, principle names, quotation fidelity, and separation between notes and public copy. For the skill, check frontmatter, location, and OMP loading when available. Do not create test infrastructure or an application merely to validate Markdown.

If a later request authorizes building the website, first verify the visual reference, selected public content, actual availability of offers, and interaction destinations. A new implementation request changes the implementation scope, not these truthfulness requirements.
