"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SplitText from "@/components/ui/SplitText";
import GoldButton from "@/components/ui/GoldButton";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      if (!heroRef.current || !imgRef.current) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      imgRef.current.style.transform = `translate(${x * -16}px, ${y * -16}px) scale(1.08)`;
    }
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const particles = Array.from({ length: 18 });

  return (
    <section
      ref={heroRef}
      className="relative h-[100svh] w-full overflow-hidden flex items-end bg-ink"
    >
      <div ref={imgRef} className="absolute inset-0 transition-transform duration-300 ease-out scale-105">
        <Image
          src="https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=2000&auto=format&fit=crop"
          alt="AEIRA luxury perfume bottle"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/30" />
      <div className="absolute inset-0 bg-vignette" />

      <div className="absolute inset-0 pointer-events-none">
        {particles.map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-gold/40 animate-float"
            style={{
              width: 2 + (i % 3),
              height: 2 + (i % 3),
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${7 + (i % 5)}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container-luxury pb-20 md:pb-28 w-full">
        <span className="eyebrow block mb-4">Est. 1959 &mdash; The Perfume Chemistry</span>
        <SplitText
          text="AEIRA"
          el="h1"
          className="font-display text-[16vw] md:text-[9rem] leading-[0.9] text-ivory"
        />
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display italic text-xl md:text-3xl text-gold mt-3"
        >
          Luxury Inspired Fragrances
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.9 }}
          className="text-ivory/60 max-w-md mt-5 text-sm md:text-base leading-relaxed"
        >
          Hand-composed eau de parfums inspired by the world&apos;s most
          celebrated houses &mdash; reimagined with our own signature accords.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.9 }}
          className="flex flex-wrap gap-4 mt-9"
        >
          <GoldButton href="/shop" variant="solid">
            Shop the Collection
          </GoldButton>
          <GoldButton href="/about" variant="outline">
            Our Story
          </GoldButton>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 right-8 md:right-16 z-10 flex flex-col items-center gap-2 text-ivory/50"
      >
        <span className="text-[10px] tracking-widest2 rotate-90 mb-6 origin-center hidden md:block">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
