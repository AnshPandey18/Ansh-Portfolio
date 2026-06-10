import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
}

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
    }, 1000)
  }

  const contactInfo = [
    {
      label: 'Phone',
      value: '9555851996',
      href: 'tel:9555851996',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      label: 'Email',
      value: 'anshpandey1807@gmail.com',
      href: 'mailto:anshpandey1807@gmail.com',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ]

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/shooootwithme?igsh=NDl4OWJtZmp6OXNq',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162 0 3.403 2.759 6.162 6.162 6.162 3.403 0 6.162-2.759 6.162-6.162 0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ansh-pandey-87b379282',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      url: 'https://github.com/AnshPandey18',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
    },
  ]

  return (
    <section
      id="contact"
      className="py-28 md:py-36 relative overflow-hidden"
      style={{ background: '#060810' }}
      ref={ref}
    >
      <div className="section-sep absolute top-0 inset-x-0" />

      {/* Center-top glow */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-64 pointer-events-none"
        style={{
          background:'radial-gradient(ellipse at top, rgba(13,148,136,0.12) 0%, transparent 70%)',
          filter:'blur(32px)',
        }}
      />
      <div className="dot-grid absolute inset-0 opacity-25 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={0}
          className="mb-16"
        >
          <span className="w-8 h-0.5 bg-teal-500 block mb-4" />
          <p className="text-teal-500 text-xs font-semibold uppercase tracking-widest mb-3">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Get in Touch
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-20">
          {/* Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={1}
          >
            {submitted ? (
              <div
                className="rounded-xl p-8 text-center"
                style={{ background: '#0f0f0f', border: '1px solid rgba(13,148,136,0.2)' }}
              >
                <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">Message sent</h3>
                <p className="text-gray-500 text-sm">Thanks for reaching out. I'll get back to you soon.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-teal-500 text-sm hover:text-teal-400 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                  { id: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
                ].map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block text-xs text-gray-500 font-medium mb-2 uppercase tracking-wider">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      value={formData[field.id]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required
                      className="w-full px-4 py-3 text-sm text-white placeholder-gray-600 rounded-xl outline-none transition-all"
                      style={{
                        background: 'rgba(12,14,24,0.8)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        backdropFilter: 'blur(8px)',
                      }}
                      onFocus={(e) => { e.target.style.borderColor='rgba(13,148,136,0.55)'; e.target.style.boxShadow='0 0 0 3px rgba(13,148,136,0.08)' }}
                      onBlur={(e) => { e.target.style.borderColor='rgba(255,255,255,0.08)'; e.target.style.boxShadow='none' }}
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="block text-xs text-gray-500 font-medium mb-2 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project…"
                    required
                    rows={5}
                    className="w-full px-4 py-3 text-sm text-white placeholder-gray-600 rounded-xl outline-none transition-all resize-none"
                    style={{
                      background: 'rgba(12,14,24,0.8)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      backdropFilter: 'blur(8px)',
                    }}
                    onFocus={(e) => { e.target.style.borderColor='rgba(13,148,136,0.55)'; e.target.style.boxShadow='0 0 0 3px rgba(13,148,136,0.08)' }}
                    onBlur={(e) => { e.target.style.borderColor='rgba(255,255,255,0.08)'; e.target.style.boxShadow='none' }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 text-sm font-semibold text-white rounded-xl transition-all disabled:opacity-50"
                  style={{
                    background:'linear-gradient(135deg,#0d9488,#0891b2)',
                    boxShadow:'0 0 28px rgba(13,148,136,0.3)',
                  }}
                  onMouseEnter={e => !isSubmitting && (e.currentTarget.style.boxShadow='0 0 44px rgba(13,148,136,0.55)')}
                  onMouseLeave={e => !isSubmitting && (e.currentTarget.style.boxShadow='0 0 28px rgba(13,148,136,0.3)')}
                >
                  {isSubmitting ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={2}
            className="space-y-10"
          >
            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <a
                  key={i}
                  href={info.href}
                  className="flex items-center gap-4 p-4 rounded-xl group transition-all"
                  style={{ background:'rgba(12,14,24,0.7)', border:'1px solid rgba(255,255,255,0.07)', backdropFilter:'blur(8px)' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(13,148,136,0.35)'; e.currentTarget.style.boxShadow='0 8px 32px rgba(13,148,136,0.08)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.07)'; e.currentTarget.style.boxShadow='none' }}
                >
                  <div className="w-8 h-8 rounded-md flex items-center justify-center shrink-0 text-teal-400" style={{ background: 'rgba(13,148,136,0.1)' }}>
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 uppercase tracking-wider mb-0.5">{info.label}</div>
                    <div className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div>
              <p className="text-xs text-gray-600 uppercase tracking-wider font-medium mb-4">Social</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 hover:text-teal-400 transition-colors"
                    style={{ background: '#0f0f0f', border: '1px solid rgba(255,255,255,0.07)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(13,148,136,0.3)')}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)')}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
