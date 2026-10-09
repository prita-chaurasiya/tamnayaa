// Verified Official Information for Tamanya Physio & Health Clinic, Varanasi
// Edits here automatically update the Chat Assistant, WhatsApp links, and Contact pages.

export const CLINIC_DATA = {
  name: "Tamanya Physio & Health Clinic",
  shortName: "Tamanya Health",
  leadDoctor: "Dr. Neha Gupta (M.P.T Orthopaedics)",
  phone: "+91 70076 67808",
  phoneRaw: "+917007667808",
  whatsappNumber: "917007667808",
  displayWhatsapp: "+91 70076 67808",
  email: "dr.neha25btr@gmail.com",
  
  address: {
    street: "SA 1/177 T. N Nai Basti Road, beside Khadim, near Murari Jewellers",
    area: "Pandeypur, Paharia",
    city: "Varanasi",
    state: "Uttar Pradesh",
    pincode: "221002",
    landmark: "Opposite Indian Oil Petrol Pump, Pandeypur Chauraha",
    fullAddress: "SA 1/177 T. N Nai Basti Road, beside Khadim, near Murari Jewellers, Pandeypur, Paharia, Varanasi, Uttar Pradesh 221002",
    mapsUrl: "https://maps.google.com/?q=Tamanya+Physio+Pandeypur+Varanasi",
    embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.6749969185!2d82.999!3d25.349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2e21b8f0474f%3A0x86b0394025b3992b!2sTamanya%20Physio%20%26%20Health%20Clinic!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    directions: "Located near Pandeypur Chauraha on Paharia Road, opposite Indian Oil Petrol Pump, right beside Khadim shoes store. Easily accessible from Cantonment, Nadesar, Orderly Bazar, and Ring Road."
  },

  hours: {
    regularDays: "Monday – Saturday",
    regularTime: "09:00 AM – 08:00 PM",
    sunday: "Closed for regular walk-ins (Prior Appointment Only)",
    holidays: "Closed on National Holidays & Announced Clinic Holidays (Emergency WhatsApp inquiries remain active)",
    summary: "Mon – Sat: 09:00 AM – 08:00 PM | Sun: Prior Appointment Only"
  },

  facilities: [
    { title: "Private Consultation Rooms", desc: "Confidential & comfortable clinical assessment spaces." },
    { title: "Advanced Electrotherapy Unit", desc: "TENS, IFT, Ultrasound, & Traction physical therapy systems." },
    { title: "Female Pelvic Health Suite", desc: "Private, dedicated space for pelvic floor rehabilitation & antenatal care." },
    { title: "Skin & Aesthetic Care Unit", desc: "Hygienic setup for clinical skin rejuvenation & facial therapies." },
    { title: "Slimming & Cavitation Tech", desc: "Vacuum Cavitation, Deep Heat therapy, & G-5 targeted body shaping." },
    { title: "Accessibility & Parking", desc: "Ground-floor accessible entrance with dedicated patient parking." },
    { title: "Patient Waiting Lounge", desc: "Clean, hygienic, air-conditioned patient reception area." }
  ],

  services: [
    {
      category: "Physiotherapy & Rehabilitation",
      items: [
        "Back Pain & Disc Herniation Care",
        "Sciatica Nerve Pain Radiation Relief",
        "Post-TKR (Knee) & Post-THR (Hip) Surgery Rehab",
        "Paralysis & Stroke Neurological Rehabilitation",
        "Joint Pain, Frozen Shoulder & Arthritis Care",
        "Sports Injury & Muscle Ligament Recovery"
      ]
    },
    {
      category: "Women's Health & Pelvic Floor",
      items: [
        "Pelvic Floor Muscle Biofeedback & Training",
        "Antenatal (Pregnancy) & Postnatal Rehabilitation",
        "Diastasis Recti (Abdominal Separation) Care",
        "PCOD / PCOS Exercise & Lifestyle Therapy",
        "Pelvic Girdle & Chronic Pelvic Pain Relief"
      ]
    },
    {
      category: "Skin Care & Aesthetics",
      items: [
        "Clinical Skin Rejuvenation & Glow Treatments",
        "Chemical Peels & Hyperpigmentation Care",
        "Acne & Scar Reduction Therapy",
        "Anti-Aging & Collagen Boosting Facials"
      ]
    },
    {
      category: "Slimming & Body Shaping",
      items: [
        "Vacuum Cavitation Non-Invasive Fat Reduction",
        "G-5 Targeted Inch Loss & Cellulite Therapy",
        "Deep Heat Detox & Lymphatic Drainage",
        "Postpartum Belly Toning & Sculpting"
      ]
    }
  ],

  appointmentInfo: {
    method: "You can schedule online, call our desk directly, or send a WhatsApp enquiry.",
    onlineUrl: "/book-appointment",
    noReferral: "No doctor referral is required for initial consultation.",
    avgConsultationTime: "45 – 60 minutes for complete clinical evaluation."
  }
};

/**
 * Builds a standardized, prefilled WhatsApp message link
 */
export function buildWhatsAppLink({ patientName = '', phone = '', service = '', preferredTime = '', query = '' }) {
  let text = `Hello Dr. Neha Gupta,\nI would like to inquire about Tamanya Physio & Health Clinic in Varanasi.\n`;
  
  if (patientName.trim()) {
    text += `\n👤 *Patient Name:* ${patientName.trim()}`;
  }
  if (phone.trim()) {
    text += `\n📞 *Contact Number:* ${phone.trim()}`;
  }
  if (service.trim()) {
    text += `\n🩺 *Service/Department:* ${service.trim()}`;
  }
  if (preferredTime.trim()) {
    text += `\n📅 *Preferred Time:* ${preferredTime.trim()}`;
  }
  if (query.trim()) {
    text += `\n💬 *Enquiry:* ${query.trim()}`;
  }

  text += `\n\n*Sent via Tamanya Health Website*`;

  const encoded = encodeURIComponent(text);
  return `https://wa.me/${CLINIC_DATA.whatsappNumber}?text=${encoded}`;
}
