"use client";

import type { JSX } from "react";
import { motion } from "framer-motion";

export default function SplitText({
  text,
  className,
  delay = 0,
  stagger = 0.035,
  el: El = "span",
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  el?: keyof JSX.IntrinsicElements;
}) {
  const letters = Array.from(text);

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };
  const child = {
    hidden: { opacity: 0, y: "100%", rotateX: 40 },
    show: {
      opacity: 1,
      y: "0%",
      rotateX: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const Component = motion(El as any);

  return (
    <Component
      variants={container}
      initial="hidden"
      animate="show"
      className={className}
      style={{ display: "inline-block", perspective: 800 }}
    >
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          variants={child}
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {letter}
        </motion.span>
      ))}
    </Component>
  );
}
