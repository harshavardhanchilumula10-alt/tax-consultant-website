"use client";

import { useEffect, useRef } from "react";
import { Briefcase, Building2, Store, Laptop, User, Rocket } from "lucide-react";

const audiences = [
    { icon: User, title: "Salaried Employees", color: "#1a56db", bg: "#e8f0fc" },
    { icon: Building2, title: "Small Business Owners", color: "#059669", bg: "#d1fae5" },
    { icon: Store, title: "Shop Owners", color: "#d97706", bg: "#fef3c7" },
    { icon: Laptop, title: "Freelancers", color: "#7c3aed", bg: "#ede9fe" },
    { icon: Briefcase, title: "Self-Employed Professionals", color: "#0891b2", bg: "#e0f2fe" },
    { icon: Rocket, title: "New Business Startups", color: "#be185d", bg: "#fce7f3" },
];

export default function WhoWeHelp() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
            { threshold: 0.1 }
        );
        ref.current?.querySelectorAll(".scroll-animate").forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={ref} style={{ padding: "5rem 1.5rem", background: "linear-gradient(to bottom, #f8fafc, white)", borderTop: "1px solid #f1f5f9" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>

                <div className="scroll-animate">
                    <div className="section-tag" style={{ display: "inline-flex" }}>✦ Who We Help</div>
                    <h2 style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.5rem)", fontWeight: 800, color: "#0f172a", margin: "1rem 0 1rem" }}>
                        We provide <span className="gradient-text">dedicated tax services</span> for:
                    </h2>
                    <p style={{ color: "#64748b", fontSize: "1.05rem", maxWidth: "600px", margin: "0 auto 3rem", lineHeight: 1.6 }}>
                        No matter your occupation or business size, we have the expertise to handle your specific tax filing and compliance needs.
                    </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
                    {audiences.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.title}
                                className={`scroll-animate delay-${Math.min((i % 3) * 100 + 100, 300)}`}
                                style={{
                                    background: "white",
                                    border: "1px solid #e2e8f0",
                                    borderRadius: "1rem",
                                    padding: "1.5rem",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "1.25rem",
                                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02)",
                                    transition: "all 0.3s ease",
                                    cursor: "default"
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "translateY(-3px)";
                                    e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)";
                                    e.currentTarget.style.borderColor = "#cbd5e1";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02)";
                                    e.currentTarget.style.borderColor = "#e2e8f0";
                                }}
                            >
                                <div style={{
                                    width: "48px", height: "48px", borderRadius: "12px", background: item.bg,
                                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
                                }}>
                                    <Icon size={22} color={item.color} />
                                </div>
                                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1e293b", margin: 0, textAlign: "left" }}>
                                    {item.title}
                                </h3>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
