import styles from './Contact.module.css'

const REASONS = [
  'Join our community',
  'Get a platform for your art',
  'Host our band at your event',
  'Sponsor us',
]

export default function Contact() {
  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <div className={styles.inner}>

          <div className={styles.left}>
            <p className="mono">Get In Touch</p>
            <div className="divider" />
            <h2 className={styles.heading}>
              Let&apos;s grow together and build the empire of artists.
            </h2>
            <ul className={styles.reasons}>
              {REASONS.map(r => (
                <li key={r} className={styles.reason}>
                  <span className={styles.dot} />
                  {r}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.right}>
            <a href="tel:7829011124" className={styles.contactItem}>
              <span className={styles.contactIcon}>📞</span>
              <div>
                <p className="mono">Call Us</p>
                <p className={styles.contactVal}>7829011124 / 8431479600</p>
              </div>
            </a>

            <a href="mailto:lostandfoundcommunity26@gmail.com" className={styles.contactItem}>
              <span className={styles.contactIcon}>✉️</span>
              <div>
                <p className="mono">Email Us</p>
                <p className={styles.contactVal}>lostandfoundcommunity26@gmail.com</p>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
