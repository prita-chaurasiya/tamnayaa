import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSlider from '../components/HeroSlider';
import InsideTamanya from '../components/InsideTamanya';
import { Link } from 'react-router-dom';
import { TiltCard } from '../components/MotionWrappers';
import ThreeDFolder from '../components/ui/3d-folder';
import cliImg from '../assets/cli.jpeg';
import phyImg from '../assets/phy.jpg';
import woImg from '../assets/wo.jpg';
import skinImg from '../assets/skin-864x1536.jpg';
import wellnessImg from '../assets/wellness-1-1024x683.jpg';
import nehaImg from '../assets/neha.jpeg';
import prizeImg from '../assets/prize.png';
import campImg from '../assets/camp.webp';

const luxuryEase = [0.16, 1, 0.3, 1];


export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "01. What services does Tamanya Physio & Health Clinic provide?",
      a: "Tamanya provides personalised physiotherapy and rehabilitation services, including orthopaedic, neurological, sports injury, musculoskeletal and women's health care. The clinic also offers specialised pelvic rehabilitation, aesthetic skin care, and slimming therapies."
    },
    {
      q: "02. Do I need a doctor's referral before visiting?",
      a: "No doctor referral is required. You can book an appointment directly with us for any physiotherapy, pelvic health, skin care, or wellness consultation."
    },
    {
      q: "03. What conditions can physiotherapy help with?",
      a: "Physiotherapy helps with back and neck pain, joint stiffness, post-surgical recovery (TKR/THR), sports injuries, postural issues, nerve pain, and mobility restrictions."
    },
    {
      q: "04. Does Tamanya provide specialised women's health physiotherapy?",
      a: "Yes, we specialize in female pelvic floor rehabilitation, prenatal and postnatal care, diastasis recti management, PCOD/PCOS support, and pelvic pain relief."
    },
    {
      q: "05. Can I visit Tamanya for pregnancy-related rehabilitation?",
      a: "Yes, our antenatal and postnatal programs help relieve back pain, pelvic girdle pain, and support safe physical recovery during and after pregnancy."
    },
    {
      q: "06. What happens during my first visit?",
      a: "Your first visit includes a detailed clinical assessment of your medical history, posture, range of motion, and physical concerns followed by a customized care plan."
    },
    {
      q: "07. How long does a physiotherapy session take?",
      a: "Initial consultations take approximately 45–60 minutes for a complete clinical evaluation, while follow-up therapy sessions typically last 30–45 minutes depending on your treatment protocol."
    },
    {
      q: "08. Does Tamanya treat sports injuries and post-surgical cases?",
      a: "Yes, we provide targeted sports rehabilitation, muscle tear management, ligament recovery (ACL/MCL), and joint stabilization programs alongside phased post-surgical rehabilitation."
    },
    {
      q: "09. What specialised physiotherapy techniques are available?",
      a: "We utilize advanced dry needling, cupping therapy, manual joint mobilization, pelvic floor re-education, electrotherapy, and customized exercise prescription."
    },
    {
      q: "10. How do I book an appointment?",
      a: "You can book directly by calling +91 70076 67808, using our online booking form, or visiting our clinic campus in Pandeypur, Varanasi."
    }
  ];

  return (
    <div className="bg-[#F4EFE6] text-[#252822] min-h-screen font-sans">
      
      {/* 01. Full-Bleed Cinematic Hero */}
      <HeroSlider />

      {/* 02. Trust & Clinical Strip — Warm Linen & Olive Accents */}
      <section className="py-16 px-6 lg:px-12 bg-[#FAF7F1] border-b border-[#D8D0C3]">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 card-3d-wrapper">
            {[
              {
                num: "01",
                title: "CLINICAL PRACTICE SINCE 2019",
                desc: "Serving patients across Pandeypur, Varanasi with dedicated healthcare excellence.",
                highlight: "Established 2019"
              },
              {
                num: "02",
                title: "7+ YEARS SPECIALISED CARE",
                desc: "Led personally by Dr. Neha Gupta (M.P.T Ortho) with specialized clinical expertise.",
                highlight: "Expert Lead"
              },
              {
                num: "03",
                title: "EVIDENCE-BASED PHYSIOTHERAPY",
                desc: "Targeted biomechanical recovery, manual joint therapy, and non-surgical rehabilitation.",
                highlight: "Clinical Standard"
              },
              {
                num: "04",
                title: "FEMALE PELVIC HEALTH SUITE",
                desc: "Private and discreet pelvic floor, antenatal and postnatal physical care.",
                highlight: "Private Suite"
              }
            ].map((card, i) => (
              <div 
                key={i} 
                className="bg-[#F4EFE6] p-7 rounded-[22px] border-2 border-[#D8D0C3] hover:border-[#B89A5A] shadow-[0_10px_30px_rgba(41,50,37,0.06)] hover:shadow-[0_25px_50px_rgba(95,107,69,0.3)] transition-all duration-500 group flex flex-col justify-between card-3d-element cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-serif font-bold text-[#5F6B45] group-hover:scale-110 group-hover:text-[#B89A5A] transition-all">{card.num}</span>
                    <span className="bg-[#5F6B45] text-[#FAF7F1] text-[9px] uppercase tracking-widest px-3 py-1 rounded-full font-bold border border-[#B89A5A]/40 shadow-sm">
                      {card.highlight}
                    </span>
                  </div>
                  <h3 className="font-serif text-base font-bold text-[#293225] mb-2 leading-snug group-hover:text-[#5F6B45] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-[#252822]/80 text-xs leading-relaxed font-light">
                    {card.desc}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#D8D0C3] flex items-center justify-between text-[10px] uppercase tracking-widest font-bold text-[#5F6B45]">
                  <span>TAMANYA PILLAR</span>
                  <span className="group-hover:translate-x-2 transition-transform duration-300 text-[#B89A5A] font-extrabold text-xs">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03. Introduction & Symptom Cards — Olive & Linen Theme */}
      <section className="py-20 lg:py-28 px-6 lg:px-12 bg-[#F4EFE6]">
        <div className="max-w-[1600px] mx-auto">
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="inline-block bg-[#E8ECDF] text-[#5F6B45] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border border-[#5F6B45]/30">
                  PHYSIO & HEALTH CARE • SINCE 2019
                </span>
              </div>
              
              <h2 className="font-serif text-4xl sm:text-6xl text-[#293225] font-bold tracking-tight leading-tight">
                Get Back to the Life You Love.
              </h2>
              
              <p className="text-[#5F6B45] italic text-base sm:text-lg font-medium leading-relaxed">
                Personalised physiotherapy and specialised rehabilitation to help you move better, recover with confidence, and understand your health.
              </p>
              
              <p className="text-[#252822]/80 text-sm sm:text-base font-light leading-relaxed">
                Led by Dr. Neha Gupta (M.P.T Orthopaedics), Tamanya Physio & Health Clinic provides evidence-based rehabilitation, specialized pelvic health care, and non-surgical pain management tailored to your personal goals in Pandeypur, Varanasi.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link to="/book-appointment" className="btn-olive">
                  BOOK CONSULTATION
                </Link>
                <Link to="/physiotherapy" className="btn-linen">
                  EXPLORE CARE
                </Link>
              </div>
            </div>

            {/* Right Clinic Image Card with Ken Burns */}
            <div className="lg:col-span-6 relative">
              <div className="aspect-[4/3] rounded-[28px] overflow-hidden shadow-2xl border-4 border-[#FAF7F1] relative group">
                <img 
                  src={cliImg} 
                  alt="Tamanya Health Clinic Varanasi" 
                  className="w-full h-full object-cover animate-ken-burns" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#293225]/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[#B89A5A] text-[10px] font-bold uppercase tracking-widest block">PRIVATE CLINIC CAMPUS</span>
                  <p className="font-serif text-xl font-bold text-[#FAF7F1]">Pandeypur Chauraha, Varanasi</p>
                </div>
              </div>
            </div>

          </div>

          {/* 3 Symptom Cards with 3D Interaction */}
          <div className="pt-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-[#5F6B45] uppercase tracking-[0.25em] text-xs font-bold block mb-3">UNDERSTANDING YOUR BODY</span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#293225] font-bold mb-4">
                Your Body Has a Way of Telling You Something.
              </h2>
              <p className="text-[#252822]/80 text-sm sm:text-base font-light leading-relaxed">
                Pain, stiffness, reduced mobility, or recurring physical discomfort can affect how you move, work, and live. Understanding the concern is the first step toward appropriate care.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  num: "01",
                  title: "Persistent Pain",
                  desc: "Back, neck, joint, or muscle pain that keeps returning can interfere with everyday movement and comfort. A personalised assessment can help understand the underlying concern and guide appropriate rehabilitation.",
                  link: "/physiotherapy"
                },
                {
                  num: "02",
                  title: "Limited Movement",
                  desc: "Stiffness or reduced mobility can make everyday activities, exercise, and movement more difficult. Physiotherapy and rehabilitation can be tailored to your individual functional needs.",
                  link: "/physiotherapy"
                },
                {
                  num: "03",
                  title: "Recurring Discomfort",
                  desc: "Posture-related concerns, physical strain, or recurring discomfort shouldn't simply be ignored. Understanding your movement patterns can help you take a more informed approach to your wellbeing.",
                  link: "/physiotherapy"
                }
              ].map((card, i) => (
                <Link
                  key={i} 
                  to={card.link}
                  className="bg-[#FAF7F1] p-8 sm:p-10 rounded-[24px] border-2 border-[#D8D0C3] hover:border-[#5F6B45] shadow-[0_10px_30px_rgba(41,50,37,0.04)] hover:shadow-[0_25px_50px_rgba(95,107,69,0.22)] transform hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden flex flex-col justify-between block"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-3xl font-serif font-bold text-[#5F6B45] group-hover:scale-110 transition-transform">{card.num}</span>
                      <span className="w-10 h-[2px] bg-[#5F6B45]/40 group-hover:w-16 group-hover:bg-[#B89A5A] transition-all"></span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#293225] font-bold mb-3 group-hover:text-[#5F6B45] transition-colors">{card.title}</h3>
                    <p className="text-[#252822]/80 text-xs sm:text-sm font-light leading-relaxed mb-8">{card.desc}</p>
                  </div>
                  <div className="pt-4 border-t border-[#D8D0C3] flex items-center justify-between text-[11px] uppercase tracking-widest font-bold text-[#5F6B45] group-hover:text-[#293225] transition-colors">
                    <span>CLINICAL ASSESSMENT</span>
                    <span className="group-hover:translate-x-1.5 transition-transform text-[#B89A5A]">→</span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Interactive 3D Animated Clinical Folder Reference */}
            <div className="pt-16 max-w-5xl mx-auto">
              <ThreeDFolder 
                title="Specialised Clinical Divisions"
                subtitle="Explore Dr. Neha Gupta's specialized clinical protocols and private care suites."
                category="TAMANYA HEALTH FOLDER ARCHIVE"
                items={[
                  {
                    id: '1',
                    title: 'Musculoskeletal Physiotherapy',
                    subtitle: 'Spine, Joint & Post-Surgical Rehab',
                    badge: 'Core Specialty',
                    description: 'Targeted joint mobilization, dry needling, cupping therapy, and biomechanical posture correction.',
                    accentColor: '#5F6B45'
                  },
                  {
                    id: '2',
                    title: 'Female Pelvic Health Suite',
                    subtitle: 'Private & Discreet Care',
                    badge: 'Dedicated Suite',
                    description: 'Confidential pelvic floor rehabilitation, prenatal/postnatal physical care, and incontinence management.',
                    accentColor: '#B89A5A'
                  },
                  {
                    id: '3',
                    title: 'Aesthetic Skin & Slimming',
                    subtitle: 'Integrative Toning Protocols',
                    badge: 'Aesthetics',
                    description: 'Dermatological peels, facial rejuvenation, ultrasonic inch-loss, and deep heat body contouring.',
                    accentColor: '#3F4A32'
                  }
                ]}
              />
            </div>

          </div>

        </div>
      </section>

      {/* 04 & 05. Clinical Offerings & Physiotherapy Section — Warm Linen & Olive */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#FAF7F1] border-t border-[#D8D0C3]">
        <div className="max-w-[1600px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-6 h-[2px] bg-[#5F6B45] block"></span>
              <span className="text-[#5F6B45] uppercase tracking-[0.25em] text-[11px] font-bold">OUR SPECIALISED CARE</span>
              <span className="w-6 h-[2px] bg-[#5F6B45] block"></span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#293225] font-bold mb-6 tracking-tight">Care That Goes Beyond Pain Relief</h2>
            <p className="text-[#252822]/80 text-base sm:text-lg font-light leading-relaxed">
              Tailored rehabilitation and aesthetic wellness treatments delivered with precision clinical expertise in Pandeypur, Varanasi.
            </p>
          </div>

          {/* 4 Major Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                img: phyImg,
                cat: "PHYSIOTHERAPY",
                title: "Advanced Physiotherapy",
                desc: "Evidence-led rehabilitation for movement, orthopaedic recovery, and chronic pain management.",
                link: "/physiotherapy"
              },
              {
                img: woImg,
                cat: "WOMEN'S HEALTH",
                title: "Pelvic & Maternal Care",
                desc: "Specialised pelvic floor rehabilitation, antenatal and postnatal care for women at every stage.",
                link: "/womens-health"
              },
              {
                img: skinImg,
                cat: "SKIN CARE",
                title: "Integrative Skin Care",
                desc: "Clinical skin rejuvenation, acne treatment, chemical peels, and laser therapy.",
                link: "/skin-care"
              },
              {
                img: wellnessImg,
                cat: "SLIMMING & WELLNESS",
                title: "Slimming & Body Shaping",
                desc: "Non-invasive Body Shaper, Vacuum Cavitation, Deep Heat, and G-5 targeted inch loss therapies.",
                link: "/slimming-wellness"
              }
            ].map((card, i) => (
              <Link 
                key={i} 
                to={card.link}
                className="bg-[#F4EFE6] rounded-[20px] overflow-hidden shadow-md border border-[#D8D0C3] hover:border-[#5F6B45] transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between block relative"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#293225]/70 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 bg-[#5F6B45] text-[#FAF7F1] text-[9px] uppercase tracking-widest px-3 py-1 rounded-full font-bold border border-[#B89A5A]/30">
                    {card.cat}
                  </span>
                </div>
                
                <div className="p-7 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-serif text-xl text-[#293225] font-bold mb-3 group-hover:text-[#5F6B45] transition-colors">{card.title}</h3>
                    <p className="text-[#252822]/80 text-xs leading-relaxed font-light mb-6">{card.desc}</p>
                  </div>
                  
                  <div className="pt-4 border-t border-[#D8D0C3] flex items-center justify-between text-[11px] uppercase tracking-widest font-bold text-[#252822] group-hover:text-[#5F6B45] transition-colors">
                    <span>EXPLORE CARE</span>
                    <span className="group-hover:translate-x-1.5 transition-transform text-[#B89A5A]">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* 06. Orthopaedic & Neurological Rehabilitation Spotlight */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#F4EFE6] border-t border-[#D8D0C3]">
        <div className="max-w-[1600px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#5F6B45] uppercase tracking-[0.25em] text-xs font-bold block mb-3">CLINICAL SPECIALISATIONS</span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#293225] font-bold mb-4">Orthopaedic & Neurological Recovery</h2>
            <p className="text-[#252822]/80 text-base sm:text-lg font-light leading-relaxed">
              Targeted clinical pathways designed for structural spine, joint, nerve, and brain recovery.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Spine & Sciatica Care",
                desc: "Disc herniation, sciatica radiation, lumbar stiffness, and cervical spondylosis rehabilitation.",
                tag: "ORTHOPAEDIC"
              },
              {
                title: "Pre & Post Surgery (TKR / THR)",
                desc: "Phased post-surgical rehabilitation for Total Knee & Hip replacements, restoring gait and strength.",
                tag: "REHABILITATION"
              },
              {
                title: "Stroke & Neurological Rehab",
                desc: "Neuromuscular re-education, post-stroke motor recovery, Parkinson's gait support, and nerve compression.",
                tag: "NEUROLOGY"
              }
            ].map((item, i) => (
              <TiltCard key={i} maxTilt={10} scale={1.03} className="h-full">
                <div className="bg-[#FAF7F1] p-8 sm:p-9 rounded-[28px] border-2 border-[#D8D0C3] hover:border-[#B89A5A] transition-all duration-500 shadow-[0_10px_30px_rgba(41,50,37,0.05)] hover:shadow-[0_25px_60px_rgba(95,107,69,0.25)] flex flex-col justify-between h-full group cursor-pointer">
                  <div>
                    <span className="bg-[#5F6B45] text-[#FAF7F1] text-[9px] uppercase tracking-widest px-3.5 py-1.5 rounded-full font-bold inline-block mb-5 border border-[#B89A5A]/40 shadow-sm group-hover:bg-[#B89A5A] group-hover:text-[#293225] transition-colors">
                      {item.tag}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#293225] mb-3 group-hover:text-[#5F6B45] transition-colors leading-snug">{item.title}</h3>
                    <p className="text-[#252822]/80 text-xs sm:text-sm leading-relaxed font-light mb-8">{item.desc}</p>
                  </div>
                  <Link to="/physiotherapy" className="pt-4 border-t border-[#D8D0C3] text-xs font-bold uppercase tracking-widest text-[#5F6B45] group-hover:text-[#293225] flex items-center justify-between transition-colors">
                    <span>LEARN MORE</span> 
                    <span className="group-hover:translate-x-2 transition-transform duration-300 text-[#B89A5A] font-extrabold text-sm">→</span>
                  </Link>
                </div>
              </TiltCard>
            ))}
          </div>

        </div>
      </section>

      {/* 13. Inside Tamanya Interactive Gallery Slider */}
      <InsideTamanya />

      {/* 11 & 13. Doctor Section: Meet Your Practitioner (International Editorial Composition) */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#FAF7F1] border-t border-[#D8D0C3] relative overflow-hidden">
        
        {/* Oversized Background Moving Editorial Typography */}
        <div className="absolute top-10 left-0 w-full overflow-hidden pointer-events-none opacity-[0.035] select-none">
          <span className="font-serif text-[180px] lg:text-[250px] font-bold text-[#293225] whitespace-nowrap block tracking-widest leading-none parallax-float">
            PRACTITIONER FOUNDER
          </span>
        </div>

        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">
          
          {/* Left Text & Bio Content — Premium Editorial Sequence */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 1. Badge */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: luxuryEase }}
              className="flex items-center gap-3"
            >
              <span className="w-8 h-[2px] bg-[#B89A5A] block"></span>
              <span className="text-[#5F6B45] uppercase tracking-[0.25em] text-xs font-extrabold block">CLINICAL DIRECTOR</span>
            </motion.div>

            {/* 2. Heading & Name */}
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2, ease: luxuryEase }}
                className="font-serif text-4xl sm:text-6xl text-[#293225] font-bold tracking-tight leading-tight"
              >
                Meet Your Practitioner
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3, ease: luxuryEase }}
                className="font-serif italic text-3xl sm:text-4xl text-[#5F6B45] font-semibold mt-2 text-gradient-gold"
              >
                Dr. Neha Gupta
              </motion.p>
            </div>

            {/* 3. Qualifications & Credentials List */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.4, ease: luxuryEase }}
              className="flex flex-wrap items-center gap-4 text-xs font-bold text-[#252822] py-3 border-y-2 border-[#D8D0C3]"
            >
              <span className="flex items-center gap-1.5"><span className="text-[#B89A5A] font-extrabold text-sm">✓</span> Physiotherapist</span>
              <span className="text-[#B89A5A] font-bold">•</span>
              <span className="flex items-center gap-1.5"><span className="text-[#B89A5A] font-extrabold text-sm">✓</span> Women's Health Specialist</span>
              <span className="text-[#B89A5A] font-bold">•</span>
              <span className="flex items-center gap-1.5"><span className="text-[#B89A5A] font-extrabold text-sm">✓</span> Founder, Tamanya</span>
            </motion.div>

            {/* 4. Biography Paragraphs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5, ease: luxuryEase }}
              className="space-y-4 text-[#252822]/85 font-light leading-relaxed text-sm sm:text-base"
            >
              <p>
                Dr. Neha Gupta's journey has grown from a foundation in physiotherapy into a broader commitment to rehabilitation, women's health, and preventive healthcare. With <strong>7+ years of clinical experience</strong>, a <strong>Master's in Physiotherapy with an Orthopaedics specialisation</strong>, and advanced training in <strong>pelvic floor, prenatal and postnatal rehabilitation</strong>, she has built her practice around personalised, patient-focused care.
              </p>
              <p>
                In <strong>2019, she founded Tamanya Physio & Health Clinic in Varanasi</strong>, bringing together her clinical experience and vision of helping people recover better, understand their health, and regain confidence in everyday movement. Her professional development has continued through specialised training in women's health, pelvic rehabilitation and advanced physiotherapy techniques.
              </p>
              <p>
                Today, through Tamanya, Dr. Neha focuses on creating a more informed approach to rehabilitation—one that looks beyond immediate discomfort toward <strong>mobility, functional recovery, women's health, and long-term wellbeing</strong>.
              </p>
            </motion.div>

            {/* 5. CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6, ease: luxuryEase }}
              className="pt-4 flex flex-wrap items-center gap-4"
            >
              <Link 
                to="/about" 
                className="btn-deep-olive"
              >
                READ FULL BIOGRAPHY
              </Link>
              <Link 
                to="/book-appointment" 
                className="btn-olive"
              >
                BOOK CONSULTATION WITH DR. NEHA
              </Link>
            </motion.div>
          </div>

          {/* Right Portrait & Floating Detail Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, delay: 0.3, ease: luxuryEase }}
            className="lg:col-span-5 relative"
          >
            <Link to="/about" className="block group">
              
              {/* Photo with Framer Motion Unveil & Ken Burns Zoom */}
              <div className="aspect-[3/4] rounded-[28px] overflow-hidden shadow-2xl border-4 border-[#FAF7F1] relative z-10 bg-[#FAF7F1]">
                <img 
                  src={nehaImg} 
                  alt="Dr. Neha Gupta - Clinical Director & Founder Tamanya Health" 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#293225]/40 via-transparent to-transparent opacity-30 group-hover:opacity-10 transition-opacity pointer-events-none" />
              </div>

              {/* Decorative Champagne Border Accent */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#B89A5A] rounded-[28px] z-0 hidden sm:block group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>

              {/* Floating Experience Badge */}
              <div className="absolute bottom-6 left-6 z-20 bg-[#293225]/95 text-white p-4 sm:p-5 rounded-[20px] border border-[#B89A5A]/50 shadow-2xl backdrop-blur-md animate-float-up-down">
                <span className="text-[#B89A5A] text-[9px] uppercase tracking-widest font-extrabold block">CLINICAL EXPERTISE</span>
                <p className="font-serif text-xl sm:text-2xl font-bold text-white mt-0.5">7+ Years Practice</p>
                <p className="text-[10px] text-white/80 font-light mt-1">M.P.T Orthopaedics • MIAP</p>
              </div>

            </Link>
          </motion.div>

        </div>
      </section>

      {/* 10. Why Choose Us — Care Built Around You */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#F4EFE6] border-t border-[#D8D0C3]">
        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Award Badge Frame / Image */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[3/4] rounded-[28px] overflow-hidden shadow-2xl border-4 border-[#FAF7F1] bg-[#FAF7F1] relative z-10 group">
              <img 
                src={prizeImg} 
                alt="Best Clinician Award - Dr. Neha Gupta" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#5F6B45] rounded-[28px] z-0 hidden sm:block"></div>
          </div>

          {/* Right Why Choose Us Content & 4 Cards */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-[#5F6B45] uppercase tracking-[0.25em] text-xs font-bold block mb-2">WHY CHOOSE US</span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#293225] font-bold mb-4">
                Care Built Around You.
              </h2>
              <p className="text-[#252822]/80 text-sm sm:text-base font-light leading-relaxed">
                Every person's recovery is different. Tamanya combines personalised physiotherapy, specialised women's health expertise, rehabilitation, and patient education to support care that is tailored to individual needs.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="bg-[#FAF7F1] p-6 rounded-2xl border border-[#D8D0C3] space-y-2 hover:border-[#5F6B45] transition-colors shadow-sm">
                <span className="text-2xl font-serif font-bold text-[#5F6B45] block">01</span>
                <h3 className="font-serif text-lg font-bold text-[#293225]">Personalized Care</h3>
                <p className="text-[#252822]/80 text-xs font-light leading-relaxed">
                  Our approach focuses on your individual concerns, movement, recovery needs, and everyday goals rather than treating every patient the same way.
                </p>
              </div>

              <div className="bg-[#FAF7F1] p-6 rounded-2xl border border-[#D8D0C3] space-y-2 hover:border-[#5F6B45] transition-colors shadow-sm">
                <span className="text-2xl font-serif font-bold text-[#5F6B45] block">02</span>
                <h3 className="font-serif text-lg font-bold text-[#293225]">Specialised Women's Health</h3>
                <p className="text-[#252822]/80 text-xs font-light leading-relaxed">
                  Tamanya has a specialised focus on women's health and pelvic rehabilitation, including prenatal and postnatal rehabilitation, pelvic floor care, urinary incontinence, and pelvic health management.
                </p>
              </div>

              <div className="bg-[#FAF7F1] p-6 rounded-2xl border border-[#D8D0C3] space-y-2 hover:border-[#5F6B45] transition-colors shadow-sm">
                <span className="text-2xl font-serif font-bold text-[#5F6B45] block">03</span>
                <h3 className="font-serif text-lg font-bold text-[#293225]">Holistic Rehabilitation</h3>
                <p className="text-[#252822]/80 text-xs font-light leading-relaxed">
                  Our rehabilitation approach focuses on mobility, functional independence, recovery, and quality of life, helping patients better understand their physical health along the way.
                </p>
              </div>

              <div className="bg-[#FAF7F1] p-6 rounded-2xl border border-[#D8D0C3] space-y-2 hover:border-[#5F6B45] transition-colors shadow-sm">
                <span className="text-2xl font-serif font-bold text-[#5F6B45] block">04</span>
                <h3 className="font-serif text-lg font-bold text-[#293225]">Experience & Education</h3>
                <p className="text-[#252822]/80 text-xs font-light leading-relaxed">
                  Dr. Neha Gupta brings seven years of clinical experience alongside multidisciplinary training in physiotherapy, orthopaedics, women's health, and rehabilitation. Her work also places strong emphasis on patient counselling and healthcare awareness.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 14. Patient Journey Process Section — Warm Linen & Olive Accent */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#FAF7F1] border-t border-[#D8D0C3]">
        <div className="max-w-[1600px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#5F6B45] uppercase tracking-[0.25em] text-xs font-bold block mb-3">THE PROCESS</span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#293225] font-bold mb-4 leading-tight">
              Your Journey Starts With One Conversation.
            </h2>
            <p className="text-[#252822]/80 text-base sm:text-lg font-light leading-relaxed">
              From understanding your concern to creating a personalised care plan, every step is focused on helping you move toward better recovery and wellbeing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
            {[
              { num: "01 UNDERSTAND", title: "Understand Your Needs", desc: "We begin by understanding your concern, symptoms, health history, lifestyle, and everyday challenges." },
              { num: "02 ASSESS", title: "Assess & Identify", desc: "A personalised assessment helps understand your movement, functional needs, and the areas that may require professional attention." },
              { num: "03 PERSONALISE", title: "Personalise Your Care", desc: "Based on your individual needs, we guide you toward an appropriate physiotherapy, rehabilitation, women's health, or wellness approach." },
              { num: "04 PROGRESS", title: "Support Your Progress", desc: "Your care is focused on recovery, mobility, functional independence, and helping you return to everyday life with greater confidence." }
            ].map((item, i) => (
              <div 
                key={i} 
                className="bg-[#F4EFE6] p-8 rounded-[24px] border-2 border-[#D8D0C3] hover:border-[#5F6B45] shadow-[0_10px_30px_rgba(41,50,37,0.04)] hover:shadow-[0_25px_50px_rgba(95,107,69,0.20)] transform hover:-translate-y-2 transition-all duration-500 group relative flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block bg-[#E8ECDF] text-[#5F6B45] px-3.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase mb-6 border border-[#5F6B45]/30">
                    {item.num}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#293225] mb-3 group-hover:text-[#5F6B45] transition-colors">{item.title}</h3>
                  <p className="text-[#252822]/80 text-xs leading-relaxed font-light mb-6">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/book-appointment" className="btn-olive">
              BOOK AN APPOINTMENT
            </Link>
          </div>

        </div>
      </section>

      {/* 15. Community Health Camp Feature */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-gradient-to-br from-[#3F4A32] via-[#293225] to-[#1F261C] text-white border-t border-[#D8D0C3] relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Image camp.webp */}
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/3] rounded-[28px] overflow-hidden shadow-2xl border-4 border-white/20 group">
              <img 
                src={campImg} 
                alt="Tamanya Physio & Health Clinic Community Camp" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 animate-ken-burns" 
              />
            </div>
          </div>

          {/* Right Column: Event Info */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="bg-white/20 text-[#B89A5A] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase inline-block mb-3 border border-white/30">
                COMMUNITY INITIATIVE
              </span>
              <p className="text-[#B89A5A] uppercase tracking-[0.2em] text-xs font-bold mb-2">JOIN OUR UPCOMING HEALTH CAMP</p>
              <h2 className="font-serif text-3xl sm:text-5xl text-white font-bold leading-tight">
                Your Health Deserves Attention.
              </h2>
            </div>

            <p className="text-white/85 font-light text-base sm:text-lg leading-relaxed">
              Take the opportunity to learn more about your health, discuss your physical concerns, and receive professional clinical screenings from our dedicated team.
            </p>

            {/* Dark Styled Box */}
            <div className="bg-[#1F261C] border-2 border-[#B89A5A]/40 p-6 sm:p-8 rounded-[24px] space-y-6 shadow-2xl relative">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#B89A5A]">
                Community Mobility & Spine Screening Camp
              </h3>

              <div className="grid sm:grid-cols-2 gap-6 text-xs text-white/90">
                <div className="flex items-start gap-3">
                  <span className="text-[#B89A5A] text-lg">📅</span>
                  <div>
                    <p className="font-bold text-white text-sm mb-0.5">Date</p>
                    <p className="text-white/70 font-light">Upcoming Session / Contact Clinic</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-[#B89A5A] text-lg">🕒</span>
                  <div>
                    <p className="font-bold text-white text-sm mb-0.5">Time</p>
                    <p className="text-white/70 font-light">09:00 AM – 02:00 PM</p>
                  </div>
                </div>

                <div className="sm:col-span-2 flex items-start gap-3">
                  <span className="text-[#B89A5A] text-lg">📍</span>
                  <div>
                    <p className="font-bold text-white text-sm mb-0.5">Location</p>
                    <p className="text-white/70 font-light">Tamanya Clinic Campus & Community Center, Pandeypur, Varanasi</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link 
                to="/book-appointment" 
                className="bg-[#5F6B45] hover:bg-[#3F4A32] text-white px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-bold transition-all shadow-lg hover:scale-105 border border-[#B89A5A]/50"
              >
                Book an Appointment
              </Link>
              <a 
                href="tel:+917007667808" 
                className="border-2 border-white/40 text-white hover:bg-white/10 px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-bold transition-all"
              >
                Call for Details
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* 16. Patient Stories — Warm Linen & Olive Accent */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#F4EFE6] border-t border-[#D8D0C3]">
        <div className="max-w-[1600px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#5F6B45] uppercase tracking-[0.25em] text-xs font-bold block mb-3">PATIENT STORIES</span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#293225] font-bold mb-4">Real Experiences. Real Journeys.</h2>
            <p className="text-[#252822]/80 text-base sm:text-lg font-light leading-relaxed">
              Hear from people who have chosen Tamanya for their physiotherapy, rehabilitation, women's health, and wellness needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "I had a very positive experience with Dr Neha Gupta she was very professional, patient, and took the time to understand my problem in detail before starting treatment. The exercises and therapy sessions were explained clearly and tailored to my condition. I noticed steady improvement in my pain and mobility after following their guidance. The clinic environment was clean and comfortable, and the overall approach was supportive and motivating. Highly recommended for anyone looking for effective and caring physiotherapy treatment.",
                name: "DS Pandey",
                service: "Therapy",
                tag: "Verified Patient"
              },
              {
                quote: "I visited this clinic for my pain and I'm really satisfied with the treatment. The physiotherapist is knowledgeable, patient, and focuses on proper recovery rather than just quick fixes. They guide you through exercises and make sure you're comfortable. I've seen great improvement. Thank you for the care!!!",
                name: "Ashrrr",
                service: "Physiotherapy",
                tag: "Verified Patient"
              },
              {
                quote: "Neha Gupta ma'am is expert and experienced physiotherapist I have ever met, her coworkers are also very attentive and helpful my child's elbow folding exercises had done here that's result was amazing I am so happy with her services.So I recommend must to visit Tamanya physiotherapy if any physical aches or that mentioned here health issues😊👍",
                name: "Sonam Gupta",
                service: "Physiotherapy",
                tag: "Verified Patient"
              }
            ].map((review, i) => (
              <TiltCard key={i} maxTilt={6} className="h-full">
                <div className="bg-[#FAF7F1] p-8 sm:p-10 rounded-[24px] border-2 border-[#D8D0C3] hover:border-[#5F6B45] shadow-[0_10px_30px_rgba(41,50,37,0.04)] hover:shadow-[0_25px_50px_rgba(95,107,69,0.20)] transition-all duration-300 flex flex-col justify-between group h-full">
                  <div>
                    <div className="flex items-center gap-1 text-[#B89A5A] text-lg mb-4">
                      ★★★★★
                    </div>
                    <p className="text-[#252822]/90 font-serif italic text-xs sm:text-sm leading-relaxed mb-8">
                      "{review.quote}"
                    </p>
                  </div>
                  <div className="pt-6 border-t border-[#D8D0C3] flex items-center justify-between">
                    <div>
                      <h4 className="font-serif font-bold text-[#293225] text-base sm:text-lg group-hover:text-[#5F6B45] transition-colors">{review.name}</h4>
                      <span className="text-xs text-[#252822]/60 font-medium">{review.service}</span>
                    </div>
                    <span className="bg-[#E8ECDF] text-[#5F6B45] text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-bold border border-[#5F6B45]/30">
                      {review.tag}
                    </span>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>

        </div>
      </section>

      {/* 18. FAQ Accordion — Warm Linen & Olive Accent */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#FAF7F1] border-t border-[#D8D0C3]">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="text-[#5F6B45] uppercase tracking-[0.25em] text-xs font-bold block mb-3">CLINICAL ARTICLES & FAQS</span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#293225] font-bold mb-4">Questions You May Have.</h2>
            <p className="text-[#252822]/80 text-base sm:text-lg font-light leading-relaxed">
              Clear answers about treatments, clinical appointments, and visiting Tamanya.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#F4EFE6] rounded-[16px] border border-[#D8D0C3] hover:border-[#5F6B45] overflow-hidden shadow-sm transition-colors">
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full p-6 text-left flex justify-between items-center focus:outline-none group"
                >
                  <span className="font-serif text-base sm:text-lg text-[#293225] font-bold flex items-center gap-4 group-hover:text-[#5F6B45] transition-colors">
                    {faq.q}
                  </span>
                  <span className={`text-[#B89A5A] text-xl font-bold transform transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 pt-2 text-[#252822]/85 text-sm font-light leading-relaxed border-t border-[#D8D0C3]/60 bg-[#FAF7F1]">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
