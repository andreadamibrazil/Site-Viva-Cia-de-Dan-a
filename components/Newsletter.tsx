"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export function Newsletter() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSent(true);
  };

  return (
    <section
      ref={ref}
      className="bg-terra py-16 px-6"
      id="contato"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-areia/80 text-sm font-semibold uppercase tracking-[0.15em] mb-1">
            Receba nossas novidades
          </p>
          <p className="text-areia/50 text-sm">
            Cadastre-se e acompanhe nossa programação e projetos.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="flex gap-0 w-full max-w-md"
        >
          {sent ? (
            <p className="text-dourado text-sm tracking-wide">✓ Obrigado! Você receberá nossas novidades.</p>
          ) : (
            <>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu e-mail"
                required
                className="flex-1 bg-transparent border border-areia/20 border-r-0 px-4 py-3 text-areia text-sm placeholder:text-areia/30 focus:outline-none focus:border-dourado/50 transition-colors"
              />
              <button
                type="submit"
                className="px-5 py-3 bg-dourado text-oceano text-xs font-bold tracking-[0.15em] uppercase hover:bg-areia transition-colors whitespace-nowrap"
              >
                Inscrever →
              </button>
            </>
          )}
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-4"
        >
          {["Instagram", "YouTube", "Facebook"].map((s) => (
            <a
              key={s}
              href="#"
              className="text-areia/40 hover:text-dourado transition-colors text-xs tracking-[0.1em] uppercase"
            >
              {s[0]}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
