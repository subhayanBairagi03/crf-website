const partners = ['GLOBAL OXFORD', 'MIT ARCHIVES', 'UNESCO DIGITAL', 'SORBONNE IV', 'WIRED LABS']

export default function PartnersSection() {
  return (
    <section className="py-20 border-y border-outline-variant/20 bg-surface">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 items-center opacity-40">
          {partners.map((partner) => (
            <div key={partner} className="text-center font-headline text-xl font-bold tracking-tighter">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
