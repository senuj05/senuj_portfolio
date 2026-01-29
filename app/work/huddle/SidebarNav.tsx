"use client"

import { useEffect, useMemo, useState } from "react"

const sections = [
  { id: "overview", label: "Overview" },
  { id: "context", label: "Context" },
  { id: "insights", label: "Insights" },
  { id: "problem", label: "The Problem" },
  { id: "solution", label: "Solution" },
  { id: "outcome", label: "The Outcome" },
]

export default function SidebarNav() {
  const [activeId, setActiveId] = useState("overview")
  const sectionIds = useMemo(() => sections.map((section) => section.id), [])

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
