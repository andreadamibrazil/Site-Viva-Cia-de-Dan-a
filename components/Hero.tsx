"use client";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-16 overflow-hidden bg-oceano">
      {/* Fundo fotográfico — placeholder com gradiente dramático */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(135deg, #062B4F 0%, #0a3d6b 40%, #1a5a8a 70%, #062B4F 100%)",
        }}
      />
      {/* Overlay de textura/grão */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 70% 30%, rgba(199,154,66,0.15) 0%, transparent 60%), radial-gradient(ellipse at 30% 80%, rgba(0,109,178,0.3) 0%, transparent 50%)",
        }}
      />

      {/* Linha de progresso de scroll */}
      <ScrollProgress />

      {/* Conteúdo */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1
            className="font-display font-bold leading-none text-brisa"
            style={{ fontSize: "clamp(72px, 12vw, 160px)", letterSpacing: "-0.02em" }}
          >
            VIVÁ
          </h1>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-dourado tracking-[0.3em] text-xl md:text-2xl font-display font-semibold mt-1"
          >
            CIA DE DANÇA
          </motion.div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-px bg-dourado/40 w-48 my-5 origin-left"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-areia/80 text-xl md:text-2xl font-display italic font-light"
          >
            Forte como a natureza.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="flex items-end justify-between mt-16 md:mt-24"
        >
          <p className="text-areia/50 text-xs tracking-[0.2em] uppercase">
            Rio de Janeiro · Desde 2012
          </p>
          <div className="flex items-center gap-2 text-areia/50 text-xs tracking-[0.15em] uppercase">
            <span>Role para descobrir</span>
            <motion.svg
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M7 2v10M3 8l4 4 4-4"
                stroke="#EDE5D8"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ScrollProgress() {
  return (
    <motion.div
      className="fixed top-0 left-0 h-[2px] bg-dourado z-50 origin-left"
      style={{ scaleX: 0 }}
      id="scroll-progress"
    />
  );
}
