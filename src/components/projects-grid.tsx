"use client";

import type { CSSProperties, PointerEvent } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, ExternalLink } from "lucide-react";
import { useMemo, useState } from "react";

type CaseStudy = {
  context: string;
  challenge: string;
  process: string;
  solution: string;
  outcome: string;
};

type Project = {
  slug: string;
  title: string;
  summary: string;
  tech: string[];
  link: string;
  caseStudy: CaseStudy;
};

type ProjectsGridProps = {
  projects: Project[];
};

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [activeSkill, setActiveSkill] = useState<string>("All");
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  function handleProjectPointerMove(event: PointerEvent<HTMLElement>) {
    if (event.pointerType !== "mouse") return;
    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    card.style.setProperty("--spotlight-x", `${x}px`);
    card.style.setProperty("--spotlight-y", `${y}px`);
  }

  function resetProjectPointer(event: PointerEvent<HTMLElement>) {
    const card = event.currentTarget;
    card.style.setProperty("--spotlight-x", "50%");
    card.style.setProperty("--spotlight-y", "50%");
  }

  const skills = useMemo(() => {
    const all = projects.flatMap((project) => project.tech);
    return Array.from(new Set(all)).sort();
  }, [projects]);

  const showFilters = skills.length > 1;

  const filtered = useMemo(() => {
    if (activeSkill === "All") return projects;
    return projects.filter((project) => project.tech.includes(activeSkill));
  }, [activeSkill, projects]);

  return (
    <div className="projects-wrap">
      {showFilters && (
        <div className="filter-bar" role="tablist" aria-label="Filter projects by skill">
          <button
            type="button"
            className={`filter-chip ${activeSkill === "All" ? "active" : ""}`}
            onClick={() => setActiveSkill("All")}
            aria-pressed={activeSkill === "All"}
          >
            All
          </button>
          {skills.map((skill) => (
            <button
              key={skill}
              type="button"
              className={`filter-chip ${activeSkill === skill ? "active" : ""}`}
              onClick={() => setActiveSkill(skill)}
              aria-pressed={activeSkill === skill}
            >
              {skill}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-2" style={{ marginTop: 24 }}>
        {filtered.map((project, index) => (
          <article
            key={project.slug}
            className="project-card reveal"
            style={{ "--delay": `${160 + index * 80}ms` } as CSSProperties}
            onPointerMove={handleProjectPointerMove}
            onPointerLeave={resetProjectPointer}
          >
            <div className="project-preview">
              <div className="project-preview-bar" />
              <div className="project-preview-lines" />
              <div className="project-preview-pulse" />
            </div>
            <div className="card-head">
              <div>
                <p className="meta">Project</p>
                <h3 className="card-title">{project.title}</h3>
                <p className="section-note measure">{project.summary}</p>
              </div>
              <a href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>
                <ExternalLink size={18} />
              </a>
            </div>
            <div className="pill-list">
              {project.tech.map((tech) => (
                <span key={tech} className="pill">
                  {tech}
                </span>
              ))}
            </div>
            <div className="case-detail">
              <button
                type="button"
                className="case-toggle"
                data-open={openSlug === project.slug}
                aria-expanded={openSlug === project.slug}
                aria-controls={`case-${project.slug}`}
                onClick={() =>
                  setOpenSlug((current) => (current === project.slug ? null : project.slug))
                }
              >
                Case study snapshot <ChevronDown size={16} />
              </button>
              {openSlug === project.slug && (
                <div id={`case-${project.slug}`} className="case-lines">
                  <div>
                    <p className="meta">Context</p>
                    <p className="section-note">{project.caseStudy.context}</p>
                  </div>
                  <div>
                    <p className="meta">Challenge</p>
                    <p className="section-note">{project.caseStudy.challenge}</p>
                  </div>
                  <div>
                    <p className="meta">Solution</p>
                    <p className="section-note">{project.caseStudy.solution}</p>
                  </div>
                  <div>
                    <p className="meta">Outcome</p>
                    <p className="section-note">{project.caseStudy.outcome}</p>
                  </div>
                </div>
              )}
            </div>
            <Link className="text-link" href={`/projects#${project.slug}`}>
              View full case study <ArrowUpRight size={14} />
            </Link>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="section-note" style={{ marginTop: 24 }}>
          No projects tagged with that skill yet. Try another filter.
        </p>
      )}
    </div>
  );
}
