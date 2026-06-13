import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [isFlipped, setIsFlipped] = useState(false)

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  })

  return (
    <section id="about" className="py-32 md:py-40 relative overflow-hidden" style={{ background: 'var(--surface)' }}>
      <div className="bg-dots absolute inset-0 pointer-events-none opacity-30" aria-hidden />
      {/* subtle gold gradient top */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(212,162,78,0.25), transparent)' }}
      />
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(212,168,67,0.04) 0%, transparent 70%)', filter: 'blur(40px)' }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 gap-16 md:gap-24 items-center"
        >
          {/* Portrait card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
            style={{ perspective: '1200px' }}
          >
            {/* Gold ring */}
            <div
              className="absolute -inset-4 rounded-3xl pointer-events-none"
              style={{ border: '1px solid rgba(212,168,67,0.1)' }}
            />
            {/* Ambient glow */}
            <div
              className="absolute -inset-8 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(212,168,67,0.08) 0%, transparent 70%)',
                filter: 'blur(32px)',
              }}
            />

            <motion.div
              className="relative w-full cursor-pointer"
              style={{ height: 480, transformStyle: 'preserve-3d' }}
              onClick={() => setIsFlipped(!isFlipped)}
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
            >
              {/* Front */}
              <div
                className="absolute inset-0 rounded-2xl overflow-hidden"
                style={{
                  backfaceVisibility: 'hidden',
                  border: '1px solid rgba(212,168,67,0.18)',
                  background: 'var(--surface2)',
                }}
              >
                <img
                  src="/ansh-portrait.jpg"
                  alt="Ansh Pandey"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                {/* Gradient vignette */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, rgba(10,13,20,0.5) 0%, transparent 50%)' }}
                />
                {/* Flip hint */}
                <div
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-semibold"
                  style={{
                    background: 'rgba(10,13,20,0.7)',
                    border: '1px solid rgba(212,168,67,0.3)',
                    color: 'var(--gold)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  Click to flip
                </div>
              </div>

              {/* Back */}
              <div
                className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center p-10 text-center"
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                  background: 'var(--surface2)',
                  border: '1px solid rgba(212,168,67,0.18)',
                }}
              >
                <span className="text-6xl mb-5">🎨</span>
                <h3 className="text-2xl font-black mb-2 gradient-text">Creative Vision</h3>
                <p style={{ color: 'var(--text-2)' }} className="text-base">Visual Storyteller & Front-end Developer</p>
                <div className="mt-6 flex gap-3 flex-wrap justify-center">
                  {['Photography', 'UI Design', 'React', 'Cinematography'].map(t => (
                    <span key={t} className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{ background: 'rgba(212,168,67,0.1)', color: 'var(--gold)', border: '1px solid rgba(212,168,67,0.2)' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Bio column */}
          <div className="space-y-8">
            <motion.div {...fadeUp(0.1)}>
              <span className="pill mb-4 inline-flex">About Me</span>
              <h2
                className="font-display font-black leading-tight"
                style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: 'var(--text-1)' }}
              >
                A visual storyteller <br />
                <span className="gradient-text">& developer.</span>
              </h2>
            </motion.div>

            <motion.p {...fadeUp(0.2)} className="text-lg leading-relaxed" style={{ color: 'var(--text-2)' }}>
              I'm <strong style={{ color: 'var(--text-1)' }}>Ansh Pandey</strong> — blending photography, videography, and polished UI to craft immersive digital experiences. I focus on clean composition, subtle motion, and user-centered design.
            </motion.p>

            <motion.p {...fadeUp(0.25)} className="text-base leading-relaxed" style={{ color: 'var(--text-2)' }}>
              Currently interning at <span style={{ color: 'var(--gold)', fontWeight: 600 }}>ITfosters</span> and studying{' '}
              <span style={{ color: 'var(--sky)', fontWeight: 600 }}>BTech CSIT</span> at Dronacharya College, Greater Noida.
            </motion.p>

            {/* Achievements */}
            <motion.div {...fadeUp(0.3)} className="space-y-3">
              {[
                { icon: '🏆', text: 'AIR 94 in Gautam Buddha University Entrance Test' },
                { icon: '🎤', text: 'Two-time District Level Speaker (2024, 2025)' },
                { icon: '🏏', text: 'Captain of School Cricket Team' },
                { icon: '📸', text: '3 Years of Photography & Videography' },
              ].map((a, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-lg mt-0.5">{a.icon}</span>
                  <p className="text-sm" style={{ color: 'var(--text-2)' }}>{a.text}</p>
                </div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div {...fadeUp(0.35)} className="grid grid-cols-2 gap-4 pt-2">
              {[
                { value: '10+', label: 'Projects Completed' },
                { value: '2+ Yrs', label: 'Experience' },
              ].map((s) => (
                <div
                  key={s.label}
                  className="p-5 rounded-xl"
                  style={{
                    background: 'rgba(212,168,67,0.05)',
                    border: '1px solid rgba(212,168,67,0.12)',
                  }}
                >
                  <p className="text-2xl font-black gradient-text">{s.value}</p>
                  <p className="text-xs mt-1 font-medium uppercase tracking-wider" style={{ color: 'var(--text-3)' }}>{s.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Resume CTA */}
            <motion.div {...fadeUp(0.4)}>
              <a
                href="https://drive.google.com/file/d/1nZgZPh-rr3AO2vpl5zwiAyCGD8UqzzdZ/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl transition-all"
                style={{
                  background: 'var(--gold)',
                  color: '#0a0d14',
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 28px rgba(212,168,67,0.35)' }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View Resume
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
