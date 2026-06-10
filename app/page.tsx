import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { Numeros } from "@/components/Numeros";
import { MissaoVisao } from "@/components/MissaoVisao";
import { Espetaculos } from "@/components/Espetaculos";
import { Timeline } from "@/components/Timeline";
import { PeDeCachimbo } from "@/components/PeDeCachimbo";
import { Marquee } from "@/components/Marquee";
import { Direcao } from "@/components/Direcao";
import { Impacto } from "@/components/Impacto";
import { Clipping } from "@/components/Clipping";
import { Footer } from "@/components/Footer";
import { client } from "@/sanity/lib/client";
import {
  espetaculosQuery,
  clippingsQuery,
  direcaoQuery,
} from "@/sanity/lib/queries";
import type { EspetaculoType, ClippingType, PessoaType } from "@/sanity/lib/queries";
import { fetchOgImage } from "@/lib/og";

export default async function Home() {
  const [espetaculos, clippings, direcao] = await Promise.all([
    client.fetch<EspetaculoType[]>(espetaculosQuery).catch(() => [] as EspetaculoType[]),
    client.fetch<ClippingType[]>(clippingsQuery).catch(() => [] as ClippingType[]),
    client.fetch<PessoaType>(direcaoQuery).catch(() => null),
  ]);

  const ogImages: Record<string, string> = {};
  await Promise.all(
    clippings
      .filter((c) => !c.imagem)
      .map(async (c) => {
        const img = await fetchOgImage(c.url);
        if (img) ogImages[c._id] = img;
      })
  );

  return (
    <main>
      <div className="relative">
        <Nav />
        <Hero />
      </div>
      <Manifesto />
      <Numeros />
      <MissaoVisao />
      <Espetaculos sanityShows={espetaculos} />
      <Timeline />
      <PeDeCachimbo />
      <Marquee />
      <Direcao pessoa={direcao} />
      <Impacto />
      <Clipping items={clippings} ogImages={ogImages} />
      <Footer />
    </main>
  );
}
