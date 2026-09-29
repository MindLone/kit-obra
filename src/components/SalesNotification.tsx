import React, { useState, useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

const CUSTOMERS = [
  'José',
  'Carlos',
  'Rogério',
  'Marcos',
  'João',
  'Edson',
  'Sandra',
  'Patrícia',
];

export const SalesNotification: React.FC = () => {
  // Começa em um índice variado para cada visita
  const [currentIndex, setCurrentIndex] = useState<number>(() =>
    Math.floor(Math.random() * CUSTOMERS.length)
  );
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const showCountRef = useRef<number>(0);

  useEffect(() => {
    let hideTimer: NodeJS.Timeout;
    let nextTimer: NodeJS.Timeout;

    // 1ª aparição: 4 segundos após entrar na página
    const initialTimer = setTimeout(() => {
      triggerNotification();
    }, 4000);

    const triggerNotification = () => {
      showCountRef.current += 1;
      setIsVisible(true);

      // Fica visível por 4.5 segundos
      hideTimer = setTimeout(() => {
        setIsVisible(false);

        const count = showCountRef.current;

        // Se já mostrou 4 notificações no total, encerra na sessão para não poluir
        if (count >= 4) {
          return;
        }

        // Calcula o intervalo para a próxima notificação:
        // - As 3 primeiras aparecem com intervalos rápidos (~9 a 13 segundos)
        // - A partir da 3ª, demora MUITO (cerca de 2 minutos e meio / 150s)
        let nextInterval: number;
        if (count < 3) {
          // Intervalo rápido e natural entre as primeiras
          nextInterval = count === 1 ? 9000 : 13000;
        } else {
          // Depois da 3ª: intervalo longo de ~2 minutos e meio (150.000 ms)
          nextInterval = 150000;
        }

        nextTimer = setTimeout(() => {
          // Intercala para o próximo cliente da lista
          setCurrentIndex((prev) => (prev + 1) % CUSTOMERS.length);
          triggerNotification();
        }, nextInterval);
      }, 4500);
    };

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(hideTimer);
      clearTimeout(nextTimer);
    };
  }, []);

  const currentCustomer = CUSTOMERS[currentIndex];

  return (
    <aside
      aria-live="polite"
      className={`fixed bottom-6 left-3 sm:bottom-8 sm:left-6 z-40 transition-all duration-500 ease-out transform ${
        isVisible
          ? 'translate-y-0 opacity-100 scale-100 pointer-events-auto'
          : 'translate-y-3 opacity-0 scale-95 pointer-events-none'
      }`}
    >
      {/* Formato compacto idêntico à referência na cor laranja */}
      <div className="bg-[#ea580c] text-white px-3.5 py-2 sm:py-2.5 rounded-xl shadow-lg shadow-black/25 flex items-center gap-2.5 max-w-[260px] sm:max-w-[290px] border border-orange-400/30">
        {/* Círculo com Checkmark branco */}
        <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/25 flex items-center justify-center shrink-0">
          <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white stroke-[3]" />
        </div>

        {/* Textos simples e diretos */}
        <div className="leading-tight text-left">
          <p className="text-xs sm:text-sm font-bold text-white tracking-tight">
            {currentCustomer} comprou agora...
          </p>
          <p className="text-[11px] sm:text-xs font-semibold text-white/95 tracking-wider uppercase mt-0.5">
            OBRA SEM MISTÉRIO
          </p>
        </div>
      </div>
    </aside>
  );
};
