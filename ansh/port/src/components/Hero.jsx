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
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      })
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
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center justify-start overflow-hidden">
      {/* Particle Explosion Effect */}
      <ParticleExplosion trigger={explode} />
      {/* Enhanced Animated Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-gray900 via-black to-gray800"
        style={{
          backgroundImage: `
            radial-gradient(circle at ${50 + mousePosition.x * 0.5}% ${50 + mousePosition.y * 0.5}%, 
              rgba(13, 148, 136, 0.2) 0%, 
              rgba(13, 148, 136, 0.08) 25%, 
              transparent 60%
            ),
            radial-gradient(circle at ${30 - mousePosition.x * 0.3}% ${70 + mousePosition.y * 0.3}%, 
              rgba(20, 184, 166, 0.15) 0%, 
              transparent 40%
            ),
            radial-gradient(circle at ${70 + mousePosition.x * 0.4}% ${30 - mousePosition.y * 0.4}%, 
              rgba(13, 148, 136, 0.1) 0%, 
              transparent 50%
            )
          `,
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      
      {/* Animated Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(13, 148, 136, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(13, 148, 136, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
        }}
      />

      {/* Film grain overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Multiple Floating Orbs */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            top: `${20 + i * 20}%`,
            left: i % 2 === 0 ? '70%' : '10%',
            width: `${200 + i * 100}px`,
            height: `${200 + i * 100}px`,
            backgroundColor: `rgba(13, 148, 136, ${(20 - i * 5) / 100})`,
          }}
          animate={{
            x: [0, 50 + i * 20, 0],
            y: [0, 30 + i * 15, 0],
            scale: [1, 1.2 + i * 0.1, 1],
            opacity: [0.2, 0.4 + i * 0.1, 0.2],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.5,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8 md:gap-16 items-center"
        >
          <div className="relative">
            {/* Decorative elements */}
            <motion.div
              className="absolute -top-10 -left-10 w-32 h-32 border-2 border-tealAccent/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
              }}
            />

            <motion.h1
              variants={itemVariants}
              className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-none relative"
              style={{
                textShadow: '0 0 40px rgba(13, 148, 136, 0.4), 0 0 80px rgba(13, 148, 136, 0.2)',
              }}
              animate={explode ? {
                scale: [1, 1.15, 1],
                rotate: [0, 3, -3, 0],
              } : {}}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <motion.span 
                className="inline-block text-white relative z-10"
                whileHover={{ scale: 1.05, x: 10 }}
                style={{
                  display: 'inline-block',
                }}
              >
                <motion.span
                  className="absolute -inset-4 bg-gradient-to-r from-tealAccent/20 via-tealLight/20 to-tealAccent/20 blur-2xl"
                  animate={{
                    opacity: [0, 0.3, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
                Ansh
              </motion.span>
              <span className="inline-block w-3 md:w-5"></span>
              <motion.span 
                className="inline-block relative"
                style={{
                  display: 'inline-block',
                }}
              >
                <span className="relative z-10 bg-gradient-to-r from-tealAccent via-tealLight to-tealAccent bg-clip-text text-transparent">
                  Pandey
                </span>
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                />
              </motion.span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl lg:text-3xl text-gray400 mb-4 font-light tracking-wide relative"
            >
              <motion.span
                className="inline-block"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                style={{
                  background: 'linear-gradient(90deg, #6b7280, #0d9488, #6b7280)',
                  backgroundSize: '200% 100%',
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
              className="flex flex-col sm:flex-row gap-4 mt-12"
            >
              <motion.button
                onClick={() => scrollToSection('#projects')}
                className="relative px-10 py-5 text-white font-bold rounded-xl overflow-hidden group shadow-2xl"
                whileHover={{ 
                  scale: 1.08,
                  boxShadow: '0 20px 60px rgba(13, 148, 136, 0.6)',
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: 'linear-gradient(90deg, #0d9488, #14b8a6, #0d9488)',
                  backgroundSize: '200% 100%',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              >
                <span className="relative z-10 flex items-center gap-2 text-lg">
                  View Projects
                  <motion.span
                    animate={{ x: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
                {/* Shimmer overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                />
                {/* Glow effect */}
                <motion.div
                  className="absolute -inset-1 bg-tealAccent blur-xl opacity-0 group-hover:opacity-50 -z-10"
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.button
                onClick={() => scrollToSection('#contact')}
                className="px-10 py-5 border-2 border-tealAccent/50 text-white font-bold rounded-xl relative overflow-hidden group backdrop-blur-sm glass shadow-xl"
                whileHover={{ 
                  scale: 1.08,
                  borderColor: 'rgba(13, 148, 136, 1)',
                  boxShadow: '0 20px 60px rgba(13, 148, 136, 0.4)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 text-lg">Contact</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-tealAccent/20 to-tealLight/20"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                {/* Animated border glow */}
                <motion.div
                  className="absolute inset-0 border-2 border-tealAccent rounded-xl"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                    boxShadow: [
                      '0 0 20px rgba(13, 148, 136, 0.3)',
                      '0 0 40px rgba(13, 148, 136, 0.6)',
                      '0 0 20px rgba(13, 148, 136, 0.3)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  style={{
                    border: 'none',
                  }}
                />
              </motion.button>
            </motion.div>
          </div>

          {/* Enhanced Character Image */}
          <motion.div
            variants={itemVariants}
            className="relative hidden md:block"
            initial={{ opacity: 0, x: 100, rotateY: -30 }}
            animate={{ 
              opacity: 1, 
              x: 0, 
              rotateY: 0,
            }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }}
            style={{
              transformStyle: 'preserve-3d',
              perspective: '1000px',
            }}
          >
            {/* Multiple glow layers */}
            {[1, 2, 3].map((layer) => (
              <motion.div
                key={layer}
                className="absolute inset-0 rounded-full blur-3xl -z-10"
                style={{
                  background: `radial-gradient(circle, rgba(13, 148, 136, ${0.3 / layer}) 0%, transparent 70%)`,
                  transform: `scale(${1 + layer * 0.2})`,
                }}
                animate={{
                  scale: [1 + layer * 0.2, 1.3 + layer * 0.2, 1 + layer * 0.2],
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
              className="relative"
              animate={{
                y: [0, -25, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                transform: `perspective(1000px) rotateY(${mousePosition.x * 0.15}deg) rotateX(${-mousePosition.y * 0.15}deg) scale(1.05)`,
                transformStyle: 'preserve-3d',
              }}
            >
              <motion.img
                src="/hero-character.png"
                alt="Ansh Pandey Character"
                className="w-full max-w-lg mx-auto relative z-10"
                style={{
                  filter: 'drop-shadow(0 0 50px rgba(13, 148, 136, 0.6)) drop-shadow(0 0 100px rgba(20, 184, 166, 0.3))',
                }}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                }}
                transition={{ duration: 1.2, delay: 0.8 }}
              />
              
              {/* Animated border glow */}
              <motion.div
                className="absolute inset-0 border-4 border-tealAccent/40 rounded-full -z-10"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.4, 0.7, 0.4],
                  rotate: [0, 360],
                }}
                transition={{
                  scale: { duration: 3, repeat: Infinity },
                  opacity: { duration: 2, repeat: Infinity },
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                }}
              />

              {/* Floating particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-tealAccent rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${10 + (i % 2) * 80}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.div
          className="relative"
          animate={{ 
            rotateY: [0, 360],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          <svg className="w-8 h-8 text-tealAccent drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          <motion.div
            className="absolute inset-0 bg-tealAccent blur-xl opacity-50"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
