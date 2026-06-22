import Link from "next/link";
import { Crosshair, Eye, MapPin, Target, Zap, HeartHandshake, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";

const values = [
  { num: "01", title: "Trust & Integrity", desc: "Building transparent relationships with clients and establishing clear paths for student development.", icon: HeartHandshake },
  { num: "02", title: "Innovation", desc: "Embracing new technological tools, analytical workflows, and creative trends in the digital space.", icon: Zap },
  { num: "03", title: "Empowerment", desc: "Encouraging students to handle real client challenges, write live code, and design brand strategies.", icon: Target },
  { num: "04", title: "Growth Mindset", desc: "Continuously refining strategies, learning from analytics data, and driving measurable client success.", icon: TrendingUp },
];

export default function About() {
  return (
    <>
      {/* Hero Banner */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-emerald-50 to-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-100/60 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <Reveal>
            <span className="text-emerald-600 font-semibold tracking-wider uppercase text-sm mb-4 block">Get to Know Us</span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 mb-6">About Us</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Founded in 2026, M.B Growth Digital helps businesses grow through Digital Marketing, Website Development, Mobile App Development, E-Commerce Development, SEO, Google Ads, Social Media Marketing, Graphic Design, and Internship Programs.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal>
              <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 h-full hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <Crosshair className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Our mission is to understand our clients' requirements completely and provide solutions that fulfill their expectations. We are dedicated to delivering high-quality digital services, building long-term relationships, and ensuring customer satisfaction through innovation, reliability, and professional support.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 h-full hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4">Our Vision</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  To become a trusted, premier digital marketing agency and internship platform in India that effectively bridges the gap between academic education and modern industry demands, driving growth for both businesses and candidates.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute -left-1/4 top-0 w-1/2 h-full bg-emerald-600/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <SectionHeader
            label="What Drives Us"
            title="Our Core Values"
            description="These values define our workspace, guide our project execution, and form the foundation of our student training methodologies."
            className="text-slate-600 [&>h2]:text-slate-900"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, index) => (
              <Reveal key={val.num} delay={index * 0.1} className="h-full">
                <div className="bg-slate-50 backdrop-blur-md p-8 rounded-2xl border border-slate-200 h-full text-left group hover:border-emerald-500/50 transition-colors">
                  <div className="text-4xl font-heading font-black bg-gradient-to-b from-emerald-400 to-emerald-600 text-transparent bg-clip-text mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                    {val.num}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{val.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{val.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Local Roots */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative flex justify-center">
              <Reveal>
                <div className="relative w-72 h-72 md:w-96 md:h-96">
                  {/* Blob Background */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 to-teal-400 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-[morphing_12s_infinite_alternate_ease-in-out] shadow-2xl shadow-emerald-500/30 flex items-center justify-center flex-col text-white">
                    <MapPin className="w-16 h-16 mb-4 drop-shadow-md" />
                    <span className="text-3xl font-heading font-bold drop-shadow-md">Mangadu,</span>
                    <span className="text-2xl font-semibold drop-shadow-md">Chennai</span>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="order-1 lg:order-2">
              <Reveal>
                <span className="text-emerald-600 font-semibold tracking-wider uppercase text-sm mb-4 block">Local Roots, Global Reach</span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">Serving Clients From Mangadu, Chennai</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                  Based in the dynamic city of Chennai, we are proud to contribute to the local ecosystem of technological innovation. Our offices in Mangadu provide a collaborative environment where industry experts and students work side by side.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  Whether you are a local enterprise in Tamil Nadu looking to scale your lead generation, or a college student looking for practical industry experience in the metro region, M.B Growth Digital welcomes you.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <Button size="lg" asChild>
                  <Link href="/contact">Connect With Us</Link>
                </Button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
