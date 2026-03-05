import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ScrollAnimationInit from "@/components/ScrollAnimationInit";
import HeroSection from "@/components/HeroSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import HealthInsuranceSection from "@/components/home/HealthInsuranceSection";
import AboutSnippet from "@/components/home/AboutSnippet";
import WhoWeHelp from "@/components/home/WhoWeHelp";
import TrustSection from "@/components/home/TrustSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
import HomeCTA from "@/components/home/HomeCTA";
import LocalSEOSection from "@/components/home/LocalSEOSection";

export const metadata: Metadata = {
  title: "Income Tax Consultant in Karimnagar | Sugunakar Bejjanki – Bejjanki Tax Consultancy",
  description:
    "Need an Income Tax Consultant in Karimnagar? Sugunakar Bejjanki offers expert ITR filing, GST registration, tax planning & financial advisory in Karimnagar, Telangana with 20+ years experience. Call +91 8341704756 for a free consultation.",
  keywords: [
    "income tax consultant Karimnagar",
    "best tax practitioner Karimnagar",
    "ITR filing Karimnagar",
    "GST registration Karimnagar",
    "tax consultant near me Karimnagar",
    "income tax filing Telangana",
    "tax planning Karimnagar",
    "Sugunakar Bejjanki",
  ],
  alternates: { canonical: "https://www.bejjankitax.com/" },
  openGraph: {
    title: "Income Tax Consultant in Karimnagar – Sugunakar Bejjanki",
    description: "Expert ITR filing, GST services, tax planning & financial advisory in Karimnagar. 20+ years experience. Call +91 8341704756.",
    url: "https://www.bejjankitax.com/",
  },
};

export default function HomePage() {
  return (
    <>
      <ScrollAnimationInit />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSnippet />
        <WhoWeHelp />
        <ServicesPreview />
        <HealthInsuranceSection />
        <TrustSection />
        <LocalSEOSection />
        <TestimonialsSection />
        <FAQSection />
        <HomeCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
