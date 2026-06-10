import { type SchemaTypeDefinition } from "sanity";
import { espetaculoType } from "./espetaculo";
import { noticiaType } from "./noticia";
import { clippingType } from "./clipping";
import { pessoaType } from "./pessoa";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [espetaculoType, noticiaType, clippingType, pessoaType],
};
