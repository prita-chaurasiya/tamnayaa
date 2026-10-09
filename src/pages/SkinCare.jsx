import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '../components/PageHero';
import { PageTransition, FadeIn, TextReveal, StaggerContainer, StaggerItem, ImageReveal } from '../components/MotionWrappers';

import psoriasisImg from '../assets/conditions/psoriasis.jpg';
import scarsImg from '../assets/conditions/scars.jpg';

export default function SkinCare() {
  const [openFaq, setOpenFaq] = useState(null);

  const treatments = [
    { 
      title: "SKIN CARE & REJUVENATION", 
      cat: "SKIN REJUVENATION",
      desc: "Clinical dermatological care designed to nourish skin barrier health, clear clogged pores, and restore healthy skin radiance.", 
      image: psoriasisImg 
    },
    { 
      title: "SKIN PSORIASIS MANAGEMENT", 
      cat: "PSORIASIS CARE",
      desc: "Specialised dermatological protocols for skin psoriasis flare relief, plaque soothing, and barrier repair.", 
      image: psoriasisImg 
    },
    { 
      title: "ACNE & FACIAL SCAR REDUCTION", 
      cat: "SCAR THERAPY",
      desc: "Targeted clinical procedures and resurfacing protocols to treat post-acne scarring, deep facial scars, and hyperpigmentation.", 
      image: scarsImg 
    }
  ];

  const faqs = [
    {
      q: "What clinical treatments are offered for skin psoriasis?",
      a: "At Tamanya Health, skin psoriasis management focuses on soothing active inflammation, reducing scaling and plaque thickness, and restoring skin barrier hydration through clinical skin protocols."
    },
    {
      q: "How effective is scar reduction therapy for facial and acne scars?",
      a: "Our targeted clinical scar protocols help stimulate collagen remodeling, softening deep scar edges, improving skin texture, and evening out post-acne hyperpigmentation."
    },
    {
      q: "Are the skin treatments safe for sensitive skin types?",
      a: "Yes. Every skin care procedure is preceded by a skin evaluation by our clinical team to select gentle, non-irritating formulations matching your skin barrier."
    }
  ];

  return (
    <PageTransition className="bg-[#F4EFE6] text-[#252822] min-h-screen font-sans">
      
      {/* Full Image Page Hero */}
      <PageHero 
        title="Skin Care, Psoriasis & Scar Suite"
        category="CLINICAL DERMATOLOGY & SKIN CARE"
        subtitle="Specialised clinical protocols dedicated to skin rejuvenation, psoriasis plaque management, and facial scar reduction in Varanasi."
        image={psoriasisImg}
        pageName="SKIN CARE"
        ctaText="BOOK CONSULTATION"
        ctaLink="/book-appointment"
        floatBadgeText="SKIN SUITE"
        floatBadgeValue="Skin, Psoriasis & Scars"
      />

      {/* Intro Section */}
      <section className="py-20 lg:py-28 px-6 lg:px-12 bg-[#FAF7F1] border-b border-[#D8D0C3]">
        <FadeIn className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-6 h-[2px] bg-[#5F6B45] block"></span>
            <span className="text-[#5F6B45] uppercase tracking-[0.25em] text-[11px] font-bold">SPECIALISED DERMATOLOGY</span>
            <span className="w-6 h-[2px] bg-[#5F6B45] block"></span>
          </div>
          <TextReveal className="font-serif text-3xl sm:text-5xl text-[#293225] font-bold mb-8">Skin Care, Psoriasis & Scar Therapies</TextReveal>
          <p className="text-[#252822]/80 text-base sm:text-lg font-light leading-relaxed">
            Our clinical skin suite focuses directly on restoring healthy skin, treating skin psoriasis, and improving acne and facial scars at our campus in Pandeypur, Varanasi.
          </p>
        </FadeIn>
      </section>

      {/* Services Section: Luxury 3D Cards with Disease Images */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#F4EFE6] border-b border-[#D8D0C3]">
        <div className="max-w-[1600px] mx-auto">
          
          <FadeIn className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#5F6B45] uppercase tracking-[0.25em] text-[11px] font-bold block mb-4">CLINICAL PROTOCOLS</span>
            <TextReveal className="font-serif text-3xl sm:text-5xl text-[#293225] font-bold mb-6">Verified Skin Treatments</TextReveal>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.12}>
            {treatments.map((item, i) => (
              <StaggerItem key={i}>
                <Link 
                  to="/book-appointment"
                  className="block h-full group"
                >
                  <motion.div 
                    whileHover={{ y: -8, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
                    className="bg-[#FAF7F1] rounded-[24px] border border-[#D8D0C3] hover:border-[#5F6B45] shadow-[0_15px_35px_rgba(41,50,37,0.05)] hover:shadow-[0_25px_50px_rgba(95,107,69,0.18)] transition-all duration-500 overflow-hidden flex flex-col justify-between h-full relative border-t-2 border-t-[#5F6B45]"
                  >
                    {/* Disease/Condition Image Header */}
                    <div className="aspect-[16/10] overflow-hidden relative border-b border-[#D8D0C3]">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 animate-ken-burns"
                      />
                      <span className="absolute top-4 right-4 text-[10px] uppercase font-bold tracking-widest text-[#FAF7F1] bg-[#293225]/85 backdrop-blur-md px-3 py-1 rounded-full border border-[#B89A5A]/40">
                        {item.cat}
                      </span>
                    </div>

                    <div className="p-8 flex-grow flex flex-col justify-between">
                      <div>
                        <span className="text-xs font-mono font-bold text-[#B89A5A] block mb-2">0{i+1}. CONDITION PROTOCOL</span>
                        <h3 className="font-serif text-2xl font-bold text-[#293225] mb-3 group-hover:text-[#5F6B45] transition-colors leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-[#252822]/75 text-sm font-light leading-relaxed mb-6">
                          {item.desc}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-[#D8D0C3] flex items-center justify-between text-[11px] uppercase tracking-widest font-bold text-[#293225] group-hover:text-[#5F6B45] transition-colors">
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

      {/* Why Choose Tamanya Skin Care */}
      <section className="bg-[#FAF7F1] py-24 lg:py-32 px-6 lg:px-12 border-t border-[#D8D0C3]">
        <div className="max-w-[1600px] mx-auto">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#5F6B45] uppercase tracking-[0.25em] text-[11px] font-bold block mb-4">OUR DERMA PROMISE</span>
            <TextReveal className="font-serif text-3xl sm:text-5xl text-[#293225] font-bold mb-6">Why Choose Tamanya Skin Care</TextReveal>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {[
              { num: "01", title: "Targeted Skin & Psoriasis Care", desc: "Specialised protocols designed for skin barrier hydration and psoriasis inflammation control." },
              { num: "02", title: "Scar Remodeling", desc: "Evidence-informed clinical procedures designed to stimulate collagen without surgery." },
              { num: "03", title: "Hygienic Clinical Environment", desc: "Strict sterilization and medical-grade standards maintained in Pandeypur, Varanasi." }
            ].map((item, i) => (
              <StaggerItem key={i}>
                <motion.div 
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  className="bg-[#F4EFE6] p-8 rounded-[20px] border border-[#D8D0C3] shadow-sm hover:shadow-md transition-all h-full"
                >
                  <span className="text-3xl font-serif font-bold text-[#5F6B45] block mb-3">{item.num}</span>
                  <h3 className="font-serif text-xl font-bold text-[#293225] mb-3">{item.title}</h3>
                  <p className="text-[#252822]/75 text-xs font-light leading-relaxed">{item.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#FAF7F1] border-t border-[#D8D0C3]">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="text-[#5F6B45] uppercase tracking-[0.25em] text-[11px] font-bold block mb-4">SKIN CARE FAQ</span>
            <TextReveal className="font-serif text-3xl sm:text-5xl text-[#293225] font-bold">Frequently Asked Questions</TextReveal>
          </FadeIn>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#F4EFE6] rounded-[16px] border border-[#D8D0C3] overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 text-left flex justify-between items-center focus:outline-none group"
                >
                  <span className="font-serif text-lg text-[#293225] font-bold flex items-center gap-4 group-hover:text-[#5F6B45] transition-colors">
                    <span className="text-[#B89A5A] text-sm font-mono">0{i + 1}</span>
                    {faq.q}
                  </span>
                  <span className={`text-[#B89A5A] text-xl font-bold transform transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>

                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 pt-2 text-[#252822]/80 text-sm font-light leading-relaxed border-t border-[#D8D0C3]/60">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

    </PageTransition>
  );
}
