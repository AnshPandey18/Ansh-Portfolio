import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedProject, setSelectedProject] = useState(null)
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'Creative Portfolio',
      category: 'Photography',
      year: '2024',
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
      description: 'A stunning photography portfolio showcasing creative work with smooth animations and immersive experiences.',
      role: 'Photographer & Developer',
      images: ['https://via.placeholder.com/800x600?text=Project+1'],
      color: '#0d9488',
    },
    {
      id: 2,
      title: 'Video Production',
      category: 'Videography',
      year: '2024',
      tech: ['React', 'Framer Motion', 'Video Editing'],
      description: 'An engaging video project with smooth animations and professional editing techniques.',
      role: 'Videographer & Editor',
      images: ['https://via.placeholder.com/800x600?text=Project+2'],
      color: '#14b8a6',
    },
    {
      id: 3,
      title: 'Full Stack App',
      category: 'Development',
      year: '2023',
      tech: ['React', 'Node', 'MySQL'],
      description: 'A full-stack web application with modern design, real-time features, and robust backend architecture.',
      role: 'Full Stack Developer',
      images: ['https://via.placeholder.com/800x600?text=Project+3'],
      color: '#0f766e',
    },
    {
      id: 4,
      title: 'Photo Gallery',
      category: 'Photography',
      year: '2023',
      tech: ['React', 'SCSS', 'Lightbox'],
      description: 'A minimalist photography showcase with advanced filtering and gallery features.',
      role: 'Photographer',
      images: ['https://via.placeholder.com/800x600?text=Project+4'],
      color: '#06b6d4',
    },
    {
      id: 5,
      title: 'Interactive Experience',
      category: 'Development',
      year: '2024',
      tech: ['React', 'Tailwind CSS', 'Three.js'],
      description: 'An interactive web experience with 3D elements and immersive user interactions.',
      role: 'Frontend Developer',
      images: ['https://via.placeholder.com/800x600?text=Project+5'],
      color: '#0d9488',
    },
    {
      id: 6,
      title: 'Cinematic Production',
      category: 'Videography',
      year: '2024',
      tech: ['After Effects', 'Premiere Pro'],
      description: 'A cinematic video production with advanced color grading and motion graphics.',
      role: 'Video Editor',
      images: ['https://via.placeholder.com/800x600?text=Project+6'],
      color: '#14b8a6',
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
    hidden: { opacity: 0, y: 60, rotateX: -30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  return (
    <section id="projects" className="py-40 md:py-48 bg-black relative overflow-hidden">
      {/* Enhanced Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray900 via-black to-gray900" />
      
      {/* Animated background orbs */}
      {[1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: `${350 + i * 150}px`,
            height: `${350 + i * 150}px`,
            top: `${30 + i * 30}%`,
            left: i % 2 === 0 ? '75%' : '15%',
            background: `radial-gradient(circle, rgba(13, 148, 136, ${0.12 - i * 0.03}), transparent)`,
          }}
          animate={{
            scale: [1, 1.4 + i * 0.1, 1],
            x: [0, 50 + i * 20, 0],
            y: [0, 30 + i * 20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2,
          }}
        />
      ))}

      {/* Animated grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(13, 148, 136, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(13, 148, 136, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }}
        >
          <motion.h2
            className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 text-center relative"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            <span className="relative inline-block">
              Featured <span className="gradient-text">Projects</span>
              <motion.span
                className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-2 bg-gradient-to-r from-tealAccent via-tealLight to-tealAccent"
                initial={{ width: 0 }}
                animate={isInView ? { width: '400px' } : {}}
                transition={{ duration: 1.2, delay: 0.4 }}
              />
            </span>
          </motion.h2>

          <motion.p
            className="text-center text-gray400 mb-24 text-2xl font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            A selection of my recent creative work
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            style={{
              perspective: '1000px',
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="relative group cursor-pointer"
                onClick={() => setSelectedProject(project)}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                <motion.div
                  className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray900 to-gray800 border border-gray700 h-[350px] preserve-3d"
                  animate={{
                    rotateY: hoveredProject === project.id ? 5 : 0,
                    rotateX: hoveredProject === project.id ? -5 : 0,
                    scale: hoveredProject === project.id ? 1.05 : 1,
                    z: hoveredProject === project.id ? 50 : 0,
                  }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  whileHover={{
                    boxShadow: `0 20px 60px ${project.color}40`,
                  }}
                >
                  {/* Project Image/Placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray800 to-gray900">
                    <div className="w-full h-full flex items-center justify-center relative">
                      <span className="text-gray500 text-xl z-10">{project.title}</span>
                      <motion.div
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(135deg, ${project.color}20, transparent)`,
                        }}
                        animate={{
                          opacity: hoveredProject === project.id ? [0.5, 0.8, 0.5] : 0.3,
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                  </div>

                  {/* 3D Overlay with tilt */}
                  <motion.div
                    className="absolute inset-0 glass-dark flex flex-col items-center justify-center p-8 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: `linear-gradient(135deg, ${project.color}20, rgba(0,0,0,0.8))`,
                      transform: 'translateZ(20px)',
                    }}
                  >
                    <motion.h3
                      className="text-3xl font-bold mb-3 text-white"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-tealAccent mb-4 text-center">{project.category}</p>
                    <motion.span
                      className="text-tealAccent text-sm font-semibold flex items-center gap-2"
                      animate={{
                        x: hoveredProject === project.id ? [0, 5, 0] : 0,
                      }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      View Details
                      <span>→</span>
                    </motion.span>
                  </motion.div>

                  {/* Glow effect */}
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-tealAccent to-tealLight rounded-2xl opacity-0 group-hover:opacity-20 blur-xl -z-10"
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                {/* Floating category badge */}
                <motion.div
                  className="absolute -top-3 -right-3 px-4 py-2 glass-dark border border-tealAccent/50 rounded-lg text-sm font-semibold"
                  animate={{
                    y: hoveredProject === project.id ? [0, -5, 0] : 0,
                    rotateZ: hoveredProject === project.id ? [0, 5, 0] : 0,
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  {project.category}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced 3D Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="relative glass-dark rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-tealAccent/30"
              initial={{ scale: 0.8, opacity: 0, rotateY: -90 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateY: 90 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px',
              }}
            >
              <motion.button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-white hover:text-tealAccent transition-colors z-10 p-2 glass-dark rounded-full border border-gray700"
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              <div className="p-8 md:p-12">
                <motion.h2
                  className="text-4xl md:text-5xl font-bold mb-4 gradient-text"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {selectedProject.title}
                </motion.h2>

                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="px-4 py-2 glass-dark border border-tealAccent/30 rounded-lg text-sm">
                    {selectedProject.category}
                  </span>
                  <span className="px-4 py-2 glass-dark border border-tealAccent/30 rounded-lg text-sm">
                    {selectedProject.year}
                  </span>
                </div>

                <motion.div
                  className="mb-8 rounded-xl overflow-hidden"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <img
                    src={selectedProject.images[0]}
                    alt={selectedProject.title}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </motion.div>

                <div className="space-y-6">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h3 className="text-tealAccent font-bold mb-2 text-xl">Description</h3>
                    <p className="text-gray300 leading-relaxed">{selectedProject.description}</p>
                  </motion.div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h3 className="text-tealAccent font-bold mb-2 text-xl">Role</h3>
                    <p className="text-gray300">{selectedProject.role}</p>
                  </motion.div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <h3 className="text-tealAccent font-bold mb-4 text-xl">Technologies</h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 glass-dark border border-gray700 rounded-lg text-sm hover:border-tealAccent transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
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

