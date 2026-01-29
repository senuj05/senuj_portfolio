import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

const tech = [
  'Framework: Nuxt 3 (Vue.js) with TypeScript',
  'Database: SQLite for preferences, recipes, and search history',
  'Generation: OpenAI APIs for recipe ideas',
  'Testing: Nuxt built-in test utilities',
  'Styling & Formatting: Prettier, JavaScript Standard Style',
]

const galleryImages = [
  { src: '/images/hiking.png', alt: 'MasterChef hero visual' },
  { src: '/images/landscape.JPG', alt: 'Secondary visual' },
]

export default function MasterChefPage() {
  return (
    <main className="flex-1 flex flex-col bg-[#F0EDE5] text-[#53232A]">
      <Header />

      <div className="px-6 md:px-12 lg:px-20 py-16 lg:py-24">
        <div
          className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-10 lg:gap-16 items-start"
          style={{ fontFamily: 'array-proportional, sans-serif' }}
        >
          <div className="space-y-8 text-[#5a2b2b] min-w-0 pt-16 lg:pt-24">
            <p className="italic text-lg text-[#6b352f] text-center lg:text-left">[Recipe Finder, Quick Discovery]</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">MasterChef — Recipe Finder</h1>
            <p className="text-base md:text-lg text-[#4a241f]">
              “MasterChef” is a web app that helps you decide what to cook—fast. Search by ingredients you have, target a cook time,
              add dietary needs, and get tailored recipes anywhere you are.
            </p>

            <div className="space-y-2">
              <div className="font-semibold uppercase underline decoration-current/50 text-sm tracking-[0.14em]">Overview</div>
              <p className="text-sm leading-relaxed text-[#4a241f]">
                A lightweight, user-friendly recipe finder that surfaces relevant meals from simple inputs: keywords, available ingredients,
                and desired prep/cook time. The experience focuses on quick discovery, clear instructions, and minimal friction—ideal for busy
                students and home cooks.
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-semibold uppercase underline decoration-current/50 text-sm tracking-[0.14em]">Technologies Used</div>
              <ul className="space-y-2 text-sm leading-relaxed text-[#4a241f]">
                {tech.map((item) => (
                  <li key={item} className="pl-4 relative">
                    <span className="absolute left-0 top-2 h-1 w-1 rounded-full bg-[#5a2b2b]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <div className="font-semibold uppercase underline decoration-current/50 text-sm tracking-[0.14em]">Contributors</div>
              <p className="text-sm leading-relaxed text-[#4a241f]">Byung Seok Lee • Jeff Zou • Lai Wei • Senuvi Jayasinghe</p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://github.com/CS222-UIUC/main-project-masterchef"
                className="px-6 py-3 rounded-full border border-[#53232A] text-[#53232A] font-semibold shadow-[0_14px_30px_rgba(83,35,42,0.25)] bg-white hover:-translate-y-0.5 transition-transform"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
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
            <div className="space-y-2 mt-10">
              <div className="font-semibold uppercase underline decoration-[#53232A]/50 text-sm">Demo Video</div>
              <div className="rounded-2xl overflow-hidden bg-white border border-[#dbe4ff] shadow-[0_14px_40px_rgba(100,116,139,0.18)]">
                <video
                  title="MasterChef Demo"
                  src="/images/chefdemo.mp4"
                  className="w-full h-full"
                  controls
                  playsInline
                />
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
