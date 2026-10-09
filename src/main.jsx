import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import './recruiter.css';

const projects = [
  { name: 'Aquarius Baskets', description: 'Investment research platform for building, backtesting, and revisiting portfolio theses.', metric: 'Optimized across 500 candidate portfolios', stack: ['Next.js', 'FastAPI', 'PostgreSQL', 'LangGraph'], live: 'https://aquariusbaskets.app', repo: 'https://github.com/Pranay-Katari/aquariusETF', featured: true },
  { name: 'Real-Time BTC Prediction Terminal', description: 'Streaming market terminal for cross-venue pricing, probability, and reversal-risk analysis.', metric: '1-second analytics from 4 live feeds', stack: ['C++20', 'Python', 'FastAPI', 'WebSockets'], repo: 'https://github.com/Pranay-Katari/BTC-Analysis' },
  { name: 'Palladium Market Intelligence', description: 'ML research agent that turns market data and news into attributed, decision-ready signals.', metric: 'Multi-task LSTM + parallel agent workflow', stack: ['Python', 'PyTorch', 'LangGraph', 'OpenAI API'], repo: 'https://github.com/Pranay-Katari/PalladiumAgent' },
  { name: 'Degree Audit Plus', description: 'Student degree-planning platform built with Longhorn Developers at UT Austin.', metric: 'Built for a 50,000+ user base', stack: ['React', 'TypeScript', 'Vite', 'IndexedDB'], repo: 'https://github.com/Pranay-Katari/Degree-Audit-Plus' },
];

const experiences = [
  { role: 'Software Engineer Intern', company: 'Invesco Ltd.', dates: 'Jun 2026 - Aug 2026', bullets: ['Automated governed AWS EC2 Gateway provisioning with Terraform and Bitbucket Pipelines, enabling dashboard access for 5,000+ EMEA users.', 'Built a Python AWS Lambda integration using Secrets Manager, gateway APIs, and Snowflake for secure dynamic stored-procedure execution.', 'Benchmarked SQL, Python DataFrame, Snowpark, and OpenFlow workflows to compare production reporting tradeoffs.'] },
  { role: 'Software Developer', company: 'Longhorn Developers', dates: 'Sep 2025 - Present', bullets: ['Built React features for Degree Audit Plus, a UT degree-planning platform serving 50,000+ users.', 'Extended a WXT/Vite Chrome extension with TypeScript, Bun, Tailwind CSS, browser storage, and IndexedDB.', 'Turned Figma designs into reusable UI components with product partners.'] },
  { role: 'Software Engineer', company: 'CodeSprout', dates: 'May 2025 - Sep 2025', bullets: ['Integrated Piston API with Dockerized sandboxes for secure user-submitted code execution.', 'Designed indexed PostgreSQL schemas to improve frequently accessed query performance.', 'Built AI-powered student features that earned 80% positive teacher feedback in beta.'] },
];

function Arrow() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>; }
function External() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 5h5v5M19 5l-8 8M19 14v5H5V5h5" /></svg>; }

function App() {
  return <main className="recruiter-site">
    <header className="site-header"><a className="brand" href="#top">Pranay Katari</a><nav><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#contact">Contact</a><a className="resume-nav" href="/PranayKatari_Resume.pdf" target="_blank" rel="noreferrer">Resume (PDF) <External /></a></nav></header>
    <section className="hero-recruiter" id="top"><div className="hero-inner"><p className="location">Austin, Texas</p><h1>Software engineer<br />for systems that <em>matter.</em></h1><p className="hero-summary">UT Austin CS junior building data platforms, real-time analytics, and ML systems. Graduating May 2028 - seeking Summer 2027 software engineering internships.</p><div className="hero-links"><a className="button-primary" href="/PranayKatari_Resume.pdf" target="_blank" rel="noreferrer">Resume <Arrow /></a><a href="https://github.com/Pranay-Katari" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/pranaykatari" target="_blank" rel="noreferrer">LinkedIn</a><a href="mailto:pranaykatari001@gmail.com">Email</a></div></div><aside className="hero-facts"><span>Current focus</span><strong>Data systems<br />+ applied ML</strong><span>Available</span><strong>Summer 2027</strong></aside></section>

    <section className="projects-section" id="projects"><div className="section-intro"><p>Selected projects</p><h2>Built to be<br /><em>used.</em></h2><span>Four projects that demonstrate systems thinking, product judgment, and measurable technical depth.</span></div><div className="project-grid">{projects.map((project) => <article className={`project-card ${project.featured ? 'project-featured' : ''}`} key={project.name}><div className="project-top"><span>{project.featured ? 'Featured project' : 'Project'}</span><div>{project.live && <a href={project.live} target="_blank" rel="noreferrer">Live <External /></a>}<a href={project.repo} target="_blank" rel="noreferrer">Repo <External /></a></div></div><h3>{project.name}</h3><p>{project.description}</p><strong className="metric">{project.metric}</strong><div className="tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div></section>

    <section className="experience-section" id="experience"><div className="section-intro"><p>Experience</p><h2>Engineering<br /><em>in context.</em></h2></div><div className="timeline">{experiences.map((experience) => <article className="experience" key={experience.company}><div className="experience-title"><div><h3>{experience.role}</h3><p>{experience.company}</p></div><time>{experience.dates}</time></div><ul>{experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></article>)}</div></section>

    <section className="skills-section"><div><p>Technical skills</p><h2>Ready for the<br />technical <em>interview.</em></h2></div><dl><div><dt>Languages</dt><dd>Python, C++, TypeScript, SQL, Java, C</dd></div><div><dt>Frameworks</dt><dd>React, Next.js, FastAPI, PyTorch, LangGraph</dd></div><div><dt>Cloud + tools</dt><dd>AWS, GCP Cloud Run, Snowflake, PostgreSQL, Docker, Terraform, Git</dd></div></dl></section>

    <section className="about-section"><p>Outside engineering, I make time for astrophotography, Middle Eastern medieval history, and paleontology. I’m drawn to difficult systems, careful research, and work that turns complexity into something useful.</p></section>
    <footer id="contact"><div><p>Let’s build something<br /><em>useful.</em></p><a className="email" href="mailto:pranaykatari001@gmail.com">pranaykatari001@gmail.com <Arrow /></a></div><div className="footer-links"><a href="https://www.linkedin.com/in/pranaykatari" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/Pranay-Katari" target="_blank" rel="noreferrer">GitHub</a><a href="/PranayKatari_Resume.pdf" target="_blank" rel="noreferrer">Resume (PDF)</a><span>© 2026 Pranay Katari</span></div></footer>
  </main>;
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>);
