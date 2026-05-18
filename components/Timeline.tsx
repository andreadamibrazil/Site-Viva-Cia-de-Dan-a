"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Tag, tagVariant } from "@/components/ui/Tag";

const events = [
  { year: "2012", title: "Nasce a Vivá", desc: "Prêmio Novos Coreógrafos da Prefeitura do Rio de Janeiro", tag: "ORIGEM", accent: "#C79A42" },
  { year: "2014", title: "Copa do Mundo FIFA", desc: "Coreógrafo da cerimônia de encerramento — Brasil, no Estádio do Maracanã", tag: "MARCO NACIONAL", accent: "#006DB2" },
  { year: "2016", title: "Jogos Olímpicos Rio 2016", desc: "Abertura com Deborah Colker — Edital Fomento Cidade Olímpica", tag: "MARCO NACIONAL", accent: "#006DB2" },
  { year: "2018", title: "MoviRio Festival", desc: "34 companhias · 4 linguagens · 1ª edição do maior festival de dança do Rio", tag: "LEGADO", accent: "#526B52" },
  { year: "2020", title: "4 prêmios em um ano", desc: "Arte-Escola · Fomento a Todas as Artes · Zonas de Cultura · Ondas da Cultura", tag: null, accent: "#C79A42" },
  { year: "2023", title: "MICA Argentina", desc: "Único representante do Brasil no Mercado de Indústrias Culturais — Ministério da Cultura", tag: "INTERNACIONAL", accent: "#006DB2" },
  { year: "2024", title: "Sesc RJ Pulsar", desc: "Curu-MIM em 7 unidades do Sesc — Sessões Azuis para o público autista", tag: null, accent: "#526B52" },
  { year: "2026", title: "Prêmio Mestres e Mestras da Dança", desc: "Reconhecimento pela trajetória de 14 anos de arte e impacto social no Rio de Janeiro", tag: "ATUAL", accent: "#C79A42" },
];

export function Timeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-brisa py-24 md:py-36 px-6" id="historia">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
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
          className="font-display font-light italic text-terra mb-16 md:mb-20"
          style={{ fontSize: "clamp(28px, 4vw, 52px)" }}
        >
          14 anos de provas.
        </motion.h2>

        {/* Timeline vertical */}
        <div className="relative">
          {/* Linha vertical */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.4, delay: 0.2, ease: "easeInOut" }}
            className="absolute left-[88px] md:left-[112px] top-0 bottom-0 w-px bg-terra/15 origin-top"
          />

          <div className="flex flex-col gap-0">
            {events.map((ev, i) => (
              <TimelineRow key={i} ev={ev} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineRow({
  ev,
  index,
  inView,
}: {
  ev: (typeof events)[0];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex items-start gap-0 py-7 border-b border-terra/8 last:border-b-0 group"
    >
      {/* Ano */}
      <div className="w-[88px] md:w-[112px] shrink-0 pt-0.5">
        <span
          className="font-display font-bold tabular-nums leading-none transition-colors duration-200"
          style={{
            fontSize: "clamp(18px, 2vw, 22px)",
            color: ev.accent,
          }}
        >
          {ev.year}
        </span>
      </div>

      {/* Dot na linha */}
      <div
        className="absolute left-[84px] md:left-[108px] top-[30px] w-[9px] h-[9px] rounded-full border-2 bg-brisa transition-all duration-300 group-hover:scale-125"
        style={{ borderColor: ev.accent }}
      />

      {/* Conteúdo */}
      <div className="pl-8 flex-1">
        <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
          <h3 className="text-terra font-semibold leading-snug" style={{ fontSize: "clamp(14px, 1.5vw, 16px)" }}>
            {ev.title}
          </h3>
          {ev.tag && (
            <Tag label={ev.tag} variant={tagVariant(ev.tag)} />
          )}
        </div>
        <p className="text-terra/50 text-sm leading-relaxed">{ev.desc}</p>
      </div>
    </motion.div>
  );
}
