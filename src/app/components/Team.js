import styles from './Team.module.css'

const TEAMS = [
  {
    label: 'Core Team',
    members: ['Anvita P', 'Ayush Kashyap', 'Varun'],
  },
  {
    label: 'Music Team',
    members: [
      'Nagacharan', 'Jeevan Datt', 'Sujan', 'Akanksh K.A',
      'Anirudh', 'Apeksha', 'Gunasaagari', 'Tushar',
      'Hemanth', 'Srujan', 'Vinay', 'Samuel',
      'Surabhi', 'Vishal', 'Ankith', 'Manorakith', 'Nikhil',
    ],
  },
  {
    label: 'Theatre Team',
    members: [
      'Rakshith Ramakrishna', 'Srushti Raghavendra', 'Akanksh Shetty',
      'Tejas Krishna', 'Rudresh', 'Faizan', 'Likith', 'Rudra',
      'Bharath', 'Sujan',
    ],
  },
  {
    label: 'Technical Team',
    members: [
      'Chiranjeevi', 'Rajnish', 'Harsha', 'Likith',
      'Priyanka', 'Monica', 'Nikhil', 'Siddhant', 'Nithin',
    ],
  },
  {
    label: 'Art Team',
    members: ['Aadhya P', 'Nagalambika', 'Spandana', 'Rekha Nalvade'],
  },
]

export default function Team() {
  return (
    <section id="team" className={`section ${styles.team}`}>
      <div className="container">
        <div className={styles.header}>
          <p className="mono">The People</p>
          <div className="divider" />
          <h2 className={styles.heading}>Meet Our Team</h2>
        </div>

        <div className={styles.grid}>
          {TEAMS.map((team) => (
            <div key={team.label} className={styles.group}>
              <h3 className={styles.groupLabel}>{team.label}</h3>
              <ul className={styles.memberList}>
                {team.members.map((name) => (
                  <li key={name} className={styles.member}>{name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
