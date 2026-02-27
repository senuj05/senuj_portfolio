'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

// Sample interactive elements to scatter around the canvas
const initialItems = [
    { id: 1, type: 'text', content: 'Creative Technologist', x: 200, y: 150, color: '#53232A', zIndex: 1, rotate: -5 },
    { id: 2, type: 'image', src: '/images/donkey.jpg', width: 280, height: 200, x: 600, y: 100, zIndex: 2, rotate: 6 },
    { id: 3, type: 'shape', variant: 'circle', size: 120, x: 100, y: 450, color: '#86A433', zIndex: 3, rotate: 0 },
    { id: 4, type: 'text', content: 'Design & Code', x: 400, y: 550, color: '#4a241f', zIndex: 4, rotate: 3 },
    { id: 5, type: 'image', src: '/images/mood.JPG', width: 240, height: 320, x: 800, y: 400, zIndex: 5, rotate: -4 },
    { id: 6, type: 'shape', variant: 'square', size: 140, x: 950, y: 150, color: '#D4C5B9', zIndex: 6, rotate: 12 },
    { id: 7, type: 'text', content: 'Drag around!', x: 1100, y: 600, color: '#53232A', zIndex: 7, rotate: -8 },
]

export default function DraggableCanvas() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [items, setItems] = useState(initialItems)

    // Bring item to front when dragging starts
    const handleDragStart = (id: number) => {
        setItems((prevItems) => {
            const highestZ = Math.max(...prevItems.map((item) => item.zIndex))
            return prevItems.map((item) =>
                item.id === id ? { ...item, zIndex: highestZ + 1 } : item
            )
        })
    }

    return (
        <div className="relative w-full h-[calc(100vh-200px)] overflow-hidden rounded-3xl border border-black/5 bg-[#F8F6F2] shadow-inner cursor-grab active:cursor-grabbing">
            {/* The main constraint container that restricts how far the background can be dragged */}
            <motion.div
                ref={containerRef}
                className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%] pointer-events-none"
            />

            {/* The draggable background layer (Canvas Pan) */}
            <motion.div
                drag
                dragConstraints={containerRef}
                dragElastic={0.1}
                dragMomentum={true}
                className="absolute top-0 left-0 w-[150vw] h-[150vh] touch-none"
                style={{
                    // A subtle grid pattern to show movement
                    backgroundImage: `radial-gradient(#D4C5B9 2px, transparent 2px)`,
                    backgroundSize: '40px 40px',
                }}
            >
                {/* Render individual scatter items */}
                {items.map((item) => {
                    return (
                        <motion.div
                            key={item.id}
                            drag
                            dragMomentum={false}
                            onDragStart={() => handleDragStart(item.id)}
                            whileHover={{ scale: 1.05 }}
                            whileDrag={{ scale: 1.1, cursor: 'grabbing' }}
                            className="absolute cursor-grab shadow-sm hover:shadow-xl transition-shadow"
                            style={{
                                x: item.x,
                                y: item.y,
                                zIndex: item.zIndex,
                                rotate: item.rotate,
                            }}
                        >
                            {/* Render content based on type */}
                            {item.type === 'text' && (
                                <div
                                    className="px-6 py-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 whitespace-nowrap"
                                    style={{ color: item.color }}
                                >
                                    <p className="text-2xl font-semibold font-fraunces">{item.content}</p>
                                </div>
                            )}

                            {item.type === 'image' && item.src && (
                                <div
                                    className="bg-white p-3 shadow-lg rounded-xl"
                                    style={{ width: item.width, height: item.height }}
                                >
                                    <div className="relative w-full h-full overflow-hidden rounded-md">
                                        <Image
                                            src={item.src}
                                            alt="Canvas asset"
                                            fill
                                            className="object-cover pointer-events-none"
                                            sizes={`${item.width}px`}
                                        />
                                    </div>
                                </div>
                            )}

                            {item.type === 'shape' && (
                                <div
                                    className={`opacity-80 backdrop-blur-sm ${item.variant === 'circle' ? 'rounded-full' : 'rounded-3xl'}`}
                                    style={{
                                        width: item.size,
                                        height: item.size,
                                        backgroundColor: item.color,
                                    }}
                                />
                            )}
                        </motion.div>
                    )
                })}
            </motion.div>

            {/* Centered Instructions Overlay */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none opacity-50 text-sm tracking-widest uppercase font-semibold text-[#53232A]">
                Drag to explore
            </div>
        </div>
    )
}
