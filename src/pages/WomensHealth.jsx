import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

export default function WomensHealth() {
  const miniCards = [
    { title: "PCOD / PCOS", desc: "Holistic exercise, postural loading, and lifestyle guidance to support hormonal and metabolic balance." },
    { title: "MENSTRUAL PAIN", desc: "Targeted pelvic physical therapy and circulatory modalities for relief from dysmenorrhea." },
    { title: "ANTENATAL REHAB", desc: "Trimester-wise physical preparation, pelvic support, and back pain relief during pregnancy." },
    { title: "POSTNATAL REHAB", desc: "Safe, structured recovery programs to restore pelvic floor strength and core stability post-delivery." },
    { title: "URINE LEAKAGE", desc: "Targeted pelvic floor muscle re-education to eliminate stress and urge incontinence." },
    { title: "DIASTASIS RECTI", desc: "Specialised abdominal separation repair using evidence-based core rehabilitation." },
    { title: "PELVIC ORGAN PROLAPSE", desc: "Non-surgical pelvic floor strengthening and intra-abdominal pressure management." },
    { title: "DYSMENORRHEA", desc: "Therapeutic manual techniques to relieve severe menstrual cramping and pelvic congestion." },
    { title: "VAGINISMUS", desc: "Discrete, compassionate pelvic muscle relaxation and desensitization therapy." },
    { title: "CONSTIPATION & BOWEL HEALTH", desc: "Pelvic floor dyssynergia treatment to support natural gut and bowel function." },
    { title: "PELVIC PAIN", desc: "Discrete manual therapy and muscle relaxation techniques for chronic pelvic pain." },
    { title: "AFTER C-SECTION BACK PAIN", desc: "Post-surgical scar tissue release and lumbo-pelvic stabilization for post-caesarean recovery." }
  ];

  return (
    <div className="bg-white text-[#17242D] min-h-screen font-sans">
      
      {/* Full Image Page Hero */}
      <PageHero 
        title="Female Pelvic Floor Rehabilitation"
        category="SPECIALISED FEMALE CARE"
        subtitle="Compassionate, discrete, and evidence-informed care for pelvic floor rehabilitation, maternity, and female musculoskeletal wellness in Varanasi."
        image="https://tamanyahealth.com/wp-content/uploads/2024/09/image3.jpeg"
        pageName="WOMEN'S HEALTH"
      />

      {/* Mini Cards Grid: Pure White High-Contrast Premium Cards with Clay & Champagne Accents */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-white border-b border-[#E8E5DF]">
        <div className="max-w-[1600px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-6 h-[2px] bg-[#A97868] block"></span>
              <span className="text-[#A97868] uppercase tracking-[0.25em] text-[11px] font-bold">CLINICAL WOMEN'S SUITE</span>
              <span className="w-6 h-[2px] bg-[#A97868] block"></span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#17242D] font-bold mb-6">Specialised Female Pelvic Health</h2>
            <p className="text-[#17242D]/75 text-base sm:text-lg font-light leading-relaxed">
              Discreet and supportive care provided by Dr. Neha Gupta in a safe, confidential clinical environment across key female health conditions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {miniCards.map((card, i) => (
              <Link 
                key={i} 
                to="/book-appointment"
                className="bg-white p-8 sm:p-10 rounded-[20px] border border-[#E8E5DF] hover:border-[#A97868] shadow-[0_15px_35px_rgba(23,36,45,0.05)] hover:shadow-[0_25px_50px_rgba(169,120,104,0.18)] transform hover:-translate-y-2 transition-all duration-500 group flex flex-col justify-between block relative border-t-2 border-t-[#A97868]"
              >
                <div>
                  <div className="w-12 h-12 rounded-[14px] bg-[#17242D] text-[#B79657] flex items-center justify-center font-serif font-bold text-base mb-6 shadow-md group-hover:bg-[#A97868] group-hover:text-white transition-colors">
                    {i + 1 < 10 ? `0${i + 1}` : i + 1}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#17242D] mb-3 group-hover:text-[#A97868] transition-colors leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-[#17242D]/75 text-sm font-light leading-relaxed mb-8">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8E5DF] flex items-center justify-between text-[11px] uppercase tracking-widest font-bold text-[#17242D] group-hover:text-[#A97868] transition-colors">
                  <span>BOOK CONSULTATION</span>
                  <span className="group-hover:translate-x-1.5 transition-transform text-[#A97868]">→</span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* Deep Information Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/3] rounded-[24px] overflow-hidden shadow-2xl border border-[#E8E5DF]">
              <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=2000&q=80" alt="Women's Pelvic Rehabilitation" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[2px] bg-[#B79657] block"></span>
              <span className="text-[#B79657] uppercase tracking-[0.25em] text-[11px] font-bold">CLINICAL EXCELLENCE</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#17242D] font-bold mb-6">Discrete & Compassionate Care</h2>
            <p className="text-[#17242D]/80 text-base sm:text-lg font-light leading-relaxed mb-8">
              Women's health issues like incontinence, pelvic pain, or diastasis recti are frequently underdiagnosed. At Tamanya Health in Pandeypur, Varanasi, Dr. Neha Gupta offers specialized evaluation to help you recover comfortably and with complete dignity.
            </p>
            <Link 
              to="/book-appointment" 
              className="inline-block bg-[#B79657] hover:bg-[#a38343] text-[#17242D] px-9 py-4 rounded-[16px] text-xs uppercase tracking-widest font-bold transition-all duration-300 shadow-champagne-glow hover:-translate-y-0.5"
            >
              BOOK PRIVATE CONSULTATION
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}

