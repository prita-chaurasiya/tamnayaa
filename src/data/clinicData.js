// Verified Official Information for Tamanya Physio & Health Clinic, Varanasi
// Edits here automatically update the Chat Assistant, WhatsApp links, and Contact pages.

export const CLINIC_DATA = {
  name: "Tamanya Physio and Health Clinic",
  shortName: "Tamanya Physio and Health Clinic",
  leadDoctor: "Dr. Neha Gupta (PT)",
  role: "Founder / Director",
  qualifications: "MPT (ORTHO), BPT, DPT, CMT, CDNP, CCT, CTT, NDT",
  qualificationsSummary: "MPT (ORTHO), BPT",
  specializations: [
    "Pelvic Floor Rehab Specialist",
    "Cupping Therapy Specialist",
    "Dry Needling Therapist"
  ],
  phone: "+91 70076 67808",
  phoneRaw: "+917007667808",
  altPhone: "+91 80902 99847",
  altPhoneRaw: "+918090299847",
  whatsappNumber: "917007667808",
  displayWhatsapp: "+91 70076 67808",
  email: "dr.neha25btr@gmail.com",
  instagram: "@physioneha06",
  instagramUrl: "https://instagram.com/physioneha06",
  
  address: {
    street: "SA 1/177 T.N., Near Kali Ji Mandir",
    area: "Pandeypur",
    city: "Varanasi",
    state: "Uttar Pradesh",
    pincode: "221002",
    landmark: "Near Kali Ji Mandir, Pandeypur Chauraha",
    fullAddress: "SA 1/177 T.N., Near Kali Ji Mandir, Pandeypur, Varanasi, Uttar Pradesh 221002",
    mapsUrl: "https://maps.google.com/?q=Tamanya+Physio+Pandeypur+Varanasi",
    embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.6749969185!2d82.999!3d25.349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2e21b8f0474f%3A0x86b0394025b3992b!2sTamanya%20Physio%20%26%20Health%20Clinic!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    directions: "Located at SA 1/177 T.N., Near Kali Ji Mandir, Pandeypur, Varanasi. Easily accessible from Cantonment, Nadesar, Orderly Bazar, and Ring Road."
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
        "Parkinson’s Disease & Bell’s Palsy Facial Rehab",
        "Spinal Cord Injury (SCI) & Standing Table Care",
        "Joint Pain, Frozen Shoulder & Arthritis Care",
        "Sports Injury, Sprains, Strains & Ligament Tears",
        "Ultrasonic, Laser & IFT / TENS / SWD Electrotherapy",
        "Computerized Spinal Traction & Decompression",
        "IASTM, PEMF, Cupping & Dry Needling Therapy",
        "Clinical Moist Steam Therapy & Joint Mobilization"
      ]
    },
    {
      category: "Women's Health & Pelvic Floor",
      items: [
        "Pelvic Floor Muscle Biofeedback & Down-Training",
        "Antenatal (Pregnancy) Trimester-Wise Care",
        "Postnatal Recovery & Mother's Core Rehabilitation",
        "Diastasis Recti (Abdominal Separation) Care",
        "PCOD / PCOS Exercise & Metabolic Therapy",
        "Urinary Incontinence & Bladder Retraining",
        "Pelvic Organ Prolapse Conservative Support",
        "Vaginismus & Hypertonic Pelvic Floor Relaxation",
        "Pelvic Floor Dyssynergic Constipation Care",
        "Chronic Pelvic Pain Syndrome (CPPS) Relief",
        "After C-Section Back Pain & Scar Mobilization"
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
        "Body Shaper Neuromuscular Contouring",
        "Vacuum Cavitation Non-Invasive Fat Reduction",
        "Deep Heat Detox & Far-Infrared Thermogenesis",
        "G-5 Targeted Inch Loss & Percussive Cellulite Therapy",
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

  text += `\n\n*Sent via Tamanya Physio and Health Clinic Website*`;

  const encoded = encodeURIComponent(text);
  return `https://wa.me/${CLINIC_DATA.whatsappNumber}?text=${encoded}`;
}

/**
 * All individual treatments categorized for the Navbar mega-dropdown and direct anchors
 */
export const SERVICES_NAVBAR_DATA = [
  {
    category: "Physiotherapy",
    path: "/physiotherapy",
    icon: "Activity",
    countBadge: "18 Therapies",
    tagline: "Spine, Joint & Neuro Rehab",
    items: [
      { name: "Lower Back Pain & Sciatica", path: "/physiotherapy#back-pain", modality: "Lumbar Traction & IFT" },
      { name: "Neck Pain & Cervical Care", path: "/physiotherapy#neck-pain", modality: "Cervical Decompression" },
      { name: "Knee & Joint Arthritis", path: "/physiotherapy#joint-pain-arthritis", modality: "Ultrasound & Laser" },
      { name: "ACL / MCL Sports Rehab", path: "/physiotherapy#acl-mcl-meniscus", modality: "Dynamic Stability Drills" },
      { name: "Pre & Post Surgery (TKR/THR)", path: "/physiotherapy#pre-post-surgery-rehab", modality: "CPM & Joint Recovery" },
      { name: "Sports Injuries (Sprain/Strain)", path: "/physiotherapy#sports-injuries", modality: "PEACE & LOVE Loading" },
      { name: "Stroke & Neuro Rehab", path: "/physiotherapy#stroke-paralysis-neuro-rehab", modality: "NDT & Motor Control" },
      { name: "Parkinson’s Neuro Rehab", path: "/physiotherapy#parkinsons-disease", modality: "High-Amplitude Drills" },
      { name: "Bell’s Palsy Facial Care", path: "/physiotherapy#bells-palsy", modality: "Facial Stimulation" },
      { name: "Spinal Cord Injury (SCI)", path: "/physiotherapy#spinal-cord-injury", modality: "Tilt Table & FES" },
      { name: "Ultrasonic & Laser Therapy", path: "/physiotherapy#ultrasonic-laser-therapy", modality: "Photobiomodulation" },
      { name: "IFT, TENS & SWD Diathermy", path: "/physiotherapy#ift-tens-swd-therapy", modality: "Vector Currents & 27MHz" },
      { name: "Spinal Traction Decompression", path: "/physiotherapy#spinal-traction-decompression", modality: "Motorized Split Table" },
      { name: "IASTM, PEMF & Taping Care", path: "/physiotherapy#iastm-pemf-taping-manual", modality: "Fascial Blades & PEMF" },
      { name: "Clinical Steam Therapy", path: "/physiotherapy#steam-therapy", modality: "Moist Thermal Hyperthermia" },
      { name: "Pelvic Floor Rehabilitation", path: "/physiotherapy#pelvic-floor-rehab", modality: "Biofeedback & Exercises" },
      { name: "Cupping Therapy (Hijama)", path: "/physiotherapy#cupping-therapy", modality: "Negative Pressure Cups" },
      { name: "Dry Needling Therapy", path: "/physiotherapy#dry-needling-therapy", modality: "Sterile Filiform Needles" }
    ]
  },
  {
    category: "Women's Health",
    path: "/womens-health",
    icon: "Heart",
    countBadge: "11 Treatments",
    tagline: "Female Hormonal & Pelvic Care",
    items: [
      { name: "PCOD / PCOS Management", path: "/womens-health#pcod-pcos", modality: "Metabolic Activation" },
      { name: "Menstrual Pain (Dysmenorrhea)", path: "/womens-health#menstrual-pain", modality: "Sacral Release & Heat" },
      { name: "Antenatal / Pregnancy Physio", path: "/womens-health#antenatal-rehab", modality: "Pelvic Girdle Stability" },
      { name: "Postnatal Core Recovery", path: "/womens-health#postnatal-recovery", modality: "Postpartum Restoration" },
      { name: "Urinary Incontinence Care", path: "/womens-health#urine-leakage", modality: "Bladder Retraining" },
      { name: "Diastasis Recti Abdominal Rehab", path: "/womens-health#diastasis-recti", modality: "Abdominal Approximation" },
      { name: "Pelvic Organ Prolapse Care", path: "/womens-health#pelvic-organ-prolapse", modality: "Conservative Support" },
      { name: "Vaginismus Relaxation", path: "/womens-health#vaginismus-hypertonic", modality: "Pelvic Down-Training" },
      { name: "Back Pain After C-Section", path: "/womens-health#csection-back-pain", modality: "Post-Cesarean Spine Care" },
      { name: "Pelvic Floor Constipation", path: "/womens-health#pelvic-constipation", modality: "Defecation Biofeedback" },
      { name: "Chronic Pelvic Pain Syndrome", path: "/womens-health#chronic-pelvic-pain", modality: "Levator Ani Spasm Release" }
    ]
  },
  {
    category: "Skin Care",
    path: "/skin-care",
    icon: "Sparkles",
    countBadge: "3 Protocols",
    tagline: "Medical Dermatology Care",
    items: [
      { name: "Clinical Skin Rejuvenation", path: "/skin-care#skin-rejuvenation", modality: "Microcurrent & Hydration" },
      { name: "Psoriasis & Scalp Care", path: "/skin-care#psoriasis-management", modality: "Sterile Soothing Therapy" },
      { name: "Scar Reduction & Keloids", path: "/skin-care#scar-reduction", modality: "Collagen Remodeling" }
    ]
  },
  {
    category: "Slimming & Wellness",
    path: "/slimming-wellness",
    icon: "Flame",
    countBadge: "4 Modalities",
    tagline: "Non-Invasive Contouring",
    items: [
      { name: "Body Shaper Contouring", path: "/slimming-wellness#body-shaper", modality: "Neuromuscular Contouring" },
      { name: "Vacuum Cavitation Fat Loss", path: "/slimming-wellness#vacuum-cavitation", modality: "Ultrasonic Cavitation" },
      { name: "Deep Heat Detox Therapy", path: "/slimming-wellness#deep-heat-therapy", modality: "Far-Infrared Thermogenic" },
      { name: "G-5 Mechanical Massage", path: "/slimming-wellness#g5-mechanical-massage", modality: "Percussive Lymphatic" }
    ]
  }
];
