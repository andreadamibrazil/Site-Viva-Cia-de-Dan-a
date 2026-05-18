"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import type { NoticiaType } from "@/sanity/lib/queries";

type NoticiaCard = { date: string; title: string; photo: string | null };

const FALLBACK_NOTICIAS: NoticiaCard[] = [
  { date: "12 MAI 2026", title: "Vivá apresenta nova criação no Teatro Municipal Carlos Gomes", photo: "/fotos/movirio-stage.jpg" },
  { date: "28 ABR 2026", title: "Projeto educativo leva dança para escolas públicas do Rio", photo: "/fotos/curumim-palco.jpg" },
  { date: "15 ABR 2026", title: "Pé de Cachimbo completa 10 anos em cartaz com temporada especial", photo: "/fotos/pe-de-cachimbo.jpg" },
  { date: "02 ABR 2026", title: "Circulação 2024 passa por 7 estados brasileiros com Curu-MIM", photo: "/fotos/curumim-stage.jpg" },
];

function formatDate(iso: string): string {
  return new Date(iso + "T12:00:00").toLocaleDateString("pt-BR", {
    day: "2-digit", month: "short", year: "numeric",
  }).toUpperCase().replace(".", "");
}

function sanityToNoticia(n: NoticiaType): NoticiaCard {
  return {
    date: formatDate(n.data),
    title: n.titulo,
    photo: n.foto ? urlFor(n.foto).width(400).height(300).url() : null,
  };
}

export function Noticias({ sanityNoticias }: { sanityNoticias?: NoticiaType[] }) {
  const noticias: NoticiaCard[] =
    sanityNoticias && sanityNoticias.length > 0
      ? sanityNoticias.map(sanityToNoticia)
      : FALLBACK_NOTICIAS;

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
              <div className="relative h-48 mb-4 overflow-hidden bg-oceano">
                {n.photo && (
                  <Image
                    src={n.photo}
                    alt={n.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    unoptimized={n.photo.startsWith("https://")}
                  />
                )}
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
