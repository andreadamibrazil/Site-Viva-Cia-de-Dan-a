"use client";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const shouldReduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY        = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-end pb-16 overflow-hidden bg-oceano"
    >
      {/* Foto de fundo com parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: shouldReduce ? 0 : imageY }}
      >
        <Image
          src="/fotos/hero.webp"
          alt="Vivá Cia de Dança"
          fill
          priority
          className="object-cover object-center scale-110"
          sizes="100vw"
        />
      </motion.div>

      {/* Overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to top, rgba(6,43,79,0.97) 0%, rgba(6,43,79,0.55) 45%, rgba(6,43,79,0.25) 100%)",
        }}
      />

      {/* Halo de textura */}
      <div
        className="absolute inset-0 z-[1] opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 70% 30%, rgba(199,154,66,0.12) 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(0,109,178,0.25) 0%, transparent 45%)",
        }}
      />

      {/* Conteúdo */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Linha decorativa animada */}
        <motion.div
          initial={shouldReduce ? false : { scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease }}
          className="h-px bg-dourado/30 w-32 mb-6 origin-left"
        />

        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease }}
        >
          <h1
            className="font-display font-bold leading-none text-brisa"
            style={{ fontSize: "clamp(80px, 13vw, 172px)", letterSpacing: "-0.025em" }}
          >
            VIVÁ
          </h1>

          <motion.div
            initial={shouldReduce ? false : { opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease }}
            className="text-dourado tracking-[0.32em] text-xl md:text-2xl font-display font-semibold mt-0"
          >
            CIA DE DANÇA
          </motion.div>

          <motion.div
            initial={shouldReduce ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="h-px bg-dourado/35 w-40 my-5 origin-left"
          />

          <motion.p
            initial={shouldReduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.65 }}
            className="text-areia/75 text-xl md:text-2xl font-display italic font-light"
          >
            Forte como a natureza.
          </motion.p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease }}
          className="flex flex-wrap items-center gap-4 mt-8"
        >
          <motion.a
            href="#espetaculos"
            whileHover={shouldReduce ? {} : { scale: 1.03 }}
            whileTap={shouldReduce ? {} : { scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-dourado text-oceano text-[11px] tracking-[0.18em] uppercase font-semibold rounded-full hover:bg-dourado/92 transition-colors duration-200"
          >
            Explorar espetáculos
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.a>
          <a
            href="#pe-de-cachimbo"
            className="inline-flex items-center gap-2 text-areia/65 text-[11px] tracking-[0.15em] uppercase hover:text-areia/90 transition-colors duration-200"
          >
            Pé de Cachimbo
            <span className="text-dourado/50 ml-1">· em cartaz</span>
          </a>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={shouldReduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.35 }}
          className="flex items-end justify-between mt-20 md:mt-28"
        >
          <p className="text-areia/40 text-xs tracking-[0.2em] uppercase">
            Rio de Janeiro · Desde 2012
          </p>

          {/* Scroll indicator — desaparece ao rolar */}
          <motion.div
            className="flex items-center gap-2 text-areia/40 text-xs tracking-[0.15em] uppercase"
            style={{ opacity: shouldReduce ? 1 : indicatorOpacity }}
          >
            <span>Role para descobrir</span>
            <motion.svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
              animate={shouldReduce ? {} : { y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <path
                d="M7 2v10M3 8l4 4 4-4"
                stroke="#EDE5D8"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
