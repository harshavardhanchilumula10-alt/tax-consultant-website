import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ScrollAnimationInit from "@/components/ScrollAnimationInit";
import ServicesPageContent from "@/components/services/ServicesPageContent";

export const metadata: Metadata = {
    title: "ITR Filing, GST Registration & Tax Services in Karimnagar | Bejjanki Tax Consultancy",
    description:
        "Complete tax services in Karimnagar: ITR filing, GST registration, GST return filing, tax planning, business registration, accounting & financial advisory by Sugunakar Bejjanki. Trusted tax consultant near you in Karimnagar, Telangana.",
    keywords: [
        "ITR filing Karimnagar",
        "GST registration Karimnagar",
        "GST return filing Karimnagar",
        "income tax filing near me Karimnagar",
        "business registration Karimnagar",
        "accounting services Karimnagar",
        "tax planning Telangana",
        "financial advisory Karimnagar",
    ],
    alternates: { canonical: "https://www.bejjankitax.com/services" },
    openGraph: {
        title: "ITR Filing, GST & Tax Services in Karimnagar – Bejjanki Tax Consultancy",
        description: "Expert tax services by Sugunakar Bejjanki in Karimnagar: ITR filing, GST registration, tax planning, business registration & more.",
        url: "https://www.bejjankitax.com/services",
    },
};

export default function ServicesPage() {
    return (
        <>
            <ScrollAnimationInit />
            <Navbar />
            <main style={{ paddingTop: "62px" }}>
                <ServicesPageContent />
            </main>
            <Footer />
            <WhatsAppFloat />
        </>
    );
}
