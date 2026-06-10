import { motion, useInView } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import ParticleExplosion from './ParticleExplosion'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [explode, setExplode] = useState(false)
  const [lastScrollTop, setLastScrollTop] = useState(0)
  const heroRef = useRef(null)
  const isInView = useInView(heroRef, { margin: '-50%' })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = heroRef.current?.getBoundingClientRect()
      if (rect) {
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 50,
          y: ((e.clientY - rect.top) / rect.height - 0.5) * 50,
        })
      }
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Scroll detection for breaking effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop
      
      // Trigger explosion when scrolling back to top (hero section)
      if (currentScrollTop < 100 && lastScrollTop > 200 && isInView) {
        setExplode(true)
        setTimeout(() => setExplode(false), 100)
      }
      
      setLastScrollTop(currentScrollTop)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollTop, isInView])

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-start overflow-hidden"
    >
      {/* Particle Explosion Effect */}
      <ParticleExplosion trigger={explode} />
      {/* Enhanced Animated Background with multiple layers */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-gray900 via-black to-gray800"
        style={{
          backgroundImage: `
            radial-gradient(circle at ${50 + mousePosition.x * 0.5}% ${50 + mousePosition.y * 0.5}%, 
              rgba(13, 148, 136, 0.25) 0%, 
              rgba(13, 148, 136, 0.1) 20%, 
              transparent 60%
            ),
            radial-gradient(circle at ${30 - mousePosition.x * 0.3}% ${70 + mousePosition.y * 0.3}%, 
              rgba(20, 184, 166, 0.2) 0%, 
              transparent 45%
            ),
            radial-gradient(circle at ${70 + mousePosition.x * 0.4}% ${30 - mousePosition.y * 0.4}%, 
              rgba(13, 148, 136, 0.15) 0%, 
              transparent 55%
            )
          `,
          transform: `perspective(1000px) rotateX(${mousePosition.y * 0.08}deg) rotateY(${mousePosition.x * 0.08}deg)`,
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      
      {/* Additional animated orbs */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: `${400 + i * 200}px`,
            height: `${400 + i * 200}px`,
            top: `${20 + i * 20}%`,
            left: i % 2 === 0 ? '70%' : '10%',
            background: `radial-gradient(circle, rgba(13, 148, 136, ${0.15 - i * 0.03}), transparent)`,
          }}
          animate={{
            scale: [1, 1.3 + i * 0.1, 1],
            x: [0, 60 + i * 20, 0],
            y: [0, 40 + i * 20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2,
          }}
        />
      ))}

      {/* Animated Grid Pattern with parallax */}
      <motion.div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(13, 148, 136, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(13, 148, 136, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
        animate={{
          x: [0, 60, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Film grain overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Multiple Floating 3D Orbs */}
      {[1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: `${180 + i * 80}px`,
            height: `${180 + i * 80}px`,
            top: `${15 + i * 15}%`,
            left: i % 2 === 0 ? '75%' : '8%',
            background: `radial-gradient(circle, rgba(13, 148, 136, ${0.25 - i * 0.05}), transparent)`,
          }}
          animate={{
            x: [0, 60 + i * 20, 0],
            y: [0, 40 + i * 20, 0],
            scale: [1, 1.3 + i * 0.1, 1],
            opacity: [0.2, 0.5 + i * 0.1, 0.2],
          }}
          transition={{
            duration: 12 + i * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.2,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8 md:gap-20 items-center"
        >
          <div className="relative">
            {/* Decorative elements */}
            <motion.div
              className="absolute -top-12 -left-12 w-40 h-40 border-2 border-tealAccent/30 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 360],
                opacity: [0.3, 0.6, 0.3],
                borderColor: ['rgba(13, 148, 136, 0.3)', 'rgba(20, 184, 166, 0.6)', 'rgba(13, 148, 136, 0.3)'],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
              }}
              style={{
                filter: 'blur(2px)',
              }}
            />

            <motion.div
              variants={itemVariants}
              className="mb-8"
              style={{
                transform: `perspective(1000px) rotateY(${mousePosition.x * 0.03}deg) rotateX(${-mousePosition.y * 0.03}deg)`,
                transformStyle: 'preserve-3d',
              }}
            >
              <motion.h1
                className="text-7xl md:text-8xl lg:text-9xl font-black mb-6 leading-none relative"
                style={{
                  textShadow: '0 0 50px rgba(13, 148, 136, 0.5), 0 0 100px rgba(13, 148, 136, 0.3), 0 0 150px rgba(20, 184, 166, 0.2)',
                }}
                animate={explode ? {
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0],
                } : {}}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
              >
                <motion.span 
                  className="inline-block text-white relative z-10"
                  whileHover={{ scale: 1.08, x: 15 }}
                  style={{
                    display: 'inline-block',
                  }}
                >
                  <motion.span
                    className="absolute -inset-6 bg-gradient-to-r from-tealAccent/30 via-tealLight/30 to-tealAccent/30 blur-3xl -z-10"
                    animate={{
                      opacity: [0, 0.4, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                    }}
                  />
                  Ansh
                </motion.span>
                <span className="inline-block w-4 md:w-6"></span>
                <motion.span 
                  className="inline-block relative"
                  style={{
                    display: 'inline-block',
                  }}
                >
                  <span className="relative z-10 bg-gradient-to-r from-tealAccent via-tealLight via-tealAccent to-tealLight bg-clip-text text-transparent bg-[length:200%_100%]">
                    Pandey
                  </span>
                  {/* Enhanced shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -z-10"
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                    style={{
                      filter: 'blur(10px)',
                    }}
                  />
                </motion.span>
              </motion.h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-2xl md:text-3xl lg:text-4xl text-gray400 mb-6 font-light tracking-wide relative"
              style={{
                textShadow: '0 2px 15px rgba(0, 0, 0, 0.8)',
              }}
            >
              <motion.span
                className="inline-block"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                }}
                style={{
                  background: 'linear-gradient(90deg, #6b7280, #0d9488, #14b8a6, #0d9488, #6b7280)',
                  backgroundSize: '300% 100%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Photographer · Videographer · Photo Editor · Lead Speaker · Developer
              </motion.span>
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 mt-12"
            >
              <motion.button
                onClick={() => scrollToSection('#projects')}
                className="relative px-12 py-6 bg-gradient-to-r from-tealAccent via-tealLight to-tealAccent text-white font-bold text-lg rounded-2xl overflow-hidden group shadow-2xl"
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: '0 25px 80px rgba(13, 148, 136, 0.7)',
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  backgroundSize: '200% 100%',
                  transformStyle: 'preserve-3d',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  View Projects
                  <motion.span
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-2xl"
                  >
                    →
                  </motion.span>
                </span>
                {/* Enhanced shimmer overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                />
                {/* Triple glow effect */}
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className={`absolute -inset-${i} bg-tealAccent blur-${i * 2}xl opacity-0 group-hover:opacity-${30 + i * 10} -z-${10 - i}`}
                    style={{
                      filter: `blur(${i * 8}px)`,
                      zIndex: -10 - i,
                    }}
                    animate={{
                      opacity: [0, 0.3 / i, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </motion.button>

              <motion.button
                onClick={() => scrollToSection('#contact')}
                className="px-12 py-6 border-3 border-tealAccent/60 text-white font-bold text-lg rounded-2xl relative overflow-hidden group backdrop-blur-md glass shadow-xl"
                whileHover={{ 
                  scale: 1.1,
                  borderColor: 'rgba(13, 148, 136, 1)',
                  boxShadow: '0 25px 80px rgba(13, 148, 136, 0.5)',
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                <span className="relative z-10">Contact</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-tealAccent/25 to-tealLight/25"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                {/* Animated border glow rings */}
                {[1, 2].map((ring) => (
                  <motion.div
                    key={ring}
                    className="absolute inset-0 border-2 border-tealAccent rounded-2xl"
                    animate={{
                      opacity: [0.4, 0.9, 0.4],
                      scale: [1, 1.05, 1],
                      boxShadow: [
                        `0 0 ${20 * ring}px rgba(13, 148, 136, 0.4)`,
                        `0 0 ${40 * ring}px rgba(13, 148, 136, 0.7)`,
                        `0 0 ${20 * ring}px rgba(13, 148, 136, 0.4)`,
                      ],
                    }}
                    transition={{
                      duration: 2 + ring,
                      repeat: Infinity,
                      delay: ring * 0.5,
                    }}
                    style={{
                      border: 'none',
                      filter: `blur(${ring * 2}px)`,
                    }}
                  />
                ))}
              </motion.button>

              <motion.a
                href="https://drive.google.com/file/d/1nZgZPh-rr3AO2vpl5zwiAyCGD8UqzzdZ/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-6 border-3 border-tealAccent/30 text-white font-bold text-lg rounded-2xl flex items-center justify-center gap-3 relative overflow-hidden group backdrop-blur-md glass shadow-xl"
                whileHover={{ 
                  scale: 1.1,
                  borderColor: 'rgba(13, 148, 136, 0.8)',
                  boxShadow: '0 25px 80px rgba(13, 148, 136, 0.5)',
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Resume
                  <svg className="w-6 h-6 text-tealAccent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-tealAccent/15 to-tealLight/15"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.div>
          </div>

          {/* Ultra-Enhanced Character Image with 3D effects */}
          <motion.div
            variants={itemVariants}
            className="relative hidden md:block"
            initial={{ opacity: 0, x: 120, rotateY: -40 }}
            animate={{ 
              opacity: 1, 
              x: 0, 
              rotateY: 0,
            }}
            transition={{ duration: 1.5, delay: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
            style={{
              transformStyle: 'preserve-3d',
              perspective: '1500px',
            }}
          >
            {/* Multiple glow layers with different sizes */}
            {[1, 2, 3, 4].map((layer) => (
              <motion.div
                key={layer}
                className="absolute inset-0 rounded-full blur-3xl -z-10"
                style={{
                  background: `radial-gradient(circle, rgba(13, 148, 136, ${0.35 / layer}) 0%, rgba(20, 184, 166, ${0.25 / layer}) 50%, transparent 70%)`,
                  transform: `scale(${1 + layer * 0.25}) translateZ(-${layer * 50}px)`,
                }}
                animate={{
                  scale: [1 + layer * 0.25, 1.5 + layer * 0.25, 1 + layer * 0.25],
                  opacity: [0.2 / layer, 0.5 / layer, 0.2 / layer],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 4 + layer * 1.5,
                  repeat: Infinity,
                  delay: layer * 0.6,
                  rotate: { duration: 30 + layer * 10, ease: "linear" },
                }}
              />
            ))}

            <motion.div
              className="relative"
              animate={{
                y: [0, -30, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                transform: `perspective(1500px) rotateY(${mousePosition.x * 0.2}deg) rotateX(${-mousePosition.y * 0.2}deg) scale(1.1)`,
                transformStyle: 'preserve-3d',
              }}
            >
              <motion.img
                src="/hero-character.png"
                alt="Ansh Pandey Character"
                className="w-full max-w-xl mx-auto relative z-10"
                style={{
                  filter: 'drop-shadow(0 0 60px rgba(13, 148, 136, 0.8)) drop-shadow(0 0 120px rgba(20, 184, 166, 0.5)) drop-shadow(0 0 180px rgba(13, 148, 136, 0.3))',
                }}
                initial={{ opacity: 0, scale: 0.6, rotateY: -30 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  rotateY: 0,
                }}
                transition={{ duration: 1.5, delay: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
              />
              
              {/* Animated rotating border glow rings */}
              {[1, 2, 3].map((ring) => (
                <motion.div
                  key={ring}
                  className="absolute inset-0 border-4 border-tealAccent/50 rounded-full -z-10"
                  style={{
                    borderWidth: `${2 + ring * 2}px`,
                  }}
                  animate={{
                    scale: [1, 1.15 + ring * 0.05, 1],
                    opacity: [0.3 / ring, 0.8 / ring, 0.3 / ring],
                    rotate: [0, 360 * (ring % 2 === 0 ? 1 : -1)],
                  }}
                  transition={{
                    scale: { duration: 3 + ring, repeat: Infinity },
                    opacity: { duration: 2 + ring, repeat: Infinity },
                    rotate: { duration: 25 + ring * 5, repeat: Infinity, ease: "linear" },
                    delay: ring * 0.4,
                  }}
                />
              ))}

              {/* Enhanced floating particles with trails */}
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-tealAccent rounded-full"
                  style={{
                    left: `${15 + (i % 5) * 20}%`,
                    top: `${8 + Math.floor(i / 5) * 85}%`,
                  }}
                  animate={{
                    y: [0, -40, 0],
                    opacity: [0.2, 1, 0.2],
                    scale: [0.5, 1.5, 0.5],
                  }}
                  transition={{
                    duration: 4 + i * 0.4,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-tealLight rounded-full blur-md"
                    animate={{
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 4 + i * 0.4,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Ultra-Enhanced Scroll indicator with multiple effects */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.div
          className="relative"
          animate={{ 
            rotateY: [0, 360],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          <svg className="w-10 h-10 text-tealAccent drop-shadow-2xl relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          {/* Pulsing glow effects */}
          {[1, 2].map((glow) => (
            <motion.div
              key={glow}
              className="absolute inset-0 bg-tealAccent blur-2xl -z-10"
              style={{
                scale: glow,
                filter: `blur(${glow * 8}px)`,
              }}
              animate={{
                scale: [glow, glow * 1.8, glow],
                opacity: [0.4 / glow, 0.8 / glow, 0.4 / glow],
              }}
              transition={{
                duration: 2 + glow,
                repeat: Infinity,
                delay: glow * 0.3,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
