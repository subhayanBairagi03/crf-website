const pubServices = [
  { icon: 'history_edu', label: 'Editorial' },
  { icon: 'article', label: 'Manuscript prep' },
  { icon: 'auto_stories', label: 'CRF publications' },
  { icon: 'database', label: 'Repository' },
  { icon: 'spellcheck', label: 'Plagiarism' },
  { icon: 'format_list_numbered', label: 'Indexing' },
]

export default function PublicationAssistance() {
  return (
    <section className="bg-primary-container py-24 md:py-32 text-white">
      <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* Publication services list */}
        <div className="order-2 md:order-1">
          <div className="grid grid-cols-1 gap-6">
            {pubServices.map(({ icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-6 p-4 border-b border-white/10 hover:bg-white/5 transition-colors group"
              >
                <span className="material-symbols-outlined text-[#C9960C] group-hover:rotate-12 transition-transform">
                  {icon}
                </span>
                <span className="text-on-primary-container font-light text-lg">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* IJCS card */}
        <div className="order-1 md:order-2 space-y-12">
          <div
            className="bg-white p-8 rounded-sm relative overflow-hidden group"
            style={{ boxShadow: '0 20px 50px rgba(26, 28, 27, 0.04)' }}
          >
            <div className="absolute top-4 right-4 bg-[#C9960C] text-[#261900] text-[10px] font-bold px-3 py-1 uppercase tracking-[0.2em] rounded-full">
              Coming Soon
            </div>
            <div className="flex items-start gap-6">
              <div className="w-16 h-20 bg-primary flex items-center justify-center text-[#C9960C] font-headline text-2xl shrink-0">
                IJCS
              </div>
              <div>
                <h3 className="text-primary font-headline text-2xl mb-2">IJCS Journal</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                  Interdisciplinary Journal of Convergence Studies: A peer-reviewed publication dedicated to
                  cross-disciplinary research across arts, humanities, science, and technology.
                </p>
                <a className="text-[#C9960C] font-bold text-sm tracking-widest uppercase hover:underline" href="#">
                  Notification List
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
