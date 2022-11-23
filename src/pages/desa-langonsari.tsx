import { HeroDesa, AboutDesa } from '@/components/Chunks/Desa'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'

const Desa = () => {
  return (
    <>
      <Navbar withScrolled={false} />
      <HeroDesa />
      <AboutDesa />
      <Footer />
    </>
  )
}

export default Desa
