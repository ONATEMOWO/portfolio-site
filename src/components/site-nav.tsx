import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { portfolioData } from "@/content/portfolio";

export function SiteNav() {
  const { personal } = portfolioData;

  return (
    <div className="nav-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <nav className="nav glass" aria-label="Primary">
        <Link className="brand brand-link" href="/" aria-label="Go to homepage" title="Go to homepage">
          <span className="brand-name">{personal.name}</span>
          <span className="brand-role">{personal.role}</span>
        </Link>
        <div className="nav-links">
          <Link className="link" href="/#projects">
            Projects
          </Link>
          <Link className="link" href="/#about">
            About
          </Link>
          <Link className="link" href="/#contact">
            Contact
          </Link>
          <a className="btn btn-ghost" href={personal.resume} target="_blank" rel="noreferrer">
            Resume <ArrowUpRight size={16} />
          </a>
          <ThemeToggle />
          <a className="btn btn-primary" href={`mailto:${personal.email}`}>
            <Mail size={16} /> Let&apos;s Talk
          </a>
        </div>
      </nav>
    </div>
  );
}
