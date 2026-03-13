"use client";

import { useEffect } from "react";

export function MotionEffects() {
  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const motionMedia = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionMedia.matches) {
      document.querySelectorAll<HTMLElement>(".reveal").forEach((node) => {
        node.dataset.reveal = "visible";
      });
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const target = entry.target as HTMLElement;
          target.dataset.reveal = "visible";
          observer.unobserve(target);
        }
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.14,
      }
    );

    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    nodes.forEach((node) => observer.observe(node));

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
