export interface Industry {
  slug: string;
  name: string;
  icon: string;
  tagline: string;
  description: string;
  challenges: string[];
  services: string[];
  opportunities: string[];
}

export const industries: Industry[] = [
  {
    slug: "startups",
    name: "Startups",
    icon: "🚀",
    tagline: "Launch faster, grow smarter",
    description: "Early-stage startups need to build brand presence, attract customers, and establish credibility quickly — all with limited budgets.",
    challenges: [
      "Building brand awareness from scratch",
      "Limited marketing budget",
      "No existing customer base",
      "Need to validate product-market fit quickly",
      "Competing against established players",
    ],
    services: ["Digital Marketing", "Website Development", "SEO", "Branding & Graphic Design", "Social Media Marketing"],
    opportunities: [
      "Build a strong digital foundation early",
      "Grow organically through SEO and content",
      "Use paid ads for quick traction",
      "Build brand authority through consistent social media",
    ],
  },
  {
    slug: "small-businesses",
    name: "Small Businesses",
    icon: "🏪",
    tagline: "Compete effectively in your market",
    description: "Small businesses need practical, cost-effective marketing solutions that deliver real results without enterprise budgets.",
    challenges: [
      "Competing with larger businesses",
      "Limited marketing resources",
      "Generating consistent leads online",
      "Building local brand recognition",
      "Time constraints for managing marketing",
    ],
    services: ["Local SEO", "Social Media Marketing", "Google Ads", "Website Development", "Google Business Profile Management"],
    opportunities: [
      "Dominate local search results",
      "Build community through social media",
      "Generate leads with targeted Google Ads",
      "Outrank competitors with strong SEO",
    ],
  },
  {
    slug: "local-businesses",
    name: "Local Businesses",
    icon: "📍",
    tagline: "Be found by customers in your area",
    description: "Local businesses need to be visible when nearby customers search for products and services. Local digital marketing is the key.",
    challenges: [
      "Not appearing in Google Maps searches",
      "Customers not finding them online",
      "Poor online reputation management",
      "Outdated or no website",
      "Inconsistent business information online",
    ],
    services: ["Local SEO", "Google Business Profile Management", "Website Development", "Social Media Marketing", "Google Ads"],
    opportunities: [
      "Appear in Google Maps and local pack",
      "Attract walk-in customers through local search",
      "Build strong local reputation with reviews",
      "Reach local customers through targeted ads",
    ],
  },
  {
    slug: "travel-hospitality",
    name: "Travel & Hospitality",
    icon: "✈️",
    tagline: "Attract travellers and fill your bookings",
    description: "Travel and hospitality businesses need to capture high-intent travellers online and convert them into bookings year-round.",
    challenges: [
      "Seasonal demand fluctuations",
      "High online competition for bookings",
      "Poor online visibility and reviews",
      "No direct booking website",
      "Reliance on third-party booking platforms",
    ],
    services: ["SEO", "Google Ads", "Social Media Marketing", "Website Development", "Content Marketing"],
    opportunities: [
      "Rank for destination-based search terms",
      "Run targeted travel ads during peak seasons",
      "Build brand loyalty through social media",
      "Create compelling travel content that drives bookings",
    ],
  },
  {
    slug: "beauty-fitness",
    name: "Beauty & Fitness",
    icon: "💪",
    tagline: "Build your client base and grow bookings",
    description: "Beauty salons, gyms, spas, and fitness studios need strong local presence and engaging social media to attract and retain clients.",
    challenges: [
      "High local competition in beauty and fitness",
      "Client retention and loyalty",
      "Building a strong social media presence",
      "Online appointment booking not set up",
      "Showcasing services and results effectively",
    ],
    services: ["Social Media Marketing", "Local SEO", "Google Business Profile Management", "Meta Ads", "Website Development"],
    opportunities: [
      "Showcase transformations on Instagram and Facebook",
      "Attract local clients through Google Maps",
      "Run offers and promotions through social ads",
      "Build a loyal community online",
    ],
  },
  {
    slug: "finance-professional-services",
    name: "Finance & Professional Services",
    icon: "💼",
    tagline: "Build trust and attract qualified clients",
    description: "Finance professionals, consultants, and professional service firms need to build credibility and attract high-quality clients online.",
    challenges: [
      "Building trust and credibility online",
      "Generating qualified leads",
      "Standing out in a competitive market",
      "Content compliance and brand positioning",
      "Long sales cycles require nurturing",
    ],
    services: ["SEO", "Content Marketing", "LinkedIn Marketing", "Website Development", "Email Marketing"],
    opportunities: [
      "Establish thought leadership through content",
      "Generate qualified leads through SEO",
      "Build trust with professional website and branding",
      "Nurture prospects with email marketing",
    ],
  },
  {
    slug: "restaurants-food",
    name: "Restaurants & Food Businesses",
    icon: "🍽️",
    tagline: "Fill your tables and grow your orders",
    description: "Restaurants and food businesses need strong local presence, mouth-watering social media content, and online ordering visibility.",
    challenges: [
      "Attracting local diners and takeaway orders",
      "Standing out in a saturated food market",
      "Managing online reviews and reputation",
      "No consistent social media content",
      "Not visible in local food searches",
    ],
    services: ["Local SEO", "Social Media Marketing", "Google Business Profile Management", "Meta Ads", "Google Ads"],
    opportunities: [
      "Rank in local food and restaurant searches",
      "Showcase dishes through engaging social content",
      "Attract new customers with targeted food ads",
      "Build a loyal local following online",
    ],
  },
  {
    slug: "it-software",
    name: "IT & Software",
    icon: "💻",
    tagline: "Generate leads and grow your tech business",
    description: "IT companies and software firms need to attract B2B clients, showcase technical expertise, and generate consistent leads online.",
    challenges: [
      "Long B2B sales cycles",
      "Technical content that resonates with decision makers",
      "Building brand authority in competitive tech market",
      "Lead generation for enterprise clients",
      "Demonstrating product value through digital channels",
    ],
    services: ["SEO", "Content Marketing", "Google Ads", "Website Development", "Email Marketing"],
    opportunities: [
      "Build technical authority through thought leadership",
      "Generate qualified B2B leads through targeted SEO",
      "Showcase expertise through case studies and content",
      "Reach decision makers with LinkedIn and Google Ads",
    ],
  },
  {
    slug: "education-colleges",
    name: "Education & Colleges",
    icon: "🎓",
    tagline: "Attract students and grow enrolments",
    description: "Educational institutions need to reach prospective students, showcase programs, and drive enrolment enquiries through digital channels.",
    challenges: [
      "Reaching prospective students and parents",
      "Competitive enrolment landscape",
      "Showcasing course value and outcomes",
      "Managing reputation and online reviews",
      "Generating enquiries and applications",
    ],
    services: ["SEO", "Google Ads", "Meta Ads", "Social Media Marketing", "Content Marketing"],
    opportunities: [
      "Rank for course and college-related searches",
      "Reach students on Instagram and Facebook",
      "Run enrolment campaigns during admission seasons",
      "Build reputation through student success stories",
    ],
  },
  {
    slug: "ecommerce",
    name: "E-Commerce",
    icon: "🛒",
    tagline: "Grow your online store sales",
    description: "E-commerce businesses need traffic, conversion optimization, and customer retention strategies to compete and grow profitably.",
    challenges: [
      "High customer acquisition costs",
      "Low conversion rates",
      "Cart abandonment",
      "Competing with marketplaces like Amazon",
      "Customer retention and repeat purchases",
    ],
    services: ["E-Commerce Development", "SEO", "Google Ads", "Meta Ads", "Email Marketing"],
    opportunities: [
      "Drive organic traffic through product SEO",
      "Recover abandoned carts with email marketing",
      "Retarget visitors with Meta and Google ads",
      "Build customer loyalty through email campaigns",
    ],
  },
  {
    slug: "corporate-enterprise",
    name: "Corporate & Enterprise",
    icon: "🏢",
    tagline: "Strengthen your digital presence at scale",
    description: "Corporate and enterprise businesses need comprehensive digital strategies, brand management, and scalable marketing solutions.",
    challenges: [
      "Maintaining consistent brand across multiple channels",
      "Generating enterprise-level leads",
      "Managing complex multi-channel campaigns",
      "Internal stakeholder alignment on marketing",
      "Measuring ROI across departments",
    ],
    services: ["Digital Marketing", "SEO", "Content Marketing", "Website Development", "Branding & Graphic Design"],
    opportunities: [
      "Build dominant industry authority through content",
      "Generate qualified enterprise leads through SEO",
      "Create consistent, professional brand identity",
      "Implement measurable marketing ROI tracking",
    ],
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
