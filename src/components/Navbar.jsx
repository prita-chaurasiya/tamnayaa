import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/tam.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

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
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;
  const isServicesActive = () => ['/physiotherapy', '/womens-health', '/skin-care', '/slimming-wellness'].includes(location.pathname);

  return (
    <>
      <header className="fixed top-0 w-full z-50 font-sans shadow-[0_15px_45px_rgba(0,0,0,0.6)]">
        
        {/* Top Utility / Announcement Bar — Smoothly Hides on Scroll */}
        <div className={`bg-[#07111A] text-white border-b border-[#D4AF37]/30 transition-all duration-300 ease-in-out overflow-hidden ${
          scrolled ? 'max-h-0 py-0 opacity-0 border-none pointer-events-none' : 'max-h-32 py-1.5 sm:py-2.5 opacity-100'
        }`}>
          <div className="max-w-[1600px] mx-auto px-3 sm:px-6 lg:px-12 flex flex-row items-center justify-between text-[11px] sm:text-xs font-sans tracking-wide gap-2">
            
            {/* Left: Location & Specialist Badge */}
            <div className="flex items-center gap-1.5 sm:gap-4 shrink-0">
              <span className="inline-flex items-center gap-1 bg-gradient-to-r from-[#D4AF37]/25 via-[#F5D061]/20 to-[#D4AF37]/15 border border-[#F5D061]/70 text-[#F5D061] px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[9px] sm:text-xs uppercase font-extrabold tracking-wider shadow-[0_0_12px_rgba(245,208,97,0.3)] shrink-0">
                <svg className="w-3 h-3 text-[#F5D061]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>SPECIALIST CLINIC</span>
              </span>
              <a 
                href="https://maps.google.com/?q=Tamanya+Physio+Pandeypur+Varanasi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#F7F4EE] hover:text-[#F5D061] transition-colors flex items-center gap-1 font-medium text-[10px] sm:text-xs md:text-sm"
              >
                <svg className="w-3.5 h-3.5 text-[#F5D061] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span>Pandeypur, Varanasi</span>
                <span className="hidden md:inline text-[#F5D061] px-1">•</span>
                <span className="hidden md:inline text-[#F7F4EE]/90">Same-Day Appointments</span>
              </a>
            </div>

            {/* Right: Direct Phone Link */}
            <div className="flex items-center gap-2 shrink-0">
              <a 
                href="tel:+917007667808" 
                className="inline-flex items-center gap-1.5 text-[#F5D061] hover:text-white transition-colors font-bold tracking-wider text-[11px] sm:text-xs md:text-sm bg-white/5 sm:bg-transparent px-2 py-0.5 sm:p-0 rounded-lg sm:rounded-none border border-white/10 sm:border-none"
              >
                <svg className="w-3.5 h-3.5 text-[#F5D061] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>+91 70076 67808</span>
              </a>
            </div>

          </div>
        </div>

        {/* Main Navbar — Pure Royal Navy & Radiant Gold Glassmorphism */}
        <div className="w-full bg-[#0E1B26]/95 backdrop-blur-2xl border-b border-[#D4AF37]/35 py-3.5 lg:py-4 shadow-2xl transition-colors">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center">
            
            {/* LEFT: Clean Brand Logo */}
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center group">
              <img 
                src={logoImg} 
                alt="Tamanya Health" 
                className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
              />
            </Link>

            {/* CENTER: Navigation Links with Radiant Gold Underline */}
            <nav className="hidden xl:flex items-center space-x-8 lg:space-x-10 text-xs uppercase tracking-[0.18em] font-bold text-[#F7F4EE]">
              <Link 
                to="/" 
                className={`relative py-2 transition-colors group ${isActive('/') ? 'text-[#F5D061]' : 'hover:text-[#F5D061]'}`}
              >
                <span>HOME</span>
                <span className={`absolute bottom-0 left-0 h-[2.5px] bg-gradient-to-r from-[#F5D061] via-[#D4AF37] to-[#B79657] shadow-[0_0_12px_rgba(245,208,97,0.8)] transition-all duration-300 rounded-full ${
                  isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
              
              <Link 
                to="/about" 
                className={`relative py-2 transition-colors group ${isActive('/about') ? 'text-[#F5D061]' : 'hover:text-[#F5D061]'}`}
              >
                <span>ABOUT</span>
                <span className={`absolute bottom-0 left-0 h-[2.5px] bg-gradient-to-r from-[#F5D061] via-[#D4AF37] to-[#B79657] shadow-[0_0_12px_rgba(245,208,97,0.8)] transition-all duration-300 rounded-full ${
                  isActive('/about') ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>

              {/* SERVICES Dropdown Menu */}
              <div 
                ref={dropdownRef}
                className="relative py-2 cursor-pointer group"
              >
                <button
                  type="button"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  className={`flex items-center gap-2 focus:outline-none transition-colors uppercase tracking-[0.18em] font-bold ${
                    isServicesActive() || servicesDropdownOpen ? 'text-[#F5D061]' : 'group-hover:text-[#F5D061]'
                  }`}
                >
                  <span>SERVICES</span>
                  <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180 text-[#F5D061]' : 'group-hover:rotate-180'}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <span className={`absolute bottom-0 left-0 h-[2.5px] bg-gradient-to-r from-[#F5D061] via-[#D4AF37] to-[#B79657] shadow-[0_0_12px_rgba(245,208,97,0.8)] transition-all duration-300 rounded-full ${
                  isServicesActive() ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>

                {/* Dropdown Menu Panel */}
                <div className={`absolute top-full left-0 mt-3 w-72 bg-[#08121C]/98 border border-[#D4AF37]/40 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.75)] py-3 px-2 z-50 transition-all duration-200 backdrop-blur-2xl ${
                  servicesDropdownOpen ? 'block animate-fade-in-up' : 'hidden group-hover:block'
                }`}>
                  <Link 
                    to="/physiotherapy" 
                    onClick={() => setServicesDropdownOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-xs font-semibold transition-all group/item ${
                      isActive('/physiotherapy') ? 'bg-gradient-to-r from-[#F5D061] to-[#D4AF37] text-[#081017]' : 'text-[#F7F4EE] hover:bg-gradient-to-r hover:from-[#F5D061] hover:to-[#D4AF37] hover:text-[#081017]'
                    }`}
                  >
                    <span>PHYSIOTHERAPY</span>
                    <span className="text-[10px] opacity-70 group-hover/item:translate-x-1 transition-transform">→</span>
                  </Link>
                  <Link 
                    to="/womens-health" 
                    onClick={() => setServicesDropdownOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-xs font-semibold transition-all group/item ${
                      isActive('/womens-health') ? 'bg-gradient-to-r from-[#F5D061] to-[#D4AF37] text-[#081017]' : 'text-[#F7F4EE] hover:bg-gradient-to-r hover:from-[#F5D061] hover:to-[#D4AF37] hover:text-[#081017]'
                    }`}
                  >
                    <span>WOMEN'S HEALTH</span>
                    <span className="text-[10px] opacity-70 group-hover/item:translate-x-1 transition-transform">→</span>
                  </Link>
                  <Link 
                    to="/skin-care" 
                    onClick={() => setServicesDropdownOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-xs font-semibold transition-all group/item ${
                      isActive('/skin-care') ? 'bg-gradient-to-r from-[#F5D061] to-[#D4AF37] text-[#081017]' : 'text-[#F7F4EE] hover:bg-gradient-to-r hover:from-[#F5D061] hover:to-[#D4AF37] hover:text-[#081017]'
                    }`}
                  >
                    <span>SKIN CARE</span>
                    <span className="text-[10px] opacity-70 group-hover/item:translate-x-1 transition-transform">→</span>
                  </Link>
                  <Link 
                    to="/slimming-wellness" 
                    onClick={() => setServicesDropdownOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-xs font-semibold transition-all group/item ${
                      isActive('/slimming-wellness') ? 'bg-gradient-to-r from-[#F5D061] to-[#D4AF37] text-[#081017]' : 'text-[#F7F4EE] hover:bg-gradient-to-r hover:from-[#F5D061] hover:to-[#D4AF37] hover:text-[#081017]'
                    }`}
                  >
                    <span>SLIMMING & WELLNESS</span>
                    <span className="text-[10px] opacity-70 group-hover/item:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>

              <Link 
                to="/skin-care" 
                className={`relative py-2 transition-colors group ${isActive('/skin-care') ? 'text-[#F5D061]' : 'hover:text-[#F5D061]'}`}
              >
                <span>SKIN CARE</span>
                <span className={`absolute bottom-0 left-0 h-[2.5px] bg-gradient-to-r from-[#F5D061] via-[#D4AF37] to-[#B79657] shadow-[0_0_12px_rgba(245,208,97,0.8)] transition-all duration-300 rounded-full ${
                  isActive('/skin-care') ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>

              <Link 
                to="/health-camp" 
                className={`relative py-2 transition-colors group ${isActive('/health-camp') ? 'text-[#F5D061]' : 'hover:text-[#F5D061]'}`}
              >
                <span>COMMUNITY</span>
                <span className={`absolute bottom-0 left-0 h-[2.5px] bg-gradient-to-r from-[#F5D061] via-[#D4AF37] to-[#B79657] shadow-[0_0_12px_rgba(245,208,97,0.8)] transition-all duration-300 rounded-full ${
                  isActive('/health-camp') ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>

              <Link 
                to="/contact" 
                className={`relative py-2 transition-colors group ${isActive('/contact') ? 'text-[#F5D061]' : 'hover:text-[#F5D061]'}`}
              >
                <span>CONTACT US</span>
                <span className={`absolute bottom-0 left-0 h-[2.5px] bg-gradient-to-r from-[#F5D061] via-[#D4AF37] to-[#B79657] shadow-[0_0_12px_rgba(245,208,97,0.8)] transition-all duration-300 rounded-full ${
                  isActive('/contact') ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            </nav>

            {/* RIGHT: Glowing Radiant Gold Book Appointment Button */}
            <div className="flex items-center gap-3">
              <Link 
                to="/book-appointment" 
                className="bg-gradient-to-r from-[#F5D061] via-[#D4AF37] to-[#C59B27] text-[#081017] font-extrabold px-6 py-2.5 sm:px-7 sm:py-3 rounded-full text-[11px] sm:text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_4px_25px_rgba(245,208,97,0.45)] hover:shadow-[0_6px_35px_rgba(245,208,97,0.7)] hover:scale-[1.04] active:scale-100 text-center shrink-0 border border-[#FFF3C4]/60"
              >
                BOOK APPOINTMENT
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button 
              className="xl:hidden text-white focus:outline-none p-2.5 rounded-xl bg-white/10 border border-white/20 hover:border-[#F5D061]/50 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6 text-[#F5D061]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"/></svg>
              ) : (
                <svg className="w-6 h-6 text-[#F7F4EE]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16"/></svg>
              )}
            </button>

          </div>
        </div>

      </header>

      {/* Solid Dark Mobile Navigation Drawer */}
      <div className={`fixed inset-0 bg-[#0E1B26] text-[#F7F4EE] z-40 transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} xl:hidden overflow-y-auto pt-28 px-6 sm:px-8 pb-12 shadow-2xl`}>
        <nav className="flex flex-col space-y-4 text-base sm:text-lg font-serif">
          <Link 
            to="/" 
            onClick={() => setMobileMenuOpen(false)} 
            className={`py-2 border-b border-white/10 ${isActive('/') ? 'text-[#F5D061]' : 'text-white hover:text-[#F5D061]'}`}
          >
            HOME
          </Link>
          
          <Link 
            to="/about" 
            onClick={() => setMobileMenuOpen(false)} 
            className={`py-2 border-b border-white/10 ${isActive('/about') ? 'text-[#F5D061]' : 'text-white hover:text-[#F5D061]'}`}
          >
            ABOUT US
          </Link>

          {/* Mobile Interactive Services Dropdown Accordion */}
          <div className="border-b border-white/10 py-2">
            <button
              type="button"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex items-center justify-between text-left py-1 text-[#F5D061] font-bold tracking-wide focus:outline-none"
            >
              <span>SERVICES & CLINICAL PILLARS</span>
              <svg className={`w-5 h-5 text-[#F5D061] transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Mobile Sub-Menu Items */}
            {mobileServicesOpen && (
              <div className="mt-3 ml-3 pl-3 border-l-2 border-[#F5D061] space-y-3 py-2 text-sm font-sans">
                <Link 
                  to="/physiotherapy" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="block text-white hover:text-[#F5D061] font-semibold tracking-wide py-1"
                >
                  • Physiotherapy Services
                </Link>
                <Link 
                  to="/womens-health" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="block text-white hover:text-[#F5D061] font-semibold tracking-wide py-1"
                >
                  • Female Pelvic Rehabilitation
                </Link>
                <Link 
                  to="/skin-care" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="block text-white hover:text-[#F5D061] font-semibold tracking-wide py-1"
                >
                  • Skin Care & Aesthetics
                </Link>
                <Link 
                  to="/slimming-wellness" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="block text-white hover:text-[#F5D061] font-semibold tracking-wide py-1"
                >
                  • Slimming Therapy
                </Link>
              </div>
            )}
          </div>

          <Link 
            to="/skin-care" 
            onClick={() => setMobileMenuOpen(false)} 
            className={`py-2 border-b border-white/10 ${isActive('/skin-care') ? 'text-[#F5D061]' : 'text-white hover:text-[#F5D061]'}`}
          >
            SKIN CARE
          </Link>
          
          <Link 
            to="/health-camp" 
            onClick={() => setMobileMenuOpen(false)} 
            className={`py-2 border-b border-white/10 ${isActive('/health-camp') ? 'text-[#F5D061]' : 'text-white hover:text-[#F5D061]'}`}
          >
            COMMUNITY CAMP
          </Link>
          
          <Link 
            to="/contact" 
            onClick={() => setMobileMenuOpen(false)} 
            className={`py-2 ${isActive('/contact') ? 'text-[#F5D061]' : 'text-white hover:text-[#F5D061]'}`}
          >
            CONTACT US
          </Link>
        </nav>

        {/* Mobile Contact & Appointment CTA */}
        <div className="mt-8 pt-6 border-t border-white/15 space-y-3">
          <p className="text-[#F5D061] text-xs uppercase tracking-widest font-bold font-sans">TAMANYA HEALTH CLINIC</p>
          <p className="text-xs text-white/90 font-sans leading-relaxed">Pandeypur, Varanasi, Uttar Pradesh</p>
          <a href="tel:+917007667808" className="block text-sm text-[#F5D061] font-bold font-sans hover:underline">+91 70076 67808</a>
          <a href="mailto:dr.neha25btr@gmail.com" className="block text-xs text-white/80 font-sans break-all hover:underline">dr.neha25btr@gmail.com</a>
          
          <Link 
            to="/book-appointment" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center bg-gradient-to-r from-[#F5D061] via-[#D4AF37] to-[#C59B27] text-[#081017] font-extrabold py-3.5 rounded-full text-xs uppercase tracking-widest shadow-[0_4px_25px_rgba(245,208,97,0.45)] mt-6"
          >
            BOOK APPOINTMENT
          </Link>
        </div>
      </div>
    </>
  );
}
