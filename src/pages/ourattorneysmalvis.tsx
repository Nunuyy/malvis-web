import { HeroMalvis, OurAttorneysMalvis } from '@/components/Chunks/OurAttorneysMalvis'
import { Footerv2 } from '@/components/Footerv2'

const OurAttorneyMalvis = () => {
  return (
    <>
      <HeroMalvis open={false} />
      <OurAttorneysMalvis />
      <Footerv2 open={false} />
    </>
  )
}

export default OurAttorneyMalvis
