import Navbar  from './components/Navbar'
import Hero    from './components/Hero'
import About   from './components/About'
import Groups  from './components/Groups'
import Bands   from './components/Bands'
import Team    from './components/Team'
import Contact from './components/Contact'
import Footer  from './components/Footer'
import Register from './components/Register'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Groups />
        <Bands />
        <Team />
        <Contact />
        <Register/>
        
      </main>
      <Footer />
    </>
  )
}
