"use client";
import { motion, useInView, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const valores = [
  "Arte como direito",
  "Formação humana",
  "Continuidade",
  "Acessibilidade real",
  "Sustentabilidade",
  "Ancestralidade",
  "Coletividade",
  "Território",
];

const pillars = [
  {
    num: "01",
    tag: "MISSÃO",
    accentClass: "bg-[#526B52]",
    accentColor: "#6B8F6B",
    heading: "Arte que conecta.",
    body: "Criar experiências artísticas que conectem corpo, memória, território e transformação social — democratizando o acesso à cultura e formando novas gerações através da arte contemporânea brasileira.",
  },
  {
    num: "02",
    tag: "VISÃO",
    accentClass: "bg-[#006DB2]",
    accentColor: "#4BA3D4",
    heading: "Referência nacional.",
    body: "Ser referência nacional em criação artística, formação cultural e impacto social — construindo uma dança contemporânea brasileira conectada à memória, à diversidade e ao futuro.",
  },
];

export function MissaoVisao() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduce = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <section ref={ref} className="bg-oceano overflow-hidden" id="missao">

      {/* —— Statement header —— */}
      <div className="max-w-7xl mx-auto px-6 pt-24 md:pt-36 pb-16">
        <motion.p
          initial={shouldReduce ? false : { opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-dourado text-xs tracking-[0.3em] uppercase mb-6"
        >
          Missão · Visão · Valores
        </motion.p>

        <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-20">
          <motion.h2
            initial={shouldReduce ? false : { opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease }}
            className="font-display font-light italic text-areia leading-none flex-1"
            style={{ fontSize: "clamp(36px, 5.5vw, 72px)" }}
          >
            Dançamos com
            <br />
            <span className="text-dourado font-semibold">propósito.</span>
          </motion.h2>

          <motion.p
            initial={shouldReduce ? false : { opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="text-areia/45 text-sm leading-relaxed max-w-xs shrink-0"
          >
            Três pilares que orientam 14 anos de criação, formação e presença no Rio de Janeiro.
          </motion.p>
        </div>
      </div>

      {/* —— Foto strip — clip-path reveal —— */}
      <div className="relative h-[220px] md:h-[280px] overflow-hidden">
        <motion.div
          initial={shouldReduce ? false : { clipPath: "inset(0 100% 0 0)" }}
          animate={inView ? { clipPath: "inset(0 0% 0 0)" } : {}}
          transition={{ duration: 1.1, delay: 0.3, ease }}
          className="absolute inset-0"
        >
          <motion.div
            className="absolute inset-0"
            style={{ y: shouldReduce ? 0 : photoY }}
          >
            <Image
              src="/fotos/ensemble-stage.jpg"
              alt="Vivá Cia de Dança em cena"
              fill
              className="object-cover object-[center_35%]"
              sizes="100vw"
            />
          </motion.div>
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(6,43,79,0.7) 0%, rgba(6,43,79,0.1) 40%, rgba(6,43,79,0.1) 60%, rgba(6,43,79,0.7) 100%), linear-gradient(to bottom, rgba(6,43,79,0.4) 0%, transparent 30%, transparent 70%, rgba(6,43,79,0.8) 100%)",
            }}
          />
        </motion.div>
      </div>

      {/* —— Pilares —— */}
      <div className="max-w-7xl mx-auto px-6 pb-24 md:pb-36">
        <div className="grid md:grid-cols-3 gap-px bg-areia/[0.05] mt-px">

          {/* Missão + Visão */}
          {pillars.map((p, i) => (
            <motion.div
              key={p.num}
              initial={shouldReduce ? false : { opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.12, ease }}
              className="relative bg-oceano p-8 md:p-10 flex flex-col gap-5 overflow-hidden min-h-[280px]"
            >
              {/* Watermark */}
              <span
                className="absolute -right-3 -bottom-5 font-display font-bold leading-none select-none pointer-events-none"
                style={{ fontSize: "clamp(90px, 10vw, 130px)", color: "rgba(237,229,216,0.025)" }}
              >
                {p.num}
              </span>

              <div className="flex items-center gap-3 relative z-10">
                <div className={`w-5 h-[2px] ${p.accentClass}`} />
                <span
                  className="text-[10px] tracking-[0.28em] font-semibold uppercase"
                  style={{ color: p.accentColor }}
                >
                  {p.tag}
                </span>
              </div>

              <h3
                className="font-display font-semibold italic text-areia leading-tight relative z-10"
                style={{ fontSize: "clamp(17px, 1.7vw, 22px)" }}
              >
                {p.heading}
              </h3>

              <p className="text-areia/55 text-sm leading-[1.8] flex-1 relative z-10">
                {p.body}
              </p>
            </motion.div>
          ))}

          {/* Valores */}
          <motion.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.64, ease }}
            className="relative bg-oceano p-8 md:p-10 flex flex-col gap-5 overflow-hidden min-h-[280px]"
          >
            {/* Watermark */}
            <span
              className="absolute -right-3 -bottom-5 font-display font-bold leading-none select-none pointer-events-none"
              style={{ fontSize: "clamp(90px, 10vw, 130px)", color: "rgba(237,229,216,0.025)" }}
            >
              03
            </span>

            <div className="flex items-center gap-3 relative z-10">
              <div className="w-5 h-[2px] bg-dourado" />
              <span className="text-[10px] tracking-[0.28em] font-semibold uppercase text-dourado">
                VALORES
              </span>
            </div>

            <ol className="flex flex-col flex-1 relative z-10">
              {valores.map((v, i) => (
                <motion.li
                  key={v}
                  initial={shouldReduce ? false : { opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.35, delay: 0.7 + i * 0.055, ease }}
                  className="flex items-baseline gap-3 py-2 border-b border-areia/[0.07] last:border-b-0 group"
                >
                  <span className="font-mono text-[9px] text-dourado/25 tabular-nums shrink-0 w-5 group-hover:text-dourado/50 transition-colors duration-200">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-areia/70 text-sm leading-snug group-hover:text-areia/90 transition-colors duration-200">
                    {v}
                  </span>
                </motion.li>
              ))}
            </ol>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
