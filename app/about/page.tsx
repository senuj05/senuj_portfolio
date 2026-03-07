import About from '@/components/About'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-[#53232A]">
      <Header />
      <div className="flex-grow">
        <About />
      </div>
      <Footer />
    </main>
  )
}
