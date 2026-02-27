import Footer from '@/components/Footer'
import Header from '@/components/Header'
import UXProjects from '@/components/UXProjects'

export default function WorkPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F0EDE5] text-[#53232A]">
      <Header />
      <div className="flex-grow pt-24">
        <UXProjects />
      </div>
      <Footer />
    </main>
  )
}
