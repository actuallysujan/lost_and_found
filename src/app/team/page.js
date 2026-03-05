import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from './page.module.css'
import { TEAMS } from  '../utils/constants'


const totalMembers = TEAMS.reduce((acc, t) => acc + t.members.length, 0)

export const metadata = {
  title: 'Our Team — Lost and Found Community',
}

export default function TeamPage() {
  return (
    <>
      <main className={styles.main}>

        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <a href="/" className={styles.back}>← Back to Home</a>
            <p className={styles.eyebrow}>The People</p>
            <h1 className={styles.title}>Meet Our Team</h1>
            <p className={styles.sub}>
              {totalMembers} artists across {TEAMS.length} groups — one shared stage.
            </p>
          </div>
        </section>

        {/* Team sections */}
        <section className={styles.content}>
          <div className={styles.container}>
            {TEAMS.map((team, idx) => (
              <div key={team.label} className={styles.teamBlock}>

                {/* Team header row */}
                <div className={styles.teamHeader}>
                  <div className={styles.teamMeta}>
                    <span className={styles.teamIcon}>{team.icon}</span>
                    <div>
                      <p className={styles.teamIndex}>
                        {String(idx + 1).padStart(2, '0')}
                      </p>
                      <h2 className={styles.teamLabel}>{team.label}</h2>
                      <p className={styles.teamDesc}>{team.description}</p>
                    </div>
                  </div>
                  <span className={styles.count}>{team.members.length}</span>
                </div>

                {/* Member grid */}
                <div className={styles.memberGrid}>
                  {team.members.map(name => (
                    <div key={name} className={styles.memberCard}>
                      <div className={styles.avatar}>
                        {name.charAt(0)}
                      </div>
                      <span className={styles.memberName}>{name}</span>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
