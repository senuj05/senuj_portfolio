import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

const features = [
  'Camera-guided scanning of clothing items to suggest reuse/recycle options',
  'Upcycling and recycling suggestions tailored to what’s in your closet',
  'Nearby donation center lookup for items you choose to give away',
  'Impact tracking to show what you’ve diverted from landfills'
]

export default function RefabricPage() {
  return (
    <main className="flex-1 flex flex-col bg-[#F0EDE5] text-[#53232A]">
      <Header />

      <div className="px-6 md:px-12 lg:px-20 py-16 lg:py-24">
        <div
          className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-10 lg:gap-16 items-start"
          style={{ fontFamily: 'array-proportional, sans-serif' }}
        >
          <div className="space-y-8 text-[#5a2b2b] min-w-0 pt-16 lg:pt-24">
            <p className="italic text-lg text-[#6b352f] text-center lg:text-left">[Sustainable Fashion, Upcycling]</p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">Re-Fabric</h1>
            <p className="text-base md:text-lg text-[#4a241f]">
              “Re-FABric” is an app designed to encourage sustainable decision-making by helping users upcycle and recycle old clothing with suggestions catered to the items in their closet.
            </p>

            <div className="space-y-2">
              <div className="font-semibold uppercase underline decoration-current/50 text-sm tracking-[0.14em]">Overview</div>
              <p className="text-sm leading-relaxed text-[#4a241f]">
                Collaboratively designed and prototyped the Re-FABric app using Figma. The experience educates users on proper disposal and recycling of clothing, featuring a camera function for item scanning and a directory for local donation centers. A Python/Kivy build explores an app version that keeps the flow lightweight and mobile-first.
              </p>
            </div>

            <div className="space-y-3">
              <div className="font-semibold uppercase underline decoration-current/50 text-sm tracking-[0.14em]">Key Features</div>
              <ul className="space-y-2 text-sm leading-relaxed text-[#4a241f]">
                {features.map((item) => (
                  <li key={item} className="pl-4 relative">
                    <span className="absolute left-0 top-2 h-1 w-1 rounded-full bg-[#5a2b2b]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <div className="font-semibold uppercase underline decoration-current/50 text-sm tracking-[0.14em]">Design Process</div>
              <p className="text-sm leading-relaxed text-[#4a241f]">
                Inspiration came from peers motivated to reduce waste but unsure how to act. We focused on used clothes to match thrifting culture and make disposal decisions easier through education and guided suggestions.
              </p>
              <p className="text-sm leading-relaxed text-[#4a241f]">
                The app uses photos to identify garments, then offers upcycling ideas, recycling options, and donation centers. A personal log shows what’s been donated or discarded and the impact made.
              </p>
              <p className="text-sm leading-relaxed text-[#4a241f]">
                <a
                  className="underline hover:text-[#3e1b1b]"
                  href="https://devpost.com/software/re-fabric-fashionably-sustainable"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more on Devpost
                </a>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://www.figma.com/proto/1waH8BfNmsP4ao0AzGFWaw/BELL-PROJECT?page-id=0%3A1&node-id=0-3&p=f&viewport=934%2C257%2C0.37&t=UgEDzIKEsEv8EJSr-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=0%3A3"
                className="px-6 py-3 rounded-full border border-[#53232A] text-[#53232A] font-semibold shadow-[0_14px_30px_rgba(83,35,42,0.25)] bg-white hover:-translate-y-0.5 transition-transform"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Full Prototype 
              </a>
              <a
                href="/work"
                className="text-slate-500 hover:text-[#53232A] text-sm font-semibold uppercase tracking-wide"
              >
                ‹‹ Back to Projects
              </a>
            </div>
          </div>

          <div className="space-y-6 lg:max-h-[80vh] lg:overflow-y-auto lg:pr-2 scrollbar-hide min-w-0 pt-10 lg:pt-14">
            <div className="rounded-3xl border border-[#dbe4ff] bg-white shadow-[0_18px_60px_rgba(100,116,139,0.22)] overflow-hidden">
              <Image
                id="live-preview"
                src="/images/refabric.png"
                alt="Re-Fabric hero"
                width={1600}
                height={900}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="space-y-2">
              <div className="font-semibold uppercase underline decoration-[#53232A]/50 text-sm">Interactive Prototype</div>
              <div className="rounded-2xl overflow-hidden bg-white border border-[#dbe4ff] shadow-[0_14px_40px_rgba(100,116,139,0.18)]">
                <div className="aspect-video">
                  <iframe
                    title="Re-Fabric – Figma Prototype"
                    src="https://www.figma.com/proto/1waH8BfNmsP4ao0AzGFWaw/BELL-PROJECT?page-id=0%3A1&node-id=0-3&p=f&viewport=934%2C257%2C0.37&t=UgEDzIKEsEv8EJSr-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=0%3A3&embed_host=share"
                    className="w-full h-full"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-semibold uppercase underline decoration-[#53232A]/50 text-sm">Demo</div>
              <div className="rounded-2xl overflow-hidden bg-white border border-[#dbe4ff] shadow-[0_14px_40px_rgba(100,116,139,0.18)]">
                <div className="aspect-video">
                  <iframe
                    title="Re-Fabric Demo"
                    src="https://www.youtube.com/embed/hsz66BHJ8sA?start=2"
                    className="w-full h-full"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="px-6 md:px-12 lg:px-20 pb-10">
        <div className="border-t border-[#53232A]/30 pt-6 text-center text-2xl md:text-3xl italic text-[#53232A]">
        </div>
      </div>

      <Footer />
    </main>
  )
}
