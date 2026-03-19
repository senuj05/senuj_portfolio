"use client"

import { useEffect, useState } from "react"

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const updateVisibility = () => {
      const scrollTop = window.scrollY ?? document.documentElement.scrollTop ?? 0
      const footer = document.querySelector("footer")
      const footerInView = footer ? footer.getBoundingClientRect().top < window.innerHeight : false
      setVisible(scrollTop > 100 && !footerInView)
    }

    window.addEventListener("scroll", updateVisibility, { passive: true })
    updateVisibility()

    return () => window.removeEventListener("scroll", updateVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!visible) return null

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center bg-[#53232A] text-white rounded-full shadow-lg hover:bg-[#3e1b1b] transition-colors focus:outline-none focus:ring-2 focus:ring-[#53232A] focus:ring-offset-2"
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
