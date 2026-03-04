import styles from './Bands.module.css'

const BANDS = [
  {
    name: 'SARGAM',
    type: 'Softcore Group',
    color: '#8fac7e',
    symbol: '𝄞',
    description:
      'The softcore music group, bringing people together through gentle, melodious performances. Soothing vocals supported by the warm tones of keyboard, clapbox, and guitars — creating a heartfelt musical atmosphere.',
    vibe: 'Soft · Emotional · Melodic',
  },
  {
    name: 'AFTERBURN',
    type: 'Heavy Metal Group',
    color: '#c0392b',
    symbol: '⚡',
    description:
      'A high-energy heavy metal group known for its intense sound and electrifying stage presence. Roaring electric guitars, hard-hitting beatbox rhythms, and powerful gritty vocals — raw, loud, and unapologetically bold.',
    vibe: 'Intense · Raw · High-Voltage',
  },
]

export default function Bands() {
  return (
    <section id="bands" className={`section ${styles.bands}`}>
      <div className="container">
        <div className={styles.header}>
          <p className="mono">Music</p>
          <div className="divider" />
          <h2 className={styles.heading}>Our Music Bands</h2>
        </div>

        <div className={styles.grid}>
          {BANDS.map((band) => (
            <div key={band.name} className={styles.card} style={{ '--band-color': band.color }}>
              <div className={styles.symbol}>{band.symbol}</div>
              <p className="mono" style={{ color: band.color }}>{band.type}</p>
              <h3 className={styles.bandName} style={{ color: band.color }}>{band.name}</h3>
              <p className={styles.desc}>{band.description}</p>
              <p className={`mono ${styles.vibe}`}>{band.vibe}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
