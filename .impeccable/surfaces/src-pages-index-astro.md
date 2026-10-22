---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/devs/index.astro","src/components/folheto/FolhetoHome.astro","src/components/folheto/Scene.astro","src/components/devs/TerminalHome.astro","src/components/devs/FaunaField.astro","src/components/devs/command-carousel/CommandCarousel.astro"]
---

# Embraso homepages

Mode: Persuade. Official public entry `/`; developer entry `/devs/`; shared public reading `/manifesto/`. The owner selected “Liberdade se constrói junto.” and the Folheto/Terminal visual worlds, then made this animated implementation the sole official site. Keep current editorial data and owner changes intact.

## Direction contract

THESIS: Freedom becomes tangible through shared knowledge. Folheto explains it through a living print composition and four-freedom reader; Terminal presents the actual proposal through a typed-topic carousel. Refuse fabricated activity or a decorative fake shell.

OWN-WORLD: Paper, forest and amber; condensed Archivo for public display, Martian Mono for technical display; supplied vector and pixel fauna. Flat ruled reading surfaces, not neon product cards. OMP and Tern inform visual confidence and interaction, never Embraso's product claims.

STORY: Understand the initiative and inseparable community/autonomy fronts, read the six canonical principles, and discover the value of technical and nontechnical knowledge. Read the real manifesto or explore local content; no unconfirmed intake or membership action.

FIRST VIEWPORT: Public: selected signature at left, manifesto action, supplied fauna at right; the flame remains completely static and unmasked while toucan/capybara/ipê move. Developer: larger signature, real supplied-emblem particles with continuous flame-only flicker, a prominent route into the substantial command reader. Mobile puts reading and commands before decorative art. Audience and motion controls stay visible in the header.

FORM: Code-led expansion of the owner-selected Folheto and Terminal worlds. The owner requested richer animal motion, high-contrast amber-surface text selection, and removal of comparison routes/labels. The later carousel decision replaces prompt-connected autocomplete with automatic typing, reading pauses and manual topic navigation. No new visual-world lottery or generated raster.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Motion and behavior

Folheto's isolated Scene runs bounded foreground fauna motion for (28s), including a short repeating capybara gait over slow drift. A large, low-opacity supplied emblem forms the static background; it has no clip or transform animation. Scene visibility controls only scene motion. The separate freedom reader controls its own selection wipe and visibility; all readings remain visible without JavaScript.

Developer particles sample the supplied SVG. Finite assembly gives way to warm-flame rise/curl/flicker; the recognizable toucan is retained. Maximum 1,400 desktop/600 mobile particles, DPR 1.5, one RAF. Pause, live reduced motion, document visibility and intersection state stop nonessential work; the complete SVG is the static fallback. No cross-document view transitions.

The local reader cycles through manifesto, comunidade, autonomia and principio 1–6. Commands type at 65ms per character, followed by a word-weighted dwell capped at 18 seconds and an amber progress rule. Manual topic/previous/next selection pauses; hover and keyboard reading focus suspend movement. Reduced motion, shared pause, hidden-document and offscreen state cancel work and show complete commands. No input, dropdown, history, shell execution or network submission remains. Every article is available without JavaScript and in print; native disclosures and real reading links remain available.

## Implementation

`src/layouts/SiteLayout.astro` and `src/styles/global.css` own the shared shell. `src/components/folheto/` owns FolhetoHome, the Scene component and local scene/reader controllers; `src/components/devs/` owns TerminalHome, FaunaField, particles and the nested command-carousel component/controller. Only `src/scripts/motion.ts` is shared motion infrastructure. `src/data/manifesto.ts` is shared public content and follows the approved titles, order and copy in `docs/01-manifesto-publico.md`, beginning with “Tecnologia para o bem comum”. Supplied SVGs stay under `assets/`; font notices ship under `public/licenses/`. Internal editorial notes and source archives are not automatically published.
