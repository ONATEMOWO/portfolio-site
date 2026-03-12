import type { CSSProperties } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { HeroParallax } from "@/components/hero-parallax";
import { ProjectsGrid } from "@/components/projects-grid";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { portfolioData } from "@/content/portfolio";

export default function Home() {
  const {
    personal,
    projects,
    skills,
    focusAreas,
    summaryPoints,
    coursework,
    approach,
    principles,
    timeline,
    now,
    experience,
    leadership,
    metrics,
  } = portfolioData;

  const skillTicker = skills.flatMap((group) => group.items);
  const featuredProject = projects[0];
  const remainingProjects = projects.slice(1);
  const initials = personal.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 3)
    .map((part) => part[0]?.toUpperCase())
    .join("");

  return (
    <main id="main-content" className="shell">
      <SiteNav />

      <HeroParallax>
        <div className="hero-copy reveal" style={{ "--delay": "120ms" } as CSSProperties}>
          <span className="kicker">
            <Sparkles size={14} /> Full-stack engineering intern + ML research
          </span>
          <h1 className="hero-title">
            Building <span className="accent-text">secure</span>, data-driven systems and real-time products.
          </h1>
          <p className="hero-sub measure">{personal.bio}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={`mailto:${personal.email}`}>
              <Mail size={16} /> {personal.email}
            </a>
            <a className="btn btn-ghost" href={personal.resume} target="_blank" rel="noreferrer">
              Resume <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="hero-links">
            <a className="mini-link" href={personal.github} target="_blank" rel="noreferrer">
              <Github size={16} /> GitHub
            </a>
            <a className="mini-link" href={personal.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="monogram-card reveal" style={{ "--delay": "160ms" } as CSSProperties}>
            <p className="meta">Signature mark</p>
            <div className="monogram">{initials}</div>
            <p className="section-note">{personal.role}</p>
          </div>
          <div className="glass-card reveal" style={{ "--delay": "220ms" } as CSSProperties}>
            <p className="meta">At a glance</p>
            <ul className="list">
              {summaryPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div
            className="glass-card accent reveal"
            style={{ "--delay": "280ms" } as CSSProperties}
          >
            <p className="meta">Focus areas</p>
            <div className="chip-list">
              {focusAreas.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="glass-card now-card reveal" style={{ "--delay": "340ms" } as CSSProperties}>
            <p className="meta">Right now</p>
            <div className="now-list">
              {now.map((item) => (
                <div key={item.label} className="now-item">
                  <span className="now-label">{item.label}</span>
                  <span className="now-value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </HeroParallax>

      <section className="section">
        <div className="metrics-grid">
          {metrics.map((item, index) => (
            <div
              key={item.label}
              className="metric-card reveal"
              style={{ "--delay": `${120 + index * 80}ms` } as CSSProperties}
            >
              <div className="metric-value">{item.value}</div>
              <div className="metric-label">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {featuredProject && (
        <section className="section spotlight">
          <div className="section-head reveal" style={{ "--delay": "120ms" } as CSSProperties}>
            <h2 className="section-title">Featured Case Study</h2>
            <span className="section-note">A deeper look at one project with impact.</span>
          </div>
          <div className="spotlight-card reveal" style={{ "--delay": "180ms" } as CSSProperties}>
            <div className="spotlight-header">
              <div>
                <p className="meta">Project spotlight</p>
                <h3 className="spotlight-title">{featuredProject.title}</h3>
                <p className="section-note measure">{featuredProject.summary}</p>
              </div>
              <a
                className="btn btn-ghost"
                href={featuredProject.link}
                target="_blank"
                rel="noreferrer"
              >
                View repo <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="spotlight-panels">
              <div>
                <p className="meta">Context</p>
                <p className="section-note">{featuredProject.caseStudy.context}</p>
              </div>
              <div>
                <p className="meta">Challenge</p>
                <p className="section-note">{featuredProject.caseStudy.challenge}</p>
              </div>
              <div>
                <p className="meta">Solution</p>
                <p className="section-note">{featuredProject.caseStudy.solution}</p>
              </div>
              <div>
                <p className="meta">Outcome</p>
                <p className="section-note">{featuredProject.caseStudy.outcome}</p>
              </div>
              <div>
                <p className="meta">Stack</p>
                <div className="pill-list">
                  {featuredProject.tech.map((tech) => (
                    <span key={tech} className="pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section id="about" className="section">
        <div className="section-head reveal" style={{ "--delay": "120ms" } as CSSProperties}>
          <h2 className="section-title">Signature</h2>
          <span className="section-note">Journey + principles that shape my work.</span>
        </div>
        <div className="signature-grid" style={{ marginTop: 24 }}>
          <div className="timeline-card signature-sticky reveal" style={{ "--delay": "160ms" } as CSSProperties}>
            <p className="meta">Journey</p>
            <div className="timeline">
              {timeline.map((item) => (
                <div key={item.title} className="timeline-item">
                  <div className="timeline-dot" />
                  <div>
                    <p className="card-title">{item.title}</p>
                    <p className="section-note">{item.subtitle}</p>
                    <p className="section-note">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 18 }}>
              <p className="meta">Coursework</p>
              <div className="pill-list">
                {coursework.map((item) => (
                  <span key={item} className="pill">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="grid" style={{ gap: 16 }}>
            {principles.map((item, index) => (
              <div
                key={item.title}
                className="principle-card reveal"
                style={{ "--delay": `${200 + index * 80}ms` } as CSSProperties}
              >
                <p className="meta">Principle {index + 1}</p>
                <h3 className="card-title">{item.title}</h3>
                <p className="section-note">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head reveal" style={{ "--delay": "120ms" } as CSSProperties}>
          <h2 className="section-title">Experience Highlights</h2>
          <span className="section-note">Impact-driven work across product engineering and ML research.</span>
        </div>
        <div className="grid grid-2" style={{ marginTop: 24 }}>
          {experience.map((item, index) => (
            <div
              key={item.title}
              className="card reveal"
              style={{ "--delay": `${160 + index * 80}ms` } as CSSProperties}
            >
              <p className="meta">{item.time}</p>
              <h3 className="card-title">{item.title}</h3>
              <p className="section-note">{item.org}</p>
              <ul className="list">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head reveal" style={{ "--delay": "120ms" } as CSSProperties}>
          <h2 className="section-title">Community</h2>
          <span className="section-note">Teams and communities I learn with.</span>
        </div>
        <div className="grid grid-2" style={{ marginTop: 24 }}>
          {leadership.map((item, index) => (
            <div
              key={item.title}
              className="card reveal"
              style={{ "--delay": `${160 + index * 80}ms` } as CSSProperties}
            >
              <p className="meta">{item.time}</p>
              <h3 className="card-title">{item.org}</h3>
              <p className="section-note">{item.title}</p>
              <ul className="list">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section-head reveal" style={{ "--delay": "120ms" } as CSSProperties}>
          <h2 className="section-title">More Projects</h2>
          <span className="section-note">Explore by skill and open quick case snapshots.</span>
        </div>
        <ProjectsGrid projects={remainingProjects.length ? remainingProjects : projects} />
      </section>

      <section className="section">
        <div className="section-head reveal" style={{ "--delay": "120ms" } as CSSProperties}>
          <h2 className="section-title">How I Work</h2>
          <span className="section-note">A concise look at my delivery process.</span>
        </div>
        <div className="process-grid" style={{ marginTop: 24 }}>
          {approach.map((item, index) => (
            <div
              key={item.title}
              className="step-card reveal"
              style={{ "--delay": `${160 + index * 80}ms` } as CSSProperties}
            >
              <div className="step-badge">{index + 1}</div>
              <h3 className="card-title">{item.title}</h3>
              <p className="section-note">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <div className="section-head reveal" style={{ "--delay": "120ms" } as CSSProperties}>
          <h2 className="section-title">Toolbox</h2>
          <span className="section-note">Languages, frameworks, and platforms I build with.</span>
        </div>
        <div className="marquee" aria-hidden="true" style={{ marginTop: 18 }}>
          <div className="marquee-track">
            {[...skillTicker, ...skillTicker].map((item, index) => (
              <span key={`${item}-${index}`} className="marquee-item">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-2" style={{ marginTop: 24 }}>
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className="card reveal"
              style={{ "--delay": `${160 + index * 80}ms` } as CSSProperties}
            >
              <h3 className="card-title">{skill.category}</h3>
              <div className="pill-list">
                {skill.items.map((item) => (
                  <span key={item} className="pill">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section reveal" style={{ "--delay": "200ms" } as CSSProperties}>
        <div className="cta">
          <div>
            <h2 className="cta-title">Let&apos;s build something meaningful.</h2>
            <p className="cta-text">
              Open to collaborating on ambitious products, research, and developer tooling.
            </p>
          </div>
          <div className="cta-actions">
            <a className="btn btn-primary" href={`mailto:${personal.email}`}>
              <Mail size={16} /> {personal.email}
            </a>
            <a className="btn btn-ghost" href={personal.github} target="_blank" rel="noreferrer">
              <Github size={16} /> GitHub
            </a>
            <a className="btn btn-ghost" href={personal.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
