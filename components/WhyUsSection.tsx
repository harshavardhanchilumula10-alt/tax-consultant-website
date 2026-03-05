"use client";

import { useEffect, useRef } from "react";
import {
    Award,
    IndianRupee,
    Zap,
    Users,
    CheckCircle2,
} from "lucide-react";

const features = [
    {
        icon: Award,
        title: "Experienced Tax Practitioner",
        description:
            "Over 10 years of hands-on experience in income tax, GST, and financial advisory for individuals and businesses across industries.",
        points: ["Enrolled Tax Practitioner (ETP)", "GST Practitioner Certified", "Income Tax Court Appearances"],
        color: "#1a56db",
        bg: "#e8f0fc",
    },
    {
        icon: IndianRupee,
        title: "Affordable Consultation",
        description:
            "Transparent, competitive pricing with no hidden charges. We offer flexible fee structures to suit your budget.",
        points: ["Fixed fee packages", "No hidden costs", "Free initial consultation"],
        color: "#059669",
        bg: "#d1fae5",
    },
    {
        icon: Zap,
        title: "Fast & Accurate Filing",
        description:
            "We prioritize speed without compromising accuracy. Your returns are filed well within deadlines to avoid penalties.",
        points: ["Same-day processing", "99% accuracy rate", "Deadline guarantee"],
        color: "#7c3aed",
        bg: "#ede9fe",
    },
    {
        icon: Users,
        title: "Trusted by Local Clients",
        description:
            "Hundreds of happy clients across Hyderabad trust us for their tax and financial compliance needs year after year.",
        points: ["500+ satisfied clients", "5-star Google rating", "Long-term relationships"],
        color: "#d97706",
        bg: "#fef3c7",
    },
];

export default function WhyUsSection() {
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
            id="about"
            ref={sectionRef}
            style={{ padding: "6rem 1.5rem", background: "white" }}
        >
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                {/* Header */}
                <div className="scroll-animate" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                    <div className="section-tag" style={{ display: "inline-flex" }}>
                        ✦ Why Choose Us
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
                        The <span className="gradient-text">Bejjanki Advantage</span>
                    </h2>
                    <div className="divider" />
                    <p
                        style={{
                            color: "#64748b",
                            fontSize: "1.05rem",
                            maxWidth: "500px",
                            margin: "1rem auto 0",
                            lineHeight: 1.7,
                        }}
                    >
                        We combine deep expertise with personalized service to deliver the best
                        tax outcomes for you.
                    </p>
                </div>

                {/* Feature Cards */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: "1.5rem",
                    }}
                >
                    {features.map((feature, i) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={feature.title}
                                className={`feature-card scroll-animate delay-${Math.min(i * 100 + 100, 500)}`}
                                style={{
                                    background: "#f7f9fc",
                                    borderRadius: "1.25rem",
                                    padding: "2rem",
                                    border: "1px solid #e2e8f0",
                                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                    cursor: "default",
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                                    (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 40px rgba(26, 86, 219, 0.1)";
                                    (e.currentTarget as HTMLElement).style.borderColor = feature.color;
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                                    (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0";
                                }}
                            >
                                {/* Icon */}
                                <div
                                    style={{
                                        width: "56px",
                                        height: "56px",
                                        borderRadius: "1rem",
                                        background: feature.bg,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginBottom: "1.25rem",
                                    }}
                                >
                                    <Icon size={26} color={feature.color} />
                                </div>

                                <h3
                                    style={{
                                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                                        fontWeight: 700,
                                        fontSize: "1.1rem",
                                        color: "#0f172a",
                                        marginBottom: "0.75rem",
                                    }}
                                >
                                    {feature.title}
                                </h3>
                                <p
                                    style={{
                                        color: "#64748b",
                                        fontSize: "0.9rem",
                                        lineHeight: 1.65,
                                        marginBottom: "1.25rem",
                                    }}
                                >
                                    {feature.description}
                                </p>

                                {/* Bullet points */}
                                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                    {feature.points.map((point) => (
                                        <li
                                            key={point}
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "0.5rem",
                                                fontSize: "0.85rem",
                                                fontWeight: 500,
                                                color: "#374151",
                                            }}
                                        >
                                            <CheckCircle2 size={15} color={feature.color} />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
