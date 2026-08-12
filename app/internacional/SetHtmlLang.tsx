"use client";

import { useEffect } from "react";

/**
 * O layout raiz fixa lang="pt-BR" para todo o site. As rotas /internacional/en e
 * /internacional/es servem conteúdo em outro idioma, então ajustamos o atributo no
 * cliente — importa para leitor de tela e para o navegador não oferecer tradução errada.
 * O canonical e as tags hreflang corretas já saem no metadata de cada rota.
 */
export function SetHtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    const anterior = document.documentElement.lang;
    document.documentElement.lang = lang;
    return () => {
      document.documentElement.lang = anterior;
    };
  }, [lang]);

  return null;
}
