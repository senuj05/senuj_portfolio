import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

const scope = ['Data Analysis', 'Visualization', 'Product Design', 'Dashboards']

const features = [
  'Interactive maps to visualize safety incidents on campus',
  'Charts and graphs to illustrate trends over time',
  'Predictive analytics to flag potential risks from historical data',
  'Easy navigation and access to information for all users'
]

const technologies = ['Frontend: HTML, CSS, JavaScript', 'Backend: Python']

const galleryImages = [
  { src: '/images/illini-safe.png', alt: 'Illini Safe dashboard' },

]

export default function IlliniSafePage() {
  return (
    <main className="flex-1 flex flex-col bg-[#F0EDE5] text-[#53232A]">
      <Header />

      <div className="px-6 md:px-12 lg:px-20 py-16 lg:py-24">
        <div
          className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-10 lg:gap-16 items-start"
          style={{ fontFamily: 'array-proportional, sans-serif' }}
        >
          <div className="space-y-8 text-[#5a2b2b] min-w-0 pt-16 lg:pt-24">
            <p className="italic text-lg text-[#6b352f] text-center lg:text-left">[Campus Safety, Analytics]</p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">Illini Safe</h1>

            <div className="space-y-2">
              <div className="font-semibold uppercase underline decoration-current/50 text-sm tracking-[0.14em]">Introduction</div>
              <p className="text-sm leading-relaxed text-[#4a241f]">
                The Illini Safe website provides up-to-date information about safety incidents on campus. Through historical data analysis,
                it helps users understand trends and patterns. The platform features interactive maps, visualizations, and machine learning
                models for predicting and analyzing safety incidents.
              </p>
            </div>

            <div className="space-y-2 text-sm uppercase">
              <div className="font-semibold underline decoration-current/50 tracking-[0.18em]">Scope</div>
              <p className="text-base leading-relaxed text-[#4a241f]">{scope.join(' / ')}</p>
            </div>

            <div className="space-y-2">
              <div className="font-semibold uppercase underline decoration-current/50 text-sm tracking-[0.14em]">Overview</div>
              <p className="text-sm leading-relaxed text-[#4a241f]">
                Data is grouped by location, time, and category, with filters that never hide critical context.
                The interface uses restrained color and typography for clarity and to reduce cognitive load during emergencies.
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

            <div className="space-y-3">
              <div className="font-semibold uppercase underline decoration-current/50 text-sm tracking-[0.14em]">Technologies Used</div>
              <ul className="space-y-2 text-sm leading-relaxed text-[#4a241f]">
                {technologies.map((tech) => (
                  <li key={tech} className="pl-4 relative">
                    <span className="absolute left-0 top-2 h-1 w-1 rounded-full bg-[#5a2b2b]" />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <div className="font-semibold uppercase underline decoration-current/50 text-sm tracking-[0.14em]">Interaction Notes</div>
              <p className="text-sm leading-relaxed text-[#4a241f]">
                Hover and focus states emphasize exact values without overwhelming the layout. Alerts stay anchored and scoped to roles,
                while timelines animate subtly to show change over time.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://github.com/senuj05/Illini-Safe"
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

          <div className="space-y-6 lg:max-h-[80vh] lg:overflow-y-auto lg:pr-2 scrollbar-hide min-w-0 pt-16 lg:pt-24">


            <div className="space-y-3 pt-6">
              <div className="font-semibold uppercase underline decoration-[#53232A]/50 text-sm">Project Stills</div>
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
