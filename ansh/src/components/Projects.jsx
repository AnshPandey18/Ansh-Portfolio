import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const fadeUp = {
  hidden:  { opacity:0, y:20 },
  visible: (i=0) => ({
    opacity:1, y:0,
    transition:{ duration:0.6, delay:i*0.08, ease:[0.22,1,0.36,1] },
  }),
}

const ACCENT = {
  Photography:  { color:'#0d9488', bg:'rgba(13,148,136,0.12)',  border:'rgba(13,148,136,0.25)' },
  Videography:  { color:'#14b8a6', bg:'rgba(20,184,166,0.10)',  border:'rgba(20,184,166,0.22)' },
  Development:  { color:'#38bdf8', bg:'rgba(56,189,248,0.10)',  border:'rgba(56,189,248,0.22)' },
}

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once:true, margin:'-80px' })
  const [selected, setSelected] = useState(null)

  const projects = [
    { id:1, title:'Creative Portfolio',   category:'Photography',  year:'2024',
      tech:['React','Tailwind CSS','Framer Motion'],
      description:'A photography portfolio showcasing creative work with smooth scroll animations and immersive light transitions.',
      role:'Photographer & Developer' },
    { id:2, title:'Video Production',     category:'Videography',  year:'2024',
      tech:['React','Framer Motion','Video Editing'],
      description:'An engaging short-film project with professional color grading and seamless web presentation.',
      role:'Videographer & Editor' },
    { id:3, title:'Full Stack App',       category:'Development',  year:'2023',
      tech:['React','Node.js','MySQL'],
      description:'A full-stack web application with real-time features, authentication, and a clean RESTful backend.',
      role:'Full Stack Developer' },
    { id:4, title:'Photo Gallery',        category:'Photography',  year:'2023',
      tech:['React','SCSS'],
      description:'A minimalist photography showcase with masonry layout, advanced filtering, and lightbox support.',
      role:'Photographer' },
    { id:5, title:'Interactive Experience', category:'Development', year:'2024',
      tech:['React','Tailwind CSS'],
      description:'An interactive web experience with parallax scrolling and user-driven visual exploration.',
      role:'Frontend Developer' },
    { id:6, title:'Cinematic Production', category:'Videography',  year:'2024',
      tech:['After Effects','Premiere Pro'],
      description:'A cinematic production featuring advanced color grading, motion graphics, and dynamic sound design.',
      role:'Video Editor' },
  ]

  return (
    <section id="projects" className="relative py-28 md:py-36 overflow-hidden"
      style={{ background:'#060810' }}
      ref={ref}
    >
      <div className="section-sep absolute top-0 inset-x-0" />

      {/* Top-center glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-72 pointer-events-none"
        style={{
          background:'radial-gradient(ellipse at top, rgba(13,148,136,0.1) 0%, transparent 70%)',
          filter:'blur(32px)',
        }}
      />

      <div className="dot-grid absolute inset-0 opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div variants={fadeUp} initial="hidden" animate={isInView?'visible':'hidden'} custom={0}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div>
            <span className="w-8 h-0.5 bg-teal-500 block mb-3" />
            <p className="text-teal-500 text-xs font-semibold uppercase tracking-widest mb-3">Work</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Featured Projects</h2>
          </div>
          <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
            A selection of recent work spanning photography, videography, and web development.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => {
            const a = ACCENT[project.category]
            return (
              <motion.div key={project.id}
                variants={fadeUp} initial="hidden" animate={isInView?'visible':'hidden'} custom={index+1}
                className="group cursor-pointer rounded-2xl overflow-hidden flex flex-col"
                style={{ background:'#0c0e18', border:'1px solid rgba(255,255,255,0.06)' }}
                onClick={() => setSelected(project)}
                whileHover={{ y:-4, transition:{ duration:0.25, ease:'easeOut' } }}
                onMouseEnter={e => e.currentTarget.style.borderColor = a.border}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}
              >
                {/* Thumbnail */}
                <div className="relative overflow-hidden" style={{ aspectRatio:'16/9', background:'#111420' }}>
                  {/* Gradient fill */}
                  <div className="absolute inset-0"
                    style={{ background:`linear-gradient(135deg, ${a.bg} 0%, transparent 60%)` }}
                  />
                  {/* Initials watermark */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl font-black select-none transition-opacity duration-300 opacity-[0.08] group-hover:opacity-[0.16]"
                      style={{ color: a.color }}
                    >
                      {project.title.split(' ').map(w=>w[0]).join('')}
                    </span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background:'rgba(3,4,10,0.72)' }}
                  >
                    <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider"
                      style={{ color: a.color }}
                    >
                      View Details
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                      </svg>
                    </span>
                  </div>
                  {/* Year badge */}
                  <span className="absolute top-3 right-3 text-[10px] font-semibold px-2 py-0.5 rounded"
                    style={{ background:'rgba(0,0,0,0.6)', color:'#9ca3af', backdropFilter:'blur(8px)' }}
                  >
                    {project.year}
                  </span>
                </div>

                {/* Info */}
                <div className="p-5 flex-1 flex flex-col gap-3">
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1 leading-snug">{project.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{project.description}</p>
                  </div>
                  <div className="flex items-center gap-2 mt-auto pt-2"
                    style={{ borderTop:'1px solid rgba(255,255,255,0.05)' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background:a.color }} />
                    <span className="text-xs text-gray-600">{project.category}</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
            style={{ background:'rgba(0,0,0,0.88)', backdropFilter:'blur(16px)' }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity:0, y:20, scale:0.97 }}
              animate={{ opacity:1, y:0, scale:1 }}
              exit={{ opacity:0, y:12, scale:0.97 }}
              transition={{ duration:0.3, ease:[0.22,1,0.36,1] }}
              className="relative max-w-xl w-full max-h-[85vh] overflow-y-auto rounded-2xl"
              style={{
                background:'#0c0e18',
                border:`1px solid ${ACCENT[selected.category].border}`,
                boxShadow:`0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px ${ACCENT[selected.category].border}`,
              }}
              onClick={e => e.stopPropagation()}
            >
              {/* Top accent stripe */}
              <div className="h-0.5 w-full rounded-t-2xl"
                style={{ background:`linear-gradient(90deg, ${ACCENT[selected.category].color}, transparent)` }}
              />
              <div className="p-8">
                <button onClick={() => setSelected(null)}
                  className="absolute top-5 right-5 p-1.5 text-gray-600 hover:text-white transition-colors"
                  aria-label="Close"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>

                <div className="flex items-center gap-2 mb-5">
                  <span className="w-2 h-2 rounded-full"
                    style={{ background:ACCENT[selected.category].color }} />
                  <span className="text-xs text-gray-500 uppercase tracking-wider">{selected.category}</span>
                  <span className="text-gray-700">·</span>
                  <span className="text-xs text-gray-500">{selected.year}</span>
                </div>

                <h2 className="text-2xl font-bold text-white mb-4 pr-8">{selected.title}</h2>
                <p className="text-gray-400 leading-relaxed mb-6">{selected.description}</p>

                <div className="mb-5">
                  <p className="text-[10px] text-gray-600 uppercase tracking-wider mb-1.5">Role</p>
                  <p className="text-sm text-gray-300">{selected.role}</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-600 uppercase tracking-wider mb-3">Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {selected.tech.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
