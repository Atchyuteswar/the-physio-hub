export type ProcessStep = {
  title: string;
  description: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type RecoveryTimeline = {
  condition: string;
  duration: string;
};

export type ApproachSection = {
  title: string;
  items: string[];
  description?: string;
};

export type Service = {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  icon: string;
  longDescription?: string[];
  targetAudience?: string[];
  conditionsTreated?: string[];
  process?: ProcessStep[];
  faqs?: FAQ[];
  recoveryTimeline?: RecoveryTimeline[];
  approachSections?: ApproachSection[];
  differenceText?: string;
  timelineNote?: string;
};

export const services: Service[] = [
  {
    slug: "musculoskeletal-rehabilitation",
    title: "Musculoskeletal Rehabilitation",
    subtitle: "Restore Movement. Rebuild Capacity. Return with Confidence.",
    description:
      "Assessment and treatment of muscles, joints, tendons, ligaments, and connective tissues through personalized, evidence-based rehabilitation.",
    icon: "Activity",
    longDescription: [
      "Our musculoskeletal rehabilitation programs are designed to address conditions affecting the muscles, joints, tendons, ligaments, fascia, and connective tissues through a personalized, evidence-based approach.",
      "Rather than treating imaging findings alone, we combine detailed history taking, movement analysis, pattern recognition, and clinical reasoning to understand how your condition is affecting movement, function, and daily life. This enables us to develop an individualized rehabilitation plan focused on restoring long-term function—not simply reducing symptoms."
    ],
    approachSections: [
      {
        title: "Comprehensive Assessment",
        items: [
          "Detailed clinical history",
          "Functional movement assessment",
          "Joint, muscle and soft tissue evaluation",
          "Strength, mobility and motor control assessment",
          "Clinical reasoning and evidence-informed diagnosis"
        ]
      },
      {
        title: "Pain Modulation & Tissue Recovery",
        description: "When clinically indicated, we utilize evidence-based manual therapy techniques to reduce pain, improve mobility, and prepare the body for active rehabilitation. These may include:",
        items: [
          "Joint Mobilization (Maitland & Mulligan Concepts)",
          "Muscle Energy Techniques (MET)",
          "Myofascial Release",
          "Active Release Techniques (ART)",
          "Trigger Point & Ischemic Compression",
          "Deep Transverse Friction Massage",
          "Soft Tissue Mobilization"
        ]
      },
      {
        title: "Restore Mobility & Motor Control",
        description: "As symptoms improve, rehabilitation progresses toward restoring normal movement through:",
        items: [
          "Joint mobility exercises",
          "Flexibility and mobility programs",
          "Motor control retraining",
          "Neuromuscular re-education",
          "Balance and proprioceptive training"
        ]
      },
      {
        title: "Build Strength & Functional Capacity",
        description: "Recovery continues by progressively improving:",
        items: [
          "Muscle strength",
          "Muscular endurance",
          "Functional movement patterns",
          "Load tolerance",
          "Daily activity performance",
          "Sport-specific or occupation-specific function"
        ]
      }
    ],
    conditionsTreated: [
      "Neck and back pain",
      "Shoulder conditions (dislocation, labral tears, rotator cuff tear)",
      "Hip, knee, ankle and foot disorders",
      "Disc herniation",
      "Tendon injuries (Tendinopathy)",
      "Ligament injuries (ACL, Ankle sprains)",
      "Muscle strains and tears",
      "Joint stiffness",
      "Arthritis and degenerative conditions",
      "Temporomandibular joint issues",
      "Work-related musculoskeletal disorders",
      "Post-fracture rehabilitation"
    ],
    recoveryTimeline: [
      { condition: "Mild Muscle Strain", duration: "2–6 weeks" },
      { condition: "Moderate Muscle Injury", duration: "4–8 weeks" },
      { condition: "Severe Muscle Tear", duration: "8–12+ weeks" },
      { condition: "Tendinopathy", duration: "8–16 weeks" },
      { condition: "Ligament Sprain (Grade I–II)", duration: "4–12 weeks" },
      { condition: "Ligament Reconstruction", duration: "6–12 months" },
      { condition: "Joint Mobilization Deficits", duration: "4–8 weeks" },
      { condition: "Cartilage Injury", duration: "3–9 months" },
      { condition: "Fracture Rehabilitation", duration: "8–24 weeks" },
      { condition: "Post-Operative Orthopaedic Rehabilitation", duration: "8–24+ weeks" }
    ],
    timelineNote: "Recovery timelines vary based on the individual's condition, medical history, surgical procedures, rehabilitation goals, and participation in the prescribed program.",
    differenceText: "At Aatral360, rehabilitation is not limited to symptom relief. Our goal is to restore efficient movement, improve physical capacity, reduce the risk of recurrence, and empower every individual to return confidently to work, sport, and everyday life through personalized, evidence-based rehabilitation.",
    process: [
      {
        title: "Comprehensive Assessment",
        description: "We evaluate your clinical history, movement patterns, joint and soft tissue function, and strength to build a complete picture."
      },
      {
        title: "Pain Modulation & Active Rehabilitation",
        description: "Evidence-based manual therapy and progressive exercises to reduce pain, restore mobility, and rebuild motor control."
      },
      {
        title: "Strength & Functional Restoration",
        description: "Progressively building strength, endurance, and functional capacity for confident return to daily life, work, or sport."
      }
    ],
    faqs: [
      {
        question: "How is this different from standard physical therapy?",
        answer: "Our musculoskeletal rehabilitation goes beyond symptom relief. We focus on restoring movement quality, building physical capacity, and reducing recurrence risk through a comprehensive, evidence-based approach."
      },
      {
        question: "How long does rehabilitation typically take?",
        answer: "Recovery timelines vary by condition — from 2–6 weeks for mild strains to 6–12 months for ligament reconstruction. Your physiotherapist will provide a personalized timeline after assessment."
      },
      {
        question: "Do I need imaging before starting rehabilitation?",
        answer: "Not always. We use clinical reasoning and movement assessment to guide treatment. Imaging is recommended only when clinically indicated."
      }
    ]
  },
  {
    slug: "chronic-pain-rehabilitation",
    title: "Chronic Pain Rehabilitation",
    subtitle: "Understanding Pain. Restoring Function. Building Resilience.",
    description:
      "Evidence-based care for persistent pain using comprehensive assessment, clinical reasoning, rehabilitation, and patient education.",
    icon: "HeartPulse",
    longDescription: [
      "Chronic pain is more than a symptom—it is often the result of complex interactions between tissue health, movement patterns, physical capacity, lifestyle, and the nervous system. At Aatral360, our approach goes beyond temporary pain relief by identifying the factors that contribute to persistent pain and developing a personalized rehabilitation strategy to address them.",
      "Rather than relying solely on pain-relieving modalities, we combine comprehensive assessment, clinical reasoning, evidence-based rehabilitation, and patient education to help you regain confidence in movement and achieve lasting improvements."
    ],
    approachSections: [
      {
        title: "Comprehensive Assessment",
        description: "Every rehabilitation journey begins with understanding the complete picture. We assess:",
        items: [
          "Pain characteristics and contributing factors",
          "Movement quality and functional limitations",
          "Tissue loading and physical capacity",
          "Occupational and lifestyle demands",
          "Ergonomic and activity-related factors",
          "Psychosocial influences when relevant"
        ]
      },
      {
        title: "Pain Modulation",
        description: "When clinically appropriate, evidence-based interventions may be used to reduce pain and improve tolerance to movement, including:",
        items: [
          "Manual Therapy",
          "Joint Mobilization",
          "Myofascial Release",
          "Dry Needling",
          "Therapeutic Exercise",
          "Electrotherapy Modalities (TENS, IFT, Ultrasound, Laser Therapy, Shockwave Therapy, etc.)"
        ]
      },
      {
        title: "Load Management & Capacity Building",
        description: "Long-term improvement depends on restoring the balance between what your body is asked to do and what it is capable of doing.",
        items: [
          "Activity modification",
          "Ergonomic guidance",
          "Progressive load management",
          "Functional movement retraining",
          "Motor control rehabilitation",
          "Strength and endurance training",
          "Gradual return to work, daily activities, or sport"
        ]
      },
      {
        title: "Individualized Exercise Prescription",
        description: "Exercise is the foundation of successful chronic pain rehabilitation. Every exercise program is tailored according to:",
        items: [
          "Your diagnosis",
          "Irritability and symptom severity",
          "Functional limitations",
          "Physical capacity",
          "Personal goals",
          "Stage of rehabilitation"
        ]
      }
    ],
    conditionsTreated: [
      "Persistent neck or back pain",
      "Chronic shoulder, hip, knee, or ankle pain",
      "Tendinopathy",
      "Arthritis-related pain",
      "Recurrent musculoskeletal pain",
      "Persistent pain following injury or surgery",
      "Work-related pain conditions",
      "Overuse injuries",
      "Activity-related pain limiting daily life or sport"
    ],
    recoveryTimeline: [
      { condition: "Persistent Musculoskeletal Pain", duration: "6–12 weeks" },
      { condition: "Chronic Tendinopathy", duration: "8–16 weeks" },
      { condition: "Complex Chronic Pain Conditions", duration: "Individualized long-term rehabilitation" }
    ],
    differenceText: "We believe lasting pain relief is achieved by improving movement quality, increasing physical capacity, and helping people confidently return to the activities that matter most. Our goal is not simply to reduce pain for today, but to build the knowledge, resilience, and movement capacity needed for long-term health and independence.",
    process: [
      {
        title: "Comprehensive Pain Assessment",
        description: "We evaluate pain characteristics, movement quality, physical capacity, lifestyle demands, and contributing factors."
      },
      {
        title: "Pain Modulation & Load Management",
        description: "Evidence-based interventions to reduce pain combined with progressive load management and capacity building."
      },
      {
        title: "Individualized Exercise & Self-Management",
        description: "Tailored exercise programs and education to build long-term resilience and movement confidence."
      }
    ],
    faqs: [
      {
        question: "How long does chronic pain rehabilitation take?",
        answer: "Programs typically range from 6–16 weeks for persistent pain conditions. Complex cases may require individualized long-term rehabilitation."
      },
      {
        question: "Is exercise safe for chronic pain?",
        answer: "Yes. Exercise is the foundation of chronic pain rehabilitation. Programs are carefully tailored to your irritability, capacity, and goals."
      },
      {
        question: "Do I need a doctor's referral?",
        answer: "No, you can directly book an appointment for assessment and rehabilitation."
      }
    ]
  },
  {
    slug: "sports-injury-rehabilitation",
    title: "Sports Injury Rehabilitation",
    subtitle: "Recover with Confidence. Return with Performance.",
    description:
      "Specialized rehabilitation for athletes — restoring physical qualities, minimizing re-injury risk, and returning to sport with confidence.",
    icon: "Zap",
    longDescription: [
      "At Aatral360, sports rehabilitation goes beyond healing an injury. Our goal is to restore the physical qualities required for your sport, minimize the risk of re-injury, and help you return to competition with confidence and performance readiness.",
      "Every athlete is different. That's why our rehabilitation programs are individually designed based on your injury, sport, playing position, training history, competition level, seasonal demands, and performance goals."
    ],
    approachSections: [
      {
        title: "Athlete-Centered Assessment",
        description: "Every rehabilitation program begins with a comprehensive evaluation, including:",
        items: [
          "Injury and medical history",
          "Sport-specific movement assessment",
          "Training load and competition schedule",
          "Playing position and performance demands",
          "Strength, mobility, balance, and movement quality",
          "Functional performance testing"
        ]
      },
      {
        title: "Progressive Sports Rehabilitation",
        description: "Rehabilitation progresses through structured phases, ensuring each stage prepares you for the next:",
        items: [
          "Pain management and tissue healing",
          "Mobility restoration",
          "Strength and endurance development",
          "Neuromuscular control and movement retraining",
          "Load management and tissue capacity building",
          "Sport-specific skill integration"
        ]
      },
      {
        title: "Performance Restoration",
        description: "Our advanced rehabilitation programs may include:",
        items: [
          "Plyometric training",
          "Speed development",
          "Acceleration and deceleration training",
          "Agility and change-of-direction drills",
          "Landing mechanics",
          "Balance and coordination training",
          "Sport-specific conditioning",
          "Return-to-performance progression"
        ]
      },
      {
        title: "Return-to-Sport Testing",
        description: "Before returning to unrestricted training or competition, athletes undergo objective performance testing to evaluate readiness:",
        items: [
          "Strength assessment",
          "Functional movement testing",
          "Hop and jump tests",
          "Balance assessment",
          "Agility testing",
          "Speed and power evaluation",
          "Sport-specific performance tasks"
        ]
      }
    ],
    conditionsTreated: [
      "Ligament injuries (ACL, PCL, MCL, LCL, ankle sprains)",
      "Muscle strains and tears",
      "Tendon injuries (Achilles, patellar, hamstring, rotator cuff)",
      "Meniscus injuries",
      "Shoulder instability and dislocations",
      "Stress fractures",
      "Running-related injuries",
      "Throwing and overhead sports injuries",
      "Overuse injuries",
      "Post-operative sports rehabilitation"
    ],
    targetAudience: [
      "Recreational athletes",
      "Competitive athletes",
      "Elite performers across all sports"
    ],
    recoveryTimeline: [
      { condition: "Mild Muscle Strain", duration: "2–6 weeks" },
      { condition: "Moderate Muscle Injury", duration: "4–8 weeks" },
      { condition: "Tendinopathy", duration: "8–16 weeks" },
      { condition: "Ankle Sprain", duration: "4–10 weeks" },
      { condition: "Meniscus Injury", duration: "6–16 weeks" },
      { condition: "Shoulder Instability", duration: "8–16 weeks" },
      { condition: "Stress Fracture", duration: "8–16 weeks" },
      { condition: "ACL Reconstruction", duration: "9–12 months" },
      { condition: "Multi-Ligament Reconstruction", duration: "9–15 months" }
    ],
    timelineNote: "Return-to-sport decisions are based on objective functional testing, physical readiness, and sport-specific demands—not simply the passage of time.",
    differenceText: "At Aatral360, successful rehabilitation means more than returning to activity. We combine evidence-based physiotherapy, strength and conditioning, load management, and performance training to help athletes recover safely, restore physical capacity, reduce the risk of re-injury, and return to performing at their highest potential.",
    process: [
      {
        title: "Athlete-Centered Assessment",
        description: "We evaluate your injury, sport-specific demands, training history, and performance goals."
      },
      {
        title: "Progressive Sports Rehabilitation",
        description: "Structured phases from tissue healing through strength, neuromuscular control, and sport-specific skill integration."
      },
      {
        title: "Return-to-Sport Testing & Performance",
        description: "Objective functional testing to ensure safe, confident return to competition at your highest level."
      }
    ],
    faqs: [
      {
        question: "When can I return to sport?",
        answer: "Return-to-sport decisions are based on objective functional testing and physical readiness, not simply time elapsed since injury."
      },
      {
        question: "Is this suitable for recreational athletes?",
        answer: "Yes, our programs are designed for recreational, competitive, and elite athletes across all sports."
      },
      {
        question: "Will exercises be sport-specific?",
        answer: "Yes, rehabilitation progresses to include sport-specific conditioning, agility, plyometrics, and performance tasks."
      }
    ]
  },
  {
    slug: "post-operative-rehabilitation",
    title: "Post-Operative Rehabilitation",
    subtitle: "Guided Recovery. Progressive Rehabilitation. Confident Return to Life.",
    description:
      "Structured post-surgical recovery programs designed to protect healing, restore movement, rebuild strength, and return to daily life.",
    icon: "Stethoscope",
    longDescription: [
      "Successful surgery is only the beginning of recovery. At Aatral360, our post-operative rehabilitation programs are designed to protect surgical healing, restore movement, rebuild strength, and help individuals safely return to their daily activities, work, or sport.",
      "Our rehabilitation plans are developed in close collaboration with your orthopedic surgeon, ensuring that every stage of recovery respects surgical precautions, tissue-healing timelines, and your individual goals."
    ],
    approachSections: [
      {
        title: "Collaborative Post-Surgical Care",
        description: "From the first rehabilitation session, our physiotherapists work alongside your surgeon's recommendations, considering:",
        items: [
          "Surgical procedure performed",
          "Tissue-healing stage",
          "Weight-bearing restrictions",
          "Range of motion precautions",
          "Graft or implant protection",
          "Individual recovery goals"
        ]
      },
      {
        title: "Phase 1 – Protection & Pain Management",
        items: [
          "Protect healing tissues, control pain and swelling, maintain circulation, and preserve early mobility while respecting surgical precautions."
        ]
      },
      {
        title: "Phase 2 – Movement Restoration & Motor Control",
        items: [
          "Restore joint mobility, improve movement quality, reactivate stabilizing muscles, and regain neuromuscular control."
        ]
      },
      {
        title: "Phase 3 – Strength & Functional Recovery",
        items: [
          "Progressively rebuild muscle strength, endurance, balance, and functional movement required for everyday activities."
        ]
      },
      {
        title: "Phase 4 – Advanced Strength & Capacity Building",
        items: [
          "Improve physical capacity, movement efficiency, dynamic stability, and tolerance for higher functional demands."
        ]
      },
      {
        title: "Phase 5 – Return to Activity or Sport",
        items: [
          "Prepare individuals for safe return to work, recreational activities, or sport through functional rehabilitation and goal-specific progression."
        ]
      }
    ],
    conditionsTreated: [
      "ACL and PCL reconstruction",
      "Meniscus repair or meniscectomy",
      "Rotator cuff repair",
      "Shoulder stabilization surgery",
      "Joint replacement (Hip & Knee)",
      "Fracture fixation (plates, screws, or nails)",
      "Tendon repair surgeries",
      "Cartilage restoration procedures",
      "Spinal surgery",
      "Foot and ankle surgery",
      "Hand and wrist surgery",
      "Other orthopedic procedures"
    ],
    recoveryTimeline: [
      { condition: "Arthroscopic Procedures", duration: "4–8 weeks" },
      { condition: "Fracture Fixation", duration: "8–16 weeks" },
      { condition: "Tendon Repair", duration: "12–24 weeks" },
      { condition: "Rotator Cuff Repair", duration: "4–6 months" },
      { condition: "Joint Replacement", duration: "8–20 weeks" },
      { condition: "Meniscus Repair", duration: "3–6 months" },
      { condition: "ACL Reconstruction", duration: "9–12 months" },
      { condition: "Multi-Ligament Reconstruction", duration: "9–15 months" }
    ],
    timelineNote: "Rehabilitation timelines are individualized and may vary based on healing, surgical findings, overall health, and functional goals.",
    differenceText: "At Aatral360, post-operative rehabilitation is more than following a protocol. We combine surgeon-guided precautions with evidence-based physiotherapy, progressive exercise, movement restoration, and functional training to help every individual recover safely, regain independence, and confidently return to the activities that matter most.",
    process: [
      {
        title: "Post-Surgical Assessment",
        description: "We evaluate your surgical report, healing stage, restrictions, and recovery goals to design a safe rehabilitation plan."
      },
      {
        title: "Five-Phase Progressive Rehabilitation",
        description: "Structured phases from protection and pain management through strength, capacity building, and return to activity."
      },
      {
        title: "Functional Training & Return to Life",
        description: "Preparing you for daily activities, work, and sport with advanced functional training and goal-specific progression."
      }
    ],
    faqs: [
      {
        question: "When should I start rehabilitation after surgery?",
        answer: "Post-operative rehabilitation typically begins as soon as your surgeon clears you, often within the first week after surgery."
      },
      {
        question: "Do you coordinate with my surgeon?",
        answer: "Yes, our rehabilitation plans are developed in close collaboration with your surgeon's recommendations and precautions."
      },
      {
        question: "How long does post-operative rehabilitation take?",
        answer: "Timelines vary from 4–8 weeks for arthroscopic procedures to 9–15 months for complex ligament reconstructions."
      }
    ]
  },
  {
    slug: "neurological-rehabilitation",
    title: "Neurological Rehabilitation",
    subtitle: "Restoring Function. Maximizing Independence. Improving Quality of Life.",
    description:
      "Personalized rehabilitation for neurological conditions — maximizing functional abilities, improving mobility, and regaining independence.",
    icon: "RotateCcw",
    longDescription: [
      "Neurological conditions can significantly affect movement, balance, coordination, strength, and independence. At Aatral360, our adult neurological rehabilitation programs are designed to help individuals maximize their functional abilities, improve mobility, and regain confidence in everyday life through personalized, evidence-based rehabilitation.",
      "Recovery following neurological injury is unique for every individual. While the rate and extent of recovery may vary, our goal is to help every patient achieve their highest level of function through structured rehabilitation, continuous reassessment, and goal-oriented care."
    ],
    approachSections: [
      {
        title: "Comprehensive Neurological Assessment",
        description: "Every rehabilitation program begins with a detailed evaluation of:",
        items: [
          "Functional mobility",
          "Muscle strength",
          "Balance and postural control",
          "Coordination",
          "Walking ability (Gait)",
          "Range of motion",
          "Functional independence",
          "Activities of daily living (ADLs)"
        ]
      },
      {
        title: "Evidence-Based Rehabilitation",
        description: "Our programs may include:",
        items: [
          "Motor control retraining",
          "Motor learning strategies",
          "Functional task-specific training",
          "Balance and coordination exercises",
          "Gait training",
          "Progressive strengthening",
          "Mobility and flexibility exercises",
          "Transfer and bed mobility training",
          "Walking aid training",
          "Functional independence training",
          "Caregiver education and home exercise programs"
        ]
      },
      {
        title: "Our Goals",
        description: "Our neurological rehabilitation programs focus on helping individuals:",
        items: [
          "Improve movement and mobility",
          "Enhance balance and coordination",
          "Increase strength and physical capacity",
          "Improve walking ability",
          "Regain independence in daily activities",
          "Reduce the risk of falls",
          "Maximize long-term functional recovery and participation"
        ]
      }
    ],
    conditionsTreated: [
      "Stroke (CVA)",
      "Parkinson's Disease",
      "Spinal Cord Injury",
      "Traumatic Brain Injury",
      "Multiple Sclerosis",
      "Peripheral Nerve Injuries",
      "Guillain-Barré Syndrome",
      "Bell's Palsy",
      "Vestibular Disorders affecting balance",
      "Other adult neurological movement disorders"
    ],
    recoveryTimeline: [
      { condition: "Stroke Rehabilitation", duration: "3–12+ months" },
      { condition: "Parkinson's Disease", duration: "Ongoing rehabilitation" },
      { condition: "Spinal Cord Injury", duration: "6–24+ months" },
      { condition: "Traumatic Brain Injury", duration: "6–18+ months" },
      { condition: "Multiple Sclerosis", duration: "Individualized long-term rehabilitation" },
      { condition: "Peripheral Nerve Injury", duration: "3–12 months" }
    ],
    timelineNote: "Neurological rehabilitation is individualized, and progress varies between individuals. Rehabilitation focuses on maximizing functional independence and long-term quality of life.",
    differenceText: "At Aatral360, neurological rehabilitation is centered on helping people regain meaningful function, improve independence, and participate confidently in everyday life. Through evidence-based physiotherapy, functional training, and individualized rehabilitation, we support each person's journey toward achieving their highest possible level of recovery and independence.",
    process: [
      {
        title: "Comprehensive Neurological Assessment",
        description: "We evaluate mobility, strength, balance, coordination, gait, and functional independence."
      },
      {
        title: "Evidence-Based Rehabilitation Program",
        description: "Motor control retraining, functional task training, balance exercises, and progressive strengthening."
      },
      {
        title: "Functional Independence & Goal Achievement",
        description: "Building independence in daily activities, reducing fall risk, and maximizing long-term recovery."
      }
    ],
    faqs: [
      {
        question: "Is neurological rehabilitation ongoing?",
        answer: "Some conditions like Parkinson's Disease and Multiple Sclerosis benefit from ongoing rehabilitation. Others, like stroke recovery, may have defined phases with measurable goals."
      },
      {
        question: "Can physiotherapy help after a stroke?",
        answer: "Yes. Post-stroke rehabilitation can significantly improve movement, balance, walking ability, and functional independence."
      },
      {
        question: "Do you provide caregiver education?",
        answer: "Yes, we include caregiver education and home exercise programs as part of our rehabilitation approach."
      }
    ]
  },
  {
    slug: "womens-health-physiotherapy",
    title: "Women's Health Physiotherapy",
    subtitle: "Supporting Women Through Every Stage of Life.",
    description:
      "Safe, evidence-based rehabilitation supporting women during pregnancy, after childbirth, and in managing pelvic health conditions.",
    icon: "HeartHandshake",
    longDescription: [
      "Women's bodies undergo significant physical changes throughout different stages of life. At Aatral360, our Women's Health Physiotherapy programs are designed to support women during pregnancy, after childbirth, and in managing musculoskeletal and pelvic health conditions through safe, evidence-based rehabilitation.",
      "Every rehabilitation program is personalized according to your physical condition, functional limitations, lifestyle, and recovery goals, helping you regain strength, confidence, and independence."
    ],
    approachSections: [
      {
        title: "Comprehensive Assessment",
        description: "Every program begins with a detailed evaluation of:",
        items: [
          "Posture and movement patterns",
          "Core muscle function",
          "Pelvic floor muscle function",
          "Abdominal muscle integrity",
          "Functional strength",
          "Mobility and flexibility",
          "Pain and physical limitations",
          "Daily activity demands"
        ]
      },
      {
        title: "Evidence-Based Rehabilitation",
        description: "Our programs may include:",
        items: [
          "Pregnancy-safe exercise programs",
          "Postnatal rehabilitation",
          "Diastasis Recti rehabilitation",
          "Pelvic floor muscle training",
          "Core strengthening",
          "Breathing and pressure management",
          "Functional movement retraining",
          "Manual therapy (when clinically appropriate)",
          "Mobility and flexibility exercises",
          "Progressive strengthening",
          "Education on posture, lifting, and childcare ergonomics",
          "Home exercise programs"
        ]
      }
    ],
    conditionsTreated: [
      "Pregnancy-related back or pelvic pain",
      "Postnatal recovery",
      "Diastasis Recti (Abdominal Separation)",
      "Urinary Incontinence",
      "Pelvic Floor Muscle Weakness",
      "Pelvic Girdle Pain",
      "Pregnancy-related musculoskeletal conditions",
      "Postural dysfunction after childbirth",
      "Core muscle weakness",
      "Return to exercise after pregnancy"
    ],
    recoveryTimeline: [
      { condition: "Pregnancy Exercise Program", duration: "Throughout pregnancy" },
      { condition: "Postnatal Recovery", duration: "6–16 weeks" },
      { condition: "Diastasis Recti Rehabilitation", duration: "8–16 weeks" },
      { condition: "Pelvic Floor Rehabilitation", duration: "8–16 weeks" },
      { condition: "Pregnancy-Related Back or Pelvic Pain", duration: "4–12 weeks" }
    ],
    timelineNote: "Recovery timelines are individualized and depend on assessment findings, symptom severity, and participation in the rehabilitation program.",
    differenceText: "At Aatral360, Women's Health Physiotherapy focuses on restoring movement, improving core and pelvic floor function, reducing pain, and supporting women through every stage of pregnancy, postpartum recovery, and beyond. Our goal is to help every woman move with confidence, regain physical strength, and return safely to the activities that matter most.",
    process: [
      {
        title: "Comprehensive Assessment",
        description: "We evaluate posture, core and pelvic floor function, strength, mobility, and daily activity demands."
      },
      {
        title: "Personalized Rehabilitation Program",
        description: "Safe, stage-appropriate exercises including pelvic floor training, core strengthening, and functional movement."
      },
      {
        title: "Recovery & Return to Activity",
        description: "Progressive strengthening and education to regain confidence and safely return to exercise and daily activities."
      }
    ],
    faqs: [
      {
        question: "When can I start physiotherapy after delivery?",
        answer: "Postnatal rehabilitation can typically begin 6 weeks after vaginal delivery or as advised by your obstetrician after a cesarean section."
      },
      {
        question: "Is it safe to exercise during pregnancy?",
        answer: "Yes. We design pregnancy-safe exercise programs tailored to your stage of pregnancy and physical condition."
      },
      {
        question: "Can physiotherapy help with urinary incontinence?",
        answer: "Yes. Pelvic floor rehabilitation is an effective, evidence-based approach for managing urinary incontinence."
      }
    ]
  },
  {
    slug: "oncology-rehabilitation",
    title: "Oncology Rehabilitation",
    subtitle: "Restoring Function. Supporting Recovery. Improving Quality of Life.",
    description:
      "Specialized rehabilitation to help individuals safely recover from the physical challenges associated with cancer treatment.",
    icon: "HeartPulse",
    longDescription: [
      "Cancer treatment can affect movement, strength, mobility, and overall quality of life. At Aatral360, our Oncology Rehabilitation programs are designed to help individuals safely recover from the physical challenges associated with cancer treatment through personalized, evidence-based physiotherapy.",
      "Our goal is to reduce treatment-related complications, restore functional independence, improve physical capacity, and support every stage of recovery with compassionate, multidisciplinary care."
    ],
    approachSections: [
      {
        title: "Comprehensive Assessment",
        description: "Every rehabilitation program begins with a detailed evaluation of:",
        items: [
          "Medical and surgical history",
          "Functional mobility",
          "Shoulder and upper limb movement",
          "Pain and soft tissue restrictions",
          "Lymphedema assessment",
          "Functional limitations",
          "Activities of daily living",
          "Quality of life measures"
        ]
      },
      {
        title: "Evidence-Based Rehabilitation",
        description: "Our programs may include:",
        items: [
          "Manual Lymphatic Drainage (MLD)",
          "Complete Decongestive Therapy (CDT)",
          "Multi-Layer Compression Bandaging",
          "Compression Garment Education",
          "Scar Tissue Management",
          "Shoulder Mobility Restoration",
          "Postural Rehabilitation",
          "Therapeutic Exercise",
          "Progressive Strengthening",
          "Functional Rehabilitation",
          "Breathing Exercises",
          "Fatigue Management",
          "Home Exercise Programs"
        ]
      },
      {
        title: "Specialized Rehabilitation",
        description: "Our specialized services include:",
        items: [
          "Post-Mastectomy Rehabilitation",
          "Breast Cancer Rehabilitation",
          "Lymphedema Management",
          "Upper Limb Mobility Restoration",
          "Post-Surgical Shoulder Stiffness",
          "Temporomandibular Joint (TMJ) Rehabilitation following head and neck cancer treatment",
          "Functional Recovery Programs"
        ]
      }
    ],
    targetAudience: [
      "Breast cancer surgery recovery",
      "Mastectomy",
      "Axillary lymph node dissection",
      "Lymphedema",
      "Shoulder stiffness following surgery",
      "Radiation-related movement restrictions",
      "Cancer-related fatigue",
      "Reduced upper limb function",
      "Functional limitations after cancer treatment"
    ],
    recoveryTimeline: [
      { condition: "Post-Mastectomy Rehabilitation", duration: "6–12 weeks" },
      { condition: "Lymphedema Management", duration: "Individualized, ongoing as required" },
      { condition: "Shoulder Mobility Restoration", duration: "6–12 weeks" },
      { condition: "Post-Surgical Functional Rehabilitation", duration: "8–16 weeks" },
      { condition: "Cancer Rehabilitation", duration: "Individualized" }
    ],
    timelineNote: "Regular reassessment ensures that rehabilitation progresses safely according to recovery and functional improvements.",
    differenceText: "At Aatral360, oncology rehabilitation focuses on restoring movement, managing lymphedema, improving upper limb function, and enhancing quality of life after cancer treatment. Our evidence-based programs combine specialized physiotherapy techniques, therapeutic exercise, and personalized rehabilitation to help individuals regain confidence, independence, and physical well-being throughout their recovery journey. Specialized services include Manual Lymphatic Drainage (MLD), Complete Decongestive Therapy (CDT), and Multi-Layer Compression Bandaging provided by a Certified Lymphedema Physiotherapist."
  },
  {
    slug: "corporate-health-wellness",
    title: "Corporate Health & Wellness Programs",
    subtitle: "Healthier Employees. Better Performance. Stronger Workplaces.",
    description:
      "Evidence-based workplace wellness programs combining ergonomics, movement strategies, and preventive health for healthier workplaces.",
    icon: "Building2",
    longDescription: [
      "Modern workplaces have become increasingly sedentary, with many employees spending prolonged hours sitting, working on computers, and performing repetitive tasks. Over time, these work demands can contribute to musculoskeletal pain, reduced mobility, physical deconditioning, stress, fatigue, and decreased workplace productivity.",
      "At Aatral360, our Corporate Health & Wellness Programs are designed to create healthier, more resilient workplaces through evidence-based education, movement strategies, ergonomic interventions, and preventive health programs."
    ],
    approachSections: [
      {
        title: "Workplace Health Assessment",
        description: "Every corporate program begins with understanding the physical demands of your workplace. Our assessments may include:",
        items: [
          "Workplace ergonomic evaluation",
          "Individual movement screening",
          "Postural assessment",
          "Functional mobility assessment",
          "Musculoskeletal risk assessment",
          "Physical activity and lifestyle evaluation"
        ]
      },
      {
        title: "Evidence-Based Workplace Solutions",
        description: "Our programs may include:",
        items: [
          "Workplace Ergonomics Education",
          "Desk Setup & Posture Optimization",
          "Movement Break Strategies",
          "Exercise Break Sessions",
          "Mobility & Flexibility Programs",
          "Strength & Conditioning for Office Workers",
          "Stress Management Techniques",
          "Breathing & Relaxation Exercises",
          "Functional Fitness Programs",
          "Injury Prevention Workshops",
          "Lifestyle & Physical Activity Education"
        ]
      },
      {
        title: "Health Monitoring & Employee Wellbeing",
        description: "Where appropriate, our wellness programs may include periodic assessment of:",
        items: [
          "Physical activity levels",
          "Mobility and flexibility",
          "Strength and functional capacity",
          "Balance and movement quality",
          "Musculoskeletal health",
          "Stress and wellbeing questionnaires",
          "Progress tracking and health education"
        ]
      }
    ],
    targetAudience: [
      "IT & Software Companies",
      "Corporate Offices",
      "Manufacturing Industries",
      "Educational Institutions",
      "Healthcare Organizations",
      "Banks & Financial Services",
      "Government Organizations",
      "Small and Medium Enterprises (SMEs)"
    ],
    conditionsTreated: [
      "Work-related musculoskeletal pain",
      "Postural dysfunction",
      "Repetitive strain injuries",
      "Workplace ergonomic issues",
      "Physical deconditioning",
      "Stress-related physical symptoms"
    ],
    recoveryTimeline: [
      { condition: "Ergonomics Awareness Session", duration: "60–90 minutes" },
      { condition: "Workplace Health Workshop", duration: "Half Day / Full Day" },
      { condition: "Group Exercise Sessions", duration: "Weekly or Monthly" },
      { condition: "Corporate Wellness Program", duration: "6–12 weeks" },
      { condition: "Annual Workplace Wellness Partnership", duration: "Ongoing" }
    ],
    differenceText: "At Aatral360, we believe workplace wellness extends beyond correcting posture. Our programs integrate ergonomics, movement science, exercise prescription, stress management, and preventive healthcare to help employees move better, work comfortably, improve physical resilience, and maintain long-term health. By creating healthier individuals, we help organizations build more productive, engaged, and sustainable workplaces.",
    process: [
      {
        title: "Workplace Health Assessment",
        description: "We evaluate ergonomics, movement patterns, postural habits, and musculoskeletal risk factors in your workplace."
      },
      {
        title: "Customized Wellness Program",
        description: "Evidence-based programs including ergonomics education, exercise sessions, stress management, and injury prevention."
      },
      {
        title: "Monitoring & Long-Term Partnership",
        description: "Periodic health assessments, progress tracking, and ongoing wellness support for sustained workplace health."
      }
    ],
    faqs: [
      {
        question: "Can programs be delivered on-site?",
        answer: "Yes. Programs can be delivered on-site, at our rehabilitation center, or in hybrid formats depending on organizational requirements."
      },
      {
        question: "Is this suitable for small businesses?",
        answer: "Yes. Our programs are suitable for organizations of all sizes, from small enterprises to large corporations."
      },
      {
        question: "How long is a typical corporate wellness program?",
        answer: "Programs range from single awareness sessions (60–90 minutes) to comprehensive 6–12 week programs or ongoing annual partnerships."
      }
    ]
  },
];