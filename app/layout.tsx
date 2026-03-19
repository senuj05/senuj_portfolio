import type { Metadata } from 'next'
import './globals.css'
import CursorDot from '@/components/CursorDot'
import SmoothScroller from '@/components/SmoothScroller'
import { Jost } from 'next/font/google'

const jost = Jost({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Senuvi Jayasinghe',
  description: 'Portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`min-h-screen bg-white text-[#53232A] cursor-none ${jost.className}`}>
        <CursorDot />
        <SmoothScroller>{children}</SmoothScroller>
      </body>
    </html>
  )
}
