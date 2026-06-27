import { useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

const NAV_ITEMS = [
  { label: 'About',      href: '#about'      },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact'    },
]

const scrollTo = href => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastY, setLastY] = useState(0)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', y => {
    setVisible(y < lastY || y < 60)
    setLastY(y)
  })

  return (
    <motion.header
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="sticky top-0 z-50 w-full flex justify-center"
      style={{ background: 'transparent', padding: '12px 24px' }}
    >
      {/* Pill nav bar */}
      <nav
        style={{
          background: '#fff',
          border: '1px solid #000',
          borderRadius: 100,
          boxShadow: 'rgb(10,10,13) 2px 2px 0px 0px',
          padding: '8px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: 960,
          gap: 16,
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          onClick={e => { e.preventDefault(); scrollTo('#hero') }}
          style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', flexShrink: 0 }}
        >
          {/* Fish icon */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M2 12C2 12 6 5 13 5C18 5 21 9 21 12C21 15 18 19 13 19C6 19 2 12 2 12Z" fill="#a3e635" stroke="#000" strokeWidth="1.5"/>
            <circle cx="16" cy="10" r="1.5" fill="#000"/>
            <path d="M21 8L24 5M21 16L24 19" stroke="#000" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span style={{ fontWeight: 700, fontSize: 18, color: '#000', letterSpacing: '-0.5px' }}>
            Ansh Pandey
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center" style={{ gap: 4 }}>
          {NAV_ITEMS.map(item => (
            <a
              key={item.label}
              href={item.href}
              onClick={e => { e.preventDefault(); scrollTo(item.href) }}
              style={{
                fontWeight: 500,
                fontSize: 15,
                color: '#222',
                textDecoration: 'none',
                padding: '6px 14px',
                borderRadius: 100,
                transition: 'background 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#f5f5f5' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA cluster */}
        <div className="hidden md:flex items-center" style={{ gap: 8, flexShrink: 0 }}>
          <a
            href="mailto:anshpandey1807@gmail.com"
            className="btn-ghost"
            style={{ fontSize: 14, padding: '8px 18px' }}
          >
            Sign In
          </a>
          <a
            href="#contact"
            onClick={e => { e.preventDefault(); scrollTo('#contact') }}
            className="btn-lime"
            style={{ fontSize: 14, padding: '8px 18px' }}
          >
            Book a Call
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          style={{
            background: 'transparent',
            border: '1px solid #000',
            borderRadius: 100,
            width: 36,
            height: 36,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
          aria-label="Toggle menu"
        >
          <svg width="16" height="16" fill="none" stroke="#000" strokeWidth="2" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            position: 'absolute',
            top: 72,
            left: 24,
            right: 24,
            background: '#fff',
            border: '1px solid #000',
            borderRadius: 16,
            boxShadow: 'rgb(10,10,13) 4px 4px 0px 0px',
            padding: 16,
            zIndex: 100,
          }}
        >
          {NAV_ITEMS.map(item => (
            <a
              key={item.label}
              href={item.href}
              onClick={e => { e.preventDefault(); scrollTo(item.href); setOpen(false) }}
              style={{
                display: 'block',
                fontWeight: 500,
                fontSize: 16,
                color: '#000',
                textDecoration: 'none',
                padding: '10px 12px',
                borderRadius: 8,
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#f5f5f5' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
            >
              {item.label}
            </a>
          ))}
          <div style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid #e5e5e5', display: 'flex', gap: 8 }}>
            <a href="#contact" onClick={e => { e.preventDefault(); scrollTo('#contact'); setOpen(false) }} className="btn-lime" style={{ flex: 1, justifyContent: 'center', fontSize: 14, padding: '8px 16px' }}>
              Book a Call
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
