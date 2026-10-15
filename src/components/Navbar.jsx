import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import logoImg from '../assets/tam.png';
import Magnetic from './Magnetic';
import { SERVICES_NAVBAR_DATA, CLINIC_DATA } from '../data/clinicData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true); // Open by default on mobile so links are visible
  const [mobileExpandedCategory, setMobileExpandedCategory] = useState('Physiotherapy');
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Scroll Progress Line
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  // Close dropdown & mobile menu on route change
  useEffect(() => {
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;
  const isServicesActive = () => ['/physiotherapy', '/womens-health', '/skin-care', '/slimming-wellness'].includes(location.pathname);

  const handleServiceClick = (targetPath) => {
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);

    if (targetPath.includes('#')) {
      const [targetPage, hash] = targetPath.split('#');
      if (location.pathname === targetPage) {
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 120);
      }
    }
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 font-sans shadow-[0_15px_45px_rgba(41,50,37,0.4)]">
        
        {/* Scroll Progress Bar at very top of screen */}
        <motion.div 
          style={{ scaleX }}
          className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#B89A5A] via-[#D4B878] to-[#5F6B45] origin-left z-50 pointer-events-none"
        />

        {/* Top Utility / Announcement Bar */}
        <div className={`bg-[#3F4A32] text-[#FAF7F1] border-b border-[#5F6B45]/40 transition-all duration-300 ease-in-out overflow-hidden ${
          scrolled ? 'max-h-0 py-0 opacity-0 border-none pointer-events-none' : 'max-h-32 py-1.5 sm:py-2 opacity-100'
        }`}>
          <div className="max-w-[1600px] mx-auto px-3 sm:px-6 lg:px-12 flex items-center justify-between text-[10px] sm:text-xs font-sans tracking-wide">
            
            {/* Left: Location Badge */}
            <div className="flex items-center gap-2 sm:gap-4 shrink-0">
              <span className="hidden sm:inline-flex items-center gap-1.5 bg-[#293225] border border-[#B89A5A]/50 text-[#FAF7F1] px-2.5 py-0.5 rounded-full text-[9px] uppercase font-extrabold tracking-wider shadow-xs shrink-0">
                <svg className="w-2.5 h-2.5 text-[#B89A5A]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>SPECIALIST CLINIC</span>
              </span>
              
              <a 
                href="https://maps.google.com/?q=Tamanya+Physio+Pandeypur+Varanasi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#FAF7F1] hover:text-[#B89A5A] transition-colors flex items-center gap-1 font-medium text-[10px] sm:text-xs truncate"
              >
                <svg className="w-3 h-3 text-[#B89A5A] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span>Pandeypur, Varanasi</span>
              </a>
            </div>

            {/* Right: Phone Call Button */}
            <div className="flex items-center gap-2 shrink-0">
              <a 
                href="tel:+917007667808" 
                className="inline-flex items-center gap-1.5 text-[#FAF7F1] hover:text-[#B89A5A] transition-colors font-bold tracking-wider text-[10px] sm:text-xs bg-white/10 sm:bg-transparent px-2 py-0.5 sm:p-0 rounded-md sm:rounded-none border border-white/15 sm:border-none"
              >
                <svg className="w-3 h-3 text-[#B89A5A] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span className="hidden xs:inline">+91 70076 67808</span>
                <span className="xs:hidden">Call Now</span>
              </a>
            </div>

          </div>
        </div>

        {/* Main Navbar */}
        <div className={`w-full bg-[#293225]/95 backdrop-blur-2xl border-b-2 border-[#B89A5A]/40 border-t border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300 ${
          scrolled ? 'py-2 sm:py-2.5 lg:py-3' : 'py-2.5 sm:py-3.5 lg:py-4'
        }`}>
          <div className="max-w-[1600px] mx-auto px-3 sm:px-6 lg:px-12 flex justify-between items-center relative">
            
            {/* LEFT: Logo */}
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center shrink-0 z-10 group mr-2 sm:mr-4 lg:mr-8">
              <motion.img 
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                src={logoImg} 
                alt="Tamanya Physio and Health Clinic Logo" 
                className="h-9 sm:h-11 md:h-12 w-auto object-contain drop-shadow-[0_0_15px_rgba(184,154,90,0.4)] brightness-110 contrast-125 group-hover:brightness-125 transition-all"
              />
            </Link>

            {/* CENTER: Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-5 xl:space-x-8 text-xs uppercase tracking-[0.16em] font-bold text-[#FAF7F1]">
              <Link 
                to="/" 
                className={`relative py-2 transition-colors group ${isActive('/') ? 'text-[#B89A5A]' : 'hover:text-[#B89A5A]'}`}
              >
                <span>HOME</span>
                <span className={`absolute bottom-0 left-0 h-[2.5px] bg-[#B89A5A] shadow-[0_0_12px_rgba(184,154,90,0.8)] transition-all duration-300 rounded-full ${
                  isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
              
              <Link 
                to="/about" 
                className={`relative py-2 transition-colors group ${isActive('/about') ? 'text-[#B89A5A]' : 'hover:text-[#B89A5A]'}`}
              >
                <span>ABOUT</span>
                <span className={`absolute bottom-0 left-0 h-[2.5px] bg-[#B89A5A] shadow-[0_0_12px_rgba(184,154,90,0.8)] transition-all duration-300 rounded-full ${
                  isActive('/about') ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>

              {/* SERVICES Responsive Dropdown */}
              <div 
                ref={dropdownRef}
                className="relative py-2 cursor-pointer group"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  className={`flex items-center gap-1.5 focus:outline-none transition-colors uppercase tracking-[0.16em] font-bold ${
                    isServicesActive() || servicesDropdownOpen ? 'text-[#B89A5A]' : 'group-hover:text-[#B89A5A]'
                  }`}
                  aria-expanded={servicesDropdownOpen}
                >
                  <span>SERVICES</span>
                  <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180 text-[#B89A5A]' : 'group-hover:rotate-180'}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <span className={`absolute bottom-0 left-0 h-[2.5px] bg-[#B89A5A] shadow-[0_0_12px_rgba(184,154,90,0.8)] transition-all duration-300 rounded-full ${
                  isServicesActive() ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>

                {/* Mega-Dropdown Panel */}
                <AnimatePresence>
                  {servicesDropdownOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: 12, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-full -left-[260px] md:-left-[320px] lg:-left-[380px] xl:-left-[430px] mt-2 w-[1140px] max-w-[94vw] bg-[#293225] border-2 border-[#B89A5A]/80 rounded-[28px] shadow-[0_35px_90px_rgba(0,0,0,0.95)] z-50 overflow-hidden flex flex-col text-left"
                    >
                      {/* Mega-Menu Top Banner */}
                      <div className="bg-[#1F261C] px-6 py-3.5 border-b border-[#B89A5A]/30 flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#B89A5A] animate-pulse" />
                          <div>
                            <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#B89A5A] block">
                              CLINICAL TREATMENT DIRECTORY & SPECIALTIES
                            </span>
                            <span className="text-xs text-[#FAF7F1]/80 font-light">
                              Tamanya Physio and Health Clinic • Led by Dr. Neha Gupta (PT) • Pandeypur, Varanasi
                            </span>
                          </div>
                        </div>

                        <Link
                          to="/book-appointment"
                          onClick={() => setServicesDropdownOpen(false)}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#B89A5A] hover:bg-[#8C6D32] text-[#293225] font-extrabold text-[11px] uppercase tracking-wider transition-all shadow-sm"
                        >
                          <span>Book Doctor Consultation</span>
                          <span>→</span>
                        </Link>
                      </div>

                      {/* Mega-Menu 4 Columns */}
                      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-h-[72vh] overflow-y-auto">
                        {SERVICES_NAVBAR_DATA.map((col) => (
                          <div key={col.category} className="flex flex-col space-y-3">
                            {/* Column Header */}
                            <div className="pb-2.5 border-b border-white/10">
                              <div className="flex items-center justify-between mb-1">
                                <Link
                                  to={col.path}
                                  onClick={() => handleServiceClick(col.path)}
                                  className="font-serif text-sm font-bold text-white hover:text-[#B89A5A] transition-colors flex items-center gap-1.5"
                                >
                                  <span>{col.category}</span>
                                </Link>
                                <span className="text-[9px] font-bold uppercase tracking-wider bg-[#5F6B45]/40 text-[#D4B878] px-2 py-0.5 rounded-full border border-[#B89A5A]/30">
                                  {col.countBadge}
                                </span>
                              </div>
                              <p className="text-[10px] text-white/50 font-light truncate">
                                {col.tagline}
                              </p>
                              <Link
                                to={col.path}
                                onClick={() => handleServiceClick(col.path)}
                                className="inline-flex items-center gap-1 text-[10px] font-bold text-[#B89A5A] hover:text-white transition-colors mt-1"
                              >
                                <span>Explore All In Category</span>
                                <span>→</span>
                              </Link>
                            </div>

                            {/* Therapy List with Anchor Links */}
                            <div className="space-y-1.5 flex-1">
                              {col.items.map((item) => (
                                <Link
                                  key={item.path}
                                  to={item.path}
                                  onClick={() => handleServiceClick(item.path)}
                                  className="group/item flex flex-col p-2 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-[#B89A5A]/30"
                                >
                                  <div className="flex items-center justify-between text-xs font-semibold text-[#FAF7F1]/90 group-hover/item:text-[#B89A5A] transition-colors">
                                    <span className="line-clamp-1 leading-snug">{item.name}</span>
                                    <span className="text-[#B89A5A] opacity-0 group-hover/item:opacity-100 transition-opacity text-[10px] ml-1 shrink-0">→</span>
                                  </div>
                                  <span className="text-[10px] text-white/45 group-hover/item:text-white/70 transition-colors font-mono mt-0.5 line-clamp-1">
                                    {item.modality}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Mega-Menu Bottom Bar */}
                      <div className="bg-[#1F261C] px-6 py-3 border-t border-white/10 flex flex-wrap items-center justify-between text-[11px] text-white/80 gap-2">
                        <div className="flex items-center gap-4">
                          <span>📍 Kali Ji Mandir, Pandeypur, Varanasi</span>
                          <span className="hidden sm:inline text-white/30">•</span>
                          <span className="hidden sm:inline">100% Female Specialist Privacy</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <a href="tel:+917007667808" className="text-[#B89A5A] hover:text-white font-bold transition-colors">
                            📞 +91 70076 67808
                          </a>
                          <span className="text-white/30">|</span>
                          <a href="tel:+918090299847" className="text-[#B89A5A] hover:text-white font-bold transition-colors">
                            +91 80902 99847
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link 
                to="/gallery" 
                className={`relative py-2 transition-colors group ${isActive('/gallery') ? 'text-[#B89A5A]' : 'hover:text-[#B89A5A]'}`}
              >
                <span>GALLERY</span>
                <span className={`absolute bottom-0 left-0 h-[2.5px] bg-[#B89A5A] shadow-[0_0_12px_rgba(184,154,90,0.8)] transition-all duration-300 rounded-full ${
                  isActive('/gallery') ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>

              <Link 
                to="/health-camp" 
                className={`relative py-2 transition-colors group ${isActive('/health-camp') ? 'text-[#B89A5A]' : 'hover:text-[#B89A5A]'}`}
              >
                <span>COMMUNITY</span>
                <span className={`absolute bottom-0 left-0 h-[2.5px] bg-[#B89A5A] shadow-[0_0_12px_rgba(184,154,90,0.8)] transition-all duration-300 rounded-full ${
                  isActive('/health-camp') ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>

              <Link 
                to="/contact" 
                className={`relative py-2 transition-colors group ${isActive('/contact') ? 'text-[#B89A5A]' : 'hover:text-[#B89A5A]'}`}
              >
                <span>CONTACT</span>
                <span className={`absolute bottom-0 left-0 h-[2.5px] bg-[#B89A5A] shadow-[0_0_12px_rgba(184,154,90,0.8)] transition-all duration-300 rounded-full ${
                  isActive('/contact') ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            </nav>

            {/* RIGHT: CTA Button & Mobile Menu Toggle */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <Magnetic strength={0.3}>
                <Link 
                  to="/book-appointment" 
                  className="bg-gradient-to-r from-[#B89A5A] via-[#D4B878] to-[#B89A5A] text-[#293225] font-extrabold px-3.5 py-1.5 sm:px-6 sm:py-2.5 rounded-full text-[10px] sm:text-xs uppercase tracking-wider transition-all duration-500 shadow-[0_4px_20px_rgba(184,154,90,0.45)] hover:shadow-[0_8px_35px_rgba(184,154,90,0.8)] text-center shrink-0 border border-white/50 whitespace-nowrap block"
                >
                  <span className="hidden sm:inline">✨ BOOK APPOINTMENT</span>
                  <span className="sm:hidden">✨ BOOK</span>
                </Link>
              </Magnetic>

              {/* Mobile Hamburger Toggle Button */}
              <button 
                className="lg:hidden text-white focus:outline-none p-2 sm:p-2.5 rounded-xl bg-white/10 border border-white/20 hover:border-[#B89A5A]/50 transition-colors shrink-0"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? (
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#B89A5A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"/></svg>
                ) : (
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#FAF7F1]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16"/></svg>
                )}
              </button>
            </div>
          </div>
        </div>

      </header>

      {/* Responsive Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: '0%', opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-[#293225] text-[#FAF7F1] z-40 lg:hidden overflow-y-auto pt-28 px-6 sm:px-8 pb-12 shadow-2xl"
          >
            <nav className="flex flex-col space-y-4 text-base sm:text-lg font-serif">
              <Link 
                to="/" 
                onClick={() => setMobileMenuOpen(false)} 
                className={`py-2 border-b border-white/10 ${isActive('/') ? 'text-[#B89A5A]' : 'text-white hover:text-[#B89A5A]'}`}
              >
                HOME
              </Link>
              
              <Link 
                to="/about" 
                onClick={() => setMobileMenuOpen(false)} 
                className={`py-2 border-b border-white/10 ${isActive('/about') ? 'text-[#B89A5A]' : 'text-white hover:text-[#B89A5A]'}`}
              >
                ABOUT US
              </Link>

              {/* Mobile Responsive Services Accordion Section */}
              <div className="border-b border-white/10 py-2">
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between text-left py-1 text-[#B89A5A] font-bold tracking-wide focus:outline-none"
                >
                  <span className="text-sm font-sans tracking-widest font-extrabold uppercase">SERVICES & CLINICAL PILLARS</span>
                  <svg className={`w-5 h-5 text-[#B89A5A] transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Mobile Sub-Menu Items */}
                {mobileServicesOpen && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-3 space-y-2 py-2 text-sm font-sans"
                  >
                    {SERVICES_NAVBAR_DATA.map((col) => {
                      const isExpanded = mobileExpandedCategory === col.category;
                      return (
                        <div key={col.category} className="rounded-xl border border-white/10 overflow-hidden bg-[#1F261C]">
                          <div className="flex items-center justify-between p-3 bg-[#293225]">
                            <Link 
                              to={col.path} 
                              onClick={() => handleServiceClick(col.path)} 
                              className="font-bold text-xs text-white hover:text-[#B89A5A] flex items-center gap-2"
                            >
                              <span>{col.category}</span>
                              <span className="text-[10px] bg-[#5F6B45] text-white px-2 py-0.5 rounded-full font-normal">
                                {col.countBadge}
                              </span>
                            </Link>

                            <button
                              type="button"
                              onClick={() => setMobileExpandedCategory(isExpanded ? null : col.category)}
                              className="p-1.5 text-[#B89A5A] hover:text-white transition-colors"
                              aria-label={`Toggle ${col.category} services`}
                            >
                              <svg className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>
                          </div>

                          {isExpanded && (
                            <div className="p-2 space-y-1 bg-[#1A2017] border-t border-white/5">
                              <Link
                                to={col.path}
                                onClick={() => handleServiceClick(col.path)}
                                className="block px-3 py-1.5 rounded-lg text-[11px] font-bold text-[#B89A5A] hover:bg-white/5 transition-colors border-b border-white/5 mb-1"
                              >
                                View Complete {col.category} Page →
                              </Link>
                              {col.items.map((item) => (
                                <Link
                                  key={item.path}
                                  to={item.path}
                                  onClick={() => handleServiceClick(item.path)}
                                  className="flex items-center justify-between px-3 py-2 rounded-lg text-xs text-white/90 hover:bg-[#5F6B45] hover:text-white transition-colors"
                                >
                                  <div>
                                    <div className="font-medium text-xs leading-snug">{item.name}</div>
                                    <div className="text-[10px] text-white/50 font-mono">{item.modality}</div>
                                  </div>
                                  <span className="text-xs text-[#B89A5A] font-bold">→</span>
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </motion.div>
                )}
              </div>
              
              <Link 
                to="/gallery" 
                onClick={() => setMobileMenuOpen(false)} 
                className={`py-2 border-b border-white/10 ${isActive('/gallery') ? 'text-[#B89A5A]' : 'text-white hover:text-[#B89A5A]'}`}
              >
                GALLERY
              </Link>

              <Link 
                to="/health-camp" 
                onClick={() => setMobileMenuOpen(false)} 
                className={`py-2 border-b border-white/10 ${isActive('/health-camp') ? 'text-[#B89A5A]' : 'text-white hover:text-[#B89A5A]'}`}
              >
                COMMUNITY CAMP
              </Link>

              <Link 
                to="/contact" 
                onClick={() => setMobileMenuOpen(false)} 
                className={`py-2 ${isActive('/contact') ? 'text-[#B89A5A]' : 'text-white hover:text-[#B89A5A]'}`}
              >
                CONTACT US
              </Link>
            </nav>

            {/* Mobile Contact & Appointment CTA */}
            <div className="mt-8 pt-6 border-t border-white/15 space-y-3">
              <p className="text-[#B89A5A] text-xs uppercase tracking-widest font-bold font-sans">TAMANYA PHYSIO AND HEALTH CLINIC</p>
              <p className="text-xs text-white/90 font-sans leading-relaxed">SA 1/177 T.N., Near Kali Ji Mandir, Pandeypur, Varanasi</p>
              <div className="flex flex-col gap-1 text-sm font-bold font-sans">
                <a href="tel:+917007667808" className="text-[#B89A5A] hover:underline">+91 70076 67808</a>
                <a href="tel:+918090299847" className="text-[#B89A5A] hover:underline">+91 80902 99847</a>
              </div>
              <a href="mailto:dr.neha25btr@gmail.com" className="block text-xs text-white/80 font-sans break-all hover:underline">dr.neha25btr@gmail.com</a>
              
              <Link 
                to="/book-appointment" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center bg-[#5F6B45] text-white font-extrabold py-3.5 rounded-full text-xs uppercase tracking-widest shadow-[0_4px_25px_rgba(95,107,69,0.45)] mt-6 border border-[#B89A5A]/50"
              >
                BOOK APPOINTMENT
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
