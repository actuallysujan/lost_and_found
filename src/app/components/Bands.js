import styles from './Bands.module.css'

const BANDS = [
  {
    name: 'MAYAS',
    type: 'Where Women Lead the Sound',
    color: '#8fac7e',
    symbol: '🔱',
    description:
      'MAYAS is a female dominated group driven by powerful female vocals, placing women at the heart of the music\
Spanning genres from classical and folk to indie, fusion, devotional, and contemporary, MAYAS delivers expressive performances backed by skilled instrumentalists—creating a rich, immersive sound where the voice leads every moment.',
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
