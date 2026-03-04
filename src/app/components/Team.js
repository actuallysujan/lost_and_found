'use client'
import { useState } from 'react'
import styles from './Team.module.css'

const TEAMS = [
  {
    label: 'Music Team',
    icon: '🎵',
    members: [
      'Anvita','Sujan','Nagacharan', 'Jeevan Datt', 'Akanksh K.A',
      'Anirudh', 'Apeksha','Tejaswini', 'Gunasaagari', 'Tushar',
      'Vinay', 'Vishal', 'Ankith', 'Manorakith', 'Nikhil',
    ],
  },
  {
    label: 'Theatre Team',
    icon: '🎭',
    members: [
      'Pavan Bass', 'Rishi Swaroop', 'Anvita',
      'Sujan', 'Anirudh', 'Aapeksha'
     
    ],
  },
  {
    label: 'Technical Team',
    icon: '⚙️',
    members: [
       'Rajnish', 'Harsha', 'Anvita','Sujan','Likith',
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

  const prev = () => setActive(i => (i - 1 + TEAMS.length) % TEAMS.length)
  const next = () => setActive(i => (i + 1) % TEAMS.length)

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

          <button className={styles.arrow} onClick={prev} aria-label="Previous team">
            ←
          </button>

          <div className={styles.card} key={active}>
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

          <button className={styles.arrow} onClick={next} aria-label="Next team">
            →
          </button>
        </div>

        {/* Dot indicators */}
        <div className={styles.dots}>
          {TEAMS.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Go to ${TEAMS[i].label}`}
            />
          ))}
        </div>

        {/* Link to full page */}
        <div className={styles.cta}>
          <a href="/team" className={styles.ctaLink}>
            View Full Team Directory →
          </a>
        </div>

      </div>
    </section>
  )
}
