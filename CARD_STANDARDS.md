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
