import Link from "next/link";
import { ArrowRight, Globe } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { StaggerReveal, StaggerItem } from "@/components/shared/StaggerReveal";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Our Projects | M.B Growth Digital",
  description: "Explore the websites, digital experiences and solutions created by M.B Growth Digital.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 to-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-100/60 to-transparent pointer-events-none" />
        <div className="absolute top-1/3 -right-1/4 w-[600px] h-[600px] bg-green-200/30 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <Reveal width="100%" direction="blur">
            <span className="text-green-600 font-semibold tracking-wider uppercase text-sm mb-4 block">Our Work</span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 mb-6">Our Projects</h1>
          </Reveal>
          <Reveal width="100%" delay={0.1} direction="up">
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Explore websites, digital experiences and solutions created by M.B Growth Digital.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-6">
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
            {projects.map((project) => (
              <StaggerItem key={project.slug} direction="up" className="h-full">
                <div className="group h-full bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden hover:shadow-xl hover:border-green-300/50 transition-all duration-500 flex flex-col">
                  {/* Image/Logo area */}
                  <div className="relative h-56 bg-white overflow-hidden border-b border-slate-100 flex items-center justify-center p-8">
                    <img
                      src={project.image}
                      alt={`${project.name} preview`}
                      className="max-w-full max-h-full object-contain group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    />
                  </div>
                  
                  {/* Content area */}
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-bold tracking-widest text-green-600 uppercase bg-green-50 px-2.5 py-1 rounded-md border border-green-200">
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-heading font-bold text-slate-900 mb-3 group-hover:text-green-700 transition-colors">
                      {project.name}
                    </h3>
                    
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="mb-6 flex-1">
                      <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">Services</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {project.services.slice(0, 4).map((s) => (
                          <span key={s} className="px-2.5 py-1 bg-white text-slate-700 text-[10px] font-medium rounded-full border border-slate-200">
                            {s}
                          </span>
                        ))}
                        {project.services.length > 4 && (
                          <span className="px-2.5 py-1 bg-slate-100 text-slate-500 text-[10px] font-medium rounded-full border border-slate-200">
                            +{project.services.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-200">
                      <Link 
                        href={`/projects/${project.slug}`}
                        className="text-green-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
                      >
                        View Case Study <ArrowRight className="w-4 h-4" />
                      </Link>
                      
                      {project.website !== "#" && (
                        <a 
                          href={project.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-green-100 hover:text-green-600 transition-colors"
                          title="Visit Website"
                        >
                          <Globe className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-green-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_60%)] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <Reveal width="100%" direction="blur">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 tracking-tight">
              Ready to start your project?
            </h2>
          </Reveal>
          <Reveal width="100%" delay={0.1} direction="up">
            <p className="text-lg text-green-100 max-w-2xl mx-auto leading-relaxed mb-10">
              Let&apos;s build a professional digital presence for your business. Reach out today for a free consultation.
            </p>
          </Reveal>
          <Reveal width="100%" delay={0.2} direction="scale">
            <Button size="lg" asChild className="rounded-full h-14 text-base px-10 bg-white text-green-700 hover:bg-green-50 shadow-lg shadow-green-900/20 font-semibold">
              <Link href="/contact">
                Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
