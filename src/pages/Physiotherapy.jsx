import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import phyImg from '../assets/phy.jpg';
import cliImg from '../assets/cli.jpeg';

export default function Physiotherapy() {
  const [openFaq, setOpenFaq] = useState(null);

  const orthopaedicCards = [
    {
      title: "BACK PAIN & LOWER BACK PAIN",
      includes: "Disc Bulge, Sciatica, Lumbar Stiffness & Postural Strain",
      desc: "Targeted mechanical therapy and core stabilization for lumbar spine pain, sciatica nerve radiation, disc herniation management, and posture-induced stiffness.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "NECK PAIN & CERVICAL SPONDYLOSIS",
      includes: "Stiffness, Nerve Impingement & Desk Posture Pain",
      desc: "Comprehensive cervical spine mobilization, trapezius spasm release, and ergonomic posture correction designed to relieve acute neck pain and arm numbness.",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "JOINT PAIN & ARTHRITIS",
      includes: "Knee Osteoarthritis, Shoulder, Hip & Wrist Pain",
      desc: "Evidence-informed joint mobility exercises, manual therapy, and inflammation reduction modalities to preserve joint cartilage and restore smooth movement.",
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "ACL / MCL & MENISCUS INJURIES",
      includes: "Ligament Tears, Sprains, Tendinitis & Ankle Instability",
      desc: "Structured knee dynamic loading, hamstring and quadriceps strengthening, dynamic joint proprioception, and non-surgical ligament rehabilitation.",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "PRE & POST SURGERY REHABILITATION",
      includes: "Total Knee Replacement (TKR) & Total Hip Replacement (THR)",
      desc: "Phased post-surgical rehabilitation protocols for Total Knee (TKR) and Hip (THR) replacements, focusing on range of motion, gait re-education, and strength.",
      image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "SPORTS INJURIES & CONDITIONING",
      includes: "Muscle Sprain, Strain, Rotator Cuff & Tennis Elbow",
      desc: "Dedicated sports injury recovery protocols for athletes and active individuals to accelerate soft tissue repair, regain agility, and prevent re-injury.",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const neurologicalCards = [
    { title: "STROKE REHABILITATION", desc: "Motor control retraining, gait balance, and neuro-muscular facilitation to maximize independence." },
    { title: "PARKINSON'S MANAGEMENT", desc: "Targeted posture re-education, amplitude movement drills, and fall-prevention balance training." },
    { title: "SCIATICA & NERVE COMPRESSION", desc: "Nerve gliding exercises, lumbar decompression, and muscle spasm relief." },
    { title: "BELL'S PALSY & FACIAL THERAPY", desc: "Facial nerve stimulation, gentle manual muscle re-education, and symmetry restoration." },
    { title: "SPINAL CORD INJURY SUPPORT", desc: "Functional strength loading, mobility support, and spasticity management protocols." },
    { title: "BALANCE & GAIT RETRAINING", desc: "Proprioceptive training and gait retraining for steady, confident everyday walking." }
  ];

  const advancedTherapies = [
    { name: "Ultrasonic Therapy", desc: "Deep thermal sound waves for tissue healing & deep muscle spasm reduction.", icon: "🌊" },
    { name: "Laser Therapy", desc: "Low-level laser irradiation for rapid cellular repair and tendon pain relief.", icon: "⚡" },
    { name: "IFT / TENS Modalities", desc: "Interferential current & transcutaneous nerve stimulation for immediate pain blockade.", icon: "🔌" },
    { name: "Shortwave Diathermy (SWD)", desc: "Deep thermal electromagnetic energy for severe joint stiffness & arthritis relief.", icon: "🔥" },
    { name: "Digital Traction", desc: "Computerised lumbar & cervical traction for spinal disc space decompression.", icon: "📐" },
    { name: "IASTM Soft Tissue", desc: "Instrument-assisted soft tissue mobilization to break fascial adhesions & scar tissue.", icon: "🛠️" },
    { name: "PEMF Therapy", desc: "Pulsed electromagnetic field therapy to stimulate bone & deep tissue cellular recovery.", icon: "🧲" },
    { name: "Myofascial Release", desc: "Sustained hands-on pressure into myofascial restrictions to eliminate pain.", icon: "🤲" },
    { name: "Therapeutic Steam", desc: "Localized moist thermal steam application for muscular relaxation & micro-circulation.", icon: "♨️" },
    { name: "Cupping Therapy (Dry/Wet)", desc: "Traditional dry & wet Hijama cupping for localized metabolic detox and pain relief.", icon: "🏺" },
    { name: "Dry Needling Therapy", desc: "Precision filament needles targeted into muscular trigger points to resolve knots.", icon: "📍" },
    { name: "Kinesiology Taping", desc: "Neuro-muscular elastic taping for joint stability, edema drainage, and proprioception.", icon: "🩹" },
    { name: "Orthopaedic Manual Therapy", desc: "High-velocity low-amplitude joint mobilizations, spinal alignment, and passive stretches.", icon: "💆" }
  ];

  const faqs = [
    {
      q: "What orthopaedic conditions benefit most from manual physical therapy?",
      a: "Manual physical therapy is exceptionally effective for lower back pain, sciatica, cervical spondylosis, frozen shoulder, knee osteoarthritis, and post-surgical joint stiffness. Dr. Neha Gupta combines joint mobilization with electrotherapy modalities for maximum relief."
    },
    {
      q: "How many sessions of physiotherapy will I need for my condition?",
      a: "The length of rehabilitation depends on your clinical diagnosis, severity, and functional goals. Acute sprains or spasms often show significant improvement within 5–8 sessions, while post-surgical (TKR/THR) or neurological recovery follows structured multi-week protocols."
    },
    {
      q: "Are the advanced electrotherapy modalities safe and painless?",
      a: "Yes, completely. All modalities used at Tamanya Health (including Ultrasonic, IFT, Laser, SWD, and PEMF) are evidence-informed, FDA-compliant, non-invasive, and administered safely by experienced clinical staff."
    },
    {
      q: "Do I need an X-ray or doctor's referral before booking an appointment?",
      a: "No referral is needed. You can book an appointment directly. If you have existing X-rays, MRI scans, or doctor reports, please bring them to your initial evaluation with Dr. Neha Gupta."
    }
  ];

  return (
    <div className="bg-[#FFF9F6] text-[#351D2B] min-h-screen font-sans">
      
      {/* 1. HERO SECTION */}
      <PageHero 
        title="Move Better. Recover Stronger."
        category="PERSONALISED PHYSIOTHERAPY"
        subtitle="Personalised physiotherapy and rehabilitation designed around your condition, movement goals and everyday needs in Pandeypur, Varanasi."
        image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2070&q=80"
        pageName="PHYSIOTHERAPY"
        ctaText="BOOK AN APPOINTMENT"
        ctaLink="/book-appointment"
        secondaryCtaText="EXPLORE CARE"
        secondaryCtaLink="#orthopaedic-section"
        floatBadgeText="PHYSIO EXPERTISE"
        floatBadgeValue="M.P.T Orthopaedics"
      />

      {/* 2. INTRODUCTION SECTION — 2-Column Premium Layout */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-white border-b border-[#F6DCE4]">
        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Large Physiotherapy Image with Floating Statistic Badge */}
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/3] rounded-[28px] overflow-hidden shadow-2xl border-4 border-[#FFF9F6] relative group">
              <img 
                src={phyImg} 
                alt="Tamanya Personalised Physiotherapy Care" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#351D2B]/50 via-transparent to-transparent" />
            </div>

            {/* Floating Statistic Visual Badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-gradient-to-br from-[#7D294B] to-[#351D2B] text-white p-6 rounded-[22px] shadow-2xl border-2 border-[#C94F78]/50 max-w-xs transform hover:scale-105 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-3 h-3 rounded-full bg-[#C94F78] animate-ping"></span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#E8A6B8]">CLINICAL RECORD</span>
              </div>
              <p className="font-serif text-3xl font-bold text-white">7+ Years</p>
              <p className="text-xs text-[#FFF9F6]/85 font-light mt-1">
                Clinical practice led by Dr. Neha Gupta (M.P.T Ortho) serving Varanasi since 2019.
              </p>
            </div>
          </div>

          {/* Right Column: Verified Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-6 h-[2px] bg-[#9E3D63] block"></span>
              <span className="text-[#9E3D63] uppercase tracking-[0.25em] text-[11px] font-bold">
                PERSONALISED PHYSIOTHERAPY CARE
              </span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-5xl text-[#351D2B] font-bold leading-tight">
              Evidence-Informed Rehabilitation Built Around Your Life.
            </h2>

            <p className="text-[#351D2B]/80 text-base sm:text-lg font-light leading-relaxed">
              At Tamanya Physio & Health Clinic in Pandeypur, Varanasi, physiotherapy is delivered through a direct, patient-focused approach led by <strong>Dr. Neha Gupta (M.P.T Orthopaedics)</strong>. Rather than relying on temporary fixes, our treatment protocols focus on structural alignment, mechanical joint correction, and long-term functional recovery.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#FFF9F6] border border-[#F6DCE4] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#9E3D63] text-white flex items-center justify-center font-bold shrink-0">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-xs text-[#351D2B]">1-on-1 Assessment</h4>
                  <p className="text-[11px] text-[#351D2B]/70 font-light">Comprehensive posture & joint mobility exam</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#FFF9F6] border border-[#F6DCE4] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#9E3D63] text-white flex items-center justify-center font-bold shrink-0">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-xs text-[#351D2B]">Advanced Modalities</h4>
                  <p className="text-[11px] text-[#351D2B]/70 font-light">Laser, Ultrasonic, Traction & PEMF</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link 
                to="/book-appointment" 
                className="inline-flex items-center gap-2 bg-[#9E3D63] hover:bg-[#7D294B] text-white font-bold px-8 py-3.5 rounded-full text-xs uppercase tracking-widest transition-all shadow-md hover:-translate-y-0.5"
              >
                <span>SCHEDULE CLINICAL EVALUATION</span>
                <span>→</span>
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* 3. ORTHOPAEDIC CONDITIONS SECTION */}
      <section id="orthopaedic-section" className="py-24 lg:py-32 px-6 lg:px-12 bg-[#FFF9F6] border-b border-[#F6DCE4]">
        <div className="max-w-[1600px] mx-auto">
          
          <div className="max-w-3xl mb-20 text-center mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-6 h-[2px] bg-[#9E3D63] block"></span>
              <span className="text-[#9E3D63] uppercase tracking-[0.25em] text-[11px] font-bold">ORTHOPAEDIC PHYSIOTHERAPY</span>
              <span className="w-6 h-[2px] bg-[#9E3D63] block"></span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-[#351D2B] font-bold mb-6">Support for Pain, Injury & Recovery</h2>
            <p className="text-[#351D2B]/75 text-base sm:text-lg font-light leading-relaxed">
              Tailored orthopaedic protocols for spine, joint, ligament, and post-surgical rehabilitation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {orthopaedicCards.map((item, i) => (
              <Link 
                key={i} 
                to="/book-appointment"
                className="bg-white rounded-[24px] overflow-hidden border border-[#F6DCE4] hover:border-[#C94F78] shadow-[0_15px_35px_rgba(53,29,43,0.06)] hover:shadow-[0_30px_60px_rgba(201,79,120,0.22)] transform hover:-translate-y-2 transition-all duration-500 group flex flex-col justify-between block relative"
              >
                {/* Top Card Image with Zoom Effect */}
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#351D2B]/70 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 bg-[#7D294B] text-[#FFF9F6] text-[10px] font-serif font-bold px-3 py-1 rounded-full shadow-md">
                    0{i+1}
                  </span>
                </div>

                <div className="p-8 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#351D2B] mb-2 group-hover:text-[#C94F78] transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-[#9E3D63] text-xs font-semibold uppercase tracking-wider mb-4">
                      {item.includes}
                    </p>
                    <p className="text-[#351D2B]/75 text-xs font-light leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-[#F6DCE4] flex items-center justify-between text-[11px] uppercase tracking-widest font-bold text-[#351D2B] group-hover:text-[#C94F78] transition-colors">
                    <span>BOOK CONSULTATION</span>
                    <span className="text-[#C94F78] group-hover:translate-x-1.5 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* 4. NEUROLOGICAL PHYSIOTHERAPY SECTION */}
      <section className="bg-gradient-to-br from-[#351D2B] via-[#5C1D36] to-[#7D294B] text-white py-24 lg:py-32 px-6 lg:px-12 relative overflow-hidden border-b border-[#C94F78]/30">
        
        {/* Background Ambient Blur */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C94F78]/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-12 gap-16 items-center relative z-10">
          
          <div className="lg:col-span-5 relative aspect-[4/5] w-full rounded-[28px] overflow-hidden shadow-2xl border-4 border-white/20 group">
            <img 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=2000&q=80" 
              alt="Neurological Rehabilitation at Tamanya" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#351D2B]/70 via-transparent to-transparent" />
          </div>
          
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-6 h-[2px] bg-[#E8A6B8] block"></span>
                <span className="text-[#E8A6B8] uppercase tracking-[0.25em] text-[11px] font-bold">SPECIALISED NEURO CARE</span>
              </div>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">Neurological Rehabilitation</h2>
              <p className="text-[#FFF9F6]/85 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
                Evidence-informed neurological physiotherapy protocols designed to improve motor control, balance confidence, posture, and functional independence for patients facing neuromuscular conditions.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {neurologicalCards.map((item, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md border border-white/15 p-5 rounded-2xl hover:bg-white/20 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E8A6B8] shrink-0"></span>
                    <h4 className="text-sm font-bold tracking-wide text-white font-serif">{item.title}</h4>
                  </div>
                  <p className="text-xs text-[#FFF9F6]/75 font-light leading-relaxed pl-5">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link 
                to="/book-appointment" 
                className="inline-block bg-[#E8A6B8] hover:bg-white text-[#351D2B] font-bold px-8 py-3.5 rounded-full text-xs uppercase tracking-widest transition-all shadow-lg hover:scale-105"
              >
                BOOK NEURO EVALUATION
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* 5. ADVANCED PHYSIOTHERAPY THERAPIES (Treatment Gallery) */}
      <section className="bg-white py-24 lg:py-32 px-6 lg:px-12 border-b border-[#F6DCE4]">
        <div className="max-w-[1600px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-6 h-[2px] bg-[#9E3D63] block"></span>
              <span className="text-[#9E3D63] uppercase tracking-[0.25em] text-[11px] font-bold">MODERN CLINICAL MODALITIES</span>
              <span className="w-6 h-[2px] bg-[#9E3D63] block"></span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-[#351D2B] font-bold mb-6">Advanced Therapies</h2>
            <p className="text-[#351D2B]/75 text-base sm:text-lg font-light leading-relaxed">
              We utilize a comprehensive suite of advanced electrotherapy and manual modalities to accelerate tissue repair and relieve pain.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advancedTherapies.map((therapy, i) => (
              <Link 
                key={i} 
                to="/book-appointment" 
                className="bg-[#FFF9F6] p-6 rounded-[20px] border border-[#F6DCE4] shadow-sm hover:border-[#C94F78] hover:shadow-lg transform hover:-translate-y-1 transition-all group block flex flex-col justify-between"
              >
                <div className="flex items-start gap-4">
                  <span className="w-12 h-12 rounded-xl bg-white border border-[#F6DCE4] text-2xl flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 transition-transform">
                    {therapy.icon}
                  </span>
                  <div>
                    <h3 className="text-[#351D2B] font-serif font-bold text-base group-hover:text-[#C94F78] transition-colors mb-1">
                      {therapy.name}
                    </h3>
                    <p className="text-[#351D2B]/70 text-xs font-light leading-relaxed">
                      {therapy.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F6DCE4]/60 flex items-center justify-between text-[10px] uppercase font-bold text-[#9E3D63] tracking-widest">
                  <span>BOOK TREATMENT</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* 6. SPORTS REHABILITATION SECTION */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#FFF9F6] border-b border-[#F6DCE4]">
        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[#9E3D63] uppercase tracking-[0.25em] text-xs font-bold block">ATHLETIC RECOVERY</span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#351D2B] font-bold leading-tight">
              SPORTS INJURY RECOVERY
            </h2>
            <p className="text-[#351D2B]/80 text-base sm:text-lg font-light leading-relaxed">
              Whether you're a competitive athlete or active individual, acute sprains, ligament strains, muscle tears, and rotator cuff injuries demand structured biomechanical rehabilitation.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "Muscle Sprains & Strain Repair",
                "Rotator Cuff & Tennis Elbow Therapy",
                "Hamstring & Achilles Tendon Conditioning",
                "Agility & Return-to-Sport Protocols"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm font-semibold text-[#351D2B]">
                  <span className="w-5 h-5 rounded-full bg-[#C94F78] text-white flex items-center justify-center text-xs font-bold">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link 
                to="/book-appointment" 
                className="inline-block bg-[#9E3D63] hover:bg-[#7D294B] text-white font-bold px-8 py-3.5 rounded-full text-xs uppercase tracking-widest transition-all shadow-md hover:-translate-y-0.5"
              >
                BOOK SPORTS EVALUATION
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/3] rounded-[28px] overflow-hidden shadow-2xl border-4 border-white group">
              <img 
                src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80" 
                alt="Sports Injury Rehabilitation" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </div>

        </div>
      </section>

      {/* 7. POST-SURGERY REHABILITATION SECTION */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-white border-b border-[#F6DCE4]">
        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-[28px] overflow-hidden shadow-2xl border-4 border-[#FFF9F6] group">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80" 
                alt="Pre and Post Surgery Rehabilitation" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <span className="text-[#9E3D63] uppercase tracking-[0.25em] text-xs font-bold block">SURGICAL RECOVERY</span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#351D2B] font-bold leading-tight">
              PRE & POST SURGERY REHABILITATION
            </h2>
            <p className="text-[#351D2B]/80 text-base sm:text-lg font-light leading-relaxed">
              Comprehensive post-surgical rehabilitation for Total Knee Replacement (TKR), Total Hip Replacement (THR), and spinal surgeries.
            </p>
            <p className="text-[#351D2B]/75 text-sm font-light leading-relaxed">
              Early phase swelling management, passive-to-active range of motion exercises, scar tissue mobilization, and progressive weight-bearing retraining ensure your surgery delivers maximum functional outcome.
            </p>

            <div className="pt-2">
              <Link 
                to="/book-appointment" 
                className="inline-block bg-[#7D294B] hover:bg-[#351D2B] text-white font-bold px-8 py-3.5 rounded-full text-xs uppercase tracking-widest transition-all shadow-md hover:-translate-y-0.5"
              >
                SCHEDULE POST-SURGICAL CARE
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 8. WHY TAMANYA PHYSIOTHERAPY */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#FFF9F6] border-b border-[#F6DCE4]">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#9E3D63] uppercase tracking-[0.25em] text-[11px] font-bold block mb-4">CLINICAL ADVANTAGE</span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#351D2B] font-bold mb-6">Why Tamanya Physiotherapy</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Dr. Neha Gupta Leadership", desc: "Consultations and treatment plans led directly by M.P.T (Ortho) specialist with 7+ years practice." },
              { num: "02", title: "Targeted Mechanical Repair", desc: "Focusing on postural alignment, joint mechanics, and core stabilization rather than short-term relief." },
              { num: "03", title: "Modern Private Suite", desc: "Clean, comfortable clinical setting in Pandeypur, Varanasi equipped with advanced therapeutic modalities." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 sm:p-10 rounded-[24px] border border-[#F6DCE4] shadow-sm hover:shadow-xl hover:border-[#C94F78] transition-all">
                <span className="text-3xl font-serif font-bold text-[#C94F78] block mb-3">{item.num}</span>
                <h3 className="font-serif text-xl font-bold text-[#351D2B] mb-3">{item.title}</h3>
                <p className="text-[#351D2B]/75 text-xs font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ ACCORDION SECTION */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-white border-b border-[#F6DCE4]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#9E3D63] uppercase tracking-[0.25em] text-[11px] font-bold block mb-4">PHYSIOTHERAPY FAQ</span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#351D2B] font-bold">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#FFF9F6] rounded-[16px] border border-[#F6DCE4] overflow-hidden shadow-sm">
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
                  <div className="px-6 pb-6 pt-2 text-[#351D2B]/80 text-sm font-light leading-relaxed border-t border-[#F6DCE4]/60 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA SECTION — Deep Berry / Deep Plum Background */}
      <section className="py-24 px-6 lg:px-12 bg-gradient-to-br from-[#7D294B] via-[#5C1D36] to-[#351D2B] text-white text-center border-t border-[#C94F78]/40">
        <div className="max-w-4xl mx-auto space-y-8">
          <span className="text-[#E8A6B8] uppercase tracking-[0.25em] text-xs font-bold block">TAKE THE NEXT STEP</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
            READY TO TAKE THE NEXT STEP?
          </h2>
          <p className="text-[#FFF9F6]/85 text-base sm:text-lg font-light leading-relaxed max-w-xl mx-auto">
            Book your personalised evaluation with Dr. Neha Gupta at Tamanya Physio & Health Clinic in Pandeypur, Varanasi today.
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
              className="border-2 border-white/40 text-white hover:bg-white/10 font-bold px-10 py-4 rounded-full text-xs uppercase tracking-widest transition-all"
            >
              CALL +91 70076 67808
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
