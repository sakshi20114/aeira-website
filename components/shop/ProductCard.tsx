"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, ShoppingBag } from "lucide-react";
import type { Product } from "@/lib/types";
import { formatPrice, cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import StarRating from "@/components/ui/StarRating";

export default function ProductCard({
  product,
  index = 0,
}: {
  product: Product;
  index?: number;
}) {
  const { addItem } = useCart();
  const { toggleItem, isWishlisted } = useWishlist();
  const wishlisted = isWishlisted(product.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: (index % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -10 }}
      className="group relative"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-parchment/5 border border-gold/10">
        <Link href={`/shop/${product.slug}`} className="block w-full h-full">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition-transform duration-[1400ms] ease-luxury group-hover:scale-110"
          />
          <Image
            src={product.images[1] ?? product.images[0]}
            alt=""
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-luxury"
          />
        </Link>

        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {(product.bestseller || product.new) && (
          <span className="absolute top-3 left-3 text-[10px] tracking-widest2 uppercase bg-ink/70 backdrop-blur-sm text-gold px-3 py-1 border border-gold/30">
            {product.bestseller ? "Bestseller" : "New"}
          </span>
        )}

        <button
          onClick={() => toggleItem(product)}
          aria-label="Toggle wishlist"
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-ink/60 backdrop-blur-sm border border-gold/20 flex items-center justify-center text-gold transition-transform duration-300 hover:scale-110"
        >
          <Heart size={14} className={cn(wishlisted && "fill-gold")} />
        </button>

        <button
          onClick={() => addItem(product)}
          className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-luxury bg-gold text-ink text-[11px] tracking-widest2 uppercase font-label py-3 flex items-center justify-center gap-2"
        >
          <ShoppingBag size={13} /> Quick Add
        </button>
      </div>

      <Link href={`/shop/${product.slug}`} className="block mt-4">
        <div className="flex items-center justify-between">
          <span className="text-[10px] tracking-widest uppercase text-smoke">
            {product.family}
          </span>
          <StarRating rating={product.rating} size={11} />
        </div>
        <h3 className="font-display text-xl text-ivory mt-1.5 group-hover:text-gold transition-colors duration-300">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mt-1.5">
          <span className="text-gold text-sm">{formatPrice(product.price)}</span>
          {product.compareAtPrice && (
            <span className="text-smoke text-xs line-through">
              {formatPrice(product.compareAtPrice)}
            </span>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
