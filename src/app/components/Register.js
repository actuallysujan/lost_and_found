import styles from './Register.module.css'

export default function Register() {
  return (

    <section id="participantRegister" className={`section ${styles.registerSection}`}>
      <div className="container">
        <div className={styles.registerInner}>

          <div className={styles.registerLeft}>
            <p className="mono">Open for Artists</p>
            <div className="divider" />
            <h2 className={styles.registerHeading}>
              Want to Perform?<br />
              <em>Register as a Participant</em>
            </h2>
            <p className={styles.registerDesc}>
              Whether you sing, rap, act, dance, do stand-up, or play an
              instrument — this stage is yours. Fill in the form and
              we&apos;ll reach out with details.
            </p>
            <ul className={styles.registerPerks}>
              <li>🎤 Open to all art forms</li>
              <li>🎭 Solo &amp; group performances welcome</li>
              <li>🤝 Connect with fellow artists</li>
              <li>🌟 Build your stage confidence</li>
            </ul>
          </div>

          <div className={styles.registerRight}>
            <div className={styles.registerCard}>
              <p className={styles.registerCardLabel}>Participant Registration</p>
              <h3 className={styles.registerCardTitle}>Secure your spot on stage</h3>
              <p className={styles.registerCardSub}>
                Free to register · Limited slots
              </p>
              <a
                href="https://forms.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.registerBtn}
              >
                Register Now →
              </a>
              <p className={styles.registerNote}>
                Questions? Email us at lostandfoundcommunity26@gmail.com
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}