import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Senuvi Jayasinghe',
  description: 'Portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#F4F0E8] text-[#53232A]">
        {children}
      </body>
    </html>
  )
}
