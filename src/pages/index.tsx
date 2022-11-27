import { Hero, About, Service, Technology, Contact, Client, Solution, Team } from '@/components/Chunks/Home'
import { Footer } from '@/components/Footer'
const LandingPage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Service />
      <Solution />
      <Technology />
      <Client />
      <Team />
      <Contact />
      <Footer />
    </>
  )
}

export default LandingPage
