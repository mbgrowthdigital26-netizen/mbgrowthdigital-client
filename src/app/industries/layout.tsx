import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve | M.B Growth Digital",
  description: "M.B Growth Digital serves startups, small businesses, local businesses, e-commerce, restaurants, education, IT, travel, finance, and corporate enterprises with tailored digital marketing solutions in Chennai.",
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
