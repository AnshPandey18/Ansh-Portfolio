import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
})

const CORE = [
  { name: 'Full Stack Dev',  pct: 92, bg: '#b9f0c0' },
  { name: 'Photography',     pct: 90, bg: '#b7eaf6' },
  { name: 'Videography',     pct: 85, bg: '#fae9ff' },
  { name: 'Photo Editing',   pct: 88, bg: '#fef3c8' },
  { name: 'Public Speaking', pct: 85, bg: '#f5d1fe' },
]

const CATS = [
  { title: 'Languages',       items: ['Java', 'JavaScript', 'C++', 'Python', 'C'],                                              bg: '#fef3c8' },
  { title: 'Frontend',        items: ['React.js', 'Next.js', 'Vue.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design'],  bg: '#d2fae5' },
  { title: 'Backend',         items: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'JDBC', 'Core Java'],                       bg: '#fae9ff' },
  { title: 'Databases',       items: ['MySQL', 'MongoDB', 'PostgreSQL'],                                                        bg: '#f5d1fe' },
  { title: 'Cloud & DevOps',  items: ['Docker', 'AWS EC2', 'AWS S3', 'Render', 'Vercel', 'CI/CD'],                             bg: '#b7eaf6' },
  { title: 'Dev Tools',       items: ['Git', 'GitHub', 'Postman', 'IntelliJ IDEA', 'VS Code'],                                 bg: '#b9f0c0' },
  { title: 'CS Fundamentals', items: ['DSA', 'DBMS', 'OS', 'Computer Networks', 'System Design'],                              bg: '#fef3c8' },
  { title: 'Creative',        items: ['Photography', 'Videography', 'Photo Editing', 'Lightroom', 'Premiere Pro'],             bg: '#f5d1fe' },
]

const MARQUEE_ITEMS = [
  'React.js', 'Next.js', 'Node.js', 'MongoDB', 'MySQL', 'Docker', 'AWS',
  'Tailwind CSS', 'JavaScript', 'Java', 'C++', 'REST APIs', 'Git', 'Vercel', 'Render',
  'Vue.js', 'PostgreSQL', 'CI/CD', 'Lightroom', 'Premiere Pro',
  'React.js', 'Next.js', 'Node.js', 'MongoDB', 'MySQL', 'Docker', 'AWS',
  'Tailwind CSS', 'JavaScript', 'Java', 'C++', 'REST APIs', 'Git', 'Vercel', 'Render',
  'Vue.js', 'PostgreSQL', 'CI/CD', 'Lightroom', 'Premiere Pro',
]

function SkillBar({ name, pct, bg, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: bg,
        border: '1px solid #000',
        borderRadius: 12,
        padding: '16px 20px',
        boxShadow: 'rgb(10,10,13) 2px 2px 0px 0px',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
        <span style={{ fontWeight: 700, fontSize: 15, color: '#000' }}>{name}</span>
        <span style={{ fontWeight: 500, fontSize: 13, color: '#000' }}>{pct}%</span>
      </div>
      <div style={{ height: 8, background: 'rgba(0,0,0,0.12)', borderRadius: 100, overflow: 'hidden' }}>
        <motion.div
          style={{ height: '100%', background: '#000', borderRadius: 100 }}
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: delay + 0.2, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" style={{ background: '#f5f5f5', padding: '80px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

        {/* Eyebrow */}
        <motion.div {...fadeUp(0)} className="section-eyebrow">
          <span className="chip">Skills & Expertise</span>
        </motion.div>

        <motion.h2 {...fadeUp(0.05)} style={{
          fontWeight: 700, fontSize: 'clamp(32px,5vw,48px)', letterSpacing: '-0.96px',
          lineHeight: 1.16, color: '#000', textAlign: 'center', maxWidth: 560, margin: '0 auto 12px',
        }}>
          What I bring to the table
        </motion.h2>
        <motion.p {...fadeUp(0.1)} style={{
          fontWeight: 500, fontSize: 16, color: '#737373', textAlign: 'center', maxWidth: 440,
          margin: '0 auto 56px', lineHeight: 1.6,
        }}>
          A mix of creative and technical skills built over years of real projects.
        </motion.p>

        {/* Core skill bars */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12, marginBottom: 56 }}>
          {CORE.map((s, i) => (
            <SkillBar key={s.name} name={s.name} pct={s.pct} bg={s.bg} delay={i * 0.08} />
          ))}
        </div>

        {/* Tech category grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: 48 }}>
          {CATS.map((cat, ci) => (
            <motion.div
              key={cat.title}
              {...fadeUp(ci * 0.06)}
              style={{
                background: cat.bg,
                border: '1px solid #000',
                borderRadius: 12,
                overflow: 'hidden',
                boxShadow: 'rgb(10,10,13) 2px 2px 0px 0px',
              }}
            >
              <div style={{
                padding: '10px 16px',
                borderBottom: '1px solid #000',
                fontWeight: 700,
                fontSize: 13,
                color: '#000',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}>
                {cat.title}
              </div>
              <div style={{ padding: '12px 16px', display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {cat.items.map(item => (
                  <span
                    key={item}
                    style={{
                      background: '#fff',
                      border: '1px solid #000',
                      borderRadius: 100,
                      padding: '4px 12px',
                      fontSize: 13,
                      fontWeight: 500,
                      color: '#000',
                      boxShadow: 'rgb(10,10,13) 1px 1px 0px 0px',
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee band */}
        <div
          className="marquee-wrap"
          style={{
            background: '#000',
            border: '1px solid #000',
            borderRadius: 12,
            padding: '14px 0',
          }}
        >
          <div className="marquee-track">
            {MARQUEE_ITEMS.map((t, i) => (
              <span
                key={i}
                style={{
                  color: i % 3 === 0 ? '#a3e635' : i % 3 === 1 ? '#b7eaf6' : '#fff',
                  fontWeight: 500,
                  fontSize: 14,
                  paddingRight: 40,
                  whiteSpace: 'nowrap',
                  letterSpacing: '-0.096px',
                }}
              >
                ✦ {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
