import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [focusedField, setFocusedField] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: '', email: '', message: '' })
      alert('Thank you for your message!')
    }, 1000)
  }

  const contactInfo = [
    {
      type: 'Phone',
      value: '9555851996',
      href: 'tel:9555851996',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      primary: true,
    },
    {
      type: 'Email',
      value: 'anshpandey1807@gmail.com',
      href: 'mailto:anshpandey1807@gmail.com',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      primary: true,
    },
  ]

  const socialLinks = [
    {
      name: 'Instagram (Photography)',
      url: 'https://www.instagram.com/shooootwithme?igsh=NDl4OWJtZmp6OXNq',
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162 0 3.403 2.759 6.162 6.162 6.162 3.403 0 6.162-2.759 6.162-6.162 0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ansh-pandey-87b379282/',
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      name: 'GitHub',
      url: 'https://github.com/AnshPandey18',
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
        </svg>
      ),
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/Ansh_Pandey01/',
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
        </svg>
      ),
    },
  ]

  return (
    <section id="contact" className="py-40 md:py-48 bg-black relative overflow-hidden">
      {/* Enhanced Background effects */}
      {[1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: `${400 + i * 150}px`,
            height: `${400 + i * 150}px`,
            top: `${10 + i * 30}%`,
            left: `${20 + i * 10}%`,
            background: `radial-gradient(circle, rgba(13, 148, 136, ${0.15 - i * 0.05}), transparent)`,
          }}
          animate={{
            scale: [1, 1.4 + i * 0.1, 1],
            x: [0, 60 + i * 20, 0],
            y: [0, 40 + i * 20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 14 + i * 2,
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
            linear-gradient(rgba(13, 148, 136, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(13, 148, 136, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
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
              Get in <span className="gradient-text">Touch</span>
              <motion.span
                className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-2 bg-gradient-to-r from-tealAccent via-tealLight to-tealAccent"
                initial={{ width: 0 }}
                animate={isInView ? { width: '400px' } : {}}
                transition={{ duration: 1.2, delay: 0.4 }}
              />
            </span>
          </motion.h2>

          <motion.p
            className="text-center text-gray400 mb-20 text-2xl font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Let's collaborate on your next project
          </motion.p>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Ultra-Enhanced 3D Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-8"
              initial={{ opacity: 0, x: -100, y: 40, rotateY: -40, scale: 0.9 }}
              animate={isInView ? { opacity: 1, x: 0, y: 0, rotateY: 0, scale: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }}
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1200px',
              }}
            >
              {[
                { id: 'name', label: 'Name', type: 'text', icon: '👤' },
                { id: 'email', label: 'Email', type: 'email', icon: '📧' },
                { id: 'message', label: 'Message', type: 'textarea', icon: '💬' },
              ].map((field) => (
                <motion.div
                  key={field.id}
                  className="relative group"
                  whileHover={{ scale: 1.02, y: -2 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <label
                    htmlFor={field.id}
                    className="block text-base font-bold mb-4 text-gray200 flex items-center gap-3"
                  >
                    <span className="text-2xl">{field.icon}</span>
                    {field.label}
                  </label>
                  {field.type === 'textarea' ? (
                    <motion.textarea
                      id={field.id}
                      name={field.id}
                      value={formData[field.id]}
                      onChange={handleChange}
                      onFocus={() => setFocusedField(field.id)}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows="7"
                      className="w-full px-8 py-6 glass-dark border-2 border-gray700 rounded-2xl focus:outline-none focus:border-tealAccent transition-all text-white placeholder-gray500 resize-none text-lg"
                      whileFocus={{
                        scale: 1.03,
                        borderColor: '#0d9488',
                        boxShadow: '0 0 40px rgba(13, 148, 136, 0.4)',
                        rotateX: -3,
                      }}
                      style={{
                        transform: focusedField === field.id ? 'translateZ(30px)' : 'translateZ(0)',
                      }}
                    />
                  ) : (
                    <motion.input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      value={formData[field.id]}
                      onChange={handleChange}
                      onFocus={() => setFocusedField(field.id)}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-8 py-6 glass-dark border-2 border-gray700 rounded-2xl focus:outline-none focus:border-tealAccent transition-all text-white placeholder-gray500 text-lg"
                      whileFocus={{
                        scale: 1.03,
                        borderColor: '#0d9488',
                        boxShadow: '0 0 40px rgba(13, 148, 136, 0.4)',
                        rotateX: -3,
                      }}
                      style={{
                        transform: focusedField === field.id ? 'translateZ(30px)' : 'translateZ(0)',
                      }}
                    />
                  )}
                  {/* Enhanced glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-tealAccent/15 rounded-2xl -z-10"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: focusedField === field.id ? 1.05 : 0,
                      opacity: focusedField === field.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.4 }}
                    style={{
                      filter: 'blur(20px)',
                    }}
                  />
                  {/* Animated border glow */}
                  <motion.div
                    className="absolute inset-0 border-2 border-tealAccent rounded-2xl opacity-0 pointer-events-none"
                    animate={{
                      opacity: focusedField === field.id ? [0.5, 1, 0.5] : 0,
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                </motion.div>
              ))}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-10 py-7 text-white font-black text-xl rounded-2xl relative overflow-hidden group shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, #0d9488, #14b8a6, #0d9488)',
                  backgroundSize: '200% 100%',
                  transformStyle: 'preserve-3d',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                whileHover={{
                  scale: 1.08,
                  boxShadow: '0 20px 60px rgba(13, 148, 136, 0.7)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {isSubmitting ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        ⏳
                      </motion.span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <motion.span
                        animate={{ x: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-2xl"
                      >
                        →
                      </motion.span>
                    </>
                  )}
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
                {/* Multiple glow layers */}
                {[1, 2, 3].map((glow) => (
                  <motion.div
                    key={glow}
                    className="absolute -inset-2 bg-tealAccent blur-2xl opacity-0 group-hover:opacity-50 -z-10"
                    style={{
                      filter: `blur(${glow * 10}px)`,
                      transform: `scale(${glow})`,
                    }}
                    animate={{
                      opacity: [0, 0.3 / glow, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: glow * 0.3,
                    }}
                  />
                ))}
              </motion.button>
            </motion.form>

            {/* Ultra-Enhanced 3D Contact Info */}
            <motion.div
              className="space-y-10"
              initial={{ opacity: 0, x: 100, y: 40, rotateY: 40, scale: 0.9 }}
              animate={isInView ? { opacity: 1, x: 0, y: 0, rotateY: 0, scale: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1200px',
              }}
            >
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-8 p-8 rounded-3xl border-2 transition-all relative group preserve-3d overflow-hidden"
                    style={{
                      background: info.primary
                        ? 'linear-gradient(135deg, rgba(13, 148, 136, 0.15), rgba(20, 184, 166, 0.08))'
                        : 'rgba(255, 255, 255, 0.02)',
                      borderColor: info.primary ? 'rgba(13, 148, 136, 0.4)' : 'rgba(255, 255, 255, 0.1)',
                    }}
                    whileHover={{
                      scale: 1.08,
                      rotateY: 8,
                      rotateX: 3,
                      borderColor: 'rgba(13, 148, 136, 0.8)',
                      boxShadow: '0 25px 60px rgba(13, 148, 136, 0.5)',
                      z: 50,
                    }}
                    initial={{ opacity: 0, y: 30, rotateY: -20 }}
                    animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                    transition={{ delay: 0.7 + index * 0.15, duration: 0.8 }}
                  >
                    <motion.div
                      className={`p-5 rounded-2xl ${info.primary ? 'bg-tealAccent/25' : 'bg-gray800/50'} relative z-10`}
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.15,
                      }}
                      transition={{ duration: 0.6 }}
                      style={{
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      <span className={info.primary ? 'text-tealAccent' : 'text-gray-500'}>
                        {info.icon}
                      </span>
                      {/* Icon glow */}
                      <motion.div
                        className="absolute inset-0 bg-tealAccent/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                    <div className="flex-1 relative z-10">
                      <p className="text-sm text-gray-400 mb-2 font-semibold uppercase tracking-wider">{info.type}</p>
                      <p className={`font-black text-xl ${info.primary ? 'text-tealAccent' : 'text-white'}`}>
                        {info.value}
                      </p>
                    </div>
                    {/* Animated background overlay */}
                    <motion.div
                      className="absolute inset-0 bg-tealAccent/10 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{
                        transform: 'translateZ(-10px)',
                      }}
                      animate={{
                        backgroundPosition: ['0% 0%', '100% 100%'],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        repeatType: 'reverse',
                      }}
                    />
                    {/* Glow effect */}
                    <motion.div
                      className="absolute -inset-2 bg-tealAccent/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 -z-10"
                      transition={{ duration: 0.4 }}
                    />
                  </motion.a>
                ))}
              </div>

              <div>
                <motion.h3
                  className="text-3xl md:text-4xl font-black mb-8 gradient-text relative inline-block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1 }}
                >
                  Connect with me
                  <motion.span
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-tealAccent to-tealLight"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '100%' } : {}}
                    transition={{ delay: 1.2, duration: 0.8 }}
                  />
                </motion.h3>
                <div className="flex flex-wrap gap-5">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-6 glass-dark border-2 border-gray-700 rounded-2xl hover:border-tealAccent transition-all relative group"
                      whileHover={{
                        scale: 1.2,
                        rotateY: 180,
                        y: -8,
                        borderColor: '#0d9488',
                        boxShadow: '0 15px 50px rgba(13, 148, 136, 0.6)',
                        z: 50,
                      }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, scale: 0, rotateY: -90 }}
                      animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                      transition={{ duration: 0.6, delay: 1.1 + index * 0.15 }}
                      style={{
                        transformStyle: 'preserve-3d',
                      }}
                      aria-label={social.name}
                    >
                      <motion.div
                        className="text-tealAccent relative z-10"
                        animate={{
                          rotateY: [0, 360],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        {social.icon}
                      </motion.div>
                      {/* Multiple glow layers */}
                      {[1, 2].map((glow) => (
                        <motion.div
                          key={glow}
                          className="absolute inset-0 bg-tealAccent/20 rounded-2xl opacity-0 group-hover:opacity-100"
                          style={{
                            filter: `blur(${glow * 5}px)`,
                            transform: `scale(${1 + glow * 0.1})`,
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      ))}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
