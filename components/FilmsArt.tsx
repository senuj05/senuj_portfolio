import Image from 'next/image'

type GalleryItem = {
  id: number
  image: string
  title: string
  height: string
}

export default function FilmsArt() {
  const galleryItems: GalleryItem[] = [
    { id: 1, image: '/gallery/water.JPG', title: 'Water', height: 'h-64 md:h-80' },
    { id: 2, image: '/gallery/spring.JPG', title: 'Lucid Pictures', height: 'h-96 md:h-[500px]' },
    { id: 3, image: '/gallery/sl.JPG', title: 'Sunshine Love', height: 'h-72 md:h-96' },
    { id: 4, image: '/gallery/chicago.png', title: 'Cinema History', height: 'h-80 md:h-[400px]' },
    { id: 5, image: '/gallery/3.JPG', title: 'Art Direction', height: 'h-64 md:h-72' },
    { id: 6, image: '/gallery/ducks.png', title: 'Film Production', height: 'h-96 md:h-[450px]' },
    { id: 7, image: '/gallery/lake michigan.png', title: 'Visual Storytelling', height: 'h-72 md:h-80' },
    { id: 8, image: '/gallery/light.jpg', title: 'Creative Direction', height: 'h-64 md:h-96' },
    { id: 9, image: '/gallery/marmot.JPG', title: 'Multimedia Series', height: 'h-80 md:h-[420px]' },
    { id: 10, image: '/gallery/nyc.png', title: 'Short Film', height: 'h-96 md:h-[480px]' },
    { id: 11, image: '/gallery/perahera.JPG', title: 'Art Installation', height: 'h-72 md:h-80' },
    { id: 12, image: '/gallery/rainier.JPG', title: 'Rainier', height: 'h-64 md:h-80' },
    { id: 13, image: '/gallery/sltemple.JPG', title: 'SL Temple', height: 'h-80 md:h-[400px]' },
    { id: 14, image: '/gallery/stair.JPG', title: 'Stair', height: 'h-72 md:h-96' },
  ]

  return (
    <section className="pt-24 pb-20 px-6 md:px-10 lg:px-14 xl:px-16">
      <div className="mt-10 mb-8 animate-fade-in max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#53232A]">Gallery</h2>
        <p className="text-sm md:text-base text-[#755656] mt-2">Some of my favorite shots :)</p>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 max-w-5xl mx-auto space-y-6">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className={`
              rounded-2xl
              overflow-hidden
              cursor-pointer
              group
              relative
              ${item.height}
              break-inside-avoid
              shadow-[0_10px_30px_rgba(0,0,0,0.12)]
            `}
          >
            <div className="w-full h-full relative">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 50vw, 33vw"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
