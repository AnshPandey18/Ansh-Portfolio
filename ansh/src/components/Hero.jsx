import { motion } from 'framer-motion'
import { useRef } from 'react'

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.75, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] },
  }),
}

const Hero = () => {
  const heroRef = useRef(null)
  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#03040a' }}
    >

      {/* ── Aurora background orbs ─────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        {/* Large teal bloom — top-right */}
        <div className="aurora-orb-1 absolute"
          style={{
            width: '780px', height: '780px',
            top: '-15%', right: '-12%',
            background: 'radial-gradient(circle, rgba(13,148,136,0.22) 0%, rgba(13,148,136,0.06) 45%, transparent 70%)',
            filter: 'blur(72px)',
          }}
        />
        {/* Sky-blue accent — center-left */}
        <div className="aurora-orb-2 absolute"
          style={{
            width: '600px', height: '600px',
            top: '30%', left: '-10%',
            background: 'radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 65%)',
            filter: 'blur(80px)',
          }}
        />
        {/* Indigo depth — bottom */}
        <div className="aurora-orb-3 absolute"
          style={{
            width: '500px', height: '500px',
            bottom: '-10%', left: '40%',
            background: 'radial-gradient(circle, rgba(99,102,241,0.09) 0%, transparent 60%)',
            filter: 'blur(60px)',
          }}
        />
        {/* Horizon glow line */}
        <div className="absolute inset-x-0"
          style={{
            bottom: '30%', height: '1px',
            background: 'linear-gradient(90deg,transparent 0%,rgba(13,148,136,0.3) 40%,rgba(56,189,248,0.2) 60%,transparent 100%)',
          }}
        />
      </div>

      {/* ── Animated dot-grid overlay ─────────────────── */}
      <div className="dot-grid grid-animate absolute inset-0 pointer-events-none opacity-[0.45]" aria-hidden />

      {/* ── Noise film grain ──────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" aria-hidden
        style={{
          backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ── Content ───────────────────────────────────── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 w-full pt-32 pb-24">
        <div className="max-w-2xl">

          {/* Eyebrow pill */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}
            className="inline-flex items-center gap-2.5 mb-10 px-4 py-1.5 rounded-full"
            style={{ background:'rgba(13,148,136,0.1)', border:'1px solid rgba(13,148,136,0.25)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-teal-400 text-xs font-semibold tracking-widest uppercase">
              Photographer · Developer · Speaker
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold leading-[1.06] tracking-tight text-white mb-7"
          >
            Turning ideas into<br />
            <span style={{
              background:'linear-gradient(135deg,#0d9488 0%,#14b8a6 50%,#38bdf8 100%)',
              WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
            }}>
              visual experiences
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2}
            className="text-gray-400 text-lg leading-relaxed max-w-lg mb-12"
          >
            I'm <span className="text-gray-200 font-medium">Ansh Pandey</span> — a visual storyteller
            and front-end developer blending photography, videography, and polished UI into
            immersive, client-winning experiences.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3}
            className="flex flex-wrap gap-4 mb-20"
          >
            <button onClick={() => scrollTo('#projects')}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white rounded-lg transition-all"
              style={{
                background:'linear-gradient(135deg,#0d9488,#0891b2)',
                boxShadow:'0 0 32px rgba(13,148,136,0.35)',
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow='0 0 48px rgba(13,148,136,0.55)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow='0 0 32px rgba(13,148,136,0.35)'}
            >
              View My Work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </button>

            <button onClick={() => scrollTo('#contact')}
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium text-gray-300 rounded-lg transition-all"
              style={{ border:'1px solid rgba(255,255,255,0.1)', background:'rgba(255,255,255,0.03)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(20,184,166,0.4)'; e.currentTarget.style.color='#fff' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.1)'; e.currentTarget.style.color='' }}
            >
              Let's Talk
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={4}
            className="flex flex-wrap gap-12 pt-8"
            style={{ borderTop:'1px solid rgba(255,255,255,0.06)' }}
          >
            {[
              { value:'50+',  label:'Projects completed' },
              { value:'2+',   label:'Years of experience' },
              { value:'3',    label:'Creative disciplines' },
            ].map(s => (
              <div key={s.label}>
                <div className="text-2xl font-bold text-white mb-0.5">{s.value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y:[0,7,0] }}
        transition={{ duration:2.5, repeat:Infinity, ease:'easeInOut' }}
      >
        <div className="w-px h-10"
          style={{ background:'linear-gradient(to bottom, transparent, rgba(13,148,136,0.6))' }}
        />
        <span className="text-[9px] text-gray-600 uppercase tracking-[0.2em]">scroll</span>
      </motion.div>
    </section>
  )
}

export default Hero
