---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/devs/index.astro","src/components/FolhetoHome.astro","src/components/TerminalHome.astro"]
---

# Embraso homepages

Mode: Persuade. Official public entry `/`; developer entry `/devs/`; shared public reading `/manifesto/`. The owner selected “Liberdade se constrói junto.” and the Folheto/Terminal visual worlds, then made this animated implementation the sole official site. Keep current editorial data and owner changes intact.

## Direction contract

THESIS: Freedom becomes tangible through shared knowledge and useful tools. Folheto pairs problems to face with intended changes in its motivation reader; Terminal carries the same concerns into engineering questions and presents the manifesto through a typed-topic carousel. Refuse fabricated activity or a decorative fake shell.

OWN-WORLD: Paper, forest and amber; condensed Archivo for public display, Martian Mono for technical display; supplied vector and pixel fauna. Flat ruled reading surfaces, not neon product cards. OMP and Tern inform visual confidence and interaction, never Embraso's product claims.

STORY: Understand the initiative and inseparable community/autonomy fronts, read the six canonical principles, and discover the value of technical and nontechnical knowledge. Read the real manifesto or explore local content; no unconfirmed intake or membership action.

FIRST VIEWPORT: Public: selected signature at left, manifesto action, supplied fauna at right; the flame remains completely static and unmasked while toucan/capybara/ipê move. Developer: larger signature, real supplied-emblem particles with continuous flame-only flicker, a prominent route into the substantial command reader. Mobile puts reading and commands before decorative art. Audience and motion controls stay visible in the header.

FORM: Code-led expansion of the owner-selected Folheto and Terminal worlds. The owner requested richer animal motion, high-contrast amber-surface text selection, and removal of comparison routes/labels. The later carousel decision replaces prompt-connected autocomplete with automatic typing, reading pauses and manual topic navigation. No new visual-world lottery or generated raster.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Motion and behavior

Folheto runs two bounded coordinated fauna circuits; its flame is static, with no clip or transform animation and no decorative illustration rules. Six motivation radio choices change substantive problem/outcome readings; all readings remain visible without JavaScript and in print.

Developer particles sample the supplied SVG. Finite assembly gives way to warm-flame rise/curl/flicker; the recognizable toucan is retained. Maximum 1,400 desktop/600 mobile particles, DPR 1.5, one RAF. Pause, live reduced motion, document visibility and intersection state stop nonessential work; the complete SVG is the static fallback. No cross-document view transitions.

The local reader autoplays manifesto, comunidade, autonomia and principio 1–6. Commands type at 65ms per character, followed by a word-weighted dwell capped at 18 seconds and an amber progress rule. Topic/previous/next selection retains playback mode; pointer movement, hover, focus and touch never pause it. Its own pause control and reduced-motion preference are independent of shared artwork motion and session storage. Hidden-document and fully offscreen state suspend background work without reacting to incidental intersection updates. No input, dropdown, history, shell execution or network submission remains. Every article is available without JavaScript and in print; native disclosures and real reading links remain available.

## Implementation

`src/layouts/SiteLayout.astro` and `src/styles/global.css` own the shared shell. `src/components/FolhetoHome.astro`, `src/components/TerminalHome.astro` and `src/scripts/{motion,folheto,particles}.ts` own their page bodies and artwork enhancements. The isolated `src/components/devs/command-carousel/` directory contains `CommandCarousel.astro` (markup and scoped styles) and `controller.ts` (local playback). Only `src/pages/devs/index.astro` imports the reader, placing it in the developer body through its named slot. `src/data/manifesto.ts` is shared public content and follows the approved titles, order and copy in `docs/01-manifesto-publico.md`, beginning with “Tecnologia para o bem comum”. Supplied SVGs stay under `assets/`; font notices ship under `public/licenses/`. Internal editorial notes and source archives are not automatically published.
