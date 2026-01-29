"use client"

import { ReactNode, useLayoutEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import ScrollSmoother from "gsap/ScrollSmoother"

type SmoothScrollerProps = {
  children: ReactNode
}

export default function SmoothScroller({ children }: SmoothScrollerProps) {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

    const smoother = ScrollSmoother.create({
      smooth: 1.2,
      effects: true,
      normalizeScroll: true,
    })

    return () => {
      smoother?.kill()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  )
}
