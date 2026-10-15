import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  AlertCircle, 
  Stethoscope, 
  Sparkles, 
  MessageCircle, 
  Calendar, 
  ChevronDown,
  Layers,
  ShieldCheck,
  Activity,
  Clock,
  Compass,
  Cpu,
  Target
} from 'lucide-react';
import { buildWhatsAppLink } from '../data/clinicData';

const luxuryEase = [0.16, 1, 0.3, 1];

export default function DetailedTreatmentGuide({ 
  services = [], 
  sectionId = "clinical-treatment-guides",
  sectionBadge = "IN-DEPTH CLINICAL EDUCATION",
  sectionTitle = "Comprehensive Treatment Guides & Patient Information",
  sectionDescription = "Explore detailed clinical explanations for every therapy offered at Tamanya Physio and Health Clinic—understanding which therapy is prescribed for your condition, which machine or equipment is used, how it works, and what to expect."
}) {
  const [openFaqIndex, setOpenFaqIndex] = useState({});
  const location = useLocation();

  // Auto-scroll to anchor hash on load
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const scrollHandler = () => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };
      scrollHandler();
      const t1 = setTimeout(scrollHandler, 150);
      const t2 = setTimeout(scrollHandler, 450);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [location.hash, location.pathname]);

  const toggleFaq = (serviceId, faqIdx) => {
    const key = `${serviceId}-${faqIdx}`;
    setOpenFaqIndex(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <section id={sectionId} className="py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-[#F4EFE6] border-b border-[#D8D0C3]">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5F6B45]/10 border border-[#5F6B45]/25 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#5F6B45]" />
            <span className="text-[#5F6B45] uppercase tracking-[0.25em] text-[10px] sm:text-xs font-bold">
              {sectionBadge}
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#293225] font-bold mb-4 tracking-tight leading-tight">
            {sectionTitle}
          </h2>

          <p className="text-[#252822]/80 text-sm sm:text-base font-light leading-relaxed max-w-3xl mx-auto">
            {sectionDescription}
          </p>

          {/* Quick-Jump Treatment Navigator Pills */}
          <div className="mt-8 pt-6 border-t border-[#D8D0C3]/60">
            <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#5F6B45] uppercase tracking-wider mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>QUICK JUMP TO A SPECIFIC THERAPY / CONDITION</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 max-w-4xl mx-auto">
              {services.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="px-3 sm:px-3.5 py-1.5 rounded-full bg-[#FAF7F1] border border-[#D8D0C3] hover:border-[#5F6B45] hover:bg-[#5F6B45] hover:text-white text-[#293225] text-xs font-medium transition-all duration-300 shadow-xs"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Service Cards List — Structured: PHOTO FIRST -> NAME/HEADING -> 3 CLINICAL HIGHLIGHTS -> 800-WORD CLINICAL BRIEF */}
        <div className="space-y-24 lg:space-y-32">
          {services.map((service, idx) => {
            const serviceWhatsappLink = buildWhatsAppLink({
              service: service.name,
              query: `Hello Dr. Neha Gupta (PT), I would like to inquire about ${service.name} and the prescribed therapy at Tamanya Physio and Health Clinic.`
            });

            // Clinical highlight values from explicit data or fallback
            const prescribedTherapy = service.prescribedTherapy || service.name;
            const machineUsed = service.machineUsed || service.equipmentAndTechniques?.name || "Clinical Physical Therapy Equipment & Manual Techniques";
            const therapyOutcome = service.therapyOutcome || service.whyUsed?.purpose || service.tagline;

            return (
              <article 
                key={service.id} 
                id={service.id}
                className="scroll-mt-28 bg-[#FAF7F1] rounded-[28px] sm:rounded-[36px] border-2 border-[#D8D0C3] p-6 sm:p-10 lg:p-14 shadow-xl relative overflow-hidden"
              >
                {/* Decorative Top Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#5F6B45] via-[#B89A5A] to-[#3F4A32]" />

                {/* 1. TOP STRIP: NUMBER & VERIFIED BADGE */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-3 border-b border-[#D8D0C3]/60">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#5F6B45] text-white flex items-center justify-center font-mono text-xs font-bold shadow-xs">
                      0{idx + 1}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#5F6B45]">
                      {service.category || "CLINICAL SPECIALTY"}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs text-[#5F6B45] font-semibold bg-[#5F6B45]/10 px-3 py-1 rounded-full border border-[#5F6B45]/20">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#5F6B45]" />
                    <span>Verified Clinic Procedure • Pandeypur, Varanasi</span>
                  </span>
                </div>

                {/* 2. PHOTO FIRST (PHOTO HO PEHLE) */}
                <div className="relative rounded-[24px] sm:rounded-[28px] overflow-hidden border-2 border-[#D8D0C3] shadow-xl bg-[#293225] mb-8 group">
                  <div className="aspect-[16/9] sm:aspect-[21/9] w-full max-h-[460px] overflow-hidden relative">
                    <img 
                      src={service.image} 
                      alt={service.imageAlt || service.name} 
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 animate-ken-burns"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1F261C]/90 via-[#293225]/30 to-transparent pointer-events-none" />
                    
                    {/* Floating Badges over Photo */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span className="bg-[#293225]/90 backdrop-blur-md text-[#FAF7F1] text-[10px] sm:text-xs uppercase font-extrabold tracking-widest px-3.5 py-1 rounded-full border border-[#B89A5A]/60 shadow-md">
                        CLINICAL PROCEDURE IN ACTION
                      </span>
                      <span className="hidden sm:inline-block bg-[#5F6B45]/90 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full border border-white/20">
                        Tamanya Physio Campus
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[#B89A5A] font-extrabold text-[10px] sm:text-xs uppercase tracking-widest block mb-1">
                        CLINICAL PROTOCOL & MODALITY SETUP
                      </span>
                      <p className="text-xs sm:text-sm text-white/90 font-light line-clamp-1 sm:line-clamp-none">
                        {service.imageAlt || `${service.name} at Tamanya Physio and Health Clinic, Varanasi`}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3. PHOTO KE THEEK NICHE NAAM (TITLE & TAGLINE) */}
                <div className="mb-8">
                  <h3 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#293225] font-bold tracking-tight leading-tight mb-2">
                    {service.name}
                  </h3>
                  <p className="font-serif italic text-base sm:text-xl text-[#5F6B45] font-medium leading-snug">
                    {service.tagline}
                  </p>
                </div>

                {/* 4. PHOTO KE NICHE 3 CLINICAL HIGHLIGHT CARDS (PRESCRIBED THERAPY, EQUIPMENT, CLINICAL ACTION) */}
                <div className="mb-12 p-6 sm:p-8 rounded-[24px] bg-gradient-to-br from-[#F4EFE6] to-[#EAE3D5] border-2 border-[#B89A5A]/50 shadow-md">
                  <div className="text-center sm:text-left mb-4">
                    <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.2em] text-[#5F6B45] block">
                      KEY CLINICAL HIGHLIGHTS FOR PATIENTS
                    </span>
                    <h4 className="font-serif text-lg sm:text-2xl font-bold text-[#293225]">
                      Overview: Prescribed Clinical Therapy, Technology & Therapeutic Action
                    </h4>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 sm:gap-6 pt-2">
                    
                    {/* Callout 1: Prescribed Clinical Therapy */}
                    <div className="bg-white p-5 rounded-2xl border border-[#D8D0C3] shadow-xs flex flex-col justify-between hover:border-[#5F6B45] transition-colors">
                      <div>
                        <div className="flex items-center gap-2 mb-2 text-[#5F6B45]">
                          <Stethoscope className="w-4 h-4 shrink-0" />
                          <span className="text-[11px] font-extrabold uppercase tracking-wider">
                            PRESCRIBED CLINICAL THERAPY
                          </span>
                        </div>
                        <h5 className="font-serif text-sm sm:text-base font-bold text-[#293225] leading-snug mb-2">
                          {prescribedTherapy}
                        </h5>
                      </div>
                      <p className="text-[11px] text-[#252822]/70 font-light mt-2 border-t border-[#D8D0C3]/60 pt-2">
                        Prescribed clinical rehabilitation protocol
                      </p>
                    </div>

                    {/* Callout 2: Equipment & Modality Used */}
                    <div className="bg-white p-5 rounded-2xl border border-[#D8D0C3] shadow-xs flex flex-col justify-between hover:border-[#B89A5A] transition-colors">
                      <div>
                        <div className="flex items-center gap-2 mb-2 text-[#B89A5A]">
                          <Cpu className="w-4 h-4 shrink-0" />
                          <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#9E650C]">
                            CLINICAL EQUIPMENT & MODALITY
                          </span>
                        </div>
                        <h5 className="font-serif text-sm sm:text-base font-bold text-[#293225] leading-snug mb-2">
                          {machineUsed}
                        </h5>
                      </div>
                      <p className="text-[11px] text-[#252822]/70 font-light mt-2 border-t border-[#D8D0C3]/60 pt-2">
                        Verified clinical devices & hands-on techniques
                      </p>
                    </div>

                    {/* Callout 3: Clinical Action & Therapeutic Outcome */}
                    <div className="bg-white p-5 rounded-2xl border border-[#D8D0C3] shadow-xs flex flex-col justify-between hover:border-[#5F6B45] transition-colors">
                      <div>
                        <div className="flex items-center gap-2 mb-2 text-[#5F6B45]">
                          <Target className="w-4 h-4 shrink-0" />
                          <span className="text-[11px] font-extrabold uppercase tracking-wider">
                            CLINICAL ACTION & THERAPEUTIC OUTCOME
                          </span>
                        </div>
                        <h5 className="font-serif text-sm sm:text-base font-bold text-[#293225] leading-snug mb-2">
                          {therapyOutcome}
                        </h5>
                      </div>
                      <p className="text-[11px] text-[#252822]/70 font-light mt-2 border-t border-[#D8D0C3]/60 pt-2">
                        Biological mechanism & therapeutic relief
                      </p>
                    </div>

                  </div>
                </div>

                {/* 4. COMPREHENSIVE 800-WORD CLINICAL BRIEF & DETAILED INFORMATION */}
                <div className="space-y-12">
                  
                  {/* Detailed Introduction & Clinical Description */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2.5">
                      <span className="w-3 h-3 rounded-full bg-[#5F6B45]" />
                      <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#293225]">
                        Detailed Clinical Brief & Condition Understanding
                      </h4>
                    </div>

                    <div className="text-[#252822]/85 text-sm sm:text-base font-light leading-relaxed space-y-4 bg-white p-6 sm:p-8 rounded-2xl border border-[#D8D0C3]">
                      <p className="first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:text-[#5F6B45] first-letter:mr-2 first-letter:float-left">
                        {service.introduction}
                      </p>
                    </div>
                  </div>

                  {/* Why is this treatment used? (Conditions, Symptoms & Purpose) */}
                  <div className="space-y-5">
                    <div className="flex items-center gap-2.5">
                      <span className="w-3 h-3 rounded-full bg-[#B89A5A]" />
                      <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#293225]">
                        Why Is This Clinical Treatment Recommended?
                      </h4>
                    </div>

                    <p className="text-xs sm:text-sm text-[#252822]/85 leading-relaxed font-light">
                      {service.whyUsed.purpose}
                    </p>

                    {/* Common Conditions List */}
                    <div className="bg-[#F4EFE6] rounded-2xl p-5 sm:p-7 border border-[#D8D0C3]">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#5F6B45] mb-3">
                        Common Conditions, Symptoms & Indications Treated:
                      </p>
                      <ul className="grid sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#252822]/85">
                        {service.whyUsed.conditions.map((cond, cIdx) => (
                          <li key={cIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#5F6B45] shrink-0 mt-0.5" />
                            <span>{cond}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Realistic Benefits vs When Further Assessment is Needed */}
                    <div className="grid md:grid-cols-2 gap-4 pt-2">
                      <div className="p-5 rounded-2xl bg-white border border-[#D8D0C3]">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#5F6B45] block mb-2">
                          ✓ Realistic Potential Benefits (Evidence-Based)
                        </span>
                        <p className="text-xs sm:text-sm text-[#252822]/80 leading-relaxed font-light">
                          {service.whyUsed.realisticBenefits}
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-[#FFF8EE] border border-[#E3B873]/50">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#9E650C] flex items-center gap-1.5 mb-2">
                          <AlertCircle className="w-3.5 h-3.5 text-[#9E650C]" />
                          When Further Medical Assessment Is Needed
                        </span>
                        <p className="text-xs sm:text-sm text-[#252822]/80 leading-relaxed font-light">
                          {service.whyUsed.whenFurtherAssessmentNeeded}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* How does the treatment work step-by-step? (Phases 1 to 5) */}
                  <div className="space-y-6 pt-4 border-t border-[#D8D0C3]">
                    <div className="flex items-center gap-2.5">
                      <span className="w-3 h-3 rounded-full bg-[#5F6B45]" />
                      <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#293225]">
                        How does the treatment work? (Step-by-Step Procedure)
                      </h4>
                    </div>

                    <p className="text-xs sm:text-sm text-[#252822]/75 leading-relaxed font-light">
                      Dr. Neha Gupta (PT) and the clinical team deliver structured, multi-phase care adapted to your individual pain and tissue healing stage:
                    </p>

                    {/* Procedure Phases */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {service.howItWorks.steps.map((step, sIdx) => (
                        <div 
                          key={sIdx} 
                          className="bg-[#F4EFE6] rounded-2xl p-5 border border-[#D8D0C3] flex flex-col justify-between group hover:border-[#5F6B45] transition-colors"
                        >
                          <div>
                            <span className="text-[10px] font-mono font-bold text-[#B89A5A] uppercase tracking-wider block mb-1.5">
                              PHASE 0{sIdx + 1}
                            </span>
                            <h5 className="font-serif text-sm font-bold text-[#293225] mb-2 leading-snug">
                              {step.phase}
                            </h5>
                            <p className="text-xs text-[#252822]/80 leading-relaxed font-light">
                              {step.detail}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* What to expect before, during, after */}
                    <div className="bg-white rounded-2xl p-5 sm:p-7 border border-[#D8D0C3] space-y-3">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#5F6B45] mb-2 flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Patient Expectations: Before, During & After Treatment
                      </p>
                      
                      <div className="grid md:grid-cols-3 gap-4 text-xs sm:text-sm">
                        <div className="p-4 rounded-xl bg-[#F4EFE6]/70 border border-[#D8D0C3]/60">
                          <strong className="block text-[#293225] font-bold mb-1">Before Your Session:</strong>
                          <span className="text-[#252822]/80 font-light leading-relaxed">{service.howItWorks.expectations.before}</span>
                        </div>
                        <div className="p-4 rounded-xl bg-[#F4EFE6]/70 border border-[#D8D0C3]/60">
                          <strong className="block text-[#293225] font-bold mb-1">During Treatment:</strong>
                          <span className="text-[#252822]/80 font-light leading-relaxed">{service.howItWorks.expectations.during}</span>
                        </div>
                        <div className="p-4 rounded-xl bg-[#F4EFE6]/70 border border-[#D8D0C3]/60">
                          <strong className="block text-[#293225] font-bold mb-1">After Treatment:</strong>
                          <span className="text-[#252822]/80 font-light leading-relaxed">{service.howItWorks.expectations.after}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Which machine, equipment, or technique is used? */}
                  <div className="space-y-4 pt-4 border-t border-[#D8D0C3]">
                    <div className="flex items-center gap-2.5">
                      <span className="w-3 h-3 rounded-full bg-[#B89A5A]" />
                      <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#293225]">
                        Which machine, equipment, or technique is used?
                      </h4>
                    </div>

                    <div className="bg-[#F4EFE6] rounded-2xl p-6 sm:p-7 border border-[#D8D0C3] space-y-3">
                      <div className="flex items-start gap-3.5">
                        <Layers className="w-5 h-5 text-[#5F6B45] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-sm font-bold text-[#293225] block mb-1">
                            {service.equipmentAndTechniques.name}
                          </strong>
                          <p className="text-xs sm:text-sm text-[#252822]/80 leading-relaxed font-light mb-2">
                            {service.equipmentAndTechniques.description}
                          </p>
                          {service.equipmentAndTechniques.manualAspect && (
                            <p className="text-xs text-[#5F6B45] font-medium leading-relaxed italic">
                              <strong>Manual Therapy & Exercise Guidance: </strong>
                              {service.equipmentAndTechniques.manualAspect}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Who may benefit & Important Precautions */}
                  <div className="space-y-4 pt-4 border-t border-[#D8D0C3]">
                    <div className="flex items-center gap-2.5">
                      <span className="w-3 h-3 rounded-full bg-[#5F6B45]" />
                      <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#293225]">
                        Who may benefit & Important Clinical Precautions
                      </h4>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      {/* Candidates */}
                      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#D8D0C3] space-y-2.5">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#5F6B45] block">
                          Ideal Candidates & Problems Treated
                        </span>
                        <ul className="space-y-2 text-xs sm:text-sm text-[#252822]/80">
                          {service.whoMayBenefit.candidates.map((cand, iIdx) => (
                            <li key={iIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-[#5F6B45] shrink-0 mt-0.5" />
                              <span>{cand}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Precautions */}
                      <div className="bg-[#FFF8EE] rounded-2xl p-5 sm:p-6 border border-[#E3B873]/50 space-y-2.5">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#9E650C] flex items-center gap-1.5">
                          <AlertCircle className="w-4 h-4 text-[#9E650C]" />
                          Clinical Precautions & Contraindications
                        </span>
                        <p className="text-xs sm:text-sm text-[#252822]/80 leading-relaxed font-light">
                          {service.whoMayBenefit.precautionsAndContraindications}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* What should patients know & Treatment-Specific FAQs */}
                  <div className="space-y-5 pt-4 border-t border-[#D8D0C3]">
                    <div className="flex items-center gap-2.5">
                      <span className="w-3 h-3 rounded-full bg-[#B89A5A]" />
                      <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#293225]">
                        What should patients know? (Preparation, Aftercare & FAQs)
                      </h4>
                    </div>

                    {/* Preparation & Aftercare Cards */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="p-5 rounded-2xl bg-[#F4EFE6] border border-[#D8D0C3]">
                        <strong className="block text-xs font-bold uppercase tracking-wider text-[#5F6B45] mb-1.5">
                          Preparation Before Your Appointment
                        </strong>
                        <p className="text-xs sm:text-sm text-[#252822]/80 leading-relaxed font-light">
                          {service.whatPatientsShouldKnow.preparation}
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-[#F4EFE6] border border-[#D8D0C3]">
                        <strong className="block text-xs font-bold uppercase tracking-wider text-[#5F6B45] mb-1.5">
                          Recovery & Recommended Aftercare
                        </strong>
                        <p className="text-xs sm:text-sm text-[#252822]/80 leading-relaxed font-light">
                          {service.whatPatientsShouldKnow.aftercare}
                        </p>
                      </div>
                    </div>

                    {/* Treatment-Specific FAQs Accordion */}
                    {service.whatPatientsShouldKnow.faqs && service.whatPatientsShouldKnow.faqs.length > 0 && (
                      <div className="pt-3 space-y-3">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#5F6B45] block mb-2">
                          Frequently Asked Patient Questions:
                        </span>

                        {service.whatPatientsShouldKnow.faqs.map((faq, fIdx) => {
                          const isOpen = !!openFaqIndex[`${service.id}-${fIdx}`];

                          return (
                            <div 
                              key={fIdx} 
                              className="bg-white rounded-xl border border-[#D8D0C3] overflow-hidden shadow-2xs"
                            >
                              <button
                                type="button"
                                onClick={() => toggleFaq(service.id, fIdx)}
                                className="w-full p-4 sm:p-5 text-left flex justify-between items-center focus:outline-none group transition-colors hover:bg-[#FAF7F1]"
                              >
                                <span className="font-serif text-sm sm:text-base font-bold text-[#293225] group-hover:text-[#5F6B45] transition-colors pr-4">
                                  {faq.q}
                                </span>
                                <ChevronDown className={`w-4 h-4 text-[#B89A5A] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                              </button>

                              <AnimatePresence>
                                {isOpen && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.25, ease: luxuryEase }}
                                  >
                                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#252822]/80 font-light leading-relaxed border-t border-[#D8D0C3]/50">
                                      {faq.a}
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* Consultation & Booking Bottom Action Strip */}
                    <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-[#293225] via-[#354030] to-[#293225] text-white flex flex-col sm:flex-row items-center justify-between gap-5 shadow-lg">
                      <div className="space-y-1 text-center sm:text-left">
                        <p className="font-serif text-base sm:text-lg font-bold text-white">
                          Have questions about {service.name}?
                        </p>
                        <p className="text-xs text-white/80 font-light">
                          Speak directly with Dr. Neha Gupta (PT) or schedule your in-person clinical assessment at Pandeypur, Varanasi.
                        </p>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <Link 
                          to="/book-appointment" 
                          state={{ prefillService: service.name }}
                          className="btn-champagne text-xs whitespace-nowrap"
                        >
                          <Calendar className="w-3.5 h-3.5 mr-1" />
                          <span>BOOK APPOINTMENT</span>
                        </Link>
                        <a 
                          href={serviceWhatsappLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn-secondary text-xs flex items-center gap-1.5 whitespace-nowrap"
                        >
                          <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                          <span>WHATSAPP CONSULT</span>
                        </a>
                      </div>
                    </div>

                  </div>

                </div>

              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
