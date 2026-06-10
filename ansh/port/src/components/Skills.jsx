import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [hoveredSkill, setHoveredSkill] = useState(null)

  const coreSkills = [
    { name: 'Development', level: 90, color: 'gold' },
    { name: 'Photography', level: 90, color: 'sky' },
    { name: 'Videography', level: 85, color: 'sky' },
    { name: 'Photo Editing', level: 88, color: 'gold' },
    { name: 'Lead Speaker', level: 85, color: 'sky' },
  ]

  const skillCategories = [
    { title: 'Languages', items: ['C', 'C++', 'Java', 'JavaScript', 'Python'] },
    { title: 'Frontend', items: ['HTML5', 'CSS3', 'React.js', 'Tailwind CSS'] },
    { title: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'JWT'] },
    { title: 'Database', items: ['MongoDB', 'MySQL', 'PostgreSQL'] },
    { title: 'Dev Tools', items: ['VS Code', 'GitHub', 'Postman', 'Photoshop', 'Lightroom'] },
    { title: 'Coursework', items: ['DBMS', 'OOPS', 'Operating Systems', 'Computer Networks'] },
  ]

  return (
    <section id="skills" className="py-32 md:py-40 relative overflow-hidden" style={{ background: 'var(--bg)' }}>
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(147,197,253,0.15), transparent)' }}
      />
      {/* Blue ambient glow left */}
      <div
        className="absolute left-0 top-1/3 w-80 h-80 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(147,197,253,0.05) 0%, transparent 70%)', filter: 'blur(50px)' }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-20"
        >
          <span className="pill mb-4 inline-flex">Expertise</span>
          <h2
            className="font-black"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--text-1)' }}
          >
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="mt-4 text-base max-w-lg" style={{ color: 'var(--text-2)' }}>
            A comprehensive overview of my technical and creative abilities
          </p>
        </motion.div>

        {/* Core skill bars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
          {coreSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="p-5 rounded-xl cursor-default"
              style={{
                background: hoveredSkill === skill.name
                  ? skill.color === 'gold' ? 'rgba(212,168,67,0.08)' : 'rgba(147,197,253,0.07)'
                  : 'var(--surface2)',
                border: `1px solid ${hoveredSkill === skill.name
                  ? skill.color === 'gold' ? 'rgba(212,168,67,0.3)' : 'rgba(147,197,253,0.25)'
                  : 'var(--border)'}`,
                transition: 'all 0.25s ease',
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-semibold" style={{ color: 'var(--text-1)' }}>{skill.name}</p>
                <span className="text-xs font-bold" style={{ color: skill.color === 'gold' ? 'var(--gold)' : 'var(--sky)' }}>
                  {skill.level}%
                </span>
              </div>
              {/* Progress bar */}
              <div className="h-1 rounded-full" style={{ background: 'var(--border)' }}>
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: skill.color === 'gold'
                      ? 'linear-gradient(90deg, var(--gold-dark), var(--gold-light))'
                      : 'linear-gradient(90deg, var(--sky-deep), var(--sky))',
                  }}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1.2, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Category tag clouds */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + ci * 0.07 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-1 h-5 rounded-full"
                  style={{ background: ci % 2 === 0 ? 'var(--gold)' : 'var(--sky)' }}
                />
                <h3 className="text-base font-bold uppercase tracking-wider" style={{ color: 'var(--text-1)' }}>
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, ii) => (
                  <motion.span
                    key={item}
                    className="px-3 py-1.5 text-xs font-semibold rounded-lg cursor-default"
                    style={{
                      background: 'var(--surface2)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-2)',
                    }}
                    whileHover={{
                      background: ci % 2 === 0 ? 'rgba(212,168,67,0.1)' : 'rgba(147,197,253,0.08)',
                      borderColor: ci % 2 === 0 ? 'rgba(212,168,67,0.35)' : 'rgba(147,197,253,0.3)',
                      color: ci % 2 === 0 ? 'var(--gold)' : 'var(--sky)',
                      y: -2,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
