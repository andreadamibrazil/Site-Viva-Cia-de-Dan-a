import type { Metadata } from "next";
import { InternacionalView } from "../InternacionalView";

const URL_BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://site-viva-cia-de-dan-a.vercel.app";
const TITULO = "International — Vivá Cia de Dança";
const DESC =
  "Vivá Cia de Dança international catalogue: repertoire ready to tour (Pé de Cachimbo and Sobre as Ondas do Mar), Corpo Brinquedo workshops, residencies, commissioned choreography and co-production. How to book, and track record.";

export const metadata: Metadata = {
  title: TITULO,
  description: DESC,
  alternates: {
    canonical: `${URL_BASE}/internacional/en`,
    languages: {
      "pt-BR": `${URL_BASE}/internacional`,
      en: `${URL_BASE}/internacional/en`,
      es: `${URL_BASE}/internacional/es`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${URL_BASE}/internacional/en`,
    title: TITULO,
    description: DESC,
  },
};

export default function InternationalPage() {
  return <InternacionalView lang="en" />;
}
