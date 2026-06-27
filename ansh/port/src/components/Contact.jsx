import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

// ─────────────────────────────────────────────────────────────
//  EMAILJS CONFIG
//  1. Go to https://www.emailjs.com  →  sign up free
//  2. Add Email Service  →  connect Gmail  →  copy Service ID
//  3. Create Email Template with variables:
//       {{from_name}}  {{from_email}}  {{message}}  {{to_name}}
//     Copy Template ID
//  4. Account → API Keys → copy Public Key
//  Then replace the three strings below:
// ─────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'  // e.g. 'template_xyz456'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'   // e.g. 'a1B2c3D4e5F6g7H8'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
})

/* ── Sparkle / cloud decorations for cobalt bg ── */
const CloudDot = ({ style }) => (
  <svg width="60" height="36" viewBox="0 0 80 48" fill="none" style={style}>
    <ellipse cx="40" cy="30" rx="28" ry="14" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
    <ellipse cx="27" cy="24" rx="15" ry="13" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
    <ellipse cx="54" cy="27" rx="13" ry="11" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
  </svg>
)

const SOCIAL = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/shooootwithme?igsh=NDl4OWJtZmp6OXNq',
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162 0 3.403 2.759 6.162 6.162 6.162 3.403 0 6.162-2.759 6.162-6.162 0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ansh-pandey-87b379282/',
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: 'GitHub',
    url: 'https://github.com/AnshPandey18',
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
      </svg>
    ),
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/Ansh_Pandey01/',
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
      </svg>
    ),
  },
]

export default function Contact() {
  const formRef = useRef(null)
  const [form, setForm]         = useState({ from_name: '', from_email: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [sent, setSent]         = useState(false)
  const [error, setError]       = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      )
      setSent(true)
      setForm({ from_name: '', from_email: '', message: '' })
    } catch (err) {
      console.error('EmailJS error:', err)
      setError('Something went wrong. Please email me directly at anshpandey1807@gmail.com')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" style={{ background: '#3366e0', position: 'relative', overflow: 'hidden' }}>

      {/* Wavy top divider */}
      <div className="wavy-divider">
        <svg viewBox="0 0 1440 64" preserveAspectRatio="none" fill="none" style={{ display:'block', width:'100%' }}>
          <path d="M0 64C240 0 480 64 720 32C960 0 1200 64 1440 32V0H0V64Z" fill="#f5f5f5"/>
        </svg>
      </div>

      {/* Floating cloud decorations */}
      {[
        { top:'8%',  left:'4%',  size:72, delay:0 },
        { top:'15%', right:'6%', size:56, delay:2 },
        { top:'55%', left:'8%',  size:48, delay:4 },
        { top:'70%', right:'12%',size:64, delay:1.5 },
      ].map((c, i) => (
        <motion.div key={i}
          style={{ position:'absolute', top:c.top, left:c.left, right:c.right, pointerEvents:'none' }}
          animate={{ y:[0,-10,0], x:[0,5,0] }}
          transition={{ duration:8+i*2, repeat:Infinity, ease:'easeInOut', delay:c.delay }}
        >
          <CloudDot style={{ width:c.size }} />
        </motion.div>
      ))}

      {/* Sparkle dots */}
      {[
        { top:'20%', left:'25%' }, { top:'40%', right:'18%' },
        { top:'65%', left:'40%' }, { top:'12%', right:'30%' },
      ].map((s, i) => (
        <motion.div key={i}
          style={{ position:'absolute', top:s.top, left:s.left, right:s.right, pointerEvents:'none',
            width:8, height:8, borderRadius:'50%',
            background: i%2===0 ? '#a3e635' : '#fbbf25',
            border:'1px solid rgba(255,255,255,0.4)',
          }}
          animate={{ scale:[1,1.8,1], opacity:[0.6,1,0.6] }}
          transition={{ duration:3+i, repeat:Infinity, ease:'easeInOut', delay:i*0.7 }}
        />
      ))}

      <div style={{ maxWidth:1200, margin:'0 auto', padding:'20px 24px 80px', position:'relative', zIndex:10 }}>

        {/* Eyebrow */}
        <motion.div {...fadeUp(0)} className="section-eyebrow" style={{ marginBottom:16 }}>
          <span className="chip">Contact</span>
        </motion.div>

        {/* Heading */}
        <motion.h2 {...fadeUp(0.05)} style={{
          fontWeight:700, fontSize:'clamp(32px,6vw,56px)', letterSpacing:'-0.96px',
          lineHeight:1.14, color:'#fff', textAlign:'center', maxWidth:640, margin:'0 auto 14px',
        }}>
          Let's build something<br/>together
        </motion.h2>

        {/* Direct email link */}
        <motion.div {...fadeUp(0.1)} style={{ textAlign:'center', marginBottom:52 }}>
          <a
            href="mailto:anshpandey1807@gmail.com"
            style={{
              fontWeight:700, fontSize:'clamp(14px,2.5vw,22px)',
              color:'#a3e635', letterSpacing:'-0.216px',
              textDecoration:'none', borderBottom:'2px solid #a3e635',
              paddingBottom:2,
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity='0.8' }}
            onMouseLeave={e => { e.currentTarget.style.opacity='1' }}
          >
            anshpandey1807@gmail.com ↗
          </a>
        </motion.div>

        {/* ── 2-col grid ── */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px,1fr))', gap:24 }}>

          {/* ── Form ── */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            {...fadeUp(0.15)}
            style={{
              background:'#fff',
              border:'1px solid #000',
              borderRadius:20,
              padding:28,
              boxShadow:'rgb(10,10,13) 4px 4px 0px 0px',
            }}
          >
            {/* Success banner */}
            {sent && (
              <motion.div
                initial={{ opacity:0, y:-8 }} animate={{ opacity:1, y:0 }}
                style={{
                  background:'#a3e635', border:'1px solid #000', borderRadius:10,
                  padding:'12px 16px', marginBottom:20,
                  fontWeight:700, fontSize:14, color:'#000',
                  display:'flex', alignItems:'center', gap:8,
                }}
              >
                <svg width="18" height="18" fill="none" stroke="#000" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                </svg>
                Message sent! I'll get back to you soon.
              </motion.div>
            )}

            {/* Error banner */}
            {error && (
              <motion.div
                initial={{ opacity:0, y:-8 }} animate={{ opacity:1, y:0 }}
                style={{
                  background:'#fee2e2', border:'1px solid #f87171', borderRadius:10,
                  padding:'12px 16px', marginBottom:20,
                  fontWeight:500, fontSize:13, color:'#991b1b',
                }}
              >
                {error}
              </motion.div>
            )}

            {/* Fields */}
            {[
              { id:'from_name',  label:'Full Name',      type:'text',  ph:'Your name' },
              { id:'from_email', label:'Email Address',  type:'email', ph:'you@example.com' },
            ].map(f => (
              <div key={f.id} style={{ marginBottom:16 }}>
                <label style={{
                  display:'block', fontWeight:700, fontSize:12, color:'#000',
                  marginBottom:6, letterSpacing:'0.06em', textTransform:'uppercase',
                }}>
                  {f.label}
                </label>
                <input
                  className="bf-input"
                  type={f.type}
                  name={f.id}
                  value={form[f.id]}
                  onChange={e => setForm({ ...form, [f.id]: e.target.value })}
                  placeholder={f.ph}
                  required
                />
              </div>
            ))}

            {/* Message */}
            <div style={{ marginBottom:22 }}>
              <label style={{
                display:'block', fontWeight:700, fontSize:12, color:'#000',
                marginBottom:6, letterSpacing:'0.06em', textTransform:'uppercase',
              }}>
                Message
              </label>
              <textarea
                className="bf-input"
                name="message"
                value={form.message}
                rows={5}
                onChange={e => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project…"
                required
                style={{ resize:'none' }}
              />
            </div>

            {/* Hidden field — lets EmailJS know who receives it */}
            <input type="hidden" name="to_name" value="Ansh Pandey" />

            <motion.button
              type="submit"
              disabled={submitting}
              className="btn-lime"
              style={{ width:'100%', justifyContent:'center', fontSize:16, padding:'13px 24px', opacity: submitting ? 0.7 : 1 }}
              whileHover={!submitting ? { scale:1.02 } : {}}
              whileTap={!submitting ? { scale:0.97 } : {}}
            >
              {submitting ? (
                <>
                  <svg className="animate-spin" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" d="M12 2a10 10 0 0 1 10 10"/>
                  </svg>
                  Sending…
                </>
              ) : (
                <>
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                  </svg>
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>

          {/* ── Contact info ── */}
          <motion.div {...fadeUp(0.2)} style={{ display:'flex', flexDirection:'column', gap:14 }}>

            {/* Direct contact cards */}
            {[
              { label:'Phone', value:'+91 9555851996', href:'tel:9555851996', bg:'#fef3c8',
                icon:<svg width="18" height="18" fill="none" stroke="#000" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>,
              },
              { label:'Email', value:'anshpandey1807@gmail.com', href:'mailto:anshpandey1807@gmail.com', bg:'#d2fae5',
                icon:<svg width="18" height="18" fill="none" stroke="#000" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>,
              },
            ].map((c, i) => (
              <motion.a
                key={i} href={c.href}
                style={{
                  display:'flex', alignItems:'center', gap:14,
                  background:c.bg, border:'1px solid #000', borderRadius:14,
                  padding:'16px 20px', textDecoration:'none',
                  boxShadow:'rgb(10,10,13) 2px 2px 0px 0px',
                }}
                whileHover={{ y:-2, boxShadow:'rgb(10,10,13) 3px 3px 0px 0px' }}
                transition={{ duration:0.12 }}
              >
                <div style={{
                  width:40, height:40, borderRadius:'50%', background:'#fff',
                  border:'1px solid #000', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0,
                }}>
                  {c.icon}
                </div>
                <div>
                  <div style={{ fontWeight:700, fontSize:11, color:'#737373', textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:2 }}>{c.label}</div>
                  <div style={{ fontWeight:700, fontSize:14, color:'#000' }}>{c.value}</div>
                </div>
              </motion.a>
            ))}

            {/* Social links grid */}
            <div style={{
              background:'#fff', border:'1px solid #000', borderRadius:14, padding:20,
              boxShadow:'rgb(10,10,13) 2px 2px 0px 0px',
            }}>
              <p style={{ fontWeight:700, fontSize:12, color:'#000', textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:14 }}>
                Connect with me
              </p>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:8 }}>
                {SOCIAL.map(s => (
                  <motion.a
                    key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
                    style={{
                      display:'flex', alignItems:'center', gap:8,
                      padding:'9px 12px', border:'1px solid #000', borderRadius:8,
                      fontSize:14, fontWeight:500, color:'#000', textDecoration:'none',
                      background:'#fff', boxShadow:'rgb(10,10,13) 1px 1px 0px 0px',
                    }}
                    whileHover={{ background:'#a3e635', y:-1 }}
                    transition={{ duration:0.12 }}
                  >
                    {s.icon}
                    {s.name}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <motion.div
              style={{
                display:'flex', alignItems:'center', gap:12,
                background:'#a3e635', border:'1px solid #000', borderRadius:14,
                padding:'16px 20px', boxShadow:'rgb(10,10,13) 2px 2px 0px 0px',
              }}
              animate={{ scale:[1, 1.015, 1] }}
              transition={{ duration:3, repeat:Infinity, ease:'easeInOut' }}
            >
              <div style={{
                width:12, height:12, borderRadius:'50%', background:'#15803d',
                flexShrink:0, boxShadow:'0 0 0 3px rgba(21,128,61,0.25)',
              }} />
              <div>
                <div style={{ fontWeight:700, fontSize:15, color:'#000' }}>Available for Projects</div>
                <div style={{ fontWeight:500, fontSize:13, color:'#000', opacity:0.65 }}>Open to freelance &amp; internships</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Wavy bottom divider */}
      <div className="wavy-divider">
        <svg viewBox="0 0 1440 48" preserveAspectRatio="none" fill="none" style={{ display:'block', width:'100%' }}>
          <path d="M0 0C240 48 480 0 720 24C960 48 1200 0 1440 24V48H0V0Z" fill="#f5f5f5"/>
        </svg>
      </div>
    </section>
  )
}
