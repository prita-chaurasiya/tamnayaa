import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import { PageTransition, FadeIn, TextReveal, StaggerContainer, StaggerItem } from '../components/MotionWrappers';

import cavitationImg from '../assets/conditions/cavitation.jpg';
import postnatalImg from '../assets/conditions/postnatal.jpg';

export default function SlimmingWellness() {
  const treatments = [
    {
      title: "BODY SHAPER",
      category: "CONTOURING MODALITY",
      desc: "Advanced non-invasive technology designed to target and sculpt specific areas, supporting your overall body contouring and muscle tone goals.",
      img: cavitationImg
    },
    {
      title: "VACUUM CAVITATION",
      category: "ULTRASONIC FAT LOSS",
      desc: "Clinical ultrasound cavitation therapy targeting localized adipose tissue to assist in non-surgical inch loss and body shaping.",
      img: cavitationImg
    },
    {
      title: "DEEP HEAT THERAPY",
      category: "THERMAL CIRCULATION",
      desc: "Therapeutic deep thermal application to stimulate tissue microcirculation, metabolic activity, and cellular renewal.",
      img: cavitationImg
    },
    {
      title: "G-5 MECHANICAL MASSAGE",
      category: "LYMPHATIC DRAINAGE",
      desc: "Deep mechanical percussive massage modality aimed at promoting lymphatic drainage, reducing fluid retention, and enhancing skin firmness.",
      img: postnatalImg
    }
  ];

  return (
    <PageTransition className="bg-[#F4EFE6] text-[#252822] min-h-screen font-sans">
      
      {/* Full Image Page Hero */}
      <PageHero 
        title="Slimming Therapy"
        category="BODY CONTOURING & WELLNESS"
        subtitle="Fat Loss & Inches Loss & Body Shape — Designed to support your individual body-shaping goals in a safe clinical setting in Varanasi."
        image={cavitationImg}
        pageName="SLIMMING & WELLNESS"
      />

      {/* Editorial Intro Section */}
      <section className="py-20 lg:py-28 px-6 lg:px-12 bg-[#FAF7F1] border-b border-[#D8D0C3]">
        <FadeIn className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-6 h-[2px] bg-[#5F6B45] block"></span>
            <span className="text-[#5F6B45] uppercase tracking-[0.25em] text-[11px] font-bold">CLINICAL BODY CONTOURING</span>
            <span className="w-6 h-[2px] bg-[#5F6B45] block"></span>
          </div>
          <TextReveal className="font-serif text-3xl sm:text-5xl text-[#293225] font-bold mb-8">
            Targeted Inch Loss & Body Shaping
          </TextReveal>
          <p className="text-[#252822]/80 text-base sm:text-lg font-light leading-relaxed">
            Our non-invasive slimming modalities utilize Vacuum Cavitation, Body Shaper, deep thermal circulation, and G-5 mechanical massage to help you achieve measurable inch loss without downtime.
          </p>
        </FadeIn>
      </section>

      {/* Treatment Cards Grid */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#F4EFE6] border-b border-[#D8D0C3]">
        <div className="max-w-[1600px] mx-auto">
          
          <FadeIn className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#5F6B45] uppercase tracking-[0.25em] text-[11px] font-bold block mb-4">OUR MODALITIES</span>
            <TextReveal className="font-serif text-3xl sm:text-5xl text-[#293225] font-bold mb-6">Clinical Body Contouring</TextReveal>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.12}>
            {treatments.map((item, i) => (
              <StaggerItem key={i}>
                <Link to="/book-appointment" className="block h-full group">
                  <motion.div 
                    whileHover={{ y: -8, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
                    className="bg-[#FAF7F1] rounded-[24px] border border-[#D8D0C3] hover:border-[#5F6B45] shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col justify-between h-full"
                  >
                    <div className="aspect-[16/10] overflow-hidden relative border-b border-[#D8D0C3]">
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 animate-ken-burns" 
                      />
                      <span className="absolute top-4 left-4 bg-[#5F6B45] text-white text-[9px] uppercase font-extrabold tracking-widest px-3 py-1 rounded-full shadow-md">
                        {item.category}
                      </span>
                    </div>

                    <div className="p-7 flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="font-serif text-xl font-bold text-[#293225] mb-3 group-hover:text-[#5F6B45] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-[#252822]/75 text-xs font-light leading-relaxed mb-6">
                          {item.desc}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-[#D8D0C3] flex items-center justify-between text-[11px] uppercase tracking-widest font-bold text-[#5F6B45] group-hover:text-[#3F4A32]">
                        <span>BOOK CONSULTATION</span>
                        <span className="group-hover:translate-x-1.5 transition-transform">→</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </section>

    </PageTransition>
  );
}
