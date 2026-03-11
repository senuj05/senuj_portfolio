"use client"

import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement | null>(null)

  useLayoutEffect(() => {
    if (!headingRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          clearProps: "opacity,transform",
        }
      )
    }, headingRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="pt-32 pb-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h1
          ref={headingRef}
          className="text-5xl md:text-6xl font-bold tracking-tight text-[#53232A] text-left font-sf-pro"
          style={{ opacity: 1 }}
        >
          Senuvi Jayasinghe.
        </h1>
      </div>
    </section>
  )
}
