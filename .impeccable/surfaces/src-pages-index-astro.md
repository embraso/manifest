---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/devs/index.astro","src/components/folheto/FolhetoHome.astro","src/components/folheto/Scene.astro","src/components/devs/TerminalHome.astro","src/components/devs/FaunaField.astro","src/components/devs/command-carousel/CommandCarousel.astro"]
---

# Embraso homepages

Mode: Persuade. Official public entry `/`; developer entry `/devs/`; shared public reading `/manifesto/`. The owner selected “Liberdade se constrói junto.” and the Folheto/Terminal visual worlds, then made this animated implementation the sole official site. Keep current editorial data and owner changes intact.

## Direction contract

THESIS: Freedom becomes tangible through shared knowledge and useful tools. Folheto pairs problems to face with intended changes in its motivation reader; Terminal carries the same concerns into engineering questions and presents the manifesto through a typed-topic carousel. Refuse fabricated activity or a decorative fake shell.

OWN-WORLD: Paper, forest and amber; condensed Archivo for public display, Martian Mono for technical display; supplied vector and pixel fauna. Flat ruled reading surfaces, not neon product cards. OMP and Tern inform visual confidence and interaction, never Embraso's product claims.

STORY: Understand the initiative and inseparable community/autonomy fronts, read the six canonical principles, and discover the value of technical and nontechnical knowledge. Read the real manifesto or explore local content; no unconfirmed intake or membership action.

FIRST VIEWPORT: Public: selected signature at left, manifesto action, supplied fauna at right; the flame remains completely static and unmasked while toucan/capybara/ipê move. Developer: larger signature, a prominent route into the substantial command reader, and a visible EmbrasoFetch emblem. Each eligible page load randomly selects the original SVG-particle animation or the pixelated 3D emblem rotating around its vertical axis; that choice stays fixed for the visit. Mobile puts reading and commands before decorative art. Audience and motion controls stay visible in the header.

FORM: Code-led expansion of the owner-selected Folheto and Terminal worlds. The owner requested richer animal motion, high-contrast amber-surface text selection, and removal of comparison routes/labels. The later carousel decision replaces prompt-connected autocomplete with automatic typing, reading pauses and manual topic navigation. No page-level visual-world lottery or generated raster is introduced.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Motion and behavior

Folheto's isolated Scene runs bounded foreground fauna motion for (28s), including a short repeating capybara gait over slow drift. A large, low-opacity supplied emblem forms the static background; it has no clip or transform animation. Scene visibility controls only scene motion. The separate motivation reader controls its own selection wipe and visibility. Six radio choices change substantive problem/outcome readings; all readings remain visible without JavaScript and in print.

On `/devs/`, the supplied SVG is rendered as the static emblem first. One equal-probability decision selects either the original SVG-particle flame animation or a pixelated colored-voxel emblem with continuous vertical-axis rotation. Only the chosen controller loads, and Three.js loads only for the voxel result; no control or persistence can change the selection during that visit. No JavaScript, reduced motion or selected-enhancement failure leaves the SVG visible. The selected animation respects shared motion pause, document visibility and intersection state.

The local reader autoplays manifesto, comunidade, autonomia and principio 1–6. Commands type at 65ms per character, followed by a word-weighted dwell capped at 18 seconds and an amber progress rule. Topic/previous/next selection retains playback mode; pointer movement, hover, focus and touch never pause it. Its own pause control and reduced-motion preference are independent of shared artwork motion and session storage. Hidden-document and fully offscreen state suspend background work without reacting to incidental intersection updates. No input, dropdown, history, shell execution or network submission remains. Every article is available without JavaScript and in print; native disclosures and real reading links remain available.

## Implementation

`src/layouts/SiteLayout.astro` and `src/styles/global.css` own the shared shell. `src/components/folheto/` owns FolhetoHome, the Scene component and local scene/reader controllers; `src/components/devs/` owns TerminalHome, FaunaField, the original `particles.ts`, the lazy `logo-preview-3d.ts` controller and the nested command-carousel component/controller. FaunaField renders the supplied SVG as the fallback and randomly selects one animator per eligible page visit; the selected voxel controller loads Three.js only on its path. Only `src/pages/devs/index.astro` imports the reader, placing it in the developer body through its named slot. Only `src/scripts/motion.ts` is shared motion infrastructure; the carousel's playback state remains local. `src/i18n/messages/pt-BR/manifesto.ts` is shared public content and follows the approved titles, order and copy in `docs/01-manifesto-publico.md`, beginning with “Tecnologia para o bem comum”. Section-owned locale catalogs supply other public and accessible text; shared action labels, schema and locale registration are integration-owned. Only `pt-BR` ships with unchanged routes. Supplied SVGs stay under `assets/`; font notices ship under `public/licenses/`. Internal editorial notes and source archives are not automatically published.
