import { useState, useEffect } from 'react'

// ─── DATA — edit these to personalize your portfolio ───────────────────────

const ME = {
  name: 'Hanouta El Mehdi',
  initials: 'HM',
  title: 'Junior Developer',
  location: 'Morocco',
  tagline: 'I build things for the web. Side projects, experiments, and tools that scratch my own itch — always learning, always shipping.',
  about: [
    `I’m El Mehdi, a junior web developer focused on building practical, real-world applications. I learn by doing — not just watching tutorials — and I’m constantly improving through hands-on projects.
I work across the full web stack, using JavaScript and React for the front end, and building back-end systems with Laravel (PHP) as well as Node.js and Express. I also work with databases like MySQL and MongoDB, depending on the project.
I enjoy building complete applications — from clean, responsive interfaces to solid APIs and well-structured databases. I focus on writing clean, maintainable code and creating things that actually solve problems.
Outside of coding, I explore design systems, experiment with new tools, and keep pushing my skills through side projects. I prefer shipping and learning over waiting for something to be perfect.`,
  ],
  email: 'mehdi11hanouta@gmail.com',
  github: 'https://github.com/Mehdi-Fantascic',
  linkedin: 'https://www.linkedin.com/in/el-mehdi-hanouta-51078b2b8/',
  
  stats: [
    { num: '3+', label: 'Projects Shipped' },
    { num: '1yr', label: 'Of Coding' },
    { num: '∞', label: 'Ideas in Queue' },
    { num: '0', label: 'Plans to Stop' },
  ],
  available: true,
}

const PROJECTS = [
  {
    num: '01',
    name: 'TaskFlow',
    desc: 'A minimal task management app with drag-and-drop, labels, and local persistence. Built to solve my own productivity chaos.',
    tags: ['React', 'DnD Kit', 'Zustand'],
    live: '#',
    github: '#',
  },
  {
    num: '02',
    name: 'Weather.io',
    desc: 'Clean weather dashboard that visualizes 7-day forecasts with animated weather icons and geolocation support.',
    tags: ['JavaScript', 'OpenWeather API', 'Chart.js'],
    live: '#',
    github: '#',
  },
  {
    num: '03',
    name: 'DevNotes',
    desc: 'Markdown note-taking app with syntax highlighting, search, and tagging. Because Notion is too much and Notepad is too little.',
    tags: ['React', 'Node.js', 'MongoDB'],
    live: '#',
    github: '#',
  },
]

const SKILLS = [
  { category: 'Frontend', items: ['React', 'JavaScript (ES6+)', 'HTML & CSS', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'REST APIs', 'SQL / MongoDB'] },
  { category: 'Tools', items: ['Git & GitHub', 'Vite', 'Figma', 'VS Code'] },
  { category: 'Learning', items: ['TypeScript', 'Next.js', 'PostgreSQL', 'Docker'] },
]

// ─── COMPONENTS ────────────────────────────────────────────────────────────

function Nav({ scrolled }) {
  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <a href="#home" className="nav-logo">{ME.initials}.</a>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="nav-menu-btn" aria-label="Menu">Menu</button>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />

      <p className="hero-tag">// {ME.title} · Based in {ME.location}</p>

      <h1 className="hero-name">
        {ME.name.split(' ').map((word, i) => (
          <span key={i}>
            {i === 1 ? <span className="accent">{word}</span> : word}
            {i < ME.name.split(' ').length - 1 && <br />}
          </span>
        ))}
        <span className="cursor" aria-hidden="true" />
      </h1>

      <p className="hero-desc">{ME.tagline}</p>

      <div className="hero-cta">
        <a href="#projects" className="btn-primary">View Projects</a>
        <a href="#contact" className="btn-ghost">Get in Touch</a>
      </div>

      <div className="scroll-hint" aria-hidden="true">
        <span className="scroll-hint-line" />
        Scroll to explore
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="about" id="about">
      <p className="section-label">// 01 — About</p>
      <div className="about-grid">
        <div>
          <h2 className="section-title">A bit<br />about me.</h2>
          <div className="about-body">
            {ME.about.map((para, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
            ))}
          </div>
        </div>

        <div className="about-sidebar">
          <div className="stats-block">
            {ME.stats.map((s, i) => (
              <div key={i} className="stat">
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          {ME.available && (
            <div className="about-availability">
              <span className="avail-dot" aria-hidden="true" />
              Open to opportunities
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section className="projects" id="projects">
      <p className="section-label">// 02 — Projects</p>
      <h2 className="section-title">Things I've<br />built.</h2>

      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <article key={p.num} className="project-card">
            <div className="project-num">{p.num}</div>
            <span className="project-arrow" aria-hidden="true">↗</span>

            <h3 className="project-name">{p.name}</h3>
            <p className="project-desc">{p.desc}</p>

            <div className="project-tags">
              {p.tags.map((t) => (
                <span key={t} className="tag accent">{t}</span>
              ))}
            </div>

            <div className="project-links">
              <a href={p.live} target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href={p.github} target="_blank" rel="noopener noreferrer">GitHub →</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="skills" id="skills">
      <p className="section-label">// 03 — Stack</p>
      <h2 className="section-title">What I<br />work with.</h2>

      <div className="skills-grid">
        {SKILLS.map((group) => (
          <div key={group.category} className="skill-group">
            <div className="skill-group-label">{group.category}</div>
            <ul className="skill-list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <p className="section-label">// 04 — Contact</p>
      <h2 className="section-title">Let's<br />connect.</h2>

      <a href={`mailto:${ME.email}`} className="contact-email">
        {ME.email}
      </a>

      <ul className="social-row">
        <li><a href={ME.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a href={ME.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>       
      </ul>
    </section>
  )
}

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer>
      <p>© {year} {ME.name}. Built with React + Vite.</p>
      <p>Designed & coded with ♥</p>
    </footer>
  )
}

// ─── APP ────────────────────────────────────────────────────────────────────

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <Nav scrolled={scrolled} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
