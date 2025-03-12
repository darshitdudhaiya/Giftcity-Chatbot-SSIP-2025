"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);

  // Initial bot messages and quick replies
  const initialMessages = [
    {
      id: "welcome-1",
      content: "👋 Hello! Welcome to GIFT City virtual assistant.",
      sender: "bot",
      timestamp: new Date(),
    },
    {
      id: "welcome-2",
      content: "How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
      quickReplies: [
        { id: "about", text: "About GIFT City", action: "about" },
        { id: "services", text: "Services & Features", action: "services" },
        {
          id: "investment",
          text: "Investment Opportunities",
          action: "investment",
        },
        { id: "contact", text: "Contact Information", action: "contact" },
      ],
    },
  ];

  // Predefined responses based on quick reply selection
  const botResponses = {
    about: [
      {
        id: "about-1",
        content:
          "GIFT City (Gujarat International Finance Tec-City) is India's first operational smart city and International Financial Services Centre (IFSC).",
        sender: "bot",
        timestamp: new Date(),
      },
      {
        id: "about-2",
        content:
          "It's designed to be a global financial and technology hub with world-class infrastructure and business-friendly regulations.",
        sender: "bot",
        timestamp: new Date(),
        quickReplies: [
          { id: "location", text: "Location", action: "location" },
          { id: "back", text: "Back to Main Menu", action: "main" },
        ],
      },
    ],
    services: [
      {
        id: "services-1",
        content:
          "GIFT City offers a comprehensive ecosystem with several key features:",
        sender: "bot",
        timestamp: new Date(),
      },
      {
        id: "services-2",
        content:
          "• International Financial Services Centre (IFSC)\n• Smart Infrastructure\n• FinTech & IT Hub\n• Tax Benefits & Incentives\n• World-Class Urban Planning",
        sender: "bot",
        timestamp: new Date(),
        quickReplies: [
          { id: "ifsc", text: "Tell me about IFSC", action: "ifsc" },
          { id: "tax", text: "Tax Benefits", action: "tax" },
          { id: "back", text: "Back to Main Menu", action: "main" },
        ],
      },
    ],
    investment: [
      {
        id: "investment-1",
        content:
          "GIFT City offers numerous investment opportunities across various sectors:",
        sender: "bot",
        timestamp: new Date(),
      },
      {
        id: "investment-2",
        content:
          "• Banking & Financial Services\n• Insurance\n• Capital Markets\n• IT & ITeS\n• Commercial Real Estate",
        sender: "bot",
        timestamp: new Date(),
      },
      {
        id: "investment-3",
        content:
          "Would you like to know more about any specific investment area?",
        sender: "bot",
        timestamp: new Date(),
        quickReplies: [
          { id: "banking", text: "Banking & Finance", action: "banking" },
          { id: "realestate", text: "Real Estate", action: "realestate" },
          { id: "back", text: "Back to Main Menu", action: "main" },
        ],
      },
    ],
    contact: [
      {
        id: "contact-1",
        content: "You can reach GIFT City through the following channels:",
        sender: "bot",
        timestamp: new Date(),
      },
      {
        id: "contact-2",
        content:
          "📞 Phone: +91 79 6777 2222\n✉️ Email: info@giftcity.in\n📍 Address: GIFT City, Gandhinagar, Gujarat, India - 382355",
        sender: "bot",
        timestamp: new Date(),
        quickReplies: [
          { id: "form", text: "Contact Form", action: "form" },
          { id: "back", text: "Back to Main Menu", action: "main" },
        ],
      },
    ],
    location: [
      {
        id: "location-1",
        content:
          "GIFT City is strategically located in Gandhinagar, the capital city of Gujarat, India.",
        sender: "bot",
        timestamp: new Date(),
      },
      {
        id: "location-2",
        content:
          "It's well-connected to major cities and has excellent transportation links, including proximity to international airports and seaports.",
        sender: "bot",
        timestamp: new Date(),
        quickReplies: [
          { id: "back-about", text: "Back to About", action: "about" },
          { id: "back", text: "Main Menu", action: "main" },
        ],
      },
    ],
    ifsc: [
      {
        id: "ifsc-1",
        content:
          "The International Financial Services Centre (IFSC) at GIFT City provides a world-class regulatory framework for financial services.",
        sender: "bot",
        timestamp: new Date(),
      },
      {
        id: "ifsc-2",
        content:
          "It allows banks, stock exchanges, insurance companies, and other financial entities to operate in a dollar-denominated environment with various tax benefits.",
        sender: "bot",
        timestamp: new Date(),
        quickReplies: [
          { id: "back-services", text: "Back to Services", action: "services" },
          { id: "back", text: "Main Menu", action: "main" },
        ],
      },
    ],
    tax: [
      {
        id: "tax-1",
        content:
          "GIFT City offers significant tax incentives for businesses operating within its IFSC:",
        sender: "bot",
        timestamp: new Date(),
      },
      {
        id: "tax-2",
        content:
          "• 100% income tax exemption for 10 consecutive years\n• No GST on services received by IFSC units\n• No stamp duty on loan agreements\n• No securities transaction tax\n• Competitive tax rates compared to global financial centers",
        sender: "bot",
        timestamp: new Date(),
        quickReplies: [
          { id: "back-services", text: "Back to Services", action: "services" },
          { id: "back", text: "Main Menu", action: "main" },
        ],
      },
    ],
    banking: [
      {
        id: "banking-1",
        content: "Banking & Financial Services in GIFT City include:",
        sender: "bot",
        timestamp: new Date(),
      },
      {
        id: "banking-2",
        content:
          "• Foreign and Indian banks can set up IFSC Banking Units (IBUs)\n• Offer foreign currency loans and deposits\n• Trade finance services\n• Treasury operations\n• External Commercial Borrowings (ECBs)",
        sender: "bot",
        timestamp: new Date(),
        quickReplies: [
          {
            id: "back-investment",
            text: "Back to Investment",
            action: "investment",
          },
          { id: "back", text: "Main Menu", action: "main" },
        ],
      },
    ],
    realestate: [
      {
        id: "realestate-1",
        content: "Real Estate opportunities in GIFT City include:",
        sender: "bot",
        timestamp: new Date(),
      },
      {
        id: "realestate-2",
        content:
          "• Grade A office spaces\n• Residential apartments\n• Retail spaces\n• Hospitality projects\n• Mixed-use developments",
        sender: "bot",
        timestamp: new Date(),
      },
      {
        id: "realestate-3",
        content:
          "All developments follow international standards with smart infrastructure and sustainable design principles.",
        sender: "bot",
        timestamp: new Date(),
        quickReplies: [
          {
            id: "back-investment",
            text: "Back to Investment",
            action: "investment",
          },
          { id: "back", text: "Main Menu", action: "main" },
        ],
      },
    ],
    form: [
      {
        id: "form-1",
        content:
          "You can fill out our contact form in the Contact section of our website. Our team will get back to you within 24-48 hours.",
        sender: "bot",
        timestamp: new Date(),
      },
      {
        id: "form-2",
        content: "Would you like me to scroll to the contact form for you?",
        sender: "bot",
        timestamp: new Date(),
        quickReplies: [
          {
            id: "scroll-contact",
            text: "Yes, go to form",
            action: "scroll-contact",
          },
          { id: "back", text: "Back to Main Menu", action: "main" },
        ],
      },
    ],
    main: [
      {
        id: "main-1",
        content: "How else can I help you today?",
        sender: "bot",
        timestamp: new Date(),
        quickReplies: [
          { id: "about", text: "About GIFT City", action: "about" },
          { id: "services", text: "Services & Features", action: "services" },
          {
            id: "investment",
            text: "Investment Opportunities",
            action: "investment",
          },
          { id: "contact", text: "Contact Information", action: "contact" },
        ],
      },
    ],
    "scroll-contact": [
      {
        id: "scroll-1",
        content: "I'll take you to the contact form now.",
        sender: "bot",
        timestamp: new Date(),
      },
    ],
  };

  // Initialize chat with welcome messages
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages(initialMessages);
    }
  }, [isOpen, messages.length]);

  // Scroll to bottom of messages when new ones are added
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Handle scrolling to contact form
  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    if (lastMessage && lastMessage.id === "scroll-1") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => setIsOpen(false), 1000);
      }
    }
  }, [messages]);

  // Toggle chatbot open/closed
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Handle sending a message
  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newUserMessage = {
        id: `user-${Date.now()}`,
        content: inputValue,
        sender: "user",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, newUserMessage]);
      setInputValue("");

      // Simple response to user input
      setTimeout(() => {
        const botResponse = {
          id: `bot-${Date.now()}`,
          content:
            "Thank you for your message. For specific inquiries, please use the quick replies or contact our team directly.",
          sender: "bot",
          timestamp: new Date(),
          quickReplies: [
            { id: "back", text: "Back to Main Menu", action: "main" },
          ],
        };
        setMessages((prev) => [...prev, botResponse]);
      }, 1000);
    }
  };

  // Handle quick reply selection
  const handleQuickReply = (action) => {
    // Add user message based on the quick reply selected
    const quickReplyText =
      messages
        .flatMap((msg) => msg.quickReplies || [])
        .find((reply) => reply.action === action)?.text || action;

    const userMessage = {
      id: `user-${Date.now()}`,
      content: quickReplyText,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    // Add bot response based on the action
    if (botResponses[action]) {
      setTimeout(() => {
        setMessages((prev) => [...prev, ...botResponses[action]]);
      }, 500);
    }
  };

  return (
    <>
      {/* Floating chat button */}
      <button
        onClick={toggleChat}
        className={cn(
          "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-300",
          isOpen
            ? "bg-red-500 hover:bg-red-600"
            : "bg-primary hover:bg-primary/90"
        )}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageSquare className="h-6 w-6 text-white" />
        )}
      </button>

      {/* Chat window */}
      <div
        className={cn(
          "fixed bottom-24 right-6 z-50 w-[350px] overflow-hidden rounded-lg shadow-xl transition-all duration-300 md:w-[400px]",
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        )}
      >
        <Card className="flex h-[500px] flex-col">
          {/* Chat header */}
          <div className="flex items-center justify-between border-b bg-primary p-4 text-primary-foreground">
            <div className="flex items-center space-x-2">
              <MessageSquare className="h-5 w-5" />
              <h3 className="font-medium">GIFT City Assistant</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleChat}
              className="h-8 w-8 text-primary-foreground"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className="flex flex-col">
                  <div
                    className={cn(
                      "max-w-[80%] rounded-lg px-4 py-2",
                      message.sender === "bot"
                        ? "mr-auto bg-muted text-foreground"
                        : "ml-auto bg-primary text-primary-foreground"
                    )}
                  >
                    <div className="whitespace-pre-line">{message.content}</div>
                  </div>

                  {/* Quick replies */}
                  {message.quickReplies && message.quickReplies.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {message.quickReplies.map((reply) => (
                        <button
                          key={reply.id}
                          onClick={() => handleQuickReply(reply.action)}
                          className="flex items-center rounded-full border bg-background px-3 py-1 text-xs font-medium hover:bg-muted"
                        >
                          {reply.text}
                          <ChevronRight className="ml-1 h-3 w-3" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Chat input */}
          <div className="border-t p-4">
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type a message..."
                className="flex-1"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSendMessage();
                  }
                }}
              />
              <Button
                size="icon"
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Send message</span>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
