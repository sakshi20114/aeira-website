"use client";

import { motion } from "framer-motion";

export default function FragranceNotes({
  notes,
}: {
  notes: { top: string[]; middle: string[]; base: string[] };
}) {
  const tiers = [
    { label: "Top Notes", items: notes.top, width: "60%" },
    { label: "Middle Notes", items: notes.middle, width: "80%" },
    { label: "Base Notes", items: notes.base, width: "100%" },
  ];

  return (
    <div className="flex flex-col gap-6">
      {tiers.map((tier, i) => (
        <motion.div
          key={tier.label}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.15 }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="eyebrow">{tier.label}</span>
          </div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: tier.width }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: i * 0.15 + 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="h-[3px] bg-gradient-to-r from-gold-dark to-gold rounded-full mb-3"
          />
          <div className="flex flex-wrap gap-2">
            {tier.items.map((n) => (
              <span
                key={n}
                className="text-xs px-3 py-1.5 border border-gold/20 text-ivory/70 rounded-full"
              >
                {n}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
