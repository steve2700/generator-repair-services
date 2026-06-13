# Generator Repair Services Gauteng

Professional generator repair, servicing, maintenance and installation website built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

Live site: [www.generatorrepairservices.co.za](https://www.generatorrepairservices.co.za)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Images | Next.js `<Image>` (WebP optimisation) |
| SEO | Metadata API + JSON-LD structured data |
| Package manager | pnpm |
| Deployment | Vercel |

---

## Project Structure

```
app/
├── page.tsx                        # Homepage
├── layout.tsx                      # Root layout (nav, footer, mobile call bar)
├── globals.css                     # Global styles + Tailwind base
├── robots.ts                       # robots.txt generation
├── sitemap.ts                      # sitemap.xml generation (38 URLs)
│
├── about/                          # About Us
├── areas/                          # Service areas overview
├── contact/                        # Contact & quote request form
├── faq/                            # Frequently asked questions
├── gallery/                        # Photo gallery with lightbox
├── generator-repair-cost/          # Pricing guide
├── privacy-policy/                 # Privacy policy (POPIA compliant)
├── services/                       # All services overview
├── terms/                          # Terms & conditions
│
├── avr-repairs/                    # AVR & voltage regulator repairs
├── control-panel-repairs/          # Control panel repairs
├── emergency-generator-repair/     # Emergency callouts
├── fuel-system-repairs/            # Fuel system repairs
├── generator-installation/         # Generator installation
├── generator-maintenance/          # Maintenance plans
├── generator-repairs/              # Generator repairs (main)
├── generator-rewinding/            # Alternator rewinding
├── generator-servicing/            # Generator servicing
├── load-bank-testing/              # Load bank testing
│
├── generator-repairs-alberton/     # Area page — Alberton
├── generator-repairs-benoni/       # Area page — Benoni
├── generator-repairs-boksburg/     # Area page — Boksburg
├── generator-repairs-centurion/    # Area page — Centurion
├── generator-repairs-edenvale/     # Area page — Edenvale
├── generator-repairs-fourways/     # Area page — Fourways
├── generator-repairs-germiston/    # Area page — Germiston
├── generator-repairs-johannesburg/ # Area page — Johannesburg
├── generator-repairs-kempton-park/ # Area page — Kempton Park
├── generator-repairs-krugersdorp/  # Area page — Krugersdorp
├── generator-repairs-midrand/      # Area page — Midrand
├── generator-repairs-pretoria/     # Area page — Pretoria
├── generator-repairs-randburg/     # Area page — Randburg
├── generator-repairs-roodepoort/   # Area page — Roodepoort
├── generator-repairs-sandton/      # Area page — Sandton
├── generator-repairs-soweto/       # Area page — Soweto
├── generator-repairs-springs/      # Area page — Springs
└── generator-repairs-vereeniging/  # Area page — Vereeniging

components/
├── breadcrumbs.tsx                 # Breadcrumb nav (schema-ready)
├── gallery-grid.tsx                # Masonry gallery with category filter + lightbox
└── hero-slideshow.tsx              # Auto-rotating hero image slideshow (client component)

public/images/                      # All optimised images (WebP + PNG + JPG)
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Install

```bash
pnpm install
```

### Run development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for production

```bash
pnpm build
pnpm start
```

---

## SEO Architecture

Every page is built with a layered SEO approach:

### Metadata (per page)
- Unique `title` and `description`
- `canonical` URL
- `robots` directives (`index`, `follow`, `max-snippet`, `max-image-preview`)
- `openGraph` with real image URLs, dimensions and alt text
- `twitter:card` with `summary_large_image`
- Geo-targeted `keywords` (Johannesburg, Pretoria, Midrand, Centurion, Sandton, etc.)

### Structured Data (JSON-LD)
The services page injects the following schema blocks:

| Schema Type | Purpose |
|---|---|
| `LocalBusiness` | NAP, area served, opening hours, geo coordinates, offer catalogue |
| `ItemList` | Links to all 10 service pages |
| `Service` (×10) | One node per service, linked to `LocalBusiness` via `@id` |
| `FAQPage` | 5 Q&As eligible for Google rich results |
| `BreadcrumbList` | Breadcrumb trail for rich results |

### Sitemap
Auto-generated at `/sitemap.xml` via `app/sitemap.ts`:
- 10 main/info pages
- 10 service pages
- 18 area pages (one per Gauteng location)
- 38 URLs total

### Robots
`/robots.txt` via `app/robots.ts`:
- Allows all crawlers
- Disallows `/api/`, `/_next/`, `/admin/`
- Points to sitemap

---

## Design System

| Token | Value |
|---|---|
| Brand black | `#0a0a0a` |
| Dark grey | `#1a1a1a` |
| Gold | `#c8a84b` |
| Red (emergency) | `#b91c1c` |
| Off-white surface | `#f5f4f0` |
| Body font | System sans-serif stack |

All interactive elements follow consistent hover patterns: dark → gold on light backgrounds, white → gold on dark backgrounds.

---

## Images

All images are stored in `public/images/` and served via Next.js `<Image>` for automatic:
- WebP conversion
- Responsive `srcset` generation
- Lazy loading (with `priority` on above-the-fold images)

Key images:

| File | Used on |
|---|---|
| `Industrial_Generator_Repair_Team.webp` | Hero slideshow, gallery |
| `2026-06-11_Generator_Preventative_Maintenance.webp` | Hero slideshow, maintenance section, gallery |
| `Technician_Servicing_Generator.webp` | Hero slideshow, servicing section |
| `generator-repair-technician-onsite-midrand.webp` | Hero slideshow, emergency section |
| `compressed_Diesel_Gen_Repair.webp` | Repairs section |
| `compressed_Ryobi_Petrol_Generator_3.5kVA_Maintenance.webp` | Gallery |
| `compressed_Grip_7.5KVA_Petrol_Generator_Repair.jpg` | Gallery |

---

## Deployment

The site deploys automatically to **Vercel** on every push to `main`.

Environment variables required: none (no API keys or external services).

After deploying:
1. Submit `https://www.generatorrepairservices.co.za/sitemap.xml` to Google Search Console
2. Verify the canonical domain (`www`) in Search Console
3. Check structured data with [Google's Rich Results Test](https://search.google.com/test/rich-results)

---

## Contact

**Generator Repair Services Gauteng**
Phone: 060 316 0484
Email: info@generatorrepairservices.co.za
Website: www.generatorrepairservices.co.za
