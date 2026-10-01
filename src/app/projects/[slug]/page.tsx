import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe, Layout, Code2, MonitorSmartphone } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { StaggerReveal, StaggerItem } from "@/components/shared/StaggerReveal";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

// Generate static params for all known projects
export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

// Dynamic metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);
  
  if (!project) return { title: "Project Not Found" };
  
  return {
    title: `${project.name} | M.B Growth Digital Portfolio`,
    description: project.description,
    openGraph: {
      title: `${project.name} | Case Study`,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);
  
  if (!project) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 to-white text-center relative overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50/50 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <Reveal width="100%" direction="up">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 p-4 bg-white rounded-3xl shadow-lg border border-slate-100 flex items-center justify-center">
              <img 
                src={project.logo} 
                alt={`${project.name} logo`} 
                className="max-w-full max-h-full object-contain"
              />
            </div>
            
            <span className="text-green-600 font-semibold tracking-wider uppercase text-sm mb-4 block">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-slate-900 mb-6 max-w-4xl mx-auto">
              {project.name}
            </h1>
          </Reveal>
          
          <Reveal width="100%" delay={0.1} direction="up">
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10">
              {project.description}
            </p>
          </Reveal>
          
          <Reveal width="100%" delay={0.2} direction="scale">
            <div className="flex justify-center">
              {project.website !== "#" ? (
                <Button size="lg" asChild className="rounded-full h-14 text-base px-10 bg-green-600 hover:bg-green-700 shadow-md">
                  <a href={project.website} target="_blank" rel="noopener noreferrer">
                    Visit Live Website <Globe className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              ) : (
                <Button size="lg" disabled className="rounded-full h-14 text-base px-10">
                  Website URL Pending <Globe className="ml-2 w-5 h-5" />
                </Button>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Overview & Screenshot */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Reveal direction="left">
                <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">
                  Project Overview
                </h2>
                <div className="prose prose-lg text-slate-600 prose-p:leading-relaxed max-w-none">
                  <p>{project.fullDescription}</p>
                  <p className="mt-4 font-medium text-slate-800">Built & Developed by M.B Growth Digital</p>
                </div>
              </Reveal>
            </div>
            
            <div className="relative">
              <Reveal direction="scale" delay={0.1}>
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-100 aspect-video flex items-center justify-center">
                  <img 
                    src={project.screenshots[0]} 
                    alt={`${project.name} website preview`}
                    className="w-full h-full object-contain p-8"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Tech */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Services */}
            <div>
              <Reveal direction="up">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                    <Layout className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-slate-900">Services Provided</h3>
                </div>
              </Reveal>
              
              <StaggerReveal className="space-y-4" staggerDelay={0.08}>
                {project.services.map((service) => (
                  <StaggerItem key={service} direction="left">
                    <div className="bg-white p-5 rounded-xl border border-slate-200 flex items-start gap-4 hover:shadow-md transition-shadow">
                      <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900">{service}</h4>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerReveal>
            </div>

            {/* Technologies */}
            <div>
              <Reveal direction="up" delay={0.1}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-slate-900">Technologies Used</h3>
                </div>
              </Reveal>
              
              <StaggerReveal className="flex flex-wrap gap-3" staggerDelay={0.08}>
                {project.technologies.map((tech) => (
                  <StaggerItem key={tech} direction="up">
                    <span className="inline-flex items-center px-4 py-2 bg-white border border-slate-200 text-slate-700 font-medium rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
                      {tech}
                    </span>
                  </StaggerItem>
                ))}
              </StaggerReveal>
            </div>
            
          </div>
        </div>
      </section>

      {/* Features & SEO */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Features */}
            <div>
              <Reveal direction="up">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center">
                    <MonitorSmartphone className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-slate-900">Website Features</h3>
                </div>
              </Reveal>
              
              <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 gap-3" staggerDelay={0.05}>
                {project.features.map((feature) => (
                  <StaggerItem key={feature} direction="up">
                    <div className="flex items-center gap-2 text-slate-600 bg-slate-50 px-4 py-3 rounded-lg border border-slate-100">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerReveal>
            </div>

            {/* SEO Implementation */}
            <div>
              <Reveal direction="up" delay={0.1}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-slate-900">SEO Implementation</h3>
                </div>
              </Reveal>
              
              <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 gap-3" staggerDelay={0.05}>
                {project.seoFeatures.map((seo) => (
                  <StaggerItem key={seo} direction="up">
                    <div className="flex items-center gap-2 text-slate-600 bg-slate-50 px-4 py-3 rounded-lg border border-slate-100">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                      <span className="text-sm font-medium">{seo}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerReveal>
            </div>
            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-green-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_60%)] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <Reveal width="100%" direction="blur">
            <span className="text-green-200 font-semibold tracking-wider uppercase text-sm mb-4 block">
              Want a Website Like This?
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 tracking-tight">
              Let&apos;s build a professional digital presence for your business.
            </h2>
          </Reveal>
          <Reveal width="100%" delay={0.2} direction="scale">
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
              <Button size="lg" asChild className="rounded-full h-14 text-base px-10 bg-white text-green-700 hover:bg-green-50 shadow-lg font-semibold">
                <Link href="/contact">
                  Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full h-14 text-base px-10 border-2 border-white/30 text-white hover:bg-white/10 bg-transparent">
                <Link href="/projects">
                  View Our Projects
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
