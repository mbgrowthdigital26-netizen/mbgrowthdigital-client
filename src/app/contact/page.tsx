"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Mail, Phone, Loader2, Send } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  message: z.string().min(10, "Please briefly detail your inquiry."),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      const response = await fetch("/api/contact", {
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
            <span className="text-green-600 font-semibold tracking-wider uppercase text-sm mb-4 block">Get In Touch</span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 mb-6">Contact Us</h1>
          </Reveal>
          <Reveal width="100%" delay={0.1}>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Have a question about our marketing services or available internship programs? Send us a message and we'll reply shortly.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-start">

            {/* Info Col */}
            <div className="lg:col-span-5">
              <Reveal>
                <span className="text-green-600 font-semibold tracking-wider uppercase text-sm mb-4 block">Company Information</span>
                <h2 className="text-4xl font-heading font-bold text-slate-900 mb-6">M.B Growth Digital</h2>
                <p className="text-slate-600 text-lg mb-12 leading-relaxed">
                  We are dedicated to scaling business goals and empowering future industry professionals with real agency workflows.
                </p>
              </Reveal>

              <div className="space-y-8 mb-12">
                <Reveal delay={0.1}>
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-heading font-bold text-slate-900 mb-1">Our Location</h4>
                      <p className="text-slate-600 leading-relaxed">No 7/16, MGR Nagar Mangadu, Chennai, Tamil Nadu, 600122, India</p>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.2}>
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-heading font-bold text-slate-900 mb-1">Email Address</h4>
                      <a href="mailto:mbgrowthdigital26@gmail.com" className="text-green-600 hover:text-green-700 transition-colors">
                        mbgrowthdigital26@gmail.com
                      </a>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.3}>
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-heading font-bold text-slate-900 mb-1">Phone Number</h4>
                      <p className="text-slate-600">+91 86101 66708</p>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Map */}
              <Reveal delay={0.4}>
                <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200">
                  <iframe
                    title="M.B Growth Digital Location - Mangadu, Chennai"
                    src="https://maps.google.com/maps?q=24J7%2B879%20Chennai,%20Tamil%20Nadu&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="280"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Reveal>
            </div>

            {/* Form Col */}
            <div className="lg:col-span-7">
              <Reveal delay={0.2}>
                <div className="bg-white rounded-3xl p-8 sm:p-10 lg:p-12 xl:p-14 shadow-2xl shadow-slate-200/50 border border-slate-200">
                  <h3 className="text-2xl font-heading font-bold text-slate-900 mb-8">Send Us a Message</h3>
                  
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                      <div>
                        <label className="block text-sm font-semibold text-slate-900 mb-2.5">Full Name</label>
                        <input 
                          {...register("name")} 
                          className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all text-base" 
                          placeholder="Your Full Name" 
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1.5 font-medium">{errors.name.message}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-900 mb-2.5">Phone Number</label>
                        <input 
                          {...register("phone")} 
                          type="tel" 
                          className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all text-base" 
                          placeholder="e.g. +91 00000 00000" 
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1.5 font-medium">{errors.phone.message}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2.5">Email Address</label>
                      <input 
                        {...register("email")} 
                        type="email" 
                        className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all text-base" 
                        placeholder="name@company.com" 
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1.5 font-medium">{errors.email.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2.5">How can we help you?</label>
                      <textarea 
                        {...register("message")} 
                        rows={7}
                        className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all text-base resize-none" 
                        placeholder="Please detail your inquiry, project requirements, or the specific services you're interested in..." 
                      />
                      {errors.message && <p className="text-red-500 text-sm mt-1.5 font-medium">{errors.message.message}</p>}
                    </div>

                    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full h-14 text-lg">
                      {isSubmitting ? (
                        <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...</>
                      ) : (
                        <>Send Message <Send className="ml-2 w-5 h-5" /></>
                      )}
                    </Button>

                    {submitStatus === "success" && (
                      <div className="p-4 rounded-xl bg-green-50 text-green-700 border border-green-300 text-sm font-medium text-center">
                        ✅ Thank you! Your message has been sent successfully. We will get back to you soon.
                      </div>
                    )}
                    {submitStatus === "error" && (
                      <div className="p-4 rounded-xl bg-red-50 text-red-700 border border-red-200 text-sm font-medium text-center">
                        ❌ Failed to send message. Please try again later.
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
