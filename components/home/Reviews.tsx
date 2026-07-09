"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import testimonials from "@/data/testimonials.json";
import type { Testimonial } from "@/lib/types";
import SectionHeading from "@/components/ui/SectionHeading";
import StarRating from "@/components/ui/StarRating";
import GoldButton from "@/components/ui/GoldButton";
import navigation from "@/data/navigation.json";

export default function Reviews() {
  const list = testimonials as Testimonial[];

  return (
    <section className="relative bg-parchment text-ink py-24 md:py-32">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Customer Love"
          title="What Our Clients Say"
          light
          description="Real words from real AEIRA wearers across India."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {list.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white/70 border border-ink/5 p-8 relative hover:-translate-y-1.5 transition-transform duration-500 shadow-sm hover:shadow-lg"
            >
              <Quote className="text-gold/50 mb-4" size={26} />
              <StarRating rating={t.rating} />
              <p className="mt-4 text-sm leading-relaxed text-ink/70">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="font-display text-base">{t.name}</p>
                  <p className="text-xs text-ink/40">{t.location}</p>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-gold-dark">
                  {t.product}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-14">
          <GoldButton href={navigation.social.googleReview} target="_blank" variant="outline">
            Write a Google Review
          </GoldButton>
        </div>
      </div>
    </section>
  );
}
