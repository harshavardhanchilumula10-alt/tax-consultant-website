"use client";

import { useEffect, useRef } from "react";
import { HeartPulse, CheckCircle2, ShieldCheck } from "lucide-react";

export default function HealthInsuranceSection() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
            { threshold: 0.1 }
        );
        ref.current?.querySelectorAll(".scroll-animate").forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const services = [
        { en: "Health Insurance Policy Guidance", te: "ఆరోగ్య బీమా పాలసీ సలహా" },
        { en: "Family Health Insurance Plans", te: "కుటుంబ ఆరోగ్య బీమా" },
        { en: "Senior Citizen Health Insurance", te: "సీనియర్ సిటిజన్ హెల్త్ ఇన్సూరెన్స్" },
        { en: "Medical Insurance Consultation", te: "మెడికల్ ఇన్సూరెన్స్ కన్సల్టేషన్" },
        { en: "Policy Renewal Assistance", te: "పాలసీ రీన్యువల్ సహాయం" },
        { en: "Claim Support", te: "క్లెయిమ్ సహాయం" },
    ];

    return (
        <section ref={ref} style={{ padding: "5rem 1.5rem", background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 70%)", borderRadius: "50%" }} />

            <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
                <div className="health-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>

                    {/* Left: Content */}
                    <div className="scroll-animate">
                        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#bbf7d0", color: "#166534", borderRadius: "9999px", padding: "0.375rem 1rem", fontSize: "0.85rem", fontWeight: 700, marginBottom: "1.25rem" }}>
                            <ShieldCheck size={16} /> Authorized Star Health Advisor
                        </div>

                        <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 800, color: "#14532d", margin: "0 0 1rem", lineHeight: 1.2 }}>
                            Star Health Insurance <span style={{ color: "#16a34a" }}>Advisory</span>
                        </h2>
                        <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#166534", marginBottom: "1.5rem", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                            ఆరోగ్య బీమా సలహా సేవలు
                        </h3>

                        <p style={{ color: "#166534", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                            <strong>Sugunakar Bejjanki</strong> is also an authorized advisor for Star Health and Allied Insurance, helping individuals and families choose the right health insurance plans.
                        </p>
                        <p style={{ color: "#166534", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "2rem" }}>
                            Sugunakar Bejjanki గారు Star Health Insurance Advisor గా కూడా సేవలు అందిస్తున్నారు. వ్యక్తులు మరియు కుటుంబాలకు సరైన ఆరోగ్య బీమా పాలసీ ఎంపికలో మార్గదర్శనం అందిస్తారు.
                        </p>

                        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem" }}>
                            {services.map((item, i) => (
                                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", background: "rgba(255,255,255,0.6)", padding: "1rem", borderRadius: "0.75rem", border: "1px solid rgba(34,197,94,0.2)" }}>
                                    <CheckCircle2 size={20} color="#16a34a" style={{ marginTop: "2px", flexShrink: 0 }} />
                                    <div>
                                        <div style={{ fontWeight: 700, color: "#14532d", fontSize: "1rem", marginBottom: "0.25rem" }}>{item.en}</div>
                                        <div style={{ color: "#15803d", fontSize: "0.9rem", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{item.te}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p style={{ marginTop: "2rem", fontWeight: 700, color: "#14532d", fontSize: "1.1rem" }}>
                            Our goal is to help clients secure their health and finances with reliable insurance coverage.
                        </p>
                    </div>

                    {/* Right: Visual */}
                    <div className="scroll-animate delay-200" style={{ position: "relative" }}>
                        <div style={{ background: "white", borderRadius: "2rem", padding: "3rem", boxShadow: "0 20px 40px rgba(22,163,74,0.1)", textAlign: "center", border: "1px solid #bbf7d0" }}>
                            <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "#dcfce7", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
                                <HeartPulse size={40} color="#16a34a" />
                            </div>
                            <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#14532d", marginBottom: "0.5rem" }}>Health Protection</h3>
                            <p style={{ color: "#15803d", marginBottom: "2rem", lineHeight: 1.6 }}>Get comprehensive health coverage for you and your family.</p>

                            <a href="https://wa.me/918341704756?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20Star%20Health%20Insurance%20plans." target="_blank" rel="noopener noreferrer"
                                style={{ display: "inline-flex", background: "#16a34a", color: "white", padding: "1rem 2rem", borderRadius: "1rem", fontWeight: 700, textDecoration: "none", transition: "all 0.2s ease", boxShadow: "0 4px 15px rgba(22,163,74,0.3)" }}>
                                Enquire About Health Insurance
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .health-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
                }
            `}</style>
        </section>
    );
}
