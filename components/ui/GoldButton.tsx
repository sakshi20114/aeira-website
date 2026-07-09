"use client";

import { ReactNode, useRef, useState, MouseEvent } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Ripple {
  x: number;
  y: number;
  size: number;
  id: number;
}

interface Props {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "outline" | "ghost";
  className?: string;
  type?: "button" | "submit";
  target?: string;
  disabled?: boolean;
}

export default function GoldButton({
  children,
  href,
  onClick,
  variant = "solid",
  className,
  type = "button",
  target,
  disabled,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [ripples, setRipples] = useState<Ripple[]>([]);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.18}px, ${y * 0.3}px)`;
  }

  function handleMouseLeave() {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  }

  function spawnRipple(e: MouseEvent<HTMLSpanElement>) {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    const id = Date.now();
    setRipples((r) => [...r, { x, y, size, id }]);
    setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 650);
  }

  const base =
    "relative overflow-hidden inline-flex items-center justify-center gap-2 px-8 py-3.5 text-[11px] tracking-widest2 uppercase font-label transition-colors duration-400 select-none";
  const variants = {
    solid:
      "bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-ink hover:shadow-[0_0_30px_rgba(212,175,55,0.35)]",
    outline:
      "border border-gold/50 text-gold hover:bg-gold hover:text-ink",
    ghost: "text-ivory hover:text-gold",
  };

  const inner = (
    <span
      onClick={spawnRipple}
      className={cn(base, variants[variant], className, disabled && "opacity-40 pointer-events-none")}
    >
      {children}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="absolute rounded-full bg-white/25 pointer-events-none animate-[ping_0.6s_ease-out]"
          style={{
            left: r.x,
            top: r.y,
            width: r.size,
            height: r.size,
          }}
        />
      ))}
    </span>
  );

  const wrapped = (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block transition-transform duration-300 ease-luxury"
    >
      {inner}
    </div>
  );

  if (href) {
    return (
      <Link href={href} target={target} onClick={onClick}>
        {wrapped}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled}>
      {wrapped}
    </button>
  );
}
