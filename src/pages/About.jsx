import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '../components/PageHero';
import InsideTamanya from '../components/InsideTamanya';
import { CLINIC_DATA, buildWhatsAppLink } from '../data/clinicData';
import { 
  Award, 
  GraduationCap, 
  HeartPulse, 
  Activity, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Calendar, 
  Building2, 
  Stethoscope, 
  Layers, 
  Globe, 
  Users, 
  ArrowRight, 
  Quote as QuoteIcon, 
  Clock, 
  MapPin,
  ChevronRight,
  Phone,
  MessageCircle,
  ExternalLink,
  Target,
  Sparkle,
  BookOpen,
  TrendingUp,
  Cpu,
  Smile,
  BadgeCheck
} from 'lucide-react';

import nehaImg from '../assets/neha.jpeg';
import cliImg from '../assets/cli.jpeg';
import prizeImg from '../assets/prize.png';
import pressImg from '../assets/g.png';
import campImg1 from '../assets/WhatsApp Image 2026-10-08 at 9.18.29 PM.jpeg';
import campImg2 from '../assets/WhatsApp Image 2026-10-08 at 9.15.12 PM.jpeg';
import consultImg from '../assets/WhatsApp Image 2026-10-08 at 9.14.21 PM.jpeg';
import woImg from '../assets/wo.jpg';

const luxuryEase = [0.16, 1, 0.3, 1];

export default function About() {
  const [activeModality, setActiveModality] = useState(0);

  // 7 Proven Treatment Modalities specified by client
  const modalities = [
    {
      id: 'dry-needling',
      name: 'Dry Needling',
      tagline: 'Deep Myofascial Trigger Point Release',
      desc: 'Precision targeted ultra-fine filiform needles penetrate active myofascial trigger points to release deep neuromuscular knots, stimulate localized microcirculation, and break the pain-spasm-pain reflex loop.',
      benefits: ['Rapid relief from stubborn muscle spasms', 'Neuromuscular trigger point deactivation', 'Restoration of normal muscle firing length', 'Effective for chronic neck, back & gluteal pain'],
      badge: 'Targeted Neuromuscular'
    },
    {
      id: 'kinesio-taping',
      name: 'Kinesio Taping',
      tagline: 'Dynamic Biomechanical & Lymphatic Support',
      desc: 'Therapeutic elastic taping applied along kinetic chains to lift skin layers microscopically, reducing interstitial pressure, accelerating lymphatic drainage, and providing sensory feedback for postural stabilization.',
      benefits: ['Continuous pain relief during dynamic movement', 'Lymphatic clearance & swelling reduction', 'Functional joint stabilization without restricting range', 'Excellent for pregnancy posture & sports injuries'],
      badge: 'Functional Support'
    },
    {
      id: 'iastm',
      name: 'IASTM',
      tagline: 'Instrument-Assisted Soft Tissue Mobilization',
      desc: 'Medical-grade ergonomic stainless steel contoured instruments detect and treat myofascial restrictions, chronic scar tissue adhesions, and cellular fibrosis through controlled micro-trauma and collagen remodeling.',
      benefits: ['Breaks down dense post-surgical scar tissue', 'Stimulates fibroblast activity & new collagen synthesis', 'Relieves stubborn chronic tendonitis & plantar fasciitis', 'Accelerates recovery for sports and orthopaedic injuries'],
      badge: 'Fascial Remodeling'
    },
    {
      id: 'soft-tissue',
      name: 'Soft Tissue Therapy',
      tagline: 'Manual Myofascial Release & Deep Mobilization',
      desc: 'Hands-on clinical soft tissue mobilization combining deep tissue release, trigger point pressure, and kinetic stretching to restore muscle elasticity, relieve fascial tension, and improve joint kinematics.',
      benefits: ['Restores soft tissue pliability & mobility', 'Alleviates tension headaches & cervical tightness', 'Enhances post-surgical joint range of motion', 'Improves muscular oxygenation and metabolic recovery'],
      badge: 'Hands-on Clinical'
    },
    {
      id: 'cupping',
      name: 'Cupping Therapy',
      tagline: 'Myofascial Decompression & Hemodynamic Flow',
      desc: 'Medical vacuum cups create localized negative pressure on contracted tissues, lifting myofascial layers to stimulate blood flow, induce tissue decompression, and clear stagnant cellular waste metabolites.',
      benefits: ['Decompresses tight, overworked muscle groups', 'Stimulates robust microvascular hyperemia', 'Soothes chronic back and shoulder tension', 'Complements manual therapy for deep relaxation'],
      badge: 'Decompression'
    },
    {
      id: 'pemf',
      name: 'PEMF Therapy',
      tagline: 'Pulsed Electromagnetic Field Cellular Healing',
      desc: 'Advanced non-invasive electromagnetic energy pulses penetrate deep into bone and soft tissue structures to repolarize damaged cell membranes, accelerate ATP production, and stimulate bone osteogenesis.',
      benefits: ['Cellular-level energy (ATP) stimulation', 'Accelerates bone healing & fracture non-union recovery', 'Reduces deep inflammatory arthritis swelling', 'Completely non-invasive and relaxing therapy'],
      badge: 'Biomagnetic Tech'
    },
    {
      id: 'tens',
      name: 'TENS & Electrotherapy',
      tagline: 'Neural Pain Modulation & Endorphin Release',
      desc: 'Controlled transcutaneous electrical impulses stimulate sensory nerve pathways according to the Pain Gate Control Theory, blocking pain messages from reaching the brain while stimulating natural beta-endorphins.',
      benefits: ['Immediate non-pharmacological pain reduction', 'Soothes acute and chronic neuropathic pain', 'Promotes muscle re-education following surgery', 'Safe, gentle, and adjustable electrical frequencies'],
      badge: 'Electro-Analgesia'
    }
  ];

  // Multidisciplinary qualifications
  const academicDegrees = [
    {
      degree: "Master's in Physiotherapy (M.P.T)",
      specialisation: "Specialisation in Orthopaedics",
      desc: "Postgraduate clinical mastery in advanced biomechanics, spinal conditions, joint arthroplasty rehabilitation, complex fractures, and musculoskeletal pathologies.",
      year: "Postgraduate Degree",
      icon: GraduationCap
    },
    {
      degree: "Bachelor's in Physiotherapy (B.P.T)",
      specialisation: "Comprehensive Clinical Physical Medicine",
      desc: "Rigorous 4.5-year foundational training in anatomy, neuro-rehabilitation, kinesiology, cardiorespiratory physiotherapy, and clinical practice.",
      year: "Undergraduate Degree",
      icon: BookOpen
    },
    {
      degree: "Diploma in Physiotherapy (D.P.T)",
      specialisation: "Foundational Clinical Physiotherapy",
      desc: "Comprehensive early clinical grounding in electrotherapy, therapeutic exercise prescriptions, and rehabilitative techniques.",
      year: "Clinical Diploma",
      icon: Activity
    },
    {
      degree: "Diploma in Pharmacy (D.Pharm)",
      specialisation: "Clinical Pharmacology & Integrative Healthcare",
      desc: "Completed in 2024 to complement physical therapy with pharmacological knowledge, enhancing the clinical understanding of drug-therapy interactions, inflammation pathways, and holistic recovery.",
      year: "Completed 2024",
      highlight: true,
      icon: Sparkles
    }
  ];

  const womenHealthCertifications = [
    {
      title: "Pelvic Floor Rehabilitation Specialist",
      issuer: "WOW IIPRE & Physioneeds Academy, London",
      desc: "Specialized clinical mastery in female pelvic floor re-education, biofeedback protocols, antenatal & postnatal recovery, and diastasis recti resolution.",
      badge: "Pelvic Floor Specialist"
    },
    {
      title: "CDNP — Certified Dry Needling Practitioner",
      issuer: "Clinical Dry Needling Therapy",
      desc: "Targeted intramuscular filiform trigger point deactivation for acute/chronic myofascial pain syndromes, cervical tension, and deep neuromuscular spasm.",
      badge: "Dry Needling Therapist"
    },
    {
      title: "CCT — Certified Cupping Therapist",
      issuer: "Clinical Cupping Therapy Association",
      desc: "Advanced medical myofascial decompression, kinetic vacuum cupping, localized hyperemia, and accelerated soft tissue metabolic recovery.",
      badge: "Cupping Specialist"
    },
    {
      title: "CMT & CTT — Certified Manual & Taping Therapist",
      issuer: "Manual Physical Medicine & Dynamic Taping",
      desc: "Evidence-based spinal and joint manipulative therapy paired with functional kinesiology elastic taping for neuromuscular and lymphatic support.",
      badge: "Manual & Taping"
    },
    {
      title: "NDT — Neuro-Developmental Treatment",
      issuer: "Neurological Rehabilitation Protocol",
      desc: "Comprehensive therapeutic facilitation for post-stroke hemiplegia, neurological movement disorders, and motor neuromuscular retraining.",
      badge: "Neuro Rehab"
    }
  ];

  // Women's health spectrum
  const womensHealthDomains = [
    {
      title: "Prenatal (Antenatal) Care",
      desc: "Gentle, evidence-based physical therapy addressing pelvic girdle pain, sciatica, sacroiliac discomfort, and biomechanical preparation for safe childbirth.",
      icon: "🤰"
    },
    {
      title: "Postnatal Recovery",
      desc: "Comprehensive post-delivery recovery programs guiding safe return to movement, core reconnection, pelvic stabilization, and maternal stamina rebuilding.",
      icon: "🌸"
    },
    {
      title: "Female Pelvic Floor Rehab",
      desc: "Individualized treatment for pelvic organ prolapse, hypertonic or hypotonic pelvic floor musculature, and chronic pelvic discomfort in total privacy.",
      icon: "✨"
    },
    {
      title: "Urinary Incontinence",
      desc: "Non-surgical, evidence-guided pelvic retraining for stress, urge, and mixed incontinence—empowering women to regain bladder control and social confidence.",
      icon: "💧"
    },
    {
      title: "Diastasis Recti Repair",
      desc: "Specialized non-surgical abdominal separation protocols that restore lineaal tension, close abdominal gaps, and rebuild intra-abdominal core integrity.",
      icon: "🛡️"
    },
    {
      title: "Fertility Rehabilitation",
      desc: "Gentle therapeutic protocols designed to optimize pelvic circulation, relieve myofascial restrictions, improve ovarian-uterine blood flow, and reduce stress.",
      icon: "🌱"
    },
    {
      title: "Lactation & Postural Ergonomics",
      desc: "Personalized postural counseling, thoracic spinal mobilization, and ergonomic guidance to eliminate nursing-induced neck, shoulder, and upper back strain.",
      icon: "🤱"
    },
    {
      title: "Female Sexual Health & Wellness",
      desc: "Empathetic, confidential rehabilitation addressing vaginismus, dyspareunia, and chronic pelvic floor tension through gentle desensitization and neuromuscular release.",
      icon: "🤍"
    }
  ];

  // Entrepreneurial Journey Timeline
  const timelineMilestones = [
    {
      year: "2011",
      title: "Professional Roots & Technology Integration",
      role: "Joined Anvesha Infotech",
      desc: "Began professional career gaining foundational experience in technology, structured systems, and operational dynamics that later inspired modern clinic management.",
      icon: Cpu
    },
    {
      year: "2018",
      title: "Entrepreneurial Networking & Business Platforms",
      role: "Impactful Role at Business Walkins",
      desc: "Played an active role bringing together entrepreneurs, professionals, healthcare brands, and business communities across collaborative platforms.",
      icon: Building2
    },
    {
      year: "2019",
      title: "Foundation of Tamanya Physio & Health Clinic",
      role: "Founder / Director, Varanasi",
      desc: "Laid the cornerstone of Tamanya Physio & Health Clinic in Pandeypur, Varanasi, uniting healthcare and entrepreneurial expertise into a premier multidisciplinary rehabilitation center.",
      icon: HeartPulse,
      highlight: true
    },
    {
      year: "2024",
      title: "Academic Expansion & Global Certifications",
      role: "D.Pharm Completion & London Physioneeds",
      desc: "Completed Diploma in Pharmacy alongside intensive women's health accreditations with WOW IIPRE and Physioneeds Academy, London—broadening the clinical scope for patients.",
      icon: GraduationCap
    },
    {
      year: "2025",
      title: "National Recognition at Artemis Hospital Gurgaon",
      role: "Best Clinician Award — GAPTCON 2025",
      desc: "Honoured with the Best Clinician Award at the 4th National Conference GAPTCON at Artemis Hospital Gurgaon under the theme 'Bridging Research and Practice'.",
      icon: Award
    },
    {
      year: "2026",
      title: "National Brand Award by Actress Mouni Roy",
      role: "Brand Award for Service Excellence",
      desc: "Conferred the prestigious Brand Award for Service Excellence by renowned actress Mouni Roy in 2026, marking Dr. Gupta's leadership in redefining women's health and clinical physiotherapy.",
      icon: Sparkles,
      highlight: true
    }
  ];

  const whatsappAppointmentLink = buildWhatsAppLink({
    service: "Consultation with Dr. Neha Gupta",
    query: "Hello Dr. Neha Gupta, I would like to schedule an in-depth clinical consultation at Tamanya Physio & Health Clinic."
  });

  return (
    <div className="bg-[#F4EFE6] text-[#252822] min-h-screen font-sans selection:bg-[#5F6B45]/20 selection:text-[#252822]">
      
      {/* 1. Full Image Page Hero */}
      <PageHero 
        title="Redefining Rehabilitation Through Personalised Care"
        category="FOUNDER / DIRECTOR PROFILE"
        subtitle="Physiotherapy, Specialised Women’s Health, Pelvic Rehabilitation & Preventive Healthcare in Pandeypur, Varanasi."
        image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2070&q=80"
        pageName="ABOUT DR. NEHA GUPTA"
        ctaText="BOOK CONSULTATION"
        ctaLink="/book-appointment"
        secondaryCtaText="OUR SERVICES"
        secondaryCtaLink="/physiotherapy"
        floatBadgeText="FOUNDER / DIRECTOR"
        floatBadgeValue="Dr. Neha Gupta (PT)"
      />

      {/* 2. EDITORIAL LEAD: REDEFINING WOMEN'S HEALTHCARE & REHABILITATION */}
      <section className="py-20 lg:py-28 px-6 lg:px-12 bg-[#FAF7F1] border-b border-[#D8D0C3] relative overflow-hidden">
        {/* Subtle Ambient Background Accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#B89A5A]/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#5F6B45]/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-[1500px] mx-auto">
          
          {/* Header Eyebrow & Title */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: luxuryEase }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#5F6B45]/10 border border-[#5F6B45]/20 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#5F6B45]" />
              <span className="text-[#5F6B45] uppercase tracking-[0.25em] text-[10px] md:text-xs font-bold">
                CLINICAL EDITORIAL SPOTLIGHT
              </span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#293225] font-bold tracking-tight leading-[1.15] mb-6">
              Dr. Neha Gupta – Redefining Rehabilitation Through Personalised Women’s Healthcare
            </h2>

            <p className="text-[#252822]/80 text-base sm:text-lg font-light leading-relaxed">
              The greater contribution of Artificial Intelligence and technology in healthcare ecosystems has opened up pathways for better treatments. Women’s healthcare, especially, is evolving beyond traditional treatment options into precision rehabilitation and preventive wellness.
            </p>
          </motion.div>

          {/* Editorial Content Grid */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
            
            {/* Left Narrative */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: luxuryEase }}
              className="lg:col-span-7 space-y-5 text-[#252822]/85 font-light text-sm sm:text-base leading-relaxed"
            >
              <p>
                Today, the healthcare spectrum covers broader issues like <strong>specialised rehabilitation, preventive care, and an increased awareness of health concerns that were once overlooked</strong>. Be it pregnancy, postnatal recovery, pelvic floor dysfunction, or any other physical ailment, personalised and specialised physiotherapy has become even more important.
              </p>
              <p>
                Addressing this need, Varanasi-based <strong>Dr. Neha Gupta</strong> brings together physiotherapy, specialised women’s health expertise, rehabilitation, and patient education under one umbrella—making advanced healthcare accessible to all. Dr. Gupta has worn multiple hats during her seven-year-long clinical experience. She has been a <strong>physiotherapist, a women’s health specialist, healthcare entrepreneur, and an educator</strong>.
              </p>
              <p>
                Her multidisciplinary background includes a <strong>Diploma, Bachelor’s, and Master’s degree in Physiotherapy with specialisation in Orthopaedics</strong>, alongside advanced international training in women’s health and pelvic rehabilitation.
              </p>

              {/* The 4 Roles Pill Row */}
              <div className="grid sm:grid-cols-2 gap-3 pt-3">
                {[
                  { role: "Physiotherapist", sub: "Orthopaedic & Biomechanical Expert", icon: Stethoscope },
                  { role: "Women's Health Specialist", sub: "Pelvic Floor & Antenatal/Postnatal", icon: HeartPulse },
                  { role: "Healthcare Entrepreneur", sub: "Founder of Tamanya Clinic (Est. 2019)", icon: Building2 },
                  { role: "Clinical Educator", sub: "Patient Counselling & Community Awareness", icon: Users }
                ].map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <div 
                      key={idx}
                      className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#F4EFE6] border border-[#D8D0C3] hover:border-[#5F6B45] transition-all duration-300 shadow-sm"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#5F6B45]/15 flex items-center justify-center text-[#5F6B45] shrink-0">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-[#293225] font-serif">{item.role}</h4>
                        <p className="text-[11px] text-[#252822]/70 font-light">{item.sub}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </motion.div>

            {/* Right Featured Quote Card */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: luxuryEase }}
              className="lg:col-span-5"
            >
              <div className="relative p-8 sm:p-10 rounded-[32px] bg-gradient-to-br from-[#293225] via-[#21291D] to-[#181E15] text-[#FAF7F1] shadow-2xl border-2 border-[#B89A5A]/50 overflow-hidden">
                
                {/* Gold Glow & Background Quote Watermark */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#B89A5A]/15 rounded-full blur-2xl pointer-events-none"></div>
                <QuoteIcon className="absolute -bottom-4 -right-4 w-32 h-32 text-[#B89A5A]/10 pointer-events-none" />

                <div className="relative z-10 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B89A5A]/20 border border-[#B89A5A]/40 text-[#D4B878] text-[10px] font-bold uppercase tracking-widest">
                    <span>VISIONARY STATEMENT</span>
                  </div>

                  <blockquote className="font-serif italic text-xl sm:text-2xl text-white font-medium leading-relaxed">
                    “My vision is to help individuals recover better, understand their health, and give them an easy access to personalised rehabilitation support.”
                  </blockquote>

                  <div className="pt-6 border-t border-white/15 flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#B89A5A] shrink-0 shadow-md">
                      <img src={nehaImg} alt="Dr. Neha Gupta" className="w-full h-full object-cover object-top" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-bold text-white">Dr. Neha Gupta (PT)</h4>
                      <p className="text-xs text-[#B89A5A] font-semibold tracking-wide">
                        MPT (ORTHO), BPT, DPT, CMT, CDNP, CCT, CTT, NDT
                      </p>
                      <p className="text-[11px] text-white/70 font-light mt-0.5">
                        Founder / Director, Tamanya Physio and Health Clinic
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 4. MEET YOUR PRACTITIONER: DR. NEHA GUPTA (HERO PROFILE) */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#F4EFE6] border-b border-[#D8D0C3]">
        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Biography & Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: luxuryEase }}
              className="text-[#5F6B45] uppercase tracking-[0.25em] text-xs font-bold block"
            >
              FOUNDER / DIRECTOR
            </motion.span>
            
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease: luxuryEase }}
                className="font-serif text-4xl sm:text-6xl text-[#293225] font-bold tracking-tight"
              >
                Meet Your Practitioner
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2, ease: luxuryEase }}
                className="font-serif italic text-3xl sm:text-4xl text-[#5F6B45] font-semibold mt-2 text-gradient-gold"
              >
                Dr. Neha Gupta (PT)
              </motion.p>
              <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#293225]/85 mt-1 uppercase">
                MPT (ORTHO), BPT, DPT, CMT, CDNP, CCT, CTT, NDT
              </p>
            </div>

            {/* Verification Pills */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.3, ease: luxuryEase }}
              className="flex flex-wrap items-center gap-3 text-xs font-bold text-[#252822] py-3 border-y-2 border-[#D8D0C3]"
            >
              <span className="flex items-center gap-1.5"><BadgeCheck className="w-4 h-4 text-[#B89A5A]" /> Pelvic Floor Rehab Specialist</span>
              <span className="text-[#B89A5A]">•</span>
              <span className="flex items-center gap-1.5"><BadgeCheck className="w-4 h-4 text-[#B89A5A]" /> Cupping Therapy Specialist</span>
              <span className="text-[#B89A5A]">•</span>
              <span className="flex items-center gap-1.5"><BadgeCheck className="w-4 h-4 text-[#B89A5A]" /> Dry Needling Therapist</span>
              <span className="text-[#B89A5A]">•</span>
              <span className="flex items-center gap-1.5"><BadgeCheck className="w-4 h-4 text-[#B89A5A]" /> Founder / Director</span>
            </motion.div>

            {/* In-Depth Detailed Bio Text from Client */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4, ease: luxuryEase }}
              className="space-y-4 text-[#252822]/85 font-light leading-relaxed text-sm sm:text-base"
            >
              <p>
                Dr. Neha Gupta laid the cornerstone for <strong>Tamanya Physio & Health Clinic in 2019</strong>. The clinic marks the central healthcare venture in Dr. Gupta’s entrepreneurial journey. Based out of <strong>Pandeypur in Varanasi</strong>, Tamanya Physio & Health Clinic provides physiotherapy and rehabilitation services across orthopaedic, neurological, sports injury, musculoskeletal, and women’s health requirements.
              </p>
              
              <div className="p-4 rounded-2xl bg-[#FAF7F1] border-l-4 border-[#5F6B45] text-[#293225] italic font-serif text-base sm:text-lg">
                “We aim to provide personalised care to improve mobility, functional independence, recovery, and overall quality of life.”
              </div>

              <p>
                Dr. Gupta’s emphasis on combining <strong>specialised clinical knowledge with a broader understanding of healthcare</strong> is what makes Tamanya the premier choice for families across Eastern Uttar Pradesh. Additionally, Dr. Gupta completed a <strong>Diploma in Pharmacy in 2024</strong> alongside her physiotherapy degrees, undertaking advanced programs in women’s health and pelvic rehabilitation—thus dedicating her time, continuous education, and clinical expertise to one unified vision and cause.
              </p>

              <p>
                Her training includes the <strong>WOW IIPRE Women’s Health Practitioner programme</strong>, hands-on certification in pelvic floor rehabilitation, and the <strong>Certificate in Antenatal and Postnatal Rehabilitation associated with Physioneeds Academy, London</strong>. These qualifications have strengthened her focus on antenatal and postnatal care, pelvic floor rehabilitation, fertility rehabilitation, lactation, female sexual health, and women’s wellness.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5, ease: luxuryEase }}
              className="pt-4 flex flex-wrap items-center gap-4"
            >
              <Link 
                to="/book-appointment" 
                className="btn-olive"
              >
                BOOK CONSULTATION WITH DR. NEHA
              </Link>
              <a 
                href={whatsappAppointmentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-linen flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                DIRECT WHATSAPP ENQUIRY
              </a>
              <a 
                href="tel:+917007667808" 
                className="text-xs font-bold text-[#5F6B45] hover:text-[#293225] flex items-center gap-1.5 transition-colors py-2 px-1"
              >
                <Phone className="w-3.5 h-3.5" />
                CALL: +91 70076 67808
              </a>
              <a 
                href="tel:+918090299847" 
                className="text-xs font-bold text-[#5F6B45] hover:text-[#293225] flex items-center gap-1.5 transition-colors py-2 px-1"
              >
                <Phone className="w-3.5 h-3.5" />
                CALL: +91 80902 99847
              </a>
            </motion.div>
          </div>

          {/* Right Column: Visual Portrait with Floating Elements */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, delay: 0.3, ease: luxuryEase }}
            className="lg:col-span-5 relative"
          >
            {/* Main Portrait */}
            <div className="aspect-[3/4] rounded-[28px] overflow-hidden shadow-2xl border-4 border-[#FAF7F1] relative z-10 group bg-[#FAF7F1]">
              <img 
                src={nehaImg} 
                alt="Dr. Neha Gupta - Founder & Clinical Director" 
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#293225]/40 via-transparent to-transparent opacity-30 group-hover:opacity-10 transition-opacity pointer-events-none" />
            </div>

            {/* Decorative Gold Backdrop Frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#B89A5A] rounded-[28px] z-0 hidden sm:block"></div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-4 -left-4 sm:bottom-6 sm:left-6 z-20 bg-[#293225]/95 text-white p-4 sm:p-5 rounded-[20px] border border-[#B89A5A]/50 shadow-2xl backdrop-blur-md">
              <span className="text-[#B89A5A] text-[9px] uppercase tracking-widest font-extrabold block">FOUNDER / DIRECTOR</span>
              <p className="font-serif text-xl sm:text-2xl font-bold text-white mt-0.5">Dr. Neha Gupta (PT)</p>
              <p className="text-[10px] text-white/90 font-medium mt-1">MPT (ORTHO) • CMT • CDNP • CCT • NDT</p>
            </div>

            {/* Small Inset Thumbnail of Clinic Consultation */}
            <div className="absolute top-6 -right-4 sm:-right-8 z-20 w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-3 border-white shadow-xl hidden md:block">
              <img src={consultImg} alt="Dr. Neha in Clinic" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 inset-x-0 bg-black/60 backdrop-blur-xs py-1 text-center text-[9px] text-white font-medium">
                Clinic Consult
              </div>
            </div>

          </motion.div>

        </div>
      </section>

      {/* 5. ACADEMIC RIGOUR & GLOBAL ACCREDITATIONS */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#FAF7F1] border-b border-[#D8D0C3]">
        <div className="max-w-[1600px] mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: luxuryEase }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-[#5F6B45] uppercase tracking-[0.25em] text-xs font-bold block mb-3">
              CONTINUOUS CLINICAL EDUCATION
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#293225] font-bold mb-4">
              Academic Degrees & Global Certifications
            </h2>
            <p className="text-[#252822]/80 text-sm sm:text-base font-light leading-relaxed">
              Dr. Gupta’s multidisciplinary background combines formal university degrees with world-class international certifications in pelvic and women's health.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Academic Degrees */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-2 mb-2">
                <GraduationCap className="w-5 h-5 text-[#5F6B45]" />
                <h3 className="font-serif text-2xl font-bold text-[#293225]">Academic Qualifications</h3>
              </div>

              {academicDegrees.map((deg, i) => {
                const IconComp = deg.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1, ease: luxuryEase }}
                    className={`p-6 rounded-[22px] border transition-all duration-300 ${
                      deg.highlight 
                        ? 'bg-gradient-to-r from-[#FAF7F1] via-[#F4EFE6] to-[#FAF7F1] border-[#B89A5A] shadow-md' 
                        : 'bg-[#F4EFE6] border-[#D8D0C3] hover:border-[#5F6B45]'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#5F6B45]/15 flex items-center justify-center text-[#5F6B45] shrink-0">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-serif text-lg font-bold text-[#293225]">{deg.degree}</h4>
                          <span className="text-xs font-semibold text-[#5F6B45] block">{deg.specialisation}</span>
                        </div>
                      </div>
                      <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full shrink-0 ${
                        deg.highlight ? 'bg-[#B89A5A] text-[#293225]' : 'bg-[#D8D0C3]/60 text-[#252822]'
                      }`}>
                        {deg.year}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#252822]/80 font-light leading-relaxed pl-13">
                      {deg.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Right Column: Women's Health & Pelvic Certifications */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-2 mb-2">
                <HeartPulse className="w-5 h-5 text-[#B89A5A]" />
                <h3 className="font-serif text-2xl font-bold text-[#293225]">Specialised Women’s Health Programs</h3>
              </div>

              {womenHealthCertifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12, ease: luxuryEase }}
                  className="p-6 rounded-[22px] bg-[#F4EFE6] border border-[#D8D0C3] hover:border-[#B89A5A] transition-all duration-300 shadow-sm group"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider font-bold text-[#B89A5A] block mb-1">
                        {cert.issuer}
                      </span>
                      <h4 className="font-serif text-lg font-bold text-[#293225] group-hover:text-[#5F6B45] transition-colors">
                        {cert.title}
                      </h4>
                    </div>
                    <span className="text-[9px] uppercase font-extrabold tracking-widest px-2.5 py-1 rounded-full bg-[#5F6B45]/15 text-[#5F6B45] shrink-0">
                      {cert.badge}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#252822]/80 font-light leading-relaxed mt-2">
                    {cert.desc}
                  </p>
                </motion.div>
              ))}

              {/* Informative Callout Box on D.Pharm & Integrative Scope */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, ease: luxuryEase }}
                className="p-6 rounded-[22px] bg-gradient-to-br from-[#293225] to-[#1F261C] text-white border border-[#B89A5A]/50 shadow-xl"
              >
                <div className="flex items-center gap-2.5 mb-2 text-[#D4B878]">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs font-bold tracking-widest uppercase">INTEGRATIVE CLINICAL SCOPE</span>
                </div>
                <h4 className="font-serif text-base sm:text-lg font-bold text-white mb-2">
                  Bridging Physical Rehabilitation & Pharmacological Science
                </h4>
                <p className="text-xs text-white/80 font-light leading-relaxed">
                  Dr. Gupta’s addition of a <strong>Diploma in Pharmacy (2024)</strong> alongside her Master’s in Physiotherapy allows her to evaluate patients through a multi-dimensional clinical lens—understanding how medications, hormonal changes, and inflammatory cascades interact with neuromuscular recovery.
                </p>
              </motion.div>

            </div>

          </div>

        </div>
      </section>

      {/* 6. SPECIALISED WOMEN'S HEALTH & PELVIC REHABILITATION SPECTRUM */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#F4EFE6] border-b border-[#D8D0C3]">
        <div className="max-w-[1600px] mx-auto">
          
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-16">
            <div className="lg:col-span-8">
              <span className="text-[#5F6B45] uppercase tracking-[0.25em] text-xs font-bold block mb-3">
                SPECIALISED CARE SPECTRUM
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#293225] font-bold mb-4">
                Personalised Rehabilitation with a Focus on Women’s Health
              </h2>
              <p className="text-[#252822]/80 text-sm sm:text-base font-light leading-relaxed">
                Tamanya Physio & Health Clinic specialises in women’s health and pelvic rehabilitation. Dr. Gupta provides tailored, compassionate protocols across antenatal and postnatal care, pelvic floor dysfunction, and female wellness.
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <Link to="/womens-health" className="btn-deep-olive text-xs">
                EXPLORE FULL WOMEN'S HEALTH SUITE →
              </Link>
            </div>
          </div>

          {/* 8 Women's Health Domains Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {womensHealthDomains.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: luxuryEase }}
                className="bg-[#FAF7F1] p-6 sm:p-7 rounded-[24px] border border-[#D8D0C3] hover:border-[#5F6B45] shadow-[0_4px_20px_rgba(41,50,37,0.03)] hover:shadow-[0_15px_35px_rgba(95,107,69,0.18)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#5F6B45]/10 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl text-[#293225] font-bold mb-2 group-hover:text-[#5F6B45] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#252822]/80 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#D8D0C3]/60 flex items-center justify-between text-[11px] font-bold text-[#5F6B45]">
                  <span>CONFIDENTIAL CARE</span>
                  <span className="text-[#B89A5A] group-hover:translate-x-1 transition-transform">✓</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. PROVEN CLINICAL TECHNIQUES & ADVANCED MODALITIES */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#FAF7F1] border-b border-[#D8D0C3]">
        <div className="max-w-[1600px] mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: luxuryEase }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-[#5F6B45] uppercase tracking-[0.25em] text-xs font-bold block mb-3">
              ADVANCED CLINICAL ARSENAL
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#293225] font-bold mb-4">
              Supported by Proven Clinical Techniques
            </h2>
            <p className="text-[#252822]/80 text-sm sm:text-base font-light leading-relaxed">
              Dr. Neha Gupta combines specialized manual therapy with advanced modalities to address the specific stages and requirements of physical recovery.
            </p>
          </motion.div>

          {/* Interactive Modality Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {modalities.map((mod, idx) => (
              <button
                key={mod.id}
                onClick={() => setActiveModality(idx)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeModality === idx 
                    ? 'bg-[#293225] text-white shadow-lg scale-105 border border-[#B89A5A]' 
                    : 'bg-[#F4EFE6] text-[#252822]/80 hover:bg-[#5F6B45]/15 border border-[#D8D0C3]'
                }`}
              >
                {mod.name}
              </button>
            ))}
          </div>

          {/* Active Modality Detailed Spotlight Card */}
          <div className="bg-[#F4EFE6] rounded-[32px] p-8 sm:p-12 border-2 border-[#D8D0C3] shadow-xl max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeModality}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#D8D0C3] pb-6">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#B89A5A] block mb-1">
                      {modalities[activeModality].badge}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#293225]">
                      {modalities[activeModality].name}
                    </h3>
                    <p className="text-sm font-semibold text-[#5F6B45] mt-1">
                      {modalities[activeModality].tagline}
                    </p>
                  </div>
                  <span className="w-12 h-12 rounded-2xl bg-[#5F6B45]/15 flex items-center justify-center font-serif text-xl font-bold text-[#5F6B45]">
                    0{activeModality + 1}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-[#252822]/85 font-light leading-relaxed">
                  {modalities[activeModality].desc}
                </p>

                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-[#293225] mb-3">Key Clinical Benefits:</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {modalities[activeModality].benefits.map((b, bi) => (
                      <div key={bi} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#252822]/80">
                        <CheckCircle2 className="w-4 h-4 text-[#B89A5A] shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Quick Overview Grid of All 7 Modalities */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {modalities.map((item, i) => (
              <div 
                key={i}
                onClick={() => setActiveModality(i)}
                className={`p-4 rounded-xl cursor-pointer border text-left transition-all ${
                  activeModality === i 
                    ? 'border-[#5F6B45] bg-[#5F6B45]/10 font-bold' 
                    : 'border-[#D8D0C3] bg-[#FAF7F1] hover:border-[#5F6B45]'
                }`}
              >
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-bold text-[#293225]">{item.name}</span>
                  <span className="text-[10px] text-[#5F6B45]">0{i + 1}</span>
                </div>
                <p className="text-[11px] text-[#252822]/70 font-light truncate">{item.tagline}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. PRESTIGIOUS AWARDS & RECOGNITION (MOUNI ROY 2026 & GAPTCON 2025) */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#F4EFE6] border-b border-[#D8D0C3] relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#B89A5A] uppercase tracking-[0.25em] text-xs font-bold block mb-3">
              NATIONAL RECOGNITION & HONOURS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#293225] font-bold mb-4">
              Celebrating Service Excellence
            </h2>
            <p className="text-[#252822]/80 text-sm sm:text-base font-light leading-relaxed">
              Dr. Neha Gupta’s professional journey and clinical contributions have received prestigious national awards and press recognition.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Golden Plaque & Press Award Display */}
            <motion.div 
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: luxuryEase }}
              className="lg:col-span-5 relative"
            >
              <div className="relative z-10 group">
                <div className="aspect-[3/4] rounded-[28px] overflow-hidden shadow-2xl border-4 border-white bg-white">
                  <img 
                    src={prizeImg} 
                    alt="Best Clinician Award - Dr. Neha Gupta (GAPTCON 2025)" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                
                {/* Floating Award Banner */}
                <div className="absolute -bottom-4 right-4 bg-[#293225] text-white px-5 py-3 rounded-2xl border border-[#B89A5A] shadow-xl text-center">
                  <span className="text-[#B89A5A] text-[9px] uppercase tracking-widest font-bold block">HONOURED AT</span>
                  <p className="text-xs font-bold font-serif">Artemis Hospital Gurgaon</p>
                </div>
              </div>

              {/* Decorative Frame */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#5F6B45] rounded-[28px] z-0 hidden sm:block"></div>
            </motion.div>

            {/* Right: Awards Details & Mouni Roy Award Feature */}
            <motion.div 
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: luxuryEase }}
              className="lg:col-span-7 space-y-6"
            >
              
              {/* Highlight 1: Brand Award 2026 presented by Mouni Roy */}
              <div className="p-8 rounded-[28px] bg-gradient-to-br from-[#293225] via-[#242C20] to-[#1A2117] text-white border-2 border-[#B89A5A] shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#B89A5A]/15 rounded-full blur-2xl pointer-events-none"></div>

                <div className="relative z-10 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B89A5A]/20 border border-[#B89A5A]/50 text-[#D4B878] text-[10px] font-bold uppercase tracking-widest">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>PRESTIGIOUS NATIONAL HONOUR • 2026</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                    Brand Award for Service Excellence
                  </h3>
                  
                  <p className="text-sm font-semibold text-[#D4B878]">
                    Presented by Renowned Bollywood Actress Mouni Roy (2026)
                  </p>

                  <p className="text-xs sm:text-sm text-white/85 font-light leading-relaxed">
                    Dr. Neha Gupta’s professional journey and dedicated contribution have received esteemed recognition, including the <strong>Brand Award for Service Excellence presented by actress Mouni Roy in 2026</strong>. This milestone celebrates Dr. Gupta’s visionary commitment to high-standard clinical physiotherapy, women’s pelvic health advancement, and accessible healthcare entrepreneurship in Varanasi.
                  </p>
                </div>
              </div>

              {/* Highlight 2: Best Clinician Award GAPTCON 2025 */}
              <div className="p-6 rounded-[24px] bg-[#FAF7F1] border border-[#D8D0C3] hover:border-[#5F6B45] transition-colors space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#5F6B45]">
                    NATIONAL MEDICAL FORUM
                  </span>
                  <span className="text-xs font-bold text-[#B89A5A]">OCT 2025</span>
                </div>
                <h4 className="font-serif text-xl font-bold text-[#293225]">
                  Best Clinician Award — GAPTCON 2025
                </h4>
                <p className="text-xs text-[#252822]/80 font-light leading-relaxed">
                  Conferred at the <strong>4th National Conference GAPTCON</strong> at <strong>Artemis Hospital, Gurgaon</strong> under the theme <em>"Bridging Research And Practice: Evidence-based Innovations"</em>, recognizing clinical excellence and evidence-based rehabilitation protocols.
                </p>
              </div>

              {/* Highlight 3: Press & Regional Recognition */}
              <div className="p-6 rounded-[24px] bg-[#FAF7F1] border border-[#D8D0C3] hover:border-[#5F6B45] transition-colors flex items-center gap-5">
                <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-[#D8D0C3]">
                  <img src={pressImg} alt="Kailash Mahima Newspaper Award Coverage" className="w-full h-full object-cover object-top" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#5F6B45]">
                    MEDIA SPOTLIGHT
                  </span>
                  <h4 className="font-serif text-lg font-bold text-[#293225]">
                    Young Achiever Award & Regional Media Acclaim
                  </h4>
                  <p className="text-xs text-[#252822]/75 font-light">
                    Featured in Hindi daily <em>Kailash Mahima</em> and academic medical conventions for driving clinical rehabilitation accessibility in Eastern Uttar Pradesh.
                  </p>
                </div>
              </div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* 9. ENTREPRENEURIAL JOURNEY & HEALTHCARE ECOSYSTEM TIMELINE */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#FAF7F1] border-b border-[#D8D0C3]">
        <div className="max-w-[1500px] mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: luxuryEase }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-[#5F6B45] uppercase tracking-[0.25em] text-xs font-bold block mb-3">
              THE ENTREPRENEURIAL JOURNEY
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#293225] font-bold mb-4">
              Building a Broader Healthcare Ecosystem
            </h2>
            <p className="text-[#252822]/80 text-sm sm:text-base font-light leading-relaxed">
              A seasoned entrepreneur, Dr. Gupta has honed diverse experiences across technology, business networking, branding, healthcare, and community engagement.
            </p>
          </motion.div>

          {/* Interactive Timeline Grid */}
          <div className="relative border-l-2 border-[#D8D0C3] ml-4 md:ml-32 space-y-12">
            {timelineMilestones.map((milestone, idx) => {
              const IconComp = milestone.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: luxuryEase }}
                  className="relative pl-8 md:pl-12 group"
                >
                  {/* Timeline Node Dot */}
                  <div className={`absolute -left-[17px] top-1.5 w-8 h-8 rounded-full border-4 flex items-center justify-center transition-all duration-300 ${
                    milestone.highlight 
                      ? 'bg-[#B89A5A] border-white shadow-lg text-[#293225]' 
                      : 'bg-[#5F6B45] border-[#FAF7F1] text-white'
                  }`}>
                    <IconComp className="w-3.5 h-3.5" />
                  </div>

                  {/* Year Tag on Left for desktop */}
                  <div className="md:absolute md:-left-32 md:top-2 text-left md:text-right w-24">
                    <span className="font-serif text-2xl font-bold text-[#5F6B45]">{milestone.year}</span>
                  </div>

                  {/* Milestone Card */}
                  <div className={`p-6 sm:p-8 rounded-[24px] border transition-all duration-300 ${
                    milestone.highlight 
                      ? 'bg-[#F4EFE6] border-[#B89A5A] shadow-md' 
                      : 'bg-[#FAF7F1] border-[#D8D0C3] hover:border-[#5F6B45]'
                  }`}>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#293225]">
                        {milestone.title}
                      </h3>
                      <span className="text-xs font-semibold text-[#5F6B45] bg-[#5F6B45]/10 px-3 py-1 rounded-full">
                        {milestone.role}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#252822]/80 font-light leading-relaxed">
                      {milestone.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Closing Ecosystem Quote */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: luxuryEase }}
            className="mt-16 p-8 sm:p-10 rounded-[28px] bg-[#293225] text-white text-center max-w-4xl mx-auto border border-[#B89A5A]/50 shadow-2xl relative"
          >
            <QuoteIcon className="w-10 h-10 text-[#B89A5A]/30 mx-auto mb-4" />
            <p className="font-serif italic text-lg sm:text-2xl text-white font-medium leading-relaxed mb-4">
              “Rehabilitation should extend beyond treatment after an injury or health condition. Through Tamanya and our wider community initiatives, we aim to create greater awareness around women’s health, pelvic health, prenatal and postnatal recovery, urinary incontinence, posture, and preventive healthcare.”
            </p>
            <span className="text-xs font-bold text-[#D4B878] uppercase tracking-widest block">
              — Dr. Neha Gupta (PT), Founder / Director
            </span>
          </motion.div>

        </div>
      </section>

      {/* 10. ADVANCING AWARENESS THROUGH REHABILITATION (COMMUNITY IN ACTION) */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#F4EFE6] border-b border-[#D8D0C3]">
        <div className="max-w-[1600px] mx-auto">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[#5F6B45] uppercase tracking-[0.25em] text-xs font-bold block">
                COMMUNITY ENGAGEMENT & OUTREACH
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#293225] font-bold">
                Advancing Awareness Through Rehabilitation
              </h2>
              <p className="text-[#252822]/85 text-sm sm:text-base font-light leading-relaxed">
                Dr. Gupta’s experience translates into a strong emphasis on <strong>patient counselling, healthcare awareness, preventive care</strong>, and encouraging individuals to seek professional intervention rather than ignore physical discomfort or health concerns.
              </p>
            </div>

            <div className="lg:col-span-5 bg-[#FAF7F1] p-6 rounded-2xl border border-[#D8D0C3] space-y-2">
              <h4 className="font-serif text-base font-bold text-[#293225]">Vision for the Future</h4>
              <p className="text-xs text-[#252822]/80 font-light leading-relaxed">
                Looking ahead, Dr. Gupta envisions developing Tamanya into a trusted healthcare and rehabilitation platform that makes quality physiotherapy and women’s health services more accessible while encouraging people to lead healthier and more informed lives.
              </p>
            </div>
          </div>

          {/* Photo Showcase of Real Community Outreach & Patient Education */}
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-[#FAF7F1] rounded-[24px] overflow-hidden border border-[#D8D0C3] shadow-md group">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={campImg1} 
                  alt="Dr. Neha Gupta educating patients with exercise diagrams" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-5">
                <span className="text-[10px] uppercase font-bold text-[#5F6B45] tracking-wider block mb-1">FREE HEALTH CAMPS</span>
                <h4 className="font-serif text-base font-bold text-[#293225] mb-1">Prescriptive Patient Education</h4>
                <p className="text-xs text-[#252822]/75 font-light">Dr. Neha personally explaining home exercise protocols and knee pain prevention diagrams to patients.</p>
              </div>
            </div>

            <div className="bg-[#FAF7F1] rounded-[24px] overflow-hidden border border-[#D8D0C3] shadow-md group">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={campImg2} 
                  alt="Rural Community Healthcare Camp in Varanasi" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-5">
                <span className="text-[10px] uppercase font-bold text-[#5F6B45] tracking-wider block mb-1">GRASSROOTS INITIATIVES</span>
                <h4 className="font-serif text-base font-bold text-[#293225] mb-1">Community Screening Camps</h4>
                <p className="text-xs text-[#252822]/75 font-light">Conducting free health screenings, posture assessments, and counselling sessions for local families.</p>
              </div>
            </div>

            <div className="bg-[#FAF7F1] rounded-[24px] overflow-hidden border border-[#D8D0C3] shadow-md group">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={consultImg} 
                  alt="Tamanya Physio Consultation Suite" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-5">
                <span className="text-[10px] uppercase font-bold text-[#5F6B45] tracking-wider block mb-1">CLINICAL EXCELLENCE</span>
                <h4 className="font-serif text-base font-bold text-[#293225] mb-1">1-on-1 In-Depth Consultations</h4>
                <p className="text-xs text-[#252822]/75 font-light">Dedicated, non-hurried assessment sessions in Pandeypur to build personalized rehabilitation roadmaps.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 11. WHY CHOOSE US - CARE BUILT AROUND YOU */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#FAF7F1] border-b border-[#D8D0C3]">
        <div className="max-w-[1600px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#5F6B45] uppercase tracking-[0.25em] text-xs font-bold block mb-2">WHY CHOOSE US</span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#293225] font-bold mb-4">
              Care Built Around You.
            </h2>
            <p className="text-[#252822]/80 text-sm sm:text-base font-light leading-relaxed">
              Every person's recovery is different. Tamanya combines personalised physiotherapy, specialised women's health expertise, rehabilitation, and patient education to support care tailored to your individual needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                title: "Personalized Care",
                desc: "Our approach focuses on your individual concerns, movement, recovery needs, and everyday goals rather than treating every patient with a generic template."
              },
              {
                num: "02",
                title: "Specialised Women's Health",
                desc: "Tamanya provides dedicated focus on female pelvic floor care, prenatal and postnatal rehabilitation, urinary incontinence, diastasis recti, and pelvic health management."
              },
              {
                num: "03",
                title: "Holistic Rehabilitation",
                desc: "Our rehabilitation approach focuses on mobility, functional independence, recovery, and quality of life, empowering patients with knowledge along the way."
              },
              {
                num: "04",
                title: "Experience & Education",
                desc: "Dr. Neha Gupta brings seven years of clinical experience alongside multidisciplinary training in physiotherapy, orthopaedics, women's health, and pharmacology."
              }
            ].map((pillar, idx) => (
              <div 
                key={idx}
                className="bg-[#F4EFE6] p-7 rounded-[24px] border border-[#D8D0C3] space-y-3 hover:border-[#5F6B45] transition-all duration-300 shadow-sm"
              >
                <span className="text-3xl font-serif font-bold text-[#5F6B45] block">{pillar.num}</span>
                <h3 className="font-serif text-xl font-bold text-[#293225]">{pillar.title}</h3>
                <p className="text-[#252822]/80 text-xs font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 12. INSIDE TAMANYA INTERACTIVE GALLERY SLIDER */}
      <InsideTamanya />

      {/* 13. EXPLORE OUR CLINICAL DIVISIONS */}
      <section className="py-20 px-6 lg:px-12 bg-[#F4EFE6] border-b border-[#D8D0C3]">
        <div className="max-w-[1600px] mx-auto text-center">
          <span className="text-[#5F6B45] uppercase tracking-[0.25em] text-xs font-bold block mb-3">
            EXPLORE OUR CLINICAL DIVISIONS
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#293225] mb-12">Discover Specialist Pathways</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/physiotherapy" className="bg-[#FAF7F1] p-7 rounded-[24px] border border-[#D8D0C3] hover:border-[#5F6B45] text-left group transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#5F6B45] uppercase tracking-widest block mb-2">DIVISION 01</span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#293225] group-hover:text-[#5F6B45] mb-2">Advanced Physiotherapy</h3>
                <p className="text-xs text-[#252822]/75 font-light">Spine, joint, sports injury & neurological rehabilitation with dry needling & electrotherapy.</p>
              </div>
              <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-[#5F6B45] group-hover:text-[#B89A5A] transition-colors">
                <span>VIEW PROTOCOLS</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link to="/womens-health" className="bg-[#FAF7F1] p-7 rounded-[24px] border border-[#D8D0C3] hover:border-[#5F6B45] text-left group transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#5F6B45] uppercase tracking-widest block mb-2">DIVISION 02</span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#293225] group-hover:text-[#5F6B45] mb-2">Female Pelvic Floor Suite</h3>
                <p className="text-xs text-[#252822]/75 font-light">Specialised pelvic rehabilitation, incontinence management, antenatal & postnatal care.</p>
              </div>
              <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-[#5F6B45] group-hover:text-[#B89A5A] transition-colors">
                <span>VIEW SUITE DETAILS</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link to="/skin-care" className="bg-[#FAF7F1] p-7 rounded-[24px] border border-[#D8D0C3] hover:border-[#5F6B45] text-left group transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#5F6B45] uppercase tracking-widest block mb-2">DIVISION 03</span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#293225] group-hover:text-[#5F6B45] mb-2">Integrative Skin Care</h3>
                <p className="text-xs text-[#252822]/75 font-light">Clinical skin rejuvenation, acne & scar therapies, chemical peels, and dermatological care.</p>
              </div>
              <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-[#5F6B45] group-hover:text-[#B89A5A] transition-colors">
                <span>VIEW SKIN CARE</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link to="/slimming-wellness" className="bg-[#FAF7F1] p-7 rounded-[24px] border border-[#D8D0C3] hover:border-[#5F6B45] text-left group transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#5F6B45] uppercase tracking-widest block mb-2">DIVISION 04</span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#293225] group-hover:text-[#5F6B45] mb-2">Slimming & Body Shaping</h3>
                <p className="text-xs text-[#252822]/75 font-light">Vacuum cavitation, G-5 targeted inch-loss, Body Shaper & deep heat therapies.</p>
              </div>
              <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-[#5F6B45] group-hover:text-[#B89A5A] transition-colors">
                <span>VIEW THERAPIES</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 14. LUXURY CONSULTATION CTA SECTION */}
      <section className="py-20 px-6 lg:px-12 bg-gradient-to-br from-[#293225] via-[#21291D] to-[#181E15] text-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto text-center relative z-10 space-y-6">
          <span className="text-[#B89A5A] uppercase tracking-[0.25em] text-xs font-bold block">
            TAKE THE FIRST STEP TOWARDS RECOVERY
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white max-w-3xl mx-auto">
            Schedule an Individual Assessment with Dr. Neha Gupta
          </h2>
          <p className="text-white/80 text-sm sm:text-base font-light max-w-2xl mx-auto">
            Personalised, confidential, and evidence-based physiotherapy and women's health care in Pandeypur, Varanasi. No prior doctor referral required.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link to="/book-appointment" className="btn-champagne">
              BOOK AN APPOINTMENT ONLINE
            </Link>
            <a 
              href={whatsappAppointmentLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-secondary flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              WHATSAPP CLINIC DIRECTLY
            </a>
            <a 
              href="tel:+917007667808" 
              className="text-xs font-bold text-[#B89A5A] hover:text-white flex items-center gap-1.5 transition-colors py-3 px-3"
            >
              <Phone className="w-3.5 h-3.5" />
              +91 70076 67808
            </a>
            <a 
              href="tel:+918090299847" 
              className="text-xs font-bold text-[#B89A5A] hover:text-white flex items-center gap-1.5 transition-colors py-3 px-3"
            >
              <Phone className="w-3.5 h-3.5" />
              +91 80902 99847
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
