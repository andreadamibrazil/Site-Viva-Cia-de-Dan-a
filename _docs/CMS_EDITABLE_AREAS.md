# CMS_EDITABLE_AREAS.md — Sanity Studio

O que é editável no Sanity Studio, onde cada campo aparece no site, e como operar.

---

## Acesso ao Studio

- **Local:** http://localhost:3000/studio
- **Produção:** https://site-viva-cia-de-dan-a.vercel.app/studio
- **Project ID:** `vgsa7ncs` · **Dataset:** `production`

---

## Schema: Espetáculos

**Tipo:** `espetaculo`
**Query:** `espetaculosQuery` em `sanity/lib/queries.ts`
**Componente no site:** `Espetaculos.tsx` → carousel infinito

| Campo | Tipo | Obrigatório | Onde aparece |
|---|---|---|---|
| `titulo` | string | ✅ | Card do espetáculo, h3 |
| `ano` | string | ✅ | Abaixo do poster, mono text |
| `ordem` | number | — | Define sequência no carousel |
| `tag` | string | — | Badge colorido no poster (ex: "EM CARTAZ", "SESC 2024") |
| `emCartaz` | boolean | — | Ativa o pulse (dot pulsante) na tag |
| `foto` | image | — | Poster do card (480×640, hotspot ativo) |
| `descricao` | text | — | Reservado para uso futuro |

### Sistema de tags e variantes automáticas

A cor da tag é detectada automaticamente pela `tagVariant()` em `ui/Tag.tsx`:

| Texto da tag contém | Variante | Cor |
|---|---|---|
| "EM CARTAZ" | `dourado` | #C79A42 |
| "SESC" | `verde` | #526B52 |
| "FESTIVAL" | `azul` | #006DB2 |
| qualquer outro | `neutro` | areia/50 |

**emCartaz = true** ativa o dot pulsante na tag dourado.

### Ordenação

Ordenado por `ordem asc, ano asc`. Para controlar sequência do carousel: definir `ordem` de 1 a N.

### Lista de espetáculos a cadastrar

| Espetáculo | Ano | Tag sugerida | emCartaz |
|---|---|---|---|
| Flores | 2012 | — | false |
| Entre Atos | 2013 | — | false |
| Petite Danse | 2014 | — | false |
| BoraDançar | 2015 | — | false |
| Pé de Cachimbo | 2015 | EM CARTAZ | **true** |
| Aquarela Carioca | 2016 | — | false |
| Sobre as Ondas do Mar | 2017 | — | false |
| Fina Camada & Mambembes | 2018 | — | false |
| Entre Solos & Canções | 2019 | — | false |
| Curu-MIM | 2024 | SESC 2024 | false |
| Raízes e Ancestralidade | 2025 | — | false |
| Labirinthus Fantástico | 2026 | EM CRIAÇÃO | false |

---

## Schema: Notícias

**Tipo:** `noticia`
**Query:** `noticiasQuery` em `sanity/lib/queries.ts`
**Componente no site:** `Noticias.tsx` — **atualmente inativo** em `app/page.tsx`

> Para ativar: descomentar `<Noticias />` em `app/page.tsx` e passar os dados via fetch.

| Campo | Tipo | Obrigatório | Onde aparece |
|---|---|---|---|
| `titulo` | string | ✅ | Título do card de notícia |
| `data` | date | — | Data exibida no card |
| `foto` | image | — | Imagem do card |
| `resumo` | text | — | Texto curto do card |
| `conteudo` | array (blocks) | — | Reservado para página de detalhe |
| `destaque` | boolean | — | Notícia em posição de destaque |

**Limite de exibição:** últimas 4 notícias (`[0...4]`), ordenadas por data desc.

---

## Padrão de fetch no servidor

```tsx
// app/page.tsx — Server Component
import { client } from "@/sanity/lib/client";
import { espetaculosQuery } from "@/sanity/lib/queries";
import type { EspetaculoType } from "@/sanity/lib/queries";

const espetaculos = await client
  .fetch<EspetaculoType[]>(espetaculosQuery)
  .catch(() => [] as EspetaculoType[]);

// Passar como prop para Client Component
<Espetaculos sanityShows={espetaculos} />
```

---

## Imagens do Sanity

Pattern obrigatório com `urlFor()`:

```tsx
import { urlFor } from "@/sanity/lib/image";

// Exemplo — poster de espetáculo
const url = urlFor(espetaculo.foto).width(480).height(640).url();

// Em next/image
<Image src={url} alt={espetaculo.titulo} fill ... />
```

**Não usar URL raw do CDN** (`cdn.sanity.io/...`) diretamente — usar sempre `urlFor()`.

O `remotePatterns` para `cdn.sanity.io` está configurado em `next.config.ts`.
