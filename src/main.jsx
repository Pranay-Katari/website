import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const experience = [
  { company: 'Longhorn Developers', role: 'Software Developer Fellow', type: 'Part-time', dates: 'Sep 2025 — Present · 1 yr 2 mos', place: 'Austin, Texas · Hybrid', mark: 'LD', tone: 'longhorn', description: 'Built React and TypeScript features for Degree Audit Plus, a Chrome extension serving 50,000+ users. Expanded the degree-audit parser from three to six formats and prototyped local course search with IndexedDB.' },
  { company: 'Invesco Ltd.', role: 'Software Engineer Intern', type: 'Internship', dates: 'Jun 2026 — Aug 2026 · 3 mos', place: 'Houston, Texas · On-site', mark: 'Invesco', tone: 'invesco', description: 'Automated AWS EC2 gateway provisioning with Terraform and Bitbucket Pipelines, supporting data access for 4,800+ employees across EMEA. Integrated Secrets Manager and Python Lambda code into a ServiceNow-to-Snowflake workflow, reducing request processing from 1–2 days to under 5 minutes.' },
  { company: 'CodeSprout', role: 'Software Developer', type: 'Internship', dates: 'May 2025 — Sep 2025 · 5 mos', place: 'Austin, Texas', mark: 'CS', tone: 'codesprout', description: 'Integrated the Piston API with Dockerized sandboxes to execute user-submitted code in isolated environments. Designed PostgreSQL schemas and indexes for frequent application queries and developed AI-assisted student features that received 80% positive teacher feedback in beta.' },
];

const projects = [
  { title: 'Aquarius Baskets', accent: 'rose', href: 'https://aquariusbaskets.app', cta: 'Open live build', github: 'https://github.com/Pranay-Katari/aquariusETF', description: 'Built a FastAPI and Pandas portfolio backtester for 2–25 assets, modeling rebalancing, transaction costs, and drawdown against a benchmark. Added three-fold walk-forward validation and a LangGraph copilot, then deployed the Next.js app on Google Cloud Run.' },
  { title: 'Real-Time BTC Analytics Terminal', accent: 'blue', github: 'https://github.com/Pranay-Katari/BTC-Analysis-Terminal', description: 'Built a real-time market analytics stack with a stateful C++20 ingestion gateway, asynchronous FastAPI backend, and Next.js dashboard updating nine assets every second. Unified four WebSocket and REST feeds into one event stream while keeping the backend under 60 MB of memory.' },
  { title: 'Palladium Market Intelligence Agent', accent: 'lavender', github: 'https://github.com/Pranay-Katari/PalladiumAgent', description: 'Built a Python and PyTorch pipeline to analyze palladium returns, volume, rolling volatility, and market regimes. Developed a multi-task LSTM and parallel LangGraph agents that turn market news into attributed research.' },
  { title: 'Dynamic Memory Allocator', accent: 'ice', description: 'Implemented a C memory allocator over sbrk with segregated free lists, 16-byte alignment, block splitting, and coalescing. Designed constant-time free-list insertion and removal to support efficient allocation under mixed workloads.' },
];

function Arrow() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>; }
function MountainMark() { return <svg className="mountain-mark" viewBox="0 0 212 84" aria-hidden="true"><path d="M3 73 48 28l21 20L99 8l42 49 20-17 48 33" /><path d="m78 31 21-23 17 20M126 41l15 16 20-17" /></svg>; }
function CompanyMark({ item }) { return <div className={`company-mark ${item.tone}`} aria-label={`${item.company} logo`}>{item.mark}</div>; }
function useReveal() { useEffect(() => { const nodes = document.querySelectorAll('[data-reveal]'); const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: 0.12 }); nodes.forEach((node) => observer.observe(node)); return () => observer.disconnect(); }, []); }

function App() {
  useReveal();
  return <main>
    <section className="hero" id="top">
      <div className="hero-image" aria-hidden="true" /><div className="aurora aurora-one" aria-hidden="true" /><div className="aurora aurora-two" aria-hidden="true" /><div className="ridgeline ridge-one" aria-hidden="true" /><div className="ridgeline ridge-two" aria-hidden="true" />
      <nav className="nav" aria-label="Primary navigation"><a className="monogram" href="#top" aria-label="Back to top">PK<span>·</span></a><div><a href="#work">Work</a><a href="#projects">Projects</a></div><a className="nav-resume" href="/PranayKatari_Resume_SWE.pdf" target="_blank" rel="noreferrer">Resume <Arrow /></a></nav>
      <div className="hero-copy"><p className="location">Austin, Texas · UT Austin Computer Science</p><h1>Engineering<br /><em>at altitude.</em></h1><div className="hero-actions"><a className="button button-light" href="#work">View work <Arrow /></a><a className="quiet-link" href="mailto:pranaykatari001@gmail.com">Email</a></div></div>
      <div className="hero-footer"><span>Available for Summer 2027</span><MountainMark /><span>Scroll to descend</span></div>
    </section>
    <section className="experience-section" id="work"><div className="section-heading" data-reveal><h2>Experience.</h2></div><div className="experience-list">{experience.map((item) => <article className="experience-entry" data-reveal key={item.company}><CompanyMark item={item} /><div className="experience-copy"><h3>{item.role}</h3><p className="company-line">{item.company} <span>·</span> {item.type}</p><p className="experience-meta">{item.dates}</p><p className="experience-meta">{item.place}</p><p className="experience-description">{item.description}</p></div></article>)}</div></section>
    <section className="project-section" id="projects"><div className="section-heading project-heading" data-reveal><h2>Projects.</h2></div><div className="project-rail">{projects.map((project) => <article className={`project-panel ${project.accent}`} data-reveal key={project.title}><div className="project-sky" aria-hidden="true"><span /><span /><span /></div>{(project.href || project.github) && <div className="project-panel-head project-actions">{project.href && <a href={project.href} target="_blank" rel="noreferrer">{project.cta} <Arrow /></a>}{project.github && <a href={project.github} target="_blank" rel="noreferrer">GitHub <Arrow /></a>}</div>}<h3>{project.title}</h3><p className="project-description">{project.description}</p></article>)}</div></section>
    <footer><div><p>Pranay<br /><em>Katari.</em></p><a className="button button-rose" href="mailto:pranaykatari001@gmail.com">Email <Arrow /></a></div><div className="footer-links"><a href="https://github.com/Pranay-Katari" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/pranaykatari" target="_blank" rel="noreferrer">LinkedIn</a><a href="/PranayKatari_Resume_SWE.pdf" target="_blank" rel="noreferrer">Resume</a><span>© 2026 Pranay Katari</span></div></footer>
  </main>;
}
createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>);
