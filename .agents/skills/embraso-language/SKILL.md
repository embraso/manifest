---
name: embraso-language
description: "Write, review, and organize Embraso's Brazilian Portuguese language across its manifesto, presentation, community, contact, phrases, story, mission, vision, goals, and values. Use to maintain a consistent verbal identity and keep public copy grounded in the canonical catalogs, including during authorized website work."
---

# Embraso language

## Purpose and language

Combine software freedom with human connection: useful software, community, and gradual digital autonomy across Brazil's different realities. Write with warmth, clarity, and conviction, without pitch language, guilt about not participating, or invented promises.

These skill instructions and other implementation documentation are in English. The owner's editorial collection, including internal story and strategy documents, remains in Brazilian Portuguese; it lives outside the repository and is read-only for agents — ask the owner when background is needed. Produce Brazilian Portuguese copy unless explicitly requested otherwise; preserve Portuguese quotations, examples, canonical names, and file paths.

## Sources

Canonical copy lives in the repository catalogs. The editorial collection lives outside the repository and is read-only for agents; ask the owner when extended narrative, voice decisions, or internal records are needed.

| Task | Source |
| --- | --- |
| Six principle names and order, introduction, invitation, manifesto UI | `src/i18n/messages/pt-BR/manifesto.ts` |
| Shared navigation, footer, and signature strings | `src/i18n/messages/pt-BR/shell.ts` and `actions.ts` |
| Folheto copy | `src/i18n/messages/pt-BR/home/` |
| Terminal copy | `src/i18n/messages/pt-BR/devs/` |
| Extended narrative, voice and terminology, phrase bank, internal records | The owner's external editorial collection; ask the owner |

## Method

1. Identify the audience, surface, intent, and whether the information is a principle, intention, fact, account, or hypothesis. When no material user decision is required, follow the catalog conventions already in place.
2. Choose the appropriate source. Do not put the entire story, organizational plan, or licensing discussion in the manifesto. Preserve remaining material with the owner in the external editorial collection instead of forcing it into publication; do not erase perspectives because they do not fit a publication.
   Preserve the two-source argument before listing principles or skills: Thiago's motivating narrative explains why dedicate effort, consumption versus exchange and unexpected discovery, and the opportunity to connect available tools and knowledge in Brazil and abroad with real problems. Then show community-building and gradual autonomy as inseparable fronts; the original manifesto's criteria explain how to build and sustain. Follow the voice guide's sequence and phrase bank's labeled adaptations; use the canonical public introduction when presenting the manifesto. Condense for short surfaces, not into a generic principle-first pitch. Community relationships and learning are purposes, not a funnel into tasks. This editorial architecture does not establish agreement between authors.
3. Write one strong idea, a concrete explanation, and, when appropriate, an invitation. Selected signature: “Liberdade se constrói junto.” Use it where appropriate, not in every piece. Explain the intent to bring people together to create useful, free software and make the initiative's stage clear.
4. Separate usable copy from editorial notes. Do not automatically publish whole files, internal material, or historical sources. “Internal” is not access control: do not add secrets or personal data without authorization.
5. Review accuracy, warmth, and consistency. Deliver the text, its location, and only the unresolved issues that prevent publication; do not turn every sentence into a public disclaimer.

## Invariants

- Present the six principle names and their order exactly as `manifesto.ts` defines them; never restate the list in guidance or code — the catalog is canonical. This rule governs presentation, not historical source headings or literal quotations.
- Lead with concrete possibilities and positive commitments in accessible language; explain dependencies and limits calmly, without enemies or purity tests. When writing about recommendations and tracking, cover choosing what to follow, understanding why content appears, changing or turning recommendations off, and contesting automated decisions — without implying such controls are already delivered. Do not name companies as a substitute for explaining the problem, reject all algorithms, or claim these controls exist.
- Use Brazilian Portuguese for editorial output; “queremos” and “defendemos” express intention and position. Use “temos”, “oferecemos”, and “já fazemos” only with confirmation. Do not speak for a community as if consensus had been recorded.
- Free software is not necessarily free of charge; source visibility is insufficient; commercial use is compatible with software freedom. Do not choose a license, legal status, funding model, or private-development policy through wording alone.
- Autonomy is not isolation. Proprietary tools, cloud services, and AI can be conscious choices, with costs, risks, and continuity options. Security and privacy are not absolute guarantees.
- Community includes people who do not code. Knowledge of the problem and maintenance have value; collaboration does not presume unpaid work, an available position, or unlimited availability.
- Political criticism can be firm. Do not turn predictions, accusations, third-party metrics, or personal recollections from the sources into established facts. Preserve context and disagreements with the owner rather than neutralizing them for convenience.
- Do not invent products, a team, a CTO, numbers, partnerships, email addresses, channels, deadlines, or policies. A submission CTA requires a real destination; a success message requires a confirmed action.
- A literal quotation preserves its wording and source. A rewrite is an adaptation; a newly written phrase is a new proposal. Do not attribute Embraso-specific commitments to external authors.
- Authorized website implementation is governed by the repository `AGENTS.md` and the product/design contract in `embraso-frontend-patterns`. This skill governs language, not new flows or operational authority; do not publish placeholder claims from the visual reference.

## Before finishing

Check the text against `manifesto.ts` and the owner's voice guidance. If the direction changed, tell the owner; if you added story, an idea, or a disagreement, keep it referencable in the owner's external editorial collection. Verify local links and the conditions supporting claims. Do not edit historical copies to fit the narrative.
