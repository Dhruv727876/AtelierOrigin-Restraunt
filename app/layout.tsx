import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

import { siteConfig } from "@/data/site";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { InteractiveCursor } from "@/components/InteractiveCursor";

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"]
});

const serif = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: siteConfig.metadata.title,
  description: siteConfig.metadata.description,
  keywords: siteConfig.metadata.keywords,
  openGraph: {
    title: siteConfig.metadata.title,
    description: siteConfig.metadata.description,
    url: "https://atelierorigine.com",
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/hero-main.svg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} dining room`
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.metadata.title,
    description: siteConfig.metadata.description,
    images: ["/images/hero-main.svg"]
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: siteConfig.name,
  image: "https://atelierorigine.com/images/hero-main.svg",
  "@id": "https://atelierorigine.com",
  url: "https://atelierorigine.com",
  telephone: siteConfig.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.split(", ")[0],
    addressLocality: "Paris",
    postalCode: "75008",
    addressCountry: "FR"
  },
  servesCuisine: "Contemporary French Fine Dining",
  priceRange: siteConfig.pricing,
  openingHoursSpecification: siteConfig.openingHours.map(hour => {
    const times = hour.time === "Closed" ? null : hour.time.split(" – ");
    if (!times) return null;
    return {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: hour.days.includes("Tuesday") ? ["Tuesday", "Wednesday", "Thursday"] : [hour.days],
      opens: times[0].replace(" PM", "").replace(":", ""), // Simplification for template
      closes: times[1].replace(" PM", "").replace(":", "") 
    };
  }).filter(Boolean),
  menu: "https://atelierorigine.com/#menu",
  acceptsReservations: "True"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${sans.variable} ${serif.variable}`}>
        <ScrollProgressBar />
        <InteractiveCursor />
        {children}
      </body>
    </html>
  );
}
