"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

export type SortOption = "featured" | "price-asc" | "price-desc" | "rating";

interface FiltersState {
  search: string;
  gender: string;
  family: string;
  sort: SortOption;
}

export default function Filters({
  state,
  onChange,
  genders,
  families,
  resultCount,
}: {
  state: FiltersState;
  onChange: (next: Partial<FiltersState>) => void;
  genders: string[];
  families: string[];
  resultCount: number;
}) {
  return (
    <div className="sticky top-24 z-30 bg-ink/95 backdrop-blur-md border border-gold/10 p-5 md:p-6 mb-10">
      <div className="flex flex-col lg:flex-row lg:items-center gap-4">
        <div className="relative flex-1">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-smoke"
          />
          <input
            value={state.search}
            onChange={(e) => onChange({ search: e.target.value })}
            placeholder="Search fragrances..."
            className="w-full bg-white/5 border border-gold/15 pl-9 pr-4 py-2.5 text-sm text-ivory placeholder:text-smoke outline-none focus:border-gold transition-colors"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          <select
            value={state.gender}
            onChange={(e) => onChange({ gender: e.target.value })}
            className="bg-white/5 border border-gold/15 px-4 py-2.5 text-xs uppercase tracking-wide text-ivory/80 outline-none focus:border-gold transition-colors"
          >
            <option value="">All Genders</option>
            {genders.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>

          <select
            value={state.family}
            onChange={(e) => onChange({ family: e.target.value })}
            className="bg-white/5 border border-gold/15 px-4 py-2.5 text-xs uppercase tracking-wide text-ivory/80 outline-none focus:border-gold transition-colors"
          >
            <option value="">All Families</option>
            {families.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>

          <select
            value={state.sort}
            onChange={(e) => onChange({ sort: e.target.value as SortOption })}
            className="bg-white/5 border border-gold/15 px-4 py-2.5 text-xs uppercase tracking-wide text-ivory/80 outline-none focus:border-gold transition-colors"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-4 text-xs text-smoke">
        <SlidersHorizontal size={12} />
        <span>{resultCount} fragrance{resultCount !== 1 ? "s" : ""} found</span>
      </div>
    </div>
  );
}

export type { FiltersState };
