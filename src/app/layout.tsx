import type { Metadata } from "next";
import Script from "next/script";
import { CursorGlow } from "@/components/cursor-glow";
import { MotionEffects } from "@/components/motion-effects";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  title: {
    default: "Foluso B. Onatemowo | Full-Stack Engineer & ML Researcher",
    template: "%s | Foluso B. Onatemowo",
  },
  description:
    "Portfolio of Foluso B. Onatemowo — full-stack engineer and ML researcher building secure, data-driven systems and real-time products.",
  applicationName: "Foluso Portfolio",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Foluso B. Onatemowo | Full-Stack Engineer & ML Researcher",
    description:
      "Portfolio of Foluso B. Onatemowo — full-stack engineer and ML researcher building secure, data-driven systems and real-time products.",
    siteName: "Foluso Portfolio",
    type: "website",
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
        alt: "Foluso B. Onatemowo portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Foluso B. Onatemowo | Full-Stack Engineer & ML Researcher",
    description:
      "Full-stack engineer and ML researcher building secure, data-driven systems and real-time products.",
    images: ["/og"],
  },
  icons: {
    icon: "/icon",
    shortcut: "/icon",
    apple: "/apple-icon",
  },
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
        <MotionEffects />
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
