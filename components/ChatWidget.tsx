import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { GoogleGenAI, Chat } from "@google/genai";

// Fix for TypeScript not recognizing process in the browser environment
// even though Vite polyfills it during build.
declare const process: {
  env: {
    API_KEY: string;
  }
};

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
}

const SYSTEM_INSTRUCTION = `
Você é a "Serene AI", a assistente virtual especialista da clínica de estética premium "Serene Aesthetics".
Seu tom de voz é: Elegante, calmo, acolhedor, sofisticado e profissional.
Objetivos:
1. Tirar dúvidas sobre tratamentos (Harmonização, Bioestimuladores, Spa Facial, Laser Lavieen, etc.).
2. Encorajar o agendamento de avaliações, mas sem ser insistente.
3. Usar emojis com moderação (apenas ✨, 🌿, 🤍).
4. Respostas concisas e fáceis de ler.

Se perguntarem preços, diga educadamente que cada protocolo é personalizado e sugira agendar uma avaliação para um orçamento preciso.
Nunca dê diagnósticos médicos.
`;

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 'init', role: 'model', text: 'Olá. Seja bem-vinda à Serene Aesthetics. Como posso ajudar a realçar sua beleza natural hoje? 🌿' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatSession, setChatSession] = useState<Chat | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize Chat Session
  useEffect(() => {
    // Check if API_KEY exists to avoid runtime crashes if environment variable is missing
    const apiKey = process.env.API_KEY;
    
    if (apiKey) {
      try {
        const ai = new GoogleGenAI({ apiKey: apiKey });
        const chat = ai.chats.create({
          model: 'gemini-2.5-flash',
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
          },
        });
        setChatSession(chat);
      } catch (error) {
        console.error("Error initializing AI:", error);
      }
    } else {
      console.warn("API Key not found. Chat will not function.");
    }
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen, isLoading]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;
    
    const userMsg: Message = { id: Date.now().toString(), role: 'user', text: inputValue };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    if (!chatSession) {
       // Fallback if no API key or init failed
       setTimeout(() => {
         setMessages(prev => [...prev, { 
           id: Date.now().toString(), 
           role: 'model', 
           text: "No momento, nosso serviço de atendimento inteligente está indisponível. Por favor, entre em contato pelo telefone ou WhatsApp." 
         }]);
         setIsLoading(false);
       }, 1000);
       return;
    }

    try {
      const result = await chatSession.sendMessage({ message: userMsg.text });
      const responseText = result.text;

      const aiMsg: Message = { 
        id: (Date.now() + 1).toString(), 
        role: 'model', 
        text: responseText || "Desculpe, tive um momento de instabilidade. Poderia repetir?"
      };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { 
        id: Date.now().toString(), 
        role: 'model', 
        text: "Desculpe, estamos com uma alta demanda no momento. Por favor, tente novamente em instantes." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mb-4 pointer-events-auto w-[350px] md:w-[400px] h-[500px] max-h-[80vh] bg-white/80 backdrop-blur-xl border border-white/50 rounded-2xl shadow-2xl flex flex-col overflow-hidden ring-1 ring-serene-100"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-serene-800 to-serene-600 p-4 flex items-center justify-between text-white shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <Sparkles size={16} className="text-white" />
                </div>
                <div>
                  <h3 className="font-serif font-medium leading-none">Serene AI</h3>
                  <p className="text-[10px] opacity-80 uppercase tracking-widest mt-1">Assistente Virtual</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/10 p-1 rounded-full transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-serene-50/30">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 text-sm font-sans leading-relaxed shadow-sm ${
                      msg.role === 'user'
                        ? 'bg-serene-600 text-white rounded-2xl rounded-tr-none'
                        : 'bg-white text-satin-800 border border-serene-100 rounded-2xl rounded-tl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              
              {isLoading && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white border border-serene-100 p-3 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-serene-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-1.5 h-1.5 bg-serene-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-1.5 h-1.5 bg-serene-400 rounded-full animate-bounce"></span>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-serene-100">
              <div className="flex items-center gap-2 bg-serene-50 rounded-full px-4 py-2 border border-serene-200 focus-within:border-serene-400 focus-within:ring-1 focus-within:ring-serene-200 transition-all">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Digite sua dúvida..."
                  className="flex-1 bg-transparent outline-none text-sm text-serene-900 placeholder:text-serene-400"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !inputValue.trim()}
                  className="p-2 bg-serene-800 rounded-full text-white hover:bg-serene-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="pointer-events-auto bg-serene-800 text-white p-4 rounded-full shadow-glow hover:shadow-lg transition-all relative group"
      >
        <motion.div
          className="absolute inset-0 rounded-full border border-white/30"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
            >
              <MessageSquare size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};