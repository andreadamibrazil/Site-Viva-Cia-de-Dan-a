import { defineField, defineType } from "sanity";
import { PlayIcon } from "@sanity/icons";

export const espetaculoType = defineType({
  name: "espetaculo",
  title: "Espetáculos",
  type: "document",
  icon: PlayIcon,
  fields: [
    defineField({ name: "titulo", title: "Título", type: "string", validation: (r) => r.required() }),
    defineField({ name: "ano", title: "Ano / Período", type: "string", validation: (r) => r.required() }),
    defineField({ name: "ordem", title: "Ordem de exibição", type: "number" }),
    defineField({
      name: "tag",
      title: "Tag (ex: EM CARTAZ, SESC 2024)",
      type: "string",
    }),
    defineField({ name: "emCartaz", title: "Em cartaz?", type: "boolean", initialValue: false }),
    defineField({ name: "foto", title: "Foto", type: "image", options: { hotspot: true } }),
    defineField({ name: "descricao", title: "Descrição", type: "text", rows: 4 }),
  ],
  orderings: [
    { name: "ordem", title: "Ordem", by: [{ field: "ordem", direction: "asc" }, { field: "ano", direction: "asc" }] },
  ],
  preview: {
    select: { title: "titulo", subtitle: "ano", media: "foto" },
  },
});
