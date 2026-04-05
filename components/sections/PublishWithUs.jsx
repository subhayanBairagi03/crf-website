'use client'
import useScrollReveal from '@/hooks/useScrollReveal'

const benefits = [
  { icon: 'payments', text: 'Finding up to 20% of total funding*' },
  { icon: 'handshake', text: 'Collaboration with more than 10 reputed publishers in India' },
  { icon: 'menu_book', text: 'Best quality ISBN book production' },
  { icon: 'monetization_on', text: 'Assured royalty schemes' },
  { icon: 'trending_up', text: 'Comprehensive marketing assistance' },
  { icon: 'public', text: 'Support for online and offline sale' },
  { icon: 'groups', text: 'Academic networking opportunities' },
  { icon: 'emoji_events', text: 'Professional award assistance' },
]

export default function PublishWithUs() {
  const headingRef = useScrollReveal()
  const gridRef = useScrollReveal()
  const contactRef = useScrollReveal()

  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4 sm:px-8">
        {/* Heading */}
        <div ref={headingRef} className="reveal text-center mb-12">
          <h2 className="font-headline text-4xl sm:text-5xl font-bold text-[#001757] inline-block relative">
            Publish with us!
            <span className="block h-1 w-24 bg-[#f6be3c] mx-auto mt-3 rounded-full" />
          </h2>
        </div>

        {/* Benefits grid */}
        <div
          ref={gridRef}
          className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-12"
        >
          {benefits.map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-4 bg-[#F5E6C0] px-5 py-4 rounded-lg text-[#1B2E6E] font-label font-semibold text-sm uppercase tracking-wide hover:bg-[#C9960C] hover:text-white transition-colors cursor-default"
            >
              <span className="material-symbols-outlined text-2xl shrink-0">
                {item.icon}
              </span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Contact strip */}
        <div ref={contactRef} className="reveal bg-[#001757] text-white rounded-xl px-6 py-5 max-w-3xl mx-auto text-center space-y-2">
          <p className="font-label text-sm sm:text-base">
            <span className="font-bold">Contact:</span> 8017957018
            <span className="mx-3 opacity-50">|</span>
            <span className="font-bold">Email:</span>{' '}
            <a
              href="mailto:convergenceofknowledge17@gmail.com"
              className="underline underline-offset-2 hover:text-[#f6be3c] transition-colors"
            >
              convergenceofknowledge17@gmail.com
            </a>
          </p>
          <p className="font-headline text-base sm:text-lg font-semibold">
            Convergence Research Foundation, Kolkata
          </p>
          <p className="font-label text-xs opacity-60">(*Terms and conditions apply)</p>
        </div>
      </div>
    </section>
  )
}
