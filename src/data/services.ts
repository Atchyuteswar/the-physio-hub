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
      "Targeted exercise programs to strengthen muscles, improve joint stability, and restore optimal movement patterns.",
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
      "Evidence-based strategies to manage and reduce persistent pain through manual therapy, exercises, and education.",
    icon: "HeartPulse",
  },
  {
    slug: "post-surgical-reconditioning",
    title: "Post-Surgical Re-Conditioning",
    description:
      "Structured rehabilitation programs to safely restore function and strength after orthopedic or spinal surgery.",
    icon: "Stethoscope",
  },
  {
    slug: "sports-injury-conditioning",
    title: "Sports Injury Conditioning",
    description:
      "Sport-specific rehabilitation and performance recovery programs for athletes at all levels.",
    icon: "Zap",
  },
  {
    slug: "movement-retraining-motor-control",
    title: "Movement Retraining & Motor Control Programs",
    description:
      "Neuromuscular re-education to correct faulty movement patterns and improve motor control efficiency.",
    icon: "RotateCcw",
  },
  {
    slug: "return-to-activity",
    title: "Return-to-Activity / Functional Reintegration Programs",
    description:
      "Progressive programs designed to safely transition you back to daily activities, work, or sport.",
    icon: "Footprints",
  },
  {
    slug: "spine-care-functional-rehabilitation",
    title: "Spine Care & Functional Rehabilitation",
    description:
      "Specialized spine rehabilitation focusing on core stability, posture correction, and functional recovery.",
    icon: "Bone",
  },
  {
    slug: "clinical-workshops",
    title: "Clinical Workshops & Skill-Building Programs",
    description:
      "Hands-on workshops for patients and professionals covering injury prevention and self-management techniques.",
    icon: "GraduationCap",
  },
  {
    slug: "professional-webinars",
    title: "Professional Webinars & Clinical Education",
    description:
      "Online educational sessions covering the latest in physiotherapy research, techniques, and clinical practice.",
    icon: "Video",
  },
];