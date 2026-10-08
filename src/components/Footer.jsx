import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/tam.png';

export default function Footer() {
  return (
    <>
      {/* Large Premium Pre-Footer CTA */}
      <section className="bg-[#F7F4EE] py-20 px-6 lg:px-12 border-t border-[#E8E5DF]">
        <div className="max-w-5xl mx-auto rounded-[28px] bg-[#17242D] text-white p-10 sm:p-14 lg:p-16 text-center shadow-2xl border-2 border-[#B79657]/40 relative overflow-hidden">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#B79657]/15 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#A97868]/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10">
            <span className="text-[#B79657] uppercase tracking-[0.25em] text-[11px] font-bold block mb-4">
              READY TO TAKE THE NEXT STEP?
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold mb-6 text-white leading-tight">
              Get Back to the Life You Love.
            </h2>
            <p className="text-[#F7F4EE]/80 font-light mb-10 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Our clinical team at Pandeypur, Varanasi is ready to evaluate, diagnose, and guide your path toward lasting physical health and mobility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/book-appointment" 
                className="w-full sm:w-auto bg-[#B79657] hover:bg-[#a38343] text-[#17242D] font-bold px-9 py-4 rounded-[16px] text-xs uppercase tracking-widest transition-all duration-300 shadow-champagne-glow hover:-translate-y-0.5"
              >
                BOOK AN APPOINTMENT
              </Link>
              <a 
                href="tel:+917007667808" 
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-[#F7F4EE] border border-white/30 font-semibold px-9 py-4 rounded-[16px] text-xs uppercase tracking-widest backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 text-center"
              >
                CALL +91 70076 67808
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Midnight Navy Footer */}
      <footer className="relative bg-[#17242D] text-[#F7F4EE] pt-20 pb-12 overflow-hidden font-sans border-t border-[#B79657]/20">
        
        {/* Top Champagne Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#B79657] to-transparent"></div>
        
        {/* Subtle Background Glow */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#B79657]/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
          
          {/* Main Statement Banner */}
          <div className="pb-12 mb-16 border-b border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <span className="text-[#B79657] text-[10px] uppercase tracking-[0.25em] font-bold block mb-1">
                CLINICAL BRAND STATEMENT
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold tracking-tight">
                GET BACK TO THE LIFE YOU LOVE.
              </h3>
            </div>
            <Link 
              to="/book-appointment" 
              className="text-xs uppercase tracking-widest font-bold text-[#B79657] hover:text-white transition-colors flex items-center gap-2 group"
            >
              <span>SCHEDULE A CLINICAL VISIT</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 mb-16">
            
            {/* Column 1: Brand & Bio */}
            <div className="lg:pr-6">
              <Link to="/" className="flex items-center gap-3 mb-6 group">
                <img 
                  src={logoImg} 
                  alt="Tamanya Health" 
                  className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
                />
                <span className="font-serif font-bold text-2xl tracking-tight text-white group-hover:text-[#B79657] transition-colors">
                  Tamanya <span className="text-[#B79657]">Health</span>
                </span>
              </Link>
              
              <p className="text-[#F7F4EE]/70 font-light leading-relaxed mb-8 text-sm">
                Luxury private practice providing specialist physiotherapy, female pelvic rehabilitation, aesthetic skin care, and holistic body shaping in Varanasi.
              </p>

              <div className="text-xs font-semibold text-[#B79657] space-y-1">
                <a href="https://maps.google.com/?q=Tamanya+Physio+Pandeypur+Varanasi" target="_blank" rel="noopener noreferrer" className="hover:underline block">📍 Pandeypur, Varanasi, UP 221002</a>
                <a href="tel:+917007667808" className="hover:underline block">📞 +91 70076 67808</a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="font-serif text-lg font-bold text-[#B79657] mb-6 tracking-wide border-b border-white/10 pb-2 inline-block">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-[#F7F4EE]/75 hover:text-[#B79657] transition-colors text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2 group">
                    <span className="text-[#B79657] opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-[#F7F4EE]/75 hover:text-[#B79657] transition-colors text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2 group">
                    <span className="text-[#B79657] opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    <span>About Dr. Neha</span>
                  </Link>
                </li>
                <li>
                  <Link to="/physiotherapy" className="text-[#F7F4EE]/75 hover:text-[#B79657] transition-colors text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2 group">
                    <span className="text-[#B79657] opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    <span>Physiotherapy</span>
                  </Link>
                </li>
                <li>
                  <Link to="/womens-health" className="text-[#F7F4EE]/75 hover:text-[#B79657] transition-colors text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2 group">
                    <span className="text-[#B79657] opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    <span>Women's Health</span>
                  </Link>
                </li>
                <li>
                  <Link to="/skin-care" className="text-[#F7F4EE]/75 hover:text-[#B79657] transition-colors text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2 group">
                    <span className="text-[#B79657] opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    <span>Skin Care</span>
                  </Link>
                </li>
                <li>
                  <Link to="/slimming-wellness" className="text-[#F7F4EE]/75 hover:text-[#B79657] transition-colors text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2 group">
                    <span className="text-[#B79657] opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    <span>Slimming & Wellness</span>
                  </Link>
                </li>
                <li>
                  <Link to="/health-camp" className="text-[#F7F4EE]/75 hover:text-[#B79657] transition-colors text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2 group">
                    <span className="text-[#B79657] opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    <span>Community Camp</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-[#F7F4EE]/75 hover:text-[#B79657] transition-colors text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2 group">
                    <span className="text-[#B79657] opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    <span>Contact Us</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Clinical Services */}
            <div>
              <h4 className="font-serif text-lg font-bold text-[#B79657] mb-6 tracking-wide border-b border-white/10 pb-2 inline-block">
                Clinical Services
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/physiotherapy" className="text-[#F7F4EE]/75 hover:text-white transition-colors text-xs font-medium inline-block">
                    Orthopaedic & Spine Rehabilitation
                  </Link>
                </li>
                <li>
                  <Link to="/womens-health" className="text-[#F7F4EE]/75 hover:text-white transition-colors text-xs font-medium inline-block">
                    Female Pelvic Floor & PCOD Care
                  </Link>
                </li>
                <li>
                  <Link to="/womens-health" className="text-[#F7F4EE]/75 hover:text-white transition-colors text-xs font-medium inline-block">
                    Antenatal & Postnatal Therapy
                  </Link>
                </li>
                <li>
                  <Link to="/skin-care" className="text-[#F7F4EE]/75 hover:text-white transition-colors text-xs font-medium inline-block">
                    Integrative Skin Rejuvenation & Peels
                  </Link>
                </li>
                <li>
                  <Link to="/slimming-wellness" className="text-[#F7F4EE]/75 hover:text-white transition-colors text-xs font-medium inline-block">
                    Body Shaper & Vacuum Cavitation
                  </Link>
                </li>
                <li>
                  <Link to="/physiotherapy" className="text-[#F7F4EE]/75 hover:text-white transition-colors text-xs font-medium inline-block">
                    Neurological & Sports Physical Care
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact & Hours */}
            <div>
              <h4 className="font-serif text-lg font-bold text-[#B79657] mb-6 tracking-wide border-b border-white/10 pb-2 inline-block">
                Contact
              </h4>
              <ul className="space-y-4">
                <li>
                  <a href="tel:+917007667808" className="flex items-start gap-3 text-[#F7F4EE]/80 hover:text-[#B79657] transition-colors group">
                    <div className="w-8 h-8 rounded-full bg-[#B79657]/10 border border-[#B79657]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#B79657] group-hover:bg-[#B79657] group-hover:text-[#17242D] transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase tracking-widest text-[#B79657] font-bold mb-0.5">Direct Line / WhatsApp</span>
                      <span className="text-sm font-semibold">+91 70076 67808</span>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="mailto:dr.neha25btr@gmail.com" className="flex items-start gap-3 text-[#F7F4EE]/80 hover:text-[#B79657] transition-colors group">
                    <div className="w-8 h-8 rounded-full bg-[#B79657]/10 border border-[#B79657]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#B79657] group-hover:bg-[#B79657] group-hover:text-[#17242D] transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase tracking-widest text-[#B79657] font-bold mb-0.5">Email</span>
                      <span className="text-xs font-medium break-all">dr.neha25btr@gmail.com</span>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="https://maps.google.com/?q=Tamanya+Physio+Pandeypur+Varanasi" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-[#F7F4EE]/80 hover:text-[#B79657] transition-colors group">
                    <div className="w-8 h-8 rounded-full bg-[#B79657]/10 border border-[#B79657]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#B79657] group-hover:bg-[#B79657] group-hover:text-[#17242D] transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase tracking-widest text-[#B79657] font-bold mb-0.5">Location</span>
                      <span className="text-xs font-light leading-relaxed text-[#F7F4EE]/70 group-hover:text-[#B79657]">
                        Pandeypur, Varanasi, UP 221002
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-[#F7F4EE]/50">
            <p>© 2026 Tamanya Health Clinic. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/contact" className="hover:text-[#B79657] transition-colors">Privacy Policy</Link>
              <Link to="/contact" className="hover:text-[#B79657] transition-colors">Terms of Service</Link>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}

