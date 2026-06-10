import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const fadeUp = {
  hidden:  { opacity:0, y:16 },
  visible: (i=0) => ({
    opacity:1, y:0,
    transition:{ duration:0.6, delay:i*0.08, ease:[0.22,1,0.36,1] },
  }),
}

const SkillBar = ({ name, level, delay, isInView }) => (
  <div>
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm font-medium text-gray-300">{name}</span>
      <span className="text-xs font-semibold"
        style={{ color:'#14b8a6' }}
      >{level}%</span>
    </div>
    <div className="h-1.5 rounded-full overflow-hidden"
      style={{ background:'rgba(255,255,255,0.06)' }}
    >
      <motion.div
        className="h-full rounded-full"
        style={{ background:'linear-gradient(90deg,#0d9488,#14b8a6,#38bdf8)' }}
        initial={{ width:0 }}
        animate={isInView ? { width:`${level}%` } : { width:0 }}
        transition={{ duration:1.3, delay, ease:[0.22,1,0.36,1] }}
      />
    </div>
  </div>
)

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once:true, margin:'-80px' })

  const coreSkills = [
    { name:'Photography',    level:90 },
    { name:'Videography',    level:85 },
    { name:'Photo Editing',  level:88 },
    { name:'Public Speaking',level:80 },
  ]

  const techGroups = [
    { label:'Languages',        items:['HTML','CSS','JavaScript','Java','C','C++'] },
    { label:'Frameworks & Tools',items:['React','Node.js','Tailwind CSS','SCSS'] },
    { label:'Database',         items:['MySQL'] },
  ]

  return (
    <section id="skills" className="relative py-28 md:py-36 overflow-hidden"
      style={{ background:'#03040a' }}
      ref={ref}
    >
      <div className="section-sep absolute top-0 inset-x-0" />

      {/* Left glow */}
      <div className="absolute top-1/2 -left-32 -translate-y-1/2 w-96 h-96 pointer-events-none"
        style={{
          background:'radial-gradient(circle, rgba(56,189,248,0.09) 0%, transparent 65%)',
          filter:'blur(40px)',
        }}
      />
      {/* Bottom-right glow */}
      <div className="absolute bottom-0 right-0 w-80 h-80 pointer-events-none"
        style={{
          background:'radial-gradient(circle at bottom right, rgba(13,148,136,0.12) 0%, transparent 65%)',
        }}
      />

      <div className="dot-grid absolute inset-0 opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div variants={fadeUp} initial="hidden" animate={isInView?'visible':'hidden'} custom={0}
          className="mb-16"
        >
          <span className="w-8 h-0.5 bg-teal-500 block mb-3" />
          <p className="text-teal-500 text-xs font-semibold uppercase tracking-widest mb-3">Expertise</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Skills &amp; Expertise</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">

          {/* Creative bars */}
          <motion.div variants={fadeUp} initial="hidden" animate={isInView?'visible':'hidden'} custom={1}>
            <p className="text-xs text-gray-600 uppercase tracking-widest font-semibold mb-8">
              Creative Proficiencies
            </p>
            <div className="space-y-6">
              {coreSkills.map((s, i) => (
                <SkillBar key={s.name} name={s.name} level={s.level}
                  delay={0.25 + i * 0.1} isInView={isInView}
                />
              ))}
            </div>
          </motion.div>

          {/* Tech stack */}
          <motion.div variants={fadeUp} initial="hidden" animate={isInView?'visible':'hidden'} custom={2}>
            <p className="text-xs text-gray-600 uppercase tracking-widest font-semibold mb-8">
              Technical Stack
            </p>
            <div className="space-y-8">
              {techGroups.map((group, gi) => (
                <div key={group.label}>
                  <p className="text-[11px] text-gray-600 uppercase tracking-wider mb-3 font-medium">
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item, ii) => (
                      <motion.span key={item} variants={fadeUp} initial="hidden"
                        animate={isInView?'visible':'hidden'}
                        custom={gi * 4 + ii + 3}
                        className="tag"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills
