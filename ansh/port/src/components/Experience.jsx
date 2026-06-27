import { motion } from 'framer-motion'
import { useState } from 'react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
})

const WORK = [
  {
    title: 'Full Stack Developer',
    company: 'Elegant AV Solution',
    location: 'Noida',
    period: 'Jul 2025 – Present',
    desc: 'Building full-stack web apps for AV solutions and portable cabin services. Designed DB schemas and REST APIs. Digitized offline business workflows.',
    bg: '#b9f0c0',
  },
  {
    title: 'Full Stack Developer',
    company: 'Research Locker',
    location: 'Remote',
    period: 'Jan – Jun 2025',
    desc: 'Research-based web apps for academic users. Secure auth, RESTful APIs with Node/Express, responsive React frontends, optimized MySQL queries.',
    bg: '#b7eaf6',
  },
]

const EDU = [
  { title: 'B.Tech — CSIT', company: 'Dronacharya College of Engineering (AKTU)', period: '2022 – Present', desc: 'Pursuing BTech CSIT with coursework in DBMS, OOPS, OS, and Computer Networks.', bg: '#fef3c8' },
  { title: 'Senior Secondary (XII)', company: 'CBSE Board', period: '2022', desc: 'Completed with a focus on Science and Mathematics.', bg: '#d2fae5' },
  { title: 'Secondary (X)', company: 'CBSE Board', period: '2020', desc: 'Completed secondary education.', bg: '#fae9ff' },
]

function TimelineCard({ item, i, isWork }) {
  return (
    <motion.div
      {...fadeUp(i * 0.1)}
      style={{ position: 'relative', paddingLeft: 40, paddingBottom: 28 }}
    >
      {/* Dot */}
      <div style={{
        position: 'absolute', left: 4, top: 20,
        width: 14, height: 14, borderRadius: '50%',
        background: isWork ? '#a3e635' : '#b7eaf6',
        border: '2px solid #000',
        zIndex: 2,
      }} />
      {/* Line continues below (except last) */}
      <div style={{
        position: 'absolute', left: 10, top: 34, bottom: 0, width: 2,
        background: '#e5e5e5',
      }} />

      <div style={{
        background: item.bg,
        border: '1px solid #000',
        borderRadius: 16,
        padding: '20px 24px',
        boxShadow: 'rgb(10,10,13) 2px 2px 0px 0px',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, marginBottom: 6 }}>
          <h3 style={{ fontWeight: 700, fontSize: 18, letterSpacing: '-0.108px', color: '#000' }}>{item.title}</h3>
          <span style={{
            background: '#fff', border: '1px solid #000', borderRadius: 100,
            padding: '3px 10px', fontSize: 12, fontWeight: 500, color: '#000',
            whiteSpace: 'nowrap', flexShrink: 0,
            boxShadow: 'rgb(10,10,13) 1px 1px 0px 0px',
          }}>
            {item.period}
          </span>
        </div>
        <p style={{ fontWeight: 700, fontSize: 14, color: '#000', marginBottom: 8 }}>
          {item.company}{item.location ? ` · ${item.location}` : ''}
        </p>
        <p style={{ fontWeight: 500, fontSize: 14, color: '#333', lineHeight: 1.6 }}>{item.desc}</p>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const [tab, setTab] = useState('work')

  return (
    <section id="experience" style={{ background: '#f5f5f5', padding: '80px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

        {/* Eyebrow */}
        <motion.div {...fadeUp(0)} className="section-eyebrow">
          <span className="chip">Timeline</span>
        </motion.div>

        <motion.h2 {...fadeUp(0.05)} style={{
          fontWeight: 700, fontSize: 'clamp(32px,5vw,48px)', letterSpacing: '-0.96px',
          lineHeight: 1.16, color: '#000', textAlign: 'center', maxWidth: 560, margin: '0 auto 48px',
        }}>
          Experience & Education
        </motion.h2>

        {/* Tabs */}
        <motion.div {...fadeUp(0.1)} style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 48 }}>
          {['work', 'education'].map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: '8px 20px',
                borderRadius: 100,
                border: '1px solid #000',
                background: tab === t ? '#a3e635' : '#fff',
                color: '#000',
                fontWeight: tab === t ? 700 : 500,
                fontSize: 15,
                cursor: 'pointer',
                boxShadow: tab === t ? 'rgb(10,10,13) 2px 2px 0px 0px' : 'none',
                transition: 'all 0.15s ease',
              }}
            >
              {t === 'work' ? 'Work' : 'Education'}
            </button>
          ))}
        </motion.div>

        {/* Timeline */}
        <div style={{ maxWidth: 680, margin: '0 auto', position: 'relative' }}>
          {(tab === 'work' ? WORK : EDU).map((item, i) => (
            <TimelineCard key={item.title} item={item} i={i} isWork={tab === 'work'} />
          ))}
        </div>
      </div>
    </section>
  )
}
