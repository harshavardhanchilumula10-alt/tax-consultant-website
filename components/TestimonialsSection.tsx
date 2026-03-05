"use client";

import { useEffect, useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Ramesh Yadav",
        role: "Shop Owner, Karimnagar",
        rating: 5,
        review: "Sugunakar garu has been handling my GST and income tax for the past 5 years. He is very professional, always files before the deadline, and his fees are very reasonable. Highly recommend to any business owner in Karimnagar!",
        initials: "RY",
        color: "#1a56db",
    },
    {
        name: "Lakshmi Devi",
        role: "Salaried Employee, Engineer",
        rating: 5,
        review: "I had multiple sources of income and was confused about ITR filing. Sugunakar sir explained everything very clearly and filed my return the same day. He also helped me save a lot of tax through proper deductions. Excellent service!",
        initials: "LD",
        color: "#7c3aed",
    },
    {
        name: "Srinivas Reddy",
        role: "Business Owner, Telangana",
        rating: 5,
        review: "Got an income tax notice and I was worried. Sugunakar sir handled everything — from drafting the response to appearing before the officer. The matter was resolved quickly. He is truly an expert and very trustworthy.",
        initials: "SR",
        color: "#059669",
    },
];

export default function TestimonialsSection() {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
            { threshold: 0.08 }
        );
        ref.current?.querySelectorAll(".scroll-animate").forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={ref} style={{ padding: "6rem 1.5rem", background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(26,86,219,0.3) 0%, transparent 70%)", borderRadius: "50%" }} />

            <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
                <div className="scroll-animate" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "9999px", padding: "0.375rem 1rem", fontSize: "0.78rem", fontWeight: 600, color: "rgba(255,255,255,0.9)", letterSpacing: "0.06em", textTransform: "uppercase" as const, marginBottom: "1rem" }}>
                        ✦ Client Reviews
                    </div>
                    <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.8rem)", fontWeight: 800, color: "white", marginBottom: "0.5rem" }}>
                        What Our Clients Say
                    </h2>
                    <div style={{ width: "60px", height: "4px", background: "linear-gradient(to right, #60a5fa, #38bdf8)", borderRadius: "2px", margin: "1rem auto" }} />
                    <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1rem", maxWidth: "440px", margin: "0 auto", lineHeight: 1.7 }}>
                        Real feedback from our clients in Karimnagar and across Telangana.
                    </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
                    {testimonials.map((t, i) => (
                        <div key={t.name} className={`scroll-animate delay-${Math.min(i * 100 + 100, 500)}`}
                            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(12px)", borderRadius: "1.25rem", padding: "2rem", transition: "all 0.3s ease" }}
                            onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(255,255,255,0.1)"; el.style.transform = "translateY(-4px)"; }}
                            onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(255,255,255,0.05)"; el.style.transform = "translateY(0)"; }}
                        >
                            <div style={{ marginBottom: "1rem" }}><Quote size={30} color="rgba(96,165,250,0.5)" /></div>
                            <div style={{ display: "flex", gap: "0.25rem", marginBottom: "1rem" }}>
                                {Array.from({ length: t.rating }).map((_, idx) => <Star key={idx} size={15} fill="#fbbf24" color="#fbbf24" />)}
                            </div>
                            <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "0.9rem", lineHeight: 1.78, marginBottom: "1.5rem" }}>
                                &ldquo;{t.review}&rdquo;
                            </p>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
                                <div style={{ width: "42px", height: "42px", borderRadius: "50%", background: t.color, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.875rem", color: "white", flexShrink: 0 }}>
                                    {t.initials}
                                </div>
                                <div>
                                    <div style={{ fontWeight: 700, color: "white", fontSize: "0.92rem" }}>{t.name}</div>
                                    <div style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.78rem" }}>{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Rating Banner */}
                <div className="scroll-animate" style={{ marginTop: "3rem", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "1rem", padding: "1.5rem 2rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap" as const }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
                        {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={20} fill="#fbbf24" color="#fbbf24" />)}
                    </div>
                    <div style={{ color: "white", fontWeight: 800, fontSize: "1.1rem" }}>4.9 / 5 Rating</div>
                    <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.875rem" }}>Trusted by 1000+ clients across Telangana</div>
                </div>
            </div>
        </section>
    );
}
