export default function VisionMission() {
  return (
    <section className="bg-[#FAFAF7] py-20 md:py-[80px] px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-24 items-start relative">
        {/* Vision */}
        <div className="space-y-6">
          <h2 className="font-serif text-sm tracking-[0.2em] uppercase text-tertiary-fixed-dim font-bold">
            Our Vision
          </h2>
          <p className="font-serif text-3xl md:text-4xl text-primary-container leading-snug">
            To create a dynamic interdisciplinary platform where knowledge, creativity, and innovation converge.
          </p>
          <p className="font-sans text-on-surface-variant leading-relaxed">
            Fostering meaningful research, publication, and cultural engagement that address the intellectual and social challenges of the 21st century.
          </p>
        </div>

        {/* Desktop Vertical Divider */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-tertiary-fixed-dim opacity-30 transform -translate-x-1/2"></div>

        {/* Mission */}
        <div className="space-y-6">
          <h2 className="font-serif text-sm tracking-[0.2em] uppercase text-tertiary-fixed-dim font-bold">
            Our Mission
          </h2>
          <p className="font-sans text-lg text-primary-container font-medium leading-relaxed">
            CRF seeks to bridge disciplines and communities through research, publication, and creative expression.
          </p>
          <p className="font-sans text-on-surface-variant leading-relaxed">
            It aims to nurture scholars, writers, and practitioners by providing academic support, research guidance, and publication avenues that strengthen the culture of inquiry and creativity in India and beyond.
          </p>
        </div>
      </div>
    </section>
  )
}
