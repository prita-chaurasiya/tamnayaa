import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import logoImg from '../assets/tam.png';
import nehaImg from '../assets/neha.jpeg';

import AIRobotAvatar from './AIRobotAvatar';

export default function AIChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: "Hello! I am Dr. Neha's AI Clinical Health Assistant. How can I help you today regarding physiotherapy, pelvic health, skin care, or booking an appointment in Varanasi?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const quickPrompts = [
    { text: '🦴 Back Pain & Sciatica Care', query: 'I have lower back pain and sciatica. What treatments do you offer?' },
    { text: "🌸 Women's Pelvic Health", query: 'Tell me about female pelvic floor rehabilitation and antenatal care.' },
    { text: '🦵 Knee (TKR) & Joint Rehab', query: 'Do you provide rehabilitation for Total Knee Replacement (TKR)?' },
    { text: '✨ Slimming & Skin Care', query: 'What slimming, cavitation, and skin rejuvenation treatments are available?' },
    { text: '📍 Clinic Hours & Location', query: 'Where is Tamanya Health Clinic located in Varanasi and what are the timings?' },
  ];

  const generateAIResponse = (userText) => {
    const query = userText.toLowerCase();

    if (query.includes('back') || query.includes('sciatica') || query.includes('spine') || query.includes('disc')) {
      return "Dr. Neha Gupta (M.P.T Ortho) specializes in non-surgical spine rehabilitation, sciatica nerve radiation relief, disc herniation management, and biomechanical posture correction. Would you like to schedule a clinical evaluation in Pandeypur, Varanasi?";
    } else if (query.includes('pelvic') || query.includes('women') || query.includes('pregnancy') || query.includes('postnatal') || query.includes('pcos')) {
      return "Tamanya has a dedicated Female Pelvic Health Suite offering private, confidential pelvic floor muscle retraining, antenatal/postnatal physical rehabilitation, Diastasis Recti management, and PCOD/PCOS exercise therapy.";
    } else if (query.includes('knee') || query.includes('tkr') || query.includes('thr') || query.includes('surgery') || query.includes('joint')) {
      return "We provide structured phased post-surgical rehabilitation for Total Knee Replacements (TKR) & Total Hip Replacements (THR), focusing on muscle strengthening, gait balance training, and pain-free mobility restoration.";
    } else if (query.includes('slimming') || query.includes('skin') || query.includes('cavitation') || query.includes('inch')) {
      return "Our aesthetic and wellness wing offers non-invasive Body Shaper, Vacuum Cavitation, Deep Heat therapy, G-5 targeted inch loss, chemical peels, and clinical skin rejuvenation.";
    } else if (query.includes('location') || query.includes('where') || query.includes('address') || query.includes('timing') || query.includes('hour')) {
      return "Tamanya Physio & Health Clinic is located opposite Indian Oil Petrol Pump, Pandeypur Chauraha, Varanasi, UP. Timings: Mon–Sat 09:00 AM – 08:00 PM. Call us directly at +91 70076 67808.";
    } else if (query.includes('book') || query.includes('appointment') || query.includes('fee') || query.includes('contact')) {
      return "You can book directly with Dr. Neha Gupta! Call +91 70076 67808 or click the 'BOOK APPOINTMENT' button below. No doctor referral is needed.";
    } else {
      return "Thank you for reaching out to Tamanya Health Clinic! Dr. Neha Gupta (M.P.T Orthopaedics) provides evidence-based rehabilitation and clinical care in Pandeypur, Varanasi. Call +91 70076 67808 or WhatsApp us directly for an appointment!";
    }
  };

  const handleSendMessage = (textToSend) => {
    const text = textToSend || inputMessage;
    if (!text.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const aiReply = generateAIResponse(text);
      const aiMsg = {
        id: Date.now() + 1,
        sender: 'ai',
        text: aiReply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 900);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9990] flex flex-col items-end font-sans select-none">
      
      {/* Speech Bubble Tooltip Above AI Robot */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.88 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.88 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mb-2 relative cursor-pointer group"
            onClick={() => setIsOpen(true)}
          >
            <div className="bg-[#1E293B]/90 backdrop-blur-md text-[#FAF7F1] text-[11px] font-semibold px-4 py-2 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.4)] border border-[#00F2FE]/40 flex items-center gap-2 transition-transform group-hover:scale-105">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00F2FE] animate-pulse shadow-[0_0_8px_#00F2FE]" />
              <span>Every recovery starts here. Ask AI 🤖</span>
            </div>
            {/* Speech Bubble Tail */}
            <div className="w-3 h-3 bg-[#1E293B]/90 border-r border-b border-[#00F2FE]/40 transform rotate-45 absolute -bottom-1.5 right-7" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Buttons Bar (WhatsApp + Cute 3D AI Robot Avatar Trigger) */}
      <div className="flex items-center gap-3">
        
        {/* WhatsApp Direct Connect Button */}
        <motion.a
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.92 }}
          href="https://wa.me/917007667808?text=Hello%20Dr.%20Neha%20Gupta,%20I%20would%20like%20to%20inquire%20about%20an%20appointment"
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.5)] border-2 border-white transition-all group relative cursor-pointer"
          aria-label="Contact on WhatsApp"
        >
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.156 4.221 4.299-1.127z"/>
          </svg>
          <span className="absolute right-full mr-3 bg-[#293225] text-[#FAF7F1] text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-[#B89A5A]/40">
            WhatsApp Connect
          </span>
        </motion.a>

        {/* 3D AI Robot Avatar Trigger Button */}
        <motion.button
          whileHover={{ scale: 1.12, y: -4 }}
          whileTap={{ scale: 0.92 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative focus:outline-none cursor-pointer group"
          aria-label="Open AI Assistant"
        >
          {isOpen ? (
            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#3F4A32] to-[#1F261C] text-[#FAF7F1] flex items-center justify-center shadow-[0_8px_30px_rgba(41,50,37,0.6)] border-2 border-[#00F2FE]/60">
              <svg className="w-6 h-6 text-[#00F2FE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          ) : (
            <div className="relative">
              <AIRobotAvatar className="w-16 h-16 sm:w-20 sm:h-20" />
              <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#0F172A] animate-pulse" />
            </div>
          )}
        </motion.button>
      </div>

      {/* AI Chatbot Modal Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.94 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-[90vw] sm:w-[400px] h-[540px] bg-[#FAF7F1] rounded-[28px] border-2 border-[#B89A5A]/60 shadow-[0_25px_60px_rgba(0,0,0,0.4)] flex flex-col overflow-hidden mb-4 relative z-[9999]"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#3F4A32] via-[#293225] to-[#1F261C] text-white p-4 flex items-center justify-between border-b border-[#B89A5A]/40">
              <div className="flex items-center gap-3">
                <div className="relative flex items-center -space-x-2">
                  <img
                    src={nehaImg}
                    alt="Dr. Neha Gupta AI"
                    className="w-10 h-10 rounded-full object-cover border-2 border-[#B89A5A] z-10"
                  />
                  <div className="w-10 h-10 rounded-full bg-[#0F172A] border-2 border-[#00F2FE] flex items-center justify-center overflow-hidden z-20 shadow-md">
                    <AIRobotAvatar className="w-9 h-9" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#293225] z-30" />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-bold text-white flex items-center gap-1.5">
                    <span>Tamanya AI Assistant</span>
                    <span className="text-[10px] bg-[#B89A5A] text-[#293225] font-extrabold px-1.5 py-0.2 rounded">AI</span>
                  </h3>
                  <p className="text-[10px] text-white/80 font-light">Dr. Neha's Clinical Guidance</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="https://wa.me/917007667808"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs bg-[#25D366] hover:bg-[#20ba5a] text-white px-2.5 py-1 rounded-full font-bold flex items-center gap-1 shadow-xs transition-colors"
                >
                  WhatsApp
                </a>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/70 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Chat Messages Body */}
            <div className="flex-grow p-4 overflow-y-auto space-y-3.5 bg-[#F4EFE6]">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3.5 rounded-[18px] text-xs leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-[#5F6B45] text-white rounded-br-none shadow-sm font-medium'
                        : 'bg-[#FAF7F1] text-[#293225] border border-[#D8D0C3] rounded-bl-none shadow-md font-light'
                    }`}
                  >
                    <p>{msg.text}</p>
                    <span
                      className={`text-[9px] block mt-1 text-right ${
                        msg.sender === 'user' ? 'text-white/70' : 'text-[#252822]/50'
                      }`}
                    >
                      {msg.time}
                    </span>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-[#FAF7F1] p-3 rounded-[18px] border border-[#D8D0C3] flex items-center gap-1.5 text-xs text-[#5F6B45]">
                    <span className="w-2 h-2 bg-[#5F6B45] rounded-full animate-bounce" />
                    <span className="w-2 h-2 bg-[#5F6B45] rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-2 h-2 bg-[#5F6B45] rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts Chips */}
            <div className="p-2 bg-[#FAF7F1] border-t border-[#D8D0C3] flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(prompt.query)}
                  className="shrink-0 bg-[#F4EFE6] hover:bg-[#5F6B45] text-[#293225] hover:text-white text-[10px] font-bold px-3 py-1.5 rounded-full border border-[#D8D0C3] transition-colors whitespace-nowrap"
                >
                  {prompt.text}
                </button>
              ))}
            </div>

            {/* Input Footer Box */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 bg-[#FAF7F1] border-t border-[#D8D0C3] flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Ask about treatments, pain, timings..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="flex-grow bg-[#F4EFE6] text-[#293225] placeholder-[#252822]/50 text-xs px-4 py-2.5 rounded-full border border-[#D8D0C3] focus:outline-none focus:border-[#5F6B45]"
              />
              <button
                type="submit"
                className="bg-[#5F6B45] hover:bg-[#3F4A32] text-white p-2.5 rounded-full shadow-md transition-colors shrink-0"
              >
                <svg className="w-4 h-4 transform rotate-90" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
