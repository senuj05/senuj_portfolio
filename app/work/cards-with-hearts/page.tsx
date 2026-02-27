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
    <main className="flex-1 flex flex-col bg-[#F0EDE5] text-[#53232A]">
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
              <div className="h-px w-full bg-[#53232A]/15" />
            </section>

            <section id="context" className="space-y-6">
              <div className="text-xs uppercase tracking-[0.2em] text-[#86A433] font-semibold">Context</div>
              <p className="text-[#6b352f] text-lg font-semibold">
                Children in hospitals and shelters across Sri Lanka rarely receive personal messages of
                encouragement. While their physical needs are met, emotional support is often overlooked.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="rounded-2xl overflow-hidden bg-white/70 max-w-lg">
                  <img
                    src="/images/cwh/Floating%20phone%20%7C%20Drop%20in.gif"
                    alt="Floating phone drop in"
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden bg-white/70 max-w-lg">
                  <img
                    src="/images/cwh/cwh2.gif"
                    alt="Cards with Hearts animation"
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="h-px w-full bg-[#53232A]/15" />
            </section>

            <section id="insights" className="space-y-6">
              <div className="text-xs uppercase tracking-[0.2em] text-[#86A433] font-semibold">Insights</div>
              <div className="space-y-2 text-[#6b352f] leading-snug">
                <p className="text-lg font-semibold">
                  A kind word can change a child's day; only if it reaches them. Every step from
                  inspiration to delivery needed to be seamless.
                </p>
                <p className="text-lg font-semibold">
                  Kindness is universal. People everywhere want to help, but need a clear and accessible
                  way to contribute.
                </p>
                <p>
                  Personal messages matter. A handwritten card carries emotional weight that generic
                  support cannot match.
                </p>
                <p>
                  Distance shouldn't be a barrier. With the right system, compassion can travel from
                  anywhere in the world to a child in need.
                </p>
              </div>
              <div className="h-px w-full bg-[#53232A]/15" />
            </section>

            <section id="problem" className="space-y-6">
              <div className="text-xs uppercase tracking-[0.2em] text-[#86A433] font-semibold">The Problem</div>
              <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-8 lg:gap-10">
                <div className="space-y-3 text-[#6b352f]">
                  <h3 className="text-2xl md:text-3xl font-semibold text-[#53232A]">
                    How do we enable people worldwide to send uplifting messages to children in need
                    while ensuring all content is appropriate and actually reaches them?
                  </h3>
                </div>
                <div className="space-y-3 text-[#6b352f]">
                  <p>Challenges:</p>
                  <ul className="space-y-3">
                    {[
                      "No centralized system for collecting and delivering cards",
                      "Contributors unsure what to write for children",
                      "Difficult to coordinate delivery across institutions",
                      "Need to ensure messages are positive and age-appropriate",
                    ].map((item, index) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 rounded-2xl border border-black/5 bg-white/60 px-4 py-3 shadow-[0_10px_24px_rgba(0,0,0,0.06)]"
                      >
                        <span className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-[#86A433]/20 text-xs font-semibold text-[#53232A]">
                          {index + 1}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="h-px w-full bg-[#53232A]/15" />
            </section>

            <section id="design-process" className="space-y-6">
              <div className="text-xs uppercase tracking-[0.2em] text-[#86A433] font-semibold">Design Process</div>
              <div className="space-y-6 text-[#6b352f]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-black/5 bg-white/60 p-5 shadow-[0_10px_24px_rgba(0,0,0,0.06)]">
                    <div className="text-sm uppercase tracking-[0.2em] text-[#86A433] font-semibold">
                      User Flow
                    </div>
                    <p className="mt-3">
                      Discover platform → Understand mission → Fill form → Preview card → Submit →
                      Receive confirmation.
                    </p>
                    <div className="mt-4">
                      <img
                        src="/images/cwh/userflow.png"
                        alt="Cards with Hearts user flow"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  <div className="rounded-2xl border border-black/5 bg-white/60 p-5 shadow-[0_10px_24px_rgba(0,0,0,0.06)]">
                    <div className="text-sm uppercase tracking-[0.2em] text-[#86A433] font-semibold">
                      Visual Design
                    </div>
                    <p className="mt-3">
                      Warm, welcoming for all ages: rich burgundy and cream palette creates a
                      compassionate atmosphere. Whimsical hand-drawn illustrations add warmth without
                      alienating adults. Clean typography is accessible to all reading levels. Generous
                      white space prevents overwhelm. The design honors child recipients while welcoming
                      contributors of all ages.
                    </p>
                    <div className="mt-4">
                      <img
                        src="/images/cwh/colors.png"
                        alt="Cards with Hearts color palette"
                        className="w-full h-auto max-w-xs mx-auto rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="rounded-2xl border border-black/5 bg-white/60 p-5 shadow-[0_10px_24px_rgba(0,0,0,0.06)]">
                    <div className="text-sm uppercase tracking-[0.2em] text-[#86A433] font-semibold">
                      Card Creation Form
                    </div>
                    <p className="mt-3">
                      Dual input (type or upload), “Write from the heart...” prompt, real-time postcard
                      preview, minimal required fields, and clear messaging that guides appropriate
                      content.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-black/5 bg-white/60 p-5 shadow-[0_10px_24px_rgba(0,0,0,0.06)]">
                    <div className="text-sm uppercase tracking-[0.2em] text-[#86A433] font-semibold">
                      Development
                    </div>
                    <p className="mt-3">
                      Large touch targets, simple interactions, mobile-first responsiveness, high
                      contrast for readability, fast loading, smooth transitions, and helpful validation.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-black/5 bg-white/60 p-5 shadow-[0_10px_24px_rgba(0,0,0,0.06)] lg:col-span-2">
                    <div className="text-sm uppercase tracking-[0.2em] text-[#86A433] font-semibold">
                      Iterations
                    </div>
                    <p className="mt-3">
                      Made mission more prominent, enlarged preview, simplified file upload, and
                      enhanced confirmation with delivery timeline.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <div className="rounded-2xl bg-white/60 max-w-lg flex flex-col items-center gap-4 p-6">
                    <div className="text-xs uppercase tracking-[0.2em] text-[#86A433] font-semibold">
                      Sitemap
                    </div>
                    <img
                      src="/images/cwh/sitemap.png"
                      alt="Cards with Hearts sitemap"
                      className="w-full h-auto max-w-md object-contain"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden bg-white/60 max-w-lg">
                    <img
                      src="/images/cwh/Card%20carousel%20_%20Horisontal.gif"
                      alt="Card carousel preview"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="h-px w-full bg-[#53232A]/15" />
            </section>

            <section id="solution" className="space-y-6">
              <div className="text-xs uppercase tracking-[0.2em] text-[#86A433] font-semibold">Solution</div>
              <p className="text-[#6b352f]">
                A simple platform where anyone can send hope. For contributors: easy form, flexible input
                (type or upload), real-time preview, instant confirmation. For children: positive,
                age-appropriate messages from around the world, proof they're not alone.
              </p>
              <div className="rounded-2xl overflow-hidden bg-white/70">
                <img
                  src="/images/cwh/moodboard.png"
                  alt="Cards with Hearts moodboard"
                  className="w-full h-auto"
                />
              </div>
              <div className="h-px w-full bg-[#53232A]/15" />
            </section>

            <section id="outcome" className="space-y-6">
              <div className="text-xs uppercase tracking-[0.2em] text-[#86A433] font-semibold">The Outcome</div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-[#6b352f]">
                {[
                  { value: "500", label: "Cards" },
                  { value: "500", label: "Children" },
                  { value: "1", label: "Hospital" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-black/5 bg-white/60 p-4 shadow-[0_10px_24px_rgba(0,0,0,0.06)]"
                  >
                    <div className="text-2xl font-semibold text-[#53232A]">{stat.value}</div>
                    <div className="text-sm text-[#6b352f]">{stat.label}</div>
                  </div>
                ))}
              </div>
              <p className="text-[#6b352f]">
                500 cards for 500 children at Lady Ridgeway Hospital in Colombo; the platform transformed
                individual messages into a coordinated movement, proving simple acts of kindness create
                profound impact when delivered with intention.
              </p>
              <div className="h-px w-full bg-[#53232A]/15" />
            </section>

            <section id="final-design" className="space-y-3">
              <div className="text-xs uppercase tracking-[0.2em] text-[#86A433] font-semibold">Final Design</div>
              <p className="text-[#6b352f]">Final design details coming soon.</p>
              <div className="rounded-2xl overflow-hidden bg-black/5">
                <video
                  className="w-full h-auto"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                >
                  <source src="/images/cwh/Showreel-Web-gallery-remix%20%281%29.mp4" />
                </video>
              </div>
              <div className="h-px w-full bg-[#53232A]/15" />
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
