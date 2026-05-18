"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import type { EspetaculoType } from "@/sanity/lib/queries";
import { Tag, tagVariant } from "@/components/ui/Tag";

type ShowCard = {
  title: string;
  year: string;
  tag: string | null;
  photo: string | null;
  live?: boolean;
};

const FALLBACK_SHOWS: ShowCard[] = [
  { title: "Flores", year: "2012", tag: "ORIGEM DA CIA", photo: "/fotos/movirio-stage.jpg" },
  { title: "Entre Atos", year: "2012/13", tag: null, photo: null },
  { title: "Petite Danse", year: "2012", tag: null, photo: null },
  { title: "BoraDançar", year: "2013/14", tag: "SOCIAL", photo: null },
  { title: "Pé de Cachimbo", year: "2014", tag: "EM CARTAZ", live: true, photo: "/fotos/pe-de-cachimbo.jpg" },
  { title: "Aquarela Carioca", year: "2015/16", tag: null, photo: "/fotos/hero.jpg" },
  { title: "Sobre as Ondas do Mar", year: "2015", tag: null, photo: "/fotos/performance-duo.jpg" },
  { title: "Fina Camada & Mambembes", year: "2016/19", tag: null, photo: "/fotos/ensemble-stage.jpg" },
  { title: "Entre Solos & Canções", year: "2021", tag: null, photo: null },
  { title: "Curu-MIM", year: "2022", tag: "SESC 2024", photo: "/fotos/curumim-poster.jpg" },
  { title: "Raízes e Ancestralidade", year: "2024", tag: null, photo: "/fotos/curumim-palco.jpg" },
  { title: "Labirinthus Fantástico", year: "2027", tag: "EM CRIAÇÃO", photo: null },
];

function sanityToShow(e: EspetaculoType): ShowCard {
  return {
    title: e.titulo,
    year: e.ano,
    tag: e.tag ?? null,
    live: e.emCartaz ?? false,
    photo: e.foto ? urlFor(e.foto).width(480).height(640).url() : null,
  };
}

export function Espetaculos({ sanityShows }: { sanityShows?: EspetaculoType[] }) {
  const base: ShowCard[] =
    sanityShows && sanityShows.length > 0
      ? sanityShows.map(sanityToShow)
      : FALLBACK_SHOWS;

  const shows = [...base, ...base, ...base]; // triplo para loop seguro

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const carouselRef = useRef<HTMLDivElement>(null);
  const stoppedRef = useRef(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    stoppedRef.current = false;
    const speed = 0.12;
    const third = () => el.scrollWidth / 3;

    const tick = () => {
      if (stoppedRef.current) return;
      el.scrollLeft += speed;
      // volta silenciosamente ao 1/3 para loop contínuo
      if (el.scrollLeft >= third() * 2) {
        el.scrollLeft -= third();
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    // Inicia no 1/3 para que o reset nunca mostre o início abrupto
    el.scrollLeft = third();
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      stoppedRef.current = true;
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const scroll = (dir: "left" | "right") => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({ left: dir === "left" ? -280 : 280, behavior: "smooth" });
  };

  return (
    <section ref={ref} className="bg-oceano py-24 md:py-36" id="espetaculos">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="text-dourado text-xs tracking-[0.3em] uppercase mb-4"
            >
              Espetáculos
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-light italic text-areia leading-tight"
              style={{ fontSize: "clamp(24px, 3.5vw, 44px)" }}
            >
              Criações que nascem do corpo,
              <br />
              da cidade e do tempo que vivemos.
            </motion.h2>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => scroll("left")}
              aria-label="Anterior"
              className="w-9 h-9 rounded-full border border-areia/15 flex items-center justify-center text-areia/50 hover:border-dourado/50 hover:text-dourado transition-colors duration-200"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M8 2L4 6l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Próximo"
              className="w-9 h-9 rounded-full border border-areia/15 flex items-center justify-center text-areia/50 hover:border-dourado/50 hover:text-dourado transition-colors duration-200"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        ref={carouselRef}
        className="flex gap-3 overflow-x-auto scrollbar-hide px-6"
        style={{ scrollSnapType: "none" }}
      >
        {shows.map((show, i) => (
          <ShowCard key={i} show={show} index={i % base.length} inView={inView} />
        ))}
        <div className="shrink-0 w-4" />
      </div>
    </section>
  );
}

function ShowCard({ show, index, inView }: { show: ShowCard; index: number; inView: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
      className="shrink-0 w-[195px] md:w-[215px] group cursor-default"
    >
      {/* Poster */}
      <div className="relative w-full aspect-[3/4] overflow-hidden mb-3">
        {/* fundo padrão */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(160deg, #0d3d65 0%, #062B4F 100%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{ backgroundImage: "radial-gradient(ellipse at 65% 25%, rgba(199,154,66,0.35) 0%, transparent 60%)" }}
        />

        {show.photo && (
          <Image
            src={show.photo}
            alt={show.title}
            fill
            className="object-cover object-center transition-transform duration-700 will-change-transform group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 195px, 215px"
          />
        )}

        {/* Gradiente superior para tag */}
        {show.tag && (
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-transparent pointer-events-none" />
        )}

        {/* Tag */}
        {show.tag && (
          <div className="absolute top-3 left-3">
            <Tag label={show.tag} variant={tagVariant(show.tag)} pulse={show.live} />
          </div>
        )}
      </div>

      {/* Info */}
      <p className="text-dourado/60 text-[10px] tracking-[0.18em] uppercase mb-1 tabular-nums font-mono">
        {show.year}
      </p>
      <h3 className="text-areia/85 font-display font-semibold text-sm leading-snug">
        {show.title}
      </h3>
    </motion.article>
  );
}
