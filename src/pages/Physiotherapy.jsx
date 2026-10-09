import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '../components/PageHero';
import { TiltCard, PageTransition, FadeIn, TextReveal } from '../components/MotionWrappers';
import SplitText from '../components/SplitText';
import Magnetic from '../components/Magnetic';
import Marquee from '../components/Marquee';
import MetricsSection from '../components/MetricsSection';

import backPainImg from '../assets/conditions/back_pain.jpg';
import neckPainImg from '../assets/conditions/neck_pain.jpg';
import kneeArthritisImg from '../assets/conditions/knee_arthritis.jpg';
import tkrSurgeryImg from '../assets/conditions/tkr_surgery.jpg';
import strokeParalysisImg from '../assets/conditions/stroke_paralysis.jpg';
import phyImg from '../assets/phy.jpg';
import cliImg from '../assets/cli.jpeg';

const luxuryEase = [0.16, 1, 0.3, 1];

export default function Physiotherapy() {
  const [openFaq, setOpenFaq] = useState(null);

  const orthopaedicCards = [
    {
      title: "BACK PAIN & LOWER BACK PAIN",
      includes: "Disc Bulge, Sciatica, Lumbar Stiffness & Postural Strain",
      desc: "Targeted mechanical therapy and core stabilization for lumbar spine pain, sciatica nerve radiation, disc herniation management, and posture-induced stiffness.",
      image: backPainImg
    },
    {
      title: "NECK PAIN & CERVICAL SPONDYLOSIS",
      includes: "Stiffness, Nerve Impingement & Desk Posture Pain",
      desc: "Comprehensive cervical spine mobilization, trapezius spasm release, and ergonomic posture correction designed to relieve acute neck pain and arm numbness.",
      image: neckPainImg
    },
    {
      title: "JOINT PAIN & ARTHRITIS",
      includes: "Knee Osteoarthritis, Shoulder, Hip & Wrist Pain",
      desc: "Evidence-informed joint mobility exercises, manual therapy, and inflammation reduction modalities to preserve joint cartilage and restore smooth movement.",
      image: kneeArthritisImg
    },
    {
      title: "ACL / MCL & MENISCUS INJURIES",
      includes: "Ligament Tears, Sprains, Tendinitis & Ankle Instability",
      desc: "Structured knee dynamic loading, hamstring and quadriceps strengthening, dynamic joint proprioception, and non-surgical ligament rehabilitation.",
      image: kneeArthritisImg
    },
    {
      title: "PRE & POST SURGERY REHABILITATION",
      includes: "Total Knee Replacement (TKR) & Total Hip Replacement (THR)",
      desc: "Phased post-surgical rehabilitation protocols for Total Knee (TKR) and Hip (THR) replacements, focusing on range of motion, gait re-education, and strength.",
      image: tkrSurgeryImg
    },
    {
      title: "PARALYSIS & STROKE NEURO-REHAB",
      includes: "Stroke, Hemiplegia & Facial Bell's Palsy",
      desc: "Targeted neuromuscular re-education, gait balance retraining, and upper limb functional paralysis rehabilitation.",
      image: strokeParalysisImg
    }
  ];

  const neuroCards = [
    { title: "STROKE REHABILITATION", desc: "Neuromuscular re-education, hemiplegia gait training, and upper limb functional task rehabilitation.", image: strokeParalysisImg },
    { title: "PARKINSON'S DISEASE CARE", desc: "Big movement amplitude exercises, balance stabilization, and gait freezing prevention strategies.", image: strokeParalysisImg },
    { title: "SCIATICA & NERVE IMPINGEMENT", desc: "Spinal decompression exercises, nerve flossing techniques, and radiculopathy relief.", image: backPainImg },
    { title: "BELL'S PALSY FACIAL REHAB", desc: "Targeted facial muscle re-education, neuromuscular stimulation, and symmetry recovery.", image: strokeParalysisImg },
    { title: "SPINAL CORD INJURY REHAB", desc: "Functional mobility maintenance, wheelchair transfer safety, and posture stabilization.", image: backPainImg }
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
      a: "The number of sessions depends on your specific condition, severity, and functional goals. Following your initial evaluation with Dr. Neha Gupta, a structured clinical roadmap is provided."
    },
    {
      q: "Do I need an X-ray or doctor's referral before booking?",
      a: "No referral is required. You can book directly. If you already have X-rays, MRI scans, or doctor reports, please bring them to your initial evaluation."
    }
  ];

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
        floatBadgeValue="M.P.T Orthopaedics"
      />

      {/* Clinical Metrics Benchmark */}
      <MetricsSection />

      {/* 2. INTRODUCTION SECTION */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#FAF7F1] border-b border-[#D8D0C3]">
        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: luxuryEase }}
            className="lg:col-span-6 relative"
          >
            <div className="aspect-[4/3] rounded-[28px] overflow-hidden shadow-2xl border-4 border-[#FAF7F1] relative group">
              <img 
                src={backPainImg} 
                alt="Tamanya Personalised Physiotherapy Care" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 animate-ken-burns" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#293225]/50 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-gradient-to-br from-[#3F4A32] to-[#293225] text-white p-6 rounded-[22px] shadow-2xl border-2 border-[#B89A5A]/50 max-w-xs transform hover:scale-105 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-3 h-3 rounded-full bg-[#B89A5A] animate-ping"></span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#B89A5A]">CLINICAL RECORD</span>
              </div>
              <p className="font-serif text-3xl font-bold text-white">7+ Years</p>
              <p className="text-xs text-[#FAF7F1]/85 font-light mt-1">
                Clinical practice led by Dr. Neha Gupta (M.P.T Ortho) serving Varanasi since 2019.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: luxuryEase }}
            className="lg:col-span-6 space-y-6"
          >
            <span className="text-[#5F6B45] uppercase tracking-[0.25em] text-xs font-bold block">ABOUT PHYSIOTHERAPY</span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#293225] font-bold tracking-tight">
              Root-Cause Diagnosis. Sustainable Recovery.
            </h2>
            <p className="text-[#252822]/85 text-base sm:text-lg font-light leading-relaxed">
              At Tamanya, we believe that true recovery comes from understanding your biomechanics rather than treating temporary symptoms. Every physical treatment is individualized following a thorough functional assessment.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link to="/book-appointment" className="btn-olive">
                BOOK EVALUATION
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. ORTHOPAEDIC CONDITIONS SECTION */}
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

                    <Link to="/book-appointment" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#5F6B45] hover:text-[#3F4A32] transition-colors pt-4 border-t border-[#D8D0C3]">
                      <span>BOOK CONSULTATION</span>
                      <span className="group-hover:translate-x-1.5 transition-transform">→</span>
                    </Link>
                  </div>
                </motion.div>
              </TiltCard>
            ))}
          </div>

        </div>
      </section>

      {/* 4. FAQ ACCORDION */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#FAF7F1] border-t border-[#D8D0C3]">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="text-[#5F6B45] uppercase tracking-[0.25em] text-[11px] font-bold block mb-4">PHYSIOTHERAPY FAQ</span>
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
