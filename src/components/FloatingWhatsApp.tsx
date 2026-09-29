import React, { useState, useEffect } from 'react';

const WHATSAPP_URL =
  'https://wa.me/5561982110174?text=Ol%C3%A1%21%20Vi%20a%20Tabela%20de%20Pre%C3%A7os%20para%20profissionais%20de%20reforma%20e%20gostaria%20de%20saber%20mais.%20Pode%20me%20explicar%20como%20funciona%3F%20%F0%9F%99%82';

export const OfficialWhatsAppIcon: React.FC<{ className?: string }> = ({
  className = 'w-full h-full',
}) => (
  <svg
    viewBox="0 0 16 16"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Camada 1: Balão externo branco oficial com a pontinha para baixo/esquerda */}
    <path
      fill="#FFFFFF"
      d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326z"
    />
    {/* Camada 2: Círculo verde oficial do WhatsApp (#25D366) */}
    <path
      fill="#25D366"
      d="M7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592z"
    />
    {/* Camada 3: Monofone/Telefone branco oficial perfeitamente curvado no centro */}
    <path
      fill="#FFFFFF"
      d="M11.609 9.587c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"
    />
  </svg>
);

export const FloatingWhatsApp: React.FC = () => {
  const [isBalloonVisible, setIsBalloonVisible] = useState(true);
  const [shouldRenderBalloon, setShouldRenderBalloon] = useState(true);

  useEffect(() => {
    // Inicia o fade out após 4.5 segundos
    const hideTimer = setTimeout(() => {
      setIsBalloonVisible(false);
    }, 4500);

    // Remove do DOM após a animação de saída (700ms) para não ocupar nenhum espaço invisível
    const removeTimer = setTimeout(() => {
      setShouldRenderBalloon(false);
    }, 5200);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    /* pointer-events-none garante que qualquer clique fora do círculo passe 100% livre para a página */
    <aside
      aria-label="Atendimento via WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2 pointer-events-none select-none"
    >
      {/* Balãozinho apenas visual (pointer-events-none para não capturar cliques acidentais) */}
      {shouldRenderBalloon && (
        <div
          className={`pointer-events-none relative bg-white text-neutral-800 text-xs sm:text-[13px] font-bold py-1.5 px-3 rounded-xl shadow-md border border-neutral-200/90 whitespace-nowrap leading-tight transition-all duration-700 ease-in-out ${
            isBalloonVisible
              ? 'opacity-100 translate-x-0 scale-100'
              : 'opacity-0 translate-x-3 scale-95'
          }`}
        >
          <span>Dúvidas? Fale comigo</span>
          {/* Pontinha do balão */}
          <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[6px] border-l-white" />
        </div>
      )}

      {/* SOMENTE ESTE ELEMENTO É CLICÁVEL: exatamente o círculo redondo com a logotipo */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com o suporte no WhatsApp"
        className="pointer-events-auto relative block w-12 h-12 sm:w-13 sm:h-13 rounded-full p-1 bg-white hover:scale-105 active:scale-95 shadow-xl shadow-black/25 transition-transform duration-200 shrink-0 cursor-pointer overflow-hidden touch-manipulation"
      >
        <OfficialWhatsAppIcon className="w-full h-full drop-shadow-xs" />
      </a>
    </aside>
  );
};
