import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PlaygroundPage() {
  return (
    <main className="flex-1 flex flex-col bg-[#F0EDE5] text-[#53232A]">
      <Header />

      <div className="px-6 md:px-12 lg:px-16 py-16 lg:py-24">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-semibold">Play</h1>
          <p className="mt-4 text-[#6b352f]">Coming soon.</p>
        </div>
      </div>

      <Footer />
    </main>
  )
}
