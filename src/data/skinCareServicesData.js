// Skin Care Detailed Clinical Educational Knowledge Base
// Verified official clinical data for Tamanya Physio and Health Clinic, Varanasi
// Led by Dr. Neha Gupta (PT) and Certified Clinical Team

import psoriasisImg from '../assets/conditions/psoriasis.jpg';
import scarsImg from '../assets/conditions/scars.jpg';

export const SKIN_CARE_SERVICES = [
  {
    id: "skin-rejuvenation",
    name: "Clinical Skin Care & Rejuvenation",
    category: "CLINICAL DERMATOLOGY & BARRIER HEALTH",
    tagline: "Epidermal Barrier Repair, Deep Pore Cleansing & Radiance Restoration",
    image: psoriasisImg,
    imageAlt: "Clinical dermatological skin rejuvenation, barrier hydration and radiance therapy",
    prescribedTherapy: "Non-Invasive Dermal Microcurrent & Ultrasonic Hydration Infusion",
    machineUsed: "Clinical Ultrasonic Skin Scrubber & Microcurrent Biostimulator",
    therapyOutcome: "Gently exfoliates dead epidermal cells, stimulates dermal collagen synthesis, improves skin elasticity and moisture retention, and reveals a radiant, healthy complexion.",
    
    introduction: `Environmental exposure, urban pollution, harsh UV radiation, stress, and natural cellular aging progressively compromise the stratum corneum—the outermost protective lipid barrier of the human skin. When this barrier is depleted, the skin suffers from trans-epidermal water loss (TEWL), resulting in chronic dehydration, dullness, rough texture, clogged pores, and heightened reactivity. Rather than aggressive, abrasive treatments that strip the skin, clinical skin care and rejuvenation at Tamanya Physio and Health Clinic in Pandeypur, Varanasi, focuses on physiological restoration. Our certified clinical protocols combine gentle non-comedogenic double-cleansing, medical-grade antioxidant infusion, and lipid replenishment to restore epidermal health, elasticity, and natural glow from within.`,
    
    whyUsed: {
      conditions: [
        "Dull, lackluster, and tired-looking skin resulting from stress, pollution, and lack of hydration",
        "Impaired epidermal skin barrier with chronic flakiness, tightness, and surface roughness",
        "Congested pores, superficial blackheads, and environmental debris accumulation",
        "Uneven skin texture, fine dehydration lines, and post-sun exposure discoloration",
        "Pre-event skin revitalization requiring gentle, non-invasive radiance without peeling or downtime"
      ],
      purpose: "To thoroughly cleanse impurities from follicular openings without disrupting natural acid mantle pH, infuse biocompatible bio-active antioxidants (such as hyaluronic acid, vitamin C, and ceramides), and stimulate microcirculation for lasting skin radiance.",
      realisticBenefits: "Immediately noticeable skin softness, enhanced luminosity, refined pore texture, improved moisture retention, and a calm, nourished complexion.",
      whenFurtherAssessmentNeeded: "Clinical rejuvenation is designed for healthy, barrier-compromised, or dull skin. It is not suitable for active severe cystic acne flares with pustules, open bleeding skin lesions, or acute viral herpes outbreaks until medically resolved."
    },

    howItWorks: {
      steps: [
        {
          phase: "Step 1: Clinical Skin Barrier Evaluation",
          detail: "Our clinical team analyzes your skin type, hydration levels, lipid barrier integrity, and sensitivity triggers under sterile clinical lighting."
        },
        {
          phase: "Step 2: Gentle pH-Balanced Double Cleansing",
          detail: "Removal of environmental pollutants and surface sebum using gentle, medical-grade sulfate-free cleansers that respect the natural skin microbiome."
        },
        {
          phase: "Step 3: Enzyme Exfoliation & Ultrasonic Pore Clearing",
          detail: "Application of gentle botanical enzymatic solutions paired with gentle acoustic ultrasonic cavitation to dislodge dead keratinocytes and clear pore congestion without aggressive mechanical friction."
        },
        {
          phase: "Step 4: Active Antioxidant & Hydration Infusion",
          detail: "Topical application of low-molecular-weight hyaluronic acid, niacinamide, and essential ceramides, allowing deep dermal hydration."
        },
        {
          phase: "Step 5: Barrier Sealing & Photoprotection",
          detail: "Sealing moisture with a non-comedogenic lipid repair emulsion and broad-spectrum mineral SPF protection, accompanied by personalized home skincare recommendations."
        }
      ],
      expectations: {
        before: "Arrive with a clean face free of heavy makeup. Avoid abrasive home scrubs or chemical exfoliants for 48 hours prior to your session.",
        during: "The treatment is soothing, cooling, and deeply relaxing. No pinching, harsh burning, or painful extractions are performed.",
        after: "Skin looks instantly dewy, calm, and luminous with zero downtime. You can resume your daily routine immediately."
      }
    },

    equipmentAndTechniques: {
      name: "Ultrasonic Skin Exfoliation, Cold Infusion & Medical Barrier Formulations",
      description: "Our clinic utilizes gentle ultrasonic oscillating skin spatulas to clear follicular blockages through micro-vibration, medical-grade cold compresses, and sterilized single-use sponges. Tamanya maintains strict medical sterilization standards; no harsh or unverified laser devices are used.",
      manualAspect: "Gentle lymphatic drainage facial massage following anatomical venous pathways to reduce morning puffiness and stimulate facial microcirculation."
    },

    whoMayBenefit: {
      candidates: [
        "Individuals experiencing dull, dehydrated skin from Varanasi's climate and dust",
        "Professionals seeking skin refreshing before important family or professional occasions",
        "Men and women with sensitive skin seeking gentle, non-irritating clinical skin maintenance"
      ],
      precautionsAndContraindications: "Contraindicated over active herpes simplex (cold sores), severe inflamed cystic acne lesions, acute sunburn, or active bacterial skin infections. A pre-treatment skin screen is always conducted."
    },

    whatPatientsShouldKnow: {
      preparation: "Men should avoid shaving immediately before the appointment to prevent skin irritation. Women should avoid waxing or threading facial hair for 48 hours prior.",
      aftercare: "Avoid direct sun exposure for 24 hours. Do not apply heavy comedogenic cosmetics for the remainder of the day. Apply sunscreen diligently every morning.",
      faqs: [
        {
          q: "How often should I get a clinical skin rejuvenation treatment?",
          a: "For optimal skin barrier maintenance and cellular turnover, a monthly session (every 4 weeks) is ideal to keep pores clear and skin radiant."
        },
        {
          q: "Will this treatment cause my skin to peel or turn red?",
          a: "No! Unlike harsh chemical peels, our clinical skin rejuvenation is gentle, hydrating, and barrier-restorative. There is zero peeling and zero downtime."
        },
        {
          q: "Can sensitive skin undergo this procedure?",
          a: "Yes. All formulations used are hypoallergenic and tailored specifically to your skin's individual sensitivity threshold."
        }
      ]
    }
  },

  {
    id: "psoriasis-management",
    name: "Skin Psoriasis Management",
    category: "SPECIALISED DERMATOLOGY & PSORIASIS CARE",
    tagline: "Plaque Soothing, Scalp & Skin Dryness Reduction & Barrier Hydration Protocols",
    image: psoriasisImg,
    imageAlt: "Clinical skin psoriasis management, plaque soothing and barrier lipid replenishment",
    prescribedTherapy: "Sterile Barrier Support, Anti-Inflammatory Ultrasonic Therapy & Scalp Care",
    machineUsed: "Non-Thermal Ultrasound Soothing Wand & High-Frequency Scalp Wand",
    therapyOutcome: "Softens and safely removes thick silvery hyperkeratotic plaques, soothes intense itching and burning erythema, and repairs compromised natural skin barrier function.",
    
    introduction: `Psoriasis is a chronic, immune-mediated dermatological condition characterized by accelerated epidermal cell turnover. While healthy skin cells mature and shed over approximately 28 to 30 days, psoriatic skin undergoes this turnover cycle in just 3 to 5 days. This rapid cellular proliferation leads to the accumulation of thick, erythematous (red) plaques covered with characteristic silvery-white scales, predominantly affecting the elbows, knees, scalp, lower back, and palms. Beyond the visible appearance, psoriasis causes severe pruritus (itching), painful skin cracking, burning, and emotional distress. At Tamanya Physio and Health Clinic, our psoriasis care protocols focus on gentle, non-steroidal plaque soothing, intensive barrier lipid replenishment, dead scale softening, and holistic lifestyle-trigger counseling to calm active flares and prolong remission periods.`,
    
    whyUsed: {
      conditions: [
        "Chronic plaque psoriasis affecting the elbows, knees, lower back, and peripheral joints",
        "Scalp psoriasis causing thick scaling, itching, and dry flaky buildup",
        "Severe skin dryness, cracking, and bleeding fissures resulting from hyperkeratosis",
        "Post-flare epidermal barrier depletion and persistent redness",
        "Psoriatic stiffness and joint discomfort in fingers, knees, and spine (in conjunction with our orthopaedic physiotherapy)"
      ],
      purpose: "To gently soften and remove thick hyperkeratotic scales without causing trauma (avoiding the Koebner phenomenon), deeply hydrate the underlying inflamed dermis, restore missing skin lipids, relieve intense itching, and prevent secondary bacterial infections in cracked fissures.",
      realisticBenefits: "Noticeable reduction in plaque thickness and roughness, relief from intense itching and tightness, healing of painful skin cracks, restored skin flexibility, and significant improvement in daily comfort.",
      whenFurtherAssessmentNeeded: "Psoriasis management at Tamanya is supportive and barrier-focused. Ongoing medical care with a dermatologist is necessary for systemic prescription therapies (such as biologics or immunosuppressants) and monitoring for severe generalized erythrodermic or pustular psoriasis flares, which require immediate hospital dermatological care."
    },

    howItWorks: {
      steps: [
        {
          phase: "Step 1: Plaque & Skin Barrier Staging Audit",
          detail: "Visual inspection and mapping of active plaques, assessment of scale thickness, fissure depth, and identification of individual flare triggers (stress, seasonal dryness, dietary triggers)."
        },
        {
          phase: "Step 2: Medicated Emollient Scale Softening",
          detail: "Application of specialized medical-grade keratolytics (such as pharmaceutical-grade urea or gentle salicylic formulations) to break down intercellular desmosome bonds and loosen hardened scales gently."
        },
        {
          phase: "Step 3: Gentle Non-Abrasive De-Scaling",
          detail: "Soft, patient-safe removal of loosened dead flakes using sterile saline compresses without scratching, picking, or scraping, strictly preventing bleeding (Auspitz sign) and Koebner-induced spreading."
        },
        {
          phase: "Step 4: Deep Lipid Infusion & Anti-Inflammatory Soothing",
          detail: "Application of intensive, fragrance-free ceramide and natural botanical barrier balms that penetrate deep into dehydrated skin layers to calm redness and restore elasticity."
        },
        {
          phase: "Step 5: Daily Home Flare-Control & Lifestyle Blueprint",
          detail: "Detailed guidance on bathing temperatures (avoiding scalding hot water), gentle non-soap cleansers, humidification, and stress-reduction techniques that help keep the immune system calm."
        }
      ],
      expectations: {
        before: "Wear loose, 100% cotton clothing that does not rub against active plaques. Do not aggressively scrub or scratch plaques before your visit.",
        during: "All applications are cooling, soothing, and pain-free. Patients typically experience immediate relief from the persistent burning and tight itch.",
        after: "The treated skin feels soft, supple, and hydrated. Consistent home moisturization maintains these benefits."
      }
    },

    equipmentAndTechniques: {
      name: "Sterile Hydration Compresses, Medical Emollient Wraps & Barrier Restoration Protocols",
      description: "Our clinic utilizes sterile medical-grade moist compresses, specialized occlusion techniques for stubborn thick plaques on joints, and high-purity, hypoallergenic clinical formulations. Tamanya uses no harsh chemicals or unverified laser devices.",
      manualAspect: "Gentle non-traumatic scale desensitization and guided relaxation protocols to reduce systemic neuro-immune stress triggers."
    },

    whoMayBenefit: {
      candidates: [
        "Individuals struggling with painful, itchy, and cracking psoriasis plaques on elbows, knees, or scalp",
        "Patients whose skin feels uncomfortably tight and dry from commercial soaps",
        "Individuals seeking supportive clinical care alongside their medical dermatology prescriptions"
      ],
      precautionsAndContraindications: "Never pick, scrape, or forcefully pull off psoriatic scales. Forceful trauma to the skin triggers the Koebner phenomenon, causing new psoriasis plaques to form at the injury site. All therapy is strictly gentle and non-traumatic."
    },

    whatPatientsShouldKnow: {
      preparation: "Wear comfortable cotton clothing. Bring a list of any topical creams, steroids, or oral medications you are currently using.",
      aftercare: "Apply your prescribed thick emollient immediately after bathing while your skin is still damp to lock in moisture.",
      faqs: [
        {
          q: "Can psoriasis be cured permanently?",
          a: "Psoriasis is a chronic autoimmune condition without a permanent cure, but it CAN be very successfully managed and kept in long-term remission with proper barrier hydration, gentle scale control, and trigger management."
        },
        {
          q: "Is psoriasis contagious?",
          a: "No, absolutely not. Psoriasis is completely non-contagious; it cannot be spread through touch, contact, or sharing items. It is an internal immune-mediated skin condition."
        },
        {
          q: "Why do my plaques get worse during the winter season?",
          a: "Cold, dry weather and indoor heating rapidly deplete the skin's natural moisture barrier, accelerating plaque thickening and cracking. Our winter barrier protocols are specifically designed to counteract seasonal flares."
        }
      ]
    }
  },

  {
    id: "scar-reduction",
    name: "Acne & Facial Scar Reduction Therapy",
    category: "CLINICAL AESTHETICS & SCAR REMODELING",
    tagline: "Post-Acne Pitting, Deep Scar Remodeling, Collagen Induction & Texture Smoothing",
    image: scarsImg,
    imageAlt: "Clinical acne scar reduction, collagen stimulation and facial texture resurfacing",
    prescribedTherapy: "Targeted Ultrasonic Collagen Remodeling & Medical Silicone Compression",
    machineUsed: "Medical Ultrasound Acoustic Therapy & Microcurrent Scar Stimulator",
    therapyOutcome: "Remodels disorganized collagen fibers in hypertrophic and surgical scars, flattens raised tissue, softens rigid keloid bands, and restores smooth skin texture.",
    
    introduction: `Acne and facial scarring represent the permanent structural aftermath of severe inflammatory breakouts, trauma, or surgical incisions. When severe cystic acne ruptures deep in the dermis, the body's natural wound-healing response often results in an incomplete or disorganized deposition of collagen, creating atrophic depressed scars—such as rolling scars (wavy texture), boxcar scars (sharp vertical edges), and ice-pick scars (deep narrow pits). Additionally, post-inflammatory hyperpigmentation (PIH) and persistent erythema leave dark brown or reddish marks across the skin long after acne has cleared. At Tamanya Physio and Health Clinic, our clinical scar reduction protocols combine gentle chemical resurfacing, collagen remodeling stimulation, and cellular renewal to smooth irregular scar margins and restore a uniform, healthy facial texture.`,
    
    whyUsed: {
      conditions: [
        "Atrophic acne scars (rolling, shallow boxcar, and post-breakout skin depression)",
        "Post-Inflammatory Hyperpigmentation (PIH) presenting as dark brown or stubborn purple acne marks",
        "Post-traumatic or superficial post-surgical facial scars requiring texture softening",
        "Enlarged pores and coarse facial texture resulting from previous chronic acne congestion",
        "Uneven skin tone and rough surface reflection"
      ],
      purpose: "To gently dissolve the rigid, fibrous scar tissue borders, stimulate fibroblast proliferation and neocollagenesis (new collagen synthesis) in the dermal depressions, and accelerate epidermal cell turnover to fade stubborn hyperpigmentation marks.",
      realisticBenefits: "Visible softening of sharp scar edges, progressive shallowing of depressed scars, gradual fading of dark post-acne marks, refined skin texture, and enhanced self-confidence.",
      whenFurtherAssessmentNeeded: "Clinical scar therapy is indicated for inactive, healed scars. Active inflamed cystic acne with pustules must be brought under medical control first to prevent the formation of new scars."
    },

    howItWorks: {
      steps: [
        {
          phase: "Step 1: Clinical Scar Mapping & Depth Classification",
          detail: "Dr. Neha Gupta and the clinical team examine your facial scars under tangential lighting to map out atrophic depths, scar types, and melanin pigmentation patterns."
        },
        {
          phase: "Step 2: Antiseptic Skin Preparation & Degreasing",
          detail: "The skin is thoroughly cleansed with medical antiseptic solutions to remove all surface lipids, ensuring even, predictable penetration of resurfacing agents."
        },
        {
          phase: "Step 3: Targeted Clinical Resurfacing & Peeling",
          detail: "Application of calibrated dermatological peel solutions (such as glycolic, lactic, or mandelic acids) formulated to gently dissolve dead keratinized scar edges and stimulate basal cellular turnover without burning the skin."
        },
        {
          phase: "Step 4: Collagen Induction & Active Peptide Infusion",
          detail: "Topical application of epidermal growth factors, copper peptides, and pure hyaluronic acid to nourish newly stimulated fibroblasts and accelerate healing."
        },
        {
          phase: "Step 5: Post-Treatment Calming & Strict Sun Shield",
          detail: "Application of a soothing zinc oxide barrier mask followed by high-SPF broad-spectrum mineral protection to shield sensitized melanocytes from UV-induced darkening."
        }
      ],
      expectations: {
        before: "Discontinue any prescription retinoids, AHAs, or benzoyl peroxide products 3–5 days before your session. Protect your face from sun exposure.",
        during: "You may experience a mild, temporary tingling or warming sensation during active resurfacing, which subsides quickly upon neutralization.",
        after: "Mild redness similar to a slight flush may persist for a few hours. Gentle flaking may occur over days 3–5 as fresh skin emerges."
      }
    },

    equipmentAndTechniques: {
      name: "Dermatological Chemical Resurfacing, Acoustic Ultrasonic Clearing & Mineral Shielding",
      description: "Our clinic utilizes precision-buffered dermatological peeling solutions, medical neutralizers, and ultrasonic delivery systems. All procedures follow medical safety protocols; no unverified or invasive lasers are utilized.",
      manualAspect: "Precise palpatory tensioning of scarred facial zones and lymphatic drainage to minimize post-treatment edema."
    },

    whoMayBenefit: {
      candidates: [
        "Individuals with healed acne who are left with textured pits, depressions, and dark marks",
        "Men and women seeking non-surgical, non-invasive facial scar improvement",
        "Patients with uneven skin texture and rough, coarse facial pores"
      ],
      precautionsAndContraindications: "Contraindicated over active cystic acne breakouts, open wounds, active cold sores, or in individuals who have taken oral isotretinoin within the past 6 months. Strict daily sun protection is mandatory to prevent post-treatment hyperpigmentation."
    },

    whatPatientsShouldKnow: {
      preparation: "Wear loose clothing with a wide neck. Avoid direct sunlight and do not bleach or thread facial hair for 1 week prior.",
      aftercare: "Apply gentle fragrance-free moisturizer frequently. NEVER pick or pull at flaking skin. Apply broad-spectrum SPF 50 sunscreen every morning without fail.",
      faqs: [
        {
          q: "How many sessions are needed to see improvement in acne scars?",
          a: "Collagen remodeling is a gradual biological process. Most patients notice visible texture softening and fading of marks after 3 to 4 sessions spaced 3 to 4 weeks apart."
        },
        {
          q: "Will scar reduction completely erase deep acne scars?",
          a: "While complete 100% eradication of deep ice-pick scars is rarely realistic without surgical intervention, our clinical protocols achieve substantial 50% to 70% textural shallowing, making scars significantly less noticeable."
        },
        {
          q: "Is the procedure painful?",
          a: "No. You will feel a mild, brief tingling or prickling sensation for 2 to 3 minutes, which is immediately neutralized and soothed with cooling compresses."
        }
      ]
    }
  }
];
