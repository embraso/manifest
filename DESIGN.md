---
name: Embraso
description: One visual family in two reading registers, A · Folheto and B · Terminal.
colors:
  paper: "#f4eedf"
  green: "#13522f"
  yellow: "#fdb112"
  orange: "#f56d1d"
  blue: "#086797"
  dark: "#0b1d13"
  cream: "#fbf7ec"
  mint: "#80b99a"
  terminal-panel: "#09190f"
  terminal-line: "#365542"
  terminal-muted: "#b9c9bb"
typography:
  display-public:
    fontFamily: "'Archivo Variable', 'Archivo', sans-serif"
    fontSize: "clamp(4.5rem, 8.2vw, 6rem)"
    fontWeight: 850
    lineHeight: 0.9
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 62"
  headline-public:
    fontFamily: "'Archivo Variable', 'Archivo', sans-serif"
    fontSize: "clamp(2.75rem, 4.6vw, 4.5rem)"
    fontWeight: 850
    lineHeight: 0.99
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 62"
  title-public:
    fontFamily: "'Archivo Variable', 'Archivo', sans-serif"
    fontSize: "clamp(1.625rem, 2.5vw, 2rem)"
    fontWeight: 750
    lineHeight: 1.15
    fontVariation: "'wdth' 75"
  display-terminal:
    fontFamily: "'Martian Mono Variable', 'Martian Mono', monospace"
    fontSize: "clamp(2.25rem, 3.8vw, 3.6rem)"
    fontWeight: 750
    lineHeight: 1.16
    letterSpacing: "-0.04em"
  headline-terminal:
    fontFamily: "'Martian Mono Variable', 'Martian Mono', monospace"
    fontSize: "clamp(1.7rem, 2.65vw, 2.35rem)"
    fontWeight: 650
    lineHeight: 1.25
    letterSpacing: "-0.035em"
  body:
    fontFamily: "'Archivo Variable', 'Archivo', sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  body-reading:
    fontFamily: "'Archivo Variable', 'Archivo', sans-serif"
    fontSize: "17px"
    lineHeight: 1.65
  label:
    fontFamily: "'Martian Mono Variable', 'Martian Mono', monospace"
    fontSize: "10px"
    letterSpacing: "0.035em"
rounded:
  rectangular: "0"
  audience: "3px"
spacing:
  inline-small: "12px"
  inline: "16px"
  gutter-mobile: "20px"
  inset: "24px"
  gap: "32px"
  gutter-desktop: "40px"
  section-public: "6rem"
components:
  button-primary:
    backgroundColor: "{colors.green}"
    textColor: "{colors.cream}"
    rounded: "{rounded.rectangular}"
    padding: "13px 22px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.green}"
    rounded: "{rounded.rectangular}"
    padding: "13px 22px"
  terminal-button-primary:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.dark}"
    rounded: "{rounded.rectangular}"
    padding: "13px 17px"
  terminal-button-primary-hover:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.dark}"
  terminal-button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.cream}"
    rounded: "{rounded.rectangular}"
    padding: "13px 17px"
  audience-selected-public:
    backgroundColor: "{colors.green}"
    textColor: "{colors.cream}"
    rounded: "{rounded.audience}"
    padding: "6px 12px"
  audience-selected-terminal:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.dark}"
    rounded: "{rounded.audience}"
    padding: "6px 12px"
  reading-panel:
    backgroundColor: "{colors.terminal-panel}"
    textColor: "{colors.cream}"
    rounded: "{rounded.rectangular}"
---

# Design System: Embraso

## Overview

**Creative North Star: "A · Folheto / B · Terminal"**

One initiative speaks through two user-selected reading registers. Folheto treats the screen as warm printed paper: narrow forest-green display type, amber marker emphasis, generous margins and supplied Brazilian fauna. Terminal translates the same identity into deep forest surfaces, cream monospaced headings, amber actions and bordered editorial files. The shared family is material, direct and human rather than glossy or neon.

Both registers use the supplied SVG identity and illustrations, self-hosted variable fonts, explicit rules and rectangular surfaces. Their expressive illustration and typography coexist with ordinary links and native disclosures; the technical register is a reading environment, not a simulated interactive shell. The public manifesto uses the paper register with a quieter long-form measure.

**Key Characteristics:**
- Forest, paper and amber connect both registers.
- Condensed Archivo display and Martian Mono technical headings have distinct jobs.
- Flat print plates, ruled lists and file panels establish structure without shadows.
- Supplied vector fauna retain their original identity; pixel fauna belong to Terminal.
- Real navigation, native disclosures and visible keyboard focus remain usable without animation.

## Colors

The source palette balances forest ink and warm paper with the supplied identity's amber, orange, blue and mint.

### Primary
- **Forest green** (`green`): public text, actions, print plates, manifesto band and footer.
- **Amber** (`yellow`): public marker emphasis and closing ground; technical actions, emphasized words, disclosure states and selection.

### Secondary
- **Mint** (`mint`): technical secondary emphasis, numbering and supporting details.

### Tertiary
- **Orange** (`orange`) and **blue** (`blue`): supplied identity, palette strips and bunting. Blue also supplies the default keyboard focus outline; neither is a substitute body-text color.

### Neutral
- **Paper** (`paper`): public page ground.
- **Cream** (`cream`): reversed type and technical primary text.
- **Deep forest** (`dark`): technical page ground and amber-action text.
- **File ground**, **file rule** and **muted technical text** (`terminal-panel`, `terminal-line`, `terminal-muted`): technical panel separation and secondary reading hierarchy.

**The Shared Ink Rule.** Keep the forest/paper/amber relationship recognizable in both registers; use the other supplied colors for identity and supporting detail rather than an unrelated theme.

Selection uses amber with deep-forest text in both registers. Translucent current-color rules separate public content; cream rules separate the reversed public manifesto. Literal local hover and supporting tones remain implementation details, not an expanded brand palette.

## Typography

**Display and body font:** Archivo Variable, with Archivo and sans-serif fallbacks. **Technical heading and label font:** Martian Mono Variable, with Martian Mono and monospace fallbacks. Both are self-hosted through the layout's Fontsource imports; no external font service is required.

Archivo's narrow width axis creates the printed voice without horizontally transforming text. Martian Mono changes the reading register, while long technical paragraphs remain Archivo for a comfortable measure. The frontmatter records the desktop roles; responsive changes belong to Layout.

### Hierarchy
- **Public display:** uppercase, heavy and narrow; the final human line is smaller than the main headline, with an inline amber mark.
- **Public headline:** the same narrow uppercase family at section scale. Emphasis within headings stays upright, not italic.
- **Public title:** moderately condensed subheadings for ruled editorial rows and paired columns.
- **Technical display and headline:** mixed case, tight tracking and compact leading; amber or mint selectively distinguishes a phrase.
- **Body:** regular Archivo; public introductory text increases to (1.125rem) with (1.55) leading. Technical paragraphs use (1.7) leading, commonly constrained to (48–68ch).
- **Reading body:** the manifesto's centered article uses `body-reading`, returning to (16px) on small screens. Its introduction and section headings remain Archivo rather than adopting the homepage's all-uppercase display treatment.
- **Labels:** mono utility text, file names, edition information and tabular principle numbers. These serve actual navigation or document metadata, not generic decorative eyebrows.

**The Two Registers Rule.** Use narrow Archivo for Folheto display and Martian Mono for Terminal headings; do not turn technical body prose into a wall of monospace.

## Layout

The shared centered container caps at (1200px), with desktop gutters of (40px) per side and small-screen gutters of (20px). The header has a slim utility/audience row, a logo/navigation row and decorative bunting. Navigation stays visible; it wraps below the logo rather than becoming a scripted menu.

Public layouts pair editorial copy with an illustration or contrasting print plate, then use ruled two-column text and definition-list rows. Public sections commonly use `section-public` spacing. At (900px), gaps and the plate contract; at (640px), major grids stack, the plate centers with a (25rem) cap, paired rows become vertical, and section padding commonly reduces to (3.5rem). The freedom strip becomes a two-column text grid instead of a compressed horizontal row.

Terminal starts with equal hero columns, then asymmetric text/file pairs and ruled engineering rows. At (1050px), gaps and file details tighten; at (760px), columns stack, panel width caps at (550px), and section padding becomes (54px). At (380px), hero actions stack full-width and internal file padding reduces. A wide-screen (1440px) adjustment increases the hero gap. The shared header/footer and manifesto adapt at (700px).

The manifesto page caps at (1000px), with an article measure of (740px). Numbered principles remain fully expanded reading sections, not disclosures. Mobile preserves the article, audience choice and real actions rather than hiding content.

## Elevation & Depth

The system has no box-shadow vocabulary. Depth comes from paper-to-forest reversals, subtly darker file grounds, thin dividing rules, print registration corners and illustration placement. Pixel fauna sit at panel edges without implying a floating application window.

**The Flat Material Rule.** Distinguish surfaces with ink, ground and rules rather than shadows or neon glow.

Motion is limited to a one-time supplied-toucan entrance, smooth anchor scrolling and short shared-button color transitions. Folheto's arrival lasts (1.6s); Terminal's lasts (800ms), using the shared outward easing. Reduced motion removes authored animations and transitions and restores automatic scrolling. Cross-page view transitions are not enabled; no content or action depends on an entrance effect.

## Shapes

Actions, reading panels, print plates and ruled content use square corners. The audience switch alone has a small `audience` radius. Circular terminal dots and freedom-strip separators are local motifs, not a pill-card system. One-pixel rules dominate; the long-form manifesto uses stronger (3px) opening and closing rules.

Preserve the supplied SVG logos, flame/toucan emblem, flying toucan, capybara and ipê; use their pixel counterparts in the technical register. Decorative fauna have empty alternative text, while identity-bearing images have descriptive alternatives. Do not replace these assets with emoji or an unrelated icon style.

## Components

### Actions and text links

Confident, rectangular links lead to actual reading or on-page destinations. The public primary uses forest/cream with a (48px) minimum height and darkens on hover. Its secondary variant is transparent with a current-color border and a faint green hover fill. Technical primary actions use amber/deep forest with a (49px) minimum height and turn cream on hover; technical secondary actions use a muted border that turns amber with the text. They are links, not submission controls. The shared technical button helper is a separate layout-level treatment; homepage Terminal actions retain their scoped states.

Underlined text links increase underline weight or change to the register's emphasis color on hover. Primary reading links use `/manifesto/`; participation links use actual section anchors. Arrow marks are decorative, not standalone icon-only controls.

### Navigation and audience switch

The always-visible switch reads “Público geral” and “Devs”; selected background follows the register. `data-selected` marks the visual register, while `aria-current="page"` is used only when that destination is the current page. Public navigation uses Archivo and plain Portuguese; Terminal navigation uses mono path-style labels such as `./proposta`. Logo links return to the corresponding homepage. Footer navigation offers the other register and the real manifesto.

### Native principle disclosures

Both homepages use `details` and `summary`, with the first principle initially open. Number, full Portuguese title and a drawn plus/minus sign form the control. Hover emphasizes the title; focus remains visible. The public variant is ruled cream-on-forest with condensed Archivo titles and an amber lead. The file variant has mint numbering, mono titles, secondary Archivo lead text and amber open-state title. Opening removes the vertical sign stroke without requiring JavaScript.

Preserve the six titles and order: “Liberdade por padrão”, “Soberania por escolha”, “Segurança por princípio”, “Pragmatismo com propósito”, “Tecnologia para o bem comum”, and “Transparência e liberdade algorítmica”. Do not treat the layout as permission to shorten or translate these titles.

### Ruled editorial lists

Contribution and engineering content uses semantic definition lists or lists, paired label/content columns and thin separators, not floating feature cards. Mobile stacks each label above its explanation. These are editorial rows, not clickable tiles.

### Print plates and reading files

The public plate is a flat forest figure with supplied emblem, small edition/caption metadata and registration corners. Technical files have a darker ground, one-pixel border and a filename bar; titlebar dots are decorative. `DIRECAO.txt`, `MANIFESTO.md` and `COMECO.md` frame real editorial text. The panel explicitly says “Uma leitura da proposta, não um terminal interativo.” There is no command input, fake execution or invented project status.

### Keyboard, motion and print behavior

The skip link “Pular para o conteúdo” becomes visible on focus. Shared focus uses a (3px) outline with (5px) offset; Folheto uses forest on paper and amber on its forest band. Terminal content uses a (2px) amber outline with (6px) offset, while its shared shell retains the global outline width. Preserve these contrast-aware contexts. Print hides the shell and action buttons, uses black on white and avoids splitting disclosures. No inputs, forms, membership controls or submission-state primitives are implemented.

## Do's and Don'ts

### Do:
- **Do** preserve the shared forest/paper/amber identity across both reading registers.
- **Do** use self-hosted Archivo width variation for public display and Martian Mono for technical headings and metadata.
- **Do** preserve supplied SVG identity, Portuguese UI copy and the six canonical principle titles.
- **Do** keep audience navigation, native disclosures, keyboard focus and real manifesto actions usable on small screens and with reduced motion.
- **Do** use ruled semantic content and flat print/file surfaces to organize reading.

### Don't:
- **Don't** replace the pinned Folheto and Terminal worlds with a generic startup card grid or neon terminal glow.
- **Don't** present editorial files as an interactive shell or add invented inputs, forms or submission states to the component system.
- **Don't** use shadows to manufacture depth where tonal grounds and rules already establish it.
- **Don't** make reading or navigation depend on animation, or assume cross-page view transitions are available.
