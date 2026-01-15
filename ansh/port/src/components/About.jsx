import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 gap-12 md:gap-16 items-center"
        >
          {/* Portrait Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <motion.img
                src="/ansh-portrait.jpg"
                alt="Ansh Pandey"
                className="w-full h-[400px] object-cover object-center"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                loading="lazy"
              />
              <motion.div
                className="absolute inset-0 border-2 border-tealAccent/20 rounded-lg pointer-events-none"
                whileHover={{ borderColor: 'rgba(13, 148, 136, 0.5)' }}
                transition={{ duration: 0.3 }}
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-tealAccent/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              About <span className="text-tealAccent">Me</span>
            </motion.h2>
            
            <motion.div
              className="space-y-4 text-gray500 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-lg">
                I'm <span className="text-white font-semibold">Ansh Pandey</span> — a visual storyteller and front-end developer blending photography, videography, and polished UI to craft immersive experiences.
              </p>
              <p className="text-lg">
                I focus on clean composition, subtle motion, and user-centered design. Currently interned at ITfosters and studying BTech CSIT.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

