import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CITACOES,
  CONTATO,
  ESPECIALIZADA,
  GRANDE_IMPRENSA,
  IMPRENSA_AMAZONAS,
  MANIFESTO,
  RECONHECIMENTOS,
  REGIONAL,
  REGISTROS,
  type Materia,
} from "./content";

const URL_BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://site-viva-cia-de-dan-a.vercel.app";
const TITULO = "Imprensa e registros — Vivá Cia de Dança";
const DESC =
  "O que a imprensa e os registros públicos dizem sobre a Vivá Cia de Dança: matérias em O Globo, Agência Brasil, Jornal do Brasil, A Crítica e portais de dança, mais registros da FUNARTE, do Centro Coreográfico, do SESI-SP e do Diário Oficial da União. Cada item com link conferido.";

export const metadata: Metadata = {
  title: TITULO,
  description: DESC,
  alternates: { canonical: `${URL_BASE}/imprensa` },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: `${URL_BASE}/imprensa`,
    title: TITULO,
    description: DESC,
  },
};

function Eyebrow({ children, cor = "text-dourado" }: { children: React.ReactNode; cor?: string }) {
  return <p className={`eyebrow ${cor}`}>{children}</p>;
}

function Lista({ itens }: { itens: Materia[] }) {
  return (
    <ul className="mt-8">
      {itens.map((m) => (
        <li key={m.url} className="border-t border-oceano/15 py-5">
          <a
            href={m.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid gap-2 sm:grid-cols-[13rem_1fr] sm:gap-6"
          >
            <div>
              <p className="font-display text-sm font-bold text-oceano">{m.veiculo}</p>
              <p className="mt-0.5 text-xs uppercase tracking-widest text-terra/45">{m.data}</p>
            </div>
            <div>
              <p className="leading-snug text-terra/85 group-hover:text-atmosfera">
                {m.titulo} <span aria-hidden>↗</span>
              </p>
              <p className="mt-1 text-sm text-terra/55">{m.assunto}</p>
            </div>
          </a>
        </li>
      ))}
      <li className="border-t border-oceano/15" />
    </ul>
  );
}

export default function ImprensaPage() {
  return (
    <main>
      {/* Abertura */}
      <section className="bg-oceano px-6 pt-10 pb-24 text-brisa md:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/"
              className="font-display text-sm font-bold uppercase tracking-[0.2em] text-areia/70 transition-colors hover:text-areia"
            >
              Vivá Cia de Dança
            </Link>
            <Link
              href="/internacional"
              className="rounded-pill border border-areia/40 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-areia/80 transition-colors hover:text-areia"
            >
              International · EN / ES
            </Link>
          </div>

          <div className="grid items-end gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Eyebrow>Imprensa e registros públicos</Eyebrow>
              <h1
                className="font-display mt-5 font-extrabold leading-[1.02] tracking-tight"
                style={{ fontSize: "var(--text-display-lg)" }}
              >
                O que já foi escrito sobre a Vivá
              </h1>
            </div>
            <div className="lg:col-span-5">
              <Image
                src="/fotos/curumim-red-stage.jpg"
                alt="Vivá Cia de Dança em cena, em luz vermelha"
                width={1200}
                height={900}
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="aspect-[4/3] w-full rounded-sm object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="bg-brisa px-6 py-24 text-terra md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Eyebrow cor="text-atmosfera">Uma companhia de repertório</Eyebrow>
            </div>
            <div className="lg:col-span-8">
              {MANIFESTO.map((p, i) => (
                <p
                  key={p.slice(0, 24)}
                  className={
                    i === 0
                      ? "text-xl leading-relaxed text-terra/90 md:text-2xl"
                      : "mt-6 leading-relaxed text-terra/75"
                  }
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clipping */}
      <section className="bg-areia px-6 py-24 text-terra md:py-28">
        <div className="mx-auto max-w-7xl">
          <Eyebrow cor="text-atmosfera">Grande imprensa e diários</Eyebrow>
          <Lista itens={GRANDE_IMPRENSA} />

          <div className="mt-20">
            <Eyebrow cor="text-atmosfera">Imprensa do Amazonas · Teatro Amazonas</Eyebrow>
            <p className="mt-4 max-w-[62ch] leading-relaxed text-terra/70">
              Em 2017 a companhia abriu o 7º Festival Amazonas de Dança no Teatro Amazonas, com
              Sobre as Ondas do Mar. Foi a estreia do diretor, amazonense, no palco da sua cidade
              depois de 21 anos morando no Rio.
            </p>
            <Lista itens={IMPRENSA_AMAZONAS} />
          </div>

          <div className="mt-20">
            <Eyebrow cor="text-atmosfera">Portais especializados em dança e rádio pública</Eyebrow>
            <Lista itens={ESPECIALIZADA} />
          </div>

          <div className="mt-20">
            <Eyebrow cor="text-atmosfera">Imprensa do Rio, Niterói e Baixada</Eyebrow>
            <Lista itens={REGIONAL} />
          </div>
        </div>
      </section>

      {/* Citações */}
      <section className="bg-oceano px-6 py-24 text-brisa md:py-32">
        <div className="mx-auto max-w-7xl">
          <Eyebrow>Trechos</Eyebrow>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {CITACOES.map((c) => (
              <figure key={c.fonte} className="border-l-2 border-dourado pl-7">
                <blockquote
                  className="font-display leading-snug text-areia"
                  style={{ fontSize: "var(--text-heading)" }}
                >
                  “{c.texto}”
                </blockquote>
                <figcaption className="mt-4">
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold uppercase tracking-widest text-dourado transition-opacity hover:opacity-75"
                  >
                    {c.fonte} ↗
                  </a>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Registros oficiais */}
      <section className="bg-brisa px-6 py-24 text-terra md:py-28">
        <div className="mx-auto max-w-7xl">
          <Eyebrow cor="text-atmosfera">Registros oficiais e institucionais</Eyebrow>
          <p className="mt-5 max-w-[68ch] text-lg leading-relaxed text-terra/75">
            Não são matérias de imprensa: são páginas de órgãos públicos e instituições onde a
            trajetória da companhia está registrada. Servem a quem precisa conferir.
          </p>
          <ul className="mt-10">
            {REGISTROS.map((r) => (
              <li key={r.url} className="border-t border-oceano/15 py-5">
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid gap-2 sm:grid-cols-[19rem_1fr] sm:gap-6"
                >
                  <p className="font-display text-sm font-bold text-oceano group-hover:text-atmosfera">
                    {r.orgao} <span aria-hidden>↗</span>
                  </p>
                  <p className="text-sm leading-relaxed text-terra/75">{r.o_que}</p>
                </a>
              </li>
            ))}
            <li className="border-t border-oceano/15" />
          </ul>
        </div>
      </section>

      {/* Reconhecimentos */}
      <section className="bg-areia px-6 py-24 text-terra md:py-28">
        <div className="mx-auto max-w-7xl">
          <Eyebrow cor="text-atmosfera">Prêmios, editais e reconhecimentos</Eyebrow>
          <ul className="mt-10">
            {RECONHECIMENTOS.map(([ano, titulo, detalhe]) => (
              <li
                key={ano + titulo}
                className="grid gap-1 border-t border-oceano/15 py-4 sm:grid-cols-[5rem_1fr_1fr] sm:gap-6"
              >
                <span className="font-display text-lg font-extrabold leading-none text-dourado">
                  {ano}
                </span>
                <span className="font-semibold leading-snug text-oceano">{titulo}</span>
                <span className="text-sm leading-snug text-terra/65">{detalhe}</span>
              </li>
            ))}
            <li className="border-t border-oceano/15" />
          </ul>
        </div>
      </section>

      {/* Contato para imprensa */}
      <section className="bg-oceano px-6 py-24 text-brisa md:py-28">
        <div className="mx-auto max-w-7xl">
          <h2
            className="font-display font-extrabold leading-tight tracking-tight"
            style={{ fontSize: "var(--text-display-sm)" }}
          >
            Contato para imprensa
          </h2>
          <p className="mt-5 max-w-[58ch] text-lg leading-relaxed text-areia/85">
            Direção e coreografia: Carlos Fontinelle. Atendemos em português, espanhol e inglês, e
            enviamos fotos em alta, ficha técnica e vídeo integral sob demanda.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={`mailto:${CONTATO.email}`}
              className="rounded-pill bg-dourado px-7 py-3.5 text-sm font-semibold text-oceano transition-transform hover:scale-[1.03]"
            >
              {CONTATO.email}
            </a>
            <a
              href={`mailto:${CONTATO.emailDirecao}`}
              className="rounded-pill border border-areia/50 px-7 py-3.5 text-sm font-semibold text-areia transition-transform hover:scale-[1.03]"
            >
              {CONTATO.emailDirecao}
            </a>
            <a
              href={`https://wa.me/${CONTATO.telefoneLink}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-pill border border-areia/50 px-7 py-3.5 text-sm font-semibold text-areia transition-transform hover:scale-[1.03]"
            >
              {CONTATO.telefone}
            </a>
            <a
              href={CONTATO.videoPortfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-pill border border-areia/50 px-7 py-3.5 text-sm font-semibold text-areia transition-transform hover:scale-[1.03]"
            >
              Portfólio em vídeo
            </a>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-6 border-t border-areia/20 pt-8 text-sm">
            <Link href="/" className="text-areia/70 transition-colors hover:text-areia">
              Site da companhia
            </Link>
            <Link href="/internacional" className="text-areia/70 transition-colors hover:text-areia">
              Área internacional · EN / ES
            </Link>
            <a
              href={CONTATO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-areia/70 transition-colors hover:text-areia"
            >
              Instagram
            </a>
            <a
              href={CONTATO.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-areia/70 transition-colors hover:text-areia"
            >
              YouTube
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
