---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/devs/index.astro","src/components/FolhetoHome.astro","src/components/TerminalHome.astro"]
---

# Embraso homepages

Mode: Persuade. Public entry `/`; developer entry `/devs/`. User selected Folheto first with a visible audience switch. Both are complete static Astro pages using the same canonical manifesto data. No live contact, membership, project inventory, license, CTO, or repository has been confirmed; do not fabricate these.

## Direction contract

THESIS: One initiative, two reading registers. Everyday software freedom on Folheto; maintainability and meaningful technical choices on Terminal. Refuse a generic startup product grid and simulated operational proof.

OWN-WORLD: Preserve the inspected Claude artboards A and B. Folheto: cream paper, forest-green condensed Archivo display, amber marker emphasis, large supplied toucan flame, bunting and print rules. Terminal: deep forest ground, cream Martian Mono, amber commands, pixel fauna, file headings and terminal-style reading panels; no neon glow.

STORY: Understand Embraso's intent; connect community with autonomy; read the six principles; explore ways different knowledge can matter. Primary action reads the actual manifesto; secondary actions navigate to real on-page content.

FIRST VIEWPORT: Shared logo/header and visible audience links, slim bunting. Folheto: oversized left headline and manifesto action, right green printed emblem, generous cream space. Terminal: left concise technical headline and action, right truthful editorial terminal with supplied mark and pixel toucan. Mobile stacks the composition without suppressing either action or audience choice.

FORM: User-pinned A · Folheto and B · Terminal from the rendered reference; both directions are already selected, so this is an expansion of supplied visual authority, not a new-world lottery. Code-led implementation using supplied SVGs; the Persuade mode guidance was loaded directly under the pinned-direction path in new-work.md.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Implementation boundary

Parent owns Astro installation/configuration, `src/layouts/SiteLayout.astro`, shared header/footer and global CSS, `src/data/manifesto.ts`, routes `/`, `/devs/`, `/manifesto/`, common assets and self-hosted fonts. Agents each own their homepage component and its scoped CSS; never edit parent or other variant files.

Components render main only (no html/head/body or header/footer). Public: `src/components/FolhetoHome.astro`. Developer: `src/components/TerminalHome.astro`. Each imports `{ principles }` from `../data/manifesto`; data shape `{ title: string, lead: string, body: string }[]` in canonical order. Each main has `id="conteudo"`, sections `id="proposta"`, `id="manifesto"`, `id="participacao"`. Primary CTA `/manifesto/`; secondary CTA `#participacao`. On-page manifesto can use native details/summary with full data. No fake submission controls or disabled CTAs. Clearly distinguish possibilities from launched projects; omit invented portfolio. Include initiative-stage context naturally, without a disclaimer wall.

Global fonts: `--font-body` and `--font-display`: `'Archivo Variable', 'Archivo', sans-serif` (variable wdth 62–125, wght 100–900); `--font-mono`: `'Martian Mono Variable', 'Martian Mono', monospace`. Global colors: `--paper:#f4eedf`, `--green:#13522f`, `--yellow:#fdb112`, `--orange:#f56d1d`, `--blue:#086797`, `--dark:#0b1d13`, `--cream:#fbf7ec`, `--mint:#80b99a`. Body 16px/1.65. Main max-width 1200px, with 40px desktop / 20px mobile gutters. Helpers `.container`, `.button`, `.button-secondary`, `.text-link` provided. Light has body[data-audience="public"], dark body[data-audience="devs"]. Shared header around 146px including switch and bunting.

Assets imported from `../../assets/<hash>.svg` and used as `asset.src` in img elements (Astro Vite imports). Relevant hashes: colored horizontal logo `e6712f9ec67bfc5e5e1536d9b4377830.svg`; cream horizontal logo `58fa12401e77dc41cc7e67952d136fdf.svg`; flame/toucan emblem only `b084774a04a4acde15a270ee03518180.svg`; flying toucan `18b51d99adf971345c6d3e2da4ff6e2c.svg`; capybara `64e6db346ad8c01e777f7cf3f3a36383.svg`; ipe tree `77b83da13ccc31cb0f862276cf552fac.svg`; pixel capybara `aa3df8c60c0205b36b599de7c17c2d7b.svg`; pixel toucan `458818d47ccc166fc7808f7bacf54160.svg`. Sources remain untouched. No external font services in shipped code.

Both reference artboards were rendered and inspected at full-window scale during implementation. Review captures are development-only evidence, not shipping assets or public copy. Preserve the chosen visual traits without importing the reference's placeholder content or unconfirmed operational claims.
