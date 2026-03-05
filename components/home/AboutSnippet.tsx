"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Award, Users, Zap, CheckCircle2 } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const highlights = [
    { icon: Award, label: "20+ Years Experience", desc: "Decades of hands-on expertise in income tax and GST" },
    { icon: Users, label: "1000+ Clients", desc: "Individuals and businesses from across Telangana" },
    { icon: Zap, label: "Fast & Accurate", desc: "Same-day processing with 99% accuracy guarantee" },
];

const expertise = [
    "Transparent, upfront pricing",
    "Remote consultations via WhatsApp",
    "Personalized attention to your case",
    "Full post-filing support",
    "Stress-free, deadline-focused process",
];

export default function AboutSnippet() {
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
        <section ref={ref} style={{ padding: "6rem 1.5rem", background: "white" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>

                    {/* Left: Visual card */}
                    <div className="scroll-animate" style={{ position: "relative" }}>
                        {/* Big card */}
                        <div style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #1a56db 100%)", borderRadius: "1.5rem", padding: "3rem 2.5rem", position: "relative", overflow: "hidden" }}>
                            {/* Decorative circle */}
                            <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "200px", height: "200px", background: "radial-gradient(circle, rgba(14,165,233,0.3) 0%, transparent 70%)", borderRadius: "50%" }} />

                            {/* Avatar */}
                            <img src="/sugunakar-profile.png" alt={BUSINESS.practitioner} onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling!.removeAttribute('style'); }} style={{ width: "80px", height: "80px", borderRadius: "50%", objectFit: "cover", objectPosition: "top", margin: "0 auto 1.25rem", border: "3px solid rgba(255,255,255,0.3)", display: "block", background: "white" }} />
                            <div style={{ display: "none", width: "64px", height: "64px", borderRadius: "50%", background: "linear-gradient(135deg, #60a5fa, #38bdf8)", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "1.5rem", color: "#0f172a", margin: "0 auto 1.25rem", border: "3px solid rgba(255,255,255,0.3)" }}>
                                SB
                            </div>
                            <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "white", marginBottom: "0.375rem" }}>
                                {BUSINESS.practitioner}
                            </h3>
                            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.88rem", marginBottom: "1.5rem" }}>
                                Expert Tax Consultancy & Financial Advisory
                            </p>

                            {/* Badge */}
                            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "9999px", padding: "0.375rem 1rem", color: "rgba(255,255,255,0.9)", fontSize: "0.8rem", fontWeight: 600 }}>
                                📍 Karimnagar, Telangana
                            </div>

                            {/* Mini stats */}
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", marginTop: "1.75rem", background: "rgba(255,255,255,0.1)", borderRadius: "1rem", overflow: "hidden" }}>
                                {[
                                    { n: "20+", l: "Years" },
                                    { n: "1000+", l: "Clients" },
                                    { n: "7", l: "Services" },
                                    { n: "99%", l: "Accuracy" },
                                ].map((s) => (
                                    <div key={s.l} style={{ background: "rgba(255,255,255,0.06)", padding: "1rem", textAlign: "center" as const }}>
                                        <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "white" }}>{s.n}</div>
                                        <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.55)" }}>{s.l}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Floating badge */}
                        <div style={{ position: "absolute", bottom: "-16px", right: "24px", background: "white", borderRadius: "1rem", padding: "0.875rem 1.25rem", boxShadow: "0 8px 30px rgba(0,0,0,0.15)", display: "flex", alignItems: "center", gap: "0.625rem" }}>
                            <span style={{ fontSize: "1.5rem" }}>⭐</span>
                            <div>
                                <div style={{ fontWeight: 800, fontSize: "0.9rem", color: "#0f172a" }}>Top Rated</div>
                                <div style={{ fontSize: "0.72rem", color: "#64748b" }}>Tax Practitioner, Karimnagar</div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Text */}
                    <div className="scroll-animate delay-200" style={{ paddingBottom: "2rem" }}>
                        <div className="section-tag" style={{ display: "inline-flex" }}>✦ About</div>
                        <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.4rem)", fontWeight: 800, color: "#0f172a", margin: "0.75rem 0 1.25rem", lineHeight: 1.2 }}>
                            {BUSINESS.experience} Years of Trusted{" "}
                            <span className="gradient-text">Tax Expertise</span>
                        </h2>
                        <p style={{ color: "#475569", fontSize: "0.97rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                            <strong style={{ color: "#0f172a" }}>Bejjanki Tax Consultancy</strong>, led by <strong style={{ color: "#1a56db" }}>Sugunakar Bejjanki</strong>, is a premier tax and financial advisory firm in Karimnagar, Telangana, backed by over <strong style={{ color: "#1a56db" }}>20 years</strong> of dedicated experience.
                        </p>
                        <p style={{ color: "#475569", fontSize: "0.93rem", lineHeight: 1.8, marginBottom: "1.75rem" }}>
                            From salaried individuals and small businesses to large enterprises, we provide accurate, compliant, and affordable tax services that help our clients stay stress-free during tax season.
                        </p>

                        {/* Expertise list */}
                        <div style={{ display: "flex", flexDirection: "column" as const, gap: "0.575rem", marginBottom: "2rem" }}>
                            {expertise.slice(0, 5).map((item) => (
                                <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.625rem", fontSize: "0.88rem", color: "#374151" }}>
                                    <CheckCircle2 size={16} color="#1a56db" />
                                    {item}
                                </div>
                            ))}
                        </div>

                        {/* Highlight badges */}
                        <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "0.75rem", marginBottom: "2rem" }}>
                            {highlights.map(({ icon: Icon, label }) => (
                                <div key={label} style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "#e8f0fc", color: "#1a56db", borderRadius: "0.625rem", padding: "0.5rem 0.875rem", fontSize: "0.8rem", fontWeight: 600 }}>
                                    <Icon size={14} /> {label}
                                </div>
                            ))}
                        </div>

                        <Link href="/about" className="btn-primary">
                            Read Full Profile <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
        </section>
    );
}
