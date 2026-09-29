export type ServiceCategory = 
  | 'alvenaria'
  | 'pisos-revestimentos'
  | 'pintura'
  | 'demolicao'
  | 'concreto'
  | 'acabamento';

export type UnitType = 'm²' | 'metro' | 'unidade' | 'diária';

export interface ServiceItem {
  id: string;
  name: string;
  category: ServiceCategory;
  categoryLabel: string;
  defaultUnit: UnitType;
  allowedUnits: UnitType[];
  minPrice: number;
  maxPrice: number;
  description: string;
  tips?: string;
}

export interface BudgetItem {
  id: string;
  serviceId: string;
  serviceName: string;
  category: ServiceCategory;
  categoryLabel: string;
  unit: UnitType;
  quantity: number;
  unitPriceMin: number;
  unitPriceMax: number;
  selectedUnitPrice: number; // chosen reference price for total calculation
  subtotal: number;
  subtotalMin: number;
  subtotalMax: number;
  notes?: string;
}

export interface Budget {
  clientName: string;
  projectAddress: string;
  clientPhone?: string;
  contractorName: string;
  contractorPhone: string;
  date: string;
  validityDays: number;
  paymentTerms: string;
  items: BudgetItem[];
  generalNotes: string;
}
