import Image from 'next/image'
import Link from 'next/link'

export default function UXProjects() {
  const projects = [
    { id: 1, title: 'Cards with Hearts', subtitle: 'Product Design · Dev', video: '/images/cardswhearts.mov', href: '/work/cards-with-hearts' },
    { id: 2, title: 'Huddle', subtitle: 'UI/UX · Design', image: '/images/Huddle_.png', href: '/work/huddle' },
    { id: 3, title: 'Smart Resume Matcher', subtitle: 'Dev · WebApp', image: '/images/smartresume.png', href: '/work/smart-resume-matcher' },
    { id: 4, title: 'Master Chef', subtitle: 'Dev · WebApp', image: '/images/masterchef.png', href: '/work/master-chef' },
    { id: 5, title: 'Illini Safe', subtitle: 'Data Analysis · Visualization', image: '/images/illini-safe.png', href: '/work/illini-safe' },
    { id: 6, title: 'Re-Fabric', subtitle: 'UI/UX · Product', image: '/images/refabric.png', href: '/work/refabric', contain: true },
  ]

  return (
    <div className="min-h-screen bg-[#F0EDE5] pt-32 pb-20 px-8 md:px-12 lg:px-16">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-[#53232A] mb-2 text-4xl md:text-5xl font-bold">Projects</h1>
        <p className="text-[#755656] italic text-lg md:text-xl">A selection of my UX design work, development projects, research, & case studies.</p>
      </div>

      {/* Grid of placeholders */}
      <div className="grid gap-10 md:gap-12 lg:gap-14 md:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={project.href}
            className="group block rounded-3xl bg-white/70 border border-[#d9d1c6] shadow-[0_18px_40px_rgba(0,0,0,0.08)] overflow-hidden hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="p-6 md:p-8 flex flex-col gap-4">
              <div className="space-y-1">
                <h3 className="text-2xl md:text-3xl font-semibold text-[#53232A] group-hover:text-[#3e1b1b] transition-colors">{project.title}</h3>
                <p className="text-[#755656] italic">{project.subtitle}</p>
              </div>
              <div className="relative w-full aspect-[3/2] overflow-hidden rounded-2xl bg-[#e8e1d6]">
                {project.video ? (
                  <video
                    src={project.video}
                    className="w-full h-full object-contain bg-white transition-transform duration-500 group-hover:scale-[1.01]"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <Image
                    src={project.image || ''}
                    alt={project.title}
                    fill
                    className={`${project.contain ? 'object-contain bg-white' : 'object-cover'} transition-transform duration-500 group-hover:scale-[1.02]`}
                  />
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
