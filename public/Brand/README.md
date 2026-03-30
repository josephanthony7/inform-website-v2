# Inform Growth Brand Assets

## Folder Structure

```
brand/
├── dark-mode/           # Assets for dark backgrounds
│   ├── logos/
│   │   ├── logo-primary.svg    # Full logo with wordmark
│   │   └── logo-mark.svg       # Icon only
│   └── favicons/
│       └── favicon.svg
│
├── light-mode/          # Assets for light backgrounds
│   ├── logos/
│   │   ├── logo-primary.svg
│   │   └── logo-mark.svg
│   └── favicons/
│       └── favicon.svg
│
└── color-tokens/
    └── colors.svg       # Visual color reference
```

## Color Palette

### Light Mode (Primary)
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-bg-base` | `#FFFFFF` | Main background |
| `--color-bg-surface` | `#F7F7F5` | Section backgrounds |
| `--color-text-primary` | `#1A1A18` | Headings |
| `--color-text-secondary` | `#4A4844` | Body text |
| `--color-text-tertiary` | `#7A7772` | Muted text |
| `--color-accent` | `#2D5016` | Primary accent (dark green) |
| `--color-border` | `#E5E5E0` | Borders |

### Dark Mode (Accent Sections)
| Token | Hex | Usage |
|-------|-----|-------|
| `--navy` | `#1A2E0D` | Dark section backgrounds |
| Lime | `#C8F04A` | Accent highlights on dark |
| White | `#FFFFFF` | Text on dark backgrounds |

## Usage Guidelines

### When to use Dark Mode assets:
- Dark accent sections (testimonials, deepscan, case study heroes)
- Dark UI components
- Reversed logo placement on images

### When to use Light Mode assets:
- Main page content
- Light cards and panels
- Default logo placement

## Logo Filters (CSS)

For dynamically switching logo colors:

```css
/* Make logo dark (for light backgrounds) */
filter: brightness(0);

/* Make logo white (for dark backgrounds) */
filter: brightness(0) invert(1);
```

## Git Tags

- `dark-mode-v1` - Original dark mode version
- `main` - Current light mode version
