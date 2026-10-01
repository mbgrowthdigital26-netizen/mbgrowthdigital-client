import Link from "next/link";
import { ArrowRight, HelpCircle, Mail, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { StaggerReveal, StaggerItem } from "@/components/shared/StaggerReveal";

const generalFaqs = [
  {
    q: "What services does M.B Growth Digital provide?",
    a: "We offer a comprehensive suite of digital services including Digital Marketing, SEO, Social Media Marketing, Google & Meta Ads, Content Marketing, UI/UX Design, and full-stack Web & Mobile App Development. We also offer specialized Internship Programs for students.",
  },
  {
    q: "Where are you located and do you work with international clients?",
    a: "We are based in Chennai, India, but we work with clients globally. Our team is equipped to handle digital strategies and development projects for businesses across various time zones and industries.",
  },
  {
    q: "How do we get started with a project?",
    a: "It starts with a free consultation! Reach out to us via our Contact page or WhatsApp. We will schedule a discovery call to understand your business goals, target audience, and current challenges. From there, we provide a customized proposal and strategy.",
  },
];

const marketingFaqs = [
  {
    q: "How long does it take to see results from SEO?",
    a: "SEO is a long-term strategy. While some improvements can be seen in the first few weeks (like fixing technical errors or optimizing existing content), significant organic growth typically takes 3 to 6 months depending on your industry's competitiveness.",
  },
  {
    q: "Do you include ad spend in your marketing packages?",
    a: "No, our service fees cover the strategy, campaign setup, ad creatives, management, and continuous optimization. The actual ad spend is billed directly to your credit card by the platform (e.g., Google or Meta). We can, however, advise you on the optimal budget.",
  },
  {
    q: "Can you guarantee a #1 ranking on Google?",
    a: "No reputable agency can guarantee a #1 ranking due to the ever-changing nature of search algorithms. However, we guarantee that we use proven, ethical (white-hat) SEO practices that consistently yield strong, sustainable improvements in search visibility and traffic.",
  },
];

const developmentFaqs = [
  {
    q: "How long does it take to build a website?",
    a: "A standard informational website typically takes 2-4 weeks. E-commerce sites or custom web applications can take 6-12 weeks depending on the complexity, features required, and how quickly we receive feedback and content from you.",
  },
  {
    q: "Will my website be mobile-friendly?",
    a: "Yes! Every website we build is 100% responsive, meaning it will look and function perfectly on smartphones, tablets, and desktop computers. Mobile-first design is a core part of our development process.",
  },
  {
    q: "Do you provide hosting and maintenance?",
    a: "Yes, we offer ongoing maintenance and support packages to ensure your website remains secure, up-to-date, and fast. We can also assist with reliable hosting solutions tailored to your website's traffic needs.",
  },
];

const internshipFaqs = [
  {
    q: "Who can apply for your internship programs?",
    a: "Our internship programs are open to college students, recent graduates, and anyone looking to transition into the digital marketing or tech industry. We value enthusiasm and a willingness to learn over prior experience.",
  },
  {
    q: "Are the internships paid or unpaid?",
    a: "We offer both performance-based stipends and unpaid skill-building internships depending on the role, your experience level, and the specific program structure. Details will be discussed during the interview process.",
  },
];

export default function FAQ() {
  return (
    <>
      {/* Hero Banner */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 to-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-100/60 to-transparent pointer-events-none" />
        <div className="absolute top-1/3 -left-1/4 w-[600px] h-[600px] bg-green-200/30 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <Reveal width="100%" direction="blur">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-green-200">
              <HelpCircle className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h1>
          </Reveal>
          <Reveal width="100%" delay={0.1} direction="up">
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Find answers to the most common questions about our digital marketing services, web development process, and agency operations.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 max-w-4xl">
          
          <StaggerReveal className="space-y-16" staggerDelay={0.1}>
            
            {/* General FAQs */}
            <StaggerItem direction="up">
              <div className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-slate-900 mb-2 border-b border-slate-100 pb-4">
                  General Questions
                </h2>
                <p className="text-slate-500 text-sm mb-6">About our agency and how we work.</p>
              </div>
              <FAQAccordion faqs={generalFaqs} />
            </StaggerItem>

            {/* Marketing FAQs */}
            <StaggerItem direction="up">
              <div className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-slate-900 mb-2 border-b border-slate-100 pb-4">
                  Digital Marketing & SEO
                </h2>
                <p className="text-slate-500 text-sm mb-6">Questions regarding our marketing campaigns and strategies.</p>
              </div>
              <FAQAccordion faqs={marketingFaqs} />
            </StaggerItem>

            {/* Development FAQs */}
            <StaggerItem direction="up">
              <div className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-slate-900 mb-2 border-b border-slate-100 pb-4">
                  Web & App Development
                </h2>
                <p className="text-slate-500 text-sm mb-6">Details on our web design and application development services.</p>
              </div>
              <FAQAccordion faqs={developmentFaqs} />
            </StaggerItem>

            {/* Internship FAQs */}
            <StaggerItem direction="up">
              <div className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-slate-900 mb-2 border-b border-slate-100 pb-4">
                  Internship Programs
                </h2>
                <p className="text-slate-500 text-sm mb-6">Information for students and graduates looking to join us.</p>
              </div>
              <FAQAccordion faqs={internshipFaqs} />
            </StaggerItem>

          </StaggerReveal>

        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(22,163,74,0.05),transparent_70%)] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <Reveal width="100%" direction="scale">
            <div className="max-w-2xl mx-auto bg-white p-10 md:p-14 rounded-3xl shadow-xl border border-slate-100">
              <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4 tracking-tight">
                Still have questions?
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Can&apos;t find the answer you&apos;re looking for? Our team is always here to help. Reach out to us directly!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="rounded-full h-14 px-8">
                  <a href="https://wa.me/918610166708?text=Hi%20M.B%20Growth%20Digital%2C%20I%20have%20a%20question!" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 w-5 h-5" />
                    Chat on WhatsApp
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="rounded-full h-14 px-8 bg-white hover:bg-slate-50">
                  <Link href="/contact">
                    <Mail className="mr-2 w-5 h-5" />
                    Send us an Email
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
