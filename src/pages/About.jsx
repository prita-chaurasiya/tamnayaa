import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import InsideTamanya from '../components/InsideTamanya';
import nehaImg from '../assets/neha.jpeg';
import cliImg from '../assets/cli.jpeg';
import prizeImg from '../assets/prize.png';

export default function About() {
  return (
    <div className="bg-[#F4EFE6] text-[#252822] min-h-screen font-sans">
      
      {/* Full Image Page Hero */}
      <PageHero 
        title="About Tamanya Health"
        category="CLINICAL EXCELLENCE & DEDICATION"
        subtitle="Trusted Physiotherapy, Pelvic Health & Holistic Rehabilitation in Pandeypur, Varanasi."
        image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2070&q=80"
        pageName="ABOUT US"
        ctaText="BOOK AN APPOINTMENT"
        ctaLink="/book-appointment"
        secondaryCtaText="OUR SERVICES"
        secondaryCtaLink="/physiotherapy"
        floatBadgeText="CLINICAL DIRECTOR"
        floatBadgeValue="Dr. Neha Gupta"
      />

      {/* 1. SECTION 1: UNDERSTANDING YOUR BODY */}
      <section className="py-20 lg:py-28 px-6 lg:px-12 bg-[#FAF7F1] border-b border-[#D8D0C3]">
        <div className="max-w-[1600px] mx-auto">
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
                className="bg-[#F4EFE6] p-8 sm:p-10 rounded-[24px] border-2 border-[#D8D0C3] hover:border-[#5F6B45] shadow-[0_10px_30px_rgba(41,50,37,0.04)] hover:shadow-[0_25px_50px_rgba(95,107,69,0.20)] transform hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden flex flex-col justify-between block"
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
        </div>
      </section>

      {/* 2. SECTION 2: MEET YOUR PRACTITIONER - DR. NEHA GUPTA */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#F4EFE6] border-b border-[#D8D0C3]">
        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[#5F6B45] uppercase tracking-[0.25em] text-xs font-bold block">WHO YOU'LL SEE</span>
            <div>
              <h2 className="font-serif text-4xl sm:text-6xl text-[#293225] font-bold tracking-tight">
                Meet Your Practitioner
              </h2>
              <p className="font-serif italic text-3xl sm:text-4xl text-[#5F6B45] font-semibold mt-2">
                Dr. Neha Gupta
              </p>
            </div>

            {/* Checkmarks line */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-[#252822] py-2 border-y border-[#D8D0C3]">
              <span className="flex items-center gap-1.5"><span className="text-[#B89A5A]">✓</span> Physiotherapist</span>
              <span className="flex items-center gap-1.5"><span className="text-[#B89A5A]">✓</span> Women's Health Specialist</span>
              <span className="flex items-center gap-1.5"><span className="text-[#B89A5A]">✓</span> Founder, Tamanya</span>
            </div>

            <div className="space-y-4 text-[#252822]/80 font-light leading-relaxed text-sm sm:text-base">
              <p>
                Dr. Neha Gupta's journey has grown from a foundation in physiotherapy into a broader commitment to rehabilitation, women's health, and preventive healthcare. With <strong>7+ years of clinical experience</strong>, a <strong>Master's in Physiotherapy with an Orthopaedics specialisation</strong>, and advanced training in <strong>pelvic floor, prenatal and postnatal rehabilitation</strong>, she has built her practice around personalised, patient-focused care.
              </p>
              <p>
                In <strong>2019, she founded Tamanya Physio & Health Clinic in Varanasi</strong>, bringing together her clinical experience and vision of helping people recover better, understand their health, and regain confidence in everyday movement. Her professional development has continued through specialised training in women's health, pelvic rehabilitation and advanced physiotherapy techniques.
              </p>
              <p>
                Today, through Tamanya, Dr. Neha focuses on creating a more informed approach to rehabilitation—one that looks beyond immediate discomfort toward <strong>mobility, functional recovery, women's health, and long-term wellbeing</strong>.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link 
                to="/book-appointment" 
                className="btn-olive"
              >
                BOOK CONSULTATION WITH DR. NEHA
              </Link>
              <a 
                href="tel:+917007667808" 
                className="btn-linen"
              >
                CALL CLINIC: +91 70076 67808
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="aspect-[3/4] rounded-[28px] overflow-hidden shadow-2xl border-4 border-[#FAF7F1] relative z-10 group bg-[#FAF7F1]">
              <img src={nehaImg} alt="Dr. Neha Gupta" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#B89A5A] rounded-[28px] z-0 hidden sm:block"></div>
          </div>

        </div>
      </section>

      {/* 3. SECTION 3: WHY CHOOSE US - CARE BUILT AROUND YOU */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#FAF7F1] border-b border-[#D8D0C3]">
        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Award Badge Frame / Image */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[3/4] rounded-[28px] overflow-hidden shadow-2xl border-4 border-white bg-white relative z-10 group">
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
              <div className="bg-[#F4EFE6] p-6 rounded-2xl border border-[#D8D0C3] space-y-2 hover:border-[#5F6B45] transition-colors shadow-sm">
                <span className="text-2xl font-serif font-bold text-[#5F6B45] block">01</span>
                <h3 className="font-serif text-lg font-bold text-[#293225]">Personalized Care</h3>
                <p className="text-[#252822]/80 text-xs font-light leading-relaxed">
                  Our approach focuses on your individual concerns, movement, recovery needs, and everyday goals rather than treating every patient the same way.
                </p>
              </div>

              <div className="bg-[#F4EFE6] p-6 rounded-2xl border border-[#D8D0C3] space-y-2 hover:border-[#5F6B45] transition-colors shadow-sm">
                <span className="text-2xl font-serif font-bold text-[#5F6B45] block">02</span>
                <h3 className="font-serif text-lg font-bold text-[#293225]">Specialised Women's Health</h3>
                <p className="text-[#252822]/80 text-xs font-light leading-relaxed">
                  Tamanya has a specialised focus on women's health and pelvic rehabilitation, including prenatal and postnatal rehabilitation, pelvic floor care, urinary incontinence, and pelvic health management.
                </p>
              </div>

              <div className="bg-[#F4EFE6] p-6 rounded-2xl border border-[#D8D0C3] space-y-2 hover:border-[#5F6B45] transition-colors shadow-sm">
                <span className="text-2xl font-serif font-bold text-[#5F6B45] block">03</span>
                <h3 className="font-serif text-lg font-bold text-[#293225]">Holistic Rehabilitation</h3>
                <p className="text-[#252822]/80 text-xs font-light leading-relaxed">
                  Our rehabilitation approach focuses on mobility, functional independence, recovery, and quality of life, helping patients better understand their physical health along the way.
                </p>
              </div>

              <div className="bg-[#F4EFE6] p-6 rounded-2xl border border-[#D8D0C3] space-y-2 hover:border-[#5F6B45] transition-colors shadow-sm">
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

      {/* Inside Tamanya Interactive Gallery Slider */}
      <InsideTamanya />

      {/* RELATED SERVICES NAVIGATION */}
      <section className="py-20 px-6 lg:px-12 bg-[#F4EFE6]">
        <div className="max-w-[1600px] mx-auto text-center">
          <span className="text-[#5F6B45] uppercase tracking-[0.25em] text-xs font-bold block mb-3">EXPLORE OUR CLINICAL DIVISIONS</span>
          <h2 className="font-serif text-3xl font-bold text-[#293225] mb-12">Discover Specialist Pathways</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/physiotherapy" className="bg-[#FAF7F1] p-8 rounded-[24px] border border-[#D8D0C3] hover:border-[#5F6B45] text-left group">
              <span className="text-xs font-bold text-[#5F6B45] uppercase tracking-widest block mb-2">DIVISION 01</span>
              <h3 className="font-serif text-2xl font-bold text-[#293225] group-hover:text-[#5F6B45] mb-2">Advanced Physiotherapy</h3>
              <p className="text-xs text-[#252822]/75 font-light">Spine, joint, sports injury & neurological rehabilitation.</p>
            </Link>

            <Link to="/womens-health" className="bg-[#FAF7F1] p-8 rounded-[24px] border border-[#D8D0C3] hover:border-[#5F6B45] text-left group">
              <span className="text-xs font-bold text-[#5F6B45] uppercase tracking-widest block mb-2">DIVISION 02</span>
              <h3 className="font-serif text-2xl font-bold text-[#293225] group-hover:text-[#5F6B45] mb-2">Female Pelvic Floor Suite</h3>
              <p className="text-xs text-[#252822]/75 font-light">Specialised pelvic rehabilitation, PCOD, antenatal & postnatal care.</p>
            </Link>

            <Link to="/slimming-wellness" className="bg-[#FAF7F1] p-8 rounded-[24px] border border-[#D8D0C3] hover:border-[#5F6B45] text-left group">
              <span className="text-xs font-bold text-[#5F6B45] uppercase tracking-widest block mb-2">DIVISION 04</span>
              <h3 className="font-serif text-2xl font-bold text-[#293225] group-hover:text-[#5F6B45] mb-2">Slimming & Body Shaping</h3>
              <p className="text-xs text-[#252822]/75 font-light">Vacuum cavitation, Body Shaper & deep heat therapies.</p>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
