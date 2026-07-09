"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

export default function Gallery({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  return (
    <div>
      <div className="grid grid-cols-[80px_1fr] gap-4">
        <div className="flex flex-col gap-3">
          {images.map((img, i) => (
            <button
              key={img}
              onClick={() => setActive(i)}
              className={`relative aspect-square overflow-hidden border transition-colors ${
                active === i ? "border-gold" : "border-gold/10"
              }`}
            >
              <Image src={img} alt={`${name} thumbnail ${i + 1}`} fill sizes="80px" className="object-cover" />
            </button>
          ))}
        </div>

        <div
          className="group relative aspect-[4/5] overflow-hidden bg-parchment/5 border border-gold/10 cursor-zoom-in"
          onClick={() => setLightbox(true)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              <Image
                src={images[active]}
                alt={name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-110"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full glass flex items-center justify-center text-gold opacity-0 group-hover:opacity-100 transition-opacity">
            <ZoomIn size={16} />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-ink/95 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setLightbox(false)}
          >
            <button
              className="absolute top-6 right-6 w-11 h-11 rounded-full border border-gold/30 flex items-center justify-center text-gold"
              onClick={() => setLightbox(false)}
              aria-label="Close"
            >
              <X size={20} />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="relative w-full max-w-2xl aspect-[4/5]"
            >
              <Image src={images[active]} alt={name} fill sizes="100vw" className="object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
