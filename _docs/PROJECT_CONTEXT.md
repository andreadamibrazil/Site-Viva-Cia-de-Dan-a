# PROJECT_CONTEXT.md — Vivá Cia de Dança · Site

Histórico de sessões, decisões e estado atual do projeto.

---

## Sobre o projeto

Site institucional da **Vivá Cia de Dança** — companhia de dança contemporânea fundada no Rio de Janeiro em 2012 por Carlos Fontinelle.

**Objetivo principal:** pitch para o SMC Nº 04 (Secretaria Municipal de Cultura RJ).
- Inscrição: 10138
- Valor solicitado: R$ 250.000
- Pitch: apresentação de 15 minutos com projeção do site

**Repositório:** https://github.com/andreadamibrazil/Site-Viva-Cia-de-Dan-a
**URL de produção:** https://site-viva-cia-de-dan-a.vercel.app

---

## Histórico de sessões

### 2026-05-18 — Deploy + Sanity Setup

- Migração de Netlify para Vercel (GitHub auto-deploy no push para `main`)
- Removido `output: "export"` do `next.config.ts` para habilitar API routes e draft mode
- Sanity Studio configurado em `/studio` com schemas:
  - `espetaculo`: titulo, ano, ordem, tag, emCartaz, foto, descricao
  - `noticia`: titulo, data, foto, resumo, conteudo, destaque
- Endpoints de draft mode configurados
- CORS configurado para o domínio Vercel
- Variáveis de ambiente definidas no Vercel

### 2026-05-22 — Redesign completo

- Redesign de 13 componentes: Nav, Hero, Manifesto, Numeros, MissaoVisao, Espetaculos, Timeline, PeDeCachimbo, Marquee, Impacto, Noticias, Newsletter, Footer
- Sistema de tags com auto-detecção de variante (dourado/verde/azul/neutro)
- Carousel com RAF loop para scroll infinito em Espetaculos
- Design system "Forte como a natureza":
  - Paleta: oceano, atmosfera, areia, brisa, dourado, verde, terra
  - Tipografia: Plus Jakarta Sans (display) + Inter (body)
  - Radius arquitetural: none/xs/sm/md/pill
  - Sombras tintadas com oceano

### 2026-06-10 — Audit visual + Animações + Espetáculos Sanity (MAIS RECENTE)

- Audit completo de 11 arquivos
- `prefers-reduced-motion` compliance adicionado em todos os componentes
- Marquee reescrito com `useAnimationFrame` + `useVelocity`
- Timeline: scroll-driven via `useScroll + useTransform`
- Hero: scroll indicator com fade ao rolar, parallax na foto
- Manifesto: text mask com blur effect (y: "100%" → 0, blur 6px → 0)
- MissaoVisao: foto strip com clip-path animation + parallax
- **Espetaculos: puxa exclusivamente do Sanity** (fallback hardcoded removido)
- WebP optimization: hero.jpg 1.5MB → hero.webp 165KB (fotos estruturais)
- Seção Noticias desativada (componente existe, aguarda conteúdo)

---

## Estado atual (2026-06-10)

### Implementado e funcional

- [x] Nav dupla (hero + fixa pós-scroll) com hamburger mobile
- [x] Hero com parallax + CTA + scroll indicator
- [x] Manifesto (O Argumento) com text mask
- [x] Números: 4 stats com contador animado
- [x] Missão · Visão · Valores: foto strip + 3 pilares
- [x] Espetáculos: carousel infinito via Sanity
- [x] Timeline: scroll-driven
- [x] Pé de Cachimbo: seção âncora do espetáculo em cartaz
- [x] Marquee: ticker horizontal com valores da companhia
- [x] Impacto: números de impacto social
- [x] Footer: contato, nav, apoios institucionais
- [x] Variáveis de ambiente no Vercel
- [x] Build e deploy funcionando

### Pendente / próximas etapas

- [ ] **Cadastrar os 12 espetáculos no Sanity Studio** com fotos e tags
  - Lista: Flores, Entre Atos, Petite Danse, BoraDançar, Pé de Cachimbo (EM CARTAZ), Aquarela Carioca, Sobre as Ondas do Mar, Fina Camada & Mambembes, Entre Solos & Canções, Curu-MIM (SESC 2024), Raízes e Ancestralidade, Labirinthus Fantástico (EM CRIAÇÃO)
- [ ] **Ativar seção Notícias** — componente existe em `components/Noticias.tsx`, aguarda conteúdo no Sanity
- [ ] **Testar build no Vercel** após mudanças recentes
- [ ] Confirmar remote git local (repo renomeado no GitHub para `Site-Viva-Cia-de-Dan-a`)

---

## Decisões técnicas relevantes

| Decisão | Motivo |
|---|---|
| Vercel (não Netlify) | API routes e draft mode do Sanity precisam de SSR |
| Framer Motion (não GSAP) | Suficiente para o escopo, menor bundle |
| Carousel via RAF (não lib externa) | Controle total, sem overhead |
| Tailwind v4 com `@theme` (não `tailwind.config.ts`) | Padrão v4, tokens como CSS custom properties nativas |
| Server Components por padrão | Performance e SEO |
| Sanity v5 + next-sanity v12 | Versão mais recente, suporte a React 19 |
| WebP para fotos estruturais | 90% de redução de tamanho (1.5MB → 165KB por foto) |
| Noticias desativado (não removido) | Componente pronto, aguarda conteúdo — fácil reativar |

---

## Contexto da companhia

| Dado | Valor |
|---|---|
| Fundação | 2012 |
| Fundador | Carlos Fontinelle (+ 4 co-fundadores) |
| Sede | Rio de Janeiro, RJ |
| Espetáculos produzidos | 12 ativos, 21+ total |
| Anos consecutivos ativos | 14 (sem nenhum ano em branco) |
| Prêmios e editais | 21+ |
| "Pé de Cachimbo" | Em cartaz há 10+ anos, 165+ apresentações |
| Ecossistema | Sede do Movimento (escola) + Vivá (companhia) + MoviRio Festival + Fontinelle Criações |
