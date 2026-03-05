import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ScrollAnimationInit from "@/components/ScrollAnimationInit";
import AboutPageContent from "@/components/about/AboutPageContent";

export const metadata: Metadata = {
    title: "About Sugunakar Bejjanki – Best Tax Practitioner in Karimnagar, Telangana",
    description:
        "Sugunakar Bejjanki is the best income tax practitioner in Karimnagar with 20+ years of experience. Enrolled Tax Practitioner (ETP) serving individuals and businesses across Telangana.",
    keywords: [
        "Sugunakar Bejjanki tax consultant",
        "best income tax practitioner Karimnagar",
        "enrolled tax practitioner Karimnagar",
        "tax consultant Karimnagar Telangana",
        "financial advisor Karimnagar",
        "tax expert near me Karimnagar",
    ],
    alternates: { canonical: "https://www.bejjankitax.com/about" },
    openGraph: {
        title: "Sugunakar Bejjanki – Best Tax Practitioner in Karimnagar",
        description: "Enrolled Tax Practitioner with 20+ years experience in Karimnagar, Telangana. ITR filing, GST, tax planning & financial advisory.",
        url: "https://www.bejjankitax.com/about",
    },
};

export default function AboutPage() {
    return (
        <>
            <ScrollAnimationInit />
            <Navbar />
            <main style={{ paddingTop: "62px" }}>
                <AboutPageContent />
            </main>
            <Footer />
            <WhatsAppFloat />
        </>
    );
}
