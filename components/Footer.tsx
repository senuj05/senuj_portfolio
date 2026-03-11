import FooterBouncyWave from "./FooterBouncyWave"

export default function Footer({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  return (
    <footer id="contact" className="mt-0">
      {/* CTA Section */}
      <div className={`relative overflow-visible rounded-t-3xl px-6 md:px-12 lg:px-24 py-16 md:py-20 ${variant === 'dark' ? 'bg-[#180E0E]' : 'bg-[#53232A]'}`}>
        <FooterBouncyWave fill={variant === 'dark' ? '#180E0E' : 'white'} />
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Let&apos;s connect :)</h2>
            <a
              href="https://www.linkedin.com/in/senuvi/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-white text-gray-900 text-sm font-semibold hover:bg-white/90 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-white text-gray-900 text-sm font-semibold hover:bg-white/90 transition-colors"
            >
              GitHub
            </a>
          </div>
          <p className="text-white/90 text-sm">This website is best viewed on Laptop</p>
          <p className="text-white/90 text-sm mt-10">© 2025 Senuvi Jayasinghe</p>
        </div>
      </div>

    </footer>
  )
}
