import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi! I'm Kassahun's AI assistant. Ask me anything about his projects, skills, or courses!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
        scrollToBottom();
    }
  }, [messages, isOpen]);

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen && 
        chatContainerRef.current && 
        !chatContainerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    const responseText = await sendMessageToGemini(userMessage);

    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Helper to render text with clickable links
  const renderMessageContent = (text: string, role: 'user' | 'model') => {
    // Regex that robustly captures URLs starting with http://, https://, or www.
    // It is designed to handle trailing punctuation by using a lookahead or exclusion character class
    const urlRegex = /((?:https?:\/\/|www\.)[^\s]+?(?=[.,;!?)]?(?:\s|$)))/g;
    
    // Split the text. The capturing group ensures the URL is included in the parts array.
    const parts = text.split(urlRegex);

    return parts.map((part, index) => {
      if (part.match(urlRegex)) {
        let href = part;
        if (!part.startsWith('http')) {
          href = 'http://' + part;
        }
        return (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`font-bold hover:underline break-all transition-colors ${
              role === 'user' ? 'text-white underline' : 'text-blue-600 dark:text-blue-400'
            }`}
            onClick={(e) => e.stopPropagation()} // Prevent bubbling if container has handlers
          >
            {part}
          </a>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 font-sans">
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.1 }}
              onClick={() => setIsOpen(true)}
              className="bg-primary hover:bg-blue-600 text-white p-4 rounded-full shadow-lg shadow-blue-500/30 flex items-center gap-2"
            >
              <Sparkles size={24} />
              <span className="font-semibold hidden sm:inline">Ask AI</span>
            </motion.button>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={chatContainerRef}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-[90vw] sm:w-[380px] h-[500px] max-h-[80vh] flex flex-col overflow-hidden border border-slate-200 dark:border-slate-700"
            >
              {/* Header */}
              <div className="bg-primary p-4 flex justify-between items-center text-white flex-shrink-0">
                <div className="flex items-center gap-2">
                  <div className="bg-white/20 p-1.5 rounded-lg">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">Kassahun's AI</h3>
                    <p className="text-xs text-blue-100 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                      Online
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Chat Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-950">
                {messages.map((msg, idx) => (
                  <div 
                    key={idx} 
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`
                        max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap
                        ${msg.role === 'user' 
                          ? 'bg-primary text-white rounded-tr-none' 
                          : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-gray-100 dark:border-slate-700 rounded-tl-none shadow-sm'
                        }
                      `}
                    >
                      {renderMessageContent(msg.text, msg.role)}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                     <div className="bg-white dark:bg-slate-800 px-4 py-3 rounded-2xl rounded-tl-none border border-gray-100 dark:border-slate-700 shadow-sm flex items-center gap-2">
                        <Loader2 size={16} className="animate-spin text-primary" />
                        <span className="text-xs text-slate-500 dark:text-slate-400">Thinking...</span>
                     </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-700 flex-shrink-0">
                <div className="flex gap-2 relative">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Ask about my skills..."
                      className="w-full pl-4 pr-8 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-full focus:ring-2 focus:ring-primary/50 outline-none text-sm text-slate-800 dark:text-white"
                      disabled={isLoading}
                    />
                    {input && (
                      <button
                        onClick={() => setInput('')}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1"
                      >
                        <X size={14} />
                      </button>
                    )}
                  </div>
                  <button 
                    onClick={handleSend}
                    disabled={!input.trim() || isLoading}
                    className="bg-primary text-white p-2 rounded-full hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex-shrink-0"
                  >
                    <Send size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default AIChat;