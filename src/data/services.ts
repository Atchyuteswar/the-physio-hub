export type ProcessStep = {
  title: string;
  description: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: string;
  longDescription?: string[];
  targetAudience?: string[];
  conditionsTreated?: string[];
  process?: ProcessStep[];
  faqs?: FAQ[];
};

export const services: Service[] = [
  {
    slug: "musculoskeletal-conditioning",
    title: "Musculoskeletal Conditioning",
    description:
      "Personalized programs for joint and muscle conditions, improving strength, movement, and function for acute and chronic pain.",
    icon: "Activity",
    longDescription: [
      "Musculoskeletal conditioning is a comprehensive approach to rehabilitation that goes beyond basic injury recovery. It focuses on optimizing the function of your muscles, bones, joints, and connective tissues to build resilience and prevent future injuries.",
      "Whether you are recovering from a chronic condition, preparing for a demanding physical activity, or simply looking to improve your daily functional capacity, our tailored conditioning programs are designed to restore strength, flexibility, and endurance safely and effectively."
    ],
    targetAudience: [
      "Individuals recovering from prolonged immobilization or injury.",
      "Athletes looking to optimize biomechanics and prevent sports injuries.",
      "Older adults seeking to maintain bone density and muscle mass.",
      "Office workers dealing with postural imbalances and joint stiffness.",
      "Anyone experiencing generalized weakness or chronic musculoskeletal fatigue."
    ],
    conditionsTreated: [
      "Muscle Atrophy and Weakness",
      "Osteoarthritis and Joint Degeneration",
      "Tendinopathies (e.g., Achilles, Patellar, Tennis Elbow)",
      "Postural Dysfunctions",
      "Hypermobility Syndromes",
      "General Deconditioning"
    ],
    process: [
      {
        title: "Comprehensive Biomechanical Assessment",
        description: "We begin with a detailed analysis of your movement patterns, identifying muscular imbalances, joint restrictions, and areas of weakness."
      },
      {
        title: "Customized Programming",
        description: "Based on your assessment, we develop a phased conditioning program that progressively loads your tissues to build strength without causing flare-ups."
      },
      {
        title: "Supervised Progression",
        description: "You'll work closely with our physiotherapists to ensure flawless technique, gradually increasing intensity as your body adapts and becomes stronger."
      }
    ],
    faqs: [
      {
        question: "How is this different from standard physical therapy?",
        answer: "While standard physical therapy often focuses on acute pain relief and basic mobility recovery, musculoskeletal conditioning is an advanced phase designed to build high-level tissue capacity and bulletproof your body against future injuries."
      },
      {
        question: "Do I need a gym membership to complete the exercises?",
        answer: "No. While we utilize clinical equipment during your in-clinic sessions, we always design your home exercise program around the equipment you have available, whether that's resistance bands, bodyweight, or a full gym."
      },
      {
        question: "How long does a conditioning program typically last?",
        answer: "Because tissues (especially tendons and ligaments) take time to adapt to load, most conditioning programs run between 8 to 12 weeks to see significant, lasting structural changes in the body."
      }
    ]
  },
  {
    slug: "chronic-pain-management",
    title: "Chronic Pain Management",
    description:
      "Evidence-based care for chronic pain using education, graded exercise, load control, and functional movement therapy.",
    icon: "HeartPulse",
    longDescription: [
      "Chronic pain management is a specialized physiotherapy approach for individuals suffering from persistent pain lasting more than three months.",
      "Instead of only treating symptoms, this program focuses on understanding pain, improving movement, and restoring physical confidence. Our therapists use scientifically proven techniques to help you manage pain safely and return to an active lifestyle."
    ],
    targetAudience: [
      "People with long-term back pain",
      "Individuals with chronic neck pain",
      "Patients with recurrent joint pain",
      "Office workers with posture-related pain",
      "People with long-standing muscle pain",
      "People afraid of movement due to pain",
      "Patients with arthritis-related discomfort",
      "Patients with lifestyle-related pain conditions"
    ],
    conditionsTreated: [
      "Chronic Low Back Pain",
      "Cervical Pain",
      "Shoulder Pain",
      "Knee Pain",
      "Arthritis Pain",
      "Postural Pain Syndromes",
      "Recurrent Sports Injuries",
      "Myofascial Pain",
      "Work-Related Musculoskeletal Pain"
    ],
    process: [
      {
        title: "Comprehensive Pain Assessment",
        description: "We evaluate your pain history, lifestyle, movement patterns, emotional factors, and physical limitations."
      },
      {
        title: "Personalized Pain Management Program",
        description: "We design a customized plan including pain education, graded exercises, and load management strategies."
      },
      {
        title: "Functional Movement & Self-Management",
        description: "We help you develop safe movement habits and self-management skills for long-term pain control."
      }
    ],
    faqs: [
      {
        question: "How long does the program last?",
        answer: "Usually 4–8 weeks depending on your condition."
      },
      {
        question: "Is this suitable for chronic pain?",
        answer: "Yes, our programs are specially designed for both acute and chronic conditions."
      },
      {
        question: "Will exercises be customized?",
        answer: "Yes, every program is personalized."
      },
      {
        question: "Do I need a doctor’s referral?",
        answer: "No, you can directly book an appointment."
      },
      {
        question: "Is it safe for elderly patients?",
        answer: "Yes, programs are adjusted based on age and health condition."
      }
    ]
  },
  {
    slug: "post-surgical-reconditioning",
    title: "Post-Surgical Re-Conditioning",
    description:
      "Structured rehab after surgery focusing on healing, strength, movement recovery, and safe return to daily and functional activities.",
    icon: "Stethoscope",
    longDescription: [
      "Post-surgical rehabilitation is a specialized physiotherapy program designed to help patients recover after surgery. It focuses on restoring mobility, strength, flexibility, and function while respecting tissue healing timelines.",
      "Our expert physiotherapists guide you through each stage of recovery to ensure safe and effective healing and prevent future complications."
    ],
    targetAudience: [
      "Patients after orthopedic surgery",
      "Individuals recovering from sports injuries",
      "Ligament reconstruction patients (ACL, PCL, etc.)",
      "Anyone advised rehabilitation after surgery",
      "People with chronic musculoskeletal pain",
      "Athletes needing conditioning support",
      "Elderly individuals with mobility issues",
      "Patients after surgery or long-term immobilization"
    ],
    conditionsTreated: [
      "Knee Replacement Surgery",
      "Hip Replacement Surgery",
      "ACL / Ligament Reconstruction",
      "Meniscus Surgery",
      "Rotator Cuff Repair",
      "Shoulder Surgery",
      "Spine Surgery",
      "Fracture Fixation",
      "Ankle & Foot Surgery"
    ],
    process: [
      {
        title: "Post-Surgical Assessment",
        description: "We evaluate your surgical report, pain level, swelling, range of motion, and mobility to design a safe recovery plan."
      },
      {
        title: "Progressive Rehabilitation Program",
        description: "We implement stage-wise exercises focusing on tissue healing, flexibility, muscle activation, and gradual strengthening."
      },
      {
        title: "Functional Training & Return to Activity",
        description: "We prepare you for daily activities, work, sports, and lifestyle demands with advanced functional training."
      }
    ],
    faqs: [
      {
        question: "How long does the program last?",
        answer: "Usually 4–8 weeks depending on your condition."
      },
      {
        question: "Is this suitable for chronic pain?",
        answer: "Yes, our programs are specially designed for both acute and chronic conditions."
      },
      {
        question: "Will exercises be customized?",
        answer: "Yes, every program is personalized."
      },
      {
        question: "Do I need a doctor’s referral?",
        answer: "No, you can directly book an appointment."
      },
      {
        question: "Is it safe for elderly patients?",
        answer: "Yes, programs are adjusted based on age and health condition."
      }
    ]
  },
  {
    slug: "sports-injury-conditioning",
    title: "Sports Injury Conditioning",
    description:
      "Targeted rehab for sports injuries focusing on biomechanics, safe loading, injury prevention, and gradual return to sport.",
    icon: "Zap",
    longDescription: [
      "Sports injury rehabilitation is a specialized physiotherapy program aimed at helping athletes recover from injuries and return to peak performance. It focuses on restoring strength, flexibility, coordination, and movement efficiency.",
      "Our conditioning programs are designed to rebuild physical capacity, prevent re-injury, and enhance athletic performance."
    ],
    targetAudience: [
      "Recreational athletes",
      "Gym enthusiasts",
      "Professional sportspersons",
      "Runners and cyclists",
      "Football, cricket, badminton players",
      "Fitness trainers",
      "College-level athletes",
      "Anyone with repeated sports injuries"
    ],
    conditionsTreated: [
      "Muscle Strains & Tears",
      "Ligament Injuries (ACL, MCL, etc.)",
      "Ankle Sprains",
      "Tennis Elbow / Golfer’s Elbow",
      "Rotator Cuff Injuries",
      "Runner’s Knee",
      "Achilles Tendon Injuries",
      "Meniscus Injuries",
      "Shin Splints"
    ],
    process: [
      {
        title: "Biomechanical Assessment",
        description: "We analyze your posture, movement patterns, sports technique, and injury history."
      },
      {
        title: "Progressive Loading & Conditioning",
        description: "We implement controlled strengthening, mobility, and endurance training based on healing stages."
      },
      {
        title: "Return-to-Sport Training",
        description: "We prepare you for real sports demands with agility, speed, balance, and sport-specific drills."
      }
    ],
    faqs: [
      {
        question: "How long does the program last?",
        answer: "Usually 4–8 weeks depending on your condition."
      },
      {
        question: "Is this suitable for chronic pain?",
        answer: "Yes, our programs are specially designed for both acute and chronic conditions."
      },
      {
        question: "Will exercises be customized?",
        answer: "Yes, every program is personalized."
      },
      {
        question: "Do I need a doctor’s referral?",
        answer: "No, you can directly book an appointment."
      },
      {
        question: "Is it safe for elderly patients?",
        answer: "Yes, programs are adjusted based on age and health condition."
      }
    ]
  },
  {
    slug: "movement-retraining-motor-control",
    title: "Movement Retraining & Motor Control Programs",
    description:
      "Movement-based rehab to improve balance, posture, coordination, and motor control for children and special needs patients.",
    icon: "RotateCcw",
    longDescription: [
      "Movement retraining is a specialized physiotherapy approach that helps individuals improve how their body moves and responds. It focuses on retraining the brain and muscles to work together efficiently.",
      "These programs are especially helpful for patients who experience difficulty with balance, posture, coordination, or controlled movements. Our therapists create personalized programs to improve functional independence and quality of life."
    ],
    targetAudience: [
      "Individuals with postural problems",
      "Special needs individuals",
      "Stroke recovery patients",
      "Elderly patients with fall risk"
    ],
    conditionsTreated: [
      "Cerebral Palsy",
      "Stroke Rehabilitation",
      "Parkinson’s Disease",
      "Developmental Coordination Disorder",
      "Balance Disorders",
      "Postural Instability",
      "Neuromuscular Conditions",
      "Delayed Motor Milestones",
      "Vestibular Disorders"
    ],
    process: [
      {
        title: "Movement & Functional Assessment",
        description: "We assess posture, balance, coordination, gait, and motor responses."
      },
      {
        title: "Personalized Motor Training Program",
        description: "We design customized exercises focusing on balance, coordination, posture correction, and controlled movements."
      },
      {
        title: "Functional Integration & Skill Development",
        description: "We integrate learned movements into daily activities, school, work, and lifestyle tasks."
      }
    ],
    faqs: [
      {
        question: "How long does the program last?",
        answer: "Usually 4–8 weeks depending on your condition."
      },
      {
        question: "Is this suitable for chronic pain?",
        answer: "Yes, our programs are specially designed for both acute and chronic conditions."
      },
      {
        question: "Will exercises be customized?",
        answer: "Yes, every program is personalized."
      },
      {
        question: "Do I need a doctor’s referral?",
        answer: "No, you can directly book an appointment."
      },
      {
        question: "Is it safe for elderly patients?",
        answer: "Yes, programs are adjusted based on age and health condition."
      }
    ]
  },
  {
    slug: "return-to-activity",
    title: "Return-to-Activity / Functional Reintegration Programs",
    description:
      "Progressive programs to safely return patients to daily life, work, or sport using guided functional recovery stages.",
    icon: "Footprints",
    longDescription: [
      "Conditioning-based progression programs designed to safely transition individuals back to daily activities, work, or sports. Guided by objective functional benchmarks for each phase of recovery and reintegration.",
      "Functional reintegration is a structured rehabilitation approach that helps individuals return safely to normal life after injury, illness, or surgery. It focuses on rebuilding physical capacity, confidence, and performance for real-life activities. Our programs ensure that patients meet specific recovery benchmarks before progressing to higher activity levels."
    ],
    targetAudience: [
      "Patients recovering from injury or surgery",
      "Individuals returning to work after long absence",
      "Athletes preparing to return to sports",
      "People with reduced physical endurance",
      "Workers with physically demanding jobs",
      "Individuals with fear of re-injury",
      "Elderly individuals regaining independence",
      "Anyone resuming an active lifestyle"
    ],
    conditionsTreated: [
      "Daily household activities",
      "Office and desk work",
      "Manual labor and industrial work",
      "Sports and fitness activities",
      "Lifting and carrying tasks",
      "Walking, running, and climbing",
      "Driving and commuting",
      "Post-surgical functional recovery",
      "Post-injury mobility restoration"
    ],
    process: [
      {
        title: "Functional Capacity Evaluation",
        description: "We assess strength, endurance, balance, mobility, and task-specific abilities."
      },
      {
        title: "Progressive Conditioning Program",
        description: "We design graded training programs that gradually increase physical demands based on recovery benchmarks."
      },
      {
        title: "Real-Life Activity Simulation",
        description: "We simulate work, sport, and daily activity tasks to ensure safe and confident return."
      }
    ],
    faqs: [
      {
        question: "How long does the program last?",
        answer: "Usually 4–8 weeks depending on your condition."
      },
      {
        question: "Is this suitable for chronic pain?",
        answer: "Yes, our programs are specially designed for both acute and chronic conditions."
      },
      {
        question: "Will exercises be customized?",
        answer: "Yes, every program is personalized."
      },
      {
        question: "Do I need a doctor’s referral?",
        answer: "No, you can directly book an appointment."
      },
      {
        question: "Is it safe for elderly patients?",
        answer: "Yes, programs are adjusted based on age and health condition."
      }
    ]
  },
  {
    slug: "spine-care-functional-rehabilitation",
    title: "Spine Care & Functional Rehabilitation",
    description:
      "Specialized spine rehab focusing on stability, posture, load tolerance, and functional movement for neck and back conditions.",
    icon: "Bone",
    longDescription: [
      "Spine care and functional rehabilitation is a specialized physiotherapy approach designed to treat neck, upper back, and lower back conditions. Instead of temporary pain relief, this program focuses on strengthening spinal support muscles, improving posture, and restoring healthy movement patterns.",
      "Our goal is to help patients achieve long-term spine health and prevent recurring problems."
    ],
    targetAudience: [
      "People with chronic neck or back pain",
      "Patients diagnosed with IVDP (Disc Problems)",
      "Individuals with nerve-related pain",
      "Office workers with posture issues",
      "People with prolonged sitting habits",
      "Manual workers with spinal strain",
      "Post-surgical spine patients",
      "Individuals with stiffness and mobility issues"
    ],
    conditionsTreated: [
      "Cervical Spondylosis",
      "Lumbar Spondylosis",
      "IVDP (Slip Disc)",
      "Sciatica",
      "Radiculopathy",
      "Myelopathy",
      "Disc Bulge / Herniation",
      "Postural Kyphosis",
      "Facet Joint Syndrome"
    ],
    process: [
      {
        title: "Detailed Spine Assessment",
        description: "We evaluate posture, spinal alignment, movement patterns, nerve symptoms, and lifestyle factors."
      },
      {
        title: "Stability & Load Management Training",
        description: "We design exercises to improve spinal stability, strengthen core muscles, and increase load tolerance safely."
      },
      {
        title: "Functional Movement & Posture Correction",
        description: "We train you in correct sitting, standing, lifting, and daily movement techniques to protect your spine."
      }
    ],
    faqs: [
      {
        question: "How long does the program last?",
        answer: "Usually 4–8 weeks depending on your condition."
      },
      {
        question: "Is this suitable for chronic pain?",
        answer: "Yes, our programs are specially designed for both acute and chronic conditions."
      },
      {
        question: "Will exercises be customized?",
        answer: "Yes, every program is personalized."
      },
      {
        question: "Do I need a doctor’s referral?",
        answer: "No, you can directly book an appointment."
      },
      {
        question: "Is it safe for elderly patients?",
        answer: "Yes, programs are adjusted based on age and health condition."
      }
    ]
  },
  {
    slug: "clinical-workshops",
    title: "Clinical Workshops & Skill-Building Programs",
    description:
      "Interactive workshops for injury prevention, movement awareness, self-care skills, and long-term musculoskeletal health.",
    icon: "GraduationCap",
    longDescription: [
      "Clinical workshops are interactive learning programs that combine theory and practical training. They help participants understand their body, improve movement habits, and prevent injuries through evidence-based techniques.",
      "These programs empower individuals with skills to manage their own health and performance safely. Educational and hands-on workshops are designed for patients, athletes, and fitness enthusiasts."
    ],
    targetAudience: [
      "Patients recovering from injury",
      "Athletes and sportspersons",
      "Gym and fitness enthusiasts",
      "Coaches and trainers",
      "Office workers",
      "Students",
      "Corporate wellness groups",
      "Anyone interested in physical health"
    ],
    conditionsTreated: [
      "Injury Prevention Techniques",
      "Correct Exercise Form",
      "Ergonomics at Work",
      "Stretching & Mobility",
      "Self-Management of Pain",
      "Warm-Up & Cool-Down Methods",
      "Load Management",
      "Recovery Strategies",
      "Lifestyle Modification"
    ],
    process: [
      {
        title: "Needs Assessment",
        description: "We understand the goals, background, and physical demands of participants."
      },
      {
        title: "Interactive Learning & Practice",
        description: "We conduct hands-on sessions with live demonstrations and supervised practice."
      },
      {
        title: "Skill Application & Follow-Up",
        description: "We provide guidance on applying learned skills in daily life and sports."
      }
    ],
    faqs: [
      {
        question: "How long does the program last?",
        answer: "Usually 4–8 weeks depending on your condition."
      },
      {
        question: "Is this suitable for chronic pain?",
        answer: "Yes, our programs are specially designed for both acute and chronic conditions."
      },
      {
        question: "Will exercises be customized?",
        answer: "Yes, every program is personalized."
      },
      {
        question: "Do I need a doctor’s referral?",
        answer: "No, you can directly book an appointment."
      },
      {
        question: "Is it safe for elderly patients?",
        answer: "Yes, programs are adjusted based on age and health condition."
      }
    ]
  },
  {
    slug: "professional-webinars",
    title: "Professional Webinars & Clinical Education",
    description:
      "Online educational sessions covering the latest in physiotherapy research, techniques, and clinical practice.",
    icon: "Video",
    longDescription: [
      "Our professional education programs are designed to help physiotherapists enhance their clinical knowledge, practical skills, and decision-making abilities. Through structured webinars and interactive sessions, participants gain exposure to modern assessment and rehabilitation approaches.",
      "These programs bridge the gap between academic learning and real-world clinical practice."
    ],
    targetAudience: [
      "Practicing physiotherapists",
      "Fresh graduates",
      "Interns and trainees",
      "Clinic owners",
      "Sports physiotherapists",
      "Orthopedic physiotherapists",
      "Neuro physiotherapists",
      "Rehabilitation professionals"
    ],
    conditionsTreated: [
      "Advanced Assessment Techniques",
      "Biomechanics & Movement Analysis",
      "Clinical Reasoning Models",
      "Evidence-Based Practice",
      "Pain Science",
      "Load Management",
      "Return-to-Function Protocols",
      "Injury Prevention Strategies",
      "Case Study Discussions"
    ],
    process: [
      {
        title: "Knowledge Foundation",
        description: "We cover essential theory and current research-based practices."
      },
      {
        title: "Clinical Application",
        description: "We demonstrate real-life case handling and treatment planning."
      },
      {
        title: "Skill Integration & Mentorship",
        description: "We support participants in implementing learned strategies into their daily practice."
      }
    ],
    faqs: [
      {
        question: "How long does the program last?",
        answer: "Usually 4–8 weeks depending on your condition."
      },
      {
        question: "Is this suitable for chronic pain?",
        answer: "Yes, our programs are specially designed for both acute and chronic conditions."
      },
      {
        question: "Will exercises be customized?",
        answer: "Yes, every program is personalized."
      },
      {
        question: "Do I need a doctor’s referral?",
        answer: "No, you can directly book an appointment."
      },
      {
        question: "Is it safe for elderly patients?",
        answer: "Yes, programs are adjusted based on age and health condition."
      }
    ]
  },
];