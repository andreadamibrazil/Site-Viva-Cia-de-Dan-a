"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const text =
  "VIVÁ CIA DE DANÇA · 2012–2026 · 21 PRÊMIOS · 12 ESPETÁCULOS · PÉ DE CACHIMBO 10 ANOS EM CARTAZ · MOVIRIO FESTIVAL · COPA DO MUNDO 2014 · OLIMPÍADAS 2016 · MICA ARGENTINA 2023 · FORTE COMO A NATUREZA · ";

export function Marquee() {
  const [paused, setPaused] = useState(false);

  return (
    <div
      className="overflow-hidden py-4"
      style={{ backgroundColor: "#C79A42" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 28,
          ease: "linear",
          repeat: Infinity,
          ...(paused ? { playState: "paused" } : {}),
        }}
        style={{ animationPlayState: paused ? "paused" : "running" }}
        className="flex whitespace-nowrap"
      >
        {[text, text].map((t, i) => (
          <span
            key={i}
            className="font-display font-bold text-sm tracking-[0.15em] uppercase shrink-0 px-0"
            style={{ color: "#062B4F" }}
          >
            {t}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
