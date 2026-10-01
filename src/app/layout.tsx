import type { Metadata } from "next";
import { Poppins, Manrope } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mbgrowthdigital.in"),
  title: {
    default: "M.B Growth Digital | Digital Marketing & Internship Solutions in Chennai",
    template: "%s | M.B Growth Digital",
  },
  description: "M.B Growth Digital is a Chennai-based Digital Marketing & Internship Solutions company offering SEO, Google Ads, Social Media Marketing, Content Marketing, Website Development, Mobile App Development, E-Commerce Development, Graphic Design, and Internship Programs for students.",
  keywords: ["Digital Marketing", "SEO Company", "Google Ads Services", "Social Media Marketing", "Website Development", "Mobile App Development", "E-Commerce Development", "Internship Programs", "Digital Marketing Internship", "M.B Growth Digital"],
  openGraph: {
    title: "M.B Growth Digital | Digital Marketing & Internship Solutions in Chennai",
    description: "M.B Growth Digital is a Chennai-based Digital Marketing & Internship Solutions company offering SEO, Google Ads, Social Media Marketing, Content Marketing, Website Development, Mobile App Development, E-Commerce Development, Graphic Design, and Internship Programs for students.",
    url: "https://mbgrowthdigital.in",
    siteName: "M.B Growth Digital",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "M.B Growth Digital — Digital Marketing & Internship Solutions, Chennai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "M.B Growth Digital | Digital Marketing & Internship Solutions in Chennai",
    description: "M.B Growth Digital is a Chennai-based Digital Marketing & Internship Solutions company offering SEO, Google Ads, Social Media Marketing, Content Marketing, Website Development, Mobile App Development, E-Commerce Development, Graphic Design, and Internship Programs for students.",
    creator: "@mbgrowthdigital",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://mbgrowthdigital.in",
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Organization"],
  "name": "M.B Growth Digital",
  "url": "https://mbgrowthdigital.in",
  "logo": "https://mbgrowthdigital.in/logo.png",
  "description": "M.B Growth Digital is a Chennai-based Digital Marketing & Internship Solutions company helping businesses grow online through innovative digital strategies and technology solutions. We also provide valuable internship opportunities for students to gain real-world industry experience and practical skills.",
  "telephone": "+918610166708",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Mangadu",
    "addressRegion": "Tamil Nadu",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+918610166708",
    "contactType": "customer service",
    "availableLanguage": ["English", "Tamil"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${manrope.variable} antialiased min-h-screen flex flex-col overflow-x-hidden`}
        suppressHydrationWarning
        style={{ backgroundColor: "var(--bg)", color: "var(--text-primary)" }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <div className="flex-1">
            <Navbar />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
        <GoogleAnalytics gaId="G-6KKTM1JP5J" />
      </body>
    </html>
  );
}

