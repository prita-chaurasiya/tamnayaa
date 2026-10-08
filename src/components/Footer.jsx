import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/tam.png';

export default function Footer() {
  return (
    <>
      {/* Large Premium Pre-Footer CTA Section — Deep Olive & Linen */}
      <section className="bg-[#F4EFE6] py-20 px-6 lg:px-12 border-t border-[#D8D0C3]">
        <div className="max-w-5xl mx-auto rounded-[28px] bg-gradient-to-br from-[#3F4A32] via-[#293225] to-[#1F261C] text-white p-10 sm:p-14 lg:p-16 text-center shadow-2xl border-2 border-[#5F6B45]/50 relative overflow-hidden">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#B89A5A]/15 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#5F6B45]/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10">
            <span className="text-[#B89A5A] uppercase tracking-[0.25em] text-[11px] font-bold block mb-4">
              READY TO TAKE THE NEXT STEP?
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold mb-6 text-white leading-tight">
              Get Back to the Life You Love.
            </h2>
            <p className="text-[#FAF7F1]/85 font-light mb-10 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Our clinical team at Pandeypur, Varanasi is ready to evaluate, diagnose, and guide your path toward lasting physical health and mobility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/book-appointment" 
                className="w-full sm:w-auto bg-[#5F6B45] hover:bg-[#3F4A32] text-[#FAF7F1] font-extrabold px-9 py-4 rounded-[16px] text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_4px_25px_rgba(95,107,69,0.4)] hover:-translate-y-0.5 border border-[#B89A5A]/50"
              >
                BOOK AN APPOINTMENT
              </Link>
              <a 
                href="tel:+917007667808" 
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-[#FAF7F1] border border-white/30 font-semibold px-9 py-4 rounded-[16px] text-xs uppercase tracking-widest backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 text-center"
              >
                CALL +91 70076 67808
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Deep Olive (#293225) Footer */}
      <footer className="relative bg-[#293225] text-[#FAF7F1] pt-20 pb-12 overflow-hidden font-sans border-t border-[#5F6B45]/40">
        
        {/* Top Accent Champagne Line */}
        <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#B89A5A] to-transparent"></div>
        
        {/* Subtle Background Glow */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#5F6B45]/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
          
          {/* Main Statement Banner */}
          <div className="pb-12 mb-16 border-b border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <span className="text-[#B89A5A] text-[10px] uppercase tracking-[0.25em] font-bold block mb-1">
                CLINICAL BRAND STATEMENT
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold tracking-tight">
                GET BACK TO THE LIFE YOU LOVE.
              </h3>
            </div>
            <Link 
              to="/book-appointment" 
              className="text-xs uppercase tracking-widest font-bold text-[#B89A5A] hover:text-white transition-colors flex items-center gap-2 group"
            >
              <span>SCHEDULE A CLINICAL VISIT</span>
              <span className="group-hover:translate-x-1 transition-transform text-[#B89A5A]">→</span>
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
                  className="h-10 w-auto object-contain transition-transform group-hover:scale-105 brightness-110 contrast-125"
                />
                <span className="font-serif font-bold text-2xl tracking-tight text-white group-hover:text-[#B89A5A] transition-colors">
                  Tamanya <span className="text-[#B89A5A]">Health</span>
                </span>
              </Link>
              
              <p className="text-[#A8B09A] font-light leading-relaxed mb-8 text-sm">
                Luxury private practice providing specialist physiotherapy, female pelvic rehabilitation, aesthetic skin care, and holistic body shaping in Varanasi.
              </p>

              <div className="text-xs font-semibold text-[#B89A5A] space-y-1.5">
                <a href="https://maps.google.com/?q=Tamanya+Physio+Pandeypur+Varanasi" target="_blank" rel="noopener noreferrer" className="hover:underline block">📍 Pandeypur, Varanasi, UP 221002</a>
                <a href="tel:+917007667808" className="hover:underline block">📞 +91 70076 67808</a>
                <a href="mailto:dr.neha25btr@gmail.com" className="hover:underline block">✉️ dr.neha25btr@gmail.com</a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="font-serif text-lg font-bold text-[#B89A5A] mb-6 tracking-wide border-b border-white/10 pb-2 inline-block">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-[#FAF7F1]/80 hover:text-[#B89A5A] transition-colors text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2 group">
                    <span className="text-[#B89A5A] opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-[#FAF7F1]/80 hover:text-[#B89A5A] transition-colors text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2 group">
                    <span className="text-[#B89A5A] opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    <span>About Dr. Neha</span>
                  </Link>
                </li>
                <li>
                  <Link to="/physiotherapy" className="text-[#FAF7F1]/80 hover:text-[#B89A5A] transition-colors text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2 group">
                    <span className="text-[#B89A5A] opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    <span>Physiotherapy Services</span>
                  </Link>
                </li>
                <li>
                  <Link to="/womens-health" className="text-[#FAF7F1]/80 hover:text-[#B89A5A] transition-colors text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2 group">
                    <span className="text-[#B89A5A] opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    <span>Female Pelvic Rehabilitation</span>
                  </Link>
                </li>
                <li>
                  <Link to="/skin-care" className="text-[#FAF7F1]/80 hover:text-[#B89A5A] transition-colors text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2 group">
                    <span className="text-[#B89A5A] opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    <span>Skin Care & Aesthetics</span>
                  </Link>
                </li>
                <li>
                  <Link to="/slimming-wellness" className="text-[#FAF7F1]/80 hover:text-[#B89A5A] transition-colors text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2 group">
                    <span className="text-[#B89A5A] opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    <span>Slimming & Body Shaping</span>
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="text-[#FAF7F1]/80 hover:text-[#B89A5A] transition-colors text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2 group">
                    <span className="text-[#B89A5A] opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    <span>Clinical Gallery</span>
                  </Link>
                </li>
                <li>
                  <Link to="/health-camp" className="text-[#FAF7F1]/80 hover:text-[#B89A5A] transition-colors text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2 group">
                    <span className="text-[#B89A5A] opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    <span>Community Camp</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-[#FAF7F1]/80 hover:text-[#B89A5A] transition-colors text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2 group">
                    <span className="text-[#B89A5A] opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    <span>Contact Us</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Clinical Services Links */}
            <div>
              <h4 className="font-serif text-lg font-bold text-[#B89A5A] mb-6 tracking-wide border-b border-white/10 pb-2 inline-block">
                Clinical Pillars
              </h4>
              <ul className="space-y-3 text-xs text-[#FAF7F1]/80 font-semibold">
                <li>
                  <Link to="/physiotherapy" className="hover:text-[#B89A5A] transition-colors flex items-center gap-2 group">
                    <span className="text-[#B89A5A] opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    <span>Orthopaedic & Joint Rehab</span>
                  </Link>
                </li>
                <li>
                  <Link to="/physiotherapy" className="hover:text-[#B89A5A] transition-colors flex items-center gap-2 group">
                    <span className="text-[#B89A5A] opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    <span>Spine & Back Pain Care</span>
                  </Link>
                </li>
                <li>
                  <Link to="/womens-health" className="hover:text-[#B89A5A] transition-colors flex items-center gap-2 group">
                    <span className="text-[#B89A5A] opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    <span>Female Pelvic Floor Suite</span>
                  </Link>
                </li>
                <li>
                  <Link to="/womens-health" className="hover:text-[#B89A5A] transition-colors flex items-center gap-2 group">
                    <span className="text-[#B89A5A] opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    <span>Prenatal & Postnatal Care</span>
                  </Link>
                </li>
                <li>
                  <Link to="/skin-care" className="hover:text-[#B89A5A] transition-colors flex items-center gap-2 group">
                    <span className="text-[#B89A5A] opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    <span>Clinical Skin Rejuvenation</span>
                  </Link>
                </li>
                <li>
                  <Link to="/slimming-wellness" className="hover:text-[#B89A5A] transition-colors flex items-center gap-2 group">
                    <span className="text-[#B89A5A] opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    <span>Vacuum Cavitation Body Shaping</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Hours & Appointments */}
            <div>
              <h4 className="font-serif text-lg font-bold text-[#B89A5A] mb-6 tracking-wide border-b border-white/10 pb-2 inline-block">
                Clinic Hours
              </h4>
              <div className="space-y-3 text-xs text-[#FAF7F1]/90">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Mon – Sat:</span>
                  <span className="font-bold text-[#B89A5A]">09:00 AM – 08:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Sunday:</span>
                  <span className="font-bold text-[#A8B09A]">Prior Appointment</span>
                </div>
                <p className="text-[11px] text-[#A8B09A] pt-2 font-light leading-relaxed">
                  Located opposite Indian Oil Petrol Pump, Pandeypur Chauraha, Varanasi, UP 221002.
                </p>
                <div className="pt-4">
                  <Link 
                    to="/book-appointment" 
                    className="block text-center bg-[#5F6B45] hover:bg-[#3F4A32] text-white py-3 rounded-xl text-xs uppercase font-extrabold tracking-widest shadow-md transition-all border border-[#B89A5A]/40"
                  >
                    BOOK APPOINTMENT
                  </Link>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Copyright */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-[11px] text-[#A8B09A]">
            <p>© {new Date().getFullYear()} Tamanya Physio & Health Clinic. All rights reserved.</p>
            <p className="mt-2 sm:mt-0">Led by Dr. Neha Gupta (M.P.T Ortho) • Pandeypur, Varanasi</p>
          </div>

        </div>
      </footer>
    </>
  );
}
