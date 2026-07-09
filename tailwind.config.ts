import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a0908",
        ivory: "#f8f5ee",
        parchment: "#efe9dc",
        gold: {
          DEFAULT: "#d4af37",
          light: "#e9d18a",
          dark: "#a8842a",
          muted: "#c9b273",
        },
        smoke: "#8b8578",
        line: "rgba(212,175,55,0.25)",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        label: ["var(--font-label)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.35em",
        widest3: "0.5em",
      },
      backgroundImage: {
        "gold-sheen":
          "linear-gradient(115deg, transparent 20%, rgba(212,175,55,0.55) 45%, rgba(233,209,138,0.9) 50%, rgba(212,175,55,0.55) 55%, transparent 80%)",
        "vignette":
          "radial-gradient(ellipse at center, transparent 40%, rgba(10,9,8,0.65) 100%)",
      },
      animation: {
        shimmer: "shimmer 2.6s linear infinite",
        marquee: "marquee 32s linear infinite",
        float: "float 7s ease-in-out infinite",
        "float-slow": "float 11s ease-in-out infinite",
        "spin-slow": "spin 18s linear infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-18px) translateX(6px)" },
        },
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
