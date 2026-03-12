"use client";

import type { PointerEvent, ReactNode } from "react";
import { useEffect, useRef } from "react";

type HeroParallaxProps = {
  children: ReactNode;
};

export function HeroParallax({ children }: HeroParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useRef(false);
  const lastRipple = useRef(0);
  const isPointerDown = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    reduceMotion.current = media.matches;
    const handleChange = () => {
      reduceMotion.current = media.matches;
      if (media.matches) {
        reset();
      }
    };
    media.addEventListener("change", handleChange);
    return () => {
      media.removeEventListener("change", handleChange);
    };
  }, []);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!ref.current || event.pointerType !== "mouse" || reduceMotion.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    ref.current.style.setProperty("--mx", `${x * 28}px`);
    ref.current.style.setProperty("--my", `${y * 28}px`);
    if (isPointerDown.current) {
      spawnRipple(event.clientX - rect.left, event.clientY - rect.top);
    }
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    if (!ref.current || event.pointerType !== "mouse" || reduceMotion.current) return;
    if (event.button !== 0) return;
    isPointerDown.current = true;
    ref.current.setPointerCapture?.(event.pointerId);
    const rect = ref.current.getBoundingClientRect();
    spawnRipple(event.clientX - rect.left, event.clientY - rect.top);
  }

  function handlePointerUp(event: PointerEvent<HTMLDivElement>) {
    if (!ref.current) return;
    isPointerDown.current = false;
    if (ref.current.hasPointerCapture?.(event.pointerId)) {
      ref.current.releasePointerCapture?.(event.pointerId);
    }
  }

  function reset() {
    if (!ref.current) return;
    ref.current.style.setProperty("--mx", "0px");
    ref.current.style.setProperty("--my", "0px");
    isPointerDown.current = false;
  }

  function spawnRipple(x: number, y: number) {
    const now = performance.now();
    if (!ref.current || now - lastRipple.current < 220) return;
    lastRipple.current = now;
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ref.current.appendChild(ripple);
    ripple.addEventListener(
      "animationend",
      () => {
        ripple.remove();
      },
      { once: true }
    );
  }

  return (
    <div
      ref={ref}
      className="hero-grid parallax"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onPointerLeave={reset}
    >
      {children}
    </div>
  );
}
