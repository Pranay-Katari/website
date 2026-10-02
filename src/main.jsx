import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const projects = [
  { title: 'Aquarius Baskets', note: 'Portfolio research platform', stack: 'FastAPI · Next.js · PostgreSQL · Redis · LangGraph', href: 'https://github.com/Pranay-Katari/aquariusETF' },
  { title: 'Real-Time BTC Analytics', note: 'Streaming market intelligence', stack: 'C++ · Python · FastAPI · WebSockets', href: 'https://github.com/Pranay-Katari/BTC-Analysis' },
  { title: 'Palladium Agent', note: 'Multi-agent market research', stack: 'Python · PyTorch · LangGraph · OpenAI API', href: 'https://github.com/Pranay-Katari/PalladiumAgent' },
  { title: 'HousingAI', note: 'Context-aware real estate modeling', stack: 'PyTorch · Transformers · JavaScript', href: 'https://github.com/Pranay-Katari/HousingAI' },
  { title: 'Company Analyzer', note: 'News-driven market forecasting', stack: 'JavaScript · Data analysis · Forecasting', href: 'https://github.com/Pranay-Katari/CompanyAnalyzer' },
  { title: 'Centauri Online', note: 'Browser-based development environment', stack: 'JavaScript · MySQL · Full stack', href: 'https://github.com/Pranay-Katari/CentauriOnline' },
];

function Glyph({ type }) {
  return type === 'arrow' ? <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg> : <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v14M6 11l6 6 6-6" /></svg>;
}

function FloatingLights() {
  return <div className="floating-lights" aria-hidden="true">
    <span className="light light-violet" /><span className="light light-rose" /><span className="light light-amber" />
    <span className="light-ray ray-one" /><span className="light-ray ray-two" /><span className="light-ray ray-three" />
    <p>Signal, systems, story.</p>
  </div>;
}

function App() {
  return <main>
    <section className="hero" id="top">
      <nav><a className="wordmark" href="#top">PK<span>.</span></a><div><a href="https://github.com/Pranay-Katari" target="_blank" rel="noreferrer">GitHub</a><a href="#resume">Resume</a></div></nav>
      <div className="hero-copy">
        <p className="availability"><span /> Building at the intersection of systems & intelligence</p>
        <h1>Pranay<br /><em>Katari.</em></h1>
        <p className="intro">CS @ UT Austin creating cloud-native data products, intelligent agents, and responsive software that makes complex signals useful.</p>
        <div className="hero-actions"><a className="primary" href="#work">Selected work <Glyph type="arrow" /></a><a className="text-link" href="#resume">Read resume <Glyph type="down" /></a></div>
      </div>
      <FloatingLights />
      <p className="scroll-note">Scroll to explore <span /></p>
    </section>

    <section className="manifesto" id="work"><p>Full-stack engineer with a bias for the hard parts: <strong>data pipelines, real-time systems, cloud infrastructure, and AI that earns its place in the product.</strong></p></section>

    <section className="work-section">
      <div className="section-head"><h2>Selected <em>builds</em></h2><p>Current work across financial systems, streaming analytics, and applied AI.</p></div>
      <div className="project-list">{projects.map((project, index) => <a className="project" href={project.href} key={project.title} target="_blank" rel="noreferrer"><span className="project-no">0{index + 1}</span><div><h3>{project.title}</h3><p>{project.note}</p></div><span className="project-stack">{project.stack}</span><span className="project-arrow"><Glyph type="arrow" /></span></a>)}</div>
    </section>

    <section className="resume" id="resume">
      <div className="resume-intro"><p className="resume-mark">Resume / 2026</p><h2>In the <em>details.</em></h2><p>From enterprise data platforms to product engineering and research systems.</p><a className="primary light" href="mailto:pranaykatari001@gmail.com">Get in touch <Glyph type="arrow" /></a></div>
      <div className="resume-sheet">
        <div className="resume-top"><div><span>PRANAY KATARI</span><small>Computer Science · The University of Texas at Austin</small></div><span>Expected May 2028</span></div>
        <ResumeEntry role="Data Platforms Technology Intern" company="Invesco Ltd. · Enterprise Data & Analytics" dates="Jun 2026 — Aug 2026" text="Automated AWS infrastructure, connected secure Power BI gateways, and built Python/AWS Lambda integrations and Snowflake ETL pipelines." />
        <ResumeEntry role="Software Developer" company="Longhorn Developers" dates="Sep 2025 — Present" text="Engineered React features and TypeScript Chrome extension experiences for a 50,000+ user base." />
        <ResumeEntry role="Software Engineer" company="CodeSprout" dates="May 2025 — Sep 2025" text="Built secure code execution workflows, performant PostgreSQL schemas, and AI-powered student features." />
        <div className="skills"><span>Core stack</span><p>Python · TypeScript · React · Next.js · FastAPI · AWS · Snowflake · PostgreSQL · Docker · LangGraph · PyTorch</p></div>
      </div>
    </section>

    <footer><p>Open to ambitious problems.</p><a href="mailto:pranaykatari001@gmail.com">pranaykatari001@gmail.com <Glyph type="arrow" /></a><span>© 2026 Pranay Katari</span></footer>
  </main>;
}

function ResumeEntry({ role, company, dates, text }) { return <article className="resume-entry"><div><h3>{role}</h3><p>{company}</p></div><time>{dates}</time><p className="entry-text">{text}</p></article>; }

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>);
