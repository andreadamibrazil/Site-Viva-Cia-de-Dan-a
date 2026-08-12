import type { Metadata } from "next";
import { InternacionalView } from "./InternacionalView";

const URL_BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://site-viva-cia-de-dan-a.vercel.app";
const TITULO = "Internacional — Vivá Cia de Dança";
const DESC =
  "Catálogo internacional da Vivá Cia de Dança: repertório pronto para circular (Pé de Cachimbo e Sobre as Ondas do Mar), oficinas Corpo Brinquedo, residências, coreografia por encomenda e coprodução. Como contratar e trajetória.";

export const metadata: Metadata = {
  title: TITULO,
  description: DESC,
  alternates: {
    canonical: `${URL_BASE}/internacional`,
    languages: {
      "pt-BR": `${URL_BASE}/internacional`,
      en: `${URL_BASE}/internacional/en`,
      es: `${URL_BASE}/internacional/es`,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: `${URL_BASE}/internacional`,
    title: TITULO,
    description: DESC,
  },
};

export default function InternacionalPage() {
  return <InternacionalView lang="pt" />;
}
