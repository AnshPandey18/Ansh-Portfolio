import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation  from './components/Navigation'
import Hero        from './components/Hero'
import About       from './components/About'
import Skills      from './components/Skills'
import Projects    from './components/Projects'
import Experience  from './components/Experience'
import Contact     from './components/Contact'
import Footer      from './components/Footer'
import ParticleBackground from './components/ParticleBackground'

/* ── Custom Cursor ──────────────────────────────── */
function CustomCursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const pos     = useRef({ x: 0, y: 0 })
  const ring    = useRef({ x: 0, y: 0 })
  const raf     = useRef(null)

  useEffect(() => {
    const onMove = (e) => { pos.current = { x: e.clientX, y: e.clientY } }
    window.addEventListener('mousemove', onMove)

    const loop = () => {
      // dot snaps
      if (dotRef.current) {
        dotRef.current.style.left = pos.current.x + 'px'
        dotRef.current.style.top  = pos.current.y + 'px'
      }
      // ring lerps
      ring.current.x += (pos.current.x - ring.current.x) * 0.12
      ring.current.y += (pos.current.y - ring.current.y) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px'
        ringRef.current.style.top  = ring.current.y + 'px'
      }
      raf.current = requestAnimationFrame(loop)
    }
    raf.current = requestAnimationFrame(loop)

    // Grow ring on hoverable elements
    const onEnter = () => {
      if (ringRef.current) {
        ringRef.current.style.width  = '64px'
        ringRef.current.style.height = '64px'
        ringRef.current.style.borderColor = 'rgba(212,162,78,0.9)'
        ringRef.current.style.opacity = '0.7'
      }
    }
    const onLeave = () => {
      if (ringRef.current) {
        ringRef.current.style.width  = '36px'
        ringRef.current.style.height = '36px'
        ringRef.current.style.borderColor = 'rgba(212,162,78,0.5)'
        ringRef.current.style.opacity = '1'
      }
    }
    const addListeners = () => {
      document.querySelectorAll('a,button,[data-cursor]').forEach(el => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }
    const observer = new MutationObserver(addListeners)
    observer.observe(document.body, { childList: true, subtree: true })
    addListeners()

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}

/* ── Floating "Let's Talk" CTA ──────────────────── */
function FloatingCTA() {
  const btnRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!btnRef.current) return
    const rect = btnRef.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top  + rect.height / 2
    const dx = (e.clientX - cx) * 0.35
    const dy = (e.clientY - cy) * 0.35
    btnRef.current.style.transform = `translate(${dx}px,${dy}px)`
  }
  const handleMouseLeave = () => {
    if (btnRef.current) btnRef.current.style.transform = 'translate(0,0)'
  }

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="floating-cta">
      <motion.button
        ref={btnRef}
        onClick={scrollToContact}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm"
        style={{
          background: 'var(--gold)',
          color: '#0A0A0F',
          boxShadow: '0 0 28px rgba(212,162,78,0.45), 0 4px 20px rgba(0,0,0,0.6)',
        }}
        initial={{ opacity:0, scale:0.6 }}
        animate={{ opacity:1, scale:1 }}
        transition={{ delay:2, duration:0.5, type:'spring', stiffness:260, damping:18 }}
        whileTap={{ scale:0.94 }}
      >
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        Let's Talk
      </motion.button>
    </div>
  )
}

/* ── App ────────────────────────────────────────── */
function App() {
  const [darkMode,  setDarkMode]  = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved) setDarkMode(saved === 'dark')
    setIsLoading(false)
  }, [])

  useEffect(() => {
    if (isLoading) return
    if (darkMode) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode, isLoading])

  if (isLoading) return null

  return (
    <div className="min-h-screen relative overflow-x-hidden" style={{ background:'var(--bg)', color:'var(--text-1)' }}>
      <CustomCursor />
      <ParticleBackground darkMode={darkMode} />
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
      <FloatingCTA />
    </div>
  )
}

export default App
