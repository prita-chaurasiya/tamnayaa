import React, { useState, useEffect } from 'react';
import cliImg from '../assets/cli.jpeg';
import phyImg from '../assets/phy.jpg';
import woImg from '../assets/wo.jpg';
import skinImg from '../assets/skin-864x1536.jpg';
import wellnessImg from '../assets/wellness-1-1024x683.jpg';
import nehaImg from '../assets/neha.jpeg';
import prizeImg from '../assets/prize.png';

export default function InsideTamanya() {
  const [activeTab, setActiveTab] = useState('All');
  const [lightboxImg, setLightboxImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryItems = [
    {
      num: "01",
      title: "The Clinic",
      subtitle: "A place designed for focused, comfortable care",
      category: "Clinic",
      img: cliImg,
      badge: "Inauguration & Team"
    },
    {
      num: "02",
      title: "Personalized Attention",
      subtitle: "Understanding each patient before planning their care",
      category: "Rehabilitation",
      img: phyImg,
      badge: "Advanced Cupping Therapy"
    },
    {
      num: "03",
      title: "Hands-on Rehabilitation",
      subtitle: "Practical, personalized support throughout recovery",
      category: "Rehabilitation",
      img: woImg,
      badge: "Pelvic & Women's Health"
    },
    {
      num: "04",
      title: "Advanced Techniques",
      subtitle: "Evidence-based modalities & precision electrotherapy",
      category: "Aesthetics",
      img: skinImg,
      badge: "Clinical Skin & Aesthetic Care"
    },
    {
      num: "05",
      title: "Beyond the Clinic",
      subtitle: "Taking health awareness and outreach into the community",
      category: "Outreach",
      img: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=80",
      badge: "Pandeypur Health Camp"
    },
    {
      num: "06",
      title: "Slimming & Toning",
      subtitle: "Non-invasive body shaping and inch loss therapies",
      category: "Aesthetics",
      img: wellnessImg,
      badge: "Vacuum Cavitation Suite"
    },
    {
      num: "07",
      title: "Clinical Leadership",
      subtitle: "Guidance by Dr. Neha Gupta (PT) M.P.T (Ortho)",
      category: "Clinic",
      img: nehaImg,
      badge: "7+ Years Practice"
    },
    {
      num: "08",
      title: "National Recognition",
      subtitle: "Best Clinician Award at GAPTCON 2025 Gurgaon",
      category: "Clinic",
      img: prizeImg,
      badge: "National Excellence"
    }
  ];

  const categories = ['All', 'Clinic', 'Rehabilitation', 'Aesthetics', 'Outreach'];

  const filteredItems = activeTab === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  // Auto-play timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [filteredItems.length]);

  return (
    <section id="gallery" className="py-24 lg:py-32 px-6 lg:px-12 bg-[#FAF7F1] border-t border-[#D8D0C3] relative overflow-hidden font-sans scroll-mt-28">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-3xl">
            <span className="text-[#5F6B45] uppercase tracking-[0.25em] text-xs font-extrabold block">CLINICAL GALLERY</span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#293225] font-bold tracking-tight leading-tight">
              Inside Tamanya Health.
            </h2>
            <p className="text-[#252822]/80 text-sm sm:text-base font-light leading-relaxed">
              Explore real moments from our clinic campus in Pandeypur, Varanasi—including our treatment rooms, advanced rehabilitation modalities, female pelvic health suite, community health camps, and clinical leadership awards.
            </p>
          </div>

          <div className="font-serif italic text-2xl sm:text-3xl text-[#5F6B45] font-semibold shrink-0">
            Healing & Recovery
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 border-b border-[#D8D0C3] pb-4">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveTab(cat);
                setCurrentIndex(0);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                activeTab === cat
                  ? 'bg-[#5F6B45] text-[#FAF7F1] shadow-md border border-[#B89A5A]/30'
                  : 'bg-[#F4EFE6] text-[#293225] hover:bg-[#E8ECDF] border border-[#D8D0C3]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Interactive 3D Gallery Grid with Mask Reveal & Lightbox */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 card-3d-wrapper">
          {filteredItems.map((item, i) => (
            <div 
              key={i}
              onClick={() => setLightboxImg(item.img)}
              className="bg-[#293225] rounded-[24px] overflow-hidden border-2 border-[#D8D0C3] hover:border-[#B89A5A] shadow-[0_15px_35px_rgba(41,50,37,0.15)] hover:shadow-[0_25px_60px_rgba(184,154,90,0.3)] transition-all duration-500 group cursor-pointer flex flex-col justify-between card-3d-element card-3d-scroll img-editorial-wrapper"
            >
              {/* Image Container with Ken Burns Hover */}
              <div className="aspect-[4/3] w-full relative overflow-hidden bg-[#293225]">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#293225]/60 via-transparent to-transparent opacity-30 group-hover:opacity-10 transition-opacity pointer-events-none" />
                
                {/* Category Badge */}
                <span className="absolute top-4 left-4 bg-[#5F6B45] text-[#FAF7F1] text-[9px] uppercase font-bold tracking-widest px-3 py-1 rounded-full border border-[#B89A5A]/40 shadow-md">
                  {item.badge}
                </span>

                {/* Lightbox Zoom Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
                  <span className="bg-[#B89A5A] text-[#293225] p-3 rounded-full font-bold text-xs shadow-lg transform group-hover:scale-110 transition-transform">
                    🔍 ENLARGE
                  </span>
                </div>
              </div>

              {/* Card Footer Details */}
              <div className="p-6 bg-[#293225] text-white">
                <span className="text-[#B89A5A] text-[10px] font-mono font-bold block mb-1">
                  GALLERY {item.num}
                </span>
                <h3 className="font-serif text-lg font-bold text-white mb-1 group-hover:text-[#B89A5A] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-white/75 font-light leading-relaxed">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-md"
          onClick={() => setLightboxImg(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl border border-white/20">
            <img src={lightboxImg} alt="Enlarged gallery view" className="w-full h-full object-contain" />
            <button 
              onClick={() => setLightboxImg(null)}
              className="absolute top-4 right-4 bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold border border-white/30"
            >
              ✕
            </button>
          </div>
        </div>
      )}

    </section>
  );
}
