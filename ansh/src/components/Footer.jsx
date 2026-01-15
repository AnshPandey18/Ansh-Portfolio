import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Footer = ({ darkMode, setDarkMode }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const currentYear = new Date().getFullYear()

  const navItems = [
    { label: 'About', href: '#about', icon: '👤' },
    { label: 'Skills', href: '#skills', icon: '🎯' },
    { label: 'Projects', href: '#projects', icon: '🚀' },
    { label: 'Experience', href: '#experience', icon: '💼' },
    { label: 'Contact', href: '#contact', icon: '📧' },
  ]

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/shooootwithme?igsh=NDl4OWJtZmp6OXNq',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162 0 3.403 2.759 6.162 6.162 6.162 3.403 0 6.162-2.759 6.162-6.162 0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ansh-pandey-87b379282',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      name: 'GitHub',
      url: 'https://github.com/AnshPandey18',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
        </svg>
      ),
    },
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer 
      ref={ref}
      className="bg-gradient-to-t from-black via-gray900 to-black border-t border-tealAccent/30 py-20 md:py-24 relative overflow-hidden"
    >
      {/* Enhanced Background effects */}
      {[1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: `${300 + i * 200}px`,
            height: `${300 + i * 200}px`,
            bottom: `${10 + i * 20}%`,
            left: i % 2 === 0 ? '70%' : '10%',
            background: `radial-gradient(circle, rgba(13, 148, 136, ${0.1 - i * 0.03}), transparent)`,
          }}
          animate={{
            scale: [1, 1.3 + i * 0.1, 1],
            x: [0, 50 + i * 20, 0],
            y: [0, -30 + i * 20, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2,
          }}
        />
      ))}

      {/* Animated top border */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-tealAccent to-transparent"
        animate={{
          opacity: [0.3, 0.8, 0.3],
          scaleX: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-16 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.h3 
              className="text-4xl md:text-5xl font-black mb-6 relative inline-block"
              whileHover={{ scale: 1.05 }}
            >
              <span className="gradient-text text-5xl md:text-6xl">A</span>
              <span className="text-white">nsh</span>
              <span className="ml-2 text-tealAccent">Pandey</span>
              <motion.span
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-tealAccent to-tealLight"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </motion.h3>
            <p className="text-gray300 text-base leading-relaxed mb-6">
              Visual storyteller and front-end developer crafting immersive experiences through photography, videography, and modern web development.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass-dark border border-tealAccent/30 rounded-xl text-tealAccent hover:border-tealAccent hover:text-tealLight transition-all group relative"
                  whileHover={{ scale: 1.15, y: -3, rotateY: 15 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                  aria-label={social.name}
                >
                  {social.icon}
                  <motion.div
                    className="absolute inset-0 bg-tealAccent/20 rounded-xl opacity-0 group-hover:opacity-100 blur-md"
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h4 className="text-xl font-black mb-8 uppercase tracking-wider gradient-text relative inline-block">
              Navigation
              <motion.span
                className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-tealAccent to-tealLight"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
              />
            </h4>
            <nav className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href)
                  }}
                  className="flex items-center gap-3 text-gray300 hover:text-tealAccent transition-all group relative"
                  whileHover={{ x: 8, scale: 1.05 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-bold text-base relative z-10">{item.label}</span>
                  <motion.span
                    className="absolute left-0 h-0.5 bg-gradient-to-r from-tealAccent to-tealLight"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                    style={{
                      left: '40px',
                    }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-tealAccent/10 rounded-lg opacity-0 group-hover:opacity-100 -z-10"
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Preferences */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h4 className="text-xl font-black mb-8 uppercase tracking-wider gradient-text relative inline-block">
              Preferences
              <motion.span
                className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-tealAccent to-tealLight"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
              />
            </h4>
            <motion.button
              onClick={toggleDarkMode}
              className="flex items-center justify-between w-full p-4 glass-dark border-2 border-tealAccent/30 rounded-2xl hover:border-tealAccent transition-all group relative overflow-hidden"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              whileTap={{ scale: 0.95 }}
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <span className="text-gray300 font-bold text-base relative z-10">
                {darkMode ? 'Dark' : 'Light'} Mode
              </span>
              <motion.div
                className="relative w-20 h-10 bg-gray800 rounded-full border-2 border-gray700 p-1"
                style={{
                  transform: 'perspective(500px) rotateX(10deg)',
                }}
              >
                <motion.div
                  className="absolute top-1 w-8 h-8 bg-gradient-to-br from-tealAccent via-tealLight to-tealAccent rounded-full shadow-lg relative z-10"
                  animate={{
                    x: darkMode ? 0 : 36,
                    rotateY: darkMode ? 0 : 180,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 30,
                  }}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20 rounded-full"
                    animate={{
                      scale: darkMode ? [1, 1.3, 1] : 0,
                      opacity: darkMode ? [0.5, 0.9, 0.5] : 0,
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-tealAccent/20 to-tealLight/20 rounded-full"
                  animate={{
                    opacity: darkMode ? 1 : 0.3,
                  }}
                />
              </motion.div>
              <motion.div
                className="absolute inset-0 bg-tealAccent/10 opacity-0 group-hover:opacity-100 blur-xl"
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="border-t border-gray700/50 pt-12 flex flex-col md:flex-row justify-between items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <p className="text-gray400 text-sm font-medium">
            © {currentYear} <span className="text-tealAccent font-bold">Ansh Pandey</span>. All rights reserved.
          </p>
          <motion.p
            className="text-gray400 text-sm flex items-center gap-3 font-medium"
            whileHover={{ scale: 1.05 }}
          >
            <span>Built with</span>
            {['React', 'Tailwind CSS', 'Framer Motion'].map((tech, index) => (
              <motion.span
                key={tech}
                className="text-tealAccent font-bold relative"
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
                whileHover={{ scale: 1.2 }}
              >
                {tech}
                {index < 2 && <span className="text-gray500 mx-1">·</span>}
              </motion.span>
            ))}
            <span className="ml-2">💙</span>
          </motion.p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
