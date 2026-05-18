import { type SchemaTypeDefinition } from "sanity";
import { espetaculoType } from "./espetaculo";
import { noticiaType } from "./noticia";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [espetaculoType, noticiaType],
};
