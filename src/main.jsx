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
  {
    role: 'Summer Research Intern (Logic Systems / Cybersecurity)', company: 'University of Texas at Dallas', dates: 'Jun 2022 — Aug 2023',
    bullets: [
      'Created a simplified NumPy-based linear regression model for anomaly detection on Linux kernel telemetry.',
      'Parsed Kaggle datasets in Jupyter Notebook using Pandas and Matplotlib for data analysis and predictions.',
    ],
  },
  {
    role: 'Technology Intern', company: 'Plano ISD', dates: 'Jun 2023 — Aug 2023',
    bullets: [
      'Repaired district hardware, including keyboards and screens, and triaged tickets at the technical service desk.',
      'Diagnosed, imaged, and deployed 300+ machines across campuses.',
    ],
  },
];

const projects = [
  { name: 'Aquarius Baskets', href: 'https://aquariusbaskets.app', meta: 'FastAPI · Next.js · PostgreSQL · LangGraph', bullets: ['Built a FastAPI + NumPy/Pandas backtester for 2–25 asset portfolios, modeling fractional shares, rebalancing, costs, turnover, drawdown, and benchmark performance.', 'Optimized whole-percent weights across 500 Dirichlet/multinomial portfolios with 1–50% limits; used three-fold expanding walk-forward validation to measure unseen returns, drawdowns, and overfitting risk.', 'Engineered an AI portfolio copilot with LangGraph and pgvector-backed vector storage, persisting user chats and retrieving relevant context for constrained basket proposals.', 'Shipped a Next.js + FastAPI platform with Supabase OAuth, Redis caching, Dockerized Cloud Run, and per-user basket persistence.'] },
  { name: 'Real-Time BTC Prediction Market Terminal', meta: 'C++20 · Python · FastAPI · Next.js · WebSockets', bullets: ['Engineered a persistent C++20 streaming analytics engine delivering one-second velocity, acceleration, rolling volatility, spread, target-margin, and adaptive-regime metrics for Bitcoin 15-minute prediction markets.', 'Built a real-time Python, FastAPI, WebSocket, and Next.js pipeline unifying four live market-data feeds into an interactive dashboard for cross-venue pricing, probability, and reversal-risk analysis.', 'Developed and open-sourced a tested Python trading CLI supporting YES/NO limit orders, IOC execution, position monitoring, and cancellations with preview-first production safeguards.'] },
  { name: 'Palladium Market Intelligence Agent', meta: 'Python · PyTorch · LangGraph · OpenAI API · Pandas', bullets: ['Built a Python/PyTorch pipeline analyzing palladium returns, volume, rolling volatility, and volatility regimes through z-scores and a trained market-regime classifier.', 'Developed a multi-task LSTM on normalized 60-day OHLCV sequences to predict price direction, five-day realized volatility, and candle-anomaly probability with chronological validation and early stopping.', 'Designed a parallel LangGraph multi-agent workflow where supply, demand, and macro agents analyze market news before a judge agent produces attributed research using the OpenAI API.'] },
  { name: 'CentauriOnline', bullets: ['Built a low-latency learning platform with a REST API and edge-delivered interface, deployed across Render and Vercel.', 'Implemented Docker-sandboxed Python execution to isolate runtimes and prevent dependency and memory cross-contamination.', 'Optimized PostgreSQL queries with composite indexing, reducing frequent lookup latency from about 220ms to 60–90ms, and integrated OAuth2 + RBAC for secure role-based access.'] },
  { name: 'S&P 500 Analyzer', bullets: ['Collected and cleaned data for 50+ S&P 500 companies—about 1.2M price records—into a structured dataset with historical pricing and sector information.', 'Created rolling performance and volatility features, then applied a Gradient Boosting model to identify factors influencing price-movement trends.', 'Built a dashboard for ticker insights, sector context, and factor breakdowns, with batched API response latency of about 600–900ms.'] },
  { name: 'Dynamic Memory Allocator', bullets: ['Implemented a segregated free-list allocator with 16B alignment, block split/coalesce, and constant-time insert/remove operations to improve allocation throughput under mixed workloads.', 'Reduced heap-growth overhead by tuning sbrk request sizes and minimizing fragmentation, improving average per-operation allocation latency while maintaining high heap-utilization efficiency.'] },
  { name: 'Housing AI', bullets: ['Fine-tuned a DistilGPT-2 language model on real-estate datasets.', 'Designed a RAG pipeline to build a property-tax-rates assistant prototype.'] },
  { name: 'VisionLLM', bullets: ['Built a multimodal screenshot-to-code agent that uses a vision-language model to extract a schema-validated UI component tree, design tokens, typography, and layout context from reference screenshots.', 'Engineered a closed-loop generation pipeline that produces structured Next.js file edits, builds the app, captures browser renders, and persists versioned artifacts.', 'Developed an automated visual-validation harness using Playwright screenshots and Pillow pixel-diff heatmaps to score render fidelity and guide corrective iterations.', 'Designed a fault-tolerant orchestration layer with bounded retries, convergence checks, failure stops, and best-iteration selection.'] },
];

function Arrow() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>; }

function App() {
  return <main className="resume-site">
    <div className="page-shell">
      <header className="resume-header" id="top">
        <div><h1>Pranay Katari</h1><p>UT Austin CS junior focused on production software: full-stack applications, reliable backend services, cloud infrastructure, and developer-facing tools. I like taking technically complex ideas from implementation to a useful product.</p></div>
        <div className="header-links"><a href="/PranayKatari_Resume.pdf" target="_blank" rel="noreferrer">Resume (PDF)</a><a href="mailto:pranaykatari001@gmail.com">Email</a></div>
      </header>

      <div className="resume-layout">
        <div className="resume-content">
          <section id="experience"><h2>Experience</h2>{experience.map((item) => <article className="resume-entry" key={item.company}><div className="entry-heading"><div><h3>{item.company}</h3><p>{item.role}</p></div><time>{item.dates}</time></div><ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></article>)}</section>

          <section id="projects"><h2>Projects</h2>{projects.map((project) => <article className={`resume-entry project-entry ${project.href ? 'live-project' : ''}`} key={project.name}><div className="entry-heading"><div><h3>{project.name}</h3>{project.meta && <p>{project.meta}</p>}</div>{project.href && <a className="live-link" href={project.href} target="_blank" rel="noreferrer">{project.linkLabel || 'Visit live build'} <Arrow /></a>}</div><ul>{project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></article>)}</section>

          <section id="skills" className="skills"><h2>Skills</h2><dl><div><dt>Languages</dt><dd>Python, C++, TypeScript, SQL, Java, C</dd></div><div><dt>Frameworks</dt><dd>React, Next.js, FastAPI, PyTorch, LangGraph</dd></div><div><dt>Cloud + tools</dt><dd>AWS, GCP Cloud Run, Snowflake, PostgreSQL, Docker, Terraform, Git</dd></div></dl></section>

          <section id="interests" className="interests"><h2>Interests</h2><p>Astrophotography, Middle Eastern medieval history, and paleontology.</p></section>

          <section id="writing" className="writing"><h2>My writing</h2><a href="/reasons-for-expansion-in-the-early-caliphate.pdf" target="_blank" rel="noreferrer"><span>Reasons for Expansion in the Early Caliphate</span><small>Read essay (PDF)</small><Arrow /></a></section>
        </div>

        <aside className="site-index"><nav aria-label="Page sections"><h2>On this site</h2><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#interests">Interests</a><a href="#writing">My writing</a></nav><div><h2>Elsewhere</h2><a href="https://github.com/Pranay-Katari" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/pranaykatari" target="_blank" rel="noreferrer">LinkedIn</a><a href="mailto:pranaykatari001@gmail.com">Email</a></div></aside>
      </div>
      <footer><span>© 2026 Pranay Katari</span><a href="#top">Back to top</a></footer>
    </div>
  </main>;
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>);
