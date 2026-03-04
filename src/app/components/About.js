import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <div className={styles.grid}>

          {/* Left: text */}
          <div className={styles.text}>
            <p className="mono">Who We Are</p>
            <div className="divider" />
            <h2 className={styles.heading}>The community every artist deserves.</h2>
            <p className={styles.body}>
              Lost and Found gives a platform to artists talented in any form of art —
              singing, dancing, acting, writing, editing, videography, painting, and more.
              We help you get a stage to represent yourself, grow your network, boost your
              confidence, and build your career.
            </p>
            <p className={styles.body}>
              Connect with like-minded creatives, collaborate on content, and perform at
              our band showcases and open mics. Every artist belongs here.
            </p>
          </div>

          {/* Right: stat cards */}
          <div className={styles.stats}>
            {[
              { num: '6+', label: 'Art Groups' },
              { num: '50+', label: 'Community Members' },
              { num: '2',  label: 'Music Bands' },
              { num: '∞',  label: 'Possibilities' },
            ].map(stat => (
              <div key={stat.label} className={styles.stat}>
                <span className={styles.statNum}>{stat.num}</span>
                <span className={`mono ${styles.statLabel}`}>{stat.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
