import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import logoImg from '../assets/tam.png';
import nehaImg from '../assets/neha.jpeg';
import AIRobotAvatar from './AIRobotAvatar';
import { CLINIC_DATA, buildWhatsAppLink } from '../data/clinicData';

export default function AIChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('chat'); // 'chat' | 'whatsapp'
  const [inputMessage, setInputMessage] = useState('');
  
  // Interactive WhatsApp Enquiry Form State
  const [waForm, setWaForm] = useState({
    patientName: '',
    phone: '',
    service: 'Physiotherapy & Rehabilitation',
    preferredTime: '',
    query: ''
  });

  const initialGreeting = {
    id: 1,
    sender: 'ai',
    text: `Hello! Welcome to ${CLINIC_DATA.name}. I am Dr. Neha's Clinical Assistant. I can help you with verified clinic location, opening hours, facilities, appointment guidance, or setting up a direct WhatsApp enquiry with Dr. Neha Gupta.`,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    quickReplies: [
      'Find Clinic Location',
      'Opening Hours',
      'Clinic Facilities',
      'Book an Appointment',
      'Contact on WhatsApp'
    ]
  };

  const [messages, setMessages] = useState([initialGreeting]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && activeTab === 'chat') {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen, activeTab]);

  // Response logic using STRICTLY VERIFIED info from CLINIC_DATA
  const getVerifiedAIResponse = (userText) => {
    const q = userText.toLowerCase().trim();

    // 1. Location & Directions
    if (q.includes('location') || q.includes('find clinic') || q.includes('address') || q.includes('where') || q.includes('direction') || q.includes('map') || q.includes('pandeypur')) {
      return {
        text: `📍 *Verified Clinic Address:*\n${CLINIC_DATA.address.fullAddress}\n\n🏛 *Landmark:* ${CLINIC_DATA.address.landmark}\n\n🚗 *Directions:* ${CLINIC_DATA.address.directions}`,
        type: 'location',
        actions: [
          { label: '🗺 Open in Google Maps', url: CLINIC_DATA.address.mapsUrl, external: true },
          { label: '💬 WhatsApp Location Enquiry', action: 'whatsapp' }
        ]
      };
    }

    // 2. Opening Hours & Weekly Off
    if (q.includes('hour') || q.includes('timing') || q.includes('time') || q.includes('open') || q.includes('close') || q.includes('sunday') || q.includes('off') || q.includes('holiday')) {
      return {
        text: `⏰ *Verified Clinic Timings:*\n• *${CLINIC_DATA.hours.regularDays}:* ${CLINIC_DATA.hours.regularTime}\n• *Sunday:* ${CLINIC_DATA.hours.sunday}\n• *Holidays:* ${CLINIC_DATA.hours.holidays}`,
        type: 'hours',
        actions: [
          { label: '📅 Book Time Slot', url: '/book-appointment', external: false },
          { label: '💬 Ask Availability on WhatsApp', action: 'whatsapp' }
        ]
      };
    }

    // 3. Clinic Facilities & Amenities
    if (q.includes('facility') || q.includes('facilities') || q.includes('amenit') || q.includes('parking') || q.includes('wheelchair') || q.includes('equipment') || q.includes('setup')) {
      const facilityList = CLINIC_DATA.facilities.map(f => `• *${f.title}:* ${f.desc}`).join('\n');
      return {
        text: `🏥 *Verified Clinic Facilities:*\n\n${facilityList}\n\nAll facilities adhere to strict clinical hygiene and patient privacy standards.`,
        type: 'facilities',
        actions: [
          { label: '💬 Ask About Specific Facility', action: 'whatsapp' },
          { label: '📅 Schedule a Visit', url: '/book-appointment', external: false }
        ]
      };
    }

    // 4. Appointments & Booking
    if (q.includes('book') || q.includes('appointment') || q.includes('consult') || q.includes('fee') || q.includes('schedule') || q.includes('cost')) {
      return {
        text: `📅 *How to Book an Appointment:*\n\n1. *Online Portal:* Book your preferred service & time slot directly on our website.\n2. *Direct Call:* Call desk at ${CLINIC_DATA.phone}.\n3. *WhatsApp Enquiry:* Message Dr. Neha directly for quick availability.\n\n*Note:* ${CLINIC_DATA.appointmentInfo.noReferral}`,
        type: 'appointment',
        actions: [
          { label: '📅 Go to Online Booking Form', url: '/book-appointment', external: false },
          { label: '💬 Send WhatsApp Appointment Request', action: 'whatsapp' }
        ]
      };
    }

    // 5. WhatsApp Enquiry Trigger
    if (q.includes('whatsapp') || q.includes('chat') || q.includes('contact on whatsapp') || q.includes('message dr. neha') || q.includes('ma\'am') || q.includes('direct message')) {
      return {
        text: `💬 You can send a prefilled WhatsApp enquiry directly to Dr. Neha Gupta (+91 70076 67808). Click the button below to fill your enquiry details or open WhatsApp directly.`,
        type: 'whatsapp',
        actions: [
          { label: '📝 Fill WhatsApp Enquiry Form', action: 'whatsapp' }
        ]
      };
    }

    // 6. Physiotherapy & Ortho Care
    if (q.includes('physio') || q.includes('back') || q.includes('sciatica') || q.includes('knee') || q.includes('tkr') || q.includes('joint') || q.includes('paralysis') || q.includes('spine')) {
      const physioItems = CLINIC_DATA.services[0].items.map(i => `• ${i}`).join('\n');
      return {
        text: `🦴 *Physiotherapy & Rehabilitation Services (Led by Dr. Neha Gupta, M.P.T Ortho):*\n\n${physioItems}\n\nWe provide personalized biomechanical assessments and non-surgical recovery plans.`,
        type: 'service',
        actions: [
          { label: '📅 Book Physio Consultation', url: '/book-appointment', external: false },
          { label: '💬 Discuss Symptoms on WhatsApp', action: 'whatsapp' }
        ]
      };
    }

    // 7. Women's Health & Pelvic Floor
    if (q.includes('women') || q.includes('pelvic') || q.includes('pregnancy') || q.includes('postnatal') || q.includes('pcos') || q.includes('diastasis')) {
      const womenItems = CLINIC_DATA.services[1].items.map(i => `• ${i}`).join('\n');
      return {
        text: `🌸 *Female Pelvic Floor & Women's Health Suite:*\n\n${womenItems}\n\nConducted in a private, 100% confidential female-only clinical suite.`,
        type: 'service',
        actions: [
          { label: '📅 Book Pelvic Consultation', url: '/book-appointment', external: false },
          { label: '💬 Confidential WhatsApp Inquiry', action: 'whatsapp' }
        ]
      };
    }

    // 8. Skin Care & Slimming
    if (q.includes('skin') || q.includes('facial') || q.includes('slimming') || q.includes('cavitation') || q.includes('inch loss') || q.includes('body shaper')) {
      return {
        text: `✨ *Skin Care & Slimming Aesthetics:*\n\n• *Skin:* Clinical skin rejuvenation, chemical peels, acne & scar therapies.\n• *Slimming:* Vacuum Cavitation non-invasive fat reduction, G-5 targeted inch loss, & deep heat therapy.`,
        type: 'service',
        actions: [
          { label: '📅 Book Aesthetic Service', url: '/book-appointment', external: false },
          { label: '💬 WhatsApp Enquiry', action: 'whatsapp' }
        ]
      };
    }

    // Fallback response for unverified / custom queries
    return {
      text: `Thank you for your question. To ensure absolute accuracy, I only provide verified clinic information for ${CLINIC_DATA.name}.\n\nFor specific medical advice or custom queries, please connect directly with Dr. Neha Gupta on WhatsApp or call our desk at ${CLINIC_DATA.phone}.`,
      type: 'fallback',
      actions: [
        { label: '💬 Connect on WhatsApp', action: 'whatsapp' },
        { label: '📞 Call Desk (+91 70076 67808)', url: `tel:${CLINIC_DATA.phoneRaw}`, external: true }
      ]
    };
  };

  const handleSendMessage = (textToSend) => {
    const text = textToSend || inputMessage;
    if (!text.trim()) return;

    // Check if prompt triggers WhatsApp tab directly
    if (text === 'Contact on WhatsApp') {
      setActiveTab('whatsapp');
      return;
    }

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
      const responseObj = getVerifiedAIResponse(text);
      const aiMsg = {
        id: Date.now() + 1,
        sender: 'ai',
        text: responseObj.text,
        actions: responseObj.actions,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleWhatsAppFormSubmit = (e) => {
    e.preventDefault();
    const waUrl = buildWhatsAppLink(waForm);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9990] flex flex-col items-end font-sans select-none">
      
      {/* Speech Bubble Tooltip Above AI Robot Button */}
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
            <div className="bg-[#293225] text-[#FAF7F1] text-[11px] font-semibold px-4 py-2 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] border border-[#B89A5A]/50 flex items-center gap-2 transition-transform group-hover:scale-105">
              <span className="w-2.5 h-2.5 rounded-full bg-[#B89A5A] animate-pulse shadow-[0_0_8px_#B89A5A]" />
              <span>Need help? Ask Patient Assistant 💬</span>
            </div>
            {/* Bubble Tail */}
            <div className="w-3 h-3 bg-[#293225] border-r border-b border-[#B89A5A]/50 transform rotate-45 absolute -bottom-1.5 right-7" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Buttons */}
      <div className="flex items-center gap-3">
        {/* WhatsApp Direct Floating Button */}
        <motion.button
          whileHover={{ scale: 1.08, y: -3 }}
          whileTap={{ scale: 0.94 }}
          onClick={() => {
            setIsOpen(true);
            setActiveTab('whatsapp');
          }}
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.4)] border-2 border-white transition-all group relative cursor-pointer"
          aria-label="Direct WhatsApp Enquiry"
        >
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.156 4.221 4.299-1.127z"/>
          </svg>
          <span className="absolute right-full mr-3 bg-[#293225] text-[#FAF7F1] text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-[#B89A5A]/40">
            WhatsApp Enquiry
          </span>
        </motion.button>

        {/* Floating Chat Trigger Button */}
        <motion.button
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.92 }}
          onClick={() => {
            setIsOpen(!isOpen);
            if (!isOpen) setActiveTab('chat');
          }}
          className="relative focus:outline-none cursor-pointer group"
          aria-label="Open Chat Assistant"
        >
          {isOpen ? (
            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#3F4A32] to-[#1F261C] text-[#FAF7F1] flex items-center justify-center shadow-[0_8px_30px_rgba(41,50,37,0.6)] border-2 border-[#B89A5A]">
              <svg className="w-6 h-6 text-[#B89A5A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          ) : (
            <div className="relative">
              <AIRobotAvatar className="w-16 h-16 sm:w-20 sm:h-20" />
              <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#293225] animate-pulse" />
            </div>
          )}
        </motion.button>
      </div>

      {/* Main Chat & WhatsApp Popup Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.94 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-[92vw] sm:w-[420px] h-[580px] max-h-[85vh] bg-[#FAF7F1] rounded-[28px] border-2 border-[#B89A5A]/60 shadow-[0_25px_60px_rgba(0,0,0,0.35)] flex flex-col overflow-hidden mb-4 relative z-[9999]"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#3F4A32] via-[#293225] to-[#1F261C] text-white p-4 flex items-center justify-between border-b border-[#B89A5A]/40 shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative flex items-center">
                  <img
                    src={nehaImg}
                    alt="Dr. Neha Gupta"
                    className="w-10 h-10 rounded-full object-cover border-2 border-[#B89A5A] z-10 shadow-sm"
                  />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#293225] z-20" />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-bold text-white flex items-center gap-1.5">
                    <span>Tamanya Patient Assistant</span>
                  </h3>
                  <p className="text-[10px] text-[#B89A5A] font-medium">Verified Clinic Support • Varanasi</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/70 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                  aria-label="Close Assistant"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Navigation Tabs (Chat vs WhatsApp Enquiry) */}
            <div className="bg-[#EBE4D5] border-b border-[#D8D0C3] flex items-center text-xs font-bold shrink-0">
              <button
                onClick={() => setActiveTab('chat')}
                className={`flex-1 py-2.5 text-center transition-colors flex items-center justify-center gap-1.5 ${
                  activeTab === 'chat'
                    ? 'bg-[#FAF7F1] text-[#293225] border-b-2 border-[#5F6B45]'
                    : 'text-[#252822]/60 hover:text-[#293225]'
                }`}
              >
                <span>🤖 Verified Chat</span>
              </button>
              <button
                onClick={() => setActiveTab('whatsapp')}
                className={`flex-1 py-2.5 text-center transition-colors flex items-center justify-center gap-1.5 ${
                  activeTab === 'whatsapp'
                    ? 'bg-[#FAF7F1] text-[#25D366] border-b-2 border-[#25D366]'
                    : 'text-[#252822]/60 hover:text-[#25D366]'
                }`}
              >
                <span>💬 WhatsApp Enquiry</span>
              </button>
            </div>

            {/* TAB 1: Chat Assistant View */}
            {activeTab === 'chat' && (
              <div className="flex-grow flex flex-col min-h-0">
                {/* Messages Feed */}
                <div className="flex-grow p-4 overflow-y-auto space-y-3.5 bg-[#F4EFE6]">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[88%] p-3.5 rounded-[18px] text-xs leading-relaxed ${
                          msg.sender === 'user'
                            ? 'bg-[#5F6B45] text-white rounded-br-none shadow-sm font-medium'
                            : 'bg-[#FAF7F1] text-[#293225] border border-[#D8D0C3] rounded-bl-none shadow-md font-light whitespace-pre-line'
                        }`}
                      >
                        <p>{msg.text}</p>

                        {/* Action buttons embedded inside AI messages */}
                        {msg.actions && msg.actions.length > 0 && (
                          <div className="mt-3 pt-2.5 border-t border-[#D8D0C3]/60 flex flex-col gap-1.5">
                            {msg.actions.map((act, i) => (
                              act.action === 'whatsapp' ? (
                                <button
                                  key={i}
                                  onClick={() => setActiveTab('whatsapp')}
                                  className="w-full text-left bg-[#25D366] hover:bg-[#20ba5a] text-white text-[11px] font-bold px-3 py-1.5 rounded-lg transition-colors flex items-center justify-between"
                                >
                                  <span>{act.label}</span>
                                  <span>→</span>
                                </button>
                              ) : act.external ? (
                                <a
                                  key={i}
                                  href={act.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="w-full text-left bg-[#5F6B45] hover:bg-[#3F4A32] text-white text-[11px] font-bold px-3 py-1.5 rounded-lg transition-colors flex items-center justify-between"
                                >
                                  <span>{act.label}</span>
                                  <span>↗</span>
                                </a>
                              ) : (
                                <Link
                                  key={i}
                                  to={act.url}
                                  onClick={() => setIsOpen(false)}
                                  className="w-full text-left bg-[#5F6B45] hover:bg-[#3F4A32] text-white text-[11px] font-bold px-3 py-1.5 rounded-lg transition-colors flex items-center justify-between"
                                >
                                  <span>{act.label}</span>
                                  <span>→</span>
                                </Link>
                              )
                            ))}
                          </div>
                        )}

                        <span
                          className={`text-[9px] block mt-1.5 text-right ${
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

                {/* Quick Reply Chips (Mandatory Options) */}
                <div className="p-2.5 bg-[#FAF7F1] border-t border-[#D8D0C3] flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0">
                  {[
                    'Find Clinic Location',
                    'Opening Hours',
                    'Clinic Facilities',
                    'Book an Appointment',
                    'Contact on WhatsApp'
                  ].map((chipText, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(chipText)}
                      className="shrink-0 bg-[#F4EFE6] hover:bg-[#5F6B45] text-[#293225] hover:text-white text-[11px] font-bold px-3 py-1.5 rounded-full border border-[#D8D0C3] transition-colors whitespace-nowrap"
                    >
                      {chipText}
                    </button>
                  ))}
                </div>

                {/* Message Input Box */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="p-3 bg-[#FAF7F1] border-t border-[#D8D0C3] flex items-center gap-2 shrink-0"
                >
                  <input
                    type="text"
                    placeholder="Ask about address, hours, facilities, booking..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    className="flex-grow bg-[#F4EFE6] text-[#293225] placeholder-[#252822]/50 text-xs px-4 py-2.5 rounded-full border border-[#D8D0C3] focus:outline-none focus:border-[#5F6B45]"
                  />
                  <button
                    type="submit"
                    className="bg-[#5F6B45] hover:bg-[#3F4A32] text-white p-2.5 rounded-full shadow-md transition-colors shrink-0"
                    aria-label="Send message"
                  >
                    <svg className="w-4 h-4 transform rotate-90" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                    </svg>
                  </button>
                </form>
              </div>
            )}

            {/* TAB 2: WhatsApp Prefilled Enquiry Form View */}
            {activeTab === 'whatsapp' && (
              <div className="flex-grow p-4 overflow-y-auto bg-[#F4EFE6] flex flex-col space-y-4">
                <div className="bg-[#FAF7F1] p-3.5 rounded-2xl border border-[#D8D0C3] shadow-xs">
                  <div className="flex items-center gap-2 text-[#25D366] font-bold text-xs mb-1">
                    <span className="text-base">💬</span>
                    <span>Direct WhatsApp Connect to Clinic</span>
                  </div>
                  <p className="text-[11px] text-[#252822]/75 leading-relaxed font-light">
                    Fill in your details below (all fields voluntary). Your customized enquiry message will open in WhatsApp so you can review and send it directly to Dr. Neha (+91 70076 67808).
                  </p>
                </div>

                <form onSubmit={handleWhatsAppFormSubmit} className="space-y-3 text-xs">
                  <div>
                    <label className="block text-[11px] font-bold text-[#293225] mb-1">
                      Patient Name <span className="text-[#252822]/40 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={waForm.patientName}
                      onChange={(e) => setWaForm({ ...waForm, patientName: e.target.value })}
                      className="w-full bg-[#FAF7F1] border border-[#D8D0C3] rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#5F6B45]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#293225] mb-1">
                      Contact Phone <span className="text-[#252822]/40 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={waForm.phone}
                      onChange={(e) => setWaForm({ ...waForm, phone: e.target.value })}
                      className="w-full bg-[#FAF7F1] border border-[#D8D0C3] rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#5F6B45]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#293225] mb-1">
                      Requested Service / Department
                    </label>
                    <select
                      value={waForm.service}
                      onChange={(e) => setWaForm({ ...waForm, service: e.target.value })}
                      className="w-full bg-[#FAF7F1] border border-[#D8D0C3] rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#5F6B45]"
                    >
                      <option value="Physiotherapy & Rehabilitation">Physiotherapy & Rehabilitation</option>
                      <option value="Women's Health & Pelvic Floor Suite">Women's Health & Pelvic Floor Suite</option>
                      <option value="Skin Care & Aesthetics">Skin Care & Aesthetics</option>
                      <option value="Slimming & Body Shaping">Slimming & Body Shaping</option>
                      <option value="General Clinic Enquiry">General Clinic Enquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#293225] mb-1">
                      Preferred Date / Time <span className="text-[#252822]/40 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Tomorrow 11:00 AM or Mon Evening"
                      value={waForm.preferredTime}
                      onChange={(e) => setWaForm({ ...waForm, preferredTime: e.target.value })}
                      className="w-full bg-[#FAF7F1] border border-[#D8D0C3] rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#5F6B45]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#293225] mb-1">
                      Your Question or Symptoms <span className="text-[#252822]/40 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Describe your condition, symptoms, or inquiry..."
                      value={waForm.query}
                      onChange={(e) => setWaForm({ ...waForm, query: e.target.value })}
                      className="w-full bg-[#FAF7F1] border border-[#D8D0C3] rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#5F6B45] resize-none"
                    />
                  </div>

                  {/* Message Preview Box */}
                  <div className="bg-[#FAF7F1] p-3 rounded-xl border border-[#D8D0C3]">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-[#5F6B45] block mb-1">
                      📱 Prefilled WhatsApp Message Preview:
                    </span>
                    <p className="text-[11px] text-[#293225]/80 font-mono bg-[#F4EFE6] p-2 rounded-lg leading-relaxed whitespace-pre-line">
                      {`Hello Dr. Neha Gupta,\nI would like to inquire about Tamanya Physio & Health Clinic in Varanasi.\n${waForm.patientName ? `\n👤 Patient: ${waForm.patientName}` : ''}${waForm.phone ? `\n📞 Contact: ${waForm.phone}` : ''}${waForm.service ? `\n🩺 Service: ${waForm.service}` : ''}${waForm.preferredTime ? `\n📅 Time: ${waForm.preferredTime}` : ''}${waForm.query ? `\n💬 Enquiry: ${waForm.query}` : ''}\n\n*Sent via Tamanya Health Website*`}
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wider shadow-md transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Send Message on WhatsApp</span>
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.156 4.221 4.299-1.127z"/>
                    </svg>
                  </button>

                  <p className="text-[10px] text-[#252822]/60 text-center font-light leading-tight pt-1">
                    🔒 *Privacy Notice:* No medical records are stored. Opening WhatsApp sends your prefilled text directly from your device. Appointments are confirmed upon response by clinic staff.
                  </p>
                </form>
              </div>
            )}

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
