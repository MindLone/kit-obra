import React, { useState } from 'react';
import { 
  FileText, 
  Trash2, 
  Printer, 
  Share2, 
  Plus, 
  CheckCircle2, 
  MessageSquare
} from 'lucide-react';
import { BudgetItem, Budget } from '../types';
import { formatCurrency } from '../data/servicesData';
import { APP_CONFIG } from '../config/appConfig';

interface BudgetBuilderProps {
  items: BudgetItem[];
  onRemoveItem: (id: string) => void;
  onClearBudget: () => void;
  onOpenCalculator: () => void;
  onGeneratePrintView: (budgetData: Budget) => void;
}

export const BudgetBuilder: React.FC<BudgetBuilderProps> = ({
  items,
  onRemoveItem,
  onClearBudget,
  onOpenCalculator,
  onGeneratePrintView,
}) => {
  const [clientName, setClientName] = useState<string>('João');
  const [projectAddress, setProjectAddress] = useState<string>('Obra Residencial');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [contractorName, setContractorName] = useState<string>('Profissional da Obra');
  const [contractorPhone, setContractorPhone] = useState<string>('');
  const [date, setDate] = useState<string>(new Date().toLocaleDateString('pt-BR'));
  const [paymentTerms, setPaymentTerms] = useState<string>('50% na entrada e 50% na entrega');
  const [validityDays, setValidityDays] = useState<number>(15);
  const [generalNotes, setGeneralNotes] = useState<string>('Mão de obra com ferramentas inclusas. Materiais de construção por conta do contratante.');
  const [copyFeedback, setCopyFeedback] = useState<boolean>(false);

  const totalMin = items.reduce((acc, curr) => acc + curr.subtotalMin, 0);
  const totalMax = items.reduce((acc, curr) => acc + curr.subtotalMax, 0);
  const calculatedTotal = items.reduce((acc, curr) => acc + curr.subtotal, 0);

  const budgetPayload: Budget = {
    clientName: clientName.trim() || 'Cliente',
    projectAddress: projectAddress.trim() || 'Local da Obra',
    clientPhone: clientPhone.trim(),
    contractorName: contractorName.trim() || 'Prestador de Serviço',
    contractorPhone: contractorPhone.trim(),
    date,
    validityDays,
    paymentTerms,
    items,
    generalNotes,
  };

  const generateWhatsAppText = () => {
    let msg = `*ORÇAMENTO - MÃO DE OBRA*\n`;
    msg += `📅 Data: ${date}\n`;
    msg += `👤 Cliente: ${clientName || 'Cliente'}\n`;
    if (projectAddress) msg += `📍 Obra: ${projectAddress}\n`;
    msg += `--------------------------------\n`;
    msg += `*SERVIÇOS INCLUSOS:*\n`;

    items.forEach((item, index) => {
      msg += `\n${index + 1}. *${item.serviceName}*\n`;
      msg += `   • Qtd: ${item.quantity} ${item.unit}\n`;
      msg += `   • Valor: ${formatCurrency(item.selectedUnitPrice)}/${item.unit}\n`;
      msg += `   • Subtotal: ${formatCurrency(item.subtotal)}\n`;
    });

    msg += `\n--------------------------------\n`;
    msg += `*VALOR TOTAL: ${formatCurrency(calculatedTotal)}*\n`;
    msg += `(Faixa de mercado: ${formatCurrency(totalMin)} a ${formatCurrency(totalMax)})\n`;
    if (paymentTerms) msg += `💳 Pagamento: ${paymentTerms}\n`;
    msg += `⏱️ Validade: ${validityDays} dias\n`;
    if (contractorName) msg += `\nProfissional: ${contractorName} ${contractorPhone ? `(${contractorPhone})` : ''}\n`;
    msg += `\n_Gerado pelo Quanto Cobrar na Obra_`;
    return msg;
  };

  const handleShareWhatsApp = () => {
    const text = generateWhatsAppText();
    // No celular, abre direto o compartilhamento do WhatsApp
    const waUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');

    // E também copia para a área de transferência
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setCopyFeedback(true);
        setTimeout(() => setCopyFeedback(false), 3000);
      }).catch(() => {});
    }
  };

  return (
    <section id="orcamento-section" className="scroll-mt-4">
      <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-sm p-3.5 sm:p-6">
        {/* Cabeçalho do Orçamento */}
        <div className="flex items-center justify-between pb-3 border-b border-neutral-200 gap-2">
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
              Proposta
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-neutral-900 mt-1 flex items-center gap-1.5 leading-tight">
              <FileText className="w-5 h-5 text-amber-600 shrink-0" />
              Orçamento Simples
            </h2>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={onOpenCalculator}
              className="h-9 px-3 bg-amber-600 active:bg-amber-700 text-white rounded-xl text-xs font-black flex items-center gap-1 cursor-pointer shadow-xs touch-manipulation"
            >
              <Plus className="w-4 h-4 stroke-[3]" />
              <span>Adicionar</span>
            </button>

            {items.length > 0 && (
              <button
                onClick={onClearBudget}
                className="h-9 px-2 text-xs font-bold text-red-600 hover:bg-red-50 rounded-lg cursor-pointer"
                title="Limpar todos"
              >
                Limpar
              </button>
            )}
          </div>
        </div>

        {/* Dados Básicos Rápidos para Celular */}
        <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-200 my-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          <div>
            <label className="font-bold text-neutral-700 block mb-1">
              Nome do Cliente:
            </label>
            <input
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              placeholder="Ex: João Silva"
              className="w-full h-11 px-3 bg-white border border-neutral-300 rounded-lg font-semibold text-neutral-900 focus:outline-none focus:border-amber-600 text-base"
            />
          </div>

          <div>
            <label className="font-bold text-neutral-700 block mb-1">
              Obra / Local:
            </label>
            <input
              type="text"
              value={projectAddress}
              onChange={(e) => setProjectAddress(e.target.value)}
              placeholder="Ex: Reforma da Casa / Apto 102"
              className="w-full h-11 px-3 bg-white border border-neutral-300 rounded-lg font-semibold text-neutral-900 focus:outline-none focus:border-amber-600 text-base"
            />
          </div>
        </div>

        {/* Lista de Itens do Orçamento */}
        {items.length === 0 ? (
          <div className="text-center py-8 px-3 bg-neutral-50 rounded-xl border-2 border-dashed border-neutral-200">
            <div className="w-10 h-10 bg-amber-100 text-amber-800 rounded-full flex items-center justify-center mx-auto mb-2">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-extrabold text-neutral-800 mb-1">
              Nenhum serviço na lista
            </h3>
            <p className="text-xs text-neutral-500 max-w-xs mx-auto mb-3">
              Calcule um serviço acima e clique em "Adicionar ao Orçamento" para montar sua proposta.
            </p>
            <button
              onClick={onOpenCalculator}
              className="h-10 px-4 bg-neutral-900 active:bg-neutral-800 text-white text-xs font-bold rounded-xl inline-flex items-center gap-1.5 cursor-pointer"
            >
              <Plus className="w-4 h-4 text-amber-400 stroke-[3]" />
              <span>Calcular Serviço Agora</span>
            </button>
          </div>
        ) : (
          <div className="space-y-2.5">
            {items.map((item, index) => (
              <div
                key={item.id}
                className="p-3 rounded-xl border border-neutral-200 bg-white flex items-center justify-between gap-2 shadow-2xs"
              >
                <div className="flex-1 min-w-0 pr-1">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="w-4 h-4 rounded-full bg-neutral-200 text-neutral-700 text-[10px] font-black flex items-center justify-center shrink-0">
                      {index + 1}
                    </span>
                    <span className="font-extrabold text-sm text-neutral-900 truncate block">
                      {item.serviceName}
                    </span>
                  </div>

                  <div className="text-xs text-neutral-600 flex items-center gap-1.5 flex-wrap">
                    <span>Qtd: <strong>{item.quantity} {item.unit}</strong></span>
                    <span>•</span>
                    <span>{formatCurrency(item.selectedUnitPrice)}/{item.unit}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-bold text-neutral-400 block leading-none">
                      Subtotal
                    </span>
                    <span className="text-sm sm:text-base font-black text-neutral-900 font-mono">
                      {formatCurrency(item.subtotal)}
                    </span>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="w-9 h-9 rounded-lg text-neutral-400 hover:text-red-600 hover:bg-red-50 flex items-center justify-center cursor-pointer touch-manipulation"
                    title="Remover"
                    aria-label={`Remover ${item.serviceName}`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}

            {/* Total e Ações Mobile */}
            <div className="bg-neutral-950 text-white rounded-2xl p-4 mt-4 shadow-md">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                <div>
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block">
                    Total Estimado ({items.length} {items.length === 1 ? 'item' : 'itens'})
                  </span>
                  <span className="text-xs text-neutral-300">
                    Cliente: <strong>{clientName || 'Cliente'}</strong>
                  </span>
                </div>

                <div className="text-right">
                  <span className="text-2xl sm:text-3xl font-black text-amber-400 font-mono block leading-none">
                    {formatCurrency(calculatedTotal)}
                  </span>
                  <span className="text-[10px] text-neutral-400 block mt-0.5">
                    Faixa: {formatCurrency(totalMin)} – {formatCurrency(totalMax)}
                  </span>
                </div>
              </div>

              {/* Botões Grandes de Envio e Impressão para Celular */}
              <div className="pt-3.5 space-y-2">
                <button
                  onClick={handleShareWhatsApp}
                  className="w-full h-14 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-black text-sm uppercase tracking-wider rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer touch-manipulation"
                >
                  <Share2 className="w-5 h-5 stroke-[2.5]" />
                  <span>Enviar Orçamento no WhatsApp</span>
                </button>

                <button
                  onClick={() => onGeneratePrintView(budgetPayload)}
                  className="w-full h-12 bg-neutral-800 hover:bg-neutral-700 active:bg-neutral-900 text-neutral-100 font-extrabold text-xs uppercase tracking-wider rounded-xl border border-neutral-700 flex items-center justify-center gap-2 cursor-pointer touch-manipulation"
                >
                  <Printer className="w-4 h-4 text-amber-400" />
                  <span>Visualizar para Imprimir / PDF</span>
                </button>
              </div>

              {copyFeedback && (
                <div className="mt-2.5 p-2 bg-emerald-900/80 border border-emerald-500/50 rounded-lg text-emerald-300 text-xs text-center font-bold flex items-center justify-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Texto copiado e pronto para colar no WhatsApp!</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
