"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const noticias = [
  {
    date: "12 MAI 2024",
    title: "Vivá estreia nova criação no Teatro Municipal Carlos Gomes",
    img: "dance-1",
  },
  {
    date: "28 ABR 2024",
    title: "Projeto educativo leva dança para escolas públicas do Rio",
    img: "dance-2",
  },
  {
    date: "15 ABR 2024",
    title: "Pé de Cachimbo completa 10 anos em cartaz com temporada especial",
    img: "dance-3",
  },
  {
    date: "02 ABR 2024",
    title: "Circulação 2024 passa por 7 estados brasileiros com Curu-MIM",
    img: "dance-4",
  },
];

const placeholderColors = ["#0a3d6b", "#083259", "#0c4575", "#062B4F"];

export function Noticias() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-brisa py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="font-display font-bold text-terra text-2xl tracking-wide uppercase"
          >
            Notícias
          </motion.h2>
          <motion.a
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            href="#"
            className="text-xs tracking-[0.15em] text-atmosfera uppercase hover:text-dourado transition-colors"
          >
            Ver todas →
          </motion.a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {noticias.map((n, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              {/* Foto placeholder */}
              <div
                className="h-48 mb-4 overflow-hidden"
                style={{ backgroundColor: placeholderColors[i] }}
              >
                <div
                  className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "radial-gradient(ellipse at 50% 40%, rgba(199,154,66,0.1) 0%, transparent 70%)",
                  }}
                />
              </div>
              <p className="text-terra/40 text-[10px] tracking-[0.15em] uppercase mb-2">{n.date}</p>
              <h3 className="text-terra font-semibold text-sm leading-snug mb-3 group-hover:text-atmosfera transition-colors">
                {n.title}
              </h3>
              <a href="#" className="text-[10px] tracking-[0.1em] text-atmosfera uppercase hover:text-dourado transition-colors">
                Ler mais →
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
