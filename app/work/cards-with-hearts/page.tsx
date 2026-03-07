import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SidebarNav from './SidebarNav'
import { Chelsea_Market } from 'next/font/google'

const chelseaMarket = Chelsea_Market({
  subsets: ['latin'],
  weight: '400',
})

export default function CardsWithHeartsPage() {
  return (
    <main className="flex-1 flex flex-col bg-white text-[#53232A]">
      <Header />

      <div className="flex-grow px-6 md:px-12 lg:px-16 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_minmax(0,1fr)] gap-8 lg:gap-14">
          <div className="hidden lg:block">
            <aside
              className="fixed top-24 left-16 w-[200px] max-h-[calc(100vh-6rem)] overflow-y-auto text-xs uppercase tracking-[0.12em] text-[#7a6161] z-30"
              data-speed="0"
              data-lag="0"
            >
              <SidebarNav />
            </aside>
          </div>

          <div className="space-y-16">
            <section id="overview" className="space-y-10 pt-6 md:pt-10 scroll-mt-28">
              <div className="rounded-2xl overflow-hidden w-full">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  poster="/images/cwh_preview.png"
                >
                  <source src="/images/cwh-hero.mov" />
                </video>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10">
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#86A433] font-semibold">Overview</p>
                  <h1 className={`text-4xl md:text-5xl font-semibold ${chelseaMarket.className}`}>
                    Cards with Hearts
                  </h1>
                  <p className="text-[#6b352f]">
                    A platform connecting people worldwide with children in Sri Lankan hospitals through
                    handmade cards filled with hope.
                  </p>
                  <p className="text-[#6b352f]">
                    I designed and built a platform where anyone can send encouraging messages to children
                    in hospitals. Contributors of all ages write kid-friendly cards that bring comfort to
                    children facing difficult times.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 text-sm text-[#6b352f]">
                  <div className="space-y-2">
                    <div className="text-xs uppercase tracking-[0.2em] text-[#86A433] font-semibold">Timeline</div>
                    <div>Sep 2025 – Jan 2026</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs uppercase tracking-[0.2em] text-[#86A433] font-semibold">Role</div>
                    <div>Product Designer &amp; Developer</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs uppercase tracking-[0.2em] text-[#86A433] font-semibold">Team</div>
                    <div>
                      <span className="block">2 PM</span>
                      <span className="block">1 Designer &amp; Engineer (me!)</span>
                      <span className="block">1 Content Writer</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs uppercase tracking-[0.2em] text-[#86A433] font-semibold">Tools</div>
                    <div>
                      <span className="block">Figma</span>
                      <span className="block">React</span>
                      <span className="block">Cursor</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs uppercase tracking-[0.2em] text-[#86A433] font-semibold">Website</div>
                    <a
                      href="https://cardswhearts.com"
                      className="underline hover:text-[#3e1b1b]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      cardswhearts.com
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-12 lg:px-16 pb-10">
        <div className="border-t border-[#53232A]/30 pt-6 text-center text-2xl md:text-3xl italic text-[#53232A]"></div>
      </div>

      <Footer />
    </main>
  )
}
