"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Minus, Plus, Heart, ShoppingBag, Truck, ShieldCheck, RotateCcw } from "lucide-react";
import type { Product } from "@/lib/types";
import { formatPrice, cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import StarRating from "@/components/ui/StarRating";
import GoldButton from "@/components/ui/GoldButton";
import Accordion from "@/components/ui/Accordion";

export default function ProductInfo({ product }: { product: Product }) {
  const [qty, setQty] = useState(1);
  const { addItem } = useCart();
  const { toggleItem, isWishlisted } = useWishlist();
  const router = useRouter();
  const wishlisted = isWishlisted(product.id);

  function handleBuyNow() {
    addItem(product, qty);
    router.push("/checkout");
  }

  const details = [
    {
      q: "Fragrance Details",
      a: `${product.category} · ${product.size} · ${product.family} · Longevity: ${product.longevity} · Sillage: ${product.sillage}`,
    },
    {
      q: "Shipping & Returns",
      a: "Free shipping across India on orders above ₹2,999. Dispatched within 24-48 hours. See our Shipping and Refund policies for full details.",
    },
    {
      q: "Inspired By",
      a: product.inspiredBy,
    },
  ];

  return (
    <div className="lg:sticky lg:top-28">
      <span className="eyebrow">{product.category} · {product.gender}</span>
      <h1 className="font-display text-4xl md:text-5xl text-ivory mt-2">
        {product.name}
      </h1>
      <div className="flex items-center gap-3 mt-3">
        <StarRating rating={product.rating} />
        <span className="text-xs text-smoke">
          {product.rating} ({product.reviewCount} reviews)
        </span>
      </div>

      <p className="text-ivory/60 mt-5 leading-relaxed text-sm md:text-base">
        {product.story}
      </p>

      <div className="flex items-center gap-3 mt-6">
        <span className="text-gold text-2xl font-display">
          {formatPrice(product.price)}
        </span>
        {product.compareAtPrice && (
          <span className="text-smoke line-through text-sm">
            {formatPrice(product.compareAtPrice)}
          </span>
        )}
        <span className="text-xs text-smoke">/ {product.size}</span>
      </div>

      <div className="flex items-center gap-4 mt-8">
        <div className="flex items-center border border-gold/25">
          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="w-10 h-11 flex items-center justify-center text-gold hover:bg-white/5"
            aria-label="Decrease quantity"
          >
            <Minus size={14} />
          </button>
          <span className="w-10 text-center text-ivory">{qty}</span>
          <button
            onClick={() => setQty((q) => q + 1)}
            className="w-10 h-11 flex items-center justify-center text-gold hover:bg-white/5"
            aria-label="Increase quantity"
          >
            <Plus size={14} />
          </button>
        </div>

        <button
          onClick={() => toggleItem(product)}
          aria-label="Toggle wishlist"
          className="w-11 h-11 rounded-full border border-gold/25 flex items-center justify-center text-gold hover:bg-gold hover:text-ink transition-colors"
        >
          <Heart size={16} className={cn(wishlisted && "fill-current")} />
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mt-6">
        <GoldButton
          variant="outline"
          className="flex-1"
          onClick={() => addItem(product, qty)}
        >
          <ShoppingBag size={14} /> Add to Cart
        </GoldButton>
        <GoldButton variant="solid" className="flex-1" onClick={handleBuyNow}>
          Buy Now
        </GoldButton>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gold/10 text-center">
        <div className="flex flex-col items-center gap-2">
          <Truck size={18} className="text-gold" />
          <span className="text-[10px] text-smoke uppercase tracking-wide">Fast Shipping</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <ShieldCheck size={18} className="text-gold" />
          <span className="text-[10px] text-smoke uppercase tracking-wide">Authentic Formula</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <RotateCcw size={18} className="text-gold" />
          <span className="text-[10px] text-smoke uppercase tracking-wide">Easy Returns</span>
        </div>
      </div>

      <div className="mt-8 pt-2">
        <Accordion items={details} />
      </div>
    </div>
  );
}
