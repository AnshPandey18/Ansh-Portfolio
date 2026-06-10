import { useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

const SunIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="5" />
    <path strokeLinecap="round" d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
)

const MoonIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>
)

const Navigation = ({ darkMode, setDarkMode }) => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 40)
    if (latest > lastScrollY && latest > 100) {
      setIsVisible(false)
      setMobileOpen(false)
    } else {
      setIsVisible(true)
    }
    setLastScrollY(latest)
  })

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrolled ? 'var(--glass-bg)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(150%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(150%)' : 'none',
        transition: 'background 0.4s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={(e) => { e.preventDefault(); scrollToSection('#hero') }}
            className="text-xl font-black tracking-tight select-none"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span style={{ color: 'var(--gold)' }}>A</span>
            <span style={{ color: 'var(--text-1)' }}>nsh</span>
            <span style={{ color: 'var(--text-2)', fontWeight: 400, marginLeft: 4 }}>Pandey</span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.href) }}
                className="relative px-4 py-2 text-sm font-medium rounded-lg"
                style={{ color: 'var(--text-2)' }}
                initial={{ opacity: 0, y: -14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ color: 'var(--gold)' }}
              >
                {item.label}
                <motion.span
                  className="absolute bottom-1 left-4 right-4 h-px"
                  style={{ background: 'var(--gold)', transformOrigin: 'left', scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.22 }}
                />
              </motion.a>
            ))}

            {/* Theme Toggle */}
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-3 p-2.5 rounded-xl transition-all"
              style={{
                background: 'var(--surface2)',
                border: '1px solid var(--border)',
                color: darkMode ? 'var(--gold)' : 'var(--sky)',
              }}
              whileHover={{
                scale: 1.08,
                borderColor: darkMode ? 'rgba(212,168,67,0.5)' : 'rgba(29,95,168,0.4)',
              }}
              whileTap={{ scale: 0.93 }}
              aria-label="Toggle theme"
              title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <motion.div
                key={darkMode ? 'moon' : 'sun'}
                initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.25 }}
              >
                {darkMode ? <SunIcon /> : <MoonIcon />}
              </motion.div>
            </motion.button>

            {/* CTA */}
            <motion.button
              onClick={() => scrollToSection('#contact')}
              className="ml-2 px-5 py-2 text-sm font-bold rounded-xl"
              style={{ background: 'var(--gold)', color: '#0a0d14' }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px var(--gold-glow)' }}
              whileTap={{ scale: 0.97 }}
            >
              Hire Me
            </motion.button>
          </div>

          {/* Mobile: theme + menu */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl transition-all"
              style={{
                background: 'var(--surface2)',
                border: '1px solid var(--border)',
                color: darkMode ? 'var(--gold)' : 'var(--sky)',
              }}
              aria-label="Toggle theme"
            >
              {darkMode ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2.5 rounded-xl"
              style={{ color: 'var(--gold)', background: 'var(--surface2)', border: '1px solid var(--border)' }}
              aria-label="Menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4 border-t"
            style={{ borderColor: 'var(--border)' }}
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="w-full text-left px-4 py-3 text-sm font-medium transition-colors"
                style={{ color: 'var(--text-2)' }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-2)' }}
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 pt-2">
              <button
                onClick={() => scrollToSection('#contact')}
                className="w-full py-2.5 text-sm font-bold rounded-xl"
                style={{ background: 'var(--gold)', color: '#0a0d14' }}
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navigation
