export default function ArchivesHero() {
  return (
    <section className="relative bg-primary-container pt-24 pb-32 px-8 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-tertiary-fixed-dim rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full blur-3xl" style={{ background: '#7792fe' }} />
      </div>

      <div className="max-w-screen-xl mx-auto relative z-10">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-white/70 text-sm mb-8 tracking-wide">
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <span className="material-symbols-outlined" style={{ fontSize: '10px' }}>arrow_forward_ios</span>
          <span className="text-white">Archives</span>
        </nav>

        <h1 className="font-headline text-6xl md:text-7xl text-white mb-6 tracking-tight leading-tight max-w-3xl">
          Archives
        </h1>
        <p className="text-xl md:text-2xl text-white/80 max-w-2xl leading-relaxed font-light">
          A record of our events, publications, and milestones — stories of convergence in action.
        </p>
      </div>
    </section>
  )
}
