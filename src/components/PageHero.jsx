import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function PageHero({ title, category, subtitle, image, pageName, ctaText = "BOOK AN APPOINTMENT", ctaLink = "/book-appointment", secondaryCtaText, secondaryCtaLink, floatBadgeText = "PREMIUM CLINICAL CARE", floatBadgeValue = "7+ Yrs Expertise" }) {
  return (
    <section className="relative w-full min-h-[480px] lg:min-h-[520px] bg-[#F4EFE6] flex items-center pt-36 md:pt-40 lg:pt-44 pb-16 lg:pb-20 overflow-hidden font-sans border-b border-[#D8D0C3]">
      
      {/* Background Image with Cinematic Ken Burns & Linen Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img 
          initial={{ scale: 1.08, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          src={image || "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80"} 
          alt={title}
          className="w-full h-full object-cover object-center animate-ken-burns"
        />
        {/* Dark Olive & Luminous Translucent Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#293225]/90 via-[#293225]/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#293225]/80 via-transparent to-black/40" />
      </div>

      {/* Hero Content Container */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 w-full relative z-10 text-[#FAF7F1]">
        
        <div className="max-w-3xl">
          {/* Breadcrumb Navigation */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#293225]/80 border border-[#D8D0C3]/30 backdrop-blur-md mb-6 text-[10px] uppercase tracking-[0.2em] font-semibold text-[#FAF7F1] shadow-sm"
          >
            <Link to="/" className="hover:text-[#B89A5A] transition-colors">HOME</Link>
            <span className="text-[#B89A5A] font-bold">/</span>
            <span className="text-[#B89A5A] font-bold tracking-widest">{pageName || title}</span>
          </motion.div>

          {/* Category Eyebrow */}
          {category && (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="w-6 h-[2px] bg-[#B89A5A] block"></span>
              <span className="text-[#B89A5A] uppercase tracking-[0.25em] text-[11px] font-extrabold">
                {category}
              </span>
            </motion.div>
          )}

          {/* Main Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF7F1] mb-6 leading-[1.1] drop-shadow-md"
          >
            {title}
          </motion.h1>

          {/* Subtitle / Description */}
          {subtitle && (
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#FAF7F1]/90 text-base sm:text-lg font-light max-w-2xl leading-relaxed mb-8 drop-shadow"
            >
              {subtitle}
            </motion.p>
          )}

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link 
                to={ctaLink} 
                className="bg-[#B89A5A] hover:bg-[#a3864c] text-[#293225] font-extrabold px-8 py-3.5 rounded-full text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_4px_20px_rgba(184,154,90,0.45)] hover:shadow-[0_6px_30px_rgba(184,154,90,0.7)] border border-white/40 block"
              >
                {ctaText}
              </Link>
            </motion.div>
            
            {secondaryCtaText && secondaryCtaLink && (
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link 
                  to={secondaryCtaLink} 
                  className="bg-[#293225]/80 hover:bg-[#293225] text-[#FAF7F1] border border-[#D8D0C3]/40 font-semibold px-8 py-3.5 rounded-full text-xs uppercase tracking-widest backdrop-blur-md transition-all duration-300 shadow-sm block"
                >
                  {secondaryCtaText}
                </Link>
              </motion.div>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
}

