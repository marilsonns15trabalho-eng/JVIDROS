// ============================================================
// BANCO DE CONHECIMENTO DA JVIDROS - 100% OFFLINE
// ============================================================

export interface KnowledgeEntry {
  keywords: string[];
  response: string;
  shouldRedirect?: boolean;
  category?: string;
}

export const knowledgeBase: KnowledgeEntry[] = [
  // ============================================================
  // SAUDAÇÕES E CONVERSA COTIDIANA
  // ============================================================
  {
    keywords: ["olá", "oi", "ola", "e aí", "fala", "opa", "salve"],
    response:
      "Olá! Tudo bem? Seja bem-vindo à JVidros! Como posso ajudar você hoje?",
  },
  {
    keywords: ["bom dia", "boa tarde", "boa noite"],
    response:
      "Olá! Que ótimo ter você por aqui. Como posso ajudar você hoje?",
  },
  {
    keywords: ["tudo bem", "tudo bom", "como vai", "como está", "beleza"],
    response:
      "Tudo ótimo, sim! E com você? Estou aqui para ajudar com o que precisar sobre nossos serviços!",
  },
  {
    keywords: ["obrigado", "obrigada", "valeu", "grato", "agradeço"],
    response:
      "Por nada! Fico muito feliz em ajudar. Se precisar de mais alguma coisa, estou aqui! Volte sempre!",
  },
  {
    keywords: ["tchau", "adeus", "até logo", "até mais", "falou", "flw"],
    response:
      "Tchau! Foi um prazer conversar com você. Qualquer dúvida, estou aqui! Volte sempre que precisar!",
  },

  // ============================================================
  // SERVIÇOS OFERECIDOS
  // ============================================================
  {
    keywords: [
      "serviço",
      "serviços",
      "oferecem",
      "fazem",
      "trabalham",
      "produtos",
      "soluções",
    ],
    response: `A JVidros oferece uma ampla gama de soluções em vidro!

Nossos principais serviços:
• Box de Vidro para Banheiro
• Fechamento de Sacada
• Portas de Vidro
• Divisórias de Vidro
• Vidros sob Medida
• Espelhos Decorativos

Todos os nossos serviços contam com instalação profissional e garantia de 5 anos! Quer saber mais sobre algum deles em específico?`,
  },
  {
    keywords: ["box", "banheiro", "box de vidro", "box banheiro", "vidro banheiro"],
    response: `Box de Vidro para Banheiro - Um dos nossos serviços mais procurados!

Diferenciais:
• Vidro temperado de alta resistência
• Perfis em alumínio ou aço inox
• Medidas personalizadas para cada espaço
• Instalação profissional com equipe qualificada
• Garantia de 5 anos

Vantagens: Mais elegância, valorização do imóvel e facilidade de limpeza!

Quer um orçamento personalizado? Posso te encaminhar para nossa equipe no WhatsApp!`,
  },
  {
    keywords: [
      "sacada",
      "fechamento sacada",
      "fechar sacada",
      "varanda",
      "fechamento varanda",
    ],
    response: `Fechamento de Sacada - Transforme sua sacada em um ambiente aconchegante!

Opções disponíveis:
• Vidro temperado com corrimão
• Painéis fixos ou deslizantes
• Guarda-corpo em vidro
• Sistemas com perfis de alumínio

Benefícios: Valorização do imóvel, proteção contra vento/chuva, segurança e mais privacidade!

Posso ajudar com mais detalhes sobre qual opção é melhor para você!`,
  },
  {
    keywords: ["porta", "portas vidro", "porta vidro", "porta de vidro", "portas de vidro"],
    response: `Portas de Vidro - Beleza e funcionalidade para seu ambiente!

Opções disponíveis:
• Portas de correr
• Portas pivotantes
• Portas de abrir
• Com puxadores de diversos modelos

Vantagens: Ambientes mais amplos, iluminação natural e design moderno!

Trabalhamos com vidros temperados e laminados para máxima segurança!`,
  },
  {
    keywords: ["divisória", "divisórias", "divisoria", "divisorias", "paredes vidro"],
    response: `Divisórias de Vidro - Solução moderna para ambientes corporativos e residenciais!

Aplicações:
• Escritórios e salas comerciais
• Ambientes residenciais (salas, cozinhas)
• Lojas e vitrines
• Salas de reunião

Vantagens: Mais luz natural, sensação de amplitude e design sofisticado!

Temos diversas opções de acabamento e espessura!`,
  },
  {
    keywords: ["vidro sob medida", "vidro personalizado", "vidro medida", "vidros sob medida"],
    response: `Vidros sob Medida - Atendemos projetos personalizados para sua residência ou empresa!

Possibilidades:
• Janelas e vitrines
• Fachadas de vidro
• Coberturas e claraboias
• Guarda-corpos
• Painéis decorativos

Trabalhamos com vidros temperados, laminados, serigrafados e com películas de proteção!

Conte conosco para realizar seu projeto!`,
  },
  {
    keywords: ["espelho", "espelhos", "espelho decorativo", "espelho banheiro"],
    response: `Espelhos - Elegância e funcionalidade para todos os ambientes!

Opções:
• Espelhos para banheiros
• Espelhos decorativos para salas e quartos
• Espelhos para academias e comércios
• Espelhos com iluminação LED (sob consulta)

Diferencial: Cortes precisos e acabamento impecável!

Tem um projeto em mente? Me conte mais!`,
  },

  // ============================================================
  // INFORMAÇÕES DA EMPRESA
  // ============================================================
  {
    keywords: ["sobre", "empresa", "quem somos", "história", "experiência", "anos"],
    response: `Sobre a JVidros

A JVidros é uma vidraçaria especializada em soluções em vidro para residências e empresas. Com mais de 10 anos de experiência no mercado, oferecemos produtos de alta qualidade, instalação profissional e atendimento personalizado.

Nossa Missão: Transformar ambientes com elegância, transparência e funcionalidade.

Diferenciais:
• Atendimento consultivo e gratuito
• Equipe qualificada e experiente
• Garantia de 5 anos nos serviços
• Orçamento sem compromisso
• Materiais de primeira linha

Conte com a gente para realizar seus projetos!`,
  },
  {
    keywords: ["diferenciais", "diferencial", "vantagens", "porque escolher", "qualidade"],
    response: `Por que escolher a JVidros?

• Atendimento Personalizado: Cada projeto é único e tratamos com a atenção que merece.
• Instalação Profissional: Equipe treinada para garantir acabamento impecável.
• Garantia de 5 Anos: Segurança e confiança nos nossos serviços.
• Orçamento Gratuito: Sem compromisso, você avalia antes de decidir.
• Qualidade Garantida: Vidros temperados e laminados de alta performance.
• Experiência Comprovada: Mais de 10 anos realizando projetos com excelência.

Pronto para começar seu projeto? Estamos aqui para ajudar!`,
  },

  // ============================================================
  // CONTATO E LOCALIZAÇÃO
  // ============================================================
  {
    keywords: ["contato", "falar", "telefone", "número", "whatsapp", "celular", "ligar"],
    response: `Entre em contato com a JVidros!

WhatsApp: (11) 99999-9999
Telefone: (11) 3333-4444
Instagram: @jvidros
Endereço: Rua Exemplo, 123 - São Paulo, SP

Horário de Funcionamento:
Segunda a Sexta: 8h às 18h
Sábado: 8h às 13h

Tem uma dúvida ou quer um orçamento? É só chamar a gente! Estamos prontos para atender você!`,
  },
  {
    keywords: ["endereço", "localização", "onde fica", "rua", "bairro", "cidade", "encontrar"],
    response: `Onde nos encontrar?

JVidros
Rua Exemplo, 123 - Bairro Central
São Paulo - SP
CEP: 00000-000

Estacionamento fácil nas proximidades.
Próximo ao metrô (Estação Exemplo).

Quer visitar nossa loja? Estamos de braços abertos para receber você!`,
  },
  {
    keywords: ["horário", "funcionamento", "abre", "fecha", "hora", "horario", "atendimento"],
    response: `Horário de Funcionamento da JVidros

Segunda a Sexta: 8h às 18h
Sábado: 8h às 13h
Domingo: Fechado

Atendimento pelo WhatsApp também pode ser feito fora do horário comercial! Envie sua mensagem que retornamos assim que possível.

Estamos prontos para atender você!`,
  },

  // ============================================================
  // ORÇAMENTO E NEGÓCIO
  // ============================================================
  {
    keywords: [
      "orçamento",
      "orcamento",
      "preço",
      "preco",
      "quanto custa",
      "valor",
      "custo",
      "preços",
      "precos",
      "valores",
      "orcar",
      "cotar",
    ],
    response: `Orçamento na JVidros

Para te dar um orçamento preciso e justo, realizamos uma análise detalhada do seu projeto, considerando:

• Dimensões e medidas do local
• Tipo de vidro (temperado, laminado, espessura)
• Acabamentos (perfis, puxadores, ferragens)
• Complexidade da instalação

O ideal é uma visita técnica para tirar medidas exatas e avaliar todas as necessidades.

Quer agendar uma visita ou saber mais? Vou te encaminhar para nossa equipe no WhatsApp! Eles vão te atender com todo carinho!`,
    shouldRedirect: true,
  },

  // ============================================================
  // GARANTIA E PRAZOS
  // ============================================================
  {
    keywords: ["garantia", "garantir", "certificado", "seguro"],
    response: `Garantia JVidros

Oferecemos garantia de 5 anos contra defeitos de fabricação e instalação em todos os nossos serviços!

O que cobre:
• Defeitos no vidro (bolhas, trincas)
• Problemas com ferragens e perfis
• Falhas na instalação

O que não cobre:
• Danos causados por mau uso
• Impactos acidentais
• Manutenção inadequada

Trabalhamos com materiais de alta qualidade para que você tenha tranquilidade e segurança!`,
  },
  {
    keywords: ["prazo", "entrega", "demora", "tempo", "instalação", "quando fica pronto"],
    response: `Prazo de Entrega e Instalação

O prazo varia conforme a complexidade do projeto:

• Projetos simples: 5 a 7 dias úteis (após aprovação do orçamento)
• Projetos complexos: 10 a 15 dias úteis (após aprovação do orçamento)

Etapas do processo:
1. Visita técnica e medição
2. Elaboração do orçamento
3. Aprovação do cliente
4. Fabricação
5. Instalação

Quer saber mais sobre prazos para seu projeto específico? Fale com nossa equipe!`,
  },

  // ============================================================
  // TIPOS DE VIDRO E INSTALAÇÃO
  // ============================================================
  {
    keywords: ["vidro temperado", "temperado", "vidro laminado", "laminado", "segurança"],
    response: `Tipos de Vidro que trabalhamos

• Vidro Temperado: Até 5x mais resistente que o vidro comum. Ideal para boxes, portas e fechamentos. Em caso de quebra, se fragmenta em pequenos pedaços, reduzindo riscos.

• Vidro Laminado: Composto por duas ou mais camadas com uma película intermediária. Oferece maior segurança e isolamento acústico.

• Vidro Serigrafado: Com desenhos ou texturas, ótimo para privacidade e decoração.

• Vidro com Película: Proteção contra raios UV e maior segurança.

Todos os nossos vidros são certificados e atendem às normas de segurança!

Tem dúvida sobre qual tipo escolher? Me pergunte!`,
  },
  {
    keywords: ["instalação", "instalar", "montagem", "colocar"],
    response: `Instalação Profissional

Nossa equipe de instalação é treinada e experiente para garantir:

• Precisão: Medidas exatas e ajustes perfeitos
• Segurança: Uso de equipamentos e técnicas adequadas
• Acabamento: Instalação limpa e com qualidade estética
• Limpeza: Deixamos o local organizado após a instalação

Tudo incluso no orçamento! Sem taxas ou custos extras surpresa!

Confie na JVidros para transformar seu ambiente!`,
  },

  // ============================================================
  // PORTFÓLIO E PROJETOS
  // ============================================================
  {
    keywords: ["portfólio", "portfolio", "projetos", "fotos", "galeria", "já fizeram", "trabalhos"],
    response: `Portfólio JVidros

Realizamos diversos projetos com excelência!

Residenciais: Box de banheiro, fechamento de sacadas, portas de vidro, divisórias internas

Comerciais: Fachadas de vidro, divisórias para escritórios, vitrines, espelhos decorativos

Temos um portfólio diversificado com fotos dos nossos melhores projetos!

Quer ver mais detalhes ou tem um projeto inspirado em algum trabalho nosso? Posso te ajudar a encontrar a melhor solução!`,
  },

  // ============================================================
  // REDES SOCIAIS
  // ============================================================
  {
    keywords: ["instagram", "rede social", "facebook", "redes", "seguir", "jvidros"],
    response: `Siga a JVidros nas Redes Sociais!

Instagram: @jvidros
• Veja nossos projetos realizados
• Acompanhe novidades e promoções
• Inspire-se para seu projeto

Siga lá e não perca nenhuma novidade!

Tem alguma dúvida sobre nossos serviços? Estou aqui para ajudar!`,
  },
];

// ============================================================
// FUNÇÃO DE BUSCA INTELIGENTE
// ============================================================

export function findBestResponse(input: string): KnowledgeEntry | null {
  const lowerInput = input.toLowerCase().trim();

  // Saudações com resposta condicional por período do dia
  if (lowerInput.includes("bom dia")) {
    return {
      keywords: ["bom dia"],
      response:
        "Bom dia! Que ótimo começar o dia com sua visita. O que você está procurando?",
    };
  }
  if (lowerInput.includes("boa tarde")) {
    return {
      keywords: ["boa tarde"],
      response:
        "Boa tarde! Espero que esteja tendo um ótimo dia! Em que posso ajudar?",
    };
  }
  if (lowerInput.includes("boa noite")) {
    return {
      keywords: ["boa noite"],
      response:
        "Boa noite! Fico feliz em atender você mesmo neste horário. Como posso ajudar?",
    };
  }

  // Busca por correspondência de palavra-chave
  for (const entry of knowledgeBase) {
    for (const keyword of entry.keywords) {
      if (lowerInput.includes(keyword)) {
        return entry;
      }
    }
  }

  // Se não encontrou, retorna null (vai encaminhar para WhatsApp)
  return null;
}