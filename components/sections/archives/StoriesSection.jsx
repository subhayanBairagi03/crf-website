const stories = [
  {
    id: 1,
    tag: 'Field Notes',
    title: 'Bridging the Gap: How Cross-Border Grants Revitalized Deep Sea Ecology',
    excerpt:
      'In 2022, a small grant from CRF connected a team of marine biologists in Norway with computational fluid dynamics experts in Japan. The results transformed our understanding of hydrothermal vent ecosystems...',
    author: 'Elena Sorokin',
    date: 'Nov 2023',
    image: '/images/stories/story-1.jpg',
    url: '#',
    reverse: false,
  },
  {
    id: 2,
    tag: 'Case Study',
    title: 'The Bio-Robotics Revolution: From Lab Bench to Environmental Restoration',
    excerpt:
      'Trace the journey of the "Veritas" project from its early days as a fringe hypothesis to its current role in large-scale reforestation efforts across the Amazon basin. A testament to persistence in research...',
    author: 'Thomas Reed',
    date: 'Sep 2023',
    image: '/images/stories/story-2.jpg',
    url: '#',
    reverse: true,
  },
]

export default function StoriesSection() {
  return (
    <section className="bg-surface py-24 px-8">
      <div className="max-w-screen-xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <span className="text-tertiary-fixed-dim font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            Archive Narratives
          </span>
          <h2 className="font-headline text-4xl text-primary-container">Stories &amp; Impact</h2>
        </div>

        {/* Stories list */}
        <div className="grid grid-cols-1 gap-12">
          {stories.map((story) => (
            <div
              key={story.id}
              className={`group bg-surface-container-low rounded-lg overflow-hidden flex flex-col lg:flex-row${
                story.reverse ? '-reverse' : ''
              } hover:scale-[1.01] transition-transform duration-500`}
              style={{ boxShadow: '0 20px 50px -12px rgba(26, 28, 27, 0.04)' }}
            >
              {/* Image */}
              <div className="lg:w-1/2 h-80 lg:h-auto overflow-hidden bg-primary-container flex items-center justify-center">
                {story.image ? (
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                ) : (
                  <span className="material-symbols-outlined text-tertiary-fixed-dim text-7xl opacity-50">
                    auto_stories
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
                <span className="bg-[#F5E6C0] text-primary-container text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest w-fit mb-6">
                  {story.tag}
                </span>
                <h3 className="font-headline text-3xl text-primary-container mb-6 leading-tight">
                  {story.title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed mb-8">{story.excerpt}</p>
                <div className="flex items-center justify-between mt-auto pt-8 border-t border-outline-variant/20">
                  <span className="text-xs text-on-surface-variant font-medium">
                    By {story.author} · {story.date}
                  </span>
                  <a href={story.url} className="text-secondary font-semibold group/btn">
                    Read Story{' '}
                    <span className="ml-1 group-hover/btn:translate-x-1 transition-transform inline-block">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
