export interface Project {
  slug: string;
  name: string;
  category: string;
  logo: string;
  image: string;
  website: string;
  services: string[];
  technologies: string[];
  features: string[];
  seoFeatures: string[];
  description: string;
  fullDescription: string;
  screenshots: string[];
}

export const projects: Project[] = [
  {
    slug: "heaven-incarnate-tours",
    name: "Heaven Incarnate Tours & Travels",
    category: "Travel & Tourism",
    logo: "/projects/heaven-incarnate-logo.png",
    // Placeholder image until actual screenshot is provided
    image: "/projects/heaven-incarnate-logo.png",
    website: "https://www.heavenincarnatetours.com/",
    services: [
      "Website Development",
      "SEO",
      "Technical SEO",
      "Responsive Design",
      "Performance Optimization"
    ],
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion"
    ],
    features: [
      "Responsive navigation",
      "Hero section",
      "Services",
      "Destinations",
      "Packages",
      "Contact"
    ],
    seoFeatures: [
      "SEO titles",
      "Meta descriptions",
      "H1/H2 structure",
      "Image ALT text",
      "Canonical URLs",
      "Sitemap",
      "Robots.txt"
    ],
    description: "A modern, responsive travel agency website developed for Heaven Incarnate Tours & Travels, with a focus on user experience, search visibility, performance, and mobile responsiveness.",
    fullDescription: "M.B Growth Digital developed a modern digital presence for Heaven Incarnate Tours & Travels with a focus on responsive design, user experience, search visibility and website performance.",
    screenshots: [
      "/projects/heaven-incarnate-logo.png"
    ]
  }
];
