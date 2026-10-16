import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '../components/PageHero';
import { TiltCard, PageTransition, FadeIn, TextReveal } from '../components/MotionWrappers';
import SplitText from '../components/SplitText';
import Magnetic from '../components/Magnetic';
import Marquee from '../components/Marquee';
import { CLINIC_DATA, buildWhatsAppLink } from '../data/clinicData';
import { 
  CheckCircle2, 
  Sparkles, 
  Activity, 
  ShieldCheck, 
  Phone, 
  MessageCircle, 
  ArrowRight,
  Stethoscope,
  Clock,
  MapPin
} from 'lucide-react';

import backPainImg from '../assets/conditions/back_pain.jpg';
import neckPainImg from '../assets/conditions/neck_pain.jpg';
import kneeArthritisImg from '../assets/conditions/knee_arthritis.jpg';
import tkrSurgeryImg from '../assets/conditions/tkr_surgery.jpg';
import strokeParalysisImg from '../assets/conditions/stroke_paralysis.jpg';
import sportsInjuriesImg from '../assets/conditions/sports_injuries.jpg';
import parkinsonsImg from '../assets/conditions/parkinsons_rehab.jpg';
import bellsPalsyImg from '../assets/conditions/bells_palsy.jpg';
import spinalCordImg from '../assets/conditions/spinal_cord_injury.jpg';
import ultrasoundLaserImg from '../assets/conditions/ultrasound_laser.jpg';
import iftTensSwdImg from '../assets/conditions/ift_tens_swd.jpg';
import spinalTractionImg from '../assets/conditions/spinal_traction.jpg';
import iastmMfrImg from '../assets/conditions/iastm_mfr_taping.jpg';
import steamTherapyImg from '../assets/conditions/steam_therapy.jpg';
import phyImg from '../assets/phy.jpg';
import cliImg from '../assets/cli.jpeg';
import woImg from '../assets/wo.jpg';
import DetailedTreatmentGuide from '../components/DetailedTreatmentGuide';
import { PHYSIOTHERAPY_SERVICES } from '../data/physiotherapyServicesData';

const luxuryEase = [0.16, 1, 0.3, 1];

export default function Physiotherapy() {
  const [openFaq, setOpenFaq] = useState(null);

  const orthopaedicCards = [
    {
      id: "back-pain",
      title: "BACK PAIN & LOWER BACK PAIN",
      includes: "Disc Bulge, Sciatica, Lumbar Stiffness & Postural Strain",
      desc: "Targeted mechanical therapy and core stabilization for lumbar spine pain, sciatica nerve radiation, disc herniation management, and posture-induced stiffness.",
      image: backPainImg
    },
    {
      id: "neck-pain",
      title: "NECK PAIN & CERVICAL SPONDYLOSIS",
      includes: "Stiffness, Nerve Impingement & Desk Posture Pain",
      desc: "Comprehensive cervical spine mobilization, trapezius spasm release, and ergonomic posture correction designed to relieve acute neck pain and arm numbness.",
      image: neckPainImg
    },
    {
      id: "joint-pain-arthritis",
      title: "JOINT PAIN & ARTHRITIS",
      includes: "Knee Osteoarthritis, Shoulder, Hip & Wrist Pain",
      desc: "Evidence-informed joint mobility exercises, manual therapy, and inflammation reduction modalities to preserve joint cartilage and restore smooth movement.",
      image: kneeArthritisImg
    },
    {
      id: "acl-mcl-meniscus",
      title: "ACL / MCL & MENISCUS INJURIES",
      includes: "Ligament Tears, Sprains, Tendinitis & Ankle Instability",
      desc: "Structured knee dynamic loading, hamstring and quadriceps strengthening, dynamic joint proprioception, and non-surgical ligament rehabilitation.",
      image: kneeArthritisImg
    },
    {
      id: "pre-post-surgery-rehab",
      title: "PRE & POST SURGERY REHABILITATION",
      includes: "Total Knee Replacement (TKR) & Total Hip Replacement (THR)",
      desc: "Phased post-surgical rehabilitation protocols for Total Knee (TKR) and Hip (THR) replacements, focusing on range of motion, gait re-education, and strength.",
      image: tkrSurgeryImg
    },
    {
      id: "sports-injuries",
      title: "SPORTS INJURIES (SPRAIN & STRAIN)",
      includes: "Ligament Tears, Muscle Strains, Tendonitis & Return-to-Play",
      desc: "Phased kinetic loading, cryo-compression, eccentric conditioning, and sport-specific agility drills for rapid athletic return without re-injury.",
      image: sportsInjuriesImg
    },
    {
      id: "stroke-paralysis-neuro-rehab",
      title: "PARALYSIS & STROKE NEURO-REHAB",
      includes: "Stroke, Hemiplegia & Motor Coordination Recovery",
      desc: "Targeted neuromuscular re-education, gait balance retraining, and upper limb functional paralysis rehabilitation.",
      image: strokeParalysisImg
    },
    {
      id: "parkinsons-disease",
      title: "PARKINSON'S NEURO-REHABILITATION",
      includes: "Gait Initiation, Tremor Control, Posture & Balance",
      desc: "High-amplitude motor retraining (LSVT-inspired), laser gait cueing, and dynamic balance drills preventing freezing and preserving functional autonomy.",
      image: parkinsonsImg
    },
    {
      id: "bells-palsy",
      title: "BELL'S PALSY FACIAL REHABILITATION",
      includes: "Facial Symmetry, Nerve Stimulation & Synkinesis Care",
      desc: "Targeted facial microcurrent facilitation, mirror biofeedback, and specialized manual release restoring eyelid closure and symmetric smiles.",
      image: bellsPalsyImg
    },
    {
      id: "spinal-cord-injury",
      title: "SPINAL CORD INJURY & PARALYSIS",
      includes: "Tilt-Table Standing, Spasticity Relief & Transfer Drills",
      desc: "Computerized tilt-table verticalization, neuro-developmental facilitation (NDT), functional transfers, and bone density preservation protocols.",
      image: spinalCordImg
    },
    {
      id: "ultrasonic-laser-therapy",
      title: "ULTRASONIC & LASER THERAPY",
      includes: "Deep Acoustic Micromassage & Photobiomodulation",
      desc: "Dual-frequency ultrasound and therapeutic laser promoting cellular ATP synthesis, scar remodeling, and deep chronic pain relief.",
      image: ultrasoundLaserImg
    },
    {
      id: "ift-tens-swd-therapy",
      title: "IFT, TENS & SHORTWAVE DIATHERMY",
      includes: "Interferential Currents & Deep Thermal Diathermy",
      desc: "Four-pole vector IFT pain-gating and 27.12 MHz solid-state continuous diathermy for stubborn paraspinal spasms and joint stiffness.",
      image: iftTensSwdImg
    },
    {
      id: "spinal-traction-decompression",
      title: "CERVICAL & LUMBAR SPINAL TRACTION",
      includes: "Digital Motorized Decompression & Sciatica Relief",
      desc: "Computerized vertebral distraction on a frictionless split table, reducing intradiscal pressure and relieving pinched nerve roots.",
      image: spinalTractionImg
    },
    {
      id: "iastm-pemf-taping-manual",
      title: "IASTM, PEMF, TAPING & MANUAL CARE",
      includes: "Stainless Blade Mobilization, Pulsed Magnetics & Taping",
      desc: "Ergonomic instrumented fascial shearing, high-flux PEMF cellular recharge, elastic kinesiology taping, and Maitland joint glides.",
      image: iastmMfrImg
    },
    {
      id: "steam-therapy",
      title: "CLINICAL STEAM & HYDROTHERMAL CARE",
      includes: "Moist Thermal Hyperthermia & Deep Muscle Relaxation",
      desc: "Deep penetrating moist thermal vapor relaxing stubborn muscle contractures and preparing stiff joints for pain-free manual therapy.",
      image: steamTherapyImg
    },
    {
      id: "pelvic-floor-rehab",
      title: "PELVIC FLOOR REHABILITATION",
      includes: "Pelvic Muscle Strengthening, Postnatal Rehab & Biofeedback",
      desc: "Specialized clinical physiotherapy focused on pelvic floor biofeedback, postpartum core rehabilitation, and pelvic dysfunction relief in a private setting.",
      image: woImg
    },
    {
      id: "cupping-therapy",
      title: "CUPPING THERAPY",
      includes: "Myofascial Decompression, Kinetic Cupping & Circulation",
      desc: "Medical vacuum decompression therapy applied to tight muscles to relieve chronic spasms, enhance tissue microcirculation, and accelerate muscular recovery.",
      image: phyImg
    },
    {
      id: "dry-needling-therapy",
      title: "DRY NEEDLING THERAPY",
      includes: "Intramuscular Trigger Point Release & Deep Muscle Knots",
      desc: "Precision targeted filiform needle insertion directly into active myofascial trigger points to deactivate neuromuscular knots and relieve stubborn pain.",
      image: neckPainImg
    }
  ];

  const advancedTherapies = [
    { title: "ULTRASONIC THERAPY", desc: "Deep acoustic soundwave application to reduce localized soft tissue inflammation and speed tissue repair." },
    { title: "LASER THERAPY", desc: "Photobiomodulation technology stimulating cellular ATP production for accelerated pain relief." },
    { title: "IFT / TENS ELECTROTHERAPY", desc: "Interferential current application for deep sensory pain gating and endorphin release." },
    { title: "SHORTWAVE DIATHERMY (SWD)", desc: "Deep thermal heating modality for chronic muscle spasm release and joint stiffness." },
    { title: "CERVICAL & LUMBAR TRACTION", desc: "Controlled mechanical vertebral decompression relieving nerve root pressure and disc herniation." },
    { title: "IASTM SOFT TISSUE RELEASE", desc: "Instrument-Assisted Soft Tissue Mobilization treating chronic fascial restrictions and scar tissue." },
    { title: "DRY NEEDLING THERAPY", desc: "Precision intramuscular needle insertion directly targeting myofascial trigger points for fast twitch release." },
    { title: "CUPPING THERAPY", desc: "Myofascial decompression creating localized negative pressure to enhance tissue perfusion." },
    { title: "MYOFASCIAL RELEASE (MFR)", desc: "Gentle sustained manual pressure to eliminate pain and restore fascial mobility." },
    { title: "TAPING & KINESIOLOGY", desc: "Therapeutic elastic taping supporting injured joints while maintaining functional range of motion." },
    { title: "MANUAL JOINT MOBILIZATION", desc: "Maitland and Mulligan joint glide techniques restoring physiological accessory joint movement." },
    { title: "PEMF MAGNETIC THERAPY", desc: "Pulsed electromagnetic field stimulation supporting bone healing and joint recovery." }
  ];

  const faqs = [
    {
      q: "What conditions can physiotherapy treat at Tamanya?",
      a: "Our clinic treats orthopaedic conditions (back pain, neck pain, disc bulge, arthritis, frozen shoulder), post-surgical recovery (TKR, THR, spine surgery), sports injuries (ACL, MCL, ligament tears), and neurological conditions (stroke, Bell's palsy, sciatica)."
    },
    {
      q: "How many physiotherapy sessions will I need?",
      a: "The number of sessions depends on your specific condition, severity, and functional goals. Following your initial evaluation with Dr. Neha Gupta (PT), a structured clinical roadmap is provided."
    },
    {
      q: "Do I need an X-ray or doctor's referral before booking?",
      a: "No referral is required. You can book directly. If you already have X-rays, MRI scans, or doctor reports, please bring them to your initial evaluation."
    }
  ];

  const whatsappLink = buildWhatsAppLink({
    service: "Advanced Physiotherapy",
    query: "Hello Dr. Neha Gupta (PT), I would like to inquire about Advanced Physiotherapy and rehabilitation at Tamanya Clinic."
  });

  return (
    <PageTransition className="bg-[#F4EFE6] text-[#252822] min-h-screen font-sans">
      
      {/* 1. HERO SECTION */}
      <PageHero 
        title="Move Better. Recover Stronger."
        category="PERSONALISED PHYSIOTHERAPY"
        subtitle="Personalised physiotherapy and rehabilitation designed around your condition, movement goals and everyday needs in Pandeypur, Varanasi."
        image={backPainImg}
        pageName="PHYSIOTHERAPY"
        ctaText="BOOK AN APPOINTMENT"
        ctaLink="/book-appointment"
        secondaryCtaText="EXPLORE CARE"
        secondaryCtaLink="#orthopaedic-section"
        floatBadgeText="PHYSIO EXPERTISE"
        floatBadgeValue="MPT (Ortho), BPT"
      />

      {/* 2. FEATURE INTRODUCTION: CARE THAT GOES BEYOND PAIN RELIEF */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#FAF7F1] border-b border-[#D8D0C3]">
        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: phy.jpg Image with Luxury Frame */}
          <motion.div 
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: luxuryEase }}
            className="lg:col-span-6 relative"
          >
            <div className="aspect-[4/3] rounded-[28px] overflow-hidden shadow-2xl border-4 border-white relative group bg-white">
              <img 
                src={phyImg} 
                alt="Care That Goes Beyond Pain Relief - Tamanya Physiotherapy" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 animate-ken-burns" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#293225]/60 via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>

            {/* Experience & Lead Doctor Card */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-gradient-to-br from-[#3F4A32] to-[#293225] text-white p-6 rounded-[22px] shadow-2xl border-2 border-[#B89A5A]/50 max-w-xs transform hover:scale-105 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-3 h-3 rounded-full bg-[#B89A5A] animate-ping"></span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#B89A5A]">CLINICAL EXCELLENCE</span>
              </div>
              <p className="font-serif text-3xl font-bold text-white">7+ Years</p>
              <p className="text-xs text-[#FAF7F1]/85 font-light mt-1">
                Clinical practice led by Dr. Neha Gupta (PT), MPT (Ortho), BPT in Pandeypur, Varanasi.
              </p>
            </div>

            {/* Subtle Champagne Accent Border */}
            <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-[#B89A5A]/40 rounded-[28px] -z-10 hidden sm:block"></div>
          </motion.div>

          {/* Right Column: Content with User's Exact Title & Subtitle */}
          <motion.div 
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: luxuryEase }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5F6B45]/10 border border-[#5F6B45]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#5F6B45]" />
              <span className="text-[#5F6B45] uppercase tracking-[0.25em] text-[10px] sm:text-xs font-bold">
                ADVANCED CLINICAL REHABILITATION
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-[#293225] font-bold tracking-tight leading-[1.15]">
              Care That Goes Beyond Pain Relief
            </h2>

            <p className="font-serif italic text-lg sm:text-xl text-[#4F5B35] font-medium leading-snug">
              Tailored rehabilitation and aesthetic wellness treatments delivered with precision clinical expertise in Pandeypur, Varanasi.
            </p>

            <p className="text-[#252822]/85 text-sm sm:text-base font-light leading-relaxed">
              At Tamanya, we believe that true recovery requires addressing the underlying biomechanical dysfunction rather than offering short-term symptom masking. Every patient journey begins with a meticulous functional assessment, followed by customized physical therapy, targeted electro-modalities, and active movement re-education designed to restore lasting mobility and independence.
            </p>

            {/* 4 Feature Checkmarks */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#293225]">
                <CheckCircle2 className="w-4 h-4 text-[#B89A5A] shrink-0" />
                <span>Root-Cause Biomechanical Assessment</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#293225]">
                <CheckCircle2 className="w-4 h-4 text-[#B89A5A] shrink-0" />
                <span>One-on-One Personalized Protocols</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#293225]">
                <CheckCircle2 className="w-4 h-4 text-[#B89A5A] shrink-0" />
                <span>Evidence-Based Electrotherapy & Modalities</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#293225]">
                <CheckCircle2 className="w-4 h-4 text-[#B89A5A] shrink-0" />
                <span>Long-Term Mobility & Ergonomic Guidance</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link to="/book-appointment" className="btn-olive">
                BOOK EVALUATION
              </Link>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-linen flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                WHATSAPP CONSULTATION
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
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. ORTHOPAEDIC & NEURO CONDITIONS SECTION */}
      <section id="orthopaedic-section" className="py-24 lg:py-32 px-6 lg:px-12 bg-[#F4EFE6] border-b border-[#D8D0C3]">
        <div className="max-w-[1600px] mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: luxuryEase }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="text-[#5F6B45] uppercase tracking-[0.25em] text-xs font-bold block mb-3">ORTHOPAEDIC & NEURO CONDITIONS</span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#293225] font-bold mb-4">Targeted Spine, Joint & Neuro Recovery</h2>
            <p className="text-[#252822]/80 text-base sm:text-lg font-light leading-relaxed">
              Tailored clinical pathways for acute injury, degenerative joint pain, disc issues, post-surgical rehabilitation, and stroke paralysis care.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {orthopaedicCards.map((card, i) => (
              <TiltCard key={i} maxTilt={8} scale={1.02} className="h-full">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: luxuryEase }}
                  className="bg-[#FAF7F1] rounded-[26px] overflow-hidden border-2 border-[#D8D0C3] hover:border-[#B89A5A] shadow-md hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between h-full cursor-pointer"
                >
                  <div className="aspect-[16/10] overflow-hidden relative border-b border-[#D8D0C3]">
                    <img src={card.image} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 animate-ken-burns" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#293225]/70 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 bg-[#5F6B45] text-[#FAF7F1] text-[9px] uppercase tracking-widest px-3 py-1 rounded-full font-bold border border-[#B89A5A]/30">
                      CLINICAL CARE
                    </span>
                  </div>
                  
                  <div className="p-7 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-[#293225] mb-2 group-hover:text-[#5F6B45] transition-colors">{card.title}</h3>
                      <p className="text-[#5F6B45] text-[11px] font-bold uppercase tracking-wider mb-3">{card.includes}</p>
                      <p className="text-[#252822]/80 text-xs leading-relaxed font-light mb-6">{card.desc}</p>
                    </div>

                    <div className="pt-4 border-t border-[#D8D0C3] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
                      <a 
                        href={`#${card.id}`} 
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#5F6B45] hover:text-[#293225] transition-colors py-1"
                      >
                        <span>FULL CLINICAL GUIDE</span>
                        <span className="text-[#B89A5A]">↓</span>
                      </a>
                      <Link 
                        to="/book-appointment" 
                        state={{ prefillService: card.title }}
                        className="inline-flex items-center justify-center gap-1.5 text-[11px] font-extrabold uppercase tracking-widest text-[#293225] bg-[#D8D0C3]/40 hover:bg-[#5F6B45] hover:text-white px-3 py-1.5 rounded-full transition-all"
                      >
                        <span>BOOK</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </TiltCard>
            ))}
          </div>

        </div>
      </section>

      {/* 4. IN-DEPTH CLINICAL TREATMENT GUIDES (600-800 WORDS PER SERVICE) */}
      <DetailedTreatmentGuide 
        services={PHYSIOTHERAPY_SERVICES}
        sectionId="physiotherapy-treatment-guides"
        sectionBadge="IN-DEPTH PHYSIOTHERAPY GUIDES"
        sectionTitle="Detailed Clinical Explanations for Every Physiotherapy Service"
        sectionDescription="Comprehensive medical guides for all 18 orthopaedic, neurological, electrotherapy, and advanced rehabilitation services at Tamanya Physio and Health Clinic—explaining why each therapy is used, how it works step-by-step, equipment or manual techniques used, candidate suitability, precautions, and patient FAQs."
      />

      {/* 4. ADVANCED THERAPEUTIC MODALITIES & TECHNOLOGY */}
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
              CLINICAL TECHNOLOGY ARSENAL
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#293225] font-bold mb-4">
              Advanced Modalities & Therapeutic Technology
            </h2>
            <p className="text-[#252822]/80 text-sm sm:text-base font-light leading-relaxed">
              Equipped with medical-grade electrotherapy and precision manual techniques to accelerate recovery across every tissue layer.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {advancedTherapies.map((therapy, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: luxuryEase }}
                className="bg-[#F4EFE6] p-6 rounded-[22px] border border-[#D8D0C3] hover:border-[#5F6B45] transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold text-[#B89A5A]">0{i + 1}</span>
                    <Activity className="w-4 h-4 text-[#5F6B45] group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#293225] group-hover:text-[#5F6B45] transition-colors mb-2">
                    {therapy.title}
                  </h3>
                  <p className="text-xs text-[#252822]/75 font-light leading-relaxed">
                    {therapy.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#D8D0C3]/60 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-[#5F6B45]">
                  <span>EVIDENCE-BASED</span>
                  <span className="text-[#B89A5A]">✓</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. FAQ ACCORDION */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#F4EFE6] border-b border-[#D8D0C3]">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="text-[#5F6B45] uppercase tracking-[0.25em] text-[11px] font-bold block mb-4">PHYSIOTHERAPY FAQ</span>
            <TextReveal className="font-serif text-3xl sm:text-5xl text-[#293225] font-bold">Frequently Asked Questions</TextReveal>
          </FadeIn>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#FAF7F1] rounded-[16px] border border-[#D8D0C3] overflow-hidden shadow-sm">
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

      {/* 6. BOTTOM CONSULTATION BANNER */}
      <section className="py-20 px-6 lg:px-12 bg-gradient-to-br from-[#293225] via-[#21291D] to-[#181E15] text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-[#B89A5A] uppercase tracking-[0.25em] text-xs font-bold block">
            PERSONALISED CARE IN VARANASI
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            Ready to Begin Your Recovery Journey?
          </h2>
          <p className="text-white/80 text-sm sm:text-base font-light">
            Book an in-person clinical assessment with Dr. Neha Gupta (PT), MPT (Ortho), BPT at our Pandeypur clinic.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link to="/book-appointment" className="btn-champagne">
              BOOK AN APPOINTMENT
            </Link>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              WHATSAPP ENQUIRY
            </a>
          </div>
        </div>
      </section>

    </PageTransition>
  );
}
