import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing & IT Internships for Students in Chennai",
  description: "Kickstart your career with M.B Growth Digital's internship programs. Gain hands-on experience in Digital Marketing, SEO, and App Development in Mangadu, Chennai.",
};

export default function InternshipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
