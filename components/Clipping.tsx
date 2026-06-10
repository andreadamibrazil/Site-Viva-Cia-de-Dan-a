"use client";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import type { ClippingType } from "@/sanity/lib/queries";

type Props = {
  items?: ClippingType[];
  ogImages?: Record<string, string>;
};

export function Clipping({ items, ogImages = {} }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduce = useReducedMotion();
  const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

  if (!items || items.length === 0) return null;

  const [featured, ...rest] = items;

  return (
    <section ref={ref} className="bg-brisa py-24 md:py-32" id="clipping">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <motion.p
              initial={shouldReduce ? false : { opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="text-dourado text-xs tracking-[0.3em] uppercase mb-4"
            >
              Na Imprensa
            </motion.p>
            <motion.h2
              initial={shouldReduce ? false : { opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease }}
              className="font-display font-light italic text-terra leading-tight"
              style={{ fontSize: "clamp(24px, 3.5vw, 44px)" }}
            >
              O que dizem sobre a Vivá.
            </motion.h2>
          </div>
          <motion.p
            initial={shouldReduce ? false : { opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-terra/40 text-xs tracking-[0.15em] uppercase shrink-0"
          >
            {items.length} matéria{items.length !== 1 ? "s" : ""}
          </motion.p>
        </div>

        {/* Featured card + side stack */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">

          {/* Featured — spans 2 cols */}
          <motion.a
            href={featured.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={shouldReduce ? false : { opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            className="md:col-span-2 group flex flex-col bg-white rounded-xl overflow-hidden border border-terra/[0.07] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dourado"
          >
            <ClippingImage item={featured} ogUrl={ogImages[featured._id]} aspectClass="aspect-[16/9]" />
            <div className="p-7 flex flex-col flex-1">
              <span className="text-dourado text-[10px] tracking-[0.22em] uppercase font-mono mb-3">
                {featured.fonte}{featured.data ? ` · ${featured.data}` : ""}
              </span>
              <h3
                className="font-display font-semibold text-terra leading-snug group-hover:text-dourado transition-colors duration-300 flex-1"
                style={{ fontSize: "clamp(17px, 1.8vw, 22px)" }}
              >
                {featured.titulo}
              </h3>
              {featured.resumo && (
                <p className="text-terra/55 text-sm leading-relaxed mt-3 line-clamp-2">
                  {featured.resumo}
                </p>
              )}
              <div className="flex items-center gap-2 mt-5 text-dourado/60 group-hover:text-dourado transition-colors duration-200">
                <span className="text-[11px] tracking-[0.18em] uppercase">Ler matéria</span>
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                  <path d="M1.5 9.5L9.5 1.5M9.5 1.5H3.5M9.5 1.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </motion.a>

          {/* Side stack */}
          <div className="flex flex-col gap-4">
            {rest.slice(0, 2).map((item, i) => (
              <motion.a
                key={item._id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={shouldReduce ? false : { opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease }}
                className="group flex flex-col bg-white rounded-xl overflow-hidden border border-terra/[0.07] flex-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dourado"
              >
                <ClippingImage item={item} ogUrl={ogImages[item._id]} aspectClass="aspect-[16/9]" />
                <div className="p-5 flex flex-col flex-1">
                  <span className="text-dourado text-[9px] tracking-[0.22em] uppercase font-mono mb-2">
                    {item.fonte}{item.data ? ` · ${item.data}` : ""}
                  </span>
                  <h3 className="font-display font-semibold text-terra text-sm leading-snug group-hover:text-dourado transition-colors duration-300 line-clamp-3 flex-1">
                    {item.titulo}
                  </h3>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        {rest.length > 2 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {rest.slice(2).map((item, i) => (
              <motion.a
                key={item._id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.07, ease }}
                className="group flex flex-col bg-white rounded-xl overflow-hidden border border-terra/[0.07] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dourado"
              >
                <ClippingImage item={item} ogUrl={ogImages[item._id]} aspectClass="aspect-[4/3]" />
                <div className="p-4 flex flex-col flex-1">
                  <span className="text-dourado text-[9px] tracking-[0.22em] uppercase font-mono mb-2">
                    {item.fonte}{item.data ? ` · ${item.data}` : ""}
                  </span>
                  <h3 className="font-display font-semibold text-terra text-sm leading-snug group-hover:text-dourado transition-colors duration-300 line-clamp-3 flex-1">
                    {item.titulo}
                  </h3>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ClippingImage({
  item,
  ogUrl,
  aspectClass,
}: {
  item: ClippingType;
  ogUrl?: string;
  aspectClass: string;
}) {
  const sanityUrl = item.imagem
    ? urlFor(item.imagem).width(800).height(450).url()
    : null;

  const imgSrc = sanityUrl ?? ogUrl ?? null;

  return (
    <div className={`relative w-full ${aspectClass} overflow-hidden bg-terra/5`}>
      {imgSrc ? (
        sanityUrl ? (
          <Image
            src={imgSrc}
            alt={item.titulo}
            fill
            className="object-cover transition-transform duration-700 will-change-transform group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          /* OG image — external domain, use <img> */
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imgSrc}
            alt={item.titulo}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 will-change-transform group-hover:scale-[1.03]"
          />
        )
      ) : (
        <div
          className="absolute inset-0 flex items-end p-5"
          style={{
            background: "linear-gradient(135deg, #0d3d65 0%, #062B4F 60%, #0a2840 100%)",
          }}
        >
          <span
            className="font-display font-bold text-areia/10 leading-none select-none"
            style={{ fontSize: "clamp(48px, 8vw, 80px)" }}
          >
            {item.fonte.slice(0, 2).toUpperCase()}
          </span>
        </div>
      )}
    </div>
  );
}
