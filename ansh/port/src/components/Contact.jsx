import { useState } from 'react'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
})

/* Inline SVG fish for decoration */
const FishSVG = ({ size = 36, style = {} }) => (
  <svg width={size} height={size * 0.7} viewBox="0 0 36 25" fill="none" style={style}>
    <path d="M2 12.5C2 12.5 9 3 18 3C26 3 32 8 32 12.5C32 17 26 22 18 22C9 22 2 12.5 2 12.5Z" fill="#b7eaf6" stroke="#000" strokeWidth="1.5"/>
    <circle cx="25" cy="9" r="1.5" fill="#000"/>
    <path d="M32 6L36 3M32 19L36 22" stroke="#000" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

const SOCIAL = [
  { name: 'Instagram', url: 'https://www.instagram.com/shooootwithme?igsh=NDl4OWJtZmp6OXNq', icon: '📷' },
  { name: 'LinkedIn',  url: 'https://www.linkedin.com/in/ansh-pandey-87b379282/',           icon: '💼' },
  { name: 'GitHub',    url: 'https://github.com/AnshPandey18',                               icon: '⌨️' },
  { name: 'LeetCode',  url: 'https://leetcode.com/u/Ansh_Pandey01/',                         icon: '🔢' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => { setSubmitting(false); setSent(true); setForm({ name: '', email: '', message: '' }) }, 1200)
  }

  return (
    <section id="contact" style={{ background: '#3366e0', position: 'relative', overflow: 'hidden' }}>
      {/* Wavy top */}
      <div className="wavy-divider">
        <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display:'block', width:'100%' }}>
          <path d="M0 64C240 0 480 64 720 32C960 0 1200 64 1440 32V0H0V64Z" fill="#f5f5f5"/>
        </svg>
      </div>

      {/* Floating fish decorations */}
      <FishSVG size={52} style={{ position:'absolute', top:80, left:'5%', opacity:0.7, animation:'float-fish 8s ease-in-out infinite' }} />
      <FishSVG size={36} style={{ position:'absolute', bottom:120, right:'8%', opacity:0.6, animation:'float-fish 10s ease-in-out infinite 3s' }} />
      <FishSVG size={28} style={{ position:'absolute', top:200, right:'20%', opacity:0.5, animation:'float-fish 7s ease-in-out infinite 1s' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '20px 24px 80px', position: 'relative', zIndex: 10 }}>

        {/* Eyebrow */}
        <motion.div {...fadeUp(0)} className="section-eyebrow" style={{ marginBottom: 16 }}>
          <span className="chip">Contact</span>
        </motion.div>

        <motion.h2 {...fadeUp(0.05)} style={{
          fontWeight: 700, fontSize: 'clamp(32px,6vw,56px)', letterSpacing: '-0.96px',
          lineHeight: 1.14, color: '#fff', textAlign: 'center', maxWidth: 640, margin: '0 auto 16px',
        }}>
          Let's build something together
        </motion.h2>

        <motion.a
          {...fadeUp(0.1)}
          href="mailto:anshpandey1807@gmail.com"
          style={{
            display: 'block', textAlign: 'center',
            fontWeight: 700, fontSize: 'clamp(16px,3vw,28px)',
            color: '#a3e635', textDecoration: 'underline',
            marginBottom: 56, letterSpacing: '-0.216px',
          }}
          whileHover={{ scale: 1.02 }}
        >
          anshpandey1807@gmail.com ↗
        </motion.a>

        {/* 2-col: form + info */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>

          {/* Form */}
          <motion.form
            {...fadeUp(0.15)}
            onSubmit={handleSubmit}
            style={{
              background: '#fff',
              border: '1px solid #000',
              borderRadius: 20,
              padding: 28,
              boxShadow: 'rgb(10,10,13) 4px 4px 0px 0px',
            }}
          >
            {sent && (
              <div style={{
                background: '#a3e635', border: '1px solid #000', borderRadius: 8,
                padding: '10px 16px', marginBottom: 16, fontWeight: 700, fontSize: 14, color: '#000',
              }}>
                ✓ Message sent! I'll get back to you soon.
              </div>
            )}

            {[
              { id: 'name', label: 'Full Name', type: 'text', ph: 'Your name' },
              { id: 'email', label: 'Email Address', type: 'email', ph: 'you@example.com' },
            ].map(f => (
              <div key={f.id} style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontWeight: 700, fontSize: 13, color: '#000', marginBottom: 6, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
                  {f.label}
                </label>
                <input
                  className="bf-input"
                  type={f.type} name={f.id} value={form[f.id]}
                  onChange={e => setForm({ ...form, [f.id]: e.target.value })}
                  placeholder={f.ph} required
                />
              </div>
            ))}

            <div style={{ marginBottom: 20 }}>
              <label style={{ display: 'block', fontWeight: 700, fontSize: 13, color: '#000', marginBottom: 6, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
                Message
              </label>
              <textarea
                className="bf-input"
                name="message" value={form.message} rows={5}
                onChange={e => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project…" required
                style={{ resize: 'none' }}
              />
            </div>

            <button
              type="submit" disabled={submitting}
              className="btn-lime"
              style={{ width: '100%', justifyContent: 'center', fontSize: 16, padding: '12px 24px' }}
            >
              {submitting ? 'Sending…' : 'Send Message →'}
            </button>
          </motion.form>

          {/* Contact info */}
          <motion.div {...fadeUp(0.2)} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

            {[
              { label: 'Phone', value: '+91 9555851996', href: 'tel:9555851996', bg: '#fef3c8' },
              { label: 'Email', value: 'anshpandey1807@gmail.com', href: 'mailto:anshpandey1807@gmail.com', bg: '#d2fae5' },
            ].map((c, i) => (
              <a
                key={i} href={c.href}
                style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  background: c.bg, border: '1px solid #000', borderRadius: 14,
                  padding: '16px 20px', textDecoration: 'none',
                  boxShadow: 'rgb(10,10,13) 2px 2px 0px 0px',
                  transition: 'transform 0.12s ease, box-shadow 0.12s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-1px,-1px)'; e.currentTarget.style.boxShadow = 'rgb(10,10,13) 3px 3px 0px 0px' }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = 'rgb(10,10,13) 2px 2px 0px 0px' }}
              >
                <div style={{
                  width: 40, height: 40, borderRadius: '50%', background: '#fff',
                  border: '1px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <svg width="18" height="18" fill="none" stroke="#000" strokeWidth="1.5" viewBox="0 0 24 24">
                    {c.label === 'Phone'
                      ? <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      : <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    }
                  </svg>
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 12, color: '#737373', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 2 }}>{c.label}</div>
                  <div style={{ fontWeight: 700, fontSize: 15, color: '#000' }}>{c.value}</div>
                </div>
              </a>
            ))}

            {/* Social icons */}
            <div style={{
              background: '#fff', border: '1px solid #000', borderRadius: 14, padding: 20,
              boxShadow: 'rgb(10,10,13) 2px 2px 0px 0px',
            }}>
              <p style={{ fontWeight: 700, fontSize: 13, color: '#000', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 14 }}>
                Connect
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                {SOCIAL.map(s => (
                  <a
                    key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
                    style={{
                      display: 'flex', alignItems: 'center', gap: 8,
                      padding: '8px 12px', border: '1px solid #000', borderRadius: 8,
                      fontSize: 14, fontWeight: 500, color: '#000', textDecoration: 'none',
                      boxShadow: 'rgb(10,10,13) 1px 1px 0px 0px',
                      background: '#fff',
                      transition: 'background 0.12s ease',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#a3e635' }}
                    onMouseLeave={e => { e.currentTarget.style.background = '#fff' }}
                  >
                    <span style={{ fontSize: 16 }}>{s.icon}</span>
                    {s.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability pill */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 10,
              background: '#a3e635', border: '1px solid #000', borderRadius: 14,
              padding: '14px 20px', boxShadow: 'rgb(10,10,13) 2px 2px 0px 0px',
            }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#15803d', flexShrink: 0 }} />
              <div>
                <div style={{ fontWeight: 700, fontSize: 15, color: '#000' }}>Available for Projects</div>
                <div style={{ fontWeight: 500, fontSize: 13, color: '#000', opacity: 0.7 }}>Open to freelance & internships</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wavy bottom */}
      <div className="wavy-divider">
        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display:'block', width:'100%' }}>
          <path d="M0 0C240 48 480 0 720 24C960 48 1200 0 1440 24V48H0V0Z" fill="#f5f5f5"/>
        </svg>
      </div>
    </section>
  )
}
