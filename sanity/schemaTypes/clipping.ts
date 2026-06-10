import { defineField, defineType } from "sanity";
import { LinkIcon } from "@sanity/icons";

export const clippingType = defineType({
  name: "clipping",
  title: "Clipping / Imprensa",
  type: "document",
  icon: LinkIcon,
  fields: [
    defineField({ name: "titulo", title: "Título da matéria", type: "string", validation: (r) => r.required() }),
    defineField({ name: "fonte", title: "Veículo / Fonte", type: "string", validation: (r) => r.required() }),
    defineField({ name: "url", title: "URL", type: "url", validation: (r) => r.required() }),
    defineField({ name: "data", title: "Ano ou data", type: "string" }),
    defineField({ name: "imagem", title: "Imagem da matéria (screenshot ou capa)", type: "image", options: { hotspot: true } }),
    defineField({ name: "resumo", title: "Resumo breve (opcional)", type: "text", rows: 2 }),
    defineField({ name: "ordem", title: "Ordem de exibição", type: "number" }),
  ],
  orderings: [
    { name: "ordem", title: "Ordem", by: [{ field: "ordem", direction: "asc" }] },
  ],
  preview: {
    select: { title: "titulo", subtitle: "fonte" },
  },
});
