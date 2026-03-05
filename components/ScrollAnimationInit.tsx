"use client";

import { useEffect } from "react";

/**
 * Initializes Intersection Observer for scroll-based reveal animations.
 * Targets elements with class "scroll-animate" and adds "visible" when in view.
 */
export default function ScrollAnimationInit() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.08, rootMargin: "0px 0px -50px 0px" }
        );

        const elements = document.querySelectorAll(".scroll-animate");
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return null;
}
