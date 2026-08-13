import { MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";

interface ChatButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

export default function ChatButton({ onClick, isOpen }: ChatButtonProps) {
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 8000);
    if (isOpen) setShowTooltip(false);
    return () => clearTimeout(timer);
  }, [isOpen]);

  return (
    <div className="chat-button-wrapper">
      {showTooltip && !isOpen && (
        <div className="chat-tooltip">
          <span className="chat-tooltip-text">Tire suas dúvidas aqui</span>
          <div className="chat-tooltip-arrow" />
        </div>
      )}
      <button
        type="button"
        className="chatbot-toggle"
        onClick={onClick}
        aria-label={isOpen ? "Fechar chat" : "Abrir chat"}
        aria-expanded={isOpen}
      >
        {!isOpen ? <MessageCircle size={28} /> : <X size={28} />}
      </button>
    </div>
  );
}