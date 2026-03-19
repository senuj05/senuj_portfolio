"use client"

import { useEffect, useState } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import ScrollSmoother from "gsap/ScrollSmoother"

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

    const getScrollTop = () => {
      const smoother = ScrollSmoother.get?.()
      if (smoother) return smoother.scrollTop()
      return window.scrollY ?? document.documentElement.scrollTop ?? 0
    }

    const updateVisibility = () => {
      const scrollTop = getScrollTop()
      const footer = document.querySelector("footer")
      const footerInView = footer ? footer.getBoundingClientRect().top < window.innerHeight : false

      setVisible((v) => {
        const shouldShow = scrollTop > 100 && !footerInView
        return shouldShow !== v ? shouldShow : v
      })
    }

    ScrollTrigger.addEventListener("scroll", updateVisibility)
    window.addEventListener("scroll", updateVisibility, { passive: true })
    updateVisibility()

    return () => {
      ScrollTrigger.removeEventListener("scroll", updateVisibility)
      window.removeEventListener("scroll", updateVisibility)
    }
  }, [])

  const scrollToTop = () => {
    const smoother = ScrollSmoother.get && ScrollSmoother.get()
    if (smoother) {
      smoother.scrollTo(0, true)
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  if (!visible) return null

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-50 w-12 h-12 flex items-center justify-center bg-[#53232A] text-white rounded-full shadow-lg hover:bg-[#3e1b1b] transition-colors focus:outline-none focus:ring-2 focus:ring-[#53232A] focus:ring-offset-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  )
}
