"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "+350 mil", label: "Espectadores" },
  { value: "48", label: "Equipamentos culturais" },
  { value: "27", label: "Cidades alcançadas" },
  { value: "21+", label: "Prêmios e editais" },
  { value: "20 mil+", label: "Imagens arquivadas" },
  { value: "14 anos", label: "De história ininterrupta" },
];

export function Impacto() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-oceano" id="impacto">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 min-h-[520px]">

          {/* Esquerda — frase */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-20 border-r border-areia/[0.06]">
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="text-dourado text-xs tracking-[0.3em] uppercase mb-8"
            >
              Impacto
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <p
                className="font-display font-light italic text-areia leading-snug mb-1"
                style={{ fontSize: "clamp(22px, 2.8vw, 38px)" }}
              >
                A arte move.
              </p>
              <p
                className="font-display font-light italic text-areia leading-snug mb-1"
                style={{ fontSize: "clamp(22px, 2.8vw, 38px)" }}
              >
                A cultura transforma.
              </p>
              <p
                className="font-display font-bold text-dourado leading-snug"
                style={{ fontSize: "clamp(22px, 2.8vw, 38px)" }}
              >
                A gente continua.
              </p>
              <div className="h-px bg-dourado/30 w-10 mt-8" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="text-areia/25 text-[11px] tracking-[0.18em] uppercase mt-8 leading-relaxed"
            >
              Da cidade para o mundo.<br />Do investimento público para a sociedade.
            </motion.p>
          </div>

          {/* Direita — números */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-20">
            <div className="grid grid-cols-2 gap-x-8 gap-y-10">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col gap-1.5"
                >
                  <span className="block w-6 h-px bg-dourado/35 mb-1" />
                  <span
                    className="font-display font-bold text-areia leading-none tabular-nums"
                    style={{ fontSize: "clamp(22px, 2.4vw, 32px)" }}
                  >
                    {s.value}
                  </span>
                  <span className="text-areia/45 text-[11px] tracking-[0.12em] uppercase leading-tight">
                    {s.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
