'use client'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function FounderMessage() {
  const leftRef = useRef(null)
  const rightRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    if (leftRef.current) observer.observe(leftRef.current)
    if (rightRef.current) observer.observe(rightRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 md:py-32 bg-[#F5E6C0]">
      <div className="container mx-auto px-4 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Portrait */}
        <div ref={leftRef} className="slide-left relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="aspect-square relative overflow-hidden">
            <Image
              src="/images/founder.jpg"
              alt="Dr (h.c.) Debdoot Mukherjee — Founder, CRF"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 384px, 50vw"
            />
          </div>
          {/* Gold offset border */}
          <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-[#C9960C] -z-10" />
        </div>

        {/* Quote & Bio */}
        <div ref={rightRef} className="slide-right space-y-8">
          <span className="font-label text-xs uppercase tracking-widest font-bold text-[#001757]">
            Institutional Philosophy
          </span>
          <h3 className="font-headline text-4xl italic text-[#001757] leading-tight">
            "The idea of Convergence is rooted in the belief that true progress emerges when diverse minds,
            disciplines, and creative energies unite with a shared vision."
          </h3>
          <div className="space-y-4 text-[#001757]/80 leading-relaxed font-light">
            <p>
              The Convergence Research Foundation (CRF) was conceived as a space where boundaries dissolve —
              between arts and sciences, knowledge and imagination, thought and action.
            </p>
            <p>
              Through research, publication, and creative exploration, CRF aspires to nurture a community of
              thinkers and doers who bring insight, innovation, and integrity to their fields. Let us work
              together to shape a world where inquiry meets inspiration, and knowledge becomes a living force
              for change.
            </p>
          </div>
          <div className="pt-8">
            <p className="font-headline text-2xl text-[#001757] font-bold italic">— Dr (h.c.) Debdoot Mukherjee</p>
            <p className="font-label text-xs uppercase tracking-[0.2em] font-bold text-[#5c4300]">
              Founder, Convergence Research Foundation
            </p>
            <p className="font-label text-xs text-[#5c4300]/70 mt-1">
              Academician · Researcher · Litterateur · Environmental Communicator
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
