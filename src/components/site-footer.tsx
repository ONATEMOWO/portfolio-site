import { Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "@/content/portfolio";

export function SiteFooter() {
  const { personal } = portfolioData;

  return (
    <footer className="footer">
      <div className="footer-links">
        <a className="footer-link" href={`mailto:${personal.email}`}>
          <Mail size={15} /> Email
        </a>
        <a className="footer-link" href={personal.github} target="_blank" rel="noreferrer">
          <Github size={15} /> GitHub
        </a>
        <a className="footer-link" href={personal.linkedin} target="_blank" rel="noreferrer">
          <Linkedin size={15} /> LinkedIn
        </a>
      </div>
      <span>
        © {new Date().getFullYear()} {personal.name}. Built with Next.js
      </span>
    </footer>
  );
}
