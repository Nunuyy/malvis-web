import { Hero, About } from '@/components/Chunks/Home'
import { Footer } from '@/components/Footer'
const LandingPage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Footer open={false} />
    </>
  )
}

export default LandingPage
