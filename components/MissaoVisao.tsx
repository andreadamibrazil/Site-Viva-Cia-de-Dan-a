"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const cols = [
  {
    tag: "MISSÃO",
    accent: "#526B52",
    text: "Criar experiências artísticas que conectem corpo, memória, território e transformação social, democratizando o acesso à cultura e formando novas gerações através da arte contemporânea brasileira.",
  },
  {
    tag: "VISÃO",
    accent: "#006DB2",
    text: "Ser referência nacional em criação artística, formação cultural e impacto social, construindo uma dança contemporânea brasileira conectada à memória, à diversidade e ao futuro.",
  },
  {
    tag: "VALORES",
    accent: "#C79A42",
    items: [
      "Arte como direito",
      "Formação humana",
      "Continuidade",
      "Acessibilidade real",
      "Sustentabilidade",
      "Ancestralidade",
      "Coletividade",
      "Território",
    ],
  },
];

export function MissaoVisao() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-oceano py-24 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-0 items-stretch">
          {/* Foto placeholder esquerda */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative min-h-[320px] md:min-h-[480px] overflow-hidden"
            style={{
              background: "linear-gradient(180deg, #0a3d6b 0%, #062B4F 100%)",
            }}
          >
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse at 50% 60%, rgba(199,154,66,0.2) 0%, transparent 70%)",
              }}
            />
            <div className="absolute bottom-8 left-8">
              <p className="text-areia/40 text-xs tracking-[0.2em] uppercase">
                Rio de Janeiro · 2012–2026
              </p>
            </div>
          </motion.div>

          {/* Colunas de missão/visão/valores */}
          <div className="grid grid-cols-3 bg-brisa">
            {cols.map((col, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 md:p-8 border-r border-terra/10 last:border-r-0 flex flex-col gap-4"
              >
                <div
                  className="h-[2px] w-8"
                  style={{ backgroundColor: col.accent }}
                />
                <p
                  className="text-[10px] tracking-[0.25em] font-semibold"
                  style={{ color: "#C79A42" }}
                >
                  {col.tag}
                </p>
                {col.text ? (
                  <>
                    <p className="text-terra/70 text-sm leading-relaxed">{col.text}</p>
                    <a
                      href="#"
                      className="text-xs tracking-[0.1em] text-atmosfera mt-auto hover:text-dourado transition-colors"
                    >
                      SAIBA MAIS →
                    </a>
                  </>
                ) : (
                  <ul className="space-y-1.5">
                    {col.items!.map((item) => (
                      <li key={item} className="text-terra/70 text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
