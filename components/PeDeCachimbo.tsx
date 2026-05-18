"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function PeDeCachimbo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center py-24 px-6 overflow-hidden"
      id="pe-de-cachimbo"
    >
      {/* Foto de fundo */}
      <div className="absolute inset-0">
        <Image
          src="/fotos/pe-de-cachimbo.jpg"
          alt="Pé de Cachimbo — Vivá Cia de Dança"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      {/* Overlay escuro */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(6,43,79,0.92) 0%, rgba(0,109,178,0.85) 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        {/* Esquerda — números grandes */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="font-display font-bold leading-none text-dourado"
            style={{ fontSize: "clamp(120px, 18vw, 220px)" }}
          >
            10
          </div>
          <div className="text-areia tracking-[0.3em] text-3xl md:text-4xl font-display font-light -mt-4">
            ANOS
          </div>
          <div className="h-px bg-dourado/40 w-32 my-6" />
          <div className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full bg-verde animate-pulse"
            />
            <span className="text-areia/70 text-sm tracking-[0.2em] uppercase">
              Em Cartaz
            </span>
          </div>

          <div className="mt-10">
            <div
              className="font-display font-bold text-dourado leading-none"
              style={{ fontSize: "clamp(48px, 7vw, 80px)" }}
            >
              165+
            </div>
            <p className="text-areia/60 text-xs tracking-[0.2em] uppercase mt-1">Apresentações</p>
          </div>
        </motion.div>

        {/* Direita — texto */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display font-light italic text-areia leading-tight mb-3" style={{ fontSize: "clamp(28px, 4vw, 52px)" }}>
            Pé de Cachimbo
          </h2>
          <p className="text-dourado text-sm tracking-[0.1em] mb-6">O espetáculo que comprova.</p>
          <p className="text-areia/70 text-base leading-relaxed mb-6 max-w-md">
            Criado com o apoio do Edital Fomento Cidade Olímpica em 2016,
            Pé de Cachimbo completou 10 anos em cartaz em 2026.
            Mais de 165 apresentações. Premiado pelo Zilka Salaberry.
            O mesmo espetáculo que ganhou o primeiro fomento ainda
            está em cartaz neste teatro, hoje.
          </p>
          <div className="h-px bg-dourado/30 mb-6" />
          <blockquote className="font-display font-light italic text-areia/90 leading-snug mb-8" style={{ fontSize: "clamp(18px, 2.5vw, 26px)" }}>
            "O investimento público pode gerar futuro."
          </blockquote>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-dourado text-dourado text-sm tracking-[0.1em] uppercase hover:bg-dourado hover:text-oceano transition-all duration-300"
          >
            Ingressos disponíveis →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
