import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark')
    }
    setIsLoading(false)
  }, [])

  useEffect(() => {
    if (!isLoading) {
      if (darkMode) {
        document.documentElement.classList.add('dark')
        document.documentElement.classList.remove('light')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.classList.add('light')
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      }
    }
  }, [darkMode, isLoading])

  if (isLoading) {
    return null
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  )
}

export default App

