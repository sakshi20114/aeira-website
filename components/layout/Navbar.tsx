"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Heart, ShoppingBag, Menu, Search } from "lucide-react";
import navigation from "@/data/navigation.json";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { count } = useCart();
  const { items } = useWishlist();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60);
    }
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-[80] transition-all duration-500 ${
          scrolled
            ? "bg-ink/85 backdrop-blur-xl border-b border-gold/10 py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container-luxury flex items-center justify-between">
          <Link href="/" className="font-display text-2xl md:text-3xl tracking-widest2 text-ivory">
            AEIRA
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {navigation.main.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-xs tracking-widest2 uppercase text-ivory/80 hover:text-gold transition-colors duration-300 group py-2"
                >
                  {link.label}
                  <span
                    className={`absolute left-0 -bottom-0.5 h-[1px] bg-gold transition-all duration-500 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4 md:gap-5">
            <button
              aria-label="Search"
              className="hidden sm:flex text-ivory/80 hover:text-gold transition-colors"
            >
              <Search size={19} />
            </button>
            <Link
              href="/wishlist"
              aria-label="Wishlist"
              className="relative text-ivory/80 hover:text-gold transition-colors"
            >
              <Heart size={19} />
              {items.length > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 text-[10px] rounded-full bg-gold text-ink flex items-center justify-center font-semibold">
                  {items.length}
                </span>
              )}
            </Link>
            <Link
              href="/cart"
              aria-label="Cart"
              className="relative text-ivory/80 hover:text-gold transition-colors"
            >
              <ShoppingBag size={19} />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 text-[10px] rounded-full bg-gold text-ink flex items-center justify-center font-semibold">
                  {count}
                </span>
              )}
            </Link>
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="md:hidden text-ivory/80"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
