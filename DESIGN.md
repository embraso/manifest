---
name: Embraso
description: One visual family in two reading registers, Folheto and Terminal.
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
    fontSize: "clamp(5rem, 8.2vw, 6rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 72"
  headline-public:
    fontFamily: "'Archivo Variable', 'Archivo', sans-serif"
    fontSize: "clamp(3.2rem, 6.3vw, 6rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 72"
  title-public:
    fontFamily: "'Archivo Variable', 'Archivo', sans-serif"
    fontSize: "clamp(1.6rem, 2.5vw, 2.15rem)"
    fontWeight: 700
    lineHeight: 1.25
    fontVariation: "'wdth' 85"
  display-terminal:
    fontFamily: "'Martian Mono Variable', 'Martian Mono', monospace"
    fontSize: "clamp(3.4rem, 6.6vw, 6rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  headline-terminal:
    fontFamily: "'Martian Mono Variable', 'Martian Mono', monospace"
    fontSize: "clamp(2rem, 3.5vw, 3.6rem)"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  title-terminal:
    fontFamily: "'Martian Mono Variable', 'Martian Mono', monospace"
    fontSize: "clamp(1.05rem, 2.1vw, 1.85rem)"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "-0.015em"
  body:
    fontFamily: "'Archivo Variable', 'Archivo', sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  body-reading:
    fontFamily: "'Archivo Variable', 'Archivo', sans-serif"
    fontSize: "17px"
    lineHeight: 1.65
  body-home:
    fontFamily: "'Archivo Variable', 'Archivo', sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.75
  body-terminal:
    fontFamily: "'Archivo Variable', 'Archivo', sans-serif"
    fontSize: "1.0625rem"
    lineHeight: 1.8
    letterSpacing: "0.005em"
  body-command-reader:
    fontFamily: "'Archivo Variable', 'Archivo', sans-serif"
    fontSize: "1rem"
    lineHeight: 1.8
  command:
    fontFamily: "'Martian Mono Variable', 'Martian Mono', monospace"
    fontSize: "12px"
  label:
    fontFamily: "'Martian Mono Variable', 'Martian Mono', monospace"
    fontSize: "10px"
    lineHeight: 1.6
rounded:
  rectangular: "0"
  utility: "3px"
spacing:
  inline-small: "12px"
  inline: "16px"
  gutter-mobile: "20px"
  inset: "24px"
  gap: "32px"
  gutter-desktop: "40px"
components:
  button-primary:
    backgroundColor: "{colors.green}"
    textColor: "{colors.cream}"
    rounded: "{rounded.rectangular}"
    padding: "13px 22px"
  terminal-action:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.dark}"
    typography: "{typography.command}"
    padding: "16px 20px"
  terminal-action-hover:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.dark}"
  audience-selected-public:
    backgroundColor: "{colors.green}"
    textColor: "{colors.cream}"
    rounded: "{rounded.utility}"
    padding: "6px 12px"
  audience-selected-terminal:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.dark}"
    rounded: "{rounded.utility}"
    padding: "6px 12px"
  reading-panel:
    backgroundColor: "{colors.terminal-panel}"
    textColor: "{colors.cream}"
    rounded: "{rounded.rectangular}"
  motivation-selected:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.dark}"
---

# Design System: Embraso

## Overview

**Creative North Star: "Folheto / Terminal"**

One initiative speaks through two reading registers. Folheto is warm printed paper: narrow forest-green display type, amber marker emphasis, generous margins and supplied Brazilian fauna. Terminal expands the same identity into deep forest grounds, cream monospaced headings, amber actions and a typed-topic reader. The family is material, direct and human rather than glossy or neon.

Both registers preserve supplied SVG identity, self-hosted variable fonts, explicit rules and rectangular surfaces. Illustration and movement support reading without gating content. The public manifesto returns to paper and a quieter long-form measure. The official surfaces are `/`, `/devs/` and `/manifesto/`.

**Key Characteristics:**
- Forest, paper and amber connect both registers.
- Narrow Archivo display and Martian Mono technical headings have distinct jobs.
- Ruled editorial layouts and flat tonal grounds organize reading without shadows.
- Supplied fauna remain recognizable, including the static public flame and sampled developer flame.
- Native controls, visible focus and complete static reading survive without motion or JavaScript.

## Colors

The frontmatter owns the palette values; local hover mixtures are state treatments, not additional brand colors.

### Primary
- **Forest green** (`green`): public ink, actions, motivation-reader ground and footer.
- **Amber** (`yellow`): public marker emphasis and participation ground; technical emphasis, actions and selected controls.

### Secondary
- **Mint** (`mint`): technical numbering, code and supporting details.

### Tertiary
- **Orange** (`orange`) and **blue** (`blue`): supplied identity and public bunting. Orange identifies terminal recovery headings; blue supplies public keyboard focus.

### Neutral
- **Paper** (`paper`): public page ground.
- **Cream** (`cream`): reversed public text and primary technical text.
- **Deep forest** (`dark`): technical ground and amber-control text.
- **Reader ground**, **technical rule** and **muted technical text** (`terminal-panel`, `terminal-line`, `terminal-muted`): local-reader and engineering surfaces, separators and secondary prose.

**The Shared Ink Rule.** Keep the forest/paper/amber relationship recognizable in both registers; supporting identity colors do not introduce an unrelated theme.

Native text selection is dark on amber by default. On amber public participation and technical proposal grounds, selection reverses to cream on deep forest. Preserve this explicit inverse treatment so selecting amber-ground prose remains visible.

## Typography

**Display and body font:** Archivo Variable, with Archivo and sans-serif fallbacks. **Technical heading and command font:** Martian Mono Variable, with Martian Mono and monospace fallbacks. Both families are self-hosted in the shared layout.

### Hierarchy
- **Public display and headline:** uppercase, heavy Archivo at (72%) width, weight (800), and (-0.015em) tracking. Leading is (1.02) in the hero and (1.05) in sections: condensed, but no longer stacked edge-to-edge. The three-line hero uses a smaller responsive scale below (1000px) and (700px) to preserve complete phrases with the wider lettering.
- **Public title:** disclosure titles use (85%) width, weight (700), and (1.25) leading; contribution labels use the same width/weight with (1.3) leading. Motivation-reading titles retain the larger condensed role with (1.1) leading and a ceiling of (6rem).
- **Technical display and headline:** bold mixed-case mono with selective amber emphasis, (-0.02em) tracking, and (1.15)/(1.25) leading. The mobile hero uses one continuous rem-plus-viewport scale, with (1.2) leading and no abrupt size drop at (380px).
- **Technical title:** principle headings use (-0.015em) tracking and (1.5) leading; mobile titles use (1.125rem)/(1.6). Topic-reading headings use a quieter mono treatment rather than display sizing.
- **Body:** homepage prose uses proportional Archivo at (1.0625rem), with (1.75) leading on paper and (1.8) on Terminal. Technical prose has slight (0.005em) tracking. Introductory and large-reading roles retain their contextual fluid scales. Reading measures are typically (48–72ch) when space permits; narrow screens use the available column rather than forcing desktop measures.
- **Reading body:** the manifesto keeps its separate (17px)/(1.65) role, returning to (16px) below (700px). Its title caps at (6rem); article headings remain Archivo, not the homepage's compressed uppercase treatment.
- **Command and label:** mono distinguishes typed reading commands and utility metadata. Topic prose uses (1rem)/(1.8), with (24px) paragraph spacing; topic navigation and reading links use (1rem). Shared navigation and audience/motion utilities are one pixel larger than the initial implementation; public primary actions use (1rem). Do not promote every incidental local text size into a system token.

**The Two Registers Rule.** Use narrow Archivo for Folheto display and Martian Mono for Terminal headings; do not turn technical body prose into a wall of monospace.

## Layout

The shared shell caps its container at (1200px), with (40px) desktop and (20px) mobile side gutters. A slim audience/utility row precedes the logo and always-visible navigation. Below (700px), navigation wraps beneath the logo instead of becoming a scripted menu; the footer stacks.

Folheto content caps at (1320px), with (40px) desktop gutters, (24px) below (1000px), and (20px) below (700px). Oversized editorial headings alternate with paired reading columns and full-bleed forest/amber bands. The hero reserves a separate (40%) illustration column with a (4:5) canvas. The supplied static emblem fills (86%) of the scene width at (0.22) opacity behind the foreground toucan, capybara, ipê and wind; it is a background layer, not another stacked foreground object. Mobile places this proportional canvas below the copy with (48px) of separation and room beneath its caption. The manifesto introduction and disclosures stack below (1000px); community/autonomy prose stacks below (700px) instead of remaining in narrow nested columns. The six motivation choices form three columns on desktop and up to two below (700px), fitting (10rem) tracks so enlarged text can collapse to one column. Below (380px), they always stack to keep complete labels readable. Semantic contribution rows stack label above reading. Explanatory paragraphs use (24px) separation; disclosures and contribution rows have larger reading insets. The public illustration has no framing or registration lines.

Terminal content caps at (1440px), with (48px) desktop gutters, (32px) below (1100px), and (20px) below (760px). The desktop hero pairs copy and fauna above a full-width typed-topic reader. The guide and grouped locator place three framing topics before the six canonical principles beside a bordered workspace with one selected reading, concise description and full-reading link. The paired community/autonomy proposal fronts stack below (1100px). Below (760px), the reader follows the copy and precedes fauna; the locator becomes a horizontally scrollable strip. Mobile grids shrink so enlarged text wraps without widening the page; expanded principle prose uses the full measure. At (380px), gutters narrow to (16px); very wide hero proportions adjust at (1700px).

The manifesto page caps at (1000px), with an article measure of (740px). Its six principles are expanded reading sections, not disclosures. Section padding follows editorial scale rather than a single universal section token.

## Elevation & Depth

There is no box-shadow vocabulary. Depth comes from paper-to-forest reversals, subtly darker reader grounds, thin rules and illustration placement. The EmbrasoFetch profile uses restrained terminal titlebar chrome to establish its fetch-screen reference; other reading surfaces do not need window framing.

**The Flat Material Rule.** Distinguish surfaces with ink, ground and rules rather than shadows or neon glow.

Motion is subordinate to complete static composition. Shared action-color transitions last (180ms). Folheto's toucan and ipê run two finite (14s) circuits; the capybara combines an eased (14s) lateral drift with sixteen short (1.75s) gait cycles. Both capybara layers have smooth reversals without long stationary holds, and all fauna settle at (28s). Each independent enhancement runs only while its actual scene or reader is visible and motion is allowed; the public emblem/flame itself is static, unclipped and untransformed. The toucan rides two smooth rise-and-settle arcs per circuit, with restrained horizontal drift and banking. Three forest-green wind strokes occupy open space beneath the bird. Their non-scaling (2px) strokes reach (0.65) opacity with a short hold, keeping them legible against the light ground. Staggered (3.5s) pulses run for the same (28s) total; they share the scene's pause/visibility/reduced-motion controls and disappear when finished or motion is reduced. The supplied foreground animals and large background emblem remain complete without JavaScript or with reduced motion. A user-selected motivation reading may receive a (360ms) wipe, never a scroll-triggered content gate.

Terminal samples the supplied SVG into particles, gathers over (1600ms), then continuously moves only the warm upper flame islands. The beak, cream face and green/blue body do not enter the flame mask; after assembly their particle geometry stays at rest. Traveling lift/curl and subtle opacity variation keep the recognizable flame alive, rather than giving every particle a random orbit. Source bounds reserve tip headroom. The budget is a single requestAnimationFrame loop, at most (1400) particles or (600) below (760px), and device-pixel ratio capped at (1.5). These are implementation budgets, not measured frame-rate or hardware guarantees.

Offscreen, hidden-document, pagehide, manual pause and reduced-motion states stop particle work and reveal the actual supplied SVG. Re-entry resumes permitted work; resize resamples geometry. Canvas/readback failure retains the real image. Reduced motion removes CSS animation/transitions and smooth scrolling, cancels public scene movement, disables the pause control and shows static art. Cross-page view transitions are not enabled.

## Shapes

Actions, reader surfaces and ruled content use square corners. Audience and motion utilities use the small utility radius. One-pixel rules organize reading; the public proposal and manifesto opening/closing use stronger editorial rules. Do not turn these into pill cards or a floating feature grid.

Preserve supplied SVG logos, flame/toucan emblem, flying toucan, capybara and ipê; pixel capybara belongs to the technical register. Decorative scenes have empty alternatives; identity-bearing art retains meaningful alternatives. Draw directional and disclosure marks with CSS or inline SVG rather than inventing an icon language.

### Brand exports

Static brand downloads live under `public/`, so their URLs remain stable rather than receiving Astro asset hashes. The shared layout declares `/favicon.svg` and the `/favicon.ico` fallback on every route. All exports preserve the supplied vector artwork; no generated or replacement imagery is used.

| File | Format / size | Use and source |
| --- | --- | --- |
| `public/favicon.svg` | Square SVG | Full-color emblem from `assets/b084774a04a4acde15a270ee03518180.svg`, centered in a square viewBox with 4% vertical breathing room per edge. |
| `public/favicon.ico` | 16, 32 and 48px entries | Browser fallback rendered from the square SVG. |
| `public/brand/embraso-logo.png` | 2477 × 749px, transparent | Full-color horizontal logo for light backgrounds, from `assets/e6712f9ec67bfc5e5e1536d9b4377830.svg`. |
| `public/brand/embraso-logo-light.png` | 2489 × 773px, transparent | Cream horizontal logo for dark backgrounds, from `assets/58fa12401e77dc41cc7e67952d136fdf.svg`. |
| `public/brand/embraso-icon.png` | 1024 × 1024px, transparent | Square emblem for avatars and other identity placements, from the square favicon SVG. |

PNG exports were rasterized directly from the SVG sources using Chromium Canvas 2D on 22 October 2026, with no background fill. Wordmark proportions follow each source viewBox, rounded to whole pixels at approximately twice the source width. The ICO contains PNG-encoded entries. Keep original vectors under `assets/`; regenerate raster derivatives from those sources rather than resizing an existing PNG.

## Components

### Actions and text links

Public primary links use forest/cream, a (48px) minimum height and the frontmatter padding; hover darkens the forest. Terminal actions use amber/deep forest, a (52px) minimum height and turn cream on hover. Reading links remain underlined; public hover thickens the underline and technical hover turns amber. These lead to real routes or section anchors. No separate outlined secondary-button primitive is implemented.

### Navigation and audience switch

The switch reads “Público geral” and “Devs”; `data-selected` selects the visual register, while `aria-current="page"` identifies only a current page destination. Public selected state is forest/cream; technical selected state amber/deep forest. Unselected hover uses a subtle register-colored fill; selected hover retains its selected ground. Main-navigation hover underlines, with path-style mono labels in Terminal. Mobile keeps all destinations visible.

### Developer fauna profile

The `/devs/` hero presents a terminal-style EmbrasoFetch window with restrained titlebar controls, a static `$ embrasofetch` prompt, the sampled emblem in one column, initiative metadata in the other, and a seven-color brand strip. The command is a visual transcript, not shell execution. The panel uses a semantic definition list and catalog-backed Brazilian Portuguese; it shows no fabricated OS, host, kernel, uptime or hardware details, and retains the static emblem on narrow screens and under reduced motion.

### Motivation reader radios

“Por que a Embraso existe?” pairs obstacles with intended changes under six themes: Vida em comum, Autonomia, Conhecimento, Atenção, Privacidade and Continuidade. These are audience-facing topics, not replacement manifesto titles. A native fieldset/legend groups six radios; checked labels reverse to amber/deep forest, and unselected hover gains a cream tint. Preserve native radio keyboard selection, (18px) controls, associated labels and `aria-controls`. A label focus-within has a (3px) amber ring with (5px) offset; the checked control's own focus uses deep forest. Selection displays one article and a polite “Lendo…” status. Without JavaScript, controls stay hidden and all six readings remain visible; print expands them too. The developer engineering rows address the same concerns through concrete questions and intended decisions, without claiming shipped products or guaranteed outcomes.

### Typed-topic carousel

“Manifesto, objetivos e princípios” introduces nine local readings: `manifesto`, `comunidade`, `autonomia`, then `principio 1` through `principio 6` in canonical order. The grouped locator uses native anchors, `aria-controls` and `aria-current`, with three framing topics before the principles. The workspace shows one selected label, title and concise description, plus a link to its complete reading. Selected text and prompt are amber on a deep-green surface; no input, autocomplete, command history or simulated execution remains. The command line uses a mint prompt and a block caret; reading text stays proportional rather than forming a wall of monospace.

Responsive rich-text line breaks retain a whitespace fallback when the mobile layout hides the `<br>` element, so adjacent translated words do not run together.

While visible and motion is allowed, commands type at (65ms) per character. A (280ms) output transition accompanies topic changes; the selected text stays available throughout typing. Reading dwell is (9000ms + 35ms per word), capped at (18000ms); an amber progress rule measures that dwell. Autoplay is on by default. Enhanced locator and previous/next selection wrap through all nine topics in place, without changing the URL fragment or moving a fully visible carousel. Selection does not change playback mode. Pointer movement, hover, keyboard focus and touch do not pause or restart the sequence. Only the reader's explicit pause/resume control changes its local playback choice. Selecting a topic while explicitly paused retains that choice.

The carousel owns its state and reduced-motion listener in `src/components/devs/command-carousel/controller.ts`, beside the Astro component's markup and scoped styles. Only `/devs/` imports it, through a named slot in the developer page body. It does not subscribe to shared artwork-motion state or session storage; its running cursor is isolated from the global artwork pause style. Reduced motion shows complete commands and keeps manual navigation usable. Document visibility, page lifecycle and fully offscreen state suspend work; intersection notifications only act when visibility actually changes. Automatic changes are not live-announced; manual selection has a polite status. Playback buttons have (44px) targets and explicit Portuguese labels. Without JavaScript, every article and its real destination remain visible; print also expands all nine readings.

### Native principle disclosures and editorial rows

Both homepages use six native details/summary controls in canonical order, with the first open. Full titles and Portuguese shared data remain authoritative; this system does not rewrite copy. Public titles underline on hover; technical titles become amber on hover or open. Drawn plus/minus strokes communicate state without JavaScript. Contribution and engineering definition lists use ruled label/reading columns, not clickable cards. The manifesto route keeps all principles expanded.

Use the approved titles and order from the [public manifesto](docs/01-manifesto-publico.md), beginning with “Tecnologia para o bem comum”. Do not shorten or translate the titles; allow longer names to wrap naturally. The revised names and copy were inspected at desktop and mobile widths without changing the visual system.

Numbered readings and their topic labels follow the same canonical order. Reordering the principles must keep each reading's title, lead and body together.

### Localized content and ownership

The visual system is unchanged by message extraction. `src/i18n/` supplies the current `pt-BR` content: shared shell and canonical manifesto namespaces, plus section-owned home/developer leaf catalogs. Astro renders reviewed copy and rich emphasis; scripts receive only localized control/announcement labels through server-rendered data. Titles, metadata, alternatives and accessible names are catalog-backed too. No other locale, language switch, translated URL or guessed production canonical is shipped. See `PRODUCT.md` and `embraso-frontend-patterns` for locale extension and section ownership; preserve complete reading without JavaScript and in print.

### Keyboard, motion and print controls

The skip link becomes visible on focus. Shared focus is a (3px) outline with (5px) offset, blue publicly and amber technically; public scoped links/summaries use (6px) offset. Context-specific radio rings remain distinct. Motion pause is a real small bordered button with inline SVG, `aria-pressed`, dynamic Portuguese label and optional session-storage persistence. It appears only after enhancement. Reduced motion disables it with a dashed border and “Movimento reduzido”; manual pause can be reversed through “Ativar movimento”. Hover adds a subtle current-color wash only when enabled. No contact, membership, backend submission or success-state primitives exist.

Print hides shell, actions, canvas and motion controls, uses black on white and avoids splitting disclosures. Static images and reading do not require animation to appear.

## Do's and Don'ts

### Do:
- **Do** preserve the shared forest/paper/amber identity across both reading registers.
- **Do** use self-hosted Archivo width variation for public display and Martian Mono for technical headings and commands.
- **Do** preserve supplied SVG identity, Portuguese UI copy and the six canonical principle titles.
- **Do** keep native reading, audience navigation and visible focus usable without motion or JavaScript.
- **Do** keep the public flame static and the developer flame continuously alive only while motion is permitted and visible.
- **Do** preserve the inverse selection treatment on amber grounds.

### Don't:
- **Don't** replace Folheto and Terminal with a generic startup card grid or neon terminal glow.
- **Don't** confuse local reading commands with system execution or invent contact and membership forms.
- **Don't** use shadows to manufacture depth where tonal grounds and rules establish it.
- **Don't** gate reading behind arrival effects or make the whole emblem endlessly scatter.
- **Don't** exceed the display ceiling of 6rem or canonize every incidental local type size.
