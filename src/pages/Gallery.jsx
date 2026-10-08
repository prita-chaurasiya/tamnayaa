import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import { Link } from 'react-router-dom';

import cliImg from '../assets/cli.jpeg';
import phyImg from '../assets/phy.jpg';
import woImg from '../assets/wo.jpg';
import skinImg from '../assets/skin-864x1536.jpg';
import wellnessImg from '../assets/wellness-1-1024x683.jpg';
import nehaImg from '../assets/neha.jpeg';
import prizeImg from '../assets/prize.png';
import campImg from '../assets/camp.webp';

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('ALL');
  const [lightboxImg, setLightboxImg] = useState(null);

  const galleryItems = [
    {
      num: "01",
      title: "Clinic Infrastructure & Reception",
      subtitle: "A modern, hygienic clinical environment designed for focused, patient-centered care.",
      category: "CLINIC",
      img: cliImg,
      badge: "Pandeypur Campus"
    },
    {
      num: "02",
      title: "Hands-on Musculoskeletal Rehabilitation",
      subtitle: "Targeted joint mobilization, myofascial release, and cupping therapy sessions.",
      category: "REHABILITATION",
      img: phyImg,
      badge: "Cupping & Dry Needling"
    },
    {
      num: "03",
      title: "Female Pelvic Health Suite",
      subtitle: "Private, compassionate physical therapy for antenatal, postnatal, and pelvic floor care.",
      category: "REHABILITATION",
      img: woImg,
      badge: "Women's Health Suite"
    },
    {
      num: "04",
      title: "Advanced Aesthetic Skin Modalities",
      subtitle: "Non-invasive clinical facial rejuvenation, glow therapies, and acne management.",
      category: "AESTHETICS",
      img: skinImg,
      badge: "Aesthetic Care"
    },
    {
      num: "05",
      title: "Community Health & Mobility Camp",
      subtitle: "Free spine and joint screening camps organized for residents across Varanasi.",
      category: "OUTREACH",
      img: campImg,
      badge: "Community Screening"
    },
    {
      num: "06",
      title: "Slimming & Body Contouring Suite",
      subtitle: "Vacuum cavitation, G-5 massage, and deep heat therapy for inch loss and toning.",
      category: "AESTHETICS",
      img: wellnessImg,
      badge: "Body Contouring"
    },
    {
      num: "07",
      title: "Clinical Director — Dr. Neha Gupta",
      subtitle: "B.P.T, M.P.T (Ortho), MIAP leading evidence-based physiotherapy practice.",
      category: "CLINIC",
      img: nehaImg,
      badge: "7+ Yrs Clinical Practice"
    },
    {
      num: "08",
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
    <div className="bg-[#F4EFE6] text-[#252822] min-h-screen font-sans">
      
      {/* Page Hero Banner */}
      <PageHero 
        title="Clinical Gallery & Facilities"
        category="INSIDE TAMANYA HEALTH"
        subtitle="Explore real photography from our clinic campus in Pandeypur, Varanasi—featuring our treatment suites, rehabilitation modalities, female pelvic health suite, community health camps, and awards."
        image={cliImg}
        pageName="GALLERY"
      />

      {/* Main Gallery Section */}
      <section className="py-20 lg:py-28 px-6 lg:px-12 bg-[#FAF7F1] border-b border-[#D8D0C3] relative overflow-hidden">
        
        {/* Oversized Background Moving Typography */}
        <div className="absolute top-10 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03] select-none">
          <span className="font-serif text-[180px] lg:text-[240px] font-bold text-[#293225] whitespace-nowrap block tracking-widest leading-none parallax-float">
            GALLERY CARE RECOVERY
          </span>
        </div>

        <div className="max-w-[1600px] mx-auto relative z-10">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-[#5F6B45] uppercase tracking-[0.25em] text-xs font-extrabold block mb-2">PORTFOLIO & CAMPUS</span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#293225] font-bold tracking-tight">
                Care You Can See. Excellence You Can Trust.
              </h2>
            </div>
            
            <div className="text-sm font-mono text-[#5F6B45] font-bold uppercase tracking-widest">
              VARANASI CLINIC CAMPUS • SINCE 2019
            </div>
          </div>

          {/* Filter Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12 border-b border-[#D8D0C3] pb-6">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                  activeTab === cat
                    ? 'bg-[#5F6B45] text-[#FAF7F1] shadow-md border border-[#B89A5A]/40 scale-105'
                    : 'bg-[#F4EFE6] text-[#293225] hover:bg-[#E8ECDF] border border-[#D8D0C3]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 3D Asymmetrical Editorial Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 card-3d-wrapper">
            {filteredItems.map((item, i) => (
              <div 
                key={i}
                onClick={() => setLightboxImg(item.img)}
                className="bg-[#293225] rounded-[24px] overflow-hidden border-2 border-[#D8D0C3] hover:border-[#B89A5A] shadow-[0_15px_35px_rgba(41,50,37,0.15)] hover:shadow-[0_25px_60px_rgba(184,154,90,0.35)] transition-all duration-500 group cursor-pointer flex flex-col justify-between card-3d-element card-3d-scroll img-editorial-wrapper"
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
                    <span className="bg-[#B89A5A] text-[#293225] px-4 py-2 rounded-full font-extrabold text-xs shadow-xl transform group-hover:scale-110 transition-transform tracking-wider">
                      🔍 VIEW FULL IMAGE
                    </span>
                  </div>
                </div>

                {/* Card Details */}
                <div className="p-6 bg-[#293225] text-white">
                  <span className="text-[#B89A5A] text-[10px] font-mono font-bold block mb-1">
                    ITEM {item.num} • {item.category}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white mb-2 group-hover:text-[#B89A5A] transition-colors leading-snug">
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
      </section>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-md animate-fade-in-up"
          onClick={() => setLightboxImg(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl border-2 border-[#B89A5A]/60 shadow-2xl">
            <img src={lightboxImg} alt="Enlarged clinical view" className="w-full h-full object-contain" />
            <button 
              onClick={() => setLightboxImg(null)}
              className="absolute top-4 right-4 bg-[#293225] text-[#FAF7F1] hover:text-[#B89A5A] w-11 h-11 rounded-full flex items-center justify-center text-lg font-bold border border-[#B89A5A]/40 shadow-lg transition-all"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Related Clinical Services Section */}
      <section className="py-20 px-6 lg:px-12 bg-[#F4EFE6] border-b border-[#D8D0C3]">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[#5F6B45] uppercase tracking-[0.25em] text-xs font-extrabold block mb-2">EXPLORE OUR SPECIALTIES</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#293225] font-bold">You May Also Be Interested In</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 card-3d-wrapper">
            {[
              {
                title: "Personalised Physiotherapy",
                desc: "Targeted orthopaedic recovery, manual joint therapy, and non-surgical rehabilitation.",
                link: "/physiotherapy",
                badge: "Physiotherapy"
              },
              {
                title: "Female Pelvic Rehabilitation",
                desc: "Private pelvic floor re-education, antenatal, and postnatal physical care.",
                link: "/womens-health",
                badge: "Women's Health"
              },
              {
                title: "Slimming & Body Contouring",
                desc: "Vacuum cavitation, G-5 massage, and non-invasive body shaping therapies.",
                link: "/slimming-wellness",
                badge: "Slimming & Wellness"
              }
            ].map((service, idx) => (
              <Link 
                key={idx}
                to={service.link}
                className="bg-[#FAF7F1] p-8 rounded-[24px] border-2 border-[#D8D0C3] hover:border-[#B89A5A] shadow-[0_10px_30px_rgba(41,50,37,0.06)] hover:shadow-[0_25px_50px_rgba(95,107,69,0.25)] transition-all duration-500 group card-3d-element block"
              >
                <span className="bg-[#5F6B45] text-[#FAF7F1] text-[9px] uppercase font-bold tracking-widest px-3 py-1 rounded-full inline-block mb-4">
                  {service.badge}
                </span>
                <h3 className="font-serif text-xl font-bold text-[#293225] mb-2 group-hover:text-[#5F6B45] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-[#252822]/80 font-light leading-relaxed mb-6">
                  {service.desc}
                </p>
                <div className="flex items-center justify-between text-xs font-bold text-[#5F6B45] pt-4 border-t border-[#D8D0C3]">
                  <span>EXPLORE SERVICE</span>
                  <span className="group-hover:translate-x-2 transition-transform text-[#B89A5A] text-sm">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-Footer Call To Action */}
      <CTASection />

    </div>
  );
}
