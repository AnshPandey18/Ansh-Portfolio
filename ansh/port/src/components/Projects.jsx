import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedProject, setSelectedProject] = useState(null)

  // Sample projects - you can replace with actual projects
  const projects = [
    {
      id: 1,
      title: 'Project One',
      category: 'Photography',
      year: '2024',
      tech: ['React', 'Tailwind CSS'],
      description: 'A stunning photography portfolio showcasing creative work.',
      role: 'Photographer & Developer',
      images: ['https://via.placeholder.com/800x600?text=Project+1'],
    },
    {
      id: 2,
      title: 'Project Two',
      category: 'Videography',
      year: '2024',
      tech: ['React', 'Framer Motion'],
      description: 'An engaging video project with smooth animations.',
      role: 'Videographer & Editor',
      images: ['https://via.placeholder.com/800x600?text=Project+2'],
    },
    {
      id: 3,
      title: 'Project Three',
      category: 'Development',
      year: '2023',
      tech: ['React', 'Node', 'MySQL'],
      description: 'A full-stack web application with modern design.',
      role: 'Full Stack Developer',
      images: ['https://via.placeholder.com/800x600?text=Project+3'],
    },
    {
      id: 4,
      title: 'Project Four',
      category: 'Photography',
      year: '2023',
      tech: ['React', 'SCSS'],
      description: 'A minimalist photography showcase.',
      role: 'Photographer',
      images: ['https://via.placeholder.com/800x600?text=Project+4'],
    },
    {
      id: 5,
      title: 'Project Five',
      category: 'Development',
      year: '2024',
      tech: ['React', 'Tailwind CSS'],
      description: 'An interactive web experience.',
      role: 'Frontend Developer',
      images: ['https://via.placeholder.com/800x600?text=Project+5'],
    },
    {
      id: 6,
      title: 'Project Six',
      category: 'Videography',
      year: '2024',
      tech: ['After Effects', 'Premiere Pro'],
      description: 'A cinematic video production.',
      role: 'Video Editor',
      images: ['https://via.placeholder.com/800x600?text=Project+6'],
    },
  ]

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
    hidden: { opacity: 0, y: 30 },
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
    <section id="projects" className="py-24 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Featured <span className="text-tealAccent">Projects</span>
          </motion.h2>

          <motion.p
            className="text-center text-gray500 mb-16 text-lg"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            A selection of my recent work
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="relative group cursor-pointer"
                onClick={() => setSelectedProject(project)}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden rounded-lg bg-gray900 border border-gray700 h-[300px]">
                  {/* Placeholder image */}
                  <div className="w-full h-full bg-gradient-to-br from-gray800 to-gray900 flex items-center justify-center">
                    <span className="text-gray500">{project.title}</span>
                  </div>
                  
                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                    <p className="text-gray500 mb-4 text-center">{project.category}</p>
                    <span className="text-tealAccent text-sm">View Details →</span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="relative bg-gray900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray700"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-white hover:text-tealAccent transition-colors z-10"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="p-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">{selectedProject.title}</h2>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gray800 rounded-sm text-sm">{selectedProject.category}</span>
                  <span className="px-3 py-1 bg-gray800 rounded-sm text-sm">{selectedProject.year}</span>
                </div>

                <div className="mb-6">
                  <img
                    src={selectedProject.images[0]}
                    alt={selectedProject.title}
                    className="w-full h-auto rounded-lg"
                    loading="lazy"
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-tealAccent font-semibold mb-2">Description</h3>
                    <p className="text-gray500">{selectedProject.description}</p>
                  </div>

                  <div>
                    <h3 className="text-tealAccent font-semibold mb-2">Role</h3>
                    <p className="text-gray500">{selectedProject.role}</p>
                  </div>

                  <div>
                    <h3 className="text-tealAccent font-semibold mb-2">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray800 border border-gray700 rounded-sm text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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

