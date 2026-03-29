# Quick Start Guide - Inform Growth Website

## Status

The site is fully implemented with infrastructure-focused visuals (no mascot). Core pages and components are in place.

## Required Setup

### 1) Install Dependencies

```bash
npm install
```

### 2) Download Fonts

Download from https://gwfh.mranftl.com/ and save to `public/fonts/`:
- `Fraunces-Bold.woff2`
- `Fraunces-Black.woff2`
- `SpaceMono-Regular.woff2`
- `SpaceMono-Bold.woff2`

### 3) Update Calendly URL

In `src/pages/contact.astro`, update:
```
data-url="https://calendly.com/your-link"
```

### 4) Configure Contact Form

Replace the form action in `src/pages/contact.astro`:
```
action="https://formspree.io/f/YOUR_FORM_ID"
```

## Optional Customization

- Replace infrastructure illustrations in `public/infrastructure/`
- Replace supporting icons in `public/icons/`
- Adjust copy in `src/pages/`

## Development Commands

```bash
npm run dev
npm run build
npm run preview
```

## Quick Checks

- Navigation links work
- Services page shows all three tiers
- Case studies render correctly
- Contact page shows Calendly embed
- Responsive layout holds at 375px/768px/1024px

## Support

Questions? Check `README.md` or contact hello@informgrowth.com
