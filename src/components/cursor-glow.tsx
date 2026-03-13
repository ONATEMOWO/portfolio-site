"use client";

import { useEffect, useRef, useState } from "react";

type Point = { x: number; y: number };

export function CursorGlow() {
  const raf = useRef<number | null>(null);
  const last = useRef<Point>({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const motionMedia = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointerMedia = window.matchMedia("(hover: hover) and (pointer: fine)");
    const updateMedia = () => {
      setEnabled(pointerMedia.matches && !motionMedia.matches);
    };

    updateMedia();
    motionMedia.addEventListener?.("change", updateMedia);
    pointerMedia.addEventListener?.("change", updateMedia);

    return () => {
      motionMedia.removeEventListener?.("change", updateMedia);
      pointerMedia.removeEventListener?.("change", updateMedia);
    };
  }, []);

  useEffect(() => {
    if (!enabled) {
      document.documentElement.style.setProperty("--cursor-opacity", "0");
      return undefined;
    }

    const root = document.documentElement;
    last.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    function update() {
      raf.current = null;
      root.style.setProperty("--cursor-x", `${last.current.x}px`);
      root.style.setProperty("--cursor-y", `${last.current.y}px`);
      root.style.setProperty("--cursor-opacity", "1");
    }

    function onMove(event: PointerEvent) {
      last.current = { x: event.clientX, y: event.clientY };
      if (raf.current === null) {
        raf.current = window.requestAnimationFrame(update);
      }
    }

    function onLeave() {
      root.style.setProperty("--cursor-opacity", "0");
    }

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      if (raf.current !== null) {
        window.cancelAnimationFrame(raf.current);
      }
      root.style.setProperty("--cursor-opacity", "0");
    };
  }, [enabled]);

  if (!enabled) return null;

  return <div className="cursor-glow" aria-hidden="true" />;
}
