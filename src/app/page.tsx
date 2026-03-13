import type { CSSProperties } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { CopyEmailButton } from "@/components/copy-email-button";
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
    education,
    recognition,
    experience,
    leadership,
    metrics,
  } = portfolioData;

  const skillTicker = skills.flatMap((group) => group.items);
  const featuredProject = projects[0];
  const remainingProjects = projects.slice(1);
  const heroProofPoints = summaryPoints.slice(0, 2);
  const educationLine = education[0];
  const initials = personal.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 3)
    .map((part) => part[0]?.toUpperCase())
    .join("");
  const capabilityCards = [
    {
      eyebrow: "Product engineering",
      title: "Comfortable shipping in large codebases",
      text: "Shipped developer-facing GraphQL and tenant improvements inside the Firebase Admin Node.js SDK with emulator-backed validation.",
      bullets: ["Google - Firebase Data Connect", "30+ tests added", "Boilerplate reduced by ~25%"],
    },
    {
      eyebrow: "Applied ML",
      title: "Research work tied to measurable outcomes",
      text: "Built and tuned a CNN + GRU model for smart-grid DDoS detection with a focus on both accuracy and response speed.",
      bullets: ["100k+ endpoints analyzed", "25% stronger performance", "40% faster response time"],
    },
    {
      eyebrow: "End-to-end delivery",
      title: "Moves between frontend polish and backend systems",
      text: "Builds mobile and web products that connect strong UX with payments, auth, maps, and data pipelines.",
      bullets: ["React Native + Next.js", "Stripe, Plaid, GraphQL", "Human-centered performance"],
    },
  ];
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personal.name,
    jobTitle: personal.role,
    description: personal.bio,
    email: personal.email,
    url: personal.linkedin,
    sameAs: [personal.github, personal.linkedin],
    address: {
      "@type": "PostalAddress",
      addressLocality: personal.location,
    },
    alumniOf: education.map((item) => ({
      "@type": "CollegeOrUniversity",
      name: item.school,
    })),
  };

  return (
    <main id="main-content" className="shell">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <SiteNav />

      <HeroParallax>
        <div className="hero-copy reveal" style={{ "--delay": "120ms" } as CSSProperties}>
          <span className="kicker">
            <Sparkles size={14} /> Full-stack engineering intern + ML research
          </span>
          <div className="hero-meta">
            <span>{personal.location}</span>
            {educationLine && <span>{educationLine.school} · {educationLine.program}</span>}
          </div>
          <h1 className="hero-title">
            Building <span className="accent-text">secure</span>, data-driven systems and real-time products.
          </h1>
          <p className="hero-sub measure">{personal.bio}</p>
          <ul className="hero-proof-list" aria-label="Quick proof points">
            {heroProofPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="credential-row" aria-label="Recognition">
            {recognition.map((item) => (
              <span key={item} className="credential-pill">
                {item}
              </span>
            ))}
          </div>
          <p className="availability-note">{personal.availability}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={`mailto:${personal.email}`}>
              <Mail size={16} /> {personal.email}
            </a>
            <CopyEmailButton email={personal.email} />
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
            <a className="mini-link" href="#projects">
              <ArrowUpRight size={16} /> Selected work
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="monogram-card snapshot-card reveal" style={{ "--delay": "160ms" } as CSSProperties}>
            <div className="snapshot-head">
              <div className="signature-mark">
                <div className="monogram">{initials}</div>
              </div>
              <div>
                <p className="meta">Career snapshot</p>
                <p className="card-title">{personal.role}</p>
                {educationLine && (
                  <p className="section-note">
                    {educationLine.school} · {educationLine.program}
                  </p>
                )}
              </div>
            </div>
            <div className="snapshot-facts">
              <div className="fact-block">
                <span className="fact-label">Based in</span>
                <span className="fact-value">{personal.location}</span>
              </div>
              <div className="fact-block">
                <span className="fact-label">Primary lane</span>
                <span className="fact-value">{focusAreas[0]}</span>
              </div>
            </div>
          </div>
          <div
            className="glass-card accent reveal"
            style={{ "--delay": "220ms" } as CSSProperties}
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
        </div>
      </HeroParallax>

      <section className="section">
        <div className="section-head reveal" style={{ "--delay": "120ms" } as CSSProperties}>
          <h2 className="section-title">Proof in Numbers</h2>
          <span className="section-note">Signals that matter when someone scans the site quickly.</span>
        </div>
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

      <section className="section">
        <div className="section-head reveal" style={{ "--delay": "120ms" } as CSSProperties}>
          <h2 className="section-title">What Teams Can Count On</h2>
          <span className="section-note">The strongest portfolio signal is consistent, explainable impact.</span>
        </div>
        <div className="grid grid-3" style={{ marginTop: 24 }}>
          {capabilityCards.map((item, index) => (
            <div
              key={item.title}
              className="audience-card reveal"
              style={{ "--delay": `${160 + index * 80}ms` } as CSSProperties}
            >
              <p className="meta">{item.eyebrow}</p>
              <h3 className="card-title">{item.title}</h3>
              <p className="section-note">{item.text}</p>
              <ul className="audience-list">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
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
                <p className="meta">Role</p>
                <p className="section-note">{featuredProject.role}</p>
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
              <div>
                <p className="meta">Evidence</p>
                <ul className="list compact-list">
                  {featuredProject.impact.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      <section id="about" className="section">
        <div className="section-head reveal" style={{ "--delay": "120ms" } as CSSProperties}>
          <h2 className="section-title">Journey & Principles</h2>
          <span className="section-note">The path and operating principles behind how I deliver work.</span>
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
          <h2 className="section-title">Leadership & Community</h2>
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
          <h2 className="section-title">How I Work With Teams</h2>
          <span className="section-note">From framing the problem to validating the result.</span>
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
              Open to ambitious product engineering, developer tooling, and applied ML collaboration.
            </p>
            <p className="availability-note">{personal.availability}</p>
          </div>
          <div className="cta-actions">
            <a className="btn btn-primary" href={`mailto:${personal.email}`}>
              <Mail size={16} /> {personal.email}
            </a>
            <CopyEmailButton email={personal.email} />
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
