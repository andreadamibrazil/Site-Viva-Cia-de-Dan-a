import {
  defineDocuments,
  defineLocations,
  type PresentationPluginOptions,
} from "sanity/presentation";

export const resolve: PresentationPluginOptions["resolve"] = {
  locations: {
    espetaculo: defineLocations({
      select: { title: "titulo" },
      resolve: () => ({
        locations: [{ title: "Início", href: "/" }],
      }),
    }),
    noticia: defineLocations({
      select: { title: "titulo" },
      resolve: () => ({
        locations: [{ title: "Início", href: "/" }],
      }),
    }),
  },
  mainDocuments: defineDocuments([
    { route: "/", filter: `_type == "espetaculo" || _type == "noticia"` },
  ]),
};
