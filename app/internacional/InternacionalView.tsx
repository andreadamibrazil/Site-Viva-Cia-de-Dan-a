import Image from "next/image";
import Link from "next/link";
import { SetHtmlLang } from "./SetHtmlLang";
import { COPY, FATOS, LANGS, type Lang } from "./content";

function Idiomas({ atual, escuro = false }: { atual: Lang; escuro?: boolean }) {
  return (
    <div
      className={
        escuro
          ? "flex items-center gap-1 rounded-pill border border-areia/25 p-1"
          : "flex items-center gap-1 rounded-pill border border-oceano/20 p-1"
      }
    >
      {LANGS.map((l) => {
        const ativo = l.code === atual;
        const base = "rounded-pill px-4 py-1.5 text-xs font-semibold tracking-widest uppercase";
        const cor = ativo
          ? "bg-dourado text-oceano"
          : escuro
            ? "text-areia/60 hover:text-areia"
            : "text-oceano/55 hover:text-oceano";
        return (
          <Link
            key={l.code}
            href={l.href}
            hrefLang={l.htmlLang}
            aria-current={ativo ? "page" : undefined}
            className={`${base} ${cor} transition-colors`}
          >
            {l.label}
          </Link>
        );
      })}
    </div>
  );
}

function Eyebrow({ children, cor = "text-dourado" }: { children: React.ReactNode; cor?: string }) {
  return <p className={`eyebrow ${cor}`}>{children}</p>;
}

export function InternacionalView({ lang }: { lang: Lang }) {
  const t = COPY[lang];
  const htmlLang = LANGS.find((l) => l.code === lang)?.htmlLang ?? "pt-BR";

  return (
    <main>
      <SetHtmlLang lang={htmlLang} />

      {/* Hero — banda oceano */}
      <section className="bg-oceano text-brisa px-6 pt-10 pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/"
              className="font-display text-sm font-bold uppercase tracking-[0.2em] text-areia/70 transition-colors hover:text-areia"
            >
              Vivá Cia de Dança
            </Link>
            <Idiomas atual={lang} escuro />
          </div>

          <div className="grid items-end gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Eyebrow>{t.kicker}</Eyebrow>
              <h1
                className="font-display mt-5 font-extrabold leading-[1.02] tracking-tight"
                style={{ fontSize: "var(--text-display-lg)" }}
              >
                {t.h1}
              </h1>
              <p className="mt-8 max-w-[62ch] text-base leading-relaxed text-areia/85 md:text-lg">
                {t.lead}
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={`mailto:${FATOS.email}`}
                  className="rounded-pill bg-dourado px-7 py-3.5 text-sm font-semibold text-oceano transition-transform hover:scale-[1.03]"
                >
                  {t.ctaContato}
                </a>
                <a
                  href={FATOS.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-pill border border-areia/50 px-7 py-3.5 text-sm font-semibold text-areia transition-transform hover:scale-[1.03]"
                >
                  {t.ctaVideo}
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <Image
                src="/fotos/curumim-palco.jpg"
                alt={
                  lang === "en"
                    ? "Vivá Cia de Dança performing on stage"
                    : lang === "es"
                      ? "Vivá Cia de Danza en escena"
                      : "Vivá Cia de Dança em cena"
                }
                width={1200}
                height={1500}
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="aspect-[4/5] w-full rounded-sm object-cover"
              />
            </div>
          </div>

          {/* Números — batem com a home de propósito */}
          <dl className="mt-20 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-areia/20 pt-12 md:grid-cols-4">
            {t.numeros.map((m) => (
              <div key={m.l}>
                <dt
                  className="font-display font-extrabold leading-none text-dourado"
                  style={{ fontSize: "var(--text-display-sm)" }}
                >
                  {m.n}
                </dt>
                <dd className="mt-3 max-w-[24ch] text-sm leading-snug text-areia/70">{m.l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Catálogo */}
      <section className="bg-brisa px-6 py-24 text-terra md:py-32">
        <div className="mx-auto max-w-7xl">
          <Eyebrow cor="text-atmosfera">{t.catalogoTitulo}</Eyebrow>
          <p className="mt-5 max-w-[64ch] text-lg leading-relaxed text-terra/75">{t.catalogoLead}</p>

          <div className="mt-16 space-y-20">
            {t.obras.map((obra, i) => (
              <article
                key={obra.titulo}
                className="grid items-start gap-10 border-t border-oceano/15 pt-10 lg:grid-cols-12"
              >
                <div className={`lg:col-span-5 ${i % 2 ? "lg:order-2" : ""}`}>
                  <Image
                    src={obra.foto}
                    alt={obra.alt}
                    width={1200}
                    height={900}
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="aspect-[4/3] w-full rounded-sm object-cover"
                  />
                </div>

                <div className="lg:col-span-7">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                    <h2
                      className="font-display font-extrabold leading-none tracking-tight text-oceano"
                      style={{ fontSize: "var(--text-display-md)" }}
                    >
                      {obra.titulo}
                    </h2>
                    <span className="font-display text-sm font-bold text-terra/45">{obra.ano}</span>
                  </div>
                  <p className="eyebrow mt-3 text-verde">{obra.tag}</p>
                  <p className="mt-5 max-w-[62ch] leading-relaxed text-terra/75">{obra.sinopse}</p>

                  <dl className="mt-7">
                    {obra.itens.map(([rot, val]) => (
                      <div
                        key={rot}
                        className="grid gap-1 border-t border-oceano/12 py-3 sm:grid-cols-[9rem_1fr] sm:gap-5"
                      >
                        <dt className="eyebrow text-atmosfera">{rot}</dt>
                        <dd className="text-sm leading-relaxed text-terra/75">{val}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="bg-areia px-6 py-24 text-terra md:py-28">
        <div className="mx-auto max-w-7xl">
          <Eyebrow cor="text-atmosfera">{t.servicosTitulo}</Eyebrow>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {t.servicos.map((s, i) => (
              <div key={s.titulo} className="border-t border-oceano/20 pt-6">
                <span className="font-display text-sm font-extrabold text-dourado">
                  {String(i + 3).padStart(2, "0")}
                </span>
                <h3 className="font-display mt-3 text-xl font-bold leading-tight text-oceano">
                  {s.titulo}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-terra/75">{s.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como contratar */}
      <section className="bg-brisa px-6 py-24 text-terra md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow cor="text-atmosfera">{t.contratarTitulo}</Eyebrow>
            <p className="mt-5 max-w-[46ch] text-lg leading-relaxed text-terra/75">
              {t.contratarLead}
            </p>
            <a
              href={`mailto:${FATOS.email}`}
              className="mt-8 inline-block rounded-pill bg-oceano px-7 py-3.5 text-sm font-semibold text-brisa transition-transform hover:scale-[1.03]"
            >
              {FATOS.email}
            </a>
          </div>
          <ul className="lg:col-span-7">
            {t.contratar.map((item) => (
              <li
                key={item}
                className="border-t border-oceano/15 py-5 text-base leading-snug text-terra/85"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Trajetória */}
      <section className="bg-oceano px-6 py-24 text-brisa md:py-32">
        <div className="mx-auto max-w-7xl">
          <Eyebrow>{t.trajetoriaTitulo}</Eyebrow>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {t.trajetoria.map((s) => (
              <div key={s.titulo} className="border-t border-areia/20 pt-6">
                <h3 className="font-display text-xl font-bold leading-tight text-areia">
                  {s.titulo}
                </h3>
                <p className="mt-3 max-w-[58ch] text-sm leading-relaxed text-areia/70">{s.texto}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 border-l-2 border-dourado pl-8">
            <h3 className="font-display text-xl font-bold text-areia">{t.acessTitulo}</h3>
            <p className="mt-3 max-w-[70ch] leading-relaxed text-areia/80">{t.acessTexto}</p>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="bg-areia px-6 py-24 text-terra md:py-28">
        <div className="mx-auto max-w-7xl">
          <h2
            className="font-display font-extrabold leading-tight tracking-tight text-oceano"
            style={{ fontSize: "var(--text-display-sm)" }}
          >
            {t.contatoTitulo}
          </h2>
          <p className="mt-5 max-w-[56ch] text-lg leading-relaxed text-terra/75">{t.contatoLead}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={`mailto:${FATOS.email}`}
              className="rounded-pill bg-oceano px-7 py-3.5 text-sm font-semibold text-brisa transition-transform hover:scale-[1.03]"
            >
              {FATOS.email}
            </a>
            <a
              href={FATOS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-pill border border-oceano/40 px-7 py-3.5 text-sm font-semibold text-oceano transition-transform hover:scale-[1.03]"
            >
              @vivaciadedanca
            </a>
            <a
              href={FATOS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-pill border border-oceano/40 px-7 py-3.5 text-sm font-semibold text-oceano transition-transform hover:scale-[1.03]"
            >
              YouTube
            </a>
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-between gap-5 border-t border-oceano/20 pt-8">
            <Link
              href="/"
              className="eyebrow text-oceano/60 transition-colors hover:text-oceano"
            >
              {t.voltar}
            </Link>
            <Idiomas atual={lang} />
          </div>
        </div>
      </section>

      {/* Rodapé próprio: o Footer da home usa âncoras que não existem aqui
          (#historia, #espetaculos, #pe-de-cachimbo, #impacto) e tem rótulos
          fixos em português — daria 12 links mortos nas três rotas. */}
      <footer className="bg-oceano px-6 py-14 text-brisa">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-md text-sm leading-relaxed text-areia/60">{t.rodape}</p>
          <div className="flex flex-wrap items-center gap-5">
            <a
              href={`mailto:${FATOS.email}`}
              className="text-sm font-semibold text-areia/80 transition-colors hover:text-areia"
            >
              {FATOS.email}
            </a>
            <a
              href={FATOS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-areia/80 transition-colors hover:text-areia"
            >
              Instagram
            </a>
            <a
              href={FATOS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-areia/80 transition-colors hover:text-areia"
            >
              YouTube
            </a>
            <Link
              href="/"
              className="text-sm font-semibold text-areia/80 transition-colors hover:text-areia"
            >
              {t.voltar}
            </Link>
            <Idiomas atual={lang} escuro />
          </div>
        </div>
      </footer>
    </main>
  );
}
