"use client";

import { motion } from "framer-motion";
import SplitText from "@/components/ui/SplitText";
import GoldButton from "@/components/ui/GoldButton";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-ink text-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-gold/20 animate-float"
            style={{
              width: 3,
              height: 3,
              left: `${(i * 31) % 100}%`,
              top: `${(i * 47) % 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative font-display text-[10rem] md:text-[14rem] leading-none text-transparent bg-gradient-to-r from-gold-dark via-gold-light to-gold-dark bg-clip-text bg-[length:200%_auto] animate-shimmer"
      >
        404
      </motion.span>

      <SplitText
        text="This Scent Has Evaporated"
        el="h1"
        className="relative font-display text-3xl md:text-5xl text-ivory mt-2"
        delay={0.4}
      />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="relative text-ivory/60 max-w-md mt-5"
      >
        The page you&apos;re looking for doesn&apos;t exist, or has drifted
        somewhere else. Let&apos;s get you back to something beautiful.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="relative mt-9"
      >
        <GoldButton href="/" variant="solid">
          Return Home
        </GoldButton>
      </motion.div>
    </div>
  );
}
