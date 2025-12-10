export default function Footer() {
  return (
    <footer id="contact" className="mt-16">
      {/* CTA Section */}
      <div className="bg-[#53232A] rounded-t-3xl px-6 py-28">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
            <h2 className="text-5xl md:text-6xl font-bold text-white">Let&apos;s connect :)</h2>
            <a
              href="https://www.linkedin.com"
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
          <p className="text-white/90 text-sm mt-12">© 2025 Senuvi Jayasinghe</p>
        </div>
      </div>

    </footer>
  )
}
