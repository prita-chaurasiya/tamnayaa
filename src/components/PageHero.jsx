import React from 'react';
import { Link } from 'react-router-dom';

export default function PageHero({ title, category, subtitle, image, pageName, ctaText = "BOOK AN APPOINTMENT", ctaLink = "/book-appointment", secondaryCtaText, secondaryCtaLink, floatBadgeText = "PREMIUM CLINICAL CARE", floatBadgeValue = "7+ Yrs Expertise" }) {
  return (
    <section className="relative w-full min-h-[480px] lg:min-h-[520px] bg-[#F4EFE6] flex items-center pt-36 md:pt-40 lg:pt-44 pb-16 lg:pb-20 overflow-hidden font-sans border-b border-[#D8D0C3]">
      
      {/* Background Image with Cinematic Ken Burns & Linen Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src={image || "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80"} 
          alt={title}
          className="w-full h-full object-cover object-center animate-ken-burns"
        />
        {/* Dark Olive & Luminous Translucent Overlay — Clear Image Visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#293225]/90 via-[#293225]/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#293225]/80 via-transparent to-black/40" />
      </div>

      {/* Hero Content Container */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 w-full relative z-10 text-[#FAF7F1]">
        
        <div className="max-w-3xl">
          {/* Breadcrumb Navigation */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#293225]/80 border border-[#D8D0C3]/30 backdrop-blur-md mb-6 text-[10px] uppercase tracking-[0.2em] font-semibold text-[#FAF7F1] shadow-sm">
            <Link to="/" className="hover:text-[#B89A5A] transition-colors">HOME</Link>
            <span className="text-[#B89A5A] font-bold">/</span>
            <span className="text-[#B89A5A] font-bold tracking-widest">{pageName || title}</span>
          </div>

          {/* Category Eyebrow */}
          {category && (
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[2px] bg-[#B89A5A] block"></span>
              <span className="text-[#B89A5A] uppercase tracking-[0.25em] text-[11px] font-extrabold">
                {category}
              </span>
            </div>
          )}

          {/* Main Title */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF7F1] mb-6 leading-[1.1] drop-shadow-md">
            {title}
          </h1>

          {/* Subtitle / Description */}
          {subtitle && (
            <p className="text-[#FAF7F1]/90 text-base sm:text-lg font-light max-w-2xl leading-relaxed mb-8 drop-shadow">
              {subtitle}
            </p>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Link 
              to={ctaLink} 
              className="bg-[#B89A5A] hover:bg-[#a3864c] text-[#293225] font-extrabold px-8 py-3.5 rounded-full text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_4px_20px_rgba(184,154,90,0.45)] hover:shadow-[0_6px_30px_rgba(184,154,90,0.7)] hover:scale-[1.03] active:scale-100 border border-white/40"
            >
              {ctaText}
            </Link>
            
            {secondaryCtaText && secondaryCtaLink && (
              <Link 
                to={secondaryCtaLink} 
                className="bg-[#293225]/80 hover:bg-[#293225] text-[#FAF7F1] border border-[#D8D0C3]/40 font-semibold px-8 py-3.5 rounded-full text-xs uppercase tracking-widest backdrop-blur-md transition-all duration-300 hover:scale-[1.03] shadow-sm"
              >
                {secondaryCtaText}
              </Link>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
