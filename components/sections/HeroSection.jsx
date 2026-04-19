import Link from 'next/link'
import Image from 'next/image'

function LabelPill({ text }) {
  return (
    <span className="inline-flex items-center gap-2 bg-white/20 border border-[#C9960C]/50 text-white text-[11px] font-label font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg whitespace-nowrap">
      <span className="w-1.5 h-1.5 rounded-full bg-[#C9960C] shrink-0" />
      {text}
    </span>
  )
}

export default function HeroSection() {
  return (
    <header className="relative flex items-center bg-[#1B2E6E] editorial-gradient overflow-hidden">
      {/* Crosshatch pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9960c' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-5 sm:px-8 relative z-10 py-16 sm:py-20 lg:py-0 lg:min-h-[921px] flex items-center">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">

          {/* Left: Text */}
          <div className="space-y-6 sm:space-y-8">
            <span className="hero-title inline-block text-[#C9960C] font-label tracking-[0.25em] uppercase text-xs font-bold">
              Convergence Research Foundation
            </span>
            <h1 className="hero-title font-headline text-[2.4rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl text-white -tracking-tight">
              Where Minds{' '}
              <span className="shimmer-text italic">Converge</span>{' '}
              for Insight.
            </h1>
            <p className="hero-sub text-white/80 text-sm sm:text-base lg:text-lg max-w-xl font-light leading-relaxed">
              An interdisciplinary platform where knowledge, creativity, and innovation converge — fostering
              meaningful research, publication, and cultural engagement across India and beyond.
            </p>
            <div className="hero-cta flex flex-wrap gap-3 sm:gap-4 pt-2">
              <Link
                href="/research"
                className="btn-gold-pulse bg-[#f6be3c] text-[#261900] px-6 sm:px-8 py-3 sm:py-4 font-label font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_20px_rgba(201,150,12,0.3)] transition-all rounded-sm"
              >
                Explore Research
              </Link>
              <Link
                href="/about#our-mission"
                className="border border-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 font-label font-bold uppercase tracking-widest text-xs hover:bg-white/5 transition-all rounded-sm"
              >
                Our Mission
              </Link>
            </div>
          </div>

          {/* Right: Mobile — logo only. Desktop — full grid constellation */}
          <div className="hero-stats flex items-center justify-center">

            {/* Mobile: simple centered logo */}
            <div className="lg:hidden flex flex-col items-center gap-6">
              <div className="hero-logo-glow relative w-36 h-36 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-[#C9960C]">
                <Image src="/images/crf-logo.jpeg" alt="CRF" fill sizes="192px" className="object-cover" />
              </div>
              {/* Mobile label strip */}
              <div className="flex flex-wrap justify-center gap-2 max-w-xs">
                {['Research Assistance', 'Publication Assistance', 'Creative Writing', 'Cultural Studies'].map((t) => (
                  <LabelPill key={t} text={t} />
                ))}
              </div>
            </div>

            {/* Desktop: grid constellation */}
            <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] gap-10 items-center">

              {/* Row 1: Research Assistance */}
              <div className="col-span-3 flex justify-center hero-label-1">
                <LabelPill text="Research Assistance" />
              </div>

              {/* Row 2: Left label | Logo | Right label */}
              <div className="flex justify-end hero-label-4">
                <LabelPill text="Cultural Studies" />
              </div>

              <div className="relative">
                <div className="hero-orbit-ring-1 absolute rounded-full border border-dashed border-[#C9960C]/25" style={{ inset: '-28px' }} />
                <div className="hero-orbit-ring-2 absolute rounded-full border border-[#C9960C]/12" style={{ inset: '-52px' }} />
                <div className="hero-logo-glow relative w-52 h-52 xl:w-64 xl:h-64 rounded-full overflow-hidden border-[5px] border-[#C9960C]">
                  <Image src="/images/crf-logo.jpeg" alt="Convergence Research Foundation" fill sizes="(max-width:1024px) 192px, 256px" className="object-cover" priority />
                </div>
              </div>

              <div className="flex justify-start hero-label-2">
                <LabelPill text="Publication Assistance" />
              </div>

              {/* Row 3: Creative Writing */}
              <div className="col-span-3 flex justify-center hero-label-3">
                <LabelPill text="Creative Writing" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </header>
  )
}
