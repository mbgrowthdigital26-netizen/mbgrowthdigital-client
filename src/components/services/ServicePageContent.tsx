// Server component - receives icon functions via props from server page

import Link from "next/link";
import { Check, ChevronRight, MessageCircle, ArrowRight, Users, Target, Shield } from "lucide-react";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { Reveal } from "@/components/shared/Reveal";
import { StaggerReveal, StaggerItem } from "@/components/shared/StaggerReveal";
import type { Service } from "@/data/services";

interface Props {
  service: Service;
  relatedServices: Service[];
}

const WHATSAPP_BASE = "https://wa.me/918610166708?text=";



export function ServicePageContent({ service, relatedServices }: Props) {
  const ServiceIcon = service.icon;
  const waLink = `${WHATSAPP_BASE}${encodeURIComponent(service.whatsappMessage)}`;

  return (
    <div style={{ backgroundColor: "var(--bg)" }}>
      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, var(--bg) 0%, var(--green-bg) 100%)",
        }}
      >
        {/* Background decoration */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none opacity-30"
          style={{
            background: "radial-gradient(circle, var(--green-glow) 0%, transparent 70%)",
            transform: "translate(30%, -30%)",
          }}
        />

        <div className="container mx-auto px-6 relative">
            <Reveal direction="blur">
              <nav className="flex items-center gap-2 text-sm mb-8" aria-label="Breadcrumb">
                <Link href="/" className="hover:text-green-600 transition-colors" style={{ color: "var(--text-muted)" }}>
                  Home
                </Link>
                <ChevronRight className="w-3.5 h-3.5" style={{ color: "var(--text-muted)" }} />
                <Link href="/services" className="hover:text-green-600 transition-colors" style={{ color: "var(--text-muted)" }}>
                  Services
                </Link>
                <ChevronRight className="w-3.5 h-3.5" style={{ color: "var(--text-muted)" }} />
                <span style={{ color: "var(--green-primary)" }}>{service.shortTitle}</span>
              </nav>
            </Reveal>

          <div className="max-w-4xl">
            <Reveal delay={0.1} direction="up">
              {/* Service badge */}
              <div className="badge-green inline-flex mb-6">
                <ServiceIcon className="w-3.5 h-3.5" />
                <span>{service.shortTitle}</span>
              </div>
            </Reveal>

            <Reveal delay={0.2} direction="blur" distance={50}>
              <h1
                className="font-heading font-bold mb-5"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  lineHeight: "1.1",
                  letterSpacing: "-0.03em",
                  color: "var(--text-primary)",
                }}
              >
                {service.title}
              </h1>
            </Reveal>

            <Reveal delay={0.3} direction="up">
              <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-3xl" style={{ color: "var(--text-secondary)" }}>
                {service.heroDescription}
              </p>
            </Reveal>

            <Reveal delay={0.4} direction="scale">
              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl text-base font-semibold text-white transition-all hover:opacity-90 hover:-translate-y-0.5"
                  style={{
                    backgroundColor: "var(--green-primary)",
                    boxShadow: "var(--shadow-green)",
                  }}
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl text-base font-semibold transition-all hover:opacity-90"
                  style={{
                    color: "var(--text-primary)",
                    border: "1px solid var(--border-strong)",
                    backgroundColor: "var(--surface)",
                  }}
                >
                  Get Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="section-py" style={{ backgroundColor: "var(--bg)" }}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <Reveal direction="left">
              <div className="badge-green inline-flex mb-5">
                <span>The Problem</span>
              </div>
              <h2
                className="font-heading font-bold mb-4"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "var(--text-primary)" }}
              >
                Is your business facing these challenges?
              </h2>
              <p className="mb-8 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Many businesses struggle with {service.title.toLowerCase()} without a clear strategy.
                We understand these challenges and have solutions.
              </p>

              <div className="space-y-3">
                {service.problems.map((problem, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl"
                    style={{
                      backgroundColor: "var(--surface-2)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ backgroundColor: "rgba(239, 68, 68, 0.1)" }}
                    >
                      <span className="text-red-500 text-xs font-bold">✕</span>
                    </div>
                    <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                      {problem}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.2}>
              <div className="badge-green inline-flex mb-5">
                <span>Our Solution</span>
              </div>
              <h2
                className="font-heading font-bold mb-4"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "var(--text-primary)" }}
              >
                What we deliver
              </h2>
              <p className="mb-8 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Our {service.shortTitle} service is designed to solve these exact challenges and deliver
                measurable results for your business.
              </p>

              <div className="space-y-3">
                {service.benefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl"
                    style={{
                      backgroundColor: "var(--green-bg)",
                      border: "1px solid var(--border-strong)",
                    }}
                  >
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ backgroundColor: "var(--green-primary)" }}
                    >
                      <Check className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-py" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="badge-green inline-flex mb-5">
              <span>What&apos;s Included</span>
            </div>
            <h2
              className="font-heading font-bold mb-4"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "var(--text-primary)" }}
            >
              Everything you get with our {service.shortTitle} service
            </h2>
          </div>

          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.06}>
            {service.features.map((feature, i) => (
              <StaggerItem key={i}>
                <div
                  className="flex items-start gap-3 p-5 rounded-xl transition-all duration-200 hover:shadow-md group"
                  style={{
                    backgroundColor: "var(--surface)",
                    border: "1px solid var(--card-border)",
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "var(--green-bg)" }}
                  >
                    <Check className="w-4 h-4" style={{ color: "var(--green-primary)" }} />
                  </div>
                  <span className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
                    {feature}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-py" style={{ backgroundColor: "var(--bg)" }}>
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="badge-green inline-flex mb-5">
              <span>Our Process</span>
            </div>
            <h2
              className="font-heading font-bold mb-4"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "var(--text-primary)" }}
            >
              How we deliver {service.shortTitle}
            </h2>
            <p style={{ color: "var(--text-secondary)" }}>
              A structured, transparent process that keeps you informed at every step.
            </p>
          </div>

          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {service.process.map((step, i) => (
              <StaggerItem key={i} direction="up">
                <div className="relative">
                  {/* Connector line */}
                  {i < service.process.length - 1 && (
                    <div
                      className="absolute top-8 left-full w-full h-px hidden lg:block"
                      style={{ backgroundColor: "var(--border)" }}
                    />
                  )}
                  <div
                    className="p-6 rounded-2xl h-full"
                    style={{
                      backgroundColor: "var(--surface)",
                      border: "1px solid var(--card-border)",
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 font-heading font-bold text-lg"
                      style={{
                        backgroundColor: "var(--green-bg)",
                        color: "var(--green-primary)",
                        border: "1px solid var(--border-strong)",
                      }}
                    >
                      {step.step}
                    </div>
                    <h3
                      className="font-heading font-bold text-base mb-2"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Target Audience */}
      <section className="section-py" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal direction="left">
              <div className="badge-green inline-flex mb-5">
                <Users className="w-3.5 h-3.5" />
                <span>Who This Is For</span>
              </div>
              <h2
                className="font-heading font-bold mb-4"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "var(--text-primary)" }}
              >
                Perfect for these businesses
              </h2>
              <p className="mb-6 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Our {service.shortTitle} service is designed to deliver results for:
              </p>
              <div className="space-y-3">
                {service.targetAudience.map((audience, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: "var(--green-primary)" }}
                    />
                    <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                      {audience}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.2}>
            {/* CTA Card */}
            <div
              className="p-8 rounded-2xl relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, var(--green-primary) 0%, var(--green-dark) 100%)",
              }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none opacity-20"
                style={{ background: "radial-gradient(circle, #fff 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
              />
              <div className="relative">
                <Shield className="w-10 h-10 text-white opacity-80 mb-4" />
                <h3 className="font-heading font-bold text-xl md:text-2xl text-white mb-3">
                  Ready to grow with {service.shortTitle}?
                </h3>
                <p className="text-white/80 text-sm mb-6 leading-relaxed">
                  Get a free consultation to see how we can help your business with {service.title.toLowerCase()}.
                  No commitment, no hard sell.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90 bg-white"
                    style={{ color: "var(--green-dark)" }}
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp for Free Consultation
                  </a>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all text-white"
                    style={{ border: "1px solid rgba(255,255,255,0.3)", backgroundColor: "rgba(255,255,255,0.1)" }}
                  >
                    Contact Form
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {service.faqs.length > 0 && (
        <section className="section-py" style={{ backgroundColor: "var(--bg)" }}>
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <div className="badge-green inline-flex mb-5">
                  <span>FAQ</span>
                </div>
                <h2
                  className="font-heading font-bold mb-4"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "var(--text-primary)" }}
                >
                  Frequently asked questions
                </h2>
              </div>
              <div className="space-y-3">
                <FAQAccordion faqs={service.faqs} />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="section-py" style={{ backgroundColor: "var(--bg-secondary)" }}>
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="badge-green inline-flex mb-5">
                <span>Explore More</span>
              </div>
              <h2
                className="font-heading font-bold mb-4"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "var(--text-primary)" }}
              >
                Related services
              </h2>
            </div>
            <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
              {relatedServices.map((related) => {
                const RelatedIcon = related.icon;
                return (
                  <StaggerItem key={related.slug}>
                    <Link
                      href={`/services/${related.slug}`}
                      className="group block p-6 rounded-2xl transition-all duration-200 hover:-translate-y-1"
                      style={{
                        backgroundColor: "var(--surface)",
                        border: "1px solid var(--card-border)",
                        boxShadow: "var(--shadow-sm)",
                      }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                        style={{ backgroundColor: "var(--green-bg)" }}
                      >
                        <RelatedIcon className="w-5 h-5" style={{ color: "var(--green-primary)" }} />
                      </div>
                      <h3
                        className="font-heading font-semibold mb-2 group-hover:text-green-600 transition-colors"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {related.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                        {related.tagline}
                      </p>
                      <div
                        className="flex items-center gap-1 mt-3 text-xs font-semibold"
                        style={{ color: "var(--green-primary)" }}
                      >
                        Learn more <ArrowRight className="w-3 h-3" />
                      </div>
                    </Link>
                  </StaggerItem>
                );
              })}
            </StaggerReveal>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section
        className="section-py"
        style={{
          background: "linear-gradient(135deg, var(--bg) 0%, var(--green-bg) 100%)",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <Reveal direction="blur">
            <div className="badge-green inline-flex mb-5">
              <Target className="w-3.5 h-3.5" />
              <span>Get Started Today</span>
            </div>
          </Reveal>
          <Reveal delay={0.1} direction="up">
          <h2
            className="font-heading font-bold mb-4 max-w-2xl mx-auto"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", color: "var(--text-primary)" }}
          >
            Ready to grow your business with {service.shortTitle}?
          </h2>
          <p className="mb-8 max-w-xl mx-auto leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Contact M.B Growth Digital today for a free consultation. We are available 24 hours.
          </p>
          </Reveal>
          <Reveal delay={0.2} direction="scale">
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-base font-semibold text-white transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{
                backgroundColor: "var(--green-primary)",
                boxShadow: "var(--shadow-green)",
              }}
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us Now
            </a>
            <a
              href="tel:+918610166708"
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-base font-semibold transition-all"
              style={{
                color: "var(--text-primary)",
                border: "1px solid var(--border-strong)",
                backgroundColor: "var(--surface)",
              }}
            >
              Call: +91 86101 66708
            </a>
          </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
