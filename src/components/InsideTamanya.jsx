import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TiltedGridHero } from './ui/tilted-grid-hero';
import cliImg from '../assets/cli.jpeg';
import phyImg from '../assets/phy.jpg';
import woImg from '../assets/wo.jpg';
import skinImg from '../assets/skin-864x1536.jpg';
import wellnessImg from '../assets/wellness-1-1024x683.jpg';
import nehaImg from '../assets/neha.jpeg';
import prizeImg from '../assets/prize.png';
import campImg from '../assets/camp.webp';

export default function InsideTamanya() {
  const [activeTab, setActiveTab] = useState('All');
  const [lightboxImg, setLightboxImg] = useState(null);

  const galleryItems = [
    {
      id: "1",
      title: "Clinic Reception & Campus",
      subtitle: "A modern, hygienic clinical environment designed for focused, patient-centered care",
      category: "Clinic",
      img: cliImg,
      badge: "Pandeypur Campus"
    },
    {
      id: "2",
      title: "Hands-on Rehabilitation",
      subtitle: "Targeted joint mobilization, myofascial release & cupping therapy sessions",
      category: "Rehabilitation",
      img: phyImg,
      badge: "Advanced Cupping Therapy"
    },
    {
      id: "3",
      title: "Female Pelvic Health Suite",
      subtitle: "Private, compassionate physical therapy for pelvic floor, antenatal & postnatal care",
      category: "Women's Health",
      img: woImg,
      badge: "Women's Health Suite"
    },
    {
      id: "4",
      title: "Advanced Aesthetic Modalities",
      subtitle: "Non-invasive clinical facial rejuvenation, glow therapies & acne management",
      category: "Aesthetics",
      img: skinImg,
      badge: "Clinical Skin Care"
    },
    {
      id: "5",
      title: "Community Health & Mobility Camp",
      subtitle: "Free posture & spine screening workshops organized across Varanasi",
      category: "Outreach",
      img: campImg,
      badge: "Community Screening"
    },
    {
      id: "6",
      title: "Slimming & Body Shaping Suite",
      subtitle: "Vacuum cavitation, G-5 massage & deep heat therapy for inch loss and toning",
      category: "Aesthetics",
      img: wellnessImg,
      badge: "Body Contouring"
    },
    {
      id: "7",
      title: "Clinical Leadership",
      subtitle: "Led by Dr. Neha Gupta (PT) M.P.T (Ortho), MIAP with 7+ years practice",
      category: "Clinic",
      img: nehaImg,
      badge: "7+ Yrs Clinical Practice"
    },
    {
      id: "8",
      title: "GAPTCON 2025 National Recognition",
      subtitle: "Awarded Best Clinician at the 2nd National Physiotherapy Conference in Gurgaon",
      category: "Clinic",
      img: prizeImg,
      badge: "National Excellence"
    }
  ];

  const categories = ['All', 'Clinic', 'Rehabilitation', 'Women\'s Health', 'Aesthetics', 'Outreach'];

  const filteredItems = activeTab === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <section id="gallery" className="relative font-sans scroll-mt-28 overflow-hidden">
      
      {/* Category Filter Controls */}
      <div className="bg-[#FAF7F1] pt-12 px-6 lg:px-12 max-w-[1600px] mx-auto">
        <div className="flex flex-wrap items-center gap-2 border-b border-[#D8D0C3] pb-4">
          <span className="text-xs font-bold text-[#5F6B45] uppercase tracking-widest mr-4 hidden sm:inline-block">
            FILTER GALLERY:
          </span>
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(cat)}
              className={`relative px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                activeTab === cat
                  ? 'bg-[#5F6B45] text-[#FAF7F1] shadow-md border border-[#B89A5A]/30 scale-105'
                  : 'bg-[#F4EFE6] text-[#293225] hover:bg-[#E8ECDF] border border-[#D8D0C3]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Curved 3D Tilted Grid Hero Gallery Component */}
      <TiltedGridHero 
        title="Inside Tamanya Health"
        category="CURVED 3D CLINICAL GALLERY"
        subtitle="Explore real moments from our clinic campus in Pandeypur, Varanasi—including our treatment suites, advanced rehabilitation modalities, female pelvic health suite, community health camps, and awards."
        items={filteredItems.length > 0 ? filteredItems : galleryItems}
        onImageClick={(img) => setLightboxImg(img)}
      />

      {/* Lightbox Modal with AnimatePresence */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setLightboxImg(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl border-2 border-[#B89A5A]/60 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={lightboxImg} alt="Enlarged gallery view" className="w-full h-full object-contain" />
              <button 
                onClick={() => setLightboxImg(null)}
                className="absolute top-4 right-4 bg-[#293225] text-[#FAF7F1] hover:text-[#B89A5A] w-11 h-11 rounded-full flex items-center justify-center text-lg font-bold border border-[#B89A5A]/40 shadow-lg transition-all"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

