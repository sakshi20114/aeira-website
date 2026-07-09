"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import products from "@/data/products.json";
import type { Product } from "@/lib/types";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/shop/ProductCard";

export default function BestSellers() {
  const bestsellers = (products as Product[]).filter((p) => p.bestseller);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative bg-ink py-24 md:py-32 border-t border-gold/5">
      <div className="container-luxury">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            align="left"
            eyebrow="Most Loved"
            title="Best Sellers"
            description="The fragrances our community reaches for again and again."
          />
          <div className="flex gap-3 shrink-0">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canPrev}
              aria-label="Scroll left"
              className="w-11 h-11 rounded-full border border-gold/30 flex items-center justify-center text-gold disabled:opacity-30 hover:bg-gold hover:text-ink transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canNext}
              aria-label="Scroll right"
              className="w-11 h-11 rounded-full border border-gold/30 flex items-center justify-center text-gold disabled:opacity-30 hover:bg-gold hover:text-ink transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="mt-14 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {bestsellers.map((p, i) => (
              <div key={p.id} className="min-w-[70%] sm:min-w-[42%] lg:min-w-[26%]">
                <ProductCard product={p} index={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
