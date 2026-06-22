import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group inline-block">
              <div className="flex items-center gap-2">
                <Image src="/logo.png" alt="M.B Growth Digital Logo" width={40} height={40} className="w-10 h-auto group-hover:scale-105 transition-transform duration-300" />
                <span className="font-heading font-bold text-2xl text-slate-900 tracking-tight">
                  M.B Growth <span className="text-emerald-500">Digital</span>
                </span>
              </div>
            </Link>
            <p className="text-slate-600 leading-relaxed">
              Helping Businesses Grow. Empowering Future Professionals. Premium digital marketing and internship solutions based in Chennai.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-emerald-600 hover:text-white transition-all duration-300 font-bold text-sm">FB</a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-emerald-600 hover:text-white transition-all duration-300 font-bold text-sm">IG</a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-emerald-600 hover:text-white transition-all duration-300 font-bold text-sm">IN</a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-emerald-600 hover:text-white transition-all duration-300 font-bold text-sm">X</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-900 font-heading font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/internship">Internship Programs</FooterLink>
              <FooterLink href="/portfolio">Our Portfolio</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-slate-900 font-heading font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              <FooterLink href="/services">Search Engine Optimization</FooterLink>
              <FooterLink href="/services">Social Media Marketing</FooterLink>
              <FooterLink href="/services">Website Development</FooterLink>
              <FooterLink href="/services">Google Ads</FooterLink>
              <FooterLink href="/services">Graphic Design</FooterLink>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-slate-900 font-heading font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-slate-600">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                <span>No 7/16, MGR Nagar, Mangadu, Chennai, Tamil Nadu 600 122, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-500 shrink-0" />
                <a href="mailto:mbgrowthdigital26@gmail.com" className="hover:text-emerald-400 transition-colors">
                  mbgrowthdigital26@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>+91 86101 66708</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} M.B Growth Digital. All Rights Reserved.</p>
          <p>Designed for Digital Excellence & Practical Learning</p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-slate-600 hover:text-emerald-400 transition-colors flex items-center gap-2 group"
      >
        <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
        {children}
      </Link>
    </li>
  );
}
