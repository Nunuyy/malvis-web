import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Service } from '@/components/Service'
import { Solution } from '@/components/Solution'
import { Formulir } from '@/components/Formulir'
import { Technology } from '@/components/Technology'
import { Client } from '@/components/Client'
import { Team } from '@/components/Team'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

const LandingPage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Service />
      <Solution />
      <Formulir />
      <Technology />
      <Client />
      <Team />
      <Contact />
      <Footer />
    </>
  )
}

export default LandingPage
