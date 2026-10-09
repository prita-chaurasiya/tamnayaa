import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TiltedGridHero } from './ui/tilted-grid-hero';
import cliImg from '../assets/cli.jpeg';
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

export default function InsideTamanya() {
  const [activeTab, setActiveTab] = useState('All');
  const [lightboxImg, setLightboxImg] = useState(null);

  const galleryItems = [
    {
      id: "g1",
      title: "Tamanya Physio & Health Clinic Campus",
      subtitle: "Official clinic campus located at Pandeypur Chauraha, Varanasi",
      category: "Clinic",
      img: gImg,
      badge: "Pandeypur Campus"
    },
    {
      id: "w1",
      title: "Clinical Consultation & Assessment",
      subtitle: "Personalized patient evaluation led by Dr. Neha Gupta (M.P.T Ortho)",
      category: "Clinic",
      img: wa1Img,
      badge: "Clinical Care"
    },
    {
      id: "w2",
      title: "Hands-on Musculoskeletal Rehabilitation",
      subtitle: "Targeted joint mobilization, spine care & physical therapy sessions",
      category: "Rehabilitation",
      img: wa2Img,
      badge: "Physiotherapy Suite"
    },
    {
      id: "w3",
      title: "Specialised Clinical Treatment Setup",
      subtitle: "Advanced electrotherapy, traction & physical recovery equipment",
      category: "Clinic",
      img: wa3Img,
      badge: "Treatment Suite"
    },
    {
      id: "w4",
      title: "Patient Recovery & Exercise Prescription",
      subtitle: "Customized movement prescription for joint, back & neck pain relief",
      category: "Rehabilitation",
      img: wa4Img,
      badge: "Rehab Care"
    },
    {
      id: "w5",
      title: "Clinical Treatment Room & Facilities",
      subtitle: "Private, hygienic consultation & physical therapy rooms",
      category: "Clinic",
      img: wa5Img,
      badge: "Hygienic Setup"
    },
    {
      id: "w6",
      title: "Advanced Electrotherapy Unit",
      subtitle: "IFT, TENS, and ultrasonic systems for deep tissue pain release",
      category: "Rehabilitation",
      img: wa6Img,
      badge: "Spine & Joint Care"
    },
    {
      id: "w7",
      title: "Specialist Care & Patient Evaluation",
      subtitle: "Evidence-informed physiotherapy practice in Pandeypur, Varanasi",
      category: "Clinic",
      img: wa7Img,
      badge: "Specialist Care"
    },
    {
      id: "1",
      title: "Clinic Reception & Campus",
      subtitle: "A modern, hygienic clinical environment designed for focused care",
      category: "Clinic",
      img: cliImg,
      badge: "Pandeypur Campus"
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

  const categories = ['All', 'Clinic', 'Rehabilitation', 'Outreach'];

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
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === cat
                  ? 'bg-[#5F6B45] text-white shadow-md'
                  : 'bg-[#F4EFE6] text-[#293225] hover:bg-[#D8D0C3]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 3D Tilted Grid Interactive Hero */}
      <TiltedGridHero 
        title="Inside Tamanya Health Campus"
        category="3D PERSPECTIVE GALLERY"
        subtitle="Experience our treatment suites, private female pelvic care rooms, electrotherapy units, and community health camps in Varanasi."
        items={filteredItems}
        onImageClick={(img) => setLightboxImg(img)}
      />

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
    </section>
  );
}
