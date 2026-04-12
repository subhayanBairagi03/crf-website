'use client'
import useScrollReveal from '@/hooks/useScrollReveal'
import { upcomingEvents } from '@/data/events'

const HAS_UPCOMING_EVENTS = true

export default function EventsSection() {
  const ref = useScrollReveal()

  return (
    <section className="py-20 sm:py-32 bg-surface">
      <div className="container mx-auto px-4 sm:px-8">

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-12 sm:mb-16 gap-4">
          <h2 className="font-headline text-3xl sm:text-4xl">Convergence Events</h2>
          <a
            href="/archives"
            className="text-on-surface-variant font-label text-xs uppercase tracking-widest font-bold border-b border-outline-variant self-start sm:self-auto"
          >
            View Archives
          </a>
        </div>

        {HAS_UPCOMING_EVENTS ? (
          <div ref={ref} className="reveal space-y-6">
            {upcomingEvents.map((event) => {
              const isCallForPapers = event.type === 'call-for-papers'
              return (
                <a
                  key={event.id}
                  href={event.registerUrl}
                  className="bg-white p-6 sm:p-8 shadow-sm border-l-4 border-[#001757] flex flex-col sm:flex-row items-start gap-4 sm:gap-8 group hover:shadow-xl transition-all"
                >
                  {/* Date chip */}
                  <div className="text-center shrink-0 min-w-[56px]">
                    <span className="block text-4xl font-headline font-black text-[#C9960C]">
                      {event.displayDay}
                    </span>
                    <span className="block text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">
                      {event.displayMonth.split(' ')[0]}
                    </span>
                    {isCallForPapers && (
                      <span className="block text-[9px] uppercase font-bold tracking-wider text-[#C9960C] mt-0.5">
                        Deadline
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    {isCallForPapers && (
                      <span className="inline-block mb-2 text-[10px] font-label font-bold uppercase tracking-widest text-white bg-[#001757] px-2 py-0.5">
                        Call for Papers
                      </span>
                    )}
                    <h4 className="font-headline text-xl mb-1">{event.title}</h4>
                    <p className="text-xs text-on-surface-variant uppercase tracking-widest mb-3">
                      {event.venue} · {event.displayMonth}
                    </p>
                    <p className="text-sm text-on-surface-variant leading-relaxed max-w-2xl">
                      {event.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="shrink-0 self-center">
                    {isCallForPapers ? (
                      <span className="font-label text-xs font-bold uppercase tracking-widest text-[#001757] border-b border-[#001757] group-hover:text-[#C9960C] group-hover:border-[#C9960C] transition-colors whitespace-nowrap">
                        Submit Paper →
                      </span>
                    ) : (
                      <span className="material-symbols-outlined text-[#001757] opacity-0 group-hover:opacity-100 transition-opacity">
                        arrow_forward
                      </span>
                    )}
                  </div>
                </a>
              )
            })}
          </div>
        ) : (
          <div ref={ref} className="reveal space-y-6">
            <div className="bg-[#F5E6C0] border border-[#C9960C]/40 rounded-sm p-8 sm:p-12 text-center space-y-4">
              <span className="material-symbols-outlined text-[#C9960C] text-4xl block">event_upcoming</span>
              <h3 className="font-headline text-2xl sm:text-3xl text-[#1B2E6E]">
                Upcoming Events — Stay Tuned
              </h3>
              <p className="text-[#1B2E6E]/70 max-w-lg mx-auto leading-relaxed text-sm sm:text-base">
                CRF is actively planning its first cycle of conferences, workshops, and colloquia.
                New events will be listed here as soon as they are confirmed. Check back soon.
              </p>
              <a
                href="mailto:convergenceofknowledge17@gmail.com?subject=Event%20Inquiry"
                className="inline-block mt-2 text-[#C9960C] font-label font-bold text-xs uppercase tracking-widest border-b border-[#C9960C] hover:opacity-70 transition-opacity"
              >
                Get notified via email →
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
