# ADM Innovations card standards

## Static information surfaces

Use `InfoPanel` from `src/components/CardStandards.jsx` for non-clickable information such as project steps, payment conditions, package details, capabilities and CTA backgrounds.

Visual rules:

- `rounded-2xl`
- flat dark surface
- blue accent line on the left
- no hover movement
- no pointer affordance

## Clickable cards

Use `ClickableCard` for navigation cards and service cards.

Visual rules:

- `rounded-3xl`
- visible arrow or down indicator
- stronger surface and shadow
- hover movement, border change and glow
- keyboard focus ring

Buttons, form fields and FAQ disclosures remain separate control patterns rather than being styled as navigation cards.

## Scroll reveal

Wrap section content in `Reveal` from `src/components/Reveal.jsx` to fade and lift it in as it scrolls into view. Pass `delay` to stagger neighbouring items in a grid (roughly `index * 0.07`).

The animation is defined by the `.reveal` class in `src/index.css` and driven by the browser's scroll timeline, not JavaScript. Content is visible by default and the animation is layered on only where `animation-timeline: view()` is supported, so it can never leave content stuck invisible in print, crawlers or headless renderers.

When a revealed card sits in a grid with equal-height siblings, put `h-full` on both the `Reveal` and the card inside it.

## Typography

- Headings use `Space Grotesk` (`--font-display`), applied automatically to `h1`–`h4`.
- Body copy uses `Inter` (`--font-sans`).
- `.gradient-text` applies the blue-to-purple headline gradient.
- `.text-outline` renders the hollow watermark lettering used in the footer, the About letters and the 404 page.
