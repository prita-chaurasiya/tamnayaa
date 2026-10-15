// Physiotherapy Services Detailed Clinical Educational Knowledge Base
// Verified official clinical data for Tamanya Physio and Health Clinic, Varanasi
// Led by Dr. Neha Gupta (PT), MPT (Ortho), BPT, DPT, CMT, CDNP, CCT, CTT, NDT

import backPainImg from '../assets/conditions/back_pain.jpg';
import neckPainImg from '../assets/conditions/neck_pain.jpg';
import kneeArthritisImg from '../assets/conditions/knee_arthritis.jpg';
import tkrSurgeryImg from '../assets/conditions/tkr_surgery.jpg';
import strokeParalysisImg from '../assets/conditions/stroke_paralysis.jpg';
import phyImg from '../assets/phy.jpg';
import woImg from '../assets/wo.jpg';

export const PHYSIOTHERAPY_SERVICES = [
  {
    id: "back-pain",
    name: "Back Pain & Lower Back Pain Physiotherapy",
    category: "SPINE & MUSCULOSKELETAL CARE",
    tagline: "Disc Bulge, Sciatica Nerve Pain, Lumbar Stiffness & Postural Strain Relief",
    image: backPainImg,
    imageAlt: "Clinical spine physiotherapy and lumbar mobilization for back pain relief",
    prescribedTherapy: "Lumbar Mechanical Traction, IFT & Deep Spinal Decompression",
    machineUsed: "Digital Computerized Lumbar Traction Unit & Multi-Frequency IFT Machine",
    therapyOutcome: "Decompresses spinal discs, releases pinched sciatic nerve roots, alleviates paraspinal muscle spasms, and restores pain-free lumbar mobility and spinal alignment.",
    
    introduction: `Back pain is one of the most common musculoskeletal complaints seen in clinical practice, affecting individuals across all age groups from desk workers to post-delivery mothers and elderly adults. At Tamanya Physio and Health Clinic in Pandeypur, Varanasi, back pain physiotherapy begins with a meticulous biomechanical evaluation to identify whether your symptoms originate from intervertebral disc herniation, sciatic nerve compression, lumbar facet joint inflammation, sacroiliac joint dysfunction, or chronic postural muscle deconditioning. Rather than offering temporary symptom suppression, our clinical protocols aim to restore vertebral alignment, decompress irritated nerve roots, and activate deep spinal stabilizing muscles.`,
    
    whyUsed: {
      conditions: [
        "Lumbar disc herniation, disc bulge, and degenerative disc disease (L4-L5, L5-S1)",
        "Sciatica nerve radiation presenting as sharp pain, tingling, or numbness radiating down the buttock, thigh, calf, or foot",
        "Chronic lower back stiffness and mechanical strain resulting from prolonged sitting or standing",
        "Facet joint arthropathy, lumbar spondylosis, and spinal canal stenosis",
        "Post-pregnancy lumbar instability and postural strain following childbirth or cesarean delivery",
        "Muscular spasms in the quadratus lumborum, piriformis, and erector spinae muscles"
      ],
      purpose: "The clinical purpose of back pain physiotherapy is to relieve mechanical pressure on spinal nerves, reduce localized inflammatory edema, restore pain-free spinal range of motion, and re-educate the deep core stabilizers that protect the lumbar spine during daily movement.",
      realisticBenefits: "Patients typically experience progressive reduction in pain intensity, decreased radiating nerve sensations, improved lumbar flexibility, better sitting and standing tolerance, and restored confidence in bending and lifting without fear of acute spasm.",
      whenFurtherAssessmentNeeded: "Physiotherapy is appropriate for mechanical and degenerative spine conditions. However, immediate emergency medical or neurosurgical consultation is required if red flags are present, including sudden loss of bowel or bladder control, saddle anesthesia (numbness in the groin/perineal region), progressive foot drop, fever with back pain, or unexplained weight loss."
    },

    howItWorks: {
      steps: [
        {
          phase: "Step 1: Clinical Biomechanical Assessment",
          detail: "Dr. Neha Gupta (PT) conducts an in-depth physical evaluation including spinal postural analysis, active and passive range of motion, neurological screening (Straight Leg Raise test, reflex testing, dermatomal sensation, motor strength), and palpation of spinal segments to locate exact restriction points."
        },
        {
          phase: "Step 2: Pain Gating & Electro-Modalities",
          detail: "In acute or highly irritable stages, targeted electrotherapy modalities such as Interferential Therapy (IFT) or Transcutaneous Electrical Nerve Stimulation (TENS) are applied to gate pain signals and stimulate natural endorphin release, paired with gentle moist thermal therapy or mechanical lumbar traction if nerve decompression is required."
        },
        {
          phase: "Step 3: Hands-On Manual Therapy & Joint Mobilization",
          detail: "Using Maitland and Mulligan manual joint glide techniques, the physiotherapist gently restores normal accessory gliding within stiff lumbar vertebrae, combined with gentle myofascial release to relax protective muscle spasms."
        },
        {
          phase: "Step 4: Active Core Stabilization & Movement Re-education",
          detail: "Once pain subsides, patients are guided through targeted activation of the transverse abdominis, multifidus, and pelvic floor muscles. Progressive stabilization exercises protect the spine against future re-injury."
        },
        {
          phase: "Step 5: Ergonomics & Home Maintenance Protocol",
          detail: "Every patient receives personalized guidance on workstation ergonomics, correct lifting mechanics, sleeping posture, and an individualized daily home exercise regimen."
        }
      ],
      expectations: {
        before: "Wear comfortable, loose clothing that allows easy examination of your lower back and hip joints. Bring any previous MRI, X-ray, or doctor prescription reports.",
        during: "Assessment and treatment are gentle, respectful, and adapted to your current pain threshold. You may feel gentle stretching sensations, soothing electrical tingling from modalities, or mild release pressure.",
        after: "Mild, temporary muscular soreness similar to a light workout can occasionally occur for 12–24 hours as dormant muscles re-engage. Staying hydrated and following movement advice promotes fast recovery."
      }
    },

    equipmentAndTechniques: {
      name: "Lumbar Mechanical Traction, IFT / TENS Electrotherapy & Maitland Manual Mobilization",
      description: "Our clinic utilizes calibrated medical-grade lumbar traction units that provide gentle, rhythmic, computerized axial distraction to reduce intradiscal pressure and widen the intervertebral foramina. Interferential Therapy (IFT) uses medium-frequency alternating currents to penetrate deep into paraspinal tissues for pain relief and edema reduction. Where appropriate, manual joint mobilization and therapeutic resistance bands are employed. No invasive instruments or unverified machines are utilized.",
      manualAspect: "A significant portion of back pain recovery is purely manual and exercise-based, emphasizing precision spinal kinematics and active motor control rather than passive machine reliance."
    },

    whoMayBenefit: {
      candidates: [
        "Individuals with recurring lower back stiffness from desk jobs or long driving hours",
        "Patients diagnosed with L4-S1 disc bulge or sciatica seeking non-surgical conservative care",
        "Mothers experiencing persistent lower back and pelvic girdle instability after delivery",
        "Older adults managing lumbar spondylosis and morning spinal stiffness"
      ],
      precautionsAndContraindications: "Lumbar traction and aggressive manual mobilization are strictly avoided in cases of severe spinal osteoporosis, spinal fractures, suspected malignancy, active spinal tuberculosis (Pott's spine), or severe cauda equina syndrome. All therapy is individualized following professional screening."
    },

    whatPatientsShouldKnow: {
      preparation: "Avoid heavy meals immediately before your appointment. Wear comfortable pants or tracksuits. Arrive 10 minutes early to complete initial health history documentation.",
      aftercare: "Maintain gentle walking throughout the day. Avoid prolonged static slouching. Use a lumbar support roll when sitting and follow your prescribed home exercise routine consistently.",
      faqs: [
        {
          q: "How many sessions of physiotherapy will I need for sciatica or disc bulge?",
          a: "Most patients notice meaningful pain reduction within 4 to 6 sessions. Complete rehabilitation, including core strengthening and stability restoration, typically spans 2 to 4 weeks depending on chronicity."
        },
        {
          q: "Is bed rest better than physiotherapy for acute back pain?",
          a: "Modern clinical guidelines strongly advise against prolonged bed rest. Bed rest beyond 24–48 hours can weaken paraspinal muscles and increase stiffness. Gentle, guided physical therapy and safe movement accelerate healing."
        },
        {
          q: "Can back pain physiotherapy prevent spine surgery?",
          a: "For the vast majority of non-emergency lumbar disc bulges and sciatica, evidence-based physiotherapy, postural correction, and decompression resolve symptoms effectively without surgical intervention."
        }
      ]
    }
  },

  {
    id: "neck-pain",
    name: "Neck Pain & Cervical Spondylosis Physiotherapy",
    category: "SPINE & MUSCULOSKELETAL CARE",
    tagline: "Stiffness, Nerve Impingement, Trapezius Spasm & Desk Posture Pain",
    image: neckPainImg,
    imageAlt: "Female neck physiotherapy, cervical mobilization and postural correction",
    prescribedTherapy: "Cervical Decompression, IFT & Manual Spinal Mobilization",
    machineUsed: "Calibrated Cervical Traction Unit & Ultrasonic Therapy Machine",
    therapyOutcome: "Relieves cervical nerve root compression, releases upper trapezius spasms, eliminates radiating arm numbness and tingling, and restores natural neck mobility.",
    
    introduction: `Neck pain and cervical spondylosis have become increasingly prevalent due to prolonged screen exposure, poor sleeping ergonomics, and age-related degenerative changes in the cervical spine. Patients frequently experience stiff neck mobility, tension headaches radiating from the base of the skull, and chronic upper back knots. In cases involving nerve root irritation (cervical radiculopathy), sharp radiating pain, numbness, or weakness may travel down the shoulder, arm, or fingers. At Tamanya Physio and Health Clinic, our cervical rehabilitation protocol targets both the mechanical cervical facet joints and the hypertonic muscular sling supporting the head.`,
    
    whyUsed: {
      conditions: [
        "Cervical spondylosis and degenerative disc changes between C4-C7 vertebrae",
        "Cervical radiculopathy with nerve impingement causing radiating arm pain, tingling, or finger numbness",
        "Chronic postural 'text-neck' strain and forward head posture from smartphone or laptop use",
        "Acute torticollis (wry neck) and acute unilateral neck spasms upon waking",
        "Cervicogenic headaches originating from upper cervical joint stiffness and suboccipital tension",
        "Myofascial trigger points in the upper trapezius, levator scapulae, and rhomboid muscles"
      ],
      purpose: "To decompress the cervical spine, alleviate protective muscle guarding, restore natural cervical lordosis, and re-educate the deep neck flexors and scapular stabilizers.",
      realisticBenefits: "Noticeable relief from neck stiffness, reduction in radiating arm symptoms, diminished tension headaches, improved rotational head checks while driving, and sustainable ergonomic posture.",
      whenFurtherAssessmentNeeded: "Immediate medical or neurological assessment is warranted if neck pain is accompanied by sudden unexplained arm weakness, loss of fine finger dexterity (difficulty buttoning shirts), balance unsteadiness (gait ataxia indicating cervical myelopathy), sudden severe dizziness upon head turning, or trauma-induced neck instability."
    },

    howItWorks: {
      steps: [
        {
          phase: "Step 1: Cervical Spine & Neurological Examination",
          detail: "Evaluation begins with testing active cervical flexion, extension, rotation, and side-bending, followed by the Spurling test and upper limb neurodynamic tension testing (ULNT) to identify specific nerve root involvement."
        },
        {
          phase: "Step 2: Decompression & Thermal Muscle Soothing",
          detail: "Calibrated cervical mechanical traction or gentle manual axial distraction is applied to relieve intervertebral foraminal pressure, complemented by moist thermotherapy or deep therapeutic ultrasound to soften rigid trapezius fibers."
        },
        {
          phase: "Step 3: Maitland Cervical Mobilization & Myofascial Release",
          detail: "Gentle oscillatory joint glides are delivered to hypomobile cervical segments to restore normal accessory glide without aggressive cracking, alongside soft-tissue release of the suboccipital and levator scapulae muscles."
        },
        {
          phase: "Step 4: Deep Neck Flexor & Scapular Retraining",
          detail: "Patients learn isometric chin tucks and scapular retraction drills to strengthen the deep longus colli and longus capitis muscles, counteracting forward-head posture."
        },
        {
          phase: "Step 5: Ergonomic Alignment Guidance",
          detail: "Practical recommendations for pillow height, monitor eye-level placement, and periodic micro-break stretches during work hours."
        }
      ],
      expectations: {
        before: "Avoid wearing high-collar shirts or heavy necklaces to allow clear access to your neck and upper shoulders.",
        during: "All cervical mobilizations are gentle and pain-free. Patients frequently report an immediate sensation of lightness and reduced tension across the shoulders.",
        after: "Maintain good upright posture and avoid sudden jerky head rotations for the remainder of the day."
      }
    },

    equipmentAndTechniques: {
      name: "Cervical Traction Unit, Ultrasonic Therapy & Manual Scapular Mobilization",
      description: "Our clinic employs specialized cervical traction systems that apply controlled, pound-specific traction to decompress the cervical intervertebral discs safely. Deep therapeutic acoustic ultrasound is utilized to target chronic trapezius spasm. All manual therapy strictly follows evidence-based Maitland oscillatory protocols, ensuring zero high-velocity risk.",
      manualAspect: "Gentle manual cervical distraction, positional release, and deep neck isometric stabilization form the foundation of our cervical care."
    },

    whoMayBenefit: {
      candidates: [
        "Software engineers, students, and office workers experiencing end-of-day neck heaviness and headaches",
        "Patients diagnosed with cervical disc bulges, bone spurs, or radiating arm numbness",
        "Individuals waking up with acute neck stiffness unable to turn their head"
      ],
      precautionsAndContraindications: "Cervical traction and mobilization are contraindicated in cases of cervical vertebral instability, rheumatoid arthritis with atlantoaxial subluxation, recent cervical trauma, or severe carotid artery atherosclerosis. A thorough physical screen is always conducted first."
    },

    whatPatientsShouldKnow: {
      preparation: "Bring any cervical X-rays or cervical spine MRI scans if available. Tie long hair up to expose the neck line.",
      aftercare: "Apply a warm compress for 10–15 minutes in the evening if mild muscular fatigue occurs. Avoid sleeping on multiple bulky pillows.",
      faqs: [
        {
          q: "Can cervical spondylosis cause dizziness and headaches?",
          a: "Yes. Upper cervical joint restrictions (C1-C3) and suboccipital muscle spasms can refer pain directly to the forehead and temples (cervicogenic headache) and occasionally cause mild postural dizziness (cervicogenic dizziness)."
        },
        {
          q: "What is the best pillow for neck pain?",
          a: "A supportive ergonomic pillow that keeps your cervical spine in a neutral, straight line with your thoracic spine—neither tilting your head too far forward nor arching it backwards—is optimal."
        },
        {
          q: "Is neck cracking safe for relieving pain?",
          a: "Habitual or forceful neck cracking can cause ligament laxity and vascular irritation. Professional, gentle oscillatory mobilization by a qualified physiotherapist is much safer and more effective."
        }
      ]
    }
  },

  {
    id: "joint-pain-arthritis",
    name: "Joint Pain & Arthritis Physiotherapy",
    category: "ORTHOPAEDIC REHABILITATION",
    tagline: "Knee Osteoarthritis, Frozen Shoulder (Adhesive Capsulitis), Hip & Wrist Care",
    image: kneeArthritisImg,
    imageAlt: "Therapeutic joint mobilization and knee osteoarthritis physical rehabilitation",
    prescribedTherapy: "Therapeutic Ultrasound, Laser Biostimulation & Patellar Mobilization",
    machineUsed: "Medical Ultrasound Modality (1MHz/3MHz) & Low-Level Laser Device",
    therapyOutcome: "Reduces intra-articular inflammation, enhances synovial fluid lubrication, relieves chronic joint stiffness, and restores pain-free walking and weight-bearing ability.",
    
    introduction: `Joint pain and degenerative arthritis—most prominently knee osteoarthritis, frozen shoulder (adhesive capsulitis), and hip arthritis—can progressively restrict basic daily functions such as stair climbing, walking, reaching overhead, and dressing. Rather than accepting persistent pain or premature surgical intervention, targeted orthopaedic physiotherapy focuses on preserving remaining cartilage, enhancing synovial fluid circulation, reducing joint capsule contractures, and strengthening peri-articular muscles to absorb ground-reaction shock. Dr. Neha Gupta (PT) designs individualized, non-impact exercise protocols combined with medical electrotherapy to keep joints moving smoothly and comfortably.`,
    
    whyUsed: {
      conditions: [
        "Knee Osteoarthritis (Grade 1, 2, and 3) with joint line tenderness, crepitation, and stiffness upon waking",
        "Adhesive Capsulitis (Frozen Shoulder) in Freezing, Frozen, or Thawing stages with severe loss of external rotation",
        "Hip Osteoarthritis and trochanteric bursitis affecting walking stride",
        "Subacromial shoulder impingement syndrome and rotator cuff tendinopathy",
        "Ankle, wrist, and thumb CMC joint arthritis resulting from repetitive strain or post-traumatic changes"
      ],
      purpose: "To alleviate joint inflammation, improve capsule elasticity, maintain synovial fluid circulation, restore functional joint range of motion, and offload damaged articular cartilage through targeted muscular strengthening.",
      realisticBenefits: "Enhanced walking endurance, smoother stair climbing, reduced morning stiffness, improved overhead reaching, and delayed or avoided joint replacement surgery.",
      whenFurtherAssessmentNeeded: "Immediate rheumatological or orthopaedic assessment is needed if a joint is acutely red, hot, severely swollen with fever (suspicion of septic arthritis), or in cases of sudden mechanical joint locking or gross structural deformity."
    },

    howItWorks: {
      steps: [
        {
          phase: "Step 1: Goniometric & Functional Joint Evaluation",
          detail: "Precise measurement of active and passive joint angles using clinical goniometers, assessment of joint capsule tightness, and muscle strength testing around the affected joint."
        },
        {
          phase: "Step 2: Deep Thermal & Acoustic Therapy",
          detail: "Application of Shortwave Diathermy (SWD) or therapeutic ultrasound to deeply warm peri-articular connective tissues, enhancing collagen extensibility and reducing chronic pain gating."
        },
        {
          phase: "Step 3: Maitland & Mulligan Joint Mobilization",
          detail: "Gentle manual accessory glides (anterior, posterior, inferior) delivered at specific joint grades to stretch tightened capsular adhesions safely without flaring inflammation."
        },
        {
          phase: "Step 4: Non-Impact Progressive Resistance Training",
          detail: "Targeted isometric and open/closed kinetic chain strengthening for the quadriceps, vastus medialis oblique (VMO), hamstrings, gluteals, or rotator cuff muscles to absorb daily mechanical load."
        },
        {
          phase: "Step 5: Gait & Movement Ergonomics",
          detail: "Instruction on correct foot strike, assistive walking aids if necessary, weight management movement counseling, and joint-protection strategies for daily life."
        }
      ],
      expectations: {
        before: "Wear clothes that allow clear visual access to the joint (shorts for knees, sleeveless tops for shoulders).",
        during: "Thermal therapies feel pleasantly warm and soothing. Joint mobilizations are carefully kept within your comfortable tolerance zone.",
        after: "Joints feel more fluid and less restricted. Following the recommended exercise pacing ensures consistent day-to-day progress."
      }
    },

    equipmentAndTechniques: {
      name: "Shortwave Diathermy (SWD), Therapeutic Ultrasound & Maitland Mobilization",
      description: "Our clinic utilizes high-frequency Shortwave Diathermy (SWD) to generate uniform deep thermal heat throughout deep joint capsules, alongside 1 MHz / 3 MHz therapeutic ultrasound for localized peri-articular tendinitis. Maitland passive joint mobilization techniques are used exclusively by Dr. Neha Gupta (PT) to restore natural glide mechanics.",
      manualAspect: "Hands-on capsular stretching, patellar glides, and progressive therapeutic resistance bands constitute the primary active drivers of joint recovery."
    },

    whoMayBenefit: {
      candidates: [
        "Adults and seniors with knee pain during walking, standing, or climbing stairs",
        "Individuals experiencing progressive shoulder stiffness unable to reach behind their back or comb hair",
        "Active individuals experiencing joint inflammation following sports or physical work"
      ],
      precautionsAndContraindications: "SWD is contraindicated over areas with metallic surgical implants, pacemakers, active tumors, or acute bleeding. Joint mobilizations are avoided during acute inflammatory flares."
    },

    whatPatientsShouldKnow: {
      preparation: "Bring your latest joint X-rays or orthopaedic prescription. Take your regular medications as prescribed.",
      aftercare: "Apply a cold pack if mild warmth occurs after extensive joint stretching. Practice your prescribed home exercises once or twice daily without overexertion.",
      faqs: [
        {
          q: "Can physiotherapy cure knee osteoarthritis?",
          a: "While physiotherapy cannot regrow completely lost cartilage, it effectively strengthens the surrounding muscles, restores joint biomechanics, and reduces joint load so you can walk comfortably and often avoid surgery."
        },
        {
          q: "How long does frozen shoulder take to heal?",
          a: "Frozen shoulder recovery typically progresses over several weeks to months. Regular clinical mobilization and home stretches significantly accelerate transition through the stages and restore full functional reach."
        },
        {
          q: "Should I walk if my knees hurt from arthritis?",
          a: "Yes, low-impact walking on flat surfaces lubricates joint cartilage. However, high-impact activities should be replaced with guided physiotherapy exercises until muscle strength supports the joint."
        }
      ]
    }
  },

  {
    id: "acl-mcl-meniscus",
    name: "ACL / MCL & Meniscus Injuries Physiotherapy",
    category: "SPORTS & LIGAMENT REHABILITATION",
    tagline: "Ligament Tears, Sprains, Meniscal Strains, Tendinitis & Ankle Instability",
    image: kneeArthritisImg,
    imageAlt: "Sports knee ligament rehabilitation, ACL recovery and dynamic stability drills",
    prescribedTherapy: "Neuromuscular Proprioceptive Rehabilitation & Kinesiology Taping",
    machineUsed: "Dynamic Wobble Balance Boards, Cryo-cuff Compression & Theraband Arrays",
    therapyOutcome: "Restores ligamentous knee stability and joint confidence, resolves effusion, and retrains neuromuscular proprioception for a safe return to sports and daily activities.",
    
    introduction: `Ligament injuries such as Anterior Cruciate Ligament (ACL) sprains, Medial Collateral Ligament (MCL) tears, meniscal cartilage injuries, and lateral ankle sprains can instantly compromise joint stability and functional confidence. Whether managed conservatively without surgery or as pre- and post-operative sports rehabilitation, structured physical therapy is vital to restore knee biomechanics, protect secondary joint structures, and rebuild dynamic neuromuscular control. At Tamanya Physio and Health Clinic, our rehabilitation programs combine acute swelling management, progressive range of motion restoration, eccentric muscle strengthening, and joint proprioceptive re-education.`,
    
    whyUsed: {
      conditions: [
        "Grade 1 and Grade 2 ACL and MCL sprains managed conservatively",
        "Post-operative ACL reconstruction rehabilitation (bone-patellar tendon or hamstring autograft)",
        "Degenerative or sports-related partial meniscal tears with joint line pain and clicking",
        "Patellofemoral pain syndrome (runner's knee) and patellar tendinitis (jumper's knee)",
        "Recurrent lateral ankle ligament sprains (ATFL, CFL) and chronic functional ankle instability"
      ],
      purpose: "To control intra-articular effusion, protect healing ligamentous fibers from harmful shear forces, restore terminal knee extension and full flexion, and retrain neuromuscular proprioception to prevent future instability episodes.",
      realisticBenefits: "Restoration of stable weight-bearing, elimination of knee giving-way sensations, safe return to stair climbing and recreational running, and long-term joint health preservation.",
      whenFurtherAssessmentNeeded: "Immediate orthopaedic surgical consultation and MRI imaging are required if the knee gives way uncontrollably during straight-line walking, if the joint is completely locked in a bent position due to a bucket-handle meniscal tear, or following high-velocity trauma with immediate massive hemarthrosis (rapid swelling within 2 hours)."
    },

    howItWorks: {
      steps: [
        {
          phase: "Step 1: Clinical Ligament & Effusion Screening",
          detail: "Dr. Neha Gupta (PT) performs special clinical stress tests including the Lachman test, Anterior Drawer test, Valgus stress test, and McMurray's test to assess ligamentous laxity and joint effusion severity."
        },
        {
          phase: "Step 2: Acute Swelling Control & Range of Motion",
          detail: "Application of therapeutic cryo-compression, gentle lymphatic elevation, and passive terminal extension drills to prevent flexion contractures, which are the most common complication of knee ligament injuries."
        },
        {
          phase: "Step 3: Quadriceps Activation & Patellar Mobilization",
          detail: "Neuromuscular electrical stimulation (NMES) or targeted biofeedback to overcome arthrogenic muscle inhibition (AMI), ensuring the vastus medialis and rectus femoris fire properly."
        },
        {
          phase: "Step 4: Closed-Kinetic Chain Loading & Hamstring Co-activation",
          detail: "Progressive introduction of mini-squats, leg presses, step-ups, and eccentric hamstring curls that naturally pull the tibia backwards, shielding the ACL from anterior shear forces."
        },
        {
          phase: "Step 5: Dynamic Proprioception & Balance Retraining",
          detail: "Training on balance boards, single-leg stance drills, and perturbation training to rebuild sensory mechanoreceptors within the knee joint capsule."
        }
      ],
      expectations: {
        before: "Wear athletic shorts and supportive sports footwear. Bring brace or crutch recommendations from your orthopaedic doctor if applicable.",
        during: "Therapy begins with gentle swelling control and progressive loading. Exercises are carefully graded to avoid joint pain or swelling flare-ups.",
        after: "Follow ice-application guidance if your knee feels warm after advanced loading sessions."
      }
    },

    equipmentAndTechniques: {
      name: "Neuromuscular Electrical Stimulation (NMES), Wobble Boards & Therapeutic Kinesiology Taping",
      description: "Our clinic utilizes electrical stimulation units to reactivate inhibited quadriceps muscle fibers safely, calibrated wobble balance platforms for sensory proprioception retraining, and certified kinesiology taping for joint stabilization and lymphatic drainage during active rehab.",
      manualAspect: "Patellar mobilizations, manual hamstring soft-tissue release, and progressive functional loading drills form the core of ligament rehabilitation."
    },

    whoMayBenefit: {
      candidates: [
        "Recreational athletes recovering from sports-related twisting knee injuries",
        "Patients following ACL or meniscal repair surgery progressing through post-op protocols",
        "Individuals with recurring ankle twists seeking ligament strengthening"
      ],
      precautionsAndContraindications: "Open-kinetic chain knee extensions with heavy ankle weights are strictly avoided in early-phase ACL recovery because they generate anterior tibial shear. All loading adheres to established sports medicine timelines."
    },

    whatPatientsShouldKnow: {
      preparation: "Bring your post-operative surgeon protocol sheet if you recently underwent surgery. Keep your knee brace adjusted properly.",
      aftercare: "Avoid sudden pivots or twisting jumps until full dynamic balance and limb symmetry have been verified by your physiotherapist.",
      faqs: [
        {
          q: "Can a partial ACL or MCL tear heal without surgery?",
          a: "MCL tears have excellent blood supply and frequently heal completely with conservative physical therapy. Many partial ACL tears also achieve full functional stability through high-level neuromuscular rehabilitation."
        },
        {
          q: "Why is achieving full knee extension so important after an ACL injury?",
          a: "Losing even 3 to 5 degrees of knee extension causes an abnormal limp, alters hip biomechanics, increases patellofemoral pressure, and can lead to permanent joint stiffness."
        },
        {
          q: "How long does full recovery take after ACL reconstruction?",
          a: "Basic daily walking without crutches is usually restored in 4 to 6 weeks. Complete sports-readiness and dynamic return-to-play typically requires 6 to 9 months of phased rehabilitation."
        }
      ]
    }
  },

  {
    id: "pre-post-surgery-rehab",
    name: "Pre & Post Surgery Rehabilitation (TKR & THR)",
    category: "SURGICAL REHABILITATION",
    tagline: "Total Knee Replacement (TKR), Total Hip Replacement (THR) & Spine Post-Op Care",
    image: tkrSurgeryImg,
    imageAlt: "Post total knee replacement rehabilitation, gait retraining and knee extension therapy",
    prescribedTherapy: "Continuous Passive Motion (CPM), Cryotherapy & Isometric Activation",
    machineUsed: "Motorized CPM Knee Machine, Cold-Compression Cryo System & Muscle Stimulator",
    therapyOutcome: "Prevents joint stiffness and arthrofibrosis, breaks down surgical scar adhesions, restores full range of motion, and accelerates safe transition to independent walking.",
    
    introduction: `Undergoing major joint replacement surgery such as Total Knee Replacement (TKR) or Total Hip Replacement (THR) is a transformative step toward eliminating severe end-stage arthritic pain. However, surgical success is only half the journey; the final functional outcome depends directly on structured, progressive post-operative rehabilitation. Pre-habilitation before surgery builds muscular reserves, while post-surgical physiotherapy focuses on early edema control, preventing deep vein thrombosis (DVT), achieving 0-degree full extension and 110+ degrees flexion, breaking down surgical scar adhesions, and re-educating a natural walking gait without reliance on walkers.`,
    
    whyUsed: {
      conditions: [
        "Post-operative recovery following unilateral or bilateral Total Knee Replacement (TKR)",
        "Post-operative recovery following Total Hip Replacement (THR) or hemiarthroplasty",
        "Pre-habilitation prior to planned joint replacement to optimize muscle strength and cardiovascular conditioning",
        "Post-surgical recovery following lumbar laminectomy, discectomy, or spinal fusion surgery",
        "Post-fracture open reduction internal fixation (ORIF) joint stiffness and muscular atrophy"
      ],
      purpose: "To safely achieve target surgical range of motion, prevent arthrofibrosis (excessive internal scar tissue), prevent post-operative muscle shutdown, safely transition from walker to cane to unassisted gait, and ensure safe independence in stair navigation and car transfers.",
      realisticBenefits: "Rapid reduction in post-operative swelling, smooth knee bending without sharp restriction, restored hip extension for walking, confident stair climbing, and early return to independent daily life.",
      whenFurtherAssessmentNeeded: "Immediate surgical contact is required if any signs of surgical site infection appear (increasing redness, foul drainage, fever), or signs of Deep Vein Thrombosis (DVT) such as severe localized calf pain, warmth, and marked swelling."
    },

    howItWorks: {
      steps: [
        {
          phase: "Step 1: Early Post-Op Inpatient/Outpatient Evaluation",
          detail: "Dr. Neha Gupta (PT) inspects the surgical incision line, measures active/passive knee flexion and extension angles, checks circulatory status (dorsalis pedis pulse, capillary refill), and screens for DVT risk."
        },
        {
          phase: "Step 2: Circulatory Pumps & Passive Terminal Extension",
          detail: "Intensive ankle pump exercises to encourage venous return, paired with gentle heel-slide extensions. The leg is positioned to ensure full zero-degree extension is achieved early."
        },
        {
          phase: "Step 3: Quadriceps Awakening & Active-Assisted Flexion",
          detail: "Isometric quad sets, straight leg raises, and active-assisted knee flexion over the edge of the therapy plinth to safely stretch the healing anterior surgical capsule."
        },
        {
          phase: "Step 4: Scar Tissue Mobilization & Gait Training",
          detail: "Once the surgical staples or sutures are removed and the incision is fully dry, gentle cross-friction scar mobilization prevents adhesion to underlying deep fascial planes. Progressive gait re-education corrects limping."
        },
        {
          phase: "Step 5: Advanced Functional Strength & Stair Climbing",
          detail: "Step-up drills, stationary cycling, sit-to-stand transitions from standard chairs, and bilateral weight-bearing balance drills."
        }
      ],
      expectations: {
        before: "Take your prescribed post-operative analgesics 30–45 minutes before physiotherapy to ensure comfortable, productive therapy sessions.",
        during: "Gentle stretching of healing tissues requires sustained encouragement, but therapy is always kept within safe, tolerable limits without aggressive forcing.",
        after: "Elevate your operated limb on pillows (under the calf, not under the knee) and apply cold therapy as guided to keep swelling minimal."
      }
    },

    equipmentAndTechniques: {
      name: "Gait Training Aids, Parallel Bars & Clinical Cryo-Compression",
      description: "Our clinic provides dedicated parallel bars, calibrated walking aids, step platforms, and cryo-compression systems designed specifically for post-arthroplasty rehabilitation under continuous clinical supervision.",
      manualAspect: "Patellofemoral joint glides, soft-tissue quadriceps mobilization, and manual resistance exercises are adapted dynamically to your daily healing stage."
    },

    whoMayBenefit: {
      candidates: [
        "Patients discharged from the hospital following Total Knee or Hip Replacement seeking specialized outpatient care",
        "Patients scheduled for joint replacement in the coming weeks who wish to build pre-operative muscle reserves",
        "Individuals experiencing stiffness or a persistent limp months after joint surgery"
      ],
      precautionsAndContraindications: "Posterior-approach Total Hip Replacement (THR) patients must observe strict hip precautions: no hip flexion past 90 degrees, no crossing of the legs (adduction), and no internal rotation of the foot for the first 6–12 weeks to prevent prosthetic dislocation."
    },

    whatPatientsShouldKnow: {
      preparation: "Wear loose, comfortable clothing with easy access to your operated knee or hip. Bring your discharge summary and surgeon's instruction protocol.",
      aftercare: "Perform your prescribed home exercises in short bouts (10–15 minutes, 3 times a day) rather than one exhausting long session.",
      faqs: [
        {
          q: "How soon after knee replacement surgery should physiotherapy begin?",
          a: "In-hospital physiotherapy begins on Day 1 after surgery. Outpatient clinic physiotherapy at Tamanya should begin as soon as you are discharged home and able to travel comfortably."
        },
        {
          q: "Will post-surgery physiotherapy be painful?",
          a: "While gentle discomfort during initial stretching is normal, therapy should never involve excruciating pain. Our gradual, progressive approach prioritizes tissue healing and patient comfort."
        },
        {
          q: "How much knee bend should I achieve after TKR?",
          a: "The standard clinical goal is 0 degrees of full straight extension and 110 to 120 degrees of comfortable flexion, which allows effortless stair climbing and chair sitting."
        }
      ]
    }
  },

  {
    id: "stroke-paralysis-neuro-rehab",
    name: "Paralysis & Stroke Neurological Rehabilitation",
    category: "NEUROLOGICAL REHABILITATION",
    tagline: "Stroke Hemiplegia, Facial Bell's Palsy, Neuromuscular Retraining & Balance",
    image: strokeParalysisImg,
    imageAlt: "Neurological rehabilitation, stroke hemiplegia motor recovery and gait balance retraining",
    prescribedTherapy: "Neuro-Developmental Technique (NDT/Bobath) & Functional Electrical Stimulation",
    machineUsed: "Digital Functional Electrical Stimulator (FES), Tilt Table & Parallel Walk Bars",
    therapyOutcome: "Stimulates neuroplastic motor pathways in the brain, reactivates voluntary movement in hemiplegic limbs, inhibits spasticity, and trains independent standing and walking.",
    
    introduction: `Neurological conditions such as ischemic or hemorrhagic stroke (causing hemiplegia/hemiparesis), facial nerve paralysis (Bell's Palsy), and peripheral nerve injuries present profound challenges to voluntary movement, balance, and independence. The cornerstone of neurological physical therapy is neuroplasticity—the central nervous system's remarkable biological ability to rewire neural pathways, create new synaptic connections, and relearn lost motor patterns through repetitive, goal-oriented, and structured therapeutic practice. At Tamanya Physio and Health Clinic, Dr. Neha Gupta (PT) utilizes Neuro-Developmental Treatment (NDT) principles, neuromuscular electrical stimulation (NMES), and mirror therapy to guide patients systematically from bed mobility to independent walking and functional hand use.`,
    
    whyUsed: {
      conditions: [
        "Hemiplegia and hemiparesis following ischemic or hemorrhagic stroke",
        "Facial nerve paralysis (Bell's Palsy) with inability to close one eye, smile, or hold fluids in the mouth",
        "Parkinsonian gait disturbances, freezing episodes, and postural instability",
        "Post-traumatic peripheral nerve injuries (radial, median, ulnar, or peroneal nerve palsy/foot drop)",
        "Spinal cord injuries and incomplete paraplegia in stable post-acute stages",
        "Balance deficits, sensory ataxia, and frequent fall risk in geriatric neurological patients"
      ],
      purpose: "To break down abnormal synergistic spastic patterns, facilitate normal motor recruitment, prevent joint contractures and muscle shortening, improve trunk and postural control, retrain safe weight-bearing gait, and restore maximum possible independence in daily life.",
      realisticBenefits: "Restored standing balance, progression from wheelchair to walker or independent walking, reduction in abnormal muscle tightness (spasticity), improved shoulder stability preventing subluxation, and recovery of facial muscle symmetry in Bell's palsy.",
      whenFurtherAssessmentNeeded: "Immediate emergency hospital transfer is mandatory if new acute stroke symptoms appear (FAST: Facial drooping, Arm weakness, Speech difficulty, Time to call emergency), sudden severe loss of consciousness, unmanageable blood pressure spikes, or recurring seizures."
    },

    howItWorks: {
      steps: [
        {
          phase: "Step 1: Comprehensive Neurological Functional Assessment",
          detail: "Evaluation of muscle tone using the Modified Ashworth Scale, voluntary motor control staging (Brunnstrom stages), sensory dermatomal mapping, cranial nerve screening, and static/dynamic sitting and standing balance testing."
        },
        {
          phase: "Step 2: Spasticity Inactivation & Passive Joint Preservation",
          detail: "Gentle sustained stretching and positioning to prevent contractures in spastic muscle groups (biceps, wrist flexors, hamstrings, calf muscles), paired with gentle mobilization of the flaccid shoulder to prevent painful inferior subluxation."
        },
        {
          phase: "Step 3: Neuromuscular Electrical Stimulation (NMES)",
          detail: "Application of calibrated electrical pulses to paretic muscles—such as the tibialis anterior to clear the foot during swing phase (preventing foot drop) or facial muscles in Bell's Palsy—to stimulate motor sensory feedback."
        },
        {
          phase: "Step 4: Goal-Oriented Task Practice & Neuro-Developmental Exercises",
          detail: "Repetitive practice of everyday movements including sit-to-stand transitions, weight-shifting on the paretic leg, pelvic control, and task-specific reaching drills using mirror visual feedback."
        },
        {
          phase: "Step 5: Gait Re-education & Caregiver Training",
          detail: "Training on parallel bars with verbal and manual tactile cueing to eliminate circumductory gait patterns, accompanied by hands-on training for family members on safe transfer techniques at home."
        }
      ],
      expectations: {
        before: "Family members or caregivers are encouraged to accompany the patient. Bring any ankle-foot orthosis (AFO), arm sling, or mobility aid currently in use.",
        during: "Therapy sessions are calm, encouraging, and unhurried. Frequent rest intervals prevent central neural fatigue.",
        after: "Consistent practice of simple home transfer drills accelerates neurological rewiring."
      }
    },

    equipmentAndTechniques: {
      name: "Neuromuscular Electrical Stimulation (NMES), Parallel Bars, Mirror Biofeedback & NDT",
      description: "Our clinic is equipped with dedicated neurological stimulation units for targeted motor re-education, sturdy parallel bars for safe supported ambulation, therapy mats for trunk control, and mirror feedback boxes for facial and upper extremity motor retraining.",
      manualAspect: "Neuro-Developmental Treatment (NDT) manual guidance, tactile facilitation of key control points, and specialized caregiver handling techniques."
    },

    whoMayBenefit: {
      candidates: [
        "Stroke survivors seeking structured motor rehabilitation and walking recovery",
        "Patients diagnosed with sudden onset Bell's Palsy seeking facial muscle recovery",
        "Individuals with foot drop or peripheral nerve weakness recovering from trauma"
      ],
      precautionsAndContraindications: "Electrical stimulation is contraindicated over the carotid sinus, active cardiac pacemakers, or areas of severe skin breakdown. Over-exhaustion must be avoided to prevent triggering compensatory spastic patterns."
    },

    whatPatientsShouldKnow: {
      preparation: "Ensure the patient has rested well before the session. Administer prescribed neurological and blood pressure medications on schedule.",
      aftercare: "Maintain proper limb positioning in bed and wheelchair at home using supportive pillows to prevent shoulder subluxation and ankle contracture.",
      faqs: [
        {
          q: "What is the 'golden period' for stroke recovery?",
          a: "The most rapid neurological recovery occurs within the first 3 to 6 months post-stroke. However, neuroplasticity continues for years; consistent, structured physiotherapy can yield meaningful motor improvements even in chronic stroke survivors."
        },
        {
          q: "How does physiotherapy help in Bell's Palsy?",
          a: "Targeted gentle facial stimulation, manual facial massage, and mirror biofeedback exercises prevent facial muscle atrophy, accelerate nerve regeneration, and prevent abnormal nerve cross-wiring (synkinesis)."
        },
        {
          q: "Can a paralyzed limb recover completely?",
          a: "Recovery varies based on stroke size and location. While complete recovery depends on individual neural factors, targeted rehabilitation consistently improves functional use, mobility, and independence."
        }
      ]
    }
  },

  {
    id: "pelvic-floor-rehab",
    name: "Pelvic Floor Rehabilitation",
    category: "SPECIALISED WOMEN'S & PELVIC HEALTH",
    tagline: "Pelvic Muscle Strengthening, Postnatal Recovery, Biofeedback & Tone Normalization",
    image: woImg,
    imageAlt: "Private female pelvic floor physical therapy and core rehabilitation suite",
    prescribedTherapy: "Pelvic Floor Biofeedback & Neuromuscular Re-education",
    machineUsed: "Clinical EMG Surface Biofeedback Monitor & Perineal Re-education Unit",
    therapyOutcome: "Strengthens supportive pelvic floor musculature, halts urinary leakage during coughing or movement, relieves pelvic organ heaviness, and restores core stability.",
    
    introduction: `The pelvic floor is a vital hammock of muscles, ligaments, and connective tissues spanning the base of the pelvis from the pubic bone to the tailbone. These muscles support the bladder, uterus, and bowel, play a central role in urinary and bowel continence, provide foundational lumbo-pelvic core stability, and support intimate health. When these muscles become weakened, stretched, or conversely, hypertonic (chronically tight and spasmed), patients experience distressing symptoms such as stress urine leakage, pelvic organ heaviness, deep pelvic ache, and post-delivery core weakness. At Tamanya Physio and Health Clinic, Dr. Neha Gupta (PT) provides specialized, compassionate, and 100% confidential pelvic floor physical therapy in a dedicated private female consultation suite.`,
    
    whyUsed: {
      conditions: [
        "Stress Urinary Incontinence (leakage during coughing, sneezing, laughing, running, or lifting)",
        "Urge Incontinence and Overactive Bladder (sudden uncontrollable urges to void with frequency)",
        "Postnatal pelvic floor weakness and recovery following vaginal birth or cesarean section",
        "Diastasis Recti (separation of the abdominal wall muscles post-pregnancy)",
        "Mild-to-moderate Pelvic Organ Prolapse (cystocele, rectocele, or uterine descent) managed conservatively",
        "Hypertonic pelvic floor dysfunction, vaginismus, and chronic non-bacterial pelvic pain",
        "Chronic lower back and pelvic girdle pain resistant to conventional back therapy"
      ],
      purpose: "To accurately evaluate pelvic floor muscle tone, strength, endurance, and relaxation capacity; to re-educate proper neuromuscular activation; to normalize intra-abdominal pressure dynamics; and to restore physical confidence without reliance on pads or invasive surgery.",
      realisticBenefits: "Significant reduction or complete resolution of urinary leakage episodes, elimination of pelvic heaviness, safe closure and functional tensioning of abdominal separation, enhanced core support, and pain-free intimacy.",
      whenFurtherAssessmentNeeded: "Immediate referral to a gynecologist, urologist, or uro-surgeon is initiated if there is unexplained post-menopausal vaginal bleeding, severe complete grade 4 organ prolapse protruding beyond the introitus, acute urinary retention, or hematuria (blood in urine)."
    },

    howItWorks: {
      steps: [
        {
          phase: "Step 1: Confidential Health & Bladder History",
          detail: "Dr. Neha Gupta (PT) reviews bladder habits, fluid intake patterns, delivery history, obstetric trauma, chronic coughing, and specific symptom triggers in a private consultation room."
        },
        {
          phase: "Step 2: Non-Invasive External & Core Biomechanical Assessment",
          detail: "Assessment begins with diaphragm breathing evaluation, lumbo-pelvic alignment check, palpation for Diastasis Recti, and external observation of pelvic floor contraction and complete relaxation."
        },
        {
          phase: "Step 3: Neuromuscular Re-education & The Correct 'Kegel'",
          detail: "Over 50% of women perform pelvic contractions incorrectly by bearing down or tensing their gluteals. Patients are guided through precision cueing—lifting inward and upward, coordinated with diaphragmatic exhalation."
        },
        {
          phase: "Step 4: Pressure Management & 'The Knack' Technique",
          detail: "Training patients to pre-contract the pelvic floor immediately before sudden spikes in intra-abdominal pressure (e.g., just before a sneeze, cough, or lifting a child) to eliminate leakage."
        },
        {
          phase: "Step 5: Progressive Core & Functional Integration",
          detail: "Integrating pelvic floor activation into functional movements including squats, lunges, and daily household lifting to ensure lasting automatic protection."
        }
      ],
      expectations: {
        before: "Empty your bladder 15–20 minutes before your appointment. Wear comfortable pants or loose clothing.",
        during: "All evaluations are conducted with the utmost dignity, privacy, and gentleness. Every step is clearly explained before proceeding.",
        after: "You will receive an easy-to-follow, discrete home exercise chart to practice daily in the comfort of your home."
      }
    },

    equipmentAndTechniques: {
      name: "Pressure Biofeedback Guidance, Diaphragmatic Breath Cueing & Pelvic Floor Exercise Protocols",
      description: "Our clinic utilizes non-invasive pressure biofeedback monitors and specialized core exercise equipment designed specifically for pelvic floor and transverse abdominis rehabilitation. No unverified or aggressive machines are used.",
      manualAspect: "Manual pelvic alignment, trigger point release of the obturator internus and gluteal musculature when indicated, and personalized verbal-tactile movement coaching."
    },

    whoMayBenefit: {
      candidates: [
        "Postnatal mothers from 6 weeks onward experiencing leakage, abdominal bulge, or pelvic weakness",
        "Women experiencing urine leakage when sneezing, coughing, or exercising",
        "Individuals with pelvic heaviness or mild prolapse seeking non-surgical management",
        "Women experiencing chronic pelvic tightness or painful intimate exams"
      ],
      precautionsAndContraindications: "Pelvic floor strengthening (Kegel exercises) is strictly contraindicated in hypertonic or non-relaxing pelvic floor conditions (such as vaginismus or chronic pelvic pain syndrome), where the priority is down-training, relaxation, and diaphragmatic lengthening rather than tightening. Professional clinical differentiation is essential."
    },

    whatPatientsShouldKnow: {
      preparation: "You do not need an internal exam if you are not comfortable; extensive functional progress can be achieved through non-invasive external assessment and specialized guidance.",
      aftercare: "Consistency is key. Performing your prescribed pelvic floor contractions 2–3 times a day while seated or resting builds lasting muscle tone within 4–8 weeks.",
      faqs: [
        {
          q: "Is it normal to leak urine after having a baby?",
          a: "While urine leakage is common after childbirth, it is NOT normal or something you have to live with. It indicates pelvic floor neuromuscular dysfunction that responds very successfully to specialized physical therapy."
        },
        {
          q: "What if my pelvic floor is too tight rather than too weak?",
          a: "If your muscles are hypertonic (overly tight), standard Kegel exercises can worsen pain. Dr. Neha Gupta specializes in pelvic down-training, manual relaxation techniques, and diaphragmatic breathing to release chronically tight muscles."
        },
        {
          q: "How long does pelvic floor rehabilitation take to show results?",
          a: "Many patients notice improved bladder control and reduced urgency within 2 to 4 weeks. Full muscle hypertrophy and automatic functional stability typically develop over 8 to 12 weeks of consistent guidance."
        }
      ]
    }
  },

  {
    id: "cupping-therapy",
    name: "Cupping Therapy (Myofascial Decompression)",
    category: "ADVANCED THERAPEUTIC MODALITY",
    tagline: "Myofascial Decompression, Dry Cupping, Kinetic Cupping & Microcirculation",
    image: phyImg,
    imageAlt: "Clinical dry cupping therapy and myofascial decompression applied to back muscles",
    prescribedTherapy: "Medical Negative-Pressure Cupping (Dry & Gliding Hijama Protocol)",
    machineUsed: "Sterilized Medical-Grade Negative Pressure Vacuum Cups & Manual Suction Pump",
    therapyOutcome: "Expands bound fascial layers with negative pressure, increases microvascular perfusion by up to 400%, flushes metabolic waste, and provides instant muscular tension relief.",
    
    introduction: `Cupping Therapy, medically recognized as Myofascial Decompression (MFD), is an evidence-informed therapeutic modality utilized by sports physiotherapists and orthopaedic specialists worldwide. Unlike traditional massage, which applies compressive downward pressure into muscle tissue, cupping utilizes localized negative suction pressure to gently lift the skin, superficial fascia, and deep muscular layers upward. This mechanical decompression expands interfascial spaces, enhances microvascular perfusion, flushes out stagnant metabolic byproducts, and releases stubborn adhesions between muscle fibers. At Tamanya Physio and Health Clinic in Varanasi, Dr. Neha Gupta (PT) administers certified clinical dry and dynamic cupping following strict medical hygiene protocols.`,
    
    whyUsed: {
      conditions: [
        "Chronic muscular tightness and trigger points in the upper back, trapezius, and shoulder blades",
        "Stubborn lower back stiffness, lumbosacral myofascial tightness, and gluteal spasm",
        "Iliotibial (IT) band tightness, hamstring stiffness, and calf tightness in athletes and runners",
        "Restricted fascial mobility following post-injury healing or prolonged postural immobility",
        "Fibrositis and chronic tension knots resistant to conventional massage or heat therapy"
      ],
      purpose: "To decompress bound fascial layers, improve microvascular tissue perfusion, stimulate localized lymphatic drainage, down-regulate hyperactive pain signaling, and accelerate soft-tissue recovery.",
      realisticBenefits: "Immediate sensation of lightness and muscular freedom, expanded range of movement, reduced pain intensity in chronic tight spots, and enhanced circulation in oxygen-depleted muscular zones.",
      whenFurtherAssessmentNeeded: "Cupping is an adjunct modality. If pain originates from spinal nerve root compression (radiculopathy), acute joint ligament tears, or inflammatory autoimmune conditions, comprehensive orthopaedic assessment and medical treatment take priority."
    },

    howItWorks: {
      steps: [
        {
          phase: "Step 1: Clinical Tissue Inspection & Palpation",
          detail: "The therapist palpates for dense fascial restrictions, muscle knots, and skin integrity to determine the precise placement, cup size, and suction intensity required."
        },
        {
          phase: "Step 2: Skin Preparation & Antiseptic Sanitization",
          detail: "The target area is cleaned thoroughly with medical antiseptic. A thin layer of therapeutic hypoallergenic lotion or oil is applied if kinetic (moving) cupping is planned."
        },
        {
          phase: "Step 3: Vacuum Application & Pressure Calibration",
          detail: "Medical-grade sanitized acrylic or silicone suction cups are placed on key myofascial zones. A manual suction pump creates controlled negative pressure, gently drawing the skin and underlying fascia 1–2 cm into the cup."
        },
        {
          phase: "Step 4: Static Retention or Dynamic Fascial Gliding",
          detail: "For static cupping, cups remain stationary for 5 to 8 minutes. For kinetic cupping, the therapist glides the pressurized cup along the longitudinal direction of the muscle fibers, stretching dense fascial planes."
        },
        {
          phase: "Step 5: Cup Removal & Post-Cupping Active Mobility",
          detail: "Pressure is gently released using the valve pin. The area is cleansed, followed by immediate active range of motion exercises to integrate newly freed tissue mobility."
        }
      ],
      expectations: {
        before: "Ensure your skin is clean and free of cuts or severe sunburn. Drink a glass of water before treatment.",
        during: "You will feel a tight, suctioning sensation across the skin that softens into a relaxing, deep-warming ache within 1–2 minutes. It should never feel agonizingly sharp.",
        after: "Temporary circular red, purple, or pink discolored marks (ecchymosis) typically appear. These are harmless capillary dilations, NOT true tissue bruises, and completely fade within 3 to 7 days."
      }
    },

    equipmentAndTechniques: {
      name: "Medical-Grade Vacuum Suction Cups & Manual Calibration Pumps",
      description: "Our clinic utilizes strictly sterilized, medical-grade polycarbonate and silicone suction cup systems with precision one-way pressure release valves. All cups undergo medical-grade disinfectant sterilization between every single patient. Tamanya practices certified dry and dynamic myofascial cupping only; no invasive or unsanitary procedures are performed.",
      manualAspect: "Kinetic cup manipulation along fascial trigger vectors combined with active patient joint movement during decompression."
    },

    whoMayBenefit: {
      candidates: [
        "Office professionals with persistent knotting across the upper shoulders and shoulder blades",
        "Athletes and fitness enthusiasts seeking enhanced muscular recovery and tissue flush",
        "Patients with chronic low back stiffness seeking deep myofascial release"
      ],
      precautionsAndContraindications: "Cupping is strictly contraindicated over open wounds, active skin infections, eczema or psoriasis lesions, directly over varicose veins, in patients with severe bleeding disorders or on high-dose anticoagulant medication, and directly over the abdomen or lower back during pregnancy."
    },

    whatPatientsShouldKnow: {
      preparation: "Wear clothing that allows easy access to the treatment area. Inform the therapist if you have sensitive skin or bruise easily.",
      aftercare: "Keep the cupped area warm and covered for the rest of the day. Avoid cold showers, swimming pools, or intense direct air conditioning for 4–6 hours. Stay well hydrated.",
      faqs: [
        {
          q: "Does cupping therapy hurt?",
          a: "Most patients find cupping deeply relieving. While there is a noticeable pulling or suction sensation during the first minute, it quickly transitions into a pleasant warm release."
        },
        {
          q: "What do the dark circular marks mean?",
          a: "The circular marks represent localized capillary dilation and the release of stagnant cellular fluid from tight tissue. Darker purple marks generally indicate areas of greater chronic restriction. They are painless and resolve completely in a few days."
        },
        {
          q: "How often should I get cupping therapy done?",
          a: "Cupping is typically performed once every 1 to 2 weeks as part of a broader physical therapy and exercise plan, allowing previous marks to fade before re-application."
        }
      ]
    }
  },

  {
    id: "dry-needling-therapy",
    name: "Dry Needling Therapy",
    category: "ADVANCED THERAPEUTIC MODALITY",
    tagline: "Intramuscular Trigger Point Needling, Deep Knot Release & Neuro-Muscular Reset",
    image: neckPainImg,
    imageAlt: "Certified clinical dry needling therapy for deep myofascial trigger point release",
    prescribedTherapy: "Intramuscular Trigger Point Dry Needling & Electro-Needle Therapy",
    machineUsed: "Single-Use Sterile Solid Filiform Needles & Micro-Current Needle Stimulator",
    therapyOutcome: "Deactivates hyperirritable myofascial trigger points via micro-twitch response, resets neuromuscular junction tone, and permanently releases chronic deep muscle knots.",
    
    introduction: `Dry Needling is a specialized, evidence-based clinical physical therapy technique designed specifically for the deactivation of hyperirritable myofascial trigger points—commonly known as deep muscle knots. During sustained postural overload or mechanical injury, taut bands within skeletal muscle develop areas of intense metabolic crisis, characterized by excessive acetylcholine release, local hypoxia, and accumulated inflammatory chemicals that refer persistent ache to distant body parts. Certified Dry Needling Practitioner Dr. Neha Gupta (PT) gently inserts ultra-fine, single-use, sterile filiform needles directly into these trigger points to elicit a local twitch response (LTR), immediately releasing muscular tension, restoring normal muscle fiber length, and promoting rapid tissue healing.`,
    
    whyUsed: {
      conditions: [
        "Active myofascial trigger points in the trapezius, levator scapulae, and rhomboids causing chronic neck and upper back pain",
        "Deep piriformis syndrome causing pseudo-sciatica and buttock pain",
        "Chronic tension-type headaches and cervicogenic headaches originating from suboccipital trigger points",
        "Gluteal, quadriceps, and hamstring trigger points causing knee and hip biomechanical imbalances",
        "Tennis elbow (lateral epicondylalgia) and golfer's elbow resistant to surface massage",
        "Plantar fasciitis and gastrocnemius/soleus calf tightness in runners and active walkers"
      ],
      purpose: "To mechanically disrupt the contracted sarcomeres within a trigger point, elicit a therapeutic local twitch response, wash out localized acidic and nociceptive chemicals (substance P, bradykinin), and reset the neuromuscular junction to its normal resting potential.",
      realisticBenefits: "Rapid elimination of deep, aching muscular knots, immediate improvement in joint range of motion, relief from referred radiating symptoms, and enhanced efficiency of subsequent corrective exercises.",
      whenFurtherAssessmentNeeded: "Dry needling targets myofascial tissue. It is not a substitute for medical evaluation when pain is caused by acute bone fractures, visceral organ pathology, active rheumatoid flares, or progressive spinal cord compression."
    },

    howItWorks: {
      steps: [
        {
          phase: "Step 1: Precision Trigger Point Palpation",
          detail: "Dr. Neha Gupta (PT) meticulously palpates the taut muscular band using flat or pincer palpation, identifying the exact locus that reproduces the patient's familiar pain or referral pattern."
        },
        {
          phase: "Step 2: Antiseptic Skin Preparation",
          detail: "The treatment area is sterilized using clinical isopropyl alcohol wipes. The practitioner wears sterile medical gloves throughout the procedure."
        },
        {
          phase: "Step 3: Gentle Needle Insertion & Guide Tube Technique",
          detail: "A microscopic, hair-thin sterile filiform needle (0.25–0.30mm diameter) encased in a plastic guide tube is placed against the skin and tapped gently through the surface, making initial entry virtually painless."
        },
        {
          phase: "Step 4: Eliciting the Local Twitch Response (LTR)",
          detail: "The needle is directed into the trigger point. When accurate contact is made, the muscle produces an involuntary, brief contraction known as a 'local twitch response.' This twitch signifies the deactivation and mechanical reset of the contracted sarcomere."
        },
        {
          phase: "Step 5: Immediate Removal & Post-Needling Stretch",
          detail: "The needle is gently removed and immediately discarded into a certified sharps container. Gentle direct compression and a light therapeutic stretch are applied to the muscle."
        }
      ],
      expectations: {
        before: "Eat a light snack prior to your session to avoid dizziness. Stay relaxed; dry needling needles are solid and significantly thinner than hollow injection needles.",
        during: "The skin tap is barely perceptible. When the local twitch response occurs, you will feel a momentary deep ache, dull cramp, or brief twitch lasting just one second.",
        after: "A post-treatment muscular ache similar to a strenuous workout is normal for 24–48 hours, followed by substantial relief and looseness."
      }
    },

    equipmentAndTechniques: {
      name: "Sterile Single-Use Filiform Needles & Certified Intramuscular Techniques",
      description: "Our clinic uses premium, blister-packed, single-use surgical stainless-steel filiform needles. Each needle is used once on a single site and immediately disposed of in a puncture-proof biohazard sharps container. No medication or liquid is injected (hence 'dry' needling). Dr. Neha Gupta holds certified CDNP credentials.",
      manualAspect: "Precise anatomical palpatory location, depth control, and immediate post-needling passive stretching."
    },

    whoMayBenefit: {
      candidates: [
        "Individuals with stubborn muscle knots that do not release with conventional massage or heat",
        "Athletes seeking rapid deactivation of sports-induced trigger points",
        "Patients with chronic neck, shoulder, or buttock pain with trigger-point referral patterns"
      ],
      precautionsAndContraindications: "Dry needling is strictly avoided in patients with severe needle phobia, active systemic infections, local skin lesions, severe lymphedema, uncontrolled bleeding disorders, or those taking high doses of blood-thinners. Extra anatomical care and shallow needling are practiced around the thoracic wall."
    },

    whatPatientsShouldKnow: {
      preparation: "Wear loose clothing allowing easy access to the muscle. Inform the practitioner if you feel anxious or lightheaded at any point.",
      aftercare: "Apply moist heat (a warm bath or heating pad) to the treated area in the evening. Perform gentle, slow stretches and drink plenty of water.",
      faqs: [
        {
          q: "Is dry needling the same as acupuncture?",
          a: "No. While both use fine solid needles, acupuncture is based on traditional Chinese energy meridians. Dry needling is a Western medical technique rooted in modern neuroanatomy, orthopaedic assessment, and myofascial trigger-point science."
        },
        {
          q: "Does dry needling hurt?",
          a: "Initial needle insertion is virtually painless because the needles are hair-thin. You will feel a brief deep cramp or dull ache when the muscle twitches, which lasts only a second and confirms the knot has released."
        },
        {
          q: "How many dry needling sessions are needed?",
          a: "Many patients experience significant relief after just 1 to 3 sessions. When combined with corrective posture exercises, trigger points rarely return to the same severity."
        }
      ]
    }
  }
];
