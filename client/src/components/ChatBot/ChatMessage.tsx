import { Bot, MessageCircle, User } from "lucide-react";

interface ChatMessageProps {
  message: {
    id: string;
    role: "user" | "assistant";
    content: string;
    timestamp: Date;
    shouldRedirect?: boolean;
    whatsappLink?: string;
  };
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <div className={`chatbot-message ${isUser ? "user" : "bot"}`}>
      <span className="chatbot-message-icon">
        {isUser ? <User size={14} /> : <Bot size={14} />}
      </span>
      <div className="chatbot-message-content">
        <p>{message.content}</p>
        {message.shouldRedirect && message.whatsappLink && (
          <a
            href={message.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="chatbot-whatsapp-btn"
          >
            <MessageCircle size={14} /> Falar com especialista no WhatsApp
          </a>
        )}
      </div>
    </div>
  );
}