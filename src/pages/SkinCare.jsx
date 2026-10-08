import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

export default function SkinCare() {
  const [openFaq, setOpenFaq] = useState(null);

  const treatments = [
    { title: "Chemical Peels", desc: "Advanced dermatological exfoliation to improve skin texture, clear clogged pores, and restore natural skin radiance.", cat: "REJUVENATION" },
    { title: "Microneedling", desc: "Collagen induction therapy for acne scar reduction, fine line refinement, and skin texture restoration.", cat: "COLLAGEN THERAPY" },
    { title: "Acne & Scar Management", desc: "Targeted clinical protocols addressing active acne lesions, inflammation, and post-acne hyperpigmentation.", cat: "CLINICAL DERMA" },
    { title: "Anti-Aging Therapies", desc: "Non-invasive clinical procedures designed to support skin elasticity, hydration, and youthful resilience.", cat: "ANTI-AGING" },
    { title: "Pigmentation Care", desc: "Specialised clinical protocols targeting melasma, sun spots, and uneven skin tone.", cat: "TONE REPAIR" }
  ];

  const faqs = [
    {
      q: "Are chemical peels safe for sensitive skin types?",
      a: "Yes. Every chemical peel at Tamanya Health is customized in concentration and formulation following a detailed skin analysis by our team to match your skin sensitivity."
    },
    {
      q: "What is the downtime after a microneedling treatment?",
      a: "Microneedling typically involves mild redness for 24-48 hours, similar to a light sun glow, after which full collagen regeneration continues over subsequent weeks."
    }
  ];

  return (
    <div className="bg-[#F4EFE6] text-[#252822] min-h-screen font-sans">
      
      {/* Full Image Page Hero */}
      <PageHero 
        title="Aesthetic Skin Care"
        category="INTEGRATIVE DERMATOLOGY"
        subtitle="Clinical skin treatments designed to rejuvenate, restore, and maintain your skin's natural health and radiance in Varanasi."
        image="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=2000&q=80"
        pageName="SKIN CARE"
        ctaText="BOOK CONSULTATION"
        ctaLink="/book-appointment"
        floatBadgeText="SKIN CARE SUITE"
        floatBadgeValue="Rejuvenation & Peels"
      />

      {/* Intro Section */}
      <section className="py-20 lg:py-28 px-6 lg:px-12 bg-[#FAF7F1] border-b border-[#D8D0C3]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-6 h-[2px] bg-[#5F6B45] block"></span>
            <span className="text-[#5F6B45] uppercase tracking-[0.25em] text-[11px] font-bold">CLINICAL DERMATOLOGY</span>
            <span className="w-6 h-[2px] bg-[#5F6B45] block"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#293225] font-bold mb-8">Integrative Skin Care & Aesthetics</h2>
          <p className="text-[#252822]/80 text-base sm:text-lg font-light leading-relaxed">
            Every skin protocol is tailored following an initial assessment at our clinic in Pandeypur, Varanasi, focusing on skin barrier health, acne control, and natural rejuvenation.
          </p>
        </div>
      </section>

      {/* Services Section: Luxury 3D Cards */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#F4EFE6] border-b border-[#D8D0C3]">
        <div className="max-w-[1600px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#5F6B45] uppercase tracking-[0.25em] text-[11px] font-bold block mb-4">CLINICAL PROTOCOLS</span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#293225] font-bold mb-6">Integrative Skin Therapies</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((item, i) => (
              <Link 
                key={i} 
                to="/book-appointment"
                className="bg-[#FAF7F1] p-8 sm:p-10 rounded-[20px] border border-[#D8D0C3] hover:border-[#5F6B45] shadow-[0_15px_35px_rgba(41,50,37,0.05)] hover:shadow-[0_25px_50px_rgba(95,107,69,0.18)] transform hover:-translate-y-2 transition-all duration-500 group flex flex-col justify-between block relative border-t-2 border-t-[#5F6B45]"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="w-12 h-12 rounded-[14px] bg-[#3F4A32] text-[#FAF7F1] flex items-center justify-center font-serif font-bold text-base shadow-md group-hover:bg-[#5F6B45] group-hover:text-white transition-colors">
                      0{i+1}
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#5F6B45] bg-[#F4EFE6] px-3 py-1 rounded-full border border-[#D8D0C3]">
                      {item.cat}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#293225] mb-3 group-hover:text-[#5F6B45] transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[#252822]/75 text-sm font-light leading-relaxed mb-8">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#D8D0C3] flex items-center justify-between text-[11px] uppercase tracking-widest font-bold text-[#293225] group-hover:text-[#5F6B45] transition-colors">
                  <span>BOOK CONSULTATION</span>
                  <span className="text-[#B89A5A] group-hover:translate-x-1.5 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* Why Choose Tamanya Skin Care */}
      <section className="bg-[#FAF7F1] py-24 lg:py-32 px-6 lg:px-12 border-t border-[#D8D0C3]">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#5F6B45] uppercase tracking-[0.25em] text-[11px] font-bold block mb-4">OUR DERMA PROMISE</span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#293225] font-bold mb-6">Why Choose Tamanya Skin Care</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Customized Dermaceuticals", desc: "Every peel and skin protocol is formulated according to your individual skin sensitivity and goals." },
              { num: "02", title: "Non-Surgical Focus", desc: "Gentle, non-invasive therapies designed to stimulate natural collagen without harsh recovery periods." },
              { num: "03", title: "Hygienic Clinical Environment", desc: "Strict sterilization and medical-grade instruments used for all procedures in Pandeypur, Varanasi." }
            ].map((item, i) => (
              <div key={i} className="bg-[#F4EFE6] p-8 rounded-[20px] border border-[#D8D0C3] shadow-sm hover:shadow-md transition-all">
                <span className="text-3xl font-serif font-bold text-[#5F6B45] block mb-3">{item.num}</span>
                <h3 className="font-serif text-xl font-bold text-[#293225] mb-3">{item.title}</h3>
                <p className="text-[#252822]/75 text-xs font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES NAVIGATION */}
      <section className="py-20 px-6 lg:px-12 bg-[#F4EFE6] border-t border-[#D8D0C3]">
        <div className="max-w-[1600px] mx-auto text-center">
          <span className="text-[#5F6B45] uppercase tracking-[0.25em] text-xs font-bold block mb-3">EXPLORE MORE CLINICAL DIVISIONS</span>
          <h2 className="font-serif text-3xl font-bold text-[#293225] mb-12">You May Also Be Interested In</h2>

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

      {/* FAQ Accordion */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#FAF7F1] border-t border-[#D8D0C3]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#5F6B45] uppercase tracking-[0.25em] text-[11px] font-bold block mb-4">SKIN CARE FAQ</span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#293225] font-bold">Frequently Asked Questions</h2>
          </div>

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
                {openFaq === i && (
                  <div className="px-6 pb-6 pt-2 text-[#252822]/75 text-sm font-light leading-relaxed border-t border-[#D8D0C3]/60 bg-[#FAF7F1]">
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
