'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function HomeHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [menuOpen])

  const menuItems = [
    { number: '01', label: 'Home', href: '/' },
    { number: '02', label: 'Work', href: '/work' },
    { number: '03', label: 'Play', href: '/playground' },
    { number: '04', label: 'About', href: '/about' },
    { number: '05', label: 'Gallery', href: '/films' },
  ]

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 py-8 bg-[#53232A] cursor-visible">
        <div className="px-6 md:px-12 lg:px-24 flex items-center justify-between w-full relative">
          <Link href="/" className="flex items-center gap-3  flex-shrink-0">
            <div className="w-6 h-6 rounded-full flex-shrink-0 bg-white"></div>
            <span className="text-lg font-normal text-white hover:text-white/90 transition-colors">Senu.j</span>
          </Link>
          <nav className="hidden md:flex items-center justify-center gap-8 md:gap-12  font-normal absolute left-1/2 -translate-x-1/2">
<Link href="/work" className=" text-white/90 hover:text-white text-base md:text-lg transition-colors">
            Work
          </Link>
            <Link href="/playground" className=" text-white/90 hover:text-white text-base md:text-lg transition-colors">
              Play
            </Link>
            <Link href="/about" className=" text-white/90 hover:text-white text-base md:text-lg transition-colors">
              About
            </Link>
            <Link href="/films" className=" text-white/90 hover:text-white text-base md:text-lg transition-colors">
              Gallery
            </Link>
          </nav>
          <div className="flex-shrink-0">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col gap-1.5"
              aria-label="Toggle menu"
            >
            <span className={`w-16 h-px transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''} bg-white`}></span>
            <span className={`w-16 h-px transition-all ${menuOpen ? 'opacity-0' : ''} bg-white`}></span>
            <span className={`w-16 h-px transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''} bg-white`}></span>
          </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 cursor-visible bg-white">
          <div className="h-full flex flex-col">
            <div className="flex justify-between items-center px-6 pt-6 pb-6">
              <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 ">
                <div className="w-6 h-6 rounded-full flex-shrink-0 bg-[#53232A]"></div>
                <span className="text-lg font-normal text-gray-900 hover:text-gray-700 transition-colors">Senu.j</span>
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center text-gray-900 hover:text-gray-600 transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="flex-1 flex flex-col pt-12 px-6  bg-white">
              {menuItems.map((item, index) => (
                <div key={item.number}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-6 group"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-medium w-8 text-gray-400">{item.number}</span>
                      <span className=" text-3xl md:text-4xl font-normal text-gray-900 group-hover:text-gray-600 transition-colors">
                        {item.label}
                      </span>
                    </div>
                  </Link>
                  {index < menuItems.length - 1 && (
                    <div className="border-t border-gray-200"></div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
