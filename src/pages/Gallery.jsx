import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import { Link } from 'react-router-dom';
import { PageTransition, FadeIn, TextReveal, StaggerContainer, StaggerItem, FloatElement } from '../components/MotionWrappers';
import { TiltedGridHero } from '../components/ui/tilted-grid-hero';

import cliImg from '../assets/cli.jpeg';
import phyImg from '../assets/conditions/back_pain.jpg';
import woImg from '../assets/conditions/pcod_pcos.jpg';
import skinImg from '../assets/conditions/psoriasis.jpg';
import wellnessImg from '../assets/conditions/cavitation.jpg';
import nehaImg from '../assets/neha.jpeg';
import prizeImg from '../assets/prize.png';
import campImg from '../assets/camp.webp';

import gImg from '../assets/gallery/g.png';
import wa1Img from '../assets/gallery/wa1.jpeg';
import wa2Img from '../assets/gallery/wa2.jpeg';
import wa3Img from '../assets/gallery/wa3.jpeg';
import wa4Img from '../assets/gallery/wa4.jpeg';
import wa5Img from '../assets/gallery/wa5.jpeg';
import wa6Img from '../assets/gallery/wa6.jpeg';
import wa7Img from '../assets/gallery/wa7.jpeg';

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('ALL');
  const [lightboxImg, setLightboxImg] = useState(null);

  const galleryItems = [
    {
      id: "g1",
      num: "01",
      title: "Tamanya Physio & Health Clinic Campus",
      subtitle: "Official clinic infrastructure located at Pandeypur Chauraha, Varanasi.",
      category: "CLINIC",
      img: gImg,
      badge: "Pandeypur Campus"
    },
    {
      id: "w1",
      num: "02",
      title: "Patient Consultation & Clinical Assessment",
      subtitle: "Comprehensive physical assessment led personally by Dr. Neha Gupta.",
      category: "CLINIC",
      img: wa1Img,
      badge: "Clinical Care"
    },
    {
      id: "w2",
      num: "03",
      title: "Advanced Physical Rehabilitation Session",
      subtitle: "Hands-on joint mobilization and physical rehabilitation exercises.",
      category: "REHABILITATION",
      img: wa2Img,
      badge: "Physiotherapy Suite"
    },
    {
      id: "w3",
      num: "04",
      title: "Specialised Clinical Treatment Setup",
      subtitle: "Modern equipment setup for electrotherapy, traction, and physical recovery.",
      category: "CLINIC",
      img: wa3Img,
      badge: "Treatment Suite"
    },
    {
      id: "w4",
      num: "05",
      title: "Patient Recovery & Exercise Therapy",
      subtitle: "Customized exercise prescription for spine, posture, and joint health.",
      category: "REHABILITATION",
      img: wa4Img,
      badge: "Rehab Care"
    },
    {
      id: "w5",
      num: "06",
      title: "Clinical Treatment Room & Facilities",
      subtitle: "Private, hygienic consultation and therapy spaces for patients.",
      category: "CLINIC",
      img: wa5Img,
      badge: "Hygienic Setup"
    },
    {
      id: "w6",
      num: "07",
      title: "Advanced Spine & Electrotherapy Unit",
      subtitle: "IFT, TENS, and ultrasonic therapy systems for acute pain relief.",
      category: "REHABILITATION",
      img: wa6Img,
      badge: "Spine & Joint Care"
    },
    {
      id: "w7",
      num: "08",
      title: "Specialist Care & Patient Evaluation",
      subtitle: "Evidence-based rehabilitation practice in Pandeypur, Varanasi.",
      category: "CLINIC",
      img: wa7Img,
      badge: "Specialist Care"
    },
    {
      id: "1",
      num: "09",
      title: "Clinic Campus Overview",
      subtitle: "Conveniently located opposite Indian Oil Petrol Pump, Pandeypur Chauraha.",
      category: "CLINIC",
      img: cliImg,
      badge: "Varanasi Clinic"
    },
    {
      id: "3",
      num: "10",
      title: "Female Pelvic Floor Health Suite",
      subtitle: "Private, compassionate physical therapy for antenatal, postnatal, and pelvic floor care.",
      category: "REHABILITATION",
      img: woImg,
      badge: "Women's Health Suite"
    },
    {
      id: "4",
      num: "11",
      title: "Specialised Skin Psoriasis & Scar Suite",
      subtitle: "Dermatological clinical protocols for skin care, psoriasis flare relief, and scar reduction.",
      category: "AESTHETICS",
      img: skinImg,
      badge: "Skin Care Suite"
    },
    {
      id: "5",
      num: "12",
      title: "Community Health & Mobility Camp",
      subtitle: "Free spine and joint screening camps organized for residents across Varanasi.",
      category: "OUTREACH",
      img: campImg,
      badge: "Community Screening"
    },
    {
      id: "6",
      num: "13",
      title: "Slimming & Body Contouring Suite",
      subtitle: "Vacuum cavitation, G-5 massage, and deep heat therapy for inch loss and body shaping.",
      category: "AESTHETICS",
      img: wellnessImg,
      badge: "Body Contouring"
    },
    {
      id: "7",
      num: "14",
      title: "Clinical Director — Dr. Neha Gupta",
      subtitle: "B.P.T, M.P.T (Ortho), MIAP leading evidence-based physiotherapy practice.",
      category: "CLINIC",
      img: nehaImg,
      badge: "7+ Yrs Clinical Practice"
    },
    {
      id: "8",
      num: "15",
      title: "GAPTCON 2025 National Recognition",
      subtitle: "Awarded Best Clinician at the 2nd National Physiotherapy Conference in Gurgaon.",
      category: "CLINIC",
      img: prizeImg,
      badge: "National Excellence"
    }
  ];

  const categories = ['ALL', 'CLINIC', 'REHABILITATION', 'AESTHETICS', 'OUTREACH'];

  const filteredItems = activeTab === 'ALL'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <PageTransition className="bg-[#F4EFE6] text-[#252822] min-h-screen font-sans">
      
      {/* Page Hero Banner */}
      <PageHero 
        title="Clinical Gallery & Facilities"
        category="INSIDE TAMANYA HEALTH"
        subtitle="Explore real photography from our clinic campus in Pandeypur, Varanasi—featuring our treatment suites, rehabilitation modalities, female pelvic health suite, community health camps, and awards."
        image={cliImg}
        pageName="GALLERY"
      />

      {/* 3D Curved Tilted Grid Hero Gallery Component */}
      <TiltedGridHero 
        title="Care You Can See. Excellence You Can Trust."
        category="CURVED 3D CLINICAL GALLERY"
        subtitle="Explore our 3D perspective gallery showing our Varanasi clinic campus, rehabilitation suites, female pelvic health rooms, community outreach camps, and clinician awards."
        items={filteredItems}
        onImageClick={(img) => setLightboxImg(img)}
      />

      {/* Main Filterable Gallery Section */}
      <section className="py-20 lg:py-28 px-6 lg:px-12 bg-[#FAF7F1] border-b border-[#D8D0C3] relative overflow-hidden">
        
        {/* Oversized Background Moving Typography */}
        <div className="absolute top-10 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03] select-none">
          <FloatElement yOffset={15} duration={12} className="block">
            <span className="font-serif text-[180px] lg:text-[240px] font-bold text-[#293225] whitespace-nowrap block tracking-widest leading-none">
              GALLERY CARE RECOVERY
            </span>
          </FloatElement>
        </div>

        <div className="max-w-[1600px] mx-auto relative z-10">
          
          {/* Section Header */}
          <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-[#5F6B45] uppercase tracking-[0.25em] text-xs font-extrabold block mb-2">PORTFOLIO & CAMPUS</span>
              <TextReveal className="font-serif text-3xl sm:text-5xl text-[#293225] font-bold tracking-tight">
                Filtered Clinical Portfolio
              </TextReveal>
            </div>
            
            <div className="text-sm font-mono text-[#5F6B45] font-bold uppercase tracking-widest">
              VARANASI CLINIC CAMPUS • SINCE 2019
            </div>
          </FadeIn>

          {/* Filter Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12 border-b border-[#D8D0C3] pb-6">
            {categories.map((cat, i) => (
              <motion.button
                key={i}
                whileTap={{ scale: 0.96 }}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                  activeTab === cat
                    ? 'bg-[#5F6B45] text-[#FAF7F1] shadow-md border border-[#B89A5A]/40 scale-105'
                    : 'bg-[#F4EFE6] text-[#293225] hover:bg-[#E8ECDF] border border-[#D8D0C3]'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {/* 3D Asymmetrical Editorial Gallery Grid with Framer Motion Layout */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, i) => (
                <motion.div 
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  onClick={() => setLightboxImg(item.img)}
                  className="bg-[#293225] rounded-[24px] overflow-hidden border-2 border-[#D8D0C3] hover:border-[#B89A5A] shadow-[0_15px_35px_rgba(41,50,37,0.15)] hover:shadow-[0_25px_60px_rgba(184,154,90,0.35)] transition-all duration-500 group cursor-pointer flex flex-col justify-between h-full"
                >
                  {/* Image Container with Ken Burns & Lightbox Hover */}
                  <div className="aspect-[4/3] w-full relative overflow-hidden bg-black">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#293225] via-transparent to-black/30 opacity-80 group-hover:opacity-60 transition-opacity" />
                    
                    {/* Category Badge */}
                    <span className="absolute top-4 left-4 bg-[#5F6B45] text-[#FAF7F1] text-[9px] uppercase font-bold tracking-widest px-3.5 py-1 rounded-full border border-[#B89A5A]/40 shadow-md">
                      {item.badge}
                    </span>

                    {/* Lightbox Icon Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
                      <span className="w-12 h-12 rounded-full bg-[#B89A5A] text-[#293225] font-bold text-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                        🔍
                      </span>
                    </div>
                  </div>

                  {/* Card Info Box */}
                  <div className="p-6 flex-grow flex flex-col justify-between bg-[#293225]">
                    <div>
                      <span className="text-xs font-mono font-bold text-[#B89A5A] block mb-1">
                        {item.num}. {item.category}
                      </span>
                      <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#B89A5A] transition-colors leading-snug mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[11px] text-[#A8B09A] font-light leading-relaxed mb-4">
                        {item.subtitle}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] uppercase font-extrabold tracking-widest text-[#B89A5A]">
                      <span>VIEW FULL IMAGE</span>
                      <span className="group-hover:translate-x-1.5 transition-transform">→</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImg(null)}
            className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-5xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#B89A5A]"
            >
              <img src={lightboxImg} alt="Enlarged View" className="w-full h-full object-contain max-h-[85vh]" />
              <button
                onClick={() => setLightboxImg(null)}
                className="absolute top-4 right-4 bg-[#293225] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg border border-[#B89A5A] hover:bg-[#5F6B45] transition-colors"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTASection />
    </PageTransition>
  );
}
