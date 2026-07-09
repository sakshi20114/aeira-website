"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import GoldButton from "@/components/ui/GoldButton";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  subject: z.string().min(2, "Please add a subject"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type FormValues = z.infer<typeof schema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit() {
    await new Promise((r) => setTimeout(r, 900));
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 4000);
  }

  const fields: {
    name: keyof FormValues;
    label: string;
    type?: string;
    textarea?: boolean;
  }[] = [
    { name: "name", label: "Full Name" },
    { name: "email", label: "Email Address", type: "email" },
    { name: "phone", label: "Phone Number", type: "tel" },
    { name: "subject", label: "Subject" },
    { name: "message", label: "Your Message", textarea: true },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      {fields.map((f, i) => (
        <motion.div
          key={f.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="relative"
        >
          <label className="text-[11px] uppercase tracking-widest text-smoke mb-2 block">
            {f.label}
          </label>
          {f.textarea ? (
            <textarea
              rows={5}
              {...register(f.name)}
              className="w-full bg-white/5 border border-gold/20 px-4 py-3 text-sm text-ivory outline-none focus:border-gold transition-colors resize-none"
            />
          ) : (
            <input
              type={f.type ?? "text"}
              {...register(f.name)}
              className="w-full bg-white/5 border border-gold/20 px-4 py-3 text-sm text-ivory outline-none focus:border-gold transition-colors"
            />
          )}
          {errors[f.name] && (
            <p className="text-xs text-red-400 mt-1.5">
              {errors[f.name]?.message}
            </p>
          )}
        </motion.div>
      ))}

      <GoldButton type="submit" variant="solid" disabled={isSubmitting} className="mt-2">
        {submitted ? (
          <>
            <CheckCircle2 size={14} /> Message Sent
          </>
        ) : (
          <>
            <Send size={14} /> {isSubmitting ? "Sending..." : "Send Message"}
          </>
        )}
      </GoldButton>
    </form>
  );
}
