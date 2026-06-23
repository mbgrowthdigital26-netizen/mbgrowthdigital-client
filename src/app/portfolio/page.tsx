"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, TrendingUp, PenTool, GraduationCap, Megaphone, Palette, ArrowRight, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    category: "web-dev",
    categoryLabel: "Web Development",
    title: "EcoShop E-Commerce",
    desc: "Custom, high-speed storefront built with modern layouts, cart integrations, and structured SEO architecture.",
    stats: [{ val: "+140%", lbl: "Conversion" }, { val: "1.8s", lbl: "Load Time" }],
    icon: ShoppingCart,
    color: "from-teal-200 to-green-100",
    iconColor: "text-green-600"
  },
  {
    id: 2,
    category: "marketing",
    categoryLabel: "Digital Marketing",
    title: "PrimeFitness Leads",
    desc: "A multi-platform paid social media funnel targeting local regions, optimized for conversion and low cost-per-lead.",
    stats: [{ val: "2.5k+", lbl: "Leads Gen" }, { val: "-35%", lbl: "CPL Reduction" }],
    icon: TrendingUp,
    color: "from-purple-200 to-green-100",
    iconColor: "text-purple-600"
  },
  {
    id: 3,
    category: "graphic-design",
    categoryLabel: "Graphic Design",
    title: "AeroBrand Identity",
    desc: "Complete visual branding suite containing custom logo sets, corporate typographies, colors, and layout guidelines.",
    stats: [{ val: "100%", lbl: "Custom Icons" }, { val: "30+", lbl: "Assets Delivered" }],
    icon: PenTool,
    color: "from-indigo-200 to-teal-100",
    iconColor: "text-indigo-600"
  },
  {
    id: 4,
    category: "web-dev",
    categoryLabel: "Web Development",
    title: "EduLearn Web Portal",
    desc: "Responsive digital educational portal featuring modular lesson plans, teacher dashboards, and video players.",
    stats: [{ val: "50k+", lbl: "Active Users" }, { val: "99.9%", lbl: "Uptime" }],
    icon: GraduationCap,
    color: "from-green-200 to-teal-100",
    iconColor: "text-green-600"
  },
  {
    id: 5,
    category: "marketing",
    categoryLabel: "Digital Marketing",
    title: "GourmetHub Social Plan",
    desc: "Integrated Reels campaigns, local food blogger reviews, and hashtag schemas driving viral visits to a local restaurant chain.",
    stats: [{ val: "1.2M", lbl: "Campaign Reach" }, { val: "+85%", lbl: "Bookings Growth" }],
    icon: Megaphone,
    color: "from-green-300 to-teal-200",
    iconColor: "text-green-700"
  },
  {
    id: 6,
    category: "graphic-design",
    categoryLabel: "Graphic Design",
    title: "Apex Logo System",
    desc: "Sleek, minimalist logo iterations and brand guidelines designed for a modern software consultancy based in Chennai.",
    stats: [{ val: "100%", lbl: "Vector Grid" }, { val: "SVG", lbl: "Ready Formats" }],
    icon: Palette,
    color: "from-teal-300 to-green-100",
    iconColor: "text-teal-700"
  }
];

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  const filteredProjects = projects.filter(p => filter === "all" || p.category === filter);

  return (
    <>
      {/* Hero Banner */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 to-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-100/60 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <Reveal width="100%">
            <span className="text-green-600 font-semibold tracking-wider uppercase text-sm mb-4 block">Our Work</span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 mb-6">Our Portfolio</h1>
          </Reveal>
          <Reveal width="100%" delay={0.1}>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              A collection of successful projects and digital campaigns engineered by our team and interns to drive growth and build online value.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          
          {/* Filters */}
          <Reveal delay={0.2} className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { id: "all", label: "All Projects" },
                { id: "web-dev", label: "Web Development" },
                { id: "marketing", label: "Marketing" },
                { id: "graphic-design", label: "Graphic Design" },
              ].map(f => (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                    filter === f.id 
                      ? "bg-green-600 text-slate-900 shadow-md shadow-green-600/20" 
                      : "bg-white text-slate-600 hover:bg-green-50 hover:text-green-700 border border-slate-200"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={project.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 group hover:shadow-xl transition-all"
                >
                  <div className={`h-64 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                    <project.icon className={`w-24 h-24 ${project.iconColor} opacity-80 group-hover:scale-110 transition-transform duration-500`} />
                    <div className="absolute inset-0 bg-green-100 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                      <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-green-600 transform scale-0 group-hover:scale-100 transition-transform delay-100">
                        <ExternalLink className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div className="p-8 text-center">
                    <span className="text-green-600 font-semibold text-sm mb-2 block">{project.categoryLabel}</span>
                    <h3 className="text-2xl font-heading font-bold text-slate-900 mb-3">{project.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                      {project.desc}
                    </p>
                    <div className="flex items-center justify-center gap-6 pt-6 border-t border-slate-200">
                      {project.stats.map((stat, i) => (
                        <div key={i} className="text-center">
                          <div className="text-lg font-bold text-slate-900">{stat.val}</div>
                          <div className="text-xs text-slate-600 font-medium uppercase tracking-wider">{stat.lbl}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="bg-gradient-to-r from-green-600 to-teal-500 rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl shadow-green-600/20">
              <div className="absolute -bottom-1/2 -right-1/4 w-[600px] h-[600px] bg-white/10 rounded-full blur-[80px] pointer-events-none" />
              
              <div className="relative z-10 max-w-3xl mx-auto">
                <h3 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 tracking-tight">
                  Let's Build Something Awesome
                </h3>
                <p className="text-green-50 text-lg md:text-xl mb-10 leading-relaxed font-medium">
                  Ready to elevate your online search exposure or build custom software designs? Our digital experts are ready to begin.
                </p>
                <Button size="lg" variant="secondary" className="h-14 px-8 text-lg bg-white text-green-700 hover:bg-slate-50 border-none shadow-xl shadow-black/10" asChild>
                  <Link href="/contact">
                    Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
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
