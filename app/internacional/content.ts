// Área internacional / mercado da Vivá Cia de Dança.
// Página trilingue usada em rodadas de negócios e mercados culturais (MICSUL, MICA, feiras).
// Perfil: vendedor/ofertante — o que a companhia vende e como se contrata.
//
// NÃO É CONTEÚDO DE CMS: é catálogo comercial estável, por isso vive aqui e não no Sanity.
// Os números batem com components/Numeros.tsx de propósito: um avaliador de edital compara.

export type Lang = "pt" | "en" | "es";

export const LANGS: { code: Lang; label: string; href: string; htmlLang: string }[] = [
  { code: "pt", label: "PT", href: "/internacional", htmlLang: "pt-BR" },
  { code: "en", label: "EN", href: "/internacional/en", htmlLang: "en" },
  { code: "es", label: "ES", href: "/internacional/es", htmlLang: "es" },
];

export const FATOS = {
  anos: "14",
  espetaculos: "10",
  premios: "21+",
  apresentacoes: "150+",
  desde: "2012",
  email: "vivaciadedanca@gmail.com",
  instagram: "https://instagram.com/vivaciadedanca",
  youtube: "https://www.youtube.com/@vivaciadedanca",
  video: "https://www.youtube.com/watch?v=mLYStUD4SmU",
};

type Obra = {
  titulo: string;
  ano: string;
  tag: string;
  sinopse: string;
  itens: [string, string][];
  foto: string;
  alt: string;
};

type Servico = { titulo: string; texto: string };

export type Copy = {
  kicker: string;
  h1: string;
  lead: string;
  ctaContato: string;
  ctaVideo: string;
  numerosTitulo: string;
  numeros: { n: string; l: string }[];
  catalogoTitulo: string;
  catalogoLead: string;
  obras: Obra[];
  servicosTitulo: string;
  servicos: Servico[];
  contratarTitulo: string;
  contratarLead: string;
  contratar: string[];
  trajetoriaTitulo: string;
  trajetoria: Servico[];
  acessTitulo: string;
  acessTexto: string;
  contatoTitulo: string;
  contatoLead: string;
  voltar: string;
  rodape: string;
};

const FOTO_PE = "/fotos/pe-de-cachimbo.jpg";
const FOTO_ONDAS = "/fotos/ensemble-stage.jpg";

export const COPY: Record<Lang, Copy> = {
  pt: {
    kicker: "Internacional · mercado",
    h1: "O repertório brasileiro que atravessa",
    lead:
      "A Vivá Cia de Dança cria dança contemporânea autoral no Rio de Janeiro desde 2012. Esta página é para quem programa, compra e coproduz: o catálogo do que a companhia vende, como se contrata e onde já circulou.",
    ctaContato: "Falar com a companhia",
    ctaVideo: "Ver o portfólio em vídeo",
    numerosTitulo: "A companhia",
    numeros: [
      { n: FATOS.anos, l: "anos de história, sem um ano em branco" },
      { n: FATOS.espetaculos, l: "obras no repertório oficial" },
      { n: FATOS.premios, l: "prêmios e editais" },
      { n: FATOS.apresentacoes, l: "apresentações do repertório" },
    ],
    catalogoTitulo: "Catálogo de repertório",
    catalogoLead:
      "Duas obras prontas para circular, com equipe formada, ficha técnica fechada e mais de uma década de estrada.",
    obras: [
      {
        titulo: "Pé de Cachimbo",
        ano: "2014",
        tag: "Em cartaz há mais de dez anos",
        sinopse:
          "O folclore brasileiro e o resgate da infância e do brincar. Brincadeiras de roda, cantigas e imaginário popular: um adulto reencontra a própria infância pelo movimento. É a obra que nasceu do primeiro fomento e deu origem à companhia.",
        itens: [
          ["Público", "Livre, com forte adesão de crianças, adolescentes e escolas"],
          ["Formatos", "Palco em caixa cênica convencional e versão adaptada para rua"],
          ["Acessibilidade", "Sessão adaptada para pessoas autistas, com psicopedagoga"],
          ["Reconhecimento", "Menção honrosa no 11º Prêmio Zilka Sallaberry de Teatro Infantil (2016) · Fomento Cidade Olímpica (2016) · ocupação do Teatro Glaucio Gill"],
          ["Já circulou por", "FUNARTE, FUNARJ, SESI-SP, SESC, Centro Coreográfico do Rio e rede pública de ensino"],
        ],
        foto: FOTO_PE,
        alt: "Cena do espetáculo Pé de Cachimbo, da Vivá Cia de Dança",
      },
      {
        titulo: "Sobre as Ondas do Mar",
        ano: "2014",
        tag: "Música brasileira em cena",
        sinopse:
          "Livremente inspirado nas canções de Dorival Caymmi. O mar, a Bahia e o cancioneiro brasileiro traduzidos em movimento. Abriu o 7º Festival Amazonas de Dança, no Teatro Amazonas, em Manaus.",
        itens: [
          ["Por que exporta bem", "Entrega cultura brasileira reconhecível sem depender de texto falado"],
          ["Trilha", "Repertório de Dorival Caymmi em leitura cênica autoral"],
          ["Circulação", "Teatro Amazonas · MoviRio Festival, no Teatro João Caetano"],
        ],
        foto: FOTO_ONDAS,
        alt: "Elenco da Vivá Cia de Dança em cena",
      },
    ],
    servicosTitulo: "Também vendemos",
    servicos: [
      {
        titulo: "Oficinas Corpo Brinquedo",
        texto:
          "Metodologia própria da companhia, que parte da brincadeira e dos estudos de Laban. Formatos para bailarinos, para professores e para escolas.",
      },
      {
        titulo: "Residência e coreografia por encomenda",
        texto:
          "Residência de criação e coreografia sob encomenda para companhias, circuitos e escolas estrangeiras.",
      },
      {
        titulo: "Coprodução de obra inédita",
        texto:
          "Labirinthus Fantástico, criação para 2027 que une dança, teatro de animação e inteligência artificial. Aberta a coprodutor internacional.",
      },
    ],
    contratarTitulo: "Como contratar",
    contratarLead: "O caminho é curto. Escreva e receba na volta:",
    contratar: [
      "Ficha técnica completa, com duração, número de artistas em cena e rider de luz e som",
      "Vídeo integral da obra e material de imprensa",
      "Proposta de cachê por apresentação ou por temporada, com necessidades de viagem e montagem",
      "Datas disponíveis em 2027, ano em que a companhia completa 15 anos",
    ],
    trajetoriaTitulo: "Trajetória e reconhecimento",
    trajetoria: [
      {
        titulo: "Origem premiada",
        texto:
          "A companhia nasceu do Prêmio Novos Coreógrafos da Prefeitura do Rio de Janeiro, em 2012, e desde então não passou um ano sem produzir.",
      },
      {
        titulo: "Equipamentos e circuitos",
        texto:
          "SESC, SESI-SP, FUNARTE, FUNARJ, Centro Coreográfico da Cidade do Rio de Janeiro e Teatro Amazonas.",
      },
      {
        titulo: "Mercados internacionais",
        texto:
          "A direção da companhia representou o Brasil no MICA 2023, na Argentina, selecionada pelo Ministério da Cultura, e integra o International Dance Council, organização parceira da UNESCO.",
      },
      {
        titulo: "Prêmios com registro oficial",
        texto:
          "3º lugar no Prêmio de Dança da FUNARJ 2022 com Curu-MIM, em ata da comissão de seleção. E o Prêmio Funarte Mestras e Mestres das Artes, com a companhia como proponente da mestra Marly Tavares, no resultado oficial de 2026.",
      },
      {
        titulo: "Intercâmbio ibero-americano",
        texto:
          "A companhia integrou a programação do MoviRio Festival na edição selecionada pelo Iberescena, fundo da SEGIB com 17 países, ao lado da Cia Cláudio Bernardo, da Bélgica.",
      },
    ],
    acessTitulo: "Acessibilidade como parte da obra",
    acessTexto:
      "A companhia realiza sessão adaptada para pessoas autistas, com acompanhamento de psicopedagoga, e cine-dança com audiodescrição. Mantém braço social em Rio Comprido, onde ensina artes cênicas a crianças em vulnerabilidade, e parte do elenco vem dessa formação. Para circuitos e editais que exigem contrapartida de acessibilidade, o repertório já chega pronto.",
    contatoTitulo: "Falar com a companhia",
    contatoLead:
      "Direção e coreografia: Carlos Fontinelle. Atendemos em português, espanhol e inglês.",
    voltar: "Ir para o site da companhia",
    rodape:
      "Vivá Cia de Dança · dança contemporânea autoral · Rio de Janeiro, Brasil · desde 2012",
  },

  en: {
    kicker: "International · market",
    h1: "Brazilian repertoire that travels",
    lead:
      "Vivá Cia de Dança has been creating original contemporary dance in Rio de Janeiro since 2012. This page is for programmers, buyers and co-producers: what the company sells, how to book it, and where it has already toured.",
    ctaContato: "Contact the company",
    ctaVideo: "Watch the video portfolio",
    numerosTitulo: "The company",
    numeros: [
      { n: FATOS.anos, l: "years of history, without a single blank year" },
      { n: FATOS.espetaculos, l: "works in the official repertoire" },
      { n: FATOS.premios, l: "awards and public grants" },
      { n: FATOS.apresentacoes, l: "performances of the repertoire" },
    ],
    catalogoTitulo: "Repertoire catalogue",
    catalogoLead:
      "Two works ready to tour, with a formed cast, a closed technical rider and more than a decade on the road.",
    obras: [
      {
        titulo: "Pé de Cachimbo",
        ano: "2014",
        tag: "On stage for over ten years",
        sinopse:
          "Brazilian folklore and the recovery of childhood and play. Ring games, folk songs and popular imagery: an adult meets their own childhood again through movement. This is the work born from the company's first grant.",
        itens: [
          ["Audience", "All ages, with strong appeal for children, teenagers and schools"],
          ["Formats", "Conventional stage version and an adapted version for street and open air"],
          ["Accessibility", "Autism-friendly adapted session, with a specialist educator"],
          ["Recognition", "Honourable mention at the 11th Zilka Sallaberry Award for children's theatre (2016) · Cidade Olímpica grant (2016) · residency at Teatro Glaucio Gill"],
          ["Presented by", "FUNARTE, FUNARJ, SESI-SP, SESC, Rio's Choreographic Centre and public schools"],
        ],
        foto: FOTO_PE,
        alt: "Scene from Pé de Cachimbo, by Vivá Cia de Dança",
      },
      {
        titulo: "Sobre as Ondas do Mar",
        ano: "2014",
        tag: "Brazilian music on stage",
        sinopse:
          "Freely inspired by the songs of Dorival Caymmi. The sea, Bahia and the Brazilian songbook translated into movement. It opened the 7th Amazonas Dance Festival at the Teatro Amazonas, in Manaus.",
        itens: [
          ["Why it travels well", "Delivers recognisable Brazilian culture with no spoken text"],
          ["Score", "Dorival Caymmi's repertoire in an original staging"],
          ["Touring", "Teatro Amazonas · MoviRio Festival, at Teatro João Caetano"],
        ],
        foto: FOTO_ONDAS,
        alt: "Vivá Cia de Dança ensemble on stage",
      },
    ],
    servicosTitulo: "We also sell",
    servicos: [
      {
        titulo: "Corpo Brinquedo workshops",
        texto:
          "The company's own method, rooted in play and in Laban's studies. Formats for dancers, for teachers and for schools.",
      },
      {
        titulo: "Residencies and commissioned choreography",
        texto:
          "Creation residencies and commissioned choreography for foreign companies, circuits and schools.",
      },
      {
        titulo: "Co-production of a new work",
        texto:
          "Labirinthus Fantástico, a 2027 creation bringing together dance, puppet theatre and artificial intelligence. Open to an international co-producer.",
      },
    ],
    contratarTitulo: "How to book",
    contratarLead: "It is a short path. Write to us and you get back:",
    contratar: [
      "Full technical file, with running time, number of performers on stage and lighting and sound rider",
      "Complete video of the work and press material",
      "Fee proposal per performance or per season, with travel and set-up requirements",
      "Available dates in 2027, the year the company turns 15",
    ],
    trajetoriaTitulo: "Track record",
    trajetoria: [
      {
        titulo: "An award-winning start",
        texto:
          "The company was born from Rio de Janeiro City Hall's New Choreographers Award in 2012, and has not spent a single year without producing since.",
      },
      {
        titulo: "Venues and circuits",
        texto:
          "SESC, SESI-SP, FUNARTE, FUNARJ, the Choreographic Centre of the City of Rio de Janeiro and the Teatro Amazonas.",
      },
      {
        titulo: "International markets",
        texto:
          "The company's director represented Brazil at MICA 2023 in Argentina, selected by the Ministry of Culture, and is a member of the International Dance Council, a UNESCO partner organisation.",
      },
      {
        titulo: "Officially recorded awards",
        texto:
          "Third place at the FUNARJ Dance Award 2022 with Curu-MIM, recorded in the selection committee minutes. And the Funarte Masters of the Arts Award, with the company as the proponent for master Marly Tavares, in the official 2026 results.",
      },
      {
        titulo: "Ibero-American exchange",
        texto:
          "The company performed at MoviRio Festival in the edition selected by Iberescena, the SEGIB fund with 17 member countries, alongside Cia Cláudio Bernardo, from Belgium.",
      },
    ],
    acessTitulo: "Accessibility built into the work",
    acessTexto:
      "The company runs an autism-friendly adapted session with a specialist educator, and dance films with audio description. It maintains a social branch in Rio Comprido teaching performing arts to children in vulnerable situations, and part of the cast comes from that training. For circuits and grants that require accessibility commitments, the repertoire already arrives ready.",
    contatoTitulo: "Contact the company",
    contatoLead:
      "Direction and choreography: Carlos Fontinelle. We work in Portuguese, Spanish and English.",
    voltar: "Go to the company website",
    rodape:
      "Vivá Cia de Dança · original contemporary dance · Rio de Janeiro, Brazil · since 2012",
  },

  es: {
    kicker: "Internacional · mercado",
    h1: "El repertorio brasileño que atraviesa",
    lead:
      "Vivá Cia de Danza crea danza contemporánea de autor en Río de Janeiro desde 2012. Esta página es para quien programa, compra y coproduce: el catálogo de lo que la compañía vende, cómo se contrata y por dónde ya circuló.",
    ctaContato: "Hablar con la compañía",
    ctaVideo: "Ver el portafolio en video",
    numerosTitulo: "La compañía",
    numeros: [
      { n: FATOS.anos, l: "años de historia, sin un año en blanco" },
      { n: FATOS.espetaculos, l: "obras en el repertorio oficial" },
      { n: FATOS.premios, l: "premios y convocatorias" },
      { n: FATOS.apresentacoes, l: "funciones del repertorio" },
    ],
    catalogoTitulo: "Catálogo de repertorio",
    catalogoLead:
      "Dos obras listas para circular, con elenco formado, ficha técnica cerrada y más de una década de camino.",
    obras: [
      {
        titulo: "Pé de Cachimbo",
        ano: "2014",
        tag: "En cartel hace más de diez años",
        sinopse:
          "El folclore brasileño y el rescate de la infancia y del juego. Rondas, cantigas e imaginario popular: un adulto reencuentra su propia infancia por el movimiento. Es la obra que nació del primer fomento y dio origen a la compañía.",
        itens: [
          ["Público", "Todas las edades, con fuerte adhesión de niños, adolescentes y escuelas"],
          ["Formatos", "Versión de sala y versión adaptada para calle y espacios abiertos"],
          ["Accesibilidad", "Función adaptada para personas autistas, con psicopedagoga"],
          ["Reconocimiento", "Mención de honor en el 11º Premio Zilka Sallaberry de Teatro Infantil (2016) · Fomento Cidade Olímpica (2016) · ocupación del Teatro Glaucio Gill"],
          ["Presentada por", "FUNARTE, FUNARJ, SESI-SP, SESC, Centro Coreográfico de Río y escuelas públicas"],
        ],
        foto: FOTO_PE,
        alt: "Escena del espectáculo Pé de Cachimbo, de Vivá Cia de Danza",
      },
      {
        titulo: "Sobre as Ondas do Mar",
        ano: "2014",
        tag: "Música brasileña en escena",
        sinopse:
          "Libremente inspirada en las canciones de Dorival Caymmi. El mar, Bahía y el cancionero brasileño traducidos en movimiento. Abrió el 7º Festival Amazonas de Danza, en el Teatro Amazonas, en Manaos.",
        itens: [
          ["Por qué exporta bien", "Entrega cultura brasileña reconocible sin depender de texto hablado"],
          ["Banda sonora", "Repertorio de Dorival Caymmi en lectura escénica de autor"],
          ["Circulación", "Teatro Amazonas · MoviRio Festival, en el Teatro João Caetano"],
        ],
        foto: FOTO_ONDAS,
        alt: "Elenco de Vivá Cia de Danza en escena",
      },
    ],
    servicosTitulo: "También vendemos",
    servicos: [
      {
        titulo: "Talleres Corpo Brinquedo",
        texto:
          "Metodología propia de la compañía, que parte del juego y de los estudios de Laban. Formatos para bailarines, docentes y escuelas.",
      },
      {
        titulo: "Residencia y coreografía por encargo",
        texto:
          "Residencia de creación y coreografía por encargo para compañías, circuitos y escuelas extranjeras.",
      },
      {
        titulo: "Coproducción de obra inédita",
        texto:
          "Labirinthus Fantástico, creación para 2027 que une danza, teatro de animación e inteligencia artificial. Abierta a coproductor internacional.",
      },
    ],
    contratarTitulo: "Cómo contratar",
    contratarLead: "El camino es corto. Escríbanos y recibe de vuelta:",
    contratar: [
      "Ficha técnica completa, con duración, número de artistas en escena y rider de luz y sonido",
      "Video íntegro de la obra y material de prensa",
      "Propuesta de cachet por función o por temporada, con necesidades de viaje y montaje",
      "Fechas disponibles en 2027, año en que la compañía cumple 15 años",
    ],
    trajetoriaTitulo: "Trayectoria y reconocimiento",
    trajetoria: [
      {
        titulo: "Un origen premiado",
        texto:
          "La compañía nació del Premio Nuevos Coreógrafos de la Alcaldía de Río de Janeiro, en 2012, y desde entonces no pasó un año sin producir.",
      },
      {
        titulo: "Equipamientos y circuitos",
        texto:
          "SESC, SESI-SP, FUNARTE, FUNARJ, Centro Coreográfico de la Ciudad de Río de Janeiro y Teatro Amazonas.",
      },
      {
        titulo: "Mercados internacionales",
        texto:
          "La dirección de la compañía representó a Brasil en el MICA 2023, en Argentina, seleccionada por el Ministerio de Cultura, e integra el International Dance Council, organización socia de la UNESCO.",
      },
      {
        titulo: "Premios con registro oficial",
        texto:
          "Tercer lugar en el Premio de Danza de FUNARJ 2022 con Curu-MIM, en acta de la comisión de selección. Y el Premio Funarte Maestras y Maestros de las Artes, con la compañía como proponente de la maestra Marly Tavares, en el resultado oficial de 2026.",
      },
      {
        titulo: "Intercambio iberoamericano",
        texto:
          "La compañía integró la programación del MoviRio Festival en la edición seleccionada por Iberescena, fondo de la SEGIB con 17 países, junto a la Cia Cláudio Bernardo, de Bélgica.",
      },
    ],
    acessTitulo: "Accesibilidad como parte de la obra",
    acessTexto:
      "La compañía realiza función adaptada para personas autistas, con acompañamiento de psicopedagoga, y cine-danza con audiodescripción. Mantiene un brazo social en Rio Comprido, donde enseña artes escénicas a niños en vulnerabilidad, y parte del elenco viene de esa formación. Para circuitos y convocatorias que exigen contrapartida de accesibilidad, el repertorio ya llega listo.",
    contatoTitulo: "Hablar con la compañía",
    contatoLead:
      "Dirección y coreografía: Carlos Fontinelle. Atendemos en portugués, español e inglés.",
    voltar: "Ir al sitio de la compañía",
    rodape:
      "Vivá Cia de Danza · danza contemporánea de autor · Río de Janeiro, Brasil · desde 2012",
  },
};
