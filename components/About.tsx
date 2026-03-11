import Image from 'next/image'

export default function About() {

  return (
    <section className="pt-20 md:pt-24 pb-8 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto font-sf-pro">
      {/* Two-column layout on desktop, stacked on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8 items-start">
        {/* Text Content */}
        <div className="space-y-3 mt-6 md:mt-20">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#53232A] mb-1">Hi, there</h1>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-500">
            I am Senuvi and most of my friends call me Senu. I&apos;m a bit of everything: developer, designer, creative tech person, depending on what the problem needs.
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-500">
            I recently graduated from the University of Illinois Urbana-Champaign with a degree in Computer Science and Statistics, and right now I&apos;m a part-time UI/UX developer at Snapdrum.
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-500">
            I bring something a little different to everything I build, a hard-working, consistent, user-first mindset that doesn&apos;t settle until it feels just right.
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-500">
            I have big hobbies: travelling, cooking, drawing, but honestly most of the time you&apos;ll find me at home doing all three from my couch. I&apos;m a firm believer that home cooked meals just hit different. ✈️🍳🎨
          </p>
        </div>

        {/* Three images - responsive sizing */}
        <div className="flex flex-wrap gap-2 md:gap-3 justify-center md:justify-end mt-4 md:mt-36">
          <div className="relative w-20 h-32 sm:w-24 sm:h-40 md:w-44 md:h-64 flex-shrink-0 overflow-hidden rounded-lg">
            <Image
              src="/images/about1.png"
              alt="Senuvi Jayasinghe"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-20 h-32 sm:w-24 sm:h-40 md:w-44 md:h-64 flex-shrink-0 overflow-hidden rounded-lg mt-4 md:mt-10">
            <Image
              src="/images/abt2.jpg"
              alt="Senuvi Jayasinghe"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-20 h-32 sm:w-24 sm:h-40 md:w-44 md:h-64 flex-shrink-0 overflow-hidden rounded-lg">
            <Image
              src="/images/abt3.JPG"
              alt="Senuvi Jayasinghe"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

    </section>
  )
}
