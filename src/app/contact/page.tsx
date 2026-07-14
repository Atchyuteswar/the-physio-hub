import ContactSection from "@/components/landing/ContactSection";

export const metadata = {
  title: "Contact Us | Aatral360",
  description: "Get in touch with the Aatral360 team.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center pt-8 pb-16">
      <div className="w-full">
        <ContactSection />
      </div>
    </main>
  );
}
