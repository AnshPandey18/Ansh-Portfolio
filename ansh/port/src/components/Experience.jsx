import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const experience = [
    {
      type: 'experience',
      title: 'Intern',
      company: 'ITfosters',
      period: 'Present',
      description: 'Gaining hands-on experience in software development and industry practices.',
    },
  ]

  const education = [
    {
      type: 'education',
      title: 'BTech (CSIT)',
      company: 'Dronacharya Group of Institutions (AKTU)',
      period: 'Present',
      description: 'Pursuing Bachelor of Technology in Computer Science and Information Technology.',
    },
    {
      type: 'education',
      title: '12th',
      company: 'New Adarsh Public School',
      period: '',
      description: 'Completed 12th standard education.',
    },
    {
      type: 'education',
      title: '10th',
      company: 'New Adarsh Public School',
      period: '',
      description: 'Completed 10th standard education.',
    },
  ]

  const timeline = [...experience, ...education]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="experience" className="py-24 md:py-32 bg-gray900">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Experience & <span className="text-tealAccent">Education</span>
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray700 hidden md:block" />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="space-y-12"
            >
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-0 md:pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-8 top-2 w-4 h-4 bg-tealAccent rounded-full border-4 border-gray900 z-10 hidden md:block" />

                  <div className="bg-gray800 border border-gray700 rounded-lg p-6 hover:border-tealAccent/50 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        {item.title}
                      </h3>
                      {item.period && (
                        <span className="text-tealAccent text-sm md:text-base mt-1 md:mt-0">
                          {item.period}
                        </span>
                      )}
                    </div>
                    <p className="text-tealAccent font-medium mb-2">{item.company}</p>
                    <p className="text-gray500">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

