import Link from "next/link";
import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import { LogoImage } from "@/components/shared/LogoImage";

const services = [
  { label: "Digital Marketing", href: "/services/digital-marketing" },
  { label: "SEO", href: "/services/seo" },
  { label: "Local SEO", href: "/services/local-seo" },
  { label: "Google Ads", href: "/services/google-ads" },
  { label: "Meta Ads", href: "/services/meta-ads" },
  { label: "Social Media Marketing", href: "/services/social-media-marketing" },
  { label: "Website Development", href: "/services/website-development" },
  { label: "WordPress Development", href: "/services/wordpress-development" },
  { label: "E-Commerce Development", href: "/services/ecommerce-development" },
  { label: "UI/UX Design", href: "/services/ui-ux-design" },
  { label: "Branding & Graphic Design", href: "/services/branding-graphic-design" },
  { label: "Internship Programs", href: "/services/internship" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Our Process", href: "/process" },
  { label: "Internship", href: "/internship" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
];

const WHATSAPP_URL =
  "https://wa.me/918610166708?text=Hi%20M.B%20Growth%20Digital%2C%20I%20would%20like%20to%20discuss%20my%20project.";

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderTop: "1px solid var(--border)",
        color: "var(--text-primary)",
      }}
    >
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-14">
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-5">
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <LogoImage
                width={36}
                height={36}
                className="w-9 h-9 group-hover:scale-105 transition-transform duration-200"
              />
              <div className="flex flex-col leading-tight">
                <span
                  className="font-heading font-bold text-lg leading-none tracking-tight"
                  style={{ color: "var(--text-primary)" }}
                >
                  M.B Growth
                  <span style={{ color: "var(--green-primary)" }}> Digital</span>
                </span>
                <span
                  className="text-[10px] font-medium tracking-wider uppercase"
                  style={{ color: "var(--text-muted)" }}
                >
                  Digital Agency
                </span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "var(--text-muted)" }}>
              Chennai-based digital marketing and technology agency helping businesses grow online
              through intelligent digital strategies, web development, and creative solutions.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <a
                href="tel:+918610166708"
                className="flex items-start gap-2.5 transition-colors group/link"
                style={{ color: "var(--text-muted)" }}
              >
                <Phone className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "var(--green-primary)" }} />
                <span className="group-hover/link:text-green-600 transition-colors">
                  +91 86101 66708
                </span>
              </a>
              <a
                href="mailto:mbgrowthdigital26@gmail.com"
                className="flex items-start gap-2.5 transition-colors group/link"
                style={{ color: "var(--text-muted)" }}
              >
                <Mail className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "var(--green-primary)" }} />
                <span className="group-hover/link:text-green-600 transition-colors break-all">
                  mbgrowthdigital26@gmail.com
                </span>
              </a>
              <div className="flex items-start gap-2.5" style={{ color: "var(--text-muted)" }}>
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "var(--green-primary)" }} />
                <span>
                  No 7/16, MGR Nagar, Mangadu,
                  <br />
                  Chennai, Tamil Nadu – 600122
                </span>
              </div>
            </div>

            {/* Social + WhatsApp */}
            <div className="flex items-center gap-2 flex-wrap">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp M.B Growth Digital"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white transition-all hover:opacity-90"
                style={{ backgroundColor: "#25D366" }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.553 4.1 1.521 5.822L0 24l6.335-1.502A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.819 9.819 0 01-5.001-1.371l-.359-.214-3.72.882.912-3.617-.234-.372A9.775 9.775 0 012.182 12C2.182 6.575 6.575 2.182 12 2.182S21.818 6.575 21.818 12 17.425 21.818 12 21.818z" />
                </svg>
                WhatsApp
              </a>

              <a
                href="https://www.instagram.com/mbgrowthdigital26"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="M.B Growth Digital on Instagram"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all hover:opacity-90"
                style={{
                  background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                  color: "#fff",
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
                Instagram
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61594645632332"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="M.B Growth Digital on Facebook"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all hover:opacity-90"
                style={{
                  backgroundColor: "#1877F2",
                  color: "#fff",
                }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
                Facebook
              </a>

              <a
                href="https://www.linkedin.com/in/growth-digital-265786414/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="M.B Growth Digital on LinkedIn"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all hover:opacity-90"
                style={{
                  backgroundColor: "#0A66C2",
                  color: "#fff",
                }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4
              className="font-heading font-semibold text-sm tracking-wider uppercase mb-5"
              style={{ color: "var(--text-primary)" }}
            >
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm transition-colors hover:text-green-600"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Services Column */}
          <div>
            <h4
              className="font-heading font-semibold text-sm tracking-wider uppercase mb-5"
              style={{ color: "var(--text-primary)" }}
            >
              More Services
            </h4>
            <ul className="space-y-2.5">
              {services.slice(6).map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm transition-colors hover:text-green-600"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4
              className="font-heading font-semibold text-sm tracking-wider uppercase mb-5"
              style={{ color: "var(--text-primary)" }}
            >
              Company
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm transition-colors hover:text-green-600"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Working Hours */}
            <div className="mt-6">
              <h5
                className="font-heading font-semibold text-xs tracking-wider uppercase mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                Working Hours
              </h5>
              <div
                className="flex items-center gap-2 text-sm"
                style={{ color: "var(--text-muted)" }}
              >
                <span
                  className="w-2 h-2 rounded-full inline-block"
                  style={{ backgroundColor: "#22c55e" }}
                />
                Available 24 Hours
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm" style={{ color: "var(--text-muted)" }}>
          <p>
            © {new Date().getFullYear()} M.B Growth Digital. All rights reserved. | Mangadu, Chennai, Tamil Nadu
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Link href="/privacy-policy" className="hover:text-green-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-green-600 transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="hover:text-green-600 transition-colors flex items-center gap-1">
              Sitemap <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
