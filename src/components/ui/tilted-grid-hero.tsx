import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';

import cliImg from '../../assets/cli.jpeg';
import phyImg from '../../assets/phy.jpg';
import woImg from '../../assets/wo.jpg';
import skinImg from '../../assets/skin-864x1536.jpg';
import wellnessImg from '../../assets/wellness-1-1024x683.jpg';
import nehaImg from '../../assets/neha.jpeg';
import prizeImg from '../../assets/prize.png';
import campImg from '../../assets/camp.webp';

export interface GalleryItem {
  id?: string | number;
  title: string;
  subtitle?: string;
  category?: string;
  img: string;
  badge?: string;
}

export interface TiltedGridHeroProps {
  title?: string;
  subtitle?: string;
  category?: string;
  items?: GalleryItem[];
  className?: string;
  onImageClick?: (img: string) => void;
}

const defaultItems: GalleryItem[] = [
  {
    id: '1',
    title: 'Clinic Reception & Campus',
    subtitle: 'Modern, hygienic healthcare infrastructure in Pandeypur, Varanasi',
    category: 'Clinic',
    img: cliImg,
    badge: 'Pandeypur Campus'
  },
  {
    id: '2',
    title: 'Musculoskeletal Rehabilitation',
    subtitle: 'Targeted joint mobilization & manual cupping therapy',
    category: 'Rehabilitation',
    img: phyImg,
    badge: 'Cupping & Dry Needling'
  },
  {
    id: '3',
    title: 'Female Pelvic Health Suite',
    subtitle: 'Confidential pelvic floor, antenatal & postnatal care',
    category: 'Women\'s Health',
    img: woImg,
    badge: 'Private Care Suite'
  },
  {
    id: '4',
    title: 'Aesthetic Skin Rejuvenation',
    subtitle: 'Integrative dermatological peels & facial glow therapies',
    category: 'Aesthetics',
    img: skinImg,
    badge: 'Skin Care Division'
  },
  {
    id: '5',
    title: 'Community Spine & Health Camp',
    subtitle: 'Accessible mobility screenings organized across Varanasi',
    category: 'Outreach',
    img: campImg,
    badge: 'Community Screening'
  },
  {
    id: '6',
    title: 'Slimming & Body Shaping',
    subtitle: 'Vacuum cavitation, G-5 massage & deep heat toning',
    category: 'Aesthetics',
    img: wellnessImg,
    badge: 'Body Contouring'
  },
  {
    id: '7',
    title: 'Clinical Director — Dr. Neha Gupta',
    subtitle: 'B.P.T, M.P.T (Ortho), MIAP leading evidence-informed practice',
    category: 'Clinic',
    img: nehaImg,
    badge: '7+ Yrs Clinical Practice'
  },
  {
    id: '8',
    title: 'GAPTCON 2025 National Recognition',
    subtitle: 'Awarded Best Clinician at 2nd National Physio Conference',
    category: 'Clinic',
    img: prizeImg,
    badge: 'National Excellence'
  },
  {
    id: '9',
    title: 'Postnatal Core Recovery',
    subtitle: 'Diastasis recti management & lumbopelvic stabilization',
    category: 'Women\'s Health',
    img: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    badge: 'Postnatal Rehab'
  },
  {
    id: '10',
    title: 'Ultrasonic Inch Loss Therapy',
    subtitle: 'Non-surgical body shaping & localized adipose care',
    category: 'Aesthetics',
    img: 'https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=800&q=80',
    badge: 'Fat Reduction'
  },
  {
    id: '11',
    title: 'Spine & Joint Assessment',
    subtitle: 'Biomechanical gait analysis & ergonomic re-education',
    category: 'Rehabilitation',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    badge: 'Spine Care'
  },
  {
    id: '12',
    title: 'Clinical Sterilization Standards',
    subtitle: 'Medical-grade protocol ensuring 100% patient safety',
    category: 'Clinic',
    img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    badge: 'Hygienic Standards'
  }
];

export function TiltedGridHero({
  title = "Care You Can See. Excellence You Can Trust.",
  subtitle = "Experience Tamanya Health through our curved 3D clinical gallery showcasing our treatment suites, rehabilitation modalities, female pelvic health suite, community health camps, and awards.",
  category = "CURVED 3D CLINICAL GALLERY",
  items = defaultItems,
  className,
  onImageClick,
}: TiltedGridHeroProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleCardClick = (img: string) => {
    if (onImageClick) {
      onImageClick(img);
    } else {
      setSelectedImage(img);
    }
  };

  // Split items into 3 distinct rows for multi-directional motion
  const row1 = items.slice(0, 4);
  const row2 = items.slice(4, 8);
  const row3 = items.length > 8 ? items.slice(8) : items.slice(0, 4);

  // Repeat each row items 4 times to ensure seamless infinite looping
  const tripleRow1 = [...row1, ...row1, ...row1, ...row1];
  const tripleRow2 = [...row2, ...row2, ...row2, ...row2];
  const tripleRow3 = [...row3, ...row3, ...row3, ...row3];

  return (
    <div className={cn("relative overflow-hidden w-full bg-[#FAF7F1] py-16 lg:py-24 border-y border-[#D8D0C3]", className)}>
      
      {/* Background Soft Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#5F6B45]/10 rounded-full blur-[140px]" />
        <div className="absolute -bottom-32 right-10 w-[500px] h-[350px] bg-[#B89A5A]/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10 mb-10 text-center">
        <span className="text-[#5F6B45] uppercase tracking-[0.25em] text-xs font-extrabold block mb-3">
          {category}
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#293225] font-bold tracking-tight leading-tight max-w-4xl mx-auto">
          {title}
        </h2>
        {subtitle && (
          <p className="text-[#252822]/80 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto mt-4">
            {subtitle}
          </p>
        )}
      </div>

      {/* 3D Curved Arch Marquee Stage (Exact reference look) */}
      <div className="relative w-full overflow-hidden py-12">
        {/* Left & Right Edge Fades */}
        <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-[#FAF7F1] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-[#FAF7F1] to-transparent z-20 pointer-events-none" />

        {/* Curved Perspective Container */}
        <div 
          className="w-full flex justify-center items-center py-6"
          style={{
            perspective: '1400px',
            perspectiveOrigin: '50% 30%',
          }}
        >
          {/* Main Arched Row 1 */}
          <div 
            className="w-[110%] flex flex-col items-center justify-center transform-gpu"
            style={{
              transform: 'rotateX(12deg) rotateY(0deg) scale(1.03)',
              transformStyle: 'preserve-3d',
            }}
          >
            <div className="flex overflow-hidden select-none w-full py-4">
              <motion.div 
                className="flex gap-6 sm:gap-8 shrink-0 items-center"
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 35,
                  ease: 'linear',
                }}
              >
                {[...items, ...items, ...items, ...items].map((item, idx) => {
                  return (
                    <motion.div
                      key={`arch-card-${idx}`}
                      whileHover={{ 
                        scale: 1.06, 
                        y: -12, 
                        zIndex: 40,
                        transition: { duration: 0.3, ease: 'easeOut' } 
                      }}
                      onClick={() => handleCardClick(item.img)}
                      className="w-[240px] sm:w-[320px] md:w-[360px] aspect-[3/4] shrink-0 bg-[#293225] rounded-[32px] sm:rounded-[36px] overflow-hidden border-2 border-[#D8D0C3]/80 hover:border-[#B89A5A] shadow-[0_20px_45px_rgba(41,50,37,0.25)] hover:shadow-[0_30px_70px_rgba(184,154,90,0.45)] transition-all duration-500 cursor-pointer group relative flex flex-col justify-between"
                      style={{
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      <div className="w-full h-full relative overflow-hidden bg-[#1D241A]">
                        <img 
                          src={item.img} 
                          alt={item.title} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1D241A] via-transparent to-black/20 opacity-80 group-hover:opacity-40 transition-opacity" />
                        
                        {item.badge && (
                          <span className="absolute top-4 left-4 bg-[#5F6B45]/90 backdrop-blur-md text-[#FAF7F1] text-[10px] uppercase font-bold tracking-widest px-3.5 py-1.5 rounded-full border border-[#B89A5A]/50 shadow-md">
                            {item.badge}
                          </span>
                        )}

                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
                          <span className="bg-[#B89A5A] text-[#293225] px-5 py-2.5 rounded-full font-bold text-xs shadow-2xl tracking-wider uppercase">
                            🔍 View Focus Frame
                          </span>
                        </div>

                        {/* Card Content Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-[#1D241A] via-[#1D241A]/90 to-transparent">
                          <span className="text-[#B89A5A] text-[10px] font-mono font-extrabold block mb-1 uppercase tracking-widest">
                            {item.category || 'Tamanya Clinical Gallery'}
                          </span>
                          <h4 className="font-serif text-lg font-bold text-white mb-1 group-hover:text-[#B89A5A] transition-colors leading-tight">
                            {item.title}
                          </h4>
                          {item.subtitle && (
                            <p className="text-xs text-white/80 font-light leading-relaxed line-clamp-2 mt-1">
                              {item.subtitle}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Secondary Reverse Motion Row for Rich Visual Depth */}
        <div 
          className="w-full flex justify-center items-center -mt-8 opacity-90"
          style={{
            perspective: '1400px',
            perspectiveOrigin: '50% 70%',
          }}
        >
          <div 
            className="w-[110%] flex flex-col items-center justify-center transform-gpu"
            style={{
              transform: 'rotateX(-8deg) rotateY(0deg) scale(0.95)',
              transformStyle: 'preserve-3d',
            }}
          >
            <div className="flex overflow-hidden select-none w-full py-4">
              <motion.div 
                className="flex gap-6 sm:gap-8 shrink-0 items-center"
                animate={{ x: ['-50%', '0%'] }}
                transition={{
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 42,
                  ease: 'linear',
                }}
              >
                {[...items.slice().reverse(), ...items.slice().reverse(), ...items.slice().reverse()].map((item, idx) => (
                  <motion.div
                    key={`arch-row2-${idx}`}
                    whileHover={{ scale: 1.06, y: -10, zIndex: 40 }}
                    onClick={() => handleCardClick(item.img)}
                    className="w-[200px] sm:w-[260px] aspect-[4/5] shrink-0 bg-[#293225] rounded-[28px] overflow-hidden border border-[#D8D0C3]/60 hover:border-[#B89A5A] shadow-lg transition-all duration-500 cursor-pointer group relative"
                  >
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end">
                      <span className="text-[#B89A5A] text-[9px] font-mono font-bold block uppercase tracking-wider">
                        {item.category}
                      </span>
                      <p className="text-white text-xs font-bold font-serif line-clamp-1">
                        {item.title}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Standalone Lightbox Modal when onImageClick prop is not passed */}
      <AnimatePresence>
        {!onImageClick && selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl border-2 border-[#B89A5A]/60 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImage} alt="Enlarged view" className="w-full h-full object-contain" />
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-[#293225] text-[#FAF7F1] hover:text-[#B89A5A] w-11 h-11 rounded-full flex items-center justify-center text-lg font-bold border border-[#B89A5A]/40 shadow-lg transition-all"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default TiltedGridHero;
