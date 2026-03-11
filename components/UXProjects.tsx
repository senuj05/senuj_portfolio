import Image from 'next/image'
import Link from 'next/link'

export default function UXProjects() {
  const projects = [
    { id: 1, title: 'Cards with Hearts', subtitle: 'Product Design · Dev', video: '/images/cardswhearts.mov', href: '/work/cards-with-hearts' },
    { id: 3, title: 'Smart Resume Matcher', subtitle: 'Dev · WebApp', image: '/images/smartresume.png', href: '/work/smart-resume-matcher' },
    { id: 4, title: 'Master Chef', subtitle: 'Dev · WebApp', image: '/images/masterchef.png', href: '/work/master-chef' },
    { id: 5, title: 'Illini Safe', subtitle: 'Data Analysis · Visualization', image: '/images/illini-safe.png', href: '/work/illini-safe' },
    { id: 6, title: 'Re-Fabric', subtitle: 'UI/UX · Product', image: '/images/refabric.png', href: '/work/refabric', contain: true },
  ]

  return (
    <div className="min-h-screen bg-white pt-20 pb-20 px-6 md:px-12 lg:px-24">
      {/* Grid of placeholders */}
      <div className="grid gap-10 md:gap-12 lg:gap-14 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={project.href}
            className="group block rounded-lg overflow-hidden hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="py-6 flex flex-col gap-4">
              <div className="space-y-1">
                <h3 className="text-2xl md:text-3xl font-semibold text-[#53232A] group-hover:text-[#3e1b1b] transition-colors">{project.title}</h3>
                <p className="text-[#755656] italic">{project.subtitle}</p>
              </div>
              <div className="relative w-full aspect-[3/2] overflow-hidden bg-white rounded-lg">
                {project.video ? (
                  <video
                    src={project.video}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.01]"
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
                    className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
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
