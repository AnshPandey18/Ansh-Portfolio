const NAV = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
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
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M2 12C2 12 6 5 13 5C18 5 21 9 21 12C21 15 18 19 13 19C6 19 2 12 2 12Z" fill="#a3e635" stroke="#000" strokeWidth="1.5"/>
                <circle cx="16" cy="10" r="1.5" fill="#000"/>
                <path d="M21 8L24 5M21 16L24 19" stroke="#000" strokeWidth="1.5" strokeLinecap="round"/>
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
            <a
              href="#contact"
              onClick={e => { e.preventDefault(); scrollTo('#contact') }}
              className="btn-lime"
              style={{ fontSize: 14, padding: '8px 18px', display: 'inline-flex' }}
            >
              Book a Call
            </a>
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
