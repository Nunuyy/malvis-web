// import Button from '@/components/Buttons'
// import TeamCard from '@/components/Card/Team'
import Image from 'next/image'
// import { Container } from '@/components/Layouts'
import { useEffect, useState } from 'react'
// import { useTeam } from '@hooks/useTeam'
// import { Fragment, useEffect, useState } from 'react'
import { Element } from 'react-scroll'
import tw, { styled } from 'twin.macro'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const ProfileMalvis1: React.FC = () => {
  // const [isClass, setClass] = useState<string>()
  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth > 1342) {
  //       setClass('grid-cols-3')
  //     } else if (window.innerWidth > 786) {
  //       setClass('grid-cols-2')
  //     } else if (window.innerWidth < 786) {
  //       setClass('grid-cols-1')
  //     } else if (window.innerWidth > 1024) {
  //       setClass('grid-cols-2')
  //     } else if (window.innerWidth < 1024) {
  //       setClass('grid-cols-1')
  //     } else {
  //       setClass('')
  //     }
  //   }
  //   handleResize()
  //   window.addEventListener('resize', handleResize)
  //   return () => window.removeEventListener('resize', handleResize)
  // }, [])

  // const { dataTeam, isLoadingTeam } = useTeam(`our-teams?populate=*`)
  const Content = styled.div`
    ${tw`items-center justify-between flex-none w-full text-center md:flex md:flex-row`}
  `
  const ContentHead = styled.h1`
    ${tw`mt-20 mb-5 text-3xl font-bold text-malvis md:mt-0 lg:text-4xl`}
  `
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 3000
    })
    const handleResize = () => {
      if (window.innerWidth > 1223) {
        setIsDesktop(true)
      } else {
        setIsDesktop(false)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <>
      <Element name="profile" className="bg-white element">
        <Content>
          <div tw="w-2/5 pt-10 bg-bg-owner hidden md:block bg-no-repeat bg-cover bg-center" data-aos="fade">
            <Image
              unoptimized={true}
              src={'/assets/images/owner1.png'}
              layout="fixed"
              width={isDesktop ? 440 : 400}
              height={isDesktop ? 500 : 400}
              objectFit="contain"
            />
          </div>
          <div tw="w-3/5 hidden md:block" data-aos="fade">
            <ContentHead>PROFILE</ContentHead>
            <p tw="text-justify px-16 text-dark">
              <p tw="text-[#2b2b2b] font-bold mb-5 text-center">Zubet Rizal, S.H.</p>
              Zubet Rizal, S.H., graduated from Gadjah Mada University. Zubet has been working as a corporate lawyer for more
              than 7 years, especially handling employment cases, corporate licensing and private civil cases. Moreover, he
              also has experience in industrial relations and has been a speaker in several workshops about regulations
              employment . Currently, his main focus is to intensify Malvis Attorneys at Law as a Managing Partner and
              another activity. He is a part of Community Kagama Business Law.
            </p>
          </div>
          <div tw="bg-[#d9d9d9] md:hidden block bg-no-repeat bg-cover bg-center " data-aos="fade">
            <Image
              unoptimized={true}
              src={'/assets/images/owner1.png'}
              layout="fixed"
              width={isDesktop ? 540 : 300}
              height={isDesktop ? 510 : 400}
              objectFit="contain"
            />
          </div>
          <div tw="md:hidden block" data-aos="fade">
            <ContentHead>PROFILE</ContentHead>
            <p tw="text-[#2b2b2b] font-bold mb-5 text-center">Reza Satria Kinayungan.S.H, CTL.</p>
            <p tw="text-justify px-5 text-dark pb-20">
              Zubet Rizal, S.H., graduated from Gadjah Mada University. Zubet has been working as a corporate lawyer for more
              than 7 years, especially handling employment cases, corporate licensing and private civil cases. Moreover, he
              also has experience in industrial relations and has been a speaker in several workshops about regulations
              employment . Currently, his main focus is to intensify Malvis Attorneys at Law as a Managing Partner and
              another activity. He is a part of Community Kagama Business Law.
            </p>
          </div>
        </Content>

        {/* <div className={`grid gap-4 mb-24 ${isClass}`}> */}
        {/* {!isLoadingTeam && (
              <>
                {dataTeam?.data.map((data: any, i: number) => (
                  <Fragment key={i}>
                    <TeamCard
                      image={data?.attributes?.photo?.data?.attributes?.url}
                      name={data?.attributes?.name}
                      about={data?.attributes?.position}
                      link={data?.attributes?.lingkedInUrl}
                    />
                    {i == 2 && (
                      <div tw="place-items-center md:order-last lg:order-none p-4 hidden md:flex w-full h-[220px] cursor-default transition ease-in-out delay-100 focus:outline-none hover:scale-110 bg-blue-400 duration-200 rounded-xl">
                        <div className="p-4 text-xl font-medium text-left text-white">
                          <p tw="w-11/12">Accelerate good things with technology</p>
                          <Button
                            text="Meet entire team"
                            variant="secondary"
                            tw="rounded-md px-5 mt-12 font-medium text-base py-2 text-opacity-70"
                            external={true}
                            url="https://wa.link/4l62ek"
                          />
                        </div>
                      </div>
                    )}
                  </Fragment>
                ))}
              </>
            )} */}

        {/* <div tw="place-items-center p-4 flex md:hidden w-full h-[220px] cursor-default transition ease-in-out delay-100 focus:outline-none hover:scale-110 bg-blue-400 duration-200 rounded-xl">
          <div className="p-4 text-xl font-medium text-left text-white">
            <p tw="w-11/12">Accelerate good things with technology</p>
            <Button
              text="Meet entire team"
              variant="secondary"
              tw="rounded-md px-5 mt-12 font-medium text-base py-2 text-opacity-70"
              external={true}
              url="https://wa.link/4l62ek"
            />
          </div>
        </div> */}

        {/* </div> */}
      </Element>
    </>
  )
}
