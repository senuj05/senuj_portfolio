'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
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
    { number: '02', label: 'Work', href: '/work' },
    { number: '03', label: 'Play', href: '/playground' },
    { number: '04', label: 'About', href: '/about' },
    { number: '05', label: 'Gallery', href: '/films' },
  ]

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 cursor-visible ${variant === 'dark' ? 'bg-[#180E0E] border-b border-white/10' : 'bg-white border-b border-gray-200'}`}>
        <div className="px-6 md:px-12 lg:px-24 py-8 flex items-center justify-between w-full relative">
          {/* Left Side - Logo and Brand */}
          <Link href="/" className="flex items-center gap-3 font-sf-pro flex-shrink-0">
            <div className={`w-6 h-6 rounded-full flex-shrink-0 ${variant === 'dark' ? 'bg-white/90' : 'bg-[#53232A]'}`}></div>
            <span className={`text-lg font-normal transition-colors ${variant === 'dark' ? 'text-white hover:text-white/80' : 'text-gray-900 hover:text-gray-700'}`}>
              Senu.j
            </span>
          </Link>

          {/* Center - Navigation Links (desktop only) */}
          <nav className="hidden md:flex items-center justify-center gap-6 font-sf-pro font-normal absolute left-1/2 -translate-x-1/2">
            <Link href="/work" className={`font-sf-pro text-base md:text-lg font-normal transition-colors ${variant === 'dark' ? `text-white/60 hover:text-white ${pathname === '/work' ? 'text-white' : ''}` : `text-gray-500 hover:text-gray-900 ${pathname === '/work' ? 'text-gray-900' : ''}`}`}>
              Work
            </Link>
            <Link href="/playground" className={`font-sf-pro text-base md:text-lg font-normal transition-colors ${variant === 'dark' ? `text-white/60 hover:text-white ${pathname === '/playground' ? 'text-white' : ''}` : `text-gray-500 hover:text-gray-900 ${pathname === '/playground' ? 'text-gray-900' : ''}`}`}>
              Play
            </Link>
            <Link href="/about" className={`font-sf-pro text-base md:text-lg font-normal transition-colors ${variant === 'dark' ? `text-white/60 hover:text-white ${pathname === '/about' ? 'text-white' : ''}` : `text-gray-500 hover:text-gray-900 ${pathname === '/about' ? 'text-gray-900' : ''}`}`}>
              About
            </Link>
            <Link href="/films" className={`font-sf-pro text-base md:text-lg font-normal transition-colors ${variant === 'dark' ? `text-white/60 hover:text-white ${pathname === '/films' ? 'text-white' : ''}` : `text-gray-500 hover:text-gray-900 ${pathname === '/films' ? 'text-gray-900' : ''}`}`}>
              Gallery
            </Link>
          </nav>

          {/* Right Side - Menu Button */}
          <div className="flex items-center justify-end flex-shrink-0">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col gap-1.5"
              aria-label="Toggle menu"
            >
              <span className={`w-16 h-px transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''} ${variant === 'dark' ? 'bg-white' : 'bg-gray-900'}`}></span>
              <span className={`w-16 h-px transition-all ${menuOpen ? 'opacity-0' : ''} ${variant === 'dark' ? 'bg-white' : 'bg-gray-900'}`}></span>
              <span className={`w-16 h-px transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''} ${variant === 'dark' ? 'bg-white' : 'bg-gray-900'}`}></span>
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Overlay Menu */}
      {menuOpen && (
        <div className={`fixed inset-0 z-[60] cursor-visible ${variant === 'dark' ? 'bg-[#180E0E]' : 'bg-white'}`}>
          <div className="h-full flex flex-col">
            {/* Top Bar with Logo and Close Button */}
            <div className="flex justify-between items-center px-6 pt-6 pb-6">
              <Link href="/" onClick={() => setMenuOpen(false)} className={`w-14 h-14 rounded-full overflow-hidden block relative ${variant === 'dark' ? 'bg-white/90' : 'bg-[#53232A]'}`}>
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
                className={`w-10 h-10 flex items-center justify-center transition-colors ${variant === 'dark' ? 'text-white hover:text-white/70' : 'text-gray-900 hover:text-gray-600'}`}
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <nav className="flex-1 flex flex-col pt-12 px-6 font-sf-pro">
              {menuItems.map((item, index) => (
                <div key={item.number}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block py-6 group ${pathname === item.href ? (variant === 'dark' ? 'text-white/80' : 'text-gray-600') : ''}`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`text-sm font-medium w-8 ${variant === 'dark' ? 'text-white/50' : 'text-gray-400'}`}>{item.number}</span>
                      <span className={`font-sf-pro text-3xl md:text-4xl font-normal transition-colors ${variant === 'dark' ? 'text-white group-hover:text-white/80' : 'text-gray-900 group-hover:text-gray-600'}`}>
                        {item.label}
                      </span>
                    </div>
                  </Link>
                  {index < menuItems.length - 1 && (
                    <div className={variant === 'dark' ? 'border-t border-white/10' : 'border-t border-gray-200'}></div>
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
