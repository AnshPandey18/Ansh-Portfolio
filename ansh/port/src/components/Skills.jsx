import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredSkill, setHoveredSkill] = useState(null)

  const coreSkills = [
    { name: 'Development', level: 90, icon: '💻', color: '#06b6d4', description: 'Building modern, scalable full stack web applications' },
    { name: 'Photography', level: 90, icon: '📸', color: '#0d9488', description: 'Capturing moments with artistic composition and light' },
    { name: 'Videography', level: 85, icon: '🎥', color: '#14b8a6', description: 'Creating high-energy cinematic visual stories' },
    { name: 'Photo Editing', level: 88, icon: '🎨', color: '#0f766e', description: 'Professional editing in Lightroom and Photoshop' },
    { name: 'Lead Speaker', level: 85, icon: '🎤', color: '#0891b2', description: 'Two-time District Level Speaker (2024, 2025)' },
  ]

  const skillCategories = [
    {
      title: 'Languages',
      items: ['C', 'C++', 'Java', 'JavaScript', 'Python'],
    },
    {
      title: 'Frontend',
      items: ['HTML5', 'CSS3', 'React.js'],
    },
    {
      title: 'Backend',
      items: ['Node.js', 'Express.js', 'REST APIs', 'JWT'],
    },
    {
      title: 'Database',
      items: ['MongoDB', 'MySQL', 'PostgreSQL'],
    },
    {
      title: 'Developer Tools',
      items: ['VS Code', 'GitHub', 'Postman', 'Photoshop', 'MS Office'],
    },
    {
      title: 'Coursework',
      items: ['DBMS', 'OOPS', 'Operating Systems', 'Computer Networks'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.6, rotateY: -40 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  return (
    <section id="skills" className="py-40 md:py-48 bg-gradient-to-b from-black via-gray900 to-black relative overflow-hidden">
      {/* Enhanced Animated background orbs */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: `${300 + i * 150}px`,
            height: `${300 + i * 150}px`,
            top: `${20 + i * 20}%`,
            left: i % 2 === 0 ? '70%' : '10%',
            background: `radial-gradient(circle, rgba(13, 148, 136, ${0.15 - i * 0.03}), transparent)`,
          }}
          animate={{
            scale: [1, 1.4 + i * 0.1, 1],
            x: [0, 60 + i * 20, 0],
            y: [0, 40 + i * 20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.5,
          }}
        />
      ))}

      {/* Animated grid */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(13, 148, 136, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(13, 148, 136, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 text-center relative"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            <span className="relative inline-block">
              Skills & <span className="gradient-text">Expertise</span>
              <motion.span
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-2 bg-gradient-to-r from-tealAccent via-tealLight to-tealAccent"
                initial={{ width: 0 }}
                animate={isInView ? { width: '400px' } : {}}
                transition={{ duration: 1.2, delay: 0.4 }}
              />
            </span>
          </motion.h2>

          <motion.p
            className="text-center text-gray400 mb-24 text-2xl font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            A comprehensive overview of my technical and creative abilities
          </motion.p>

          {/* Enhanced 3D Rotating Skill Orbs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-32 justify-items-center"
            style={{
              perspective: '1200px',
            }}
          >
            {coreSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="relative group perspective-1000 w-full max-w-[180px]"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                style={{
                  perspective: '1200px',
                }}
              >
                {/* Multiple glow layers */}
                {[1, 2].map((layer) => (
                  <motion.div
                    key={layer}
                    className="absolute inset-0 rounded-full blur-3xl -z-10"
                    style={{
                      background: `radial-gradient(circle, ${skill.color}${Math.floor(40 / layer)}, transparent)`,
                      transform: `scale(${1 + layer * 0.2})`,
                    }}
                    animate={{
                      scale: hoveredSkill === skill.name ? [1 + layer * 0.2, 1.5 + layer * 0.2, 1 + layer * 0.2] : 1 + layer * 0.2,
                      opacity: hoveredSkill === skill.name ? [0.3, 0.7, 0.3] : 0.2,
                    }}
                    transition={{
                      duration: 2 + layer,
                      repeat: Infinity,
                    }}
                  />
                ))}

                <motion.div
                  className="relative w-40 h-40 mx-auto"
                  animate={{
                    rotateY: hoveredSkill === skill.name ? 360 : 0,
                    rotateX: hoveredSkill === skill.name ? 15 : 0,
                    scale: hoveredSkill === skill.name ? 1.15 : 1,
                    z: hoveredSkill === skill.name ? 50 : 0,
                  }}
                  transition={{
                    rotateY: { duration: 1.2, ease: "easeInOut" },
                    rotateX: { duration: 0.5 },
                    scale: { duration: 0.4 },
                    z: { duration: 0.4 },
                  }}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* 3D Orb Container */}
                  <div className="relative w-full h-full preserve-3d">
                    {/* Front Face */}
                    <motion.div
                      className="absolute inset-0 backface-hidden"
                      style={{
                        transform: 'translateZ(40px)',
                      }}
                    >
                      <div className="relative w-full h-full">
                        <svg className="w-full h-full transform -rotate-90">
                          <circle
                            cx="80"
                            cy="80"
                            r="70"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="none"
                            className="text-gray-700"
                          />
                          <motion.circle
                            cx="80"
                            cy="80"
                            r="70"
                            stroke={skill.color}
                            strokeWidth="8"
                            fill="none"
                            strokeDasharray={`${2 * Math.PI * 70}`}
                            initial={{ strokeDashoffset: 2 * Math.PI * 70 }}
                            animate={isInView ? { 
                              strokeDashoffset: 2 * Math.PI * 70 * (1 - skill.level / 100) 
                            } : {}}
                            transition={{ duration: 2.5, delay: index * 0.2, ease: 'easeOut' }}
                            strokeLinecap="round"
                            style={{
                              filter: `drop-shadow(0 0 8px ${skill.color})`,
                            }}
                          />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <motion.div
                            className="text-4xl mb-2"
                            animate={{
                              scale: hoveredSkill === skill.name ? [1, 1.3, 1] : 1,
                              rotate: hoveredSkill === skill.name ? [0, 360] : 0,
                            }}
                            transition={{ 
                              duration: hoveredSkill === skill.name ? 0.6 : 0.3,
                              rotate: { duration: 1, ease: "easeInOut" },
                            }}
                          >
                            {skill.icon}
                          </motion.div>
                          <span className="text-2xl font-black text-white">{skill.level}%</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                <motion.p
                  className="text-center font-bold text-white mt-6 text-lg"
                  animate={{
                    color: hoveredSkill === skill.name ? skill.color : '#ffffff',
                    scale: hoveredSkill === skill.name ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {skill.name}
                </motion.p>

                {/* Enhanced 3D Card on hover */}
                <motion.div
                  className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 glass-dark border-2 border-tealAccent/40 rounded-2xl p-4 w-52 opacity-0 pointer-events-none z-20"
                  animate={{
                    opacity: hoveredSkill === skill.name ? 1 : 0,
                    y: hoveredSkill === skill.name ? 0 : 20,
                    rotateX: hoveredSkill === skill.name ? 0 : -30,
                    scale: hoveredSkill === skill.name ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.4 }}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <p className="text-sm text-gray300 text-center mb-1 font-semibold">{skill.level}% proficiency</p>
                  <p className="text-xs text-gray-400 text-center">{skill.description}</p>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-tealAccent/20 to-transparent rounded-2xl -z-10"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Categorized Technical Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            {skillCategories.map((category, catIndex) => (
              <div key={category.title} className="relative">
                <motion.div
                  className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-tealAccent to-tealLight opacity-50"
                  initial={{ scaleY: 0 }}
                  animate={isInView ? { scaleY: 1 } : {}}
                  transition={{ duration: 1, delay: 1 + catIndex * 0.1 }}
                />
                <motion.h3
                  className="text-3xl font-black mb-8 gradient-text relative inline-block"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.2 + catIndex * 0.1 }}
                >
                  {category.title}
                  <motion.span
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-tealAccent to-tealLight"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '100%' } : {}}
                    transition={{ delay: 1.4 + catIndex * 0.1, duration: 0.6 }}
                  />
                </motion.h3>
                <div className="flex flex-wrap gap-4">
                  {category.items.map((item, index) => (
                    <motion.span
                      key={item}
                      variants={itemVariants}
                      className="px-6 py-3.5 glass-dark border-2 border-gray-700 rounded-2xl text-base font-bold hover:border-tealAccent hover:text-tealAccent transition-colors cursor-default relative group"
                      whileHover={{
                        scale: 1.15,
                        y: -6,
                        rotateY: 15,
                        rotateX: 5,
                        borderColor: '#0d9488',
                        boxShadow: '0 15px 40px rgba(13, 148, 136, 0.4)',
                        z: 30,
                      }}
                      style={{
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      {item}
                      <motion.span
                        className="absolute inset-0 bg-tealAccent/15 rounded-2xl -z-10"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.div
                        className="absolute -inset-2 bg-tealAccent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 -z-20"
                        transition={{ duration: 0.3 }}
                      />
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
