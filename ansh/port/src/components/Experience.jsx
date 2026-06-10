import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredItem, setHoveredItem] = useState(null)

  const timeline = [
    {
      type: 'experience',
      title: 'Full Stack Developer',
      company: 'Elegant AV Solution (Noida)',
      period: 'Jul 2025 – Present',
      description:
        'Developing full-stack web applications for portable cabin and AV solution services.\n• Designed database schemas and backend REST APIs to manage product listings and client inquiries.\n• Digitized offline business workflows into scalable web-based systems.',
      icon: '💼',
    },
    {
      type: 'experience',
      title: 'Full Stack Developer',
      company: 'Jaypee Digital (Remote)',
      period: 'Sep 2025 – Nov 2025',
      description:
        'Worked on Jaypee Digital platform using modern web technologies.\n• Improved UI responsiveness and optimized backend performance.',
      icon: '💻',
    },
    {
      type: 'experience',
      title: 'Full Stack Developer',
      company: 'Research Locker (Remote)',
      period: 'Jan 2025 – Jun 2025',
      description:
        'Developed and maintained research-based web applications for academic and student users.\n• Built secure authentication systems and RESTful APIs using Node.js and Express.js.\n• Designed responsive frontend interfaces using React.js for better user engagement.\n• Optimized database queries in MySQL to improve system performance.\nWebsite: researchlocker.co',
      icon: '🔬',
    },
    {
      type: 'education',
      title: 'B.Tech – Computer Science and Information Technology',
      company: 'Dronacharya College of Engineering, Greater Noida (AKTU)',
      period: '2022 – Present',
      description:
        'Pursuing Bachelor of Technology in CSIT. Hands-on coursework in DBMS, OOPS, Operating Systems, and Computer Networks. Noida, Uttar Pradesh, India.',
      icon: '🎓',
    },
    {
      type: 'education',
      title: 'Senior Secondary (Class XII)',
      company: 'CBSE Board',
      period: '2022',
      description:
        'Completed Class XII senior secondary education with focus on science and mathematics.',
      icon: '📚',
    },
    {
      type: 'education',
      title: 'Secondary (Class X)',
      company: 'CBSE Board',
      period: '2020',
      description: 'Completed Class X secondary education.',
      icon: '📖',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -60, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  }

  return (
    <section
      id="experience"
      className="py-40 md:py-48 bg-gradient-to-b from-gray900 via-black to-gray900 relative overflow-hidden"
    >
      {/* Background orbs – all values are same-type arrays */}
      {[1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl pointer-events-none"
          style={{
            width: `${400 + i * 200}px`,
            height: `${400 + i * 200}px`,
            top: `${30 + i * 20}%`,
            right: i % 2 === 0 ? '5%' : '15%',
            background: `radial-gradient(circle, rgba(13,148,136,${0.08 - i * 0.02}), transparent)`,
          }}
          animate={{
            scale: [1, 1.3 + i * 0.1, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, 50 + i * 20, 0],
            y: [0, 30 + i * 20, 0],
          }}
          transition={{
            duration: 14 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 2,
          }}
        />
      ))}

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(13,148,136,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(13,148,136,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1 }}
        >
          {/* Heading */}
          <motion.h2
            className="text-6xl md:text-7xl lg:text-8xl font-black mb-24 text-center relative"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            <span className="relative inline-block">
              Experience &amp; <span className="gradient-text">Education</span>
              <motion.span
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 h-2 bg-gradient-to-r from-tealAccent via-tealLight to-tealAccent"
                initial={{ width: 0 }}
                animate={isInView ? { width: '500px' } : { width: 0 }}
                transition={{ duration: 1.2, delay: 0.4 }}
              />
            </span>
          </motion.h2>

          <div className="relative">
            {/* Timeline vertical line */}
            <motion.div
              className="absolute left-12 md:left-16 top-0 bottom-0 w-1 hidden md:block bg-gradient-to-b from-tealAccent via-tealLight to-tealAccent origin-top"
              initial={{ scaleY: 0, opacity: 0 }}
              animate={isInView ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
              transition={{ duration: 2, ease: 'easeOut' }}
            >
              {/* Glow pulses on the line */}
              {[1, 2].map((glow) => (
                <motion.div
                  key={glow}
                  className="absolute inset-0"
                  style={{ filter: `blur(${glow * 6}px)`, background: 'rgba(13,148,136,0.6)' }}
                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 2 + glow, repeat: Infinity, delay: glow * 0.5 }}
                />
              ))}
            </motion.div>

            {/* Cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="space-y-16"
            >
              {timeline.map((item, index) => {
                const isHovered = hoveredItem === index
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative pl-0 md:pl-32"
                    onMouseEnter={() => setHoveredItem(index)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {/* Timeline dot */}
                    <motion.div
                      className="absolute left-10 md:left-14 top-8 w-12 h-12 bg-gradient-to-br from-tealAccent via-tealLight to-tealAccent rounded-full border-4 border-black z-20 hidden md:flex items-center justify-center shadow-2xl"
                      animate={{
                        scale: isHovered ? 1.25 : 1,
                        rotate: isHovered ? 360 : 0,
                        boxShadow: isHovered
                          ? '0 0 20px 5px rgba(13,148,136,0.5)'
                          : '0 0 0px 0px rgba(13,148,136,0)',
                      }}
                      transition={{
                        scale: { duration: 0.4 },
                        rotate: { duration: 0.8, ease: 'easeInOut' },
                        boxShadow: { duration: 0.4 },
                      }}
                    >
                      <span className="text-2xl select-none">{item.icon}</span>

                      {/* Glow rings around dot */}
                      {[1, 2].map((ring) => (
                        <motion.div
                          key={ring}
                          className="absolute inset-0 rounded-full border border-tealAccent/30"
                          animate={{
                            opacity: [0.3, 0.7, 0.3],
                            scale: [1 + ring * 0.3, 1.4 + ring * 0.3, 1 + ring * 0.3],
                          }}
                          transition={{
                            duration: 2 + ring,
                            repeat: Infinity,
                            delay: index * 0.2 + ring * 0.2,
                          }}
                        />
                      ))}
                    </motion.div>

                    {/* Card */}
                    <motion.div
                      className="glass-dark border-2 rounded-3xl p-10 relative overflow-hidden"
                      style={{
                        borderColor: isHovered
                          ? 'rgba(13,148,136,0.6)'
                          : 'rgba(55,65,81,0.8)',
                        background: isHovered
                          ? 'linear-gradient(135deg, rgba(13,148,136,0.15), rgba(20,184,166,0.06))'
                          : 'rgba(255,255,255,0.02)',
                        transition: 'background 0.4s ease, border-color 0.4s ease',
                      }}
                      whileHover={{
                        scale: 1.03,
                        rotateY: 4,
                        rotateX: 2,
                        boxShadow: '0 25px 70px rgba(13,148,136,0.35)',
                      }}
                      transition={{ duration: 0.35 }}
                    >
                      {/* Pulsing border glow when hovered */}
                      <motion.div
                        className="absolute inset-0 rounded-3xl border-2 border-tealAccent/50 pointer-events-none"
                        animate={{
                          opacity: isHovered ? [0.4, 1, 0.4] : [0, 0, 0],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />

                      <div className="relative z-10">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                          <motion.h3
                            className="text-3xl md:text-4xl font-black text-white mb-3 md:mb-0"
                            whileHover={{ x: 6 }}
                          >
                            {item.title}
                          </motion.h3>
                          {item.period && (
                            <motion.span
                              className="text-tealAccent text-lg font-bold px-5 py-2 glass-dark border border-tealAccent/40 rounded-xl inline-block w-fit"
                              whileHover={{ scale: 1.1, rotateZ: 2 }}
                            >
                              {item.period}
                            </motion.span>
                          )}
                        </div>

                        <motion.p
                          className="text-tealAccent font-bold mb-4 text-xl"
                          whileHover={{ x: 6 }}
                        >
                          {item.company}
                        </motion.p>

                        <p
                          className="text-gray-300 leading-relaxed text-lg"
                          style={{ whiteSpace: 'pre-line' }}
                        >
                          {item.description}
                        </p>
                      </div>

                      {/* Floating particles – only rendered when hovered, so initial/animate types are stable */}
                      {isHovered &&
                        [...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-tealAccent rounded-full pointer-events-none"
                            style={{
                              left: `${15 + (i % 3) * 35}%`,
                              top: `${10 + Math.floor(i / 3) * 80}%`,
                            }}
                            initial={{ opacity: 0, scale: 0, y: 0 }}
                            animate={{
                              opacity: [0, 1, 0],
                              scale: [0, 1.5, 0],
                              y: [0, -30, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.2,
                            }}
                          />
                        ))}
                    </motion.div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
