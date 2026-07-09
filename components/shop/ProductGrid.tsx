"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import productsData from "@/data/products.json";
import type { Product } from "@/lib/types";
import ProductCard from "@/components/shop/ProductCard";
import Filters, { FiltersState } from "@/components/shop/Filters";
import GoldButton from "@/components/ui/GoldButton";

const PAGE_SIZE = 8;

export default function ProductGrid() {
  const products = productsData as Product[];
  const searchParams = useSearchParams();

  const [state, setState] = useState<FiltersState>({
    search: "",
    gender: searchParams.get("gender") ?? "",
    family: "",
    sort: "featured",
  });
  const [visible, setVisible] = useState(PAGE_SIZE);

  useEffect(() => {
    const filter = searchParams.get("filter");
    const gender = searchParams.get("gender");
    if (gender) setState((s) => ({ ...s, gender }));
    // filter=bestseller / new handled via filtered list below
    if (filter === "bestseller" || filter === "new") {
      setState((s) => ({ ...s }));
    }
  }, [searchParams]);

  const genders = useMemo(
    () => Array.from(new Set(products.map((p) => p.gender))),
    [products]
  );
  const families = useMemo(
    () => Array.from(new Set(products.map((p) => p.family))),
    [products]
  );

  const filtered = useMemo(() => {
    const filterParam = searchParams.get("filter");
    let list = [...products];

    if (filterParam === "bestseller") list = list.filter((p) => p.bestseller);
    if (filterParam === "new") list = list.filter((p) => p.new);

    if (state.search) {
      const q = state.search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.family.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q)
      );
    }
    if (state.gender) list = list.filter((p) => p.gender === state.gender);
    if (state.family) list = list.filter((p) => p.family === state.family);

    switch (state.sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list.sort((a, b) => b.rating - a.rating);
        break;
      default:
        list.sort((a, b) => Number(b.bestseller) - Number(a.bestseller));
    }

    return list;
  }, [products, state, searchParams]);

  useEffect(() => {
    setVisible(PAGE_SIZE);
  }, [state]);

  const shown = filtered.slice(0, visible);

  return (
    <div>
      <Filters
        state={state}
        onChange={(next) => setState((s) => ({ ...s, ...next }))}
        genders={genders}
        families={families}
        resultCount={filtered.length}
      />

      {shown.length === 0 ? (
        <div className="text-center py-24">
          <p className="font-display text-2xl text-ivory/70">
            No fragrances match your search.
          </p>
          <p className="text-sm text-smoke mt-2">
            Try clearing a filter or searching a different term.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          <AnimatePresence>
            {shown.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </AnimatePresence>
        </div>
      )}

      {visible < filtered.length && (
        <div className="flex justify-center mt-16">
          <GoldButton
            variant="outline"
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
          >
            Load More Fragrances
          </GoldButton>
        </div>
      )}
    </div>
  );
}
