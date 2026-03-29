# Inform Growth Website

B2B SaaS marketing site for Inform Growth. Built with Astro 5.17.1 and deployed on Cloudflare Workers.

## Design Aesthetic

- **Visual Style**: 1930s rubber hose + die-cut sticker aesthetic (infrastructure-focused, no mascot)
- **Color Palette**: Carbon Gray, ROI Green (#39FF14), Rust Orange, Vintage Cream
- **Typography**: Fraunces (display) + Space Mono (body)

## Project Structure

```
/
├── public/
│   ├── fonts/                  # Custom fonts (download required)
│   ├── infrastructure/         # Infrastructure illustrations + icons
│   ├── icons/                  # Supporting UI icons
│   ├── backgrounds/            # Background textures
│   ├── roy/                    # Legacy mascot assets (unused)
│   └── *.svg, *.xml            # SEO and branding files
├── src/
│   ├── components/             # Reusable UI components
│   ├── layouts/                # Page layouts
│   ├── pages/                  # Routes (index, services, case-studies, contact)
│   ├── content/                # Case studies content
│   └── styles/                 # Global styles and design tokens
```

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Download Fonts

Download from https://gwfh.mranftl.com/:

**Fraunces:** Bold (700), Black (900)  
**Space Mono:** Regular (400), Bold (700)

Save to `public/fonts/`:
- `Fraunces-Bold.woff2`
- `Fraunces-Black.woff2`
- `SpaceMono-Regular.woff2`
- `SpaceMono-Bold.woff2`

### 3. Update Calendly

Update the Calendly URL in `src/pages/contact.astro`:
```
data-url="https://calendly.com/your-link"
```

### 4. Configure Contact Form

Update the form action in `src/pages/contact.astro`:
```
action="https://formspree.io/f/YOUR_FORM_ID"
```

## Development

```bash
npm run dev
npm run build
npm run preview
```

## Content Locations

- Pages: `src/pages/`
- Case studies data: `src/data/case-studies.ts`
- Case study content: `src/content/case-studies/`

## Docs

- `website_plan_no_roy.md` (current design plan)
- `ASSET_GUIDE.md` (asset filenames and placement)
- `BACKGROUND_REMOVAL_GUIDE.md` (remove backgrounds if needed)
- `claims_to_validate.md` (claims requiring sources)
- `QUICKSTART.md` (short setup checklist)
- `RevOpsResearch.md` (research summary and sources to verify)

## License

Proprietary - Inform Growth
