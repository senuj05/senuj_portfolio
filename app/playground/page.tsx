import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DraggableCanvas from '@/components/DraggableCanvas'

export default function PlaygroundPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F0EDE5] text-[#53232A]">
      <Header />

      <div className="flex-grow px-6 md:px-12 lg:px-16 pt-28 pb-10 flex flex-col items-center">
        <div className="w-full max-w-7xl mx-auto mb-8">
          <h1 className="text-4xl md:text-5xl font-semibold mb-2">Play</h1>
          <p className="text-[#6b352f]">A space for creative experiments and visual explorations.</p>
        </div>
        <DraggableCanvas />
      </div>

      <Footer />
    </main>
  )
}
