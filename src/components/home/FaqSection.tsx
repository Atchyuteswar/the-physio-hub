"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do I need a doctor's referral to see a physiotherapist?",
      answer: "No, you do not need a doctor's referral to book an appointment with us. Physiotherapists are primary healthcare practitioners, meaning you can contact us directly to start your treatment."
    },
    {
      question: "What should I expect during my first visit?",
      answer: "Your initial visit will include a comprehensive assessment where we discuss your medical history, analyze your movement and posture, and identify the root cause of your pain. We will then discuss a personalized treatment plan and usually begin your first treatment session."
    },
    {
      question: "How long does a typical physiotherapy session last?",
      answer: "Initial assessments typically take 45-60 minutes to ensure we thoroughly understand your condition. Follow-up treatment sessions usually last between 30-45 minutes depending on your specific needs and the treatment modalities used."
    },
    {
      question: "Will the treatment be painful?",
      answer: "While some therapies (like deep tissue release) can cause mild, temporary discomfort, our goal is never to cause you pain. We constantly monitor your comfort levels and adjust our techniques accordingly. Our priority is to relieve your pain, not add to it."
    },
    {
      question: "How many sessions will I need to get better?",
      answer: "Every patient and condition is unique. Some minor issues may resolve in 2-3 sessions, while chronic or post-surgical conditions may require a longer program over several weeks or months. We will provide a clear estimate after your initial assessment."
    }
  ];

  return (
    <section className="section bg-slate-50 border-t border-slate-100">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <span className="badge">Frequently Asked Questions</span>
          <h2 className="mt-6 text-3xl md:text-4xl font-bold text-slate-900">
            Common Patient Questions
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Everything you need to know before starting your recovery journey.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div 
                key={idx} 
                className={`bg-white rounded-2xl border transition-all duration-300 ${
                  isOpen ? "border-green-300 shadow-md shadow-green-900/5" : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex items-center justify-between w-full p-6 text-left"
                >
                  <span className={`text-lg font-bold pr-8 transition-colors ${isOpen ? "text-green-700" : "text-slate-900"}`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    isOpen ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-500"
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-6 pt-0 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
