"use client";

import { useEffect, useRef } from "react";

type Point = { x: number; y: number };

export function CursorGlow() {
  const raf = useRef<number | null>(null);
  const last = useRef<Point>({ x: 0, y: 0 });
  const reduceMotion = useRef(false);
  const rippleHost = useRef<HTMLDivElement>(null);
  const pointerDown = useRef(false);
  const lastRipple = useRef(0);
  const lastHoverRipple = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const motionMedia = window.matchMedia("(prefers-reduced-motion: reduce)");
    reduceMotion.current = motionMedia.matches;
    const updateMedia = () => {
      reduceMotion.current = motionMedia.matches;
    };

    motionMedia.addEventListener?.("change", updateMedia);

    return () => {
      motionMedia.removeEventListener?.("change", updateMedia);
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    last.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    function update() {
      raf.current = null;
      root.style.setProperty("--cursor-x", `${last.current.x}px`);
      root.style.setProperty("--cursor-y", `${last.current.y}px`);
      root.style.setProperty("--cursor-opacity", "1");
    }

    function spawnRipple(x: number, y: number, variant: "soft" | "strong" | "end") {
      if (!rippleHost.current) return;
      const now = performance.now();
      if (variant === "strong") {
        if (now - lastRipple.current < 90) return;
        lastRipple.current = now;
      } else if (variant === "end") {
        if (now - lastRipple.current < 120) return;
        lastRipple.current = now;
      } else {
        if (now - lastHoverRipple.current < 520) return;
        lastHoverRipple.current = now;
      }
      const ripple = document.createElement("span");
      ripple.className = `cursor-ripple ${variant}`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      rippleHost.current.appendChild(ripple);
      ripple.addEventListener(
        "animationend",
        () => {
          ripple.remove();
        },
        { once: true }
      );
    }

    function onMove(event: PointerEvent) {
      if (reduceMotion.current) return;
      if (event.pointerType === "touch" && !pointerDown.current) return;
      last.current = { x: event.clientX, y: event.clientY };
      if (raf.current === null) {
        raf.current = window.requestAnimationFrame(update);
      }
      if (pointerDown.current) {
        spawnRipple(event.clientX, event.clientY, "strong");
      } else if (event.pointerType !== "touch") {
        spawnRipple(event.clientX, event.clientY, "soft");
      }
    }

    function onDown(event: PointerEvent) {
      if (reduceMotion.current) return;
      if (event.pointerType === "mouse" && event.button !== 0) return;
      pointerDown.current = true;
      document.body.classList.add("ripple-dragging");
      spawnRipple(event.clientX, event.clientY, "strong");
    }

    function onUp() {
      if (pointerDown.current) {
        spawnRipple(last.current.x, last.current.y, "end");
      }
      pointerDown.current = false;
      document.body.classList.remove("ripple-dragging");
    }

    function onLeave() {
      root.style.setProperty("--cursor-opacity", "0");
      pointerDown.current = false;
      document.body.classList.remove("ripple-dragging");
    }

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    window.addEventListener("pointerleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
      window.removeEventListener("pointerleave", onLeave);
      if (raf.current !== null) {
        window.cancelAnimationFrame(raf.current);
      }
      document.body.classList.remove("ripple-dragging");
    };
  }, []);

  return (
    <div className="cursor-effects" aria-hidden="true">
      <div ref={rippleHost} className="cursor-ripples" />
      <div className="cursor-glow" />
    </div>
  );
}
