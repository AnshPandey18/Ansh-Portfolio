import { motion } from 'framer-motion'

/* ── Inline SVG illustrations ─────────────── */
const CloudSVG = ({ size = 80, style = {} }) => (
  <svg width={size} height={size * 0.6} viewBox="0 0 80 48" fill="none" style={style}>
    <ellipse cx="40" cy="30" rx="30" ry="16" fill="#fff" stroke="#000" strokeWidth="1.5"/>
    <ellipse cx="28" cy="24" rx="16" ry="14" fill="#fff" stroke="#000" strokeWidth="1.5"/>
    <ellipse cx="52" cy="26" rx="14" ry="12" fill="#fff" stroke="#000" strokeWidth="1.5"/>
  </svg>
)

const FishSVG = ({ size = 36, style = {} }) => (
  <svg width={size} height={size * 0.7} viewBox="0 0 36 25" fill="none" style={style}>
    <path d="M2 12.5C2 12.5 9 3 18 3C26 3 32 8 32 12.5C32 17 26 22 18 22C9 22 2 12.5 2 12.5Z" fill="#b7eaf6" stroke="#000" strokeWidth="1.5"/>
    <circle cx="25" cy="9" r="1.5" fill="#000"/>
    <path d="M32 6L36 3M32 19L36 22" stroke="#000" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

const StarSVG = ({ size = 24, style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#a3e635" stroke="#000" strokeWidth="1.5" style={style}>
    <path d="M12 2L14.4 9.2H22L15.8 13.6L18.2 20.8L12 16.4L5.8 20.8L8.2 13.6L2 9.2H9.6L12 2Z"/>
  </svg>
)

const scrollTo = href => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section
      id="hero"
      style={{ background: '#b7eaf6', position: 'relative', overflow: 'hidden', paddingBottom: 0 }}
    >
      {/* Floating cloud illustrations */}
      <CloudSVG size={110} style={{ position:'absolute', top:40, left:'6%', opacity:0.9, animation:'float-cloud 9s ease-in-out infinite' }} />
      <CloudSVG size={72}  style={{ position:'absolute', top:60, right:'8%', opacity:0.85, animation:'float-cloud 12s ease-in-out infinite 2s' }} />
      <CloudSVG size={90}  style={{ position:'absolute', top:130, right:'22%', opacity:0.7, animation:'float-cloud 10s ease-in-out infinite 4s' }} />
      <CloudSVG size={60}  style={{ position:'absolute', top:20, left:'38%', opacity:0.65, animation:'float-cloud 14s ease-in-out infinite 1s' }} />
      <FishSVG  size={44}  style={{ position:'absolute', bottom:120, left:'12%', animation:'float-fish 7s ease-in-out infinite' }} />
      <FishSVG  size={32}  style={{ position:'absolute', bottom:180, right:'15%', animation:'float-fish 9s ease-in-out infinite 2s' }} />
      <StarSVG  size={28}  style={{ position:'absolute', top:80, left:'28%', animation:'float-cloud 8s ease-in-out infinite 3s' }} />
      <StarSVG  size={20}  style={{ position:'absolute', top:50, right:'32%', animation:'float-cloud 11s ease-in-out infinite 1s' }} />

      {/* Content */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 24px 60px', position: 'relative', zIndex: 10, textAlign: 'center' }}>

        {/* Eyebrow chip */}
        <motion.div {...fadeUp(0)} className="section-eyebrow">
          <span className="chip">
            <FishSVG size={14} style={{ display:'inline' }} />
            Visual Storyteller & Full-Stack Developer
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.1)}
          style={{
            fontWeight: 700,
            fontSize: 'clamp(40px, 8vw, 64px)',
            lineHeight: 1.14,
            letterSpacing: '-1.344px',
            color: '#000',
            maxWidth: 760,
            margin: '0 auto 20px',
          }}
        >
          Crafting experiences through code & camera
        </motion.h1>

        {/* Sub */}
        <motion.p
          {...fadeUp(0.2)}
          style={{
            fontWeight: 500,
            fontSize: 18,
            lineHeight: 1.56,
            letterSpacing: '-0.108px',
            color: '#000',
            maxWidth: 560,
            margin: '0 auto 36px',
          }}
        >
          I'm <strong>Ansh Pandey</strong> — photographer, videographer, full-stack developer
          and lead speaker from Greater Noida, India.
        </motion.p>

        {/* CTA row */}
        <motion.div
          {...fadeUp(0.3)}
          style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 56 }}
        >
          <button onClick={() => scrollTo('#projects')} className="btn-lime">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7"/>
            </svg>
            View Projects
          </button>
          <button onClick={() => scrollTo('#contact')} className="btn-ghost">
            Get in Touch
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </button>
          <a
            href="https://drive.google.com/file/d/1nZgZPh-rr3AO2vpl5zwiAyCGD8UqzzdZ/view"
            target="_blank" rel="noopener noreferrer"
            className="btn-ghost"
          >
            Résumé ↗
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          {...fadeUp(0.4)}
          style={{
            display: 'flex',
            gap: 0,
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {[
            { v: '10+', l: 'Projects completed' },
            { v: '2+',  l: 'Years of experience' },
            { v: '3+',  l: 'Internships' },
            { v: 'AIR 94', l: 'GBU Entrance Rank' },
          ].map((s, i) => (
            <div
              key={s.l}
              style={{
                background: i % 2 === 0 ? '#fff' : '#a3e635',
                border: '1px solid #000',
                borderLeft: i > 0 ? 'none' : '1px solid #000',
                padding: '16px 28px',
                textAlign: 'center',
              }}
            >
              <div style={{ fontWeight: 700, fontSize: 28, letterSpacing: '-0.56px', color: '#000', lineHeight: 1.2 }}>{s.v}</div>
              <div style={{ fontWeight: 500, fontSize: 13, color: '#000', marginTop: 2 }}>{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Wavy bottom divider */}
      <div className="wavy-divider" style={{ marginTop: -2 }}>
        <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display:'block', width:'100%' }}>
          <path d="M0 0C240 64 480 0 720 32C960 64 1200 0 1440 32V64H0V0Z" fill="#fff"/>
        </svg>
      </div>
    </section>
  )
}
