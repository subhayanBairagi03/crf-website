import Link from 'next/link'

export default function ResearchCTA() {
  return (
    <section className="bg-[#FAFAF7] py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <h2 className="font-headline text-4xl md:text-5xl text-primary mb-6 leading-tight">
          Collaborate With Us on Research
        </h2>
        <p className="text-on-surface-variant text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          We are always seeking innovative proposals that challenge standard paradigms. Join our community of scholars
          and contribute to the next wave of convergent knowledge.
        </p>
        <Link
          href="/#footer"
          className="inline-block bg-[#C9960C] text-[#261900] px-10 py-4 font-bold tracking-widest uppercase text-sm shadow-lg shadow-[#C9960C]/20 hover:scale-105 transition-transform rounded-sm"
        >
          Contact Us
        </Link>
      </div>
    </section>
  )
}
