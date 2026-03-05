"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, FileText, Building2, ReceiptText, PiggyBank, Briefcase, BookOpen, AlertCircle, MessageSquareWarning, Scale, HeartPulse } from "lucide-react";

const services = [
    { icon: FileText, title: "Income Tax Filing", subtitle: "ఆదాయపు పన్ను రిటర్న్ ఫైలింగ్ సేవలు", desc: "ఉద్యోగులు, వ్యాపారులు మరియు స్వయం ఉపాధి వ్యక్తులకు సరైన విధంగా మరియు సమయానికి ఆదాయపు పన్ను రిటర్న్ ఫైల్ చేయడంలో సహాయం చేస్తాము.", color: "#1a56db", bg: "#e8f0fc" },
    { icon: Building2, title: "GST Services", subtitle: "GST రిజిస్ట్రేషన్ మరియు రిటర్న్స్", desc: "GST Registration, GST Return Filing, and GST Notice Reply to keep your business compliant and penalty-free.", color: "#7c3aed", bg: "#ede9fe" },
    { icon: PiggyBank, title: "Tax Planning", subtitle: "పన్ను ప్రణాళిక (Tax Planning)", desc: "సరైన పన్ను ప్రణాళిక ద్వారా మీరు చట్టబద్ధంగా పన్ను భారం తగ్గించుకోవచ్చు. దానికి తగిన సరైన మార్గదర్శనం సూచిస్తాము.", color: "#059669", bg: "#d1fae5" },
    { icon: Briefcase, title: "Business Registration", subtitle: "వ్యాపార నమోదు సేవలు", desc: "కొత్త వ్యాపారం ప్రారంభించాలనుకుంటే అవసరమైన అన్ని రిజిస్ట్రేషన్లు మరియు పత్రాలు సిద్ధం చేయడంలో మేము మీకు సహాయం చేస్తాము.", color: "#d97706", bg: "#fef3c7" },
    { icon: BookOpen, title: "Accounting", subtitle: "అకౌంటింగ్ మరియు బుక్ కీపింగ్", desc: "మీ వ్యాపారానికి సంబంధించిన ఆదాయం, ఖర్చులు మరియు లావాదేవీలను సక్రమంగా నమోదు చేయడంలో మేము సహాయం చేస్తాము.", color: "#be185d", bg: "#fce7f3" },
    { icon: HeartPulse, title: "Health Insurance Advisory", subtitle: "ఆరోగ్య బీమా సలహా సేవలు", desc: "Star Health Insurance Advisor. We help individuals and families choose the right health insurance plans and assist with claims.", color: "#16a34a", bg: "#dcfce7" },
];

export default function ServicesPreview() {
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
        <section id="services" ref={ref} style={{ padding: "6rem 1.5rem", background: "#f7f9fc" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

                <div className="scroll-animate" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                    <div className="section-tag" style={{ display: "inline-flex" }}>✦ Our Services</div>
                    <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.6rem)", fontWeight: 800, color: "#0f172a", margin: "0.75rem 0 0.5rem" }}>
                        Comprehensive Tax & <span className="gradient-text">Financial Services</span>
                    </h2>
                    <div className="divider" />
                    <p style={{ color: "#64748b", fontSize: "1rem", maxWidth: "480px", margin: "1rem auto 0", lineHeight: 1.7 }}>
                        Everything you need to stay tax-compliant, handled by a certified practitioner with 20+ years of experience.
                    </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: "1.25rem" }}>
                    {services.map((service, i) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={service.title}
                                className={`service-card scroll-animate delay-${Math.min(i * 100 + 100, 500)}`}
                                style={{ background: "white", borderRadius: "1.25rem", padding: "1.75rem" }}
                            >
                                <div style={{ width: "52px", height: "52px", borderRadius: "0.875rem", background: service.bg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.1rem" }}>
                                    <Icon size={24} color={service.color} />
                                </div>
                                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "1.05rem", color: "#0f172a", marginBottom: "0.25rem" }}>
                                    {service.title}
                                </h3>
                                <div style={{ fontSize: "0.85rem", fontWeight: 600, color: service.color, marginBottom: "0.75rem", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                                    {service.subtitle}
                                </div>
                                <p style={{ color: "#475569", fontSize: "0.85rem", lineHeight: 1.7, marginBottom: "1rem" }}>
                                    {service.desc}
                                </p>
                                <Link href="/services" style={{ color: service.color, fontWeight: 600, fontSize: "0.82rem", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.375rem" }}>
                                    Learn More <ArrowRight size={13} />
                                </Link>
                            </div>
                        );
                    })}
                </div>

                <div className="scroll-animate" style={{ textAlign: "center", marginTop: "3rem" }}>
                    <Link href="/services" className="btn-primary" style={{ fontSize: "1rem", padding: "0.875rem 2.5rem" }}>
                        View All Services <ArrowRight size={17} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
