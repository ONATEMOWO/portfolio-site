import type { Metadata } from "next";
import Script from "next/script";
import { CursorGlow } from "@/components/cursor-glow";
import "./globals.css";

export const metadata: Metadata = {
  title: "Foluso B. Onatemowo | Full-Stack Engineer & ML Researcher",
  description:
    "Portfolio of Foluso B. Onatemowo — full-stack engineer and ML researcher building secure, data-driven systems and real-time products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeInitScript = `(() => {
    try {
      const stored = window.localStorage.getItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const theme = stored === "light" || stored === "dark" ? stored : prefersDark ? "dark" : "light";
      document.documentElement.classList.toggle("dark", theme === "dark");
    } catch (_) {}
  })();`;

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
