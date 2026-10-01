"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, ChevronDown, MessageCircle,
  TrendingUp, Search, Target, Share2, Laptop, ShoppingCart,
  Smartphone, Palette, GraduationCap, Mail, MapPin, Globe,
  FileText, Building2, Wrench, Brush,
} from "lucide-react";
import { LogoImage } from "@/components/shared/LogoImage";
import { ThemeToggle } from "@/components/shared/ThemeToggle";

const WHATSAPP_BASE = "https://wa.me/918610166708?text=";

const servicesMenu = [
  {
    heading: "Digital Marketing",
    items: [
      { icon: TrendingUp, label: "Digital Marketing", href: "/services/digital-marketing" },
      { icon: Search, label: "SEO", href: "/services/seo" },
      { icon: MapPin, label: "Local SEO", href: "/services/local-seo" },
      { icon: Target, label: "Google Ads", href: "/services/google-ads" },
      { icon: Share2, label: "Meta Ads", href: "/services/meta-ads" },
      { icon: Share2, label: "Social Media Marketing", href: "/services/social-media-marketing" },
      { icon: FileText, label: "Content Marketing", href: "/services/content-marketing" },
    ],
  },
  {
    heading: "Development",
    items: [
      { icon: Laptop, label: "Website Development", href: "/services/website-development" },
      { icon: Globe, label: "WordPress Development", href: "/services/wordpress-development" },
      { icon: ShoppingCart, label: "E-Commerce", href: "/services/ecommerce-development" },
      { icon: Smartphone, label: "Mobile App Development", href: "/services/mobile-app-development" },
    ],
  },
  {
    heading: "Design & More",
    items: [
      { icon: Palette, label: "UI/UX Design", href: "/services/ui-ux-design" },
      { icon: Brush, label: "Branding & Graphic Design", href: "/services/branding-graphic-design" },
      { icon: Building2, label: "Google Business Profile", href: "/services/google-business-profile" },
      { icon: Mail, label: "Email Marketing", href: "/services/email-marketing" },
      { icon: Wrench, label: "Web Maintenance", href: "/services/web-maintenance" },
      { icon: GraduationCap, label: "Internship Programs", href: "/services/internship" },
    ],
  },
];

const industriesMenu = [
  { label: "Startups", href: "/industries#startups" },
  { label: "Small Businesses", href: "/industries#small-businesses" },
  { label: "Local Businesses", href: "/industries#local-businesses" },
  { label: "Travel & Hospitality", href: "/industries#travel-hospitality" },
  { label: "Beauty & Fitness", href: "/industries#beauty-fitness" },
  { label: "Finance & Professional Services", href: "/industries#finance-professional-services" },
  { label: "Restaurants & Food", href: "/industries#restaurants-food" },
  { label: "IT & Software", href: "/industries#it-software" },
  { label: "Education & Colleges", href: "/industries#education-colleges" },
  { label: "E-Commerce", href: "/industries#ecommerce" },
  { label: "Corporate & Enterprise", href: "/industries#corporate-enterprise" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Industries", href: "/industries", hasDropdown: true },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Projects", href: "/projects" },
  { name: "Process", href: "/process" },
  { name: "Internship", href: "/internship" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileMenuOpen(false);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setActiveDropdown(null);
  }, [pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const handleMouseEnter = (name: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const waLink = (msg: string) => `${WHATSAPP_BASE}${encodeURIComponent(msg)}`;

  return (
    <>
      <header
        className="fixed top-0 w-full z-50 transition-all duration-300"
        style={{
          backgroundColor: isScrolled ? "var(--navbar-bg)" : "transparent",
          backdropFilter: isScrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(16px)" : "none",
          borderBottom: isScrolled ? "1px solid var(--navbar-border)" : "none",
          boxShadow: isScrolled ? "var(--shadow-sm)" : "none",
          padding: isScrolled ? "0.75rem 0" : "1.25rem 0",
        }}
      >
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <LogoImage
              width={36}
              height={36}
              className="w-9 h-9 group-hover:scale-105 transition-transform duration-200"
              onLoadStatus={(loaded) => setLogoLoaded(loaded)}
            />
            <div className="flex flex-col leading-tight">
              <span
                className="font-heading font-bold text-lg leading-none tracking-tight transition-colors"
                style={{ color: "var(--text-primary)" }}
              >
                {!logoLoaded && "M.B "}Growth
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

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
              const isDropdownOpen = activeDropdown === link.name;

              if (link.name === "Services") {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter("Services")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                      style={{
                        color: isActive || isDropdownOpen ? "var(--green-primary)" : "var(--text-secondary)",
                        backgroundColor: isDropdownOpen ? "var(--green-bg)" : "transparent",
                      }}
                      aria-expanded={isDropdownOpen}
                      aria-haspopup="true"
                    >
                      Services
                      <ChevronDown
                        className="w-3.5 h-3.5 transition-transform duration-200"
                        style={{ transform: isDropdownOpen ? "rotate(180deg)" : "none" }}
                      />
                    </button>

                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.97 }}
                          transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[680px] rounded-2xl shadow-xl overflow-hidden z-50"
                          style={{
                            backgroundColor: "var(--surface)",
                            border: "1px solid var(--border-strong)",
                            boxShadow: "var(--shadow-xl)",
                          }}
                        >
                          <div className="grid grid-cols-3 gap-0 p-4">
                            {servicesMenu.map((group, gi) => (
                              <div
                                key={gi}
                                className="p-3"
                                style={{
                                  borderRight: gi < 2 ? "1px solid var(--border)" : "none",
                                }}
                              >
                                <p
                                  className="text-xs font-bold tracking-widest uppercase mb-3 px-2"
                                  style={{ color: "var(--green-primary)" }}
                                >
                                  {group.heading}
                                </p>
                                {group.items.map((item) => (
                                  <Link
                                    key={item.href}
                                    href={item.href}
                                    className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-sm transition-all duration-150 group/item"
                                    style={{ color: "var(--text-secondary)" }}
                                    onMouseEnter={(e) => {
                                      e.currentTarget.style.backgroundColor = "var(--green-bg)";
                                      e.currentTarget.style.color = "var(--green-primary)";
                                    }}
                                    onMouseLeave={(e) => {
                                      e.currentTarget.style.backgroundColor = "";
                                      e.currentTarget.style.color = "var(--text-secondary)";
                                    }}
                                  >
                                    <item.icon className="w-3.5 h-3.5 shrink-0 opacity-70" />
                                    <span className="font-medium">{item.label}</span>
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </div>
                          {/* Footer CTA strip */}
                          <div
                            className="px-6 py-3 flex items-center justify-between"
                            style={{ backgroundColor: "var(--bg-muted)", borderTop: "1px solid var(--border)" }}
                          >
                            <span className="text-sm" style={{ color: "var(--text-muted)" }}>
                              Not sure what you need?
                            </span>
                            <Link
                              href="/contact"
                              className="text-sm font-semibold transition-colors"
                              style={{ color: "var(--green-primary)" }}
                            >
                              Get free consultation →
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              if (link.name === "Industries") {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter("Industries")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                      style={{
                        color: isActive || isDropdownOpen ? "var(--green-primary)" : "var(--text-secondary)",
                        backgroundColor: isDropdownOpen ? "var(--green-bg)" : "transparent",
                      }}
                      aria-expanded={isDropdownOpen}
                      aria-haspopup="true"
                    >
                      Industries
                      <ChevronDown
                        className="w-3.5 h-3.5 transition-transform duration-200"
                        style={{ transform: isDropdownOpen ? "rotate(180deg)" : "none" }}
                      />
                    </button>

                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.97 }}
                          transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 rounded-2xl shadow-xl overflow-hidden z-50 p-2"
                          style={{
                            backgroundColor: "var(--surface)",
                            border: "1px solid var(--border-strong)",
                            boxShadow: "var(--shadow-xl)",
                          }}
                        >
                          {industriesMenu.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150"
                              style={{ color: "var(--text-secondary)" }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = "var(--green-bg)";
                                e.currentTarget.style.color = "var(--green-primary)";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = "";
                                e.currentTarget.style.color = "var(--text-secondary)";
                              }}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                  style={{
                    color: isActive ? "var(--green-primary)" : "var(--text-secondary)",
                    backgroundColor: isActive ? "var(--green-bg)" : "transparent",
                    fontWeight: isActive ? "600" : "500",
                  }}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-2">
            <ThemeToggle />

            <a
              href={waLink("Hi M.B Growth Digital, I would like to discuss a project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              style={{
                color: "#25D366",
                border: "1px solid rgba(37, 211, 102, 0.3)",
                backgroundColor: "rgba(37, 211, 102, 0.06)",
              }}
              aria-label="WhatsApp M.B Growth Digital"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            <Link
              href="/contact"
              className="px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
              style={{
                backgroundColor: "var(--green-primary)",
                boxShadow: "var(--shadow-green)",
              }}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile: Theme toggle + Hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
              style={{
                backgroundColor: "var(--bg-muted)",
                border: "1px solid var(--border)",
                color: "var(--text-primary)",
              }}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 lg:hidden"
              style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 h-full w-80 z-50 overflow-y-auto lg:hidden"
              style={{
                backgroundColor: "var(--surface)",
                borderLeft: "1px solid var(--border)",
              }}
            >
              {/* Drawer Header */}
              <div
                className="flex items-center justify-between p-5"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2"
                >
                  <LogoImage width={32} height={32} className="w-8 h-8" />
                  <span
                    className="font-heading font-bold text-base"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {!logoLoaded && "M.B "}Growth <span style={{ color: "var(--green-primary)" }}>Digital</span>
                  </span>
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{
                    backgroundColor: "var(--bg-muted)",
                    color: "var(--text-muted)",
                  }}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="p-4 space-y-1">
                {navLinks.map((link) => {
                  if (link.name === "Services") {
                    const isExpanded = mobileExpandedSection === "Services";
                    return (
                      <div key="services-mobile">
                        <button
                          onClick={() => setMobileExpandedSection(isExpanded ? null : "Services")}
                          className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors"
                          style={{
                            color: isExpanded ? "var(--green-primary)" : "var(--text-primary)",
                            backgroundColor: isExpanded ? "var(--green-bg)" : "transparent",
                          }}
                        >
                          <span>Services</span>
                          <ChevronDown
                            className="w-4 h-4 transition-transform"
                            style={{ transform: isExpanded ? "rotate(180deg)" : "none" }}
                          />
                        </button>
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden ml-2 mt-1"
                            >
                              {servicesMenu.map((group) => (
                                <div key={group.heading} className="mb-2">
                                  <p
                                    className="text-xs font-bold tracking-widest uppercase px-4 py-1"
                                    style={{ color: "var(--green-primary)" }}
                                  >
                                    {group.heading}
                                  </p>
                                  {group.items.map((item) => (
                                    <Link
                                      key={item.href}
                                      href={item.href}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors"
                                      style={{ color: "var(--text-secondary)" }}
                                    >
                                      <item.icon className="w-3.5 h-3.5 opacity-60 shrink-0" />
                                      {item.label}
                                    </Link>
                                  ))}
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  if (link.name === "Industries") {
                    const isExpanded = mobileExpandedSection === "Industries";
                    return (
                      <div key="industries-mobile">
                        <button
                          onClick={() => setMobileExpandedSection(isExpanded ? null : "Industries")}
                          className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors"
                          style={{
                            color: isExpanded ? "var(--green-primary)" : "var(--text-primary)",
                            backgroundColor: isExpanded ? "var(--green-bg)" : "transparent",
                          }}
                        >
                          <span>Industries</span>
                          <ChevronDown
                            className="w-4 h-4 transition-transform"
                            style={{ transform: isExpanded ? "rotate(180deg)" : "none" }}
                          />
                        </button>
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden ml-2 mt-1"
                            >
                              {industriesMenu.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="flex items-center px-4 py-2 rounded-lg text-sm transition-colors"
                                  style={{ color: "var(--text-secondary)" }}
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors"
                      style={{
                        color: isActive ? "var(--green-primary)" : "var(--text-primary)",
                        backgroundColor: isActive ? "var(--green-bg)" : "transparent",
                        fontWeight: isActive ? "600" : "500",
                      }}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>

              {/* Mobile CTAs */}
              <div
                className="p-4 mt-2 space-y-3"
                style={{ borderTop: "1px solid var(--border)" }}
              >
                <a
                  href={waLink("Hi M.B Growth Digital, I would like to discuss a project.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-sm font-semibold transition-all"
                  style={{
                    color: "#ffffff",
                    backgroundColor: "#25D366",
                  }}
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </a>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center w-full py-3 px-4 rounded-xl text-sm font-semibold text-white transition-all"
                  style={{ backgroundColor: "var(--green-primary)" }}
                >
                  Get Started
                </Link>
              </div>

              {/* Contact info in drawer */}
              <div className="p-4">
                <a
                  href="tel:+918610166708"
                  className="flex items-center gap-2 text-sm transition-colors"
                  style={{ color: "var(--text-muted)" }}
                >
                  <span>📞</span>
                  <span>+91 86101 66708</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

