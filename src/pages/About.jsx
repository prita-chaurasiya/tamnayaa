import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import InsideTamanya from '../components/InsideTamanya';
import nehaImg from '../assets/neha.jpeg';
import cliImg from '../assets/cli.jpeg';
import prizeImg from '../assets/prize.png';

export default function About() {
  return (
    <div className="bg-white text-[#17242D] min-h-screen font-sans">
      
      {/* Full Image Page Hero */}
      <PageHero 
        title="About Tamanya Health"
        category="CLINICAL EXCELLENCE & DEDICATION"
        subtitle="Trusted Physiotherapy, Pelvic Health & Holistic Rehabilitation in Pandeypur, Varanasi."
        image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2070&q=80"
        pageName="ABOUT US"
      />

      {/* 1. SECTION 1: UNDERSTANDING YOUR BODY (Exact Screenshot 1) */}
      <section className="py-20 lg:py-28 px-6 lg:px-12 bg-white border-b border-[#E8E5DF]">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#B79657] uppercase tracking-[0.25em] text-xs font-bold block mb-3">UNDERSTANDING YOUR BODY</span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#17242D] font-bold mb-4">
              Your Body Has a Way of Telling You Something.
            </h2>
            <p className="text-[#17242D]/75 text-sm sm:text-base font-light leading-relaxed">
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
                className="bg-white p-8 sm:p-10 rounded-[24px] border-2 border-[#E8E5DF] hover:border-[#B79657] shadow-[0_10px_30px_rgba(23,36,45,0.04)] hover:shadow-[0_25px_50px_rgba(183,150,87,0.22)] transform hover:-translate-y-2 hover:bg-[#FAF8F5] transition-all duration-500 group relative overflow-hidden flex flex-col justify-between block"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-serif font-bold text-[#B79657] group-hover:scale-110 transition-transform">{card.num}</span>
                    <span className="w-10 h-[2px] bg-[#B79657]/40 group-hover:w-16 group-hover:bg-[#B79657] transition-all"></span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#17242D] font-bold mb-3 group-hover:text-[#B79657] transition-colors">{card.title}</h3>
                  <p className="text-[#17242D]/75 text-xs sm:text-sm font-light leading-relaxed mb-8">{card.desc}</p>
                </div>
                <div className="pt-4 border-t border-[#E8E5DF] flex items-center justify-between text-[11px] uppercase tracking-widest font-bold text-[#B79657] group-hover:text-[#17242D] transition-colors">
                  <span>CLINICAL ASSESSMENT</span>
                  <span className="group-hover:translate-x-1.5 transition-transform text-[#B79657]">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 2. SECTION 2: MEET YOUR PRACTITIONER - DR. NEHA GUPTA (Exact Screenshot 2) */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-white border-b border-[#E8E5DF]">
        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[#B79657] uppercase tracking-[0.25em] text-xs font-bold block">WHO YOU'LL SEE</span>
            <div>
              <h2 className="font-serif text-4xl sm:text-6xl text-[#17242D] font-bold tracking-tight">
                Meet Your Practitioner
              </h2>
              <p className="font-serif italic text-3xl sm:text-4xl text-[#B79657] font-semibold mt-2">
                Dr. Neha Gupta
              </p>
            </div>

            {/* Checkmarks line */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-[#17242D] py-2 border-y border-[#E8E5DF]">
              <span className="flex items-center gap-1.5"><span className="text-[#B79657]">✓</span> Physiotherapist</span>
              <span className="flex items-center gap-1.5"><span className="text-[#B79657]">✓</span> Women's Health Specialist</span>
              <span className="flex items-center gap-1.5"><span className="text-[#B79657]">✓</span> Founder, Tamanya</span>
            </div>

            <div className="space-y-4 text-[#17242D]/80 font-light leading-relaxed text-sm sm:text-base">
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
                className="bg-[#17242D] hover:bg-[#202B31] text-white px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-bold transition-all shadow-md hover:-translate-y-0.5"
              >
                BOOK CONSULTATION WITH DR. NEHA
              </Link>
              <a 
                href="tel:+917007667808" 
                className="border-2 border-[#B79657] text-[#17242D] hover:bg-[#B79657]/10 px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-bold transition-all"
              >
                CALL CLINIC: +91 70076 67808
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="aspect-[3/4] rounded-[28px] overflow-hidden shadow-2xl border-4 border-white relative z-10 group">
              <img src={nehaImg} alt="Dr. Neha Gupta" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#B79657] rounded-[28px] z-0 hidden sm:block"></div>
          </div>

        </div>
      </section>

      {/* 3. SECTION 3: WHY CHOOSE US - CARE BUILT AROUND YOU (Exact Screenshot 3) */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-white border-b border-[#E8E5DF]">
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
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#B79657] rounded-[28px] z-0 hidden sm:block"></div>
          </div>

          {/* Right Why Choose Us Content & 4 Cards */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-[#B79657] uppercase tracking-[0.25em] text-xs font-bold block mb-2">WHY CHOOSE US</span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#17242D] font-bold mb-4">
                Care Built Around You.
              </h2>
              <p className="text-[#17242D]/80 text-sm sm:text-base font-light leading-relaxed">
                Every person's recovery is different. Tamanya combines personalised physiotherapy, specialised women's health expertise, rehabilitation, and patient education to support care that is tailored to individual needs.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="bg-[#F8F9FA] p-6 rounded-2xl border border-[#E8E5DF] space-y-2 hover:border-[#B79657] transition-colors">
                <span className="text-2xl font-serif font-bold text-[#B79657] block">01</span>
                <h3 className="font-serif text-lg font-bold text-[#17242D]">Personalized Care</h3>
                <p className="text-[#17242D]/75 text-xs font-light leading-relaxed">
                  Our approach focuses on your individual concerns, movement, recovery needs, and everyday goals rather than treating every patient the same way.
                </p>
              </div>

              <div className="bg-[#F8F9FA] p-6 rounded-2xl border border-[#E8E5DF] space-y-2 hover:border-[#B79657] transition-colors">
                <span className="text-2xl font-serif font-bold text-[#B79657] block">02</span>
                <h3 className="font-serif text-lg font-bold text-[#17242D]">Specialised Women's Health</h3>
                <p className="text-[#17242D]/75 text-xs font-light leading-relaxed">
                  Tamanya has a specialised focus on women's health and pelvic rehabilitation, including prenatal and postnatal rehabilitation, pelvic floor care, urinary incontinence, and pelvic health management.
                </p>
              </div>

              <div className="bg-[#F8F9FA] p-6 rounded-2xl border border-[#E8E5DF] space-y-2 hover:border-[#B79657] transition-colors">
                <span className="text-2xl font-serif font-bold text-[#B79657] block">03</span>
                <h3 className="font-serif text-lg font-bold text-[#17242D]">Holistic Rehabilitation</h3>
                <p className="text-[#17242D]/75 text-xs font-light leading-relaxed">
                  Our rehabilitation approach focuses on mobility, functional independence, recovery, and quality of life, helping patients better understand their physical health along the way.
                </p>
              </div>

              <div className="bg-[#F8F9FA] p-6 rounded-2xl border border-[#E8E5DF] space-y-2 hover:border-[#B79657] transition-colors">
                <span className="text-2xl font-serif font-bold text-[#B79657] block">04</span>
                <h3 className="font-serif text-lg font-bold text-[#17242D]">Experience & Education</h3>
                <p className="text-[#17242D]/75 text-xs font-light leading-relaxed">
                  Dr. Neha Gupta brings seven years of clinical experience alongside multidisciplinary training in physiotherapy, orthopaedics, women's health, and rehabilitation. Her work also places strong emphasis on patient counselling and healthcare awareness.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Inside Tamanya Gallery & Slider */}
      <InsideTamanya />

      {/* Visual Journey & Milestones */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-white border-b border-[#E8E5DF]">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#B79657] uppercase tracking-[0.25em] text-xs font-bold block mb-4">OUR JOURNEY</span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#17242D] font-bold mb-6">Visual Journey & Milestones</h2>
            <p className="text-[#17242D]/70 text-base font-light">
              Building a specialized center for orthopaedic and pelvic health excellence in Pandeypur, Varanasi.
            </p>
          </div>

          <div className="relative">
            {/* Central Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-[#E8E5DF]"></div>

            <div className="space-y-12">
              {/* Timeline Item 1 */}
              <div className="grid md:grid-cols-2 gap-8 items-center relative">
                <div className="md:text-right pr-0 md:pr-12 space-y-3">
                  <span className="inline-block px-4 py-1 bg-white text-[#B79657] font-serif font-bold text-lg rounded-full border border-[#E8E5DF]">
                    2019
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#17242D]">FOUNDATION OF PRACTICE</h3>
                  <p className="text-[#17242D]/70 text-xs font-light leading-relaxed max-w-md ml-auto">
                    Initiated specialized physiotherapy services focused on targeted orthopaedic care and musculoskeletal rehabilitation in Varanasi.
                  </p>
                </div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#B79657] ring-4 ring-white shadow-md"></div>
                <div className="pl-0 md:pl-12">
                  <div className="bg-white p-6 rounded-2xl border border-[#E8E5DF] max-w-md">
                    <p className="text-xs font-semibold text-[#17242D] mb-1">Clinical Milestone</p>
                    <p className="text-xs text-[#17242D]/70">Standardized patient-first assessment protocols and post-surgical care paths.</p>
                  </div>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="grid md:grid-cols-2 gap-8 items-center relative">
                <div className="order-2 md:order-1 pl-0 md:pl-12 md:text-right space-y-3">
                  <div className="bg-white p-6 rounded-2xl border border-[#E8E5DF] max-w-md ml-auto">
                    <p className="text-xs font-semibold text-[#17242D] mb-1">Women's Health Expansion</p>
                    <p className="text-xs text-[#17242D]/70">Introduced private pelvic floor & antenatal-postnatal therapy modules.</p>
                  </div>
                </div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#B79657] ring-4 ring-white shadow-md"></div>
                <div className="order-1 md:order-2 pl-0 md:pl-12 space-y-3">
                  <span className="inline-block px-4 py-1 bg-white text-[#B79657] font-serif font-bold text-lg rounded-full border border-[#E8E5DF]">
                    WOMEN'S WELLNESS SUITE
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#17242D]">PELVIC HEALTH INTEGRATION</h3>
                  <p className="text-[#17242D]/70 text-xs font-light leading-relaxed max-w-md">
                    Recognized the critical need for dedicated female pelvic care, establishing private consultation and treatment protocols for local patients.
                  </p>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="grid md:grid-cols-2 gap-8 items-center relative">
                <div className="md:text-right pr-0 md:pr-12 space-y-3">
                  <span className="inline-block px-4 py-1 bg-white text-[#B79657] font-serif font-bold text-lg rounded-full border border-[#E8E5DF]">
                    TODAY
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#17242D]">TAMANYA HEALTH CENTER</h3>
                  <p className="text-[#17242D]/70 text-xs font-light leading-relaxed max-w-md ml-auto">
                    A multi-disciplinary private healthcare clinic in Pandeypur delivering advanced physiotherapy, women's pelvic wellness, and aesthetic care.
                  </p>
                </div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#B79657] ring-4 ring-white shadow-md"></div>
                <div className="pl-0 md:pl-12">
                  <div className="bg-white p-6 rounded-2xl border border-[#E8E5DF] max-w-md">
                    <p className="text-xs font-semibold text-[#17242D] mb-1">Ongoing Excellence</p>
                    <p className="text-xs text-[#17242D]/70">Combining modern therapeutic modalities with personalized, compassionate care.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Footer CTA */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-5xl mx-auto rounded-3xl bg-[#17242D] text-white p-10 md:p-16 text-center shadow-2xl border border-[#B79657]/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#B79657]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10 space-y-6">
            <span className="text-[#B79657] uppercase tracking-[0.25em] text-xs font-bold block">START YOUR HEALING JOURNEY</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">Schedule Your Visit with Dr. Neha Gupta</h2>
            <p className="text-white/80 font-light text-base sm:text-lg max-w-2xl mx-auto">
              Visit our clinic in Pandeypur, Varanasi for an in-depth clinical assessment and tailored rehabilitation program.
            </p>
            <div className="pt-4">
              <Link 
                to="/book-appointment" 
                className="inline-block bg-[#B79657] hover:bg-[#a3844a] text-white px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                BOOK AN APPOINTMENT NOW
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}


