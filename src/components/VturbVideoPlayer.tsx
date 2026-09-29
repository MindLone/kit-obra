import React, { useEffect, useRef } from 'react';
import { Play, Volume2, HardHat } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';

interface VturbVideoPlayerProps {
  onVideoClick?: () => void;
}

export const VturbVideoPlayer: React.FC<VturbVideoPlayerProps> = ({ onVideoClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { vturb } = APP_CONFIG;

  // Se o usuário configurar o HTML do VTurb em appConfig.ts, injeta de forma segura
  useEffect(() => {
    if (vturb?.customEmbedHtml && containerRef.current) {
      containerRef.current.innerHTML = vturb.customEmbedHtml;
      // Executa scripts injetados caso o VTurb forneça tags <script>
      const scripts = containerRef.current.querySelectorAll('script');
      scripts.forEach((oldScript) => {
        const newScript = document.createElement('script');
        Array.from(oldScript.attributes).forEach((attr) => newScript.setAttribute(attr.name, attr.value));
        newScript.appendChild(document.createTextNode(oldScript.innerHTML));
        oldScript.parentNode?.replaceChild(newScript, oldScript);
      });
    }
  }, [vturb?.customEmbedHtml]);

  return (
    <div className="w-full max-w-[330px] sm:max-w-[360px] mx-auto my-4 sm:my-6">
      {/* Container de Vídeo Proporção 9:16 (Vertical Mobile) */}
      <div 
        id="vturb-player-container"
        ref={containerRef}
        className="relative w-full aspect-[9/16] bg-neutral-950 rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-neutral-900 shadow-2xl overflow-hidden flex flex-col justify-between"
      >
        {vturb?.iframeUrl ? (
          /* Iframe direto do VTurb caso informado */
          <iframe
            src={vturb.iframeUrl}
            title="Vídeo Explicativo - Quanto Cobrar na Obra"
            className="w-full h-full border-0 absolute inset-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : vturb?.videoId ? (
          /* Script player padrão VTurb caso informado apenas o ID */
          <div className="w-full h-full flex items-center justify-center text-white text-xs">
            <div id={`smartplayer_${vturb.videoId}`} className="w-full h-full" />
          </div>
        ) : (
          /* Placeholder de Vídeo 9:16 (Pronto para receber o código do VTurb) */
          <div 
            onClick={onVideoClick}
            className="relative w-full h-full bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-900 flex flex-col justify-between p-4 cursor-pointer group"
          >
            {/* Barra superior do player vertical */}
            <div className="flex items-center justify-between text-neutral-400 text-xs">
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-neutral-800/80 backdrop-blur-xs text-[10px] text-amber-400 font-bold border border-neutral-700">
                <HardHat className="w-3 h-3 text-amber-500" />
                <span>Vídeo Rápido</span>
              </div>
              <div className="flex items-center gap-1 text-[11px] text-neutral-400 bg-black/40 px-2 py-0.5 rounded-full">
                <Volume2 className="w-3.5 h-3.5 text-neutral-300" />
                <span>Ligue o som</span>
              </div>
            </div>

            {/* Centro com Botão de Play Gigante e Efeito Pulsante */}
            <div className="flex flex-col items-center justify-center text-center my-auto">
              <div className="relative mb-4">
                <div className="absolute inset-0 rounded-full bg-amber-500/30 animate-ping"></div>
                <div className="w-20 h-20 rounded-full bg-amber-600 group-hover:bg-amber-500 text-white flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110 active:scale-95">
                  <Play className="w-9 h-9 fill-white ml-1 text-white" />
                </div>
              </div>

              <span className="text-sm sm:text-base font-black text-white uppercase tracking-wider block mb-1">
                Aperte para Assistir
              </span>
              <p className="text-[11px] text-neutral-400 max-w-[220px]">
                Descubra em 2 minutos como calcular sua mão de obra com precisão
              </p>
            </div>

            {/* Aviso inferior de integração VTurb */}
            <div className="text-center py-2 px-2.5 rounded-xl bg-neutral-900/90 border border-neutral-800 text-[10px] text-neutral-400">
              <span className="text-amber-400 font-bold block mb-0.5">Espaço reservado para o player VTurb</span>
              <span>Proporção 9:16 vertical otimizada para celular</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
