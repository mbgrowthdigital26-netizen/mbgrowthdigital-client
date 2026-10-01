import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work & Case Studies | M.B Growth Digital",
  description: "Explore the portfolio of M.B Growth Digital. See how we have transformed businesses with our web development and digital marketing solutions in Chennai.",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
