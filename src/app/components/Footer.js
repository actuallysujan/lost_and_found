import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <p className={styles.brand}>Lost &amp; Found</p>
          <p className={`mono ${styles.copy}`}>
            keep learning, keep growing
          </p>
          <p className={`mono ${styles.copy}`}>
            © {new Date().getFullYear()} Lost and Found Community
          </p>
        </div>
      </div>
    </footer>
  )
}
