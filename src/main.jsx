import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const experience = [
  { company: 'Invesco Ltd.', role: 'Software Engineer Intern', dates: 'Jun 2026 — Aug 2026', place: 'Houston, TX', details: ['Terraform and AWS automation · 5,000+ users · 2 days faster'] },
  { company: 'Longhorn Developers', role: 'Software Developer Fellow', dates: 'Sep 2025 — Present', place: 'Austin, TX', details: ['React degree-planning extension · 50,000+ users'] },
  { company: 'CodeSprout', role: 'Software Engineer Intern', dates: 'May 2025 — Sep 2025', place: 'Austin, TX', details: ['Dockerized code execution · 80% positive teacher feedback'] },
];

const projects = [
  { title: 'Aquarius\nBaskets', accent: 'rose', href: 'https://aquariusbaskets.app', cta: 'Open live build', github: 'https://github.com/Pranay-Katari/aquariusETF', details: ['2–25 asset backtester · 3-fold validation · LangGraph copilot'] },
  { title: 'Real-Time BTC\nEvent Engine', accent: 'blue', github: 'https://github.com/Pranay-Katari/BTC-Analysis-Terminal', details: ['1-second updates · 9 assets · 4 sources · 6.6 MB RSS'] },
  { title: 'Palladium\nIntelligence Agent', accent: 'lavender', github: 'https://github.com/Pranay-Katari/PalladiumAgent', details: ['Multi-task LSTM · 60-day OHLCV · LangGraph agents'] },
  { title: 'Dynamic Memory\nAllocator', accent: 'ice', details: ['C allocator · 16-byte alignment · segregated free lists'] },
  { title: 'Housing\nAI', accent: 'rose', github: 'https://github.com/Pranay-Katari/HousingAI', details: ['Transformer + PyTorch real-estate modeling · context-aware inputs'] },
  { title: 'Centauri\nOnline', accent: 'ice', github: 'https://github.com/Pranay-Katari/CentauriOnline', details: ['Browser IDE · file persistence · MySQL-backed storage'] },
];

function Arrow() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>; }
function MountainMark() { return <svg className="mountain-mark" viewBox="0 0 212 84" aria-hidden="true"><path d="M3 73 48 28l21 20L99 8l42 49 20-17 48 33" /><path d="m78 31 21-23 17 20M126 41l15 16 20-17" /></svg>; }
function useReveal() { useEffect(() => { const nodes = document.querySelectorAll('[data-reveal]'); const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: 0.12 }); nodes.forEach((node) => observer.observe(node)); return () => observer.disconnect(); }, []); }

function App() {
  useReveal();
  return <main>
    <section className="hero" id="top">
      <div className="hero-image" aria-hidden="true" /><div className="aurora aurora-one" aria-hidden="true" /><div className="aurora aurora-two" aria-hidden="true" /><div className="ridgeline ridge-one" aria-hidden="true" /><div className="ridgeline ridge-two" aria-hidden="true" />
      <nav className="nav" aria-label="Primary navigation"><a className="monogram" href="#top" aria-label="Back to top">PK<span>·</span></a><div><a href="#work">Work</a><a href="#projects">Projects</a></div><a className="nav-resume" href="/PranayKatari_Resume.pdf" target="_blank" rel="noreferrer">Resume <Arrow /></a></nav>
      <div className="hero-copy"><p className="location">Austin, Texas · UT Austin Computer Science</p><h1>Engineering<br /><em>at altitude.</em></h1><div className="hero-actions"><a className="button button-light" href="#work">View work <Arrow /></a><a className="quiet-link" href="mailto:pranaykatari001@gmail.com">Email</a></div></div>
      <div className="hero-footer"><span>Available for Summer 2027</span><MountainMark /><span>Scroll to descend</span></div>
    </section>
    <section className="experience-section" id="work"><div className="section-heading" data-reveal><h2>Experience.</h2></div><div className="trail">{experience.map((item, index) => <article className="experience-entry" data-reveal key={item.company}><div className="trail-pin"><span>{String(index + 1).padStart(2, '0')}</span></div><div className="experience-head"><div><p>{item.role}</p><h3>{item.company}</h3></div><div className="experience-date"><time>{item.dates}</time><span>{item.place}</span></div></div><ul>{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></article>)}</div></section>
    <section className="project-section" id="projects"><div className="section-heading project-heading" data-reveal><h2>Projects.</h2></div><div className="project-rail">{projects.map((project) => <article className={`project-panel ${project.accent}`} data-reveal key={project.title}><div className="project-sky" aria-hidden="true"><span /><span /><span /></div>{(project.href || project.github) && <div className="project-panel-head project-actions">{project.href && <a href={project.href} target="_blank" rel="noreferrer">{project.cta} <Arrow /></a>}{project.github && <a href={project.github} target="_blank" rel="noreferrer">GitHub <Arrow /></a>}</div>}<h3>{project.title.split('\n').map((line) => <span key={line}>{line}</span>)}</h3><ul>{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></article>)}</div></section>
    <footer><div><p>Pranay<br /><em>Katari.</em></p><a className="button button-rose" href="mailto:pranaykatari001@gmail.com">Email <Arrow /></a></div><div className="footer-links"><a href="https://github.com/Pranay-Katari" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/pranaykatari" target="_blank" rel="noreferrer">LinkedIn</a><a href="/PranayKatari_Resume.pdf" target="_blank" rel="noreferrer">Resume</a><span>© 2026 Pranay Katari</span></div></footer>
  </main>;
}
createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>);
