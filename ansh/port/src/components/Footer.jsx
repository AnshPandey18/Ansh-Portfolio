import { motion } from 'framer-motion'

const Footer = ({ darkMode, setDarkMode }) => {
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const currentYear = new Date().getFullYear()

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
    <footer className="bg-gray900 border-t border-gray700 py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-tealAccent">A</span>nsh Pandey
            </h3>
            <p className="text-gray500 text-sm">
              Visual storyteller and front-end developer crafting immersive experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Navigation</h4>
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href)
                  }}
                  className="text-gray500 hover:text-tealAccent transition-colors text-sm"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Dark Mode Toggle */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Preferences</h4>
            <button
              onClick={toggleDarkMode}
              className="flex items-center space-x-3 text-gray500 hover:text-white transition-colors"
              aria-label="Toggle dark mode"
            >
              <div className="relative w-12 h-6 bg-gray800 rounded-full border border-gray700">
                <motion.div
                  className="absolute top-0.5 left-0.5 w-5 h-5 bg-tealAccent rounded-full"
                  animate={{
                    x: darkMode ? 0 : 24,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 30,
                  }}
                />
              </div>
              <span className="text-sm">{darkMode ? 'Dark' : 'Light'} Mode</span>
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray500 text-sm">
            © {currentYear} Ansh Pandey. All rights reserved.
          </p>
          <p className="text-gray500 text-sm mt-4 md:mt-0">
            Built with React, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

