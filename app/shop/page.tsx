import type { Metadata } from "next";
import { Suspense } from "react";
import SplitText from "@/components/ui/SplitText";
import ProductGrid from "@/components/shop/ProductGrid";

export const metadata: Metadata = {
  title: "Shop All Fragrances",
  description:
    "Browse the full AEIRA collection of luxury inspired eau de parfums for men and women. Filter by scent family, gender, and price.",
  alternates: { canonical: "/shop" },
};

export default function ShopPage() {
  return (
    <div className="pt-32 md:pt-40 pb-24 bg-ink min-h-screen">
      <div className="container-luxury">
        <div className="text-center mb-14">
          <span className="eyebrow block mb-4">The Full Collection</span>
          <SplitText
            text="Shop AEIRA"
            el="h1"
            className="font-display text-5xl md:text-7xl text-ivory"
          />
        </div>

        <Suspense fallback={<div className="text-center text-smoke">Loading fragrances…</div>}>
          <ProductGrid />
        </Suspense>
      </div>
    </div>
  );
}
