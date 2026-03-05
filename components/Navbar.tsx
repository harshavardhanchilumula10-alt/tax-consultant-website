"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, FileText, Phone } from "lucide-react";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        // On non-home pages, always show solid nav
        if (!isHome) setIsScrolled(true);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isHome]);

    const solidNav = isScrolled || !isHome;

    return (
        <nav
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                transition: "all 0.3s ease",
                background: solidNav ? "rgba(255,255,255,0.97)" : "transparent",
                boxShadow: solidNav ? "0 1px 20px rgba(0,0,0,0.08)" : "none",
                backdropFilter: solidNav ? "blur(12px)" : "none",
                padding: "0 1.5rem",
            }}
        >
            <div
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: solidNav ? "62px" : "72px",
                    transition: "height 0.3s ease",
                }}
            >
                {/* Logo */}
                <Link
                    href="/"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.625rem",
                        textDecoration: "none",
                    }}
                >
                    <div
                        style={{
                            width: "38px",
                            height: "38px",
                            background: "linear-gradient(135deg, #1a56db, #0ea5e9)",
                            borderRadius: "10px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            boxShadow: "0 2px 8px rgba(26,86,219,0.3)",
                        }}
                    >
                        <FileText size={18} color="white" />
                    </div>
                    <div>
                        <div
                            style={{
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                                fontWeight: 800,
                                fontSize: "1rem",
                                color: solidNav ? "#0f172a" : "white",
                                lineHeight: 1.1,
                                transition: "color 0.3s",
                            }}
                        >
                            Bejjanki Tax
                        </div>
                        <div
                            style={{
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                                fontWeight: 600,
                                fontSize: "0.68rem",
                                color: solidNav ? "#1a56db" : "rgba(255,255,255,0.75)",
                                letterSpacing: "0.02em",
                                transition: "color 0.3s",
                            }}
                        >
                            Consultancy
                        </div>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
                    {NAV_LINKS.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.label}
                                href={link.href}
                                style={{
                                    color: isActive
                                        ? "#1a56db"
                                        : solidNav
                                            ? "#475569"
                                            : "rgba(255,255,255,0.85)",
                                    fontWeight: isActive ? 700 : 500,
                                    textDecoration: "none",
                                    fontSize: "0.92rem",
                                    transition: "color 0.2s ease",
                                    borderBottom: isActive ? "2px solid #1a56db" : "2px solid transparent",
                                    paddingBottom: "2px",
                                }}
                            >
                                {link.label}
                            </Link>
                        );
                    })}

                    <a
                        href={`tel:${BUSINESS.phoneRaw}`}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.375rem",
                            color: solidNav ? "#1a56db" : "rgba(255,255,255,0.9)",
                            fontWeight: 600,
                            fontSize: "0.85rem",
                            textDecoration: "none",
                            transition: "color 0.3s",
                        }}
                    >
                        <Phone size={14} />
                        {BUSINESS.phone}
                    </a>

                    {/* Google Translate Widget Container */}
                    <div id="google_translate_element" style={{ minWidth: "120px" }}></div>

                    <Link
                        href="/contact"
                        className="btn-primary"
                        style={{ padding: "0.55rem 1.4rem", borderRadius: "0.65rem", fontSize: "0.875rem" }}
                    >
                        Book Consultation
                    </Link>
                </div>

                {/* Mobile button */}
                <button
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                    className="mobile-menu-btn"
                    style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: solidNav ? "#0f172a" : "white",
                        display: "none",
                        padding: "0.5rem",
                    }}
                    aria-label="Toggle navigation menu"
                >
                    {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            <div
                style={{
                    display: isMobileOpen ? "block" : "none",
                    background: "white",
                    borderTop: "1px solid #e2e8f0",
                    padding: "1rem 1.5rem 1.5rem",
                }}
            >
                {NAV_LINKS.map((link) => (
                    <Link
                        key={link.label}
                        href={link.href}
                        onClick={() => setIsMobileOpen(false)}
                        style={{
                            display: "block",
                            padding: "0.875rem 0",
                            color: pathname === link.href ? "#1a56db" : "#0f172a",
                            fontWeight: pathname === link.href ? 700 : 500,
                            textDecoration: "none",
                            borderBottom: "1px solid #f1f5f9",
                            fontSize: "0.95rem",
                        }}
                    >
                        {link.label}
                    </Link>
                ))}
                <div style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    <a
                        href={`tel:${BUSINESS.phoneRaw}`}
                        style={{
                            display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
                            padding: "0.75rem", borderRadius: "0.75rem", border: "1.5px solid #1a56db",
                            color: "#1a56db", fontWeight: 700, textDecoration: "none", fontSize: "0.95rem",
                        }}
                    >
                        <Phone size={16} /> {BUSINESS.phone}
                    </a>

                    {/* Google Translate Widget Container (Mobile) */}
                    <div id="google_translate_element_mobile" style={{ margin: "0.25rem auto" }}></div>
                    <Link
                        href="/contact"
                        className="btn-primary"
                        onClick={() => setIsMobileOpen(false)}
                        style={{ justifyContent: "center", textAlign: "center" }}
                    >
                        Book Consultation
                    </Link>
                </div>
            </div>

            <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>

            {/* Global style overrides for the Google Translate widget to make it look cleaner */}
            <style>{`
                .goog-te-gadget { font-family: 'Plus Jakarta Sans', sans-serif !important; color: transparent !important; }
                .goog-te-gadget .goog-te-combo { margin: 0 !important; padding: 0.35rem 0.5rem; border-radius: 0.5rem; border: 1px solid #e2e8f0; font-size: 0.85rem; color: #0f172a; outline: none; background: white; cursor: pointer; }
                .goog-te-gadget span { display: none !important; } /* Hide powered by google */
                .goog-logo-link { display: none !important; }
                .goog-te-banner-frame { display: none !important; }
                body { top: 0 !important; }
            `}</style>
        </nav>
    );
}
