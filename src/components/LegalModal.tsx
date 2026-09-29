import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms';
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden border border-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabeçalho */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-neutral-200 bg-neutral-50">
          <h2 className="text-lg sm:text-xl font-bold text-neutral-900">
            {type === 'privacy' ? 'Política de Privacidade' : 'Termos de Uso'}
          </h2>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Conteúdo rolável */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-neutral-700 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p>
                Esta Política de Privacidade descreve como os dados são tratados ao navegar, entrar em contato ou adquirir o produto digital <strong>Obra Sem Mistério</strong> através do site <strong>obrasemmisterio.shop</strong>.
              </p>

              <h3 className="text-sm sm:text-base font-bold text-neutral-900 pt-2">
                1. Quais dados podem ser coletados
              </h3>
              <p>
                Durante a sua interação com nosso site, podemos coletar:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Dados de contato fornecidos voluntariamente por você ao enviar mensagens de suporte (como e-mail, nome ou número de telefone pelo WhatsApp);</li>
                <li>Dados necessários para identificação e entrega da compra (como nome e e-mail informados na plataforma de pagamento);</li>
                <li>Dados de navegação técnica padrão (como endereço IP, tipo de navegador e páginas visitadas) coletados automaticamente pelos provedores de hospedagem para segurança e funcionamento técnico.</li>
              </ul>

              <h3 className="text-sm sm:text-base font-bold text-neutral-900 pt-2">
                2. Finalidades do tratamento dos dados
              </h3>
              <p>
                Os dados coletados são utilizados estritamente para:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Processar o pagamento e liberar o acesso imediato ao material digital adquirido;</li>
                <li>Prestar suporte ao cliente e responder a dúvidas sobre o produto, pagamento ou acesso;</li>
                <li>Cumprir obrigações legais, fiscais e regulatórias cabíveis;</li>
                <li>Garantir a segurança e prevenir fraudes na plataforma.</li>
              </ul>

              <h3 className="text-sm sm:text-base font-bold text-neutral-900 pt-2">
                3. Cookies e tecnologias semelhantes
              </h3>
              <p>
                O site pode utilizar cookies essenciais de navegação para assegurar o correto funcionamento técnico das páginas e ferramentas de análise de tráfego que auxiliam na melhoria da experiência do usuário. Você pode gerenciar ou desativar cookies diretamente nas configurações do seu navegador.
              </p>

              <h3 className="text-sm sm:text-base font-bold text-neutral-900 pt-2">
                4. Compartilhamento de dados
              </h3>
              <p>
                Não comercializamos seus dados pessoais. O compartilhamento ocorre unicamente quando estritamente necessário com serviços de terceiros essenciais para o funcionamento da operação, tais como:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Plataformas seguras de processamento de pagamento para viabilizar a transação financeira;</li>
                <li>Serviços de hospedagem de servidores e envio de e-mails para entrega do produto.</li>
              </ul>

              <h3 className="text-sm sm:text-base font-bold text-neutral-900 pt-2">
                5. Segurança e proteção dos dados
              </h3>
              <p>
                Adotamos medidas técnicas e organizacionais compatíveis com padrões de mercado para proteger seus dados contra acessos não autorizados, perdas ou alterações. Transações de pagamento são processadas em ambiente criptografado (SSL).
              </p>

              <h3 className="text-sm sm:text-base font-bold text-neutral-900 pt-2">
                6. Seus direitos (LGPD)
              </h3>
              <p>
                Conforme previsto pela Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD), você tem direito de solicitar a confirmação da existência de tratamento, o acesso aos seus dados, a correção de informações incompletas ou a eliminação de dados tratados com seu consentimento, ressalvadas as hipóteses de guarda obrigatória por lei.
              </p>

              <h3 className="text-sm sm:text-base font-bold text-neutral-900 pt-2">
                7. Contato sobre privacidade
              </h3>
              <p>
                Para esclarecer dúvidas sobre esta Política de Privacidade ou solicitar a atualização e exclusão de seus dados, envie um e-mail para nosso canal oficial:
              </p>
              <p className="font-semibold text-neutral-900">
                E-mail: bibliotecasaudebs@gmail.com
              </p>
            </>
          ) : (
            <>
              <p>
                Ao acessar o site <strong>obrasemmisterio.shop</strong> e adquirir o produto digital <strong>Obra Sem Mistério</strong>, você concorda com as seguintes condições de uso:
              </p>

              <h3 className="text-sm sm:text-base font-bold text-neutral-900 pt-2">
                1. Objeto e Licença de Uso
              </h3>
              <p>
                O produto consiste em material digital educacional e orientativo (tabela referencial de preços de mão de obra e planilhas de apoio). A compra concede uma licença de uso pessoal e intransferível. É expressamente proibida a revenda, compartilhamento público, rateio ou distribuição não autorizada do material.
              </p>

              <h3 className="text-sm sm:text-base font-bold text-neutral-900 pt-2">
                2. Natureza Referencial dos Valores
              </h3>
              <p>
                Os valores e cálculos contidos no material servem como referências e estimativas de mercado. Cada profissional é responsável por avaliar as condições locais, custos individuais, grau de dificuldade e especificidades de cada obra antes de fechar orçamentos com seus clientes.
              </p>

              <h3 className="text-sm sm:text-base font-bold text-neutral-900 pt-2">
                3. Garantia Incondicional de 7 Dias
              </h3>
              <p>
                Em conformidade com o Código de Defesa do Consumidor, oferecemos garantia incondicional de 7 (sete) dias a partir da confirmação do pagamento. Caso não fique satisfeito com o material, você poderá solicitar o reembolso integral dentro desse prazo.
              </p>

              <h3 className="text-sm sm:text-base font-bold text-neutral-900 pt-2">
                4. Canal de Suporte e Atendimento
              </h3>
              <p>
                Para dúvidas de acesso, pagamento ou suporte técnico, utilize os nossos canais oficiais:
              </p>
              <p className="font-semibold text-neutral-900">
                E-mail: bibliotecasaudebs@gmail.com<br />
                WhatsApp Suporte: +55 (61) 98211-0174
              </p>
            </>
          )}
        </div>

        {/* Rodapé do Modal */}
        <div className="p-3 sm:p-4 border-t border-neutral-200 bg-neutral-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white text-xs sm:text-sm font-bold rounded-lg transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
