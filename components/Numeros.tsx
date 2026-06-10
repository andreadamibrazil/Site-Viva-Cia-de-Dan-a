"use client";
import { useEffect, useRef, useState } from "react";
import { useInView, motion, useReducedMotion } from "framer-motion";

const stats = [
  { value: 12,  suffix: "",  label: "ANOS DE HISTÓRIA" },
  { value: 21,  suffix: "+", label: "PRÊMIOS E EDITAIS" },
  { value: 165, suffix: "+", label: "APRESENTAÇÕES DO ESPETÁCULO DE ESTREIA" },
  { value: 12,  suffix: "",  label: "ESPETÁCULOS PRODUZIDOS" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const shouldReduce = useReducedMotion();
  const [count, setCount] = useState(shouldReduce ? value : 0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || shouldReduce) return;
    const duration = 2000;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value, shouldReduce]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function Numeros() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduce = useReducedMotion();

  const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <section ref={ref} className="bg-brisa py-24 md:py-36 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={shouldReduce ? false : { opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              className="p-10 md:p-14 border-b border-r border-terra/10 last:border-r-0 [&:nth-child(2)]:border-r-0 [&:nth-child(3)]:border-b-0 [&:nth-child(4)]:border-b-0 hover:-translate-y-1.5 transition-transform duration-500"
            >
              <div
                className="font-display font-bold leading-none text-dourado"
                style={{ fontSize: "clamp(64px, 8vw, 120px)" }}
              >
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              {/* era text-terra/60 — bumped para /75 para passar WCAG AA em 12px */}
              <p className="text-terra/75 text-xs tracking-[0.15em] mt-3 max-w-[160px]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={shouldReduce ? false : { opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-terra/10 text-center"
        >
          <p className="text-terra/50 text-sm italic">
            Companhia fundada a partir do Prêmio Novos Coreógrafos da Prefeitura do Rio de Janeiro · 2012 · Carlos Fontinelle
          </p>
        </motion.div>
      </div>
    </section>
  );
}
