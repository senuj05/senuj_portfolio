'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'

// ─── Grid config ─────────────────────────────────────────────────────────────
const GAP_DESKTOP = 24
const CARD_WIDTH_DESKTOP = 200
const CARD_HEIGHT_DESKTOP = 260
const GAP_MOBILE = 16
const CARD_WIDTH_MOBILE = 110
const CARD_HEIGHT_MOBILE = 160
const TOP_PADDING = 160

function getInitialPositions(isMobile: boolean, viewportWidth?: number) {
  const cols = isMobile ? 3 : 6
  const gap = isMobile ? GAP_MOBILE : GAP_DESKTOP
  const cardW = isMobile ? CARD_WIDTH_MOBILE : CARD_WIDTH_DESKTOP
  const cardH = isMobile ? CARD_HEIGHT_MOBILE : CARD_HEIGHT_DESKTOP
  const gridWidth = cols * cardW + (cols - 1) * gap
  const leftOffset = isMobile && viewportWidth ? Math.max(0, (viewportWidth - gridWidth) / 2) : gap
  const positions: { left: number; top: number }[] = []
  for (let i = 0; i < COLLAGE_ITEMS.length; i++) {
    const col = i % cols
    const row = Math.floor(i / cols)
    positions.push({
      left: leftOffset + col * (cardW + gap),
      top: TOP_PADDING + gap + row * (cardH + gap),
    })
  }
  return positions
}

// ─── Image sources and captions (play folder only) ───────────────────────────
const COLLAGE_ITEMS: { src: string; caption: string }[] = [
  { src: '/play/cardswithhearts.png', caption: 'A playful design for Cards with Hearts, blending digital and tactile.' },
  { src: '/play/chicagoArtMuseum.png', caption: 'A moment at the Art Institute of Chicago.' },
  { src: '/play/collage1.png', caption: 'A curated mix of moments and memories in one frame.' },
  { src: '/play/collage2.PNG', caption: 'Scattered pieces that tell a story when seen together.' },
  { src: '/play/collage3.png', caption: 'Layers of life, stacked and arranged with care.' },
  { src: '/play/HatchingVanGogh.png', caption: 'Hatching technique inspired by Van Gogh\'s brushwork.' },
  { src: '/play/halloween.png', caption: 'Spooky season vibes and creative play.' },
  { src: '/play/harrypotter.png', caption: 'A wanted poster from the wizarding world, aged and worn.' },
  { src: '/play/hotpot.png', caption: 'Hot pot from above—broth, crab sticks, beef, cilantro, and good company.' },
  { src: '/play/me.png', caption: 'A snapshot in time, a moment captured.' },
  { src: '/play/pavana.png', caption: 'Pavana - a breath of wind, a quiet pause.' },
  { src: '/play/peraher.png', caption: 'The rhythm of the perahera, lights and drums in the night.' },
  { src: '/play/refab.png', caption: 'Re-Fabric - reimagining sustainable fashion.' },
  { src: '/play/Sketch1.png', caption: 'A sketch exploring form and composition.' },
  { src: '/play/Sketch2.png', caption: 'Another sketch from the creative process.' },
  { src: '/play/theStarryNight.png', caption: 'A tribute to Van Gogh\'s Starry Night, swirling skies and dreams.' },
  { src: '/play/vendingMachine.png', caption: 'A vending machine design or study.' },
]

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])
  return isMobile
}

function useWindowWidth() {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0)
  useEffect(() => {
    const update = () => setWidth(window.innerWidth)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])
  return width
}

export default function PlaygroundPage() {
  const isMobile = useIsMobile()
  const windowWidth = useWindowWidth()
  const [canvasPosition, setCanvasPosition] = useState({ x: 0, y: 0 })
  const [imagePositions, setImagePositions] = useState(() => getInitialPositions(false))
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const [isCanvasDragging, setIsCanvasDragging] = useState(false)
  const [draggingImageIndex, setDraggingImageIndex] = useState<number | null>(null)
  const canvasDragStart = useRef({ x: 0, y: 0 })
  const canvasPositionStart = useRef({ x: 0, y: 0 })
  const imageDragStart = useRef({ x: 0, y: 0, left: 0, top: 0 })
  const hasMoved = useRef(false)
  const isCanvasDraggingRef = useRef(false)
  const draggingImageIndexRef = useRef<number | null>(null)

  // Canvas pan (drag on empty space) - uses Pointer Events for reliable touch support
  const handleCanvasPointerDown = useCallback((e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest('[data-draggable-card]')) return
    hasMoved.current = false
    isCanvasDraggingRef.current = true
    setIsCanvasDragging(true)
    canvasDragStart.current = { x: e.clientX, y: e.clientY }
    canvasPositionStart.current = { x: canvasPosition.x, y: canvasPosition.y }
    ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
  }, [canvasPosition.x, canvasPosition.y])

  const handleCanvasPointerMove = useCallback((e: React.PointerEvent) => {
    if (!isCanvasDraggingRef.current) return
    const dx = e.clientX - canvasDragStart.current.x
    const dy = e.clientY - canvasDragStart.current.y
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) hasMoved.current = true
    setCanvasPosition({
      x: canvasPositionStart.current.x + dx,
      y: canvasPositionStart.current.y + dy,
    })
  }, [])

  const handleCanvasPointerUp = useCallback(() => {
    isCanvasDraggingRef.current = false
    setIsCanvasDragging(false)
    hasMoved.current = false
  }, [])

  // Image drag - uses Pointer Events with setPointerCapture for reliable touch
  const handleImagePointerDown = useCallback((e: React.PointerEvent, index: number) => {
    e.stopPropagation()
    draggingImageIndexRef.current = index
    setDraggingImageIndex(index)
    hasMoved.current = false
    imageDragStart.current = {
      x: e.clientX,
      y: e.clientY,
      left: imagePositions[index].left,
      top: imagePositions[index].top,
    }
    ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
  }, [imagePositions])

  const handleImagePointerMove = useCallback((e: React.PointerEvent) => {
    const idx = draggingImageIndexRef.current
    if (idx === null) return
    const dx = e.clientX - imageDragStart.current.x
    const dy = e.clientY - imageDragStart.current.y
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) hasMoved.current = true
    setImagePositions((prev) => {
      const next = [...prev]
      next[idx] = {
        left: imageDragStart.current.left + dx,
        top: imageDragStart.current.top + dy,
      }
      return next
    })
  }, [])

  const handleImagePointerUp = useCallback((e: React.PointerEvent, index: number) => {
    ;(e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId)
    if (draggingImageIndexRef.current === index) {
      if (!hasMoved.current) {
        setLightboxImage(COLLAGE_ITEMS[index].src)
      }
      draggingImageIndexRef.current = null
      setDraggingImageIndex(null)
    }
  }, [])

  useEffect(() => {
    setImagePositions(getInitialPositions(isMobile, windowWidth))
  }, [isMobile, windowWidth])

  const cardWidth = isMobile ? CARD_WIDTH_MOBILE : CARD_WIDTH_DESKTOP
  const isDragging = isCanvasDragging || draggingImageIndex !== null

  // On mobile: scrollable content height (6 rows of cards + padding)
  const mobileContentHeight = TOP_PADDING + GAP_MOBILE + 6 * (CARD_HEIGHT_MOBILE + GAP_MOBILE) + 120

  return (
    <main className="min-h-screen flex flex-col bg-white text-gray-900 overflow-hidden">
      <Header variant="light" />

      <p className="fixed left-1/2 top-36 -translate-x-1/2 z-40 special-elite-regular text-gray-400 text-sm md:text-base pointer-events-none">
        {isMobile ? 'Drag cards or scroll to explore' : 'Drag to play'}
      </p>

      <button
        type="button"
        onClick={() => setImagePositions(getInitialPositions(isMobile, windowWidth))}
        className="fixed bottom-6 right-6 z-40 px-4 py-2 rounded-lg bg-gray-300 text-gray-700 text-sm special-elite-regular hover:bg-gray-400 transition-colors cursor-visible cursor-pointer"
      >
        Reset layout
      </button>

      <div
        className={`flex-1 relative pt-32 md:pt-40 ${isMobile ? 'overflow-y-auto overflow-x-hidden' : 'overflow-hidden'}`}
        style={{
          touchAction: isMobile ? 'pan-y' : 'none',
          WebkitOverflowScrolling: 'touch',
          cursor: isMobile ? 'default' : (isCanvasDragging ? 'grabbing' : draggingImageIndex !== null ? 'grabbing' : 'grab'),
        }}
        onPointerDown={isMobile ? undefined : handleCanvasPointerDown}
        onPointerMove={isMobile ? undefined : handleCanvasPointerMove}
        onPointerUp={isMobile ? undefined : handleCanvasPointerUp}
        onPointerLeave={isMobile ? undefined : handleCanvasPointerUp}
        onPointerCancel={isMobile ? undefined : handleCanvasPointerUp}
      >
        {/* Large draggable canvas - on mobile: natural size for scrolling; on desktop: pannable */}
        <div
          className="absolute bg-white"
          style={
            isMobile
              ? {
                  left: 0,
                  top: 0,
                  width: '100%',
                  minWidth: Math.max(windowWidth || 375, 375),
                  minHeight: mobileContentHeight,
                }
              : {
                  left: 0,
                  top: 0,
                  width: '200vw',
                  height: '200vh',
                  transform: `translate(${canvasPosition.x}px, ${canvasPosition.y}px)`,
                }
          }
        >
          {COLLAGE_ITEMS.map((item, i) => {
            const number = String(i + 1).padStart(2, '0')
            const { left, top } = imagePositions[i] ?? { left: 0, top: 0 }
            const isDraggingThis = draggingImageIndex === i
            return (
              <div
                key={i}
                data-draggable-card
                className="absolute flex flex-col items-center text-left bg-transparent p-4 select-none"
                style={{
                  left: `${left}px`,
                  top: `${top}px`,
                  width: cardWidth,
                  zIndex: isDraggingThis ? 50 : 10,
                  cursor: isDraggingThis ? 'grabbing' : 'grab',
                  touchAction: 'none',
                }}
                onPointerDown={(e) => handleImagePointerDown(e, i)}
                onPointerMove={handleImagePointerMove}
                onPointerUp={(e) => handleImagePointerUp(e, i)}
                onPointerLeave={(e) => handleImagePointerUp(e, i)}
                onPointerCancel={(e) => handleImagePointerUp(e, i)}
              >
                <div className="w-full aspect-square flex items-center justify-center overflow-hidden rounded-md mb-3">
                  <Image
                    src={item.src}
                    alt=""
                    width={200}
                    height={200}
                    className="w-full h-full object-contain pointer-events-none"
                    unoptimized
                  />
                </div>
                <span className="special-elite-regular text-gray-900 font-medium mb-1" style={{ fontSize: '0.9rem' }}>
                  ({number})
                </span>
                <p
                  className="special-elite-regular text-center text-gray-600 leading-snug text-xs"
                  style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {item.caption}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Lightbox modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white/80 hover:text-white text-2xl"
            onClick={() => setLightboxImage(null)}
            aria-label="Close"
          >
            ×
          </button>
          <div
            className="relative max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxImage}
              alt=""
              width={1200}
              height={800}
              className="max-w-full max-h-[90vh] w-auto h-auto object-contain"
              unoptimized
            />
          </div>
        </div>
      )}
    </main>
  )
}
