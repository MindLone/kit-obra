import React from 'react';
import { Lock, Calculator, ArrowDownCircle } from 'lucide-react';
import { ServiceItem } from '../types';
import { SERVICES_DATABASE, formatCurrency } from '../data/servicesData';

interface PriceTableProps {
  onSelectForCalculation: (service: ServiceItem) => void;
}

// 5 serviços essenciais e conhecidos por qualquer profissional ou cliente
const SAMPLE_SERVICES_IDS = [
  'alv-bloco-estrutural',
  'reboco-massa-unica',
  'contrapiso-farofa',
  'piso-ceramico-padrao',
  'pintura-latex-parede',
];

export const PriceTable: React.FC<PriceTableProps> = ({ onSelectForCalculation }) => {
  const sampleServices = SERVICES_DATABASE.filter((s) =>
    SAMPLE_SERVICES_IDS.includes(s.id)
  );

  const scrollToSales = () => {
    const el = document.getElementById('venda-produto');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="tabela-precos" className="scroll-mt-4">
      <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-sm p-4 sm:p-5">
        {/* Cabeçalho Enxuto e Fácil de Entender */}
        <div className="flex items-center justify-between gap-2 pb-3 border-b border-neutral-100">
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
              Amostra Gratuita
            </span>
            <h2 className="text-lg sm:text-xl font-black text-neutral-900 mt-1 leading-tight">
              Preços de Referência (Exemplos)
            </h2>
            <p className="text-xs text-neutral-600 mt-0.5">
              Valores médios cobrados por metro quadrado:
            </p>
          </div>
        </div>

        {/* Lista Super Simpla e Legível (Até um senhor de 90 anos entende) */}
        <div className="divide-y divide-neutral-100 mt-2">
          {sampleServices.map((item) => (
            <div
              key={item.id}
              className="py-2.5 flex items-center justify-between gap-3 text-left"
            >
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-neutral-900 leading-snug">
                  {item.name}
                </p>
                <p className="text-xs text-neutral-600 font-medium">
                  Faixa:{' '}
                  <strong className="text-neutral-900 font-mono text-sm">
                    {formatCurrency(item.minPrice)} a {formatCurrency(item.maxPrice)}
                  </strong>{' '}
                  /{item.defaultUnit}
                </p>
              </div>

              <button
                type="button"
                onClick={() => onSelectForCalculation(item)}
                className="h-8 px-2.5 bg-neutral-100 hover:bg-neutral-200 active:bg-neutral-300 text-neutral-800 rounded-lg text-xs font-bold flex items-center gap-1 shrink-0 cursor-pointer touch-manipulation border border-neutral-200"
                title={`Usar ${item.name} na calculadora`}
              >
                <Calculator className="w-3.5 h-3.5 text-amber-600" />
                <span>Usar</span>
              </button>
            </div>
          ))}
        </div>

        {/* Chamada Compacta para o Produto Completo (Planilha + PDF por R$ 10) */}
        <div className="mt-3.5 bg-amber-500/10 border border-amber-300 rounded-xl p-3 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-2.5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-neutral-950 flex items-center justify-center shrink-0 font-bold">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-extrabold text-neutral-900 leading-tight">
                Quer a tabela com +80 serviços completos?
              </p>
              <p className="text-[11px] text-neutral-600">
                Planilha pronta + Guia em PDF no <strong>Obra Sem Mistério</strong> por apenas <strong>R$ 10,00</strong>.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={scrollToSales}
            className="w-full sm:w-auto h-9 px-4 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-neutral-950 font-black text-xs rounded-xl shadow-xs flex items-center justify-center gap-1.5 shrink-0 cursor-pointer touch-manipulation transition-colors"
          >
            <span>Ver Tabela Completa (R$ 10)</span>
            <ArrowDownCircle className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
