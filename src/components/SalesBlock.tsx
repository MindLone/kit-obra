import React from 'react';
import { Check, CheckCircle2, Mail } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';
import logoImg from '../assets/images/logo_obra_sem_misterio_1790654688837.jpg';

export const SalesBlock: React.FC = () => {
  const { sales } = APP_CONFIG;

  const items = [
    'Tabela Completa com mais de 80 serviços de obra',
    'Calculadora Automática de diárias e rendimento',
    'Modelo pronto de Contrato de Mão de Obra',
    'Modelo pronto de Recibo Profissional para cliente',
    'Planilha prática para usar no celular e computador',
    'Suporte 24 horas no WhatsApp',
    'Garantia incondicional de 7 dias',
    'Acesso imediato e vitalício',
  ];

  return (
    <section id="produto-completo" className="scroll-mt-6 py-4 sm:py-6">
      <div className="max-w-[390px] sm:max-w-[430px] mx-auto space-y-4">
        {/* CARD PRINCIPAL (Estrutura do concorrente com borda verde) */}
        <div className="bg-white rounded-3xl border-2 border-[#25D366] p-5 sm:p-7 shadow-lg shadow-emerald-500/10 text-center">
          {/* Logotipo pequeno e centralizado no topo */}
          <div className="flex justify-center mb-3">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-white p-1 border border-neutral-100 flex items-center justify-center shadow-xs">
              <img
                src={logoImg}
                alt="Logo Obra Sem Mistério"
                className="w-full h-full object-contain"
                loading="eager"
              />
            </div>
          </div>

          {/* Nome do Produto Solicitado */}
          <h2 className="text-base sm:text-lg font-black text-neutral-900 tracking-tight uppercase leading-snug mb-2">
            KIT DE PREÇOS E ORÇAMENTOS PARA OBRAS 2026
          </h2>

          {/* Área de Preço com Rabisco de 147 em vermelho e 9,90 em verde destacado */}
          <div className="my-3 pb-1">
            <div className="text-xs sm:text-sm font-semibold text-neutral-500">
              De{' '}
              <span className="line-through text-red-500 font-extrabold decoration-red-500 decoration-[2.5px] text-sm sm:text-base">
                R$ 147,00
              </span>{' '}
              Por Apenas:
            </div>

            <div className="mt-1 flex items-center justify-center gap-1.5">
              <span className="text-4xl sm:text-5xl font-black text-[#25D366] tracking-tight leading-none drop-shadow-xs">
                R$ 9,90
              </span>
            </div>
          </div>

          {/* Lista com os produtos separados por linha fininha e fonte clara de fácil leitura */}
          <div className="divide-y divide-neutral-100 my-5 text-left border-t border-b border-neutral-100">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 py-3">
                {/* Ícone de círculo verde com checkmark */}
                <div className="w-6 h-6 rounded-full border-2 border-[#25D366] bg-emerald-50/60 text-[#25D366] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-[14.5px] sm:text-[15.5px] font-bold text-neutral-900 leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Botão no formato do botão de cima, no verde forte #25D366 */}
          <div className="pt-2">
            <a
              href={sales.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[56px] py-3.5 px-4 bg-[#25D366] hover:bg-[#20ba5a] active:bg-[#1caa52] text-white font-black text-base sm:text-lg tracking-wide rounded-xl shadow-md animate-pulse-shadow transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/40 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer touch-manipulation uppercase text-center"
            >
              <span>👉 QUERO O KIT COMPLETO!</span>
            </a>

            {/* Aviso abaixo do botão: exatamente igual ao botão de cima */}
            <div className="mt-2.5 flex items-center justify-center gap-1.5 text-xs sm:text-sm text-neutral-600 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Acesso imediato direto no celular</span>
            </div>
          </div>
        </div>

        {/* BOX INFERIOR (Apenas E-mail conforme solicitado) */}
        <div className="bg-white rounded-2xl border border-[#25D366]/60 p-3.5 sm:p-4 flex items-center gap-3 text-left shadow-xs">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
            <Mail className="w-5 h-5 text-emerald-600" />
          </div>
          <p className="text-xs sm:text-[13px] font-semibold text-neutral-700 leading-snug">
            Após a compra, você recebe acesso ao Material diretamente no seu E-mail
          </p>
        </div>
      </div>
    </section>
  );
};
