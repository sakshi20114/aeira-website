"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import navigation from "@/data/navigation.json";

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] bg-ink flex flex-col"
          initial={{ clipPath: "circle(0% at 100% 0%)" }}
          animate={{ clipPath: "circle(150% at 100% 0%)" }}
          exit={{ clipPath: "circle(0% at 100% 0%)" }}
          transition={{ duration: 0.7, ease: [0.83, 0, 0.17, 1] }}
        >
          <div className="container-luxury flex justify-between items-center py-6">
            <span className="font-display text-2xl tracking-widest2 text-ivory">
              AEIRA
            </span>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="w-11 h-11 rounded-full border border-gold/30 flex items-center justify-center text-gold"
            >
              <X size={20} />
            </button>
          </div>

          <motion.nav
            variants={container}
            initial="hidden"
            animate="show"
            className="flex-1 flex flex-col justify-center container-luxury gap-2"
          >
            {navigation.main.map((link, i) => (
              <motion.div key={link.href} variants={item}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="group flex items-baseline gap-4 py-3 border-b border-white/5"
                >
                  <span className="text-xs text-gold font-label">
                    0{i + 1}
                  </span>
                  <span className="font-display text-4xl md:text-6xl text-ivory group-hover:text-gold transition-colors duration-500">
                    {link.label}
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          <motion.div
            variants={item}
            initial="hidden"
            animate="show"
            className="container-luxury py-8 flex items-center justify-between border-t border-white/5"
          >
            <div className="flex gap-4">
              <a
                href={navigation.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold"
              >
                <Instagram size={16} />
              </a>
              <a
                href={navigation.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold"
              >
               <FaWhatsapp size={16} /> 
              </a>
            </div>
            <span className="text-xs text-smoke tracking-widest">
              © {new Date().getFullYear()} AEIRA
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
