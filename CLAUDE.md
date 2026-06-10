@AGENTS.md

# CLAUDE.md — Vivá Cia de Dança · Site

Instruções para o Claude Code neste projeto. Ler antes de qualquer implementação.

---

## Stack

| Camada | Tecnologia | Versão |
|---|---|---|
| Framework | Next.js | ^16.2.6 |
| Runtime | React | 19.2.6 |
| Estilização | Tailwind CSS | v4 (via `@theme` em globals.css) |
| Animações | Framer Motion | ^12 |
| CMS | Sanity | v5 + next-sanity v12 |
| Imagens | @sanity/image-url | v2 |
| Deploy | Vercel | GitHub auto-deploy |
| Linguagem | TypeScript | strict |

---

## Regras absolutas do stack

### Tailwind CSS v4

Tokens definidos em `app/globals.css` via `@theme {}` — não em `tailwind.config.js`.

```css
/* Correto — usar token */
className="bg-oceano text-areia"

/* Errado — nunca hex direto no JSX */
className="bg-[#062B4F]"
```

Exceções aceitas: valores inline `style={{}}` para animações dinâmicas (ex: `clamp()` em fontSize) e valores de opacidade (ex: `rgba(6,43,79,0.55)` em gradients complexos no `style`).

### Componentes

- **Server Components por padrão.** Adicionar `"use client"` somente quando necessário (hooks, eventos, animações Framer Motion, scroll).
- **clsx para classes condicionais** — não template string com ternário.
- **Imagens do Sanity via `urlFor()`** do `@/sanity/lib/image`. Nunca URL direta do CDN.
- **`next/image` para todas as imagens** — nunca `<img>` diretamente.
- **Alt text obrigatório** em toda imagem significativa; `aria-hidden="true"` em decorativas.

### Animações

- **`useReducedMotion()` em todo componente com animação.** Sem exceção.
- Pattern obrigatório:
  ```tsx
  const shouldReduce = useReducedMotion();
  
  // Em initial:
  initial={shouldReduce ? false : { opacity: 0, y: 20 }}
  
  // Em whileHover/whileTap:
  whileHover={shouldReduce ? {} : { scale: 1.03 }}
  ```
- Animar apenas `transform` e `opacity` — nunca `width`, `height`, `top`, `left`.
- Easing padrão: `[0.16, 1, 0.3, 1]` (expo-out).

### Sanity

- **Nunca hardcodar conteúdo** que pertence ao CMS (títulos de espetáculos, datas, fotos).
- **Nunca remover queries GROQ** de `sanity/lib/queries.ts` — queries quebradas = páginas em branco.
- **Nunca remover schemas** de `sanity/schemaTypes/` — breaking change no Studio.
- Fetch de dados: sempre no Server Component pai, passado via props para Client Components.
- Pattern de fetch com fallback:
  ```tsx
  const items = await client
    .fetch<Type[]>(query)
    .catch(() => [] as Type[]);
  ```

---

## Arquivos sensíveis

| Arquivo | Risco | Regra |
|---|---|---|
| `sanity/schemaTypes/` | Breaking change no CMS editor | Nunca remover campos sem migração |
| `sanity/lib/queries.ts` | Queries quebradas = seções em branco | Testar após qualquer mudança |
| `sanity.config.ts` | Quebra o Sanity Studio | Não alterar sem necessidade |
| `app/globals.css` | Tokens do design system | Não remover tokens existentes |
| `app/layout.tsx` | Afeta o site inteiro | Mudanças com cuidado |
| `next.config.ts` | Build e imagens do Sanity | `remotePatterns` de cdn.sanity.io é obrigatório |

---

## Estrutura de componentes

```
app/
├── layout.tsx        — fonts, metadata, SanityLive (quando ativo)
├── globals.css       — @theme tokens: cores, fontes, radius, sombras
└── page.tsx          — Server Component, fetch Sanity, composição de seções

components/
├── Nav.tsx           — nav dupla: hero + fixa pós-scroll, hamburger mobile
├── Hero.tsx          — parallax, CTA, scroll indicator
├── Manifesto.tsx     — text mask reveal
├── Numeros.tsx       — contador animado, grid 2x2
├── MissaoVisao.tsx   — clip-path foto, 3 pilares
├── Espetaculos.tsx   — carousel RAF + Sanity, ShowCard
├── Timeline.tsx      — scroll-driven via useScroll
├── PeDeCachimbo.tsx  — seção do espetáculo âncora
├── Marquee.tsx       — ticker horizontal
├── Impacto.tsx       — números de impacto social
├── Footer.tsx        — contato, nav, apoios, copyright
├── Newsletter.tsx    — formulário (inativo)
├── Noticias.tsx      — seção (inativa, aguarda conteúdo)
└── ui/
    └── Tag.tsx       — tag com variantes: dourado, verde, azul, neutro
```

---

## Variáveis de ambiente

```bash
# Obrigatórias (Vercel + local .env.local)
NEXT_PUBLIC_SANITY_PROJECT_ID=vgsa7ncs
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-05-18
NEXT_PUBLIC_SITE_URL=https://site-viva-cia-de-dan-a.vercel.app

# Server-only (não expor no cliente)
SANITY_API_READ_TOKEN=<token>
```

---

## Conteúdo gerenciado pelo CMS (Sanity)

| Schema | Campos | Quem edita |
|---|---|---|
| `espetaculo` | titulo, ano, ordem, tag, emCartaz, foto, descricao | Carlos / Vivá |
| `noticia` | titulo, data, foto, resumo, conteudo, destaque | Carlos / Vivá |

**Regra de exibição:** se Sanity retornar array vazio, componente exibe estado vazio gracioso — nunca quebra. Ver `Espetaculos.tsx` como referência de padrão.

---

## Sanity Studio

Acessível em `/studio` no ambiente local e em produção.
Project ID: `vgsa7ncs` · Dataset: `production`

---

## Design system

Ver [DESIGN.md](./DESIGN.md) para sistema completo de cores, tipografia, motion e componentes.
Ver [PRODUCT.md](./PRODUCT.md) para identidade, audiência, tom e anti-referências.

---

## Comandos frequentes

```bash
npm run dev        # Desenvolvimento local — http://localhost:3000
npm run build      # Build de produção (verificar erros de tipos)
npm run start      # Servir build local
```

Deploy automático: push para `main` → Vercel build + deploy.

---

## Contexto do projeto

Site criado como pitch para o **SMC Nº 04** (Secretaria Municipal de Cultura, Rio de Janeiro).
Inscrição: **10138** · Valor solicitado: **R$ 250.000**

Ver [_docs/PROJECT_CONTEXT.md](./_docs/PROJECT_CONTEXT.md) para histórico completo de sessões.
