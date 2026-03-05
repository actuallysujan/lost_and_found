import Navbar from './../components/Navbar'
import Footer from './../components/Footer'
import styles from './page.module.css'

const EVENTS = [
  {
    id: 1,
    title: 'MAYAS × AFTERBURN Live',
    date: 'May 10, 2025',
    time: '7:00 PM',
    venue: 'ABC Auditorium, Bangalore',
    type: 'Band Performance',
    status: 'upcoming',
    description: 'Two bands. Two worlds. One night. Softcore melodies meet heavy metal thunder.',
    ticketLink: 'https://forms.google.com',
  },
]

const upcoming = EVENTS.filter(e => e.status === 'upcoming')
const past     = EVENTS.filter(e => e.status === 'past')

const TYPE_COLORS = {
  'Open Mic':         '#8fac7e',
  'Band Performance': '#c0392b',
  'Theatre':          '#8b7fcc',
  'Dance':            '#e0a050',
  'Art':              '#50b8e0',
}

function EventCard({ event }) {
  const color = TYPE_COLORS[event.type] || '#8fac7e'
  return (
    <div className={styles.card}>
      <div className={styles.cardLeft}>
        {event.type && (
          <span className={styles.type} style={{ color, borderColor: color }}>
            {event.type}
          </span>
        )}
        <h2 className={styles.cardTitle}>{event.title}</h2>
        <p className={styles.cardDesc}>{event.description}</p>
        <div className={styles.meta}>
          {event.date  && <span>📅 {event.date}</span>}
          {event.time  && <span>🕐 {event.time}</span>}
          {event.venue && <span>📍 {event.venue}</span>}
        </div>
      </div>

      <div className={styles.cardRight}>
        {event.status === 'upcoming' && event.ticketLink && (
          <a href={event.ticketLink} target="_blank" rel="noopener noreferrer"
             className={styles.ticketBtn}>
            Get Ticket →
          </a>
        )}
        {event.status === 'past' && (
          <span className={styles.pastBadge}>Completed</span>
        )}
      </div>
    </div>
  )
}

export const metadata = {
  title: 'Events — Lost and Found Community',
}

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>

        {/* ── Page Hero ── */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <a href="/" className={styles.back}>← Back to Home</a>
            <p className={styles.eyebrow}>What&apos;s On</p>
            <h1 className={styles.title}>Events</h1>
            <p className={styles.sub}>
              Live performances, open mics, band nights and more.
            </p>
          </div>
        </section>

        <div className={styles.container}>

         

          {/* ════════════════════════════════
              SECTION  — EVENTS LISTING
          ════════════════════════════════ */}
          <section className={styles.eventsSection}>
            <div className={styles.eventsSectionHeader}>
              <p className={styles.sectionEyebrow}>Shows &amp; Performances</p>
              <h2 className={styles.eventsHeading}>Upcoming Events</h2>
            </div>

            {/* Upcoming events */}
            {upcoming.length > 0 ? (
              <div className={styles.list}>
                {upcoming.map(e => <EventCard key={e.id} event={e} />)}
              </div>
            ) : (
              <div className={styles.empty}>
                <p>No upcoming events right now.</p>
                <p>Follow us to stay updated! 🎶</p>
              </div>
            )}

            {/* Past events */}
            {past.length > 0 && (
              <div className={styles.pastGroup}>
                <h2 className={styles.pastLabel}>Past Events</h2>
                <div className={styles.list}>
                  {past.map(e => <EventCard key={e.id} event={e} />)}
                </div>
              </div>
            )}
          </section>

        </div>

      </main>
      <Footer />
    </>
  )
}