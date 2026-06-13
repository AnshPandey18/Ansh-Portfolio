import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

/* Letter-by-letter reveal */
function SplitText({ text, className, style, delay = 0, stagger = 0.04 }) {
  const words = text.split(' ')
  return (
    <span className={className} style={style}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block overflow-hidden" style={{ marginRight:'0.28em' }}>
          {word.split('').map((char, ci) => (
            <motion.span
              key={ci}
              className="inline-block"
              initial={{ y: '110%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              transition={{
                duration: 0.65,
                delay: delay + (wi * 6 + ci) * stagger,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  )
}

const PHOTOS = [
  '/ansh-portrait.jpg',
  '/ansh-portrait.png',
  '/hero-character.png',
]

export default function Hero() {
  const heroRef = useRef(null)
  const [slide, setSlide] = useState(0)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.18])    // Ken Burns
  const bgY     = useTransform(scrollYProgress, [0, 1], ['0%', '8%'])  // parallax
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  // Slideshow cycling
  useEffect(() => {
    const id = setInterval(() => setSlide(s => (s + 1) % PHOTOS.length), 5000)
    return () => clearInterval(id)
  }, [])

  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* ── Slideshow / Ken Burns background ─── */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ scale: bgScale, y: bgY }}
      >
        {PHOTOS.map((src, i) => (
          <motion.div
            key={src}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: slide === i ? 1 : 0 }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          >
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover object-center"
              style={{ filter: 'brightness(0.22) saturate(0.6)' }}
              aria-hidden
            />
          </motion.div>
        ))}
        {/* Gradient overlay on top of images */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(10,10,15,0.92) 45%, rgba(10,10,15,0.55) 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(10,10,15,0.8) 0%, transparent 40%)',
          }}
        />
      </motion.div>

      {/* ── Aurora orbs ──────────────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div className="orb-drift-1 absolute will-change-transform" style={{
          width:700, height:700, top:'-15%', right:'-10%',
          background: 'radial-gradient(circle, rgba(212,162,78,0.14) 0%, rgba(124,58,237,0.08) 50%, transparent 70%)',
          filter:'blur(80px)',
        }} />
        <div className="orb-drift-2 absolute will-change-transform" style={{
          width:500, height:500, bottom:'0%', left:'-8%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, rgba(212,162,78,0.06) 50%, transparent 70%)',
          filter:'blur(70px)',
        }} />
        <div className="orb-drift-3 absolute will-change-transform" style={{
          width:400, height:400, top:'40%', left:'40%',
          background: 'radial-gradient(circle, rgba(126,184,247,0.06) 0%, transparent 65%)',
          filter:'blur(60px)',
        }} />
      </div>

      {/* ── Dot grid ─────────────────────────── */}
      <div className="bg-dots absolute inset-0 pointer-events-none opacity-40" aria-hidden />

      {/* ── Content ──────────────────────────── */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-20"
        style={{ opacity }}
      >
        <div className="max-w-3xl space-y-8">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity:0, y:20 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:0.6, delay:0.2 }}
          >
            <span className="pill">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available for work
            </span>
          </motion.div>

          {/* Name — huge display font with letter reveal */}
          <div>
            <h1
              className="font-display font-black leading-none tracking-tight"
              style={{ fontSize:'clamp(3.8rem,11vw,8.5rem)', lineHeight:0.93 }}
            >
              <SplitText
                text="Ansh"
                className="block text-white"
                delay={0.3}
                stagger={0.05}
              />
              <SplitText
                text="Pandey"
                className="block gradient-text"
                delay={0.5}
                stagger={0.05}
              />
            </h1>
          </div>

          {/* Role strip */}
          <motion.p
            initial={{ opacity:0, x:-24 }}
            animate={{ opacity:1, x:0 }}
            transition={{ duration:0.7, delay:1.0 }}
            className="text-sm font-semibold tracking-[0.18em] uppercase"
            style={{ color:'var(--sky)' }}
          >
            Photographer · Videographer · Developer · Lead Speaker
          </motion.p>

          {/* Bio */}
          <motion.p
            initial={{ opacity:0, y:16 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:0.7, delay:1.15 }}
            className="text-lg leading-relaxed max-w-lg"
            style={{ color:'var(--text-2)' }}
          >
            I craft immersive digital experiences where photography, visual storytelling,
            and clean front-end engineering meet — built to win clients.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity:0, y:16 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:0.7, delay:1.3 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              onClick={() => scrollTo('#projects')}
              className="px-8 py-3.5 font-bold text-sm rounded-xl"
              style={{ background:'var(--gold)', color:'#0A0A0F',
                boxShadow:'0 0 0 rgba(212,162,78,0)' }}
              whileHover={{ scale:1.05, boxShadow:'0 0 36px rgba(212,162,78,0.55)' }}
              whileTap={{ scale:0.96 }}
            >
              View Projects →
            </motion.button>

            <motion.button
              onClick={() => scrollTo('#contact')}
              className="px-8 py-3.5 font-bold text-sm rounded-xl"
              style={{ border:'1px solid rgba(212,162,78,0.4)', color:'var(--gold)', background:'transparent' }}
              whileHover={{ scale:1.05, background:'rgba(212,162,78,0.09)', borderColor:'rgba(212,162,78,0.7)' }}
              whileTap={{ scale:0.96 }}
            >
              Contact Me
            </motion.button>

            <motion.a
              href="https://drive.google.com/file/d/1nZgZPh-rr3AO2vpl5zwiAyCGD8UqzzdZ/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 font-bold text-sm rounded-xl flex items-center gap-2"
              style={{ border:'1px solid rgba(126,184,247,0.3)', color:'var(--sky)', background:'transparent' }}
              whileHover={{ scale:1.05, background:'rgba(126,184,247,0.08)', borderColor:'rgba(126,184,247,0.6)' }}
              whileTap={{ scale:0.96 }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Resume
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ delay:1.55, duration:0.7 }}
            className="flex flex-wrap gap-10 pt-6"
            style={{ borderTop:'1px solid rgba(255,255,255,0.06)' }}
          >
            {[
              { v:'10+', l:'Projects' },
              { v:'2+',  l:'Yrs Exp.' },
              { v:'3+',  l:'Internships' },
            ].map(s => (
              <div key={s.l}>
                <p className="text-3xl font-display font-black" style={{ color:'var(--gold)' }}>{s.v}</p>
                <p className="text-xs font-medium uppercase tracking-wider mt-0.5" style={{ color:'var(--text-3)' }}>{s.l}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        animate={{ y:[0,10,0] }}
        transition={{ duration:2.5, repeat:Infinity, ease:'easeInOut' }}
        style={{ opacity:0.5 }}
      >
        <div className="w-px h-10" style={{ background:'linear-gradient(to bottom, transparent, var(--gold))' }} />
        <span className="text-[9px] uppercase tracking-[0.22em]" style={{ color:'var(--text-3)' }}>scroll</span>
      </motion.div>
    </section>
  )
}
