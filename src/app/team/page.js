import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from './page.module.css'

const TEAMS = [
  {
    label: 'Music Team',
    icon: '🎵',
    description: 'The heartbeat of Lost & Found — singers, instrumentalists, and bands.',
    members: [
      'Nagacharan', 'Jeevan Datt', 'Sujan', 'Akanksh K.A',
      'Anirudh', 'Apeksha', 'Gunasaagari', 'Tushar',
      'Vinay', 'Vishal', 'Ankith', 'Manorakith', 'Nikhil',
    ],
  },
  {
    label: 'Theatre Team',
    icon: '🎭',
    description: 'Script writers, directors, actors, and storytellers on stage.',
    members: [
      'Rakshith Ramakrishna', 'Srushti Raghavendra', 'Akanksh Shetty',
      'Tejas Krishna', 'Rudresh', 'Faizan', 'Likith', 'Rudra',
      'Bharath', 'Sujan',
    ],
  },
  {
    label: 'Technical Team',
    icon: '⚙️',
    description: 'The crew behind the scenes — sound, lighting, and everything that runs the show.',
    members: [
      'Chiranjeevi', 'Rajnish', 'Harsha', 'Likith',
      'Priyanka', 'Monica', 'Nikhil', 'Siddhant', 'Nithin',
    ],
  },
  {
    label: 'Art Team',
    icon: '🎨',
    description: 'Visual artists, illustrators, and designers who bring imagination to life.',
    members: ['Aadhya P', 'Nagalambika', 'Spandana', 'Rekha Nalvade'],
  },
]

const totalMembers = TEAMS.reduce((acc, t) => acc + t.members.length, 0)

export const metadata = {
  title: 'Our Team — Lost and Found Community',
}

export default function TeamPage() {
  return (
    <>
      <Navbar />
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
