import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import { PageTransition, FadeIn, ImageReveal, TextReveal, StaggerContainer, StaggerItem, FloatElement } from '../components/MotionWrappers';
import campImg from '../assets/camp.webp';

export default function HealthCamp() {
  return (
    <PageTransition className="bg-[#F4EFE6] text-[#252822] min-h-screen font-sans">
      
      {/* Full Image Page Hero */}
      <PageHero 
        title="Community Health Camp"
        category="PUBLIC HEALTH & OUTREACH INITIATIVE"
        subtitle="Accessible posture screenings, spine health evaluations, and ergonomic awareness workshops across Varanasi."
        image="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=2000&q=80"
        pageName="COMMUNITY"
      />

      {/* Main Feature & Premium Event Card */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#FAF7F1] border-b border-[#D8D0C3]">
        <div className="max-w-[1500px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Real Camp Photo camp.webp */}
          <ImageReveal className="lg:col-span-6 relative" direction="left">
            <div className="aspect-[4/3] rounded-[28px] overflow-hidden shadow-2xl border-4 border-[#3F4A32] group">
              <img 
                src={campImg} 
                alt="Tamanya Physio & Health Clinic Community Camp" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 animate-ken-burns" 
              />
            </div>
          </ImageReveal>

          {/* Right Column: Event Info & Card */}
          <FadeIn className="lg:col-span-6 space-y-6" direction="right" delay={0.2}>
            <div>
              <span className="bg-[#E8ECDF] text-[#5F6B45] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase inline-block mb-3 border border-[#5F6B45]/30">
                COMMUNITY INITIATIVE
              </span>
              <p className="text-[#5F6B45] uppercase tracking-[0.2em] text-xs font-bold mb-2">JOIN OUR UPCOMING HEALTH CAMP</p>
              <TextReveal className="font-serif text-3xl sm:text-5xl text-[#293225] font-bold leading-tight">
                Your Health Deserves Attention.
              </TextReveal>
            </div>

            <p className="text-[#252822]/80 font-light text-base sm:text-lg leading-relaxed">
              Take the opportunity to learn more about your health, discuss your physical concerns, and receive professional clinical screenings from our dedicated team.
            </p>

            {/* Deep Olive Styled Box */}
            <motion.div 
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="bg-[#293225] text-white border-2 border-[#B89A5A]/40 p-6 sm:p-8 rounded-[24px] space-y-6 shadow-2xl relative"
            >
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#B89A5A]">
                Community Mobility & Spine Screening Camp
              </h3>

              <div className="grid sm:grid-cols-2 gap-6 text-xs text-white/90">
                <div className="flex items-start gap-3">
                  <span className="text-[#B89A5A] text-lg">📅</span>
                  <div>
                    <p className="font-bold text-white text-sm mb-0.5">Date</p>
                    <p className="text-[#FAF7F1]/80 font-light">Upcoming Session / Contact Clinic</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-[#B89A5A] text-lg">🕒</span>
                  <div>
                    <p className="font-bold text-white text-sm mb-0.5">Time</p>
                    <p className="text-[#FAF7F1]/80 font-light">09:00 AM – 02:00 PM</p>
                  </div>
                </div>

                <div className="sm:col-span-2 flex items-start gap-3">
                  <span className="text-[#B89A5A] text-lg">📍</span>
                  <div>
                    <p className="font-bold text-white text-sm mb-0.5">Location</p>
                    <p className="text-[#FAF7F1]/80 font-light">Tamanya Clinic Campus & Community Center, Pandeypur, Varanasi</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link 
                to="/book-appointment" 
                className="btn-olive inline-flex items-center gap-2 group"
              >
                <span>Book an Appointment</span>
                <span className="group-hover:translate-x-1.5 transition-transform">→</span>
              </Link>
              <a 
                href="tel:+917007667808" 
                className="btn-linen"
              >
                Call for Details
              </a>
            </div>

          </FadeIn>

        </div>
      </section>

      {/* RELATED SERVICES NAVIGATION */}
      <section className="py-20 px-6 lg:px-12 bg-[#F4EFE6]">
        <div className="max-w-[1600px] mx-auto text-center">
          <FadeIn className="mb-12">
            <span className="text-[#5F6B45] uppercase tracking-[0.25em] text-xs font-bold block mb-3">EXPLORE OUR CLINICAL DIVISIONS</span>
            <TextReveal className="font-serif text-3xl font-bold text-[#293225]">Discover Specialist Pathways</TextReveal>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
            <StaggerItem>
              <Link to="/physiotherapy" className="block h-full">
                <motion.div whileHover={{ y: -6 }} className="bg-[#FAF7F1] p-8 rounded-[24px] border border-[#D8D0C3] hover:border-[#5F6B45] text-left group h-full transition-colors shadow-sm hover:shadow-md">
                  <span className="text-xs font-bold text-[#5F6B45] uppercase tracking-widest block mb-2">DIVISION 01</span>
                  <h3 className="font-serif text-2xl font-bold text-[#293225] group-hover:text-[#5F6B45] mb-2 transition-colors">Advanced Physiotherapy</h3>
                  <p className="text-xs text-[#252822]/75 font-light">Spine, joint, sports injury & neurological rehabilitation.</p>
                </motion.div>
              </Link>
            </StaggerItem>

            <StaggerItem>
              <Link to="/womens-health" className="block h-full">
                <motion.div whileHover={{ y: -6 }} className="bg-[#FAF7F1] p-8 rounded-[24px] border border-[#D8D0C3] hover:border-[#5F6B45] text-left group h-full transition-colors shadow-sm hover:shadow-md">
                  <span className="text-xs font-bold text-[#5F6B45] uppercase tracking-widest block mb-2">DIVISION 02</span>
                  <h3 className="font-serif text-2xl font-bold text-[#293225] group-hover:text-[#5F6B45] mb-2 transition-colors">Female Pelvic Floor Suite</h3>
                  <p className="text-xs text-[#252822]/75 font-light">Specialised pelvic rehabilitation, PCOD, antenatal & postnatal care.</p>
                </motion.div>
              </Link>
            </StaggerItem>

            <StaggerItem>
              <Link to="/slimming-wellness" className="block h-full">
                <motion.div whileHover={{ y: -6 }} className="bg-[#FAF7F1] p-8 rounded-[24px] border border-[#D8D0C3] hover:border-[#5F6B45] text-left group h-full transition-colors shadow-sm hover:shadow-md">
                  <span className="text-xs font-bold text-[#5F6B45] uppercase tracking-widest block mb-2">DIVISION 04</span>
                  <h3 className="font-serif text-2xl font-bold text-[#293225] group-hover:text-[#5F6B45] mb-2 transition-colors">Slimming & Body Shaping</h3>
                  <p className="text-xs text-[#252822]/75 font-light">Vacuum cavitation, Body Shaper & deep heat therapies.</p>
                </motion.div>
              </Link>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

    </PageTransition>
  );
}

