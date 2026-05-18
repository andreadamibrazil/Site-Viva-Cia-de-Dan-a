import type { StructureResolver } from "sanity/structure";
import { PlayIcon, DocumentTextIcon } from "@sanity/icons";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Vivá Cia de Dança")
    .items([
      S.listItem()
        .title("🎭  Espetáculos")
        .icon(PlayIcon)
        .child(S.documentTypeList("espetaculo").title("Espetáculos")),

      S.divider(),

      S.listItem()
        .title("📰  Notícias")
        .icon(DocumentTextIcon)
        .child(S.documentTypeList("noticia").title("Notícias")),
    ]);
