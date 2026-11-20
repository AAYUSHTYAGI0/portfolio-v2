import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ArrowDown,
  Github,
  Linkedin,
  Instagram,
  Menu,
  X,
  Copy,
  Check,
  Pause,
  Play,
} from "lucide-react";
import { motion, MotionConfig, useReducedMotion } from "framer-motion";
import { profile, projects, type Project } from "./content";
import HeroWorkspace from "./components/HeroWorkspace";
import ContactForm from "./components/ContactForm";
import Certifications from "./components/Certifications";
import CampusBiteDemo from "./components/CampusBiteDemo";
const filters = ["All projects", "AI & ML", "Full-stack"];
function ProjectVisual({ type }: { type: Project["visual"] }) {
  return (
    <div
      className={`project-visual visual-${type}`}
    >
      {(type === "memory" || type === "rescue") && (
        <span className="preview-label">
          INTERFACE STUDY / {type.toUpperCase()}
        </span>
      )}
      {type === "hotel" ? (
        <div className="hotel-gallery">
          <img src="/projects/aurel-main.webp" alt="Pool featured on Aurel Hotels" loading="lazy" decoding="async" />
          <img src="/projects/aurel-room.webp" alt="Classic guest room featured on Aurel Hotels" loading="lazy" decoding="async" />
        </div>
      ) : type === "food" ? (
        <CampusBiteDemo />
      ) : type === "memory" ? (
        <div className="memory-ui">
          <div className="mock-top">
            <span>✳ MEMORY AI</span>
            <span>YOUR SECOND BRAIN</span>
          </div>
          <h4>
            Remember everything.
            <br />
            <em>Find what matters.</em>
          </h4>
          <div className="memory-search">
            ⌕ <span>Ask your memories anything…</span>
            <span>↗</span>
          </div>
          <div className="memory-files">
            <span>
              ▤ Lecture notes <small>DOCUMENT</small>
            </span>
            <span>
              ▧ A moment worth keeping <small>SCREENSHOT</small>
            </span>
            <span>
              ✧ The next big idea <small>NOTE</small>
            </span>
          </div>
          <div className="memory-source">
            <span>✳</span> Answers grounded in your memories.
            <b>WITH SOURCE CITATIONS ↗</b>
          </div>
        </div>
      ) : (
        <div className="rescue-ui">
          <svg
            className="rescue-map"
            viewBox="0 0 500 350"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M-20 70 150 100 270 55 530 90M-20 190 150 165 310 190 520 140M-20 280 145 250 300 290 510 250M80 -20 110 95 80 210 130 370M225 -20 245 140 205 240 250 370M370 -20 340 100 385 230 365 370"
              stroke="#596752"
              strokeWidth="17"
            />
            <path
              d="M-20 70 150 100 270 55 530 90M-20 190 150 165 310 190 520 140M-20 280 145 250 300 290 510 250M80 -20 110 95 80 210 130 370M225 -20 245 140 205 240 250 370M370 -20 340 100 385 230 365 370"
              stroke="#2d3a2d"
              strokeWidth="14"
            />
            <path
              d="M-10 120 Q100 30 150 150T300 250T520 310"
              stroke="#789388"
              strokeWidth="38"
              opacity=".35"
            />
            <circle
              cx="335"
              cy="135"
              r="55"
              fill="#c8754925"
              stroke="#d58a5960"
              strokeDasharray="4 5"
            />
            <path
              d="M110 245 90 190 150 165 245 180 242 110 270 55 343 65"
              stroke="#d5f76a"
              strokeWidth="5"
              strokeLinejoin="round"
            />
            <circle cx="110" cy="245" r="7" fill="#f0f0e9" />
            <circle cx="343" cy="65" r="9" fill="#d5f76a" />
          </svg>
          <div className="rescue-brand">
            ↗ resqroute <span>EVACUATION PLANNING</span>
          </div>
          <div className="rescue-destination">◎ SHELTER DESTINATION</div>
          <div className="rescue-panel">
            <span>EXPLORE A SAFER WAY</span>
            <h4>
              Every decision.
              <br />A different route.
            </h4>
            <div>
              <i /> HAZARDS <i /> ACCESSIBILITY <i /> ROUTING
            </div>
          </div>
        </div>
      )}
      {(type === "memory" || type === "rescue") && (
        <span className="visual-caption">CONCEPT PREVIEW</span>
      )}
    </div>
  );
}
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All projects");
  const [copied, setCopied] = useState(false);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useReducedMotion();
  const still = paused || !!reducedMotion;
  useEffect(() => {
    const sectionId = window.location.hash.slice(1);
    if (sectionId) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "instant" });
    }
  }, []);
  useEffect(() => {
    if (!copied) return;
    const timeout = window.setTimeout(() => setCopied(false), 2200);
    return () => window.clearTimeout(timeout);
  }, [copied]);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }
  return (
    <MotionConfig reducedMotion="user">
      <div className={`portfolio ${still ? "motion-paused" : ""}`}>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <header className="site-header wrap">
          <a href="#home" className="wordmark" aria-label="Aayush Tyagi home">
            aayush<span>®</span>
          </a>
          <nav
            aria-label="Main navigation"
            className={menuOpen ? "nav-links is-open" : "nav-links"}
          >
            {[
              ["Work", "#projects"],
              ["About", "#about"],
              ["Stack", "#skills"],
              ["Certifications", "#certifications"],
            ].map(([name, href]) => (
              <a key={name} href={href} onClick={() => setMenuOpen(false)}>
                {name}
                <span>↗</span>
              </a>
            ))}
            <a
              className="nav-contact"
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              Let’s talk <ArrowUpRight size={15} />
            </a>
          </nav>
          <button
            className="menu-toggle"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </header>
        <main id="main">
          <section id="home" className="hero wrap">
            <div className="hero-topline">
              <span>
                <i className="status-dot" /> AVAILABLE FOR OPPORTUNITIES
              </span>
              <span>AI / FULL-STACK / CREATIVE DEVELOPMENT</span>
            </div>
            <div className="hero-grid">
              <div className="hero-copy">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <p className="eyebrow">HELLO WORLD. I’M AAYUSH TYAGI.</p>
                  <h1>
                    Ideas into
                    <br />
                    <span>intelligence.</span>
                  </h1>
                  <p className="hero-description">
                    I build intelligent systems and digital experiences that
                    feel a little out of the ordinary.
                  </p>
                  <a className="button button-lime" href="#projects">
                    Explore my work <ArrowUpRight size={19} />
                  </a>
                </motion.div>
                <div className="hero-socials">
                  <a href={profile.github} target="_blank" rel="noreferrer">
                    <Github size={16} /> GitHub <ArrowUpRight size={12} />
                  </a>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer">
                    <Linkedin size={16} /> LinkedIn <ArrowUpRight size={12} />
                  </a>
                  <a
                    href={profile.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                  >
                    <Instagram size={16} />
                  </a>
                  <span>BASED IN INDIA · BUILDING EVERYWHERE</span>
                </div>
              </div>
              <div className="workspace-stage">
                <HeroWorkspace paused={still} />
                <span className="stage-label">
                  A SMALL WINDOW INTO MY WORLD
                </span>
                <div className="stage-bottom">
                  <span>EXPLORE THE IDEAS ↗</span>
                  <button
                    onClick={() => setPaused(!paused)}
                    disabled={!!reducedMotion}
                    aria-label={
                      reducedMotion
                        ? "Reduced motion enabled"
                        : paused
                          ? "Play animation"
                          : "Pause animation"
                    }
                    aria-pressed={paused}
                  >
                    {still ? <Play size={12} /> : <Pause size={12} />}
                    {still ? "STILL" : "MOTION ON"}
                  </button>
                </div>
              </div>
            </div>
            <div className="hero-bottom">
              <span>ENGINEER BY LOGIC. CREATOR BY INSTINCT.</span>
              <a href="#projects">
                SCROLL TO DISCOVER <ArrowDown size={15} />
              </a>
              <span>PORTFOLIO / 2026</span>
            </div>
          </section>
          <div className="discipline-strip">
            <div>
              INTELLIGENT SYSTEMS <span>✳</span> THOUGHTFUL INTERFACES{" "}
              <span>✳</span> EXPERIMENTAL THINKING <span>✳</span> HUMAN
              EXPERIENCES <span>✳</span>
            </div>
          </div>
          <section id="projects" className="work-section wrap">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  <span>01 /</span> SELECTED WORK
                </p>
                <h2>
                  Built with intent.
                  <br />
                  <span>Made to make a difference.</span>
                </h2>
              </div>
              <p>
                A few explorations at the intersection
                <br />
                of useful technology and bold ideas.
              </p>
            </div>
            <div className="work-toolbar">
              <div
                className="filters"
                role="group"
                aria-label="Filter projects"
              >
                {filters.map((f) => (
                  <button
                    key={f}
                    className={f === filter ? "active" : ""}
                    aria-pressed={f === filter}
                    onClick={() => setFilter(f)}
                  >
                    {f}
                  </button>
                ))}
              </div>
              <span>
                {String(
                  projects.filter(
                    (p) => filter === "All projects" || p.category === filter,
                  ).length,
                ).padStart(2, "0")}{" "}
                PROJECTS
              </span>
            </div>
            <div className="projects-grid">
              {projects
                .filter(
                  (p) => filter === "All projects" || p.category === filter,
                )
                .map((p) => (
                  <motion.article
                    key={p.title}
                    className="project-card"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ProjectVisual type={p.visual} />
                    <div className="project-meta">
                      <span>
                        {p.number} / {p.category.toUpperCase()}
                      </span>
                      <span>{p.tags.slice(0, 2).join(" · ")}</span>
                    </div>
                    <div className="project-title">
                      <h3>{p.title}</h3>
                      <a
                        href={
                          p.live ||
                          p.github ||
                          `mailto:${profile.email}?subject=${encodeURIComponent(`Tell me about ${p.title}`)}`
                        }
                        target={p.live || p.github ? "_blank" : undefined}
                        rel={p.live || p.github ? "noreferrer" : undefined}
                        aria-label={
                          p.live || p.github
                            ? `Open ${p.title}`
                            : `Ask about ${p.title}`
                        }
                      >
                        <ArrowUpRight />
                      </a>
                    </div>
                    <p>{p.description}</p>
                    <details className="project-details">
                      <summary>Project details</summary>
                      <ul>
                        {p.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    </details>
                    {p.live && p.github && (
                      <div className="project-links">
                        <a
                          className="text-link"
                          href={p.live}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live demo <ArrowUpRight size={14} />
                        </a>
                        <a
                          className="text-link"
                          href={p.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Source code <Github size={14} />
                        </a>
                      </div>
                    )}
                    <div className="project-tags">
                      {p.tags.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                      {!p.live && !p.github && (
                        <span className="project-request">
                          DETAILS ON REQUEST ↗
                        </span>
                      )}
                    </div>
                  </motion.article>
                ))}
            </div>
            <a
              className="text-link github-more"
              href={`${profile.github}?tab=repositories`}
              target="_blank"
              rel="noreferrer"
            >
              More experiments on GitHub <ArrowUpRight size={18} />
            </a>
          </section>
          <section id="about" className="about-section">
            <div className="wrap about-grid">
              <div>
                <p className="eyebrow">
                  <span>02 /</span> THE PERSON BEHIND THE CODE
                </p>
                <div className="about-art" aria-hidden="true">
                  <span>AT</span>
                  <div className="about-orbit" />
                  <small>CURIOUS BY DEFAULT.</small>
                  <i>✳</i>
                </div>
              </div>
              <div className="about-copy">
                <h2>
                  A curious mind.
                  <br />
                  An engineer’s instinct.
                  <br />
                  <span>A maker’s heart.</span>
                </h2>
                <p>
                  I’m Aayush, a Computer Science student specializing in AI &
                  Machine Learning at Lovely Professional University. I’m drawn
                  to the space where complex technology becomes something
                  simple, useful, and unexpected.
                </p>
                <p>
                  From autonomous agents to full-stack apps, I learn by
                  building. Every project is a chance to ask better questions,
                  go a little deeper, and create something worth putting into
                  the world.
                </p>
                <div className="about-facts">
                  <div>
                    <small>CURRENTLY</small>
                    <span>BTech · CSE (AI & ML)</span>
                  </div>
                  <div>
                    <small>AT</small>
                    <span>Lovely Professional University</span>
                  </div>
                </div>
                <a className="text-link" href={`mailto:${profile.email}`}>
                  Have something in mind? <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </section>
          <section id="skills" className="stack-section wrap">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  <span>03 /</span> MY TOOLKIT
                </p>
                <h2>
                  The stack behind
                  <br />
                  <span>the spark.</span>
                </h2>
              </div>
              <p>
                The tools change. The drive to
                <br />
                figure things out stays the same.
              </p>
            </div>
            <div className="stack-list">
              {[
                [
                  "01",
                  "Interfaces & experiences",
                  "React / TypeScript / React Native / Tailwind CSS",
                  "↗",
                ],
                [
                  "02",
                  "Intelligence & automation",
                  "Python / Claude API / Gemini API / LangChain",
                  "✳",
                ],
                [
                  "03",
                  "Systems & infrastructure",
                  "Node.js / Firebase / Supabase / Git",
                  "⌘",
                ],
                [
                  "04",
                  "Depth & motion",
                  "Three.js / React Three Fiber / GSAP / Framer Motion",
                  "◎",
                ],
              ].map(([n, title, tools, icon]) => (
                <div className="stack-row" key={n}>
                  <span className="stack-number">{n}</span>
                  <h3>{title}</h3>
                  <p>{tools}</p>
                  <span className="stack-icon">{icon}</span>
                </div>
              ))}
            </div>
          </section>
          <Certifications />
          <section id="contact" className="contact-section wrap">
            <div className="contact-top">
              <p className="eyebrow">
                <span>05 /</span> NEXT STARTS WITH A HELLO
              </p>
              <span>
                <i className="status-dot" /> OPEN TO WHAT’S NEXT
              </span>
            </div>
            <a className="contact-headline" href={`mailto:${profile.email}`}>
              Let’s build
              <br />
              <span>something great.</span>
              <ArrowUpRight aria-hidden="true" />
            </a>
            <ContactForm />
            <div className="contact-bottom">
              <div>
                <p>A project, a collaboration, or just a good conversation.</p>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
                <button
                  className="copy-email"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                </button>
                <span role="status" className="copy-status">
                  {copied ? "Copied!" : ""}
                </span>
              </div>
              <a
                className="button button-lime"
                href={`mailto:${profile.email}`}
              >
                Say hello <ArrowUpRight size={19} />
              </a>
            </div>
          </section>
        </main>
        <footer className="wrap site-footer">
          <a className="wordmark" href="#home">
            aayush<span>®</span>
          </a>
          <span>© {new Date().getFullYear()} AAYUSH TYAGI</span>
          <div>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a href={profile.instagram} target="_blank" rel="noreferrer">
              Instagram ↗
            </a>
            <a href={profile.x} target="_blank" rel="noreferrer">
              X ↗
            </a>
            <a href="#certifications">Certifications</a>
            <a href="#home">Back to top ↑</a>
          </div>
        </footer>
      </div>
    </MotionConfig>
  );
}
