"use client";

import { useEffect, useRef, useState } from "react";
import { Phone, MessageCircle, Send, CheckCircle, MapPin, Mail, Clock } from "lucide-react";

const WHATSAPP_NUMBER = "919876543210";
const PHONE_NUMBER = "+91 98765 43210";
const EMAIL = "info@bejjankitax.com";

const services = [
    "Income Tax Return Filing",
    "GST Registration",
    "GST Return Filing",
    "Tax Planning & Advisory",
    "Business Registration",
    "IT Notice Handling",
    "Other",
];

export default function ContactSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [formState, setFormState] = useState({
        name: "",
        phone: "",
        service: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add("visible");
                });
            },
            { threshold: 0.1 }
        );
        const elements = sectionRef.current?.querySelectorAll(".scroll-animate");
        elements?.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate form submission
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 1500);
    };

    return (
        <section
            id="contact"
            ref={sectionRef}
            style={{ padding: "6rem 1.5rem", background: "#f7f9fc" }}
        >
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                {/* Header */}
                <div className="scroll-animate" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                    <div className="section-tag" style={{ display: "inline-flex" }}>
                        ✦ Get In Touch
                    </div>
                    <h2
                        style={{
                            fontSize: "clamp(1.75rem, 4vw, 2.8rem)",
                            fontWeight: 800,
                            color: "#0f172a",
                            marginBottom: "1rem",
                            marginTop: "0.5rem",
                        }}
                    >
                        Contact <span className="gradient-text">Our Experts</span>
                    </h2>
                    <div className="divider" />
                    <p style={{ color: "#64748b", fontSize: "1.05rem", maxWidth: "480px", margin: "1rem auto 0", lineHeight: 1.7 }}>
                        Have a tax question? Need a consultation? Reach out and we&apos;ll get back to you within 2 hours.
                    </p>
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.4fr)",
                        gap: "2.5rem",
                        alignItems: "start",
                    }}
                    className="contact-grid"
                >
                    {/* Left: Contact Info */}
                    <div className="scroll-animate" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                        {/* Quick Contact Cards */}
                        <a
                            href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "1rem",
                                background: "white",
                                border: "1.5px solid #e2e8f0",
                                borderRadius: "1.25rem",
                                padding: "1.375rem 1.5rem",
                                textDecoration: "none",
                                transition: "all 0.3s ease",
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.borderColor = "#1a56db";
                                (e.currentTarget as HTMLElement).style.transform = "translateX(4px)";
                                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(26,86,219,0.12)";
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0";
                                (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
                                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                            }}
                        >
                            <div style={{ width: "48px", height: "48px", background: "#e8f0fc", borderRadius: "0.875rem", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                <Phone size={22} color="#1a56db" />
                            </div>
                            <div>
                                <div style={{ fontSize: "0.78rem", color: "#94a3b8", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase" as const }}>Call Us</div>
                                <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0f172a", marginTop: "0.1rem" }}>{PHONE_NUMBER}</div>
                                <div style={{ fontSize: "0.78rem", color: "#64748b" }}>Mon–Sat, 9am–7pm</div>
                            </div>
                        </a>

                        <a
                            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi!%20I%20need%20tax%20help.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "1rem",
                                background: "white",
                                border: "1.5px solid #e2e8f0",
                                borderRadius: "1.25rem",
                                padding: "1.375rem 1.5rem",
                                textDecoration: "none",
                                transition: "all 0.3s ease",
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.borderColor = "#25D366";
                                (e.currentTarget as HTMLElement).style.transform = "translateX(4px)";
                                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(37,211,102,0.12)";
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0";
                                (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
                                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                            }}
                        >
                            <div style={{ width: "48px", height: "48px", background: "#d1fae5", borderRadius: "0.875rem", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                <MessageCircle size={22} color="#25D366" />
                            </div>
                            <div>
                                <div style={{ fontSize: "0.78rem", color: "#94a3b8", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase" as const }}>WhatsApp</div>
                                <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0f172a", marginTop: "0.1rem" }}>Chat Now</div>
                                <div style={{ fontSize: "0.78rem", color: "#64748b" }}>Instant responses</div>
                            </div>
                        </a>

                        <a
                            href={`mailto:${EMAIL}`}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "1rem",
                                background: "white",
                                border: "1.5px solid #e2e8f0",
                                borderRadius: "1.25rem",
                                padding: "1.375rem 1.5rem",
                                textDecoration: "none",
                                transition: "all 0.3s ease",
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.borderColor = "#7c3aed";
                                (e.currentTarget as HTMLElement).style.transform = "translateX(4px)";
                                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(124,58,237,0.12)";
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0";
                                (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
                                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                            }}
                        >
                            <div style={{ width: "48px", height: "48px", background: "#ede9fe", borderRadius: "0.875rem", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                <Mail size={22} color="#7c3aed" />
                            </div>
                            <div>
                                <div style={{ fontSize: "0.78rem", color: "#94a3b8", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase" as const }}>Email Us</div>
                                <div style={{ fontSize: "1rem", fontWeight: 700, color: "#0f172a", marginTop: "0.1rem" }}>{EMAIL}</div>
                                <div style={{ fontSize: "0.78rem", color: "#64748b" }}>We reply within 2 hours</div>
                            </div>
                        </a>

                        {/* Office hours */}
                        <div
                            style={{
                                background: "white",
                                border: "1.5px solid #e2e8f0",
                                borderRadius: "1.25rem",
                                padding: "1.375rem 1.5rem",
                            }}
                        >
                            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                                <div style={{ width: "40px", height: "40px", background: "#fef3c7", borderRadius: "0.75rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <Clock size={18} color="#d97706" />
                                </div>
                                <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "#0f172a" }}>Office Hours</div>
                            </div>
                            {[
                                { day: "Monday – Friday", time: "9:00 AM – 7:00 PM" },
                                { day: "Saturday", time: "9:00 AM – 4:00 PM" },
                                { day: "Sunday", time: "Closed" },
                            ].map((h) => (
                                <div key={h.day} style={{ display: "flex", justifyContent: "space-between", padding: "0.4rem 0", borderBottom: "1px solid #f1f5f9", fontSize: "0.875rem" }}>
                                    <span style={{ color: "#475569" }}>{h.day}</span>
                                    <span style={{ fontWeight: 600, color: h.time === "Closed" ? "#ef4444" : "#0f172a" }}>{h.time}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div
                        className="scroll-animate delay-200"
                        style={{
                            background: "white",
                            borderRadius: "1.5rem",
                            padding: "2.5rem",
                            border: "1.5px solid #e2e8f0",
                            boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
                        }}
                    >
                        {submitted ? (
                            <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                                <div
                                    style={{
                                        width: "72px",
                                        height: "72px",
                                        background: "#d1fae5",
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        margin: "0 auto 1.5rem",
                                    }}
                                >
                                    <CheckCircle size={36} color="#059669" />
                                </div>
                                <h3 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#0f172a", marginBottom: "0.75rem" }}>
                                    Thank You!
                                </h3>
                                <p style={{ color: "#475569", lineHeight: 1.7 }}>
                                    We&apos;ve received your enquiry. Our team will contact you within 2 hours.
                                </p>
                                <a
                                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-whatsapp"
                                    style={{ marginTop: "1.5rem", justifyContent: "center" }}
                                >
                                    <MessageCircle size={18} /> Chat on WhatsApp
                                </a>
                            </div>
                        ) : (
                            <>
                                <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#0f172a", marginBottom: "0.375rem" }}>
                                    Book a Free Consultation
                                </h3>
                                <p style={{ color: "#64748b", fontSize: "0.9rem", marginBottom: "1.75rem" }}>
                                    Fill in the form and our expert will reach out to you shortly.
                                </p>

                                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.125rem" }}>
                                    <div>
                                        <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#374151", marginBottom: "0.375rem" }}>
                                            Full Name *
                                        </label>
                                        <input
                                            id="contact-name"
                                            type="text"
                                            required
                                            placeholder="e.g. Rajesh Kumar"
                                            className="form-input"
                                            value={formState.name}
                                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        />
                                    </div>

                                    <div>
                                        <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#374151", marginBottom: "0.375rem" }}>
                                            Phone Number *
                                        </label>
                                        <input
                                            id="contact-phone"
                                            type="tel"
                                            required
                                            placeholder="+91 98765 43210"
                                            className="form-input"
                                            value={formState.phone}
                                            onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                                        />
                                    </div>

                                    <div>
                                        <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#374151", marginBottom: "0.375rem" }}>
                                            Service Needed *
                                        </label>
                                        <select
                                            id="contact-service"
                                            required
                                            className="form-input"
                                            value={formState.service}
                                            onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                                            style={{ cursor: "pointer", appearance: "auto" }}
                                        >
                                            <option value="">Select a service...</option>
                                            {services.map((s) => (
                                                <option key={s} value={s}>{s}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#374151", marginBottom: "0.375rem" }}>
                                            Message (Optional)
                                        </label>
                                        <textarea
                                            id="contact-message"
                                            placeholder="Tell us more about your requirements..."
                                            className="form-input"
                                            rows={3}
                                            value={formState.message}
                                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                            style={{ resize: "vertical" }}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn-primary"
                                        disabled={loading}
                                        style={{
                                            justifyContent: "center",
                                            padding: "0.9rem",
                                            fontSize: "1rem",
                                            opacity: loading ? 0.8 : 1,
                                        }}
                                    >
                                        {loading ? (
                                            <>Sending...</>
                                        ) : (
                                            <><Send size={17} /> Send Enquiry</>
                                        )}
                                    </button>

                                    <p style={{ textAlign: "center", fontSize: "0.78rem", color: "#94a3b8" }}>
                                        Or instant reply via{" "}
                                        <a
                                            href={`https://wa.me/${WHATSAPP_NUMBER}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ color: "#25D366", fontWeight: 600, textDecoration: "none" }}
                                        >
                                            WhatsApp
                                        </a>
                                    </p>
                                </form>
                            </>
                        )}
                    </div>
                </div>

                {/* Maps Section */}
                <div
                    className="scroll-animate"
                    id="location"
                    style={{ marginTop: "3.5rem" }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                        <div style={{ width: "40px", height: "40px", background: "#e8f0fc", borderRadius: "0.75rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <MapPin size={20} color="#1a56db" />
                        </div>
                        <div>
                            <h3 style={{ fontWeight: 700, fontSize: "1.1rem", color: "#0f172a" }}>Our Office Location</h3>
                            <p style={{ color: "#64748b", fontSize: "0.85rem" }}>Visit us for in-person consultation</p>
                        </div>
                    </div>
                    <div
                        style={{
                            borderRadius: "1.25rem",
                            overflow: "hidden",
                            border: "1.5px solid #e2e8f0",
                            boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                        }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0!2d78.4773!3d17.4529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91e2cdb9b6a9%3A0x0!2zMTfCsDI3JzEwLjQiTiA3OMKwMjgnMzguMyJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                            width="100%"
                            height="380"
                            style={{ border: 0, display: "block" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Bejjanki Tax Consultancy Office Location"
                        />
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </section>
    );
}
