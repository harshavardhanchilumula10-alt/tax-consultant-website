"use client";

import { useEffect, useRef } from "react";
import { Award, ShieldCheck, Zap, Users, CheckCircle2 } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const trustItems = [
    {
        icon: Award,
        title: "20+ సంవత్సరాల అనుభవం",
        english: "20+ Years Professional Experience",
    },
    {
        icon: Users,
        title: "నమ్మకమైన పన్ను సలహా సేవలు",
        english: "Trusted by Individuals and Small Businesses",
    },
    {
        icon: Zap,
        title: "ఖచ్చితమైన మరియు సమయానికి ఫైలింగ్",
        english: "Accurate and Timely Tax Filing",
    },
    {
        icon: ShieldCheck,
        title: "వ్యక్తిగత మరియు వ్యాపార క్లయింట్లకు సేవలు",
        english: "Professional and Confidential Service",
    },
];

export default function TrustSection() {
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
        <section ref={ref} style={{ padding: "5rem 1.5rem", background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: "-100px", left: "-100px", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(26,86,219,0.3) 0%, transparent 70%)", borderRadius: "50%" }} />

            <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
                <div className="scroll-animate" style={{ textAlign: "center", marginBottom: "4rem" }}>
                    <div className="section-tag" style={{ display: "inline-flex", background: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.2)" }}>
                        ✦ Why Choose Us
                    </div>
                    <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 800, color: "white", margin: "1rem 0 0.5rem" }}>
                        ఎందుకు మమ్మల్ని <span style={{ color: "#60a5fa" }}>ఎంచుకోవాలి?</span>
                    </h2>
                    <div style={{ width: "60px", height: "4px", background: "linear-gradient(to right, #60a5fa, #38bdf8)", borderRadius: "2px", margin: "1.25rem auto" }} />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
                    {trustItems.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <div key={item.title} className={`scroll-animate delay-${Math.min(i * 100 + 100, 500)}`}
                                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(12px)", borderRadius: "1.25rem", padding: "2rem", transition: "all 0.3s ease" }}
                                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(255,255,255,0.1)"; el.style.transform = "translateY(-4px)"; }}
                                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(255,255,255,0.05)"; el.style.transform = "translateY(0)"; }}
                            >
                                <div style={{ width: "56px", height: "56px", borderRadius: "1rem", background: "linear-gradient(135deg, rgba(96,165,250,0.15), rgba(56,189,248,0.15))", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem", border: "1px solid rgba(96,165,250,0.2)" }}>
                                    <Icon size={26} color="#60a5fa" />
                                </div>
                                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                                    <CheckCircle2 size={18} color="#34d399" style={{ marginTop: "4px", flexShrink: 0 }} />
                                    <div>
                                        <h3 style={{ fontWeight: 700, fontSize: "1.1rem", color: "white", marginBottom: "0.25rem", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                                            {item.title}
                                        </h3>
                                        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem" }}>{item.english}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="scroll-animate" style={{ textAlign: "center", marginTop: "4rem" }}>
                    <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.05rem", maxWidth: "700px", margin: "0 auto 2rem", lineHeight: 1.7 }}>
                        We understand that dealing with taxes can be stressful. That&apos;s why our mission is to provide transparent, accurate, and completely hassle-free services. Your financial health is our top priority.
                    </p>

                    <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", background: "white", border: "1.5px solid #dcfce7", borderRadius: "9999px", padding: "0.75rem 1.75rem", color: "#166534", fontSize: "1rem", fontWeight: 800, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}>
                        <span style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#16a34a", color: "white", width: "28px", height: "28px", borderRadius: "50%", fontSize: "1.1rem" }}>★</span>
                        Authorized Advisor for Star Health and Allied Insurance
                    </div>
                </div>
            </div>
        </section>
    );
}
