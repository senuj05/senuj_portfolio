import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProjectThumbnails from '@/components/ProjectThumbnails'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F0EDE5] text-[#53232A]">
      <Header />
      <Hero />
      <ProjectThumbnails />
      <Footer />
    </main>
  )
}
