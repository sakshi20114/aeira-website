"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = p + Math.random() * 18;
        if (next >= 100) {
          clearInterval(interval);
          return 100;
        }
        return next;
      });
    }, 140);

    const timeout = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "";
    }, 2100);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }}
        >
          <div className="relative flex flex-col items-center gap-8">
            <motion.h1
              className="font-display text-5xl md:text-7xl tracking-widest2 text-ivory"
              initial={{ opacity: 0, letterSpacing: "0.8em" }}
              animate={{ opacity: 1, letterSpacing: "0.35em" }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="relative inline-block bg-gradient-to-r from-gold-dark via-gold-light to-gold-dark bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer">
                AEIRA
              </span>
            </motion.h1>
            <motion.p
              className="eyebrow"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Luxury Inspired Fragrances
            </motion.p>
            <div className="w-56 md:w-72 h-[2px] bg-white/10 overflow-hidden rounded-full mt-4">
              <motion.div
                className="h-full bg-gradient-to-r from-gold-dark via-gold-light to-gold"
                style={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
            <motion.span
              className="text-[10px] tracking-widest2 text-smoke"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {Math.floor(progress)}%
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
