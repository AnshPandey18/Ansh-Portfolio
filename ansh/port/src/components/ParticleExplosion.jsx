import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const ParticleExplosion = ({ trigger, onComplete }) => {
  const [particles, setParticles] = useState([])
  const timeoutRef = useRef(null)

  useEffect(() => {
    if (trigger) {
      // Create particles for breaking effect
      const newParticles = Array.from({ length: 40 }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 18,
        vy: (Math.random() - 0.5) * 18,
        size: Math.random() * 6 + 3,
        color: ['#0d9488', '#14b8a6', '#0f766e'][Math.floor(Math.random() * 3)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 15,
        opacity: 1,
      }))
      setParticles(newParticles)

      // Remove particles after animation
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => {
        setParticles([])
        if (onComplete) onComplete()
      }, 2000)
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [trigger, onComplete])

  if (particles.length === 0) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
          }}
          initial={{
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,
            rotate: particle.rotation,
          }}
          animate={{
            opacity: [1, 1, 0],
            scale: [1, 1.4, 0],
            x: particle.vx * 12,
            y: particle.vy * 12,
            rotate: particle.rotation + particle.rotationSpeed * 12,
          }}
          transition={{
            duration: 2,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  )
}

export default ParticleExplosion

