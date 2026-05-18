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
  return new Date(iso + "T12:00:00")
    .toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" })
    .toUpperCase()
    .replace(".", "");
}

function sanityToNoticia(n: NoticiaType): NoticiaCard {
  return {
    date: formatDate(n.data),
    title: n.titulo,
    photo: n.foto ? urlFor(n.foto).width(800).height(600).url() : null,
  };
}

export function Noticias({ sanityNoticias }: { sanityNoticias?: NoticiaType[] }) {
  const noticias: NoticiaCard[] =
    sanityNoticias && sanityNoticias.length > 0
      ? sanityNoticias.map(sanityToNoticia)
      : FALLBACK_NOTICIAS;

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [featured, ...rest] = noticias;

  return (
    <section ref={ref} className="bg-brisa py-24 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="text-dourado text-xs tracking-[0.3em] uppercase mb-3 eyebrow"
            >
              Notícias
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-light italic text-terra leading-tight"
              style={{ fontSize: "clamp(22px, 3vw, 38px)" }}
            >
              Em cena e na imprensa.
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            href="#"
            className="text-[10px] tracking-[0.18em] text-terra/40 uppercase hover:text-dourado transition-colors duration-200 hidden md:block"
          >
            Ver todas →
          </motion.a>
        </div>

        {/* Layout editorial: destaque grande + lista lateral */}
        <div className="grid md:grid-cols-[1fr_340px] lg:grid-cols-[1fr_380px] gap-px bg-terra/10">

          {/* Notícia em destaque */}
          {featured && (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-oceano relative overflow-hidden cursor-pointer"
            >
              <div className="relative h-[320px] md:h-[420px] overflow-hidden">
                {featured.photo ? (
                  <Image
                    src={featured.photo}
                    alt={featured.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 65vw"
                    unoptimized={featured.photo.startsWith("https://")}
                  />
                ) : (
                  <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, #0d3d65 0%, #062B4F 100%)" }} />
                )}
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(6,43,79,0.92) 0%, rgba(6,43,79,0.1) 55%)" }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-7 md:p-8">
                  <p className="text-areia/80 text-[10px] tracking-[0.2em] uppercase mb-2 font-mono">
                    {featured.date}
                  </p>
                  <h3
                    className="text-areia font-display font-semibold leading-snug group-hover:text-dourado transition-colors duration-300"
                    style={{ fontSize: "clamp(16px, 2vw, 22px)" }}
                  >
                    {featured.title}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-areia/40 text-[10px] tracking-[0.15em] uppercase mt-3 group-hover:text-areia/70 transition-colors duration-200">
                    Ler notícia
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </div>
            </motion.article>
          )}

          {/* Lista de notícias secundárias */}
          <div className="bg-brisa/50 flex flex-col divide-y divide-terra/[0.08]">
            {rest.map((n, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, x: 16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group flex gap-4 p-5 md:p-6 cursor-pointer hover:bg-terra/[0.03] transition-colors duration-200"
              >
                {/* Thumbnail */}
                <div className="relative w-16 h-16 md:w-20 md:h-20 shrink-0 overflow-hidden bg-oceano/60">
                  {n.photo ? (
                    <Image
                      src={n.photo}
                      alt={n.title}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="80px"
                      unoptimized={n.photo.startsWith("https://")}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-areia/5" />
                  )}
                </div>

                {/* Texto */}
                <div className="flex flex-col justify-center gap-1.5 min-w-0">
                  <p className="text-terra/60 text-[9px] tracking-[0.18em] uppercase font-mono">{n.date}</p>
                  <h3 className="text-terra/75 text-sm font-semibold leading-snug group-hover:text-terra transition-colors duration-200 line-clamp-3">
                    {n.title}
                  </h3>
                </div>
              </motion.article>
            ))}

            {/* Ver todas — mobile e como última linha da sidebar */}
            <div className="p-5 md:p-6 flex items-center">
              <a
                href="#"
                className="text-[10px] tracking-[0.18em] text-terra/35 uppercase hover:text-dourado transition-colors duration-200"
              >
                Ver todas as notícias →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
