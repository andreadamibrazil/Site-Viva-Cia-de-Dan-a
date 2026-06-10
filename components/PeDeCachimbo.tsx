"use client";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function PeDeCachimbo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduce = useReducedMotion();
  const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <section
      ref={ref}
      className="relative bg-oceano overflow-hidden min-h-screen flex items-center"
      id="pe-de-cachimbo"
    >
      {/* Foto — painel direito, fade para oceano na esquerda */}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-[58%] pointer-events-none">
        <Image
          src="/fotos/pe-de-cachimbo.webp"
          alt="Pé de Cachimbo — Vivá Cia de Dança"
          fill
          className="object-cover object-right"
          sizes="(max-width: 768px) 100vw, 58vw"
        />
        {/* Fade esquerda → oceano */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #062B4F 0%, rgba(6,43,79,0.88) 28%, rgba(6,43,79,0.35) 58%, rgba(6,43,79,0.1) 100%)",
          }}
        />
        {/* Fade topo e base */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(6,43,79,0.65) 0%, transparent 18%, transparent 82%, rgba(6,43,79,0.65) 100%)",
          }}
        />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-28 md:py-36">
        <div className="md:max-w-[50%]">

          {/* Eyebrow */}
          <motion.p
            initial={shouldReduce ? false : { opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-dourado text-xs tracking-[0.3em] uppercase mb-10"
          >
            Pé de Cachimbo · 2016
          </motion.p>

          {/* 10 — número âncora */}
          <motion.div
            initial={shouldReduce ? false : { opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease }}
          >
            <div
              className="font-display font-bold leading-[0.85] text-dourado tabular-nums"
              style={{ fontSize: "clamp(100px, 17vw, 210px)", letterSpacing: "-0.025em" }}
            >
              10
            </div>

            {/* ANOS EM CARTAZ — frase completa unificada */}
            <div className="flex items-center gap-3 mt-3 mb-10">
              <span
                className="font-display font-light text-areia tracking-[0.28em] uppercase"
                style={{ fontSize: "clamp(18px, 2.8vw, 36px)" }}
              >
                ANOS
              </span>
              <span className="w-px h-5 bg-dourado/35 shrink-0" />
              <span
                className="font-display font-semibold text-dourado/90 tracking-[0.22em] uppercase"
                style={{ fontSize: "clamp(14px, 1.8vw, 22px)" }}
              >
                EM CARTAZ
              </span>
            </div>
          </motion.div>

          {/* Stats row — EM CARTAZ + 165+ */}
          <motion.div
            initial={shouldReduce ? false : { opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.28, ease }}
            className="flex items-center gap-8 mb-10"
          >
            {/* EM CARTAZ badge */}
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-verde shrink-0 animate-pulse" />
              <span className="text-areia font-display font-semibold text-sm tracking-[0.2em] uppercase">
                Em Cartaz
              </span>
            </div>

            <div className="w-px h-6 bg-areia/[0.12] shrink-0" />

            {/* 165+ apresentações */}
            <div className="flex items-baseline gap-2">
              <span
                className="font-display font-bold text-dourado leading-none tabular-nums"
                style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
              >
                165+
              </span>
              <span className="text-areia/50 text-[10px] tracking-[0.2em] uppercase">
                apresentações
              </span>
            </div>
          </motion.div>

          {/* Divisor */}
          <motion.div
            initial={shouldReduce ? false : { scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.42, ease }}
            className="h-px bg-dourado/25 mb-10 origin-left"
          />

          {/* Texto */}
          <motion.p
            initial={shouldReduce ? false : { opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.52, ease }}
            className="text-areia/65 text-base leading-[1.85] mb-8 max-w-[420px]"
          >
            Criado com o apoio do Edital Fomento Cidade Olímpica em 2016,
            Pé de Cachimbo completou 10 anos em cartaz em 2026.
            Mais de 165 apresentações. Premiado pelo Zilka Salaberry.
            O mesmo espetáculo que ganhou o primeiro fomento ainda
            está em cartaz neste teatro, hoje.
          </motion.p>

          {/* Blockquote */}
          <motion.blockquote
            initial={shouldReduce ? false : { opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.66, ease }}
            className="font-display font-light italic text-areia/80 leading-snug"
            style={{ fontSize: "clamp(17px, 2.2vw, 24px)" }}
          >
            "O investimento público pode gerar futuro."
          </motion.blockquote>

        </div>
      </div>
    </section>
  );
}
