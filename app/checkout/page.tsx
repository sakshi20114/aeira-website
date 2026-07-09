"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { CheckCircle2, Lock } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import GoldButton from "@/components/ui/GoldButton";
import SplitText from "@/components/ui/SplitText";

const schema = z.object({
  fullName: z.string().min(2, "Enter your full name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(8, "Enter a valid phone number"),
  address: z.string().min(6, "Enter your address"),
  city: z.string().min(2, "Enter your city"),
  state: z.string().min(2, "Enter your state"),
  pincode: z.string().min(4, "Enter a valid pincode"),
  paymentMethod: z.enum(["card", "upi", "cod"]),
});

type FormValues = z.infer<typeof schema>;

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const [placed, setPlaced] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { paymentMethod: "upi" },
  });

  const shipping = subtotal > 2999 ? 0 : 150;
  const total = subtotal + shipping;

  async function onSubmit() {
    await new Promise((r) => setTimeout(r, 1200));
    setPlaced(true);
    clearCart();
  }

  if (placed) {
    return (
      <div className="pt-32 md:pt-40 pb-24 bg-ink min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md container-luxury"
        >
          <CheckCircle2 className="text-gold mx-auto mb-6" size={56} />
          <h1 className="font-display text-4xl text-ivory mb-4">
            Order Placed
          </h1>
          <p className="text-ivory/60 text-sm leading-relaxed mb-8">
            Thank you for choosing AEIRA. A confirmation has been sent to your
            email, and your fragrance will be dispatched within 24-48 hours.
          </p>
          <GoldButton href="/shop" variant="solid">
            Continue Shopping
          </GoldButton>
        </motion.div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="pt-32 md:pt-40 pb-24 bg-ink min-h-screen flex items-center justify-center text-center">
        <div className="container-luxury">
          <p className="font-display text-2xl text-ivory/70 mb-6">
            Your cart is empty
          </p>
          <GoldButton href="/shop" variant="solid">
            Browse Fragrances
          </GoldButton>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 md:pt-40 pb-24 bg-ink min-h-screen">
      <div className="container-luxury">
        <div className="text-center mb-14">
          <span className="eyebrow block mb-4">Almost There</span>
          <SplitText
            text="Checkout"
            el="h1"
            className="font-display text-5xl md:text-7xl text-ivory"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-14">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            <div>
              <h2 className="font-display text-xl text-ivory mb-5">
                Shipping Details
              </h2>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full Name" error={errors.fullName?.message} {...register("fullName")} />
                <Field label="Email" type="email" error={errors.email?.message} {...register("email")} />
                <Field label="Phone" type="tel" error={errors.phone?.message} {...register("phone")} />
                <Field label="Pincode" error={errors.pincode?.message} {...register("pincode")} />
                <Field
                  label="Address"
                  error={errors.address?.message}
                  full
                  {...register("address")}
                />
                <Field label="City" error={errors.city?.message} {...register("city")} />
                <Field label="State" error={errors.state?.message} {...register("state")} />
              </div>
            </div>

            <div>
              <h2 className="font-display text-xl text-ivory mb-5">
                Payment Method
              </h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { value: "upi", label: "UPI" },
                  { value: "card", label: "Credit / Debit Card" },
                  { value: "cod", label: "Cash on Delivery" },
                ].map((opt) => (
                  <label
                    key={opt.value}
                    className="flex items-center gap-3 border border-gold/20 px-4 py-3.5 cursor-pointer has-[:checked]:border-gold has-[:checked]:bg-gold/5 transition-colors"
                  >
                    <input
                      type="radio"
                      value={opt.value}
                      {...register("paymentMethod")}
                      className="accent-[#d4af37]"
                    />
                    <span className="text-sm text-ivory/80">{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <GoldButton type="submit" variant="solid" disabled={isSubmitting}>
              <Lock size={14} /> {isSubmitting ? "Placing Order..." : `Place Order — ${formatPrice(total)}`}
            </GoldButton>
          </form>

          <div className="h-fit border border-gold/15 bg-white/[0.02] p-8">
            <h2 className="font-display text-2xl text-ivory mb-6">Order Summary</h2>
            <div className="flex flex-col gap-4 max-h-72 overflow-y-auto pr-1">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-3">
                  <div className="relative w-14 h-16 shrink-0 overflow-hidden">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <p className="text-sm text-ivory">{item.product.name}</p>
                    <p className="text-xs text-smoke">Qty {item.quantity}</p>
                  </div>
                  <span className="text-sm text-gold self-center">
                    {formatPrice(item.product.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>
            <div className="divider-gold my-5" />
            <div className="flex justify-between text-sm text-ivory/60 mb-2">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between text-sm text-ivory/60 mb-4">
              <span>Shipping</span>
              <span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
            </div>
            <div className="flex justify-between text-lg text-ivory">
              <span className="font-display">Total</span>
              <span className="text-gold font-display">{formatPrice(total)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  error,
  full,
  ...props
}: {
  label: string;
  error?: string;
  full?: boolean;
  [key: string]: any;
}) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label className="text-[11px] uppercase tracking-widest text-smoke mb-2 block">
        {label}
      </label>
      <input
        {...props}
        className="w-full bg-white/5 border border-gold/20 px-4 py-3 text-sm text-ivory outline-none focus:border-gold transition-colors"
      />
      {error && <p className="text-xs text-red-400 mt-1.5">{error}</p>}
    </div>
  );
}
