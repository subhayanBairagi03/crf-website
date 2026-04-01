const services = [
  'Research design, methodology & data collection',
  'Mentorship for M.Phil., Ph.D. & postdoctoral scholars',
  'Editing & review for theses, dissertations & articles',
  'Consultancy for interdisciplinary & funded proposals',
  'Workshops on academic writing & research ethics',
  'Data analysis & methodological innovations',
]

export default function ResearchAssistance() {
  return (
    <section className="bg-[#FAFAF7] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        <div>
          <span className="inline-block h-px w-12 bg-[#C9960C] mb-6" />
          <h2 className="font-headline text-4xl text-primary mb-8 leading-tight">
            Empowering the Scholarly Journey
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
            The Foundation provides comprehensive infrastructure for scholars at every stage of their inquiry. From
            initial concept validation to advanced data processing, our research support ecosystem is designed for
            academic excellence.
          </p>
          <div
            className="bg-surface-container-low p-8 border-l-4 border-[#C9960C]"
            style={{ boxShadow: '0 20px 50px rgba(26, 28, 27, 0.04)' }}
          >
            <p className="italic text-on-surface-variant font-headline text-lg">
              &ldquo;True convergence occurs when diverse methodologies meet at the intersection of rigorous inquiry and
              practical application.&rdquo;
            </p>
          </div>
        </div>
        <div>
          <ul className="space-y-4">
            {services.map((service) => (
              <li key={service} className="flex items-center gap-4 group">
                <span className="w-2 h-2 rounded-full bg-[#C9960C] group-hover:scale-150 transition-transform" />
                <span className="text-primary font-medium tracking-wide">{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
