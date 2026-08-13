import { useCallback, useRef, useState } from "react";
import { findBestResponse } from "../data/knowledgeBase";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  shouldRedirect?: boolean;
  whatsappLink?: string;
}

interface ChatContext {
  name: string;
  phone: string;
  address: string;
  collectedData: string[];
}

const whatsappNumber =
  import.meta.env.VITE_WHATSAPP_NUMBER?.replace(/\D/g, "") || "5571986110762";

function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, "");
  // Aceita DDD (2) + número (8 ou 9 dígitos) = 10-11 dígitos
  return digits.length >= 10 && digits.length <= 13;
}

export function useChatBot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [context, setContext] = useState<ChatContext>({
    name: "",
    phone: "",
    address: "",
    collectedData: [],
  });
  const [onboardingStep, setOnboardingStep] = useState<
    "name" | "phone" | "address" | "done"
  >("name");
  const messageIdRef = useRef(0);

  const generateId = () => {
    messageIdRef.current += 1;
    return `msg-${messageIdRef.current}`;
  };

  const buildWhatsAppMessage = useCallback(() => {
    const lines: string[] = [];
    lines.push("Olá, JVidros! Gostaria de solicitar um orçamento.");
    lines.push("");

    if (context.name) lines.push(`Nome: ${context.name}`);
    if (context.phone) lines.push(`Telefone: ${context.phone}`);
    if (context.address) lines.push(`Endereço: ${context.address}`);

    if (context.collectedData.length > 0) {
      lines.push("");
      lines.push("Detalhes da solicitação:");
      context.collectedData.forEach((item) => lines.push(`• ${item}`));
    }

    lines.push("");
    lines.push(
      "Essas informações foram preenchidas através do atendimento no site.",
    );

    return lines.join("\n");
  }, [context]);

  const getWhatsAppLink = useCallback(() => {
    const encoded = encodeURIComponent(buildWhatsAppMessage());
    return `https://wa.me/${whatsappNumber}?text=${encoded}`;
  }, [buildWhatsAppMessage]);

  const addBotMessage = useCallback(
    (content: string, shouldRedirect = false, whatsappLink?: string) => {
      const assistantMessage: Message = {
        id: generateId(),
        role: "assistant",
        content,
        timestamp: new Date(),
        shouldRedirect,
        whatsappLink,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    },
    [],
  );

  const handleOnboarding = useCallback(
    async (content: string) => {
      if (onboardingStep === "name") {
        setContext((prev) => ({ ...prev, name: content }));
        setOnboardingStep("phone");
        setIsTyping(true);
        await new Promise((r) => setTimeout(r, 500));
        addBotMessage(
          `Perfeito, ${content}! Agora me informe seu número de telefone com WhatsApp.`,
        );
        setIsTyping(false);
        return true;
      }

      if (onboardingStep === "phone") {
        if (!isValidPhone(content)) {
          setIsTyping(true);
          await new Promise((r) => setTimeout(r, 500));
          addBotMessage(
            "Hmm, não consegui identificar esse número. Pode me informar novamente? Por exemplo: (71) 98611-0762",
          );
          setIsTyping(false);
          return true;
        }
        setContext((prev) => ({ ...prev, phone: content }));
        setOnboardingStep("address");
        setIsTyping(true);
        await new Promise((r) => setTimeout(r, 500));
        addBotMessage(
          "Ótimo. Para facilitar seu atendimento e entendermos a região do serviço, agora me informe seu endereço.",
        );
        setIsTyping(false);
        return true;
      }

      if (onboardingStep === "address") {
        setContext((prev) => ({ ...prev, address: content }));
        setOnboardingStep("done");
        setIsTyping(true);
        await new Promise((r) => setTimeout(r, 500));
        addBotMessage(
          `Obrigado, ${context.name}! Agora podemos começar. Como posso ajudar você com seu projeto de vidro?`,
        );
        setIsTyping(false);
        return true;
      }

      return false;
    },
    [onboardingStep, context.name, addBotMessage],
  );

  const sendMessage = useCallback(
    async (content: string) => {
      if (!content.trim()) return;

      // Adiciona mensagem do usuário
      const userMessage: Message = {
        id: generateId(),
        role: "user",
        content: content.trim(),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, userMessage]);

      // Fluxo obrigatório de identificação
      if (onboardingStep !== "done") {
        await handleOnboarding(content.trim());
        return;
      }

      setIsTyping(true);

      // Simula atraso para parecer natural (300-800ms)
      const delay = 300 + Math.random() * 500;
      await new Promise((resolve) => setTimeout(resolve, delay));

      // Busca a resposta no banco de conhecimento
      const response = findBestResponse(content);

      // Coleta informações relevantes quando identificadas
      const lower = content.toLowerCase();
      const collectedFields: string[] = [];
      if (/\d+\s*(x|por)?\s*\d+/.test(lower) || /(metros|m²|cm|largura|altura)/.test(lower)) {
        collectedFields.push(`Medidas: ${content}`);
      }
      if (/(temperado|laminado|serigrafado|película|espessura)/.test(lower)) {
        collectedFields.push(`Tipo de vidro: ${content}`);
      }
      if (/(sacada|box|porta|divisória|espelho|fachada|janela)/.test(lower)) {
        collectedFields.push(`Serviço: ${content}`);
      }
      if (collectedFields.length > 0) {
        setContext((prev) => ({
          ...prev,
          collectedData: [...prev.collectedData, ...collectedFields],
        }));
      }

      if (response) {
        // Se tiver shouldRedirect = true, encaminha para WhatsApp
        if (response.shouldRedirect) {
          const whatsappLink = getWhatsAppLink();
          addBotMessage(response.response, true, whatsappLink);
        } else {
          // Resposta normal
          addBotMessage(response.response);
        }
      } else {
        // Não encontrou resposta → encaminha para WhatsApp
        const whatsappLink = getWhatsAppLink();
        addBotMessage(
          `Hmm, essa é uma pergunta bem específica!

Para te dar a melhor resposta possível, nossa equipe de especialistas precisa entender melhor seu caso.

Clique no botão abaixo para falar diretamente com a gente no WhatsApp! Eles vão adorar te ajudar com todos os detalhes.`,
          true,
          whatsappLink,
        );
      }

      setIsTyping(false);
    },
    [onboardingStep, handleOnboarding, addBotMessage, getWhatsAppLink],
  );

  const toggleChat = useCallback(() => {
    setIsOpen((prev) => {
      const next = !prev;
      // Se estiver abrindo e não houver mensagens, inicia o fluxo de identificação
      if (next && messages.length === 0) {
        const welcomeMessage: Message = {
          id: generateId(),
          role: "assistant",
          content:
            "Olá! Seja bem-vindo à JVidros! Antes de começarmos, me informe seu nome para que eu possa te atender melhor.",
          timestamp: new Date(),
        };
        setMessages([welcomeMessage]);
      }
      return next;
    });
  }, [messages.length]);

  const clearMessages = useCallback(() => {
    setMessages([]);
    setContext({ name: "", phone: "", address: "", collectedData: [] });
    setOnboardingStep("name");
  }, []);

  return {
    messages,
    isTyping,
    isOpen,
    sendMessage,
    toggleChat,
    clearMessages,
    setIsOpen,
    context,
  };
}