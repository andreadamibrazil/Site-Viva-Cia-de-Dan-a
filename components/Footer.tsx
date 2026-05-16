import { Logo } from "./Logo";

const apoios = ["FUNARTE", "APRT", "Sesc", "Prefeitura RJ", "Rio Cultura"];

export function Footer() {
  return (
    <footer className="bg-terra pt-12 pb-6 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 pb-10 border-b border-areia/10">
          {/* Logo e nav */}
          <div>
            <Logo className="mb-6" />
            <nav className="flex flex-col gap-2">
              {["HISTÓRIA", "ESPETÁCULOS", "PÉ DE CACHIMBO", "CONTATO"].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase().replace(/\s/g, "-").replace("é", "e")}`}
                  className="text-areia/40 text-xs tracking-[0.15em] hover:text-dourado transition-colors"
                >
                  {l}
                </a>
              ))}
            </nav>
          </div>

          {/* Contato */}
          <div>
            <p className="text-areia/40 text-[10px] tracking-[0.2em] uppercase mb-4">Contato</p>
            <p className="text-areia/60 text-sm mb-1">contato@vivaciadedanca.com.br</p>
            <p className="text-areia/60 text-sm mb-4">+55 21 99999-9999</p>
            <p className="text-areia/40 text-xs leading-relaxed">
              Rio de Janeiro, RJ<br />Brasil
            </p>
          </div>

          {/* Apoio */}
          <div>
            <p className="text-areia/40 text-[10px] tracking-[0.2em] uppercase mb-4">Apoio</p>
            <div className="flex flex-wrap gap-3">
              {apoios.map((a) => (
                <span
                  key={a}
                  className="text-areia/30 text-xs border border-areia/10 px-2 py-1 rounded-sm"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-areia/25 text-[10px] tracking-[0.15em]">
            © 2026 VIVÁ CIA DE DANÇA. TODOS OS DIREITOS RESERVADOS.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-areia/25 text-[10px] tracking-[0.1em] hover:text-areia/50 transition-colors">
              POLÍTICA DE PRIVACIDADE
            </a>
            <a href="#" className="text-areia/25 text-[10px] tracking-[0.1em] hover:text-areia/50 transition-colors">
              TERMOS DE USO
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
