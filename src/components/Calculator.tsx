import React, { useState, useId } from 'react';
import { Calculator as CalcIcon, Plus, Minus, Trash2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { SERVICES_DATABASE, formatCurrency } from '../data/servicesData';
import { ServiceItem, BudgetItem } from '../types';

interface CalculatorProps {
  onAddToBudget?: (item: BudgetItem) => void;
  selectedServicePreload?: ServiceItem | null;
  onClearPreload?: () => void;
}

export const Calculator: React.FC<CalculatorProps> = ({
  selectedServicePreload,
  onClearPreload,
}) => {
  // Lista de serviços essenciais para exemplo rápido
  const quickServices = SERVICES_DATABASE.slice(0, 15);

  const [selectedId, setSelectedId] = useState<string>(
    selectedServicePreload?.id || quickServices[0]?.id || 'alv-01'
  );
  const [quantity, setQuantity] = useState<number>(20);
  const [budgetItems, setBudgetItems] = useState<BudgetItem[]>([]);
  const [justAdded, setJustAdded] = useState<boolean>(false);

  // Reage se o usuário clicou em um serviço na tabelinha
  React.useEffect(() => {
    if (selectedServicePreload) {
      setSelectedId(selectedServicePreload.id);
      if (onClearPreload) onClearPreload();
    }
  }, [selectedServicePreload, onClearPreload]);

  const currentService =
    SERVICES_DATABASE.find((s) => s.id === selectedId) || quickServices[0];

  const minTotal = currentService ? currentService.minPrice * quantity : 0;
  const maxTotal = currentService ? currentService.maxPrice * quantity : 0;
  const avgUnitPrice = currentService
    ? Math.round((currentService.minPrice + currentService.maxPrice) / 2)
    : 0;
  const avgTotal = avgUnitPrice * quantity;

  const handleAddCurrentToBudget = () => {
    if (!currentService) return;
    const newItem: BudgetItem = {
      id: `${currentService.id}-${Date.now()}`,
      serviceId: currentService.id,
      serviceName: currentService.name,
      category: currentService.category,
      categoryLabel: currentService.categoryLabel,
      unit: currentService.defaultUnit,
      quantity,
      unitPriceMin: currentService.minPrice,
      unitPriceMax: currentService.maxPrice,
      selectedUnitPrice: avgUnitPrice,
      subtotal: avgTotal,
      subtotalMin: minTotal,
      subtotalMax: maxTotal,
      notes: '',
    };

    setBudgetItems((prev) => [newItem, ...prev]);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  const handleRemoveBudgetItem = (id: string) => {
    setBudgetItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearBudget = () => {
    setBudgetItems([]);
  };

  const totalBudgetAmount = budgetItems.reduce((acc, cur) => acc + cur.subtotal, 0);

  const scrollToSales = () => {
    const el = document.getElementById('venda-produto');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="calculadora-section" className="scroll-mt-4">
      <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-4 sm:p-6 text-neutral-900">
        
        {/* Cabeçalho super simples */}
        <div className="text-center sm:text-left pb-4 border-b border-neutral-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <span className="inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
              <CalcIcon className="w-3.5 h-3.5 text-amber-600" />
              Exemplo Rápido de Cálculo
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-neutral-900 mt-1 leading-tight">
              Simule um Orçamento em Segundos
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">
              Veja na prática como é simples calcular a mão de obra da sua obra:
            </p>
          </div>
        </div>

        {/* Formulário Compacto em 1 Tela (Sem passos complicados) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 mt-4 items-center">
          
          {/* Lado Esquerdo: Escolher Serviço e Quantidade */}
          <div className="md:col-span-7 space-y-4">
            
            {/* 1. Escolha do Serviço */}
            <div>
              <label htmlFor="service-select" className="block text-xs font-black text-neutral-800 uppercase tracking-wide mb-1.5">
                1. Escolha o Serviço
              </label>
              <select
                id="service-select"
                value={selectedId}
                onChange={(e) => setSelectedId(e.target.value)}
                className="w-full h-12 px-3 text-sm sm:text-base font-bold bg-neutral-50 hover:bg-neutral-100/80 border-2 border-neutral-300 rounded-xl focus:border-amber-500 focus:bg-white outline-none transition-colors cursor-pointer text-neutral-900"
              >
                {SERVICES_DATABASE.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name} ({formatCurrency(s.minPrice)} a {formatCurrency(s.maxPrice)}/{s.defaultUnit})
                  </option>
                ))}
              </select>
            </div>

            {/* 2. Quantidade */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-black text-neutral-800 uppercase tracking-wide">
                  2. Quantidade ({currentService?.defaultUnit || 'm²'})
                </label>
                <span className="text-xs text-neutral-500 font-medium">
                  Use os botões de + e -
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 5))}
                  className="h-12 px-3 bg-neutral-100 hover:bg-neutral-200 active:bg-neutral-300 text-neutral-800 font-black text-xs rounded-xl border border-neutral-300 cursor-pointer touch-manipulation transition-colors"
                  title="Diminuir 5"
                >
                  -5
                </button>

                <button
                  type="button"
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="w-12 h-12 bg-neutral-100 hover:bg-neutral-200 active:bg-neutral-300 text-neutral-800 flex items-center justify-center rounded-xl border border-neutral-300 cursor-pointer touch-manipulation transition-colors shrink-0"
                  aria-label="Diminuir 1"
                >
                  <Minus className="w-5 h-5" />
                </button>

                <div className="flex-1 h-12 bg-neutral-50 border-2 border-neutral-300 rounded-xl flex items-center justify-center">
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full text-center text-lg font-black text-neutral-900 bg-transparent outline-none font-mono"
                  />
                  <span className="pr-3 text-xs font-bold text-neutral-500">
                    {currentService?.defaultUnit}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="w-12 h-12 bg-neutral-100 hover:bg-neutral-200 active:bg-neutral-300 text-neutral-800 flex items-center justify-center rounded-xl border border-neutral-300 cursor-pointer touch-manipulation transition-colors shrink-0"
                  aria-label="Aumentar 1"
                >
                  <Plus className="w-5 h-5" />
                </button>

                <button
                  type="button"
                  onClick={() => setQuantity((prev) => prev + 5)}
                  className="h-12 px-3 bg-neutral-100 hover:bg-neutral-200 active:bg-neutral-300 text-neutral-800 font-black text-xs rounded-xl border border-neutral-300 cursor-pointer touch-manipulation transition-colors"
                  title="Aumentar 5"
                >
                  +5
                </button>
              </div>
            </div>

          </div>

          {/* Lado Direito: Resultado Imediato */}
          <div className="md:col-span-5 bg-neutral-900 text-white p-4 sm:p-5 rounded-2xl shadow-inner border border-neutral-800 text-center">
            <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 block mb-1">
              Valor Estimado de Mão de Obra
            </span>

            {/* Preço em destaque */}
            <div className="text-3xl sm:text-4xl font-black text-white font-mono leading-none my-2">
              {formatCurrency(avgTotal)}
            </div>

            <p className="text-xs text-neutral-400">
              Faixa de mercado: <strong className="text-neutral-200 font-mono">{formatCurrency(minTotal)}</strong> a <strong className="text-neutral-200 font-mono">{formatCurrency(maxTotal)}</strong>
            </p>

            <div className="mt-1 text-[11px] text-neutral-500">
              Base média de {formatCurrency(avgUnitPrice)} por {currentService?.defaultUnit}
            </div>

            {/* Botão para colocar no Orçamento Exemplo */}
            <button
              type="button"
              onClick={handleAddCurrentToBudget}
              className={`w-full mt-3 h-10 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer touch-manipulation ${
                justAdded
                  ? 'bg-emerald-500 text-white'
                  : 'bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border border-neutral-700'
              }`}
            >
              {justAdded ? (
                <span>✓ Adicionado ao exemplo!</span>
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5 text-amber-400" />
                  <span>Incluir neste Exemplo de Orçamento</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* ORÇAMENTO DE EXEMPLO (SE ADICIONOU ITENS) */}
        {budgetItems.length > 0 && (
          <div className="mt-5 pt-4 border-t border-neutral-200 bg-neutral-50/70 p-3.5 sm:p-4 rounded-xl border border-neutral-200">
            <div className="flex items-center justify-between gap-2 mb-2">
              <div>
                <span className="text-xs font-black text-neutral-900 uppercase tracking-wide">
                  Exemplo de Orçamento Montado ({budgetItems.length} {budgetItems.length === 1 ? 'item' : 'itens'}):
                </span>
              </div>
              <button
                type="button"
                onClick={handleClearBudget}
                className="text-[11px] font-bold text-red-600 hover:text-red-700 flex items-center gap-1 cursor-pointer"
              >
                <Trash2 className="w-3 h-3" />
                <span>Limpar</span>
              </button>
            </div>

            <div className="divide-y divide-neutral-200/80">
              {budgetItems.map((item) => (
                <div key={item.id} className="py-2 flex items-center justify-between text-xs gap-2">
                  <div className="min-w-0 flex-1">
                    <span className="font-bold text-neutral-900">{item.serviceName}</span>
                    <span className="text-neutral-500 ml-1.5">
                      ({item.quantity} {item.unit} × {formatCurrency(item.selectedUnitPrice)})
                    </span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="font-black font-mono text-neutral-900">
                      {formatCurrency(item.subtotal)}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleRemoveBudgetItem(item.id)}
                      className="text-neutral-400 hover:text-red-500 p-0.5 cursor-pointer"
                      title="Remover"
                    >
                      ×
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Total Geral do Orçamento */}
            <div className="mt-3 pt-2 border-t-2 border-neutral-300 flex items-center justify-between font-black text-sm sm:text-base">
              <span className="text-neutral-900">TOTAL ESTIMADO DA OBRA:</span>
              <span className="text-emerald-700 font-mono text-base sm:text-lg">
                {formatCurrency(totalBudgetAmount)}
              </span>
            </div>
          </div>
        )}

        {/* Aviso Amigável: Isso é só uma demonstração */}
        <div className="mt-4 pt-3 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left bg-amber-500/5 p-3 rounded-xl border border-amber-200/70">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 hidden sm:block" />
            <p className="text-xs text-neutral-700 leading-tight">
              <strong>Isso é apenas um exemplo básico.</strong> Na planilha oficial e no guia em PDF você terá acesso a mais de 80 serviços com todas as fórmulas automáticas.
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToSales}
            className="w-full sm:w-auto h-10 px-4 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-black text-xs rounded-xl shadow-xs flex items-center justify-center gap-1.5 shrink-0 cursor-pointer touch-manipulation transition-colors"
          >
            <span>Pegar a Planilha Completa (R$ 10)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
