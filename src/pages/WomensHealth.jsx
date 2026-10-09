import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '../components/PageHero';
import { FadeIn, StaggerContainer, StaggerItem, ImageReveal, TextReveal, FloatElement, PageTransition } from '../components/MotionWrappers';
import woImg from '../assets/wo.jpg';

export default function WomensHealth() {
  const [openFaq, setOpenFaq] = useState(null);

  const conditions = [
    {
      title: "PCOD / PCOS PHYSICAL REHAB",
      sub: "Metabolic & Pelvic Circulation Therapy",
      desc: "Targeted pelvic floor muscle exercises, core strengthening, and exercise prescription designed to improve metabolic sensitivity and pelvic circulation.",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "MENSTRUAL PAIN (DYSMENORRHEA)",
      sub: "Severe Menstrual Cramp Relief",
      desc: "Therapeutic manual release, heat applications, and gentle pelvic mobilization to relieve deep menstrual spasm and chronic pelvic congestion.",
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "ANTENATAL (PREGNANCY) REHAB",
      sub: "Trimester-Wise Physical Support",
      desc: "Safe physical therapy relieving pregnancy lower back pain, pelvic girdle pain, sciatica, and preparing pelvic floor muscles safely for labor.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "POSTNATAL RECOVERY & REHAB",
      sub: "Mother's Post-Delivery Recovery",
      desc: "Evaluation of pelvic floor muscle strength, abdominal core separation (Diastasis Recti), scar healing, and safe return to physical activity after delivery.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "URINE LEAKAGE (INCONTINENCE)",
      sub: "Stress & Urge Incontinence Care",
      desc: "Confidential pelvic floor re-education, biofeedback exercises, and bladder retraining for leakage during coughing, sneezing, or exercising.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "DIASTASIS RECTI MANAGEMENT",
      sub: "Abdominal Separation Recovery",
      desc: "Clinical deep core transverse abdominis activation and postural re-education to close abdominal wall separation safely post-delivery.",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "PELVIC ORGAN PROLAPSE",
      sub: "Non-Surgical Support & Pressure Control",
      desc: "Discreet pelvic floor strengthening, bowel positioning ergonomics, and pressure regulation techniques managing mild-to-moderate organ prolapse.",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "VAGINISMUS & HYPERTONIC PELVIC FLOOR",
      sub: "Confidential Pelvic Muscle Relaxation",
      desc: "Compassionate, slow-paced physical therapy focused on hypertonic pelvic floor muscle relaxation, diaphragmatic breathing, and gradual desensitization.",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "AFTER C-SECTION BACK PAIN",
      sub: "Post-Caesarean Scar & Spine Care",
      desc: "Post-surgical scar tissue mobilization, lumbo-pelvic stabilization exercises, and spine alignment to alleviate lower back ache after C-section delivery.",
      image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=800&q=80"
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
        image="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=2000&q=80"
        pageName="WOMEN'S HEALTH"
        ctaText="BOOK AN APPOINTMENT"
        ctaLink="/book-appointment"
        secondaryCtaText="EXPLORE CONDITIONS"
        secondaryCtaLink="#conditions-grid"
        floatBadgeText="FEMALE CARE SUITE"
        floatBadgeValue="Discreet & Private"
      />

      {/* 2. INTRODUCTION SECTION */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#FAF7F1] border-b border-[#D8D0C3]">
        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          <ImageReveal className="lg:col-span-6 relative" direction="left">
            <div className="aspect-[4/3] rounded-[28px] overflow-hidden shadow-2xl border-4 border-[#FAF7F1] relative group">
              <img 
                src={woImg} 
                alt="Tamanya Female Pelvic Rehabilitation Suite" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 animate-ken-burns" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#293225]/50 via-transparent to-transparent" />
            </div>

            <FloatElement yOffset={10} duration={6} className="absolute -bottom-6 -right-4 sm:right-6 bg-gradient-to-br from-[#3F4A32] to-[#293225] text-white p-6 rounded-[22px] shadow-2xl border-2 border-[#B89A5A]/50 max-w-xs">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#B89A5A] block mb-1">PRIVATE SUITE</span>
              <p className="font-serif text-xl font-bold text-white">100% Confidential</p>
              <p className="text-xs text-[#FAF7F1]/85 font-light mt-1">
                Personalized consultations led by Dr. Neha Gupta (M.P.T Ortho) in Pandeypur, Varanasi.
              </p>
            </FloatElement>
          </ImageReveal>

          <FadeIn className="lg:col-span-6 space-y-6" direction="right" delay={0.2}>
            <span className="text-[#5F6B45] uppercase tracking-[0.25em] text-xs font-bold block">SPECIALISED FEMALE CARE</span>
            <TextReveal className="font-serif text-3xl sm:text-5xl text-[#293225] font-bold tracking-tight">
              Compassionate, Confidential Pelvic Care.
            </TextReveal>
            <p className="text-[#252822]/85 text-base sm:text-lg font-light leading-relaxed">
              Pelvic floor concerns are common, yet frequently unaddressed. At Tamanya, we provide a supportive, medical setting to evaluate pelvic floor function, urinary incontinence, post-delivery recovery, and pelvic pain.
            </p>
            <div className="pt-2">
              <Link to="/book-appointment" className="btn-olive inline-flex items-center gap-2 group">
                <span>BOOK PRIVATE CONSULTATION</span>
                <span className="group-hover:translate-x-1.5 transition-transform">→</span>
              </Link>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* 3. ANTENATAL & POSTNATAL HIGHLIGHT SECTIONS */}
      <section className="py-20 px-6 lg:px-12 bg-[#F4EFE6] border-b border-[#D8D0C3]">
        <StaggerContainer className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-8" staggerDelay={0.2}>
          
          {/* Antenatal Box */}
          <StaggerItem>
            <motion.div 
              whileHover={{ y: -6, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
              className="bg-[#FAF7F1] p-10 rounded-[28px] border-2 border-[#D8D0C3] space-y-4 shadow-sm hover:shadow-xl transition-shadow"
            >
              <span className="bg-[#5F6B45] text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-bold inline-block">
                PREGNANCY CARE
              </span>
              <h3 className="font-serif text-3xl font-bold text-[#293225]">Antenatal Trimester-Wise Care</h3>
              <p className="text-[#252822]/80 text-sm font-light leading-relaxed">
                Trimester-by-trimester physical guidance relieving pregnancy back ache, pelvic girdle strain, and pubic symphysis discomfort while safely preparing the pelvic floor for delivery.
              </p>
              <div className="pt-2 grid grid-cols-3 gap-3 text-center text-xs font-bold text-[#5F6B45]">
                <div className="bg-[#F4EFE6] p-3 rounded-xl border border-[#D8D0C3]">1st Trimester</div>
                <div className="bg-[#F4EFE6] p-3 rounded-xl border border-[#D8D0C3]">2nd Trimester</div>
                <div className="bg-[#F4EFE6] p-3 rounded-xl border border-[#D8D0C3]">3rd Trimester</div>
              </div>
            </motion.div>
          </StaggerItem>

          {/* Postnatal Box */}
          <StaggerItem>
            <motion.div 
              whileHover={{ y: -6, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
              className="bg-[#FAF7F1] p-10 rounded-[28px] border-2 border-[#D8D0C3] space-y-4 shadow-sm hover:shadow-xl transition-shadow"
            >
              <span className="bg-[#3F4A32] text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-bold inline-block">
                MOTHER'S RECOVERY
              </span>
              <h3 className="font-serif text-3xl font-bold text-[#293225]">Postnatal & C-Section Recovery</h3>
              <p className="text-[#252822]/80 text-sm font-light leading-relaxed">
                Post-delivery core rehabilitation addressing abdominal wall separation (Diastasis Recti), C-section scar pain, urinary leakage, and lower back stabilization after delivery.
              </p>
              <div className="pt-2 grid grid-cols-2 gap-3 text-center text-xs font-bold text-[#3F4A32]">
                <div className="bg-[#F4EFE6] p-3 rounded-xl border border-[#D8D0C3]">Diastasis Recti Rehab</div>
                <div className="bg-[#F4EFE6] p-3 rounded-xl border border-[#D8D0C3]">C-Section Scar Therapy</div>
              </div>
            </motion.div>
          </StaggerItem>

        </StaggerContainer>
      </section>

      {/* 4. VISUAL CONDITION CARDS */}
      <section id="conditions-grid" className="py-24 lg:py-32 px-6 lg:px-12 bg-[#FAF7F1] border-b border-[#D8D0C3]">
        <div className="max-w-[1600px] mx-auto">
          
          <FadeIn className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#5F6B45] uppercase tracking-[0.25em] text-xs font-bold block mb-3">FEMALE HEALTH CONDITIONS</span>
            <TextReveal className="font-serif text-3xl sm:text-5xl text-[#293225] font-bold mb-4">Specialised Pelvic Health Pathways</TextReveal>
            <p className="text-[#252822]/80 text-base sm:text-lg font-light leading-relaxed">
              Evidence-led physical rehabilitation pathways designed for female pelvic health at every life stage.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.12}>
            {conditions.map((item, i) => (
              <StaggerItem key={i}>
                <motion.div 
                  whileHover={{ y: -8, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
                  className="bg-[#F4EFE6] rounded-[24px] overflow-hidden border-2 border-[#D8D0C3] hover:border-[#5F6B45] shadow-md hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between h-full"
                >
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 animate-ken-burns" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#293225]/70 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 bg-[#5F6B45] text-[#FAF7F1] text-[9px] uppercase tracking-widest px-3 py-1 rounded-full font-bold border border-[#B89A5A]/30">
                      FEMALE HEALTH
                    </span>
                  </div>
                  
                  <div className="p-7 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-[#293225] mb-2 group-hover:text-[#5F6B45] transition-colors">{item.title}</h3>
                      <p className="text-[#5F6B45] text-[11px] font-bold uppercase tracking-wider mb-3">{item.sub}</p>
                      <p className="text-[#252822]/80 text-xs leading-relaxed font-light mb-6">{item.desc}</p>
                    </div>
                    
                    <Link to="/book-appointment" className="pt-4 border-t border-[#D8D0C3] flex items-center justify-between text-[11px] uppercase tracking-widest font-bold text-[#5F6B45]">
                      <span>BOOK PRIVATE VISIT</span>
                      <span className="group-hover:translate-x-1.5 transition-transform text-[#B89A5A]">→</span>
                    </Link>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </section>

      {/* 5. EDUCATIONAL PELVIC FLOOR SECTION */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#F4EFE6] border-b border-[#D8D0C3]">
        <div className="max-w-[1600px] mx-auto text-center">
          <FadeIn className="mb-16">
            <span className="text-[#5F6B45] uppercase tracking-[0.25em] text-xs font-bold block mb-3">CARE PROCESS</span>
            <TextReveal className="font-serif text-3xl sm:text-5xl text-[#293225] font-bold">Understanding Pelvic Floor Health</TextReveal>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.15}>
            {[
              { step: "01 ASSESS", title: "Private Assessment", desc: "Confidential evaluation of posture, core engagement, and pelvic symptoms in a private suite." },
              { step: "02 UNDERSTAND", title: "Root-Cause Education", desc: "Helping you understand muscle tone, hypertonicity vs. weakness, and pressure regulation." },
              { step: "03 PERSONALISE", title: "Tailored Therapy", desc: "Customised biofeedback, manual therapy, diaphragmatic breathing, and pelvic re-education." },
              { step: "04 PROGRESS", title: "Functional Recovery", desc: "Restoring confidence in daily movement, exercising without leakage, and pain-free living." }
            ].map((step, i) => (
              <StaggerItem key={i}>
                <motion.div 
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  className="bg-[#FAF7F1] p-8 rounded-[24px] border border-[#D8D0C3] text-left h-full shadow-sm hover:shadow-lg transition-all"
                >
                  <span className="bg-[#E8ECDF] text-[#5F6B45] text-[10px] font-bold tracking-wider px-3 py-1 rounded-full uppercase inline-block mb-4">
                    {step.step}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#293225] mb-2">{step.title}</h3>
                  <p className="text-xs text-[#252822]/80 font-light leading-relaxed">{step.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 6. RELATED SERVICES NAVIGATION */}
      <section className="py-20 px-6 lg:px-12 bg-[#FAF7F1] border-b border-[#D8D0C3]">
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
              <Link to="/skin-care" className="block h-full">
                <motion.div whileHover={{ y: -6 }} className="bg-[#F4EFE6] p-8 rounded-[24px] border border-[#D8D0C3] hover:border-[#5F6B45] text-left group h-full transition-colors shadow-sm hover:shadow-md">
                  <span className="text-xs font-bold text-[#5F6B45] uppercase tracking-widest block mb-2">DIVISION 03</span>
                  <h3 className="font-serif text-2xl font-bold text-[#293225] group-hover:text-[#5F6B45] mb-2 transition-colors">Aesthetic Skin Care</h3>
                  <p className="text-xs text-[#252822]/75 font-light">Integrative skin rejuvenation, acne treatment & peels.</p>
                </motion.div>
              </Link>
            </StaggerItem>

            <StaggerItem>
              <Link to="/slimming-wellness" className="block h-full">
                <motion.div whileHover={{ y: -6 }} className="bg-[#F4EFE6] p-8 rounded-[24px] border border-[#D8D0C3] hover:border-[#5F6B45] text-left group h-full transition-colors shadow-sm hover:shadow-md">
                  <span className="text-xs font-bold text-[#5F6B45] uppercase tracking-widest block mb-2">DIVISION 04</span>
                  <h3 className="font-serif text-2xl font-bold text-[#293225] group-hover:text-[#5F6B45] mb-2 transition-colors">Slimming & Body Shaping</h3>
                  <p className="text-xs text-[#252822]/75 font-light">Vacuum cavitation, Body Shaper & deep heat therapies.</p>
                </motion.div>
              </Link>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* 7. FAQ & CTA */}
      <section className="py-24 px-6 lg:px-12 bg-[#F4EFE6]">
        <FadeIn className="max-w-4xl mx-auto text-center">
          <TextReveal className="font-serif text-3xl font-bold text-[#293225] mb-8">Women's Health FAQs</TextReveal>
          <div className="space-y-4 text-left mb-12">
            {faqs.map((faq, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#FAF7F1] p-6 rounded-[16px] border border-[#D8D0C3]"
              >
                <h4 className="font-serif text-base font-bold text-[#293225] mb-2">{faq.q}</h4>
                <p className="text-xs text-[#252822]/80 font-light leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
          <Link to="/book-appointment" className="btn-olive inline-flex items-center gap-2 group">
            <span>BOOK PRIVATE CONSULTATION WITH DR. NEHA GUPTA</span>
            <span className="group-hover:translate-x-1.5 transition-transform">→</span>
          </Link>
        </FadeIn>
      </section>

    </PageTransition>
  );
}

