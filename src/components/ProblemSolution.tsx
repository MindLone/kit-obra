import React from 'react';
import { X, Check } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  const painPoints = [
    'Faz as contas de cabeça na hora de passar o orçamento',
    'Fica na dúvida se está cobrando pouco ou demais',
    'Aceita um serviço e depois percebe que trabalhou por menos do que deveria',
    'Sente aquele medo de falar o preço e o cliente responder: “Tá caro…”',
    'Perde tempo tentando descobrir quanto cobrar em cada serviço',
  ];

  const handleScrollToOffer = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('produto-completo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-8 sm:py-10 max-w-2xl mx-auto px-1 sm:px-0">
      {/* Título Principal com letras grandes e leitura sem esforço */}
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-neutral-950 tracking-tight leading-tight">
          O Problema <span className="text-[#ea580c]">NÃO</span> é o Seu Trabalho...
        </h2>
        <p className="mt-3 text-base sm:text-lg md:text-xl text-neutral-800 font-normal max-w-lg mx-auto leading-snug">
          O problema é ter que colocar preço na sua mão de obra <strong className="font-extrabold text-neutral-950 underline decoration-2 underline-offset-4 decoration-neutral-900">sem uma referência confiável</strong>.
        </p>
        <span className="inline-block mt-4 text-sm sm:text-base font-bold text-neutral-600 uppercase tracking-wide">
          Se Você:
        </span>
      </div>

      {/* Lista de Dores (Cards bem visíveis, grandes e fáceis de ler) */}
      <div className="space-y-3.5 sm:space-y-4">
        {painPoints.map((point, index) => (
          <div
            key={index}
            className="bg-[#fff5f5] border-2 border-red-200/90 rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 sm:gap-4 shadow-xs transition-transform duration-200 hover:scale-[1.01]"
          >
            {/* Ícone de X vermelho em círculo branco bem destacado */}
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-red-300 bg-white text-red-600 flex items-center justify-center shrink-0 shadow-2xs">
              <X className="w-5 h-5 stroke-[3] text-red-600" />
            </div>

            {/* Texto da dor em tamanho grande e negrito forte */}
            <span className="text-sm sm:text-base md:text-[17px] font-extrabold text-[#7f1d1d] leading-snug">
              {point}
            </span>
          </div>
        ))}
      </div>

      {/* Seção "Respira." com tipografia ampla e confortável */}
      <div className="mt-12 sm:mt-14 text-center max-w-xl mx-auto space-y-5">
        <h3 className="text-4xl sm:text-5xl font-black text-neutral-950 tracking-tight">
          Respira.
        </h3>

        <p className="text-base sm:text-lg md:text-xl text-neutral-800 leading-relaxed font-semibold">
          Você não precisa mais <strong className="font-black text-neutral-950 underline decoration-amber-400 decoration-4">adivinhar</strong> o valor da sua mão de obra.
        </p>

        <p className="text-base sm:text-lg md:text-xl text-neutral-800 leading-relaxed">
          Com o <strong className="font-black text-emerald-700">Kit de Preços e Orçamentos para Obras 2026</strong>, você consulta valores de referência, faz os cálculos com mais facilidade e organiza seu orçamento antes de passar o preço para o cliente.
        </p>

        {/* 3 Benefícios Diretos com texto ampliado */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 text-sm sm:text-base font-extrabold text-neutral-900">
          <div className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-50 text-emerald-900 border-2 border-emerald-200 px-4 py-2.5 rounded-full shadow-2xs">
            <Check className="w-4 h-4 text-emerald-600 stroke-[3] shrink-0" />
            <span>Mais referência para calcular</span>
          </div>
          <div className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-50 text-emerald-900 border-2 border-emerald-200 px-4 py-2.5 rounded-full shadow-2xs">
            <Check className="w-4 h-4 text-emerald-600 stroke-[3] shrink-0" />
            <span>Mais clareza para orçar</span>
          </div>
          <div className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-50 text-emerald-900 border-2 border-emerald-200 px-4 py-2.5 rounded-full shadow-2xs">
            <Check className="w-4 h-4 text-emerald-600 stroke-[3] shrink-0" />
            <span>Mais segurança ao falar o preço</span>
          </div>
        </div>

        {/* Botão em pílula vermelha maior e mais clicável */}
        <div className="pt-4 sm:pt-6">
          <a
            href="#produto-completo"
            onClick={handleScrollToOffer}
            className="inline-block px-8 sm:px-10 py-3.5 sm:py-4 bg-[#dc2626] hover:bg-[#b91c1c] active:bg-[#991b1b] text-white font-black text-sm sm:text-base tracking-wider uppercase rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer touch-manipulation"
          >
            SOMENTE HOJE KIT COMPLETO
          </a>
        </div>
      </div>
    </section>
  );
};
