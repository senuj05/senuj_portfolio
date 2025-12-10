import Image from 'next/image'
import Link from 'next/link'

export default function ProjectThumbnails() {
  const thumbnails = [
    { id: 1, type: 'rect', bg: 'bg-blue-50', content: 'Water', colSpan: 'col-span-1', rowSpan: 'row-span-1', image: '/images/landscape.JPG', video: null, href: '/films' },
    { id: 2, type: 'rect-large', bg: 'bg-blue-50', content: 'Dream 15', colSpan: 'md:col-span-1.2', rowSpan: 'md:row-span-0.5', image: null, video: '/images/Dream 15.MOV', href: '/films' },
    { id: 8, type: 'circle', bg: 'bg-yellow-500', content: 'Senu', colSpan: 'col-span-1', rowSpan: 'row-span-1', image: '/images/senu.png', video: null, href: '/about' },
    { id: 3, type: 'rect', bg: 'bg-gray-900', content: 'Huddle', colSpan: 'col-span-1', rowSpan: 'row-span-1', image: '/images/Huddle_.png', video: null, href: '/work/cards-with-hearts' },
    { id: 4, type: 'rect', bg: 'bg-orange-100', content: 'Studio Ghibli', colSpan: 'col-span-1', rowSpan: 'row-span-1', image: '/images/ghilbi .gif', video: null, href: '/films' },
    { id: 5, type: 'rect', bg: 'bg-green-100', content: 'Smart Resume', colSpan: 'col-span-1', rowSpan: 'row-span-1', image: '/images/refabric.png', video: null, href: '/work' }
  ]

  const positions: Record<number, string> = {
    1: 'md:col-start-1 md:row-start-1',
    2: 'md:col-start-2 md:col-span-2 md:row-start-1 md:row-span-1',
    4: 'md:col-start-2 md:row-start-2',
    8: 'md:col-start-4 md:row-start-1',
    3: 'md:col-start-1 md:row-start-2',
    5: 'md:col-start-3 md:row-start-2',
  }

  return (
    <section className="pt-8 pb-4 px-10 md:px-20 lg:px-28 xl:px-36">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-4 lg:gap-6 relative">
        {thumbnails.map((thumb) => {
          const cardClasses = `
            ${thumb.type === 'circle' ? 'rounded-full aspect-square overflow-hidden' : 'rounded-2xl overflow-hidden'}
            ${thumb.colSpan} ${thumb.rowSpan}
            ${thumb.image || thumb.video ? (thumb.id === 8 ? thumb.bg : '') : thumb.bg}
            ${positions[thumb.id] ?? ''}
            ${thumb.id === 5 ? 'border border-black' : ''}
            flex items-center justify-center
            hover:scale-[1.02] transition-transform duration-300 cursor-pointer
            ${thumb.type === 'rect-large' ? 'h-[90px] md:h-[200px]' : 'h-[90px] md:h-[200px]'}
            relative
            block
          `

          const media = thumb.video ? (
            <video
              src={thumb.video}
              className={`w-full h-full ${thumb.id === 2 ? 'object-contain bg-[#53232A]' : 'object-cover'} ${thumb.id !== 2 ? 'bg-[#53232A]' : ''}`}
              autoPlay
              loop
              muted
              playsInline
            />
          ) : thumb.image ? (
            <Image
              src={thumb.image}
              alt={thumb.content}
              fill
              className={`object-cover ${thumb.id === 8 ? 'shake-head' : ''}`}
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          ) : (
            <span className="text-gray-600 text-xs md:text-sm font-medium opacity-70">{thumb.content}</span>
          )

          return (
            <div key={thumb.id} className={cardClasses}>
              {media}
            </div>
          )
        })}

      </div>
    </section>
  )
}
