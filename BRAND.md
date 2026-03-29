# Inform Growth Brand Guidelines

## Overview

This document defines the canonical brand assets and design system for the Inform Growth website. All visual elements should reference these guidelines to maintain brand consistency.

---

## Color Palette

### Core Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-bg-base` | `#0D0D0B` | Primary page background |
| `--color-bg-surface` | `#141412` | Lifted surfaces, alternating sections |
| `--color-bg-raised` | `#1C1C19` | Cards, panels, modals |
| `--color-border` | `#2A2A26` | All borders |

### Text Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-text-primary` | `#F0EBE0` | Headings, primary text |
| `--color-text-secondary` | `#8C8880` | Body text, subtitles |
| `--color-text-tertiary` | `#5C5A56` | Hints, labels, muted text |

### Accent Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-accent` | `#C8F04A` | CTAs, highlights, active states |
| `--color-accent-hover` | `#D4F76A` | Button hover states |
| `--color-accent-muted` | `#2A3B0A` | Subtle accent backgrounds |
| `--color-accent-reversed` | `#4A6E00` | Accent for light backgrounds |

### Background Alternation Pattern

Sections should alternate between `--color-bg-base` and `--color-bg-surface` to create visual rhythm:

```
Section 1: --color-bg-base (hero)
Section 2: --color-bg-surface
Section 3: --color-bg-base
Section 4: --color-bg-surface
...
```

---

## Logo Assets

All logo files are located in `/public/brand/`.

### Available Variants

| File | Dimensions | Usage |
|------|------------|-------|
| `logo-primary.svg` | 260 x 64 | Full logo with stacked bars and wordmark (dark backgrounds) |
| `logo-compact.svg` | 220 x 40 | Horizontal compact logo (navigation, footer) |
| `logo-mark.svg` | 62 x 53 | Icon only, no text (favicon, small contexts) |
| `logo-reversed.svg` | 260 x 64 | Full logo for light backgrounds |

### Usage in Code

```astro
---
import BrandLogo from '../components/ui/BrandLogo.astro';
---

<!-- Navigation -->
<BrandLogo variant="compact" height={32} />

<!-- Footer -->
<BrandLogo variant="compact" height={28} />

<!-- Hero or large context -->
<BrandLogo variant="primary" />

<!-- Light background -->
<BrandLogo variant="reversed" />

<!-- Icon only -->
<BrandLogo variant="mark" height={40} />
```

---

## Icon System

All icons are located in `/public/brand/icons/` and can be used via the `BrandIcon` component.

### Available Icons

| Name | File | Usage |
|------|------|-------|
| `deep-scan` | `icon-deep-scan.svg` | Audit, analysis, inspection |
| `data-stack` | `icon-data-stack.svg` | Data layers, databases |
| `integration` | `icon-integration.svg` | Connections, APIs |
| `pipeline` | `icon-pipeline.svg` | Funnels, data flow |
| `compounding` | `icon-compounding.svg` | Growth, compound value |
| `speed` | `icon-speed.svg` | Performance, velocity |
| `security` | `icon-security.svg` | Protection, compliance |
| `attribution` | `icon-attribution.svg` | Multi-touch, converging sources |

### Icon Design Principles

- **Stroke-based**: 1.5px stroke weight
- **Accent highlight**: One element per icon uses `--color-accent`
- **Secondary elements**: Use `--color-text-secondary`
- **ViewBox**: All icons use 24x24 viewBox

### Usage in Code

```astro
---
import BrandIcon from '../components/ui/BrandIcon.astro';
---

<!-- Default size (24px) -->
<BrandIcon name="deep-scan" />

<!-- Custom size -->
<BrandIcon name="compounding" size={32} />

<!-- With custom class -->
<BrandIcon name="security" size={48} class="feature-icon" />
```

---

## Typography

### Font Stack

| Token | Fonts | Usage |
|-------|-------|-------|
| `--font-display` | DM Sans, Inter | Headings, display text |
| `--font-body` | Inter | Body copy, UI text |
| `--font-mono` | JetBrains Mono | Code, labels, badges |

### Type Scale

| Token | Size | Usage |
|-------|------|-------|
| `--text-h1` | 3.5rem (56px) | Page titles |
| `--text-h2` | 2.5rem (40px) | Section headings |
| `--text-h3` | 1.75rem (28px) | Subsection headings |
| `--text-xl` | 1.5-1.75rem | Large body, card titles |
| `--text-lg` | 1.125-1.25rem | Lead text, subtitles |
| `--text-base` | 1.0625rem (17px) | Body copy |
| `--text-sm` | 0.875rem (14px) | Secondary text, captions |
| `--text-caption` | 0.8125rem (13px) | Labels, meta text |

---

## Component Reference

### BrandLogo Component

Location: `/src/components/ui/BrandLogo.astro`

Props:
- `variant`: `'primary' | 'compact' | 'mark' | 'reversed'` (default: `'compact'`)
- `height`: `number` (optional, uses natural height if not specified)
- `class`: `string` (optional additional CSS classes)

### BrandIcon Component

Location: `/src/components/ui/BrandIcon.astro`

Props:
- `name`: `'deep-scan' | 'data-stack' | 'integration' | 'pipeline' | 'compounding' | 'speed' | 'security' | 'attribution'` (required)
- `size`: `number` (default: `24`)
- `class`: `string` (optional additional CSS classes)

---

## Brand Asset Directory Structure

```
/public/brand/
  logo-primary.svg      # Full stacked logo (dark bg)
  logo-compact.svg      # Horizontal compact logo
  logo-mark.svg         # Icon only
  logo-reversed.svg     # Light background variant
  icons.svg             # Source icon sheet
  color-tokens.svg      # Visual color reference
  /icons/
    icon-deep-scan.svg
    icon-data-stack.svg
    icon-integration.svg
    icon-pipeline.svg
    icon-compounding.svg
    icon-speed.svg
    icon-security.svg
    icon-attribution.svg
```

---

## CSS Token Reference

All tokens are defined in `/src/styles/global.css` under the `:root` selector.

### Using Tokens

```css
.my-component {
  background-color: var(--color-bg-surface);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border);
}

.accent-element {
  color: var(--color-accent);
}

.on-light-background {
  color: var(--color-accent-reversed);
}
```

---

## Do's and Don'ts

### Do

- Use the canonical color tokens from the CSS custom properties
- Alternate section backgrounds between `--color-bg-base` and `--color-bg-surface`
- Use `BrandIcon` and `BrandLogo` components instead of inline SVGs
- Apply `--color-accent` for interactive elements and highlights
- Use the stroke-based icon style with 1.5px weight

### Don't

- Hardcode hex values directly in components (use CSS variables)
- Mix warm and cool grays (all grays have warm undertones)
- Use the accent color for large background fills
- Create new icons without following the established stroke style
- Use `logo-reversed.svg` on dark backgrounds
