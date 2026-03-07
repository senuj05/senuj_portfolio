import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProjectThumbnails from '@/components/ProjectThumbnails'

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-[#53232A]">
      <Header />
      <div className="flex-grow pt-24">
        <Hero />
        <ProjectThumbnails />
      </div>
      <Footer />
    </main>
  )
}
