import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

const meta = [
  { label: 'Role', value: 'UX Designer' },
  { label: 'Duration', value: 'July 2025 – Sept 2025' },
  { label: 'Tools', value: 'Figma' },
]

const researchQuestions = [
  'Can users successfully set up a shared savings goal?',
  'Do users understand how to track contributions?',
  'Is navigation between expenses and savings intuitive?',
  'Does the design motivate users to continue saving together?',
]

const insights = [
  'Guided setup reduces confusion when starting a goal.',
  'Contribution visibility increases trust and engagement.',
  'A single dashboard combining savings and expenses is most intuitive.',
  'Reminders and progress bars help sustain participation.',
]

const galleryImages = [
  { src: '/images/huddle.png', alt: 'Huddle primary screen' },
  { src: '/images/Huddle_.png', alt: 'Huddle secondary view' },
  { src: '/images/hifi1.png', alt: 'Huddle hi-fi screen 1' },
  { src: '/images/hifi2.png', alt: 'Huddle hi-fi screen 2' },
  { src: '/images/hifi3.png', alt: 'Huddle hi-fi screen 3' },
  { src: '/images/hifi4.png', alt: 'Huddle hi-fi screen 4' },
]

export default function HuddlePage() {
  return (
    <main className="flex-1 flex flex-col bg-[#F4F0E8] text-[#53232A]">
      <Header />

      <div className="px-6 md:px-12 lg:px-20 py-16 lg:py-24">
        <div
          className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-10 lg:gap-16 items-start"
          style={{ fontFamily: 'array-proportional, sans-serif' }}
        >
          <div className="space-y-8 text-[#5a2b2b] min-w-0 pt-16 lg:pt-24">
            <p className="italic text-lg text-[#6b352f] text-center lg:text-left">[Shared Savings, Group Goals]</p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">Huddle</h1>
            <p className="text-base md:text-lg text-[#4a241f]">
              A mobile app that helps families and friend groups save equally toward shared financial goals.
            </p>

            <div className="space-y-2">
              <div className="font-semibold uppercase underline decoration-current/50 text-sm tracking-[0.14em]">Overview</div>
              <p className="text-sm leading-relaxed text-[#4a241f]">
                Huddle keeps group saving fair, simple, and motivating. Each member contributes equally, progress updates in real time,
                and transparency builds accountability. A minimalist dashboard shows progress, recent activity, and quick actions like
                <em> Add Contribution</em> and <em> Add Member</em>, so everyone knows what&apos;s next.
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-semibold uppercase underline decoration-current/50 text-sm tracking-[0.14em]">Purpose</div>
              <p className="text-sm leading-relaxed text-[#4a241f]">
                Reduce the friction of managing shared savings. By centering equal contributions and clear progress,
                Huddle delivers a fair, simple, and motivating group-saving experience.
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-semibold uppercase underline decoration-current/50 text-sm tracking-[0.14em]">Users</div>
              <p className="text-sm leading-relaxed text-[#4a241f]">
                Families, roommates, and close friend groups saving together. They value fairness, accountability,
                and an easy way to see progress—without spreadsheets or complex budgeting tools.
              </p>
            </div>

            <div className="space-y-3">
              <div className="font-semibold uppercase underline decoration-current/50 text-sm tracking-[0.14em]">Study Details</div>
              <p className="text-sm leading-relaxed text-[#4a241f]">
                Remote and in-person usability study with 5 participants (friends and family), ~30 minutes each.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {meta.map((item) => (
                <div key={item.label} className="bg-white/70 border border-[#d9d1c6] rounded-2xl p-4">
                  <p className="text-xs uppercase tracking-[0.14em] text-[#6b352f] font-semibold">{item.label}</p>
                  <p className="text-sm text-[#4a241f] mt-1">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <div className="font-semibold uppercase underline decoration-current/50 text-sm tracking-[0.14em]">Sample Research Questions</div>
              <ul className="space-y-2 text-sm leading-relaxed text-[#4a241f]">
                {researchQuestions.map((q) => (
                  <li key={q} className="pl-4 relative">
                    <span className="absolute left-0 top-2 h-1 w-1 rounded-full bg-[#5a2b2b]" />
                    {q}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <div className="font-semibold uppercase underline decoration-current/50 text-sm tracking-[0.14em]">Research Insights</div>
              <ul className="space-y-2 text-sm leading-relaxed text-[#4a241f]">
                {insights.map((insight) => (
                  <li key={insight} className="pl-4 relative">
                    <span className="absolute left-0 top-2 h-1 w-1 rounded-full bg-[#5a2b2b]" />
                    {insight}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://www.figma.com/proto/UM8uggrmlMYC7zRVQV1vU6/Huddle?page-id=0%3A1&node-id=1-1814&p=f&viewport=-34%2C6996%2C0.5&t=LYTXbjKRPPTh8RKk-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A1814"
                className="px-6 py-3 rounded-full border border-[#53232A] text-[#53232A] font-semibold shadow-[0_14px_30px_rgba(83,35,42,0.25)] bg-white hover:-translate-y-0.5 transition-transform"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit prototype »
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


            <div className="space-y-3 pt-6">
              <div className="font-semibold uppercase underline decoration-[#53232A]/50 text-sm">High-Fidelity Prototypes</div>
              <div className="grid grid-cols-1 gap-4">
                {galleryImages.map((item) => (
                  <div key={item.src} className="rounded-3xl border border-[#dbe4ff] bg-white shadow-[0_14px_40px_rgba(100,116,139,0.18)] overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={1200}
                      height={800}
                      className="w-full h-full object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-semibold uppercase underline decoration-[#53232A]/50 text-sm">Interactive Prototype</div>
              <div className="rounded-2xl overflow-hidden bg-white border border-[#dbe4ff] shadow-[0_14px_40px_rgba(100,116,139,0.18)]">
                <div className="aspect-video">
                  <iframe
                    title="Huddle – Figma Prototype"
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FUM8uggrmlMYC7zRVQV1vU6%2FHuddle%3Fpage-id%3D0%253A1%26node-id%3D1-1814%26p%3Df%26viewport%3D-34%252C6996%252C0.5%26t%3DLYTXbjKRPPTh8RKk-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26starting-point-node-id%3D1%253A1814"
                    className="w-full h-full"
                    allowFullScreen
                  />
                </div>
              </div>
              <p className="text-sm text-[#4a241f]">
                <a
                  className="underline hover:text-[#3e1b1b]"
                  href="https://www.figma.com/proto/UM8uggrmlMYC7zRVQV1vU6/Huddle?page-id=0%3A1&node-id=1-1814&p=f&viewport=-34%2C6996%2C0.5&t=LYTXbjKRPPTh8RKk-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A1814"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Full Prototype »
                </a>
              </p>
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
