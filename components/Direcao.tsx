"use client";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import type { PessoaType } from "@/sanity/lib/queries";

export function Direcao({ pessoa }: { pessoa?: PessoaType | null }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduce = useReducedMotion();
  const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

  if (!pessoa) return null;

  const fotoUrl = pessoa.foto
    ? urlFor(pessoa.foto).width(600).height(800).url()
    : null;

  return (
    <section ref={ref} className="bg-brisa py-24 md:py-36" id="direcao">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start">

          {/* Foto */}
          {fotoUrl && (
            <motion.div
              initial={shouldReduce ? false : { opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease }}
              className="shrink-0 w-full md:w-[280px]"
            >
              <div className="relative w-full aspect-[3/4] rounded-sm overflow-hidden">
                <Image
                  src={fotoUrl}
                  alt={pessoa.nome}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 280px"
                />
              </div>
            </motion.div>
          )}

          {/* Texto */}
          <div className="flex-1 min-w-0">
            <motion.p
              initial={shouldReduce ? false : { opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="text-dourado text-xs tracking-[0.3em] uppercase mb-6"
            >
              Direção Artística
            </motion.p>

            <motion.h2
              initial={shouldReduce ? false : { opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease }}
              className="font-display font-semibold text-terra leading-none mb-2"
              style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
            >
              {pessoa.nome}
            </motion.h2>

            {pessoa.cargo && (
              <motion.p
                initial={shouldReduce ? false : { opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-terra/50 text-xs tracking-[0.22em] uppercase mb-10"
              >
                {pessoa.cargo}
              </motion.p>
            )}

            <motion.div
              initial={shouldReduce ? false : { scaleX: 0, opacity: 0 }}
              animate={inView ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-12 h-px bg-dourado mb-10 origin-left"
            />

            {pessoa.bio && (
              <motion.p
                initial={shouldReduce ? false : { opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.35, ease }}
                className="text-terra/70 text-base leading-relaxed max-w-2xl"
              >
                {pessoa.bio}
              </motion.p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
