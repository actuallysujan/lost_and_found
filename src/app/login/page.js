import styles from '../login/page.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'Login — Lost and Found Community',
}

export default function LoginPage() {
  return (
    <main className={styles.main}>

      {/* Background layers */}
      <div className={styles.bgGlow} />
      <div className={styles.bgGrid} />

      {/* Back to home */}
      <Link href="/" className={styles.backHome}>
        ← Lost &amp; Found
      </Link>

      <div className={styles.wrapper}>

        {/* ── Left panel — branding ── */}
        <div className={styles.left}>
          <div className={styles.leftInner}>
            <h1 className={styles.loseYourselfTitle}>
              Lose yourself<br />to <em>Art.</em>
            </h1>
             <h2 className={styles.loseYourselfTitle}>
            Find yourself on <em>Stage.</em>
          </h2>
            <p className={styles.leftSub}>
              Don't forget to check our community of artists — singers, dancers, actors,
              writers, and creators.
            </p>

            <ul className={styles.artList}>
              {['Singing', 'Dancing', 'Theatre', 'Open Mic', 'Art & Craft', 'Videography'].map(art => (
                <li key={art} className={styles.artItem}>
                  <span className={styles.artDot} />
                  {art}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Right panel — auth ── */}
        <div className={styles.right}>
          <div className={styles.card}>

            {/* Logo mark */}
            <div className={styles.logoMark}>
              <span className={styles.logoText}>L</span>
              <span className={styles.logoAmp}>&amp;</span>
              <span className={styles.logoText}>F</span>
            </div>

            <h2 className={styles.cardTitle}>Welcome back</h2>
            <p className={styles.cardSub}>Sign in to your account</p>

            {/* Form */}
            <form className={styles.form}>
              <div className={styles.field}>
                <label className={styles.label}>Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className={styles.input}
                />
              </div>

              <div className={styles.field}>
                <div className={styles.labelRow}>
                  <label className={styles.label}>Password</label>
                  <a href="#" className={styles.forgot}>Forgot?</a>
                </div>
                <input
                  type="password"
                  placeholder="••••••••"
                  className={styles.input}
                />
              </div>

              {/* Primary — Login */}
              <button type="submit" className={styles.btnLogin}>
                Login
              </button>
            </form>

            {/* Divider */}
            <div className={styles.divider}>
              <span className={styles.dividerLine} />
              <span className={styles.dividerText}>or</span>
              <span className={styles.dividerLine} />
            </div>

            {/* Register */}
            <Link href="/registerUser" className={styles.btnRegister}>
              Create an Account
            </Link>

            {/* Guest */}
            <Link href="/guestLogin" className={styles.btnGuest}>
              Continue as Guest →
            </Link>

          </div>
        </div>

      </div>
    </main>
  )
}
