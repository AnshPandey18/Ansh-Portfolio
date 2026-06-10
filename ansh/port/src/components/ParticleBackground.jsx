import { useEffect, useRef } from 'react'

const ParticleBackground = ({ darkMode }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let lastTime = 0
    const FPS = 30
    const interval = 1000 / FPS

    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()
    const resizeObserver = new ResizeObserver(setCanvasSize)
    resizeObserver.observe(document.body)

    const PARTICLE_COUNT = 32
    const CONNECTION_DIST = 90

    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.35,
      speedY: (Math.random() - 0.5) * 0.35,
      opacity: Math.random() * 0.3 + 0.1,
    }))

    const animate = (timestamp) => {
      animationFrameId = requestAnimationFrame(animate)
      const delta = timestamp - lastTime
      if (delta < interval) return
      lastTime = timestamp - (delta % interval)

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Theme-aware colors
      const isDark = document.documentElement.classList.contains('dark') ||
        !document.documentElement.classList.contains('light')
      const particleColor = isDark ? '212, 168, 67' : '154, 109, 20'
      const lineColor = isDark ? '212, 168, 67' : '154, 109, 20'
      const particleOpacityMult = isDark ? 0.5 : 0.35

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.speedX
        p.y += p.speedY
        if (p.x > canvas.width) p.x = 0
        else if (p.x < 0) p.x = canvas.width
        if (p.y > canvas.height) p.y = 0
        else if (p.y < 0) p.y = canvas.height

        ctx.fillStyle = `rgba(${particleColor}, ${p.opacity * particleOpacityMult})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.lineWidth = 0.7
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          if (Math.abs(dx) > CONNECTION_DIST) continue
          const dy = particles[i].y - particles[j].y
          const distSq = dx * dx + dy * dy
          const maxSq = CONNECTION_DIST * CONNECTION_DIST
          if (distSq < maxSq) {
            const alpha = (isDark ? 0.07 : 0.05) * (1 - distSq / maxSq)
            ctx.strokeStyle = `rgba(${lineColor}, ${alpha})`
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    animationFrameId = requestAnimationFrame(animate)
    return () => {
      resizeObserver.disconnect()
      cancelAnimationFrame(animationFrameId)
    }
  }, [darkMode])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ mixBlendMode: 'normal', opacity: 0.8 }}
    />
  )
}

export default ParticleBackground
