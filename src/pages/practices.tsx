import { HeroMalvis, PracticesMalvis, Ccmalvis, Desc } from '@/components/Chunks/Practices'
import { Footerv2 } from '@/components/Footerv2'

const Practices = () => {
  return (
    <>
      <HeroMalvis open={false} />
      <PracticesMalvis />
      <Ccmalvis />
      <Desc />
      <Footerv2 open={false} />
    </>
  )
}

export default Practices
