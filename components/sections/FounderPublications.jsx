'use client'
import Image from 'next/image'
import useScrollReveal from '@/hooks/useScrollReveal'
import { founderPublications } from '@/data/publications'

function BookCover({ src, alt }) {
  return (
    <div className="w-full aspect-[3/4] relative overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 45vw, (max-width: 1024px) 25vw, 18vw"
      />
    </div>
  )
}

export default function FounderPublications() {
  const headingRef = useScrollReveal()
  const gridRef   = useScrollReveal()

  return (
    <section className="py-20 sm:py-28 bg-[#FAFAF7]">
      <div className="container mx-auto px-4 sm:px-8">

        {/* Heading */}
        <div ref={headingRef} className="reveal mb-14 sm:mb-16">
          <span className="font-label text-xs uppercase tracking-widest font-bold text-[#C9960C]">
            Upcoming Publications
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl text-[#001757] mt-2">
            Books Edited by Dr. Debdoot Mukherjee
          </h2>
          <div className="w-16 h-1 bg-[#C9960C] mt-4" />
        </div>

        {/* Book covers grid — subgrid keeps title rows aligned across columns */}
        <div
          ref={gridRef}
          className={[
            'reveal-stagger',
            'grid grid-cols-2 lg:grid-cols-4',
            'gap-x-4 sm:gap-x-6',
            'gap-y-8 sm:gap-y-10',
            'lg:[grid-template-rows:auto_1fr]',
          ].join(' ')}
        >
          {founderPublications.map((book) => (
            <div
              key={book.id}
              className="flex flex-col gap-4 lg:row-span-2 lg:grid lg:[grid-template-rows:subgrid] lg:gap-0"
            >
              {/* Row 1: Book cover */}
              <BookCover src={book.image} alt={book.title} />

              {/* Row 2: Title + editor */}
              <div className="flex flex-col pt-3 border-t border-[#C9960C]/20">
                <div className="flex flex-wrap gap-1.5 mb-2">
                  <span className="text-[9px] font-label font-bold uppercase tracking-widest bg-[#C9960C] text-[#001757] px-2 py-0.5">
                    {book.year}
                  </span>
                  <span className="text-[9px] font-label font-bold uppercase tracking-widest text-[#C9960C] border border-[#C9960C]/40 px-2 py-0.5">
                    Upcoming
                  </span>
                </div>
                <h3 className="font-headline text-base sm:text-lg text-[#001757] leading-snug mb-1">
                  {book.title}
                </h3>
                {book.subtitle && (
                  <p className="font-headline text-[11px] italic text-[#C9960C] leading-snug mb-2">
                    {book.subtitle}
                  </p>
                )}
                <p className="font-label text-[9px] font-bold uppercase tracking-widest text-[#5c4300] mt-auto pt-2">
                  Ed. Dr. Debdoot Mukherjee
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
