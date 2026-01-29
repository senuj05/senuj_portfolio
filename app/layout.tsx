import type { Metadata } from 'next'
import './globals.css'
import CursorDot from '@/components/CursorDot'
import SmoothScroller from '@/components/SmoothScroller'

export const metadata: Metadata = {
  title: 'Senuvi Jayasinghe',
  description: 'Portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#F0EDE5] text-[#53232A] cursor-none">
        <CursorDot />
        <SmoothScroller>{children}</SmoothScroller>
      </body>
    </html>
  )
}
