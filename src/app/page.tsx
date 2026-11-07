"use client";

import {
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Cloud,
  Code2,
  Database,
  Github,
  Linkedin,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Moon,
  Radio,
  Server,
  Sun,
  Terminal,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const projects = [
  {
    name: "Smart Portfolio Maker",
    eyebrow: "Developer tooling / current build",
    description:
      "A self-hosted portfolio system that scans topic-tagged GitHub repositories, turns project metadata into drafts, and keeps the public story close to the work.",
    tags: ["Next.js", "GitHub API", "GitHub Actions", "LLM-assisted"],
    href: "https://github.com/mbongeR/smart-portfolio-maker",
    icon: Radio,
    featured: true,
  },
  {
    name: "Spring Boot Production Boilerplate",
    eyebrow: "Backend foundations",
    description:
      "A practical starting point for shipping Java 21 services: layered structure, Flyway migrations, health endpoints, Dockerized Postgres, and dev/prod profiles.",
    tags: ["Java 21", "Spring Boot 3", "Flyway", "Docker"],
    href: "https://github.com/mbongeR/java-backend-template",
    icon: Server,
  },
  {
    name: "Live Crypto Market Tracker",
    eyebrow: "Data pipelines / reliability",
    description:
      "A Prefect-orchestrated Python pipeline for live market data, ratio analysis, scheduling, and failure alerts that make silent pipeline failures harder to miss.",
    tags: ["Python", "Prefect", "Scheduling", "Failure hooks"],
    href: "https://github.com/mbongeR/crypto-prefect-pipeline",
    icon: Cloud,
  },
];

const principles = [
  ["01", "Make the boundary obvious", "Clear API contracts, small responsibilities, and predictable failure modes beat clever abstractions."],
  ["02", "Ship the operational path", "A service is not finished at the controller. Health checks, migrations, containers, and deployment belong in the design."],
  ["03", "Leave proof behind", "The best portfolio is not a list of tools. It is a trail of decisions, trade-offs, and working systems."],
];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const light = savedTheme ? savedTheme === "light" : prefersLight;
    setIsLight(light);
    document.documentElement.dataset.theme = light ? "light" : "dark";
  }, []);

  const toggleTheme = () => {
    const nextIsLight = !isLight;
    setIsLight(nextIsLight);
    document.documentElement.dataset.theme = nextIsLight ? "light" : "dark";
    window.localStorage.setItem("portfolio-theme", nextIsLight ? "light" : "dark");
  };

  return (
    <main>
      <nav className="nav-shell">
        <a href="#" className="brand" aria-label="Mbonge Redeem home">
          <span className="brand-mark">&gt;_</span>
          <span>mbonge.redeem</span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#approach" onClick={() => setMenuOpen(false)}>Approach</a>
          <a href="#stack" onClick={() => setMenuOpen(false)}>Stack</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="nav-cta">Let&apos;s talk <ArrowUpRight size={14} /></a>
        </div>
      </nav>

      <section className="hero page-width">
        <div className="hero-copy">
          <div className="status"><span className="status-dot" /> Open to backend &amp; platform opportunities</div>
          <p className="kicker">Backend engineer / builder</p>
          <h1>I build the systems<br /><em>behind the product.</em></h1>
          <p className="hero-lede">
            I&apos;m Mbonge Redeem, a Zimbabwe-based engineer focused on Java, Spring Boot,
            reliable APIs, and the delivery paths that turn backend code into a working service.
          </p>
          <div className="hero-actions">
            <a href="#work" className="button button-primary">See selected work <ArrowUpRight size={16} /></a>
            <a href="https://github.com/mbongeR" target="_blank" rel="noreferrer" className="button button-quiet"><Github size={16} /> GitHub profile</a>
            <a href="https://www.linkedin.com/in/mbonge-redeem-b834b0268/" target="_blank" rel="noreferrer" className="button button-quiet"><Linkedin size={16} /> LinkedIn</a>
          </div>
        </div>
        <div className="terminal-card" aria-label="Current focus">
          <div className="terminal-bar"><span /><span /><span /><b>focus.log</b></div>
          <div className="terminal-content">
            <p><span className="prompt">$</span> cat current-focus.txt</p>
            <p className="terminal-muted">// building systems that are easy to run</p>
            <p className="terminal-value">backend foundations</p>
            <p className="terminal-value">deployment confidence</p>
            <p className="terminal-value">data pipeline reliability</p>
            <p className="terminal-muted terminal-spacer">// based in Bulawayo, Zimbabwe</p>
            <p><span className="prompt">$</span> <span className="cursor" /></p>
          </div>
        </div>
      </section>

      <div className="proof-strip">
        <div><strong>22</strong><span>total repositories</span></div>
        <div><strong>14</strong><span>private repositories</span></div>
        <div><strong>8</strong><span>public repositories</span></div>
        <div><strong>Java</strong><span>primary backend craft</span></div>
        <div><strong>GitOps</strong><span>delivery mindset</span></div>
        <div><strong>NUST</strong><span>informatics &amp; analytics</span></div>
      </div>

      <section id="work" className="section page-width">
        <div className="section-heading">
          <div><p className="kicker">Selected work</p><h2>Small systems.<br /><span>Serious intent.</span></h2></div>
          <p>These are not demo-project descriptions. They are the engineering problems I keep returning to: structure, automation, and resilience.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article key={project.name} className={`project-card ${project.featured ? "project-featured" : ""}`}>
                <div className="project-top"><span className="project-icon"><Icon size={20} /></span><a href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} on GitHub`}><ArrowUpRight size={18} /></a></div>
                <p className="project-eyebrow">{project.eyebrow}</p>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>
            );
          })}
        </div>
        <a href="https://github.com/mbongeR?tab=repositories" target="_blank" rel="noreferrer" className="text-link">Explore all repositories <ArrowUpRight size={15} /></a>
      </section>

      <section id="experience" className="section experience-section page-width">
        <div className="section-heading"><div><p className="kicker">Experience</p><h2>Recent work,<br /><span>real systems.</span></h2></div><p>Two internships gave me experience across fintech infrastructure and agentic AI— from Java services and deployment pipelines to streaming multi-agent backends.</p></div>
        <div className="experience-list">
          <article className="experience-item">
            <div className="experience-date">May 2026 — Oct 2026<br /><span>6 months · Remote</span></div>
            <div className="experience-content"><p className="project-eyebrow">Backend Developer Intern</p><h3>RWA Inc.</h3><p className="company">RWA ecosystem</p><ul><li><CheckCircle2 size={15} />Engineered the core multi-agent backend engine for Project ENTER using FastAPI, LangGraph, and CrewAI.</li><li><CheckCircle2 size={15} />Built real-time Server-Sent Events (SSE) streaming for agent workflows.</li><li><CheckCircle2 size={15} />Implemented secure state checkpointing, isolated cloud sandbox file assembly, and API rate-limiting rules.</li><li><CheckCircle2 size={15} />Deployed the backend engine on AWS.</li></ul><div className="tag-row"><span>FastAPI</span><span>LangGraph</span><span>CrewAI</span><span>AWS</span><span>SSE</span></div></div>
          </article>
          <article className="experience-item">
            <div className="experience-date">Aug 2025 — Jun 2026<br /><span>11 months · Remote</span></div>
            <div className="experience-content"><p className="project-eyebrow">Backend Developer Intern</p><h3>KaribuTech AI</h3><p className="company">Generative AI · Kubernetes · Fintech</p><ul><li><CheckCircle2 size={15} />Designed, developed, and maintained highly available REST APIs using Spring Boot and Java.</li><li><CheckCircle2 size={15} />Supported core fintech platform functionality and multiple concurrent client integrations.</li><li><CheckCircle2 size={15} />Worked with PostgreSQL schemas, Docker, GitLab CI, ArgoCD, and Kubernetes delivery workflows.</li><li><CheckCircle2 size={15} />Explored ETL pipeline concepts with Apache Airflow and Prefect.</li></ul><div className="tag-row"><span>Java</span><span>Spring Boot</span><span>PostgreSQL</span><span>Kubernetes</span><span>ArgoCD</span></div></div>
          </article>
        </div>
      </section>

      <section id="approach" className="section section-dark">
        <div className="page-width">
          <div className="section-heading"><div><p className="kicker">How I work</p><h2>Less theatre.<br /><span>More signal.</span></h2></div><p>My edge is not knowing every tool. It is making the important parts of a system visible, testable, and maintainable.</p></div>
          <div className="principle-grid">
            {principles.map(([number, title, copy]) => <div className="principle" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></div>)}
          </div>
        </div>
      </section>

      <section id="stack" className="section page-width">
        <div className="section-heading"><div><p className="kicker">Working toolkit</p><h2>Tools follow<br /><span>the problem.</span></h2></div><p>A focused stack for building, persisting, testing, and shipping backend systems without unnecessary ceremony.</p></div>
        <div className="stack-grid">
          <div className="stack-group"><Database size={19} /><h3>Backend &amp; data</h3><p>Java · Spring Boot · REST APIs<br />PostgreSQL · MS SQL Server · Flyway</p></div>
          <div className="stack-group"><Layers3 size={19} /><h3>Delivery &amp; runtime</h3><p>Docker · GitLab CI · ArgoCD<br />Azure · Hetzner · Linux</p></div>
          <div className="stack-group"><Code2 size={19} /><h3>AI &amp; data systems</h3><p>Python · FastAPI · LangGraph · CrewAI<br />Prefect · Airflow · TensorFlow</p></div>
        </div>
      </section>

      <section className="section education-section page-width">
        <div className="education-note"><p className="kicker">Currently learning</p><h2>Informatics &amp;<br />Analytics at NUST.</h2><p>BSc Honours, in progress. Formal study sharpens the reasoning behind the systems I build; the repositories show how I apply it.</p></div>
        <div className="experience-note"><p className="kicker">Experience</p><h3>Backend Engineering Intern</h3><p className="company">KaribuTech-AI · Fintech</p><ul><li><CheckCircle2 size={15} />Spring Boot APIs and service maintenance</li><li><CheckCircle2 size={15} />GitLab CI and ArgoCD deployment workflows</li><li><CheckCircle2 size={15} />Postman contract and regression testing</li></ul></div>
      </section>

      <section id="contact" className="contact-section">
        <div className="page-width contact-inner"><div><p className="kicker">Have a real problem?</p><h2>Let&apos;s build something<br /><em>worth maintaining.</em></h2></div><div><p className="contact-copy">If you are building a backend product, improving a delivery pipeline, or looking for an engineer who cares about the operational details, I&apos;d like to hear about it.</p><div className="contact-actions"><a href="mailto:redeemmbonge792@gmail.com" className="button button-primary">Email me <Mail size={16} /></a><a href="https://www.linkedin.com/in/mbonge-redeem-b834b0268/" target="_blank" rel="noreferrer" className="button button-contact-secondary"><Linkedin size={16} /> Connect on LinkedIn</a></div></div></div>
      </section>

      <footer className="footer page-width"><p>© 2026 Mbonge Redeem</p><div><a href="https://github.com/mbongeR" target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a><a href="https://www.linkedin.com/in/mbonge-redeem-b834b0268/" target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn</a><a href="mailto:redeemmbonge792@gmail.com"><Mail size={15} /> Email</a><span><MapPin size={14} /> Bulawayo, Zimbabwe</span></div></footer>
      <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${isLight ? "dark" : "light"} mode`} title={`Switch to ${isLight ? "dark" : "light"} mode`}>
        {isLight ? <Moon size={17} /> : <Sun size={17} />}
      </button>
    </main>
  );
}
