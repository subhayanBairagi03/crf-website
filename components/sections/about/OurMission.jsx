export default function OurMission() {
  return (
    <section id="our-mission" className="bg-[#1B2E6E] py-20 md:py-[80px] px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-24 items-center">

        {/* Label + Heading */}
        <div className="space-y-6">
          <h2 className="font-serif text-sm tracking-[0.2em] uppercase text-[#C9960C] font-bold">
            Our Mission
          </h2>
          <p className="font-headline text-3xl md:text-4xl text-white leading-snug">
            Bridging disciplines. Nurturing minds. Transforming communities.
          </p>
          <div className="h-1 w-16 bg-[#C9960C]" />
        </div>

        {/* Mission text */}
        <div className="space-y-6">
          <p className="text-white/80 text-lg leading-relaxed font-light">
            Convergence Research Foundation (CRF) seeks to bridge disciplines and communities through research, publication, and creative expression.
          </p>
          <p className="text-white/70 leading-relaxed">
            It aims to nurture scholars, writers, and practitioners by providing academic support, research guidance, and publication avenues that strengthen the culture of inquiry and creativity in India and beyond.
          </p>
        </div>

      </div>
    </section>
  )
}
