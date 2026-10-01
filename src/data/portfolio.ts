export interface PortfolioItem {
  id: string;
  title: string;
  category: "Web Development" | "SEO" | "Digital Marketing" | "Social Media" | "Branding" | "E-Commerce";
  client: string;
  description: string;
  tags: string[];
  isPlaceholder: boolean;
}

// IMPORTANT: These are placeholder/demo entries.
// Replace with real verified client projects when available.
// Do not present placeholder data as real client results.
export const portfolioItems: PortfolioItem[] = [
  {
    id: "web-01",
    title: "Business Website Redesign",
    category: "Web Development",
    client: "Sample Client — Placeholder",
    description: "A modern, responsive business website redesign with SEO optimization and improved user experience. This is a placeholder entry to be replaced with a real verified client project.",
    tags: ["Web Design", "Responsive", "SEO-Optimized"],
    isPlaceholder: true,
  },
  {
    id: "seo-01",
    title: "Local SEO Campaign",
    category: "SEO",
    client: "Sample Client — Placeholder",
    description: "Local SEO strategy including Google Business Profile optimization and local citation building. This is a placeholder entry to be replaced with a real verified client project.",
    tags: ["Local SEO", "Google Maps", "Citation Building"],
    isPlaceholder: true,
  },
  {
    id: "dm-01",
    title: "Digital Marketing Campaign",
    category: "Digital Marketing",
    client: "Sample Client — Placeholder",
    description: "Integrated digital marketing campaign covering SEO, social media, and Google Ads. This is a placeholder entry to be replaced with a real verified client project.",
    tags: ["Digital Marketing", "Google Ads", "Social Media"],
    isPlaceholder: true,
  },
  {
    id: "sm-01",
    title: "Social Media Management",
    category: "Social Media",
    client: "Sample Client — Placeholder",
    description: "Complete social media management for Instagram and Facebook with consistent content strategy. This is a placeholder entry to be replaced with a real verified client project.",
    tags: ["Instagram", "Facebook", "Content Strategy"],
    isPlaceholder: true,
  },
  {
    id: "brand-01",
    title: "Brand Identity Design",
    category: "Branding",
    client: "Sample Client — Placeholder",
    description: "Complete brand identity including logo design, color palette, and brand guidelines. This is a placeholder entry to be replaced with a real verified client project.",
    tags: ["Logo Design", "Brand Identity", "Guidelines"],
    isPlaceholder: true,
  },
  {
    id: "ec-01",
    title: "E-Commerce Store Development",
    category: "E-Commerce",
    client: "Sample Client — Placeholder",
    description: "Full-featured WooCommerce online store with payment gateway integration and inventory management. This is a placeholder entry to be replaced with a real verified client project.",
    tags: ["WooCommerce", "Payment Gateway", "Online Store"],
    isPlaceholder: true,
  },
];

export type PortfolioCategory = PortfolioItem["category"] | "All";

export const portfolioCategories: PortfolioCategory[] = [
  "All",
  "Web Development",
  "SEO",
  "Digital Marketing",
  "Social Media",
  "Branding",
  "E-Commerce",
];
