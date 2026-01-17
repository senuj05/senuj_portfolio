import FilmsArt from '@/components/FilmsArt'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function FilmsPage() {
  return (
    <main className="min-h-screen bg-[#F4F0E8] text-[#53232A]">
      <Header />
      <FilmsArt />
      <Footer />
    </main>
  )
}
