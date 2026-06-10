import { defineQuery } from "next-sanity";

export const espetaculosQuery = defineQuery(`
  *[_type == "espetaculo"] | order(ordem asc, ano asc) {
    _id,
    titulo,
    ano,
    tag,
    emCartaz,
    foto,
    descricao,
  }
`);

export const noticiasQuery = defineQuery(`
  *[_type == "noticia"] | order(data desc) [0...4] {
    _id,
    titulo,
    data,
    foto,
    resumo,
    destaque,
  }
`);

export type EspetaculoType = {
  _id: string;
  titulo: string;
  ano: string;
  tag?: string | null;
  emCartaz?: boolean | null;
  foto?: { asset: { _ref: string } } | null;
  descricao?: string | null;
};

export type NoticiaType = {
  _id: string;
  titulo: string;
  data: string;
  foto?: { asset: { _ref: string } } | null;
  resumo?: string | null;
  destaque?: boolean | null;
};

export const clippingsQuery = defineQuery(`
  *[_type == "clipping"] | order(ordem asc) {
    _id,
    titulo,
    fonte,
    url,
    data,
    resumo,
    imagem,
  }
`);

export const direcaoQuery = defineQuery(`
  *[_type == "pessoa"] | order(ordem asc) [0] {
    _id,
    nome,
    cargo,
    bio,
    foto,
  }
`);

export type ClippingType = {
  _id: string;
  titulo: string;
  fonte: string;
  url: string;
  data?: string | null;
  resumo?: string | null;
  imagem?: { asset: { _ref: string } } | null;
};

export type PessoaType = {
  _id: string;
  nome: string;
  cargo?: string | null;
  bio?: string | null;
  foto?: { asset: { _ref: string } } | null;
};
