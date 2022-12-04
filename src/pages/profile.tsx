import { HeroMalvis, ProfileMalvis } from '@/components/Chunks/Profile'
import { Footerv2 } from '@/components/Footerv2'

const Profile = () => {
  return (
    <>
      <HeroMalvis open={false} />
      <ProfileMalvis />
      <Footerv2 open={false} />
    </>
  )
}

export default Profile
