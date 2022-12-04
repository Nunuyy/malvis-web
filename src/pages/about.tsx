import { HeroMalvis, AboutMalvis } from '@/components/Chunks/About'
import { Footerv2 } from '@/components/Footerv2'
const About = () => {
  return (
    <>
      <HeroMalvis open={false} />
      <AboutMalvis />
      <Footerv2 open={false} />
    </>
  )
}

export default About
