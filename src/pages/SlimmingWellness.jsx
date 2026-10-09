import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import { PageTransition, FadeIn, TextReveal, StaggerContainer, StaggerItem } from '../components/MotionWrappers';

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
    <PageTransition className="bg-[#F4EFE6] text-[#252822] min-h-screen font-sans">
      
      {/* Full Image Page Hero */}
      <PageHero 
        title="Slimming Therapy"
        category="BODY CONTOURING & WELLNESS"
        subtitle="Fat Loss & Inches Loss & Body Shape — Designed to support your individual body-shaping goals in a safe clinical setting in Varanasi."
        image="https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=2073&q=80"
        pageName="SLIMMING & WELLNESS"
      />

      {/* Editorial Intro Section */}
      <section className="py-20 lg:py-28 px-6 lg:px-12 bg-[#FAF7F1] border-b border-[#D8D0C3]">
        <FadeIn className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-6 h-[2px] bg-[#5F6B45] block"></span>
            <span className="text-[#5F6B45] uppercase tracking-[0.25em] text-[11px] font-bold">CLINICAL BODY SCULPTING</span>
            <span className="w-6 h-[2px] bg-[#5F6B45] block"></span>
          </div>
          <TextReveal className="font-serif text-3xl sm:text-5xl text-[#293225] font-bold mb-8">Fat Loss, Inches Loss & Body Shape</TextReveal>
          <p className="text-[#252822]/85 text-base sm:text-lg font-light leading-relaxed mb-8">
            Our non-invasive slimming therapies combine advanced equipment with tailored clinical guidance. Every treatment plan is individualized following a thorough physical evaluation at our Pandeypur clinic.
          </p>
          <div className="bg-[#E8ECDF] p-5 rounded-[16px] border border-[#5F6B45]/30 inline-block text-xs font-semibold text-[#252822] tracking-wide">
            • All body shaping consultations are conducted confidentially by Dr. Neha Gupta.
          </div>
        </FadeIn>
      </section>

      {/* 4 Visual Treatment Cards */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#F4EFE6] border-b border-[#D8D0C3]">
        <div className="max-w-[1600px] mx-auto">
          
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#5F6B45] uppercase tracking-[0.25em] text-[11px] font-bold block mb-4">VERIFIED MODALITIES</span>
            <TextReveal className="font-serif text-3xl sm:text-5xl text-[#293225] font-bold mb-6">Advanced Body Shaping Technologies</TextReveal>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.12}>
            {treatments.map((item, i) => (
              <StaggerItem key={i}>
                <Link 
                  to="/book-appointment"
                  className="block h-full"
                >
                  <motion.div 
                    whileHover={{ y: -8, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
                    className="bg-[#FAF7F1] rounded-[20px] overflow-hidden border border-[#D8D0C3] hover:border-[#5F6B45] shadow-[0_15px_35px_rgba(41,50,37,0.06)] hover:shadow-[0_25px_50px_rgba(95,107,69,0.2)] transition-all duration-500 group flex flex-col justify-between h-full relative border-t-2 border-t-[#5F6B45]"
                  >
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 animate-ken-burns" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#293225]/70 via-transparent to-transparent" />
                      <span className="absolute top-4 left-4 bg-[#5F6B45] text-[#FAF7F1] text-[9px] uppercase tracking-widest px-3 py-1 rounded-full font-bold border border-[#B89A5A]/30">
                        {item.category}
                      </span>
                    </div>
                    
                    <div className="p-7 flex flex-col flex-grow justify-between">
                      <div>
                        <h3 className="font-serif text-xl font-bold text-[#293225] mb-3 group-hover:text-[#5F6B45] transition-colors leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-[#252822]/80 text-xs font-light leading-relaxed mb-6">
                          {item.desc}
                        </p>
                      </div>
                      <div className="pt-4 border-t border-[#D8D0C3] flex items-center justify-between text-[11px] uppercase tracking-widest font-bold text-[#5F6B45] group-hover:text-[#252822] transition-colors">
                        <span>BOOK CONSULTATION</span>
                        <span className="text-[#B89A5A] group-hover:translate-x-1.5 transition-transform">→</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </section>

      {/* RELATED SERVICES NAVIGATION */}
      <section className="py-20 px-6 lg:px-12 bg-[#FAF7F1]">
        <div className="max-w-[1600px] mx-auto text-center">
          <FadeIn className="mb-12">
            <span className="text-[#5F6B45] uppercase tracking-[0.25em] text-xs font-bold block mb-3">EXPLORE MORE CLINICAL DIVISIONS</span>
            <TextReveal className="font-serif text-3xl font-bold text-[#293225]">You May Also Be Interested In</TextReveal>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
            <StaggerItem>
              <Link to="/physiotherapy" className="block h-full">
                <motion.div whileHover={{ y: -6 }} className="bg-[#F4EFE6] p-8 rounded-[24px] border border-[#D8D0C3] hover:border-[#5F6B45] text-left group h-full transition-colors shadow-sm hover:shadow-md">
                  <span className="text-xs font-bold text-[#5F6B45] uppercase tracking-widest block mb-2">DIVISION 01</span>
                  <h3 className="font-serif text-2xl font-bold text-[#293225] group-hover:text-[#5F6B45] mb-2 transition-colors">Advanced Physiotherapy</h3>
                  <p className="text-xs text-[#252822]/75 font-light">Spine, joint, sports injury & neurological rehabilitation.</p>
                </motion.div>
              </Link>
            </StaggerItem>

            <StaggerItem>
              <Link to="/womens-health" className="block h-full">
                <motion.div whileHover={{ y: -6 }} className="bg-[#F4EFE6] p-8 rounded-[24px] border border-[#D8D0C3] hover:border-[#5F6B45] text-left group h-full transition-colors shadow-sm hover:shadow-md">
                  <span className="text-xs font-bold text-[#5F6B45] uppercase tracking-widest block mb-2">DIVISION 02</span>
                  <h3 className="font-serif text-2xl font-bold text-[#293225] group-hover:text-[#5F6B45] mb-2 transition-colors">Female Pelvic Floor Suite</h3>
                  <p className="text-xs text-[#252822]/75 font-light">Specialised pelvic rehabilitation, PCOD, antenatal & postnatal care.</p>
                </motion.div>
              </Link>
            </StaggerItem>

            <StaggerItem>
              <Link to="/skin-care" className="block h-full">
                <motion.div whileHover={{ y: -6 }} className="bg-[#F4EFE6] p-8 rounded-[24px] border border-[#D8D0C3] hover:border-[#5F6B45] text-left group h-full transition-colors shadow-sm hover:shadow-md">
                  <span className="text-xs font-bold text-[#5F6B45] uppercase tracking-widest block mb-2">DIVISION 03</span>
                  <h3 className="font-serif text-2xl font-bold text-[#293225] group-hover:text-[#5F6B45] mb-2 transition-colors">Aesthetic Skin Care</h3>
                  <p className="text-xs text-[#252822]/75 font-light">Integrative skin rejuvenation, acne treatment & peels.</p>
                </motion.div>
              </Link>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

    </PageTransition>
  );
}

