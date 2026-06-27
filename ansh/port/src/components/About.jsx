import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
})

/* ── AP monogram (reused across site) ─────── */
const APLogo = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <path d="M18 25 Q8 50 20 75"  stroke="#a3e635" strokeWidth="3"  strokeLinecap="round" fill="none"/>
    <path d="M82 25 Q92 50 80 78" stroke="#a3e635" strokeWidth="3"  strokeLinecap="round" fill="none"/>
    <path d="M15 80 L38 20 L55 60" stroke="#a3e635" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M25 58 L48 58"        stroke="#a3e635" strokeWidth="5"  strokeLinecap="round" fill="none"/>
    <path d="M50 80 L50 22"        stroke="#a3e635" strokeWidth="7"  strokeLinecap="round" fill="none"/>
    <path d="M50 22 Q80 22 80 43 Q80 62 50 60" stroke="#a3e635" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
)

const PASTEL_CARDS = [
  {
    bg: '#fef3c8',
    title: 'AIR 94',
    body: 'All India Rank 94 in Gautam Buddha University Entrance Test.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
      </svg>
    ),
  },
  {
    bg: '#d2fae5',
    title: 'Lead Speaker',
    body: 'Two-time District Level Speaker (2024 & 2025). Comfortable on any stage.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 016 0v6a3 3 0 01-3 3z"/>
      </svg>
    ),
  },
  {
    bg: '#fae9ff',
    title: 'Photographer',
    body: '3+ years capturing moments — events, portraits, and cinematic videos.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
  },
  {
    bg: '#f5d1fe',
    title: 'Team Captain',
    body: 'Captain of the school cricket team — leading both on and off the field.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
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
          fontWeight: 700,
          fontSize: 'clamp(32px, 5vw, 48px)',
          letterSpacing: '-0.96px',
          lineHeight: 1.16,
          color: '#000',
          textAlign: 'center',
          maxWidth: 640,
          margin: '0 auto 16px',
        }}>
          A visual storyteller &amp; developer.
        </motion.h2>

        <motion.p {...fadeUp(0.1)} style={{
          fontWeight: 500, fontSize: 18, color: '#444',
          textAlign: 'center', maxWidth: 520,
          margin: '0 auto 64px', lineHeight: 1.56,
          letterSpacing: '-0.108px',
        }}>
          I blend photography, videography, and polished UI to craft immersive experiences.
          Currently interning at{' '}
          <span style={{ background: '#a3e635', border: '1px solid #000', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>
            ITfosters
          </span>
          {' '}and pursuing BTech CSIT at Dronacharya College, Greater Noida.
        </motion.p>

        {/* 2-col: portrait + bio */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 48,
          marginBottom: 64,
          alignItems: 'start',
        }}>

          {/* ── Portrait ── */}
          <motion.div {...fadeUp(0.1)} style={{ position: 'relative' }}>
            {/* Offset decorative background */}
            <div style={{
              position: 'absolute',
              inset: 0,
              transform: 'translate(10px, 10px)',
              background: '#b9f0c0',
              border: '1px solid #000',
              borderRadius: 20,
              zIndex: 0,
            }} />

            <motion.div
              style={{
                position: 'relative',
                zIndex: 1,
                border: '1px solid #000',
                borderRadius: 20,
                boxShadow: 'rgb(10,10,13) 4px 4px 0px 0px',
                overflow: 'hidden',
                aspectRatio: '3/4',
                background: '#b7eaf6',
              }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <img
                src="/ansh-portrait.jpg"
                alt="Ansh Pandey"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
                loading="lazy"
              />
              {/* Bottom name strip */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'rgba(255,255,255,0.92)',
                backdropFilter: 'blur(8px)',
                borderTop: '1px solid #000',
                padding: '12px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
              }}>
                <APLogo size={28} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15, color: '#000', letterSpacing: '-0.3px' }}>Ansh Pandey</div>
                  <div style={{ fontWeight: 500, fontSize: 12, color: '#737373' }}>Full Stack Dev · Photographer</div>
                </div>
              </div>
            </motion.div>

            {/* Floating availability badge */}
            <motion.div
              style={{
                position: 'absolute', top: -14, right: -14, zIndex: 2,
                background: '#a3e635', border: '1px solid #000',
                borderRadius: 100, padding: '6px 14px',
                boxShadow: 'rgb(10,10,13) 2px 2px 0px 0px',
                fontWeight: 500, fontSize: 13, color: '#000',
                display: 'flex', alignItems: 'center', gap: 6,
              }}
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#15803d', display: 'inline-block' }} />
              Available for work
            </motion.div>
          </motion.div>

          {/* ── Bio text ── */}
          <motion.div {...fadeUp(0.15)} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div>
              <h3 style={{
                fontWeight: 700, fontSize: 24, letterSpacing: '-0.216px',
                color: '#000', marginBottom: 12, lineHeight: 1.3,
              }}>
                Who I am
              </h3>
              <p style={{ fontWeight: 500, fontSize: 16, color: '#333', lineHeight: 1.7, letterSpacing: '-0.096px' }}>
                I'm <strong>Ansh Pandey</strong> — a creative professional who bridges the gap between
                visual artistry and modern web technology. I focus on clean composition,
                deliberate motion, and user-centered design that communicates and converts.
              </p>
            </div>

            <p style={{ fontWeight: 500, fontSize: 15, color: '#555', lineHeight: 1.7, borderLeft: '3px solid #a3e635', paddingLeft: 16 }}>
              "Design is not just what it looks like — design is how it works."
              I build things that look great and actually function at a high level.
            </p>

            {/* Stat cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {[
                { value: '10+',    label: 'Projects Completed' },
                { value: '2+ yrs', label: 'Experience' },
                { value: '3+',     label: 'Internships' },
                { value: 'AIR 94', label: 'GBU Rank' },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  className="stat-card"
                  whileHover={{ y: -3, boxShadow: 'rgb(10,10,13) 3px 3px 0px 0px' }}
                  style={{ boxShadow: 'rgb(10,10,13) 2px 2px 0px 0px', transition: 'box-shadow 0.15s' }}
                >
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Resume CTA */}
            <a
              href="https://drive.google.com/file/d/1nZgZPh-rr3AO2vpl5zwiAyCGD8UqzzdZ/view"
              target="_blank" rel="noopener noreferrer"
              className="btn-lime"
              style={{ alignSelf: 'flex-start', fontSize: 15, padding: '11px 26px' }}
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414A1 1 0 0119 7.414V19a2 2 0 01-2 2z"/>
              </svg>
              Download Résumé
            </a>
          </motion.div>
        </div>

        {/* ── Pastel achievement cards ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 16,
        }}>
          {PASTEL_CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              {...fadeUp(i * 0.07)}
              className="pastel-card"
              style={{ background: card.bg, cursor: 'default' }}
              whileHover={{ y: -4, boxShadow: 'rgb(10,10,13) 4px 4px 0px 0px' }}
            >
              <div style={{ marginBottom: 12 }}>{card.icon}</div>
              <h4 style={{ fontWeight: 700, fontSize: 20, letterSpacing: '-0.12px', color: '#000', marginBottom: 8 }}>
                {card.title}
              </h4>
              <p style={{ fontWeight: 500, fontSize: 15, color: '#222', lineHeight: 1.5 }}>{card.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
