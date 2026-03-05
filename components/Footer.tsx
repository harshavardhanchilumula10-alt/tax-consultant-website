"use client";

import Link from "next/link";
import { FileText, Phone, Mail, MapPin, ArrowRight, MessageCircle } from "lucide-react";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";

const serviceLinks = [
    "Income Tax Return Filing",
    "GST Registration",
    "GST Return Filing",
    "Tax Planning",
    "Business Registration",
    "Accounting & Bookkeeping",
    "Financial Advisory",
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)", color: "white", padding: "4rem 1.5rem 0" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

                {/* CTA Banner */}
                <div
                    style={{
                        background: "linear-gradient(135deg, #1a56db, #0ea5e9)",
                        borderRadius: "1.5rem",
                        padding: "2.5rem 2rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: "1.5rem",
                        marginBottom: "4rem",
                    }}
                >
                    <div>
                        <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(1.1rem, 3vw, 1.5rem)", marginBottom: "0.4rem" }}>
                            Ready to File Your Taxes?
                        </h3>
                        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem" }}>
                            Free consultation with Sugunakar Bejjanki — 20+ years of expertise.
                        </p>
                    </div>
                    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                        <Link
                            href="/contact"
                            style={{
                                background: "white", color: "#1a56db", padding: "0.75rem 1.75rem",
                                borderRadius: "0.75rem", fontWeight: 700, textDecoration: "none",
                                fontSize: "0.9rem", display: "flex", alignItems: "center", gap: "0.5rem",
                            }}
                        >
                            Book Consultation <ArrowRight size={16} />
                        </Link>
                        <a
                            href={`https://wa.me/${BUSINESS.whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                background: "rgba(255,255,255,0.15)", color: "white", padding: "0.75rem 1.75rem",
                                borderRadius: "0.75rem", fontWeight: 700, textDecoration: "none",
                                fontSize: "0.9rem", display: "flex", alignItems: "center", gap: "0.5rem",
                                border: "1.5px solid rgba(255,255,255,0.3)",
                            }}
                        >
                            <MessageCircle size={16} /> WhatsApp
                        </a>
                    </div>
                </div>

                {/* Footer Grid */}
                <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "3rem", marginBottom: "3rem" }}>

                    {/* Brand */}
                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "1.25rem" }}>
                            <div style={{ width: "40px", height: "40px", background: "linear-gradient(135deg, #1a56db, #0ea5e9)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <FileText size={20} color="white" />
                            </div>
                            <div>
                                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "1rem", lineHeight: 1.1 }}>
                                    {BUSINESS.name}
                                </div>
                                <div style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.5)", marginTop: "0.1rem" }}>
                                    {BUSINESS.tagline}
                                </div>
                            </div>
                        </div>

                        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.875rem", lineHeight: 1.8, maxWidth: "310px", marginBottom: "1.5rem" }}>
                            Professional income tax and GST services by <strong style={{ color: "rgba(255,255,255,0.85)" }}>{BUSINESS.practitioner}</strong>,
                            serving individuals and businesses in Karimnagar and across Telangana for {BUSINESS.experience} years.
                        </p>

                        {[
                            { icon: MapPin, text: BUSINESS.address.full },
                            { icon: Phone, text: BUSINESS.phone },
                            { icon: Mail, text: BUSINESS.email },
                        ].map(({ icon: Icon, text }) => (
                            <div key={text} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", marginBottom: "0.75rem" }}>
                                <Icon size={15} color="#60a5fa" style={{ marginTop: "3px", flexShrink: 0 }} />
                                <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.83rem", lineHeight: 1.5 }}>{text}</span>
                            </div>
                        ))}
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.95rem", marginBottom: "1.25rem" }}>
                            Quick Links
                        </h4>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                            {NAV_LINKS.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none", fontSize: "0.875rem" }}
                                        onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "#60a5fa"; }}
                                        onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "rgba(255,255,255,0.55)"; }}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link href="/contact" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none", fontSize: "0.875rem" }}
                                    onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "#60a5fa"; }}
                                    onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "rgba(255,255,255,0.55)"; }}
                                >
                                    Book Consultation
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.95rem", marginBottom: "1.25rem" }}>
                            Our Services
                        </h4>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                            {serviceLinks.map((s) => (
                                <li key={s}>
                                    <Link href="/services" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none", fontSize: "0.83rem" }}
                                        onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "#60a5fa"; }}
                                        onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "rgba(255,255,255,0.55)"; }}
                                    >
                                        {s}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Disclaimer */}
                <div style={{ padding: "1.5rem 0", borderTop: "1px solid rgba(255,255,255,0.1)", textAlign: "center" }}>
                    <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.75rem", lineHeight: 1.6, maxWidth: "1000px", margin: "0 auto" }}>
                        <strong style={{ color: "rgba(255,255,255,0.6)" }}>Disclaimer:</strong> The information provided on this website is for general informational purposes only and should not be considered legal or financial advice. Please contact us for a personalized consultation tailored to your specific situation.
                    </p>
                </div>

                {/* Bottom bar */}
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", padding: "1.25rem 0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.75rem" }}>
                    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.78rem" }}>
                        © {currentYear} {BUSINESS.name}. All rights reserved. | Karimnagar, Telangana
                    </p>
                    <div style={{ display: "flex", gap: "1.5rem" }}>
                        {["Privacy Policy", "Disclaimer"].map((item) => (
                            <a key={item} href="#" style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.75rem", textDecoration: "none" }}
                                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "rgba(255,255,255,0.65)"; }}
                                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "rgba(255,255,255,0.35)"; }}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
        </footer>
    );
}
