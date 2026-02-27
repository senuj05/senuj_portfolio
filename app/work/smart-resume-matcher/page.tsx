import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

const features = [
  'Resume parsing with skills/experience/education extraction',
  'TF-IDF, Word2Vec, and Sentence-BERT embeddings for matching',
  'FAISS-powered sub-second vector search with weighted scoring',
  'Clear match insights for candidates and recruiters'
]

const technologies = [
  'Backend: Python 3.9+ with Flask/FastAPI',
  'NLP Pipeline: spaCy, NLTK, Sentence-Transformers (all-mpnet-base-v2)',
  'Vector Search: FAISS for similarity queries',
  'Database: MongoDB for parsed data & embeddings',
  'Frontend: React.js + Material-UI dashboard',
  'Text Extraction: PyPDF2 & python-docx for PDF/DOCX parsing'
]

const galleryImages = [
  { src: '/images/smart1.png', alt: 'Smart Resume Matcher screen 1' },
  { src: '/images/smart2.png', alt: 'Smart Resume Matcher screen 2' },
  { src: '/images/smart3.png', alt: 'Smart Resume Matcher screen 3' },
  { src: '/images/smart4.png', alt: 'Smart Resume Matcher screen 4' },
]

export default function SmartResumeMatcherPage() {
  return (
    <main className="flex-1 flex flex-col bg-[#F0EDE5] text-[#53232A]">
      <Header />

      <div className="flex-grow px-6 md:px-12 lg:px-20 py-16 lg:py-24">
        <div
          className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-10 lg:gap-16 items-start"
          style={{ fontFamily: 'array-proportional, sans-serif' }}
        >
          <div className="space-y-8 text-[#5a2b2b] min-w-0 pt-16 lg:pt-24">
            <p className="italic text-lg text-[#6b352f] text-center lg:text-left">[Resume Intelligence, Match Scoring]</p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">Smart Resume Matcher</h1>
            <p className="text-base md:text-lg text-[#4a241f]">
              “Smart Resume Analyzer & Job Matcher” parses resumes and instantly matches them to job postings using TF-IDF, Word2Vec,
              and Sentence-BERT embeddings with FAISS for sub-second vector search.
            </p>

            <div className="space-y-2">
              <div className="font-semibold uppercase underline decoration-current/50 text-sm tracking-[0.14em]">Overview</div>
              <p className="text-sm leading-relaxed text-[#4a241f]">
                The system ingests PDF/DOCX resumes, extracts skills/experience/education, encodes text with multiple representations,
                and performs cosine similarity with FAISS across indexed job descriptions. Weighted scoring powers clear, real-time match
                insights for candidates and recruiters.
              </p>
            </div>

            <div className="space-y-3">
              <div className="font-semibold uppercase underline decoration-current/50 text-sm tracking-[0.14em]">Key Features</div>
              <ul className="space-y-2 text-sm leading-relaxed text-[#4a241f]">
                {features.map((item) => (
                  <li key={item} className="pl-4 relative">
                    <span className="absolute left-0 top-2 h-1 w-1 rounded-full bg-[#5a2b2b]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <div className="font-semibold uppercase underline decoration-current/50 text-sm tracking-[0.14em]">Technologies Used</div>
              <ul className="space-y-2 text-sm leading-relaxed text-[#4a241f]">
                {technologies.map((tech) => (
                  <li key={tech} className="pl-4 relative">
                    <span className="absolute left-0 top-2 h-1 w-1 rounded-full bg-[#5a2b2b]" />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <div className="font-semibold uppercase underline decoration-current/50 text-sm tracking-[0.14em]">Contributors</div>
              <p className="text-sm leading-relaxed text-[#4a241f]">Ameya Kolhatkar • Andrew Loh • Faith Han • Senuvi Jayasinghe</p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://drive.google.com/file/d/1ES7OGMFcd58intt3ItWDI3Wri3_wx7Pi/preview"
                className="px-6 py-3 rounded-full border border-[#53232A] text-[#53232A] font-semibold shadow-[0_14px_30px_rgba(83,35,42,0.25)] bg-white hover:-translate-y-0.5 transition-transform"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo Video »
              </a>
              <a
                href="https://github.com/FPynk/CS410_ResumeAnalyserMatcher"
                className="px-6 py-3 rounded-full border border-[#53232A] text-[#53232A] font-semibold shadow-[0_14px_30px_rgba(83,35,42,0.25)] bg-white hover:-translate-y-0.5 transition-transform"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="/work"
                className="text-slate-500 hover:text-[#53232A] text-sm font-semibold uppercase tracking-wide"
              >
                ‹‹ Back to Projects
              </a>
            </div>
          </div>

          <div className="space-y-6 lg:max-h-[80vh] lg:overflow-y-auto lg:pr-2 scrollbar-hide min-w-0 pt-16 lg:pt-24">
            <div className="rounded-3xl border border-[#dbe4ff] bg-white shadow-[0_18px_60px_rgba(100,116,139,0.22)] overflow-hidden">
              <Image
                id="live-preview"
                src="/images/smartresume.png"
                alt="Smart Resume Matcher hero"
                width={1600}
                height={900}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="space-y-2">
              <div className="font-semibold uppercase underline decoration-[#53232A]/50 text-sm">Demo Video</div>
              <div className="rounded-2xl overflow-hidden bg-white border border-[#dbe4ff] shadow-[0_14px_40px_rgba(100,116,139,0.18)]">
                <div className="aspect-video">
                  <iframe
                    title="Smart Resume Matcher Demo"
                    src="https://drive.google.com/file/d/1ES7OGMFcd58intt3ItWDI3Wri3_wx7Pi/preview"
                    className="w-full h-full"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="font-semibold uppercase underline decoration-[#53232A]/50 text-sm">Project Stills</div>
              <div className="grid grid-cols-1 gap-4">
                {galleryImages.map((item) => (
                  <div key={item.src} className="rounded-3xl border border-[#dbe4ff] bg-white shadow-[0_14px_40px_rgba(100,116,139,0.18)] overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={1200}
                      height={800}
                      className="w-full h-full object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-12 lg:px-20 pb-10">
        <div className="border-t border-[#53232A]/30 pt-6 text-center text-2xl md:text-3xl italic text-[#53232A]">

        </div>
      </div>

      <Footer />
    </main>
  )
}
