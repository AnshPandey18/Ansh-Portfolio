import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skillGroups = [
    {
      category: 'Core Skills',
      skills: [
        { name: 'Photography', level: 90 },
        { name: 'Videography', level: 85 },
        { name: 'Photo Editing', level: 88 },
        { name: 'Lead Speaker', level: 80 },
      ],
    },
  ]

  const languages = ['HTML', 'CSS', 'JavaScript', 'Java', 'C', 'C++ (learning)']
  const frameworks = ['React', 'Node', 'Tailwind CSS', 'SCSS']
  const databases = ['MySQL']

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="skills" className="py-24 md:py-32 bg-gray900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
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
            Skills & <span className="text-tealAccent">Expertise</span>
          </motion.h2>

          {/* Core Skills with Radial Bars */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {skillGroups[0].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="relative group"
              >
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <svg className="w-32 h-32 transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      className="text-gray700"
                    />
                    <motion.circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="#0d9488"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 56}`}
                      initial={{ strokeDashoffset: 2 * Math.PI * 56 }}
                      animate={isInView ? { strokeDashoffset: 2 * Math.PI * 56 * (1 - skill.level / 100) } : {}}
                      transition={{ duration: 1.5, delay: index * 0.2, ease: 'easeOut' }}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{skill.level}%</span>
                  </div>
                </div>
                <p className="text-center font-semibold text-white group-hover:text-tealAccent transition-colors">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Languages, Frameworks, and Databases */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-12"
          >
            {/* Languages */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-tealAccent">Languages</h3>
              <div className="flex flex-wrap gap-3">
                {languages.map((lang, index) => (
                  <motion.span
                    key={lang}
                    variants={itemVariants}
                    className="px-4 py-2 bg-gray800 border border-gray700 rounded-sm text-sm font-medium hover:border-tealAccent hover:text-tealAccent transition-colors cursor-default"
                    whileHover={{ scale: 1.05, y: -2 }}
                    title={lang === 'C++ (learning)' ? 'Currently learning C++' : ''}
                  >
                    {lang}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Frameworks & Tools */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-tealAccent">Frameworks / Tools</h3>
              <div className="flex flex-wrap gap-3">
                {frameworks.map((framework, index) => (
                  <motion.span
                    key={framework}
                    variants={itemVariants}
                    className="px-4 py-2 bg-gray800 border border-gray700 rounded-sm text-sm font-medium hover:border-tealAccent hover:text-tealAccent transition-colors cursor-default"
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {framework}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Database */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-tealAccent">Database</h3>
              <div className="flex flex-wrap gap-3">
                {databases.map((db, index) => (
                  <motion.span
                    key={db}
                    variants={itemVariants}
                    className="px-4 py-2 bg-gray800 border border-gray700 rounded-sm text-sm font-medium hover:border-tealAccent hover:text-tealAccent transition-colors cursor-default"
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {db}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

