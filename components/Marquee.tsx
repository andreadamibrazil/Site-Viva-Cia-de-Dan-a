"use client";
import {
  motion,
  useMotionValue,
  useAnimationFrame,
  useScroll,
  useVelocity,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { useRef, useState } from "react";

const TEXT =
  "VIVÁ CIA DE DANÇA · 2012–2026 · 21 PRÊMIOS · 12 ESPETÁCULOS · PÉ DE CACHIMBO 10 ANOS EM CARTAZ · MOVIRIO FESTIVAL · COPA DO MUNDO 2014 · OLIMPÍADAS 2016 · MICA ARGENTINA 2023 · FORTE COMO A NATUREZA · ";

export function Marquee() {
  const shouldReduce = useReducedMotion();
  const [paused, setPaused] = useState(false);

  const x = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1500], [0, 4], { clamp: false });

  const containerRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((_, delta) => {
    if (shouldReduce || paused) return;

    const vf = velocityFactor.get();
    // base: 0.038px/ms ≈ 2.3px/frame · boost suave pelo scroll
    const speed = 0.038 * (1 + Math.abs(vf) * 0.4);
    const newX = x.get() - speed * delta;

    const half = containerRef.current
      ? containerRef.current.scrollWidth / 2
      : 0;

    // reset seamless ao completar uma volta
    if (half > 0 && Math.abs(newX) >= half) {
      x.set(newX + half);
    } else {
      x.set(newX);
    }
  });

  if (shouldReduce) {
    return (
      <div className="overflow-hidden py-4" style={{ backgroundColor: "#C79A42" }}>
        <p
          className="font-display font-bold text-sm tracking-[0.15em] uppercase px-6"
          style={{ color: "#062B4F" }}
        >
          {TEXT}
        </p>
      </div>
    );
  }

  return (
    <div
      className="overflow-hidden py-4 cursor-default select-none"
      style={{ backgroundColor: "#C79A42" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div ref={containerRef} className="overflow-hidden">
        <motion.div className="flex whitespace-nowrap will-change-transform" style={{ x }}>
          {[TEXT, TEXT].map((t, i) => (
            <span
              key={i}
              className="font-display font-bold text-sm tracking-[0.15em] uppercase shrink-0"
              style={{ color: "#062B4F" }}
            >
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
