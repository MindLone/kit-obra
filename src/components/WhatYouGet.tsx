import React from 'react';
import { FileText, Calculator, Check, Gift } from 'lucide-react';
import orcamentoImg from '../assets/images/orcamento_pronto_mockup_1790647760597.jpg';
import checklistImg from '../assets/images/checklist_obra_mockup_1790647773165.jpg';

export const WhatYouGet: React.FC = () => {
  return (
    <section id="o-que-voce-vai-receber" className="scroll-mt-6 py-2">
      {/* Título da Seção */}
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-black text-neutral-950 uppercase tracking-tight">
          O que você vai receber
        </h2>
      </div>

      {/* =========================================
          PRODUTO PRINCIPAL (ITEM 01 E ITEM 02)
      ========================================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-8">
        {/* ITEM 01: TABELA DE PREÇOS */}
        <div className="bg-white rounded-2xl border-2 border-neutral-200/90 shadow-sm flex flex-col justify-between overflow-hidden">
          <div className="p-5 sm:p-6 pb-4">
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-50 text-amber-900 border border-amber-200 text-xs font-black tracking-wider uppercase">
                <FileText className="w-3.5 h-3.5 text-amber-600" />
                Item 01 · Tabela 2026
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-neutral-950 tracking-tight leading-tight mb-2">
              Tabela de Preços de Mão de Obra 2026
            </h3>

            <p className="text-sm sm:text-base font-bold text-amber-800 mb-3">
              Saiba quanto cobrar pelos seus serviços.
            </p>

            <p className="text-sm text-neutral-600 leading-relaxed">
              Tabela organizada com preços de referência para vários serviços de construção e reforma, ajudando você a parar de cobrar no achismo.
            </p>
          </div>

          <div className="px-5 sm:px-6 pb-5 pt-3">
            <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-3 flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-amber-500 text-neutral-950 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <p className="text-xs sm:text-sm font-extrabold text-neutral-900 leading-snug">
                Consulte antes de passar seu preço para o cliente.
              </p>
            </div>
          </div>
        </div>

        {/* ITEM 02: PLANILHA DE CÁLCULO */}
        <div className="bg-white rounded-2xl border-2 border-neutral-200/90 shadow-sm flex flex-col justify-between overflow-hidden">
          <div className="p-5 sm:p-6 pb-4">
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-black tracking-wider uppercase">
                <Calculator className="w-3.5 h-3.5 text-emerald-600" />
                Item 02 · Planilha
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-neutral-950 tracking-tight leading-tight mb-2">
              Planilha de Cálculo
            </h3>

            <p className="text-sm sm:text-base font-bold text-emerald-800 mb-3">
              Faça a conta do seu serviço.
            </p>

            <p className="text-sm text-neutral-600 leading-relaxed">
              Planilha simples para calcular o valor da mão de obra e chegar a um preço mais organizado antes de passar o orçamento.
            </p>
          </div>

          <div className="px-5 sm:px-6 pb-5 pt-3">
            <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-3 flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <p className="text-xs sm:text-sm font-extrabold text-neutral-900 leading-snug">
                Digite os valores e faça a conta de forma rápida.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          SEÇÃO DOS BÔNUS (+ 2 BÔNUS GRÁTIS)
      ========================================= */}
      <div className="pt-2">
        <div className="text-center mb-5">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-amber-500 text-neutral-950 font-black text-xs sm:text-sm uppercase rounded-full shadow-xs tracking-wider">
            <Gift className="w-4 h-4" />
            + 2 BÔNUS GRÁTIS
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* BÔNUS 1: MODELO DE ORÇAMENTO PRONTO */}
          <div className="bg-white rounded-2xl border-2 border-neutral-200/90 shadow-sm overflow-hidden flex flex-col">
            {/* Imagem do produto acima do título */}
            <div className="w-full h-40 sm:h-44 bg-neutral-100 overflow-hidden">
              <img
                src={orcamentoImg}
                alt="Modelo de Orçamento Pronto para obra"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase text-amber-800 bg-amber-50 px-2.5 py-1 rounded border border-amber-200 mb-2 inline-block">
                  Bônus 01
                </span>
                <h4 className="text-base sm:text-lg font-black text-neutral-950 leading-snug">
                  Modelo de Orçamento Pronto
                </h4>
                <p className="text-sm sm:text-base text-neutral-700 font-medium mt-1.5">
                  Preencha e passe o orçamento para o cliente.
                </p>
              </div>
            </div>
          </div>

          {/* BÔNUS 2: CHECKLIST ANTES DE PASSAR O PREÇO */}
          <div className="bg-white rounded-2xl border-2 border-neutral-200/90 shadow-sm overflow-hidden flex flex-col">
            {/* Imagem do produto acima do título */}
            <div className="w-full h-40 sm:h-44 bg-neutral-100 overflow-hidden">
              <img
                src={checklistImg}
                alt="Checklist antes de passar o preço para obra"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase text-amber-800 bg-amber-50 px-2.5 py-1 rounded border border-amber-200 mb-2 inline-block">
                  Bônus 02
                </span>
                <h4 className="text-base sm:text-lg font-black text-neutral-950 leading-snug">
                  Checklist Antes de Passar o Preço
                </h4>
                <p className="text-sm sm:text-base text-neutral-700 font-medium mt-1.5">
                  Confira o que considerar antes de cobrar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
