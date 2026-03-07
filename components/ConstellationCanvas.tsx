'use client'

import { useRef, useEffect } from 'react'

interface Star {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
}

interface ConstellationCanvasProps {
  starCount?: number
  distance?: number
  radius?: number
  starColor?: string
  lineColor?: string
  lineWidth?: number
}

export default function ConstellationCanvas({
  starCount = 80,
  distance = 120,
  radius = 200,
  starColor = 'rgba(255, 255, 255, 0.5)',
  lineColor = 'rgba(255, 255, 255, 0.35)',
  lineWidth = 0.2,
}: ConstellationCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePosRef = useRef({ x: 0, y: 0 })
  const starsRef = useRef<Star[]>([])
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      if (mousePosRef.current.x === 0 && mousePosRef.current.y === 0) {
        mousePosRef.current = { x: canvas.width / 2, y: canvas.height / 2 }
      }
      initStars()
    }

    const initStars = () => {
      starsRef.current = []
      for (let i = 0; i < starCount; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: 0.1 - Math.random() * 0.05,
          vy: 0.1 - Math.random() * 0.05,
          radius: Math.random() * 2 + 0.5,
        })
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const stars = starsRef.current
      const mx = mousePosRef.current.x
      const my = mousePosRef.current.y

      // Draw lines between nearby stars (only within radius of mouse)
      ctx.strokeStyle = lineColor
      ctx.lineWidth = lineWidth

      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const iStar = stars[i]
          const jStar = stars[j]

          const dx = iStar.x - jStar.x
          const dy = iStar.y - jStar.y

          // Stars within distance of each other
          if (Math.abs(dx) < distance && Math.abs(dy) < distance) {
            // Both stars within radius of mouse
            const iNearMouse =
              Math.abs(iStar.x - mx) < radius &&
              Math.abs(iStar.y - my) < radius
            const jNearMouse =
              Math.abs(jStar.x - mx) < radius &&
              Math.abs(jStar.y - my) < radius

            if (iNearMouse && jNearMouse) {
              ctx.beginPath()
              ctx.moveTo(iStar.x, iStar.y)
              ctx.lineTo(jStar.x, jStar.y)
              ctx.stroke()
            }
          }
        }
      }

      // Draw and animate stars
      ctx.fillStyle = starColor
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i]

        // Bounce off edges
        if (star.y < 0 || star.y > canvas.height) star.vy = -star.vy
        if (star.x < 0 || star.x > canvas.width) star.vx = -star.vx

        star.x += star.vx
        star.y += star.vy

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2, false)
        ctx.fill()
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY }
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', handleMouseMove)

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [starCount, distance, radius, starColor, lineColor, lineWidth])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}
