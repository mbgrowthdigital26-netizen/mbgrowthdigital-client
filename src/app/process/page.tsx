import Link from "next/link";
import {
  MessageSquare, Search, Lightbulb, Rocket, BarChart3,
  Wrench, ArrowRight, CheckCircle2, Clock, Users, Target,
  Handshake, FileSearch, PenTool, Code2, TestTube, Send,
  HeadphonesIcon
} from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { StaggerReveal, StaggerItem } from "@/components/shared/StaggerReveal";

const processSteps = [
  {
    num: "01",
    title: "Discovery & Consultation",
    icon: MessageSquare,
    description: "We start by understanding your business, goals, target audience, and challenges. Through in-depth conversations, we gather every detail needed to build a strategy that fits.",
    deliverables: ["Business requirements gathering", "Target audience analysis", "Competitor landscape review", "Project scope definition"],
    color: "from-green-500 to-emerald-600",
    duration: "1–2 Days",
  },
  {
    num: "02",
    title: "Research & Analysis",
    icon: FileSearch,
    description: "We dive deep into market research, industry trends, and competitor strategies. Data-driven insights form the backbone of every recommendation we make.",
    deliverables: ["Market & industry research", "Keyword & SEO audit", "Competitor analysis report", "Data-driven opportunity mapping"],
    color: "from-teal-500 to-cyan-600",
    duration: "2–3 Days",
  },
  {
    num: "03",
    title: "Strategy & Planning",
    icon: Lightbulb,
    description: "Based on our findings, we craft a tailored strategy with clear milestones, timelines, and KPIs. You will know exactly what to expect and when.",
    deliverables: ["Custom strategy document", "Project roadmap & timeline", "KPI & success metrics definition", "Budget & resource allocation"],
    color: "from-blue-500 to-indigo-600",
    duration: "2–4 Days",
  },
  {
    num: "04",
    title: "Design & Development",
    icon: PenTool,
    description: "Our creative and technical teams bring the strategy to life — designing stunning visuals, writing compelling content, and building robust digital solutions.",
    deliverables: ["UI/UX design mockups", "Content creation & copywriting", "Website or app development", "Campaign asset preparation"],
    color: "from-violet-500 to-purple-600",
    duration: "1–3 Weeks",
  },
  {
    num: "05",
    title: "Testing & Review",
    icon: TestTube,
    description: "Before anything goes live, we rigorously test every element for quality, performance, and accuracy. You review and approve everything at this stage.",
    deliverables: ["Quality assurance testing", "Cross-device & browser checks", "Performance optimization", "Client review & approval"],
    color: "from-amber-500 to-orange-600",
    duration: "2–3 Days",
  },
  {
    num: "06",
    title: "Launch & Execution",
    icon: Rocket,
    description: "With everything approved, we launch your campaigns, deploy your website, or roll out your digital assets — carefully monitored for a smooth start.",
    deliverables: ["Campaign activation", "Website deployment", "Social media rollout", "Real-time launch monitoring"],
    color: "from-rose-500 to-red-600",
    duration: "1–2 Days",
  },
  {
    num: "07",
    title: "Monitor & Optimize",
    icon: BarChart3,
    description: "Post-launch, we continuously monitor performance data, track KPIs, and fine-tune strategies to maximize your ROI and keep you ahead of the competition.",
    deliverables: ["Performance analytics dashboards", "Monthly progress reports", "Continuous A/B testing", "Strategy refinement"],
    color: "from-green-600 to-teal-600",
    duration: "Ongoing",
  },
  {
    num: "08",
    title: "Support & Growth",
    icon: HeadphonesIcon,
    description: "Our relationship does not end at delivery. We provide ongoing support, maintenance, and strategic guidance to help your business grow sustainably.",
    deliverables: ["Dedicated account manager", "Priority technical support", "Quarterly strategy reviews", "Scaling & growth consultation"],
    color: "from-sky-500 to-blue-600",
    duration: "Ongoing",
  },
];

const whyChoose = [
  { icon: Clock, title: "Transparent Timelines", desc: "Clear milestones and deadlines communicated upfront. No surprises, no delays." },
  { icon: Users, title: "Dedicated Team", desc: "A focused team of specialists assigned to your project from day one." },
  { icon: Target, title: "Goal-Driven Approach", desc: "Every action is tied to measurable outcomes and your specific business objectives." },
  { icon: Handshake, title: "Collaborative Partnership", desc: "We keep you involved at every stage with regular updates and approvals." },
];

export default function Process() {
  return (
    <>
      {/* Hero Banner */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 to-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-100/60 to-transparent pointer-events-none" />
        <div className="absolute top-1/3 -right-1/4 w-[600px] h-[600px] bg-green-200/30 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <Reveal width="100%" direction="blur">
            <span className="text-green-600 font-semibold tracking-wider uppercase text-sm mb-4 block">How We Work</span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 mb-6">Our Process</h1>
          </Reveal>
          <Reveal width="100%" delay={0.1} direction="up">
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              From the first conversation to long-term growth, our structured process ensures every project is delivered with precision, transparency, and measurable impact.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute -left-1/4 top-1/4 w-1/2 h-1/2 bg-green-500/5 blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute -right-1/4 bottom-0 w-1/3 h-1/3 bg-teal-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <SectionHeader
            label="Step by Step"
            title="Our Proven Workflow"
            description="A transparent, results-driven process refined over years of helping businesses succeed in the digital world."
          />

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical timeline line */}
            <div
              className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px hidden md:block"
              style={{ background: "linear-gradient(to bottom, transparent, var(--green-primary, #16a34a) 10%, var(--green-primary, #16a34a) 90%, transparent)" }}
            />

            {processSteps.map((step, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <Reveal key={step.num} delay={idx * 0.08} direction={isLeft ? "left" : "right"}>
                  <div className={`relative flex items-start mb-16 last:mb-0 md:flex-row flex-col ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    {/* Timeline dot */}
                    <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 -translate-x-1/2 top-8 z-10 hidden md:flex">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                        <step.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* Content card */}
                    <div className={`md:w-[calc(50%-2.5rem)] w-full ${isLeft ? "md:pr-4 md:text-right" : "md:pl-4 md:text-left"}`}>
                      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:shadow-lg hover:border-green-300/50 transition-all duration-300 group">
                        {/* Mobile icon */}
                        <div className="md:hidden flex mb-4">
                          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-md`}>
                            <step.icon className="w-4 h-4 text-white" />
                          </div>
                        </div>

                        <div className={`flex items-center gap-3 mb-3 ${isLeft ? "md:justify-end" : "md:justify-start"}`}>
                          <span className="text-xs font-bold tracking-widest text-green-600 uppercase bg-green-50 px-2.5 py-1 rounded-md border border-green-200">
                            Step {step.num}
                          </span>
                          <span className="text-xs font-medium text-slate-400 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {step.duration}
                          </span>
                        </div>

                        <h3 className="text-xl font-heading font-bold text-slate-900 mb-3 group-hover:text-green-700 transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed mb-5">
                          {step.description}
                        </p>

                        <div className={`space-y-2 ${isLeft ? "md:flex md:flex-col md:items-end" : ""}`}>
                          {step.deliverables.map((item) => (
                            <div
                              key={item}
                              className={`flex items-center gap-2 text-sm text-slate-500 ${isLeft ? "md:flex-row-reverse" : ""}`}
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Spacer for the other side */}
                    <div className="md:w-[calc(50%-2.5rem)] hidden md:block" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Our Process Works */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-green-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <SectionHeader
            label="Why It Works"
            title="Built for Results"
            description="Our process is designed to eliminate guesswork, reduce risk, and deliver consistent, measurable outcomes."
          />

          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {whyChoose.map((item) => (
              <StaggerItem key={item.title} className="h-full" direction="scale">
                <div className="bg-white p-8 rounded-2xl border border-slate-200 h-full text-center group hover:border-green-400/50 hover:shadow-lg transition-all duration-300 flex flex-col items-center">
                  <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-heading font-bold text-slate-900 mb-3">{item.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-green-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_60%)] pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <Reveal width="100%" direction="blur">
            <span className="text-green-200 font-semibold tracking-wider uppercase text-sm mb-4 block">
              Ready to Start?
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 tracking-tight">
              Let&apos;s Build Something Great Together
            </h2>
          </Reveal>
          <Reveal width="100%" delay={0.1} direction="up">
            <p className="text-lg text-green-100 max-w-2xl mx-auto leading-relaxed mb-10">
              Whether you need a complete digital strategy, a stunning website, or a high-converting marketing campaign — our process delivers results every time.
            </p>
          </Reveal>
          <Reveal width="100%" delay={0.2} direction="scale">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button size="lg" asChild className="rounded-full h-14 text-base px-10 bg-white text-green-700 hover:bg-green-50 shadow-lg shadow-green-900/20 font-semibold">
                <Link href="/contact">
                  Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full h-14 text-base px-10 border-2 border-white/30 text-white hover:bg-white/10 bg-transparent">
                <Link href="/services">
                  Explore Services <Search className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
