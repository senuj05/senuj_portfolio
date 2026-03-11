'use client'

import { useState } from 'react'
import Image from 'next/image'

type GalleryImage = { src: string; alt: string }

export default function ProjectStillsGallery({ images }: { images: GalleryImage[] }) {
  const [expanded, setExpanded] = useState(false)
  const initialCount = 2
  const visibleImages = expanded ? images : images.slice(0, initialCount)
  const hasMore = images.length > initialCount

  return (
    <div className="space-y-3">
      <div className="font-semibold uppercase underline decoration-[#53232A]/50 text-sm">Project Stills</div>
      <div className="grid grid-cols-1 gap-4">
        {visibleImages.map((item) => (
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
      {hasMore && !expanded && (
        <button
          onClick={() => setExpanded(true)}
          className="w-full py-3 px-4 rounded-xl border border-[#53232A]/30 text-[#53232A] font-medium hover:bg-[#53232A]/5 transition-colors text-sm"
        >
          View more images ({images.length - initialCount} more)
        </button>
      )}
    </div>
  )
}
