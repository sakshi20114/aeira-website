import productsData from "@/data/products.json";
import type { Product } from "@/lib/types";
import ProductCard from "@/components/shop/ProductCard";
import SectionHeading from "@/components/ui/SectionHeading";

export default function RelatedProducts({ current }: { current: Product }) {
  const products = productsData as Product[];
  const related = products
    .filter((p) => p.id !== current.id && p.family === current.family)
    .concat(products.filter((p) => p.id !== current.id && p.family !== current.family))
    .slice(0, 4);

  return (
    <section className="bg-ink py-24 md:py-32 border-t border-gold/5">
      <div className="container-luxury">
        <SectionHeading
          align="left"
          eyebrow="You May Also Love"
          title="Complete the Collection"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-14">
          {related.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
