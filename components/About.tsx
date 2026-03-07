import Image from 'next/image'

export default function About() {

  return (
    <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto font-fraunces">
      {/* Header Section */}
      <div className="mb-16" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
        <h1 className="text-4xl md:text-5xl font-bold text-[#53232A] mb-2"> Hi, I&apos;m Senu</h1>
      </div>

      {/* Profile Section */}
      <div className="grid md:grid-cols-2 gap-12 mb-20 items-start">
        {/* Text Content */}
        <div className="space-y-6" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
          <p className="text-lg leading-relaxed text-gray-900">
            Hi, I&apos;m Senuvi Jayasinghe, a passionate design and development enthusiast with a dual focus on Computer Science and Statistics. I thrive on creating exceptional user experiences that blend creativity with functionality. From designing intuitive interfaces to developing seamless web applications, I enjoy bringing innovative ideas to life through technology. I recently graduated with my Bachelor&apos;s degree from the University of Illinois Urbana-Champaign. My projects reflect a unique combination of programming, data analysis, and user-centric design, aimed at solving real-world challenges with creative and effective solutions.
            Outside of work, I love travelling, cooking, and drawing, where I am always seeking new ways to express my creativity. Feel free to explore my portfolio to see how I combine design and technology to make a meaningful impact.
          </p>

        </div>

        {/* Profile Picture */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg relative">
              <Image
                src="/gallery/senuj.png"
                alt="Senuvi Jayasinghe"
                fill
                className="object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
