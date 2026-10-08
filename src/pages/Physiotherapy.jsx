import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

export default function Physiotherapy() {
  const [openFaq, setOpenFaq] = useState(null);

  const orthopaedic = [
    { title: "Back & Lower Back Pain", sub: "Disc Bulge, Sciatica, lumbar stiffness, and postural dysfunction." },
    { title: "Neck Pain & Cervical Spondylosis", sub: "Stiffness, Nerve Impingement, trapezius spasm & desk-posture neck pain." },
    { title: "Joint Pain & Arthritis", sub: "Knee osteo-arthritis, shoulder impingement, frozen shoulder, and hip discomfort." },
    { title: "Ligament & Tendon Injuries", sub: "ACL/MCL sprains, meniscus tears, Achilles tendinitis, and ankle instability." },
    { title: "Pre & Post Surgery Rehabilitation", sub: "Total Knee Replacement (TKR), Total Hip Replacement (THR), and spinal surgeries." },
    { title: "Sports Injuries & Recovery", sub: "Rotator cuff injuries, tennis elbow, hamstring strains, and athletic conditioning." },
  ];

  const neurological = [
    "Stroke Rehabilitation",
    "Parkinson’s Disease Management",
    "Sciatica & Nerve Compression",
    "Bell’s Palsy & Facial Nerve Therapy",
    "Spinal Cord Injury Support",
    "Balance & Gait Retraining"
  ];

  const advancedTherapies = [
    "Ultrasonic Therapy",
    "Laser Therapy",
    "IFT / TENS Modalities",
    "Shortwave Diathermy (SWD)",
    "Digital Cervical & Lumbar Traction",
    "IASTM (Soft Tissue Mobilization)",
    "Pulsed Electromagnetic Therapy (PEMF)",
    "Myofascial Release Therapy",
    "Therapeutic Steam Therapy",
    "Cupping Therapy (Dry & Wet)",
    "Dry Needling Therapy",
    "Kinesiology Taping",
    "Orthopaedic Manual Therapy"
  ];

  const faqs = [
    {
      q: "What conditions are treated with manual physical therapy?",
      a: "Manual physical therapy is effective for chronic back pain, cervical spondylosis, frozen shoulder, sciatica, joint stiffness, and post-surgical scar tissue restrictions."
    },
    {
      q: "How many sessions of physiotherapy will I need?",
      a: "The number of sessions depends on your specific diagnosis and clinical assessment by Dr. Neha Gupta. Many acute conditions show significant improvement within 5-8 sessions."
    },
    {
      q: "Are electrotherapy modalities safe?",
      a: "Yes. All modern modalities used at Tamanya Health (such as Ultrasonic, IFT, Laser, and PEMF) are evidence-based, FDA-compliant, non-invasive, and administered safely by qualified professionals."
    }
  ];

  return (
    <div className="bg-[#F7F4EE] text-[#17242D] min-h-screen font-sans">
      
      {/* Full Image Hero with Breadcrumbs */}
      <PageHero 
        title="Physiotherapy Services"
        category="CLINICAL EXCELLENCE"
        subtitle="Evidence-informed physiotherapy and rehabilitation tailored precisely to your movement, recovery, and functional goals in Varanasi."
        image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2070&q=80"
        pageName="PHYSIOTHERAPY"
      />

      {/* Orthopaedic Section */}
      <section className="bg-[#F7F4EE] py-24 lg:py-32 px-6 lg:px-12 border-b border-[#E8E5DF]">
        <div className="max-w-[1600px] mx-auto">
          <div className="max-w-3xl mb-20 text-center mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-6 h-[2px] bg-[#B79657] block"></span>
              <span className="text-[#B79657] uppercase tracking-[0.25em] text-[11px] font-bold">ORTHOPAEDIC CARE</span>
              <span className="w-6 h-[2px] bg-[#B79657] block"></span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-[#17242D] font-bold mb-6">Orthopaedic Rehabilitation</h2>
            <p className="text-[#17242D]/75 text-base sm:text-lg font-light leading-relaxed">
              Targeted clinical protocols for musculoskeletal conditions, focusing on pain relief, joint mobility restoration, and functional movement strength.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {orthopaedic.map((item, i) => (
              <Link 
                key={i} 
                to="/book-appointment"
                className="p-8 sm:p-10 border border-[#E8E5DF] rounded-[20px] bg-white hover:border-[#B79657] shadow-[0_15px_35px_rgba(23,36,45,0.05)] hover:shadow-[0_25px_50px_rgba(183,150,87,0.18)] transform hover:-translate-y-2 transition-all duration-500 group flex flex-col justify-between block border-t-2 border-t-[#B79657]"
              >
                <div>
                  <span className="w-12 h-12 rounded-[14px] bg-[#17242D] text-[#B79657] flex items-center justify-center font-serif font-bold text-base mb-6 group-hover:bg-[#B79657] group-hover:text-[#17242D] transition-colors shadow-md">
                    0{i+1}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#17242D] mb-3 group-hover:text-[#B79657] transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[#17242D]/75 text-sm font-light leading-relaxed mb-6">
                    {item.sub}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-[#E8E5DF] flex items-center justify-between text-[11px] uppercase tracking-widest font-bold text-[#17242D] group-hover:text-[#B79657] transition-colors">
                  <span>BOOK EVALUATION</span>
                  <span className="text-[#B79657] group-hover:translate-x-1.5 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Neurological Section */}
      <section className="bg-[#17242D] text-white py-24 lg:py-32 px-6 lg:px-12 relative overflow-hidden border-b border-[#B79657]/20">
        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5 relative aspect-[4/5] w-full rounded-[24px] overflow-hidden shadow-2xl border border-white/10">
            <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=2000&q=80" alt="Neurological Rehabilitation" className="w-full h-full object-cover" />
          </div>
          
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[2px] bg-[#B79657] block"></span>
              <span className="text-[#B79657] uppercase tracking-[0.25em] text-[11px] font-bold">SPECIALISED NEURO CARE</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-8 text-white">Neurological Rehabilitation</h2>
            <p className="text-[#F7F4EE]/80 text-base sm:text-lg font-light leading-relaxed mb-10 max-w-xl">
              Evidence-informed neurological physiotherapy designed to improve motor control, balance, posture, and functional independence.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {neurological.map((item, i) => (
                <div key={i} className="flex items-center gap-3.5 bg-white/5 border border-white/15 p-4 rounded-xl">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#B79657] shrink-0"></span>
                  <span className="text-sm font-semibold tracking-wide text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Advanced Modalities Directory */}
      <section className="bg-[#F7F4EE] py-24 lg:py-32 px-6 lg:px-12 border-t border-[#E8E5DF]">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-6 h-[2px] bg-[#B79657] block"></span>
              <span className="text-[#B79657] uppercase tracking-[0.25em] text-[11px] font-bold">MODERN MODALITIES</span>
              <span className="w-6 h-[2px] bg-[#B79657] block"></span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-[#17242D] font-bold mb-6">Electrotherapy & Advanced Modalities</h2>
            <p className="text-[#17242D]/75 text-base sm:text-lg font-light leading-relaxed">
              We utilize a comprehensive suite of advanced clinical equipment to accelerate soft tissue repair and reduce inflammation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advancedTherapies.map((therapy, i) => (
              <Link key={i} to="/book-appointment" className="bg-white p-6 rounded-[16px] border border-[#E8E5DF] shadow-sm flex items-center justify-between hover:border-[#B79657] hover:shadow-md transition-all group block">
                <div className="flex items-center gap-4">
                  <span className="text-[#B79657] font-serif font-bold text-sm w-8 font-mono">0{i+1 < 10 ? `0${i+1}` : i+1}</span>
                  <span className="text-[#17242D] font-bold text-sm group-hover:text-[#B79657] transition-colors">{therapy}</span>
                </div>
                <span className="text-[#B79657] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Tamanya Physiotherapy */}
      <section className="bg-white py-24 lg:py-32 px-6 lg:px-12 border-t border-[#E8E5DF]">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#B79657] uppercase tracking-[0.25em] text-[11px] font-bold block mb-4">CLINICAL ADVANTAGE</span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#17242D] font-bold mb-6">Why Tamanya Physiotherapy</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Dr. Neha Gupta Leadership", desc: "Consultations and treatment plans led directly by M.P.T (Ortho) specialist with 7+ years practice." },
              { num: "02", title: "Targeted Mechanical Repair", desc: "Focusing on postural alignment, joint mechanics, and core stabilization rather than short-term relief." },
              { num: "03", title: "Modern Private Suite", desc: "Clean, comfortable clinical setting in Pandeypur, Varanasi equipped with advanced therapeutic modalities." }
            ].map((item, i) => (
              <div key={i} className="bg-[#F7F4EE] p-8 rounded-[20px] border border-[#E8E5DF] shadow-sm hover:shadow-md transition-all">
                <span className="text-3xl font-serif font-bold text-[#B79657] block mb-3">{item.num}</span>
                <h3 className="font-serif text-xl font-bold text-[#17242D] mb-3">{item.title}</h3>
                <p className="text-[#17242D]/75 text-xs font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#F7F4EE] border-t border-[#E8E5DF]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#B79657] uppercase tracking-[0.25em] text-[11px] font-bold block mb-4">PHYSIOTHERAPY FAQ</span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#17242D] font-bold">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-[16px] border border-[#E8E5DF] overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 text-left flex justify-between items-center focus:outline-none group"
                >
                  <span className="font-serif text-lg text-[#17242D] font-bold flex items-center gap-4 group-hover:text-[#B79657] transition-colors">
                    <span className="text-[#B79657] text-sm font-mono">0{i + 1}</span>
                    {faq.q}
                  </span>
                  <span className={`text-[#B79657] text-xl font-bold transform transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 pt-2 text-[#17242D]/75 text-sm font-light leading-relaxed border-t border-[#E8E5DF]/60">
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

