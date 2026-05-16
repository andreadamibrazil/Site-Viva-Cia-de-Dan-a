"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const events = [
  { year: "2012", title: "Nasce a Vivá", desc: "Prêmio Novos Coreógrafos da Prefeitura do Rio", tag: "ORIGEM" },
  { year: "2014", title: "Copa do Mundo FIFA", desc: "Coreógrafo da cerimônia de encerramento · Brasil", tag: "MARCO NACIONAL" },
  { year: "2016", title: "Jogos Olímpicos Rio 2016", desc: "Abertura com Deborah Colker · Edital Fomento Cidade Olímpica", tag: "MARCO NACIONAL" },
  { year: "2018", title: "MoviRio Festival", desc: "34 companhias · 4 linguagens · 1ª edição", tag: "LEGADO" },
  { year: "2020", title: "4 prêmios em um ano", desc: "Arte-Escola, Fomento a Todas as Artes, Zonas de Cultura, Ondas da Cultura", tag: null },
  { year: "2023", title: "MICA Argentina", desc: "Único representante do Brasil · Ministério da Cultura", tag: "INTERNACIONAL" },
  { year: "2024", title: "Sesc RJ Pulsar", desc: "Curu-MIM em 7 unidades · Sessões Azuis para autistas", tag: null },
  { year: "2026", title: "Prêmio Mestres e Mestras da Dança", desc: "Reconhecimento pela trajetória de 14 anos", tag: "ATUAL" },
];

const tagColor: Record<string, string> = {
  ORIGEM: "#C79A42",
  "MARCO NACIONAL": "#006DB2",
  LEGADO: "#526B52",
  INTERNACIONAL: "#006DB2",
  ATUAL: "#C79A42",
};

export function Timeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-brisa py-24 md:py-36 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-dourado text-xs tracking-[0.3em] uppercase mb-4"
        >
          Trajetória
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-light italic text-terra mb-16"
          style={{ fontSize: "clamp(28px, 4vw, 56px)" }}
        >
          14 anos de provas.
        </motion.h2>

        {/* Timeline horizontal (scroll no mobile) */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="relative min-w-max flex gap-0">
            {/* Linha horizontal */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
              className="absolute top-[22px] left-0 right-0 h-px bg-terra/20 origin-left"
            />

            {events.map((ev, i) => (
              <TimelineItem key={i} ev={ev} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  ev,
  index,
  inView,
}: {
  ev: (typeof events)[0];
  index: number;
  inView: boolean;
}) {
  const [open, setOpen] = useState(false);
  const color = ev.tag ? tagColor[ev.tag] ?? "#111111" : "#111111";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
      className="relative w-44 md:w-52 pr-6 pt-12 cursor-pointer group"
      onClick={() => setOpen(!open)}
    >
      {/* Dot */}
      <div
        className="absolute top-[18px] left-0 w-2.5 h-2.5 rounded-full border-2 border-terra/30 bg-brisa group-hover:border-dourado group-hover:scale-150 transition-all duration-300"
        style={{ backgroundColor: inView ? color : "transparent" }}
      />

      <p className="text-dourado font-display font-bold text-xl mb-2">{ev.year}</p>
      <h3 className="text-terra font-semibold text-sm leading-snug mb-1">{ev.title}</h3>
      {ev.tag && (
        <span
          className="text-[9px] tracking-[0.1em] uppercase px-2 py-0.5 rounded-full font-semibold mb-2 inline-block"
          style={{
            backgroundColor: color + "18",
            color: color,
            border: `1px solid ${color}33`,
          }}
        >
          {ev.tag}
        </span>
      )}
      <p className="text-terra/50 text-xs leading-relaxed mt-1">{ev.desc}</p>
    </motion.div>
  );
}
