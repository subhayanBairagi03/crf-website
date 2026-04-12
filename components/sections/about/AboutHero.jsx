export default function AboutHero() {
  return (
    <section className="bg-primary-container text-white py-20 md:py-[80px] px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <nav className="flex mb-8 text-sm font-sans tracking-widest uppercase opacity-70">
          <a className="hover:text-tertiary-fixed-dim transition-colors" href="/">Home</a>
          <span className="mx-3 opacity-50">→</span>
          <span>About</span>
        </nav>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight mb-6 max-w-3xl">
          About the Foundation
        </h1>
        <p className="font-sans text-lg md:text-[18px] opacity-80 max-w-2xl leading-relaxed">
          A movement towards collective understanding and social transformation.
        </p>
      </div>
    </section>
  )
}
