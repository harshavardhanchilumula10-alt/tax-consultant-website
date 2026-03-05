"use client";

import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function HomeCTA() {
    // Encoded Telugu WhatsApp Message
    const whatsappMsg = encodeURIComponent("నమస్కారం, నాకు ఆదాయపు పన్ను సేవల గురించి సమాచారం కావాలి.");

    return (
        <section style={{ padding: "5rem 1.5rem", background: "linear-gradient(135deg, #1e3a8a, #0f172a)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", opacity: 0.1, backgroundImage: "radial-gradient(#60a5fa 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

            <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
                <h2 style={{ fontSize: "clamp(1.75rem, 4.5vw, 3rem)", fontWeight: 800, color: "white", marginBottom: "0.75rem", lineHeight: 1.2 }}>
                    మీ పన్ను సమస్యలకు సరైన <span style={{ color: "#60a5fa" }}>పరిష్కారం కావాలా?</span>
                </h2>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "clamp(1.05rem, 2vw, 1.25rem)", marginBottom: "2.5rem", fontWeight: 500 }}>
                    ఈరోజే సంప్రదించండి — నిపుణుల పన్ను సలహా పొందండి
                </p>

                <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" as const }}>
                    <a
                        href={`tel:${BUSINESS.phoneRaw}`}
                        style={{
                            background: "linear-gradient(135deg, #2563eb, #1d4ed8)", color: "white", padding: "1rem 2.5rem", borderRadius: "9999px", fontWeight: 700, fontSize: "1.05rem", textDecoration: "none", boxShadow: "0 4px 15px rgba(37,99,235,0.4)", display: "flex", alignItems: "center", gap: "0.625rem", transition: "all 0.3s ease"
                        }}
                        onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(-3px)"; el.style.boxShadow = "0 8px 25px rgba(37,99,235,0.5)"; }}
                        onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(0)"; el.style.boxShadow = "0 4px 15px rgba(37,99,235,0.4)"; }}
                    >
                        <Phone size={18} /> కాల్ చేయండి (Call Now)
                    </a>
                    <a
                        href={`https://wa.me/${BUSINESS.whatsapp}?text=${whatsappMsg}`}
                        target="_blank" rel="noopener noreferrer"
                        style={{
                            background: "#25D366", color: "white", padding: "1rem 2.5rem", borderRadius: "9999px", fontWeight: 700, fontSize: "1.05rem", textDecoration: "none", boxShadow: "0 4px 15px rgba(37,211,102,0.4)", display: "flex", alignItems: "center", gap: "0.625rem", transition: "all 0.3s ease"
                        }}
                        onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(-3px)"; el.style.boxShadow = "0 8px 25px rgba(37,211,102,0.5)"; }}
                        onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(0)"; el.style.boxShadow = "0 4px 15px rgba(37,211,102,0.4)"; }}
                    >
                        <MessageCircle size={18} /> సంప్రదించండి (WhatsApp)
                    </a>
                </div>

                <p style={{ marginTop: "1.5rem", color: "rgba(255,255,255,0.6)", fontSize: "0.85rem" }}>
                    వ్యాపారాలు, ఉద్యోగులు మరియు వ్యక్తిగత పన్ను చెల్లింపుదారులకు సేవలు.
                </p>
            </div>
        </section>
    );
}
