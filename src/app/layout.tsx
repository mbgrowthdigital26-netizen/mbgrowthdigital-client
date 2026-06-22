import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "M.B Growth Digital | Digital Marketing Agency in Chennai",
    template: "%s | M.B Growth Digital",
  },
  description: "Chennai-based digital marketing agency providing high-impact digital marketing services and hands-on internship opportunities.",
  openGraph: {
    title: "M.B Growth Digital",
    description: "Premium digital marketing services and internship solutions in Chennai.",
    url: "https://mbgrowthdigital.com",
    siteName: "M.B Growth Digital",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-slate-50 min-h-screen flex flex-col overflow-x-hidden`}
      >
        <div className="flex-1">
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
