import React from 'react';
import { Link } from 'react-router-dom';

export default function PageHero({ title, category, subtitle, image, pageName }) {
  return (
    <section className="relative w-full min-h-[460px] lg:min-h-[520px] bg-[#17242D] flex items-center pt-36 md:pt-40 lg:pt-44 pb-20 lg:pb-24 overflow-hidden font-sans border-b border-[#B79657]/20">
      
      {/* Background Image with Cinematic Ken Burns & Midnight Navy Gradient Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src={image || "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80"} 
          alt={title}
          className="w-full h-full object-cover object-center animate-ken-burns"
        />
        {/* Subtle Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#17242D]/95 via-[#17242D]/85 to-[#17242D]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17242D] via-transparent to-[#17242D]/40" />
      </div>

      {/* Hero Content Container */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 w-full relative z-10 text-white">
        
        <div className="max-w-3xl">
          {/* Breadcrumb Navigation */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-6 text-[10px] uppercase tracking-[0.2em] font-semibold text-[#F7F4EE]">
            <Link to="/" className="hover:text-[#B79657] transition-colors">HOME</Link>
            <span className="text-[#B79657] font-bold">/</span>
            <span className="text-[#B79657] font-bold tracking-widest">{pageName || title}</span>
          </div>

          {/* Category Eyebrow */}
          {category && (
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[2px] bg-[#B79657] block"></span>
              <span className="text-[#B79657] uppercase tracking-[0.25em] text-[11px] font-bold">
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
            <p className="text-[#F7F4EE]/90 text-base sm:text-lg font-light max-w-2xl leading-relaxed drop-shadow">
              {subtitle}
            </p>
          )}
        </div>

      </div>
    </section>
  );
}

