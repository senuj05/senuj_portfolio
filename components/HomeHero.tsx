'use client'

import ProjectThumbnails from './ProjectThumbnails'

export default function HomeHero() {
  return (
    <section className="flex-1 min-h-0 overflow-y-auto flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 py-24 cursor-visible">
      <div className="w-full max-w-5xl">
        <div className="bg-white rounded-2xl overflow-hidden" style={{ boxShadow: '0 10px 40px -10px rgba(0,0,0,0.12)' }}>
          <div className="px-10 md:px-14 pt-10 md:pt-14 pb-4">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#53232A] text-left font-sf-pro">
              Senuvi Jayasinghe.
            </h1>
          </div>
          <div className="px-6 md:px-10 pb-6 md:pb-8">
            <ProjectThumbnails embedded />
          </div>
        </div>
      </div>
    </section>
  )
}
