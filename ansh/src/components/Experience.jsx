import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
}

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const experience = [
    {
      type: 'work',
      title: 'Software Development Intern',
      company: 'ITfosters',
      period: 'Present',
      description:
        'Gaining hands-on experience in software development and industry practices, working on real-world projects.',
    },
  ]

  const education = [
    {
      type: 'edu',
      title: 'BTech — CSIT',
      company: 'Dronacharya Group of Institutions (AKTU)',
      period: 'Present',
      description:
        'Bachelor of Technology in Computer Science and Information Technology.',
    },
    {
      type: 'edu',
      title: '12th Standard',
      company: 'New Adarsh Public School',
      period: '',
      description: 'Completed senior secondary with focus on science and mathematics.',
    },
    {
      type: 'edu',
      title: '10th Standard',
      company: 'New Adarsh Public School',
      period: '',
      description: 'Completed secondary education with strong academic performance.',
    },
  ]

  const sections = [
    { label: 'Work Experience', items: experience },
    { label: 'Education', items: education },
  ]

  return (
    <section
      id="experience"
      className="py-28 md:py-36 relative overflow-hidden"
      style={{ background: '#03040a' }}
      ref={ref}
    >
      <div className="section-sep absolute top-0 inset-x-0" />

      {/* Ambient glow — bottom-left */}
      <div className="absolute bottom-0 left-0 w-96 h-96 pointer-events-none"
        style={{
          background:'radial-gradient(circle at bottom left, rgba(13,148,136,0.1) 0%, transparent 65%)',
          filter:'blur(40px)',
        }}
      />
      {/* Right edge glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 pointer-events-none"
        style={{
          background:'radial-gradient(circle at right, rgba(56,189,248,0.07) 0%, transparent 65%)',
          filter:'blur(50px)',
        }}
      />
      <div className="dot-grid absolute inset-0 opacity-25 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={0}
          className="mb-16"
        >
          <span className="w-8 h-0.5 bg-teal-500 block mb-4" />
          <p className="text-teal-500 text-xs font-semibold uppercase tracking-widest mb-3">Background</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Experience &amp; Education
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {sections.map((section, si) => (
            <div key={section.label}>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                custom={si + 1}
                className="text-xs text-gray-600 uppercase tracking-wider font-semibold mb-8"
              >
                {section.label}
              </motion.p>

              <div className="space-y-0">
                {section.items.map((item, ii) => (
                  <motion.div
                    key={ii}
                    variants={fadeUp}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    custom={si * 4 + ii + 2}
                    className="relative pl-5 pb-8 last:pb-0"
                    style={{
                      borderLeft: '1px solid rgba(13,148,136,0.15)',
                    }}
                  >
                    {/* Timeline dot */}
                    <span
                      className="absolute -left-[4.5px] top-1 w-2 h-2 rounded-full"
                      style={{ background: '#0d9488' }}
                    />

                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h3 className="text-sm font-semibold text-white leading-snug">{item.title}</h3>
                      {item.period && (
                        <span className="text-xs text-teal-500 shrink-0 mt-0.5 font-medium">{item.period}</span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 mb-2 font-medium">{item.company}</p>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
