# Atelier Origine | Premium Restaurant Template

A bespoke, heavily polished Next.js template engineered for luxury dining rooms, boutique hotels, and high-end hospitality experiences.

## 🌟 Key Features

*   **Cinematic Parallax Engine:** Deeply integrated with `framer-motion` for buttery 60hz scroll-linked animations and overlapping viewports.
*   **Centralized Configuration (DX First):** All text content, links, and data are strictly isolated in `data/site.ts`.
*   **Accessibility Driven:** Includes a built-in `<MotionToggle />` that automatically disables heavy animations for users who prefer reduced motion.
*   **GitHub Pages Ready:** Pre-configured for static export and automated deployment via GitHub Actions.
*   **Zero Framework Bloat:** Designed strictly with native CSS Modules and global CSS custom properties (`:root`).

## 🚀 Quick Start

1.  **Install dependencies**
    ```bash
    npm install
    ```

2.  **Start the development server**
    ```bash
    npm run dev
    ```

3.  **Customize Content**
    Open `data/site.ts` and instantly adapt the site to your restaurant's brand profile.
    Open `app/globals.css` and tweak the core variable roots (`--accent`, `--font-serif`, etc.).

## 🧠 Architectural Overview

*   **`components/ProgressiveImage.tsx`**: A smart wrapper around `next/image` that handles asset prefixing for sub-directory hosting (like GitHub Pages).
*   **`lib/actions.ts`**: Handles the reservation modal logic as a client-side mock for static hosting.
*   **`app/layout.tsx`**: Comes out-of-the-box packed with best-practice `JSON-LD` schemas built for Local Businesses.

## 🛠️ Deployment

This project is configured for **GitHub Pages**.

1.  Push your code to a GitHub repository.
2.  Go to **Settings > Pages**.
3.  Set **Build and deployment > Source** to **GitHub Actions**.
4.  The site will deploy automatically to `https://<user>.github.io/<repo>/`.

---
*Built with careful attention by Atelier.*
