'use client'
import useScrollReveal from '@/hooks/useScrollReveal'

const themes = [
  'Education & Pedagogy',
  'Literature & Cultural Heritage',
  'Environmental & Ecocritical Studies',
  'Media & Digital Humanities',
  'Science, Technology & Society',
  'Peace, Justice & Human Rights',
  'Gender & Diversity Studies',
  'Public Policy & Sustainable Development',
]

export default function ThematicFocus() {
  const ref = useScrollReveal()

  return (
    <section className="py-24 bg-[#f4f4f1]">
      <div className="container mx-auto px-4 sm:px-8 text-center max-w-4xl">
        <h4 className="font-label text-xs uppercase tracking-[0.3em] font-bold text-on-surface-variant mb-8">
          Thematic Focus Areas
        </h4>
        <div ref={ref} className="reveal-stagger flex flex-wrap justify-center gap-2 sm:gap-3">
          {themes.map((theme) => (
            <span
              key={theme}
              className="bg-[#F5E6C0] text-[#1B2E6E] border border-[#C9960C]/30 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#C9960C] hover:text-white transition-colors cursor-default"
            >
              {theme}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
