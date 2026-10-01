import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact M.B Growth Digital | Digital Agency in Mangadu, Chennai",
  description: "Get in touch with M.B Growth Digital. We are located in Mangadu, Chennai. Let's discuss your digital marketing, web development, or internship needs.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
