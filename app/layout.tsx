import type { Metadata } from 'next'
import { Nanum_Myeongjo, Fraunces } from 'next/font/google'
import './globals.css'

const nanumMyeongjo = Nanum_Myeongjo({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-nanum-myeongjo',
})

const fraunces = Fraunces({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-fraunces',
  style: 'normal',
})

export const metadata: Metadata = {
  title: 'Senu.J - Portfolio',
  description: 'Design & Develop portfolio',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${nanumMyeongjo.variable} ${fraunces.variable} min-h-screen flex flex-col bg-[#F4F0E8] text-gray-900`}>
        {children}
      </body>
    </html>
  )
}
