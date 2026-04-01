'use client'
import useScrollReveal from '@/hooks/useScrollReveal'
import { upcomingEvents } from '@/data/events'

// Set this to true once you have real upcoming events in data/events.js
const HAS_UPCOMING_EVENTS = false

// Sample of the card format (hidden until real events exist)
function EventCardPreview() {
  return (
    <div className="bg-white p-6 sm:p-8 shadow-sm border-l-4 border-[#001757]/30 border-dashed flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 opacity-40 pointer-events-none select-none">
      <div className="text-center shrink-0">
        <span className="block text-4xl font-headline font-black text-[#C9960C]">DD</span>
        <span className="block text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">Mon</span>
      </div>
      <div>
        <h4 className="font-headline text-xl mb-1">Event Title Will Appear Here</h4>
        <p className="text-xs text-on-surface-variant uppercase tracking-widest">Venue / Location</p>
      </div>
      <span className="material-symbols-outlined ml-auto text-[#001757]">arrow_forward</span>
    </div>
  )
}

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
          /* ── Real upcoming events (shown when HAS_UPCOMING_EVENTS = true) ── */
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {upcomingEvents.map((event) => (
              <a
                key={event.id}
                href={event.registerUrl}
                className="bg-white p-6 sm:p-8 shadow-sm border-l-4 border-[#001757] flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 group hover:shadow-xl transition-all"
              >
                <div className="text-center shrink-0">
                  <span className="block text-4xl font-headline font-black text-[#C9960C]">
                    {event.displayDay}
                  </span>
                  <span className="block text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">
                    {event.displayMonth.split(' ')[0]}
                  </span>
                </div>
                <div>
                  <h4 className="font-headline text-xl mb-1">{event.title}</h4>
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest">{event.venue}</p>
                </div>
                <span className="material-symbols-outlined ml-auto text-[#001757] opacity-0 group-hover:opacity-100 transition-opacity">
                  arrow_forward
                </span>
              </a>
            ))}
          </div>
        ) : (
          /* ── No events yet — stay tuned state ── */
          <div ref={ref} className="reveal space-y-6">
            {/* Preview ghost cards */}
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-8">
              <EventCardPreview />
              <EventCardPreview />
            </div>

            {/* Stay tuned message */}
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
