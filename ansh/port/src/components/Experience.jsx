import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [activeTab, setActiveTab] = useState('experience')

  const timeline = [
    {
      type: 'experience',
      title: 'Full Stack Developer',
      company: 'Elegant AV Solution (Noida)',
      period: 'Jul 2025 – Present',
      description: 'Developing full-stack web applications for portable cabin and AV solution services. Designed database schemas and backend REST APIs to manage product listings and client inquiries. Digitized offline business workflows into scalable web-based systems.',
    },

    {
      type: 'experience',
      title: 'Full Stack Developer',
      company: 'Research Locker (Remote)',
      period: 'Jan 2025 – Jun 2025',
      description: 'Developed and maintained research-based web applications for academic users. Built secure authentication systems and RESTful APIs using Node.js and Express.js. Designed responsive frontend interfaces with React.js. Optimized database queries in MySQL.',
    },
    {
      type: 'education',
      title: 'B.Tech — Computer Science & IT',
      company: 'Dronacharya College of Engineering, Greater Noida (AKTU)',
      period: '2022 – Present',
      description: 'Pursuing BTech in CSIT. Hands-on coursework in DBMS, OOPS, Operating Systems, and Computer Networks.',
    },
    {
      type: 'education',
      title: 'Senior Secondary (Class XII)',
      company: 'CBSE Board',
      period: '2022',
      description: 'Completed Class XII with focus on Science and Mathematics.',
    },
    {
      type: 'education',
      title: 'Secondary (Class X)',
      company: 'CBSE Board',
      period: '2020',
      description: 'Completed Class X secondary education.',
    },
  ]

  const filtered = timeline.filter(t => t.type === activeTab)

  return (
    <section id="experience" className="py-32 md:py-40 relative overflow-hidden" style={{ background: 'var(--surface)' }}>
      <div className="bg-dots absolute inset-0 pointer-events-none opacity-25" aria-hidden />
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(212,162,78,0.22), transparent)' }}
      />
      <div
        className="absolute right-0 bottom-1/4 w-80 h-80 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(212,168,67,0.04) 0%, transparent 70%)', filter: 'blur(50px)' }}
      />

      <div ref={ref} className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <span className="pill mb-4 inline-flex">Timeline</span>
          <h2
            className="font-display font-black"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--text-1)' }}
          >
            Experience &amp; <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex gap-2 mb-10"
        >
          {['experience', 'education'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="px-5 py-2 text-sm font-semibold rounded-xl capitalize transition-all"
              style={{
                background: activeTab === tab ? 'var(--gold)' : 'var(--surface2)',
                color: activeTab === tab ? '#0a0d14' : 'var(--text-2)',
                border: '1px solid',
                borderColor: activeTab === tab ? 'var(--gold)' : 'var(--border)',
              }}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-5 top-0 bottom-0 w-px hidden md:block"
            style={{ background: 'linear-gradient(to bottom, var(--gold), var(--sky-dark), transparent)', opacity: 0.25 }}
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
          />

          <div className="space-y-8">
            {filtered.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -24 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + index * 0.1 }}
                className="relative md:pl-16"
              >
                {/* Dot */}
                <div
                  className="absolute left-3.5 top-6 w-3 h-3 rounded-full hidden md:block"
                  style={{
                    background: activeTab === 'experience' ? 'var(--gold)' : 'var(--sky)',
                    boxShadow: activeTab === 'experience'
                      ? '0 0 8px rgba(212,168,67,0.5)'
                      : '0 0 8px rgba(147,197,253,0.5)',
                  }}
                />

                <div
                  className="p-6 md:p-8 rounded-xl group transition-all duration-300"
                  style={{
                    background: 'var(--surface2)',
                    border: '1px solid var(--border)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = activeTab === 'experience'
                      ? 'rgba(212,168,67,0.25)' : 'rgba(147,197,253,0.2)'
                  }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)' }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3 className="text-lg font-bold" style={{ color: 'var(--text-1)' }}>{item.title}</h3>
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap"
                      style={{
                        background: activeTab === 'experience' ? 'rgba(212,168,67,0.1)' : 'rgba(147,197,253,0.08)',
                        color: activeTab === 'experience' ? 'var(--gold)' : 'var(--sky)',
                        border: `1px solid ${activeTab === 'experience' ? 'rgba(212,168,67,0.2)' : 'rgba(147,197,253,0.15)'}`,
                      }}
                    >
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm font-semibold mb-3"
                    style={{ color: activeTab === 'experience' ? 'var(--gold)' : 'var(--sky)' }}>
                    {item.company}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
