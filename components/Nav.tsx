"use client";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const links = [
  { label: "HISTÓRIA", href: "#historia" },
  { label: "ESPETÁCULOS", href: "#espetaculos" },
  { label: "PÉ DE CACHIMBO", href: "#pe-de-cachimbo" },
  { label: "CONTATO", href: "#contato" },
];

export function Nav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Nav fixa que aparece após scroll */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: "rgba(6,43,79,0.92)",
          backdropFilter: "blur(12px)",
          transform: visible ? "translateY(0)" : "translateY(-100%)",
          opacity: visible ? 1 : 0,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Logo />
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[11px] tracking-[0.2em] text-areia/70 hover:text-dourado transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Nav no hero (sempre visível) */}
      <div className="absolute top-0 left-0 right-0 z-40 px-6 py-6 flex items-center justify-between">
        <Logo />
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[11px] tracking-[0.2em] text-areia/70 hover:text-dourado transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
