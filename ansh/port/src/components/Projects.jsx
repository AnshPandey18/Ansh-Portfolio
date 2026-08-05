import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
})

const PROJECTS = [
  {
    id: 10,
    title: 'Research Locker',
    category: 'Full Stack',
    year: '2025',
    tech: ['React', 'Tailwind CSS', 'AI Summaries', 'PayPal API', 'Google Analytics'],
    desc: 'Save articles, organize PDFs, generate AI summaries, and manage research effortlessly — all in one clean workspace. A full-featured research productivity tool with smart tagging and payment integration.',
    role: 'Full Stack Developer',
    image: '/projects/research_locker.jpg',
    github: '',
    live: 'https://researchlocker.co/',
    bg: '#dbeafe',
  },
  {
    id: 11,
    title: 'SubEx Club',
    category: 'Full Stack',
    year: '2025',
    tech: ['React', 'Tailwind CSS', 'Privacy-First Design', 'Google Analytics'],
    desc: 'Smart subscription management with privacy-first design. Track, manage, and optimize all your subscriptions in one place with an elegant, intuitive interface.',
    role: 'Full Stack Developer',
    image: '/projects/subex_club.jpg',
    github: '',
    live: 'https://subex.club/',
    bg: '#ede9fe',
  },
  {
    id: 1,
    title: 'CitySewa',
    category: 'Full Stack',
    year: '2025',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    desc: 'Platform bridging citizens and government authorities. Real-time complaint tracking, separate dashboards for citizens and authorities, and secure authentication.',
    role: 'Full Stack Developer',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com/AnshPandey18/CitySewa',
    live: '',
    bg: '#b7eaf6',
  },
  {
    id: 2,
    title: 'Trust Hire',
    category: 'Full Stack',
    year: '2024',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    desc: 'Freelancing platform designed to reduce platform fees. Job posting, bidding, freelancer profiles, and a clean REST backend.',
    role: 'Full Stack Developer',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com/AnshPandey18/Trust-Hire',
    live: '',
    bg: '#d2fae5',
  },
  {
    id: 3,
    title: 'Elegant AV Solution',
    category: 'Full Stack',
    year: '2025',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    desc: 'Digital platform for AV solutions and portable cabin services. Product management, inquiry handling, and digitized business workflows.',
    role: 'Full Stack Developer & Designer',
    image: '/projects/elegant_av.png',
    github: 'https://github.com/AnshPandey18',
    live: 'https://elegantavsolutionmain.vercel.app/',
    bg: '#fef3c8',
  },
  {
    id: 12,
    title: 'Frame With Ansh',
    category: 'Photography',
    year: '2024',
    tech: ['Photography', 'Videography', 'Photo Editing', 'Lightroom', 'Premiere Pro'],
    desc: 'A personal photography brand capturing events, portraits, and cinematic moments. 3+ years of experience shooting across formats with a distinctive visual style.',
    role: 'Photographer & Videographer',
    image: '/projects/framewithansh_collage.png',
    github: '',
    live: 'https://www.instagram.com/shooootwithme',
    bg: '#fae9ff',
  },
]

export default function Projects() {
  const [selected, setSelected] = useState(null)
  const [filter, setFilter] = useState('All')

  const categories = ['All', 'Full Stack', 'Photography']
  const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter)

  return (
    <section id="projects" style={{ background: '#fff', padding: '80px 0' }}>

      {/* Wavy top transition from fog */}
      <div className="wavy-divider" style={{ marginTop: -80, marginBottom: 0 }}>
        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display:'block', width:'100%' }}>
          <path d="M0 48C240 0 480 48 720 24C960 0 1200 48 1440 24V0H0V48Z" fill="#f5f5f5"/>
        </svg>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

        {/* Eyebrow */}
        <motion.div {...fadeUp(0)} className="section-eyebrow">
          <span className="chip">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#a3e635" stroke="#000" strokeWidth="1.5">
              <path d="M3 6h18M3 12h18M3 18h12"/>
            </svg>
            Portfolio
          </span>
        </motion.div>

        <motion.h2 {...fadeUp(0.05)} style={{
          fontWeight: 700, fontSize: 'clamp(32px,5vw,48px)', letterSpacing: '-0.96px',
          lineHeight: 1.16, color: '#000', textAlign: 'center', maxWidth: 560, margin: '0 auto 12px',
        }}>
          Featured Projects
        </motion.h2>
        <motion.p {...fadeUp(0.1)} style={{
          fontWeight: 500, fontSize: 16, color: '#737373', textAlign: 'center',
          maxWidth: 440, margin: '0 auto 32px',
        }}>
          A selection of my recent work — full-stack web apps and photography.
        </motion.p>

        {/* Filter tabs */}
        <motion.div {...fadeUp(0.12)} style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 48, flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '7px 20px',
                borderRadius: 100,
                border: '1px solid #000',
                background: filter === cat ? '#a3e635' : '#fff',
                color: '#000',
                fontWeight: filter === cat ? 700 : 500,
                fontSize: 14,
                cursor: 'pointer',
                boxShadow: filter === cat ? 'rgb(10,10,13) 2px 2px 0px 0px' : 'none',
                transition: 'all 0.15s ease',
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20 }}>
          {filtered.map((p, i) => (
            <motion.div
              key={p.id}
              {...fadeUp(i * 0.1)}
              onClick={() => setSelected(p)}
              style={{
                background: p.bg,
                border: '1px solid #000',
                borderRadius: 16,
                overflow: 'hidden',
                boxShadow: 'rgb(23,23,23) 4px 4px 0px 0px',
                cursor: 'pointer',
                transition: 'transform 0.15s ease, box-shadow 0.15s ease',
              }}
              whileHover={{ y: -4 }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = 'rgb(10,10,13) 6px 6px 0px 0px' }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'rgb(23,23,23) 4px 4px 0px 0px' }}
            >
              {/* Image */}
              <div style={{ height: 200, overflow: 'hidden', borderBottom: '1px solid #000', background: '#e5e5e5' }}>
                <img
                  src={p.image} alt={p.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  loading="lazy"
                />
              </div>
              {/* Info */}
              <div style={{ padding: 20 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                  <h3 style={{ fontWeight: 700, fontSize: 20, letterSpacing: '-0.12px', color: '#000' }}>{p.title}</h3>
                  <span style={{
                    background: '#fff', border: '1px solid #000', borderRadius: 100,
                    padding: '3px 10px', fontSize: 12, fontWeight: 500, color: '#000', flexShrink: 0,
                  }}>
                    {p.year}
                  </span>
                </div>
                <p style={{ fontWeight: 500, fontSize: 14, color: '#000', lineHeight: 1.5, marginBottom: 14 }}>
                  {p.desc.split('\n')[0]}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {p.tech.slice(0, 3).map(t => (
                    <span key={t} style={{
                      background: '#fff', border: '1px solid #000', borderRadius: 100,
                      padding: '3px 10px', fontSize: 12, fontWeight: 500, color: '#000',
                      boxShadow: 'rgb(10,10,13) 1px 1px 0px 0px',
                    }}>
                      {t}
                    </span>
                  ))}
                  {p.tech.length > 3 && (
                    <span style={{ fontSize: 12, fontWeight: 500, color: '#737373', padding: '3px 6px' }}>
                      +{p.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(6px)' }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.97 }}
              transition={{ duration: 0.28 }}
              style={{
                background: '#fff',
                border: '1px solid #000',
                borderRadius: 20,
                boxShadow: 'rgb(10,10,13) 6px 6px 0px 0px',
                width: '100%',
                maxWidth: 600,
                maxHeight: '88vh',
                overflowY: 'auto',
              }}
              onClick={e => e.stopPropagation()}
            >
              {/* Image */}
              <div style={{ height: 220, overflow: 'hidden', borderRadius: '20px 20px 0 0', borderBottom: '1px solid #000' }}>
                <img src={selected.image} alt={selected.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ padding: 28 }}>
                {/* Tags */}
                <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
                  <span style={{ background: '#a3e635', border: '1px solid #000', borderRadius: 100, padding: '4px 12px', fontSize: 13, fontWeight: 500 }}>{selected.category}</span>
                  <span style={{ background: '#f5f5f5', border: '1px solid #000', borderRadius: 100, padding: '4px 12px', fontSize: 13, fontWeight: 500 }}>{selected.year}</span>
                </div>
                <h2 style={{ fontWeight: 700, fontSize: 28, letterSpacing: '-0.56px', color: '#000', marginBottom: 6 }}>{selected.title}</h2>
                <p style={{ fontWeight: 500, fontSize: 14, color: '#737373', marginBottom: 16 }}>{selected.role}</p>
                <p style={{ fontWeight: 500, fontSize: 15, color: '#000', lineHeight: 1.6, marginBottom: 20 }}>{selected.desc}</p>

                <div style={{ marginBottom: 20 }}>
                  <p style={{ fontWeight: 700, fontSize: 13, color: '#000', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 10 }}>Tech Stack</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {selected.tech.map(t => (
                      <span key={t} style={{ background: '#f5f5f5', border: '1px solid #000', borderRadius: 100, padding: '4px 12px', fontSize: 13, fontWeight: 500, boxShadow: 'rgb(10,10,13) 1px 1px 0px 0px' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 10, paddingTop: 16, borderTop: '1px solid #e5e5e5' }}>
                  {selected.live && (
                    <a href={selected.live} target="_blank" rel="noopener noreferrer" className="btn-lime" style={{ fontSize: 14 }}>
                      Live Site ↗
                    </a>
                  )}
                  {selected.github && (
                    <a href={selected.github} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ fontSize: 14 }}>
                      GitHub →
                    </a>
                  )}
                  <button onClick={() => setSelected(null)} className="btn-ghost" style={{ fontSize: 14, marginLeft: 'auto' }}>
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
