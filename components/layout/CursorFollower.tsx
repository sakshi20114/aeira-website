"use client";

import { useEffect, useRef } from "react";

export default function CursorFollower() {
  const dotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    let mouseX = 0;
    let mouseY = 0;
    let glowX = 0;
    let glowY = 0;

    function handleMove(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
    }

    function animate() {
      glowX += (mouseX - glowX) * 0.08;
      glowY += (mouseY - glowY) * 0.08;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${glowX}px, ${glowY}px)`;
      }
      requestAnimationFrame(animate);
    }

    window.addEventListener("mousemove", handleMove);
    const raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={glowRef}
        className="cursor-glow fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full pointer-events-none z-[60] hidden md:block"
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.10) 0%, transparent 70%)",
        }}
      />
      <div
        ref={dotRef}
        className="cursor-follower hidden md:block -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-ivory"
      />
    </>
  );
}
