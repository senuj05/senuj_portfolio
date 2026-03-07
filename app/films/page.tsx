import FilmsArt from '@/components/FilmsArt'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function FilmsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-[#53232A]">
      <Header />
      <div className="flex-grow pt-24">
        <FilmsArt />
      </div>
      <Footer />
    </main>
  )
}
