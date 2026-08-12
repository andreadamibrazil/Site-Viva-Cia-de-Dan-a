import type { Metadata } from "next";
import { InternacionalView } from "../InternacionalView";

const URL_BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://site-viva-cia-de-dan-a.vercel.app";
const TITULO = "Internacional — Vivá Cia de Danza";
const DESC =
  "Catálogo internacional de Vivá Cia de Danza: repertorio listo para circular (Pé de Cachimbo y Sobre as Ondas do Mar), talleres Corpo Brinquedo, residencias, coreografía por encargo y coproducción. Cómo contratar y trayectoria.";

export const metadata: Metadata = {
  title: TITULO,
  description: DESC,
  alternates: {
    canonical: `${URL_BASE}/internacional/es`,
    languages: {
      "pt-BR": `${URL_BASE}/internacional`,
      en: `${URL_BASE}/internacional/en`,
      es: `${URL_BASE}/internacional/es`,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: `${URL_BASE}/internacional/es`,
    title: TITULO,
    description: DESC,
  },
};

export default function InternacionalEsPage() {
  return <InternacionalView lang="es" />;
}
