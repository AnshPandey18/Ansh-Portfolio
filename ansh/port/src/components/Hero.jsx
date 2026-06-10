import { motion, useInView } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef(null)

  useEffect(() => {
    let ticking = false
    const handleMouseMove = (e) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const rect = heroRef.current?.getBoundingClientRect()
          if (rect) {
            setMousePosition({
              x: ((e.clientX - rect.left) / rect.width - 0.5) * 24,
              y: ((e.clientY - rect.top) / rect.height - 0.5) * 24,
            })
          }
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToSection = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* Subtle radial glow driven by mouse */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 60% at ${50 + mousePosition.x * 0.4}% ${50 + mousePosition.y * 0.4}%, rgba(212,168,67,0.07) 0%, transparent 70%)`,
          transition: 'background 0.1s linear',
        }}
      />

      {/* Blue counter-glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 40% 50% at ${72 + mousePosition.x * 0.2}% ${30 + mousePosition.y * 0.2}%, rgba(147,197,253,0.05) 0%, transparent 65%)`,
        }}
      />

      {/* Fine dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Slow drifting ambient orbs */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 600, height: 600,
          top: '-10%', right: '-5%',
          background: 'radial-gradient(circle, rgba(212,168,67,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 480, height: 480,
          bottom: '5%', left: '-5%',
          background: 'radial-gradient(circle, rgba(147,197,253,0.05) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{ x: [0, -20, 0], y: [0, -25, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-24 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12 md:gap-16 items-center"
        >
          {/* Left column */}
          <div className="space-y-8">

            {/* Eyebrow pill */}
            <motion.div variants={itemVariants}>
              <span className="pill">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: 'var(--gold)', display: 'inline-block' }}
                />
                Available for work
              </span>
            </motion.div>

            {/* Name */}
            <motion.div variants={itemVariants}>
              <h1
                className="font-black leading-none tracking-tight"
                style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)' }}
              >
                <span style={{ color: 'var(--text-1)' }}>Ansh</span>
                <br />
                <span className="gradient-text">Pandey</span>
              </h1>
            </motion.div>

            {/* Role strip */}
            <motion.p
              variants={itemVariants}
              className="text-base font-medium tracking-widest uppercase"
              style={{ color: 'var(--sky)', letterSpacing: '0.12em' }}
            >
              Photographer · Videographer · Developer · Lead Speaker
            </motion.p>

            {/* Bio */}
            <motion.p
              variants={itemVariants}
              className="text-lg leading-relaxed max-w-md"
              style={{ color: 'var(--text-2)' }}
            >
              I craft immersive digital experiences where photography, visual storytelling,
              and clean front-end engineering meet.
            </motion.p>

            {/* Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <motion.button
                onClick={() => scrollToSection('#projects')}
                className="px-7 py-3.5 font-semibold text-sm rounded-xl"
                style={{
                  background: 'var(--gold)',
                  color: '#0a0d14',
                }}
                whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(212,168,67,0.35)' }}
                whileTap={{ scale: 0.97 }}
              >
                View Projects →
              </motion.button>

              <motion.button
                onClick={() => scrollToSection('#contact')}
                className="px-7 py-3.5 font-semibold text-sm rounded-xl"
                style={{
                  border: '1px solid rgba(212,168,67,0.35)',
                  color: 'var(--gold)',
                  background: 'transparent',
                }}
                whileHover={{
                  scale: 1.05,
                  background: 'rgba(212,168,67,0.08)',
                  borderColor: 'rgba(212,168,67,0.6)',
                }}
                whileTap={{ scale: 0.97 }}
              >
                Contact Me
              </motion.button>

              <motion.a
                href="https://drive.google.com/file/d/1nZgZPh-rr3AO2vpl5zwiAyCGD8UqzzdZ/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 font-semibold text-sm rounded-xl flex items-center gap-2"
                style={{
                  border: '1px solid rgba(147,197,253,0.25)',
                  color: 'var(--sky)',
                  background: 'transparent',
                }}
                whileHover={{
                  scale: 1.05,
                  background: 'rgba(147,197,253,0.07)',
                  borderColor: 'rgba(147,197,253,0.45)',
                }}
                whileTap={{ scale: 0.97 }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Resume
              </motion.a>
            </motion.div>

            {/* Stats row */}
            <motion.div variants={itemVariants} className="flex gap-10 pt-4">
              {[
                { value: '10+', label: 'Projects' },
                { value: '2+', label: 'Years Exp.' },
                { value: '3+', label: 'Internships' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-black" style={{ color: 'var(--gold)' }}>{s.value}</p>
                  <p className="text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--text-3)' }}>{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — image panel */}
          <motion.div
            className="relative hidden md:flex items-center justify-center"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Decorative ring */}
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: 420, height: 420,
                border: '1px solid rgba(212,168,67,0.12)',
              }}
            />
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: 520, height: 520,
                border: '1px solid rgba(147,197,253,0.07)',
              }}
            />

            {/* Gold glow behind */}
            <div
              className="absolute pointer-events-none"
              style={{
                width: 360, height: 360,
                background: 'radial-gradient(circle, rgba(212,168,67,0.12) 0%, transparent 70%)',
                filter: 'blur(40px)',
              }}
            />

            <motion.div
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                transform: `perspective(1400px) rotateY(${mousePosition.x * 0.08}deg) rotateX(${-mousePosition.y * 0.08}deg)`,
              }}
            >
              <motion.img
                src="/hero-character.png"
                alt="Ansh Pandey"
                className="relative z-10 max-w-sm w-full mx-auto"
                style={{
                  filter: 'drop-shadow(0 0 40px rgba(212,168,67,0.3)) drop-shadow(0 0 80px rgba(147,197,253,0.15))',
                }}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
              />
            </motion.div>

            {/* Floating micro badges */}
            {[
              { label: 'Full Stack Dev', pos: 'top-8 left-0', accent: 'gold' },
              { label: 'Photographer', pos: 'bottom-16 right-0', accent: 'sky' },
            ].map((b) => (
              <motion.div
                key={b.label}
                className={`absolute ${b.pos} glass rounded-xl px-4 py-2.5 pointer-events-none`}
                style={{
                  border: `1px solid rgba(${b.accent === 'gold' ? '212,168,67' : '147,197,253'},0.25)`,
                }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: b.accent === 'sky' ? 2 : 0 }}
              >
                <p className="text-xs font-semibold" style={{ color: b.accent === 'gold' ? 'var(--gold)' : 'var(--sky)' }}>
                  {b.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <span className="text-xs uppercase tracking-widest" style={{ color: 'var(--text-3)' }}>Scroll</span>
        <svg className="w-4 h-4" style={{ color: 'var(--gold)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}

export default Hero
