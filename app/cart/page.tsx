"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import GoldButton from "@/components/ui/GoldButton";
import SplitText from "@/components/ui/SplitText";

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal, clearCart } = useCart();

  return (
    <div className="pt-32 md:pt-40 pb-24 bg-ink min-h-screen">
      <div className="container-luxury">
        <div className="text-center mb-14">
          <span className="eyebrow block mb-4">Your Selection</span>
          <SplitText
            text="Shopping Cart"
            el="h1"
            className="font-display text-5xl md:text-7xl text-ivory"
          />
        </div>

        {items.length === 0 ? (
          <div className="flex flex-col items-center text-center py-20">
            <ShoppingBag className="text-gold/40 mb-6" size={48} />
            <p className="font-display text-2xl text-ivory/70">Your cart is empty</p>
            <p className="text-sm text-smoke mt-2 mb-8">
              Discover a fragrance that becomes unmistakably yours.
            </p>
            <GoldButton href="/shop" variant="solid">
              Continue Shopping
            </GoldButton>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-14">
            <div className="lg:col-span-2 flex flex-col divide-y divide-gold/10">
              <AnimatePresence>
                {items.map((item) => (
                  <motion.div
                    key={item.product.id}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.4 }}
                    className="flex gap-5 py-6"
                  >
                    <Link
                      href={`/shop/${item.product.slug}`}
                      className="relative w-24 h-28 shrink-0 overflow-hidden"
                    >
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.name}
                        fill
                        sizes="96px"
                        className="object-cover"
                      />
                    </Link>
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between gap-4">
                        <div>
                          <Link
                            href={`/shop/${item.product.slug}`}
                            className="font-display text-lg text-ivory hover:text-gold transition-colors"
                          >
                            {item.product.name}
                          </Link>
                          <p className="text-xs text-smoke mt-1">
                            {item.product.size} · {item.product.family}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.product.id)}
                          aria-label="Remove item"
                          className="text-smoke hover:text-red-400 transition-colors h-fit"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-gold/25">
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity - 1)
                            }
                            className="w-8 h-8 flex items-center justify-center text-gold"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="w-8 text-center text-sm text-ivory">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity + 1)
                            }
                            className="w-8 h-8 flex items-center justify-center text-gold"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <span className="text-gold">
                          {formatPrice(item.product.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              <button
                onClick={clearCart}
                className="text-xs text-smoke hover:text-red-400 transition-colors mt-6 self-start uppercase tracking-widest"
              >
                Clear Cart
              </button>
            </div>

            <div className="h-fit sticky top-28 border border-gold/15 bg-white/[0.02] p-8">
              <h2 className="font-display text-2xl text-ivory mb-6">Order Summary</h2>
              <div className="flex justify-between text-sm text-ivory/60 mb-3">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm text-ivory/60 mb-3">
                <span>Shipping</span>
                <span>{subtotal > 2999 ? "Free" : formatPrice(150)}</span>
              </div>
              <div className="divider-gold my-4" />
              <div className="flex justify-between text-lg text-ivory mb-8">
                <span className="font-display">Total</span>
                <span className="text-gold font-display">
                  {formatPrice(subtotal > 2999 ? subtotal : subtotal + 150)}
                </span>
              </div>
              <GoldButton href="/checkout" variant="solid" className="w-full">
                Proceed to Checkout
              </GoldButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
