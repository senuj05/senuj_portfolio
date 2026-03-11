import Footer from '@/components/Footer'
import Header from '@/components/Header'
import UXProjects from '@/components/UXProjects'

export default function WorkPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-[#53232A]">
      <Header />
      <div className="flex-grow pt-20">
        <UXProjects />
      </div>
      <Footer />
    </main>
  )
}
