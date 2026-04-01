import { pastEvents } from '@/data/events'

// Fallback icon per event index when no image is available
const FALLBACK_ICONS = ['history_edu', 'language', 'science', 'hub', 'biotech', 'groups']

export default function PastEventsGrid() {
  return (
    <section className="bg-surface py-24 px-8">
      <div className="max-w-screen-xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <span className="text-tertiary-fixed-dim font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            Past Events
          </span>
          <h2 className="font-headline text-4xl text-primary-container">Archived Gatherings</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {pastEvents.map((event, i) => (
            <div
              key={event.id}
              className="group flex flex-col h-full bg-surface-container-low rounded-lg overflow-hidden transition-transform duration-500 hover:-translate-y-2"
            >
              {/* Card image / placeholder */}
              <div className="relative h-56 overflow-hidden bg-primary-container">
                {event.image ? (
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center opacity-80">
                    <span className="material-symbols-outlined text-tertiary-fixed-dim text-6xl">
                      {FALLBACK_ICONS[i % FALLBACK_ICONS.length]}
                    </span>
                  </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-primary-container/40 backdrop-blur-sm">
                  <span className="text-tertiary-fixed-dim font-semibold tracking-wider text-sm">
                    View Gallery
                  </span>
                </div>

                {/* Date badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#F5E6C0] text-on-tertiary-fixed-variant px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter">
                    {event.displayDate}
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-headline text-xl text-primary-container mb-3 leading-snug">
                  {event.title}
                </h3>
                <p className="text-on-surface-variant text-sm mb-6 line-clamp-2 leading-relaxed">
                  {event.description}
                </p>
                <div className="mt-auto mb-4">
                  <span className="bg-[#F5E6C0]/50 text-[10px] px-2 py-0.5 rounded text-primary-container font-medium uppercase">
                    Event
                  </span>
                </div>
                <a
                  href={event.storyUrl || '#'}
                  className="text-secondary font-medium text-sm flex items-center group/link"
                >
                  Read Full Story{' '}
                  <span className="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
