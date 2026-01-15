import { useState, useEffect } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeSection, setActiveSection] = useState('hero')
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > lastScrollY && latest > 100) {
      setIsVisible(false)
    } else {
      setIsVisible(true)
    }
    setLastScrollY(latest)

    // Update active section based on scroll position
    const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact']
    for (const section of sections.reverse()) {
      const element = document.getElementById(section)
      if (element) {
        const rect = element.getBoundingClientRect()
        if (rect.top <= 200 && rect.bottom >= 200) {
          setActiveSection(section)
          break
        }
      }
    }
  })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 25,
        y: (e.clientY / window.innerHeight - 0.5) * 15,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.4, ease: [0.6, -0.05, 0.01, 0.99] }}
      className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-tealAccent/30 backdrop-blur-xl"
      style={{
        transform: `perspective(1200px) rotateX(${mousePosition.y * 0.08}deg)`,
        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6))',
        boxShadow: '0 8px 32px rgba(13, 148, 136, 0.15)',
      }}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-tealAccent/5 via-transparent to-tealLight/5 opacity-50"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex items-center justify-between h-24 md:h-28">
          <motion.a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('#hero')
            }}
            className="text-3xl md:text-4xl font-black tracking-tight relative group"
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 inline-block">
              <span className="gradient-text text-4xl md:text-5xl">A</span>
              <span className="text-white">nsh</span>
              <span className="ml-2 text-tealAccent">Pandey</span>
              <motion.span
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-tealAccent via-tealLight to-tealAccent"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.4 }}
                style={{
                  filter: 'blur(2px)',
                }}
              />
            </span>
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 bg-tealAccent/20 blur-xl opacity-0 group-hover:opacity-100 -z-10"
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.slice(1)
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href)
                    setActiveSection(item.href.slice(1))
                  }}
                  className={`relative px-5 py-2.5 text-sm font-bold transition-all group rounded-xl ${
                    isActive 
                      ? 'text-tealAccent' 
                      : 'text-gray300 hover:text-tealAccent'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ 
                    scale: 1.1,
                    y: -3,
                  }}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <span className="relative z-10">{item.label}</span>
                  
                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-tealAccent/20 rounded-xl border border-tealAccent/30"
                      layoutId="activeNav"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  
                  {/* Hover background */}
                  <motion.div
                    className="absolute inset-0 bg-tealAccent/10 rounded-xl opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      transform: 'translateZ(-10px)',
                    }}
                  />
                  
                  {/* Underline animation */}
                  <motion.span
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-tealAccent to-tealLight rounded-full"
                    initial={{ width: 0, opacity: 0 }}
                    whileHover={{ width: '80%', opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Pulsing glow for active */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-tealAccent/30 rounded-xl blur-lg"
                      animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                  )}
                </motion.a>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden p-3 glass-dark border border-tealAccent/30 rounded-xl text-tealAccent hover:border-tealAccent transition-colors group"
            aria-label="Menu"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <motion.div
              className="absolute inset-0 bg-tealAccent/20 rounded-xl opacity-0 group-hover:opacity-100 blur-md"
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation
