"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const shows = [
  { title: "Flores", year: "2012", tag: "ORIGEM DA CIA", color: "#C79A42" },
  { title: "Entre Atos", year: "2012/13", tag: null, color: null },
  { title: "Petite Danse", year: "2012", tag: null, color: null },
  { title: "BoraDançar", year: "2013/14", tag: "SOCIAL", color: "#526B52" },
  { title: "Pé de Cachimbo", year: "2014", tag: "EM CARTAZ", color: "#526B52", live: true },
  { title: "Aquarela Carioca", year: "2015/16", tag: null, color: null },
  { title: "Sobre as Ondas do Mar", year: "2015", tag: null, color: null },
  { title: "Fina Camada & Mambembes", year: "2016/19", tag: null, color: null },
  { title: "Entre Solos & Canções", year: "2021", tag: null, color: null },
  { title: "Curu-MIM", year: "2022", tag: "SESC 2024", color: "#006DB2" },
  { title: "Raízes e Ancestralidade", year: "2024", tag: null, color: null },
  { title: "Labirinthus Fantástico", year: "2027", tag: "EM CRIAÇÃO", color: "#C79A42" },
];

export function Espetaculos() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
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
          <div className="flex items-center gap-4">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-areia/20 flex items-center justify-center hover:border-dourado hover:text-dourado transition-colors text-areia/60"
            >
              ←
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-areia/20 flex items-center justify-center hover:border-dourado hover:text-dourado transition-colors text-areia/60"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Carousel horizontal sem padding nos lados */}
      <div
        ref={carouselRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-6"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {shows.map((show, i) => (
          <ShowCard key={i} show={show} index={i} inView={inView} />
        ))}
        <div className="shrink-0 w-6" />
      </div>
    </section>
  );
}

function ShowCard({
  show,
  index,
  inView,
}: {
  show: (typeof shows)[0];
  index: number;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="shrink-0 w-64 md:w-72 overflow-hidden rounded-sm"
      style={{ scrollSnapAlign: "start" }}
    >
      {/* Foto placeholder */}
      <div
        className="relative h-80 overflow-hidden"
        style={{
          background: `linear-gradient(160deg, #0a3d6b 0%, #062B4F 100%)`,
          transform: hovered ? "scale(1.02)" : "scale(1)",
          transition: "transform 0.4s ease",
        }}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(ellipse at 50% 40%, rgba(199,154,66,0.15) 0%, transparent 70%)",
          }}
        />
        {/* Overlay hover */}
        <div
          className="absolute inset-0 bg-terra/40 flex items-center justify-center transition-opacity duration-300"
          style={{ opacity: hovered ? 1 : 0 }}
        >
          <span className="text-areia text-xs tracking-[0.2em] uppercase border-b border-areia/40 pb-1">
            Ver espetáculo →
          </span>
        </div>

        {/* Tag */}
        {show.tag && (
          <div className="absolute top-4 left-4">
            <span
              className="text-[9px] tracking-[0.15em] uppercase px-2 py-1 rounded-full font-semibold flex items-center gap-1.5"
              style={{
                backgroundColor: (show.color ?? "#C79A42") + "22",
                color: show.color ?? "#C79A42",
                border: `1px solid ${show.color ?? "#C79A42"}44`,
              }}
            >
              {show.live && (
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ backgroundColor: show.color ?? "#C79A42" }}
                />
              )}
              {show.tag}
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="pt-4 pb-2">
        <p className="text-dourado text-xs tracking-[0.15em] mb-1">{show.year}</p>
        <h3 className="text-areia font-display font-semibold text-base leading-snug">
          {show.title}
        </h3>
      </div>
    </motion.div>
  );
}
