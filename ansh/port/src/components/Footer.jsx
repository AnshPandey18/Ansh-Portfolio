import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Footer = ({ darkMode, setDarkMode }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const year = new Date().getFullYear()

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    { name: 'Instagram', url: 'https://www.instagram.com/shooootwithme?igsh=NDl4OWJtZmp6OXNq',
      icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162 0 3.403 2.759 6.162 6.162 6.162 3.403 0 6.162-2.759 6.162-6.162 0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ansh-pandey-87b379282/',
      icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
    { name: 'GitHub', url: 'https://github.com/AnshPandey18',
      icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg> },
    { name: 'LeetCode', url: 'https://leetcode.com/u/Ansh_Pandey01/',
      icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg> },
  ]

  const scrollToSection = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer
      ref={ref}
      className="relative overflow-hidden"
      style={{
        background: 'var(--bg)',
        borderTop: '1px solid rgba(212,168,67,0.12)',
      }}
    >
      {/* Top gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(212,168,67,0.25), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <button
              onClick={() => scrollToSection('#hero')}
              className="text-2xl font-black mb-4 block text-left"
            >
              <span style={{ color: 'var(--gold)' }}>A</span>
              <span style={{ color: 'var(--text-1)' }}>nsh</span>
              <span style={{ color: 'var(--text-2)', fontWeight: 400 }}> Pandey</span>
            </button>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-2)' }}>
              Visual storyteller and full-stack developer crafting immersive experiences through photography, videography, and modern web development.
            </p>
            <div className="flex gap-2.5">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="p-2.5 rounded-lg transition-all duration-200"
                  style={{
                    background: 'var(--surface2)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-2)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'var(--gold)'
                    e.currentTarget.style.borderColor = 'rgba(212,168,67,0.3)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'var(--text-2)'
                    e.currentTarget.style.borderColor = 'var(--border)'
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: 'var(--text-3)' }}>Navigation</h4>
            <nav className="space-y-3">
              {navItems.map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={e => { e.preventDefault(); scrollToSection(item.href) }}
                  className="block text-sm transition-colors duration-200"
                  style={{ color: 'var(--text-2)' }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-2)' }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Settings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: 'var(--text-3)' }}>Preferences</h4>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="flex items-center gap-3 p-4 rounded-xl w-full text-left transition-all duration-200"
              style={{
                background: 'var(--surface2)',
                border: '1px solid var(--border)',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(212,168,67,0.25)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)' }}
            >
              <div
                className="relative w-10 h-5.5 rounded-full transition-colors duration-300 flex-shrink-0"
                style={{
                  background: darkMode ? 'var(--gold)' : 'var(--border)',
                  height: '22px',
                  width: '40px',
                }}
              >
                <motion.div
                  className="absolute top-0.5 w-4 h-4 bg-white rounded-full shadow"
                  animate={{ x: darkMode ? 18 : 2 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              </div>
              <span className="text-sm font-medium" style={{ color: 'var(--text-2)' }}>
                {darkMode ? 'Dark' : 'Light'} Mode
              </span>
            </button>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8"
          style={{ borderTop: '1px solid var(--border)' }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-xs" style={{ color: 'var(--text-3)' }}>
            © {year} Ansh Pandey. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'var(--text-3)' }}>
            Built with <span style={{ color: 'var(--gold)' }}>React</span> · <span style={{ color: 'var(--sky)' }}>Framer Motion</span> · <span style={{ color: 'var(--gold)' }}>Tailwind CSS</span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
