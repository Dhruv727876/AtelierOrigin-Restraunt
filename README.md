# Atelier Origine | Premium Restaurant Template

A bespoke, heavily polished Next.js 14 template engineered for luxury dining rooms, boutique hotels, and high-end hospitality experiences.

## 🌟 Key Features

*   **Cinematic Parallax Engine:** Deeply integrated with `framer-motion` for buttery 60hz scroll-linked animations and overlapping viewports. No jank, no heavy layout thrashing.
*   **Centralized Configuration (DX First):** All text content, links, testimonials, and private dining perks are strictly isolated in `config/site.ts`. You don't need to hunt through 25 different React components to change a single sentence.
*   **Accessibility Driven:** Includes a built-in `<MotionToggle />` that automatically disables all scroll tracking and heavy animations for users who prefer reduced motion. A huge bonus in modern web standards.
*   **Ready-to-Wire Forms:** The server action in `app/actions.ts` is fully documented step-by-step for how to drop in Prisma, Supabase, or the Resend Email API in under 5 minutes.
*   **Zero Framework Bloat:** Designed strictly with native CSS Modules and global CSS custom properties (`:root`). Say goodbye to complex Tailwind parsing limits.

## 🚀 Quick Start

1.  **Install dependencies**
    ```bash
    npm install
    # or yarn install
    # or pnpm install
    ```

2.  **Start the development server**
    ```bash
    npm run dev
    ```

3.  **Customize Content**
    Open `config/site.ts` and instantly adapt the site to your restaurant's brand profile, business hours, and social media presence.
    Open `app/globals.css` and tweak the core variable roots (`--accent`, `--font-serif`, etc.) to perfectly align with your client's design language.

## 🧠 Architectural Overview

*   **`components/ProgressiveImage.tsx`**: A smart wrapper around `next/image` to prevent layout shifts. Images are strictly passed here and automatically converted to cache-friendly `.webp` by the Next.js server.
*   **`app/actions.ts`**: The reservation modal runs primarily off this server action. Production integration examples are baked straight into the file.
*   **`app/layout.tsx`**: Comes out-of-the-box packed with best-practice `JSON-LD` schemas built for Local Businesses/Restaurants. 

## 🖼️ Media Assets & Licensing

All placeholder `.webp` and `.png` image files included inside the `/public/images` directory are royalty-free (sourced via Midjourney or Pexels with full commercial usage rights). You are free to redistribute them, use them for client demos, or replace them instantly by dropping files of matching names into the directory.

## 🛠️ Deployment

This project requires Zero config to step into Vercel.

```bash
npx vercel build
npx vercel deploy
```

---
*If you loved this template, please consider leaving a review on Gumroad! Built with careful attention by Atelier.*
