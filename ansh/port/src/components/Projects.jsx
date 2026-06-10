import { useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRef } from 'react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'CitySewa',
      category: 'Full Stack',
      year: '2025',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      description: 'Built a platform to bridge communication between citizens and government authorities.\n• Implemented authentication, complaint submission, and real-time status tracking.\n• Created separate dashboards for citizens and authorities ensuring transparency.',
      role: 'Full Stack Developer',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80',
      github: 'https://github.com/AnshPandey18/CitySewa',
      liveLink: '',
      accent: 'gold',
    },
    {
      id: 2,
      title: 'Trust Hire',
      category: 'Full Stack',
      year: '2024',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      description: 'Developed a freelancing website aimed at reducing platform fees for freelancers.\n• Implemented job posting, bidding system, and freelancer profile management.\n• Designed backend APIs and integrated frontend using REST architecture.',
      role: 'Full Stack Developer',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      github: 'https://github.com/AnshPandey18/Trust-Hire',
      liveLink: '',
      accent: 'sky',
    },
    {
      id: 3,
      title: 'Elegant AV Solution',
      category: 'Full Stack',
      year: '2025',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      description: 'Developed a digital platform for managing AV solutions and portable cabin services.\n• Implemented product management, inquiry handling, and scalable backend systems.\n• Digitized offline business workflows into scalable web-based systems.',
      role: 'Full Stack Developer & Designer',
      image: '/projects/elegant_av.png',
      github: 'https://github.com/AnshPandey18',
      liveLink: 'https://elegantavsolutionmain.vercel.app/',
      accent: 'gold',
    },

  ]

  return (
    <section id="projects" className="py-32 md:py-40 relative overflow-hidden" style={{ background: 'var(--bg)' }}>
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(147,197,253,0.15), transparent)' }}
      />
      <div
        className="absolute right-0 top-1/4 w-96 h-96 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(147,197,253,0.04) 0%, transparent 70%)', filter: 'blur(50px)' }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <span className="pill mb-4 inline-flex">Portfolio</span>
          <h2
            className="font-black"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--text-1)' }}
          >
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-4 text-base" style={{ color: 'var(--text-2)' }}>
            A selection of my recent full-stack web developments
          </p>
        </motion.div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer rounded-2xl overflow-hidden"
              style={{
                background: 'var(--surface2)',
                border: '1px solid var(--border)',
              }}
              onClick={() => setSelectedProject(project)}
              whileHover={{
                borderColor: project.accent === 'gold' ? 'rgba(212,168,67,0.35)' : 'rgba(147,197,253,0.28)',
                y: -4,
              }}
              transition={{ duration: 0.25 }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Overlay on hover */}
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'rgba(10,13,20,0.7)' }}
                >
                  <span className="text-sm font-semibold px-5 py-2 rounded-full" style={{ background: 'var(--gold)', color: '#0a0d14' }}>
                    View Details
                  </span>
                </div>
                {/* Category badge */}
                <div
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold"
                  style={{
                    background: 'rgba(10,13,20,0.8)',
                    border: `1px solid ${project.accent === 'gold' ? 'rgba(212,168,67,0.4)' : 'rgba(147,197,253,0.35)'}`,
                    color: project.accent === 'gold' ? 'var(--gold)' : 'var(--sky)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  {project.category}
                </div>
                {/* Year */}
                <div
                  className="absolute top-4 right-4 text-xs font-semibold"
                  style={{ color: 'var(--text-3)' }}
                >
                  {project.year}
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-1)' }}>{project.title}</h3>
                <p className="text-sm mb-4 line-clamp-2" style={{ color: 'var(--text-2)' }}>
                  {project.description.split('\n')[0]}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map(t => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-lg font-medium"
                      style={{
                        background: 'var(--border)',
                        color: 'var(--text-3)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs px-2.5 py-1 rounded-lg" style={{ color: 'var(--text-3)' }}>
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(10,13,20,0.9)', backdropFilter: 'blur(12px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-2xl"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
              }}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={e => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 z-10 p-2 rounded-lg transition-colors"
                style={{ background: 'var(--surface2)', color: 'var(--text-2)' }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image */}
              <div className="h-56 overflow-hidden rounded-t-2xl">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
              </div>

              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold"
                    style={{ background: 'rgba(212,168,67,0.12)', color: 'var(--gold)', border: '1px solid rgba(212,168,67,0.2)' }}>
                    {selectedProject.category}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold"
                    style={{ background: 'var(--surface2)', color: 'var(--text-2)', border: '1px solid var(--border)' }}>
                    {selectedProject.year}
                  </span>
                </div>

                <h2 className="text-3xl font-black mb-2" style={{ color: 'var(--text-1)' }}>{selectedProject.title}</h2>
                <p className="text-sm font-semibold mb-5" style={{ color: 'var(--gold)' }}>{selectedProject.role}</p>

                <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-2)', whiteSpace: 'pre-line' }}>
                  {selectedProject.description}
                </p>

                <h4 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--text-3)' }}>Tech Stack</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech.map(t => (
                    <span key={t} className="px-3 py-1.5 text-xs font-semibold rounded-lg"
                      style={{ background: 'var(--surface2)', border: '1px solid var(--border)', color: 'var(--text-2)' }}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 flex-wrap pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                  {selectedProject.liveLink && (
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 text-sm font-semibold rounded-xl flex items-center gap-2"
                      style={{ background: 'var(--gold)', color: '#0a0d14' }}
                    >
                      Live Site ↗
                    </a>
                  )}
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 text-sm font-semibold rounded-xl flex items-center gap-2"
                      style={{ background: 'var(--surface2)', border: '1px solid var(--border)', color: 'var(--text-1)' }}
                    >
                      GitHub →
                    </a>
                  )}
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
