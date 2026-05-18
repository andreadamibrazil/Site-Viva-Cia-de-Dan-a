"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const socials = [
  {
    name: "Instagram",
    href: "https://instagram.com/vivaciadedanca",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@vivaciadedanca",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.96 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.96 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com/vivaciadedanca",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
];

const navLinks = [
  { label: "História", href: "#historia" },
  { label: "Espetáculos", href: "#espetaculos" },
  { label: "Pé de Cachimbo", href: "#pe-de-cachimbo" },
  { label: "Impacto", href: "#impacto" },
  { label: "Contato", href: "#contato" },
];

const apoios = ["FUNARTE", "APRT", "Sesc RJ", "Prefeitura RJ", "Rio Cultura", "SMC"];

export function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <footer ref={ref} className="bg-terra" id="contato">

      {/* —— Contato CTA —— */}
      <div className="border-b border-areia/[0.07]">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                className="text-dourado text-xs tracking-[0.3em] uppercase mb-5"
              >
                Entre em contato
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-light italic text-areia leading-tight"
                style={{ fontSize: "clamp(28px, 4vw, 52px)" }}
              >
                Vamos criar algo
                <br />
                <span className="text-dourado font-semibold">juntos?</span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-3 md:items-end"
            >
              <a
                href="mailto:contato@vivaciadedanca.com.br"
                className="text-areia/65 text-base hover:text-dourado transition-colors duration-200"
              >
                contato@vivaciadedanca.com.br
              </a>
              <p className="text-areia/35 text-sm">+55 21 99999-9999</p>
              <p className="text-areia/30 text-sm">Rio de Janeiro, RJ · Brasil</p>
              <div className="flex items-center gap-3 mt-2">
                {socials.map((s) => (
                  <motion.a
                    key={s.name}
                    href={s.href}
                    aria-label={s.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.12 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="w-9 h-9 rounded-full border border-areia/15 flex items-center justify-center text-areia/40 hover:text-areia/80 hover:border-areia/30 transition-colors duration-200"
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* —— Body —— */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 pb-10 border-b border-areia/[0.07]">

          {/* Logo + institucional */}
          <div>
            <Image
              src="/logobranco.png"
              alt="Vivá Cia de Dança"
              width={120}
              height={48}
              className="h-11 w-auto object-contain mb-4 opacity-85"
            />
            <p className="text-areia/30 text-xs leading-relaxed mb-4 max-w-[220px]">
              Companhia de dança contemporânea fundada em 2012 no Rio de Janeiro.
            </p>
            <p className="text-areia/20 text-[10px] tracking-[0.1em] uppercase leading-relaxed">
              SMC Nº 04 · Inscrição 10138
            </p>
          </div>

          {/* Navegação */}
          <div>
            <p className="text-areia/25 text-[10px] tracking-[0.22em] uppercase mb-5">Navegação</p>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-areia/45 text-sm hover:text-dourado transition-colors duration-200"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Apoio */}
          <div>
            <p className="text-areia/25 text-[10px] tracking-[0.22em] uppercase mb-5">Apoio institucional</p>
            <div className="flex flex-wrap gap-2">
              {apoios.map((a) => (
                <span
                  key={a}
                  className="text-areia/25 text-[10px] tracking-[0.1em] border border-areia/[0.07] px-2.5 py-1 rounded-sm"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-areia/18 text-[10px] tracking-[0.15em]">
            © 2026 VIVÁ CIA DE DANÇA — TODOS OS DIREITOS RESERVADOS
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-areia/18 text-[10px] tracking-[0.1em] hover:text-areia/35 transition-colors">
              POLÍTICA DE PRIVACIDADE
            </a>
            <a href="#" className="text-areia/18 text-[10px] tracking-[0.1em] hover:text-areia/35 transition-colors">
              TERMOS DE USO
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
