"use client";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

const items = [
  "Rio de Janeiro",
  "Copa do Mundo FIFA 2014",
  "Maracanã",
  "Olimpíadas Rio 2016",
  "SESC RJ",
  "Prêmio Arte & Escola",
  "Teatro Carlos Gomes",
  "MICA Argentina 2023",
  "Centro Cultural Banco do Brasil",
  "MoviRio Festival",
  "Praça Tiradentes",
  "Prêmio Zilka Salaberry",
  "Teatro Municipal RJ",
  "Sesc Palladium",
  "Buenos Aires",
  "27 cidades alcançadas",
  "48 equipamentos culturais",
  "Parque Lage",
  "Fomento Cidade Olímpica",
  "São Paulo",
];

export function Marquee() {
  const shouldReduce = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const xRef = useRef(0);
  const rafRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el || shouldReduce) return;

    const animate = (now: number) => {
      const delta = lastTimeRef.current ? now - lastTimeRef.current : 16;
      lastTimeRef.current = now;
      xRef.current -= 0.038 * delta;
      const half = el.scrollWidth / 2;
      if (half > 0 && Math.abs(xRef.current) >= half) xRef.current += half;
      el.style.transform = `translateX(${xRef.current}px)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [shouldReduce]);

  if (shouldReduce) {
    return (
      <div className="bg-dourado py-3.5 overflow-hidden" aria-hidden="true">
        <p className="text-oceano text-[11px] tracking-[0.2em] uppercase font-semibold text-center px-6 truncate">
          {items.slice(0, 8).join(" · ")}
        </p>
      </div>
    );
  }

  const row = [...items, ...items];

  return (
    <div className="bg-dourado py-3.5 overflow-hidden select-none" aria-hidden="true">
      <div ref={trackRef} className="flex whitespace-nowrap will-change-transform">
        {row.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center shrink-0 text-oceano text-[11px] tracking-[0.2em] uppercase font-semibold"
          >
            {item}
            <span className="mx-4 text-oceano/30 font-light">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
