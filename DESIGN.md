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
  freedom-selected:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.dark}"
  command-selected:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.dark}"
---

# Design System: Embraso

## Overview

**Creative North Star: "Folheto / Terminal"**

One initiative speaks through two reading registers. Folheto is warm printed paper: narrow forest-green display type, amber marker emphasis, generous margins and supplied Brazilian fauna. Terminal expands the same identity into deep forest grounds, cream monospaced headings, amber actions and a working local-command reader. The family is material, direct and human rather than glossy or neon.

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
- **Forest green** (`green`): public ink, actions, freedom-reader ground and footer.
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

Native text selection is dark on amber by default. On amber public participation and technical proposal grounds, and inside selected autocomplete options, selection reverses to cream on deep forest. Preserve this explicit inverse treatment so selecting amber-ground prose remains visible.

## Typography

**Display and body font:** Archivo Variable, with Archivo and sans-serif fallbacks. **Technical heading and command font:** Martian Mono Variable, with Martian Mono and monospace fallbacks. Both families are self-hosted in the shared layout.

### Hierarchy
- **Public display and headline:** uppercase, heavy Archivo at (72%) width, weight (800), and (-0.015em) tracking. Leading is (1.02) in the hero and (1.05) in sections: condensed, but no longer stacked edge-to-edge. The three-line hero uses a smaller responsive scale below (1000px) and (700px) to preserve complete phrases with the wider lettering.
- **Public title:** disclosure titles use (85%) width, weight (700), and (1.25) leading; contribution labels use the same width/weight with (1.3) leading. Freedom-reading titles retain the larger condensed role with (1.1) leading and a ceiling of (6rem).
- **Technical display and headline:** bold mixed-case mono with selective amber emphasis, (-0.02em) tracking, and (1.15)/(1.25) leading. The mobile hero uses one continuous rem-plus-viewport scale, with (1.2) leading and no abrupt size drop at (380px).
- **Technical title:** principle headings use (-0.015em) tracking and (1.5) leading; mobile titles use (1.125rem)/(1.6). Command-output headings use a quieter (1rem) mono treatment rather than display sizing.
- **Body:** homepage prose uses proportional Archivo at (1.0625rem), with (1.75) leading on paper and (1.8) on Terminal. Technical prose has slight (0.005em) tracking. Introductory and large-reading roles retain their contextual fluid scales. Reading measures are typically (48–72ch) when space permits; narrow screens use the available column rather than forcing desktop measures.
- **Reading body:** the manifesto keeps its separate (17px)/(1.65) role, returning to (16px) below (700px). Its title caps at (6rem); article headings remain Archivo, not the homepage's compressed uppercase treatment.
- **Command and label:** mono distinguishes commands and utility metadata. Reader prose and autocomplete descriptions use (1rem), keyboard guidance uses (.875rem), and the editable prompt stays at (1rem) even on narrow phones. Terse command labels remain compact. Shared navigation and audience/motion utilities are one pixel larger than the initial implementation; public primary actions use (1rem).

**The Two Registers Rule.** Use narrow Archivo for Folheto display and Martian Mono for Terminal headings; do not turn technical body prose into a wall of monospace.

## Layout

The shared shell caps its container at (1200px), with (40px) desktop and (20px) mobile side gutters. A slim audience/utility row precedes the logo and always-visible navigation. Below (700px), navigation wraps beneath the logo instead of becoming a scripted menu; the footer stacks.

Folheto content caps at (1320px), with (40px) desktop gutters, (24px) below (1000px), and (20px) below (700px). Oversized editorial headings alternate with paired reading columns and full-bleed forest/amber bands. The manifesto introduction and disclosures stack below (1000px); community/autonomy prose stacks below (700px) instead of remaining in narrow nested columns. Mobile places the complete illustration below the hero copy and turns four freedom choices into a two-column grid. Semantic contribution rows stack label above reading. Explanatory paragraphs use (24px) separation; disclosures and contribution rows have larger reading insets. The public illustration has no framing or registration lines.

Terminal content caps at (1440px), with (48px) desktop gutters, (32px) below (1100px), and (20px) below (760px). The desktop hero pairs copy and fauna above a full-width local reader. Nested community/autonomy readings stack below (1100px). Below (760px), the local reader follows the copy and the fauna follows the reader; reader guide and workspace stack. Mobile grids allow tracks to shrink so enlarged text wraps instead of widening the page. Expanded principle prose uses the full mobile measure. The output remains internally scrollable (380px desktop, 360px mobile) to accommodate larger reading text and paragraph gaps. Additional narrow-screen adjustments occur at (380px), including (16px) gutters; very wide hero proportions adjust at (1700px).

The manifesto page caps at (1000px), with an article measure of (740px). Its six principles are expanded reading sections, not disclosures. Section padding follows editorial scale rather than a single universal section token.

## Elevation & Depth

There is no box-shadow vocabulary. Depth comes from paper-to-forest reversals, subtly darker reader grounds, thin rules and illustration placement. No fake window chrome is needed to establish the working reader.

**The Flat Material Rule.** Distinguish surfaces with ink, ground and rules rather than shadows or neon glow.

Motion is subordinate to complete static composition. Shared action-color transitions last (180ms). Folheto's toucan, capybara and ipê run two finite (14s) circuits, only while visible and allowed; the public emblem/flame itself is static, unclipped and untransformed. A user-selected freedom reading may receive a (360ms) wipe, never a scroll-triggered content gate.

Terminal samples the supplied SVG into particles, gathers over (1600ms), then continuously moves only the warm upper flame islands. The beak, cream face and green/blue body do not enter the flame mask; after assembly their particle geometry stays at rest. Traveling lift/curl and subtle opacity variation keep the recognizable flame alive, rather than giving every particle a random orbit. Source bounds reserve tip headroom. The budget is a single requestAnimationFrame loop, at most (1400) particles or (600) below (760px), and device-pixel ratio capped at (1.5). These are implementation budgets, not measured frame-rate or hardware guarantees.

Offscreen, hidden-document, pagehide, manual pause and reduced-motion states stop particle work and reveal the actual supplied SVG. Re-entry resumes permitted work; resize resamples geometry. Canvas/readback failure retains the real image. Reduced motion removes CSS animation/transitions and smooth scrolling, cancels public scene movement, disables the pause control and shows static art. Cross-page view transitions are not enabled.

## Shapes

Actions, reader surfaces and ruled content use square corners. Audience and motion utilities use the small utility radius. One-pixel rules organize reading; the public proposal and manifesto opening/closing use stronger editorial rules. Do not turn these into pill cards or a floating feature grid.

Preserve supplied SVG logos, flame/toucan emblem, flying toucan, capybara and ipê; pixel capybara belongs to the technical register. Decorative scenes have empty alternatives; identity-bearing art retains meaningful alternatives. Draw directional and disclosure marks with CSS or inline SVG rather than inventing an icon language.

## Components

### Actions and text links

Public primary links use forest/cream, a (48px) minimum height and the frontmatter padding; hover darkens the forest. Terminal actions use amber/deep forest, a (52px) minimum height and turn cream on hover. Reading links remain underlined; public hover thickens the underline and technical hover turns amber. These lead to real routes or section anchors. No separate outlined secondary-button primitive is implemented.

### Navigation and audience switch

The switch reads “Público geral” and “Devs”; `data-selected` selects the visual register, while `aria-current="page"` identifies only a current page destination. Public selected state is forest/cream; technical selected state amber/deep forest. Unselected hover uses a subtle register-colored fill; selected hover retains its selected ground. Main-navigation hover underlines, with path-style mono labels in Terminal. Mobile keeps all destinations visible.

### Freedom reader radios

A native fieldset/legend groups four radios: Usar, Estudar, Modificar and Compartilhar. Checked labels reverse to amber/deep forest; unselected hover gains a cream tint. Preserve native radio keyboard selection, (18px) radio controls, associated labels and `aria-controls`. A label focus-within has a (3px) amber ring with (5px) offset; the checked control's own focus uses deep forest. Selection displays one real article and a polite “Lendo…” status. Without JavaScript, controls stay hidden and all four readings stay visible.

### Connected local-command combobox

The only text field is a real, browser-local reading command, not a shell or a contact form. Label “Seu comando”, prompt marker, text input, “Ler” submit action and an adjacent listbox form one connected control. The field uses a dark inset, cream text, mint-toned supporting text and an amber caret. Suggestion buttons have ruled borders; hover turns their text/border amber with a darker green fill. Listbox options have command names and descriptions; selected options reverse to amber/deep forest, while unselected hover receives the green fill. Focus stays on the input through `aria-activedescendant`; selected options use `aria-selected`.

Focus or typing opens prefix-filtered suggestions, normalized for case, accents and whitespace. Arrow keys wrap the active option; Enter reads that option or the typed command. Tab completes a nonempty partial command once, then normal Tab navigation continues; Shift+Tab is never captured for completion. Escape closes the list. With it closed, arrows navigate up to (24) session-memory commands and restore the draft. Click/touch executes an option without moving focus away first. Blur closes suggestions. Empty results explain recovery; polite status announces options and reading results.

Supported commands are `ajuda`, `manifesto`, `principio 1` through `principio 6`, `comunidade`, `autonomia` and `limpar`. They consult actual shared content; nothing is sent or executed on the visitor's system. Invalid commands/indices produce a visible recovery reading with orange heading. Input is capped at (120) characters and rendered as text, not HTML. The output is a labeled, focusable scroll region, capped at (12) entries. Clearing output does not erase command history. Without JavaScript, the form and command buttons stay hidden; the initial reading, native disclosures and real manifesto links remain available.

### Native principle disclosures and editorial rows

Both homepages use six native details/summary controls in canonical order, with the first open. Full titles and Portuguese shared data remain authoritative; this system does not rewrite copy. Public titles underline on hover; technical titles become amber on hover or open. Drawn plus/minus strokes communicate state without JavaScript. Contribution and engineering definition lists use ruled label/reading columns, not clickable cards. The manifesto route keeps all principles expanded.

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
