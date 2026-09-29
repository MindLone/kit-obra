import { ServiceCategory, ServiceItem, UnitType } from '../types';

export interface CategoryInfo {
  id: ServiceCategory;
  name: string;
  iconName: string;
  count: number;
}

export const CATEGORIES: CategoryInfo[] = [
  { id: 'alvenaria', name: 'Alvenaria', iconName: 'BrickWall', count: 6 },
  { id: 'pisos-revestimentos', name: 'Pisos e Revestimentos', iconName: 'Grid3X3', count: 5 },
  { id: 'pintura', name: 'Pintura', iconName: 'Paintbrush', count: 4 },
  { id: 'demolicao', name: 'Demolição', iconName: 'Hammer', count: 3 },
  { id: 'concreto', name: 'Concreto', iconName: 'Layers', count: 3 },
  { id: 'acabamento', name: 'Acabamento', iconName: 'CheckCircle2', count: 3 },
];

/**
 * BASE DE DADOS CENTRAL DE SERVIÇOS
 * 
 * ATENÇÃO: Valores de DEMONSTRAÇÃO para fins de referência de cálculo.
 * Podem ser facilmente alterados ou calibrados conforme a região.
 */
export const SERVICES_DATABASE: ServiceItem[] = [
  // --- ALVENARIA ---
  {
    id: 'alv-01',
    name: 'Levantamento de parede',
    category: 'alvenaria',
    categoryLabel: 'Alvenaria',
    defaultUnit: 'm²',
    allowedUnits: ['m²', 'diária'],
    minPrice: 45,
    maxPrice: 75,
    description: 'Assentamento de tijolos cerâmicos ou blocos comuns com prumo e alinhamento.',
    tips: 'Pode variar com a altura do pé direito e necessidade de andaimes.'
  },
  {
    id: 'alv-02',
    name: 'Construção de muro',
    category: 'alvenaria',
    categoryLabel: 'Alvenaria',
    defaultUnit: 'm²',
    allowedUnits: ['m²', 'metro', 'diária'],
    minPrice: 55,
    maxPrice: 90,
    description: 'Alvenaria de vedação com fundação rasa, colunas de amarração e vigamento.',
    tips: 'Considere desníveis de terreno e acesso a materiais.'
  },
  {
    id: 'alv-03',
    name: 'Chapisco',
    category: 'alvenaria',
    categoryLabel: 'Alvenaria',
    defaultUnit: 'm²',
    allowedUnits: ['m²', 'diária'],
    minPrice: 12,
    maxPrice: 22,
    description: 'Aplicação de argamassa de chapisco para aderência do reboco.',
    tips: 'Áreas externas ou de difícil acesso exigem acréscimo.'
  },
  {
    id: 'alv-04',
    name: 'Reboco',
    category: 'alvenaria',
    categoryLabel: 'Alvenaria',
    defaultUnit: 'm²',
    allowedUnits: ['m²', 'diária'],
    minPrice: 28,
    maxPrice: 48,
    description: 'Emboço e reboco desempenado, pronto para pintura ou revestimento.',
    tips: 'Espessura da massa e desempenamento fino influenciam no tempo.'
  },
  {
    id: 'alv-05',
    name: 'Contrapiso',
    category: 'alvenaria',
    categoryLabel: 'Alvenaria',
    defaultUnit: 'm²',
    allowedUnits: ['m²', 'diária'],
    minPrice: 25,
    maxPrice: 42,
    description: 'Preparo da base, nivelamento com mestras e sarrafeamento com caimento.',
    tips: 'Verifique se haverá impermeabilização ou espessura elevada.'
  },
  {
    id: 'alv-06',
    name: 'Assentamento de bloco',
    category: 'alvenaria',
    categoryLabel: 'Alvenaria',
    defaultUnit: 'm²',
    allowedUnits: ['m²', 'unidade', 'diária'],
    minPrice: 48,
    maxPrice: 80,
    description: 'Assentamento de bloco de concreto ou estrutural com amarração reforçada.',
    tips: 'Blocos de concreto pesam mais e demandam mais esforço físico.'
  },

  // --- PISOS E REVESTIMENTOS ---
  {
    id: 'pis-01',
    name: 'Assentamento de piso',
    category: 'pisos-revestimentos',
    categoryLabel: 'Pisos e Revestimentos',
    defaultUnit: 'm²',
    allowedUnits: ['m²', 'diária'],
    minPrice: 35,
    maxPrice: 60,
    description: 'Pisos cerâmicos comuns padrão até 60x60 em contrapiso regularizado.',
    tips: 'Inclui dupla colagem quando recomendada pelo fabricante.'
  },
  {
    id: 'pis-02',
    name: 'Assentamento de revestimento',
    category: 'pisos-revestimentos',
    categoryLabel: 'Pisos e Revestimentos',
    defaultUnit: 'm²',
    allowedUnits: ['m²', 'diária'],
    minPrice: 42,
    maxPrice: 70,
    description: 'Azulejos e revestimentos cerâmicos em paredes de banheiros, cozinhas e lavanderias.',
    tips: 'Cortes de canos, caixas de luz e cantos em meia-esquadria aumentam o valor.'
  },
  {
    id: 'pis-03',
    name: 'Porcelanato',
    category: 'pisos-revestimentos',
    categoryLabel: 'Pisos e Revestimentos',
    defaultUnit: 'm²',
    allowedUnits: ['m²', 'diária'],
    minPrice: 65,
    maxPrice: 110,
    description: 'Assentamento técnico de porcelanato retificado com niveladores e espaçadores.',
    tips: 'Grandes formatos (acima de 90x90 ou 1,20m) exigem preço diferenciado.'
  },
  {
    id: 'pis-04',
    name: 'Rodapé',
    category: 'pisos-revestimentos',
    categoryLabel: 'Pisos e Revestimentos',
    defaultUnit: 'metro',
    allowedUnits: ['metro', 'diária'],
    minPrice: 14,
    maxPrice: 26,
    description: 'Corte, colagem ou assentamento de rodapé cerâmico, porcelanato ou poliestireno.',
    tips: 'Cortes em meia-esquadria nos cantos exigem capricho extra.'
  },
  {
    id: 'pis-05',
    name: 'Rejunte',
    category: 'pisos-revestimentos',
    categoryLabel: 'Pisos e Revestimentos',
    defaultUnit: 'm²',
    allowedUnits: ['m²', 'diária'],
    minPrice: 10,
    maxPrice: 20,
    description: 'Aplicação de rejunte cimentício ou acrílico e limpeza imediata da área.',
    tips: 'Rejunte epóxi exige preço superior por conta da dificuldade de aplicação.'
  },

  // --- PINTURA ---
  {
    id: 'pin-01',
    name: 'Pintura de parede',
    category: 'pintura',
    categoryLabel: 'Pintura',
    defaultUnit: 'm²',
    allowedUnits: ['m²', 'diária'],
    minPrice: 18,
    maxPrice: 32,
    description: 'Aplicação de 2 a 3 demãos de tinta látex acrílica em paredes internas/externas.',
    tips: 'Paredes escuras mudando para cores claras exigem mais demãos.'
  },
  {
    id: 'pin-02',
    name: 'Pintura de teto',
    category: 'pintura',
    categoryLabel: 'Pintura',
    defaultUnit: 'm²',
    allowedUnits: ['m²', 'diária'],
    minPrice: 22,
    maxPrice: 38,
    description: 'Pintura completa de teto e forros (gesso, laje ou madeira).',
    tips: 'Exige maior esforço postural e proteção total do piso inferior.'
  },
  {
    id: 'pin-03',
    name: 'Massa corrida',
    category: 'pintura',
    categoryLabel: 'Pintura',
    defaultUnit: 'm²',
    allowedUnits: ['m²', 'diária'],
    minPrice: 20,
    maxPrice: 36,
    description: 'Aplicação de duas demãos de massa corrida ou acrílica com lixamento.',
    tips: 'Iluminação rasante para garantir superfície lisa e sem ondulações.'
  },
  {
    id: 'pin-04',
    name: 'Preparação de parede',
    category: 'pintura',
    categoryLabel: 'Pintura',
    defaultUnit: 'm²',
    allowedUnits: ['m²', 'diária'],
    minPrice: 12,
    maxPrice: 22,
    description: 'Raspagem de tinta solta, aplicação de fundo preparador e selador acrílico.',
    tips: 'Fundamental para garantir a durabilidade e fixação da nova tinta.'
  },

  // --- DEMOLIÇÃO ---
  {
    id: 'dem-01',
    name: 'Demolição de parede',
    category: 'demolicao',
    categoryLabel: 'Demolição',
    defaultUnit: 'm²',
    allowedUnits: ['m²', 'diária'],
    minPrice: 30,
    maxPrice: 58,
    description: 'Derrubada manual de parede de alvenaria sem função estrutural.',
    tips: 'Verifique se há tubulação elétrica/hidráulica ativa antes de quebrar.'
  },
  {
    id: 'dem-02',
    name: 'Retirada de piso',
    category: 'demolicao',
    categoryLabel: 'Demolição',
    defaultUnit: 'm²',
    allowedUnits: ['m²', 'diária'],
    minPrice: 20,
    maxPrice: 38,
    description: 'Remoção de piso cerâmico antigo com martelete ou talhadeira manual.',
    tips: 'Indicar se inclui remoção da argamassa antiga colada.'
  },
  {
    id: 'dem-03',
    name: 'Retirada de revestimento',
    category: 'demolicao',
    categoryLabel: 'Demolição',
    defaultUnit: 'm²',
    allowedUnits: ['m²', 'diária'],
    minPrice: 22,
    maxPrice: 40,
    description: 'Remoção de azulejos e revestimentos de parede em cozinhas e banheiros.',
    tips: 'Cuidado redobrado com canos de água embutidos na parede.'
  },

  // --- CONCRETO ---
  {
    id: 'con-01',
    name: 'Concretagem',
    category: 'concreto',
    categoryLabel: 'Concreto',
    defaultUnit: 'm²',
    allowedUnits: ['m²', 'diária'],
    minPrice: 32,
    maxPrice: 55,
    description: 'Lançamento, espalhamento, vibração e nivelamento de concreto em laje ou piso.',
    tips: 'Especifique se o concreto é usinado (caminhão) ou virado em betoneira na obra.'
  },
  {
    id: 'con-02',
    name: 'Forma',
    category: 'concreto',
    categoryLabel: 'Concreto',
    defaultUnit: 'm²',
    allowedUnits: ['m²', 'metro', 'diária'],
    minPrice: 40,
    maxPrice: 70,
    description: 'Confecção, travamento e escoramento de formas de madeira compensada para vigas e pilares.',
    tips: 'Escoramento seguro é indispensável para evitar deformação ou acidentes.'
  },
  {
    id: 'con-03',
    name: 'Armadura',
    category: 'concreto',
    categoryLabel: 'Concreto',
    defaultUnit: 'm²',
    allowedUnits: ['m²', 'metro', 'unidade', 'diária'],
    minPrice: 45,
    maxPrice: 78,
    description: 'Corte, dobra, posicionamento e amarração de barras de aço CA-50/CA-60 com arame recozido.',
    tips: 'Exige uso de espaçadores para cobrimento correto do concreto.'
  },

  // --- ACABAMENTO ---
  {
    id: 'aca-01',
    name: 'Instalação de soleira',
    category: 'acabamento',
    categoryLabel: 'Acabamento',
    defaultUnit: 'unidade',
    allowedUnits: ['unidade', 'metro', 'diária'],
    minPrice: 40,
    maxPrice: 75,
    description: 'Assentamento, nivelamento e rejunte de soleira ou peitoril de mármore/granito.',
    tips: 'Requer corte preciso no vão da porta e acabamento fino.'
  },
  {
    id: 'aca-02',
    name: 'Instalação de bancada',
    category: 'acabamento',
    categoryLabel: 'Acabamento',
    defaultUnit: 'unidade',
    allowedUnits: ['unidade', 'diária'],
    minPrice: 150,
    maxPrice: 320,
    description: 'Fixação, chumbamento e nivelamento de bancada de pia em granito ou mármore.',
    tips: 'Necessita de suporte resistente (mão francesa pesada ou chumbadores).'
  },
  {
    id: 'aca-03',
    name: 'Pequenos acabamentos',
    category: 'acabamento',
    categoryLabel: 'Acabamento',
    defaultUnit: 'diária',
    allowedUnits: ['diária', 'unidade'],
    minPrice: 180,
    maxPrice: 280,
    description: 'Retoques diversos, ajustes de portas, vedações com silicone, fixação de acessórios e fechamento de pequenos vãos.',
    tips: 'Modalidade por diária é recomendada quando o serviço é fragmentado.'
  }
];

/**
 * Utilitários para formatação de moeda brasileira
 */
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0
  }).format(value);
}

export function formatCurrencyDecimals(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 2,
    minimumFractionDigits: 2
  }).format(value);
}

export function formatRange(min: number, max: number, unit: string): string {
  return `${formatCurrency(min)} – ${formatCurrency(max)} / ${unit}`;
}
