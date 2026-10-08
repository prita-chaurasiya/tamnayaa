import React from 'react';
import { Link } from 'react-router-dom';

export default function PageHero({ title, category, subtitle, image, pageName, ctaText = "BOOK AN APPOINTMENT", ctaLink = "/book-appointment", secondaryCtaText, secondaryCtaLink, floatBadgeText = "PREMIUM CLINICAL CARE", floatBadgeValue = "7+ Yrs Expertise" }) {
  return (
    <section className="relative w-full min-h-[480px] lg:min-h-[520px] bg-[#FFF9F6] flex items-center pt-36 md:pt-40 lg:pt-44 pb-16 lg:pb-20 overflow-hidden font-sans border-b border-[#F6DCE4]">
      
      {/* Background Image with Cinematic Ken Burns & Lighter Soft Pink/Ivory Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src={image || "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80"} 
          alt={title}
          className="w-full h-full object-cover object-center animate-ken-burns"
        />
        {/* Soft, Light Luxury Blush & Ivory Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFF9F6]/95 via-[#FFF9F6]/85 to-[#F6DCE4]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFF9F6] via-transparent to-[#F6DCE4]/40" />
      </div>

      {/* Hero Content Container */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 w-full relative z-10 text-[#351D2B]">
        
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 max-w-3xl">
            {/* Breadcrumb Navigation */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 border border-[#F6DCE4] backdrop-blur-md mb-6 text-[10px] uppercase tracking-[0.2em] font-semibold text-[#351D2B] shadow-sm">
              <Link to="/" className="hover:text-[#C94F78] transition-colors">HOME</Link>
              <span className="text-[#C94F78] font-bold">/</span>
              <span className="text-[#9E3D63] font-bold tracking-widest">{pageName || title}</span>
            </div>

            {/* Category Eyebrow */}
            {category && (
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-[2px] bg-[#C94F78] block"></span>
                <span className="text-[#C94F78] uppercase tracking-[0.25em] text-[11px] font-bold">
                  {category}
                </span>
              </div>
            )}

            {/* Main Title */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#351D2B] mb-6 leading-[1.1]">
              {title}
            </h1>

            {/* Subtitle / Description */}
            {subtitle && (
              <p className="text-[#351D2B]/85 text-base sm:text-lg font-light max-w-2xl leading-relaxed mb-8">
                {subtitle}
              </p>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link 
                to={ctaLink} 
                className="bg-gradient-to-r from-[#C94F78] via-[#9E3D63] to-[#7D294B] text-white font-extrabold px-8 py-3.5 rounded-full text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_4px_20px_rgba(201,79,120,0.35)] hover:shadow-[0_6px_30px_rgba(201,79,120,0.5)] hover:scale-[1.03] active:scale-100 border border-[#E8A6B8]/40"
              >
                {ctaText}
              </Link>
              
              {secondaryCtaText && secondaryCtaLink && (
                <Link 
                  to={secondaryCtaLink} 
                  className="bg-white/80 hover:bg-white text-[#351D2B] border border-[#F6DCE4] font-semibold px-8 py-3.5 rounded-full text-xs uppercase tracking-widest backdrop-blur-md transition-all duration-300 hover:scale-[1.03] shadow-sm"
                >
                  {secondaryCtaText}
                </Link>
              )}
            </div>

          </div>

          {/* Floating Information Card with 3D Depth */}
          <div className="lg:col-span-4 hidden lg:flex justify-end">
            <div className="bg-white/90 backdrop-blur-xl border border-[#F6DCE4] p-6 rounded-[24px] shadow-[0_20px_40px_rgba(201,79,120,0.12)] transform hover:-translate-y-2 transition-all duration-500 max-w-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C94F78] to-[#7D294B] flex items-center justify-center text-white shadow-md">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
                </svg>
              </div>
              <div>
                <span className="text-[#C94F78] text-[10px] uppercase font-extrabold tracking-widest block">{floatBadgeText}</span>
                <p className="font-serif text-xl font-bold text-[#351D2B] mt-0.5">{floatBadgeValue}</p>
                <p className="text-xs text-[#351D2B]/80 font-light leading-relaxed mt-2">
                  Personalised care led directly by Dr. Neha Gupta (M.P.T Ortho) in Pandeypur, Varanasi.
                </p>
              </div>
              <div className="pt-3 border-t border-[#F6DCE4] flex items-center gap-2 text-[10px] font-bold text-[#9E3D63]">
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


