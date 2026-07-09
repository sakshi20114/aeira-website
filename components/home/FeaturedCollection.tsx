import products from "@/data/products.json";
import type { Product } from "@/lib/types";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/shop/ProductCard";
import GoldButton from "@/components/ui/GoldButton";

export default function FeaturedCollection() {
  const featured = (products as Product[]).slice(0, 4);

  return (
    <section className="relative bg-ink py-24 md:py-32">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="The Collection"
          title="Featured Fragrances"
          description="Four signatures from the AEIRA house, each composed to be worn as a statement, not a suggestion."
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-16">
          {featured.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
        <div className="flex justify-center mt-16">
          <GoldButton href="/shop" variant="outline">
            View All Fragrances
          </GoldButton>
        </div>
      </div>
    </section>
  );
}
