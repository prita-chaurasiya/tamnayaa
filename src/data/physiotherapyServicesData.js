// Physiotherapy Services Detailed Clinical Educational Knowledge Base
// Verified official clinical data for Tamanya Physio and Health Clinic, Varanasi
// Led by Dr. Neha Gupta (PT), MPT (Ortho), BPT, DPT, CMT, CDNP, CCT, CTT, NDT

import backPainImg from '../assets/conditions/back_pain.jpg';
import neckPainImg from '../assets/conditions/neck_pain.jpg';
import kneeArthritisImg from '../assets/conditions/knee_arthritis.jpg';
import tkrSurgeryImg from '../assets/conditions/tkr_surgery.jpg';
import strokeParalysisImg from '../assets/conditions/stroke_paralysis.jpg';
import sportsInjuriesImg from '../assets/conditions/sports_injuries.jpg';
import parkinsonsImg from '../assets/conditions/parkinsons_rehab.jpg';
import bellsPalsyImg from '../assets/conditions/bells_palsy.jpg';
import spinalCordImg from '../assets/conditions/spinal_cord_injury.jpg';
import ultrasoundLaserImg from '../assets/conditions/ultrasound_laser.jpg';
import iftTensSwdImg from '../assets/conditions/ift_tens_swd.jpg';
import spinalTractionImg from '../assets/conditions/spinal_traction.jpg';
import iastmMfrImg from '../assets/conditions/iastm_mfr_taping.jpg';
import steamTherapyImg from '../assets/conditions/steam_therapy.jpg';
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
  },

  {
    id: "sports-injuries",
    name: "Sports Injuries Rehabilitation (Sprain, Strain & Ligament Care)",
    category: "SPORTS MEDICINE & MUSCULOSKELETAL",
    tagline: "Acute Sprain, Strain, Ligament Tears & Return-to-Play Athletic Conditioning",
    image: sportsInjuriesImg,
    imageAlt: "Sports injury physical therapy and athletic rehabilitation at Tamanya",
    prescribedTherapy: "Progressive Kinetic Loading, Cryo-Compression, IFT & Proprioceptive Drills",
    machineUsed: "Multi-Frequency Ultrasound, Cold-Compression Wrap & Calibrated Balance Boards",
    therapyOutcome: "Accelerates soft-tissue remodeling, restores ligamentous stability, eliminates chronic joint laxity, and facilitates safe, re-injury-resistant return to sports.",
    
    introduction: `Sports and high-velocity physical activities expose muscles, tendons, and ligaments to extreme tensile loads, frequently resulting in acute ankle sprains, hamstring strains, quadriceps contusions, rotator cuff impingements, and patellofemoral tracking dysfunctions. Inadequate rehabilitation often converts acute athletic injuries into chronic joint instability and recurrent tears. At Tamanya Physio and Health Clinic in Pandeypur, Varanasi, sports rehabilitation led by Dr. Neha Gupta (PT) bridges the gap between acute tissue healing and peak athletic performance. Our structured phases progress from initial acute edema and pain management through eccentric tissue re-education, neuromuscular control, and multi-directional return-to-sport agility conditioning.`,
    
    whyUsed: {
      conditions: [
        "Grade I & II ankle sprains (anterior talofibular and calcaneofibular ligament sprains)",
        "Hamstring, groin, quadriceps, and calf muscle strains and micro-tears",
        "Rotator cuff tendinopathy, shoulder impingement, and thrower's shoulder pain",
        "Patellar tendinitis (jumper's knee), shin splints, and Achilles tendinopathy",
        "Tennis elbow (lateral epicondylitis) and golfer's elbow (medial epicondylitis)",
        "Post-traumatic joint stiffness, proprioceptive deficits, and recurrent ankle giving-way"
      ],
      purpose: "To accelerate physiological soft-tissue collagen realignment along lines of stress, resolve localized traumatic hematoma and edema, restore full sport-specific range of motion, and rebuild high-velocity eccentric strength and reactive balance.",
      realisticBenefits: "Rapid reduction in acute swelling and throbbing, safe early weight-bearing, elimination of compensation patterns in neighboring joints, and scientifically verified return-to-activity timelines.",
      whenFurtherAssessmentNeeded: "High-grade injuries with visible joint deformity, complete tendon rupture (such as full Achilles snap), inability to bear any weight immediately post-injury with bony tenderness (Ottawa ankle rule), or mechanical knee locking require urgent orthopaedic evaluation and MRI imaging."
    },

    howItWorks: {
      steps: [
        {
          phase: "Step 1: Acute Protection, Cryo-Compression & Pain Control",
          detail: "Application of PEACE & LOVE clinical principles, combining targeted cryotherapy, gentle lymphatic elevation, and high-frequency TENS/IFT to minimize secondary hypoxic tissue injury without suppressing natural healing."
        },
        {
          phase: "Step 2: Early Pain-Free Range & Passive Mobilization",
          detail: "Initiating gentle active-assisted range of motion and joint accessory glides to prevent intra-articular adhesion formation and muscle atrophy."
        },
        {
          phase: "Step 3: Progressive Eccentric Loading & Tissue Remodeling",
          detail: "Graduated tensile loading across the injured musculo-tendinous unit to stimulate type-I collagen synthesis, rebuilding mechanical tensile tolerance."
        },
        {
          phase: "Step 4: Dynamic Proprioception & Agility Retraining",
          detail: "Utilizing wobble boards, BOSU spheres, and multi-planar perturbation drills to re-educate mechanoreceptors and subconscious joint protective reflexes."
        },
        {
          phase: "Step 5: Sport-Specific Conditioning & Return-to-Play Testing",
          detail: "Functional hopping tests, deceleration drills, cutting maneuvers, and personalized athletic warm-up blueprint ensuring zero re-injury risk."
        }
      ],
      expectations: {
        before: "Wear athletic sports attire and running shoes. Bring relevant MRI scans or previous X-rays if available.",
        during: "Therapy combines soothing electro-modalities with progressive active exercises tailored to your current healing phase.",
        after: "Mild muscular fatigue is normal as neglected stabilizing muscles are activated. Ice therapy protocols will be advised for post-session home care."
      }
    },

    equipmentAndTechniques: {
      name: "Dynamic Proprioceptive Platforms, Cryo-Wraps & Therapeutic Laser",
      description: "Our clinic utilizes digital electro-stimulation, targeted therapeutic ultrasound, elastic resistance arrays, and variable-density balance platforms designed specifically for athletic conditioning.",
      manualAspect: "Transverse friction massage (Cyriax technique), Mulligan joint mobilizations with movement (MWM), and sport-specific myofascial trigger deactivation."
    },

    whoMayBenefit: {
      candidates: [
        "Competitive athletes, cricket players, runners, and badminton enthusiasts with acute sprains or strains",
        "Gym-goers and fitness enthusiasts experiencing shoulder or knee impingement during workouts",
        "Individuals with recurring ankle twists or persistent post-exercise muscle soreness"
      ],
      precautionsAndContraindications: "High-velocity explosive loading is strictly contraindicated during the acute inflammatory phase (first 48–72 hours). Open fractures, complete tendon avulsions, and unreduced joint dislocations require urgent surgical referral."
    },

    whatPatientsShouldKnow: {
      preparation: "Do not take high-dose NSAID painkillers immediately prior to testing as they may mask important clinical pain-provocation thresholds.",
      aftercare: "Follow prescribed home elevation and active movement intervals. Avoid early aggressive stretching of freshly torn muscle fibers.",
      faqs: [
        {
          q: "Should I rest completely or keep moving after a muscle strain?",
          a: "Absolute immobilization beyond 48 hours is detrimental to tissue healing. Early, protected, pain-free active movement promotes organized collagen alignment and prevents debilitating scar adhesions."
        },
        {
          q: "How soon can I return to running or playing cricket?",
          a: "Return timelines depend on injury grade: mild sprains take 1–3 weeks, whereas moderate tears require 4–8 weeks. We clear athletes only after passing objective functional stability tests."
        },
        {
          q: "Why does my ankle feel weak even months after a sprain?",
          a: "Ligament sprains damage sensory mechanoreceptors, destroying balance reflexes. Dedicated physiotherapy restores proprioceptive balance, preventing chronic instability."
        }
      ]
    }
  },

  {
    id: "parkinsons-disease",
    name: "Parkinson’s Disease Neurological Rehabilitation",
    category: "NEUROLOGICAL REHABILITATION",
    tagline: "Gait Initiation, Tremor Management, Balance & Functional Independence",
    image: parkinsonsImg,
    imageAlt: "Parkinson's neurological physiotherapy and balance gait training",
    prescribedTherapy: "Large-Amplitude Movement Therapy (LSVT-inspired), Auditory Cueing & Neuro-Balance",
    machineUsed: "Biofeedback Balance Platforms, Laser-Guided Gait Walkers & Dynamic Agility Ladders",
    therapyOutcome: "Improves stride length, reduces freezing of gait episodes, enhances postural equilibrium, prevents recurrent falls, and maintains daily functional autonomy.",
    
    introduction: `Parkinson’s Disease is a progressive neurodegenerative disorder caused by dopamine depletion in the substantia nigra, leading to classic motor symptoms including resting tremor, muscle rigidity (lead-pipe or cogwheel), bradykinesia (slowness of movement), and severe postural instability. Without targeted neuro-rehabilitation, individuals develop a characteristic festinating gait, frequent episodes of 'freezing', and a high risk of debilitating fall-related fractures. At Tamanya Physio and Health Clinic, Dr. Neha Gupta (PT) implements specialized neuroplasticity-driven rehabilitation protocols designed to overcome basal ganglia deficit. By utilizing external sensory cueing (visual lasers and metronomic rhythmic sounds) and high-amplitude movement retraining, we stimulate alternative cortical pathways to restore smooth, confident walking and daily self-reliance.`,
    
    whyUsed: {
      conditions: [
        "Idiopathic Parkinson’s Disease across Hoehn & Yahr Stages I through IV",
        "Bradykinesia presenting as slowness in rising from chairs, turning in bed, or buttoning shirts",
        "Freezing of Gait (FOG) where feet feel glued to the floor when passing through doorways or turning",
        "Postural stoop (camptocormia) and thoracic kyphosis affecting breathing and balance",
        "Cogwheel muscle rigidity causing persistent shoulder, neck, and limb stiffness",
        "Balance deficits and fear of falling limiting community ambulation"
      ],
      purpose: "To exploit brain neuroplasticity through high-intensity, large-amplitude motor retraining, teach compensatory cognitive sensory strategies for overcoming movement freezing, and preserve joint range of motion against progressive rigidity.",
      realisticBenefits: "Noticeable increase in stride length, faster and safer sit-to-stand transitions, reduced frequency of freezing episodes, lowered fall incidence, and enhanced self-confidence in social settings.",
      whenFurtherAssessmentNeeded: "Rapidly progressive atypical Parkinsonism (such as MSA or PSP) exhibiting early severe autonomic failure, supranuclear gaze palsy, or severe unprovoked falls in the first year requires close neurologist coordination."
    },

    howItWorks: {
      steps: [
        {
          phase: "Step 1: Neuro-Functional Mobility & Fall Risk Screening",
          detail: "Comprehensive baseline evaluation including Timed Up and Go (TUG), Berg Balance Scale, Unified Parkinson's Disease Rating Scale motor check, and gait velocity assessment."
        },
        {
          phase: "Step 2: High-Amplitude Movement Retraining",
          detail: "Exaggerated, large-scale physical movements designed to recalibrate the brain's internal perception of movement amplitude, combating bradykinesia."
        },
        {
          phase: "Step 3: External Sensory Cueing (Visual & Auditory)",
          detail: "Training with floor visual grid lines, laser floor pointers, and rhythmic metronomic beats that bypass impaired basal ganglia loops, triggering smooth automated strides."
        },
        {
          phase: "Step 4: Axial Trunk Rotation & Rigidity Dissociation",
          detail: "Mobilization of the thoracic spine and pelvis to restore counter-rotation of shoulders and hips during normal walking, relieving rigid block turning."
        },
        {
          phase: "Step 5: Dynamic Dual-Task & Fall Prevention Drills",
          detail: "Simultaneous cognitive and physical tasks (e.g., walking while counting backward or carrying an object) to build real-world resilience."
        }
      ],
      expectations: {
        before: "Schedule sessions during your 'ON' medication phase (typically 45–60 minutes after taking levodopa) when your physical responsiveness is optimal.",
        during: "Exercises are dynamic, vocal, and energetically guided. You will be encouraged to step big, reach big, and speak loudly.",
        after: "Patients frequently experience a feeling of lightness and ease of walking immediately following therapy."
      }
    },

    equipmentAndTechniques: {
      name: "Biofeedback Balance Systems, Laser Gait Devices & Neuro-Agility Rigs",
      description: "Our clinic provides calibrated sensory-motor equipment, step ladders, weighted resistance spheres, and stable parallel bar setups ensuring maximum safety during balance challenge.",
      manualAspect: "Gentle neuro-developmental facilitation (NDT), rhythmic trunk rotation techniques, and passive pectoralis and hamstring stretch therapy."
    },

    whoMayBenefit: {
      candidates: [
        "Individuals diagnosed with Parkinson's Disease seeking to maintain independence and prevent mobility decline",
        "Seniors experiencing slow walking, shuffling steps, or balance wobbles",
        "Patients recovering from a fall seeking to regain walking confidence"
      ],
      precautionsAndContraindications: "Orthostatic hypotension (sudden blood pressure drop upon standing) must be monitored closely. Fall safety harnesses are used during challenging balance exercises."
    },

    whatPatientsShouldKnow: {
      preparation: "Take your prescribed dopaminergic medication exactly as directed by your neurologist so you are in your peak 'ON' window during therapy.",
      aftercare: "Consistency is vital. A daily 20-minute home amplitude routine reinforces newly forged neuro-pathways.",
      faqs: [
        {
          q: "Can physiotherapy stop Parkinson's disease progression?",
          a: "While physiotherapy does not halt the underlying cellular dopamine loss, high-intensity exercise is scientifically proven to produce neuroprotective neurotrophins (BDNF), significantly slowing functional decline."
        },
        {
          q: "What should I do when my feet 'freeze' and won't move?",
          a: "Never force yourself to push forward. Stop, take a deep breath, rock your weight from side to side, and imagine stepping over an imaginary laser beam or ruler on the floor."
        },
        {
          q: "How often should Parkinson's patients undergo clinical therapy?",
          a: "We recommend an intensive initial block of 3 to 4 sessions weekly for 4 weeks, followed by periodic maintenance check-ins and structured home regimens."
        }
      ]
    }
  },

  {
    id: "bells-palsy",
    name: "Bell’s Palsy & Facial Nerve Rehabilitation",
    category: "NEUROLOGICAL REHABILITATION",
    tagline: "Facial Symmetry, Neuromuscular Facilitation & Synkinesis Prevention",
    image: bellsPalsyImg,
    imageAlt: "Bell's palsy facial neuromuscular re-education and rehabilitation",
    prescribedTherapy: "Microcurrent Neuromuscular Facilitation, Precision Facial Retraining & Kinesio Taping",
    machineUsed: "Precision Low-Intensity Facial Muscle Stimulator & Therapeutic Soft-Touch Probe",
    therapyOutcome: "Facilitates cranial nerve VII axonal regeneration, restores blink reflex, prevents pathological synkinesis, and brings back symmetric facial expression.",
    
    introduction: `Bell’s Palsy is an acute, unilateral peripheral facial nerve (Cranial Nerve VII) paralysis resulting from viral-induced inflammation, edema, and compression of the nerve within the narrow Fallopian canal. Patients suddenly experience complete inability to close the eye, drooping of the mouth corner, drooling, loss of taste on the anterior two-thirds of the tongue, and difficulty speaking or chewing. Without expert physiotherapy, recovery can be complicated by aberrant nerve re-wiring (synkinesis), where involuntary eye blinking causes the mouth to twitch or vice versa. At Tamanya Physio and Health Clinic, Dr. Neha Gupta (PT) applies meticulous, evidence-based facial neuromuscular retraining, gentle low-intensity electrical facilitation, and selective manual muscle massage to promote correct axonal reinnervation and restore natural facial expression.`,
    
    whyUsed: {
      conditions: [
        "Acute unilateral Bell’s Palsy following medical corticosteroid initiation",
        "Incomplete eyelid closure (lagophthalmos) posing corneal drying and ulceration risk",
        "Facial muscle flaccidity, drooping oral commissure, and speech articulation difficulty",
        "Ramsay Hunt Syndrome facial weakness (post-herpetic facial nerve recovery)",
        "Chronic post-paralysis facial tightness, hemifacial spasm, and synkinesis"
      ],
      purpose: "To maintain muscle trophism during the denervation phase, provide sensory feedback that prevents abnormal brain motor mapping, safely stimulate paretic muscles without triggering spasms, and retrain coordinated facial expressions.",
      realisticBenefits: "Progressive restoration of voluntary eye closure, restored symmetry in smiling and whistling, improved speech clarity, and prevention of unsightly facial contractures.",
      whenFurtherAssessmentNeeded: "Immediate medical check is essential if facial weakness is accompanied by limb weakness, slurred speech, double vision, or severe headache to rule out an acute ischemic cerebrovascular accident (stroke)."
    },

    howItWorks: {
      steps: [
        {
          phase: "Step 1: Sunnybrook & House-Brackmann Facial Grading",
          detail: "Precise photographic and functional documentation of resting facial symmetry, voluntary movement of each muscle group (frontalis, orbicularis oculi, zygomaticus, orbicularis oris), and assessment of early synkinesis."
        },
        {
          phase: "Step 2: Eye Protection & Taping Protocol",
          detail: "Guidance on daytime lubricating eye drops, nocturnal moisture chambers, and gentle eyelid kinesio taping to protect the delicate cornea from exposure keratitis."
        },
        {
          phase: "Step 3: Gentle Micro-Current / Galvanic Stimulation",
          detail: "Delicate, low-threshold current applied precisely to motor points of individual facial muscles, preserving contractile proteins until nerve conduction resumes."
        },
        {
          phase: "Step 4: Mirror Biofeedback & Neuromuscular Retraining",
          detail: "Guided slow-paced, small-amplitude facial expressions performed in front of a mirror with manual assistance to re-train correct cortical motor representations."
        },
        {
          phase: "Step 5: Synkinesis Inhibition & Gentle Soft-Tissue Release",
          detail: "Intra-oral and extra-oral myofascial release of tight buccinator and masseter muscles, accompanied by suppression drills preventing involuntary co-contractions."
        }
      ],
      expectations: {
        before: "Ensure your face is clean and free of makeup or face creams. Bring doctor's prescription and medical notes.",
        during: "Stimulation feels like a gentle, rhythmic pulsing or light flutter. Facial massage is calming and therapeutic.",
        after: "Avoid aggressive chewing of hard foods on the affected side. Practice your assigned home mirror exercises twice daily."
      }
    },

    equipmentAndTechniques: {
      name: "Low-Intensity Diagnostic Facial Stimulator & Biofeedback Mirrors",
      description: "Our clinic utilizes specialized neurological stimulators featuring precise interrupted galvanic and surged faradic currents calibrated specifically for the delicate facial musculature.",
      manualAspect: "Intra-oral pterygoid release, gentle effleurage, digital eyelid approximation, and neuromuscular facilitation tapping."
    },

    whoMayBenefit: {
      candidates: [
        "Patients diagnosed with acute or subacute Bell’s Palsy seeking maximum cosmetic and functional recovery",
        "Individuals with longstanding facial asymmetry or uncomfortable eye-mouth co-movements (synkinesis)",
        "Post-surgical facial nerve decompression patients requiring structured rehabilitation"
      ],
      precautionsAndContraindications: "Excessively strong electrical stimulation is strictly avoided as it can provoke mass action, severe contracture, and irreversible synkinesis. Eye protection remains the utmost clinical priority."
    },

    whatPatientsShouldKnow: {
      preparation: "Protect your eye from direct dust, wind, and air conditioner vents using sunglasses during the daytime.",
      aftercare: "Avoid forcefully scrunching your face or chewing gum excessively, as forceful over-activation promotes abnormal nerve sprouting.",
      faqs: [
        {
          q: "How long does Bell's palsy take to heal?",
          a: "Most patients experience the first signs of nerve recovery within 2 to 3 weeks, with substantial recovery occurring over 2 to 6 months. Early physical therapy significantly improves overall cosmetic outcomes."
        },
        {
          q: "Will electric stimulation hurt my face?",
          a: "No. Facial currents are extremely gentle, calibrated to produce subtle muscle twitches without sharp sensation or discomfort."
        },
        {
          q: "What causes abnormal eye twitching when I smile (synkinesis)?",
          a: "When the recovering facial nerve regenerates, nerve fibers may mistakenly cross-wire to neighboring muscles. Our specialized retraining exercises suppress this aberrant cross-talk."
        }
      ]
    }
  },

  {
    id: "spinal-cord-injury",
    name: "Spinal Cord Injury (SCI) & Paralysis Rehabilitation",
    category: "NEUROLOGICAL REHABILITATION",
    tagline: "Sensory-Motor Retraining, Spasticity Control, Wheelchair Mobility & Standing",
    image: spinalCordImg,
    imageAlt: "Spinal cord injury neuro-rehabilitation and standing table therapy",
    prescribedTherapy: "Neuro-Developmental Facilitation, Tilt-Table Weight Bearing & Spasticity Management",
    machineUsed: "Motorized Hydraulic Tilt Table, Functional Electrical Stimulation & Parallel Bars",
    therapyOutcome: "Preserves bone mineral density through assisted standing, optimizes preserved motor function, manages muscle spasticity, and trains functional transfers.",
    
    introduction: `Spinal Cord Injury (SCI)—whether paraplegia resulting from thoracic/lumbar trauma or tetraplegia/quadriplegia resulting from cervical trauma—represents one of the most profound physical challenges an individual can face. Secondary complications such as severe muscle spasticity, joint contractures, deep vein thrombosis, pressure ulcers, heterotopic ossification, and rapid bone demineralization pose continuous threats to health. At Tamanya Physio and Health Clinic in Varanasi, Dr. Neha Gupta (PT) delivers comprehensive, empathetic neuro-rehabilitation for incomplete and complete spinal cord injuries. Our evidence-backed clinical protocols utilize computerized tilt-table verticalization, neuro-developmental facilitation, wheelchair transfer coaching, and functional electrical stimulation (FES) to maximize independence and elevate quality of life.`,
    
    whyUsed: {
      conditions: [
        "Incomplete (ASIA B, C, D) and Complete (ASIA A) Spinal Cord Injuries following trauma or spine surgery",
        "Paraplegia with lower limb paralysis and trunk postural instability",
        "Tetraplegia / Quadriplegia with upper and lower limb motor-sensory deficits",
        "Severe muscular spasticity, clonus, and hyperreflexia impeding functional positioning",
        "Orthostatic intolerance following prolonged recumbency or spinal shock",
        "Neurogenic bowel and bladder management support through core and pelvic biomechanics"
      ],
      purpose: "To safely verticalize the body to stimulate osteogenesis and cardiovascular reflex adaptations, activate surviving neural pathways through repetitive task-oriented therapy, prevent irreversible joint contractures, and empower patients with master-level transfer techniques.",
      realisticBenefits: "Improved head and trunk control, safer transfers between bed and wheelchair, reduction in painful flexor/extensor spasms, preserved joint flexibility, and enhanced cardiovascular stamina.",
      whenFurtherAssessmentNeeded: "Sudden autonomic dysreflexia in lesions at or above T6—characterized by severe pounding headache, profuse sweating above the injury level, hypertension, and bradycardia—is a medical emergency requiring immediate sitting upright, checking catheter patency, and physician intervention."
    },

    howItWorks: {
      steps: [
        {
          phase: "Step 1: ASIA Neurological Classification & Sensory-Motor Mapping",
          detail: "Standardized evaluation of motor key muscles (C5 through S1), sensory dermatomes (pin-prick and light touch), spinal cord functional level, and passive range of all major joints."
        },
        {
          phase: "Step 2: Progressive Tilt-Table Verticalization",
          detail: "Gradual motorized elevation (from 20° to 70°) with continuous blood pressure and pulse oximetry monitoring to retrain the cardiovascular system against postural hypotension."
        },
        {
          phase: "Step 3: Passive Range of Motion & Spasticity Modulation",
          detail: "Slow, sustained mechanical stretching of hamstrings, adductors, and heel cords combined with sustained pressure to inhibit hyperactive stretch reflexes."
        },
        {
          phase: "Step 4: Functional Electrical Stimulation (FES) & Motor Re-Education",
          detail: "Application of coordinated multi-channel electrical currents to quadriceps, dorsiflexors, and triceps to maintain muscle bulk and facilitate voluntary motor efforts."
        },
        {
          phase: "Step 5: Mat Activities, Core Balance & Transfer Mastery",
          detail: "Rolling, prone-on-elbows, long-sitting balance, sliding board transfers, and wheelchair propulsion skills taught in an accessible environment."
        }
      ],
      expectations: {
        before: "Ensure empty bladder or check catheter bag before starting verticalization. Wear supportive, comfortable clothing with non-slip socks.",
        during: "Blood pressure is monitored at every degree increase on the tilt table. Transfers are executed with calm, professional assistance.",
        after: "Skin over bony prominences (sacrum, ischial tuberosities, heels) is routinely inspected after each session."
      }
    },

    equipmentAndTechniques: {
      name: "Motorized Tilt Table, Parallel Bars, Transfer Boards & FES Units",
      description: "Our clinic is equipped with heavy-duty motorized tilt tables with chest and knee safety strapping, calibrated bodyweight-support harnesses, and clinical electrotherapy arrays.",
      manualAspect: "Bobath/NDT neuro-facilitation, prolonged rhythmic rotational stretching, and tactile kinesthetic cueing."
    },

    whoMayBenefit: {
      candidates: [
        "Individuals recovering from traumatic spinal injury, motor vehicle collisions, or falls",
        "Patients post spinal decompressive laminectomy or stabilization surgery with residual weakness",
        "Long-term wheelchair users seeking to prevent joint contractures and maintain physical vitality"
      ],
      precautionsAndContraindications: "Unstable spinal column fractures without orthopaedic clearance, acute deep vein thrombosis (DVT), severe unmanaged osteoporosis, and active sacral pressure ulcers grade III/IV require medical clearance before verticalization."
    },

    whatPatientsShouldKnow: {
      preparation: "Wear compression stockings or abdominal binders if prescribed by your neurosurgeon to support blood pressure during standing.",
      aftercare: "Maintain strict 2-hour pressure relief schedules at home. Perform prescribed daily passive range of motion with family members.",
      faqs: [
        {
          q: "Why is tilt-table standing so important for paralyzed patients?",
          a: "Human bones need gravitational weight-bearing to retain calcium. Tilt-table standing prevents osteoporosis, improves kidney filtration, stimulates bowel motility, and prevents joint stiffness."
        },
        {
          q: "Can an incomplete spinal cord injury recover walking ability?",
          a: "Incomplete injuries (where some sensory or motor pathways remain intact) possess significant neuroplastic potential. Intensive task-oriented rehabilitation can help many patients achieve functional household or community ambulation."
        },
        {
          q: "How does therapy help control painful muscle spasms?",
          a: "We combine slow sustained stretching, thermal packs, functional positioning, and reciprocal inhibition techniques to calm hyperactive spinal reflex loops."
        }
      ]
    }
  },

  {
    id: "ultrasonic-laser-therapy",
    name: "Ultrasonic Therapy & High-Intensity Laser Therapy",
    category: "ADVANCED ELECTROTHERAPY",
    tagline: "Deep Acoustic Micromassage, Photobiomodulation & Rapid Cellular Healing",
    image: ultrasoundLaserImg,
    imageAlt: "Ultrasound and laser electrotherapy for deep musculoskeletal pain",
    prescribedTherapy: "Multi-Depth Dual-Frequency Ultrasound & Therapeutic Class IV Laser",
    machineUsed: "1 MHz / 3 MHz Dual Ultrasound Transducer & High-Intensity Photobiomodulation Unit",
    therapyOutcome: "Delivers deep acoustic micromassage to resolve fibrotic adhesions, stimulates mitochondrial ATP synthesis, accelerates collagen remodeling, and alleviates deep inflammatory pain.",
    
    introduction: `Modern electrotherapy has evolved far beyond superficial heat pads. At Tamanya Physio and Health Clinic, Ultrasonic Therapy and Laser Therapy (Photobiomodulation) represent two of our premier non-invasive modalities for deep-seated soft-tissue pathology. Ultrasonic therapy delivers high-frequency longitudinal acoustic soundwaves (1 MHz for deep structures up to 5cm, and 3 MHz for superficial tissues up to 2cm) that generate micro-cavitation and acoustic streaming, drastically accelerating cellular nutrient exchange and dissolving dense scar tissue. Therapeutic laser therapy floods injured tissues with coherent photon energy, absorbed directly by cytochrome c oxidase within cell mitochondria. This photobiological reaction drives massive ATP energy synthesis, triggers nitric oxide release, and switches off inflammatory prostaglandins, offering rapid relief for chronic tendinitis, arthritis, and ligament sprains.`,
    
    whyUsed: {
      conditions: [
        "Chronic knee osteoarthritis, retrocalcaneal bursitis, and trochanteric bursitis",
        "Calcific shoulder tendinitis, supraspinatus tears, and frozen shoulder capsulitis",
        "Plantar fasciitis, heel spurs, and persistent Achilles tendinopathy",
        "Chronic muscle knots, deep fascial scar adhesions, and post-surgical keloid stiffness",
        "Carpal tunnel syndrome, wrist tenosynovitis (De Quervain's), and lateral epicondylitis"
      ],
      purpose: "To accelerate biological tissue repair at the cellular and mitochondrial level, enhance local microvascular perfusion, break down cross-linked fibrotic scar tissue, and provide drug-free pain relief for deep joint and tendon structures.",
      realisticBenefits: "Rapid reduction in localized swelling and sharp morning stiffness, restored pain-free tendon gliding, decreased inflammatory biomarker activity, and accelerated functional recovery times.",
      whenFurtherAssessmentNeeded: "Malignant tumors, open hemorrhagic wounds, active deep vein thrombosis, and directly over cardiac pacemakers or pregnant uteruses are absolute contraindications for these modalities."
    },

    howItWorks: {
      steps: [
        {
          phase: "Step 1: Clinical Tissue Depth & Pathology Mapping",
          detail: "Palpation and anatomical measurement of the target lesion to determine the exact frequency (1 MHz for deep hip/knee versus 3 MHz for superficial elbow/wrist) and laser joule dosage."
        },
        {
          phase: "Step 2: Acoustic Coupling Gel Application",
          detail: "Application of hypoallergenic, degassed acoustic gel ensuring 100% soundwave transmission into tissues without acoustic reflection or refraction."
        },
        {
          phase: "Step 3: Continuous Transducer Motion Ultrasound Treatment",
          detail: "Rhythmic circular movement of the calibrated stainless-steel transducer head, preventing internal standing wave hot spots while delivering therapeutic acoustic energy."
        },
        {
          phase: "Step 4: Targeted Photobiomodulation Laser Application",
          detail: "Application of therapeutic laser photons with protective safety goggles, delivering calibrated energy directly into the damaged tendon sheath or joint capsule."
        },
        {
          phase: "Step 5: Immediate Post-Modality Mobilization",
          detail: "Capitalizing on the thermal softening of collagen to perform passive joint mobilization and active corrective tissue stretching."
        }
      ],
      expectations: {
        before: "Ensure skin over the treatment area is clean and free of oily balms or medicated patches.",
        during: "Ultrasound feels like a soothing, gentle warming sensation beneath the skin. Laser therapy is completely painless with pleasant, mild tissue warmth.",
        after: "You will notice an immediate feeling of looseness and decreased joint friction in the treated area."
      }
    },

    equipmentAndTechniques: {
      name: "Dual-Frequency 1MHz/3MHz Ultrasound & Medical Class IV Laser",
      description: "Our clinic is equipped with advanced multi-wave electro-apparatus with certified beam non-uniformity ratios (BNR < 5:1) ensuring safe, homogeneous energy dispersion.",
      manualAspect: "Precise anatomical lesion localization, dynamic transducer angling, and post-thermal joint glide manual mobilization."
    },

    whoMayBenefit: {
      candidates: [
        "Individuals with stubborn tendonitis that has failed to improve with rest and oral medications",
        "Patients with knee arthritis seeking joint lubrication and morning stiffness relief",
        "Athletes with acute soft tissue sprains seeking rapid, clean scar remodeling"
      ],
      precautionsAndContraindications: "Never applied directly over the eyes, gravid uterus, growing epiphyseal growth plates in children, or areas of active infection."
    },

    whatPatientsShouldKnow: {
      preparation: "Wear clothing allowing complete exposure of the target joint. Wear provided laser safety goggles during laser administration.",
      aftercare: "Avoid heavy, jarring impact on the treated joint for 2 hours post-session to allow biological healing pathways to consolidate.",
      faqs: [
        {
          q: "What is the difference between diagnostic ultrasound and therapy ultrasound?",
          a: "Diagnostic ultrasound takes pictures of babies or organs using very low power soundwaves. Therapy ultrasound uses higher-power calibrated frequencies to stimulate cellular healing and soften tight tissue."
        },
        {
          q: "Does medical laser treatment cause burns or radiation?",
          a: "No. Therapeutic lasers emit non-ionizing, cold or warm photobiomodulation light. There is zero radiation, and treatment is completely safe when administered by a qualified professional."
        },
        {
          q: "How many sessions are typically required?",
          a: "Most acute conditions show marked improvement in 4 to 6 sessions, while longstanding chronic tendinopathies benefit from 8 to 12 sessions."
        }
      ]
    }
  },

  {
    id: "ift-tens-swd-therapy",
    name: "IFT, TENS & Shortwave Diathermy (SWD) Therapy",
    category: "ADVANCED ELECTROTHERAPY",
    tagline: "Interferential Neuro-Currents, Pain Gating & Deep Continuous Thermal Diathermy",
    image: iftTensSwdImg,
    imageAlt: "IFT, TENS and Shortwave Diathermy physiotherapy for chronic pain",
    prescribedTherapy: "Quad-Polar Vector Field IFT, Sensory Pain-Gating TENS & High-Frequency SWD",
    machineUsed: "Microprocessor-Controlled Vector IFT Unit & Solid-State Deep Shortwave Diathermy",
    therapyOutcome: "Gates deep nociceptive nerve transmission, stimulates endogenous beta-endorphin release, dilates deep muscle microvasculature, and relieves persistent paraspinal spasms.",
    
    introduction: `Interferential Therapy (IFT), Transcutaneous Electrical Nerve Stimulation (TENS), and Shortwave Diathermy (SWD) represent the gold-standard foundation of physical medicine electrotherapy. While standard surface electrical stimulation often causes superficial skin stinging, IFT utilizes two medium-frequency currents (around 4000 Hz) that intersect deep within target tissues, creating a therapeutic low-frequency beat frequency (1–150 Hz) that overcomes skin impedance without discomfort. TENS directly activates the Melzack-Wall Gate Control theory of pain, flooding A-beta sensory fibers to shut the spinal pain gate against chronic ache. Complementing these, Shortwave Diathermy (SWD) uses high-frequency 27.12 MHz electromagnetic oscillations to produce uniform, deep diathermal heating in deep paraspinal muscle layers and large joint capsules where standard hot packs cannot penetrate.`,
    
    whyUsed: {
      conditions: [
        "Acute and chronic lumbar paraspinal muscle spasms, lumbago, and sciatica",
        "Cervical spondylosis with radiating radicular pain and trapezius tightness",
        "Knee osteoarthritis with synovial inflammation and joint effusion",
        "Frozen shoulder (adhesive capsulitis) with severe painful sleep disruption",
        "Ankylosing spondylitis and chronic postural back fatigue",
        "Deep muscular hematomas, post-fracture joint stiffness, and pelvic floor pain"
      ],
      purpose: "To block pain signals along peripheral nerve fibers, stimulate the pituitary-hypothalamic release of natural endorphins, dilate deep capillaries to wash away inflammatory metabolites, and relax protective muscle splinting.",
      realisticBenefits: "Immediate, substantial reduction in sharp aching pain, noticeable relaxation of tight paraspinal bands, improved sleep quality, and restored ease in bending and walking.",
      whenFurtherAssessmentNeeded: "SWD is strictly contraindicated in the presence of metallic implants (pins, plates, metallic clips), cardiac pacemakers, active hemorrhage, or over insensate skin areas."
    },

    howItWorks: {
      steps: [
        {
          phase: "Step 1: Neuro-Anatomical Electrode Vector Placement",
          detail: "Precise placement of four suction or rubber carbon electrodes in a criss-cross vector configuration across the lumbar, cervical, or knee joint axis."
        },
        {
          phase: "Step 2: Frequency Sweep Tuning",
          detail: "Calibrating the beat frequency sweep (e.g., 0–100 Hz for acute pain, or 80–150 Hz for muscle spasm release) to prevent nerve accommodation."
        },
        {
          phase: "Step 3: Intensity Titration to Strong, Comfortable Tingling",
          detail: "Gradual elevation of current intensity until a robust, deep, comfortable buzzing sensation is felt throughout the painful area without muscle cramping."
        },
        {
          phase: "Step 4: Shortwave Diathermy (SWD) Deep Heat Application",
          detail: "Positioning capacitive or inductive drum electrodes around the joint with dry towel insulation to generate deep, penetrating diathermy."
        },
        {
          phase: "Step 5: Transition to Active Therapeutic Exercises",
          detail: "Utilizing the 30–45 minute post-treatment pain-free window to perform targeted spinal stabilization or joint mobility exercises."
        }
      ],
      expectations: {
        before: "Remove all metallic jewelry, watches, belts with metal buckles, and hairpins prior to SWD treatment.",
        during: "IFT and TENS feel like a rhythmic, soothing prickling vibration. SWD produces a deeply relaxing, uniform warm sensation.",
        after: "Skin may exhibit a mild, temporary pink flushing due to healthy capillary vasodilation."
      }
    },

    equipmentAndTechniques: {
      name: "Microprocessor Vector IFT, TENS & 27.12 MHz Solid-State SWD Unit",
      description: "Our clinic houses clinical-grade multi-channel electrotherapy stations with digital sweep programs and shielded shortwave diathermy generators.",
      manualAspect: "Pre-modality dermatome testing, electrode configuration optimization, and post-diathermy manual joint mobilization."
    },

    whoMayBenefit: {
      candidates: [
        "Patients with intense lower back pain unable to bend, sit, or stand comfortably",
        "Individuals with severe neck stiffness and shoulder blade burning sensations",
        "Elderly patients with knee arthritis seeking non-drug pain relief"
      ],
      precautionsAndContraindications: "SWD is completely prohibited over metallic implants (such as knee/hip metal prosthesis or spinal screws), pacemakers, pregnant abdomen, or malignant lesions."
    },

    whatPatientsShouldKnow: {
      preparation: "Inform the therapist if you have any metallic implants, screws, plates, or heart devices anywhere in your body.",
      aftercare: "Maintain gentle walking and drink water to flush out released metabolic waste products.",
      faqs: [
        {
          q: "What is the difference between IFT and TENS?",
          a: "TENS works mainly at the surface skin level to block pain signals. IFT uses higher intersecting frequencies that penetrate much deeper into thick muscles and joints without causing skin discomfort."
        },
        {
          q: "Why can't SWD be used if I have metal in my body?",
          a: "Shortwave diathermy uses radio-frequency waves that concentrate around metal objects, which can cause internal overheating or burns. In patients with metal implants, we safely use ultrasound or IFT instead."
        },
        {
          q: "Is electric therapy safe for elderly patients?",
          a: "Yes, absolutely. The currents are safe, low-voltage, and finely tuned to each individual's comfort level under continuous clinical supervision."
        }
      ]
    }
  },

  {
    id: "spinal-traction-decompression",
    name: "Cervical & Lumbar Spinal Traction Decompression",
    category: "ADVANCED SPINE CARE",
    tagline: "Digital Motorized Vertebral Distraction, Disc Decompression & Sciatic Nerve Relief",
    image: spinalTractionImg,
    imageAlt: "Computerized lumbar and cervical spinal traction decompression therapy",
    prescribedTherapy: "Intermittent Calibrated Mechanical Distraction & Sub-Atmospheric Intradiscal Relief",
    machineUsed: "Digital Microprocessor Cervical & Lumbar Traction Unit with Frictionless Split Table",
    therapyOutcome: "Creates negative intradiscal pressure promoting centripetal retraction of herniated nuclear material, widens neural foramina, and decompresses pinched nerve roots.",
    
    introduction: `Intervertebral discs act as hydraulic shock absorbers between the spinal vertebrae. When subjected to chronic wear, poor posture, or sudden loading, the gel-like nucleus pulposus herniates outward through tears in the annulus fibrosus, pinching sensitive spinal nerve roots (such as the sciatic nerve in the lumbar spine or brachial plexus roots in the cervical spine). Clinical Spinal Traction and Non-Surgical Decompression represent one of the most effective mechanical treatments available for spine disc disease. At Tamanya Physio and Health Clinic in Pandeypur, Varanasi, our computerized traction unit applies precise, graduated distraction forces while the patient rests comfortably on a frictionless split table. By separating adjacent vertebral bodies, traction creates a sub-atmospheric negative intradiscal pressure (a vacuum effect) that draws protruding disc fragments back toward the center, widens narrowed exit foramina, and relieves nerve impingement.`,
    
    whyUsed: {
      conditions: [
        "Lumbar disc herniation, protrusion, and disc extrusion causing sciatica down the leg",
        "Cervical disc bulge and cervical spondylosis causing neck pain radiating into the arm or fingers",
        "Degenerative disc disease with diminished intervertebral disc height",
        "Lumbar spinal canal and neural foraminal stenosis with claudication symptoms",
        "Facet joint arthropathy and chronic paraspinal muscle contracture",
        "Postural compression and numbness in hands while working at desks"
      ],
      purpose: "To generate longitudinal distraction force that separates vertebrae, reduces intradiscal pressure to negative levels, promotes diffusion of water and nutrients into desiccated discs, and decompresses pinched nerve roots.",
      realisticBenefits: "Noticeable centralization of radiating pain (pain moves out of the foot/hand back toward the spine, which is a key sign of nerve recovery), reduced tingling, and restored upright spinal posture.",
      whenFurtherAssessmentNeeded: "Severe osteoporosis, spinal fractures, spinal cord compression with myelopathy, spinal instability, cauda equina syndrome, or abdominal aortic aneurysm are contraindications for mechanical traction."
    },

    howItWorks: {
      steps: [
        {
          phase: "Step 1: Clinical Biomechanical Evaluation & Weight Calculation",
          detail: "Determining precise distraction poundage based on patient body weight (typically 25–50% of body weight for lumbar traction, and 10–15% for cervical traction) and disc tolerance."
        },
        {
          phase: "Step 2: Ergonomic Split-Table Harnessing",
          detail: "Securing thoracic and pelvic non-slip harnesses while the patient lies supine. The split table separates frictionlessly, ensuring all traction force acts directly on the spine rather than fighting body friction."
        },
        {
          phase: "Step 3: Programming Traction Cycles (Intermittent vs. Static)",
          detail: "Configuring computer parameters: hold time (e.g., 60 seconds of therapeutic pull) alternating with rest time (e.g., 20 seconds of half-poundage relief) to pump fluids into the disc."
        },
        {
          phase: "Step 4: Continuous Patient Safety Monitoring",
          detail: "The patient holds an electronic handheld emergency safety switch, allowing instantaneous gentle release at any moment if desired."
        },
        {
          phase: "Step 5: Post-Traction Spine Rest & Stabilization",
          detail: "Resting supine for 5 minutes post-session, followed by application of supportive lumbar/cervical posture guidance before rising."
        }
      ],
      expectations: {
        before: "Empty your bladder before the session so the pelvic harness fits comfortably. Wear comfortable cotton clothing.",
        during: "You will feel a steady, gentle, relieving stretching sensation in your lower back or neck. Many patients find it so relaxing that they fall asleep.",
        after: "Stand up slowly using your arms. Avoid heavy lifting or slouching immediately following the session."
      }
    },

    equipmentAndTechniques: {
      name: "Computerized Digital Traction System with Frictionless Split Table",
      description: "Our clinic is equipped with advanced motorized traction technology featuring computerized force calibration, multi-angle cervical cradles, and frictionless floating split surfaces.",
      manualAspect: "Manual cervical distraction test, McKenzie mechanical spine assessment, and core stabilization exercise prescription."
    },

    whoMayBenefit: {
      candidates: [
        "Patients diagnosed with MRI-confirmed disc bulge, disc prolapse, or sciatica",
        "Desk workers suffering from chronic neck tightness and arm numbness",
        "Individuals seeking non-surgical, non-invasive solutions to avoid spinal surgery"
      ],
      precautionsAndContraindications: "Contraindicated in severe osteoporosis, acute spinal fracture, spinal infection/tumor, high blood pressure during cervical traction, or pregnancy (for lumbar traction)."
    },

    whatPatientsShouldKnow: {
      preparation: "Do not eat a very heavy meal right before lumbar traction to ensure comfortable harness fit across the lower abdomen.",
      aftercare: "Avoid immediate strenuous spinal flexion (bending forward). Maintain spinal neutral posture throughout the day.",
      faqs: [
        {
          q: "Does spinal traction pull hard or hurt?",
          a: "No. Traction starts at very low, gentle poundage and is gradually titrated over sessions. It should feel like a deep, relieving stretch rather than painful pulling."
        },
        {
          q: "Can traction help avoid spinal disc surgery?",
          a: "Yes. For the vast majority of disc bulges and sciatica without progressive neurological deficits, mechanical traction combined with core physiotherapy successfully resolves symptoms without surgery."
        },
        {
          q: "How many traction sessions will I need?",
          a: "A typical course consists of 10 to 15 sessions over 3 to 4 weeks, combined with spine stabilizing exercises."
        }
      ]
    }
  },

  {
    id: "iastm-pemf-taping-manual",
    name: "IASTM, PEMF, Kinesio Taping & Manual Joint Mobilization",
    category: "ADVANCED MANUAL & TISSUE THERAPY",
    tagline: "Instrumented Fascial Remodeling, Pulsed Magnetic Fields, Elastic Taping & Joint Glides",
    image: iastmMfrImg,
    imageAlt: "IASTM tool mobilization, PEMF therapy, and kinesiology taping",
    prescribedTherapy: "Instrumented Fascial Cross-Friction, High-Flux Pulsed Electromagnetic Therapy & Maitland Glides",
    machineUsed: "Surgical-Grade Stainless Steel Ergonomic IASTM Blades & High-Peak PEMF Induction Loop",
    therapyOutcome: "Breaks microvascular cross-linked fascial adhesions, promotes cellular bio-electromagnetic repolarization, improves lymphatic drainage, and restores physiological accessory joint motion.",
    
    introduction: `When soft tissues suffer chronic strain, trauma, or surgery, the body frequently lays down unorganized, chaotic collagen scar tissue (fibrosis) that tethers muscles, limits joint mobility, and entraps sensory nerves. At Tamanya Physio and Health Clinic, Dr. Neha Gupta (PT) integrates four elite, synergistic modalities: Instrumental Assisted Soft Tissue Mobilization (IASTM), Pulsed Electromagnetic Field (PEMF) Therapy, Kinesiology Taping, and Maitland/Mulligan Manual Joint Mobilization. Using medical-grade contoured stainless steel instruments, IASTM introduces controlled micro-trauma that re-initiates the natural inflammatory cascade, reabsorbing non-functional scar adhesions. Simultaneously, PEMF penetrates deeply without sensation, recharging trans-membrane potentials in damaged cells to accelerate bone and cartilage repair. Combined with kinesiology elastic taping for continuous lymphatic lift and precision joint glides, this protocol breaks chronic restrictions other therapies cannot reach.`,
    
    whyUsed: {
      conditions: [
        "Stubborn myofascial pain syndrome with dense trigger points and fascial adhesions",
        "Chronic plantar fasciitis, heel pain, and thickened Achilles tendon scar tissue",
        "Post-surgical scar adhesions (following knee surgery, cesarean section, or trauma)",
        "Frozen shoulder, knee joint stiffness, and restricted ankle dorsiflexion",
        "Tennis elbow, golfer's elbow, and chronic forearm wrist tendinitis",
        "Sports muscle tears seeking rapid neuromuscular facilitation and dynamic joint support"
      ],
      purpose: "To mechanically shear cross-linked fascial adhesions, repolarize damaged cellular membranes through pulsed magnetic resonance, stimulate local fibroblastic proliferation, and restore physiological joint arthrokinematics.",
      realisticBenefits: "Rapid increase in joint range of motion, immediate sensation of lightness in tight muscle groups, faster scar tissue softening, and prolonged athletic stability.",
      whenFurtherAssessmentNeeded: "Open wounds, active skin infections, unhealed fractures, thrombophlebitis, or over active pacemakers (for PEMF) require modification or contraindication."
    },

    howItWorks: {
      steps: [
        {
          phase: "Step 1: Fascial Palpation & Instrument Scanning",
          detail: "Applying an organic emollient and scanning the skin with the stainless-steel instrument's beveled edge to identify textural irregularities, 'gravel-like' scar tissue, and fascial restrictions."
        },
        {
          phase: "Step 2: Targeted Multi-Directional IASTM Strokes",
          detail: "Delivering precise sweep, fan, and cross-friction strokes at a 30°–60° angle to break down microvascular cross-links and stimulate healthy fibroblast activity."
        },
        {
          phase: "Step 3: High-Flux PEMF Cellular Stimulation",
          detail: "Positioning the pulsed electromagnetic loop over the target joint or spine, delivering therapeutic magnetic pulses that stimulate chondrocyte and osteoblast repair."
        },
        {
          phase: "Step 4: Maitland & Mulligan Joint Accessory Mobilization",
          detail: "Performing gentle oscillatory joint glides (Grades I through IV) to restore synovial fluid circulation and loosen restricted joint capsules."
        },
        {
          phase: "Step 5: Neuromuscular Kinesiology Taping Application",
          detail: "Applying elastic therapeutic tape with calibrated tension along muscle contours to decompress subcutaneous pain receptors and enhance lymphatic clearance for days."
        }
      ],
      expectations: {
        before: "Ensure skin is clean and unlotioned so instruments glide smoothly and kinesio tape adheres securely.",
        during: "IASTM produces a distinct sensation of gravelly tissue smoothing out. PEMF is completely sensation-free. Manual joint glides feel relieving.",
        after: "Mild petechiae (light pink skin redness) may appear after IASTM, which resolves within 24–48 hours as new capillary networks form."
      }
    },

    equipmentAndTechniques: {
      name: "Surgical Stainless-Steel IASTM Blades, High-Peak PEMF Loop & Kinesio Tapes",
      description: "Our clinic uses certified medical-grade surgical instruments engineered with precision convex and concave bevels, paired with clinical PEMF generators.",
      manualAspect: "Maitland passive joint glides, Mulligan mobilization with movement (MWM), and soft-tissue fascial release."
    },

    whoMayBenefit: {
      candidates: [
        "Patients with chronic, stubborn muscle tightness that refuses to release with conventional massage",
        "Athletes seeking faster recovery, scar remodeling, and joint support during training",
        "Post-operative patients with restrictive surgical scar adhesions"
      ],
      precautionsAndContraindications: "IASTM is avoided over active skin rashes, open wounds, burns, or in patients taking high doses of anticoagulant blood-thinners. PEMF is strictly prohibited near cardiac pacemakers."
    },

    whatPatientsShouldKnow: {
      preparation: "Drink plenty of water before and after treatment to assist cellular detoxification and tissue hydration.",
      aftercare: "Leave kinesiology tape in place for 3 to 5 days; it is waterproof and allows showering. Gently pat dry with a towel.",
      faqs: [
        {
          q: "Does IASTM cause bruising?",
          a: "A light pink redness (erythema) or small micro-petechiae can occur, which is a desirable clinical sign that new blood flow has been drawn to the restricted scar tissue. It typically clears within 2 days."
        },
        {
          q: "What does PEMF do inside the body?",
          a: "PEMF (Pulsed Electromagnetic Field) delivers gentle magnetic waves that repolarize cell membranes, helping cells absorb oxygen and nutrients while eliminating waste products, dramatically speeding tissue repair."
        },
        {
          q: "Can I shower with kinesiology tape on?",
          a: "Yes. Kinesiology tape is made of breathable, moisture-resistant cotton. You can shower normally and pat it dry with a towel."
        }
      ]
    }
  },

  {
    id: "steam-therapy",
    name: "Clinical Steam Therapy & Hydrothermal Treatment",
    category: "ADVANCED HYDROTHERMAL CARE",
    tagline: "Moist Thermal Hyperthermia, Vasodilation & Deep Myofascial Spasm Relaxation",
    image: steamTherapyImg,
    imageAlt: "Clinical steam therapy and hydrothermal moist heat treatment",
    prescribedTherapy: "Targeted Warm Moist Vapor Hyperthermia & Sub-Thermal Fascial Pre-Conditioning",
    machineUsed: "Clinical Steam Vapor Station with Calibrated Flow Diffusers & Thermal Isolation Wraps",
    therapyOutcome: "Elevates local tissue temperature by 2–3°C, dramatically increases regional perfusion, softens stubborn collagen contractures, and primes stiff joints for pain-free manual therapy.",
    
    introduction: `Hydrothermal and steam therapy have been utilized in medical rehabilitation for centuries to harness the profound physiological benefits of moist heat. Unlike dry electric heating pads that can dehydrate skin and provoke superficial burning without penetrating deeply, clinical steam therapy combines thermal energy with moisture vapor. When applied to stiff joints, chronic back spasms, or post-surgical contractures, moist steam transfers heat up to 27 times faster than dry air. The resulting elevation in tissue temperature triggers widespread arteriolar vasodilation, increases capillary blood velocity, accelerates metabolic waste removal, and profoundly increases the viscoelastic extensibility of dense collagen tissues. At Tamanya Physio and Health Clinic, Dr. Neha Gupta (PT) utilizes clinical steam therapy as an essential pre-conditioning modality before aggressive joint mobilization and manual release.`,
    
    whyUsed: {
      conditions: [
        "Chronic lumbar and cervical paraspinal muscle contractures and stiffness",
        "Severe joint hypomobility, frozen shoulder, and stiff knee joints post-immobilization",
        "Fibromyalgia and generalized myofascial aching worsened by cold weather",
        "Ankylosing spondylitis spinal rigidity and morning stiffness",
        "Post-fracture joint stiffness following cast removal",
        "Chronic muscular fatigue and lymphatic congestion in lower limbs"
      ],
      purpose: "To rapidly increase deep tissue temperature, induce reflex autonomic relaxation of tight skeletal muscles, enhance joint capsule flexibility, and prepare dense connective tissues for painless manual stretching.",
      realisticBenefits: "Profound, soothing relaxation of tight muscles, instant relief from morning stiffness, enhanced range of motion during subsequent exercises, and generalized therapeutic well-being.",
      whenFurtherAssessmentNeeded: "Acute inflammation (first 48 hours post-injury), active bleeding disorders, severe peripheral vascular disease, insensate skin areas, or decompensated congestive heart failure require avoidance of thermal steam."
    },

    howItWorks: {
      steps: [
        {
          phase: "Step 1: Skin Thermal Sensitivity Assessment",
          detail: "Testing hot and cold sensory perception over the treatment region to verify intact thermal protective reflexes."
        },
        {
          phase: "Step 2: Comfortable Patient Positioning & Thermal Insulation",
          detail: "Positioning the patient comfortably on a padded treatment couch with clean, clinical cotton towels insulating non-target areas."
        },
        {
          phase: "Step 3: Calibrated Steam Vapor Delivery",
          detail: "Directing the controlled moist thermal vapor stream over the target muscle groups or joint at a safe, therapeutic distance for 15–20 minutes."
        },
        {
          phase: "Step 4: Continuous Temperature & Comfort Verification",
          detail: "Checking skin color and patient feedback every 5 minutes to maintain optimal therapeutic warmth without overheating."
        },
        {
          phase: "Step 5: Immediate Mobilization & Therapeutic Stretch",
          detail: "Transitioning immediately while tissues are warm and pliable to perform gentle joint glides, trigger point releases, and active stretching."
        }
      ],
      expectations: {
        before: "Wear lightweight clothing allowing easy access to the treatment area. Stay well hydrated before your session.",
        during: "You will feel an deeply soothing, penetrating warm vapor enveloping the tight muscle or joint. It is profoundly relaxing.",
        after: "Skin will be pleasantly warm and pink. Drink a glass of water after treatment to maintain hydration."
      }
    },

    equipmentAndTechniques: {
      name: "Medical Steam Generation Station & Moist Hydrocollator Arrays",
      description: "Our clinic is equipped with dedicated medical steam generators featuring sterile water filtration, directional flow nozzles, and temperature sensors.",
      manualAspect: "Immediate post-steam passive stretching, manual myofascial glide, and functional movement re-education."
    },

    whoMayBenefit: {
      candidates: [
        "Individuals with longstanding back or neck tightness aggravated by winter or air-conditioned environments",
        "Patients recovering from fractures or prolonged splinting seeking to regain joint range of motion",
        "Seniors with generalized joint arthritis looking for deeply soothing relief"
      ],
      precautionsAndContraindications: "Never applied over acutely swollen, freshly injured joints (use ice instead), skin rashes, insensate scar tissue, or in patients with uncontrolled fever."
    },

    whatPatientsShouldKnow: {
      preparation: "Inform your therapist if you have diabetes or reduced temperature sensation in your feet or hands.",
      aftercare: "Avoid exposing the warm treated area to direct cold air conditioning or cold drafts immediately after your session.",
      faqs: [
        {
          q: "Why is moist steam better than a dry heating pad?",
          a: "Moist heat penetrates much deeper into muscles and joint capsules because water vapor conducts heat far more efficiently than dry air, without drying out or irritating the skin."
        },
        {
          q: "Can steam therapy be done on fresh sports injuries?",
          a: "No. Fresh injuries within 48 to 72 hours have active internal bleeding and swelling, which requires cold therapy (ice). Steam is used for subacute and chronic stiffness."
        },
        {
          q: "Is steam therapy safe for elderly patients with arthritis?",
          a: "Yes, it is one of the safest, most comforting therapies for degenerative arthritis, as long as temperature is carefully monitored."
        }
      ]
    }
  }
];

