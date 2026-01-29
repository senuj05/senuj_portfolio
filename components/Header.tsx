'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  // Prevent body scroll when menu is open
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
    { number: '02', label: 'About', href: '/about' },
    { number: '03', label: 'Work', href: '/work' },
    { number: '04', label: 'Play', href: '/playground' },
    { number: '05', label: 'Gallery', href: '/films' },
  ]

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F0EDE5] border-b border-gray-200 cursor-visible">
        <div className="px-6 md:px-12 lg:px-24 py-8 flex items-center justify-between">
          {/* Left Side - Logo and Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#53232A] flex-shrink-0"></div>
            <Link href="/" className="text-lg font-semibold text-gray-900 hover:text-gray-700 transition-colors">
              Senu.j
            </Link>
          </div>

          {/* Center - Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/work" className={`text-base md:text-lg font-normal text-gray-500 hover:text-gray-900 transition-colors ${pathname === '/work' ? 'text-gray-900' : ''}`}>
              Work
            </Link>
            <Link href="/playground" className={`text-base md:text-lg font-normal text-gray-500 hover:text-gray-900 transition-colors ${pathname === '/playground' ? 'text-gray-900' : ''}`}>
              Play
            </Link>
            <Link href="/about" className={`text-base md:text-lg font-normal text-gray-500 hover:text-gray-900 transition-colors ${pathname === '/about' ? 'text-gray-900' : ''}`}>
              About
            </Link>
            <Link href="/films" className={`text-base md:text-lg font-normal text-gray-500 hover:text-gray-900 transition-colors ${pathname === '/films' ? 'text-gray-900' : ''}`}>
              Gallery
            </Link>
          </nav>

          {/* Right Side - Mobile Menu Button */}
          <div className="flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1.5"
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-gray-900 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-gray-900 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-gray-900 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white cursor-visible">
          <div className="h-full flex flex-col">
            {/* Top Bar with Logo and Close Button */}
            <div className="flex justify-between items-center px-6 pt-6 pb-6">
              <Link href="/" onClick={() => setMenuOpen(false)} className="w-14 h-14 rounded-full overflow-hidden block relative bg-[#53232A]">
                <Image
                  src="/images/senu.png"
                  alt="Senuvi Jayasinghe"
                  width={56}
                  height={56}
                  className="object-cover w-full h-full"
                />
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

            {/* Menu Items */}
            <nav className="flex-1 flex flex-col justify-center px-6">
              {menuItems.map((item, index) => (
                <div key={item.number}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block py-6 group ${pathname === item.href ? 'text-gray-600' : ''}`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-400 font-medium w-8">{item.number}</span>
                      <span className="text-3xl md:text-4xl font-normal text-gray-900 group-hover:text-gray-600 transition-colors">
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
