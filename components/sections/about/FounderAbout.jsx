'use client'
import Image from 'next/image'
import useScrollReveal from '@/hooks/useScrollReveal'

const authorWorks = [
  { title: 'The Nameless Pigeon', note: 'Bestseller — 49th International Kolkata Book Fair' },
  { title: 'Convergence of Knowledge', note: null },
  { title: 'A Prism of Thoughts', note: null },
  { title: 'Phuljhuri', note: null },
  { title: 'Amay Niye Ami', note: null },
  { title: 'Moner Katha', note: null },
  { title: 'Unmesh', note: null },
  { title: 'Sweetly Sixteen', note: null },
  { title: 'Crosswinds', note: null },
  { title: 'Hriday ki Baatein', note: null },
]

const editedWorks = [
  { title: 'INSIGHTS', year: '2024' },
  { title: 'Anandalahari', year: '2024' },
  { title: 'Researchers and Research Trends', year: '2025' },
  { title: 'Phuljhuri', year: '2026' },
]

const awards = [
  { title: 'Bangaratna Swarnapadak', year: '2025' },
  { title: 'Bharat Gaurav Samman', year: '2025' },
  { title: 'Swami Vivekananda Ratna Puraskar', year: '2026' },
  { title: 'Bangiya Srashtharatna Puraskar', year: '2026' },
  { title: 'Honoris Causa in English', year: 'University of Cuneo, Italy' },
]

export default function FounderAbout() {
  const profileRef = useScrollReveal()
  const worksRef = useScrollReveal()
  const awardsRef = useScrollReveal()

  return (
    <>
      {/* ── Profile ── */}
      <section className="py-20 md:py-28 bg-[#F5E6C0]">
        <div className="container mx-auto px-4 sm:px-8">
          <div ref={profileRef} className="reveal grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

            {/* Portrait */}
            <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="/images/founder.jpg"
                  alt="Dr (h.c.) Debdoot Mukherjee — Chairman, CRF"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 384px, 50vw"
                />
              </div>
              {/* Gold offset border */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-[#C9960C] -z-10" />
            </div>

            {/* Bio */}
            <div className="space-y-6">
              <div>
                <span className="font-label text-xs uppercase tracking-widest font-bold text-[#5c4300]">
                  About Our Founder
                </span>
                <h2 className="font-headline text-3xl sm:text-4xl text-[#001757] mt-2 leading-tight">
                  Dr Debdoot Mukherjee
                </h2>
                <p className="font-label text-xs uppercase tracking-[0.18em] font-bold text-[#C9960C] mt-2">
                  Chairman, Convergence Research Foundation &nbsp;·&nbsp; Faculty, University of Calcutta
                </p>
                <div className="w-16 h-1 bg-[#C9960C] mt-4" />
              </div>

              <div className="space-y-4 text-[#001757]/80 leading-relaxed font-light text-sm sm:text-base">
                <p>
                  Based in Kolkata, Dr Debdoot Mukherjee is an academician, researcher, poet, editor, and
                  environmental communicator whose work bridges knowledge, creativity, and humanistic inquiry.
                  A First Class First postgraduate with a University Gold Medal, the Prafulla Kumar Sengupta
                  Gold Medal, and the Professor Mahini Mohan Bhattacharya Memorial Award, he qualified
                  UGC-NET and has been engaged in higher education since 2014.
                </p>
                <p>
                  He is Faculty with the University of Calcutta and an Executive Board Member of the INNSAEI
                  Journal. Writing poetry in Bengali, English, and Hindi, his research spans trauma studies,
                  literature, culture, language, and environmental discourse.
                </p>
                <p>
                  He currently serves as the Chairman of Convergence Research Foundation, Kolkata, and was
                  recently awarded an Honoris Causa in English by the University of Cuneo, Italy. He believes
                  that reading and listening illuminate the human spirit from within.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                {['Academician', 'Researcher', 'Poet', 'Editor', 'Environmental Communicator'].map((tag) => (
                  <span
                    key={tag}
                    className="font-label text-[10px] uppercase tracking-widest border border-[#C9960C]/50 text-[#5c4300] px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Notable Works ── */}
      <section className="py-20 sm:py-28 bg-[#001757]">
        <div className="container mx-auto px-4 sm:px-8">
          <div ref={worksRef} className="reveal">

            <div className="mb-12">
              <span className="font-label text-xs uppercase tracking-widest font-bold text-[#C9960C]">
                Literary Contributions
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl text-white mt-2">
                Publications by the Founder
              </h2>
              <div className="w-16 h-1 bg-[#C9960C] mt-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

              {/* As Author */}
              <div>
                <h3 className="font-label text-[10px] uppercase tracking-[0.25em] font-bold text-[#C9960C] mb-6">
                  As Author
                </h3>
                <ul className="space-y-3">
                  {authorWorks.map((work) => (
                    <li key={work.title} className="flex flex-col border-b border-white/10 pb-3">
                      <span className="font-headline text-white text-base">{work.title}</span>
                      {work.note && (
                        <span className="font-label text-[10px] text-[#C9960C] mt-0.5">{work.note}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* As Editor */}
              <div>
                <h3 className="font-label text-[10px] uppercase tracking-[0.25em] font-bold text-[#C9960C] mb-6">
                  As Editor
                </h3>
                <ul className="space-y-3">
                  {editedWorks.map((work) => (
                    <li key={work.title + work.year} className="flex items-center justify-between border-b border-white/10 pb-3">
                      <span className="font-headline text-white text-base">{work.title}</span>
                      <span className="font-label text-[10px] font-bold bg-[#C9960C] text-[#001757] px-2 py-0.5 shrink-0 ml-3">
                        {work.year}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Namesake highlight */}
                <div className="mt-10 bg-white/5 border border-[#C9960C]/30 p-6">
                  <p className="font-label text-[10px] uppercase tracking-widest text-[#C9960C] mb-2">Featured Title</p>
                  <p className="font-headline text-lg text-white leading-snug">
                    The Nameless Pigeon
                  </p>
                  <p className="text-white/50 text-xs font-light mt-2 leading-relaxed">
                    Published from Boiwala Book Cafe, Santiniketan. One of the bestsellers during the
                    prestigious 49th International Kolkata Book Fair. The book is in the process of
                    translation into Marathi and Hindi.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── Distinctions & Awards ── */}
      <section className="py-20 sm:py-28 bg-[#FAFAF7]">
        <div className="container mx-auto px-4 sm:px-8">
          <div ref={awardsRef} className="reveal">

            <div className="mb-12">
              <span className="font-label text-xs uppercase tracking-widest font-bold text-[#C9960C]">
                Recognition
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl text-[#001757] mt-2">
                Distinctions &amp; Awards
              </h2>
              <div className="w-16 h-1 bg-[#C9960C] mt-4" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {awards.map((award) => (
                <div
                  key={award.title}
                  className="bg-white border border-[#C9960C]/20 p-6 hover:border-[#C9960C]/60 transition-colors"
                  style={{ boxShadow: '0 2px 12px rgba(0,23,87,0.04)' }}
                >
                  <span className="material-symbols-outlined text-[#C9960C] text-2xl mb-3 block">
                    workspace_premium
                  </span>
                  <h4 className="font-headline text-base text-[#001757] font-bold leading-snug mb-1">
                    {award.title}
                  </h4>
                  <p className="font-label text-[10px] uppercase tracking-widest text-[#5c4300]/70">
                    {award.year}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
