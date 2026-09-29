import React from 'react';
import { HardHat, CheckCircle2 } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';
import { VturbVideoPlayer } from './VturbVideoPlayer';

interface HeroProps {
  onStartCalculation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartCalculation }) => {
  return (
    <section className="bg-white border-b border-neutral-200 pt-5 pb-7 sm:pt-8 sm:pb-12 px-3 sm:px-4">
      <div className="max-w-3xl mx-auto text-center">
        {/* Badge do Público-Alvo Solicitado */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-950 border border-amber-300 text-xs sm:text-sm font-bold tracking-wide uppercase mb-3">
          <HardHat className="w-4 h-4 text-amber-700 shrink-0" />
          <span>{APP_CONFIG.demoNoticeBadge}</span>
        </div>

        {/* Título Principal em Caixa Alta com Marca-Texto Amarelo em MÃO DE OBRA */}
        <h1 className="text-3xl min-[360px]:text-[34px] min-[400px]:text-4xl sm:text-5xl lg:text-6xl font-black text-neutral-950 tracking-tight uppercase leading-[1.12] mb-3.5">
          SAIBA QUANTO COBRAR PELA SUA{' '}
          <span className="relative inline-block whitespace-nowrap mt-1 min-[400px]:mt-0">
            <span className="relative z-10 px-2 py-0.5 text-neutral-950 font-black">
              MÃO DE OBRA
            </span>
            <span className="absolute inset-0 bg-amber-400 rounded-md -rotate-1 -skew-x-2 shadow-xs"></span>
          </span>
        </h1>

        {/* Subtítulo Conforme Solicitado */}
        <p className="text-sm min-[380px]:text-base sm:text-xl font-bold text-neutral-700 max-w-xl mx-auto mb-2 leading-snug">
          {APP_CONFIG.heroSubtitle}
        </p>

        {/* VÍDEO VERTICAL 9:16 LOGO ABAIXO DO SUBTÍTULO (OTIMIZADO PARA VTURB NO CELULAR) */}
        <VturbVideoPlayer onVideoClick={onStartCalculation} />

        {/* CTA Principal Full-Width no Celular */}
        <div className="w-full max-w-md mx-auto mb-3">
          <button
            onClick={onStartCalculation}
            className="w-full min-h-[56px] py-3.5 px-4 bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white font-black text-base sm:text-lg tracking-wide rounded-xl shadow-md transition-all flex items-center justify-center gap-2.5 cursor-pointer touch-manipulation uppercase"
          >
            <span className="text-xl sm:text-2xl select-none leading-none inline-block animate-pulse" role="img" aria-label="apontando">👉</span>
            <span>{APP_CONFIG.heroCta}</span>
          </button>
        </div>

        {/* Garantia */}
        <div className="mt-2 flex items-center justify-center gap-1.5 text-xs sm:text-sm text-neutral-600 font-semibold">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Acesso imediato direto no celular</span>
        </div>
      </div>
    </section>
  );
};
