import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
})

const WORK = [
  {
    id: 'gotechfy',
    title: 'Full Stack Developer Intern',
    company: 'Gotechfy',
    location: 'Remote',
    period: 'Jun 2026 – Aug 2026',
    bullets: [
      'Engineered and shipped subex.club — a full-stack SaaS dashboard using React.js, Node.js/Express, and SQL for relational data modeling.',
      'Containerized the app with Docker; deployed frontend on Vercel and backend on Render with production env variables and build pipelines.',
      'Designed and implemented RESTful APIs powering core dashboard functionality with real-time data rendering.',
      'Structured and optimized SQL database schemas for efficient querying and scalable data management.',
    ],
    bg: '#fae9ff',
    highlight: true,
  },
  {
    id: 'itfosters-research',
    title: 'Full Stack Developer Intern',
    company: 'IT Fosters',
    location: 'Remote',
    period: 'Oct 2025 – Dec 2025',
    project: 'Research Locker',
    bullets: [
      'Developed backend services for a research SaaS platform supporting academic workflows, user management, and document operations.',
      'Built 10+ REST API endpoints with authentication middleware, input validation, and centralized error handling.',
      'Optimized MySQL query performance via indexing and query restructuring, reducing average data retrieval latency by ~35%.',
      'Containerized backend with Docker and deployed on Render with automated CI/CD pipelines.',
    ],
    bg: '#b7eaf6',
    highlight: true,
  },
]

const EDU = [
  {
    id: 'btech',
    title: 'B.Tech — Computer Science & IT',
    company: 'Dronacharya College of Engineering (AKTU)',
    period: '2022 – Present',
    location: 'Greater Noida, India',
    bullets: [
      'Pursuing BTech CSIT with coursework in DBMS, OOP, OS, Computer Networks, and System Design.',
    ],
    bg: '#fef3c8',
  },
  {
    id: 'xii',
    title: 'Senior Secondary (XII)',
    company: 'CBSE Board',
    period: '2022',
    bullets: ['Completed with a focus on Science and Mathematics.'],
    bg: '#d2fae5',
  },
  {
    id: 'x',
    title: 'Secondary (X)',
    company: 'CBSE Board',
    period: '2020',
    bullets: ['Completed secondary education.'],
    bg: '#fae9ff',
  },
]

function TimelineCard({ item, i, isWork }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      style={{ position: 'relative', paddingLeft: 40, paddingBottom: 28 }}
    >
      {/* Timeline dot */}
      <div style={{
        position: 'absolute', left: 4, top: 22,
        width: 14, height: 14, borderRadius: '50%',
        background: isWork ? '#a3e635' : '#b7eaf6',
        border: '2px solid #000',
        zIndex: 2,
        boxShadow: isWork ? '0 0 0 3px rgba(163,230,53,0.2)' : '0 0 0 3px rgba(183,234,246,0.3)',
      }} />

      {/* Vertical line */}
      <div style={{
        position: 'absolute', left: 10, top: 36, bottom: 0, width: 2,
        background: 'linear-gradient(to bottom, #e5e5e5, transparent)',
      }} />

      {/* Card */}
      <motion.div
        style={{
          background: item.bg,
          border: '1px solid #000',
          borderRadius: 16,
          padding: '20px 24px',
          boxShadow: 'rgb(10,10,13) 2px 2px 0px 0px',
        }}
        whileHover={{ y: -3, boxShadow: 'rgb(10,10,13) 3px 3px 0px 0px' }}
        transition={{ duration: 0.15 }}
      >
        {/* Title + period row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, marginBottom: 8 }}>
          <h3 style={{ fontWeight: 700, fontSize: 18, letterSpacing: '-0.108px', color: '#000' }}>
            {item.title}
          </h3>
          <span style={{
            background: '#fff', border: '1px solid #000', borderRadius: 100,
            padding: '3px 10px', fontSize: 12, fontWeight: 500, color: '#000',
            whiteSpace: 'nowrap', flexShrink: 0,
            boxShadow: 'rgb(10,10,13) 1px 1px 0px 0px',
          }}>
            {item.period}
          </span>
        </div>

        {/* Company — highlighted */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12, flexWrap: 'wrap' }}>
          <span style={{
            background: '#000', color: '#a3e635',
            borderRadius: 100, padding: '3px 12px',
            fontSize: 13, fontWeight: 700, letterSpacing: '-0.1px',
          }}>
            {item.company}
          </span>
          {item.location && (
            <span style={{ fontSize: 13, fontWeight: 500, color: '#555' }}>
              · {item.location}
            </span>
          )}
          {item.project && (
            <span style={{
              background: '#a3e635', border: '1px solid #000', borderRadius: 100,
              padding: '2px 10px', fontSize: 12, fontWeight: 700, color: '#000',
              boxShadow: 'rgb(10,10,13) 1px 1px 0px 0px',
            }}>
              Project: {item.project}
            </span>
          )}
        </div>

        {/* Bullet points */}
        <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7 }}>
          {item.bullets.map((b, bi) => (
            <li key={bi} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
              <span style={{
                width: 6, height: 6, borderRadius: '50%',
                background: isWork ? '#15803d' : '#0369a1',
                flexShrink: 0, marginTop: 6,
              }} />
              <span style={{ fontWeight: 500, fontSize: 14, color: '#333', lineHeight: 1.6 }}>{b}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  )
}

export default function Experience() {
  const [tab, setTab] = useState('work')

  const items = tab === 'work' ? WORK : EDU

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
          Experience &amp; Education
        </motion.h2>

        {/* Tab switcher */}
        <motion.div {...fadeUp(0.1)} style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 48 }}>
          {[
            { key: 'work',      label: 'Work' },
            { key: 'education', label: 'Education' },
          ].map(t => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              style={{
                padding: '8px 24px',
                borderRadius: 100,
                border: '1px solid #000',
                background: tab === t.key ? '#a3e635' : '#fff',
                color: '#000',
                fontWeight: tab === t.key ? 700 : 500,
                fontSize: 15,
                cursor: 'pointer',
                boxShadow: tab === t.key ? 'rgb(10,10,13) 2px 2px 0px 0px' : 'none',
                transition: 'all 0.15s ease',
              }}
            >
              {t.label}
            </button>
          ))}
        </motion.div>

        {/* Timeline — key forces full remount on tab switch */}
        <div style={{ maxWidth: 680, margin: '0 auto', position: 'relative' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              {items.map((item, i) => (
                <TimelineCard
                  key={item.id}
                  item={item}
                  i={i}
                  isWork={tab === 'work'}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}
