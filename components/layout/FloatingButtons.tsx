"use client";

import { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { Star, ArrowUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import navigation from "@/data/navigation.json";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShowTop(window.scrollY > 600);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-5 md:bottom-8 md:right-8 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="w-11 h-11 rounded-full glass flex items-center justify-center text-gold"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.a
        href={navigation.social.googleReview}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        aria-label="Write a Google review"
        className="w-12 h-12 rounded-full bg-ink border border-gold/40 flex items-center justify-center text-gold shadow-[0_0_20px_rgba(212,175,55,0.15)]"
      >
        <Star size={19} />
      </motion.a>

      <motion.a
        href={navigation.social.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-[0_0_25px_rgba(37,211,102,0.35)]"
      >
        <FaWhatsapp size={24} /> 
      </motion.a>
    </div>
  );
}
