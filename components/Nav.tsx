"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { Logo } from "./Logo";

type NavLink = { label: string; href: string; num: string };

const links: NavLink[] = [
  { label: "História",        href: "#historia",       num: "01" },
  { label: "Espetáculos",     href: "#espetaculos",    num: "02" },
  { label: "Pé de Cachimbo",  href: "#pe-de-cachimbo", num: "03" },
  { label: "Contato",         href: "#contato",        num: "04" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const { scrollYProgress }     = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const toggle = () => setOpen((v) => !v);
  const close  = () => setOpen(false);

  return (
    <>
      {/* Barra de progresso de scroll */}
      <motion.div
        className="fixed top-0 left-0 h-[2px] bg-dourado z-[70] origin-left pointer-events-none"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Nav fixa — desliza após scroll */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 border-b border-areia/[0.06]"
        initial={false}
        animate={{ y: scrolled ? 0 : -80, opacity: scrolled ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{
          backgroundColor: "rgba(6,43,79,0.94)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          pointerEvents: scrolled ? "auto" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between w-full">
          <Logo size="md" />
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-[11px] tracking-[0.2em] text-areia/70 hover:text-dourado transition-colors duration-200 uppercase"
                >
                  {l.label}
                </a>
              ))}
            </div>
            <div className="md:hidden">
              <Hamburger open={open} onClick={toggle} />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Nav no hero — logo grande, links bem visíveis */}
      <div className="absolute top-0 left-0 right-0 z-40 h-20">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <Logo size="lg" />
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-[11px] tracking-[0.22em] text-white/85 hover:text-dourado transition-colors duration-200 uppercase font-medium"
                  style={{ textShadow: "0 1px 8px rgba(6,43,79,0.5)" }}
                >
                  {l.label}
                </a>
              ))}
            </div>
            <div className="md:hidden">
              <Hamburger open={open} onClick={toggle} />
            </div>
          </div>
        </div>
      </div>

      {/* Overlay full-screen */}
      <AnimatePresence>
        {open && <MenuOverlay links={links} onClose={close} />}
      </AnimatePresence>
    </>
  );
}

/* Botão hamburguer — transforma em X quando aberto */
function Hamburger({ open, onClick }: { open: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label={open ? "Fechar menu" : "Abrir menu"}
      aria-expanded={open}
      className="relative z-[65] w-10 h-10 flex flex-col items-center justify-center gap-[5px] cursor-pointer"
    >
      <span
        className="block w-6 h-[1.5px] bg-white origin-center"
        style={{
          transition: "transform 0.32s cubic-bezier(0.16, 1, 0.3, 1)",
          transform: open ? "translateY(6.5px) rotate(45deg)" : "none",
        }}
      />
      <span
        className="block w-4 h-[1.5px] bg-white self-end"
        style={{
          transition: "opacity 0.2s ease",
          opacity: open ? 0 : 1,
        }}
      />
      <span
        className="block w-6 h-[1.5px] bg-white origin-center"
        style={{
          transition: "transform 0.32s cubic-bezier(0.16, 1, 0.3, 1)",
          transform: open ? "translateY(-6.5px) rotate(-45deg)" : "none",
        }}
      />
    </button>
  );
}

/* Overlay de navegação full-screen */
function MenuOverlay({ links, onClose }: { links: NavLink[]; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[55] flex flex-col"
      style={{ backgroundColor: "#062B4F" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22, ease: "easeInOut" }}
    >
      {/* Halo dourado — presença sem peso */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 90% 5%, rgba(199,154,66,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Links de navegação */}
      <nav className="relative z-10 flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24">
        {links.map((link, i) => (
          <motion.div
            key={link.href}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.48,
              delay: 0.05 + i * 0.07,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <a
              href={link.href}
              onClick={onClose}
              className="group flex items-baseline gap-5 py-5 border-b border-areia/[0.07]"
              style={i === 0 ? { borderTop: "1px solid rgba(237,229,216,0.07)" } : undefined}
            >
              <span className="font-mono text-dourado/25 text-xs w-7 shrink-0 select-none tabular-nums">
                {link.num}
              </span>
              <span
                className="font-display font-light italic text-areia/80 leading-none
                           group-hover:text-dourado group-hover:translate-x-1.5
                           transition-[color,transform] duration-300"
                style={{
                  fontSize: "clamp(30px, 5.5vw, 66px)",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                {link.label}
              </span>
            </a>
          </motion.div>
        ))}
      </nav>

      {/* Rodapé do menu */}
      <div className="relative z-10 flex items-end justify-between px-8 md:px-16 lg:px-24 pb-10 md:pb-14">
        <p className="text-areia/20 text-[10px] tracking-[0.22em] uppercase">
          Rio de Janeiro · Brasil · 2012–2026
        </p>
        <p className="text-areia/15 text-[10px] tracking-[0.2em] uppercase">
          SMC Nº 04 · Inscrição 10138
        </p>
      </div>
    </motion.div>
  );
}
