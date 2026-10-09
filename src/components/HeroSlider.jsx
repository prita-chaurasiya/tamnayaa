import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function HeroSlider() {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2400&q=90",
      eyebrow: "PHYSIO & HEALTH CARE • SINCE 2019",
      titleLine1: "Move Better.",
      titleLine2: "Recover With Confidence.",
      subtitle: "Personalised physiotherapy and specialised rehabilitation in Varanasi to help you recover with strength, clarity, and sustainable long-term mobility.",
      floatingText: "PERSONALISED CARE",
      floatingSub: "Professional guidance for every patient",
      link: "/physiotherapy"
    },
    {
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=2400&q=90",
      eyebrow: "SPECIALISED WOMEN'S HEALTH",
      titleLine1: "Pelvic & Maternal Care",
      titleLine2: "Restoring Female Vitality.",
      subtitle: "Dedicated pelvic floor rehabilitation, PCOD/PCOS support, prenatal and postnatal physical care delivered in a private, compassionate clinical setting.",
      floatingText: "MATERNAL & PELVIC CARE",
      floatingSub: "Compassionate therapy for women",
      link: "/womens-health"
    },
    {
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=2400&q=90",
      eyebrow: "EVIDENCE-BASED REHABILITATION",
      titleLine1: "Root-Cause Diagnosis",
      titleLine2: "Beyond Symptom Masking.",
      subtitle: "Targeting structural biomechanics rather than quick fixes, ensuring sustainable recovery from back pain, joint stiffness, and sports injuries.",
      floatingText: "CLINICAL EXCELLENCE",
      floatingSub: "Modern non-surgical modalities",
      link: "/about"
    },
    {
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=2400&q=90",
      eyebrow: "HOLISTIC WELLNESS & BODY CARE",
      titleLine1: "Slimming & Aesthetics",
      titleLine2: "Empowering Body & Mind.",
      subtitle: "Comprehensive non-invasive body contouring, vacuum cavitation, deep heat therapy, and aesthetic skin rejuvenation tailored to your goals.",
      floatingText: "FULL-SPECTRUM WELLNESS",
      floatingSub: "Empowering body and mind",
      link: "/slimming-wellness"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(interval);
  }, [slides.length, isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div 
      className="relative w-full min-h-[700px] sm:min-h-[740px] lg:min-h-[780px] bg-[#F4EFE6] overflow-hidden flex items-center pt-36 sm:pt-40 lg:pt-48 pb-20 sm:pb-24 font-sans border-b border-[#D8D0C3]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Image Slider with Cinematic Ken Burns & Polished Crossfade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-10"
        >
          <img 
            src={slides[currentSlide].image} 
            alt="Tamanya Health Hero Background" 
            className="w-full h-full object-cover object-center animate-ken-burns"
          />
          {/* Soft Dark Olive & Luminous Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#293225]/90 via-[#293225]/60 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#293225]/80 via-transparent to-black/40 pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-[1600px] mx-auto px-6 lg:px-12 w-full">
        
        {/* Editorial Content (Full Width / Max 4XL) */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl flex flex-col items-start text-left text-[#FAF7F1]"
          >
            
            {/* Eyebrow */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="w-8 h-[2px] bg-[#B89A5A] block"></span>
              <span className="text-[#B89A5A] uppercase tracking-[0.25em] text-[11px] font-extrabold">
                {slides[currentSlide].eyebrow}
              </span>
            </motion.div>

            {/* Large Editorial Serif Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-[#FAF7F1] mb-5 leading-[1.06] drop-shadow-md"
            >
              {slides[currentSlide].titleLine1} <br />
              <span className="text-[#B89A5A] italic font-normal">{slides[currentSlide].titleLine2}</span>
            </motion.h1>

            {/* Supporting Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#FAF7F1]/90 text-sm sm:text-base lg:text-lg font-light leading-relaxed max-w-2xl mb-8 drop-shadow"
            >
              {slides[currentSlide].subtitle}
            </motion.p>

            {/* Buttons: Primary Champagne + Dark Olive Border Secondary */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-6"
            >
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link 
                  to="/book-appointment" 
                  className="inline-flex justify-center items-center gap-2 bg-[#B89A5A] hover:bg-[#a3864c] text-[#293225] font-extrabold px-8 py-3.5 rounded-full text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_4px_25px_rgba(184,154,90,0.5)] hover:shadow-[0_6px_35px_rgba(184,154,90,0.7)] border border-white/40"
                >
                  BOOK APPOINTMENT
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link 
                  to={slides[currentSlide].link} 
                  className="inline-flex justify-center items-center gap-2 bg-[#293225]/80 hover:bg-[#293225] text-[#FAF7F1] border border-[#D8D0C3]/40 font-semibold px-8 py-3.5 rounded-full text-xs uppercase tracking-widest backdrop-blur-md transition-all duration-300 shadow-sm"
                >
                  EXPLORE OUR CARE
                </Link>
              </motion.div>
            </motion.div>

          </motion.div>
        </AnimatePresence>

      </div>

      {/* Side Arrow Navigation Buttons */}
      <motion.button 
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-[#293225]/60 hover:bg-[#5F6B45] text-white backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-lg focus:outline-none group border border-white/20"
        aria-label="Previous Slide"
      >
        <svg className="w-5 h-5 transform group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>

      <motion.button 
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-[#293225]/60 hover:bg-[#5F6B45] text-white backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-lg focus:outline-none group border border-white/20"
        aria-label="Next Slide"
      >
        <svg className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>

      {/* Numerical Progress Indicator */}
      <div className="absolute bottom-5 left-6 lg:left-12 z-30 flex items-center gap-6 bg-[#293225]/85 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="flex items-center gap-2 group focus:outline-none"
            aria-label={`Go to slide ${index + 1}`}
          >
            <span className={`text-[11px] font-bold font-mono transition-colors ${
              index === currentSlide ? 'text-[#B89A5A]' : 'text-white/40 group-hover:text-white'
            }`}>
              0{index + 1}
            </span>
            <div className={`h-[2.5px] transition-all duration-500 rounded-full ${
              index === currentSlide 
                ? 'w-12 bg-[#B89A5A]' 
                : 'w-6 bg-white/20 group-hover:bg-white/50'
            }`} />
          </button>
        ))}
      </div>

    </div>
  );
}

