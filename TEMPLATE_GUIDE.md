# Atelier Origine — Template Guide
**Version 1.0 · Next.js 14 + TypeScript · Built with Framer Motion + Lenis**

---

## Table of Contents

1. [Quick Start](#1-quick-start)
2. [Central Configuration — The ONE File to Edit](#2-central-configuration)
3. [Design System — Colors & Typography](#3-design-system)
4. [Sections Overview](#4-sections-overview)
5. [Connecting a Reservation System](#5-reservations)
6. [Connecting a Newsletter (Email)](#6-newsletter)
7. [Replacing Images](#7-images)
8. [SEO & JSON-LD Schema](#8-seo)
9. [Deployment](#9-deployment)
10. [FAQ & Troubleshooting](#10-faq)

---

## 1. Quick Start

### Prerequisites
- Node.js `v18+`
- npm or yarn
- A code editor (VS Code recommended)

### Installation

```bash
# 1. Navigate into the project folder
cd "Atelier Origine restraunt project17"

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Hot-reload is enabled.

To build for production:
```bash
npm run build
npm run start
```

---

## 2. Central Configuration

> **This is the most important section for customization.**

All site-wide content lives in a single file:

```
data/site.ts
```

You only need to edit this file to rebrand the entire template. Every component automatically pulls from here.

### `siteConfig` — Core Identity

```ts
export const siteConfig = {
  name: "Atelier Origine",         // ← Restaurant name (Header, Footer, SEO)
  tagline: "Slow tasting room...", // ← Appears in Hero eyebrow, Footer, Header
  email: "reserve@atelierorigine.com",
  phone: "+33 1 42 68 12 00",
  address: "123 Rue du Faubourg Saint-Honoré, Paris 75008, France",
  googleMapsUrl: "https://maps.google.com", // ← "Get Directions" button link
  instagramUrl: "https://instagram.com/atelierorigine",
  foundedYear: "2019",
  pricing: "€185 per person",         // ← Shown in Tasting Journey footer
  ...
};
```

### `openingHours` — Displayed in Footer & JSON-LD Schema

```ts
openingHours: [
  { days: "Tuesday – Thursday", time: "6:30 – 10:00 PM" },
  { days: "Friday – Saturday",  time: "6:00 – 10:30 PM" },
  { days: "Sunday",             time: "6:00 – 9:30 PM"  },
  { days: "Monday",             time: "Closed"           }
],
```

### `chefData` — Chef Section Content

```ts
export const chefData = {
  name: "Laurent Moreau",
  role: "Executive Chef & Founder",
  quote: "I don't cook for hunger...",
  bio: ["Paragraph one...", "Paragraph two..."],
  stats: [
    { label: "⭑⭑", caption: "Michelin Stars" },
    ...
  ]
};
```

### `menuItems` — The Menu Cards

Each menu item follows this structure:
```ts
{
  id: "unique-slug",           // Must be unique
  category: "Tasting",        // "Tasting" | "Cellar" | "Patisserie"
  title: "Ember Scallop",
  subtitle: "Brown butter, kaffir...",
  price: "$28",
  description: "A seared first course...",
  image: "/images/scallop_main.png",  // 600×600px recommended
  peelImage: "/images/scallop_alt.png",
  accent: "rgba(214, 166, 107, 0.34)" // Card hover glow color
}
```

### `galleryItems` — Gallery Section

```ts
{
  id: "salon",
  title: "Salon de Feu",
  image: "/images/salon.png",
  description: "The main dining room..."
}
```

### `tastingCourses` — Tasting Journey Sequence

```ts
{
  number: "01",
  french: "Amuse-Bouche",
  english: "The Welcome Bite",
  description: "One morsel...",
  accent: "rgba(214, 166, 107, 0.12)" // Subtle background accent
}
```

---

## 3. Design System

### Color Palette (CSS Variables in `globals.css`)

The template supports **Dark Mode** (default) and **a Light Mode** via a theme toggle.

```css
/* globals.css — :root dark mode defaults */
--bg:          #0d0c0b;   /* Page background */
--fg:          #ede8df;   /* Primary text */
--fg-muted:    #9a9186;   /* Muted text / labels */
--accent:      #c9a96e;   /* Gold accent — CTAs, highlights */
--glass-bg:    rgba(255,255,255,0.04);  /* Card backgrounds */
--glass-border: rgba(255,255,255,0.08); /* Card borders */
```

**To change the accent color,** replace `--accent` in the `:root` and `[data-theme="light"]` blocks.

### Typography

The template uses **two Google Fonts**:

| Role       | Font              | Variable          |
|------------|-------------------|-------------------|
| Body / UI  | Manrope           | `--font-sans`     |
| Headings   | Playfair Display  | `--font-serif`    |

To change fonts, edit `app/layout.tsx`:
```ts
import { YourFont, AnotherFont } from "next/font/google";
const sans = YourFont({ variable: "--font-sans", subsets: ["latin"] });
```

---

## 4. Sections Overview

| Section              | File                                | ID Anchor   |
|----------------------|-------------------------------------|-------------|
| Hero                 | `components/HeroSection.tsx`        | —           |
| Our Story (Philosophy)| `components/StorySection.tsx`      | `#story`    |
| Chef Profile         | `components/ChefSection.tsx`        | `#chef`     |
| Tasting Journey      | `components/TastingJourney.tsx`     | `#tasting`  |
| Tasting Menu Cards   | `components/MenuSection.tsx`        | `#menu`     |
| Testimonials         | `components/TestimonialsSection.tsx`| `#acclaim`  |
| Gallery              | `components/GallerySection.tsx`     | `#gallery`  |
| Ingredient Strip     | `components/ProvisionsStrip.tsx`    | —           |
| Provenance Grid      | `components/ProvenanceSection.tsx`  | `#cellar`   |
| Private Dining       | `components/PrivateDiningSection.tsx`| `#events`  |
| Map / Location       | `components/MapSection.tsx`         | `#location` |
| Reservation Form     | `components/ReservationSection.tsx` | `#reserve`  |
| Footer               | `components/MegaFooter.tsx`         | —           |

---

## 5. Reservations

The reservation form currently uses a **simulated server action** (`app/actions.ts`). It validates inputs and returns a mock success response.

### Option A: Email Notification (Resend — Recommended)

```bash
npm install resend
```

Edit `app/actions.ts`:
```ts
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

// Inside createReservationAction():
await resend.emails.send({
  from: 'noreply@yourdomain.com',
  to: siteConfig.email,
  subject: `New Reservation — Party of ${party}`,
  html: `<p>Date: ${date} at ${time} for ${party} guests.</p>`
});
```

Add to `.env.local`:
```
RESEND_API_KEY=re_your_api_key_here
```

### Option B: OpenTable / Resy Widget

Replace the `<ReservationSection />` in `components/SiteExperience.tsx` with the embed script provided by OpenTable or Resy's widget builder.

### Option C: Database (Prisma + Supabase)

```bash
npm install @prisma/client prisma
npx prisma init
```

Refer to the commented code block at the bottom of `app/actions.ts` for the schema reference.

---

## 6. Newsletter

The newsletter form in the footer is a client-side `<form>` with `onSubmit={(e) => e.preventDefault()}`.

### Connecting Mailchimp

1. Get your Mailchimp Form Action URL from **Audience → Signup Forms → Embedded Form**.
2. Replace the form's `onSubmit` with:

```tsx
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const email = new FormData(e.currentTarget).get("email");
  await fetch("YOUR_MAILCHIMP_ACTION_URL", {
    method: "POST",
    body: new URLSearchParams({ EMAIL: email as string }),
    mode: "no-cors"
  });
  // Show a thank-you message
};
```

---

## 7. Images

All images live in `public/images/`. The template uses AI-generated placeholder images.

### Recommended Sizes

| Image          | Recommended Dimensions |
|----------------|------------------------|
| Hero dining    | 800 × 1000px portrait  |
| Chef portrait  | 700 × 900px portrait   |
| Gallery items  | 800 × 1000px portrait  |
| Menu card main | 600 × 600px square     |
| Menu card alt  | 600 × 600px square     |
| Provenance     | 800 × 600px landscape  |

### Progressive Loading

All images use the `<ProgressiveImage>` component, which shows an animated shimmer skeleton until the image resolves, then fades it in gracefully.

---

## 8. SEO & JSON-LD Schema

### Metadata

All meta tags (title, description, OpenGraph, Twitter Card) are automatically generated from `siteConfig.metadata` in `app/layout.tsx`. Update `data/site.ts` to change them.

### JSON-LD Restaurant Schema

A fully structured **Schema.org/Restaurant** JSON-LD block is injected into the `<head>` automatically. It includes:
- Restaurant name, URL, phone, address
- Opening hours (parsed from `siteConfig.openingHours`)
- Price range, cuisine type, reservation link

**Search engines (Google, Bing) use this data** to display rich results like Google Knowledge Panels and local business cards.

### Sitemap (Recommended for Production)

Install `next-sitemap`:
```bash
npm install next-sitemap
```

Create `next-sitemap.config.js`:
```js
module.exports = { siteUrl: "https://yoursite.com", generateRobotsTxt: true };
```

---

## 9. Deployment

### Vercel (Recommended — Zero Config)

1. Push your project to a GitHub repository.
2. Visit [vercel.com](https://vercel.com) → **New Project** → Import your repository.
3. Vercel auto-detects Next.js. Click **Deploy**.
4. Add your environment variables (e.g. `RESEND_API_KEY`) in Vercel → Project → Settings → Environment Variables.

### Custom Domain

In Vercel → Project → Settings → Domains, add your domain and follow DNS instructions.

---

## 10. FAQ & Troubleshooting

**Q: How do I change the currency symbol?**
→ Update `siteConfig.currencySymbol` and `siteConfig.pricing` in `data/site.ts`.

**Q: How do I add a new menu category?**
→ Add the new category to the `MenuCategory` type and `menuCategories` array in `data/site.ts`.

**Q: The font looks different than expected.**
→ Clear the `.next` cache: `rm -rf .next && npm run dev`

**Q: Where do I change the logo "AO" crest?**
→ In `components/SiteExperience.tsx`, find the `brandmark__crest` span. You can swap the text for an `<img>` or SVG logo here.

**Q: How do I disable the preloader?**
→ In `components/SiteExperience.tsx`, remove the `<Preloader>` component and change `isLoading` initial state to `false`.

**Q: How do I disable the dark/light theme toggle?**
→ Remove `<ThemeToggle />` from `components/SiteExperience.tsx` and remove the `[data-theme="light"]` block in `globals.css`.

**Q: How do I add Google Analytics?**
→ Install `@next/third-parties` and add `<GoogleAnalytics gaId="G-XXXXXX" />` to your `app/layout.tsx`.

---

*Built with precision. Sold with pride.*
