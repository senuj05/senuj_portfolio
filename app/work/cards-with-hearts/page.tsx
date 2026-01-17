import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

const scope = [
  'Creative Direction',
  'Product Design',
  'Interaction Design',
  'Microcopy',
  'Webflow Build',
]

const features = [
  'Swipeable card deck with playful hover physics',
  'Ambient video backgrounds to keep the experience lively',
  '“Keep/Discard” flow with subtle feedback tones',
  'Lightweight CTA rail so users can jump straight to checkout',
  'Typography-led layout with breathable negative space',
]

const galleryImages = [{ src: '/images/cwh_home.png', alt: 'Cards with Hearts home screen' }]

export default function CardsWithHeartsPage() {
  return (
    <main className="flex-1 flex flex-col bg-[#F4F0E8] text-[#53232A]">
      <Header />

      <div className="px-6 md:px-12 lg:px-20 py-16 lg:py-24">
        <div
          className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-10 lg:gap-16 items-start"
          style={{ fontFamily: 'array-proportional, sans-serif' }}
        >
          <div className="space-y-8 text-[#5a2b2b] min-w-0 pt-16 lg:pt-24">
            <p className="italic text-lg text-[#6b352f] text-center lg:text-left">[Coming Soon]</p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">Cards with Hearts</h1>
            <div className="space-y-2">
              <div className="font-semibold uppercase underline decoration-current/50 text-sm tracking-[0.14em]">Status</div>
              <p className="text-sm leading-relaxed text-[#4a241f]">
                This case study is coming soon. Check back shortly for the full write-up, visuals, and prototype link.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                className="px-6 py-3 rounded-full border border-[#53232A] text-[#53232A] font-semibold shadow-[0_14px_30px_rgba(83,35,42,0.25)] bg-white"
                disabled
              >
                Coming soon
              </button>
              <a
                href="/work"
                className="text-slate-500 hover:text-[#53232A] text-sm font-semibold uppercase tracking-wide"
              >
                ‹‹ Back to Projects
              </a>
            </div>
          </div>

          <div className="space-y-6 lg:max-h-[80vh] lg:overflow-y-auto lg:pr-2 scrollbar-hide min-w-0 pt-10 lg:pt-14">
            <div className="space-y-3">
              <div className="font-semibold uppercase underline decoration-[#53232A]/50 text-sm">Project Stills</div>
              <div className="grid grid-cols-1 gap-6">
                {galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className="rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
                  >
                    <div className="w-full h-full relative">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={1600}
                        height={900}
                        className="object-contain bg-white"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-12 lg:px-20 pb-10">
        <div className="border-t border-[#53232A]/30 pt-6 text-center text-2xl md:text-3xl italic text-[#53232A]"></div>
      </div>

      <Footer />
    </main>
  )
}
