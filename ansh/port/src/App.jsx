import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
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
      <motion.a
        href="#contact"
        onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
        className="btn-lime"
        style={{ fontSize: 14, padding: '10px 20px', gap: 10 }}
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5, type: 'spring', stiffness: 280, damping: 20 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
      >
        {/* Mini AP logo */}
        <svg width="20" height="20" viewBox="0 0 100 100" fill="none">
          <path d="M18 25 Q8 50 20 75"  stroke="#15803d" strokeWidth="4"  strokeLinecap="round" fill="none"/>
          <path d="M82 25 Q92 50 80 78" stroke="#15803d" strokeWidth="4"  strokeLinecap="round" fill="none"/>
          <path d="M15 80 L38 20 L55 60" stroke="#15803d" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <path d="M25 58 L48 58"        stroke="#15803d" strokeWidth="7"  strokeLinecap="round" fill="none"/>
          <path d="M50 80 L50 22"        stroke="#15803d" strokeWidth="9"  strokeLinecap="round" fill="none"/>
          <path d="M50 22 Q80 22 80 43 Q80 62 50 60" stroke="#15803d" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
        Let's Talk
      </motion.a>
    </div>
  )
}

/* ── Scroll to Top ──────────────────────────── */
function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <motion.button
      className="scroll-top-btn"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.7 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Scroll to top"
      title="Back to top"
    >
      <svg width="16" height="16" fill="none" stroke="#000" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7"/>
      </svg>
    </motion.button>
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
      <ScrollToTop />
    </div>
  )
}
