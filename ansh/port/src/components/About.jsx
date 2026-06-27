import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
})

const PASTEL_CARDS = [
  {
    bg: '#fef3c8',
    icon: '🏆',
    title: 'AIR 94',
    body: 'All India Rank 94 in Gautam Buddha University Entrance Test.',
  },
  {
    bg: '#d2fae5',
    icon: '🎤',
    title: 'Lead Speaker',
    body: 'Two-time District Level Speaker (2024 & 2025). Comfortable on stage.',
  },
  {
    bg: '#fae9ff',
    icon: '📸',
    title: 'Photographer',
    body: '3+ years of photography & videography across events and portraits.',
  },
  {
    bg: '#f5d1fe',
    icon: '🏏',
    title: 'Team Captain',
    body: 'Captain of the school cricket team — leadership on and off the field.',
  },
]

export default function About() {
  return (
    <section id="about" style={{ background: '#fff', padding: '80px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

        {/* Eyebrow */}
        <motion.div {...fadeUp(0)} className="section-eyebrow">
          <span className="chip">About Me</span>
        </motion.div>

        {/* Heading */}
        <motion.h2 {...fadeUp(0.05)} style={{
          fontWeight: 700, fontSize: 'clamp(32px,5vw,48px)', letterSpacing: '-0.96px',
          lineHeight: 1.16, color: '#000', textAlign: 'center', maxWidth: 640, margin: '0 auto 16px',
        }}>
          A visual storyteller & developer.
        </motion.h2>

        <motion.p {...fadeUp(0.1)} style={{
          fontWeight: 500, fontSize: 18, color: '#000', textAlign: 'center',
          maxWidth: 520, margin: '0 auto 64px', lineHeight: 1.56, letterSpacing: '-0.108px',
        }}>
          I blend photography, videography, and polished UI to craft immersive experiences.
          Currently interning at{' '}
          <span style={{ background: '#a3e635', border: '1px solid #000', borderRadius: 4, padding: '1px 6px' }}>ITfosters</span>
          {' '}and pursuing BTech CSIT at Dronacharya College, Greater Noida.
        </motion.p>

        {/* 2-col: portrait + bio */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 40, marginBottom: 64, alignItems: 'start' }}>

          {/* Portrait */}
          <motion.div {...fadeUp(0.1)} style={{ position: 'relative' }}>
            <div style={{
              border: '1px solid #000',
              borderRadius: 16,
              boxShadow: 'rgb(10,10,13) 4px 4px 0px 0px',
              overflow: 'hidden',
              aspectRatio: '3/4',
              background: '#b7eaf6',
            }}>
              <img
                src="/ansh-portrait.jpg"
                alt="Ansh Pandey"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
                loading="lazy"
              />
            </div>
            {/* Floating availability badge */}
            <div style={{
              position: 'absolute',
              top: -12, right: -12,
              background: '#a3e635',
              border: '1px solid #000',
              borderRadius: 100,
              padding: '6px 14px',
              boxShadow: 'rgb(10,10,13) 2px 2px 0px 0px',
              fontWeight: 500,
              fontSize: 13,
              color: '#000',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#15803d', display: 'inline-block' }} />
              Available for work
            </div>
          </motion.div>

          {/* Bio text */}
          <motion.div {...fadeUp(0.15)} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div>
              <h3 style={{ fontWeight: 700, fontSize: 24, letterSpacing: '-0.216px', color: '#000', marginBottom: 12 }}>
                Who I am
              </h3>
              <p style={{ fontWeight: 500, fontSize: 16, color: '#000', lineHeight: 1.6, letterSpacing: '-0.096px' }}>
                I'm <strong>Ansh Pandey</strong> — a creative professional who bridges the gap between
                visual artistry and modern web technology. I focus on clean composition,
                deliberate motion, and user-centered design.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <div className="stat-card">
                <div className="stat-value">10+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">2+ yrs</div>
                <div className="stat-label">Experience</div>
              </div>
            </div>
            <a
              href="https://drive.google.com/file/d/1nZgZPh-rr3AO2vpl5zwiAyCGD8UqzzdZ/view"
              target="_blank" rel="noopener noreferrer"
              className="btn-lime"
              style={{ alignSelf: 'flex-start', fontSize: 15 }}
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414A1 1 0 0119 7.414V19a2 2 0 01-2 2z"/>
              </svg>
              Download Résumé
            </a>
          </motion.div>
        </div>

        {/* Pastel achievement cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
          {PASTEL_CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              {...fadeUp(i * 0.08)}
              className="pastel-card"
              style={{ background: card.bg }}
            >
              <div style={{ fontSize: 24, marginBottom: 12 }}>{card.icon}</div>
              <h4 style={{ fontWeight: 700, fontSize: 20, letterSpacing: '-0.12px', color: '#000', marginBottom: 8 }}>{card.title}</h4>
              <p style={{ fontWeight: 500, fontSize: 15, color: '#000', lineHeight: 1.5 }}>{card.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
