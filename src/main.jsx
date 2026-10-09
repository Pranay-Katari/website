import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import './recruiter.css';

const experience = [
  {
    role: 'Software Engineer Intern', company: 'Invesco Ltd.', dates: 'Jun 2026 — Aug 2026',
    bullets: [
      'Automated governed AWS EC2 Gateway provisioning with Terraform and Bitbucket Pipelines, enabling dashboard access for 5,000+ EMEA users.',
      'Built a Python AWS Lambda integration using Secrets Manager, gateway APIs, and Snowflake for secure dynamic stored-procedure execution.',
      'Benchmarked SQL, Python DataFrame, Snowpark, and OpenFlow workflows to compare production reporting tradeoffs.',
    ],
  },
  {
    role: 'Software Developer', company: 'Longhorn Developers', dates: 'Sep 2025 — Present',
    bullets: [
      'Built React features for Degree Audit Plus, a UT degree-planning platform serving 50,000+ users.',
      'Extended a WXT/Vite Chrome extension with TypeScript, Bun, Tailwind CSS, browser storage, and IndexedDB.',
      'Turned Figma designs into reusable UI components with product partners.',
    ],
  },
  {
    role: 'Software Engineer', company: 'CodeSprout', dates: 'May 2025 — Sep 2025',
    bullets: [
      'Integrated Piston API with Dockerized sandboxes for secure user-submitted code execution.',
      'Designed indexed PostgreSQL schemas to improve frequently accessed query performance.',
      'Built AI-powered student features that earned 80% positive teacher feedback in beta.',
    ],
  },
];

const projects = [
  { name: 'Aquarius Baskets', href: 'https://aquariusbaskets.app', meta: 'Next.js · FastAPI · PostgreSQL · LangGraph', text: 'A live investment-research platform for building, backtesting, and revisiting portfolio theses. The research engine evaluates 500 candidate portfolios with constrained allocation bounds and three-fold expanding walk-forward validation, while an AI copilot helps turn analysis into a durable thesis.' },
  { name: 'Real-Time BTC Prediction Terminal', meta: 'C++20 · Python · FastAPI · WebSockets', text: 'A streaming prediction-market terminal for cross-venue pricing, probability, and reversal-risk analysis. It joins four live feeds into a single 1-second analytics surface, pairing a C++20 market-data core with a Python trading CLI and a browser-facing FastAPI service.' },
  { name: 'Palladium Market Intelligence', meta: 'Python · PyTorch · LangGraph · OpenAI API', text: 'A market-intelligence research workflow that turns price data and news into attributed, decision-ready signals. It combines a multi-task LSTM with parallel research agents so that each output can connect quantitative movement, source material, and a usable recommendation.' },
  { name: 'Degree Audit Plus', meta: 'React · TypeScript · Vite · IndexedDB', text: 'A degree-planning platform built with Longhorn Developers for UT Austin’s 50,000+ student community. I shipped React features and browser-extension improvements that use TypeScript, IndexedDB, and client-side storage to make degree requirements easier to navigate.' },
];

function Arrow() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>; }

function App() {
  return <main className="resume-site">
    <div className="page-shell">
      <header className="resume-header" id="top">
        <div><h1>Pranay Katari</h1><p>UT Austin CS junior building data platforms, real-time analytics, and ML systems.</p></div>
        <div className="header-links"><a href="/PranayKatari_Resume.pdf" target="_blank" rel="noreferrer">Resume (PDF)</a><a href="mailto:pranaykatari001@gmail.com">Email</a></div>
      </header>

      <div className="resume-layout">
        <div className="resume-content">
          <section id="experience"><h2>Experience</h2>{experience.map((item) => <article className="resume-entry" key={item.company}><div className="entry-heading"><div><h3>{item.company}</h3><p>{item.role}</p></div><time>{item.dates}</time></div><ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></article>)}</section>

          <section id="projects"><h2>Projects</h2>{projects.map((project, index) => <article className={`resume-entry project-entry ${project.href ? 'live-project' : ''}`} key={project.name}><div className="project-number">0{index + 1}</div><div className="entry-heading"><div><h3>{project.name}</h3><p>{project.meta}</p></div>{project.href && <a className="live-link" href={project.href} target="_blank" rel="noreferrer">Visit live build <Arrow /></a>}</div><p className="entry-copy">{project.text}</p></article>)}</section>

          <section id="skills" className="skills"><h2>Skills</h2><dl><div><dt>Languages</dt><dd>Python, C++, TypeScript, SQL, Java, C</dd></div><div><dt>Frameworks</dt><dd>React, Next.js, FastAPI, PyTorch, LangGraph</dd></div><div><dt>Cloud + tools</dt><dd>AWS, GCP Cloud Run, Snowflake, PostgreSQL, Docker, Terraform, Git</dd></div></dl></section>

          <section id="interests" className="interests"><h2>Interests</h2><p>Astrophotography, Middle Eastern medieval history, and paleontology.</p></section>
        </div>

        <aside className="site-index"><nav aria-label="Page sections"><h2>On this site</h2><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#interests">Interests</a></nav><div><h2>Elsewhere</h2><a href="https://github.com/Pranay-Katari" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/pranaykatari" target="_blank" rel="noreferrer">LinkedIn</a><a href="mailto:pranaykatari001@gmail.com">Email</a></div></aside>
      </div>
      <footer><span>© 2026 Pranay Katari</span><a href="#top">Back to top</a></footer>
    </div>
  </main>;
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>);
