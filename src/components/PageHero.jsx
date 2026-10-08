import React from 'react';
import { Link } from 'react-router-dom';

export default function PageHero({ title, category, subtitle, image, pageName, ctaText = "BOOK AN APPOINTMENT", ctaLink = "/book-appointment", secondaryCtaText, secondaryCtaLink, floatBadgeText = "PREMIUM CLINICAL CARE", floatBadgeValue = "7+ Yrs Expertise" }) {
  return (
    <section className="relative w-full min-h-[500px] lg:min-h-[560px] bg-[#351D2B] flex items-center pt-36 md:pt-40 lg:pt-44 pb-20 lg:pb-24 overflow-hidden font-sans border-b border-[#C94F78]/30">
      
      {/* Background Image with Cinematic Ken Burns & Luxurious Pink/Plum Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src={image || "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80"} 
          alt={title}
          className="w-full h-full object-cover object-center animate-ken-burns"
        />
        {/* Subtle Luxury Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#351D2B]/95 via-[#7D294B]/85 to-[#9E3D63]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#351D2B] via-transparent to-[#351D2B]/50" />
      </div>

      {/* Hero Content Container */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 w-full relative z-10 text-white">
        
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 max-w-3xl">
            {/* Breadcrumb Navigation */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6 text-[10px] uppercase tracking-[0.2em] font-semibold text-[#FFF9F6]">
              <Link to="/" className="hover:text-[#E8A6B8] transition-colors">HOME</Link>
              <span className="text-[#C94F78] font-bold">/</span>
              <span className="text-[#E8A6B8] font-bold tracking-widest">{pageName || title}</span>
            </div>

            {/* Category Eyebrow */}
            {category && (
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-[2px] bg-[#C94F78] block"></span>
                <span className="text-[#E8A6B8] uppercase tracking-[0.25em] text-[11px] font-bold">
                  {category}
                </span>
              </div>
            )}

            {/* Main Title */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1] drop-shadow-md">
              {title}
            </h1>

            {/* Subtitle / Description */}
            {subtitle && (
              <p className="text-[#FFF9F6]/90 text-base sm:text-lg font-light max-w-2xl leading-relaxed drop-shadow mb-8">
                {subtitle}
              </p>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link 
                to={ctaLink} 
                className="bg-gradient-to-r from-[#C94F78] via-[#9E3D63] to-[#7D294B] text-white font-extrabold px-8 py-3.5 rounded-full text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_4px_25px_rgba(201,79,120,0.45)] hover:shadow-[0_6px_35px_rgba(201,79,120,0.7)] hover:scale-[1.03] active:scale-100 border border-[#E8A6B8]/40"
              >
                {ctaText}
              </Link>
              
              {secondaryCtaText && secondaryCtaLink && (
                <Link 
                  to={secondaryCtaLink} 
                  className="bg-white/10 hover:bg-white/20 text-[#FFF9F6] border border-white/30 font-semibold px-8 py-3.5 rounded-full text-xs uppercase tracking-widest backdrop-blur-md transition-all duration-300 hover:scale-[1.03]"
                >
                  {secondaryCtaText}
                </Link>
              )}
            </div>

          </div>

          {/* Floating Information Card with 3D Depth */}
          <div className="lg:col-span-4 hidden lg:flex justify-end">
            <div className="bg-[#24121C]/85 backdrop-blur-xl border border-[#C94F78]/40 p-6 rounded-[24px] shadow-[0_25px_50px_rgba(53,29,43,0.6)] transform hover:-translate-y-2 hover:rotate-1 transition-all duration-500 max-w-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C94F78] to-[#7D294B] flex items-center justify-center text-white shadow-md">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
                </svg>
              </div>
              <div>
                <span className="text-[#E8A6B8] text-[10px] uppercase font-extrabold tracking-widest block">{floatBadgeText}</span>
                <p className="font-serif text-xl font-bold text-white mt-0.5">{floatBadgeValue}</p>
                <p className="text-xs text-[#FFF9F6]/75 font-light leading-relaxed mt-2">
                  Personalised care led directly by Dr. Neha Gupta (M.P.T Ortho) in Pandeypur, Varanasi.
                </p>
              </div>
              <div className="pt-3 border-t border-[#C94F78]/30 flex items-center gap-2 text-[10px] font-bold text-[#E8A6B8]">
                <span className="w-2 h-2 rounded-full bg-[#C94F78] animate-pulse"></span>
                <span>CONFIDENTIAL & PRIVATE SUITE</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}


