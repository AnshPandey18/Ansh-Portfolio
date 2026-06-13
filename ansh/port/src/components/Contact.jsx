import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const socialLinks = [
  { name:'Instagram', url:'https://www.instagram.com/shooootwithme?igsh=NDl4OWJtZmp6OXNq',
    icon:<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162 0 3.403 2.759 6.162 6.162 6.162 3.403 0 6.162-2.759 6.162-6.162 0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
  { name:'LinkedIn', url:'https://www.linkedin.com/in/ansh-pandey-87b379282/',
    icon:<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
  { name:'GitHub', url:'https://github.com/AnshPandey18',
    icon:<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg> },
  { name:'LeetCode', url:'https://leetcode.com/u/Ansh_Pandey01/',
    icon:<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg> },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once:true, margin:'-80px' })
  const [form, setForm] = useState({ name:'', email:'', message:'' })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState(null)

  const inputStyle = (id) => ({
    width:'100%', padding:'13px 16px',
    background: focused===id ? 'rgba(212,162,78,0.05)' : 'var(--surface2)',
    border:`1px solid ${focused===id ? 'rgba(212,162,78,0.5)' : 'var(--border)'}`,
    boxShadow: focused===id ? '0 0 0 3px rgba(212,162,78,0.08)' : 'none',
    borderRadius:12, color:'var(--text-1)', fontSize:'0.875rem', outline:'none',
    transition:'all 0.2s ease',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
      setForm({ name:'', email:'', message:'' })
      setTimeout(() => setSubmitted(false), 5000)
    }, 1200)
  }

  return (
    <section id="contact" className="relative overflow-hidden" style={{ background:'var(--bg)' }}>
      {/* ── Full-screen final section ─────────── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="orb-drift-1 absolute will-change-transform" style={{
          width:700, height:700, bottom:'-20%', left:'-10%',
          background:'radial-gradient(circle, rgba(212,162,78,0.10) 0%, rgba(124,58,237,0.07) 50%, transparent 70%)',
          filter:'blur(80px)',
        }} />
        <div style={{
          position:'absolute', inset:0,
          background:'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(212,162,78,0.06) 0%, transparent 60%)',
        }} />
      </div>
      <div className="bg-dots absolute inset-0 pointer-events-none opacity-30" aria-hidden />

      <div className="absolute top-0 inset-x-0 h-px" style={{ background:'linear-gradient(90deg,transparent,rgba(212,162,78,0.25),transparent)' }} />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-32 md:py-40">

        {/* ── Large heading ──────────────────── */}
        <motion.div
          initial={{ opacity:0, y:32 }}
          animate={isInView ? { opacity:1, y:0 } : {}}
          transition={{ duration:0.8 }}
          className="text-center mb-20"
        >
          <span className="pill mb-6 inline-flex">Contact</span>
          <h2
            className="font-display font-black leading-tight"
            style={{ fontSize:'clamp(2.4rem,7vw,5.5rem)', color:'var(--text-1)' }}
          >
            Let's build something<br />
            <span className="gradient-text">together</span>
          </h2>
          <p className="mt-5 text-lg max-w-xl mx-auto" style={{ color:'var(--text-2)' }}>
            Have a project, collaboration, or opportunity in mind? Drop a message and I'll get back to you.
          </p>
          {/* Prominent email link */}
          <motion.a
            href="mailto:anshpandey1807@gmail.com"
            className="inline-flex items-center gap-2 mt-6 text-xl font-bold transition-all"
            style={{ color:'var(--gold)' }}
            whileHover={{ scale:1.04, textShadow:'0 0 24px rgba(212,162,78,0.6)' }}
          >
            anshpandey1807@gmail.com
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
          </motion.a>
        </motion.div>

        {/* ── Form + info ───────────────────── */}
        <div className="grid md:grid-cols-5 gap-12 md:gap-16">
          <motion.form
            onSubmit={handleSubmit}
            className="md:col-span-3 space-y-5"
            initial={{ opacity:0, x:-32 }}
            animate={isInView ? { opacity:1, x:0 } : {}}
            transition={{ duration:0.7, delay:0.2 }}
          >
            {submitted && (
              <motion.div
                initial={{ opacity:0, y:-8 }} animate={{ opacity:1, y:0 }}
                className="p-4 rounded-xl text-sm font-medium"
                style={{ background:'rgba(212,162,78,0.1)', border:'1px solid rgba(212,162,78,0.25)', color:'var(--gold)' }}
              >
                ✓ Message sent! I'll get back to you soon.
              </motion.div>
            )}

            {[
              { id:'name',  label:'Full Name',      type:'text',  ph:'Your name' },
              { id:'email', label:'Email Address',  type:'email', ph:'you@example.com' },
            ].map(f => (
              <div key={f.id}>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color:'var(--text-3)' }}>{f.label}</label>
                <input
                  type={f.type} id={f.id} name={f.id} value={form[f.id]}
                  onChange={e => setForm({...form,[f.id]:e.target.value})}
                  onFocus={() => setFocused(f.id)} onBlur={() => setFocused(null)}
                  placeholder={f.ph} required style={inputStyle(f.id)}
                />
              </div>
            ))}

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color:'var(--text-3)' }}>Message</label>
              <textarea
                name="message" value={form.message} rows={6}
                onChange={e => setForm({...form,message:e.target.value})}
                onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
                placeholder="Tell me about your project…" required
                style={{ ...inputStyle('message'), resize:'none' }}
              />
            </div>

            <motion.button
              type="submit" disabled={submitting}
              className="w-full py-4 text-sm font-bold rounded-xl flex items-center justify-center gap-2"
              style={{ background:'var(--gold)', color:'#0A0A0F' }}
              whileHover={{ scale:1.02, boxShadow:'0 8px 32px rgba(212,162,78,0.4)' }}
              whileTap={{ scale:0.97 }}
            >
              {submitting ? (
                <><svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                </svg> Sending…</>
              ) : 'Send Message →'}
            </motion.button>
          </motion.form>

          {/* Info */}
          <motion.div
            className="md:col-span-2 space-y-8"
            initial={{ opacity:0, x:32 }}
            animate={isInView ? { opacity:1, x:0 } : {}}
            transition={{ duration:0.7, delay:0.3 }}
          >
            {/* Contact cards */}
            {[
              { type:'Phone', value:'+91 9555851996', href:'tel:9555851996' },
              { type:'Email', value:'anshpandey1807@gmail.com', href:'mailto:anshpandey1807@gmail.com' },
            ].map((info, i) => (
              <motion.a
                key={i} href={info.href}
                className="flex items-start gap-4 p-5 rounded-2xl group transition-all duration-200"
                style={{ background:'var(--surface2)', border:'1px solid var(--border)' }}
                whileHover={{ borderColor:'rgba(212,162,78,0.35)', background:'rgba(212,162,78,0.05)', y:-3 }}
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background:'rgba(212,162,78,0.1)' }}>
                  {info.type==='Phone'
                    ? <svg className="w-4 h-4" style={{ color:'var(--gold)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    : <svg className="w-4 h-4" style={{ color:'var(--gold)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  }
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color:'var(--text-3)' }}>{info.type}</p>
                  <p className="text-sm font-semibold" style={{ color:'var(--text-1)' }}>{info.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Social icons */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color:'var(--text-3)' }}>Connect</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((s, i) => (
                  <motion.a
                    key={i} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.name}
                    className="p-3 rounded-xl transition-all duration-200"
                    style={{ background:'var(--surface2)', border:'1px solid var(--border)', color:'var(--text-2)' }}
                    initial={{ opacity:0, scale:0.8 }}
                    animate={isInView ? { opacity:1, scale:1 } : {}}
                    transition={{ delay:0.5+i*0.07 }}
                    whileHover={{ color:'var(--gold)', borderColor:'rgba(212,162,78,0.4)', background:'rgba(212,162,78,0.07)', y:-4, scale:1.1 }}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div className="p-4 rounded-2xl" style={{ background:'rgba(126,184,247,0.05)', border:'1px solid rgba(126,184,247,0.15)' }}>
              <div className="flex items-center gap-3 mb-1">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <p className="text-sm font-semibold" style={{ color:'var(--sky)' }}>Available for Projects</p>
              </div>
              <p className="text-xs" style={{ color:'var(--text-3)' }}>Open to freelance and internship opportunities.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
