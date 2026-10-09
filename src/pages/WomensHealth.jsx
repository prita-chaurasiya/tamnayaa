import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '../components/PageHero';
import { FadeIn, StaggerContainer, StaggerItem, ImageReveal, TextReveal, FloatElement, PageTransition } from '../components/MotionWrappers';

import pcodPcosImg from '../assets/conditions/pcod_pcos.jpg';
import antenatalImg from '../assets/conditions/antenatal.jpg';
import postnatalImg from '../assets/conditions/postnatal.jpg';
import backPainImg from '../assets/conditions/back_pain.jpg';
import woImg from '../assets/wo.jpg';

export default function WomensHealth() {
  const [openFaq, setOpenFaq] = useState(null);

  const conditions = [
    {
      title: "PCOD / PCOS PHYSICAL REHAB",
      sub: "Metabolic & Pelvic Circulation Therapy",
      desc: "Targeted pelvic floor muscle exercises, core strengthening, and exercise prescription designed to improve metabolic sensitivity and pelvic circulation.",
      image: pcodPcosImg
    },
    {
      title: "MENSTRUAL PAIN (DYSMENORRHEA)",
      sub: "Severe Menstrual Cramp Relief",
      desc: "Therapeutic manual release, heat applications, and gentle pelvic mobilization to relieve deep menstrual spasm and chronic pelvic congestion.",
      image: backPainImg
    },
    {
      title: "ANTENATAL (PREGNANCY) REHAB",
      sub: "Trimester-Wise Physical Support",
      desc: "Safe physical therapy relieving pregnancy lower back pain, pelvic girdle pain, sciatica, and preparing pelvic floor muscles safely for labor.",
      image: antenatalImg
    },
    {
      title: "POSTNATAL RECOVERY & REHAB",
      sub: "Mother's Post-Delivery Recovery",
      desc: "Evaluation of pelvic floor muscle strength, abdominal core separation (Diastasis Recti), scar healing, and safe return to physical activity after delivery.",
      image: postnatalImg
    },
    {
      title: "URINE LEAKAGE (INCONTINENCE)",
      sub: "Stress & Urge Incontinence Care",
      desc: "Confidential pelvic floor re-education, biofeedback exercises, and bladder retraining for leakage during coughing, sneezing, or exercising.",
      image: pcodPcosImg
    },
    {
      title: "DIASTASIS RECTI MANAGEMENT",
      sub: "Abdominal Separation Recovery",
      desc: "Clinical deep core transverse abdominis activation and postural re-education to close abdominal wall separation safely post-delivery.",
      image: postnatalImg
    },
    {
      title: "PELVIC ORGAN PROLAPSE",
      sub: "Non-Surgical Support & Pressure Control",
      desc: "Discreet pelvic floor strengthening, bowel positioning ergonomics, and pressure regulation techniques managing mild-to-moderate organ prolapse.",
      image: pcodPcosImg
    },
    {
      title: "VAGINISMUS & HYPERTONIC PELVIC FLOOR",
      sub: "Confidential Pelvic Muscle Relaxation",
      desc: "Compassionate, slow-paced physical therapy focused on hypertonic pelvic floor muscle relaxation, diaphragmatic breathing, and gradual desensitization.",
      image: woImg
    },
    {
      title: "AFTER C-SECTION BACK PAIN",
      sub: "Post-Caesarean Scar & Spine Care",
      desc: "Post-surgical scar tissue mobilization, lumbo-pelvic stabilization exercises, and spine alignment to alleviate lower back ache after C-section delivery.",
      image: backPainImg
    }
  ];

  const faqs = [
    {
      q: "What is female pelvic floor physical therapy?",
      a: "Female pelvic floor physiotherapy is a specialised branch of physical medicine focused on the muscles, ligaments, and connective tissues supporting the bladder, uterus, and bowel. Led by Dr. Neha Gupta in a private room, treatment helps relieve pelvic pain, incontinence, diastasis recti, and pregnancy-related strain."
    },
    {
      q: "Does Tamanya Health provide antenatal (pregnancy) rehabilitation?",
      a: "Yes. Our antenatal programs provide trimester-wise physical support to alleviate lower back ache, pelvic girdle pain, and pubic symphysis discomfort, preparing your body safely for labor and delivery."
    },
    {
      q: "Does Tamanya Health provide postnatal recovery therapy?",
      a: "Yes. Postnatal recovery starts with a gentle evaluation of pelvic floor strength, abdominal separation (diastasis recti), and scar healing (whether normal delivery or C-section) to restore functional core stability safely."
    }
  ];

  return (
    <PageTransition className="bg-[#F4EFE6] text-[#252822] min-h-screen font-sans">
      
      {/* 1. HERO SECTION */}
      <PageHero 
        title="Women's Health & Pelvic Floor Rehabilitation"
        category="SPECIALISED FEMALE CARE"
        subtitle="Personalised, discreet, and evidence-informed support across pelvic health, pregnancy rehabilitation, and postnatal recovery in Varanasi."
        image={pcodPcosImg}
        pageName="WOMEN'S HEALTH"
        ctaText="BOOK AN APPOINTMENT"
        ctaLink="/book-appointment"
        secondaryCtaText="EXPLORE CONDITIONS"
        secondaryCtaLink="#conditions-grid"
        floatBadgeText="FEMALE CARE SUITE"
        floatBadgeValue="Discreet & Private"
      />

      {/* 2. CLINICAL PHILOSOPHY */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#FAF7F1] border-b border-[#D8D0C3]">
        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <FadeIn className="lg:col-span-6 space-y-6" direction="left">
            <span className="text-[#5F6B45] uppercase tracking-[0.25em] text-xs font-bold block mb-2">CONFIDENTIAL & PRIVATE CARE</span>
            <TextReveal className="font-serif text-3xl sm:text-5xl font-bold text-[#293225] leading-tight">
              A Safe, Dedicated Space for Female Pelvic Health.
            </TextReveal>
            <p className="text-[#252822]/85 font-light text-base sm:text-lg leading-relaxed">
              Pelvic health issues such as incontinence, chronic pelvic pain, and postpartum weakness are incredibly common—yet often untreated. At Tamanya Health, we provide compassionate, one-on-one female pelvic floor rehabilitation in Varanasi.
            </p>
            <p className="text-[#252822]/75 font-light text-sm leading-relaxed">
              Our clinical protocol begins with a thorough, respectful assessment, ensuring your complete physical comfort and privacy at every step.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link to="/book-appointment" className="btn-olive">
                <span>SCHEDULE PRIVATE EVALUATION</span>
                <span>→</span>
              </Link>
            </div>
          </FadeIn>

          <ImageReveal className="lg:col-span-6 aspect-[4/3] rounded-[28px] overflow-hidden border border-[#D8D0C3] shadow-2xl relative">
            <img src={pcodPcosImg} alt="Female Pelvic Care Suite" className="w-full h-full object-cover animate-ken-burns" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#293225]/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white p-4 rounded-2xl bg-black/30 backdrop-blur-md border border-white/20">
              <p className="font-serif text-sm font-bold">100% Private Female Clinic Suite</p>
              <p className="text-[11px] font-light text-white/80">Pandeypur Campus, Varanasi • Led by Dr. Neha Gupta</p>
            </div>
          </ImageReveal>

        </div>
      </section>

      {/* 3. CONDITIONS TREATED GRID */}
      <section id="conditions-grid" className="py-24 lg:py-32 px-6 lg:px-12 bg-[#F4EFE6] border-b border-[#D8D0C3]">
        <div className="max-w-[1600px] mx-auto">
          
          <FadeIn className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#5F6B45] uppercase tracking-[0.25em] text-xs font-bold block mb-3">WOMEN'S HEALTH PILLARS</span>
            <TextReveal className="font-serif text-3xl sm:text-5xl font-bold text-[#293225] mb-4">
              Conditions We Specialize In
            </TextReveal>
            <p className="text-[#252822]/75 font-light text-base sm:text-lg leading-relaxed">
              Targeted physical rehabilitation for pelvic floor disorders, hormonal exercise prescription, and pregnancy recovery.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
            {conditions.map((item, idx) => (
              <StaggerItem key={idx}>
                <Link to="/book-appointment" className="block h-full group">
                  <motion.div 
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="bg-[#FAF7F1] rounded-[24px] border border-[#D8D0C3] hover:border-[#5F6B45] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between h-full group"
                  >
                    <div className="aspect-[16/10] overflow-hidden relative border-b border-[#D8D0C3]">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 animate-ken-burns" />
                      <div className="absolute top-4 left-4 bg-[#5F6B45] text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                        {item.sub}
                      </div>
                    </div>

                    <div className="p-8 flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="font-serif text-2xl font-bold text-[#293225] group-hover:text-[#5F6B45] transition-colors mb-3">
                          {item.title}
                        </h3>
                        <p className="text-[#252822]/80 text-xs sm:text-sm font-light leading-relaxed mb-6">
                          {item.desc}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-[#D8D0C3] flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-[#5F6B45] group-hover:text-[#3F4A32]">
                        <span>BOOK PRIVATE CONSULTATION</span>
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

      {/* 4. FAQ ACCORDION */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#FAF7F1] border-t border-[#D8D0C3]">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="text-[#5F6B45] uppercase tracking-[0.25em] text-[11px] font-bold block mb-4">PATIENT GUIDANCE</span>
            <TextReveal className="font-serif text-3xl sm:text-5xl text-[#293225] font-bold">Women's Health FAQ</TextReveal>
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
