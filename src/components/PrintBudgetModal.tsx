import React from 'react';
import { X, Printer, Hammer } from 'lucide-react';
import { Budget } from '../types';
import { formatCurrency } from '../data/servicesData';
import { APP_CONFIG } from '../config/appConfig';

interface PrintBudgetModalProps {
  budget: Budget | null;
  isOpen: boolean;
  onClose: () => void;
}

export const PrintBudgetModal: React.FC<PrintBudgetModalProps> = ({
  budget,
  isOpen,
  onClose,
}) => {
  if (!isOpen || !budget) return null;

  const totalCalculated = budget.items.reduce((acc, curr) => acc + curr.subtotal, 0);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[94vh] overflow-y-auto shadow-2xl flex flex-col">
        {/* Barra superior de controle sticky */}
        <div className="no-print p-3 sm:p-4 bg-neutral-950 text-white flex items-center justify-between rounded-t-2xl border-b border-neutral-800 sticky top-0 z-20">
          <span className="font-extrabold text-xs sm:text-sm text-neutral-200 truncate pr-2">
            Pré-visualização do Orçamento
          </span>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handlePrint}
              className="h-10 px-3 bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white rounded-lg text-xs font-black flex items-center gap-1.5 cursor-pointer shadow-sm touch-manipulation"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center text-neutral-400 hover:text-white bg-neutral-900 rounded-lg cursor-pointer"
              title="Fechar"
              aria-label="Fechar pré-visualização"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Documento Imprimível */}
        <div id="printable-budget-document" className="p-4 sm:p-8 text-neutral-900 bg-white">
          {/* Cabeçalho */}
          <div className="border-b-2 border-neutral-900 pb-4 mb-4 flex flex-col sm:flex-row justify-between items-start gap-2">
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <div className="w-6 h-6 bg-amber-600 rounded flex items-center justify-center text-white font-black text-xs">
                  <Hammer className="w-3.5 h-3.5" />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-neutral-500">
                  {APP_CONFIG.name}
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-neutral-900 leading-tight">
                Orçamento de Mão de Obra
              </h1>
            </div>

            <div className="text-left sm:text-right text-[11px] bg-neutral-50 p-2 rounded border border-neutral-200 w-full sm:w-auto">
              <div>Data: <strong>{budget.date}</strong></div>
              <div>Validade: <strong>{budget.validityDays} dias</strong></div>
            </div>
          </div>

          {/* Dados */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-3 rounded-xl bg-neutral-50 border border-neutral-200 mb-4 text-xs">
            <div>
              <span className="font-extrabold uppercase text-[9px] tracking-wider text-neutral-500 block">
                Cliente
              </span>
              <p className="font-black text-sm text-neutral-900">{budget.clientName || 'Cliente'}</p>
              {budget.projectAddress && (
                <p className="text-neutral-600 text-[11px]">Local: {budget.projectAddress}</p>
              )}
            </div>

            <div>
              <span className="font-extrabold uppercase text-[9px] tracking-wider text-neutral-500 block">
                Prestador
              </span>
              <p className="font-black text-sm text-neutral-900">{budget.contractorName || 'Profissional da Obra'}</p>
              {budget.contractorPhone && (
                <p className="text-neutral-600 text-[11px]">Contato: {budget.contractorPhone}</p>
              )}
            </div>
          </div>

          {/* Tabela de Serviços Responsiva */}
          <div className="mb-4">
            <h2 className="text-[11px] font-black uppercase tracking-wider text-neutral-700 mb-1.5">
              Serviços:
            </h2>

            <div className="border border-neutral-300 rounded-lg overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse min-w-[280px]">
                <thead>
                  <tr className="bg-neutral-900 text-white font-bold text-[11px]">
                    <th className="py-2 px-2.5">Item</th>
                    <th className="py-2 px-2.5">Serviço</th>
                    <th className="py-2 px-2 text-center">Qtd</th>
                    <th className="py-2 px-2 text-right">Unit.</th>
                    <th className="py-2 px-2.5 text-right">Subtotal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 font-medium">
                  {budget.items.map((item, idx) => (
                    <tr key={item.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-neutral-50/70'}>
                      <td className="py-2 px-2.5 text-neutral-500 font-bold">{idx + 1}</td>
                      <td className="py-2 px-2.5 font-bold text-neutral-900">{item.serviceName}</td>
                      <td className="py-2 px-2 text-center">{item.quantity} {item.unit}</td>
                      <td className="py-2 px-2 text-right font-mono">{formatCurrency(item.selectedUnitPrice)}</td>
                      <td className="py-2 px-2.5 text-right font-bold text-neutral-900 font-mono">
                        {formatCurrency(item.subtotal)}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-neutral-100 font-black border-t-2 border-neutral-300 text-sm">
                    <td colSpan={3} className="py-2.5 px-2.5 text-right uppercase text-xs text-neutral-600">
                      Total:
                    </td>
                    <td colSpan={2} className="py-2.5 px-2.5 text-right text-base text-neutral-900 font-mono">
                      {formatCurrency(totalCalculated)}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          {/* Condições */}
          <div className="border border-neutral-200 rounded-xl p-3 mb-6 bg-neutral-50 text-[11px] space-y-1">
            <div><strong>Pagamento:</strong> {budget.paymentTerms}</div>
            <div><strong>Observações:</strong> {budget.generalNotes}</div>
          </div>

          {/* Assinaturas */}
          <div className="pt-4 grid grid-cols-2 gap-4 text-center text-xs">
            <div>
              <div className="border-t border-neutral-400 pt-1 font-bold text-neutral-900">
                {budget.contractorName || 'Prestador'}
              </div>
              <span className="text-[10px] text-neutral-500">Profissional</span>
            </div>

            <div>
              <div className="border-t border-neutral-400 pt-1 font-bold text-neutral-900">
                {budget.clientName || 'Cliente'}
              </div>
              <span className="text-[10px] text-neutral-500">Aceite</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
