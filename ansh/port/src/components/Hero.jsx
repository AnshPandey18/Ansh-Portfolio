import { motion, useAnimationFrame } from 'framer-motion'
import { useRef, useState } from 'react'

/* ──────────────────────────────────────────
   AP Monogram SVG (same as nav, larger)
────────────────────────────────────────── */
const APLogo = ({ size = 80 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 25 Q8 50 20 75"  stroke="#a3e635" strokeWidth="3"  strokeLinecap="round" fill="none"/>
    <path d="M82 25 Q92 50 80 78" stroke="#a3e635" strokeWidth="3"  strokeLinecap="round" fill="none"/>
    <path d="M15 80 L38 20 L55 60" stroke="#a3e635" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M25 58 L48 58"        stroke="#a3e635" strokeWidth="5"  strokeLinecap="round" fill="none"/>
    <path d="M50 80 L50 22"        stroke="#a3e635" strokeWidth="7"  strokeLinecap="round" fill="none"/>
    <path d="M50 22 Q80 22 80 43 Q80 62 50 60" stroke="#a3e635" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
)

/* ── Cloud SVG ── */
const CloudSVG = ({ size = 80, fill = '#fff', opacity = 1, style = {} }) => (
  <svg width={size} height={size * 0.62} viewBox="0 0 80 50" fill="none" style={{ opacity, ...style }}>
    <ellipse cx="40" cy="32" rx="28" ry="14" fill={fill} stroke="#000" strokeWidth="1.2"/>
    <ellipse cx="27" cy="26" rx="15" ry="13" fill={fill} stroke="#000" strokeWidth="1.2"/>
    <ellipse cx="54" cy="27" rx="13" ry="11" fill={fill} stroke="#000" strokeWidth="1.2"/>
  </svg>
)

/* ── Star / sparkle ── */
const Sparkle = ({ size = 20, color = '#a3e635', style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke="#000" strokeWidth="1" style={style}>
    <path d="M12 2 L13.5 9.5 L21 12 L13.5 14.5 L12 22 L10.5 14.5 L3 12 L10.5 9.5 Z"/>
  </svg>
)

/* ── Camera icon ── */
const CameraIcon = ({ size = 36, style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 40 36" fill="none" style={style}>
    <rect x="2" y="8" width="36" height="26" rx="4" fill="#fef3c8" stroke="#000" strokeWidth="1.5"/>
    <circle cx="20" cy="21" r="8" fill="#fff" stroke="#000" strokeWidth="1.5"/>
    <circle cx="20" cy="21" r="4" fill="#b7eaf6" stroke="#000" strokeWidth="1"/>
    <rect x="14" y="2" width="12" height="8" rx="2" fill="#fef3c8" stroke="#000" strokeWidth="1.5"/>
    <circle cx="32" cy="14" r="2" fill="#a3e635" stroke="#000" strokeWidth="1"/>
  </svg>
)

/* ── Code bracket icon ── */
const CodeIcon = ({ size = 36, style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" style={style}>
    <rect x="2" y="2" width="36" height="36" rx="8" fill="#d2fae5" stroke="#000" strokeWidth="1.5"/>
    <path d="M14 14 L8 20 L14 26" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M26 14 L32 20 L26 26" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 11 L18 29" stroke="#a3e635" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

/* ── Mic icon ── */
const MicIcon = ({ size = 32, style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 36 40" fill="none" style={style}>
    <rect x="10" y="2" width="16" height="22" rx="8" fill="#fae9ff" stroke="#000" strokeWidth="1.5"/>
    <path d="M4 20 Q4 34 18 34 Q32 34 32 20" stroke="#000" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <line x1="18" y1="34" x2="18" y2="40" stroke="#000" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="10" y1="40" x2="26" y2="40" stroke="#000" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="18" cy="13" r="3" fill="#a3e635" stroke="#000" strokeWidth="1"/>
  </svg>
)

/* ── Animated background blobs (CSS driven) ── */
function AnimatedBlobs() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }} aria-hidden>
      {/* Large primary blob — lime */}
      <div style={{
        position: 'absolute', width: 500, height: 500,
        borderRadius: '60% 40% 70% 30% / 50% 60% 40% 50%',
        background: 'radial-gradient(circle at 40% 40%, rgba(163,230,53,0.28) 0%, rgba(163,230,53,0.05) 70%)',
        top: '-10%', right: '-5%',
        animation: 'blob-morph-1 12s ease-in-out infinite',
        filter: 'blur(2px)',
      }}/>
      {/* Secondary blob — sky */}
      <div style={{
        position: 'absolute', width: 420, height: 420,
        borderRadius: '40% 60% 30% 70% / 60% 40% 60% 40%',
        background: 'radial-gradient(circle at 60% 60%, rgba(183,234,246,0.6) 0%, rgba(183,234,246,0.1) 70%)',
        bottom: '5%', left: '-8%',
        animation: 'blob-morph-2 15s ease-in-out infinite',
        filter: 'blur(1px)',
      }}/>
      {/* Accent blob — buttercream */}
      <div style={{
        position: 'absolute', width: 280, height: 280,
        borderRadius: '70% 30% 50% 50% / 40% 60% 40% 60%',
        background: 'radial-gradient(circle, rgba(254,243,200,0.7) 0%, rgba(254,243,200,0.1) 70%)',
        top: '30%', left: '15%',
        animation: 'blob-morph-3 18s ease-in-out infinite',
      }}/>
      {/* Tiny mint blob */}
      <div style={{
        position: 'absolute', width: 200, height: 200,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(210,250,229,0.65) 0%, transparent 70%)',
        top: '10%', left: '45%',
        animation: 'blob-drift 10s ease-in-out infinite 3s',
      }}/>
    </div>
  )
}

/* ── Animated dot grid ── */
function DotGrid() {
  return (
    <div style={{
      position: 'absolute', inset: 0, pointerEvents: 'none',
      backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.12) 1px, transparent 1px)',
      backgroundSize: '28px 28px',
      animation: 'grid-drift 20s linear infinite',
    }} aria-hidden/>
  )
}

const scrollTo = href => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-bg-animate"
      style={{
        background: 'linear-gradient(145deg, #c8f0fa 0%, #b7eaf6 25%, #d2fae5 50%, #c4f0a0 75%, #b7eaf6 100%)',
        position: 'relative',
        overflow: 'hidden',
        paddingBottom: 0,
      }}
    >
      {/* Animated background layers */}
      <AnimatedBlobs />
      <DotGrid />

      {/* ── Floating decorative illustrations ── */}

      {/* Clouds */}
      <motion.div style={{ position:'absolute', top:32, left:'5%' }}
        animate={{ y:[0,-14,0], x:[0,6,0] }} transition={{ duration:9, repeat:Infinity, ease:'easeInOut' }}>
        <CloudSVG size={120} opacity={0.95} />
      </motion.div>
      <motion.div style={{ position:'absolute', top:50, right:'7%' }}
        animate={{ y:[0,-10,0], x:[0,-5,0] }} transition={{ duration:11, repeat:Infinity, ease:'easeInOut', delay:2 }}>
        <CloudSVG size={85} opacity={0.85} />
      </motion.div>
      <motion.div style={{ position:'absolute', top:140, right:'24%' }}
        animate={{ y:[0,-8,0] }} transition={{ duration:13, repeat:Infinity, ease:'easeInOut', delay:4 }}>
        <CloudSVG size={68} opacity={0.7} />
      </motion.div>
      <motion.div style={{ position:'absolute', top:18, left:'40%' }}
        animate={{ y:[0,-11,0], x:[0,4,0] }} transition={{ duration:10, repeat:Infinity, ease:'easeInOut', delay:1 }}>
        <CloudSVG size={56} opacity={0.6} />
      </motion.div>

      {/* Camera — left float */}
      <motion.div style={{ position:'absolute', top:'18%', left:'3%' }}
        animate={{ y:[0,-10,0], rotate:[0,4,0] }}
        transition={{ duration:7, repeat:Infinity, ease:'easeInOut' }}>
        <CameraIcon size={52} />
      </motion.div>

      {/* Code bracket — right float */}
      <motion.div style={{ position:'absolute', top:'22%', right:'4%' }}
        animate={{ y:[0,-8,0], rotate:[0,-3,0] }}
        transition={{ duration:8, repeat:Infinity, ease:'easeInOut', delay:1.5 }}>
        <CodeIcon size={50} />
      </motion.div>

      {/* Mic — bottom-left */}
      <motion.div style={{ position:'absolute', bottom:'22%', left:'9%' }}
        animate={{ y:[0,-12,0], rotate:[0,5,0] }}
        transition={{ duration:9, repeat:Infinity, ease:'easeInOut', delay:3 }}>
        <MicIcon size={44} />
      </motion.div>

      {/* Sparkles */}
      {[
        { top:'8%',  left:'20%', size:22, color:'#a3e635', delay:0   },
        { top:'12%', right:'18%', size:18, color:'#fbbf25', delay:1.2 },
        { top:'55%', left:'6%',  size:16, color:'#a3e635', delay:2.4 },
        { top:'35%', right:'10%',size:14, color:'#fbbf25', delay:0.8 },
        { top:'70%', right:'28%',size:20, color:'#a3e635', delay:1.6 },
        { top:'20%', left:'55%', size:12, color:'#fbbf25', delay:3   },
      ].map((s, i) => (
        <motion.div key={i}
          style={{ position:'absolute', top:s.top, left:s.left, right:s.right }}
          animate={{ scale:[1, 1.4, 1], rotate:[0, 180, 360], opacity:[0.7,1,0.7] }}
          transition={{ duration:4+i*0.5, repeat:Infinity, ease:'easeInOut', delay:s.delay }}
        >
          <Sparkle size={s.size} color={s.color} />
        </motion.div>
      ))}

      {/* AP Logo watermark — large decorative, behind content */}
      <div style={{
        position: 'absolute',
        right: '-2%',
        bottom: '8%',
        opacity: 0.06,
        pointerEvents: 'none',
      }}>
        <APLogo size={320} />
      </div>

      {/* ── Main content ── */}
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        padding: '96px 24px 64px',
        position: 'relative', zIndex: 10, textAlign: 'center',
      }}>

        {/* AP Logo + name badge above headline */}
        <motion.div {...fadeUp(0)} style={{ display:'flex', justifyContent:'center', marginBottom:28 }}>
          <motion.div
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 14,
              background: '#fff', border: '1px solid #000',
              borderRadius: 100, padding: '8px 20px 8px 10px',
              boxShadow: 'rgb(10,10,13) 2px 2px 0px 0px',
            }}
            whileHover={{ scale: 1.04 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            <APLogo size={40} />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontWeight: 700, fontSize: 16, color: '#000', letterSpacing: '-0.3px', lineHeight: 1.2 }}>
                Ansh Pandey
              </div>
              <div style={{ fontWeight: 500, fontSize: 12, color: '#737373', display: 'flex', alignItems: 'center', gap: 4 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#15803d', display: 'inline-block' }} />
                Available for work
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Eyebrow chip */}
        <motion.div {...fadeUp(0.08)} className="section-eyebrow">
          <span className="chip" style={{ fontSize: 13 }}>
            ✦ Photographer · Developer · Videographer · Speaker
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.16)}
          style={{
            fontWeight: 700,
            fontSize: 'clamp(38px, 7.5vw, 68px)',
            lineHeight: 1.1,
            letterSpacing: '-1.344px',
            color: '#000',
            maxWidth: 800,
            margin: '0 auto 20px',
          }}
        >
          Crafting experiences<br />
          through{' '}
          <span style={{
            background: 'linear-gradient(135deg, #15803d, #a3e635)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            code
          </span>
          {' '}&{' '}
          <span style={{
            background: 'linear-gradient(135deg, #0369a1, #38bdf8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            camera
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          {...fadeUp(0.24)}
          style={{
            fontWeight: 500, fontSize: 18, lineHeight: 1.6,
            letterSpacing: '-0.108px', color: '#222',
            maxWidth: 520, margin: '0 auto 40px',
          }}
        >
          I'm <strong>Ansh Pandey</strong> — building digital products, capturing moments,
          and telling stories that leave an impression.
        </motion.p>

        {/* CTA row */}
        <motion.div
          {...fadeUp(0.32)}
          style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap', marginBottom:64 }}
        >
          <motion.button
            onClick={() => scrollTo('#projects')}
            className="btn-lime"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{ fontSize: 16, padding: '12px 28px' }}
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7"/>
            </svg>
            View Projects
          </motion.button>
          <motion.button
            onClick={() => scrollTo('#contact')}
            className="btn-ghost"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{ fontSize: 16, padding: '12px 28px' }}
          >
            Get in Touch
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </motion.button>
          <motion.a
            href="https://drive.google.com/file/d/1_DaxCcJ0jvQzgSewvwVAasrq_yU5Z7Tk/view?usp=drive_link"
            target="_blank" rel="noopener noreferrer"
            className="btn-ghost"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{ fontSize: 16, padding: '12px 28px' }}
          >
            Résumé ↗
          </motion.a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          {...fadeUp(0.4)}
          style={{ display:'flex', justifyContent:'center', flexWrap:'wrap' }}
        >
          {[
            { v: '10+',    l: 'Projects completed' },
            { v: '2+',     l: 'Years of experience' },
            { v: '3+',     l: 'Internships' },
            { v: 'AIR 94', l: 'Gautam Buddha University Entrance Test Rank' },
          ].map((s, i) => (
            <motion.div
              key={s.l}
              whileHover={{ y: -3, boxShadow: 'rgb(10,10,13) 3px 3px 0px 0px' }}
              style={{
                background: i % 2 === 0 ? '#fff' : '#a3e635',
                border: '1px solid #000',
                borderLeft: i > 0 ? 'none' : '1px solid #000',
                padding: '18px 32px',
                textAlign: 'center',
                cursor: 'default',
                transition: 'box-shadow 0.15s ease',
              }}
            >
              <div style={{ fontWeight: 700, fontSize: 28, letterSpacing: '-0.56px', color: '#000', lineHeight: 1.2 }}>{s.v}</div>
              <div style={{ fontWeight: 500, fontSize: 13, color: '#000', marginTop: 3 }}>{s.l}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Wavy bottom divider — into white */}
      <div className="wavy-divider" style={{ marginTop: -2 }}>
        <svg viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display:'block', width:'100%' }}>
          <path d="M0 0C180 72 360 0 540 36C720 72 900 0 1080 36C1260 72 1350 18 1440 36V72H0V0Z" fill="#ffffff"/>
        </svg>
      </div>
    </section>
  )
}
