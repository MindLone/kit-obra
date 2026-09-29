import React, { useState } from 'react';
import { LegalModal } from './LegalModal';

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 16 16"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      fill="#FFFFFF"
      d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326z"
    />
    <path
      fill="#25D366"
      d="M7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592z"
    />
    <path
      fill="#FFFFFF"
      d="M11.609 9.587c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"
    />
  </svg>
);

interface FooterProps {
  onNavigate?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  const whatsappUrl =
    'https://wa.me/5561982110174?text=Ol%C3%A1%21%20Vi%20a%20Tabela%20de%20Pre%C3%A7os%20para%20profissionais%20de%20reforma%20e%20gostaria%20de%20saber%20mais.%20Pode%20me%20explicar%20como%20funciona%3F%20%F0%9F%99%82';

  return (
    <footer className="bg-white border-t border-neutral-200 mt-8 text-neutral-700">
      {/* ========================================================
          ÁREA DE SUPORTE NO WHATSAPP
      ======================================================== */}
      <section id="suporte" className="py-8 px-4 border-b border-neutral-200 bg-neutral-50/60">
        <div className="max-w-xl mx-auto text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
            Precisa de ajuda?
          </h3>

          <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
            O <strong className="font-bold text-neutral-900">Obra Sem Mistério</strong> foi criado para facilitar o dia a dia de profissionais da construção e reformas, ajudando você a consultar preços e organizar seus orçamentos de forma simples e prática.
          </p>

          {/* Botão simples e clicável para WhatsApp */}
          <div className="pt-1">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto min-h-[50px] px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] active:bg-[#1caa52] text-white font-bold text-sm sm:text-base shadow-xs transition-colors touch-manipulation cursor-pointer"
            >
              <WhatsAppIcon className="w-5 h-5 text-white shrink-0" />
              <span>Falar com o suporte no WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          RODAPÉ INSTITUCIONAL (LINKS, AVISO META, COPYRIGHT)
      ======================================================== */}
      <div className="max-w-3xl mx-auto px-4 py-8 text-center space-y-4">
        {/* Links Institucionais (Sem o link de suporte) */}
        <div className="flex items-center justify-center gap-3 text-xs sm:text-sm font-semibold text-neutral-700">
          <button
            type="button"
            onClick={() => setModalType('privacy')}
            className="hover:text-neutral-950 underline underline-offset-2 transition-colors cursor-pointer"
          >
            Política de Privacidade
          </button>
          <span className="text-neutral-300">|</span>
          <button
            type="button"
            onClick={() => setModalType('terms')}
            className="hover:text-neutral-950 underline underline-offset-2 transition-colors cursor-pointer"
          >
            Termos de Uso
          </button>
        </div>

        {/* Aviso de Independência do Facebook/Meta */}
        <p className="text-[11px] sm:text-xs text-neutral-500 max-w-xl mx-auto leading-relaxed">
          <strong>Aviso:</strong> Esta página não é afiliada, patrocinada, administrada ou endossada pelo Facebook, Meta Platforms, Inc. ou Instagram. As marcas Facebook, Meta e Instagram pertencem aos seus respectivos proprietários.
        </p>

        {/* Copyright */}
        <p className="text-xs text-neutral-600 font-medium">
          © 2026 Obra Sem Mistério. Todos os direitos reservados.
        </p>
      </div>

      {/* Modal de Políticas e Termos */}
      <LegalModal
        isOpen={modalType !== null}
        onClose={() => setModalType(null)}
        type={modalType || 'privacy'}
      />
    </footer>
  );
};
