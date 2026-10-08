import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function HeroSlider() {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      eyebrow: "PHYSIO & HEALTH CARE • SINCE 2019",
      titleLine1: "Move Better.",
      titleLine2: "Recover With Confidence.",
      subtitle: "Personalised physiotherapy and specialised rehabilitation in Varanasi to help you recover with strength, clarity, and sustainable long-term mobility.",
      floatingText: "PERSONALISED CARE",
      floatingSub: "Professional guidance for every patient",
      link: "/physiotherapy"
    },
    {
      image: "https://tamanyahealth.com/wp-content/uploads/2024/09/image3.jpeg",
      eyebrow: "SPECIALISED WOMEN'S HEALTH",
      titleLine1: "Pelvic & Maternal Care",
      titleLine2: "Restoring Female Vitality.",
      subtitle: "Dedicated pelvic floor rehabilitation, PCOD/PCOS support, prenatal and postnatal physical care delivered in a private, compassionate clinical setting.",
      floatingText: "MATERNAL & PELVIC CARE",
      floatingSub: "Compassionate therapy for women",
      link: "/womens-health"
    },
    {
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      eyebrow: "EVIDENCE-BASED REHABILITATION",
      titleLine1: "Root-Cause Diagnosis",
      titleLine2: "Beyond Symptom Masking.",
      subtitle: "Targeting structural biomechanics rather than quick fixes, ensuring sustainable recovery from back pain, joint stiffness, and sports injuries.",
      floatingText: "CLINICAL EXCELLENCE",
      floatingSub: "Modern non-surgical modalities",
      link: "/about"
    },
    {
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
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
      className="relative w-full min-h-[720px] sm:min-h-[760px] lg:min-h-[820px] bg-[#17242D] overflow-hidden flex items-center pt-36 sm:pt-40 lg:pt-48 pb-20 sm:pb-24"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Image Slider with Cinematic Ken Burns & Gradient Overlay */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <img 
            src={slide.image} 
            alt="Tamanya Health Hero Background" 
            className={`w-full h-full object-cover object-center ${
              index === currentSlide ? 'animate-ken-burns' : 'scale-100'
            }`}
          />
          {/* Midnight Navy Overlay & Soft Vignette */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#17242D]/95 via-[#17242D]/80 to-[#17242D]/45" />
          <div className="absolute inset-0 bg-radial-vignette opacity-40 pointer-events-none" />
        </div>
      ))}

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-[1600px] mx-auto px-6 lg:px-12 w-full grid lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Editorial Content (7 Cols) */}
        <div className="lg:col-span-8 xl:col-span-7 flex flex-col items-start text-left text-white pr-4">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-4 animate-fade-in-up">
            <span className="w-8 h-[2px] bg-[#B79657] block"></span>
            <span className="text-[#B79657] uppercase tracking-[0.25em] text-[11px] font-bold">
              {slides[currentSlide].eyebrow}
            </span>
          </div>

          {/* Large Editorial Serif Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-4 leading-[1.06] drop-shadow-md animate-fade-in-up">
            {slides[currentSlide].titleLine1} <br />
            <span className="text-[#F7F4EE] italic font-normal">{slides[currentSlide].titleLine2}</span>
          </h1>

          {/* Supporting Description */}
          <p className="text-[#F7F4EE]/85 text-sm sm:text-base lg:text-lg font-light leading-relaxed max-w-xl mb-8 animate-fade-in-up">
            {slides[currentSlide].subtitle}
          </p>

          {/* Buttons: Champagne Primary + Ivory Glass Secondary */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto animate-fade-in-up mb-6">
            <Link 
              to="/book-appointment" 
              className="inline-flex justify-center items-center gap-2 bg-[#B79657] hover:bg-[#a38343] text-[#17242D] font-bold px-8 py-3.5 rounded-[16px] text-xs uppercase tracking-widest transition-all duration-300 shadow-xl hover:shadow-champagne-glow hover:-translate-y-0.5 active:translate-y-0"
            >
              BOOK APPOINTMENT
            </Link>
            <Link 
              to={slides[currentSlide].link} 
              className="inline-flex justify-center items-center gap-2 bg-white/10 hover:bg-white/20 text-[#F7F4EE] border border-white/30 font-semibold px-8 py-3.5 rounded-[16px] text-xs uppercase tracking-widest backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5"
            >
              EXPLORE OUR CARE
            </Link>
          </div>

        </div>

        {/* Right Layered Foreground Card (5 Cols) with Subtle Micro-Float */}
        <div className="hidden lg:flex lg:col-span-4 xl:col-span-5 justify-end relative">
          <div className="bg-[#F7F4EE] p-7 sm:p-8 rounded-[24px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.35)] border border-white/80 max-w-sm border-t-4 border-t-[#B79657] animate-float-gentle relative z-30 transition-all duration-500 hover:scale-[1.02]">
            
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#B79657] block"></span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#B79657] font-bold">
                {slides[currentSlide].floatingText}
              </span>
            </div>

            <h3 className="font-serif text-xl sm:text-2xl text-[#17242D] font-bold leading-snug mb-3">
              {slides[currentSlide].floatingSub}
            </h3>

            <p className="text-[#17242D]/75 text-xs leading-relaxed font-light mb-6">
              Clinical practice led by Dr. Neha Gupta (B.P.T, M.P.T Ortho, MIAP), providing evidence-led patient care in Pandeypur, Varanasi.
            </p>

            <Link to="/about" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-[#17242D] hover:text-[#B79657] transition-colors group">
              <span>MEET CLINICAL DIRECTOR</span>
              <svg className="w-3.5 h-3.5 text-[#B79657] transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>

          </div>
        </div>

      </div>

      {/* Side Arrow Navigation Buttons */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/40 hover:bg-[#B79657] text-white hover:text-[#17242D] border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-lg focus:outline-none group"
        aria-label="Previous Slide"
      >
        <svg className="w-5 h-5 transform group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/40 hover:bg-[#B79657] text-white hover:text-[#17242D] border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-lg focus:outline-none group"
        aria-label="Next Slide"
      >
        <svg className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Numerical Progress Indicator */}
      <div className="absolute bottom-5 left-6 lg:left-12 z-30 flex items-center gap-6 bg-[#17242D]/80 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="flex items-center gap-2 group focus:outline-none"
            aria-label={`Go to slide ${index + 1}`}
          >
            <span className={`text-[11px] font-bold font-mono transition-colors ${
              index === currentSlide ? 'text-[#B79657]' : 'text-white/40 group-hover:text-white'
            }`}>
              0{index + 1}
            </span>
            <div className={`h-[2px] transition-all duration-500 rounded-full ${
              index === currentSlide 
                ? 'w-12 bg-[#B79657]' 
                : 'w-6 bg-white/20 group-hover:bg-white/50'
            }`} />
          </button>
        ))}
      </div>

    </div>
  );
}




