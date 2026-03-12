import { ExternalLink } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { portfolioData } from "@/content/portfolio";

export default function ProjectsPage() {
  const { projects } = portfolioData;

  return (
    <main id="main-content" className="shell">
      <SiteNav />

      <section className="page-hero">
        <p className="eyebrow">Projects</p>
        <h1 className="page-title">Selected Engineering Work</h1>
        <p className="page-sub measure">
          Case study summaries with focus areas and technical stack.
        </p>
      </section>

      <section className="section">
        <div className="stack">
          {projects.map((project) => (
            <article key={project.slug} id={project.slug} className="case-card">
              <div className="case-head">
                <div>
                  <p className="meta">Project</p>
                  <h2 className="case-title">{project.title}</h2>
                  <p className="section-note measure">{project.summary}</p>
                </div>
                <a href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>
                  <ExternalLink size={18} />
                </a>
              </div>
              <div className="case-grid">
                <div>
                  <p className="meta">Context</p>
                  <p className="section-note">{project.caseStudy.context}</p>
                </div>
                <div>
                  <p className="meta">Challenge</p>
                  <p className="section-note">{project.caseStudy.challenge}</p>
                </div>
                <div>
                  <p className="meta">Process</p>
                  <p className="section-note">{project.caseStudy.process}</p>
                </div>
                <div>
                  <p className="meta">Solution</p>
                  <p className="section-note">{project.caseStudy.solution}</p>
                </div>
                <div>
                  <p className="meta">Outcome</p>
                  <p className="section-note">{project.caseStudy.outcome}</p>
                </div>
                <div>
                  <p className="meta">Stack</p>
                  <div className="pill-list">
                    {project.tech.map((tech) => (
                      <span key={tech} className="pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
