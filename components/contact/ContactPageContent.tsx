"use client";

import { useEffect, useRef, useState } from "react";
import { Phone, MessageCircle, Send, CheckCircle, MapPin, Mail, Clock } from "lucide-react";

import { BUSINESS } from "@/lib/constants";

const serviceOptions = [
    "Income Tax Return Filing",
    "GST Registration",
    "GST Return Filing",
    "Tax Planning",
    "Business Registration",
    "Accounting & Bookkeeping",
    "Financial Advisory",
    "Income Tax Notice Handling",
    "Other",
];

export default function ContactPageContent() {
    const ref = useRef<HTMLDivElement>(null);
    const [formState, setFormState] = useState({ name: "", phone: "", service: "", message: "" });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
            { threshold: 0.08 }
        );
        ref.current?.querySelectorAll(".scroll-animate").forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMsg("");

        const nameValid = formState.name.trim().length >= 2;
        if (!nameValid) {
            setErrorMsg("Please enter a valid Name (minimum 2 characters).");
            return;
        }

        const phoneRegex = /^[+]?[0-9]{10,14}$/;
        if (!phoneRegex.test(formState.phone.replace(/\s+/g, ""))) {
            setErrorMsg("Please enter a valid Phone Number (10+ digits).");
            return;
        }

        if (!formState.service) {
            setErrorMsg("Please select a service.");
            return;
        }

        // Build mailto link with form data
        const subject = `Enquiry: ${formState.service}`;
        let body = `Name: ${formState.name}\nPhone: ${formState.phone}\nService Needed: ${formState.service}`;
        if (formState.message) {
            body += `\n\nMessage:\n${formState.message}`;
        }

        const mailtoUrl = `mailto:${BUSINESS.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoUrl, "_self");
    };

    const handleWhatsAppSend = () => {
        setErrorMsg("");

        const nameValid = formState.name.trim().length >= 2;
        if (!nameValid) {
            setErrorMsg("Please enter your name before sending via WhatsApp.");
            return;
        }

        let messageText = `Hello Sugunakar Bejjanki,\n\nMy name is ${formState.name}.\n`;
        if (formState.phone) messageText += `My phone number is: ${formState.phone}\n`;
        if (formState.service) messageText += `I need consultation regarding: *${formState.service}*\n`;
        if (formState.message) messageText += `\nMessage: ${formState.message}`;

        const whatsappUrl = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(messageText)}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <div ref={ref}>
            {/* Page Hero */}
            <div style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #1a56db 100%)", padding: "5rem 1.5rem 6rem", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "350px", height: "350px", background: "radial-gradient(circle, rgba(14,165,233,0.2) 0%, transparent 70%)", borderRadius: "50%" }} />
                <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "9999px", padding: "0.375rem 1rem", fontSize: "0.78rem", fontWeight: 600, color: "rgba(255,255,255,0.9)", letterSpacing: "0.06em", textTransform: "uppercase" as const, marginBottom: "1.5rem" }}>
                        ✦ Contact Us
                    </div>
                    <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: "white", lineHeight: 1.1, marginBottom: "1rem" }}>
                        Get in Touch with{" "}
                        <span style={{ background: "linear-gradient(135deg, #60a5fa, #38bdf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                            Our Experts
                        </span>
                    </h1>
                    <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "1rem", maxWidth: "520px", lineHeight: 1.75 }}>
                        Have a tax question? Need a consultation? We respond within 2 hours. Call, WhatsApp, or fill the form below.
                    </p>
                </div>
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, lineHeight: 0 }}>
                    <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: "100%", height: "60px", display: "block" }}>
                        <path d="M0 30 C480 60 960 0 1440 30 L1440 60 L0 60 Z" fill="#f7f9fc" />
                    </svg>
                </div>
            </div>

            {/* Contact Section */}
            <section style={{ padding: "4rem 1.5rem 5rem", background: "#f7f9fc" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                    <div className="contact-page-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "2.5rem", alignItems: "start", marginBottom: "3.5rem" }}>

                        {/* Left: Contact Info */}
                        <div className="scroll-animate" style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

                            {/* Practitioner card */}
                            <div style={{ background: "linear-gradient(135deg, #0f172a, #1e3a8a)", borderRadius: "1.25rem", padding: "1.75rem", color: "white" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                                    <img src="/sugunakar-profile.png" alt={BUSINESS.practitioner} onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling!.removeAttribute('style'); }} style={{ width: "52px", height: "52px", borderRadius: "50%", objectFit: "cover", objectPosition: "top", border: "2px solid rgba(255,255,255,0.3)", flexShrink: 0, background: "white" }} />
                                    <div style={{ display: "none", width: "52px", height: "52px", borderRadius: "50%", background: "linear-gradient(135deg, #60a5fa, #38bdf8)", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "1.1rem", color: "#0f172a", flexShrink: 0 }}>SB</div>
                                    <div>
                                        <div style={{ fontWeight: 800, fontSize: "1rem", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{BUSINESS.practitioner}</div>
                                        <div style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.8rem" }}>Income Tax Practitioner & Financial Advisor</div>
                                    </div>
                                </div>
                                <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: "1.125rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                                    {[
                                        { icon: Phone, text: BUSINESS.phone, href: `tel:${BUSINESS.phoneRaw}` },
                                        { icon: Mail, text: BUSINESS.email, href: `mailto:${BUSINESS.email}` },
                                        { icon: MapPin, text: BUSINESS.address.full, href: BUSINESS.googleMapsEmbed },
                                    ].map(({ icon: Icon, text, href }) => (
                                        <a key={text} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                                            style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", color: "rgba(255,255,255,0.8)", fontSize: "0.85rem", textDecoration: "none", lineHeight: 1.5 }}>
                                            <Icon size={15} color="#60a5fa" style={{ marginTop: "2px", flexShrink: 0 }} />
                                            {text}
                                        </a>
                                    ))}
                                </div>

                                {/* Telugu Translations block */}
                                <div style={{ marginTop: "1.5rem", borderTop: "1px dashed rgba(255,255,255,0.2)", paddingTop: "1.25rem", color: "rgba(255,255,255,0.9)" }}>
                                    <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem" }}>సంప్రదించండి</h3>
                                    <p style={{ fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}>
                                        <strong>Sugunakar Bejjanki</strong><br />
                                        Income Tax Practitioner
                                    </p>
                                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", marginBottom: "0.25rem" }}>
                                        <Phone size={14} color="#60a5fa" /> Phone: 8341704756
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", marginBottom: "1rem" }}>
                                        <MapPin size={14} color="#60a5fa" /> Karimnagar, Telangana
                                    </div>
                                    <p style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "rgba(255,255,255,0.8)", marginBottom: "0.75rem" }}>
                                        ఆదాయపు పన్ను, GST మరియు ఇతర పన్ను సంబంధిత సేవల కోసం మమ్మల్ని సంప్రదించండి.
                                    </p>
                                    <p style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "rgba(255,255,255,0.8)", fontStyle: "italic" }}>
                                        Serving clients in Karimnagar and surrounding areas with reliable tax consultation services.<br />
                                        <strong>Location: Karimnagar</strong>
                                    </p>
                                </div>
                            </div>

                            {/* Quick contact buttons */}
                            {[
                                { icon: Phone, label: "Call Us Now", sub: "Mon–Sat 9am–7pm", href: `tel:${BUSINESS.phoneRaw}`, color: "#1a56db", bg: "#e8f0fc", text: BUSINESS.phone },
                                { icon: MessageCircle, label: "WhatsApp", sub: "Instant responses", href: `https://wa.me/${BUSINESS.whatsapp}`, color: "#25D366", bg: "#d1fae5", text: "Start Chat" },
                                { icon: Mail, label: "Email Us", sub: "Reply within 2 hours", href: `mailto:${BUSINESS.email}`, color: "#7c3aed", bg: "#ede9fe", text: BUSINESS.email },
                            ].map(({ icon: Icon, label, sub, href, color, bg, text }) => (
                                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    style={{ display: "flex", alignItems: "center", gap: "1rem", background: "white", border: "1.5px solid #e2e8f0", borderRadius: "1.125rem", padding: "1.125rem 1.25rem", textDecoration: "none", transition: "all 0.25s ease" }}
                                    onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = color; el.style.transform = "translateX(4px)"; el.style.boxShadow = `0 6px 20px ${color}18`; }}
                                    onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#e2e8f0"; el.style.transform = "translateX(0)"; el.style.boxShadow = "none"; }}
                                >
                                    <div style={{ width: "44px", height: "44px", background: bg, borderRadius: "0.75rem", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                        <Icon size={20} color={color} />
                                    </div>
                                    <div style={{ overflow: "hidden" }}>
                                        <div style={{ fontSize: "0.72rem", color: "#94a3b8", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase" as const }}>{label}</div>
                                        <div style={{ fontSize: "0.92rem", fontWeight: 700, color: "#0f172a", marginTop: "0.1rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{text}</div>
                                        <div style={{ fontSize: "0.73rem", color: "#64748b" }}>{sub}</div>
                                    </div>
                                </a>
                            ))}

                            {/* Office Hours */}
                            <div style={{ background: "white", border: "1.5px solid #e2e8f0", borderRadius: "1.125rem", padding: "1.25rem" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "0.875rem" }}>
                                    <div style={{ width: "36px", height: "36px", background: "#fef3c7", borderRadius: "0.625rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <Clock size={17} color="#d97706" />
                                    </div>
                                    <span style={{ fontWeight: 700, fontSize: "0.9rem", color: "#0f172a" }}>Office Hours</span>
                                </div>
                                {BUSINESS.hours.map((h) => (
                                    <div key={h.day} style={{ display: "flex", justifyContent: "space-between", padding: "0.375rem 0", borderBottom: "1px solid #f1f5f9", fontSize: "0.83rem" }}>
                                        <span style={{ color: "#475569" }}>{h.day}</span>
                                        <span style={{ fontWeight: 700, color: h.time === "Closed" ? "#ef4444" : "#0f172a" }}>{h.time}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Form */}
                        <div className="scroll-animate delay-200" style={{ background: "white", borderRadius: "1.5rem", padding: "2.5rem", border: "1.5px solid #e2e8f0", boxShadow: "0 4px 24px rgba(0,0,0,0.05)" }}>
                            {submitted ? (
                                <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                                    <div style={{ width: "72px", height: "72px", background: "#d1fae5", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
                                        <CheckCircle size={36} color="#059669" />
                                    </div>
                                    <h3 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#0f172a", marginBottom: "0.75rem" }}>Thank You!</h3>
                                    <p style={{ color: "#475569", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                                        We&apos;ve received your enquiry. <strong>We</strong> will contact you within 2 hours.
                                    </p>
                                    <a href={`https://wa.me/${BUSINESS.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ justifyContent: "center" }}>
                                        <MessageCircle size={18} /> Chat on WhatsApp
                                    </a>
                                </div>
                            ) : (
                                <>
                                    <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "1.4rem", color: "#0f172a", marginBottom: "0.375rem" }}>
                                        Book a Free Consultation
                                    </h2>
                                    <p style={{ color: "#64748b", fontSize: "0.9rem", marginBottom: "1.75rem" }}>
                                        Fill in your details and we will reach out to you shortly.
                                    </p>

                                    {errorMsg && (
                                        <div style={{ padding: "0.75rem 1rem", background: "#fee2e2", border: "1px solid #f87171", borderRadius: "0.5rem", color: "#b91c1c", fontSize: "0.85rem", fontWeight: 500, marginBottom: "1.25rem" }}>
                                            ⚠️ {errorMsg}
                                        </div>
                                    )}

                                    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.125rem" }}>
                                        <div>
                                            <label style={{ display: "block", fontSize: "0.83rem", fontWeight: 600, color: "#374151", marginBottom: "0.375rem" }}>Full Name *</label>
                                            <input id="c-name" type="text" required placeholder="e.g. Ramesh Kumar" className="form-input"
                                                value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} />
                                        </div>
                                        <div>
                                            <label style={{ display: "block", fontSize: "0.83rem", fontWeight: 600, color: "#374151", marginBottom: "0.375rem" }}>Phone Number *</label>
                                            <input id="c-phone" type="tel" required placeholder="+91 98765 43210" className="form-input"
                                                value={formState.phone} onChange={(e) => setFormState({ ...formState, phone: e.target.value })} />
                                        </div>
                                        <div>
                                            <label style={{ display: "block", fontSize: "0.83rem", fontWeight: 600, color: "#374151", marginBottom: "0.375rem" }}>Service Needed *</label>
                                            <select id="c-service" required className="form-input" style={{ cursor: "pointer", appearance: "auto" }}
                                                value={formState.service} onChange={(e) => setFormState({ ...formState, service: e.target.value })}>
                                                <option value="">Select a service...</option>
                                                {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                                            </select>
                                        </div>
                                        <div>
                                            <label style={{ display: "block", fontSize: "0.83rem", fontWeight: 600, color: "#374151", marginBottom: "0.375rem" }}>Message (Optional)</label>
                                            <textarea id="c-message" placeholder="Tell us more about your situation..." className="form-input" rows={3}
                                                value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                                style={{ resize: "vertical" }} />
                                        </div>
                                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginTop: "0.5rem" }}>
                                            <button type="submit" className="btn-primary" disabled={loading}
                                                style={{ justifyContent: "center", padding: "0.9rem", fontSize: "0.95rem", opacity: loading ? 0.8 : 1 }}>
                                                {loading ? "Sending..." : <><Mail size={17} /> Send Email</>}
                                            </button>

                                            <button type="button" onClick={handleWhatsAppSend} className="btn-whatsapp" disabled={loading}
                                                style={{ justifyContent: "center", padding: "0.9rem", fontSize: "0.95rem", background: "#25D366", color: "white", borderRadius: "0.75rem", border: "none", fontWeight: 700, display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer", transition: "all 0.2s ease" }}
                                                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 25px rgba(37,211,102,0.3)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                                                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
                                            >
                                                <MessageCircle size={17} /> Send via WhatsApp
                                            </button>
                                        </div>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Google Maps */}
                    <div className="scroll-animate" id="location">
                        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.125rem" }}>
                            <div style={{ width: "40px", height: "40px", background: "#e8f0fc", borderRadius: "0.75rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <MapPin size={20} color="#1a56db" />
                            </div>
                            <div>
                                <h2 style={{ fontWeight: 700, fontSize: "1.1rem", color: "#0f172a" }}>Office Location</h2>
                                <p style={{ color: "#64748b", fontSize: "0.82rem" }}>{BUSINESS.address.full}</p>
                            </div>
                        </div>
                        <div style={{ borderRadius: "1.25rem", overflow: "hidden", border: "1.5px solid #e2e8f0", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121836.05484290048!2d79.06543444763544!3d18.43837937817705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bccdde47a0a3b37%3A0x83e6da4e2958b5d2!2sKarimnagar%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                width="100%"
                                height="420"
                                style={{ border: 0, display: "block" }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Bejjanki Tax Consultancy – Karimnagar, Telangana"
                            />
                        </div>
                        <div style={{ marginTop: "1rem", textAlign: "center" }}>
                            <a href={BUSINESS.googleMapsEmbed} target="_blank" rel="noopener noreferrer"
                                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#1a56db", fontWeight: 600, fontSize: "0.875rem", textDecoration: "none" }}>
                                <MapPin size={15} /> Open in Google Maps →
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
        @media (max-width: 768px) {
          .contact-page-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </div>
    );
}
