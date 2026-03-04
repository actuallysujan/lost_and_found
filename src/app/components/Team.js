'use client'
import { useState, useRef } from 'react'
import styles from './Team.module.css'

const TEAMS = [
  {
    label: 'Music Team',
    icon: '🎵',
    members: [
      'Nagacharan', 'Jeevan Datt', 'Sujan', 'Akanksh K.A',
      'Anirudh', 'Apeksha', 'Gunasaagari', 'Tushar',
      'Vinay', 'Vishal', 'Ankith', 'Manorakith', 'Nikhil',
    ],
  },
  {
    label: 'Theatre Team',
    icon: '🎭',
    members: [
      'Rakshith Ramakrishna', 'Srushti Raghavendra', 'Akanksh Shetty',
      'Tejas Krishna', 'Rudresh', 'Faizan', 'Likith', 'Rudra',
      'Bharath', 'Sujan',
    ],
  },
  {
    label: 'Technical Team',
    icon: '⚙️',
    members: [
      'Chiranjeevi', 'Rajnish', 'Harsha', 'Likith',
      'Priyanka', 'Monica', 'Nikhil', 'Siddhant', 'Nithin',
    ],
  },
  {
    label: 'Art Team',
    icon: '🎨',
    members: ['Aadhya P', 'Nagalambika', 'Spandana', 'Rekha Nalvade'],
  },
]

export default function Team() {
  const [active, setActive] = useState(0)

  // Touch swipe support
  const touchStartX = useRef(null)

  const prev = () => setActive(i => (i - 1 + TEAMS.length) % TEAMS.length)
  const next = () => setActive(i => (i + 1) % TEAMS.length)

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (diff > 50) next()        // swipe left → next
    if (diff < -50) prev()       // swipe right → prev
    touchStartX.current = null
  }

  const team = TEAMS[active]

  return (
    <section id="team" className={`section ${styles.team}`}>
      <div className="container">

        {/* Header */}
        <div className={styles.header}>
          <p className="mono">The People</p>
          <div className="divider" />
          <h2 className={styles.heading}>Meet Our Team</h2>
        </div>

        {/* Carousel */}
        <div className={styles.carousel}>
          <button className={styles.arrow} onClick={prev} aria-label="Previous team">←</button>

          {/* Swipeable card */}
          <div
            className={styles.card}
            key={active}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div className={styles.cardTop}>
              <span className={styles.icon}>{team.icon}</span>
              <div>
                <p className={`mono ${styles.teamIndex}`}>
                  {String(active + 1).padStart(2, '0')} / {String(TEAMS.length).padStart(2, '0')}
                </p>
                <h3 className={styles.cardLabel}>{team.label}</h3>
                <p className={`mono ${styles.memberCount}`}>{team.members.length} members</p>
              </div>
            </div>

            <div className={styles.pills}>
              {team.members.map(name => (
                <span key={name} className={styles.pill}>{name}</span>
              ))}
            </div>
          </div>

          <button className={styles.arrow} onClick={next} aria-label="Next team">→</button>
        </div>

        {/* Dots — tap to jump, also acts as mobile nav since arrows are hidden */}
        <div className={styles.dots}>
          {TEAMS.map((t, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Go to ${t.label}`}
            />
          ))}
        </div>

        {/* Swipe hint — only shows on touch devices */}
        <p className={styles.swipeHint}>Swipe to browse teams</p>

        {/* Link to full team page */}
        <div className={styles.cta}>
          <a href="/team" className={styles.ctaLink}>View Full Team Directory →</a>
        </div>

      </div>
    </section>
  )
}