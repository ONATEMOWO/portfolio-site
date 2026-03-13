"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { portfolioData } from "@/content/portfolio";

export function SiteNav() {
  const { personal } = portfolioData;
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className="nav-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <nav className="nav glass" aria-label="Primary" data-open={isOpen}>
        <div className="nav-top">
          <Link
            className="brand brand-link"
            href="/"
            aria-label="Go to homepage"
            title="Go to homepage"
            onClick={closeMenu}
          >
            <span className="brand-name">{personal.name}</span>
            <span className="brand-role">{personal.role}</span>
          </Link>
          <div className="nav-top-actions">
            <ThemeToggle />
            <button
              type="button"
              className="nav-menu-toggle"
              onClick={() => setIsOpen((open) => !open)}
              aria-expanded={isOpen}
              aria-controls="primary-nav-panel"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
              <span>{isOpen ? "Close" : "Menu"}</span>
            </button>
          </div>
        </div>

        <div id="primary-nav-panel" className="nav-panel">
          <div className="nav-links">
            <Link className="link" href="/#projects" onClick={closeMenu}>
              Projects
            </Link>
            <Link className="link" href="/#about" onClick={closeMenu}>
              About
            </Link>
            <Link className="link" href="/#contact" onClick={closeMenu}>
              Contact
            </Link>
          </div>
          <div className="nav-actions">
            <a
              className="btn btn-ghost"
              href={personal.resume}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              Resume <ArrowUpRight size={16} />
            </a>
            <a className="btn btn-primary" href={`mailto:${personal.email}`} onClick={closeMenu}>
              <Mail size={16} /> Let&apos;s Talk
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
