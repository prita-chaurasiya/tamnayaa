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
      <header className="sticky top-0 w-full z-50 font-sans border-b border-[rgba(197,160,90,0.14)]">
        
        {/* TOP UTILITY BAR (42px–46px desktop) */}
        <div className={`bg-[#0C151C] text-white border-b border-[rgba(196,158,88,0.16)] transition-all duration-300 ease-in-out overflow-hidden ${
          scrolled ? 'max-h-0 py-0 opacity-0 border-none pointer-events-none' : 'max-h-16 py-2 opacity-100'
        }`}>
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-row items-center justify-between text-xs font-sans tracking-wide">
            
            {/* Left: Location & Specialist Badge */}
            <div className="flex items-center gap-3 sm:gap-5 shrink-0">
              {/* SPECIALIST CLINIC BADGE */}
              <span className="inline-flex items-center gap-1.5 bg-[rgba(190,152,84,0.10)] border border-[rgba(190,152,84,0.42)] text-[#C19A55] px-3.5 py-1 rounded-full text-[11px] uppercase font-semibold tracking-[0.04em]">
                <svg className="w-3.5 h-3.5 text-[#C19A55]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L4 6v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V6l-8-4z" />
                </svg>
                <span>SPECIALIST CLINIC</span>
              </span>

              {/* Location Link with MapPin Icon */}
              <a 
                href="https://maps.google.com/?q=Tamanya+Physio+Pandeypur+Varanasi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/86 hover:text-[#C19A55] transition-colors flex items-center gap-1.5 font-medium text-[11px] sm:text-xs"
              >
                <svg className="w-4 h-4 text-[#C19A55] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span>Pandeypur, Varanasi</span>
                <span className="hidden md:inline text-[#C19A55] px-1">•</span>
                <span className="hidden md:inline text-white/70">Same-Day Appointments</span>
              </a>
            </div>

            {/* Right: Phone Link with Phone Icon */}
            <div className="flex items-center gap-2 shrink-0">
              <a 
                href="tel:+917007667808" 
                className="inline-flex items-center gap-2 text-white/86 hover:text-[#C19A55] transition-colors font-semibold tracking-wider text-[11px] sm:text-xs"
              >
                <svg className="w-4 h-4 text-[#C19A55] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span>+91 70076 67808</span>
              </a>
            </div>

          </div>
        </div>

        {/* MAIN NAVIGATION BAR (Desktop Height 92px–102px) */}
        <div className={`w-full transition-all duration-300 ease-in-out ${
          scrolled 
            ? 'bg-[#0D1C25]/96 backdrop-blur-md py-3 lg:py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.10)]' 
            : 'bg-[#10212B]/97 backdrop-blur-sm py-4 lg:py-5'
        }`}>
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center">
            
            {/* LEFT: LOGO */}
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center group py-1">
              <img 
                src={logoImg} 
                alt="Tamanya Health Specialist Clinic" 
                className="h-14 md:h-16 lg:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] filter drop-shadow-[0_3px_10px_rgba(190,152,84,0.10)]"
              />
            </Link>

            {/* CENTER: NAVIGATION LINKS */}
            <nav className="hidden xl:flex items-center space-x-9 lg:space-x-12 text-[14px] lg:text-[15px] uppercase tracking-[0.14em] font-semibold text-white/90">
              
              {/* HOME */}
              <Link 
                to="/" 
                className={`relative py-2 transition-colors duration-300 group ${isActive('/') ? 'text-[#C19A55]' : 'hover:text-[#C19A55]'}`}
              >
                <span>HOME</span>
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-[#C19A55] transition-all duration-300 rounded-full ${
                  isActive('/') ? 'w-[65%]' : 'w-0 group-hover:w-[65%]'
                }`}></span>
              </Link>
              
              {/* ABOUT */}
              <Link 
                to="/about" 
                className={`relative py-2 transition-colors duration-300 group ${isActive('/about') ? 'text-[#C19A55]' : 'hover:text-[#C19A55]'}`}
              >
                <span>ABOUT</span>
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-[#C19A55] transition-all duration-300 rounded-full ${
                  isActive('/about') ? 'w-[65%]' : 'w-0 group-hover:w-[65%]'
                }`}></span>
              </Link>

              {/* SERVICES DROPDOWN */}
              <div 
                ref={dropdownRef}
                className="relative py-2 cursor-pointer group"
              >
                <button
                  type="button"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  className={`flex items-center gap-1.5 focus:outline-none transition-colors duration-300 uppercase tracking-[0.14em] font-semibold ${
                    isServicesActive() || servicesDropdownOpen ? 'text-[#C19A55]' : 'group-hover:text-[#C19A55]'
                  }`}
                >
                  <span>SERVICES</span>
                  <svg className={`w-4 h-4 transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180 text-[#C19A55]' : 'group-hover:rotate-180'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-[#C19A55] transition-all duration-300 rounded-full ${
                  isServicesActive() ? 'w-[65%]' : 'w-0 group-hover:w-[65%]'
                }`}></span>

                {/* Dropdown Menu Panel (Warm Ivory background as requested) */}
                <div className={`absolute top-full left-0 mt-3 w-72 bg-[#F8F6F1]/98 border border-[rgba(190,152,84,0.20)] rounded-[16px] shadow-[0_18px_50px_rgba(4,16,24,0.16)] p-2.5 z-50 transition-all duration-200 backdrop-blur-md ${
                  servicesDropdownOpen ? 'block opacity-100 translate-y-0' : 'hidden group-hover:block opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0'
                }`}>
                  <Link 
                    to="/physiotherapy" 
                    onClick={() => setServicesDropdownOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-[9px] text-[13px] font-semibold transition-all duration-200 ${
                      isActive('/physiotherapy') ? 'bg-[rgba(190,152,84,0.12)] text-[#9B783C]' : 'text-[#13242D] hover:bg-[rgba(190,152,84,0.08)] hover:text-[#9B783C]'
                    }`}
                  >
                    <span>PHYSIOTHERAPY</span>
                    <span className="text-xs text-[#9B783C]">→</span>
                  </Link>
                  <Link 
                    to="/womens-health" 
                    onClick={() => setServicesDropdownOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-[9px] text-[13px] font-semibold transition-all duration-200 ${
                      isActive('/womens-health') ? 'bg-[rgba(190,152,84,0.12)] text-[#9B783C]' : 'text-[#13242D] hover:bg-[rgba(190,152,84,0.08)] hover:text-[#9B783C]'
                    }`}
                  >
                    <span>WOMEN'S HEALTH</span>
                    <span className="text-xs text-[#9B783C]">→</span>
                  </Link>
                  <Link 
                    to="/skin-care" 
                    onClick={() => setServicesDropdownOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-[9px] text-[13px] font-semibold transition-all duration-200 ${
                      isActive('/skin-care') ? 'bg-[rgba(190,152,84,0.12)] text-[#9B783C]' : 'text-[#13242D] hover:bg-[rgba(190,152,84,0.08)] hover:text-[#9B783C]'
                    }`}
                  >
                    <span>SKIN CARE</span>
                    <span className="text-xs text-[#9B783C]">→</span>
                  </Link>
                  <Link 
                    to="/slimming-wellness" 
                    onClick={() => setServicesDropdownOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-[9px] text-[13px] font-semibold transition-all duration-200 ${
                      isActive('/slimming-wellness') ? 'bg-[rgba(190,152,84,0.12)] text-[#9B783C]' : 'text-[#13242D] hover:bg-[rgba(190,152,84,0.08)] hover:text-[#9B783C]'
                    }`}
                  >
                    <span>SLIMMING & WELLNESS</span>
                    <span className="text-xs text-[#9B783C]">→</span>
                  </Link>
                </div>
              </div>

              {/* SKIN CARE */}
              <Link 
                to="/skin-care" 
                className={`relative py-2 transition-colors duration-300 group ${isActive('/skin-care') ? 'text-[#C19A55]' : 'hover:text-[#C19A55]'}`}
              >
                <span>SKIN CARE</span>
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-[#C19A55] transition-all duration-300 rounded-full ${
                  isActive('/skin-care') ? 'w-[65%]' : 'w-0 group-hover:w-[65%]'
                }`}></span>
              </Link>

              {/* COMMUNITY */}
              <Link 
                to="/health-camp" 
                className={`relative py-2 transition-colors duration-300 group ${isActive('/health-camp') ? 'text-[#C19A55]' : 'hover:text-[#C19A55]'}`}
              >
                <span>COMMUNITY</span>
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-[#C19A55] transition-all duration-300 rounded-full ${
                  isActive('/health-camp') ? 'w-[65%]' : 'w-0 group-hover:w-[65%]'
                }`}></span>
              </Link>

              {/* CONTACT US */}
              <Link 
                to="/contact" 
                className={`relative py-2 transition-colors duration-300 group ${isActive('/contact') ? 'text-[#C19A55]' : 'hover:text-[#C19A55]'}`}
              >
                <span>CONTACT US</span>
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-[#C19A55] transition-all duration-300 rounded-full ${
                  isActive('/contact') ? 'w-[65%]' : 'w-0 group-hover:w-[65%]'
                }`}></span>
              </Link>
            </nav>

            {/* RIGHT: BOOK APPOINTMENT CTA BUTTON */}
            <div className="flex items-center gap-3">
              <Link 
                to="/book-appointment" 
                className="bg-gradient-to-r from-[#C6A15D] to-[#B88D48] text-[#10202A] font-bold px-7 py-3 sm:px-8 sm:py-3.5 rounded-[18px] text-[13px] sm:text-[14px] uppercase tracking-[0.12em] transition-all duration-300 shadow-[0_10px_30px_rgba(181,139,70,0.14)] hover:shadow-[0_14px_34px_rgba(181,139,70,0.22)] hover:-translate-y-[2px] active:translate-y-0 text-center shrink-0 border border-[#D8B470]/30"
              >
                BOOK APPOINTMENT
              </Link>
            </div>

            {/* MOBILE MENU TOGGLE BUTTON */}
            <button 
              className="xl:hidden text-white focus:outline-none p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#C19A55]/40 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6 text-[#C19A55]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
              ) : (
                <svg className="w-6 h-6 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
              )}
            </button>

          </div>
        </div>

      </header>

      {/* MOBILE NAVIGATION DRAWER */}
      <div className={`fixed inset-0 bg-[#10212B] text-white/90 z-40 transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} xl:hidden overflow-y-auto pt-28 px-6 sm:px-8 pb-12 shadow-2xl`}>
        <nav className="flex flex-col space-y-4 text-base sm:text-lg font-sans">
          <Link 
            to="/" 
            onClick={() => setMobileMenuOpen(false)} 
            className={`py-2 border-b border-white/10 ${isActive('/') ? 'text-[#C19A55] font-semibold' : 'text-white hover:text-[#C19A55]'}`}
          >
            HOME
          </Link>
          
          <Link 
            to="/about" 
            onClick={() => setMobileMenuOpen(false)} 
            className={`py-2 border-b border-white/10 ${isActive('/about') ? 'text-[#C19A55] font-semibold' : 'text-white hover:text-[#C19A55]'}`}
          >
            ABOUT US
          </Link>

          {/* Mobile Interactive Services Dropdown Accordion */}
          <div className="border-b border-white/10 py-2">
            <button
              type="button"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex items-center justify-between text-left py-1 text-[#C19A55] font-semibold tracking-wide focus:outline-none"
            >
              <span>SERVICES & CLINICAL PILLARS</span>
              <svg className={`w-5 h-5 text-[#C19A55] transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Mobile Sub-Menu Items */}
            {mobileServicesOpen && (
              <div className="mt-3 ml-3 pl-3 border-l-2 border-[#C19A55] space-y-3 py-2 text-sm font-sans">
                <Link 
                  to="/physiotherapy" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="block text-white hover:text-[#C19A55] font-semibold tracking-wide py-1"
                >
                  • Physiotherapy Services
                </Link>
                <Link 
                  to="/womens-health" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="block text-white hover:text-[#C19A55] font-semibold tracking-wide py-1"
                >
                  • Female Pelvic Rehabilitation
                </Link>
                <Link 
                  to="/skin-care" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="block text-white hover:text-[#C19A55] font-semibold tracking-wide py-1"
                >
                  • Skin Care & Aesthetics
                </Link>
                <Link 
                  to="/slimming-wellness" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="block text-white hover:text-[#C19A55] font-semibold tracking-wide py-1"
                >
                  • Slimming Therapy
                </Link>
              </div>
            )}
          </div>

          <Link 
            to="/skin-care" 
            onClick={() => setMobileMenuOpen(false)} 
            className={`py-2 border-b border-white/10 ${isActive('/skin-care') ? 'text-[#C19A55] font-semibold' : 'text-white hover:text-[#C19A55]'}`}
          >
            SKIN CARE
          </Link>
          
          <Link 
            to="/health-camp" 
            onClick={() => setMobileMenuOpen(false)} 
            className={`py-2 border-b border-white/10 ${isActive('/health-camp') ? 'text-[#C19A55] font-semibold' : 'text-white hover:text-[#C19A55]'}`}
          >
            COMMUNITY CAMP
          </Link>
          
          <Link 
            to="/contact" 
            onClick={() => setMobileMenuOpen(false)} 
            className={`py-2 ${isActive('/contact') ? 'text-[#C19A55] font-semibold' : 'text-white hover:text-[#C19A55]'}`}
          >
            CONTACT US
          </Link>
        </nav>

        {/* Mobile Contact & Appointment CTA */}
        <div className="mt-8 pt-6 border-t border-white/15 space-y-3">
          <p className="text-[#C19A55] text-xs uppercase tracking-widest font-bold font-sans">TAMANYA HEALTH CLINIC</p>
          <p className="text-xs text-white/80 font-sans leading-relaxed">Pandeypur, Varanasi, Uttar Pradesh</p>
          <a href="tel:+917007667808" className="block text-sm text-[#C19A55] font-bold font-sans hover:underline">+91 70076 67808</a>
          <a href="mailto:dr.neha25btr@gmail.com" className="block text-xs text-white/70 font-sans break-all hover:underline">dr.neha25btr@gmail.com</a>
          
          <Link 
            to="/book-appointment" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center bg-gradient-to-r from-[#C6A15D] to-[#B88D48] text-[#10202A] font-bold py-3.5 rounded-[18px] text-xs uppercase tracking-widest shadow-[0_10px_30px_rgba(181,139,70,0.14)] mt-6"
          >
            BOOK APPOINTMENT
          </Link>
        </div>
      </div>
    </>
  );
}
