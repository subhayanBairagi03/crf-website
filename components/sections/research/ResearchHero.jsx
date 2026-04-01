export default function ResearchHero() {
  return (
    <section className="relative bg-primary-container py-24 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/notebook.png')" }}
      />
      <div className="max-w-7xl mx-auto px-12 relative z-10">
        <nav className="flex items-center gap-2 text-on-primary-container text-xs tracking-widest uppercase mb-8">
          <span>Home</span>
          <span className="material-symbols-outlined" style={{ fontSize: '10px' }}>chevron_right</span>
          <span className="text-tertiary-fixed-dim">Research</span>
        </nav>
        <div className="max-w-3xl">
          <h1 className="font-headline text-5xl md:text-7xl text-white mb-6 leading-tight tracking-tight">
            Research &amp; Publication
          </h1>
          <p className="text-on-primary-container text-lg md:text-xl leading-relaxed font-light">
            Advancing the frontiers of knowledge through interdisciplinary convergence. We curate, support, and
            disseminate rigorous scholarship that addresses the complexities of our contemporary world.
          </p>
        </div>
      </div>
      <div className="hidden lg:block absolute -right-20 top-1/2 -translate-y-1/2 w-1/3 aspect-square border-[#F5E6C0]/10 border-[40px] rounded-full" />
    </section>
  )
}
