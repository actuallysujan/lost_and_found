import styles from '../registerUser/page.module.css'
import Link from 'next/link'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
export const metadata = {
  title: 'Register — Lost and Found Community',
}

export default function RegisterPage() {
  return (
    <main className={styles.main}>

      {/* Background layers */}
      <div className={styles.bgGlow} />
      <div className={styles.bgGrid} />

      {/* Back to login */}
      <Link href="/login" className={styles.backHome}>
        ← Lost &amp; Found
      </Link>

      <div className={styles.wrapper}>

        {/* ── Left panel — branding ── */}
        <div className={styles.left}>
          <div className={styles.leftInner}>
            {/* <p className={styles.leftEyebrow}>• Join Us •</p> */}
            <h1 className={styles.leftTitle}>
  Register Now<br />and <em>Stay Connected.</em>
            </h1>
            <div className={styles.lottieBg}>
        <DotLottieReact
          src="/animations/user_registration.lottie"
          loop
          autoplay
        />
      </div>
            <p className={styles.leftSub}>
              Create your account to book event tickets and get in touch with our community.
              Explore performances, attend live shows, and celebrate art together.
            </p>

            <ul className={styles.artList}>
              {[
                '🎤 Perform at Open Mics',
                '🎭 Act in Theatre Shows',
                '💃 Dance Collaborations',
                '🎨 Showcase your Art',
                '📷 Videography Projects',
              ].map(art => (
                <li key={art} className={styles.artItem}>
                  <span className={styles.artDot} />
                  {art}
                </li>
              ))}
            </ul>
          </div>

      
        </div>

        <div className={styles.right}>
          <div className={styles.card}>

            <div className={styles.logoMark}>
              <span className={styles.logoText}>L</span>
              <span className={styles.logoAmp}>&amp;</span>
              <span className={styles.logoText}>F</span>
            </div>

            <h2 className={styles.cardTitle}>Create account</h2>
            <p className={styles.cardSub}>React now or Regret later!..</p>

            <form className={styles.form}>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.label}>First Name</label>
                  <input
                    type="text"
                    placeholder="Rahul"
                    className={styles.input}
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Last Name</label>
                  <input
                    type="text"
                    placeholder="Kumar"
                    className={styles.input}
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className={styles.input}
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  className={styles.input}
                />
              </div>

              {/* <div className={styles.field}>
                <label className={styles.label}>Your Art Form</label>
                <select className={styles.select}> */}
                  {/* <option value="" disabled selected>Select your primary art</option> */}
                  {/* <option>Singing</option>
                  <option>Dancing</option>
                  <option>Acting / Theatre</option>
                  <option>Stand-up Comedy</option>
                  <option>Poetry / Rap</option>
                  <option>Instrument / Band</option>
                  <option>Visual Art / Painting</option>
                  <option>Videography / Editing</option>
                  <option>Other</option>
                </select>
              </div> */}

              <div className={styles.field}>
                <label className={styles.label}>Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className={styles.input}
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Confirm Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className={styles.input}
                />
              </div>

              {/* Register button */}
              <button type="submit" className={styles.btnRegister}>
                Create Account
              </button>
            </form>

            {/* Divider */}
            <div className={styles.divider}>
              <span className={styles.dividerLine} />
              <span className={styles.dividerText}>or</span>
              <span className={styles.dividerLine} />
            </div>

            {/* Already have account */}
            <Link href="/login" className={styles.btnLogin}>
              Already have an account? Login
            </Link>

            {/* Guest */}
            <Link href="/guestUser" className={styles.btnGuest}>
              Continue as Guest →
            </Link>

          </div>
        </div>

      </div>
    </main>
  )
}