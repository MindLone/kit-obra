/**
 * Configuração central da aplicação
 * Permite alterar facilmente textos, links, contatos e valores da identidade.
 */
export const APP_CONFIG = {
  // Identidade e Nomes
  name: "Obra Sem Mistério",
  shortName: "Obra Sem Mistério",
  tagline: "Descubra quanto cobrar pela sua mão de obra.",
  
  // Hero / Cabeçalho Principal
  heroTitle: "SAIBA QUANTO COBRAR PELA SUA MÃO DE OBRA",
  heroSubtitle: "Consulte valores de referência para os principais serviços de construção e reforma e tenha mais segurança na hora de montar seus preços.",
  heroExplanation: "Escolha o serviço, informe a quantidade e veja uma faixa de preço de referência.",
  heroCta: "QUERO A TABELA DE PREÇOS!",

  // Observações e Avisos de Referência
  disclaimerText: "Os valores são referências e podem variar conforme região, dificuldade, acabamento, condições da obra e experiência do profissional.",
  demoNoticeBadge: "PARA PROFISSIONAIS DE REFORMA",
  methodologyNotice: "Tabela organizada com base em composições referenciais e médias práticas de mercado para prestadores autônomos. Valores de demonstração sujeitos a calibração regional.",

  // Configuração do Vídeo VTurb (Proporção 9:16 vertical)
  vturb: {
    // Caso use o script do VTurb, cole seu ID do vídeo aqui (ex: "65e..."):
    videoId: "",
    // Caso use iframe direto do VTurb ou CDN, coloque aqui:
    iframeUrl: "",
    // Código HTML personalizado do player VTurb (se fornecido pelo painel do VTurb):
    customEmbedHtml: "",
  },

  // Contato WhatsApp (Configure o número abaixo, somente dígitos com DDI e DDD)
  whatsappNumber: "5511999999999", // Altere aqui o número oficial
  whatsappContactLabel: "Falar pelo WhatsApp",
  whatsappDefaultMsg: "Olá! Vim pelo site Quanto Cobrar na Obra e gostaria de tirar uma dúvida.",

  // Bloco de Venda do Produto Digital
  sales: {
    badge: "PRODUTO DIGITAL COMPLETO",
    title: "KIT DE PREÇOS E ORÇAMENTOS PARA OBRAS 2026",
    subtitle: "O guia prático para pedreiros e empreiteiros nunca mais cobrarem no chute.",
    price: "R$ 9,90",
    priceNote: "Pagamento único · Acesso imediato",
    features: [
      "Tabela completa com mais de 80 serviços de construção",
      "Calculadora avançada de diárias e rendimento",
      "Modelo pronto de Contrato de Mão de Obra (Word e PDF)",
      "Modelo de Recibo de Pagamento para cliente",
      "Planilha automática para celular e computador",
      "Atualizações de faixas de preço de mercado"
    ],
    ctaButton: "QUERO ACESSAR AGORA",
    // Link oficial de checkout
    checkoutUrl: "https://ggcheckout.app/checkout/v5/AlRWpa04VsGki8inQoru",
  }
};
