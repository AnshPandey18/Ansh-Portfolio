import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

/* ── Tech items for the infinite marquee ──────── */
const TECH = [
  'React.js','Node.js','Express.js','MongoDB','MySQL','Tailwind CSS',
  'JavaScript','TypeScript','HTML5','CSS3','Python','Java','C++','REST APIs',
  'JWT','GitHub','Postman','Photoshop','Lightroom','Premiere Pro',
  // duplicate set for seamless loop
  'React.js','Node.js','Express.js','MongoDB','MySQL','Tailwind CSS',
  'JavaScript','TypeScript','HTML5','CSS3','Python','Java','C++','REST APIs',
  'JWT','GitHub','Postman','Photoshop','Lightroom','Premiere Pro',
]

const coreSkills = [
  { name:'Development',   level:90, color:'gold' },
  { name:'Photography',   level:90, color:'sky'  },
  { name:'Videography',   level:85, color:'sky'  },
  { name:'Photo Editing', level:88, color:'gold' },
  { name:'Lead Speaker',  level:85, color:'sky'  },
]

const skillCategories = [
  { title:'Languages', items:['C','C++','Java','JavaScript','Python'], accent:'gold' },
  { title:'Frontend',  items:['HTML5','CSS3','React.js','Tailwind CSS'], accent:'sky' },
  { title:'Backend',   items:['Node.js','Express.js','REST APIs','JWT'], accent:'gold' },
  { title:'Database',  items:['MongoDB','MySQL','PostgreSQL'], accent:'sky' },
  { title:'Dev Tools', items:['VS Code','GitHub','Postman','Photoshop','Lightroom'], accent:'gold' },
  { title:'Coursework',items:['DBMS','OOPS','OS','Computer Networks'], accent:'sky' },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once:true, margin:'-80px' })

  return (
    <section id="skills" className="py-32 md:py-40 relative overflow-hidden" style={{ background:'var(--bg)' }}>
      {/* Separator */}
      <div className="absolute top-0 inset-x-0 h-px" style={{ background:'linear-gradient(90deg,transparent,rgba(126,184,247,0.18),transparent)' }} />

      {/* Ambient glow */}
      <div className="absolute left-0 top-1/3 w-96 h-96 pointer-events-none orb-drift-2 will-change-transform" style={{
        background:'radial-gradient(circle, rgba(124,58,237,0.09) 0%, transparent 70%)', filter:'blur(60px)',
      }} />
      <div className="absolute right-0 bottom-1/4 w-80 h-80 pointer-events-none" style={{
        background:'radial-gradient(circle, rgba(212,162,78,0.07) 0%, transparent 70%)', filter:'blur(50px)',
      }} />

      <div className="bg-dots absolute inset-0 pointer-events-none opacity-30" aria-hidden />

      <div ref={ref} className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity:0, y:28 }}
          animate={isInView ? { opacity:1, y:0 } : {}}
          transition={{ duration:0.7 }}
          className="mb-16 md:mb-20"
        >
          <span className="pill mb-4 inline-flex">Expertise</span>
          <h2 className="font-display font-black" style={{ fontSize:'clamp(2rem,5vw,3.5rem)', color:'var(--text-1)' }}>
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="mt-3 text-base max-w-md" style={{ color:'var(--text-2)' }}>
            A comprehensive overview of my technical and creative abilities
          </p>
        </motion.div>

        {/* Core skill bars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-20">
          {coreSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity:0, y:24 }}
              animate={isInView ? { opacity:1, y:0 } : {}}
              transition={{ duration:0.6, delay:i*0.08 }}
              className="p-5 rounded-2xl group cursor-default transition-all duration-250"
              style={{ background:'var(--surface2)', border:'1px solid var(--border)' }}
              onMouseEnter={e => {
                e.currentTarget.style.background = skill.color==='gold'?'rgba(212,162,78,0.08)':'rgba(126,184,247,0.07)'
                e.currentTarget.style.borderColor= skill.color==='gold'?'rgba(212,162,78,0.35)':'rgba(126,184,247,0.3)'
                e.currentTarget.style.transform  = 'translateY(-4px)'
                e.currentTarget.style.boxShadow  = skill.color==='gold'
                  ?'0 12px 36px rgba(212,162,78,0.12)':'0 12px 36px rgba(126,184,247,0.10)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background  = 'var(--surface2)'
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.transform   = ''
                e.currentTarget.style.boxShadow   = ''
              }}
            >
              <div className="flex justify-between items-center mb-3">
                <p className="text-sm font-semibold" style={{ color:'var(--text-1)' }}>{skill.name}</p>
                <span className="text-xs font-bold" style={{ color:skill.color==='gold'?'var(--gold)':'var(--sky)' }}>
                  {skill.level}%
                </span>
              </div>
              <div className="h-1.5 rounded-full overflow-hidden" style={{ background:'rgba(255,255,255,0.06)' }}>
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: skill.color==='gold'
                    ? 'linear-gradient(90deg,var(--gold-dark),var(--gold-light))'
                    : 'linear-gradient(90deg,var(--sky-deep),var(--sky))' }}
                  initial={{ width:0 }}
                  animate={isInView ? { width:`${skill.level}%` } : {}}
                  transition={{ duration:1.4, delay:0.3+i*0.1, ease:'easeOut' }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Infinite Marquee ─────────────────── */}
        <motion.div
          initial={{ opacity:0 }}
          animate={isInView ? { opacity:1 } : {}}
          transition={{ delay:0.5 }}
          className="mb-20 overflow-hidden relative"
          style={{ maskImage:'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)' }}
        >
          <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color:'var(--text-3)' }}>
            Tech Stack
          </p>
          <div className="flex overflow-hidden">
            <div className="marquee-track">
              {TECH.map((t, i) => (
                <span
                  key={i}
                  className="inline-flex items-center mx-3 px-5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-default"
                  style={{
                    background:'var(--surface2)',
                    border:'1px solid var(--border)',
                    color:'var(--text-2)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = i%2===0?'var(--gold)':'var(--sky)'
                    e.currentTarget.style.borderColor = i%2===0?'rgba(212,162,78,0.4)':'rgba(126,184,247,0.35)'
                    e.currentTarget.style.background = i%2===0?'rgba(212,162,78,0.08)':'rgba(126,184,247,0.07)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'var(--text-2)'
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.background = 'var(--surface2)'
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Category tag clouds */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity:0, y:20 }}
              animate={isInView ? { opacity:1, y:0 } : {}}
              transition={{ duration:0.6, delay:0.2+ci*0.07 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-5 rounded-full" style={{ background:cat.accent==='gold'?'var(--gold)':'var(--sky)' }} />
                <h3 className="text-sm font-bold uppercase tracking-wider" style={{ color:'var(--text-1)' }}>{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map(item => (
                  <motion.span
                    key={item}
                    className="px-3 py-1.5 text-xs font-semibold rounded-lg cursor-default"
                    style={{ background:'var(--surface2)', border:'1px solid var(--border)', color:'var(--text-2)' }}
                    whileHover={{
                      background: cat.accent==='gold'?'rgba(212,162,78,0.1)':'rgba(126,184,247,0.08)',
                      borderColor:cat.accent==='gold'?'rgba(212,162,78,0.4)':'rgba(126,184,247,0.35)',
                      color:      cat.accent==='gold'?'var(--gold)':'var(--sky)',
                      y:-2,
                    }}
                    transition={{ duration:0.18 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
