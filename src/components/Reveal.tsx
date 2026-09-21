"use client";

import { useEffect } from "react";

/** Fades in [data-reveal] elements as they scroll into view. Content stays visible without JS. */
export function Reveal() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    // Anything already on screen is shown immediately, so enabling the effect never hides visible content.
    for (const el of targets) {
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("is-visible");
      else io.observe(el);
    }
    document.documentElement.classList.add("js");

    return () => io.disconnect();
  }, []);

  return null;
}
