"use client"

import { ReactNode, useLayoutEffect } from "react"
import { usePathname } from "next/navigation"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import ScrollSmoother from "gsap/ScrollSmoother"

type SmoothScrollerProps = {
  children: ReactNode
}

export default function SmoothScroller({ children }: SmoothScrollerProps) {
  const pathname = usePathname()
  const isHome = pathname === "/"

  useLayoutEffect(() => {
    if (isHome) return
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
  }, [isHome])

  if (isHome) {
    return <>{children}</>
  }

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  )
}
