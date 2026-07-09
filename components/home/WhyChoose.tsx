"use client";

import { motion } from "framer-motion";
import { Gem, Leaf, Award, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const reasons = [
  {
    icon: Gem,
    title: "Rare Ingredients",
    desc: "Sourced Mysore sandalwood, Bulgarian rose, and Grasse jasmine — the same materials used by the world's great perfume houses.",
  },
  {
    icon: Award,
    title: "Long-Lasting Formulas",
    desc: "Higher oil concentrations mean our fragrances are engineered to last 8-12 hours, not just an hour on the skin.",
  },
  {
    icon: Leaf,
    title: "Cruelty-Free & Ethical",
    desc: "Every batch is formulated without animal testing, using ethically sourced aromatic compounds.",
  },
  {
    icon: Sparkles,
    title: "Hand-Finished Bottles",
    desc: "Each bottle is filled, sealed, and inspected by hand in small batches to guarantee consistency and quality.",
  },
];

export default function WhyChoose() {
  return (
    <section className="relative bg-parchment text-ink py-24 md:py-32 overflow-hidden">
      <div className="container-luxury relative z-10">
        <SectionHeading
          eyebrow="The Difference"
          title="Why Choose AEIRA"
          light
          description="We obsess over the details that most fragrance brands skip — from raw material sourcing to bottle finishing."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 mt-16">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-white/60 border border-ink/5 p-8 hover:-translate-y-2 transition-transform duration-500 ease-luxury shadow-sm hover:shadow-xl"
            >
              <div className="w-14 h-14 rounded-full bg-ink flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-500">
                <r.icon size={22} className="text-gold group-hover:text-ink transition-colors duration-500" />
              </div>
              <h3 className="font-display text-xl mb-3">{r.title}</h3>
              <p className="text-sm text-ink/60 leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
