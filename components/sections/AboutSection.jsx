'use client'
import useScrollReveal from '@/hooks/useScrollReveal'

const pillars = [
  'Interdisciplinary Research',
  'Creative Expression',
  'Knowledge Dissemination',
  'Social Transformation',
]

const timeline = [
  {
    year: 'The Foundation',
    text: 'Established to bridge disciplines and communities through research, publication, and creative expression across India and beyond.',
  },
  {
    year: 'Growing Network',
    text: 'Forged collaborations with universities, research institutes, NGOs, and think tanks to build a robust interdisciplinary ecosystem.',
  },
  {
    year: 'Present: Convergence in Action',
    text: 'Launching the Interdisciplinary Journal of Convergence Studies (IJCS) and expanding fellowships, workshops, and open-access platforms.',
  },
]

export default function AboutSection() {
  const ref = useScrollReveal()

  return (
    <section className="py-32 bg-surface">
      <div ref={ref} className="reveal container mx-auto px-4 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        {/* Left: Quote + Pillars */}
        <div className="space-y-10 sm:space-y-12">
          <div className="border-l-4 border-[#f6be3c] pl-6 sm:pl-8 py-2">
            <blockquote className="font-headline text-2xl sm:text-3xl italic text-on-surface leading-snug">
              "Where Minds Converge for Creativity, Innovation, and Insight."
            </blockquote>
          </div>
          <div className="reveal-stagger grid grid-cols-2 gap-3 sm:gap-4">
            {pillars.map((p) => (
              <div key={p} className="bg-[#F5E6C0] p-4 sm:p-6 text-[#1B2E6E] font-label font-bold text-xs uppercase tracking-widest hover:bg-[#C9960C] hover:text-white transition-colors">
                {p}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Timeline */}
        <div className="relative pl-6 md:pl-12">
          <h3 className="font-headline text-2xl mb-10 sm:mb-12">Institutional Evolution</h3>
          <div className="space-y-10 sm:space-y-12 relative before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-[#c5c5d2]/30">
            {timeline.map((item) => (
              <div key={item.year} className="relative pl-8 sm:pl-12 group">
                <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-[#f6be3c] group-hover:scale-150 transition-transform" />
                <span className="block font-headline text-lg font-bold">{item.year}</span>
                <p className="text-sm text-on-surface-variant mt-2">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
