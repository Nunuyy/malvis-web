import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Service } from '@/components/Service'
import { Solution } from '@/components/Solution'
import { Product } from '@/components/Product'
import { Technology } from '@/components/Technology'
import { Client } from '@/components/Client'
import { Founder } from '@/components/Founder'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

const LandingPage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Service />
      <Solution />
      <Product />
      <Technology />
      <Client />
      <Founder />
      <Contact />
      <Footer />
    </>
  )
}

export default LandingPage
