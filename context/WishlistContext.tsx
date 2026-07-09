"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import type { Product } from "@/lib/types";

interface WishlistContextValue {
  items: Product[];
  toggleItem: (product: Product) => void;
  isWishlisted: (productId: string) => boolean;
  removeItem: (productId: string) => void;
}

const WishlistContext = createContext<WishlistContextValue | undefined>(
  undefined
);
const STORAGE_KEY = "aeira_wishlist_v1";

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Product[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  function toggleItem(product: Product) {
    setItems((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) return prev.filter((p) => p.id !== product.id);
      return [...prev, product];
    });
  }

  function removeItem(productId: string) {
    setItems((prev) => prev.filter((p) => p.id !== productId));
  }

  function isWishlisted(productId: string) {
    return items.some((p) => p.id === productId);
  }

  return (
    <WishlistContext.Provider
      value={{ items, toggleItem, isWishlisted, removeItem }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used within WishlistProvider");
  return ctx;
}
