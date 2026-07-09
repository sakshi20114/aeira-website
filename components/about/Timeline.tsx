"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    year: "1959",
    title: "A Grandmother's Formula",
    text: "Our founder's grandmother begins hand-blending amber and honey oils in her kitchen — the accord that would one day become Ambre 1959.",
  },
  {
    year: "2015",
    title: "The Perfume Chemistry",
    text: "What began as a family hobby becomes a small independent lab, testing formulas and sharing the process with a growing community online.",
  },
  {
    year: "2021",
    title: "AEIRA is Born",
    text: "AEIRA launches as a dedicated luxury-inspired fragrance house, built on ethically sourced ingredients and long-lasting formulas.",
  },
  {
    year: "2024",
    title: "A Growing House",
    text: "Our collection expands to eight signature fragrances, each interpreting a different facet of luxury perfumery.",
  },
  {
    year: "Today",
    title: "Composed for You",
    text: "Every bottle is still filled, sealed, and inspected by hand — because a fragrance this personal deserves nothing less.",
  },
];

export default function Timeline() {
  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="absolute left-[7px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent md:-translate-x-1/2" />
      <div className="flex flex-col gap-14">
        {milestones.map((m, i) => (
          <motion.div
            key={m.year}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={`relative pl-10 md:pl-0 md:w-1/2 ${
              i % 2 === 0 ? "md:pr-14 md:text-right md:ml-0" : "md:pl-14 md:ml-auto"
            }`}
          >
            <span className="absolute left-0 md:left-auto md:right-auto top-1 w-3.5 h-3.5 rounded-full bg-gold shadow-[0_0_12px_rgba(212,175,55,0.6)]"
              style={i % 2 === 0 ? { right: "-7.5px" } : { left: "-7.5px" }}
            />
            <span className="eyebrow">{m.year}</span>
            <h3 className="font-display text-2xl text-ivory mt-2">{m.title}</h3>
            <p className="text-sm text-ivory/60 mt-2 leading-relaxed">{m.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
