import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

/* ─────────────────────────────────────────────────────
   Word-by-word stagger reveal (safe for gradient text)
───────────────────────────────────────────────────── */
function WordReveal({ text, className, style, baseDelay = 0 }) {
  const words = text.split(' ')
  return (
    <span className={className} style={style}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden" style={{ marginRight: '0.22em' }}>
          <motion.span
            className="inline-block"
            initial={{ y: '105%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{ duration: 0.75, delay: baseDelay + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

/* ─────────────────────────────────────────────────────
   Slideshow photos — dimmed cinematic backdrop
───────────────────────────────────────────────────── */
const SLIDES = [
  { src: '/ansh-portrait.jpg',  pos: 'object-top' },
  { src: '/ansh-portrait.png',  pos: 'object-top' },
  { src: '/hero-character.png', pos: 'object-center' },
]

export default function Hero() {
  const heroRef = useRef(null)
  const [slide, setSlide] = useState(0)

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const bgY     = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])
  const fadeOut = useTransform(scrollYProgress, [0, 0.55], [1, 0])

  useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % SLIDES.length), 5500)
    return () => clearInterval(t)
  }, [])

  const scrollTo = href => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#0A0A0F' }}
    >
      {/* ── Ken Burns slideshow backdrop ──────── */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ scale: bgScale, y: bgY }}
      >
        {SLIDES.map((s, i) => (
          <motion.div
            key={s.src}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: slide === i ? 1 : 0 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          >
            <img
              src={s.src} alt="" aria-hidden
              className={`w-full h-full object-cover ${s.pos}`}
              style={{ filter: 'brightness(0.18) saturate(0.5)' }}
            />
          </motion.div>
        ))}

        {/* Left-side vignette — keeps text legible */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(100deg, rgba(10,10,15,0.97) 0%, rgba(10,10,15,0.82) 50%, rgba(10,10,15,0.35) 100%)',
        }} />
        {/* Bottom vignette */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to top, rgba(10,10,15,0.9) 0%, transparent 35%)',
        }} />
      </motion.div>

      {/* ── Drifting aurora orbs ──────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        {/* Gold bloom — top right */}
        <div className="orb-drift-1 absolute will-change-transform" style={{
          width: 900, height: 900, top: '-20%', right: '-15%',
          background: 'radial-gradient(circle, rgba(212,162,78,0.13) 0%, rgba(124,58,237,0.07) 45%, transparent 68%)',
          filter: 'blur(90px)',
        }} />
        {/* Purple — bottom left */}
        <div className="orb-drift-2 absolute will-change-transform" style={{
          width: 600, height: 600, bottom: '-10%', left: '-8%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.11) 0%, rgba(212,162,78,0.05) 50%, transparent 72%)',
          filter: 'blur(80px)',
        }} />
        {/* Sky — mid center */}
        <div className="orb-drift-3 absolute will-change-transform" style={{
          width: 500, height: 500, top: '35%', left: '38%',
          background: 'radial-gradient(circle, rgba(126,184,247,0.05) 0%, transparent 65%)',
          filter: 'blur(70px)',
        }} />
      </div>

      {/* ── Dot grid ─────────────────────────── */}
      <div className="bg-dots absolute inset-0 pointer-events-none" style={{ opacity: 0.35 }} aria-hidden />

      {/* ── Slide progress dots ───────────────── */}
      <div className="absolute bottom-12 right-8 md:right-16 z-20 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setSlide(i)}
            aria-label={`Slide ${i + 1}`}
            className="transition-all duration-300 rounded-full"
            style={{
              width: slide === i ? 24 : 6,
              height: 6,
              background: slide === i ? 'var(--gold)' : 'rgba(255,255,255,0.2)',
            }}
          />
        ))}
      </div>

      {/* ── Main content ─────────────────────── */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-32 pb-24"
        style={{ opacity: fadeOut }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT — Text */}
          <div>

            {/* Availability pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-7"
            >
              <span className="pill">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for work
              </span>
            </motion.div>

            {/* Name */}
            <h1
              className="font-display font-black leading-none tracking-tight mb-6"
              style={{ fontSize: 'clamp(4rem, 10vw, 9rem)', lineHeight: 0.9 }}
            >
              {/* "Ansh" — plain white, word reveal */}
              <span className="block overflow-hidden">
                <WordReveal
                  text="Ansh"
                  className="text-white"
                  baseDelay={0.25}
                />
              </span>

              {/* "Pandey" — solid gold first, then shimmer after mount */}
              <span className="block overflow-hidden mt-1">
                <motion.span
                  className="inline-block"
                  initial={{ y: '105%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  transition={{ duration: 0.75, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    /* Explicit solid gold — no clip, always visible */
                    color: '#D4A24E',
                    WebkitTextFillColor: '#D4A24E',
                    /* Shimmer is added after a delay via animation */
                  }}
                >
                  <span
                    style={{
                      background: 'linear-gradient(110deg, #a87830 0%, #D4A24E 35%, #f0c060 60%, #D4A24E 80%, #a87830 100%)',
                      backgroundSize: '250% 100%',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      animation: 'shimmerText 4s ease infinite',
                      display: 'inline',
                    }}
                  >
                    Pandey
                  </span>
                </motion.span>
              </span>
            </h1>

            {/* Role strip */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="text-xs font-bold tracking-[0.2em] uppercase mb-5"
              style={{ color: 'var(--sky)' }}
            >
              Photographer&ensp;·&ensp;Videographer&ensp;·&ensp;Developer&ensp;·&ensp;Speaker
            </motion.p>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.9 }}
              className="text-base md:text-lg leading-relaxed max-w-md mb-8"
              style={{ color: 'var(--text-2)' }}
            >
              I craft immersive digital experiences where photography, visual
              storytelling, and clean engineering meet — built to attract clients
              and leave a lasting impression.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 1.05 }}
              className="flex flex-wrap gap-3 mb-12"
            >
              <motion.button
                onClick={() => scrollTo('#projects')}
                className="inline-flex items-center gap-2 px-7 py-3.5 font-bold text-sm rounded-xl"
                style={{ background: 'var(--gold)', color: '#0A0A0F' }}
                whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(212,162,78,0.55)' }}
                whileTap={{ scale: 0.96 }}
              >
                View Projects
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>

              <motion.button
                onClick={() => scrollTo('#contact')}
                className="px-7 py-3.5 font-bold text-sm rounded-xl"
                style={{ border: '1px solid rgba(212,162,78,0.4)', color: 'var(--gold)', background: 'transparent' }}
                whileHover={{ scale: 1.04, background: 'rgba(212,162,78,0.09)', borderColor: 'rgba(212,162,78,0.7)' }}
                whileTap={{ scale: 0.96 }}
              >
                Contact Me
              </motion.button>

              <motion.a
                href="https://drive.google.com/file/d/1nZgZPh-rr3AO2vpl5zwiAyCGD8UqzzdZ/view?usp=drive_link"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 font-bold text-sm rounded-xl"
                style={{ border: '1px solid rgba(126,184,247,0.3)', color: 'var(--sky)', background: 'transparent' }}
                whileHover={{ scale: 1.04, background: 'rgba(126,184,247,0.08)', borderColor: 'rgba(126,184,247,0.6)' }}
                whileTap={{ scale: 0.96 }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Résumé
              </motion.a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.7 }}
              className="flex flex-wrap gap-8 pt-6"
              style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
            >
              {[
                { v: '10+', l: 'Projects' },
                { v: '2+',  l: 'Yrs Exp.' },
                { v: '3+',  l: 'Internships' },
              ].map(s => (
                <div key={s.l}>
                  <p className="text-2xl font-display font-black" style={{ color: 'var(--gold)' }}>{s.v}</p>
                  <p className="text-xs font-semibold uppercase tracking-widest mt-0.5" style={{ color: 'var(--text-3)' }}>{s.l}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Portrait card (desktop only) */}
          <motion.div
            className="hidden lg:flex items-center justify-center relative"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Glow behind card */}
            <div className="absolute w-80 h-80 rounded-full" style={{
              background: 'radial-gradient(circle, rgba(212,162,78,0.18) 0%, transparent 70%)',
              filter: 'blur(50px)',
            }} />

            {/* Decorative rings */}
            <motion.div
              className="absolute rounded-full pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
              style={{
                width: 460, height: 460,
                border: '1px solid rgba(212,162,78,0.1)',
                borderTopColor: 'rgba(212,162,78,0.4)',
                borderRadius: '50%',
              }}
            />
            <div className="absolute rounded-full pointer-events-none" style={{
              width: 380, height: 380,
              border: '1px solid rgba(126,184,247,0.08)',
            }} />

            {/* Portrait */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10"
            >
              <div
                className="relative overflow-hidden"
                style={{
                  width: 320, height: 400,
                  borderRadius: 24,
                  border: '1px solid rgba(212,162,78,0.22)',
                  boxShadow: '0 0 60px rgba(212,162,78,0.15), 0 32px 80px rgba(0,0,0,0.6)',
                }}
              >
                <img
                  src="/ansh-portrait.jpg"
                  alt="Ansh Pandey"
                  className="w-full h-full object-cover object-top"
                  style={{ filter: 'brightness(0.92) saturate(0.85)' }}
                />
                {/* Subtle gold tint at bottom */}
                <div className="absolute inset-0 pointer-events-none" style={{
                  background: 'linear-gradient(to top, rgba(212,162,78,0.18) 0%, transparent 45%)',
                }} />
              </div>

              {/* Floating micro-badges */}
              <motion.div
                className="absolute -top-4 -left-8 glass rounded-xl px-4 py-2.5"
                style={{ border: '1px solid rgba(212,162,78,0.25)' }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <p className="text-xs font-bold" style={{ color: 'var(--gold)' }}>Full Stack Dev</p>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -right-8 glass rounded-xl px-4 py-2.5"
                style={{ border: '1px solid rgba(126,184,247,0.25)' }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              >
                <p className="text-xs font-bold" style={{ color: 'var(--sky)' }}>Photographer</p>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </motion.div>

      {/* ── Scroll cue ───────────────────────── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ opacity: 0.45 }}
      >
        <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom, transparent, var(--gold))' }} />
        <span className="text-[9px] uppercase tracking-[0.22em]" style={{ color: 'var(--text-3)' }}>scroll</span>
      </motion.div>
    </section>
  )
}
