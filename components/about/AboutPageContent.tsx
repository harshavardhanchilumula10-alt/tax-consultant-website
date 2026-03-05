"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { CheckCircle2, Award, Users, Zap, BookOpen, ArrowRight, MessageCircle, MapPin, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const milestones = [
    { year: "2004", event: "Started tax practice in Karimnagar" },
    { year: "2008", event: "Became an Enrolled Tax Practitioner (ETP)" },
    { year: "2012", event: "Expanded to GST & business registration services" },
    { year: "2016", event: "Crossed 500+ satisfied clients" },
    { year: "2020", event: "Launched financial advisory services" },
    { year: "2024", event: "Serving 1000+ clients across Telangana" },
];

const values = [
    { icon: Award, title: "Integrity", desc: "Honest, transparent advice with no hidden fees." },
    { icon: CheckCircle2, title: "Accuracy", desc: "Every return filed with 99%+ precision." },
    { icon: Users, title: "Client-First", desc: "Your financial wellbeing is always our priority." },
    { icon: Zap, title: "Speed", desc: "Same-day processing, always before deadlines." },
    { icon: BookOpen, title: "Compliance", desc: "100% compliant with Indian tax laws." },
    { icon: MapPin, title: "Local Expertise", desc: "Deep knowledge of Telangana business landscape." },
];

const expertise = [
    "Income Tax Return Filing (Individuals, Business, NRI)",
    "GST Registration & Monthly/Annual Return Filing",
    "Tax Planning & Investment Advisory",
    "Business Registration (Sole Proprietorship, LLP, Pvt Ltd)",
    "Accounting & Bookkeeping Services",
    "Financial Advisory & Wealth Planning",
    "Income Tax Notices & Scrutiny Assessments",
    "TDS Return Filing & Compliance",
    "Professional Tax Registration",
    "MSME / Udyam Registration",
];

export default function AboutPageContent() {
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
        <div ref={ref}>
            {/* Page Hero */}
            <div style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #1a56db 100%)", padding: "5rem 1.5rem 6rem", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(14,165,233,0.2) 0%, transparent 70%)", borderRadius: "50%" }} />
                <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "9999px", padding: "0.375rem 1rem", fontSize: "0.78rem", fontWeight: 600, color: "rgba(255,255,255,0.9)", letterSpacing: "0.06em", textTransform: "uppercase" as const, marginBottom: "1.5rem" }}>
                        ✦ About
                    </div>
                    <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: "white", lineHeight: 1.1, marginBottom: "1rem" }}>
                        Meet{" "}
                        <span style={{ background: "linear-gradient(135deg, #60a5fa, #38bdf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                            {BUSINESS.practitioner}
                        </span>
                    </h1>
                    <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "1.05rem", maxWidth: "550px", lineHeight: 1.75 }}>
                        Income Tax Practitioner & Financial Advisor with {BUSINESS.experience} years of trusted expertise in Karimnagar, Telangana.
                    </p>
                </div>
                {/* Wave */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, lineHeight: 0 }}>
                    <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: "100%", height: "60px", display: "block" }}>
                        <path d="M0 30 C480 60 960 0 1440 30 L1440 60 L0 60 Z" fill="#f7f9fc" />
                    </svg>
                </div>
            </div>

            {/* Profile Section */}
            <section style={{ padding: "5rem 1.5rem", background: "#f7f9fc" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                    <div className="about-page-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "4rem", alignItems: "start" }}>
                        {/* Sticky Profile Card */}
                        <div className="scroll-animate" style={{ position: "sticky", top: "90px" }}>
                            <div style={{ background: "white", borderRadius: "1.5rem", overflow: "hidden", border: "1px solid #e2e8f0", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
                                {/* Colored top */}
                                <div style={{ background: "linear-gradient(135deg, #1e3a8a, #1a56db)", padding: "2.5rem 2rem 3rem", textAlign: "center" as const, position: "relative" }}>
                                    <img src="/sugunakar-profile.png" alt={BUSINESS.practitioner} onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling!.removeAttribute('style'); }} style={{ width: "100px", height: "100px", borderRadius: "50%", objectFit: "cover", objectPosition: "top", margin: "0 auto 1rem", border: "3px solid rgba(255,255,255,0.3)", display: "block", boxShadow: "0 8px 16px rgba(0,0,0,0.2)", background: "white" }} />
                                    <div style={{ display: "none", width: "90px", height: "90px", borderRadius: "50%", background: "linear-gradient(135deg, #60a5fa, #38bdf8)", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "2rem", color: "#0f172a", margin: "0 auto 1rem", border: "3px solid rgba(255,255,255,0.3)" }}>
                                        SB
                                    </div>
                                    <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "1.3rem", color: "white", marginBottom: "0.25rem" }}>{BUSINESS.practitioner}</h2>
                                    <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.85rem" }}>Income Tax Practitioner & Financial Advisor</p>
                                </div>
                                {/* Details */}
                                <div style={{ padding: "1.75rem" }}>
                                    {[
                                        { label: "Experience", value: `${BUSINESS.experience} Years` },
                                        { label: "Location", value: "Karimnagar, Telangana" },
                                        { label: "Specialization", value: "Income Tax & GST" },
                                        { label: "Clients Served", value: "1000+" },
                                        { label: "Designation", value: "Enrolled Tax Practitioner (ETP)" },
                                    ].map(({ label, value }) => (
                                        <div key={label} style={{ display: "flex", justifyContent: "space-between", padding: "0.625rem 0", borderBottom: "1px solid #f1f5f9" }}>
                                            <span style={{ fontSize: "0.82rem", color: "#94a3b8", fontWeight: 500 }}>{label}</span>
                                            <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#0f172a" }}>{value}</span>
                                        </div>
                                    ))}
                                    <div style={{ paddingTop: "1.25rem", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                                        <a href={`tel:${BUSINESS.phoneRaw}`} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", background: "#e8f0fc", color: "#1a56db", padding: "0.75rem", borderRadius: "0.75rem", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem" }}>
                                            <Phone size={16} /> {BUSINESS.phone}
                                        </a>
                                        <Link href="/contact" className="btn-primary" style={{ justifyContent: "center", textAlign: "center" }}>
                                            Book Consultation <ArrowRight size={16} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Bio */}
                        <div>
                            <div className="scroll-animate delay-200">
                                <div className="section-tag" style={{ display: "inline-flex" }}>✦ Professional Profile</div>
                                <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 800, color: "#0f172a", margin: "0.75rem 0 1.25rem" }}>
                                    Dedicated to Accurate, <span className="gradient-text">Compliant Tax Services</span>
                                </h2>
                                <p style={{ color: "#475569", fontSize: "0.97rem", lineHeight: 1.85, marginBottom: "1.25rem" }}>
                                    <strong style={{ color: "#0f172a" }}>{BUSINESS.practitioner}</strong> is an experienced and trusted Income Tax Practitioner and Financial Advisor serving clients from his office in Karimnagar, Telangana. With over <strong style={{ color: "#1a56db" }}>20 years of hands-on experience</strong> in Indian taxation law, he has guided thousands of individuals, salaried professionals, business owners, and NRIs through the complexities of income tax and GST.
                                </p>
                                <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.85, marginBottom: "1.25rem" }}>
                                    As an Enrolled Tax Practitioner (ETP) authorized by the Income Tax Department of India, he possesses the authority to represent clients before tax authorities, handle notices and assessments, and provide comprehensive financial planning services.
                                </p>
                                <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.85, marginBottom: "2rem" }}>
                                    His approach is built on three pillars: <strong style={{ color: "#0f172a" }}>accuracy</strong> in every return filed, <strong style={{ color: "#0f172a" }}>transparency</strong> in all dealings, and <strong style={{ color: "#0f172a" }}>affordability</strong> in his fee structure — making professional tax services accessible to everyone.
                                </p>

                                {/* Expertise */}
                                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#0f172a", marginBottom: "1rem" }}>Areas of Expertise</h3>
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem", marginBottom: "2.5rem" }} className="expertise-grid">
                                    {expertise.map((item) => (
                                        <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.85rem", color: "#374151" }}>
                                            <CheckCircle2 size={15} color="#1a56db" style={{ marginTop: "2px", flexShrink: 0 }} />
                                            {item}
                                        </div>
                                    ))}
                                </div>

                                {/* Journey */}
                                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#0f172a", marginBottom: "1.25rem" }}>Professional Journey</h3>
                                <div style={{ position: "relative", paddingLeft: "1.5rem" }}>
                                    <div style={{ position: "absolute", left: "7px", top: 0, bottom: 0, width: "2px", background: "linear-gradient(to bottom, #1a56db, #0ea5e9)", borderRadius: "1px" }} />
                                    {milestones.map((m, i) => (
                                        <div key={i} style={{ position: "relative", marginBottom: "1.25rem" }}>
                                            <div style={{ position: "absolute", left: "-1.5rem", top: "4px", width: "14px", height: "14px", borderRadius: "50%", background: "#1a56db", border: "2px solid #e8f0fc", zIndex: 1 }} />
                                            <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                                                <span style={{ background: "#e8f0fc", color: "#1a56db", borderRadius: "0.5rem", padding: "0.2rem 0.625rem", fontSize: "0.75rem", fontWeight: 700, flexShrink: 0 }}>{m.year}</span>
                                                <span style={{ color: "#475569", fontSize: "0.88rem", lineHeight: 1.6 }}>{m.event}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section style={{ padding: "5rem 1.5rem", background: "white" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                    <div className="scroll-animate" style={{ textAlign: "center", marginBottom: "3rem" }}>
                        <div className="section-tag" style={{ display: "inline-flex" }}>✦ Our Values</div>
                        <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.3rem)", fontWeight: 800, color: "#0f172a", margin: "0.75rem 0 0.5rem" }}>
                            What Drives <span className="gradient-text">Our Practice</span>
                        </h2>
                        <div className="divider" />
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
                        {values.map((v, i) => {
                            const Icon = v.icon;
                            return (
                                <div key={v.title} className={`scroll-animate delay-${Math.min(i * 100 + 100, 500)}`}
                                    style={{ background: "#f7f9fc", borderRadius: "1.125rem", padding: "1.75rem", border: "1px solid #e2e8f0", textAlign: "center" as const }}>
                                    <div style={{ width: "48px", height: "48px", borderRadius: "0.875rem", background: "#e8f0fc", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem" }}>
                                        <Icon size={22} color="#1a56db" />
                                    </div>
                                    <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "#0f172a", marginBottom: "0.375rem" }}>{v.title}</h3>
                                    <p style={{ color: "#64748b", fontSize: "0.85rem", lineHeight: 1.6 }}>{v.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: "4rem 1.5rem 5rem", background: "#f7f9fc" }}>
                <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
                    <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontWeight: 800, color: "#0f172a", marginBottom: "1rem" }}>
                        Ready to Work with <span className="gradient-text">{BUSINESS.practitioner}?</span>
                    </h2>
                    <p style={{ color: "#64748b", fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
                        Get a free consultation and experience the Bejjanki advantage of accuracy, speed, and affordability.
                    </p>
                    <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" as const }}>
                        <Link href="/contact" className="btn-primary">Book Free Consultation <ArrowRight size={17} /></Link>
                        <a href={`https://wa.me/${BUSINESS.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                            <MessageCircle size={17} /> WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            <style>{`
        @media (max-width: 768px) {
          .about-page-grid { grid-template-columns: 1fr !important; }
          .expertise-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </div>
    );
}
