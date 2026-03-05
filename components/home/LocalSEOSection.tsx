"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Phone, MessageCircle, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

// These are the cities/areas near Karimnagar that we serve — helps local SEO
const serviceAreas = [
    "Karimnagar", "Jagtial", "Peddapalli", "Nizamabad", "Warangal",
    "Ramagundam", "Sircilla", "Metpally", "Huzurabad", "Godavarikhani",
];

// Keyword-rich service links for local search
const localKeywords = [
    { label: "Income Tax Consultant in Karimnagar", href: "/services" },
    { label: "Best Tax Practitioner in Karimnagar", href: "/about" },
    { label: "ITR Filing Services in Karimnagar", href: "/services" },
    { label: "GST Registration in Karimnagar", href: "/services" },
    { label: "Tax Planning Karimnagar, Telangana", href: "/services" },
    { label: "Business Registration Services Karimnagar", href: "/services" },
];

const quickStats = [
    { number: "20+", label: "Years in Karimnagar" },
    { number: "1000+", label: "Local Clients" },
    { number: "7", label: "Services Offered" },
    { number: "Free", label: "First Consultation" },
];

export default function LocalSEOSection() {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
            { threshold: 0.06 }
        );
        ref.current?.querySelectorAll(".scroll-animate").forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={ref}
            aria-label="Local Tax Services in Karimnagar"
            style={{ padding: "5rem 1.5rem", background: "white", borderTop: "1px solid #e2e8f0" }}
        >
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

                {/* Main heading — keyword-rich H2 for local SEO */}
                <div className="scroll-animate" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                    <div className="section-tag" style={{ display: "inline-flex" }}>
                        <MapPin size={13} style={{ marginRight: "4px" }} /> Serving Karimnagar & Telangana
                    </div>
                    <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", fontWeight: 800, color: "#0f172a", margin: "0.75rem 0 0.75rem", lineHeight: 1.2 }}>
                        Income Tax Consultant in{" "}
                        <span className="gradient-text">Karimnagar</span>
                        {" "}— Trusted for 20+ Years
                    </h2>
                    <p style={{ color: "#475569", fontSize: "1rem", maxWidth: "640px", margin: "0 auto 1.5rem", lineHeight: 1.8 }}>
                        Looking for a reliable <strong>tax consultant near you in Karimnagar?</strong> <strong style={{ color: "#0f172a" }}>{BUSINESS.practitioner}</strong> we are Karimnagar&apos;s most experienced Income Tax Consultancy, providing accurate ITR filing, GST registration, and financial advisory services since 2004. <br />
                        <strong>Serving clients in Karimnagar and surrounding areas with reliable tax consultation services. Location: Karimnagar.</strong>
                    </p>

                    {/* Quick action buttons */}
                    <div style={{ display: "flex", gap: "0.875rem", justifyContent: "center", flexWrap: "wrap" as const }}>
                        <a
                            href={`tel:${BUSINESS.phoneRaw}`}
                            style={{
                                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                                background: "#1a56db", color: "white", padding: "0.75rem 1.5rem",
                                borderRadius: "0.75rem", fontWeight: 700, textDecoration: "none",
                                fontSize: "0.95rem", boxShadow: "0 4px 15px rgba(26,86,219,0.25)",
                                transition: "all 0.2s ease",
                            }}
                            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
                        >
                            <Phone size={17} /> Call {BUSINESS.phone}
                        </a>
                        <a
                            href={`https://wa.me/${BUSINESS.whatsapp}?text=Hello%2C%20I%20would%20like%20to%20consult%20regarding%20tax%20services.`}
                            target="_blank" rel="noopener noreferrer"
                            style={{
                                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                                background: "#25D366", color: "white", padding: "0.75rem 1.5rem",
                                borderRadius: "0.75rem", fontWeight: 700, textDecoration: "none",
                                fontSize: "0.95rem", boxShadow: "0 4px 15px rgba(37,211,102,0.25)",
                                transition: "all 0.2s ease",
                            }}
                            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
                        >
                            <MessageCircle size={17} /> WhatsApp Chat
                        </a>
                    </div>
                </div>

                {/* Two column layout */}
                <div className="local-seo-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>

                    {/* Left: Service keyword links (SEO anchor text) */}
                    <div className="scroll-animate">
                        <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "1.1rem", color: "#0f172a", marginBottom: "1.25rem" }}>
                            Tax Services in Karimnagar
                        </h3>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem", marginBottom: "2rem" }}>
                            {localKeywords.map((kw) => (
                                <Link
                                    key={kw.label}
                                    href={kw.href}
                                    style={{
                                        display: "flex", alignItems: "center", gap: "0.625rem",
                                        padding: "0.75rem 1rem", background: "#f7f9fc",
                                        border: "1px solid #e2e8f0", borderRadius: "0.75rem",
                                        textDecoration: "none", color: "#0f172a", fontWeight: 500,
                                        fontSize: "0.875rem", transition: "all 0.2s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                        const el = e.currentTarget as HTMLElement;
                                        el.style.background = "#e8f0fc";
                                        el.style.borderColor = "#1a56db";
                                        el.style.color = "#1a56db";
                                    }}
                                    onMouseLeave={(e) => {
                                        const el = e.currentTarget as HTMLElement;
                                        el.style.background = "#f7f9fc";
                                        el.style.borderColor = "#e2e8f0";
                                        el.style.color = "#0f172a";
                                    }}
                                >
                                    <CheckCircle2 size={15} color="#1a56db" style={{ flexShrink: 0 }} />
                                    {kw.label}
                                    <ArrowRight size={13} color="#94a3b8" style={{ marginLeft: "auto" }} />
                                </Link>
                            ))}
                        </div>

                        {/* Nearby areas served */}
                        <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "1rem", color: "#0f172a", marginBottom: "0.875rem" }}>
                            Areas We Serve in Telangana
                        </h3>
                        <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "0.5rem" }}>
                            {serviceAreas.map((area) => (
                                <span key={area} style={{ background: "#e8f0fc", color: "#1a56db", borderRadius: "9999px", padding: "0.3rem 0.875rem", fontSize: "0.78rem", fontWeight: 600 }}>
                                    {area}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right: Why local trust + quick stats */}
                    <div className="scroll-animate delay-200">
                        {/* Stats */}
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "#e2e8f0", borderRadius: "1.25rem", overflow: "hidden", marginBottom: "2rem" }}>
                            {quickStats.map((s) => (
                                <div key={s.label} style={{ background: "white", padding: "1.5rem", textAlign: "center" as const }}>
                                    <div style={{ fontSize: "2rem", fontWeight: 900, color: "#1a56db", fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1 }}>{s.number}</div>
                                    <div style={{ fontSize: "0.78rem", color: "#64748b", marginTop: "0.25rem", fontWeight: 500 }}>{s.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Local trust box */}
                        <div style={{ background: "linear-gradient(135deg, #0f172a, #1e3a8a)", borderRadius: "1.25rem", padding: "2rem", color: "white" }}>
                            <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "1.1rem", marginBottom: "0.875rem" }}>
                                Why Karimnagar Trusts Sugunakar Bejjanki
                            </h3>

                            {[
                                "Only Enrolled Tax Practitioner (ETP) with 20+ years in Karimnagar",
                                "Handles IT notices, scrutiny & assessments confidently",
                                "Understands local business landscape of Telangana",
                                "Same-day ITR filing during peak season",
                                "Transparent fees — no surprises, no hidden charges",
                            ].map((point) => (
                                <div key={point} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", marginBottom: "0.625rem" }}>
                                    <CheckCircle2 size={14} color="#34d399" style={{ marginTop: "3px", flexShrink: 0 }} />
                                    <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.875rem", lineHeight: 1.5 }}>{point}</span>
                                </div>
                            ))}

                            <div style={{ marginTop: "1.5rem", display: "flex", alignItems: "center", gap: "0.875rem", background: "rgba(255,255,255,0.08)", borderRadius: "0.875rem", padding: "0.875rem 1rem" }}>
                                <img src="/sugunakar-profile.png" alt={BUSINESS.practitioner} onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling!.removeAttribute('style'); }} style={{ width: "44px", height: "44px", borderRadius: "50%", objectFit: "cover", objectPosition: "top", border: "2px solid rgba(255,255,255,0.3)", flexShrink: 0, background: "white" }} />
                                <div style={{ display: "none", width: "44px", height: "44px", borderRadius: "50%", background: "linear-gradient(135deg, #60a5fa, #38bdf8)", alignItems: "center", justifyContent: "center", fontWeight: 800, color: "#0f172a", flexShrink: 0 }}>SB</div>
                                <div>
                                    <div style={{ fontWeight: 700, color: "white", fontSize: "0.9rem" }}>{BUSINESS.practitioner}</div>
                                    <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.75rem" }}>📍 Karimnagar, Telangana</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .local-seo-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}
