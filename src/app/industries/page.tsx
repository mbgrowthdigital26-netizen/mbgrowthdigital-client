import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertTriangle, Sparkles, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { StaggerReveal, StaggerItem } from "@/components/shared/StaggerReveal";
import { industries } from "@/data/industries";

const gradientColors = [
  "from-green-500 to-emerald-600",
  "from-blue-500 to-indigo-600",
  "from-teal-500 to-cyan-600",
  "from-sky-500 to-blue-600",
  "from-pink-500 to-rose-600",
  "from-violet-500 to-purple-600",
  "from-amber-500 to-orange-600",
  "from-indigo-500 to-blue-600",
  "from-rose-500 to-red-600",
  "from-emerald-500 to-green-600",
  "from-slate-600 to-slate-800",
];

export default function Industries() {
  return (
    <>
      {/* Hero Banner */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 to-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-100/60 to-transparent pointer-events-none" />
        <div className="absolute top-1/3 -right-1/4 w-[600px] h-[600px] bg-green-200/30 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 -left-1/4 w-[400px] h-[400px] bg-teal-200/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <Reveal width="100%" direction="blur">
            <span className="text-green-600 font-semibold tracking-wider uppercase text-sm mb-4 block">Who We Work With</span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 mb-6">Industries We Serve</h1>
          </Reveal>
          <Reveal width="100%" delay={0.1} direction="up">
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We understand that every industry has unique challenges, audiences, and growth opportunities. Our strategies are tailored to deliver real results for your specific sector.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 bg-white sticky top-[72px] z-30 border-b border-slate-100 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {industries.map((ind) => (
              <a
                key={ind.slug}
                href={`#${ind.slug}`}
                className="px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border border-slate-200 bg-white text-slate-600 hover:border-green-400 hover:text-green-600 hover:bg-green-50 whitespace-nowrap"
              >
                <span className="mr-1">{ind.icon}</span>
                {ind.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Cards */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute -right-1/4 top-0 w-1/2 h-1/2 bg-green-500/3 blur-[160px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 space-y-20">
          {industries.map((industry, idx) => {
            const gradient = gradientColors[idx % gradientColors.length];
            const isEven = idx % 2 === 0;

            return (
              <Reveal key={industry.slug} delay={0.05} direction={isEven ? "left" : "right"}>
                <div
                  id={industry.slug}
                  className="scroll-mt-40 bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden hover:shadow-xl hover:border-green-300/50 transition-all duration-500 group"
                >
                  <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                    {/* Icon / Visual Side */}
                    <div className={`lg:w-2/5 relative bg-gradient-to-br ${gradient} flex items-center justify-center py-16 lg:py-0 min-h-[200px] lg:min-h-[400px]`}>
                      <div className="absolute inset-0 bg-black/10" />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.15),transparent_60%)]" />
                      <div className="relative z-10 text-center">
                        <span className="text-7xl md:text-8xl block mb-4 drop-shadow-lg group-hover:scale-110 transition-transform duration-500">
                          {industry.icon}
                        </span>
                        <p className="text-white/90 text-sm font-semibold tracking-wider uppercase">
                          {industry.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="lg:w-3/5 p-8 md:p-10 lg:p-12">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold tracking-widest text-green-600 uppercase bg-green-50 px-2.5 py-1 rounded-md border border-green-200">
                          Industry
                        </span>
                        <span className="text-xs font-medium text-slate-400">
                          {String(idx + 1).padStart(2, "0")} / {String(industries.length).padStart(2, "0")}
                        </span>
                      </div>

                      <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-4 group-hover:text-green-700 transition-colors">
                        {industry.name}
                      </h2>
                      <p className="text-slate-600 leading-relaxed mb-6">
                        {industry.description}
                      </p>

                      {/* Challenges */}
                      <div className="mb-6">
                        <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-3 flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-amber-500" />
                          Common Challenges
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {industry.challenges.map((c) => (
                            <div key={c} className="flex items-start gap-2 text-sm text-slate-500">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                              <span>{c}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Opportunities */}
                      <div className="mb-6">
                        <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-3 flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-green-500" />
                          Growth Opportunities
                        </h4>
                        <div className="space-y-2">
                          {industry.opportunities.map((o) => (
                            <div key={o} className="flex items-start gap-2 text-sm text-slate-600">
                              <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                              <span>{o}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Recommended Services */}
                      <div className="mb-6">
                        <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-3">
                          Recommended Services
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {industry.services.map((s) => (
                            <span
                              key={s}
                              className="px-3 py-1.5 bg-white text-slate-700 text-xs font-medium rounded-full border border-slate-200 hover:border-green-400 hover:text-green-600 hover:bg-green-50 transition-colors cursor-default"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <Link
                        href={`/contact`}
                        className="inline-flex items-center gap-2 text-green-600 font-semibold text-sm hover:gap-3 transition-all group/link"
                      >
                        Get a custom strategy for {industry.name}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-green-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_60%)] pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <Reveal width="100%" direction="blur">
            <span className="text-green-200 font-semibold tracking-wider uppercase text-sm mb-4 block">
              Your Industry, Our Expertise
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 tracking-tight">
              Don&apos;t See Your Industry? We Still Got You.
            </h2>
          </Reveal>
          <Reveal width="100%" delay={0.1} direction="up">
            <p className="text-lg text-green-100 max-w-2xl mx-auto leading-relaxed mb-10">
              Our strategies are adaptable to any industry. Get in touch and let us craft a customized digital growth plan for your unique business needs.
            </p>
          </Reveal>
          <Reveal width="100%" delay={0.2} direction="scale">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button size="lg" asChild className="rounded-full h-14 text-base px-10 bg-white text-green-700 hover:bg-green-50 shadow-lg shadow-green-900/20 font-semibold">
                <Link href="/contact">
                  Let&apos;s Talk <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full h-14 text-base px-10 border-2 border-white/30 text-white hover:bg-white/10 bg-transparent">
                <Link href="/services">
                  View All Services <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
