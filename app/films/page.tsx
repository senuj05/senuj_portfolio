import type { Metadata } from 'next'
import Header from '@/components/Header'
import FilmsArt from '@/components/FilmsArt'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Gallery - Senuvi Jayasinghe',
  description: 'Gallery of films and art work',
}

export default function FilmsPage() {
  return (
    <main className="flex-1 flex flex-col">
      <Header />
      <FilmsArt />
      <Footer />
    </main>
  )
}
