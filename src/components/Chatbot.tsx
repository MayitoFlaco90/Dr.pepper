import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Send, Loader2, Sparkles } from "lucide-react";
import { getChatResponse } from "../services/gemini";

interface Message {
  role: "user" | "model";
  parts: { text: string }[];
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "model",
      parts: [{ text: "Hi! I'm Pepper. Ready to talk about the 23 flavors? Ask me anything about Dr Pepper history, pairings, or recipes!" }]
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", parts: [{ text: input }] };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const responseText = await getChatResponse(input, messages);
      setMessages(prev => [...prev, { role: "model", parts: [{ text: responseText }] }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: "model", parts: [{ text: "Sorry, I'm having a little brain freeze. Can you try again?" }] }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-drpepper-red text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-50"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-28 right-8 w-[90vw] md:w-[400px] h-[600px] bg-white rounded-[2rem] shadow-2xl border border-gray-100 flex flex-col overflow-hidden z-50"
          >
            {/* Header */}
            <div className="bg-drpepper-red p-6 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h3 className="font-bold italic">Pepper AI</h3>
                  <p className="text-xs opacity-80">Online & Bubbly</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="opacity-60 hover:opacity-100">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-grow overflow-y-auto p-6 space-y-4 bg-gray-50"
            >
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-drpepper-red text-white rounded-tr-none"
                        : "bg-white text-drpepper-dark shadow-sm border border-gray-100 rounded-tl-none"
                    }`}
                  >
                    {msg.parts[0].text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100">
                    <Loader2 size={18} className="animate-spin text-drpepper-red" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-100">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask Pepper anything..."
                  className="w-full bg-gray-100 border-none rounded-full py-3 pl-6 pr-14 focus:ring-2 focus:ring-drpepper-red text-sm"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 p-2 bg-drpepper-red text-white rounded-full disabled:opacity-50"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
