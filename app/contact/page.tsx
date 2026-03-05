import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ScrollAnimationInit from "@/components/ScrollAnimationInit";
import ContactPageContent from "@/components/contact/ContactPageContent";

export const metadata: Metadata = {
    title: "Contact Income Tax Consultant in Karimnagar – Call +91 8341704756 | Bejjanki Tax",
    description:
        "Contact Sugunakar Bejjanki, income tax consultant in Karimnagar, Telangana. Call +91 8341704756 for a free tax consultation. Visit our office at Karimnagar or book online. GST, ITR, tax planning services available.",
    keywords: [
        "contact tax consultant Karimnagar",
        "book tax consultation Karimnagar",
        "income tax help near me Karimnagar",
        "tax consultant phone number Karimnagar",
        "GST help Karimnagar",
        "free tax consultation Telangana",
    ],
    alternates: { canonical: "https://www.bejjankitax.com/contact" },
    openGraph: {
        title: "Contact Sugunakar Bejjanki – Income Tax Consultant in Karimnagar",
        description: "Call +91 8341704756 or WhatsApp for expert income tax & GST services in Karimnagar, Telangana. Free first consultation.",
        url: "https://www.bejjankitax.com/contact",
    },
};

export default function ContactPage() {
    return (
        <>
            <ScrollAnimationInit />
            <Navbar />
            <main style={{ paddingTop: "62px" }}>
                <ContactPageContent />
            </main>
            <Footer />
            <WhatsAppFloat />
        </>
    );
}
