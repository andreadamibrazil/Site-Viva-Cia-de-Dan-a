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
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <div className="relative">
        <Nav />
        <Hero />
      </div>
      <Manifesto />
      <Numeros />
      <MissaoVisao />
      <Espetaculos />
      <Timeline />
      <PeDeCachimbo />
      <Marquee />
      <Impacto />
      <Noticias />
      <Newsletter />
      <Footer />
    </main>
  );
}
