"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "+350 MIL", label: "ESPECTADORES" },
  { value: "48", label: "EQUIPAMENTOS CULTURAIS" },
  { value: "27", label: "CIDADES" },
  { value: "21+", label: "PRÊMIOS E EDITAIS" },
  { value: "20 MIL+", label: "IMAGENS ARQUIVADAS" },
  { value: "12 ANOS", label: "DE HISTÓRIA" },
];

export function Impacto() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="grid md:grid-cols-2 min-h-[480px]">
      {/* Esquerda — frase */}
      <div className="bg-oceano flex flex-col justify-center px-10 md:px-16 py-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-display font-light italic text-areia leading-snug mb-1" style={{ fontSize: "clamp(24px, 3vw, 40px)" }}>
            A arte move.
          </p>
          <p className="font-display font-light italic text-areia leading-snug mb-1" style={{ fontSize: "clamp(24px, 3vw, 40px)" }}>
            A cultura transforma.
          </p>
          <p className="font-display font-bold text-dourado leading-snug" style={{ fontSize: "clamp(24px, 3vw, 40px)" }}>
            A gente continua.
          </p>
          <div className="h-px bg-dourado/40 w-12 mt-6" />
        </motion.div>
      </div>

      {/* Direita — stats */}
      <div className="bg-brisa px-10 md:px-12 py-16">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-dourado text-xs tracking-[0.3em] uppercase mb-8"
        >
          Impacto
        </motion.p>
        <div className="grid grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="flex flex-col gap-1"
            >
              <span className="font-display font-bold text-terra text-lg leading-tight">{s.value}</span>
              <span className="text-terra/50 text-[10px] tracking-[0.1em] uppercase leading-tight">{s.label}</span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-terra/30 text-[11px] tracking-[0.15em] uppercase mt-10"
        >
          Da cidade para o mundo. Do investimento público para a sociedade.
        </motion.p>
      </div>
    </section>
  );
}
