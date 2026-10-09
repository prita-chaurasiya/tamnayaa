import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import SplitText from './SplitText';
import Magnetic from './Magnetic';
import { TiltCard } from './MotionWrappers';

export default function CareFinderWidget() {
  const [activeTab, setActiveTab] = useState(0);

  const concerns = [
    {
      id: 'back-spine',
      title: 'Back & Spine Pain',
      subtitle: 'Sciatica, Disc Herniation & Posture',
      badge: 'Spine Specialty',
      desc: 'Targeted spinal mobilization, decompression guidance, core stabilization, and ergonomically guided postural corrections to relieve persistent back pain and sciatica.',
      features: ['Sciatica Radiation Relief', 'Disc Herniation Care', 'Postural Realignment', 'Lumbar Decompression'],
      link: '/physiotherapy',
      buttonText: 'EXPLORE SPINE CARE',
    },
    {
      id: 'knee-joint',
      title: 'Joint Stiffness & TKR/THR',
      subtitle: 'Arthritis, Knee & Post-Surgical Rehab',
      badge: 'Joint Recovery',
      desc: 'Phased post-surgical rehabilitation for Total Knee & Hip replacements (TKR/THR), osteoarthritis joint mobilization, and manual muscle strengthening.',
      features: ['Phased TKR/THR Rehab', 'Gait & Balance Training', 'Joint Mobilization', 'Dry Needling & Modalities'],
      link: '/physiotherapy',
      buttonText: 'EXPLORE JOINT REHAB',
    },
    {
      id: 'pelvic-women',
      title: "Women's Pelvic Health",
      subtitle: 'Pelvic Floor, Prenatal & Postnatal Care',
      badge: 'Private Suite',
      desc: 'Discreet and private female pelvic floor rehabilitation, Diastasis Recti physical management, prenatal comfort care, and postnatal physical recovery.',
      features: ['Pelvic Floor Muscle Retraining', 'Prenatal Spine Relief', 'Postnatal Diastasis Recti', 'PCOD/PCOS Physical Support'],
      link: '/womens-health',
      buttonText: "EXPLORE WOMEN'S HEALTH",
    },
    {
      id: 'slimming-aesthetic',
      title: 'Slimming & Body Shaping',
      subtitle: 'Vacuum Cavitation & Deep Heat',
      badge: 'Body Contour',
      desc: 'Non-invasive Body Shaper, Vacuum Cavitation, Deep Heat, and G-5 targeted inch loss therapies combined with holistic body contouring protocols.',
      features: ['Vacuum Cavitation Therapy', 'G-5 Inch Loss System', 'Deep Heat Body Toning', 'Non-Invasive Contouring'],
      link: '/slimming-wellness',
      buttonText: 'EXPLORE SLIMMING CARE',
    },
  ];

  return (
    <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#F4EFE6] border-t border-[#D8D0C3] relative">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#5F6B45] uppercase tracking-[0.25em] text-xs font-bold block mb-3">
            INTERACTIVE CLINICAL GUIDE
          </span>
          <SplitText
            text="Find the Care Your Body Needs."
            as="h2"
            className="font-serif text-3xl sm:text-5xl text-[#293225] font-bold mb-4 block"
          />
          <p className="text-[#252822]/80 text-base sm:text-lg font-light leading-relaxed">
            Select your physical concern to explore Dr. Neha Gupta’s specialized clinical care pathways in Varanasi.
          </p>
        </div>

        {/* Tab Buttons Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {concerns.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-3 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-300 relative border ${
                activeTab === idx
                  ? 'bg-[#5F6B45] text-white border-[#B89A5A] shadow-lg scale-105'
                  : 'bg-[#FAF7F1] text-[#293225] border-[#D8D0C3] hover:border-[#5F6B45]'
              }`}
            >
              {item.title}
              {activeTab === idx && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute inset-0 border-2 border-[#B89A5A] rounded-full pointer-events-none"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Active Care Content Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl mx-auto"
          >
            <TiltCard maxTilt={6} scale={1.01}>
              <div className="bg-[#FAF7F1] p-8 sm:p-12 rounded-[32px] border-2 border-[#D8D0C3] shadow-[0_20px_50px_rgba(41,50,37,0.12)] grid lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Information */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <span className="bg-[#5F6B45] text-white text-[10px] uppercase tracking-widest px-3.5 py-1 rounded-full font-bold inline-block mb-3 border border-[#B89A5A]/40 shadow-xs">
                      {concerns[activeTab].badge}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#293225] leading-tight">
                      {concerns[activeTab].title}
                    </h3>
                    <p className="text-[#5F6B45] font-semibold italic text-sm mt-1">
                      {concerns[activeTab].subtitle}
                    </p>
                  </div>

                  <p className="text-[#252822]/85 text-sm sm:text-base font-light leading-relaxed">
                    {concerns[activeTab].desc}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3 pt-2">
                    {concerns[activeTab].features.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-center gap-2 text-xs font-bold text-[#293225] bg-[#F4EFE6] px-4 py-2.5 rounded-xl border border-[#D8D0C3]"
                      >
                        <span className="text-[#B89A5A] font-extrabold text-sm">✓</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <Magnetic strength={0.25}>
                      <Link
                        to={concerns[activeTab].link}
                        className="btn-olive block"
                      >
                        {concerns[activeTab].buttonText}
                      </Link>
                    </Magnetic>

                    <Magnetic strength={0.25}>
                      <Link
                        to="/book-appointment"
                        className="btn-linen block"
                      >
                        BOOK CONSULTATION
                      </Link>
                    </Magnetic>
                  </div>
                </div>

                {/* Right Visual Clinical Card */}
                <div className="lg:col-span-5 bg-gradient-to-br from-[#3F4A32] to-[#1F261C] text-white p-8 rounded-[24px] border border-[#5F6B45]/50 flex flex-col justify-between h-full space-y-6 shadow-xl">
                  <div>
                    <span className="text-[#B89A5A] text-[10px] uppercase tracking-widest font-extrabold block mb-2">
                      CLINICAL PROTOCOL
                    </span>
                    <p className="font-serif text-xl font-bold text-white mb-2">
                      Personalised Evaluation
                    </p>
                    <p className="text-white/80 text-xs font-light leading-relaxed">
                      Every patient undergoes a detailed physical range-of-motion assessment, structural alignment check, and tailored plan creation.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/15 space-y-2 text-xs">
                    <div className="flex justify-between text-white/90">
                      <span>Initial Assessment:</span>
                      <span className="font-bold text-[#B89A5A]">45–60 Mins</span>
                    </div>
                    <div className="flex justify-between text-white/90">
                      <span>Follow-up Session:</span>
                      <span className="font-bold text-[#B89A5A]">30–45 Mins</span>
                    </div>
                    <div className="flex justify-between text-white/90">
                      <span>Doctor Referral:</span>
                      <span className="font-bold text-white">Not Required</span>
                    </div>
                  </div>
                </div>

              </div>
            </TiltCard>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
