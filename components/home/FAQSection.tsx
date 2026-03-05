"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        q: "Who needs to file an Income Tax Return (ITR)?",
        a: "Any individual with gross income above ₹2.5 lakh (₹3 lakh for senior citizens, ₹5 lakh for super senior citizens) must file an ITR. It's also recommended even if income is below the exemption limit if you want to claim refunds, apply for loans, or get visas.",
    },
    {
        q: "What documents are needed for ITR filing?",
        a: "Typically: PAN card, Aadhaar card, Form 16 (for salaried), bank statements, investment proofs (80C, 80D), interest certificates, and details of any capital gains. We'll guide you through exactly what's needed for your specific situation.",
    },
    {
        q: "What is the deadline for filing ITR?",
        a: "For most individuals, the deadline is July 31st of the assessment year. Businesses requiring audit must file by October 31st. Belated returns can be filed until December 31st, with applicable late fees. We ensure your returns are filed well before the deadline.",
    },
    {
        q: "Do I need to register for GST?",
        a: "GST registration is mandatory if your annual turnover exceeds ₹40 lakhs (₹20 lakhs for service providers, ₹10 lakhs for special category states). It's also required for interstate supply of goods, e-commerce sellers, and importers/exporters.",
    },
    {
        q: "What are the penalties for late GST filing?",
        a: "Late GST filing attracts a late fee of ₹50 per day (₹20 per day for nil returns), up to a maximum of ₹5,000. Interest at 18% per annum is also charged on the outstanding tax amount. Filing on time avoids these penalties — we ensure timely submission.",
    },
    {
        q: "How long does business registration take?",
        a: "Sole proprietorship registration can be done immediately with basic registrations. LLP registration typically takes 7–15 working days. Private Limited Company registration takes 10–15 working days. The timeline depends on document availability and government processing.",
    },
    {
        q: "Can you handle income tax notices on my behalf?",
        a: "Yes, as an Enrolled Tax Practitioner (ETP), Sugunakar Bejjanki is authorized to appear before Income Tax Authorities and handle scrutiny assessments, notices under Section 143(1), 143(2), 148, and other provisions on your behalf.",
    },
    {
        q: "What areas do you serve?",
        a: "We primarily serve clients in Karimnagar, Telangana, but also handle tax filings and advisory for clients across India. Most services can be done remotely through digital document submission.",
    },
];

export default function FAQSection() {
    const ref = useRef<HTMLDivElement>(null);
    const [openIdx, setOpenIdx] = useState<number | null>(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
            { threshold: 0.08 }
        );
        ref.current?.querySelectorAll(".scroll-animate").forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={ref} style={{ padding: "6rem 1.5rem", background: "#f7f9fc" }} id="faq">
            <div style={{ maxWidth: "860px", margin: "0 auto" }}>
                <div className="scroll-animate" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                    <div className="section-tag" style={{ display: "inline-flex" }}>✦ FAQ</div>
                    <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", fontWeight: 800, color: "#0f172a", margin: "0.75rem 0 0.5rem" }}>
                        Frequently Asked <span className="gradient-text">Questions</span>
                    </h2>
                    <div className="divider" />
                    <p style={{ color: "#64748b", fontSize: "0.97rem", maxWidth: "440px", margin: "1rem auto 0", lineHeight: 1.7 }}>
                        Answers to the most common tax and GST questions we receive.
                    </p>
                </div>

                <div className="scroll-animate delay-100" style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            style={{
                                background: "white",
                                border: `1.5px solid ${openIdx === i ? "#1a56db" : "#e2e8f0"}`,
                                borderRadius: "1rem",
                                overflow: "hidden",
                                transition: "border-color 0.2s ease",
                            }}
                        >
                            <button
                                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                                style={{
                                    width: "100%",
                                    padding: "1.25rem 1.5rem",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    gap: "1rem",
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                    textAlign: "left" as const,
                                }}
                                aria-expanded={openIdx === i}
                            >
                                <span style={{ fontWeight: 700, fontSize: "0.95rem", color: openIdx === i ? "#1a56db" : "#0f172a", fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.4 }}>
                                    {faq.q}
                                </span>
                                <ChevronDown
                                    size={20}
                                    color={openIdx === i ? "#1a56db" : "#94a3b8"}
                                    style={{ flexShrink: 0, transition: "transform 0.3s ease", transform: openIdx === i ? "rotate(180deg)" : "rotate(0deg)" }}
                                />
                            </button>
                            {openIdx === i && (
                                <div style={{ padding: "0 1.5rem 1.25rem", color: "#475569", fontSize: "0.9rem", lineHeight: 1.75 }}>
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="scroll-animate delay-200" style={{ textAlign: "center", marginTop: "2.5rem" }}>
                    <p style={{ color: "#64748b", fontSize: "0.9rem" }}>
                        Have a different question?{" "}
                        <a href="/contact" style={{ color: "#1a56db", fontWeight: 600, textDecoration: "none" }}>
                            Contact us directly →
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}
