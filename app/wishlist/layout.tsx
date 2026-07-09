import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Wishlist",
  description: "Fragrances you've saved to revisit later at AEIRA.",
  alternates: { canonical: "/wishlist" },
};

export default function WishlistLayout({ children }: { children: React.ReactNode }) {
  return children;
}
