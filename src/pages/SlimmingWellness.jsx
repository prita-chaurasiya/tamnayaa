import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

export default function SlimmingWellness() {
  const treatments = [
    {
      title: "BODY SHAPER",
      category: "CONTOURING MODALITY",
      desc: "Advanced non-invasive technology designed to target and sculpt specific areas, supporting your overall body contouring and muscle tone goals.",
      img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "VACUUM CAVITATION",
      category: "ULTRASONIC FAT LOSS",
      desc: "Clinical ultrasound cavitation therapy targeting localized adipose tissue to assist in non-surgical inch loss and body shaping.",
      img: "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "DEEP HEAT THERAPY",
      category: "THERMAL CIRCULATION",
      desc: "Therapeutic deep thermal application to stimulate tissue microcirculation, metabolic activity, and cellular renewal.",
      img: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "G-5 MECHANICAL MASSAGE",
      category: "LYMPHATIC DRAINAGE",
      desc: "Deep mechanical percussive massage modality aimed at promoting lymphatic drainage, reducing fluid retention, and enhancing skin firmness.",
      img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="bg-[#FFF9F6] text-[#351D2B] min-h-screen font-sans">
      
      {/* Full Image Page Hero */}
      <PageHero 
        title="Slimming Therapy"
        category="BODY CONTOURING & WELLNESS"
        subtitle="Fat Loss & Inches Loss & Body Shape — Designed to support your individual body-shaping goals in a safe clinical setting in Varanasi."
        image="https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=2073&q=80"
        pageName="SLIMMING & WELLNESS"
      />

      {/* Editorial Intro Section */}
      <section className="py-20 lg:py-28 px-6 lg:px-12 bg-white border-b border-[#F6DCE4]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-6 h-[2px] bg-[#C94F78] block"></span>
            <span className="text-[#C94F78] uppercase tracking-[0.25em] text-[11px] font-bold">CLINICAL BODY SCULPTING</span>
            <span className="w-6 h-[2px] bg-[#C94F78] block"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#351D2B] font-bold mb-8">Fat Loss, Inches Loss & Body Shape</h2>
          <p className="text-[#351D2B]/80 text-base sm:text-lg font-light leading-relaxed mb-8">
            Our non-invasive slimming therapies combine advanced equipment with tailored clinical guidance. Every treatment plan is individualized following a thorough physical evaluation at our Pandeypur clinic.
          </p>
          <div className="bg-[#F6DCE4]/40 p-5 rounded-[16px] border border-[#E8A6B8]/40 inline-block text-xs font-semibold text-[#351D2B] tracking-wide">
            • All body shaping consultations are conducted confidentially by Dr. Neha Gupta.
          </div>
        </div>
      </section>

      {/* 4 Visual Treatment Cards */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#FFF9F6]">
        <div className="max-w-[1600px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#C94F78] uppercase tracking-[0.25em] text-[11px] font-bold block mb-4">VERIFIED MODALITIES</span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#351D2B] font-bold mb-6">Advanced Body Shaping Technologies</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {treatments.map((item, i) => (
              <Link 
                key={i} 
                to="/book-appointment"
                className="bg-white rounded-[20px] overflow-hidden border border-[#F6DCE4] hover:border-[#C94F78] shadow-[0_15px_35px_rgba(53,29,43,0.06)] hover:shadow-[0_25px_50px_rgba(201,79,120,0.18)] transform hover:-translate-y-2 transition-all duration-500 group flex flex-col justify-between block relative border-t-2 border-t-[#C94F78]"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#351D2B]/70 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 bg-[#7D294B] text-[#FFF9F6] text-[9px] uppercase tracking-widest px-3 py-1 rounded-full font-bold border border-[#E8A6B8]/30">
                    {item.category}
                  </span>
                </div>
                
                <div className="p-7 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#351D2B] mb-3 group-hover:text-[#9E3D63] transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-[#351D2B]/75 text-xs font-light leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#F6DCE4] flex items-center justify-between text-[11px] uppercase tracking-widest font-bold text-[#9E3D63] group-hover:text-[#C94F78] transition-colors">
                    <span>BOOK CONSULTATION</span>
                    <span className="text-[#C94F78] group-hover:translate-x-1.5 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}

