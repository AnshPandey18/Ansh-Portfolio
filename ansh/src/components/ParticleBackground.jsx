import { useEffect, useRef } from 'react'

/**
 * Subtle floating particle network — teal/sky palette, very low opacity
 * so it enhances depth without competing with content.
 */
const ParticleBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Palette: teal → sky-blue
    const COLORS = [
      { r:13,  g:148, b:136 },  // teal-600
      { r:20,  g:184, b:166 },  // teal-400
      { r:56,  g:189, b:248 },  // sky-400
    ]

    const N = 55
    const particles = Array.from({ length: N }, () => {
      const c = COLORS[Math.floor(Math.random() * COLORS.length)]
      return {
        x:      Math.random() * window.innerWidth,
        y:      Math.random() * window.innerHeight,
        vx:     (Math.random() - 0.5) * 0.25,
        vy:     (Math.random() - 0.5) * 0.25,
        r:      Math.random() * 1.4 + 0.4,
        alpha:  Math.random() * 0.18 + 0.06,
        color:  c,
      }
    })

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p, i) => {
        // Move
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width)  p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        // Draw dot
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.color.r},${p.color.g},${p.color.b},${p.alpha})`
        ctx.fill()

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const q  = particles[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const d  = Math.sqrt(dx * dx + dy * dy)
          if (d < 130) {
            const t = 1 - d / 130
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            // Blend the two particle colours
            ctx.strokeStyle = `rgba(${p.color.r},${p.color.g},${p.color.b},${0.09 * t})`
            ctx.lineWidth   = 0.6
            ctx.stroke()
          }
        }
      })

      raf = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  )
}

export default ParticleBackground
