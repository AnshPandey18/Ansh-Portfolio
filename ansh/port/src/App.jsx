import Navigation  from './components/Navigation'
import Hero        from './components/Hero'
import About       from './components/About'
import Skills      from './components/Skills'
import Projects    from './components/Projects'
import Experience  from './components/Experience'
import Contact     from './components/Contact'
import Footer      from './components/Footer'

/* ── Floating "Let's Talk" CTA ─────────────── */
function FloatingCTA() {
  return (
    <div className="floating-cta">
      <a
        href="#contact"
        onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
        className="btn-lime text-sm font-medium"
        style={{ fontSize: 14 }}
      >
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8M8 8h5M8 16h3M4 6h16v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"/>
        </svg>
        Let's Talk
      </a>
    </div>
  )
}

export default function App() {
  return (
    <div style={{ background: '#fff', color: '#000', minHeight: '100vh' }}>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  )
}
