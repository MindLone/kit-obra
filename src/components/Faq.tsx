import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    question: "1. O que eu vou receber?",
    answer: "Você recebe a Tabela de Preços de Mão de Obra 2026, a planilha de cálculo e todos os bônus inclusos na oferta diretamente no seu celular e computador."
  },
  {
    question: "2. A tabela serve para quais serviços?",
    answer: "A tabela foi criada para ajudar profissionais de construção e reformas a consultar valores de referência de mão de obra para diversos serviços do dia a dia da obra."
  },
  {
    question: "3. É difícil usar a planilha?",
    answer: "Não. A planilha é muito simples de usar e foi pensada para facilitar os cálculos de forma rápida, mesmo para quem não tem nenhuma experiência avançada com planilhas."
  },
  {
    question: "4. Como vou receber o produto?",
    answer: "O acesso é 100% digital. Você recebe o acesso imediatamente por e-mail e no celular logo após a confirmação do pagamento."
  },
  {
    question: "5. E se eu comprar e não gostar?",
    answer: "Você tem 7 dias de garantia incondicional. Você pode testar todo o material e, caso não fique satisfeito, pode solicitar o reembolso total dentro desse prazo, conforme as condições da garantia."
  }
];

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="scroll-mt-6 py-4">
      <div className="max-w-xl mx-auto">
        {/* Título simples com negrito moderado */}
        <div className="text-center mb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 uppercase tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-1">
            Toque na dúvida para ver a resposta:
          </p>
        </div>

        {/* Acordeão com negrito equilibrado (sem ultra bold) e boa legibilidade */}
        <div className="divide-y divide-neutral-200 border border-neutral-300 bg-white rounded-2xl shadow-xs overflow-hidden">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="transition-colors">
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full py-4 px-4 sm:px-5 flex items-center justify-between text-left gap-3 focus:outline-hidden hover:bg-neutral-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-neutral-800 leading-snug">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-amber-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 pt-1 text-sm sm:text-base font-normal text-neutral-700 leading-relaxed bg-neutral-50/50 border-t border-neutral-100">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
