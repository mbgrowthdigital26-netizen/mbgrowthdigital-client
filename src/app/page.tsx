import Link from "next/link";
import { ArrowRight, GraduationCap, Share2, Search, Target, Laptop, Palette, ChartLine } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";

const services = [
  { icon: Share2, title: "Social Media Marketing", desc: "Grow your brand through effective, highly engaging, and conversion-optimized campaigns." },
  { icon: Search, title: "Search Engine Optimization", desc: "Improve your website visibility in search engines, rank for competitive keywords." },
  { icon: Target, title: "Google Ads", desc: "Reach the right audience at the perfect moment and increase immediate conversions." },
  { icon: Laptop, title: "Website Development", desc: "Professional, secure, and fully responsive custom websites built to convert visitors." },
  { icon: Palette, title: "Graphic Design", desc: "Creative visuals, branding assets that communicate your value effectively." },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50/40">
        {/* Background Gradients */}
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-emerald-100/40 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-teal-100/40 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <Reveal delay={0.1}>
            <span className="inline-block py-1.5 px-5 rounded-full bg-transparent text-emerald-600 font-semibold text-sm tracking-widest uppercase mb-6">
              Growth & Learning Ecosystem
            </span>
          </Reveal>
          
          <Reveal delay={0.2}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-slate-900 tracking-tight mb-6 leading-none">
              Growth <span className="text-emerald-600">Digital</span>
            </h1>
          </Reveal>
          
          <Reveal delay={0.3}>
            <p className="text-xl md:text-2xl font-heading font-bold mb-8 bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent">
              Digital Marketing & Internship Solutions
            </p>
          </Reveal>
          
          <Reveal delay={0.4}>
            <p className="max-w-2xl mx-auto text-lg text-slate-500 mb-10 leading-relaxed">
              We help businesses grow online through innovative digital marketing strategies and provide valuable internship opportunities for students to gain real-world experience.
            </p>
          </Reveal>
          
          <Reveal delay={0.5}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="rounded-full w-full sm:w-auto h-14 text-base px-10 bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-200">
                <Link href="/services">
                  Our Services <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full w-full sm:w-auto h-14 text-base px-10 border-2 border-slate-300 text-slate-700 hover:border-emerald-400 hover:text-emerald-700 hover:bg-emerald-50 bg-white">
                <Link href="/internship">
                  Apply Internship <GraduationCap className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white border-y border-slate-100 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Reveal>
                <span className="text-emerald-600 font-semibold tracking-wider uppercase text-sm mb-4 block">Who We Are</span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">Empowering Brands & Nurturing Talents</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                  M.B Growth Digital is a digital marketing and internship solutions company based in Chennai. We focus on understanding our clients' needs, goals, and expectations before starting any project.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <Button variant="secondary" asChild className="mt-4">
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </Reveal>
            </div>
            
            <div className="relative flex justify-center lg:justify-end">
              <Reveal delay={0.3}>
                <div className="relative w-72 h-72 md:w-96 md:h-96">
                  {/* Animated Morphing Blob */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400 to-teal-500 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] animate-[morphing_15s_infinite_alternate_ease-in-out] shadow-2xl shadow-emerald-500/20" />
                  <div className="absolute inset-2 border-2 border-white/50 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] animate-[morphing_15s_infinite_alternate_ease-in-out] delay-[-3s]" />
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
                    <span className="text-6xl md:text-8xl font-heading font-bold">100%</span>
                    <span className="text-xl md:text-2xl font-semibold uppercase tracking-widest mt-2">Practical</span>
                    <span className="text-lg md:text-xl opacity-90">Learning</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <SectionHeader 
            label="Our Expertise"
            title="Our Services"
            description="Tailored digital strategies engineered to expand your digital footprint, connect with targeted audiences, and scale your conversions."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={0.1 * index} className="h-full">
                <div className="group h-full bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500 ease-out" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                      <service.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-600">{service.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            
            <Reveal delay={0.5} className="h-full">
              <div className="h-full bg-emerald-50 rounded-2xl p-8 border-2 border-dashed border-emerald-200 flex flex-col items-center justify-center text-center">
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">Need More Solutions?</h3>
                <p className="text-slate-600 mb-6">We also specialize in Content Marketing, Business Strategy, and Mobile App Development.</p>
                <Button asChild>
                  <Link href="/services">View All Services</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      
      {/* Internship Section */}
      <section className="py-24 bg-emerald-50 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-emerald-200/40 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <SectionHeader 
            label="Skill Enhancement"
            title="Internship Programs"
            description="Gain real-world experience, acquire industry-ready technical skills, and work under professional mentors on live client projects."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: ChartLine, title: "Digital Marketing", desc: "Master SEO, SMM, content planning, and paid ads.", tags: ["SEO", "SMM", "Google Ads"] },
              { icon: Laptop, title: "Web Development", desc: "Build real websites using modern coding tech stacks.", tags: ["Frontend", "UI/UX", "Live Projects"] },
              { icon: Palette, title: "Graphic Design", desc: "Learn layout systems, vectors, and visual storytelling.", tags: ["Photoshop", "Illustrator", "Branding"] },
            ].map((program, index) => (
              <Reveal key={program.title} delay={0.1 * index}>
                <div className="bg-white border border-emerald-100 p-8 rounded-2xl hover:border-emerald-300 hover:shadow-lg transition-all h-full flex flex-col">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mb-6">
                    <program.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">{program.title}</h3>
                  <p className="text-slate-600 mb-6 flex-grow">{program.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {program.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full border-emerald-200 text-emerald-700 hover:bg-emerald-600 hover:text-white hover:border-emerald-600" asChild>
                    <Link href="/internship">Program Info</Link>
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
