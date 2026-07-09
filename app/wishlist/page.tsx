"use client";

import { Heart } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";
import ProductCard from "@/components/shop/ProductCard";
import GoldButton from "@/components/ui/GoldButton";
import SplitText from "@/components/ui/SplitText";

export default function WishlistPage() {
  const { items } = useWishlist();

  return (
    <div className="pt-32 md:pt-40 pb-24 bg-ink min-h-screen">
      <div className="container-luxury">
        <div className="text-center mb-14">
          <span className="eyebrow block mb-4">Saved For Later</span>
          <SplitText
            text="Your Wishlist"
            el="h1"
            className="font-display text-5xl md:text-7xl text-ivory"
          />
        </div>

        {items.length === 0 ? (
          <div className="flex flex-col items-center text-center py-20">
            <Heart className="text-gold/40 mb-6" size={48} />
            <p className="font-display text-2xl text-ivory/70">
              Your wishlist is empty
            </p>
            <p className="text-sm text-smoke mt-2 mb-8">
              Tap the heart icon on any fragrance to save it here.
            </p>
            <GoldButton href="/shop" variant="solid">
              Browse Fragrances
            </GoldButton>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {items.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
