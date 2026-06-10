# DESIGN.md — Vivá Cia de Dança

Sistema visual do site. Fonte de verdade para qualquer decisão de interface.

---

## Identidade visual

**Conceito:** "Forte como a natureza" — oceano profundo como base, dourado como luz que corta, areia como calor e humanidade, terra como enraizamento.

**Tema:** Dark-first. Fundo escuro (oceano ou terra) é o padrão. Brisa/areia aparecem apenas para contraste rítmico em seções específicas.

**Por que dark:** a dança contemporânea carioca acontece em palco — luz sobre escuro. O site reflete o contexto de fruição da arte.

---

## 1. Paleta de cores

### Primitivos

| Token | Hex | Uso |
|---|---|---|
| `oceano` | `#062B4F` | Canvas base — fundo principal da maioria das seções |
| `terra` | `#111111` | Canvas alternativo — Manifesto, Marquee, Footer |
| `areia` | `#EDE5D8` | Texto principal sobre fundos escuros |
| `brisa` | `#F7F7F2` | Fundo claro — seção Números e Timeline |
| `dourado` | `#C79A42` | Acento primário: eyebrows, CTAs, destaques, separadores |
| `atmosfera` | `#006DB2` | Acento azul — pilar Visão, tag "NACIONAL/SESC/INTERNACIONAL" |
| `verde` | `#526B52` | Acento verde — pilar Missão, tag "SOCIAL" |

### Semântica de opacidade (texto sobre escuro)

| Uso | Opacidade | Resultado |
|---|---|---|
| Texto principal | `areia` full | `#EDE5D8` |
| Texto secundário | `areia/70` | ~`rgba(237,229,216,0.70)` |
| Texto terciário | `areia/55` | ~`rgba(237,229,216,0.55)` |
| Metadados, datas | `areia/45` | ~`rgba(237,229,216,0.45)` |
| Mínimo legível | `areia/40` | WCAG AA em headings grandes apenas |
| Proibido em body | < `areia/40` | Abaixo do contraste mínimo |

### Estratégia de cor

**Committed** — dourado carrega 20–30% dos acentos visuais como cor de identidade. Oceano domina o canvas (60–70%). Terra e brisa alternam para ritmo.

Atmosfera e verde são **contextuais** — aparecem somente nos pilares de Missão e Visão. Não usar como decoração genérica.

### Mapa de seções (band switching)

| Seção | Fundo | Texto base | Acento |
|---|---|---|---|
| Hero | `oceano` | `areia` | `dourado` |
| Manifesto | `terra` | `brisa` | `dourado` |
| Números | `brisa` | `terra` | `dourado` |
| MissãoVisão | `oceano` | `areia` | `dourado` + `verde` + `atmosfera` |
| Espetáculos | `oceano` | `areia` | `dourado` |
| Timeline | `brisa` | `terra` | `dourado` |
| Pé de Cachimbo | `oceano` (com overlay atmosfera) | `areia` | `dourado` |
| Marquee | `terra` | `areia` | `dourado` |
| Impacto | `oceano` | `areia` | `dourado` |
| Footer | `terra` | `areia` | `dourado` |

**Regra de band switching:** nunca duas seções `brisa` consecutivas. Alternar oceano → terra → brisa para ritmo.

---

## 2. Tipografia

### Famílias

| Variável CSS | Família | Uso |
|---|---|---|
| `--font-display` | Plus Jakarta Sans | Headings, display, nav, CTAs, eyebrows |
| `--font-body` | Inter | Corpo de texto, legendas, metadados |
| `font-mono` (Tailwind) | Monospace | Numeração, anos, inscrição, códigos |

### Pesos

Plus Jakarta Sans em uso: 300 (light), 400 (regular), 500, 600 (semibold), 700 (bold), 800 (extrabold)
Inter em uso: 400 (regular), 600 pontual

### Escala com tokens CSS

| Token | clamp / valor | line-height | letter-spacing | Uso |
|---|---|---|---|---|
| `--text-display-xl` | `clamp(80px, 13vw, 172px)` | `1.0` | `-0.025em` | Título VIVÁ (Hero) |
| `--text-display-lg` | `clamp(36px, 5.5vw, 72px)` | `1.0–1.05` | `-0.02em` | Headings grandes de seção |
| `--text-display-md` | `clamp(28px, 4vw, 52px)` | `1.1` | `-0.015em` | Headings normais de seção |
| `--text-display-sm` | `clamp(24px, 3.5vw, 44px)` | `1.15` | `-0.01em` | Sub-headings, captions grandes |
| `--text-heading` | `clamp(18px, 2vw, 24px)` | `1.3` | `0` | Títulos de pilar, card h3 |
| `--text-sub` | `clamp(14px, 1.5vw, 16px)` | `1.35` | `0` | Títulos de componente menor |

### Escala de corpo

| Classe | Tamanho | line-height | Uso |
|---|---|---|---|
| `text-lg` | 18px | 1.7 | Parágrafos em destaque, hero subtitle |
| `text-base` | 16px | 1.65 | Corpo padrão |
| `text-sm` | 14px | 1.6 | Info secundária, card descriptions |
| `text-xs` | 12px | 1.5 | Metadados, datas, créditos, eyebrows |
| `text-[11px]` | 11px | — | Nav links, labels de UI |
| `text-[10px]` | 10px | — | Tags de espetáculo, micro labels |
| `text-[9px]` | 9px | — | Tags pequenas (Tag component) |

### Labels e eyebrows

| Tipo | Tamanho | Weight | Tracking | Case |
|---|---|---|---|---|
| Eyebrow de seção | `text-xs` (12px) | `600` | `tracking-[0.3em]` | uppercase |
| Nav links | `text-[11px]` | `500` | `tracking-[0.2–0.22em]` | uppercase |
| Tags de UI | `text-[9px]` | `600` | `tracking-[0.14em]` | uppercase |
| Mono (anos, nº) | `text-xs`–`text-sm` | `400` | `tracking-[0.18em]` | — |
| Caption | `text-[11px]` | `400` | `tracking-[0.15em]` | uppercase |

### Hierarquia padrão de heading em seção

```
eyebrow  → text-xs, text-dourado, tracking-[0.3em], uppercase, mb-4
h2       → var(--text-display-md), font-display, font-light italic, text-areia, mb-8
parágrafo → text-sm/base, text-areia/70, leading-relaxed, max-w-2xl
```

---

## 3. Espaçamento

### Escala base (8px grid)

Todo espaçamento é múltiplo de 4px, preferindo incrementos de 8px. Usar classes Tailwind padrão.

| Tailwind | px | Uso típico |
|---|---|---|
| `gap-1` / `p-1` | 4px | Ícone gap, hairlines |
| `gap-2` / `p-2` | 8px | Chip padding, small gap |
| `gap-3` / `p-3` | 12px | Input padding horizontal |
| `gap-4` / `p-4` | 16px | Base unit, card padding compact |
| `gap-5` / `p-5` | 20px | Espaço confortável |
| `gap-6` / `p-6` | 24px | Card padding padrão |
| `gap-8` / `p-8` | 32px | Card padding espaçoso, gap de grid |
| `gap-10` | 40px | Espaço entre elementos de seção |
| `gap-12` | 48px | Separação de componentes |
| `gap-16` | 64px | Section padding sm |

### Espaçamento de seção vertical

| Token CSS | Desktop | Tablet | Mobile | Tailwind equivalente |
|---|---|---|---|---|
| `--spacing-section-xs` | 48px | 40px | 32px | `py-12 md:py-16` |
| `--spacing-section-sm` | 64px | 56px | 48px | `py-16 md:py-20` |
| `--spacing-section-md` | 96px | 80px | 64px | `py-24 md:py-36` ← **padrão** |
| `--spacing-section-lg` | 128px | 96px | 80px | `py-32 md:py-40` |
| `--spacing-section-xl` | 160px | 128px | 96px | `py-40 md:py-52` |

**Padrão do site:** `py-24 md:py-36` (section-md).

### Containers

| Uso | Max-width | Padding horizontal |
|---|---|---|
| Container principal | `max-w-7xl` (1280px) | `px-6` (24px) |
| Texto long-form | `max-w-4xl` (896px) | `px-6` |
| Texto médio | `max-w-5xl` (1024px) | `px-6` |
| Texto estreito (prose) | `max-w-2xl` (672px) | — |

### Padding de componentes internos

| Componente | Horizontal | Vertical |
|---|---|---|
| Card padrão | `p-8` (32px) | `p-8` (32px) |
| Card compacto | `p-6` (24px) | `p-6` (24px) |
| Card pilar (MissãoVisão) | `px-8 py-8 md:px-10 md:py-10` | — |
| Botão CTA primário | `px-7` (28px) | `py-3.5` (14px) |
| Botão secundário (outline) | `px-6` (24px) | `py-3` (12px) |
| Tag de espetáculo | `px-2.5` (10px) | `py-1` (4px) |
| Social icon button | `w-9 h-9` (36px×36px) | — |
| Nav arrow button | `w-9 h-9` (36px×36px) | — |
| Nav link desktop | `gap-8` entre links | `h-16` (64px) |
| Footer col gap | `gap-10` | `py-12` |

### Gaps de grid

| Contexto | Column gap | Row gap |
|---|---|---|
| Grids de card padrão | `gap-4`–`gap-6` | — |
| Grid pilares (MissãoVisão) | `gap-px` (divisor via bg) | — |
| Grid Números 2×2 | `gap-0` (borda via border) | — |
| Carousel espetáculos | `gap-3` | — |
| Footer colunas | `gap-10` | — |
| Apoios (flex-wrap) | `gap-2` | — |

---

## 4. Border radius

Sharp/arquitetural por padrão. Suavidade apenas em elementos interativos específicos.

| Token CSS | Valor | Tailwind | Uso |
|---|---|---|---|
| `--radius-none` | 0px | `rounded-none` | Full-bleed, foto strips, seções |
| `--radius-xs` | 2px | `rounded-xs` | Tags inline, badges de texto |
| `--radius-sm` | 4px | `rounded-sm` | Posters de espetáculo (3×4), apoios |
| `--radius-md` | 6px | `rounded-md` | Inputs, botões outline |
| `--radius-lg` | 12px | `rounded-lg` | Containers feature, modal |
| `--radius-pill` | 9999px | `rounded-full` | Botões CTA, social icons, nav arrows, tags pill |

**Regra crítica:** `rounded-full` é exclusivo de botões e pills. Cards e containers usam no máximo `rounded-sm` (4px).

---

## 5. Sombras

Todas tintadas com oceano para coerência. Sem drop-shadow pesada em dark sections.

| Token | CSS | Uso |
|---|---|---|
| `shadow-sm` | `0 1px 4px rgba(6,43,79,0.15)` | Hover sutil de card |
| `shadow-md` | `0 4px 16px rgba(6,43,79,0.20)` | Elemento elevado, dropdown |
| `shadow-lg` | `0 12px 40px rgba(6,43,79,0.28)` | Overlay, modal |
| `shadow-glow` | `0 0 32px rgba(199,154,66,0.18)` | CTA dourado em destaque |
| `shadow-none` | `none` | Padrão em dark sections |

**Regra:** profundidade via cor e opacidade, não sombra. Cards escuros sobre fundo escuro: sem shadow. Shadow apenas em elementos elevados ou em seções `brisa`.

---

## 6. Botões

### CTA primário (dourado · pill)

| Estado | Background | Texto | Transformação |
|---|---|---|---|
| Default | `bg-dourado` | `text-oceano` | — |
| Hover | `bg-dourado/92` | `text-oceano` | `scale(1.03)` |
| Active/Tap | `bg-dourado/85` | `text-oceano` | `scale(0.97)` |
| Disabled | `bg-dourado/30` | `text-oceano/40` | — |
| Loading | `bg-dourado/70` | invisível | spinner |

Dimensões: `px-7 py-3.5` · height ≈ 44px · `rounded-full` · `text-[11px] tracking-[0.18em] uppercase font-semibold`
Transition: spring (`stiffness: 400, damping: 20`)

### Outline / ghost (sobre escuro)

| Estado | Background | Borda | Texto |
|---|---|---|---|
| Default | transparent | `border-areia/15` | `text-areia/50` |
| Hover | transparent | `border-dourado/50` | `text-dourado` |
| Active | transparent | `border-dourado/80` | `text-dourado` |

Dimensões: `w-9 h-9` (icon-only) ou `px-5 py-2.5 rounded-full`

### Link secundário

`text-areia/65 text-[11px] tracking-[0.15em] uppercase hover:text-areia/90`
Sem background, sem borda, transição de cor 200ms.

---

## 7. Tags (componente `ui/Tag`)

### Estrutura

```tsx
<span className="inline-flex items-center gap-1.5 text-[9px] tracking-[0.14em] uppercase px-2.5 py-1 rounded-full font-semibold whitespace-nowrap"
  style={{ backgroundColor: p.bg, color: p.text, border: `1px solid ${p.border}`, backdropFilter: "blur(8px)" }}
>
  {pulse && <span className="w-1.5 h-1.5 rounded-full animate-pulse shrink-0" />}
  {label}
</span>
```

### Variantes e cores

| Variante | Background | Texto | Borda | Quando usar |
|---|---|---|---|---|
| `dourado` | `#C79A4218` | `#C79A42` | `#C79A4240` | EM CARTAZ, ORIGEM, EM CRIAÇÃO, LEGADO, ATUAL |
| `verde` | `#526B5218` | `#6B8F6B` | `#526B5240` | SOCIAL, educativo |
| `azul` | `#006DB218` | `#4BA3D4` | `#006DB240` | NACIONAL, SESC, INTERNACIONAL, FESTIVAL |
| `neutro` | `#EDE5D810` | `#EDE5D870` | `#EDE5D820` | Qualquer outro texto |

`pulse = true` ativa o dot pulsante — apenas em `emCartaz: true` no Sanity.

### Detecção automática de variante

```ts
// tagVariant() em ui/Tag.tsx
if (tag.includes("CARTAZ") || "ORIGEM" || "CRIAÇÃO" || "ATUAL" || "LEGADO") → dourado
if (tag.includes("SOCIAL"))                                                   → verde
if (tag.includes("NACIONAL") || "SESC" || "INTERNACIONAL")                   → azul
else                                                                          → neutro
```

---

## 8. Ícones

### Escala de tamanhos

| Token | Tamanho | Stroke | Uso |
|---|---|---|---|
| `icon-xs` | 12px | 2 | Inline em texto, micro detalhes |
| `icon-sm` | 16px | 2 | Botões sm/md, metadados |
| `icon-md` | 20px | 2 | Nav links, UI padrão |
| `icon-lg` | 24px | 1.75 | Card icons, seção de feature |
| `icon-xl` | 32px | 1.5 | Ícones de seção |

**Stroke padrão nos componentes:** `strokeWidth="1.5"` para ícones de 11–14px (arrow, chevron).

### Regras

- SVG inline apenas (sem libs de ícone importadas)
- `aria-hidden="true"` em todos os ícones decorativos
- `aria-label` em botões icon-only
- Stroke, nunca fill, exceto dots/circles (ex: dot pulsante da tag)
- Cor via `currentColor` — herda do texto pai

---

## 9. Motion system

### Easing

```css
--ease-expo:    cubic-bezier(0.16, 1, 0.3, 1);   /* expo-out — entradas */
--ease-in-expo: cubic-bezier(0.70, 0, 0.84, 0);  /* expo-in  — saídas  */
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);   /* padrão   — transições de estado */
```

Framer Motion array: `[0.16, 1, 0.3, 1]`

### Durações

| Tipo | Duração | Uso |
|---|---|---|
| Instant | 150ms | Hover cor, icon transitions |
| Fast | 200ms | Transições de estado, color hover |
| Normal | 300–500ms | Reveal de elementos, dropdown |
| Slow | 700–1000ms | Heading principal, parallax, clip-path |
| Counter | 2000ms | Animação de números (easeOut cubic) |
| Spring | `stiffness: 400, damping: 20` | Scale em hover/tap de botão |

**Regra de saída:** exit animation = 60–70% da duração de entrada.

### Padrões em uso

**Fade + y (entrada padrão de elemento):**
```js
initial={{ opacity: 0, y: 20 }}
animate={inView ? { opacity: 1, y: 0 } : {}}
transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
```

**Stagger de lista/grid:**
```js
transition={{ duration: 0.5, delay: Math.min(index * 0.07, 0.4), ease }}
// Cap em 0.4s — listas longas não atrasam demais
```

**Text mask reveal (Manifesto):**
```js
// Container pai: overflow-hidden
initial={{ y: "100%", filter: "blur(6px)" }}
animate={{ y: 0, filter: "blur(0px)" }}
transition={{ duration: 0.9, delay: i * 0.15, ease }}
```

**Clip-path reveal (foto strip):**
```js
initial={{ clipPath: "inset(0 100% 0 0)" }}
animate={{ clipPath: "inset(0 0% 0 0)" }}
transition={{ duration: 1.1, delay: 0.3, ease }}
```

**Scale line (separadores dourado):**
```js
initial={{ scaleX: 0, opacity: 0 }}
animate={{ scaleX: 1, opacity: 1 }}
transition={{ duration: 0.6, delay: 0.5 }}
// className inclui: origin-left
```

**Parallax (Hero + MissãoVisão):**
```js
// Hero: [0, 1] → ["0%", "18%"]
// MissãoVisão: [0, 1] → ["4%", "-4%"]
const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"])
style={{ y: shouldReduce ? 0 : y }}
```

**Scroll-driven (Timeline):**
```js
const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 35%"] })
const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1])
// Aplica em motion.div com origin-top
```

**Scale de hover em card:**
```js
// Foto do card de espetáculo
className="transition-transform duration-700 will-change-transform group-hover:scale-[1.04]"
```

### Regras absolutas de motion

- **SEMPRE** `useReducedMotion()` — se `true`: `initial={false}`, `whileHover={}`, `whileTap={}`
- Animar apenas `transform` e `opacity` — nunca `width`, `height`, `top`, `left`
- `will-change: transform` apenas em elementos com animação contínua (carousel)
- Parallax máximo: 18% de deslocamento
- Sem animação decorativa (toda animação tem causa-efeito)

---

## 10. Scroll progress bar

```tsx
<motion.div
  className="fixed top-0 left-0 h-[2px] bg-dourado z-[70] origin-left pointer-events-none"
  style={{ scaleX: scrollYProgress }}
/>
```

Sempre presente. Z-index 70 (acima da nav fixa z-50).

---

## 11. Carousel de espetáculos

Card width: `w-[195px] md:w-[215px]` · aspect-ratio: `3/4` · `rounded-sm` (4px)
Velocidade RAF: `0.12px/frame` · triplicar array para loop infinito

Scroll manual: `.scrollBy({ left: ±280, behavior: "smooth" })`

---

## 12. Acessibilidade

- WCAG AA mínimo: 4.5:1 texto normal, 3:1 texto grande e UI
- `aria-label` obrigatório em botões icon-only
- `aria-hidden="true"` em ícones decorativos
- Focus rings: nunca remover outline (usar `focus-visible`)
- Touch targets mínimos: 44×44px
- `alt` descritivo em imagens significativas
- `useReducedMotion()` em **todas** as animações

---

## 13. Proibições absolutas

- **Sem gradient text** — `background-clip: text` com gradient. Nunca.
- **Sem border-left accent** > 1px como decoração em cards ou callouts
- **Sem cards idênticos em grid** com icon + heading + texto repetidos
- **Sem hero fullscreen com título centralizado** sobre gradient genérico
- **Sem shadow pesada** em dark sections — profundidade via cor
- **Sem glassmorphism decorativo** — blur/glass apenas quando semanticamente justificado (ex: `backdropFilter` na nav)
- **Sem cor atmosfera ou verde** fora do contexto de Missão/Visão
- **Sem opacidade < 40%** em texto de corpo sobre fundos escuros
- **Sem fonte abaixo de 9px** em qualquer elemento visível
- **Sem `rounded-full` em cards ou containers** — pill é exclusivo de botões e tags

---

## 14. AI slop test

Se alguém olhar e pensar "template de agência genérica de dança" — falhou.

Checklist:
- [ ] A paleta é derivável só do contexto "dança contemporânea carioca"? Se sim, revisar.
- [ ] Existe gradient text? Remover.
- [ ] Existe grid de cards iguais com ícone + texto? Revisar estrutura.
- [ ] Hero tem título centralizado sobre gradient? Revisar composição.
- [ ] `useReducedMotion()` está em todos os componentes animados? Confirmar.
- [ ] Existe `border-left` colorido > 1px? Substituir por fundo tintado.
- [ ] Tag usa `azul` ou `verde` fora do contexto certo? Corrigir.
- [ ] Copy usa palavra proibida do PRODUCT.md? Remover.
