import HomeHeader from '@/components/HomeHeader'
import Footer from '@/components/Footer'
import BackToTopButton from '@/components/BackToTopButton'
import Image from 'next/image'
import { Lora, Chelsea_Market } from 'next/font/google'

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const chelseaMarket = Chelsea_Market({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})

export default function CardsWithHeartsPage() {
  return (
    <main className="flex-1 flex flex-col min-h-screen bg-white text-[#53232A]">
      <HomeHeader />

      {/* Hero Video Section */}
      <div className="w-full px-6 md:px-8 pt-20 pb-12 md:pt-28 md:pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-lg overflow-hidden">
            <video
              className="w-full h-auto"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            >
              <source src="/images/cwh-hero.mov" />
            </video>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 pb-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-8">
          {/* Left Column - Headline & Project Details */}
          <div>
            <h1 className={`text-4xl sm:text-5xl md:text-[64px] leading-[1.1] tracking-tight ${chelseaMarket.className}`}>
              Cards with Hearts
            </h1>

            <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Role</p>
                <p className="text-[15px] leading-relaxed text-gray-700">Product Designer & Developer</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Duration</p>
                <p className="text-[15px] leading-relaxed text-gray-700">Sep 2025 – Jan 2026</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Tools</p>
                <p className="text-[15px] leading-relaxed text-gray-700">Figma, React</p>
              </div>
            </div>
          </div>

          {/* Right Column - Description, Tags, and CTA */}
          <div className="flex flex-col">
            <p className="text-[15px] sm:text-[17px] leading-relaxed text-gray-700 mb-6">
              A platform connecting people worldwide with children in Sri Lankan hospitals through
              handmade cards filled with hope. I designed and built a platform where anyone can send
              encouraging messages to children in hospitals.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-4 py-2 bg-gray-200/60 rounded-full text-sm">
                  Web
                </span>
                <span className="px-4 py-2 bg-gray-200/60 rounded-full text-sm">
                  Design Systems
                </span>
                <span className="px-4 py-2 bg-gray-200/60 rounded-full text-sm">
                  Product
                </span>
              </div>

            <a
              href="#overview"
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#53232A] text-white rounded-full font-medium transition-all duration-200 w-fit hover:bg-[#3e1b1b] hover:shadow-md hover:shadow-[#53232A]/25 active:scale-[0.98] cursor-pointer"
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              <span className="text-sm tracking-wide uppercase">Skip to Overview</span>
            </a>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="bg-white pt-6 pb-12 md:pt-8 md:pb-20">
        <div className="max-w-6xl mx-auto px-6 md:px-8 border-t border-gray-200 pt-6 md:pt-8">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-8 md:mb-12">Impact</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8">
            <div className="text-center">
              <p className={`text-4xl sm:text-5xl md:text-6xl font-bold text-[#53232A] mb-2 ${chelseaMarket.className}`}>500+</p>
              <p className="text-sm text-gray-500">cards sent to children in hospitals</p>
            </div>
            <div className="text-center">
              <p className={`text-4xl sm:text-5xl md:text-6xl font-bold text-[#53232A] mb-2 ${chelseaMarket.className}`}>1+</p>
              <p className="text-sm text-gray-500">hospitals partnered across Sri Lanka</p>
            </div>
            <div className="text-center">
              <p className={`text-4xl sm:text-5xl md:text-6xl font-bold text-[#53232A] mb-2 ${chelseaMarket.className}`}>4+</p>
              <p className="text-sm text-gray-500">countries contributing cards worldwide</p>
            </div>
          </div>
        </div>
      </div>

      {/* Context Section */}
      <div className="bg-white py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-8 md:mb-12">Context</p>

          <div className="text-center mb-4 md:mb-6">
            <h2 className={`text-2xl sm:text-3xl md:text-[48px] leading-[1.2] ${chelseaMarket.className}`}>
              Spreading Hope, <em className="text-[#7D6E61] italic">One Card at a Time</em>
            </h2>
          </div>

          <p className="text-[15px] sm:text-[16px] leading-relaxed text-gray-600 text-center max-w-3xl mx-auto mb-10 md:mb-16">
            Children in hospitals often feel isolated. Cards with Hearts bridges that gap by allowing
            anyone, anywhere to send encouraging messages, bringing <strong className="text-[#1a1a1a] font-semibold">comfort and connection</strong> to families
            when they need it most.
          </p>

          <div className="relative w-full max-w-4xl aspect-video rounded-lg overflow-hidden mx-auto">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            >
              <source src="/images/cwh_context.mov" />
            </video>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div id="overview" className="bg-white pt-6 pb-12 md:pt-8 md:pb-20 scroll-mt-24 md:scroll-mt-28">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-8 md:mb-12">Overview</p>

          <div className="text-center mb-4 md:mb-6">
            <h2 className={`text-2xl sm:text-3xl md:text-[48px] leading-[1.2] ${chelseaMarket.className}`}>
              What is <em className="text-[#7D6E61] italic">Cards with Hearts</em>?
            </h2>
          </div>

          <p className="text-[15px] sm:text-[16px] leading-relaxed text-gray-600 text-center max-w-3xl mx-auto mb-10 md:mb-16">
            Cards with Hearts is a platform connecting people worldwide with children in Sri Lankan
            hospitals through handmade cards filled with hope. Contributors of all ages write
            kid-friendly cards that bring <strong className="text-[#1a1a1a] font-semibold">comfort to children</strong> facing difficult times.
          </p>

          <div className="relative w-full max-w-4xl aspect-video rounded-lg overflow-hidden mx-auto mb-12 md:mb-20">
            <Image
              src="/images/cwh_overview.png"
              alt="Cards with Hearts platform overview"
              fill
              className="object-cover"
            />
          </div>

          <p className="text-xs uppercase tracking-wider text-gray-500 mb-8 md:mb-12">My Role</p>

          <div className="text-center mb-4 md:mb-6">
            <h2 className={`text-2xl sm:text-3xl md:text-[48px] leading-[1.2] ${chelseaMarket.className}`}>
              Designed and built <em className="text-[#7D6E61] italic">end-to-end</em>
            </h2>
          </div>

          <p className="text-[15px] sm:text-[16px] leading-relaxed text-gray-600 text-center max-w-3xl mx-auto">
            I designed and built the entire platform as the sole designer and developer. Working with
            a small team of 2 PM, 1 content writer, and myself, I led the <strong className="text-[#1a1a1a] font-semibold">product design, user
            experience, and implementation</strong> from concept to launch.
          </p>
        </div>
      </div>

      {/* Problems */}
      <div className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Problem #1 */}
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-6 ">Problem #1</p>
              <h2 className={`text-xl sm:text-2xl md:text-[28px] leading-[1.2] mb-4 ${chelseaMarket.className}`}>
                Children in hospitals felt <em className="text-[#7D6E61] italic">isolated</em>.
              </h2>
              <p className="text-[15px] leading-relaxed text-gray-600">
                Without a way to receive encouragement from the outside world, hospitalized children
                <strong className="text-[#1a1a1a] font-semibold"> couldn&apos;t feel connected</strong> to their communities, leaving families and kids without the emotional support they needed.
              </p>
            </div>

            {/* Problem #2 */}
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-6 ">Problem #2</p>
              <h2 className={`text-2xl md:text-[28px] leading-[1.2] mb-4 ${chelseaMarket.className}`}>
                Getting physical cards to hospitals was <em className="text-[#7D6E61] italic">fragmented</em>.
              </h2>
              <p className="text-[15px] leading-relaxed text-gray-600">
                There was no coordinated way to collect messages from contributors and deliver them as <strong className="text-[#1a1a1a] font-semibold">physical cards</strong> to hospitalized children, leaving well-wishers with no clear path from intention to impact.
              </p>
            </div>

            {/* Problem #3 */}
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-6 ">Problem #3</p>
              <h2 className={`text-xl sm:text-2xl md:text-[28px] leading-[1.2] mb-4 ${chelseaMarket.className}`}>
                People wanted to help but had <em className="text-[#7D6E61] italic">no channel</em>.
              </h2>
              <p className="text-[15px] leading-relaxed text-gray-600">
                There was no simple, accessible way for contributors worldwide to send encouraging messages, <strong className="text-[#1a1a1a] font-semibold">missing an opportunity</strong> to connect global goodwill with local impact.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Research Section */}
      <div className="bg-white py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-8 md:mb-12">Research</p>

          <div className="text-center mb-4 md:mb-6">
            <h2 className={`text-2xl sm:text-3xl md:text-[48px] leading-[1.2] ${chelseaMarket.className}`}>
              Understanding the <em className="text-[#7D6E61] italic">hospital experience</em>.
            </h2>
          </div>

          <p className="text-[15px] sm:text-[16px] leading-relaxed text-gray-600 text-center max-w-3xl mx-auto mb-10 md:mb-16">
            We contacted Colombo Lady Ridgeway Children&apos;s Hospital and spoke with staff and reviewed existing programs to understand how
            <strong className="text-[#1a1a1a] font-semibold"> children experience isolation</strong> and what kind of support would be most meaningful, informing the platform&apos;s design and card delivery flow.
          </p>

          <div className="relative w-full max-w-4xl aspect-video rounded-lg overflow-hidden mx-auto">
            <Image
              src="/images/cwh_userflow.png"
              alt="Cards with Hearts user flow and research"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Design Approach Section */}
      <div className="bg-white py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-8 md:mb-12">Design Approach</p>

          {/* From Research to Design */}
          <div className="mb-12 md:mb-20">
            <h2 className={`text-2xl sm:text-3xl md:text-[40px] leading-[1.2] mb-4 md:mb-6 ${chelseaMarket.className}`}>
              From Research to Design
            </h2>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-gray-600 max-w-3xl mb-8 md:mb-12">
              To address the isolation and fragmentation we learned from Colombo Lady Ridgeway Children&apos;s Hospital, I designed a platform that puts <strong className="text-[#1a1a1a] font-semibold">card selection and message writing front and center</strong>, making it easy for anyone to contribute without friction.
            </p>
            <div className="relative w-full max-w-4xl aspect-[4/3] rounded-lg overflow-hidden mx-auto bg-gray-50">
              <Image
                src="/images/cwh_flowchart.png"
                alt="Cards with Hearts design flow and sitemap"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Validating Through Iteration */}
          <div>
            <h2 className={`text-2xl sm:text-3xl md:text-[40px] leading-[1.2] mb-4 ${chelseaMarket.className}`}>
              Validating Through Iteration
            </h2>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-gray-600 mb-8 md:mb-12 max-w-3xl">
              Through validation with the team and hospital partners, I iterated on 4 key areas based on feedback:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="p-4 md:p-6 rounded-xl bg-[#53232A]/5 border border-[#53232A]/10">
                <h3 className="font-semibold text-[#53232A] mb-2">Card Selection</h3>
                <p className="text-[15px] leading-relaxed text-gray-600">
                  Simplified the card picker so contributors can browse and choose a design in seconds, reducing drop-off.
                </p>
              </div>
              <div className="p-4 md:p-6 rounded-xl bg-[#53232A]/5 border border-[#53232A]/10">
                <h3 className="font-semibold text-[#53232A] mb-2">Kid-Friendly Guidelines</h3>
                <p className="text-[15px] leading-relaxed text-gray-600">
                  Added clear prompts and examples to ensure messages are age-appropriate and uplifting for hospitalized children.
                </p>
              </div>
              <div className="p-4 md:p-6 rounded-xl bg-[#53232A]/5 border border-[#53232A]/10">
                <h3 className="font-semibold text-[#53232A] mb-2">Submission Flow</h3>
                <p className="text-[15px] leading-relaxed text-gray-600">
                  Streamlined the submit step with minimal fields (name and message only) to keep the barrier to contribution low.
                </p>
              </div>
              <div className="p-4 md:p-6 rounded-xl bg-[#53232A]/5 border border-[#53232A]/10">
                <h3 className="font-semibold text-[#53232A] mb-2">Hospital Delivery</h3>
                <p className="text-[15px] leading-relaxed text-gray-600">
                  Designed the backend flow to match hospital intake, ensuring physical cards reach the right wards and children.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <div className="bg-white py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-8 md:mb-12">Solutions</p>

          {/* Solution #1 */}
          <div className="mb-12 md:mb-20">
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-4">Solution #1: Direct Connection</p>
            <h2 className={`text-2xl sm:text-3xl md:text-[40px] leading-[1.2] mb-6 md:mb-8 ${chelseaMarket.className}`}>
              A platform that brings encouragement <em className="text-[#7D6E61] italic">directly</em> to hospitalized children.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 items-start md:items-center">
              <div className="md:col-span-3 order-1">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                  >
                    <source src="/images/solution1.mov" />
                  </video>
                </div>
              </div>
              <div className="md:col-span-2 order-2">
                <p className="text-[15px] sm:text-[16px] leading-relaxed text-gray-600">
                  Cards with Hearts connects contributors with children in hospitals, delivering <strong className="text-[#1a1a1a] font-semibold">physical cards</strong> with personalized messages so kids feel <strong className="text-[#1a1a1a] font-semibold">connected</strong> to their communities.
                </p>
              </div>
            </div>
          </div>

          {/* Solution #2 */}
          <div className="mb-12 md:mb-20">
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-4">Solution #2: Coordinated Delivery</p>
            <h2 className={`text-2xl sm:text-3xl md:text-[40px] leading-[1.2] mb-6 md:mb-8 ${chelseaMarket.className}`}>
              One coordinated flow from contributor to <em className="text-[#7D6E61] italic">child</em>.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 items-start md:items-center">
              <div className="md:col-span-3 order-1">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="/images/cwh/4.png"
                    alt="Cards with Hearts delivery flow"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-2 order-2">
                <p className="text-[15px] sm:text-[16px] leading-relaxed text-gray-600">
                  The platform collects and prints messages, then partners with hospitals like Colombo Lady Ridgeway to deliver cards, <strong className="text-[#1a1a1a] font-semibold">reducing</strong> the delivery process from multiple steps to <strong className="text-[#1a1a1a] font-semibold">one streamlined flow</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Solution #3 */}
          <div>
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-4">Solution #3: Accessible Web Interface</p>
            <h2 className={`text-2xl sm:text-3xl md:text-[40px] leading-[1.2] mb-6 md:mb-8 ${chelseaMarket.className}`}>
              A simple interface for <em className="text-[#7D6E61] italic">anyone, anywhere</em>.
            </h2>
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                  >
                    <source src="/images/cwh_sending.mov" />
                  </video>
                </div>
              </div>
              <div className="md:col-span-2 order-2">
                <p className="text-[15px] sm:text-[16px] leading-relaxed text-gray-600">
                  cardswhearts.com lets contributors worldwide send a card in <strong className="text-[#1a1a1a] font-semibold">under 2 minutes</strong>, from choosing a design to writing a message, <strong className="text-[#1a1a1a] font-semibold">removing barriers</strong> from intention to impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reflection Section */}
      <div className="bg-white py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-8 md:mb-12">Reflection</p>

          <div className="text-center mb-4 md:mb-6">
            <h2 className={`text-2xl sm:text-3xl md:text-[48px] leading-[1.2] ${chelseaMarket.className}`}>
              What I <em className="text-[#7D6E61] italic">learned</em>
            </h2>
          </div>

          <p className="text-[15px] sm:text-[16px] leading-relaxed text-gray-600 text-center max-w-3xl mx-auto mb-10 md:mb-16">
            Building Cards with Hearts reinforced that <strong className="text-[#1a1a1a] font-semibold">small acts of kindness scale</strong> when the path is simple. Partnering directly with Colombo Lady Ridgeway Children&apos;s Hospital taught me how important it is to design for real constraints: hospital workflows, printing logistics, and the emotional weight of each card. If I were to do it again, I&apos;d invest earlier in <strong className="text-[#1a1a1a] font-semibold">user testing with contributors</strong> to refine the card selection flow and reduce friction even further.
          </p>

          <div className="relative w-full max-w-4xl aspect-video rounded-lg overflow-hidden mx-auto">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            >
              <source src="/images/cwh_team.mov" />
            </video>
          </div>
        </div>
      </div>

      {/* Live Site Section */}
      <div className="bg-white py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-8 md:mb-12">Live Site</p>

          <div className="text-center mb-4 md:mb-6">
            <h2 className={`text-2xl sm:text-3xl md:text-[48px] leading-[1.2] ${chelseaMarket.className}`}>
              cardswhearts.com
            </h2>
          </div>

          <p className="text-[15px] sm:text-[16px] leading-relaxed text-gray-600 text-center max-w-3xl mx-auto mb-10 md:mb-16">
            Visit the live site to send a card and <strong className="text-[#1a1a1a] font-semibold">bring a smile to a child&apos;s face</strong>.
          </p>

          <div className="flex justify-center">
            <a
              href="https://cardswhearts.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 sm:px-8 sm:py-4 bg-[#53232A] text-white rounded-full font-medium hover:bg-[#3e1b1b] transition-colors text-sm sm:text-base"
            >
              Visit cardswhearts.com
            </a>
          </div>
        </div>
      </div>

      <Footer waveFill="white" />
      <BackToTopButton />
    </main>
  )
}
