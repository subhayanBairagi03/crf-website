'use client'
import Image from 'next/image'
import useScrollReveal from '@/hooks/useScrollReveal'

const crfBooks = [
  {
    id: 1,
    title: 'Poetry of A.K. Ramanujan',
    subtitle: 'A Critical Analysis of Themes and Techniques',
    author: 'Dr Tejaswini Patil',
    year: '2025',
    image: '/images/publications/poetry-ek-ramanujan.jpeg',
  },
  {
    id: 2,
    title: 'Indigenous Rhythms',
    subtitle: 'A Book of Poems on Northeast India',
    author: 'Priyanka Maity Pattanayak',
    year: '2025',
    image: '/images/publications/indigenous-rhythms.jpeg',
  },
  {
    id: 3,
    title: 'Medi-Sanhita',
    subtitle: 'A Book Based on Medical Law',
    author: 'Soumyadip Majumdar',
    year: '2025',
    image: '/images/publications/medi-sahitya.jpeg',
  },
]

export default function PublicationFundedByCRF() {
  const headingRef = useScrollReveal()
  const gridRef = useScrollReveal()

  return (
    <section className="py-20 sm:py-28 bg-[#001757]">
      <div className="container mx-auto px-4 sm:px-8">

        {/* Heading */}
        <div ref={headingRef} className="reveal mb-14 sm:mb-16">
          <span className="font-label text-xs uppercase tracking-widest font-bold text-[#C9960C]">
            CRF Supported Works
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl text-white mt-2">
            Publications Funded by CRF
          </h2>
          <div className="w-16 h-1 bg-[#C9960C] mt-4" />
        </div>

        {/* Book grid */}
        <div
          ref={gridRef}
          className="reveal-stagger grid grid-cols-2 sm:grid-cols-3 gap-x-4 sm:gap-x-6 gap-y-8 sm:gap-y-10"
        >
          {crfBooks.map((book) => (
            <div key={book.id} className="flex flex-col gap-4">
              {/* Book cover */}
              <div className="w-full aspect-[3/4] relative overflow-hidden">
                <Image
                  src={book.image}
                  alt={book.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 22vw"
                />
              </div>

              {/* Details */}
              <div className="flex flex-col pt-3 border-t border-[#C9960C]/20">
                <div className="flex flex-wrap gap-1.5 mb-2">
                  <span className="text-[9px] font-label font-bold uppercase tracking-widest bg-[#C9960C] text-[#001757] px-2 py-0.5">
                    {book.year}
                  </span>
                  <span className="text-[9px] font-label font-bold uppercase tracking-widest text-[#C9960C] border border-[#C9960C]/40 px-2 py-0.5">
                    CRF Publication
                  </span>
                </div>
                <h3 className="font-headline text-base sm:text-lg text-white leading-snug mb-1">
                  {book.title}
                </h3>
                {book.subtitle && (
                  <p className="font-headline text-[11px] italic text-[#C9960C] leading-snug mb-2">
                    {book.subtitle}
                  </p>
                )}
                <p className="font-label text-[9px] font-bold uppercase tracking-widest text-white/40 mt-auto pt-2">
                  {book.author}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
