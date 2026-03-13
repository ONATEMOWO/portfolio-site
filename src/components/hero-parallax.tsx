"use client";

import type { ReactNode } from "react";

type HeroParallaxProps = {
  children: ReactNode;
};

export function HeroParallax({ children }: HeroParallaxProps) {
  return <div className="hero-grid">{children}</div>;
}
