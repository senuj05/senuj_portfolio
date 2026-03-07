"use client"

import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

const BASE_CURVE = 90
const VIEWBOX_WIDTH = 1200
const VIEWBOX_HEIGHT = 220

export default function FooterBouncyWave({ fill = 'white' }: { fill?: string }) {
  const pathRef = useRef<SVGPathElement | null>(null)
  const footerRef = useRef<HTMLDivElement | null>(null)
  const tweenRef = useRef<gsap.core.Tween | null>(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const path = pathRef.current
    const footer = footerRef.current
    if (!path || !footer) return

    const render = (curve: number) => {
      path.setAttribute(
        "d",
        `M0,${BASE_CURVE} Q${VIEWBOX_WIDTH / 2},${BASE_CURVE + curve} ${VIEWBOX_WIDTH},${BASE_CURVE} V${VIEWBOX_HEIGHT} H0 Z`
      )
    }

    render(0)

    const applyCurve = (curve: number) => {
      tweenRef.current?.kill()
      tweenRef.current = gsap.to(
        { curve: 0 },
        {
          curve,
          duration: 0.2,
          ease: "power2.out",
          onUpdate() {
            render((this.targets()[0] as { curve: number }).curve)
          },
          onComplete() {
            gsap.to(
              { curve },
              {
                curve: 0,
                duration: 1.4,
                ease: "elastic.out(1.2, 0.4)",
                onUpdate() {
                  render((this.targets()[0] as { curve: number }).curve)
                },
              }
            )
          },
        }
      )
    }

    const scroller = document.querySelector("#smooth-content")
      ? "#smooth-content"
      : undefined

    const trigger = ScrollTrigger.create({
      trigger: footer,
      start: "top bottom",
      onEnter: (self) => {
        const velocity = self.getVelocity()
        const curve = gsap.utils.clamp(-120, 120, -velocity / 15 || -40)
        applyCurve(curve)
      },
      onEnterBack: (self) => {
        const velocity = self.getVelocity()
        const curve = gsap.utils.clamp(-120, 120, -velocity / 15 || 40)
        applyCurve(curve)
      },
      scroller,
    })

    return () => {
      trigger.kill()
      tweenRef.current?.kill()
    }
  }, [])

  return (
    <div
      ref={footerRef}
      className="absolute left-0 right-0 -top-20 h-20 pointer-events-none"
    >
      <svg
        aria-hidden="true"
        preserveAspectRatio="none"
        viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
        className="h-full w-full"
      >
        <path ref={pathRef} fill={fill} />
      </svg>
    </div>
  )
}
