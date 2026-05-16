"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Manifesto() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const lines = [
    "Em 2012, o Rio apostou em nós.",
    "Devolvemos multiplicado.",
  ];

  return (
    <section ref={ref} className="bg-terra py-24 md:py-36 px-6" id="historia">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-dourado text-xs tracking-[0.3em] uppercase mb-8"
        >
          O Argumento
        </motion.p>

        <div className="space-y-2 mb-10">
          {lines.map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                animate={inView ? { y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.2 + i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="font-display font-bold text-brisa leading-tight"
                style={{ fontSize: "clamp(28px, 4vw, 52px)" }}
              >
                {line}
              </motion.h2>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="h-px bg-dourado w-16 mb-8 origin-left"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-areia/70 text-lg leading-relaxed max-w-2xl"
        >
          21 prêmios em 14 anos. Nenhum ano em branco desde 2012.
          O mesmo espetáculo do primeiro fomento ainda em cartaz,
          10 anos depois, neste teatro.
        </motion.p>
      </div>
    </section>
  );
}
