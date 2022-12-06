import { HeroMalvis, ProfileMalvis, ProfileMalvis1, ProfileMalvis2 } from '@/components/Chunks/Profile'
import { Footerv2 } from '@/components/Footerv2'

const Profile = () => {
  return (
    <>
      <HeroMalvis open={false} />
      <ProfileMalvis />
      <ProfileMalvis1 />
      <ProfileMalvis2 />
      <Footerv2 open={false} />
    </>
  )
}

export default Profile
