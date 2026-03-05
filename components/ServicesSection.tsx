"use client";

import { useEffect, useRef } from "react";
import {
    FileText,
    Building2,
    ReceiptText,
    PiggyBank,
    Briefcase,
    AlertCircle,
} from "lucide-react";

const services = [
    {
        icon: FileText,
        title: "Income Tax Return Filing",
        description:
            "Accurate and timely ITR filing for salaried individuals, businessmen, NRIs, and senior citizens. All ITR forms covered.",
        color: "#1a56db",
        bg: "#e8f0fc",
    },
    {
        icon: Building2,
        title: "GST Registration",
        description:
            "Hassle-free GST registration for new businesses and traders. Get your GSTIN quickly with expert guidance.",
        color: "#7c3aed",
        bg: "#ede9fe",
    },
    {
        icon: ReceiptText,
        title: "GST Return Filing",
        description:
            "Monthly and quarterly GSTR-1, GSTR-3B, GSTR-9 filing with 100% accuracy to avoid penalties.",
        color: "#0891b2",
        bg: "#e0f2fe",
    },
    {
        icon: PiggyBank,
        title: "Tax Planning & Advisory",
        description:
            "Strategic tax planning to minimize your tax liability. Expert advice on investments, deductions, and exemptions.",
        color: "#059669",
        bg: "#d1fae5",
    },
    {
        icon: Briefcase,
        title: "Business Registration",
        description:
            "Sole proprietorship, partnership, LLP, and private limited company registration with complete compliance support.",
        color: "#d97706",
        bg: "#fef3c7",
    },
    {
        icon: AlertCircle,
        title: "IT Notice Handling",
        description:
            "Professional response to income tax notices, scrutiny assessments, and rectification requests from the IT department.",
        color: "#dc2626",
        bg: "#fee2e2",
    },
];

export default function ServicesSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = sectionRef.current?.querySelectorAll(".scroll-animate");
        elements?.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="services"
            ref={sectionRef}
            style={{ padding: "6rem 1.5rem", background: "#f7f9fc" }}
        >
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                {/* Header */}
                <div className="scroll-animate" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                    <div className="section-tag" style={{ display: "inline-flex" }}>
                        ✦ Our Services
                    </div>
                    <h2
                        style={{
                            fontSize: "clamp(1.75rem, 4vw, 2.8rem)",
                            fontWeight: 800,
                            color: "#0f172a",
                            marginBottom: "1rem",
                            marginTop: "0.5rem",
                        }}
                    >
                        Comprehensive Tax &{" "}
                        <span className="gradient-text">Financial Services</span>
                    </h2>
                    <div className="divider" />
                    <p
                        style={{
                            color: "#64748b",
                            fontSize: "1.05rem",
                            maxWidth: "520px",
                            margin: "1rem auto 0",
                            lineHeight: 1.7,
                        }}
                    >
                        Everything you need to stay tax-compliant and financially healthy,
                        handled by certified experts.
                    </p>
                </div>

                {/* Service Cards Grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                        gap: "1.5rem",
                    }}
                >
                    {services.map((service, i) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={service.title}
                                className={`service-card scroll-animate delay-${Math.min(i * 100 + 100, 500)}`}
                                style={{
                                    background: "white",
                                    borderRadius: "1.25rem",
                                    padding: "2rem",
                                    cursor: "default",
                                }}
                            >
                                {/* Icon */}
                                <div
                                    style={{
                                        width: "56px",
                                        height: "56px",
                                        borderRadius: "1rem",
                                        background: service.bg,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginBottom: "1.25rem",
                                    }}
                                >
                                    <Icon size={26} color={service.color} />
                                </div>

                                <h3
                                    style={{
                                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                                        fontWeight: 700,
                                        fontSize: "1.1rem",
                                        color: "#0f172a",
                                        marginBottom: "0.625rem",
                                    }}
                                >
                                    {service.title}
                                </h3>
                                <p
                                    style={{
                                        color: "#64748b",
                                        fontSize: "0.9rem",
                                        lineHeight: 1.65,
                                    }}
                                >
                                    {service.description}
                                </p>

                                {/* Learn more link */}
                                <div
                                    style={{
                                        marginTop: "1.25rem",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.375rem",
                                        color: service.color,
                                        fontWeight: 600,
                                        fontSize: "0.85rem",
                                    }}
                                >
                                    <a href="#contact" style={{ color: service.color, textDecoration: "none" }}>
                                        Get Started →
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
