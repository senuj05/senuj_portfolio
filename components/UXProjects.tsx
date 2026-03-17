import Image from 'next/image'
import Link from 'next/link'

type Project = {
  id: number
  brand: string
  title: string
  subtitle: string
  tags: string[]
  description: string
  imageBg: string
  href?: string
  image?: string
  video?: string
  contain?: boolean
  comingSoon?: boolean
  imageScale?: number
}

export default function UXProjects() {
  const projects: Project[] = [
    {
      id: 7,
      brand: 'snapdrum',
      title: 'Snapdrum',
      subtitle: 'UI/UX · Product · Frontend',
      tags: ['UI/UX', 'Product', 'Frontend'],
      description: 'End to end website redesign. Coming soon.',
      image: '/images/snapdrum_mockup.png',
      imageBg: '#A2CED2',
      contain: true,
      comingSoon: true,
      imageScale: 1.5,
    },
    {
      id: 1,
      brand: 'cards with hearts',
      title: 'Cards with Hearts',
      subtitle: 'Product Design · Dev',
      tags: ['Web', 'Design Systems', 'Product'],
      description: 'Interactive card-based experience with playful animations and thoughtful UX.',
      video: '/images/cwh_mockup%20.mov',
      href: '/work/cards-with-hearts',
      imageBg: '#D2A2A2',
    },
    {
      id: 3,
      brand: 'smart resume',
      title: 'Smart Resume Matcher',
      subtitle: 'Dev · WebApp',
      tags: ['Web', 'NLP', 'Machine Learning'],
      description: 'Resume parsing and job matching using TF-IDF, Word2Vec, and Sentence-BERT with FAISS vector search.',
      image: '/images/smartResume_mockup.png',
      href: '/work/smart-resume-matcher',
      imageBg: '#D3BADD',
      contain: true,
      imageScale: 1.4,
    },
    {
      id: 6,
      brand: 're-fabric',
      title: 'Re-Fabric',
      subtitle: 'UI/UX · Product',
      tags: ['Mobile', 'Sustainability', 'Product'],
      description: 'Sustainable fashion app for upcycling clothing with camera scanning and donation center lookup.',
      image: '/images/refabric_mockup.png',
      href: '/work/refabric',
      contain: true,
      imageBg: '#EDE8C3',
      imageScale: 1.4,
    },
    {
      id: 5,
      brand: 'illini safe',
      title: 'Illini Safe',
      subtitle: 'Data Analysis · Visualization',
      tags: ['Data', 'Visualization', 'Dashboards'],
      description: 'Campus safety platform with interactive maps, analytics, and predictive incident modeling.',
      image: '/images/illinisafe_mockup.png',
      href: '/work/illini-safe',
      imageBg: '#A2ABD2',
      contain: true,
      imageScale: 1.4,
    },
    {
      id: 4,
      brand: 'master chef',
      title: 'Master Chef',
      subtitle: 'Dev · WebApp',
      tags: ['Web', 'Vue.js', 'OpenAI'],
      description: 'Recipe finder that surfaces meals from ingredients, cook time, and dietary needs.',
      image: '/images/masterchef_mockup.png',
      href: '/work/master-chef',
      imageBg: '#266154',
      contain: true,
    },
  ]

  return (
    <div className="min-h-screen bg-white pt-20 pb-20 px-4 sm:px-6 md:px-8 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-[1200px] w-full items-stretch">
        {projects.map((project) => {
          const cardClassName = 'group flex flex-col rounded-lg overflow-hidden shadow-lg hover:-translate-y-1 transition-transform duration-300 bg-[#1a1a1a]' + (project.comingSoon ? ' relative cursor-default' : '')

          return project.comingSoon ? (
            <div key={project.id} className={cardClassName}>
              {/* Coming Soon Overlay */}
              <div className="absolute inset-0 bg-black/70 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <span className="text-white text-xl sm:text-2xl font-semibold tracking-wider">Coming Soon</span>
              </div>

              {/* Image Section */}
              <div
                className="p-4 sm:p-6 md:p-8 flex flex-col items-start justify-start min-h-[260px] sm:min-h-[320px] md:min-h-[400px] relative flex-shrink-0"
                style={{ backgroundColor: project.imageBg }}
              >
                {project.id !== 1 && project.id !== 7 && project.id !== 3 && project.id !== 4 && project.id !== 5 && project.id !== 6 && (
                  <div className="mb-4 sm:mb-8">
                    <h2
                      className={`text-2xl sm:text-3xl tracking-wide mb-1 ${['#1f2820', '#266154'].includes(project.imageBg) ? 'text-white' : 'text-[#1a1a1a]'}`}
                    >
                      {project.brand}
                    </h2>
                  </div>
                )}
                <div className="flex-1 flex items-center justify-center w-full">
                  {project.video ? (
                    <video
                      src={project.video}
                      className="max-w-full max-h-[180px] sm:max-h-[220px] md:max-h-[280px] object-contain transition-transform duration-500 group-hover:scale-[1.02] scale-[1.35] sm:scale-[1.5] md:scale-[1.65]"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  ) : (
                    <div className="relative w-full h-[180px] sm:h-[220px] md:h-[280px]">
                      <Image
                        src={project.image || ''}
                        alt={project.title}
                        fill
                        className={`object-contain transition-transform duration-500 group-hover:scale-[1.02] ${project.contain ? 'object-contain' : 'object-cover'} ${project.imageScale ? 'scale-[1.2] sm:scale-[1.3] md:scale-[1.4]' : ''}`}
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Content Section */}
              <div className="bg-[#1a1a1a] text-white p-4 sm:p-6 md:p-8 flex-1 min-h-0">
                <h3 className="text-lg sm:text-xl mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.subtitle}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 sm:px-3 py-1 bg-[#2a2a2a] text-gray-300 text-[10px] sm:text-xs rounded border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ) : (
            <Link key={project.id} href={project.href!} className={cardClassName}>
              {/* Image Section */}
              <div
                className="p-4 sm:p-6 md:p-8 flex flex-col items-start justify-start min-h-[260px] sm:min-h-[320px] md:min-h-[400px] relative flex-shrink-0"
                style={{ backgroundColor: project.imageBg }}
              >
                {project.id !== 1 && project.id !== 7 && project.id !== 3 && project.id !== 4 && project.id !== 5 && project.id !== 6 && (
                  <div className="mb-4 sm:mb-8">
                    <h2
                      className={`text-2xl sm:text-3xl tracking-wide mb-1 ${['#1f2820', '#266154'].includes(project.imageBg) ? 'text-white' : 'text-[#1a1a1a]'}`}
                    >
                      {project.brand}
                    </h2>
                  </div>
                )}
                <div className="flex-1 flex items-center justify-center w-full">
                  {project.video ? (
                    <video
                      src={project.video}
                      className="max-w-full max-h-[180px] sm:max-h-[220px] md:max-h-[280px] object-contain transition-transform duration-500 group-hover:scale-[1.02] scale-[1.35] sm:scale-[1.5] md:scale-[1.65]"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  ) : (
                    <div className="relative w-full h-[180px] sm:h-[220px] md:h-[280px]">
                      <Image
                        src={project.image || ''}
                        alt={project.title}
                        fill
                        className={`object-contain transition-transform duration-500 group-hover:scale-[1.02] ${project.contain ? 'object-contain' : 'object-cover'} ${project.imageScale ? 'scale-[1.2] sm:scale-[1.3] md:scale-[1.4]' : ''}`}
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Content Section */}
              <div className="bg-[#1a1a1a] text-white p-4 sm:p-6 md:p-8 flex-1 min-h-0">
                <h3 className="text-lg sm:text-xl mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.subtitle}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 sm:px-3 py-1 bg-[#2a2a2a] text-gray-300 text-[10px] sm:text-xs rounded border border-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
