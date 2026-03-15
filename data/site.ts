export type MenuCategory = "Tasting" | "Cellar" | "Patisserie";

export type MenuItem = {
  id: string;
  category: MenuCategory;
  title: string;
  subtitle: string;
  price: string;
  description: string;
  image: string;
  peelImage: string;
  accent: string;
};

export type GalleryItem = {
  id: string;
  title: string;
  image: string;
  description: string;
};

// --- GLOBAL CONFIGURATION ---
export const siteConfig = {
  name: "Atelier Origine",
  tagline: "SLOW TASTING ROOM.",
  email: "reserve@atelierorigine.com",
  phone: "+33 1 42 68 12 00",
  address: "123 Rue du Faubourg Saint-Honoré, Paris 75008, France",
  googleMapsUrl: "https://maps.google.com",
  instagramUrl: "https://instagram.com/atelierorigine",
  foundedYear: "2019",
  designer: "Dhruv",
  poweredBy: "HRILAX",
  currencySymbol: "€",
  pricing: "€185 per person",
  metadata: {
    title: "Atelier Origine — Boutique Tasting Room Paris",
    description: "A 14-seat boutique restaurant in Paris dedicated to seasonal provenance, rare pours, and slow fire. Experience Chef Laurent Moreau's daily tasting menu.",
    keywords: ["Paris Restaurant", "Tasting Menu", "Fine Dining", "Michelin Star", "Boutique Dining"],
  },
  openingHours: [
    { days: "Tuesday – Thursday", time: "6:30 – 10:00 PM" },
    { days: "Friday – Saturday", time: "6:00 – 10:30 PM" },
    { days: "Sunday", time: "6:00 – 9:30 PM" },
    { days: "Monday", time: "Closed" }
  ],
  logistics: {
    metro: "Line 1, 9, 13 (Miroir)",
    valet: "Available from 6:00 PM",
  },
  tastingCourses: [
    {
      number: "01",
      french: "Amuse-Bouche",
      english: "The Welcome Bite",
      description: "One morsel. A promise of everything to follow — set quietly on the table before a word is spoken.",
      accent: "rgba(214, 166, 107, 0.12)",
    },
    {
      number: "02",
      french: "Entrée",
      english: "First Plate",
      description: "A single, seasonal vegetable or shellfish — elevated to the point of ceremony. Cold to warm. Crisp to soft.",
      accent: "rgba(191, 117, 93, 0.1)",
    },
    {
      number: "03",
      french: "Poisson",
      english: "Fish Course",
      description: "Line-caught and buttered with restraint. The sea, clarified — served at the exact temperature of intention.",
      accent: "rgba(122, 150, 138, 0.12)",
    },
    {
      number: "04",
      french: "Viande",
      english: "Meat Course",
      description: "Heritage breed, rested long. Finished with a jus that takes three days. Silence follows each plate.",
      accent: "rgba(160, 130, 108, 0.12)",
    },
    {
      number: "05",
      french: "Pré-Dessert",
      english: "Palate Cleanser",
      description: "A small translucent moment. Sorbet or gel — acid and cold — to reset and reorient the senses.",
      accent: "rgba(150, 160, 180, 0.1)",
    },
    {
      number: "06",
      french: "Mignardises",
      english: "Sweet Farewell",
      description: "A tray arrives at the table. Four small sweets. No menu. The chef decides what the evening deserves.",
      accent: "rgba(180, 140, 120, 0.12)",
    },
  ]
};

export const navigation = [
  { id: "story", label: "Story" },
  { id: "chef", label: "Chef" },
  { id: "tasting", label: "Ritual" },
  { id: "menu", label: "Menu" },
  { id: "gallery", label: "Gallery" },
  { id: "cellar", label: "Cellar" },
  { id: "events", label: "Events" }
];

export const heroLines = ["A quiet room", "for slow fire,", "rare pours."];

export const storyItems = [
  {
    title: "The Tasting Ritual",
    body: "Every evening begins with a single amuse-bouche and a poured glass. Our chefs set the pace — guests surrender the clock.",
    x: -40
  },
  {
    title: "Cellar Provenance",
    body: "Our wine list traces within 80 miles of origin. The sommelier pairs each course with a pour chosen days in advance of your visit.",
    x: 0
  },
  {
    title: "Seasonal Roots",
    body: "The menu rewrites itself four times a year. What's on your plate was harvested within 48 hours — from farms we visit by name.",
    x: 40
  }
];

export const chefData = {
  name: "Laurent Moreau",
  role: "Executive Chef & Founder",
  quote: "I don't cook for hunger. I cook for the moment when a guest puts down their fork and goes still — not full, but finally present.",
  bio: [
    "Trained under Alain Passard at L'Arpège, Chef Moreau spent seven years in Paris perfecting a discipline rooted in restraint. He returned to open Atelier Origine in 2019 — a 14-seat room built entirely around a single daily menu.",
    "Every dish is written by hand the morning it is served. Nothing crosses the pass twice."
  ],
  stats: [
    { label: "⭑⭑", caption: "Michelin Stars" },
    { label: "2019", caption: "Year Founded" },
    { label: "14", caption: "Seats Nightly" },
    { label: "1", caption: "Menu. Always." },
  ]
};

export const menuCategories: Array<MenuCategory | "All"> = ["All", "Tasting", "Cellar", "Patisserie"];

export const menuItems: MenuItem[] = [
  {
    id: "ember-scallop",
    category: "Tasting",
    title: "Ember Scallop",
    subtitle: "Brown butter, kaffir, preserved citrus",
    price: "$28",
    description: "A seared first course finished tableside with warm shellfish glaze and citrus vapor.",
    image: "/images/scallop_main.png",
    peelImage: "/images/scallop_alt.png",
    accent: "rgba(214, 166, 107, 0.34)"
  },
  {
    id: "heirloom-carrot",
    category: "Tasting",
    title: "Heirloom Carrot",
    subtitle: "Black garlic, buckwheat, cultured cream",
    price: "$22",
    description: "Charred sweetness with earthy crunch, plated as a warm still life.",
    image: "/images/carrot_main.png",
    peelImage: "/images/carrot_alt.png",
    accent: "rgba(191, 117, 93, 0.32)"
  },
  {
    id: "cellar-flight",
    category: "Cellar",
    title: "Cellar Flight",
    subtitle: "Three pours, low-intervention, mineral finish",
    price: "$36",
    description: "A guided trio that moves from floral restraint to saline depth.",
    image: "/images/wine_main.png",
    peelImage: "/images/wine_alt.png",
    accent: "rgba(122, 150, 138, 0.3)"
  },
  {
    id: "midnight-tarte",
    category: "Patisserie",
    title: "Midnight Tarte",
    subtitle: "Single-origin chocolate, smoked cream",
    price: "$18",
    description: "Silk, smoke, and a final crack of cacao nib brittle.",
    image: "/images/tart_main.png",
    peelImage: "/images/tart_alt.png",
    accent: "rgba(120, 98, 82, 0.34)"
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: "salon",
    title: "Salon de Feu",
    image: "/images/salon.png",
    description: "The main dining room is wrapped in shadow, brass, and a linen-soft glow."
  },
  {
    id: "counter",
    title: "Chef's Counter",
    image: "/images/counter.png",
    description: "Eight seats, one nightly menu, and a choreography of steam and steel."
  },
  {
    id: "cellar",
    title: "Private Cellar",
    image: "/images/cellar.png",
    description: "A private tasting alcove for slow pours and longer conversations."
  }
];

export const availableTimes = ["6:00 PM", "6:30 PM", "7:15 PM", "8:00 PM", "8:45 PM"];
