import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredItem, setHoveredItem] = useState(null)

  const experience = [
    {
      type: 'experience',
      title: 'Intern',
      company: 'ITfosters',
      period: 'Present',
      description: 'Gaining hands-on experience in software development and industry practices, working on real-world projects.',
      icon: '💼',
      color: '#0d9488',
    },
  ]

  const education = [
    {
      type: 'education',
      title: 'BTech (CSIT)',
      company: 'Dronacharya Group of Institutions (AKTU)',
      period: 'Present',
      description: 'Pursuing Bachelor of Technology in Computer Science and Information Technology.',
      icon: '🎓',
      color: '#14b8a6',
    },
    {
      type: 'education',
      title: '12th',
      company: 'New Adarsh Public School',
      period: '',
      description: 'Completed 12th standard education with focus on science and mathematics.',
      icon: '📚',
      color: '#0f766e',
    },
    {
      type: 'education',
      title: '10th',
      company: 'New Adarsh Public School',
      period: '',
      description: 'Completed 10th standard education with excellent academic performance.',
      icon: '📖',
      color: '#06b6d4',
    },
  ]

  const timeline = [...experience, ...education]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -80, y: 40, rotateY: -40, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  return (
    <section id="experience" className="py-40 md:py-48 bg-gradient-to-b from-gray900 via-black to-gray900 relative overflow-hidden">
      {/* Enhanced Animated background elements */}
      {[1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: `${400 + i * 200}px`,
            height: `${400 + i * 200}px`,
            top: `${30 + i * 20}%`,
            right: i % 2 === 0 ? '5%' : '15%',
            background: `radial-gradient(circle, rgba(13, 148, 136, ${0.08 - i * 0.02}), transparent)`,
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
            ease: "easeInOut",
            delay: i * 2,
          }}
        />
      ))}

      {/* Animated grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(13, 148, 136, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(13, 148, 136, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-6xl md:text-7xl lg:text-8xl font-black mb-24 text-center relative"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            <span className="relative inline-block">
              Experience & <span className="gradient-text">Education</span>
              <motion.span
                className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-2 bg-gradient-to-r from-tealAccent via-tealLight to-tealAccent"
                initial={{ width: 0 }}
                animate={isInView ? { width: '500px' } : {}}
                transition={{ duration: 1.2, delay: 0.4 }}
              />
            </span>
          </motion.h2>

          <div className="relative">
            {/* Ultra-Enhanced 3D Timeline line */}
            <motion.div
              className="absolute left-12 md:left-16 top-0 bottom-0 w-2 hidden md:block"
              initial={{ scaleY: 0, opacity: 0 }}
              animate={isInView ? { scaleY: 1, opacity: 1 } : {}}
              transition={{ duration: 2, ease: 'easeOut' }}
            >
              <div className="h-full bg-gradient-to-b from-tealAccent via-tealLight via-tealAccent to-tealLight relative">
                {/* Animated flow effect */}
                <motion.div
                  className="absolute top-0 w-full bg-white/20"
                  style={{ height: '20px' }}
                  animate={{
                    y: [0, '100vh'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>
              {/* Enhanced glow */}
              {[1, 2].map((glow) => (
                <motion.div
                  key={glow}
                  className={`absolute inset-0 bg-tealAccent blur-${glow}xl`}
                  style={{
                    filter: `blur(${glow * 8}px)`,
                  }}
                  animate={{
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 2 + glow,
                    repeat: Infinity,
                    delay: glow * 0.5,
                  }}
                />
              ))}
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="space-y-16"
              style={{
                perspective: '1200px',
              }}
            >
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-0 md:pl-32"
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {/* Enhanced 3D Timeline dot */}
                  <motion.div
                    className="absolute left-10 md:left-14 top-8 w-12 h-12 bg-gradient-to-br from-tealAccent via-tealLight to-tealAccent rounded-full border-4 border-black z-20 hidden md:flex items-center justify-center shadow-2xl"
                    animate={{
                      scale: hoveredItem === index ? [1, 1.3, 1] : [1, 1.15, 1],
                      boxShadow: hoveredItem === index 
                        ? [
                            '0 0 0 0 rgba(13, 148, 136, 0.4)',
                            '0 0 0 25px rgba(13, 148, 136, 0)',
                          ]
                        : [
                            '0 0 0 0 rgba(13, 148, 136, 0.3)',
                            '0 0 0 20px rgba(13, 148, 136, 0)',
                          ],
                      rotate: hoveredItem === index ? [0, 360] : 0,
                    }}
                    transition={{
                      scale: { duration: hoveredItem === index ? 0.6 : 2 },
                      boxShadow: { duration: 2 },
                      rotate: { duration: 0.8, ease: "easeInOut" },
                      delay: index * 0.3,
                    }}
                  >
                    <motion.div
                      className="text-2xl"
                      animate={{
                        rotate: [0, 360],
                        scale: hoveredItem === index ? [1, 1.2, 1] : 1,
                      }}
                      transition={{
                        rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                        scale: { duration: 0.5 },
                      }}
                    >
                      {item.icon}
                    </motion.div>
                    
                    {/* Multiple glow rings */}
                    {[1, 2].map((ring) => (
                      <motion.div
                        key={ring}
                        className="absolute inset-0 rounded-full border-2 border-tealAccent/30"
                        style={{
                          transform: `scale(${1 + ring * 0.3})`,
                        }}
                        animate={{
                          opacity: [0.3, 0.7, 0.3],
                          scale: [1 + ring * 0.3, 1.4 + ring * 0.3, 1 + ring * 0.3],
                        }}
                        transition={{
                          duration: 2 + ring,
                          repeat: Infinity,
                          delay: index * 0.3 + ring * 0.2,
                        }}
                      />
                    ))}
                  </motion.div>

                  {/* Ultra-Enhanced 3D Floating Card */}
                  <motion.div
                    className="glass-dark border-2 border-gray700 rounded-3xl p-10 hover:border-tealAccent/60 transition-all relative overflow-hidden preserve-3d group"
                    whileHover={{
                      scale: 1.05,
                      rotateY: 8,
                      rotateX: 3,
                      z: 50,
                      boxShadow: '0 30px 80px rgba(13, 148, 136, 0.5)',
                    }}
                    style={{
                      transformStyle: 'preserve-3d',
                      background: hoveredItem === index 
                        ? `linear-gradient(135deg, rgba(13, 148, 136, 0.15), rgba(20, 184, 166, 0.08))`
                        : 'rgba(255, 255, 255, 0.02)',
                    }}
                  >
                    {/* Multiple glow effects */}
                    <motion.div
                      className="absolute -inset-2 bg-gradient-to-r from-tealAccent to-tealLight rounded-3xl opacity-0 group-hover:opacity-30 blur-2xl -z-10"
                      transition={{ duration: 0.4 }}
                    />
                    
                    {/* Animated border glow */}
                    <motion.div
                      className="absolute inset-0 border-2 border-tealAccent/50 rounded-3xl"
                      animate={{
                        opacity: hoveredItem === index ? [0.5, 1, 0.5] : 0,
                        boxShadow: hoveredItem === index
                          ? [
                              '0 0 20px rgba(13, 148, 136, 0.3)',
                              '0 0 40px rgba(13, 148, 136, 0.6)',
                              '0 0 20px rgba(13, 148, 136, 0.3)',
                            ]
                          : 'none',
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />

                    <div className="relative z-10">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                        <motion.h3
                          className="text-3xl md:text-4xl font-black text-white mb-3 md:mb-0 relative"
                          whileHover={{ x: 8, scale: 1.05 }}
                        >
                          <span className="relative z-10">{item.title}</span>
                          <motion.span
                            className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-tealAccent to-tealLight"
                            initial={{ width: 0 }}
                            whileHover={{ width: '100%' }}
                            transition={{ duration: 0.4 }}
                          />
                        </motion.h3>
                        {item.period && (
                          <motion.span
                            className="text-tealAccent text-xl font-bold px-6 py-3 glass-dark border-2 border-tealAccent/40 rounded-xl inline-block w-fit"
                            whileHover={{ 
                              scale: 1.15, 
                              rotateZ: 3,
                              boxShadow: '0 10px 30px rgba(13, 148, 136, 0.4)',
                            }}
                          >
                            {item.period}
                          </motion.span>
                        )}
                      </div>

                      <motion.p
                        className="text-tealAccent font-bold mb-4 text-xl"
                        whileHover={{ x: 8, scale: 1.05 }}
                      >
                        {item.company}
                      </motion.p>

                      <p className="text-gray300 leading-relaxed text-lg">{item.description}</p>
                    </div>

                    {/* Animated background gradient */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-tealAccent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{
                        backgroundPosition: ['0% 0%', '100% 100%'],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        repeatType: 'reverse',
                      }}
                    />

                    {/* Floating particles inside card */}
                    {hoveredItem === index && [...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-tealAccent rounded-full"
                        style={{
                          left: `${15 + (i % 3) * 35}%`,
                          top: `${10 + Math.floor(i / 3) * 80}%`,
                        }}
                        initial={{ opacity: 0, scale: 0 }}
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
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
