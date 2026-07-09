"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Check } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <section className="relative bg-ink py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 10 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-gold/20 animate-float-slow"
            style={{
              width: 4 + (i % 4) * 2,
              height: 4 + (i % 4) * 2,
              left: `${(i * 27) % 100}%`,
              top: `${(i * 41) % 100}%`,
              animationDelay: `${i * 0.6}s`,
            }}
          />
        ))}
      </div>

      <div className="container-luxury relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto glass rounded-sm p-10 md:p-16 text-center"
        >
          <Mail className="mx-auto text-gold mb-6" size={30} />
          <h2 className="font-display text-3xl md:text-5xl text-ivory">
            Join the Inner Circle
          </h2>
          <p className="text-ivory/60 mt-4 text-sm md:text-base">
            Early access to new releases, private discounts, and fragrance
            notes from our perfumers — delivered occasionally, never spammed.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-white/5 border border-gold/25 px-5 py-3.5 text-sm text-ivory placeholder:text-ivory/30 outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="relative overflow-hidden bg-gold text-ink px-6 py-3.5 text-xs tracking-widest2 uppercase flex items-center justify-center gap-2 hover:bg-gold-light transition-colors duration-300"
            >
              {submitted ? (
                <>
                  <Check size={14} /> Subscribed
                </>
              ) : (
                <>
                  Subscribe <ArrowRight size={14} />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
