"use client"

import { useEffect, useRef } from "react"

export default function CursorDot() {
  const dotRef = useRef<HTMLDivElement | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const dot = dotRef.current
    if (!dot) return

    const pointerOk = window.matchMedia("(pointer: fine)").matches
    if (!pointerOk) {
      dot.style.display = "none"
      return
    }

    let targetX = 0
    let targetY = 0
    let x = 0
    let y = 0
    let visible = false

    const render = () => {
      x += (targetX - x) * 0.25
      y += (targetY - y) * 0.25
      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`
      rafRef.current = requestAnimationFrame(render)
    }

    const onMove = (event: MouseEvent) => {
      targetX = event.clientX
      targetY = event.clientY
      if (!visible) {
        visible = true
        dot.style.opacity = "1"
      }
      const el = document.elementFromPoint(targetX, targetY)
      const footer = document.getElementById("contact")
      const isOverFooter = footer && (el === footer || footer.contains(el))
      if (isOverFooter) {
        dot.style.backgroundColor = "white"
        dot.style.boxShadow = "0 0 0 2px #53232A"
      } else {
        dot.style.backgroundColor = "#53232A"
        dot.style.boxShadow = "0 0 0 2px white"
      }
    }

    const onLeave = () => {
      visible = false
      dot.style.opacity = "0"
    }

    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseleave", onLeave)
    window.addEventListener("blur", onLeave)
    rafRef.current = requestAnimationFrame(render)

    return () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseleave", onLeave)
      window.removeEventListener("blur", onLeave)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed left-0 top-0 z-50 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 transition-opacity duration-150"
      style={{ backgroundColor: "#53232A", boxShadow: "0 0 0 2px white" }}
    />
  )
}
