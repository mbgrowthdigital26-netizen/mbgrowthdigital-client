import Link from "next/link";
import { ArrowRight, GraduationCap, Share2, Search, Target, Laptop, Palette, ChartLine, ShoppingCart, Smartphone, Mail, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";

const services = [
  { icon: TrendingUp, title: "Digital Marketing", desc: "Data-driven digital strategies that expand your online presence and drive measurable business growth." },
  { icon: Laptop, title: "Website Development", desc: "Professional, secure, and fully responsive custom websites built to convert visitors into customers." },
  { icon: Smartphone, title: "Mobile App Development", desc: "Intuitive, high-performance mobile apps for iOS and Android tailored to your business goals." },
  { icon: ShoppingCart, title: "E-Commerce Development", desc: "Powerful online stores with seamless UX, secure payments, and optimized product listings." },
  { icon: Search, title: "SEO", desc: "Improve your website visibility in search engines and rank for the keywords that matter most." },
  { icon: Target, title: "Google Ads", desc: "Reach the right audience at the perfect moment and maximize immediate conversions with paid search." },
  { icon: Share2, title: "Social Media Marketing", desc: "Grow your brand through effective, highly engaging, and conversion-optimized social campaigns." },
  { icon: Palette, title: "Graphic Design", desc: "Creative visuals and branding assets that communicate your value and leave a lasting impression." },
  { icon: GraduationCap, title: "Internship Programs", desc: "Real-world internship programs helping students build industry-ready skills on live projects." },
  { icon: Mail, title: "Email Marketing", desc: "Targeted email campaigns that nurture leads, retain customers, and drive repeat conversions." },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-gradient-to-br from-white via-slate-50 to-green-100">
        {/* Background Gradients */}
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-green-100/40 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-teal-100/40 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 flex flex-col justify-center items-center text-center min-h-[80vh]">
          <Reveal delay={0.1} width="100%">
            <span className="inline-block py-1.5 px-5 rounded-full bg-transparent text-green-600 font-semibold text-sm tracking-widest uppercase mb-6">
              Growth & Learning Ecosystem
            </span>
          </Reveal>

          <Reveal delay={0.2} width="100%">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-slate-900 tracking-tight mb-6 leading-none">
              Growth <span className="text-green-600">Digital</span>
            </h1>
          </Reveal>

          <Reveal delay={0.3} width="100%">
            <p className="text-xl md:text-2xl font-heading font-bold mb-8 bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent">
              Digital Marketing & Internship Solutions
            </p>
          </Reveal>

          <Reveal delay={0.4} width="100%">
            <p className="max-w-2xl mx-auto text-lg text-slate-600 mb-10 leading-relaxed text-center">
              M.B Growth Digital is a Chennai-based Digital Marketing and Internship Solutions company. We understand our clients' needs and provide customized solutions that help their businesses grow online.            </p>
          </Reveal>

          <Reveal delay={0.5} width="100%">
            <div className="flex flex-row justify-center items-center gap-4 flex-wrap">
              <Button size="lg" asChild className="rounded-full w-full sm:w-auto h-14 text-base px-10 bg-green-600 hover:bg-green-700 shadow-lg shadow-green-900/10">
                <Link href="/services">
                  Our Services <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full w-full sm:w-auto h-14 text-base px-10 border-2 border-slate-300 text-slate-700 hover:border-green-400 hover:text-green-700 hover:bg-green-50 bg-white">
                <Link href="/internship">
                  Apply Internship <GraduationCap className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white border-y border-slate-200 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <Reveal width="100%">
                <span className="text-green-600 font-semibold tracking-wider uppercase text-sm mb-4 block">Who We Are</span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">Empowering Brands & Nurturing Talents</h2>
              </Reveal>
              <Reveal width="100%" delay={0.1}>
                <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                  M.B Growth Digital is a digital marketing and internship solutions company based in Chennai. We focus on understanding our clients' needs, goals, and expectations before starting any project. Our priority is to provide solutions that satisfy our clients and help their businesses grow successfully in the digital world.                </p>
                <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                  We offer a wide range of services including Digital Marketing, Search Engine Optimization (SEO), Google Ads, Social Media Marketing, Content Marketing, Website Development, Web Application Development, Mobile App Development, and E-Commerce Development.
                </p>
                <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                  We also provide valuable internship opportunities for students to gain real-world experience, develop practical skills, and build their careers in the digital industry.
                </p>
              </Reveal>
              <Reveal width="100%" delay={0.2}>
                <Button variant="secondary" asChild className="mt-4">
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </Reveal>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <Reveal delay={0.3}>
                <div className="relative w-72 h-72 md:w-96 md:h-96">
                  {/* Animated Morphing Blob */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-green-400 to-teal-500 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] animate-[morphing_15s_infinite_alternate_ease-in-out] shadow-2xl shadow-green-500/20" />
                  <div className="absolute inset-2 border-2 border-white/50 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] animate-[morphing_15s_infinite_alternate_ease-in-out] delay-[-3s]" />

                  <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-900 z-10">
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
                <div className="group h-full bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500 ease-out" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-slate-900 transition-colors duration-300">
                      <service.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-600">{service.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={1.1} className="h-full">
              <div className="h-full bg-green-50 rounded-2xl p-8 border-2 border-dashed border-green-300 flex flex-col items-center justify-center text-center">
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">Ready to Grow?</h3>
                <p className="text-slate-600 mb-6">Explore our full suite of digital solutions and find the perfect fit for your business goals.</p>
                <Button asChild>
                  <Link href="/services">View All Services</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Internship Section */}
      <section className="py-24 bg-green-50 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-green-200/40 blur-[120px] rounded-full pointer-events-none" />

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
                <div className="bg-white border border-green-200 p-8 rounded-2xl hover:border-green-400 hover:shadow-lg transition-all h-full flex flex-col">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-6">
                    <program.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">{program.title}</h3>
                  <p className="text-slate-600 mb-6 flex-grow">{program.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {program.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-green-50 text-green-700 border border-green-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full border-green-300 text-green-700 hover:bg-green-600 hover:text-slate-900 hover:border-green-600" asChild>
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
