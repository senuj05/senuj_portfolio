import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default function HuddlePage() {
  return (
    <main className="flex-1 flex flex-col bg-white text-[#53232A]">
      <Header />

      <div className="flex-grow px-6 md:px-12 lg:px-16 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl rounded-3xl border border-black/5 bg-white/60 px-8 py-16 text-center shadow-[0_16px_50px_rgba(83,35,42,0.12)]">
          <p className="text-xs uppercase tracking-[0.2em] text-[#86A433] font-semibold">Huddle</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-semibold">Coming soon</h1>
          <p className="mt-4 text-[#6b352f]">
            This case study is in progress. Check back shortly for the full story.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-12 lg:px-16 pb-10">
        <div className="border-t border-[#53232A]/30 pt-6 text-center text-2xl md:text-3xl italic text-[#53232A]"></div>
      </div>

      <Footer />
    </main>
  )
}
