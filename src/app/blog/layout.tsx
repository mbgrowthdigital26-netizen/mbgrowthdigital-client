import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Digital Marketing Insights & Tips | M.B Growth Digital",
  description: "Read the latest digital marketing insights, SEO tips, web development guides, and industry trends from M.B Growth Digital. Stay ahead in the digital world.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
