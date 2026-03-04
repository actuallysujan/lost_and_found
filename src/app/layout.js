import './globals.css'

export const metadata = {
  title: 'Lost and Found Community',
  description: 'Lose yourself to Art – Find yourself on Stage. The community every artist deserves.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
