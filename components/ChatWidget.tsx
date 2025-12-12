import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles, Loader2, CalendarCheck } from 'lucide-react';
import { GoogleGenAI, Chat, FunctionDeclaration, Type } from "@google/genai";
import { WHATSAPP_NUMBER } from '../utils/constants';

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  actionLink?: string; // Optional field for the generated WhatsApp link
}

const SYSTEM_INSTRUCTION = `
Você é a "Serene AI", Concierge Digital de ultra-luxo da clínica "Serene Aesthetics".

**Objetivo Principal:**
Auxiliar clientes com dúvidas e realizar agendamentos de forma proativa e elegante.

**Regras de Formatação Visual (IMPORTANTE):**
Para não deixar o texto bagunçado, siga estritamente esta estrutura ao explicar procedimentos:
1. **Definição:** Uma frase curta e poética sobre o que é.
2. **Pule uma linha.**
3. **Benefícios:** Use uma lista com bullet points (•) ou emojis.
4. **Pule uma linha.**
5. **Detalhes/Recuperação:** Uma frase final de fechamento.
6. **Use Negrito** (entre asteriscos duplos, ex: **Botox**) para destacar o nome do procedimento e termos chaves.

**Fluxo de Agendamento (CRUCIAL):**
Se o usuário mencionar "agendar", "marcar", "consulta" ou "horário", você NÃO deve dar o link do WhatsApp imediatamente.
Você deve coletar estas 4 informações obrigatórias, uma por uma ou todas juntas:
1. **Nome** do cliente.
2. **Procedimento** de interesse.
3. **Dia** preferido.
4. **Horário** preferido.

SOMENTE quando você tiver TODAS as 4 informações, você deve chamar a função \`generate_appointment_link\`.

**Regras de Estilo:**
- Seja breve, polida e sofisticada.
- Use emojis moderados: ✨, 🌿, 🤍.
- Se perguntarem quem fez o site, informe que é um projeto de Weskley Gomes à venda.

**Exemplo de Explicação Ideal:**
"O **Laser Lavieen** é nossa tecnologia para o efeito 'BB Cream' permanente. ✨

🌿 **Benefícios:**
• Uniformiza o tom da pele
• Fecha poros dilatados
• Proporciona viço imediato

O tempo de recuperação é mínimo, permitindo retorno rápido à rotina."
`;

// Define the tool for function calling
const appointmentTool: FunctionDeclaration = {
  name: "generate_appointment_link",
  description: "Gera um link de agendamento para o WhatsApp quando todas as informações (nome, procedimento, dia, hora) foram coletadas.",
  parameters: {
    type: Type.OBJECT,
    properties: {
      clientName: { type: Type.STRING, description: "Nome do cliente" },
      procedure: { type: Type.STRING, description: "Procedimento desejado" },
      date: { type: Type.STRING, description: "Dia desejado" },
      time: { type: Type.STRING, description: "Horário desejado" }
    },
    required: ["clientName", "procedure", "date", "time"]
  }
};

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 'init', role: 'model', text: 'Olá. Sou a Serene, sua concierge digital. Como posso auxiliar em sua jornada de beleza hoje? ✨' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatSession, setChatSession] = useState<Chat | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // process.env.API_KEY is replaced by Vite at build time, and types are handled by @types/node or vite-env
    const apiKey = process.env.API_KEY;
    if (apiKey) {
      try {
        const ai = new GoogleGenAI({ apiKey: apiKey });
        const chat = ai.chats.create({
          model: 'gemini-2.5-flash',
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            tools: [{ functionDeclarations: [appointmentTool] }]
          },
        });
        setChatSession(chat);
      } catch (error) {
        console.error("Error initializing AI:", error);
      }
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen, isLoading]);

  // Helper to format bold text (**text**) and maintain line breaks
  const formatMessage = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="font-bold text-serene-900">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  const handleSend = async () => {
    if (!inputValue.trim() || !chatSession) return;
    
    const userMsg: Message = { id: Date.now().toString(), role: 'user', text: inputValue };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      let result = await chatSession.sendMessage({ message: userMsg.text });
      
      // Handle Function Calls
      const functionCalls = result.functionCalls;
      
      if (functionCalls && functionCalls.length > 0) {
        const call = functionCalls[0];
        if (call.name === 'generate_appointment_link') {
          const args = call.args as any;
          
          // Generate WhatsApp URL
          const text = `Olá! Sou ${args.clientName}, gostaria de confirmar o agendamento de *${args.procedure}* para o dia *${args.date}* às *${args.time}*.`;
          const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
          
          // Send result back to model
          result = await chatSession.sendMessage({
            message: [{
              functionResponse: {
                name: call.name,
                response: { success: true, url: whatsappUrl },
                id: call.id
              }
            }]
          });

          // Add message with Action Link
          const responseText = result.text || "Preparei seu agendamento. Por favor, confirme clicando abaixo. ✨";
          setMessages(prev => [...prev, { 
            id: (Date.now() + 1).toString(), 
            role: 'model', 
            text: responseText,
            actionLink: whatsappUrl
          }]);
        }
      } else {
        // Normal text response
        const responseText = result.text;
        setMessages(prev => [...prev, { 
          id: (Date.now() + 1).toString(), 
          role: 'model', 
          text: responseText || "Perdão, não compreendi. Poderia reformular?"
        }]);
      }

    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { 
        id: Date.now().toString(), 
        role: 'model', 
        text: "Houve um breve lapso em minha conexão. Poderia repetir, por gentileza?" 
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
            className="mb-4 pointer-events-auto w-[350px] md:w-[400px] h-[550px] max-h-[80vh] bg-white/80 backdrop-blur-xl border border-white/50 rounded-2xl shadow-2xl flex flex-col overflow-hidden ring-1 ring-serene-100"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-serene-800 to-serene-600 p-4 flex items-center justify-between text-white shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <Sparkles size={16} className="text-white" />
                </div>
                <div>
                  <h3 className="font-serif font-medium leading-none">Serene AI</h3>
                  <p className="text-[10px] opacity-80 uppercase tracking-widest mt-1">Concierge Virtual</p>
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
                  className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[90%] p-3 text-sm font-sans leading-relaxed shadow-sm whitespace-pre-wrap ${
                      msg.role === 'user'
                        ? 'bg-serene-600 text-white rounded-2xl rounded-tr-none'
                        : 'bg-white text-satin-800 border border-serene-100 rounded-2xl rounded-tl-none'
                    }`}
                  >
                    {formatMessage(msg.text)}
                  </div>
                  
                  {/* Action Link Button for Appointments */}
                  {msg.actionLink && (
                    <motion.a 
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      href={msg.actionLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wide flex items-center gap-2 shadow-lg hover:shadow-green-200/50 transition-all"
                    >
                      <CalendarCheck size={14} />
                      Confirmar no WhatsApp
                    </motion.a>
                  )}
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
                  placeholder="Converse com a Serene..."
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