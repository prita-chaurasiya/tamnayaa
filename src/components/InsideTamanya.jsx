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
    <section className="py-24 lg:py-32 px-6 lg:px-12 bg-white border-t border-[#F6DCE4] relative overflow-hidden font-sans">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Header Section */}
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-12">
          
          <div className="lg:col-span-8 space-y-4">
            <span className="text-[#9E3D63] uppercase tracking-[0.25em] text-xs font-bold block">INSIDE TAMANYA</span>
            <h2 className="font-serif text-4xl sm:text-6xl text-[#351D2B] font-bold tracking-tight leading-tight">
              Care You Can See. <br className="hidden sm:inline" />
              People You Can Trust.
            </h2>
            <p className="text-[#351D2B]/80 text-sm sm:text-base font-light leading-relaxed max-w-3xl">
              Step inside Tamanya and see the people, spaces, and care behind every patient journey. From personalised assessments and physiotherapy sessions to advanced rehabilitation techniques and community health initiatives, our approach is centred around understanding people, not just treating symptoms.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-between space-y-6">
            <div className="font-serif italic text-3xl sm:text-4xl text-[#351D2B]/60 leading-snug text-left lg:text-right">
              Healing <br />
              <span className="text-[#C94F78] font-semibold">Movement</span> <br />
              Better lives
            </div>

            {/* Slider Controls */}
            <div className="flex items-center gap-3">
              <button 
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border-2 border-[#351D2B] text-[#351D2B] hover:bg-[#351D2B] hover:text-white flex items-center justify-center transition-all duration-300 shadow-md"
                aria-label="Previous Slide"
              >
                ←
              </button>
              <button 
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-[#C94F78] to-[#9E3D63] text-white hover:from-[#9E3D63] hover:to-[#7D294B] flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-105"
                aria-label="Next Slide"
              >
                →
              </button>
            </div>
          </div>

        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-3 mb-10 border-b border-[#F6DCE4] pb-4">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setCurrentIndex(0);
              }}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-[#7D294B] text-white shadow-md'
                  : 'bg-[#FFF9F6] text-[#351D2B]/75 hover:bg-[#F6DCE4] border border-[#F6DCE4]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Main Interactive Grid & Slider Display */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Featured Large Slide Card */}
          {filteredItems.length > 0 && (
            <div 
              className="lg:col-span-7 bg-white rounded-[28px] overflow-hidden shadow-2xl border-2 border-[#F6DCE4] hover:border-[#C94F78] transition-all duration-500 relative group cursor-pointer flex flex-col justify-end min-h-[420px] sm:min-h-[500px]"
              onClick={() => setLightboxImg(filteredItems[currentIndex % filteredItems.length].img)}
            >
              <img 
                src={filteredItems[currentIndex % filteredItems.length].img} 
                alt={filteredItems[currentIndex % filteredItems.length].title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#351D2B]/90 via-[#351D2B]/40 to-transparent" />

              <div className="relative z-10 p-8 sm:p-10 space-y-3">
                <span className="bg-[#7D294B] text-[#FFF9F6] text-[10px] uppercase tracking-widest px-3.5 py-1 rounded-full font-bold border border-[#E8A6B8]/30">
                  {filteredItems[currentIndex % filteredItems.length].badge}
                </span>

                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-4xl sm:text-5xl font-bold text-[#C94F78]">
                    {filteredItems[currentIndex % filteredItems.length].num}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-4xl font-bold text-white">
                    {filteredItems[currentIndex % filteredItems.length].title}
                  </h3>
                </div>

                <p className="text-white/80 text-xs sm:text-sm font-light leading-relaxed max-w-xl">
                  {filteredItems[currentIndex % filteredItems.length].subtitle}
                </p>

                <div className="pt-2 text-xs text-[#E8A6B8] font-bold uppercase tracking-widest flex items-center gap-2 group-hover:translate-x-1.5 transition-transform">
                  <span>CLICK TO VIEW FULL PHOTO</span>
                  <span>🔍</span>
                </div>
              </div>
            </div>
          )}

          {/* Grid of Remaining Cards */}
          <div className="lg:col-span-5 grid sm:grid-cols-2 gap-6">
            {filteredItems.slice(1, 5).map((item, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-[24px] overflow-hidden border-2 border-[#F6DCE4] hover:border-[#C94F78] shadow-lg hover:shadow-2xl transition-all duration-400 relative group cursor-pointer aspect-[4/3] flex flex-col justify-end"
                onClick={() => setLightboxImg(item.img)}
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#351D2B]/90 via-[#351D2B]/30 to-transparent" />

                <div className="relative z-10 p-5 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-xl font-bold text-[#C94F78]">{item.num}</span>
                    <h4 className="font-serif text-base font-bold text-white group-hover:text-[#E8A6B8] transition-colors">{item.title}</h4>
                  </div>
                  <p className="text-white/75 text-[11px] font-light leading-snug line-clamp-2">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Thumbnail Dots Bar */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {filteredItems.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === i 
                  ? 'w-10 bg-[#C94F78]' 
                  : 'w-2.5 bg-[#351D2B]/20 hover:bg-[#351D2B]/40'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>

      {/* Lightbox Modal Preview */}
      {lightboxImg && (
        <div 
          className="fixed inset-0 z-50 bg-[#351D2B]/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxImg(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center p-2">
            <img 
              src={lightboxImg} 
              alt="Inside Tamanya Lightbox" 
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl border-4 border-white"
            />
            <button 
              onClick={() => setLightboxImg(null)}
              className="absolute top-4 right-4 bg-[#351D2B] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg border-2 border-[#C94F78] hover:bg-[#C94F78] transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}

    </section>
  );
}

