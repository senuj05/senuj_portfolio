import HomeHeader from '@/components/HomeHeader'
import HomeHero from '@/components/HomeHero'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#f5f5f5] text-gray-900">
      <HomeHeader />
      <HomeHero />
      <Footer waveFill="#f5f5f5" />
    </main>
  )
}
