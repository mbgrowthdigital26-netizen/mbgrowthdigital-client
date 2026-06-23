"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Megaphone, Laptop, Palette, CheckCircle2, BookOpen, Code, Medal, Network, Loader2 } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  program: z.string().min(1, "Please select a program."),
  message: z.string().min(10, "Please briefly describe your goals."),
});

type FormValues = z.infer<typeof formSchema>;

export default function Internship() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      const response = await fetch("/api/internship", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Submission failed");
      
      setSubmitStatus("success");
      reset();
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 to-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-100/60 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <Reveal width="100%">
            <span className="text-green-600 font-semibold tracking-wider uppercase text-sm mb-4 block">Build Your Career</span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 mb-6">Internship Opportunities</h1>
          </Reveal>
          <Reveal width="100%" delay={0.1}>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              At M.B Growth Digital, we provide practical internship programs designed to help students gain industry experience and develop professional skills.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeader 
            label="Available Programs"
            title="Choose Your Specialization"
            description="Select a pathway that matches your career aspirations. Each program features rigorous mentorship, weekly code/strategy reviews, and client deliverables."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Megaphone, title: "Digital Marketing", desc: "Dive deep into client growth funnels. You will learn and implement SEO, SMM, Content Marketing, and paid search advertising.", tags: ["Analytics", "Content Strategy", "SEO Audit"] },
              { icon: Laptop, title: "Web Development", desc: "Gain concrete developer experience. Work on building, testing, and debugging responsive websites and database-backed web applications.", tags: ["HTML/CSS/JS", "Responsive Designs", "Git & Deployment"] },
              { icon: Palette, title: "Graphic Design", desc: "Develop visual asset suites for brands. Learn core styling techniques, color theory, layout grids, branding identities, and layout tools.", tags: ["UI Layouts", "Brand Creatives", "Vector Graphics"] },
            ].map((program, index) => (
              <Reveal key={program.title} delay={index * 0.1} className="h-full">
                <div className="bg-slate-50 border border-slate-200 p-8 rounded-3xl hover:border-green-300 hover:bg-green-50/50 transition-colors h-full flex flex-col group">
                  <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-slate-900 transition-colors">
                    <program.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4">{program.title}</h3>
                  <p className="text-slate-600 mb-6 flex-grow leading-relaxed">{program.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {program.tags.map(tag => (
                      <span key={tag} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white text-green-700 border border-green-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <div className="mt-16 bg-green-50 border border-green-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-heading font-bold text-slate-900 mb-2">Who Can Apply? (Eligibility Criteria)</h4>
                <p className="text-slate-600 leading-relaxed">
                  This program is strictly open to <strong>College Students</strong> (all semesters/streams) and recent <strong>Fresh Graduates</strong> looking to bridge their transition from academics to the corporate software and digital agency landscape.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white text-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-green-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <SectionHeader 
            label="What We Offer"
            title="Internship Benefits"
            description="Our program is designed to deliver maximum value, making sure you walk away with portfolio-worthy work and high-level industrial skills."
            className="text-slate-600 [&>h2]:text-slate-900"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: BookOpen, title: "Practical Learning", desc: "Move away from abstract theory. We focus heavily on practical training, tools usage, and industry workflows." },
              { icon: Code, title: "Real Projects", desc: "Contribute to actual commercial client accounts, and build components that launch live to the public." },
              { icon: Medal, title: "Certificate", desc: "Earn a verified Internship Completion Certificate reflecting your program duration, achievements, and core skills." },
              { icon: Network, title: "Career Support", desc: "Get access to CV reviews, LinkedIn optimization tricks, and job placement guidance from agency experts." },
            ].map((benefit, index) => (
              <Reveal key={benefit.title} delay={index * 0.1}>
                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:border-green-500/50 transition-colors h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <benefit.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-heading font-bold text-slate-900 mb-4">{benefit.title}</h4>
                  <p className="text-slate-600 leading-relaxed text-sm">{benefit.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <div className="order-2 lg:order-1">
              <Reveal>
                <span className="text-green-600 font-semibold tracking-wider uppercase text-sm mb-4 block">Join Our Cohort</span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">How To Apply?</h2>
                <p className="text-slate-600 text-lg mb-12 leading-relaxed">
                  Applying is straightforward. Fill out the application form, specifying your educational details and desired program.
                </p>
              </Reveal>

              <div className="space-y-8">
                {[
                  { num: "1", title: "Submit Form", desc: "Enter your contact information and select your preferred track." },
                  { num: "2", title: "Interview Call", desc: "Our team will contact you to review your goals and schedule a short discussion." },
                  { num: "3", title: "Onboarding", desc: "Receive your credentials, project guidelines, and assign a dedicated mentor." },
                ].map((step, index) => (
                  <Reveal key={step.num} delay={index * 0.1}>
                    <div className="flex gap-6">
                      <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0 font-heading font-bold text-xl">
                        {step.num}
                      </div>
                      <div>
                        <h4 className="text-xl font-heading font-bold text-slate-900 mb-2">{step.title}</h4>
                        <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <Reveal delay={0.2}>
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-200">
                  <h3 className="text-2xl font-heading font-bold text-slate-900 mb-8">Apply for Internship</h3>
                  
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">Full Name</label>
                      <input 
                        {...register("name")} 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-colors" 
                        placeholder="Your Name" 
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">Email Address</label>
                      <input 
                        {...register("email")} 
                        type="email" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-colors" 
                        placeholder="name@domain.com" 
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">Phone Number</label>
                      <input 
                        {...register("phone")} 
                        type="tel" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-colors" 
                        placeholder="e.g. +91 98765 43210" 
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">Preferred Program</label>
                      <select 
                        {...register("program")} 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-colors"
                      >
                        <option value="">Select an internship program</option>
                        <option value="digital-marketing">Digital Marketing</option>
                        <option value="web-development">Web Development</option>
                        <option value="graphic-design">Graphic Design</option>
                      </select>
                      {errors.program && <p className="text-red-500 text-sm mt-1">{errors.program.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">Why do you want to join this program?</label>
                      <textarea 
                        {...register("message")} 
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-colors resize-none" 
                        placeholder="Briefly describe your educational background and goals..." 
                      />
                      {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                    </div>

                    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full h-14 text-lg">
                      {isSubmitting ? (
                        <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Submitting...</>
                      ) : "Submit Application"}
                    </Button>

                    {submitStatus === "success" && (
                      <div className="p-4 rounded-xl bg-green-50 text-green-700 border border-green-300 text-sm font-medium text-center">
                        Application submitted successfully! Our team will review your application and reach out to you via email/phone.
                      </div>
                    )}
                    {submitStatus === "error" && (
                      <div className="p-4 rounded-xl bg-red-50 text-red-700 border border-red-200 text-sm font-medium text-center">
                        Failed to send application. Please try again later.
                      </div>
                    )}
                  </form>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
