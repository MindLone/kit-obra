import React, { useState, useEffect } from 'react';

export const UrgencyBar: React.FC = () => {
  const [dateStr, setDateStr] = useState<string>('');

  useEffect(() => {
    // Calcula o dia de hoje no formato dia/mês/ano dinamicamente
    const computeDate = () => {
      const now = new Date();
      const d = now.getDate();
      const m = now.getMonth() + 1;
      const y = now.getFullYear();
      setDateStr(`${d}/${m}/${y}`);
    };

    computeDate();

    // Atualiza caso a página fique aberta na virada da meia-noite
    const timer = setInterval(computeDate, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    // Barra posicionada apenas no topo da página: quando você rola para baixo, ela fica lá em cima e não desce junto
    <div className="w-full bg-red-600 text-white py-2.5 px-3 text-center text-xs min-[380px]:text-sm font-black tracking-wide shadow-xs flex items-center justify-center gap-1.5">
      <span className="text-base leading-none">⚡</span>
      <span>
        Desconto só HOJE nessa página{' '}
        <span className="underline decoration-white/70 decoration-2 font-black">
          {dateStr || 'HOJE'}
        </span>
      </span>
    </div>
  );
};
