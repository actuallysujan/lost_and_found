import styles from './Groups.module.css'

const GROUPS = [
  {
    icon: '🎤',
    title: 'Open Mic',
    desc: 'A platform for singing, poetry, stand-up comedy, rap, mono acting, mimicry, and more. Your voice, your stage.',
  },
  {
    icon: '🎸',
    title: 'Music Band',
    desc: 'Home of SARGAM (softcore) and AFTERBURN (heavy metal) — two bands, one community, united through music.',
  },
  {
    icon: '🎭',
    title: 'Theatre',
    desc: 'Lights. Camera. Action. Write scripts, direct, act, or shoot. Full creative freedom for visual storytellers.',
  },
  {
    icon: '💃',
    title: 'Dance',
    desc: 'All dancers under one roof. Collaborations, battles, and showcases — every style welcome.',
  },
  {
    icon: '🎨',
    title: 'Art & Craft',
    desc: 'Pencils, paints, sketches, crafts — express your imagination and emotions through any visual art form.',
  },
  {
    icon: '📷',
    title: 'Videography & Editing',
    desc: 'Sharpen your lens and editing eye. Explore tools, shoot real content, and build your visual portfolio.',
  },
]

export default function Groups() {
  return (
    <section id="groups" className={`section ${styles.groups}`}>
      <div className="container">
        <div className={styles.header}>
          <p className="mono">What We Do</p>
          <div className="divider" />
          <h2 className={styles.heading}>Groups under Our Community</h2>
          <p className={styles.sub}>
            Six creative verticals, one shared purpose — giving every artist their stage.
          </p>
        </div>

        <div className={styles.grid}>
          {GROUPS.map((group) => (
            <div key={group.title} className={styles.card}>
              <span className={styles.icon}>{group.icon}</span>
              <h3 className={styles.cardTitle}>{group.title}</h3>
              <p className={styles.cardDesc}>{group.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
