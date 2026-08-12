// Página pública de imprensa e registros da Vivá Cia de Dança.
//
// REGRA DESTA PÁGINA: nada entra aqui sem link conferido. Todo item abaixo foi
// aberto e verificado em 12/08/2026 — matéria no ar e falando desta companhia
// (existe uma "Roda Viva Cia de Dança" no RN e o festival VIVADANÇA na BA que
// aparecem nas mesmas buscas e NÃO são a Vivá).
//
// NÃO ENTRA: valores de captação, editais como fonte de sustento, número sem
// fonte pública. Prêmio e edital entram como reconhecimento, sem cifra.

export const CONTATO = {
  email: "vivaciadedanca@gmail.com",
  emailDirecao: "carlosfontinelle@sededomovimento.art",
  telefone: "+55 21 97929-3883",
  telefoneLink: "5521979293883",
  instagram: "https://instagram.com/vivaciadedanca",
  youtube: "https://www.youtube.com/@vivaciadedanca",
  videoPortfolio: "https://www.youtube.com/watch?v=mLYStUD4SmU",
};

export const MANIFESTO = [
  "A Vivá Cia de Dança nasceu em 2012, no Rio de Janeiro, de um prêmio público para novos coreógrafos — e desde então não passou um ano sem criar. É uma companhia de dança contemporânea de repertório autoral: não interpreta obra alheia, cria a própria, e mantém obras em cartaz por mais de uma década. Direção e coreografia de Carlos Fontinelle.",
  "O que ela faz de mais raro é transformar matéria-prima brasileira em linguagem contemporânea sem folclorizar. O folclore e o brincar em Pé de Cachimbo. O cancioneiro de Dorival Caymmi em Sobre as Ondas do Mar. A memória em Fina Camada. A cultura dos povos originários em Curu-MIM, com consultoria indígena creditada — não sobre eles, com eles.",
  "Fortalecer a cultura brasileira, na prática, é isto: uma companhia que leva repertório nacional a teatros públicos, a unidades do SESC e do SESI, a escolas da rede pública e a praças, e que forma o próprio elenco dentro de um projeto social em Rio Comprido. A obra circula, o público se forma, e o artista que dança hoje foi o aluno de ontem.",
  "Esta página existe para quem precisa conferir: jornalista, programador, curador, parecerista de edital. Cada item abaixo tem link e pode ser aberto agora.",
];

export type Materia = {
  veiculo: string;
  data: string;
  titulo: string;
  url: string;
  assunto: string;
};

export const GRANDE_IMPRENSA: Materia[] = [
  {
    veiculo: "O Globo",
    data: "17/11/2016",
    titulo: "Em cartaz no Teatro Glaucio Gill, 'Pé de Cachimbo' resgata a infância",
    url: "https://oglobo.globo.com/rio/bairros/em-cartaz-no-teatro-glaucio-gill-pe-de-cachimbo-resgata-infancia-20475696",
    assunto: "Pé de Cachimbo · matéria assinada",
  },
  {
    veiculo: "O Globo",
    data: "14/08/2021",
    titulo: "Websérie grátis criada no Rio Comprido tem a esperança como tema",
    url: "https://oglobo.globo.com/rio/carnaval/noticia/2021/08/webserie-gratis-criada-no-rio-comprido-tem-esperanca-como-tema-25140582.ghtml",
    assunto: "Websérie Outonos · parceria SESC Rio",
  },
  {
    veiculo: "Agência Brasil · EBC",
    data: "08/08/2022",
    titulo: "Transformar para Reconstruir é tema do Festival Movirio",
    url: "https://agenciabrasil.ebc.com.br/geral/noticia/2022-08/transformar-para-reconstruir-e-tema-do-festival-movirio",
    assunto: "Agência pública federal · Sobre as Ondas do Mar",
  },
  {
    veiculo: "O Povo (CE)",
    data: "08/08/2022",
    titulo: "Transformar para Reconstruir é tema do Festival Movirio",
    url: "https://www.opovo.com.br/noticias/brasil/2022/08/08/transformar-para-reconstruir-e-tema-do-festival-movirio.html",
    assunto: "Alcance nacional da matéria da Agência Brasil",
  },
  {
    veiculo: "Jornal do Brasil",
    data: "01/09/2018",
    titulo: "Praça Tiradentes, a terra das mil danças",
    url: "https://www.jb.com.br/cultura/2018/09/2548-praca-tiradentes-a-terra-das-mil-dancas.html",
    assunto: "A companhia como hors concours",
  },
  {
    veiculo: "O Dia",
    data: "07/03/2024",
    titulo:
      "Sesc Meriti apresenta espetáculo de dança contemporânea sobre a cultura dos povos originários",
    url: "https://odia.ig.com.br/sao-joao-de-meriti/2024/03/6805663-sesc-meriti-apresenta-espetaculo-de-danca-contemporanea-sobre-a-cultura-dos-povos-originarios.html",
    assunto: "Curu-MIM · SESC Meriti",
  },
  {
    veiculo: "Correio Popular · Campinas",
    data: "18/08/2023",
    titulo: "Peça 'Pé de Cachimbo' terá três apresentações em Campinas",
    url: "https://correio.rac.com.br/entretenimento/peca-pe-de-cachimbo-tera-tres-apresentac-es-em-campinas-1.1409195",
    assunto: "Entrevista com o diretor · SESI Campinas",
  },
  {
    veiculo: "Diário do Grande ABC",
    data: "12/04/2026",
    titulo: "'Pé de Cachimbo' destaca cultura popular brasileira",
    url: "https://www.dgabc.com.br/Noticia/4294522/pe-de-cachimbo-destaca-cultura-popular-brasileira",
    assunto: "Temporada no SESC Santo André",
  },
  {
    veiculo: "JCNET · Sampi Bauru",
    data: "25/02/2026",
    titulo: "'Pé de Cachimbo' celebra o folclore brasileiro no Sesc Bauru",
    url: "https://sampi.net.br/bauru/noticias/2963747/cultura/2026/02/pe-de-cachimbo-celebra-o-folclore-brasileiro-no-sesc-bauru",
    assunto: "Circulação em São Paulo",
  },
];

export const IMPRENSA_AMAZONAS: Materia[] = [
  {
    veiculo: "A Crítica (AM)",
    data: "07/09/2017",
    titulo: "Longe de Manaus há 21 anos, bailarino faz sua estreia no Teatro Amazonas",
    url: "https://www.acritica.com/entretenimento/longe-de-manaus-ha-21-anos-bailarino-faz-sua-estreia-no-teatro-amazonas-1.90245",
    assunto: "Perfil · abertura do 7º Festival Amazonas de Dança",
  },
  {
    veiculo: "Portal Amazônia",
    data: "31/08/2017",
    titulo: "Bailarino Carlos Fontinelle se apresenta em Manaus",
    url: "https://portalamazonia.com/variedades/bailarino-carlos-fontinelle-se-apresenta-em-manaus/",
    assunto: "Entrevista",
  },
  {
    veiculo: "D24AM",
    data: "04/09/2017",
    titulo: "Espetáculo baseado em obra de Dorival Caymmi no 7º Festival Amazonas de Dança",
    url: "https://d24am.com/plus/artes-e-shows/espetaculo-baseado-em-obra-de-dorival-caymmi-no-7o-festival-amazonas-de-danca/",
    assunto: "Sobre as Ondas do Mar no Teatro Amazonas",
  },
  {
    veiculo: "Portal do Amazonas",
    data: "05/09/2017",
    titulo:
      "Vivá Cia de Dança apresenta o espetáculo 'Sobre as ondas do mar' no 7º Festival Amazonas de Dança",
    url: "https://portaldoamazonas.com/viva-cia-de-danca-apresenta-o-espetaculo-sobre-as-ondas-do-mar-no-7o-festival-amazonas-de-danca/",
    assunto: "Ficha técnica completa",
  },
];

export const ESPECIALIZADA: Materia[] = [
  {
    veiculo: "Agenda de Dança",
    data: "12/11/2022",
    titulo: "Vivá Cia. de Dança comemora 10 anos com estreia do espetáculo CURU-MIM",
    url: "https://www.agendadedanca.com.br/viva-cia-de-danca-comemora-10-anos-com-estreia-do-espetaculo-curu-mim/",
    assunto: "10 anos da companhia · Prêmio FUNARJ 2022",
  },
  {
    veiculo: "Agenda de Dança",
    data: "22/03/2018",
    titulo: "Vivá Cia de Dança leva o espetáculo Fina Camada para o Centro Coreográfico do RJ",
    url: "https://www.agendadedanca.com.br/viva-cia-de-danca-leva-o-espetaculo-fina-camada-para-o-centro-coreografico-do-rio-de-janeiro/",
    assunto: "Fina Camada · Teatro Angel Vianna",
  },
  {
    veiculo: "Agenda de Dança",
    data: "28/11/2018",
    titulo: "Teatro Clara Nunes, na Gávea, recebe o espetáculo 'Sobre as Ondas do Mar'",
    url: "https://www.agendadedanca.com.br/teatro-clara-nunes-gavea-recebe-o-espetaculo-sobre-as-ondas-do-mar/",
    assunto: "Temporada na Gávea",
  },
  {
    veiculo: "Rádio MEC · EBC",
    data: "11/2016",
    titulo: "Dança: 'Pé de Cachimbo' revive cultura popular brasileira",
    url: "https://radiomec.ebc.com.br/arte-clube/edicao/2016-11/danca-pe-de-cachimbo-revive-cultura-popular-brasileira",
    assunto: "Rádio pública federal",
  },
  {
    veiculo: "Dança em Pauta",
    data: "2022",
    titulo: "5º MoviRio Festival explora relação da dança e suas potencialidades cênicas",
    url: "https://www.dancaempauta.com.br/5o-movirio-festival-explora-relacao-da-danca-e-suas-potencialidades-cenicas/",
    assunto: "Portal especializado",
  },
  {
    veiculo: "Promoview",
    data: "03/09/2017",
    titulo: "Vivá Cia de Dança apresenta espetáculo baseado em obra de Dorival Caymmi",
    url: "https://www.promoview.com.br/viva-cia-de-danca-apresenta-espetaculo-baseado-em-obra-de-dorival-caymmi/",
    assunto: "Perfil da companhia",
  },
];

// Removido em 12/08/2026: a matéria do Diário Carioca de 15/08/2022 sobre
// "Sobre as ondas do mar" no Teatro João Caetano era real, mas o domínio
// diariocarioca.com saiu do ar por completo (erro de certificado, sem resposta
// nem na raiz) e não há cópia no Wayback. Só repor com link vivo.
export const REGIONAL: Materia[] = [
  {
    veiculo: "PORTAL · jportal",
    data: "14/11/2022",
    titulo:
      "10 anos de Vivá Cia de Dança e novo espetáculo 'Curu-Mim' destaca ancestralidade dos povos originários",
    url: "https://jportal.com.br/10-anos-de-viva-cia-de-danca-e-novo-espetaculo-curu-mim-destaca-ancestralidade-dos-povos-originarios/",
    assunto: "Estreia no Teatro João Caetano, com Libras",
  },
  {
    veiculo: "Rio Notícias",
    data: "18/11/2022",
    titulo:
      "Cia Vivá estreia espetáculo que utiliza dança para dar visibilidade ao povo indígena",
    url: "https://rionoticias.com.br/cia-viva-estreia-espetaculo-que-utiliza-danca-para-dar-visibilidade-ao-povo-indigena/",
    assunto: "Curu-MIM",
  },
  {
    veiculo: "O São Gonçalo",
    data: "09/08/2021",
    titulo: "Sesc-RJ apresenta websérie 'Outonos', em parceria com Vivá Cia de Dança",
    url: "https://www.osaogoncalo.com.br/cultura-e-lazer/110751/sesc-rj-apresenta-webserie-outonos-em-parceria-com-viva-cia-de-danca",
    assunto: "Websérie Outonos",
  },
  {
    veiculo: "ErreJota Notícias",
    data: "26/02/2024",
    titulo: "Sesc Niterói recebe musical com consultoria da indígena Adriana Korã",
    url: "https://errejotanoticias.com.br/sesc-niteroi-recebe-musical-com-consultoria-da-indigena-adriana-kora/",
    assunto: "Curu-MIM · SESC RJ Pulsar",
  },
  {
    veiculo: "Site da Baixada",
    data: "06/03/2024",
    titulo: "'Curu-mim': Sesc Meriti recebe espetáculo infantil baseado em história indígena",
    url: "https://sitedabaixada.com.br/cultura/2024/03/06/curu-mim-sesc-meriti-recebe-espetaculo-infantil-baseado-em-historia-indigena/",
    assunto: "Curu-MIM",
  },
  {
    veiculo: "Rio em Foco",
    data: "27/07/2022",
    titulo: "Dorival Caymmi inspira espetáculo teatral de dança que acolhe público",
    url: "https://rioemfoco.com.br/2022/07/27/dorival-caymmi-inspira-espetaculo-teatral-de-danca-que-acolhe-publico/",
    assunto: "Theatro Municipal de Niterói",
  },
  {
    veiculo: "Prefeitura de Rio das Ostras",
    data: "07/2016",
    titulo: "Teatro recebe espetáculo de dança no sábado, dia 9",
    url: "https://www.riodasostras.rj.gov.br/teatro-recebe-espetaculo-de-danca-no-sabado-dia-9/",
    assunto: "Pé de Cachimbo · Teatro Popular",
  },
  {
    veiculo: "Rotacult",
    data: "11/2022",
    titulo: "Curu-MIM revisita o significado da palavra VIVÁ",
    url: "https://rotacult.com.br/2022/11/curu-mim-revisita-o-significado-da-palavra-viva/",
    assunto: "Conceito da obra · figurino em material reciclado",
  },
];

export type Registro = {
  orgao: string;
  o_que: string;
  url: string;
};

export const REGISTROS: Registro[] = [
  {
    orgao: "Centro Coreográfico da Cidade do Rio de Janeiro · Prefeitura",
    o_que:
      "Página da temporada de Curu-MIM, com o repertório e a lista de reconhecimentos declarados pela companhia. É o documento público mais completo sobre a Vivá.",
    url: "https://centrocoreografico.com.br/2024/06/04/curu-mim-viva-cia-de-danca/",
  },
  {
    orgao: "Centro Coreográfico da Cidade do Rio de Janeiro · Prefeitura",
    o_que: "Estreia de Flores, em novembro de 2012, na série Novos Criadores.",
    url: "https://centrocoreografico.com.br/2012/10/31/viva-cia-de-danca-apresenta-seu-novo-trabalho-no-novos-criadores/",
  },
  {
    orgao: "CBTIJ · Centro Brasileiro de Teatro para a Infância e Juventude",
    o_que:
      "Resultado do 11º Prêmio Zilka Sallaberry: menção honrosa a Pé de Cachimbo pela qualidade do espetáculo de teatro-dança dedicado ao público infantil.",
    url: "https://cbtij.org.br/2016-11o-premio-zilka-sallaberry-de-teatro-infantil-rio-e-niteroi/",
  },
  {
    orgao: "SESI São Paulo",
    o_que:
      "Ficha do Pé de Cachimbo no projeto Viagem Teatral, com duração, elenco nominal e classificação.",
    url: "https://www.sesisp.org.br/evento/81310698-6704-4c7e-b663-5223764e2bf0/pe-de-cachimbo",
  },
  {
    orgao: "São Paulo Companhia de Dança · Governo do Estado de SP",
    o_que:
      "Verbete de Carlos Fontinelle no acervo da companhia estatal de referência. Há versão em inglês.",
    url: "https://spcd.com.br/verbetes/carlos-fontinelle/",
  },
  {
    orgao: "FUNARTE · Ministério da Cultura",
    o_que:
      "Circuito Klauss Vianna de Dança 2025 — resultado após recursos, com a Vivá Cia de Dança na classificação geral.",
    url: "https://www.gov.br/funarte/pt-br/editais-1/2025/programa-funarte-de-difusao-nacional-2025/circuito-klauss-vianna-de-danca/resultados-apos-recursos-danca-classificacao-geral.pdf",
  },
  {
    orgao: "FUNARTE · Ministério da Cultura",
    o_que:
      "Notícia federal sobre a 5ª edição do MoviRio Festival, realizado pela companhia.",
    url: "https://www.gov.br/funarte/pt-br/assuntos/noticias/todas-noticias/5a-edicao-do-movirio-festival-acontece-ate-o-dia-28-de-agosto",
  },
  {
    orgao: "Diário Oficial da União · Banco do Brasil",
    o_que:
      "Cessão do CCBB Rio de Janeiro à companhia para a mostra de curtas e videodança do festival, em agosto de 2022. Publicado na Seção 3, página 42.",
    url: "https://www.in.gov.br/web/dou/-/extrato-de-cessao-de-uso-421067360",
  },
  {
    orgao: "Diário Oficial da União · FUNARTE",
    o_que:
      "Termo de cessão do Teatro Cacilda Becker à companhia, assinado pelo presidente da FUNARTE, em 2019.",
    url: "https://www.in.gov.br/web/dou/-/extratos-de-instrumentos-contratuais-141441338",
  },
  {
    orgao: "SESC Rio de Janeiro",
    o_que: "Programa Pulsar, que contemplou Curu-MIM na temporada 2023/24.",
    url: "https://www.sescrio.org.br/pulsar/",
  },
];

export const RECONHECIMENTOS = [
  ["2012", "Prêmio Novos Coreógrafos da Cidade do Rio de Janeiro", "deu origem à companhia, com Flores"],
  ["2014", "Prêmio CBTIJ", "Centro Brasileiro de Teatro para a Infância e Juventude"],
  ["2016", "Menção honrosa no 11º Prêmio Zilka Sallaberry", "Pé de Cachimbo"],
  ["2016", "Fomento Cidade Olímpica e ocupação do Teatro Glaucio Gill", "Pé de Cachimbo"],
  ["2017", "Mérito e Honraria como Artista Amazonense", "Governo do Estado do Amazonas"],
  ["2018", "Arte-Escola Territórios Sociais", "oficina Corpo Brinquedo"],
  ["2020", "Ondas da Cultura · FUNARJ", "videodança Boca do Mar"],
  ["2020", "Cultura Presente nas Redes · Fica na Rede Maninho · Festival UP", "projetos digitais"],
  ["2022", "3º lugar no Prêmio de Dança da FUNARJ", "Curu-MIM"],
  ["2023", "Delegação brasileira no MICA, na Argentina", "Ministério da Cultura"],
  ["2023", "SESC Pulsar RJ e Zonas da Cultura", "Curu-MIM"],
  ["2025", "Circuito Klauss Vianna de Dança · FUNARTE", "classificada no resultado nacional"],
  ["2026", "Prêmio Funarte Mestras e Mestres das Artes", "a companhia como proponente da mestra Marly Tavares"],
] as const;

export const CITACOES = [
  {
    texto:
      "Brincadeiras da infância como pique-esconde, pega pega, bola de gude e pipa se misturam com movimentos de dança no espetáculo Pé de Cachimbo, da Vivá Cia de Dança. Samba de roda, forró, baião, maracatu, catira e quadrilhas, somadas, ajudam a construir a montagem, que toca no imaginário afetivo dos adultos e diverte o público infantil.",
    fonte: "O Globo, 17/11/2016",
    url: "https://oglobo.globo.com/rio/bairros/em-cartaz-no-teatro-glaucio-gill-pe-de-cachimbo-resgata-infancia-20475696",
  },
  {
    texto:
      "Através de um jogo coreográfico interpretativo sensível e instigante, Carlos Fontinelle nos desafia a revisitar a cultura indígena através da contemporaneidade para além da herança colonizadora.",
    fonte: "Centro Coreográfico da Cidade do Rio de Janeiro, 2024",
    url: "https://centrocoreografico.com.br/2024/06/04/curu-mim-viva-cia-de-danca/",
  },
  {
    texto:
      "A Vivá Cia. de Dança, criada e dirigida por ele, é a companhia convidada para fazer a abertura do 7º Festival Amazonas de Dança.",
    fonte: "A Crítica, 07/09/2017",
    url: "https://www.acritica.com/entretenimento/longe-de-manaus-ha-21-anos-bailarino-faz-sua-estreia-no-teatro-amazonas-1.90245",
  },
  {
    texto:
      "A websérie nasceu junto com o processo de construção da nossa sede, no ano passado, em meio à pandemia. Outonos mostra que estamos vivendo tempos sombrios, sim, mas que as estações passam e que a natureza sempre volta a florir. Não falamos das tragédias, mas do lado poético que a vida tem. A arte salva!",
    fonte: "Carlos Fontinelle, ao O Globo, 14/08/2021",
    url: "https://oglobo.globo.com/rio/carnaval/noticia/2021/08/webserie-gratis-criada-no-rio-comprido-tem-esperanca-como-tema-25140582.ghtml",
  },
];
