const NAV = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
]

const SOCIALS = [
  { name: 'GitHub',    href: 'https://github.com/AnshPandey18',
    icon: <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg>,
  },
  { name: 'LinkedIn',  href: 'https://www.linkedin.com/in/ansh-pandey-87b379282/',
    icon: <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  },
  { name: 'Instagram', href: 'https://www.instagram.com/shooootwithme?igsh=NDl4OWJtZmp6OXNq',
    icon: <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162 0 3.403 2.759 6.162 6.162 6.162 3.403 0 6.162-2.759 6.162-6.162 0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>,
  },
  { name: 'LeetCode',  href: 'https://leetcode.com/u/Ansh_Pandey01/',
    icon: <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>,
  },
]

const scrollTo = href => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: '#f5f5f5', borderTop: '1px solid #e5e5e5' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 40, marginBottom: 40 }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              {/* AP monogram logo */}
              <svg width="34" height="34" viewBox="0 0 100 100" fill="none">
                <path d="M18 25 Q8 50 20 75"  stroke="#a3e635" strokeWidth="3"  strokeLinecap="round" fill="none"/>
                <path d="M82 25 Q92 50 80 78" stroke="#a3e635" strokeWidth="3"  strokeLinecap="round" fill="none"/>
                <path d="M15 80 L38 20 L55 60" stroke="#a3e635" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <path d="M25 58 L48 58"        stroke="#a3e635" strokeWidth="5"  strokeLinecap="round" fill="none"/>
                <path d="M50 80 L50 22"        stroke="#a3e635" strokeWidth="7"  strokeLinecap="round" fill="none"/>
                <path d="M50 22 Q80 22 80 43 Q80 62 50 60" stroke="#a3e635" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
              <span style={{ fontWeight: 700, fontSize: 18, color: '#000', letterSpacing: '-0.5px' }}>Ansh Pandey</span>
            </div>
            <p style={{ fontWeight: 500, fontSize: 14, color: '#737373', lineHeight: 1.6, maxWidth: 240 }}>
              Visual storyteller & full-stack developer from Greater Noida, India.
              Photography · Videography · Code.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p style={{ fontWeight: 700, fontSize: 13, color: '#000', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 16 }}>
              Navigation
            </p>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {NAV.map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={e => { e.preventDefault(); scrollTo(item.href) }}
                  style={{ fontWeight: 500, fontSize: 15, color: '#333', textDecoration: 'none', transition: 'color 0.15s' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#000' }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#333' }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontWeight: 700, fontSize: 13, color: '#000', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 16 }}>
              Get in Touch
            </p>
            <a href="mailto:anshpandey1807@gmail.com" style={{ display: 'block', fontWeight: 500, fontSize: 14, color: '#333', textDecoration: 'none', marginBottom: 8 }}
              onMouseEnter={e => { e.currentTarget.style.color = '#000' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#333' }}>
              anshpandey1807@gmail.com
            </a>
            <a href="tel:9555851996" style={{ display: 'block', fontWeight: 500, fontSize: 14, color: '#333', textDecoration: 'none', marginBottom: 20 }}
              onMouseEnter={e => { e.currentTarget.style.color = '#000' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#333' }}>
              +91 9555851996
            </a>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <a
                href="#contact"
                onClick={e => { e.preventDefault(); scrollTo('#contact') }}
                className="btn-lime"
                style={{ fontSize: 14, padding: '8px 18px', display: 'inline-flex' }}
              >
                Book a Call
              </a>
              <a
                href="https://drive.google.com/file/d/1axm96M5if6WqjTxW1GfP_ZB-29MsK_ov/view?usp=sharing"
                target="_blank" rel="noopener noreferrer"
                className="btn-ghost"
                style={{ fontSize: 14, padding: '8px 18px', display: 'inline-flex' }}
              >
                Résumé ↗
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <p style={{ fontWeight: 700, fontSize: 13, color: '#000', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 16 }}>
              Follow Me
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {SOCIALS.map(s => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    fontWeight: 500, fontSize: 14, color: '#333', textDecoration: 'none',
                    transition: 'color 0.15s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#000' }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#333' }}
                >
                  {s.icon}
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontWeight: 500, fontSize: 13, color: '#737373' }}>
            © {year} Ansh Pandey. All rights reserved.
          </p>
          <p style={{ fontWeight: 500, fontSize: 13, color: '#737373' }}>
            Built with React · Framer Motion · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
