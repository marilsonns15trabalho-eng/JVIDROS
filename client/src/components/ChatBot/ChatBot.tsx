import { Send, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useChatBot } from "../../hooks/useChatBot";
import ChatButton from "./ChatButton";
import ChatMessage from "./ChatMessage";
import "./ChatBot.css";

export default function ChatBot() {
  const { messages, isTyping, isOpen, sendMessage, toggleChat, setIsOpen } =
    useChatBot();

  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    if (input.trim()) {
      sendMessage(input.trim());
      setInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <>
      <ChatButton onClick={toggleChat} isOpen={isOpen} />

      {isOpen && (
        <div className="chatbot-window" role="dialog" aria-label="Chat JVidros">
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <span className="chatbot-avatar">
                <span className="chatbot-avatar-icon">J</span>
              </span>
              <div>
                <strong>JVidros</strong>
                <span className="chatbot-status">
                  <span className="chatbot-status-dot" /> Online
                </span>
              </div>
            </div>
            <button
              type="button"
              className="chatbot-close"
              onClick={() => setIsOpen(false)}
              aria-label="Fechar chat"
            >
              <X size={18} />
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg) => (
              <ChatMessage key={msg.id} message={msg} />
            ))}
            {isTyping && (
              <div className="chatbot-message bot">
                <span className="chatbot-message-icon">
                  <span className="chatbot-avatar-icon">J</span>
                </span>
                <div className="chatbot-message-content">
                  <span className="chatbot-typing">
                    <span />
                    <span />
                    <span />
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-input">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Digite sua mensagem..."
              rows={1}
              aria-label="Mensagem"
            />
            <button
              type="button"
              onClick={handleSend}
              disabled={!input.trim() || isTyping}
              aria-label="Enviar mensagem"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}