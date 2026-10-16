import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { TiltedGridHero } from './ui/tilted-grid-hero';

// Clinical & Campus Assets
import cliImg from '../assets/cli.jpeg';
import nehaImg from '../assets/neha.jpeg';
import prizeImg from '../assets/prize.png';
import gImg from '../assets/gallery/g.png';
import wa1Img from '../assets/gallery/wa1.jpeg';
import wa2Img from '../assets/gallery/wa2.jpeg';
import wa3Img from '../assets/gallery/wa3.jpeg';
import wa4Img from '../assets/gallery/wa4.jpeg';
import wa5Img from '../assets/gallery/wa5.jpeg';
import wa6Img from '../assets/gallery/wa6.jpeg';
import wa7Img from '../assets/gallery/wa7.jpeg';

// Authentic Rehabilitation & Specialised Care Assets
import phyImg from '../assets/phy.jpg';
import woImg from '../assets/wo.jpg';
import backImg from '../assets/conditions/back_pain.jpg';
import kneeImg from '../assets/conditions/knee_arthritis.jpg';
import neckImg from '../assets/conditions/neck_pain.jpg';
import strokeImg from '../assets/conditions/stroke_paralysis.jpg';

// Authentic Community Health Camp Outreach Assets
import campImg from '../assets/camp.webp';
import camp1Img from '../assets/WhatsApp Image 2026-10-08 at 9.18.29 PM.jpeg';
import camp2Img from '../assets/WhatsApp Image 2026-10-08 at 9.15.12 PM.jpeg';
import camp3Img from '../assets/WhatsApp Image 2026-10-08 at 9.14.21 PM.jpeg';
import camp4Img from '../assets/WhatsApp Image 2026-10-08 at 9.18.33 PM.jpeg';
import camp5Img from '../assets/WhatsApp Image 2026-10-08 at 9.15.06 PM.jpeg';

export default function InsideTamanya() {
  const [activeTab, setActiveTab] = useState('All');
  const [lightboxImg, setLightboxImg] = useState(null);
  const navigate = useNavigate();

  const categories = [
    {
      id: 'All',
      label: 'ALL',
      badge: 'Full Campus',
      path: '/gallery',
      pageTitle: 'Inside Tamanya Physio and Health Clinic Campus',
      subtitle: 'Experience our treatment suites, private female pelvic care rooms, electrotherapy units, and community health camps in Varanasi.',
      actionText: 'Explore Full Gallery Page',
      countBadge: '22 Photos'
    },
    {
      id: 'Clinic',
      label: 'CLINIC',
      badge: 'Pandeypur Campus',
      path: '/about',
      pageTitle: 'Official Clinical Setup & Consultation Suites',
      subtitle: 'Tour our hygienic clinical infrastructure, consultation rooms, and evidence-informed practice at Pandeypur Chauraha, Varanasi.',
      actionText: 'Explore Clinic & Campus Page',
      countBadge: '8 Photos'
    },
    {
      id: 'Rehabilitation',
      label: 'REHABILITATION',
      badge: 'Physio & Spine Suite',
      path: '/physiotherapy',
      pageTitle: 'Hands-on Musculoskeletal & Spine Rehabilitation',
      subtitle: 'Targeted joint mobilization, spine decompression, advanced electrotherapy (IFT, TENS, US), and customized recovery exercises.',
      actionText: 'Explore Physiotherapy Page',
      countBadge: '8 Photos'
    },
    {
      id: 'Outreach',
      label: 'OUTREACH',
      badge: 'Community Screening',
      path: '/health-camp',
      pageTitle: 'Community Health Camps & Posture Screening',
      subtitle: 'Free spine screening drives, posture workshops, and mobility awareness camps organized for residents across Varanasi.',
      actionText: 'Explore Health Camps Page',
      countBadge: '6 Photos'
    }
  ];

  const galleryItems = [
    // CLINIC ITEMS
    {
      id: "g1",
      title: "Tamanya Physio & Health Clinic Campus",
      subtitle: "Official clinic campus located at Pandeypur Chauraha, Varanasi",
      category: "Clinic",
      img: gImg,
      badge: "Pandeypur Campus",
      pagePath: "/about"
    },
    {
      id: "w1",
      title: "Clinical Consultation & Assessment",
      subtitle: "Personalized patient evaluation led by Dr. Neha Gupta (M.P.T Ortho)",
      category: "Clinic",
      img: wa1Img,
      badge: "Clinical Care",
      pagePath: "/about"
    },
    {
      id: "w3",
      title: "Specialised Clinical Treatment Setup",
      subtitle: "Advanced electrotherapy, traction & physical recovery equipment",
      category: "Clinic",
      img: wa3Img,
      badge: "Treatment Suite",
      pagePath: "/about"
    },
    {
      id: "w5",
      title: "Clinical Treatment Room & Facilities",
      subtitle: "Private, hygienic consultation & physical therapy rooms",
      category: "Clinic",
      img: wa5Img,
      badge: "Hygienic Setup",
      pagePath: "/about"
    },
    {
      id: "w7",
      title: "Specialist Care & Patient Evaluation",
      subtitle: "Evidence-informed physiotherapy practice in Pandeypur, Varanasi",
      category: "Clinic",
      img: wa7Img,
      badge: "Specialist Care",
      pagePath: "/about"
    },
    {
      id: "1",
      title: "Clinic Reception & Campus",
      subtitle: "A modern, hygienic clinical environment designed for focused care",
      category: "Clinic",
      img: cliImg,
      badge: "Pandeypur Campus",
      pagePath: "/about"
    },
    {
      id: "7",
      title: "Clinical Leadership",
      subtitle: "Led by Dr. Neha Gupta (PT), Founder / Director (MPT Ortho, BPT)",
      category: "Clinic",
      img: nehaImg,
      badge: "7+ Yrs Clinical Practice",
      pagePath: "/about"
    },
    {
      id: "8",
      title: "GAPTCON 2025 National Recognition",
      subtitle: "Awarded Best Clinician at the 2nd National Physiotherapy Conference in Gurgaon",
      category: "Clinic",
      img: prizeImg,
      badge: "National Excellence",
      pagePath: "/about"
    },

    // REHABILITATION ITEMS
    {
      id: "w2",
      title: "Hands-on Musculoskeletal Rehabilitation",
      subtitle: "Targeted joint mobilization, spine care & physical therapy sessions",
      category: "Rehabilitation",
      img: wa2Img,
      badge: "Physiotherapy Suite",
      pagePath: "/physiotherapy"
    },
    {
      id: "w4",
      title: "Patient Recovery & Exercise Prescription",
      subtitle: "Customized movement prescription for joint, back & neck pain relief",
      category: "Rehabilitation",
      img: wa4Img,
      badge: "Rehab Care",
      pagePath: "/physiotherapy"
    },
    {
      id: "w6",
      title: "Advanced Electrotherapy Unit",
      subtitle: "IFT, TENS, and ultrasonic systems for deep tissue pain release",
      category: "Rehabilitation",
      img: wa6Img,
      badge: "Spine & Joint Care",
      pagePath: "/physiotherapy"
    },
    {
      id: "r1",
      title: "Cupping & Joint Mobilization Suite",
      subtitle: "Targeted negative pressure therapy & therapeutic decompression",
      category: "Rehabilitation",
      img: phyImg,
      badge: "Cupping & Needling",
      pagePath: "/physiotherapy"
    },
    {
      id: "r2",
      title: "Spine Decompression & Sciatica Care",
      subtitle: "Lumbar traction and targeted nerve root pain relief protocols",
      category: "Rehabilitation",
      img: backImg,
      badge: "Spine Decompression",
      pagePath: "/physiotherapy"
    },
    {
      id: "r3",
      title: "Knee Arthritis & Joint Therapy Suite",
      subtitle: "Mobilization, quadriceps strengthening & non-surgical pain reduction",
      category: "Rehabilitation",
      img: kneeImg,
      badge: "Joint Rehabilitation",
      pagePath: "/physiotherapy"
    },
    {
      id: "r4",
      title: "Cervical Spine & Postural Realignment",
      subtitle: "Ergonomic decompression for chronic neck strain and tech-neck syndrome",
      category: "Rehabilitation",
      img: neckImg,
      badge: "Cervical Care",
      pagePath: "/physiotherapy"
    },
    {
      id: "r5",
      title: "Paralysis & Neuro-Rehabilitation Care",
      subtitle: "Neurodevelopmental treatment (NDT) for motor relearning and balance",
      category: "Rehabilitation",
      img: strokeImg,
      badge: "Neuro Recovery",
      pagePath: "/physiotherapy"
    },

    // OUTREACH ITEMS (Community Camps across Varanasi)
    {
      id: "5",
      title: "Community Health & Mobility Camp",
      subtitle: "Free posture & spine screening workshops organized across Varanasi",
      category: "Outreach",
      img: campImg,
      badge: "Community Screening",
      pagePath: "/health-camp"
    },
    {
      id: "o1",
      title: "Varanasi Posture & Spine Screening Drive",
      subtitle: "Free clinical evaluations providing early detection of disc & joint concerns",
      category: "Outreach",
      img: camp1Img,
      badge: "Public Screening",
      pagePath: "/health-camp"
    },
    {
      id: "o2",
      title: "Community Health Outreach Camp Banner",
      subtitle: "Dedicated mobile consultation setup reaching underserved communities",
      category: "Outreach",
      img: camp2Img,
      badge: "Community Care",
      pagePath: "/health-camp"
    },
    {
      id: "o3",
      title: "Senior Citizen Joint Health Consultation",
      subtitle: "Hands-on mobility advice, knee arthritis guidance, and home exercise plans",
      category: "Outreach",
      img: camp3Img,
      badge: "Senior Mobility",
      pagePath: "/health-camp"
    },
    {
      id: "o4",
      title: "Ergonomic & Spine Workshop in Varanasi",
      subtitle: "Teaching preventative spinal biomechanics to working professionals and families",
      category: "Outreach",
      img: camp4Img,
      badge: "Posture Workshop",
      pagePath: "/health-camp"
    },
    {
      id: "o5",
      title: "Community Health Awareness Initiative",
      subtitle: "Expanding evidence-based physiotherapy awareness across Uttar Pradesh",
      category: "Outreach",
      img: camp5Img,
      badge: "Awareness Drive",
      pagePath: "/health-camp"
    }
  ];

  const currentCategory = categories.find(c => c.id === activeTab) || categories[0];

  const filteredItems = activeTab === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  const handleTabClick = (cat) => {
    // If clicking on active tab or on touch device, navigate to the dedicated page
    navigate(cat.path);
  };

  return (
    <section id="gallery" className="relative font-sans scroll-mt-28 overflow-hidden bg-[#FAF7F1]">
      
      {/* Category Filter Controls Bar */}
      <div className="pt-10 sm:pt-14 px-4 sm:px-6 lg:px-12 max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#D8D0C3] pb-5">
          
          {/* Filter Pills with Hover Preview & Clean Responsive Wrap */}
          <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto sm:overflow-visible sm:flex-wrap [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden py-1 -mx-2 px-2 sm:mx-0 sm:px-0">
            <span className="text-[11px] font-extrabold text-[#5F6B45] uppercase tracking-widest mr-2 shrink-0 hidden sm:inline-block">
              FILTER GALLERY:
            </span>

            {categories.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onMouseEnter={() => setActiveTab(cat.id)}
                  onClick={() => handleTabClick(cat)}
                  className={`px-3.5 sm:px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shrink-0 flex items-center gap-2 cursor-pointer relative ${
                    isActive
                      ? 'bg-[#5F6B45] text-white shadow-md shadow-[#5F6B45]/30 scale-[1.02] border border-[#B89A5A]/50'
                      : 'bg-[#F4EFE6] text-[#293225] hover:bg-[#E8ECDF] hover:text-[#5F6B45] border border-[#D8D0C3]/80'
                  }`}
                  title={`Hover to preview, Click to open ${cat.label} page`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-mono font-semibold transition-colors ${
                    isActive ? 'bg-[#293225] text-[#B89A5A]' : 'bg-[#D8D0C3]/50 text-[#5F6B45]'
                  }`}>
                    {cat.badge}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Interactive Direct Page Link Button for Active Filter */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-center">
            <span className="text-[10px] uppercase font-mono tracking-wider text-[#5F6B45] hidden lg:inline-block">
              Hover to preview • Click to visit
            </span>
            <Link
              to={currentCategory.path}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#293225] hover:bg-[#5F6B45] text-[#FAF7F1] hover:text-white border border-[#B89A5A]/60 text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-md group shrink-0"
            >
              <span>{currentCategory.actionText}</span>
              <span className="text-[#B89A5A] group-hover:text-white group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>

        </div>
      </div>

      {/* 3D Tilted Grid Interactive Hero */}
      <TiltedGridHero 
        title={currentCategory.pageTitle}
        category="3D PERSPECTIVE GALLERY"
        subtitle={currentCategory.subtitle}
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
              onClick={(e) => e.stopPropagation()}
            >
              <img src={lightboxImg} alt="Enlarged View" className="w-full h-full object-contain max-h-[85vh]" />
              <button
                onClick={() => setLightboxImg(null)}
                className="absolute top-4 right-4 bg-[#293225] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg border border-[#B89A5A] hover:bg-[#5F6B45] transition-colors cursor-pointer shadow-lg"
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
