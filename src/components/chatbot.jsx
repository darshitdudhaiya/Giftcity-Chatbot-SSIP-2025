import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, User, MessageCircle, X, Send } from "lucide-react";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      content: "Hello! How can I help you with information about GIFT City today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setIsTyping(true);

    setTimeout(() => {
      const botMessage = {
        role: "bot",
        content:
          "Thank you for your message. Our team will provide you with detailed information about GIFT City. Is there anything specific you would like to know about our services, infrastructure, or opportunities?",
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <motion.button
          onClick={() => setIsOpen(true)}
          className="h-16 w-16 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl flex items-center justify-center transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <MessageCircle className="h-8 w-8" />
        </motion.button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-28 right-8 z-50 top-24 w-full max-w-md"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
          >
            <div className="overflow-hidden shadow-2xl border border-gray-200 rounded-2xl h-[600px] flex flex-col bg-white">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-emerald-600 to-teal-500 p-5 flex justify-between items-center">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                    <Bot className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">GIFT City Assistant</h3>
                    <p className="text-white/80 text-sm">Online | Typically replies instantly</p>
                  </div>
                </div>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 hover:text-black p-2 rounded-full"
                  whileHover={{ rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.button>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50">
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`flex items-start max-w-[80%] ${message.role === "user" ? "flex-row-reverse" : ""}`}>
                      <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${message.role === "user" ? "bg-emerald-600 ml-3" : "bg-gray-200 mr-3"}`}>
                        {message.role === "user" ? <User className="h-5 w-5 text-white" /> : <Bot className="h-5 w-5 text-gray-700" />}
                      </div>
                      <div className={`p-4 rounded-2xl shadow-sm ${message.role === "user" ? "bg-emerald-600 text-white rounded-tr-none" : "bg-white text-gray-800 rounded-tl-none"}`}>
                        <p className="text-base">{message.content}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {isTyping && (
                  <motion.div className="flex justify-start">
                    <div className="flex items-start max-w-[80%]">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                        <Bot className="h-5 w-5 text-gray-700" />
                      </div>
                      <div className="p-4 rounded-2xl bg-white text-gray-800 shadow-sm">
                        <div className="flex space-x-2">
                          {[0, 0.2, 0.4].map((delay, index) => (
                            <motion.div
                              key={index}
                              className="h-3 w-3 bg-emerald-500 rounded-full"
                              animate={{ y: [0, -8, 0] }}
                              transition={{ duration: 1, repeat: Infinity, repeatType: "loop", delay }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Chat Input */}
              <div className="border-t p-4 bg-white">
                <form onSubmit={handleSendMessage} className="flex space-x-3">
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 border border-gray-300 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-800 text-base"
                  />
                  <motion.button
                    type="submit"
                    disabled={!input.trim()}
                    className="bg-emerald-600 text-white p-3 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Send className="h-6 w-6" />
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Chatbot;
