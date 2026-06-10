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
import { Footer } from "@/components/Footer";
import { client } from "@/sanity/lib/client";
import { espetaculosQuery } from "@/sanity/lib/queries";
import type { EspetaculoType } from "@/sanity/lib/queries";

export default async function Home() {
  const espetaculos = await client
    .fetch<EspetaculoType[]>(espetaculosQuery)
    .catch(() => [] as EspetaculoType[]);

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
      {/* <Noticias /> — inativo até implementação completa */}
      <Footer />
    </main>
  );
}
