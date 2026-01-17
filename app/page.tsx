import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProjectThumbnails from '@/components/ProjectThumbnails'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <Header />
      <Hero />
      <ProjectThumbnails />
      <Footer />
    </main>
  )
}
