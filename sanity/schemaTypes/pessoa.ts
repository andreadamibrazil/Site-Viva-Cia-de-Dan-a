import { defineField, defineType } from "sanity";
import { UserIcon } from "@sanity/icons";

export const pessoaType = defineType({
  name: "pessoa",
  title: "Equipe / Direção",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({ name: "nome", title: "Nome", type: "string", validation: (r) => r.required() }),
    defineField({ name: "cargo", title: "Cargo / Função", type: "string" }),
    defineField({ name: "bio", title: "Bio", type: "text", rows: 5 }),
    defineField({ name: "foto", title: "Foto", type: "image", options: { hotspot: true } }),
    defineField({ name: "ordem", title: "Ordem", type: "number" }),
  ],
  preview: {
    select: { title: "nome", subtitle: "cargo", media: "foto" },
  },
});
