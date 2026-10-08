import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import woImg from '../assets/wo.jpg';

export default function WomensHealth() {
  const [openFaq, setOpenFaq] = useState(null);

  const pelvicConditions = [
    {
      title: "PCOD / PCOS",
      sub: "Hormonal & Metabolic Exercise Guidance",
      desc: "Targeted low-impact exercise prescription, postural loading, and lifestyle guidance to support metabolic health and pelvic circulatory balance.",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "MENSTRUAL PAIN",
      sub: "Dysmenorrhea Management",
      desc: "Targeted pelvic physical therapy, gentle thermal modalities, and circulatory release techniques for relief from primary dysmenorrhea and pelvic cramping.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "ANTENATAL REHAB",
      sub: "Trimester-Wise Pregnancy Care",
      desc: "Trimester-specific pelvic girdle support, lumbar back pain relief, posture adjustments, and physical preparation for a comfortable pregnancy journey.",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "POSTNATAL REHAB",
      sub: "Structured Post-Delivery Recovery",
      desc: "Safe, progressive recovery programs to re-activate deep pelvic floor muscles, rebuild abdominal strength, and restore functional energy post-delivery.",
      image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "URINE LEAKAGE",
      sub: "Stress & Urge Incontinence Support",
      desc: "Targeted pelvic floor muscle re-education, biofeedback principles, and intra-abdominal pressure management to eliminate involuntary urine leakage.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "DIASTASIS RECTI",
      sub: "Abdominal Separation Rehabilitation",
      desc: "Evidence-informed core re-education to safely close abdominal muscle separation without strain or intra-abdominal pressure overload.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "PELVIC ORGAN PROLAPSE",
      sub: "Non-Surgical Support & Pressure Management",
      desc: "Discreet pelvic floor strengthening, bowel positioning ergonomics, and pressure regulation techniques to manage mild-to-moderate organ prolapse.",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "DYSMENORRHEA",
      sub: "Severe Menstrual Cramp Therapy",
      desc: "Therapeutic manual release, heat applications, and gentle pelvic mobilization to relieve deep menstrual spasm and chronic pelvic congestion.",
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "VAGINISMUS",
      sub: "Confidential Pelvic Muscle Relaxation",
      desc: "Compassionate, slow-paced physical therapy focused on hypertonic pelvic floor muscle relaxation, diaphragmatic breathing, and gradual desensitization.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "CONSTIPATION & BOWEL HEALTH",
      sub: "Pelvic Dyssynergia & Gut Support",
      desc: "Evaluation of pelvic floor muscle coordination during defecation, squatting mechanics correction, and biofeedback posture guidance.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "PELVIC PAIN",
      sub: "Chronic Pelvic Discomfort Relief",
      desc: "Specialised manual therapy, myofascial trigger point release, and pelvic relaxation exercises for persistent pelvic, pubic, or tailbone pain.",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80"
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
    },
    {
      q: "What pelvic floor concerns can I discuss during consultation?",
      a: "You can comfortably discuss urine leakage when coughing/sneezing, heavy pelvic pressure, painful intercourse or vaginismus, chronic pelvic pain, menstrual cramping, or post-delivery back ache. All consultations are 100% confidential."
    },
    {
      q: "What happens during my initial pelvic health evaluation?",
      a: "Your initial assessment involves a private clinical discussion of your medical history, symptoms, posture, and movement patterns. Dr. Neha Gupta explains every step clearly before proceeding with any non-invasive evaluation."
    },
    {
      q: "How can I book a private consultation at Tamanya?",
      a: "You can book directly by calling +91 70076 67808 or clicking the 'Book Appointment' button on our website. Our clinic campus is located conveniently in Pandeypur, Varanasi."
    }
  ];

  return (
    <div className="bg-[#FFF9F6] text-[#351D2B] min-h-screen font-sans">
      
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

      {/* 2. INTRODUCTION SECTION — 2-Column Clinical Layout */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-white border-b border-[#F6DCE4]">
        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column Image */}
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/3] rounded-[28px] overflow-hidden shadow-2xl border-4 border-[#FFF9F6] relative group">
              <img 
                src={woImg} 
                alt="Women's Pelvic Rehabilitation Care at Tamanya" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#351D2B]/40 via-transparent to-transparent" />
            </div>

            {/* Badge */}
            <div className="absolute -bottom-6 left-6 bg-gradient-to-r from-[#9E3D63] to-[#7D294B] text-white px-6 py-4 rounded-2xl shadow-xl border border-[#C94F78]/40">
              <p className="font-serif text-sm font-bold">Dr. Neha Gupta Lead Care</p>
              <p className="text-[11px] text-[#FFF9F6]/85 font-light">100% Confidential Private Suite in Varanasi</p>
            </div>
          </div>

          {/* Right Column Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-6 h-[2px] bg-[#9E3D63] block"></span>
              <span className="text-[#9E3D63] uppercase tracking-[0.25em] text-[11px] font-bold">
                PELVIC FLOOR CARE
              </span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-5xl text-[#351D2B] font-bold leading-tight">
              Compassionate & Discreet Clinical Excellence for Women.
            </h2>

            <p className="text-[#351D2B]/80 text-base sm:text-lg font-light leading-relaxed">
              Pelvic floor dysfunction, urinary incontinence, diastasis recti, and chronic pelvic pain affect millions of women, yet remain underdiagnosed due to hesitation or lack of specialized care.
            </p>

            <p className="text-[#351D2B]/75 text-sm sm:text-base font-light leading-relaxed">
              At Tamanya Physio & Health Clinic in Pandeypur, Varanasi, <strong>Dr. Neha Gupta</strong> provides evidence-informed, compassionate evaluation tailored to female pelvic health, pregnancy, and postpartum recovery in a safe and completely confidential clinical setting.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link 
                to="/book-appointment" 
                className="bg-gradient-to-r from-[#C94F78] to-[#9E3D63] hover:from-[#9E3D63] hover:to-[#7D294B] text-white font-bold px-8 py-3.5 rounded-full text-xs uppercase tracking-widest transition-all shadow-md hover:-translate-y-0.5"
              >
                BOOK PRIVATE CONSULTATION
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* 3. PELVIC FLOOR CONDITIONS GRID */}
      <section id="conditions-grid" className="py-24 lg:py-32 px-6 lg:px-12 bg-[#FFF9F6] border-b border-[#F6DCE4]">
        <div className="max-w-[1600px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-6 h-[2px] bg-[#9E3D63] block"></span>
              <span className="text-[#9E3D63] uppercase tracking-[0.25em] text-[11px] font-bold">SPECIALISED FEMALE SERVICES</span>
              <span className="w-6 h-[2px] bg-[#9E3D63] block"></span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#351D2B] font-bold mb-6">Conditions We Evaluate & Support</h2>
            <p className="text-[#351D2B]/75 text-base sm:text-lg font-light leading-relaxed">
              Explore our complete suite of clinical female pelvic floor, maternity, and musculoskeletal care options.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pelvicConditions.map((card, i) => (
              <Link 
                key={i} 
                to="/book-appointment"
                className="bg-white rounded-[24px] overflow-hidden border border-[#F6DCE4] hover:border-[#C94F78] shadow-[0_15px_35px_rgba(53,29,43,0.05)] hover:shadow-[0_30px_60px_rgba(201,79,120,0.20)] transform hover:-translate-y-2 transition-all duration-500 group flex flex-col justify-between block relative"
              >
                {/* Top Image with Zoom */}
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#351D2B]/60 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 bg-[#7D294B] text-[#FFF9F6] text-[10px] font-bold px-3 py-1 rounded-full shadow-md font-serif">
                    {i + 1 < 10 ? `0${i + 1}` : i + 1}
                  </span>
                </div>

                <div className="p-8 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#351D2B] mb-1 group-hover:text-[#C94F78] transition-colors leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-[#9E3D63] text-xs font-semibold uppercase tracking-wider mb-4">
                      {card.sub}
                    </p>
                    <p className="text-[#351D2B]/75 text-xs font-light leading-relaxed mb-6">
                      {card.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#F6DCE4] flex items-center justify-between text-[11px] uppercase tracking-widest font-bold text-[#351D2B] group-hover:text-[#C94F78] transition-colors">
                    <span>BOOK CONSULTATION</span>
                    <span className="group-hover:translate-x-1.5 transition-transform text-[#C94F78]">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* 4. ANTENATAL REHABILITATION SECTION */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-white border-b border-[#F6DCE4]">
        <div className="max-w-[1600px] mx-auto">
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-16">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[#9E3D63] uppercase tracking-[0.25em] text-xs font-bold block">PREGNANCY WELLNESS</span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#351D2B] font-bold leading-tight">
                ANTENATAL REHABILITATION
              </h2>
              <p className="text-[#351D2B]/80 text-base sm:text-lg font-light leading-relaxed">
                Pregnancy causes significant shifts in your pelvic alignment, center of gravity, and muscle loading. Personalised antenatal physical support helps ease spinal strain and prepares your body safely across each stage.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="aspect-[16/9] rounded-[24px] overflow-hidden shadow-2xl border-4 border-[#FFF9F6] group">
                <img 
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80" 
                  alt="Antenatal Rehabilitation" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
            </div>
          </div>

          {/* Trimester Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#FFF9F6] p-8 rounded-[24px] border border-[#F6DCE4] shadow-sm hover:shadow-lg transition-all">
              <span className="text-xs font-bold uppercase tracking-widest text-[#9E3D63] block mb-2">STAGE 01</span>
              <h3 className="font-serif text-xl font-bold text-[#351D2B] mb-3">FIRST TRIMESTER</h3>
              <p className="text-[#351D2B]/75 text-xs font-light leading-relaxed">
                Focus on gentle posture awareness, ergonomic sitting/sleeping guidance, breathing mechanics, and safe physical loading principles.
              </p>
            </div>

            <div className="bg-[#FFF9F6] p-8 rounded-[24px] border border-[#F6DCE4] shadow-sm hover:shadow-lg transition-all">
              <span className="text-xs font-bold uppercase tracking-widest text-[#9E3D63] block mb-2">STAGE 02</span>
              <h3 className="font-serif text-xl font-bold text-[#351D2B] mb-3">SECOND TRIMESTER</h3>
              <p className="text-[#351D2B]/75 text-xs font-light leading-relaxed">
                Pelvic girdle stabilization, lower back ache relief, gentle glute strengthening, and abdominal muscle support as your bump grows.
              </p>
            </div>

            <div className="bg-[#FFF9F6] p-8 rounded-[24px] border border-[#F6DCE4] shadow-sm hover:shadow-lg transition-all">
              <span className="text-xs font-bold uppercase tracking-widest text-[#9E3D63] block mb-2">STAGE 03</span>
              <h3 className="font-serif text-xl font-bold text-[#351D2B] mb-3">THIRD TRIMESTER</h3>
              <p className="text-[#351D2B]/75 text-xs font-light leading-relaxed">
                Pelvic floor relaxation techniques, labor positioning mobility, tailbone pressure relief, and gentle breathing exercises for delivery.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. POSTNATAL REHABILITATION SECTION */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#FFF9F6] border-b border-[#F6DCE4]">
        <div className="max-w-[1600px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#9E3D63] uppercase tracking-[0.25em] text-[11px] font-bold block mb-4">POSTPARTUM RECOVERY</span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#351D2B] font-bold mb-6">POSTNATAL RECOVERY</h2>
            <p className="text-[#351D2B]/75 text-base sm:text-lg font-light leading-relaxed">
              Safe, structured postpartum physical care designed to rebuild pelvic floor tone and core confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { title: "Postnatal Rehab", desc: "Structured return-to-activity after delivery.", img: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=600&q=80" },
              { title: "Diastasis Recti", desc: "Abdominal separation evaluation & core repair.", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80" },
              { title: "Urine Leakage", desc: "Pelvic muscle re-education for bladder control.", img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80" },
              { title: "Pelvic Pain", desc: "Relief from postpartum pubic symphysis ache.", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80" },
              { title: "After C-Section Pain", desc: "C-section scar tissue mobilization & back care.", img: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=600&q=80" }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-[20px] overflow-hidden border border-[#F6DCE4] shadow-sm hover:shadow-md transition-all group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-base font-bold text-[#351D2B] mb-1">{item.title}</h3>
                  <p className="text-[#351D2B]/70 text-xs font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. PELVIC FLOOR VISUAL EXPLANATION SECTION */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-white border-b border-[#F6DCE4]">
        <div className="max-w-[1600px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#9E3D63] uppercase tracking-[0.25em] text-[11px] font-bold block mb-4">CLINICAL FRAMEWORK</span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#351D2B] font-bold mb-6">
              UNDERSTANDING PELVIC FLOOR HEALTH
            </h2>
            <p className="text-[#351D2B]/75 text-base sm:text-lg font-light leading-relaxed">
              Our 4-step clinical approach to private female pelvic health evaluation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: "01", step: "ASSESS", desc: "Private clinical consultation to evaluate posture, pelvic muscle tone, symptoms, and lifestyle factors." },
              { num: "02", step: "UNDERSTAND", desc: "Clear clinical explanation of your diagnosis, anatomical factors, and rehabilitation expectations." },
              { num: "03", step: "PERSONALISE", desc: "Individualized program combining gentle pelvic floor re-education, manual therapy, and breathing work." },
              { num: "04", step: "PROGRESS", desc: "Monitored progress, posture guidance, and functional re-building for confident daily living." }
            ].map((card, i) => (
              <div key={i} className="bg-[#FFF9F6] p-8 rounded-[24px] border-2 border-[#F6DCE4] hover:border-[#C94F78] shadow-sm hover:shadow-xl transition-all group">
                <span className="text-3xl font-serif font-bold text-[#C94F78] block mb-3">{card.num}</span>
                <h3 className="font-serif text-xl font-bold text-[#351D2B] mb-3 tracking-wide">{card.step}</h3>
                <p className="text-[#351D2B]/75 text-xs font-light leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. WOMEN'S HEALTH FAQ SECTION */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#FFF9F6] border-b border-[#F6DCE4]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#9E3D63] uppercase tracking-[0.25em] text-[11px] font-bold block mb-4">WOMEN'S HEALTH FAQ</span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#351D2B] font-bold">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-[16px] border border-[#F6DCE4] overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 text-left flex justify-between items-center focus:outline-none group"
                >
                  <span className="font-serif text-base sm:text-lg text-[#351D2B] font-bold flex items-center gap-4 group-hover:text-[#C94F78] transition-colors">
                    <span className="text-[#C94F78] text-sm font-mono">0{i + 1}</span>
                    {faq.q}
                  </span>
                  <span className={`text-[#C94F78] text-xl font-bold transform transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 pt-2 text-[#351D2B]/80 text-sm font-light leading-relaxed border-t border-[#F6DCE4]/60 bg-[#FFF9F6]">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WOMEN'S HEALTH CTA — Deep Berry Section */}
      <section className="py-24 px-6 lg:px-12 bg-gradient-to-br from-[#7D294B] via-[#5C1D36] to-[#351D2B] text-white text-center border-t border-[#C94F78]/40">
        <div className="max-w-4xl mx-auto space-y-8">
          <span className="text-[#E8A6B8] uppercase tracking-[0.25em] text-xs font-bold block">CONFIDENTIAL CARE</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
            YOUR HEALTH DESERVES PERSONALISED CARE.
          </h2>
          <p className="text-[#FFF9F6]/85 text-base sm:text-lg font-light leading-relaxed max-w-xl mx-auto">
            Book your private pelvic floor or maternity rehabilitation consultation with Dr. Neha Gupta in Varanasi today.
          </p>
          <div className="pt-4 flex flex-wrap gap-4 justify-center">
            <Link 
              to="/book-appointment" 
              className="bg-gradient-to-r from-[#C94F78] to-[#9E3D63] hover:from-[#9E3D63] hover:to-[#7D294B] text-white font-extrabold px-10 py-4 rounded-full text-xs uppercase tracking-widest transition-all shadow-[0_4px_25px_rgba(201,79,120,0.5)] hover:scale-105"
            >
              BOOK AN APPOINTMENT
            </Link>
            <a 
              href="tel:+917007667808" 
              className="bg-white/10 hover:bg-white/20 text-[#FFF9F6] border border-white/40 font-bold px-10 py-4 rounded-full text-xs uppercase tracking-widest transition-all"
            >
              CALL +91 70076 67808
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
