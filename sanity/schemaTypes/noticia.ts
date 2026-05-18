import { defineArrayMember, defineField, defineType } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";

export const noticiaType = defineType({
  name: "noticia",
  title: "Notícias",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({ name: "titulo", title: "Título", type: "string", validation: (r) => r.required() }),
    defineField({ name: "data", title: "Data", type: "date", validation: (r) => r.required() }),
    defineField({ name: "foto", title: "Foto de capa", type: "image", options: { hotspot: true } }),
    defineField({ name: "resumo", title: "Resumo", type: "text", rows: 3 }),
    defineField({
      name: "conteudo",
      title: "Conteúdo",
      type: "array",
      of: [
        defineArrayMember({ type: "block" }),
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [defineField({ name: "alt", type: "string", title: "Texto alternativo" })],
        }),
      ],
    }),
    defineField({ name: "destaque", title: "Destaque na home?", type: "boolean", initialValue: false }),
  ],
  orderings: [
    { name: "recente", title: "Mais recente", by: [{ field: "data", direction: "desc" }] },
  ],
  preview: {
    select: { title: "titulo", subtitle: "data", media: "foto" },
  },
});
