"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, FileText, Building2, ReceiptText, PiggyBank, Briefcase, BookOpen, TrendingUp, MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const services = [
    {
        icon: FileText,
        title: "Income Tax Return Filing",
        shortDesc: "Accurate, timely ITR filing for individuals and businesses.",
        longDesc: "We handle ITR filing for all categories — salaried employees, freelancers, business owners, NRIs, senior citizens, and HUFs. All ITR forms (ITR-1 to ITR-7) are covered. We also handle advance tax calculations, self-assessment tax, and response to 26AS mismatches.",
        benefits: ["Avoid penalties and late fees", "Claim maximum eligible deductions", "Get refunds faster", "Full year tax planning included"],
        whoNeeds: "Salaried individuals, freelancers, business owners, NRIs, anyone with income above exemption limit",
        color: "#1a56db", bg: "#e8f0fc",
    },
    {
        icon: Building2,
        title: "GST Registration",
        shortDesc: "Quick GST registration for businesses of all sizes.",
        longDesc: "We assist businesses in obtaining GST registration (GSTIN) from the Government of India portal. This includes document preparation, application filing, tracking, and obtaining the GST certificate. We also help with amendments, cancellations, and voluntary registrations.",
        benefits: ["Get your GSTIN within 3-7 days", "Legally collect GST from customers", "Claim Input Tax Credit (ITC)", "Avoid penalties for non-registration"],
        whoNeeds: "Businesses with annual turnover above ₹40L (goods) or ₹20L (services). Also mandatory for interstate suppliers, e-commerce sellers",
        color: "#7c3aed", bg: "#ede9fe",
    },
    {
        icon: ReceiptText,
        title: "GST Return Filing",
        shortDesc: "Monthly, quarterly, and annual GST return filing.",
        longDesc: "We handle all GST return filings including GSTR-1 (outward supplies), GSTR-3B (summary return), GSTR-9 (annual return), and GSTR-9C (reconciliation). Our system ensures accurate reconciliation of purchase invoices with GST portal data.",
        benefits: ["Avoid late fees (₹50/day)", "Accurate ITC reconciliation", "Timely compliance = no penalties", "Monthly/quarterly filing options"],
        whoNeeds: "All GST registered businesses — traders, manufacturers, service providers, and e-commerce sellers",
        color: "#0891b2", bg: "#e0f2fe",
    },
    {
        icon: PiggyBank,
        title: "Tax Planning",
        shortDesc: "Minimize your tax liability with smart planning.",
        longDesc: "Strategic tax planning involves analyzing your financial situation and advising on the best investment options, deductions under Chapter VI-A (80C, 80D, 80G), HRA, LTA, home loan benefits, and other exemptions to legally minimize your tax outflow.",
        benefits: ["Save thousands in tax every year", "Best investment recommendations", "Optimized deduction claims", "Long-term wealth creation strategy"],
        whoNeeds: "Salaried employees, business owners, high-income individuals, and anyone wanting to legally reduce their tax burden",
        color: "#059669", bg: "#d1fae5",
    },
    {
        icon: Briefcase,
        title: "Business Registration",
        shortDesc: "Register your business quickly and compliantly.",
        longDesc: "We assist in registering all types of business entities: Sole Proprietorship, Partnership Firm, LLP (Limited Liability Partnership), and Private Limited Company. We also handle MSME/Udyam registration, Shop & Establishment Act registration, and Professional Tax registration.",
        benefits: ["Legal business identity", "Limited liability protection (LLP/Pvt Ltd)", "Access to business loans & subsidies", "GST-ready from day one"],
        whoNeeds: "Entrepreneurs starting a new business, existing businesses wanting to formalize, micro and small businesses needing MSME registration",
        color: "#d97706", bg: "#fef3c7",
    },
    {
        icon: BookOpen,
        title: "Accounting & Bookkeeping",
        shortDesc: "Organized books for stress-free compliance.",
        longDesc: "We provide monthly bookkeeping, preparation of financial statements (P&L, Balance Sheet), bank reconciliation, accounts payable/receivable management, and year-end account finalization. Suitable for small businesses, traders, and professionals.",
        benefits: ["Real-time financial visibility", "Ready for tax filing anytime", "Audit-ready books", "Reduces compliance stress"],
        whoNeeds: "Small businesses, traders, doctors, lawyers, and professionals who need organized books without hiring a full-time accountant",
        color: "#be185d", bg: "#fce7f3",
    },
    {
        icon: TrendingUp,
        title: "Financial Advisory",
        shortDesc: "Expert guidance for long-term wealth growth.",
        longDesc: "Beyond taxes, we provide comprehensive financial advisory services including investment planning, retirement planning, insurance advisory, cash flow management, and business financial structuring. We help you make informed decisions that align with your financial goals.",
        benefits: ["Goal-based financial planning", "Risk-adjusted investment strategies", "Retirement corpus planning", "Insurance optimization advice"],
        whoNeeds: "Individuals planning for retirement, business owners needing succession planning, high-income earners wanting wealth management",
        color: "#7c3aed", bg: "#f5f3ff",
    },
];

export default function ServicesPageContent() {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
            { threshold: 0.07 }
        );
        ref.current?.querySelectorAll(".scroll-animate").forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref}>
            {/* Page Hero */}
            <div style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #1a56db 100%)", padding: "5rem 1.5rem 6rem", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "350px", height: "350px", background: "radial-gradient(circle, rgba(14,165,233,0.2) 0%, transparent 70%)", borderRadius: "50%" }} />
                <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "9999px", padding: "0.375rem 1rem", fontSize: "0.78rem", fontWeight: 600, color: "rgba(255,255,255,0.9)", letterSpacing: "0.06em", textTransform: "uppercase" as const, marginBottom: "1.5rem" }}>
                        ✦ Services
                    </div>
                    <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: "white", lineHeight: 1.1, marginBottom: "1rem" }}>
                        Comprehensive{" "}
                        <span style={{ background: "linear-gradient(135deg, #60a5fa, #38bdf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                            Tax & Financial
                        </span>{" "}
                        Services
                    </h1>
                    <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "1rem", maxWidth: "560px", lineHeight: 1.75 }}>
                        From ITR filing to financial advisory — {BUSINESS.practitioner} provides all the services you need under one roof.
                    </p>
                </div>
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, lineHeight: 0 }}>
                    <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: "100%", height: "60px", display: "block" }}>
                        <path d="M0 30 C480 60 960 0 1440 30 L1440 60 L0 60 Z" fill="white" />
                    </svg>
                </div>
            </div>

            {/* Services List */}
            <section style={{ padding: "4rem 1.5rem 5rem", background: "white" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "3rem" }}>
                    {services.map((service, i) => {
                        const Icon = service.icon;
                        const isEven = i % 2 === 0;
                        return (
                            <div
                                key={service.title}
                                id={service.title.toLowerCase().replace(/\s+/g, '-')}
                                className={`scroll-animate delay-${Math.min(i * 50 + 100, 400)}`}
                                style={{ background: "#f7f9fc", borderRadius: "1.5rem", overflow: "hidden", border: "1px solid #e2e8f0" }}
                            >
                                <div className="service-detail-grid" style={{ display: "grid", gridTemplateColumns: isEven ? "1fr 2fr" : "2fr 1fr", gap: 0 }}>
                                    {/* Color panel */}
                                    {!isEven && (
                                        <div className="service-detail-content" style={{ padding: "2.5rem" }}>
                                            {renderServiceContent(service)}
                                        </div>
                                    )}

                                    <div style={{ background: `linear-gradient(135deg, ${service.color}15, ${service.color}08)`, borderLeft: isEven ? "none" : `1px solid ${service.color}25`, borderRight: isEven ? `1px solid ${service.color}25` : "none", padding: "2.5rem", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start" }}>
                                        <div style={{ width: "64px", height: "64px", borderRadius: "1.125rem", background: service.bg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                                            <Icon size={30} color={service.color} />
                                        </div>
                                        <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "1.4rem", color: "#0f172a", marginBottom: "0.625rem", lineHeight: 1.2 }}>
                                            {service.title}
                                        </h2>
                                        <p style={{ color: "#64748b", fontSize: "0.92rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                                            {service.shortDesc}
                                        </p>
                                        <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: service.color, color: "white", padding: "0.65rem 1.5rem", borderRadius: "0.75rem", fontWeight: 700, textDecoration: "none", fontSize: "0.875rem" }}>
                                            Get Started <ArrowRight size={15} />
                                        </Link>
                                    </div>

                                    {isEven && (
                                        <div className="service-detail-content" style={{ padding: "2.5rem" }}>
                                            {renderServiceContent(service)}
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: "4rem 1.5rem 5rem", background: "#f7f9fc" }}>
                <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
                    <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontWeight: 800, color: "#0f172a", marginBottom: "1rem" }}>
                        Not Sure Which Service You Need?
                    </h2>
                    <p style={{ color: "#64748b", fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
                        Book a free consultation and {BUSINESS.practitioner} will guide you to the right service for your specific situation.
                    </p>
                    <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" as const }}>
                        <Link href="/contact" className="btn-primary">Book Free Consultation <ArrowRight size={17} /></Link>
                        <a href={`https://wa.me/${BUSINESS.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                            <MessageCircle size={17} /> WhatsApp Us
                        </a>
                    </div>
                </div>
            </section>

            <style>{`
        @media (max-width: 768px) {
          .service-detail-grid { grid-template-columns: 1fr !important; }
          .service-detail-content { order: 2; }
        }
      `}</style>
        </div>
    );
}

function renderServiceContent(service: typeof services[0]) {
    return (
        <>
            <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 750, fontSize: "1rem", color: "#0f172a", marginBottom: "0.75rem" }}>
                About This Service
            </h3>
            <p style={{ color: "#475569", fontSize: "0.9rem", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                {service.longDesc}
            </p>

            <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#0f172a", marginBottom: "0.75rem" }}>
                Key Benefits
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {service.benefits.map((b) => (
                    <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.875rem", color: "#374151" }}>
                        <CheckCircle2 size={15} color={service.color} style={{ marginTop: "2px", flexShrink: 0 }} />
                        {b}
                    </li>
                ))}
            </ul>

            <div style={{ background: `${service.color}10`, border: `1px solid ${service.color}25`, borderRadius: "0.875rem", padding: "0.875rem 1.125rem" }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: service.color, textTransform: "uppercase" as const, letterSpacing: "0.05em" }}>Who Needs This?</span>
                <p style={{ fontSize: "0.85rem", color: "#374151", marginTop: "0.3rem", lineHeight: 1.6 }}>{service.whoNeeds}</p>
            </div>
        </>
    );
}
