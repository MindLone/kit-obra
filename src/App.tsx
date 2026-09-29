import React from 'react';
import { UrgencyBar } from './components/UrgencyBar';
import { Hero } from './components/Hero';
import { WhatYouGet } from './components/WhatYouGet';
import { ProblemSolution } from './components/ProblemSolution';
import { Faq } from './components/Faq';
import { SalesBlock } from './components/SalesBlock';
import { Footer } from './components/Footer';
import { SalesNotification } from './components/SalesNotification';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const handleHeroScrollToNext = () => {
    const element = document.getElementById('produto-completo') || document.getElementById('o-que-voce-vai-receber');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToSales = () => {
    const element = document.getElementById('produto-completo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-100/70 text-neutral-900 font-sans selection:bg-amber-500 selection:text-white">
      {/* Linha Vermelha de Urgência com Data de Hoje Dinâmica */}
      <UrgencyBar />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Bloco Principal (Título, Subtítulo, Vídeo e Botão de CTA) */}
        <Hero onStartCalculation={handleHeroScrollToNext} />

        <div className="max-w-3xl mx-auto px-3 sm:px-4 py-6 sm:py-10 space-y-6 sm:space-y-8">
          {/* O QUE VOCÊ VAI RECEBER (Enxuto, gostoso de ler e direto + 2 Bônus) */}
          <WhatYouGet />

          {/* NOVA SEÇÃO DE COPY (O Problema NÃO é o Seu Trabalho... / Respira.) */}
          <ProblemSolution />

          {/* Bloco Oficial de Venda com Preço e Checkout (Obra Sem Mistério - R$ 9,90) */}
          <SalesBlock />

          {/* FAQ (Abaixo do preço - com letras grandes e leitura fácil) */}
          <Faq />
        </div>
      </main>

      {/* Footer simples e limpo */}
      <Footer onNavigate={handleScrollToSales} />

      {/* Notificação Flutuante de Prova Social */}
      <SalesNotification />

      {/* Botão Flutuante Redondo com Logotipo do WhatsApp e Balão no Canto Inferior Esquerdo */}
      <FloatingWhatsApp />
    </div>
  );
}
