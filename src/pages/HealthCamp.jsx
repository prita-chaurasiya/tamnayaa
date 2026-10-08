import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import campImg from '../assets/camp.webp';

export default function HealthCamp() {
  return (
    <div className="bg-[#FFF9F6] text-[#351D2B] min-h-screen font-sans">
      
      {/* Full Image Page Hero */}
      <PageHero 
        title="Community Health Camp"
        category="PUBLIC HEALTH & OUTREACH INITIATIVE"
        subtitle="Accessible posture screenings, spine health evaluations, and ergonomic awareness workshops across Varanasi."
        image="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=2000&q=80"
        pageName="COMMUNITY"
      />

      {/* Main Feature & Premium Event Card */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-white border-b border-[#F6DCE4]">
        <div className="max-w-[1500px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Real Camp Photo camp.webp */}
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/3] rounded-[28px] overflow-hidden shadow-2xl border-4 border-[#7D294B] group">
              <img 
                src={campImg} 
                alt="Tamanya Physio & Health Clinic Community Camp" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </div>

          {/* Right Column: Event Info & Card */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="bg-[#F6DCE4] text-[#7D294B] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase inline-block mb-3 border border-[#E8A6B8]/40">
                COMMUNITY INITIATIVE
              </span>
              <p className="text-[#C94F78] uppercase tracking-[0.2em] text-xs font-bold mb-2">JOIN OUR UPCOMING HEALTH CAMP</p>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#351D2B] font-bold leading-tight">
                Your Health Deserves Attention.
              </h2>
            </div>

            <p className="text-[#351D2B]/80 font-light text-base sm:text-lg leading-relaxed">
              Take the opportunity to learn more about your health, discuss your physical concerns, and receive professional clinical screenings from our dedicated team.
            </p>

            {/* Deep Plum & Berry Styled Box */}
            <div className="bg-[#351D2B] text-white border-2 border-[#C94F78]/40 p-6 sm:p-8 rounded-[24px] space-y-6 shadow-2xl relative">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#E8A6B8]">
                Community Mobility & Spine Screening Camp
              </h3>

              <div className="grid sm:grid-cols-2 gap-6 text-xs text-white/90">
                <div className="flex items-start gap-3">
                  <span className="text-[#C94F78] text-lg">📅</span>
                  <div>
                    <p className="font-bold text-white text-sm mb-0.5">Date</p>
                    <p className="text-[#FFF9F6]/80 font-light">Upcoming Session / Contact Clinic</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-[#C94F78] text-lg">🕒</span>
                  <div>
                    <p className="font-bold text-white text-sm mb-0.5">Time</p>
                    <p className="text-[#FFF9F6]/80 font-light">09:00 AM – 02:00 PM</p>
                  </div>
                </div>

                <div className="sm:col-span-2 flex items-start gap-3">
                  <span className="text-[#C94F78] text-lg">📍</span>
                  <div>
                    <p className="font-bold text-white text-sm mb-0.5">Location</p>
                    <p className="text-[#FFF9F6]/80 font-light">Tamanya Clinic Campus & Community Center, Pandeypur, Varanasi</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link 
                to="/book-appointment" 
                className="bg-[#C94F78] hover:bg-[#9E3D63] text-white px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-bold transition-all shadow-lg hover:scale-105"
              >
                Book an Appointment
              </Link>
              <a 
                href="tel:+917007667808" 
                className="border-2 border-[#7D294B] text-[#7D294B] hover:bg-[#7D294B] hover:text-white px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-bold transition-all"
              >
                Call for Details
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* Camp Services & Features */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#FFF9F6]">
        <div className="max-w-[1500px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#C94F78] uppercase tracking-[0.25em] text-xs font-bold block mb-4">WHAT WE OFFER</span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#351D2B] font-bold mb-6">Health Camp Services</h2>
            <p className="text-[#351D2B]/80 text-base font-light">
              Comprehensive baseline screenings provided free of charge during our public wellness days.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Postural & Alignment Checks",
                desc: "Screening for forward head posture, scoliosis, rounded shoulders, and spinal curvature abnormalities."
              },
              {
                num: "02",
                title: "Spine & Joint Flexibility Assessment",
                desc: "Checking range of motion across lumbar, cervical, and peripheral joints for early signs of stiffness."
              },
              {
                num: "03",
                title: "Ergonomic & Workplace Guidance",
                desc: "Practical posture correction tips for desk workers, home managers, and senior citizens."
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white p-8 sm:p-10 rounded-[24px] border-2 border-[#F6DCE4] hover:border-[#C94F78] shadow-[0_10px_30px_rgba(53,29,43,0.04)] hover:shadow-[0_25px_50px_rgba(201,79,120,0.18)] transform hover:-translate-y-2 hover:bg-[#FFF9F6] transition-all duration-500 group relative overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-serif font-bold text-[#C94F78] group-hover:scale-110 transition-transform">{item.num}</span>
                    <span className="w-10 h-[2px] bg-[#C94F78]/40 group-hover:w-16 group-hover:bg-[#C94F78] transition-all"></span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#351D2B] font-bold mb-3 group-hover:text-[#9E3D63] transition-colors">{item.title}</h3>
                  <p className="text-[#351D2B]/75 text-xs sm:text-sm font-light leading-relaxed mb-8">{item.desc}</p>
                </div>
                <div className="pt-4 border-t border-[#F6DCE4] flex items-center justify-between text-[11px] uppercase tracking-widest font-bold text-[#9E3D63] group-hover:text-[#C94F78] transition-colors">
                  <span>FREE SCREENING</span>
                  <span className="group-hover:translate-x-1.5 transition-transform text-[#C94F78]">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visually Rich Community Gallery */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-white border-t border-[#F6DCE4]">
        <div className="max-w-[1500px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#C94F78] uppercase tracking-[0.25em] text-xs font-bold block mb-4">COMMUNITY IMPACT</span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#351D2B] font-bold mb-6">Gallery of Care & Outreach</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#E8E5DF] group">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80" 
                alt="Clinic Community" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#E8E5DF] group">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173ff9e9e9c?auto=format&fit=crop&w=800&q=80" 
                alt="Spine Screening" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#E8E5DF] group">
              <img 
                src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80" 
                alt="Health Consultation" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Footer CTA */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-5xl mx-auto rounded-3xl bg-[#17242D] text-white p-10 md:p-16 text-center shadow-2xl border border-[#B79657]/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#B79657]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10 space-y-6">
            <span className="text-[#B79657] uppercase tracking-[0.25em] text-xs font-bold block">ORGANIZATION OUTREACH</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">Host a Health Camp at Your Facility</h2>
            <p className="text-white/80 font-light text-base sm:text-lg max-w-2xl mx-auto">
              Partner with Tamanya Health to organize posture and physical health screening workshops for your institution, office, or residential community.
            </p>
            <div className="pt-4">
              <Link 
                to="/contact" 
                className="inline-block bg-[#B79657] hover:bg-[#a3844a] text-white px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                GET IN TOUCH WITH OUR TEAM
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}


