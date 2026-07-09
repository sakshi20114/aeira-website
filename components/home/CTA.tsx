"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import GoldButton from "@/components/ui/GoldButton";
import SplitText from "@/components/ui/SplitText";

export default function CTA() {
  return (
    <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden flex items-center justify-center text-center">
      <Image
        src="https://images.unsplash.com/photo-1587017539504-67cfbddac569?q=80&w=2000&auto=format&fit=crop"
        alt="AEIRA fragrance"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-ink/70" />
      <div className="relative z-10 container-luxury flex flex-col items-center">
        <span className="eyebrow mb-4">Find Your Signature</span>
        <SplitText
          text="Wear a Memory."
          el="h2"
          className="font-display text-5xl md:text-7xl text-ivory"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-ivory/70 max-w-md mt-5"
        >
          Explore the full AEIRA collection and discover the fragrance that
          becomes unmistakably yours.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-8"
        >
          <GoldButton href="/shop" variant="solid">
            Shop Now
          </GoldButton>
        </motion.div>
      </div>
    </section>
  );
}
