"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Accordion({
  items,
  light = false,
}: {
  items: { q: string; a: string }[];
  light?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-gold/10">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="py-5">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 text-left"
            >
              <span
                className={cn(
                  "font-display text-lg md:text-xl",
                  light ? "text-ink" : "text-ivory"
                )}
              >
                {item.q}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.4 }}
                className="text-gold shrink-0"
              >
                <Plus size={20} />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p
                    className={cn(
                      "pt-3 pr-8 text-sm leading-relaxed",
                      light ? "text-ink/60" : "text-ivory/60"
                    )}
                  >
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
