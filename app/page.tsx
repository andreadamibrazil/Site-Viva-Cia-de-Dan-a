import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { Numeros } from "@/components/Numeros";
import { MissaoVisao } from "@/components/MissaoVisao";
import { Espetaculos } from "@/components/Espetaculos";
import { Timeline } from "@/components/Timeline";
import { PeDeCachimbo } from "@/components/PeDeCachimbo";
import { Marquee } from "@/components/Marquee";
import { Impacto } from "@/components/Impacto";
import { Noticias } from "@/components/Noticias";
import { Footer } from "@/components/Footer";
import { client } from "@/sanity/lib/client";
import { espetaculosQuery, noticiasQuery } from "@/sanity/lib/queries";
import type { EspetaculoType, NoticiaType } from "@/sanity/lib/queries";

export default async function Home() {
  const [espetaculos, noticias] = await Promise.all([
    client.fetch<EspetaculoType[]>(espetaculosQuery).catch(() => [] as EspetaculoType[]),
    client.fetch<NoticiaType[]>(noticiasQuery).catch(() => [] as NoticiaType[]),
  ]);

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
      <Impacto />
      <Noticias sanityNoticias={noticias} />
      <Footer />
    </main>
  );
}
