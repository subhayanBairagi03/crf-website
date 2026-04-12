import Link from 'next/link'

const themes = [
  'Feminist literary criticism and theory',
  'Masculinity studies and alternative gender identities',
  'Queer theory and LGBTQ+ narratives',
  'Gender and postcolonial literature',
  'Representation of women in classical and contemporary texts',
  'Gendered narratives in regional and Indian English literature',
  'Ecofeminism and environmental humanities',
  'Body, sexuality, and identity in literature',
  'Gender and digital / modern literary spaces',
  'Translation and gendered voices',
]

const guidelines = [
  { label: 'Abstract', value: '200–250 words with 4–5 keywords' },
  { label: 'Full Paper', value: '2,500–4,000 words' },
  { label: 'Format', value: 'MLA 9th Edition, Times New Roman' },
  { label: 'Language', value: 'English, Hindi, Bangla, Marathi, and other Indian Languages (send in Unicode)' },
  { label: 'File Format', value: 'MS Word (.doc / .docx)' },
  { label: 'Originality', value: 'Plagiarism-free; not under consideration elsewhere' },
]

export default function ResearchCTA() {
  return (
    <section className="bg-[#001757] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">

        {/* Header */}
        <div className="mb-12 md:mb-16">
          <span className="font-label text-[10px] uppercase tracking-[0.25em] font-bold text-[#C9960C] mb-3 block">
            Call for Submissions — ISBN Edited Volume
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-4">
            Gender and Literature:<br className="hidden sm:block" />
            <span className="text-[#C9960C]"> Voices, Bodies and Narratives</span>
          </h2>
          <p className="text-white/60 font-label text-sm">
            Edited by <span className="text-white font-semibold">Dr. Debdoot Mukherjee</span>
            &nbsp;·&nbsp; Peer-reviewed edited volume &nbsp;·&nbsp; ISBN will be assigned
          </p>
        </div>

        {/* Two-column grid: Themes | Guidelines */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">

          {/* Themes */}
          <div>
            <h3 className="font-label text-[10px] uppercase tracking-[0.25em] font-bold text-[#C9960C] mb-5">
              Themes <span className="text-white/30 normal-case tracking-normal font-normal">(Indicative, not exhaustive)</span>
            </h3>
            <ul className="space-y-2">
              {themes.map((theme) => (
                <li key={theme} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-[#C9960C] shrink-0" />
                  <span className="text-white/70 text-sm font-light leading-relaxed">{theme}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Submission Guidelines */}
          <div>
            <h3 className="font-label text-[10px] uppercase tracking-[0.25em] font-bold text-[#C9960C] mb-5">
              Submission Guidelines
            </h3>
            <dl className="space-y-4">
              {guidelines.map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-0.5">
                  <dt className="text-[10px] font-label font-bold uppercase tracking-widest text-white/40">{label}</dt>
                  <dd className="text-white/80 text-sm font-light leading-relaxed">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Important dates + publication strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12 border-t border-white/10 pt-10">
          <div className="sm:border-r border-white/10 sm:pr-8">
            <p className="text-[10px] font-label uppercase tracking-widest text-[#C9960C] mb-1">Submission Deadline</p>
            <p className="font-headline text-2xl text-white font-bold">31 July 2026</p>
          </div>
          <div className="sm:border-r border-white/10 sm:px-8">
            <p className="text-[10px] font-label uppercase tracking-widest text-[#C9960C] mb-1">Registration Fee</p>
            <p className="font-headline text-2xl text-white font-bold">₹1,350</p>
          </div>
          <div className="sm:pl-8">
            <p className="text-[10px] font-label uppercase tracking-widest text-[#C9960C] mb-1">Expected Publication</p>
            <p className="font-headline text-2xl text-white font-bold">Sep – Oct 2026</p>
            <p className="text-white/30 text-[10px] font-label mt-0.5">Tentative</p>
          </div>
        </div>

        {/* Who can submit + CTA */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-t border-white/10 pt-8">
          <div>
            <p className="text-[10px] font-label uppercase tracking-widest text-[#C9960C] mb-1">Who Can Submit</p>
            <p className="text-white/60 text-sm font-light">
              Academicians · Research Scholars · Independent Researchers · Writers and Practitioners
            </p>
            <p className="text-white/40 text-xs font-label mt-2">
              Submit to:{' '}
              <a
                href="mailto:convergenceofknowledge17@gmail.com?subject=Submission%20-%20Gender%20and%20Literature"
                className="text-[#C9960C] hover:underline"
              >
                convergenceofknowledge17@gmail.com
              </a>
            </p>
          </div>
          <Link
            href="mailto:convergenceofknowledge17@gmail.com?subject=Submission%20-%20Gender%20and%20Literature"
            className="inline-block bg-[#C9960C] text-[#261900] px-6 sm:px-8 py-3 sm:py-4 font-bold tracking-widest uppercase text-sm hover:bg-[#f6be3c] transition-colors shrink-0"
          >
            Submit Your Paper →
          </Link>
        </div>

      </div>
    </section>
  )
}
