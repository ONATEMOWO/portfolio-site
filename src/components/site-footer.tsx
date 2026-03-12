import { Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "@/content/portfolio";

export function SiteFooter() {
  const { personal } = portfolioData;

  return (
    <footer className="footer">
      <div className="footer-actions">
        <a className="btn btn-ghost" href={`mailto:${personal.email}`}>
          <Mail size={16} /> Email
        </a>
        <a className="btn btn-ghost" href={personal.github} target="_blank" rel="noreferrer">
          <Github size={16} /> GitHub
        </a>
        <a className="btn btn-ghost" href={personal.linkedin} target="_blank" rel="noreferrer">
          <Linkedin size={16} /> LinkedIn
        </a>
      </div>
      <span>
        © {new Date().getFullYear()} {personal.name}. Built with Next.js
      </span>
    </footer>
  );
}
