import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isFlipped, setIsFlipped] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 25,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 25,
    })
  }

  return (
    <section id="about" className="py-40 md:py-48 bg-black relative overflow-hidden">
      {/* Enhanced Background effects */}
      <motion.div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-tealAccent/15 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-tealLight/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.5, 0.2],
          x: [0, -30, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Animated grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(13, 148, 136, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(13, 148, 136, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 gap-16 md:gap-24 items-center"
        >
          {/* Enhanced 3D Card Flip Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotateY: -90, y: 50 }}
            animate={isInView ? { 
              opacity: 1, 
              scale: 1, 
              rotateY: 0,
              y: 0,
            } : {}}
            transition={{ duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="relative perspective-1000"
            style={{
              perspective: '1200px',
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
          >
            {/* Multiple glow layers */}
            {[1, 2, 3].map((layer) => (
              <motion.div
                key={layer}
                className="absolute inset-0 rounded-2xl blur-3xl -z-10"
                style={{
                  background: `radial-gradient(circle, rgba(13, 148, 136, ${0.2 / layer}) 0%, transparent 70%)`,
                  transform: `scale(${1 + layer * 0.1})`,
                }}
                animate={{
                  scale: [1 + layer * 0.1, 1.3 + layer * 0.1, 1 + layer * 0.1],
                  opacity: [0.2 / layer, 0.4 / layer, 0.2 / layer],
                }}
                transition={{
                  duration: 3 + layer,
                  repeat: Infinity,
                  delay: layer * 0.5,
                }}
              />
            ))}

            <motion.div
              className="relative w-full h-[550px] preserve-3d cursor-pointer group"
              onClick={() => setIsFlipped(!isFlipped)}
              animate={{
                rotateY: isFlipped ? 180 : 0,
              }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
              style={{
                transform: `perspective(1200px) rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg) scale(1.02)`,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Front */}
              <motion.div
                className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden glass-dark border-2 border-tealAccent/40"
                style={{
                  transform: 'translateZ(60px)',
                }}
              >
                <motion.img
                  src="/ansh-portrait.jpg"
                  alt="Ansh Pandey"
                  className="w-full h-full object-cover object-center"
                  initial={{ opacity: 0, scale: 1.15 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 1, delay: 0.4 }}
                  loading="lazy"
                />
                {/* Multiple gradient overlays */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-tealAccent/30 via-transparent to-transparent pointer-events-none"
                  animate={{
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"
                />
                {/* Animated border glow */}
                <motion.div
                  className="absolute inset-0 border-4 border-tealAccent/50 rounded-3xl"
                  animate={{
                    boxShadow: [
                      '0 0 30px rgba(13, 148, 136, 0.4)',
                      '0 0 60px rgba(13, 148, 136, 0.7)',
                      '0 0 90px rgba(20, 184, 166, 0.5)',
                      '0 0 60px rgba(13, 148, 136, 0.7)',
                      '0 0 30px rgba(13, 148, 136, 0.4)',
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
                {/* Hover hint */}
                <motion.div
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 glass-dark border border-tealAccent/30 rounded-lg text-sm text-tealAccent opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Click to flip
                </motion.div>
              </motion.div>

              {/* Back */}
              <motion.div
                className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden glass-dark border-2 border-tealAccent/40"
                style={{
                  transform: 'rotateY(180deg) translateZ(60px)',
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-gray800 via-gray900 to-black flex flex-col items-center justify-center p-8 text-center relative">
                  {/* Animated background pattern */}
                  <motion.div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `radial-gradient(circle, rgba(13, 148, 136, 0.3) 1px, transparent 1px)`,
                      backgroundSize: '30px 30px',
                    }}
                    animate={{
                      x: [0, 30, 0],
                      y: [0, 30, 0],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <motion.div
                    className="text-8xl mb-6 relative z-10"
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ 
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity },
                    }}
                  >
                    🎨
                  </motion.div>
                  <h3 className="text-3xl font-bold mb-3 gradient-text relative z-10">Creative Vision</h3>
                  <p className="text-gray400 text-lg relative z-10">Visual Storyteller</p>
                  
                  {/* Floating particles */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-tealAccent rounded-full"
                      style={{
                        left: `${20 + (i % 4) * 20}%`,
                        top: `${15 + Math.floor(i / 4) * 70}%`,
                      }}
                      animate={{
                        y: [0, -30, 0],
                        opacity: [0.3, 1, 0.3],
                        scale: [0.8, 1.5, 0.8],
                      }}
                      transition={{
                        duration: 3 + i * 0.3,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Enhanced Bio Text with 3D effect */}
          <motion.div
            initial={{ opacity: 0, x: 60, y: 30 }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99], delay: 0.3 }}
          >
            <motion.h2
              className="text-6xl md:text-7xl lg:text-8xl font-black mb-10 relative"
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.6, -0.05, 0.01, 0.99] }}
            >
              <span className="relative inline-block">
                About <span className="gradient-text">Me</span>
                <motion.span
                  className="absolute -bottom-3 left-0 h-2 bg-gradient-to-r from-tealAccent via-tealLight to-tealAccent"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '300px' } : {}}
                  transition={{ duration: 1.2, delay: 0.6, ease: 'easeOut' }}
                  style={{
                    filter: 'blur(2px)',
                  }}
                />
                {/* Decorative elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16 border-2 border-tealAccent/30 rounded-full"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity },
                  }}
                />
              </span>
            </motion.h2>
            
            <motion.div
              className="space-y-8 text-gray-200 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.p
                className="text-2xl md:text-3xl relative group"
                initial={{ opacity: 0, x: -30, y: 20 }}
                animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.8 }}
                whileHover={{ x: 15, transition: { duration: 0.3 } }}
              >
                <motion.span
                  className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-tealAccent to-tealLight opacity-0 group-hover:opacity-100 transition-opacity"
                />
                I'm <span className="text-white font-bold gradient-text text-3xl md:text-4xl">Ansh Pandey</span> — a visual storyteller and front-end developer blending photography, videography, and polished UI to craft immersive experiences.
              </motion.p>
              
              <motion.p
                className="text-2xl md:text-3xl relative group"
                initial={{ opacity: 0, x: -30, y: 20 }}
                animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.8 }}
                whileHover={{ x: 15, transition: { duration: 0.3 } }}
              >
                <motion.span
                  className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-tealAccent to-tealLight opacity-0 group-hover:opacity-100 transition-opacity"
                />
                I focus on clean composition, subtle motion, and user-centered design. Currently interned at <span className="text-tealAccent font-semibold">ITfosters</span> and studying <span className="text-tealLight font-semibold">BTech CSIT</span>.
              </motion.p>

              {/* Achievements & Activities */}
              <motion.div
                className="mt-6 space-y-3 pl-4 border-l-2 border-tealAccent/30"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.75, duration: 0.8 }}
              >
                <h4 className="text-xl font-bold text-white uppercase tracking-wider mb-2">Achievements & Activities</h4>
                <ul className="space-y-2 text-gray-400 text-lg">
                  <li className="flex items-center gap-2">🏆 <span className="text-gray-350 font-medium">AIR 94</span> in Gautam Buddha University Entrance Test</li>
                  <li className="flex items-center gap-2">🎤 <span className="text-gray-350 font-medium">Two-time District Level Speaker</span> (2024, 2025)</li>
                  <li className="flex items-center gap-2">🏏 <span className="text-gray-350 font-medium">Captain</span> of School Cricket Team</li>
                  <li className="flex items-center gap-2">📸 <span className="text-gray-350 font-medium">3 Years of experience</span> in Photography & Videography</li>
                </ul>
              </motion.div>

              {/* Enhanced Stats with 3D cards */}
              <div className="grid grid-cols-2 gap-6 mt-12">
                {[
                  { label: 'Projects', value: '10+', icon: '🚀' },
                  { label: 'Experience', value: '2+ Years', icon: '⭐' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="glass-dark border-2 border-tealAccent/30 rounded-2xl p-6 text-center relative overflow-hidden group"
                    initial={{ opacity: 0, y: 30, rotateY: -20 }}
                    animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                    transition={{ delay: 0.7 + index * 0.15, duration: 0.8 }}
                    whileHover={{
                      scale: 1.08,
                      rotateY: 8,
                      rotateX: 5,
                      borderColor: 'rgba(13, 148, 136, 0.6)',
                      boxShadow: '0 20px 60px rgba(13, 148, 136, 0.4)',
                      z: 40,
                    }}
                    style={{
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <motion.div
                      className="text-5xl mb-3"
                      animate={{
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    >
                      {stat.icon}
                    </motion.div>
                    <div className="text-4xl md:text-5xl font-black gradient-text mb-2 relative z-10">{stat.value}</div>
                    <div className="text-base text-gray-400 font-semibold relative z-10">{stat.label}</div>
                    
                    {/* Animated background glow */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-tealAccent/20 to-tealLight/20 opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{
                        backgroundPosition: ['0% 0%', '100% 100%'],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        repeatType: 'reverse',
                      }}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Resume download Link */}
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <a
                  href="https://drive.google.com/file/d/1nZgZPh-rr3AO2vpl5zwiAyCGD8UqzzdZ/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-tealAccent text-white font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-[0_0_15px_rgba(13,148,136,0.2)] hover:shadow-[0_0_25px_rgba(13,148,136,0.4)] transform hover:-translate-y-0.5"
                >
                  View Resume
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
