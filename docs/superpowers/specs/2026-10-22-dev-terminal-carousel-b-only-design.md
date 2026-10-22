# Developer Terminal Carousel: B-Only Design

## Intent

Replace the current nine-reading developer carousel presentation with the owner's selected direction B: a focused, one-topic-at-a-time reader that makes concise context visible and keeps the full topic set navigable. This improves comprehension without changing the `/devs/` page's purpose, approved content, or Terminal identity.

## Goals

- Make one selected topic the primary reading surface, with its label, command, title, short description, and real reading destination.
- Keep all nine topics discoverable in a grouped locator: the three framing topics followed by the six canonical manifesto principles in their established order. Previous/next navigation wraps through the same sequence.
- Give every topic a concise Brazilian Portuguese description. Derive the six principles' summaries from their canonical shared `lead` content; adapt the existing framing copy accurately and without adding claims.
- Preserve the existing intended playback behavior: autoplay by default, command typing, reading dwell/progress, explicit pause/resume, and suspension while hidden or offscreen. Manual selection and navigation do not silently change playback preference.
- Make topic changes usable without page movement when the carousel is in view.

## Non-goals and anti-goals

- Do not retain the comparison/review route or expose A and C as production options; B is the only production carousel at `/devs/`.
- Do not change the nine topics, canonical principle titles/order, editorial meaning, or destinations; do not invent contribution channels or promises.
- Do not add shell input, fake execution, command history, new playback policy, or a second carousel implementation.
- Do not replace the Terminal visual system with generic cards, shadows, glow, or ornamental animation.

## Constraints

- Keep visitor-visible strings in typed `src/i18n/` catalogs (`pt-BR` is the only shipped locale); keep the canonical manifesto catalog authoritative for principle titles and leads.
- Preserve the Embraso Terminal design system: deep forest/cream/amber, Martian Mono for technical headings and commands, proportional reading prose, flat ruled geometry, visible focus, and responsive behavior.
- Progressive enhancement is required. With JavaScript unavailable, the complete readings and useful native navigation remain available; selection must not hide required content in the fallback.
- Respect `prefers-reduced-motion`; complete commands and manual navigation remain available without authored movement. Keep visibility/page lifecycle suspension and avoid unnecessary background work.
- Previous/next topic selection while enhanced is an in-place state change: it MUST NOT update the URL fragment or scroll the page. Native fallback links may still navigate to their reading anchors when JavaScript is unavailable.

## Approaches considered

- **A — One reading in focus, with the next topics close by.** A focused reader paired with nearby topic choices. This keeps navigation compact but does not provide B's explicitly grouped locator and clear separation between framing topics and principles.
- **B — One topic at a time (selected).** Show the current reading and its concise description beside a grouped locator, with previous/next controls. This gives each topic room while preserving the complete nine-topic map and direct movement between readings. **The owner selected B.**
- **C — Topic map.** Show the full set of readings together and let visitors choose where to begin. This supports scanning but restores the long, simultaneous reading surface the focused design is meant to replace.

## Settled interaction and motion contract

Motion communicates sequence and continuity rather than decorating the page. Preserve the existing command typing cadence (65 ms per character), short output transition (280 ms), and word-weighted reading dwell (9 seconds plus 35 ms per word, capped at 18 seconds) with its amber progress rule. Keep topic text readable throughout command typing. Animate only while the reader is visible, the document active, and reduced motion is not requested; pause/resume remains explicit. Reduced motion skips typing and authored transitions, shows complete commands, and leaves manual navigation usable.

When enhanced, selecting a topic through the locator or previous/next updates the displayed topic, selected locator state, command, and position without assigning `location.hash`, following an anchor, or otherwise moving the page. In particular, when the carousel is within the viewport, a next/previous action MUST leave the document scroll position unchanged. Do not move focus to hidden or offscreen content. Without enhancement, native links remain meaningful and all topic readings remain accessible.

## Acceptance criteria

1. `/devs/` renders B as its sole production carousel; A, C, and the comparison page are absent from production routing/imports.
2. The reader presents one selected topic, its label/title/command/concise summary and actual destination; the grouped locator covers all nine topics in the established order and previous/next wraps correctly.
3. All user-facing text is catalog-backed and summaries are concise, accurate adaptations of existing content, with principle summaries sourced from canonical leads.
4. Enhanced topic changes do not alter the fragment or cause page scrolling; a browser scenario confirms next/previous leaves scroll position unchanged while the reader is in view.
5. Autoplay, command typing, dwell/progress, explicit pause/resume, visibility/lifecycle suspension, and reduced-motion behavior retain their stated contract.
6. The complete content and usable navigation remain available without JavaScript; responsive layout, keyboard operation, focus visibility, and accessible selected-state announcements are verified in a real browser.
7. The production result remains within the established Terminal visual system and adds no fake execution, unsupported claims, ornamental effects, shadows, or glow.
