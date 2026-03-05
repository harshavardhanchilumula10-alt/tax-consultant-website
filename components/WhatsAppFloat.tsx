"use client";

import { MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function WhatsAppFloat() {
    return (
        <a
            href={`https://wa.me/${BUSINESS.whatsapp}?text=%E0%B0%A8%E0%B0%AE%E0%B0%B8%E0%B1%8D%E0%B0%95%E0%B0%BE%E0%B0%B0%E0%B0%82%2C%20%E0%B0%A8%E0%B0%BE%E0%B0%95%E0%B1%81%20%E0%B0%86%E0%B0%A6%E0%B0%BE%E0%B0%AF%E0%B0%AA%E0%B1%81%20%E0%B0%AA%E0%B0%A8%E0%B1%8D%E0%B0%A8%E0%B1%81%20%E0%B0%B8%E0%B1%87%E0%B0%B5%E0%B0%B2%20%E0%B0%97%E0%B1%81%E0%B0%B0%E0%B0%BF%E0%B0%82%E0%B0%9A%E0%B0%BF%20%E0%B0%B8%E0%B0%AE%E0%B0%BE%E0%B0%9A%E0%B0%BE%E0%B0%B0%E0%B0%82%20%E0%B0%95%E0%B0%BE%E0%B0%B5%E0%B0%BE%E0%B0%B2%E0%B0%BF.`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            style={{
                position: "fixed",
                bottom: "24px",
                right: "24px",
                zIndex: 999,
                width: "58px",
                height: "58px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #25D366, #128C7E)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 20px rgba(37, 211, 102, 0.5)",
                textDecoration: "none",
                transition: "all 0.3s ease",
                animation: "pulse-ring 2s infinite",
            }}
            onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "scale(1.1)";
                el.style.boxShadow = "0 8px 32px rgba(37, 211, 102, 0.6)";
            }}
            onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "scale(1)";
                el.style.boxShadow = "0 4px 20px rgba(37, 211, 102, 0.5)";
            }}
        >
            <MessageCircle size={26} color="white" fill="white" />
        </a>
    );
}
