"use client"

import { useEffect, useMemo, useState } from "react"
import gsap from "gsap"
import ScrollSmoother from "gsap/ScrollSmoother"

const sections = [
  { id: "overview", label: "Overview" },
]

export default function SidebarNav() {
  const [activeId, setActiveId] = useState("overview")

  const sectionIds = useMemo(() => sections.map((section) => section.id), [])

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault()
    const target = document.getElementById(id)
    if (!target) return

    const smoother = ScrollSmoother.get && ScrollSmoother.get()
    if (smoother) {
      smoother.scrollTo(target, true, "top top")
    } else {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => entry.target.id)

        if (!visible.length) return

        const next = sectionIds.find((id) => visible.includes(id))
        if (next) setActiveId(next)
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.2, 0.6, 1] }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [sectionIds])

  return (
    <nav className="space-y-3 pt-8">
      {sections.map((section) => {
        const isActive = activeId === section.id
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            aria-current={isActive ? "true" : undefined}
            onClick={(event) => handleClick(event, section.id)}
            className={
              isActive
                ? "block font-semibold text-[#53232A]"
                : "block hover:text-[#53232A]"
            }
          >
            {section.label}
          </a>
        )
      })}
    </nav>
  )
}
