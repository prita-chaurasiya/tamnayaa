import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import { PageTransition, FadeIn, TextReveal, StaggerContainer, StaggerItem, ImageReveal } from '../components/MotionWrappers';
import cliImg from '../assets/cli.jpeg';

export default function Contact() {
  return (
    <PageTransition className="bg-[#F4EFE6] text-[#252822] min-h-screen font-sans">
      
      {/* Full Image Page Hero */}
      <PageHero 
        title="Contact Us"
        category="DIRECT CLINICAL INQUIRIES & VISIT"
        subtitle="Our clinical team in Pandeypur, Varanasi is ready to assist you with consultation inquiries and appointment bookings."
        image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2070&q=80"
        pageName="CONTACT US"
      />

      {/* Premium Split Layout Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#FAF7F1] border-b border-[#D8D0C3]">
        <div className="max-w-[1500px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Contact Information List */}
          <FadeIn className="lg:col-span-6 space-y-8" direction="left">
            <div>
              <span className="text-[#5F6B45] uppercase tracking-[0.25em] text-xs font-bold block mb-3">CONNECT WITH US</span>
              <TextReveal className="font-serif text-3xl sm:text-5xl text-[#293225] font-bold leading-tight mb-4">
                Let's Talk About Your Health.
              </TextReveal>
              <p className="text-[#252822]/80 font-light text-base sm:text-lg leading-relaxed">
                Reach out today. Our team is here to answer your questions and help you choose the right care pathway.
              </p>
            </div>
            
            <StaggerContainer className="space-y-6 pt-2" staggerDelay={0.1}>
              
              {/* Phone Call */}
              <StaggerItem>
                <motion.div 
                  whileHover={{ x: 6, transition: { duration: 0.3 } }}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-[#F4EFE6] border border-[#D8D0C3] hover:border-[#5F6B45] transition-colors shadow-sm"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF7F1] border border-[#5F6B45]/30 flex items-center justify-center text-xl shrink-0 text-[#5F6B45]">
                    📞
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-bold text-[#293225]">Phone Call</h4>
                    <a href="tel:+917007667808" className="text-[#5F6B45] font-bold hover:underline text-sm block">
                      +91 70076 67808
                    </a>
                  </div>
                </motion.div>
              </StaggerItem>

              {/* WhatsApp */}
              <StaggerItem>
                <motion.div 
                  whileHover={{ x: 6, transition: { duration: 0.3 } }}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-[#F4EFE6] border border-[#D8D0C3] hover:border-[#5F6B45] transition-colors shadow-sm"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF7F1] border border-[#5F6B45]/30 flex items-center justify-center text-xl shrink-0 text-[#25D366]">
                    💬
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-bold text-[#293225]">WhatsApp</h4>
                    <a href="https://wa.me/917007667808" target="_blank" rel="noopener noreferrer" className="text-[#5F6B45] font-bold hover:underline text-sm block">
                      +91 70076 67808
                    </a>
                  </div>
                </motion.div>
              </StaggerItem>

              {/* Address */}
              <StaggerItem>
                <motion.div 
                  whileHover={{ x: 6, transition: { duration: 0.3 } }}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-[#F4EFE6] border border-[#D8D0C3] hover:border-[#5F6B45] transition-colors shadow-sm"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF7F1] border border-[#5F6B45]/30 flex items-center justify-center text-xl shrink-0 text-[#5F6B45]">
                    🗺️
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-bold text-[#293225]">Address</h4>
                    <a 
                      href="https://maps.google.com/?q=Tamanya+Physio+Pandeypur+Varanasi" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[#252822]/80 hover:text-[#5F6B45] font-light text-xs sm:text-sm leading-relaxed block"
                    >
                      SA 1/177 T. N Nai Basti Road, beside Khadim, near Murari Jewellers, Pandeypur, Paharia, Varanasi, Uttar Pradesh 221002
                    </a>
                  </div>
                </motion.div>
              </StaggerItem>

              {/* Opening Hours */}
              <StaggerItem>
                <motion.div 
                  whileHover={{ x: 6, transition: { duration: 0.3 } }}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-[#F4EFE6] border border-[#D8D0C3] hover:border-[#5F6B45] transition-colors shadow-sm"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF7F1] border border-[#5F6B45]/30 flex items-center justify-center text-xl shrink-0 text-[#5F6B45]">
                    ⏰
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-bold text-[#293225]">Opening Hours</h4>
                    <p className="text-[#252822]/80 font-light text-xs sm:text-sm">Mon – Sat: 09:00 AM – 08:00 PM</p>
                    <p className="text-[#252822]/80 font-light text-xs sm:text-sm">Sun: Prior Appointment</p>
                  </div>
                </motion.div>
              </StaggerItem>

              {/* Email Enquiries */}
              <StaggerItem>
                <motion.div 
                  whileHover={{ x: 6, transition: { duration: 0.3 } }}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-[#F4EFE6] border border-[#D8D0C3] hover:border-[#5F6B45] transition-colors shadow-sm"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF7F1] border border-[#5F6B45]/30 flex items-center justify-center text-xl shrink-0 text-[#5F6B45]">
                    ✉️
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-bold text-[#293225]">Email Enquiries</h4>
                    <a href="mailto:dr.neha25btr@gmail.com" className="text-[#252822]/80 hover:text-[#5F6B45] font-medium text-xs sm:text-sm block break-all">
                      dr.neha25btr@gmail.com
                    </a>
                  </div>
                </motion.div>
              </StaggerItem>

            </StaggerContainer>
          </FadeIn>

          {/* RIGHT: Interactive Appointment & Location Card */}
          <FadeIn className="lg:col-span-6 space-y-8" direction="right" delay={0.2}>
            <div className="bg-[#F4EFE6] p-8 sm:p-10 rounded-[28px] border-2 border-[#D8D0C3] shadow-xl space-y-6">
              <h3 className="font-serif text-2xl font-bold text-[#293225]">Visit Our Varanasi Clinic</h3>
              <p className="text-xs text-[#252822]/80 leading-relaxed font-light">
                Our modern healthcare campus is conveniently located at Pandeypur Chauraha. We recommend booking your consultation in advance for personalized care.
              </p>
              
              <ImageReveal className="aspect-[16/10] rounded-2xl overflow-hidden border border-[#D8D0C3] relative">
                <img src={cliImg} alt="Tamanya Clinic Campus" className="w-full h-full object-cover animate-ken-burns" />
              </ImageReveal>

              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <Link to="/book-appointment" className="btn-olive w-full justify-center inline-flex items-center gap-2 group">
                  <span>BOOK CONSULTATION</span>
                  <span className="group-hover:translate-x-1.5 transition-transform">→</span>
                </Link>
                <a 
                  href="https://maps.google.com/?q=Tamanya+Physio+Pandeypur+Varanasi" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-linen w-full justify-center"
                >
                  GET DIRECTIONS
                </a>
              </div>
            </div>
          </FadeIn>

        </div>
      </section>

    </PageTransition>
  );
}

