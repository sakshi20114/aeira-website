import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Cart",
  description: "Review the fragrances in your AEIRA shopping cart before checkout.",
  alternates: { canonical: "/cart" },
};

export default function CartLayout({ children }: { children: React.ReactNode }) {
  return children;
}
