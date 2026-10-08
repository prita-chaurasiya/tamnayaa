import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import cliImg from '../assets/cli.jpeg';

export default function Contact() {
  return (
    <div className="bg-[#FFF9F6] text-[#351D2B] min-h-screen font-sans">
      
      {/* Full Image Page Hero */}
      <PageHero 
        title="Contact Us"
        category="DIRECT CLINICAL INQUIRIES & VISIT"
        subtitle="Our clinical team in Pandeypur, Varanasi is ready to assist you with consultation inquiries and appointment bookings."
        image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2070&q=80"
        pageName="CONTACT US"
      />

      {/* Premium Split Layout Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-white border-b border-[#F6DCE4]">
        <div className="max-w-[1500px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Contact Information List */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-[#C94F78] uppercase tracking-[0.25em] text-xs font-bold block mb-3">CONNECT WITH US</span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#351D2B] font-bold leading-tight mb-4">
                Let's Talk About Your Health.
              </h2>
              <p className="text-[#351D2B]/80 font-light text-base sm:text-lg leading-relaxed">
                Reach out today. Our team is here to answer your questions and help you choose the right care pathway.
              </p>
            </div>
            
            <div className="space-y-6 pt-2">
              
              {/* Phone Call */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#FFF9F6] border border-[#F6DCE4] hover:border-[#C94F78] transition-all shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#E8A6B8]/40 flex items-center justify-center text-xl shrink-0 text-[#9E3D63]">
                  📞
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-[#351D2B]">Phone Call</h4>
                  <a href="tel:+917007667808" className="text-[#C94F78] font-bold hover:underline text-sm block">
                    +91 70076 67808
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#FFF9F6] border border-[#F6DCE4] hover:border-[#C94F78] transition-all shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#E8A6B8]/40 flex items-center justify-center text-xl shrink-0 text-[#25D366]">
                  💬
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-[#351D2B]">WhatsApp</h4>
                  <a href="https://wa.me/917007667808" target="_blank" rel="noopener noreferrer" className="text-[#C94F78] font-bold hover:underline text-sm block">
                    +91 70076 67808
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#FFF9F6] border border-[#F6DCE4] hover:border-[#C94F78] transition-all shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#E8A6B8]/40 flex items-center justify-center text-xl shrink-0 text-[#9E3D63]">
                  🗺️
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-[#351D2B]">Address</h4>
                  <a 
                    href="https://maps.google.com/?q=Tamanya+Physio+Pandeypur+Varanasi" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#351D2B]/80 hover:text-[#C94F78] font-light text-xs sm:text-sm leading-relaxed block"
                  >
                    SA 1/177 T. N Nai Basti, Road, beside of Khadim, near Murari Jwellers, Pandeypur, Paharia, Varanasi, Uttar Pradesh, 221002
                  </a>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#FFF9F6] border border-[#F6DCE4] hover:border-[#C94F78] transition-all shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#E8A6B8]/40 flex items-center justify-center text-xl shrink-0 text-[#9E3D63]">
                  ⏰
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-[#351D2B]">Opening Hours</h4>
                  <p className="text-[#351D2B]/80 font-light text-xs sm:text-sm">Mon – Sat: 08:00 AM – 08:00 PM</p>
                  <p className="text-[#351D2B]/80 font-light text-xs sm:text-sm">Sun: 09:00 AM – 02:00 PM</p>
                </div>
              </div>

              {/* Email Enquiries */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#FFF9F6] border border-[#F6DCE4] hover:border-[#C94F78] transition-all shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#E8A6B8]/40 flex items-center justify-center text-xl shrink-0 text-[#9E3D63]">
                  ✉️
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-[#351D2B]">Email Enquiries</h4>
                  <a href="mailto:dr.neha25btr@gmail.com" className="text-[#351D2B]/80 hover:text-[#C94F78] font-medium text-xs sm:text-sm block break-all">
                    dr.neha25btr@gmail.com
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: Interactive Form */}
          <div className="lg:col-span-6 bg-[#F6DCE4]/40 p-8 sm:p-10 rounded-[28px] border-2 border-[#E8A6B8]/40 shadow-2xl relative">
            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Thank you! Your callback request has been received. Our team will contact you shortly."); }}>
              
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-[#351D2B] mb-1.5">Full Name *</label>
                  <input 
                    type="text" 
                    required
                    className="w-full p-3.5 rounded-xl border border-[#F6DCE4] bg-white focus:outline-none focus:border-[#C94F78] text-sm text-[#351D2B] transition-colors" 
                    placeholder="Ajay Rao" 
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-[#351D2B] mb-1.5">Phone Number *</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full p-3.5 rounded-xl border border-[#F6DCE4] bg-white focus:outline-none focus:border-[#C94F78] text-sm text-[#351D2B] transition-colors" 
                    placeholder="+91 9596869859" 
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-[#351D2B] mb-1.5">Email Address (Optional)</label>
                  <input 
                    type="email" 
                    className="w-full p-3.5 rounded-xl border border-[#F6DCE4] bg-white focus:outline-none focus:border-[#C94F78] text-sm text-[#351D2B] transition-colors" 
                    placeholder="name@domain.com" 
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-[#351D2B] mb-1.5">What can we help you with?</label>
                  <select className="w-full p-3.5 rounded-xl border border-[#F6DCE4] bg-white focus:outline-none focus:border-[#C94F78] text-sm text-[#351D2B] transition-colors">
                    <option value="">Select Service</option>
                    <option value="physio">Physiotherapy Services</option>
                    <option value="womens-health">Female Pelvic Rehabilitation</option>
                    <option value="skin-care">Skin Care & Aesthetics</option>
                    <option value="slimming">Slimming & Body Toning</option>
                    <option value="general">General Health Consultation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-[#351D2B] mb-1.5">Preferred Date</label>
                <input 
                  type="date" 
                  className="w-full p-3.5 rounded-xl border border-[#F6DCE4] bg-white focus:outline-none focus:border-[#C94F78] text-sm text-[#351D2B] transition-colors" 
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-[#351D2B] mb-1.5">Describe Your Concern or Message</label>
                <textarea 
                  rows="4" 
                  className="w-full p-3.5 rounded-xl border border-[#F6DCE4] bg-white focus:outline-none focus:border-[#C94F78] resize-none text-sm text-[#351D2B] transition-colors" 
                  placeholder="Describe your symptoms or questions..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#7D294B] hover:bg-[#9E3D63] text-white py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all shadow-xl hover:shadow-2xl hover:scale-[1.01]"
              >
                Request A Callback
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* Pre-Footer CTA */}
      <section className="bg-gradient-to-r from-[#351D2B] via-[#7D294B] to-[#351D2B] text-white py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#C94F78]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <span className="text-[#E8A6B8] uppercase tracking-[0.25em] text-xs font-bold block">ONLINE CONSULTATION BOOKING</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">Schedule Your Visit Online Today</h2>
          <p className="text-[#FFF9F6]/80 font-light text-base sm:text-lg max-w-xl mx-auto">
            Select your preferred treatment program and consultation slot in Pandeypur, Varanasi.
          </p>
          <div className="pt-4">
            <Link 
              to="/book-appointment" 
              className="inline-block bg-[#C94F78] hover:bg-[#9E3D63] text-white px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all shadow-xl hover:scale-105"
            >
              BOOK AN APPOINTMENT NOW
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}


