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
