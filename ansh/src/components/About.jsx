import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const fadeUp = {
  hidden:  { opacity:0, y:20 },
  visible: (i=0) => ({
    opacity:1, y:0,
    transition:{ duration:0.65, delay:i*0.1, ease:[0.22,1,0.36,1] },
  }),
}

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once:true, margin:'-80px' })

  const highlights = [
    { label:'Internship',  value:'ITfosters' },
    { label:'Degree',      value:'BTech CSIT' },
    { label:'University',  value:'DGI, AKTU' },
    { label:'Focus',       value:'Visual & Web' },
  ]

  return (
    <section id="about" className="relative py-28 md:py-36 overflow-hidden"
      style={{ background:'#060810' }}
    >
      <div className="section-sep absolute top-0 inset-x-0" />

      {/* Corner glow */}
      <div className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background:'radial-gradient(circle at top right, rgba(13,148,136,0.12) 0%, transparent 65%)',
        }}
      />

      {/* Dot grid */}
      <div className="dot-grid absolute inset-0 opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8" ref={ref}>
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">

          {/* ── Portrait ── */}
          <motion.div variants={fadeUp} initial="hidden" animate={isInView?'visible':'hidden'} custom={0}
            className="relative"
          >
            {/* Accent border frame (decorative offset) */}
            <div className="absolute -top-3 -left-3 w-full h-full rounded-2xl pointer-events-none"
              style={{ border:'1px solid rgba(13,148,136,0.2)' }}
            />

            <div className="relative overflow-hidden rounded-2xl"
              style={{ aspectRatio:'3/4', background:'#0c0e18', border:'1px solid rgba(255,255,255,0.07)' }}
            >
              <img src="/ansh-portrait.jpg" alt="Ansh Pandey"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              {/* Gradient footer on image */}
              <div className="absolute inset-0 pointer-events-none"
                style={{ background:'linear-gradient(to top, rgba(6,8,16,0.7) 0%, rgba(6,8,16,0.1) 35%, transparent 60%)' }}
              />
              {/* Name on image */}
              <div className="absolute bottom-5 left-5">
                <p className="text-white font-semibold text-sm">Ansh Pandey</p>
                <p className="text-teal-400 text-xs mt-0.5">Photographer · Developer</p>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div variants={fadeUp} initial="hidden" animate={isInView?'visible':'hidden'} custom={1}
              className="absolute -bottom-4 -right-2 md:right-4 glass px-5 py-3 rounded-xl"
              style={{ boxShadow:'0 16px 48px rgba(0,0,0,0.6)' }}
            >
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                <div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider">Currently</div>
                  <div className="text-xs font-semibold text-white mt-0.5">Intern @ ITfosters</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Text ── */}
          <div className="pt-6 md:pt-10">
            <motion.div variants={fadeUp} initial="hidden" animate={isInView?'visible':'hidden'} custom={0}
              className="mb-4"
            >
              <span className="w-8 h-0.5 bg-teal-500 block mb-3" />
              <p className="text-teal-500 text-xs font-semibold uppercase tracking-widest">About Me</p>
            </motion.div>

            <motion.h2 variants={fadeUp} initial="hidden" animate={isInView?'visible':'hidden'} custom={1}
              className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight tracking-tight"
            >
              Visual storyteller &amp;<br />front-end developer
            </motion.h2>

            <motion.p variants={fadeUp} initial="hidden" animate={isInView?'visible':'hidden'} custom={2}
              className="text-gray-400 leading-relaxed mb-5"
            >
              I'm <span className="text-gray-200 font-medium">Ansh Pandey</span> — a creative professional
              who bridges the gap between visual artistry and modern web technology. I blend photography,
              videography, and polished UI to craft immersive, user-centered experiences.
            </motion.p>

            <motion.p variants={fadeUp} initial="hidden" animate={isInView?'visible':'hidden'} custom={3}
              className="text-gray-400 leading-relaxed mb-10"
            >
              I focus on clean composition, subtle motion, and design that communicates.
              Currently interning at <span className="text-teal-400 font-medium">ITfosters</span> and
              pursuing a BTech in CSIT.
            </motion.p>

            {/* Highlights */}
            <motion.div variants={fadeUp} initial="hidden" animate={isInView?'visible':'hidden'} custom={4}
              className="grid grid-cols-2 gap-3"
            >
              {highlights.map((h) => (
                <div key={h.label} className="glass px-4 py-3 rounded-xl"
                  style={{ boxShadow:'0 4px 24px rgba(0,0,0,0.3)' }}
                >
                  <div className="text-[10px] text-gray-600 uppercase tracking-wider mb-1">{h.label}</div>
                  <div className="text-sm font-semibold text-white">{h.value}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
