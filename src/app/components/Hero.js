'use client'
import styles from './Hero.module.css'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      {/* Decorative background elements */}
      <div className={styles.bgGlow} />
      <div className={styles.bgGrid} />

      {/* Lottie background animation — place your .lottie file in /public/animations/ */}
      <div className={styles.lottieBg}>
        <DotLottieReact
          src="/animations/music_fly.lottie"
          loop
          autoplay
        />
      </div>

      <div className={styles.content}>
        <p className={`mono ${styles.eyebrow}`}>• Community •</p>

        <h1 className={styles.title}>
          Lost <span className={styles.amp}>&amp;</span> Found
        </h1>

        <p className={styles.tagline}>
          Lose yourself to <em>Art</em> — Find yourself on <em>Stage</em>
        </p>

        <div className={styles.cta}>
          <a href="#about" className={styles.btnPrimary}>Discover More</a>
          <a href="#contact" className={styles.btnOutline}>Join Us</a>
        </div>
      </div>

      {/* Decorative icons row */}
      <div className={styles.icons}>
        <span>🎵</span>
        <span>🎭</span>
        <span>🎬</span>
        <span>💃</span>
        <span>🎨</span>
        <span>📷</span>
      </div>

      <a href="#about" className={styles.scroll}>
        <span className={styles.scrollLine} />
        <span className="mono">Scroll</span>
      </a>
    </section>
  )
}