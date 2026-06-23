import Link from "next/link";
import { 
  Share2, Search, Target, Laptop, Palette, 
  Smartphone, ArrowRight, TrendingUp, ShoppingCart, GraduationCap, Mail
} from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";

const detailedServices = [
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    desc: "Data-driven digital strategies that expand your online presence and drive measurable business growth.",
    features: [
      "Custom Digital Strategy & Planning",
      "Multi-Channel Campaign Management",
      "Performance Tracking & Analytics"
    ]
  },
  {
    icon: Laptop,
    title: "Website Development",
    desc: "Establish a robust home base for your brand online. We build sleek, responsive, and secure custom layouts.",
    features: [
      "Modern Mobile-First Design Systems",
      "Single-Page Applications & Corporate Portals",
      "Performance & Security Optimization"
    ]
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Native or cross-platform hybrid application pipelines tailored to extend service delivery straight to customer smartphones.",
    features: [
      "iOS & Android Apps (React Native/Flutter)",
      "Sleek, fluid animations & UI workflows",
      "Third-party API integrations"
    ]
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Development",
    desc: "Powerful online stores with seamless UX, secure payments, and optimized product listings.",
    features: [
      "Custom Online Store Development",
      "Payment Gateway & Inventory Setup",
      "Shopping Cart & Checkout Optimization"
    ]
  },
  {
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    desc: "Rank organically on Google search. Capture high-intent queries, drive quality organic traffic, and optimize conversion metrics.",
    features: [
      "Comprehensive Keyword Research & Mapping",
      "On-Page Content & Meta-tags Tuning",
      "Technical SEO & Backlink building"
    ]
  },
  {
    icon: Target,
    title: "Google Ads",
    desc: "Place advertisements where your buyers search. Drive qualified clicks, manage budget metrics, and maximize advertising ROIs.",
    features: [
      "Search, Display, and Video Campaign Setup",
      "A/B Copy Testing & Bid Optimization",
      "Negative Keyword Filtering & Weekly Tracking"
    ]
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    desc: "Connect directly with customers across platforms (Facebook, Instagram, LinkedIn, YouTube). We design high-engagement strategies.",
    features: [
      "Custom Content Calendar & Post Schedules",
      "Brand Audience Building & Analysis",
      "Paid Social Media Lead Campaigns"
    ]
  },
  {
    icon: Palette,
    title: "Graphic Design",
    desc: "Visual storytelling assets designed to capture focus, strengthen your brand footprint, and improve client conversions.",
    features: [
      "Logo & Brand Guideline Packages",
      "Social Media Post & Ad Creative Mockups",
      "Brochures, Catalogues & Marketing Flyers"
    ]
  },
  {
    icon: GraduationCap,
    title: "Internship Programs",
    desc: "Real-world internship programs helping students build industry-ready skills on live projects.",
    features: [
      "Hands-on Practical Training",
      "Live Client Project Experience",
      "Mentorship & Career Guidance"
    ]
  },
  {
    icon: Mail,
    title: "Email Marketing",
    desc: "Targeted email campaigns that nurture leads, retain customers, and drive repeat conversions.",
    features: [
      "Automated Email Sequences & Drip Campaigns",
      "Newsletter Design & Copywriting",
      "List Segmentation & Performance Tracking"
    ]
  }
];

export default function Services() {
  return (
    <>
      {/* Hero Banner */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 to-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-100/60 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <Reveal width="100%">
            <span className="text-green-600 font-semibold tracking-wider uppercase text-sm mb-4 block">Growth Engines</span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 mb-6">Our Services</h1>
          </Reveal>
          <Reveal width="100%" delay={0.1}>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Comprehensive suite of digital marketing solutions and technical development services designed to scale your business online.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {detailedServices.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.05}>
                <div className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col md:flex-row gap-8 group">
                  <div className="shrink-0">
                    <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center group-hover:bg-green-600 group-hover:text-slate-900 transition-colors">
                      <service.icon className="w-8 h-8" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4">{service.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {service.desc}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-700">
                          <div className="mt-1 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                            <span className="text-xs font-bold">✓</span>
                          </div>
                          <span className="text-sm font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="bg-gradient-to-r from-green-600 to-teal-500 rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl shadow-green-600/20">
              <div className="absolute -top-1/2 -left-1/4 w-[600px] h-[600px] bg-white/10 rounded-full blur-[80px] pointer-events-none" />
              
              <div className="relative z-10 max-w-3xl mx-auto">
                <h3 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 tracking-tight">
                  Accelerate Your Business Growth Today
                </h3>
                <p className="text-green-50 text-lg md:text-xl mb-10 leading-relaxed font-medium">
                  Contact our digital marketing consultants for a complete, zero-cost analysis of your brand's current online footprint and a tailored strategy proposal.
                </p>
                <Button size="lg" variant="secondary" className="h-14 px-8 text-lg bg-white text-green-700 hover:bg-slate-50 border-none shadow-xl shadow-black/10" asChild>
                  <Link href="/contact">
                    Request Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
