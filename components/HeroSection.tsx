"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function HeroSection() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
            { threshold: 0.1 }
        );
        ref.current?.querySelectorAll(".scroll-animate").forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    // Encoded Telugu WhatsApp Message
    const whatsappMsg = encodeURIComponent("నమస్కారం, నాకు ఆదాయపు పన్ను సేవల గురించి సమాచారం కావాలి.");

    return (
        <section ref={ref} style={{ paddingTop: "7.5rem", paddingBottom: "5rem", background: "linear-gradient(135deg, #f7f9fc 0%, #e2e8f0 100%)", position: "relative", overflow: "hidden" }}>
            {/* Background elements */}
            <div style={{ position: "absolute", top: "-150px", right: "-100px", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(26,86,219,0.06) 0%, transparent 70%)", borderRadius: "50%" }} />
            <div style={{ position: "absolute", bottom: "-100px", left: "-100px", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(14,165,233,0.06) 0%, transparent 70%)", borderRadius: "50%" }} />

            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem", position: "relative", zIndex: 1 }}>
                <div style={{ maxWidth: "880px", margin: "0 auto", textAlign: "center" }}>

                    {/* Badge */}
                    <div className="scroll-animate" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(255,255,255,0.8)", border: "1px solid rgba(26,86,219,0.15)", borderRadius: "9999px", padding: "0.375rem 1.25rem", fontSize: "0.83rem", fontWeight: 700, color: "#1a56db", letterSpacing: "0.03em", marginBottom: "1.75rem", boxShadow: "0 2px 10px rgba(0,0,0,0.02)" }}>
                        <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10b981", boxShadow: "0 0 0 3px rgba(16,185,129,0.2)" }} />
                        Serving Karimnagar, Telangana
                    </div>

                    {/* Main Heading (English + Telugu) */}
                    <h1 className="scroll-animate delay-100" style={{ fontSize: "clamp(2rem, 5.5vw, 4rem)", fontWeight: 900, color: "#0f172a", lineHeight: 1.15, marginBottom: "1rem" }}>
                        Trusted Income Tax & GST Services with{" "}
                        <span style={{ background: "linear-gradient(135deg, #1a56db, #0ea5e9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                            20+ Years of Experience
                        </span>
                    </h1>

                    <h2 className="scroll-animate delay-100" style={{ fontSize: "clamp(1.2rem, 3vw, 1.8rem)", fontWeight: 700, color: "#1e3a8a", lineHeight: 1.3, marginBottom: "1.5rem", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                        20 సంవత్సరాల అనుభవంతో నమ్మకమైన ఆదాయపు పన్ను మరియు GST సేవలు
                    </h2>

                    {/* Subheading (English + Telugu) */}
                    <p className="scroll-animate delay-200" style={{ color: "#475569", fontSize: "clamp(1rem, 2vw, 1.15rem)", maxWidth: "700px", margin: "0 auto 1rem", lineHeight: 1.7 }}>
                        Expert tax filing, GST compliance, and financial advisory for individuals and businesses across Telangana.
                    </p>
                    <p className="scroll-animate delay-200" style={{ color: "#475569", fontSize: "1.1rem", fontWeight: 600, maxWidth: "700px", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
                        Individuals, Employees, and Businesses కోసం నిపుణుల పన్ను సలహా సేవలు
                    </p>

                    {/* Buttons */}
                    <div className="scroll-animate delay-300" style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" as const }}>
                        <a href={`tel:${BUSINESS.phoneRaw}`} className="btn-primary" style={{ padding: "0.875rem 2rem", fontSize: "1.05rem" }}>
                            Call Now {BUSINESS.phone} <ArrowRight size={18} />
                        </a>
                        <a href={`https://wa.me/${BUSINESS.whatsapp}?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ padding: "0.875rem 2rem", fontSize: "1.05rem" }}>
                            <MessageCircle size={18} /> WhatsApp Chat
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
