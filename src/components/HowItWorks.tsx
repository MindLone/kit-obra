import React from 'react';
import { ListChecks, Ruler, DollarSign, FileCheck, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onStart: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onStart }) => {
  const steps = [
    {
      number: '1',
      title: 'Escolha o serviço',
      description: 'Selecione a categoria ou digite o nome do serviço a executar.',
      icon: ListChecks,
    },
    {
      number: '2',
      title: 'Informe a quantidade',
      description: 'Digite os metros (m²), diárias ou unidades do trabalho.',
      icon: Ruler,
    },
    {
      number: '3',
      title: 'Veja a faixa de referência',
      description: 'Receba o valor mínimo e máximo de mercado para não cobrar errado.',
      icon: DollarSign,
    },
    {
      number: '4',
      title: 'Monte seu orçamento',
      description: 'Envie a proposta pronta para o WhatsApp do cliente ou salve em PDF.',
      icon: FileCheck,
    },
  ];

  return (
    <section id="como-funciona" className="scroll-mt-4">
      <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-sm p-4 sm:p-6">
        <div className="text-center mb-4">
          <span className="text-[10px] font-black uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 inline-block mb-1">
            Simples e Rápido
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-neutral-900 leading-tight">
            Como Funciona em 4 Passos
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 mb-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="p-3.5 rounded-xl border border-neutral-200 bg-neutral-50/70 flex items-start gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-neutral-900 text-white flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                  {step.number}
                </div>

                <div className="flex-1">
                  <h3 className="font-extrabold text-sm text-neutral-900 mb-0.5">
                    {step.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-snug">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={onStart}
          className="w-full h-12 bg-neutral-900 hover:bg-neutral-800 active:bg-neutral-950 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <span>Ir para a Calculadora</span>
          <ArrowRight className="w-4 h-4 text-amber-400" />
        </button>
      </div>
    </section>
  );
};
